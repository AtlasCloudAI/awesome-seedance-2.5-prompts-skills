import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

const POLL_INTERVAL_SECONDS = 2;
const POLL_INTERVAL_MS = POLL_INTERVAL_SECONDS * 1000;

export function resolveAtlasCliCommand(config = {}) {
  const explicit = config.execution?.cliCommand || config.cliCommand || process.env.ATLAS_CLI_COMMAND;
  if (explicit) return explicit;
  const userLocal = join(homedir(), ".local", "bin", "atlas");
  return existsSync(userLocal) ? userLocal : "atlas";
}

function parseJson(text, label) {
  const source = (text || "").trim();
  if (!source) throw new Error(`${label} returned no JSON output`);
  try { return JSON.parse(source); }
  catch { throw new Error(`${label} returned invalid JSON: ${source.slice(0, 300)}`); }
}

function prediction(value) {
  const data = value?.data && typeof value.data === "object" ? value.data : value;
  const outputs = data?.outputs ?? data?.output_urls ?? data?.urls ?? data?.output;
  return {
    ...data,
    id: data?.id ?? data?.prediction_id,
    outputs: Array.isArray(outputs) ? outputs : (outputs ? [outputs] : undefined),
  };
}

function valueArg(key, value) {
  const encoded = typeof value === "string" ? value : JSON.stringify(value);
  return `${key}=${encoded}`;
}

function toCliMedia(value, root) {
  if (typeof value !== "string") throw new Error("CLI media input must be a string");
  if (/^(https?:|data:|@)/.test(value)) return value;
  const path = resolve(root, value);
  if (!existsSync(path)) throw new Error(`CLI media file not found: ${path}`);
  return `@${path}`;
}

export function atlasCliIsAuthenticated(command = "atlas") {
  const version = spawnSync(command, ["version", "--json"], { encoding: "utf8" });
  if (version.error || version.status !== 0) return false;
  const auth = spawnSync(command, ["auth", "status", "--json"], { encoding: "utf8" });
  return !auth.error && auth.status === 0;
}

export function atlasCliIsAvailable(command = "atlas") {
  const version = spawnSync(command, ["version", "--json"], { encoding: "utf8" });
  return !version.error && version.status === 0;
}

function atlasApiKey(config) {
  const apiKeyEnv = config.execution?.apiKeyEnv || config.apiKeyEnv || "ATLASCLOUD_API_KEY";
  return process.env[apiKeyEnv] || process.env.ATLASCLOUD_API_KEY || process.env.ATLAS_CLOUD_API_KEY;
}

export function atlasCliCanRun(config = {}) {
  const command = resolveAtlasCliCommand(config);
  return atlasCliIsAvailable(command) && (atlasCliIsAuthenticated(command) || Boolean(atlasApiKey(config)));
}

export function createAtlasCliExecutor({ config, root, log = console.log }) {
  const command = resolveAtlasCliCommand(config);

  if (!atlasCliIsAvailable(command)) {
    throw new Error(`atlas-cli is unavailable (${command}). Install it, then run \`${command} auth login\`, or use execution.adapter: \"atlas-rest\".`);
  }
  if (!atlasCliIsAuthenticated(command)) {
    const key = atlasApiKey(config);
    if (!key) throw new Error(`atlas-cli is not logged in and no Atlas API key is available. Run \`${command} auth login\`, or use execution.adapter: \"atlas-rest\".`);
    const login = spawnSync(command, ["auth", "login", "--token", key, "--json"], { encoding: "utf8", env: process.env });
    if (login.error || login.status !== 0) {
      const detail = (login.stderr || login.stdout || "").trim().slice(0, 300);
      throw new Error(`atlas-cli non-interactive login failed${detail ? `: ${detail}` : ""}`);
    }
    if (!atlasCliIsAuthenticated(command)) throw new Error("atlas-cli login did not establish an authenticated session");
    log("[executor] atlas-cli authenticated with the configured API key");
  }

  function run(args, label) {
    const result = spawnSync(command, [...args, "--json"], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      env: process.env,
    });
    if (result.error) throw new Error(`${label} failed: ${result.error.message}`);
    if (result.status !== 0) {
      const detail = (result.stderr || result.stdout || "").trim().slice(0, 500);
      throw new Error(`${label} failed${detail ? `: ${detail}` : ""}`);
    }
    return parseJson(result.stdout, label);
  }

  function buildGenerateArgs(kind, body) {
    if (!body?.model || !body?.prompt) throw new Error(`atlas-cli ${kind} generation requires model and prompt`);
    const args = ["generate", kind, body.model, "-p", body.prompt, "--no-wait", "--no-download"];
    if (body.duration !== undefined) args.push("--duration", String(body.duration));
    if (body.resolution) args.push("--resolution", body.resolution);
    if (body.ratio) args.push("--aspect-ratio", body.ratio);
    if (body.size) args.push("--size", String(body.size).replace("*", "x"));
    if (body.image) args.push("--image", toCliMedia(body.image, root));
    if (body.last_image) args.push("--end-image", toCliMedia(body.last_image, root));
    for (const image of body.reference_images || []) args.push("--images", toCliMedia(image, root));
    if (body.reference_audios?.length === 1) args.push("--audio", toCliMedia(body.reference_audios[0], root));

    const consumed = new Set([
      "model", "prompt", "duration", "resolution", "ratio", "size", "image",
      "last_image", "reference_images", "reference_audios",
    ]);
    for (const [key, value] of Object.entries(body)) {
      if (consumed.has(key) || value === undefined) continue;
      args.push("--param", valueArg(key, value));
    }
    if (body.reference_audios?.length > 1) {
      args.push("--param", valueArg("reference_audios", body.reference_audios.map(value => toCliMedia(value, root))));
    }
    return args;
  }

  async function poll(id, label, maxPollSeconds = 900) {
    for (let elapsed = 0; ; elapsed += POLL_INTERVAL_SECONDS) {
      if (elapsed > maxPollSeconds) {
        throw new Error(`[${label}] local polling window ended after ${maxPollSeconds}s for task ${id}; task status is not a terminal failure, so resume this ID instead of resubmitting`);
      }
      const result = prediction(run(["generate", "get", id, "--no-download"], `atlas generate get ${id}`));
      const status = String(result.status || "unknown").toLowerCase();
      if (elapsed % 32 === 0) log(`[${label}] ${status} … ${elapsed}s`);
      if (status === "completed" || status === "succeeded") return result;
      if (status === "failed" || status === "timeout" || status === "canceled") {
        throw new Error(`[${label}] ${status}: ${JSON.stringify(result.error ?? result.meta_info ?? "").slice(0, 300)}`);
      }
      await new Promise(resolveDelay => setTimeout(resolveDelay, POLL_INTERVAL_MS));
    }
  }

  async function download(url, destination) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`download HTTP ${response.status}`);
    const { writeFileSync } = await import("node:fs");
    writeFileSync(destination, Buffer.from(await response.arrayBuffer()));
  }

  async function uploadMedia(source) {
    return /^https?:\/\//.test(source) ? source : toCliMedia(source, root);
  }

  async function verifyModels(modelIds) {
    for (const model of modelIds) run(["models", "get", model], `atlas models get ${model}`);
    log(`[executor] atlas-cli verified ${modelIds.join(", ")}`);
  }

  return {
    id: "atlas-cli",
    maxReferenceAspectRatio: 2.5,
    submitImage: body => prediction(run(buildGenerateArgs("image", body), "atlas generate image")),
    submitVideo: body => prediction(run(buildGenerateArgs("video", body), "atlas generate video")),
    poll,
    download,
    uploadMedia,
    verifyModels,
  };
}
