// Seedance video workflow — provider-adapted Atlas executor + ffmpeg draft stitcher.
// Modes:
//   "grid"       (default): crop a storyboard; one independent I2V clip per panel.
//   "shot-pairs": independent I2V clips from start/end keyframe pairs; ideal for planned cuts.
//   "reference": role-specific R2V reference images (generated or local files).
//   "chain": one continuous action, with the previous generated tail as the next start image.
//
// Usage:
//   node generate.mjs <config.json>
//   GRID_ONLY=1 node generate.mjs <config.json>   # Generate grid and crop frames only; display grid.png and inspect it before video work.
//   CLIPS_MAX=1 node generate.mjs <config.json>   # In grid mode, run only the first N clips as a quality gate.
// Requires Node 18+, ffmpeg, and ffprobe. Execution adapters live in scripts/providers/.
import { readFileSync, mkdirSync, existsSync, copyFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { createExecutor, resolveModelProfile } from "./providers/index.mjs";

const CFG_PATH = resolve(process.argv[2] || "./config.json");
const CFG = JSON.parse(readFileSync(CFG_PATH, "utf8"));
const ROOT = dirname(CFG_PATH);
const DIR = resolve(ROOT, CFG.outDir || "build");
const FFMPEG = process.env.FFMPEG_PATH || CFG.ffmpeg || "ffmpeg";
const FFPROBE = process.env.FFPROBE_PATH || CFG.ffprobe || "ffprobe";
const MODE = CFG.mode || "grid";
const PROFILE = resolveModelProfile(CFG.modelProfile);
const EXECUTOR = createExecutor({ config: CFG, root: ROOT, log: console.log });
const IMG_MODEL = CFG.grid?.model || PROFILE.image;
const VID_MODEL = CFG.video?.model || PROFILE.video.i2v;
const V = { resolution: "1080p", ratio: "9:16", duration: 5, generate_audio: true, watermark: false, ...CFG.video };
const AUDIO = CFG.audio || {};
const AUDIO_OUTPUT_RETRIES = Number.isInteger(AUDIO.outputRetries) ? Math.max(0, AUDIO.outputRetries) : 2;
const MAX_POLL_SECONDS = CFG.maxPollSeconds ?? 900;
const RES = { "9:16": [1080, 1920], "16:9": [1920, 1080], "1:1": [1080, 1080], "3:4": [1080, 1440], "4:3": [1440, 1080], "21:9": [2520, 1080] };
const [OW, OH] = RES[V.ratio] || [1080, 1920];
const pad = i => String(i).padStart(2, "0");

const sleep = ms => new Promise(r => setTimeout(r, ms));
function imageMime(buffer, path) {
  if (buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "image/png";
  if (buffer.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return "image/jpeg";
  if (buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP") return "image/webp";
  throw new Error(`unsupported image format: ${path} (use PNG, JPEG, or WebP)`);
}
function dataUrl(path) {
  const buffer = readFileSync(path);
  return `data:${imageMime(buffer, path)};base64,${buffer.toString("base64")}`;
}
function ff(args, label) { const r = spawnSync(FFMPEG, args, { encoding: "utf8", maxBuffer: 64e6 }); if (r.status !== 0) throw new Error(`${label} ffmpeg:\n${(r.stderr || "").split("\n").slice(-12).join("\n")}`); }
function probeWH(f) { const r = spawnSync(FFPROBE, ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", f], { encoding: "utf8" }); const [w, h] = (r.stdout || "").trim().split(",").map(Number); if (!w || !h) throw new Error("ffprobe failed on " + f); return [w, h]; }
function hasAudio(f) { const r = spawnSync(FFPROBE, ["-v", "error", "-select_streams", "a:0", "-show_entries", "stream=index", "-of", "csv=p=0", f], { encoding: "utf8" }); return r.status === 0 && Boolean((r.stdout || "").trim()); }
function assertReferenceAspect(path) {
  if (!EXECUTOR.maxReferenceAspectRatio) return;
  const [width, height] = probeWH(path);
  const aspect = width / height;
  const maximum = EXECUTOR.maxReferenceAspectRatio;
  if (aspect > maximum || aspect < 1 / maximum) {
    throw new Error(`reference image aspect ratio ${aspect.toFixed(2)} is outside Atlas Seedance R2V's supported range 0.40–${maximum}. Re-layout the storyboard while preserving reading order before submitting it.`);
  }
}

function announceStoryboardPreview(path) {
  const previewPath = resolve(path);
  console.log(`\n[storyboard-preview] ${previewPath}`);
  console.log("[storyboard-preview] Display this image in the host UI as an intermediate state; inspect it before submitting video.");
}

async function uploadAudioReference(ref, index) {
  if (typeof ref === "string" && /^https?:\/\//.test(ref)) return ref;
  const source = typeof ref === "string" ? ref : ref?.file || ref?.url;
  if (!source) throw new Error(`input audio reference ${index} needs file or url`);
  if (/^https?:\/\//.test(source)) return source;
  const path = resolve(ROOT, source);
  if (!existsSync(path)) throw new Error(`input audio reference ${index} file does not exist: ${path}`);
  try {
    return await EXECUTOR.uploadMedia(path);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`input audio reference ${index} upload failed: ${message}`);
  }
}

async function loadAudioReferences() {
  const refs = AUDIO.references || [];
  if (!Array.isArray(refs)) throw new Error("audio.references must be an array");
  return Promise.all(refs.map((ref, i) => uploadAudioReference(ref, i + 1)));
}

function selectedAudioReferences(segment, uploaded) {
  if (!uploaded.length) return [];
  const selected = segment?.audioRefs;
  if (selected === undefined) return uploaded;
  if (!Array.isArray(selected)) throw new Error("segment.audioRefs must be an array of audio-reference indexes");
  return selected.map(index => {
    if (!Number.isInteger(index) || !uploaded[index - 1]) throw new Error(`invalid audio-reference index: ${index}`);
    return uploaded[index - 1];
  });
}

function isInputAudioFailure(message) {
  return /(reference_audios?|input audio|audio (input|reference|upload|url|format|decode)|(?:invalid|unsupported|malformed).{0,40}audio)/i.test(message);
}
function isOutputAudioFailure(message) {
  return /^\[audio-output\]|\b(audio|sound|voice|speech|dialogue|music)\b/i.test(message);
}

function resumePredictionIdFor(label, explicitId) {
  const id = explicitId || CFG.execution?.resumePredictionIds?.[label];
  if (id !== undefined && (typeof id !== "string" || !id.trim())) {
    throw new Error(`execution.resumePredictionIds.${label} must be a non-empty prediction ID`);
  }
  return id;
}

function taskRecoveryError(label, id, error) {
  const message = error instanceof Error ? error.message : String(error);
  return new Error(
    `${message} Preserve prediction ${id}; resume it with execution.resumePredictionIds.${label}. `
    + "Do not submit a replacement unless the task reaches a terminal failure and an explicit retry decision is made.",
  );
}

async function generateImage(body, label, explicitResumeId) {
  const resumeId = resumePredictionIdFor(label, explicitResumeId);
  let id;
  try {
    id = resumeId || (await EXECUTOR.submitImage(body)).id;
    console.log(resumeId ? `[${label}] resuming ${id}` : `[${label}] submitted ${id}`);
    const result = await EXECUTOR.poll(id, label, MAX_POLL_SECONDS);
    if (!result.outputs?.[0]) throw new Error(`[${label}] completed without an image output`);
    return result;
  } catch (error) {
    if (!id) throw error;
    throw taskRecoveryError(label, id, error);
  }
}

async function generateVideo(body, label, out, last, resumePredictionId) {
  const tries = V.generate_audio ? AUDIO_OUTPUT_RETRIES + 1 : 1;
  const hasReferenceAudio = Array.isArray(body.reference_audios) && body.reference_audios.length > 0;
  const configuredResumeId = resumePredictionIdFor(label, resumePredictionId);
  for (let attempt = 1; attempt <= tries; attempt++) {
    let id;
    try {
      id = configuredResumeId && attempt === 1
        ? configuredResumeId
        : (await EXECUTOR.submitVideo(body)).id;
      console.log(configuredResumeId && attempt === 1
        ? `[${label}] resuming ${id}`
        : `[${label}] submitted ${id}${attempt > 1 ? ` (native-audio retry ${attempt - 1}/${AUDIO_OUTPUT_RETRIES})` : ""}`);
      const d = await EXECUTOR.poll(id, label, MAX_POLL_SECONDS);
      if (!d.outputs?.[0]) throw new Error(`[${label}] model returned no video output`);
      await EXECUTOR.download(d.outputs[0], out);
      if (V.generate_audio && !hasAudio(out)) throw new Error(`[audio-output] ${label} video has no native audio track`);
      if (last && d.outputs[1]) await EXECUTOR.download(d.outputs[1], last);
      return d;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (hasReferenceAudio && isInputAudioFailure(message)) {
        throw new Error(`[${label}] input audio reference failed; check audio.references file, format, accessibility, or segment audioRefs. Original error: ${message}`);
      }
      if (V.generate_audio && isOutputAudioFailure(message) && attempt < tries) {
        console.warn(`[${label}] native audio output failed; regenerating with generate_audio:true (${attempt}/${AUDIO_OUTPUT_RETRIES})`);
        continue;
      }
      if (V.generate_audio && isOutputAudioFailure(message)) {
        throw new Error(`[${label}] native audio output failed after ${AUDIO_OUTPUT_RETRIES} retries; it was not downgraded to silent video. Original error: ${message}`);
      }
      if (!id) throw error;
      throw taskRecoveryError(label, id, error);
    }
  }
}

async function genGridAndSplit(b) {
  const { rows, cols } = CFG.grid;
  const N = rows * cols;
  if (!existsSync(`${b}/grid.png`)) {
    const d = await generateImage(
      { model: IMG_MODEL, prompt: CFG.grid.prompt, size: CFG.grid.size || "1728*2304" },
      "grid",
      CFG.grid.resumePredictionId,
    );
    await EXECUTOR.download(d.outputs[0], `${b}/grid.png`);
    console.log(`[grid] saved`);
  } else console.log("[grid] cached — skip");
  announceStoryboardPreview(`${b}/grid.png`);
  const [gw, gh] = probeWH(`${b}/grid.png`);
  const cw = Math.floor(gw / cols), ch = Math.floor(gh / rows);
  for (let i = 0; i < N; i++) {
    const f = `${b}/frame_${pad(i + 1)}.png`;
    if (existsSync(f)) continue;
    const x = (i % cols) * cw, y = Math.floor(i / cols) * ch;
    ff(["-y", "-i", `${b}/grid.png`, "-vf", `crop=${cw}:${ch}:${x}:${y}`, f], `crop${i + 1}`);
    console.log(`[crop] frame_${pad(i + 1)} (${cw}x${ch} @ ${x},${y})`);
  }
  return N;
}

async function genRefs(b) {
  // Generate or copy each local reference image to ref_01..N.png with cache protection.
  for (let i = 0; i < CFG.refs.length; i++) {
    const f = `${b}/ref_${pad(i + 1)}.png`;
    if (existsSync(f)) { console.log(`[ref${i + 1}] cached — skip`); continue; }
    if (CFG.refs[i].file) {
      const source = resolve(ROOT, CFG.refs[i].file);
      if (!existsSync(source)) throw new Error(`ref${i + 1} file not found: ${source}`);
      copyFileSync(source, f);
      console.log(`[ref${i + 1}] copied local file`);
      continue;
    }
    const label = `ref${i + 1}`;
    const d = await generateImage(
      { model: IMG_MODEL, prompt: CFG.refs[i].prompt, size: CFG.refs[i].size || "1328*1776" },
      label,
      CFG.refs[i].resumePredictionId,
    );
    await EXECUTOR.download(d.outputs[0], f);
    console.log(`[${label}] saved`);
  }
}

function stitch(b, clips, trimFirst) {
  // trimFirst[i] is the number of opening frames removed to avoid a duplicated seam; zero keeps all frames.
  const keepAudio = V.generate_audio;
  if (keepAudio && !clips.every(hasAudio)) {
    throw new Error("[stitch] a segment has no native audio track; stitching stopped rather than silently downgrading to a silent output. Regenerate that segment.");
  }
  const parts = clips.map((c, i) => {
    const tr = trimFirst[i] ? `,trim=start_frame=${trimFirst[i]},setpts=PTS-STARTPTS` : "";
    return `[${i}:v]scale=${OW}:${OH},fps=30,setsar=1${tr}[v${i}]`;
  }).join(";");
  const audioParts = keepAudio ? clips.map((_, i) => {
    const tr = trimFirst[i] ? `atrim=start=${trimFirst[i] / 30},` : "";
    return `[${i}:a]${tr}aformat=sample_rates=48000:channel_layouts=stereo,asetpts=PTS-STARTPTS[a${i}]`;
  }).join(";") : "";
  const cat = keepAudio
    ? clips.map((_, i) => `[v${i}][a${i}]`).join("") + `concat=n=${clips.length}:v=1:a=1[v][a]`
    : clips.map((_, i) => `[v${i}]`).join("") + `concat=n=${clips.length}:v=1:a=0[v]`;
  const args = ["-y"];
  for (const c of clips) args.push("-i", c);
  args.push("-filter_complex", [parts, audioParts, cat].filter(Boolean).join(";"), "-map", "[v]");
  if (keepAudio) args.push("-map", "[a]", "-c:a", "aac", "-b:a", "192k");
  args.push("-c:v", "libx264", "-crf", "18", "-preset", "medium", "-movflags", "+faststart", `${b}/final.mp4`);
  ff(args, "stitch");
}

function cleanupAccidentalOverlay(b) {
  const legacy = CFG.delogo;
  const filter = CFG.cleanupOverlay?.filter || (typeof legacy === "string" ? legacy : undefined);
  if (!filter) return `${b}/final.mp4`;
  ff(["-y", "-i", `${b}/final.mp4`, "-vf", `delogo=${filter}`, "-c:v", "libx264", "-crf", "20", "-preset", "veryfast", "-c:a", "copy", "-movflags", "+faststart", `${b}/final_clean.mp4`], "cleanup-overlay");
  return `${b}/final_clean.mp4`;
}

async function main() {
  mkdirSync(DIR, { recursive: true });
  const b = DIR;
  const requiredModels = [IMG_MODEL];
  if (MODE === "reference") requiredModels.push(CFG.video?.refModel || PROFILE.video.r2v);
  else if (MODE === "chain") requiredModels.push(VID_MODEL, CFG.video?.t2vModel || PROFILE.video.t2v);
  else requiredModels.push(VID_MODEL);
  if (CFG.execution?.verifyModels !== false) await EXECUTOR.verifyModels([...new Set(requiredModels)]);
  console.log(`[executor] ${EXECUTOR.id}; model profile ${CFG.modelProfile || "seedance-default"}`);
  if (AUDIO.references !== undefined && !Array.isArray(AUDIO.references)) throw new Error("audio.references must be an array");
  if (AUDIO.references?.length && MODE !== "reference") throw new Error("audio.references is supported only in reference-to-video mode; use native-audio prompt markers for other modes.");
  const N = CFG.grid ? await genGridAndSplit(b) : 0;   // Grid is optional: a text-to-video chain needs none.
  if (CFG.grid && process.env.GRID_ONLY) {
    console.log("[grid-only] Grid and frame crops complete. Display the storyboard-preview image above; inspect it before running video generation separately.");
    return;
  }
  if (CFG.refs) await genRefs(b);                      // Reference mode generates the role-specific images first.
  if (process.env.REFS_ONLY) { console.log("[refs-only] References generated; inspect them before video work."); return; }
  if (MODE === "reference") CFG.refs.forEach((_, index) => assertReferenceAspect(`${b}/ref_${pad(index + 1)}.png`));
  const audioRefs = MODE === "reference" ? await loadAudioReferences() : [];

  if (MODE === "reference") {
    // ── Multi-reference video: hand, setting, style, finished state, and opening frame may be combined. ──
    const segs = CFG.segments;
    if (!Array.isArray(segs) || !segs.length) throw new Error("reference mode needs segments[]");
    const REFMODEL = CFG.video.refModel || PROFILE.video.r2v;
    const nSeg = process.env.SEGS_MAX ? +process.env.SEGS_MAX : segs.length;
    for (let i = 0; i < nSeg; i++) {
      const s = segs[i];
      const out = `${b}/seg${i + 1}.mp4`, last = `${b}/seg${i + 1}_last.png`;
      if (existsSync(out)) { console.log(`[seg${i + 1}] cached — skip`); continue; }
      const refImgs = (s.refs || CFG.refs.map((_, k) => k + 1)).map(idx => dataUrl(`${b}/ref_${pad(idx)}.png`));
      if (s.chainPrevAsRef && i > 0 && existsSync(`${b}/seg${i}_last.png`)) refImgs.push(dataUrl(`${b}/seg${i}_last.png`)); // Prior tail frame is an extra reference for a deliberate continuation.
      const body = { model: REFMODEL, prompt: s.prompt + (CFG.styleSuffix || ""), reference_images: refImgs, duration: s.duration || V.duration, resolution: V.resolution, ratio: V.ratio, generate_audio: V.generate_audio, watermark: V.watermark, return_last_frame: true };
      const segmentAudioRefs = selectedAudioReferences(s, audioRefs);
      if (segmentAudioRefs.length) body.reference_audios = segmentAudioRefs;
      const d = await generateVideo(body, `seg${i + 1}`, out, last, s.resumePredictionId);
      console.log(`[seg${i + 1}] saved (tokens ${d.completion_tokens})`);
    }
    if (!segs.every((_, i) => existsSync(`${b}/seg${i + 1}.mp4`))) { console.log("[stitch] Not all segments are present; skipping."); return; }
    stitch(b, segs.map((_, i) => `${b}/seg${i + 1}.mp4`), segs.map(() => 0)); // Independent segments use hard cuts.
  } else if (MODE === "shot-pairs") {
    // ── Start/end-frame I2V: every segment is independent for hard or match cuts. ──
    if (!CFG.grid) throw new Error("shot-pairs mode needs grid as the keyframe source");
    const segs = CFG.segments;
    if (!Array.isArray(segs) || !segs.length) throw new Error("shot-pairs mode needs segments[]");
    const nSeg = process.env.SEGS_MAX ? +process.env.SEGS_MAX : segs.length;
    for (let i = 0; i < nSeg; i++) {
      const s = segs[i];
      if (!Number.isInteger(s.first)) throw new Error(`shot-pairs segment ${i + 1} needs a first keyframe index`);
      const out = `${b}/shot${i + 1}.mp4`;
      if (existsSync(out)) { console.log(`[shot${i + 1}] cached — skip`); continue; }
      const body = { model: VID_MODEL, prompt: s.prompt + (CFG.styleSuffix || ""), image: dataUrl(`${b}/frame_${pad(s.first)}.png`), duration: s.duration || V.duration, resolution: V.resolution, ratio: V.ratio, generate_audio: V.generate_audio, watermark: V.watermark };
      if (Number.isInteger(s.last)) body.last_image = dataUrl(`${b}/frame_${pad(s.last)}.png`);
      const d = await generateVideo(body, `shot${i + 1}`, out);
      console.log(`[shot${i + 1}] saved (tokens ${d.completion_tokens})`);
    }
    if (!segs.every((_, i) => existsSync(`${b}/shot${i + 1}.mp4`))) { console.log("[stitch] Not all segments are present; skipping."); return; }
    stitch(b, segs.map((_, i) => `${b}/shot${i + 1}.mp4`), segs.map(() => 0));
  } else if (MODE === "chain") {
    // ── Chained segments: use the prior real tail only for one uninterrupted action. ──
    // Segment source: t2v (no image), i2v-from-grid (keyframe), or i2v-chain (prior real tail).
    const segs = CFG.segments;
    if (!Array.isArray(segs) || !segs.length) throw new Error("chain mode needs segments[]");
    const T2V = CFG.video.t2vModel || PROFILE.video.t2v;
    const nSeg = process.env.SEGS_MAX ? +process.env.SEGS_MAX : segs.length;
    const trim = segs.map((_, i) => (i === 0 ? 0 : (CFG.seamTrimFrames ?? 1))); // Remove duplicate opening frames from later segments.
    for (let i = 0; i < nSeg; i++) {
      const s = segs[i];
      const out = `${b}/seg${i + 1}.mp4`, last = `${b}/seg${i + 1}_last.png`;
      if (existsSync(out)) { console.log(`[seg${i + 1}] cached — skip`); continue; }
      const isT2V = s.t2v || (i === 0 && !s.first && !CFG.grid); // A first segment without grid or first keyframe is text-to-video.
      const body = { prompt: s.prompt + (CFG.styleSuffix || ""), duration: s.duration || V.duration, resolution: V.resolution, ratio: V.ratio, generate_audio: V.generate_audio, watermark: V.watermark, return_last_frame: true };
      if (isT2V) {
        body.model = T2V;
      } else {
        body.model = VID_MODEL;
        // Start frame: use prior real tail for a continuous action; otherwise use the independent s.first keyframe.
        body.image = dataUrl((i > 0 && s.chain !== false) ? `${b}/seg${i}_last.png` : `${b}/frame_${pad(s.first)}.png`);
        if (s.last && CFG.grid) body.last_image = dataUrl(`${b}/frame_${pad(s.last)}.png`); // Anchor the segment endpoint to a grid keyframe.
      }
      const d = await generateVideo(body, `seg${i + 1}`, out, last);
      if (!d.outputs[1]) throw new Error(`segment ${i + 1} has no tail frame (outputs[1]); cannot chain`);
      console.log(`[seg${i + 1}] saved (tokens ${d.completion_tokens})`);
    }
    if (!segs.every((_, i) => existsSync(`${b}/seg${i + 1}.mp4`))) { console.log("[stitch] Not all segments are present; skipping."); return; }
    stitch(b, segs.map((_, i) => `${b}/seg${i + 1}.mp4`), trim);
  } else {
    // ── Grid-to-clips: one short clip per panel, assembled as a hard-cut montage. ──
    if (!Array.isArray(CFG.shots) || CFG.shots.length !== N) throw new Error(`grid mode needs shots.length to equal rows*cols (${N})`);
    const nClips = process.env.CLIPS_MAX ? +process.env.CLIPS_MAX : N;
    for (let i = 0; i < nClips; i++) {
      const out = `${b}/clip${i + 1}.mp4`;
      if (existsSync(out)) { console.log(`[clip${i + 1}] cached — skip`); continue; }
      const d = await generateVideo({ model: VID_MODEL, prompt: CFG.shots[i] + (CFG.styleSuffix || ""), image: dataUrl(`${b}/frame_${pad(i + 1)}.png`), resolution: V.resolution, ratio: V.ratio, duration: V.duration, generate_audio: V.generate_audio, watermark: V.watermark }, `clip${i + 1}`, out);
      console.log(`[clip${i + 1}] saved (tokens ${d.completion_tokens})`);
    }
    if (!Array.from({ length: N }, (_, i) => existsSync(`${b}/clip${i + 1}.mp4`)).every(Boolean)) { console.log("[stitch] Not all clips are present; skipping."); return; }
    stitch(b, Array.from({ length: N }, (_, i) => `${b}/clip${i + 1}.mp4`), Array(N).fill(0));
  }

  const finalPath = cleanupAccidentalOverlay(b);
  console.log(`\nDONE → ${finalPath}`);
}
main().catch(e => { console.error("FAILED:", e.message); process.exit(1); });
