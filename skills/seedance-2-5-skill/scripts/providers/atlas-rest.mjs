import { readFileSync } from "node:fs";
import { basename, resolve } from "node:path";

const POLL_INTERVAL_SECONDS = 2;
const POLL_INTERVAL_MS = POLL_INTERVAL_SECONDS * 1000;

function unwrap(response) {
  return response?.data && response.code !== undefined ? response.data : response;
}

function imageMime(buffer, path) {
  if (buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "image/png";
  if (buffer.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return "image/jpeg";
  if (buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP") return "image/webp";
  throw new Error(`unsupported image format: ${path} (use PNG, JPEG, or WebP)`);
}

function audioMime(path) {
  const suffix = path.toLowerCase().split(".").pop();
  return ({ mp3: "audio/mpeg", wav: "audio/wav", m4a: "audio/mp4", aac: "audio/aac", ogg: "audio/ogg", opus: "audio/ogg", flac: "audio/flac" })[suffix] || "application/octet-stream";
}

function collectModelIds(value, ids = new Set()) {
  if (Array.isArray(value)) {
    for (const entry of value) collectModelIds(entry, ids);
  } else if (value && typeof value === "object") {
    if (typeof value.id === "string") ids.add(value.id);
    if (typeof value.model === "string") ids.add(value.model);
    for (const child of Object.values(value)) collectModelIds(child, ids);
  }
  return ids;
}

export function createAtlasRestExecutor({ config, root, log = console.log }) {
  const execution = config.execution || {};
  const base = execution.base || config.base || "https://api.atlascloud.ai";
  const apiKeyEnv = execution.apiKeyEnv || config.apiKeyEnv || "ATLASCLOUD_API_KEY";
  const requestTimeoutMs = execution.requestTimeoutMs ?? 45_000;
  const key = process.env[apiKeyEnv]
    || process.env.ATLASCLOUD_API_KEY
    || process.env.ATLAS_CLOUD_API_KEY;

  if (!key) {
    throw new Error(
      `no Atlas Cloud API key is visible in this process. Get one at https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills and set ${apiKeyEnv}. `
      + "If it is already configured in a parent process or host application, refresh or restart the execution session so this process inherits it. Do not paste the key into chat.",
    );
  }

  async function request(path, body, { auth = true } = {}) {
    const headers = body ? { "Content-Type": "application/json" } : {};
    if (auth) headers.Authorization = `Bearer ${key}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), requestTimeoutMs);
    let response;
    try {
      response = await fetch(base + path, {
        method: body ? "POST" : "GET",
        headers,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });
    } catch (error) {
      const message = error.name === "AbortError"
        ? `${path} fetch failed: timed out after ${requestTimeoutMs}ms`
        : `${path} fetch failed: ${error.message}`;
      throw new Error(message);
    } finally {
      clearTimeout(timer);
    }
    const text = await response.text();
    let json;
    try { json = JSON.parse(text); } catch { throw new Error(`${path} HTTP ${response.status}: ${text.slice(0, 200)}`); }
    if (!response.ok) throw new Error(`${path} HTTP ${response.status}: ${text.slice(0, 200)}`);
    return unwrap(json);
  }

  async function poll(id, label, maxPollSeconds = 900) {
    for (let elapsed = 0; ; elapsed += POLL_INTERVAL_SECONDS) {
      if (elapsed > maxPollSeconds) {
        throw new Error(`[${label}] local polling window ended after ${maxPollSeconds}s for task ${id}; task status is not a terminal failure, so resume this ID instead of resubmitting`);
      }
      let prediction;
      let error;
      try { prediction = await request(`/api/v1/model/prediction/${id}`); }
      catch (firstError) {
        try { prediction = await request(`/api/v1/model/result/${id}`); }
        catch (secondError) { error = `${firstError.message} | ${secondError.message}`; }
      }
      if (!prediction) {
        if (/HTTP 50[234]|fetch failed|HTTP 404/.test(error)) {
          await new Promise(resolveDelay => setTimeout(resolveDelay, POLL_INTERVAL_MS));
          continue;
        }
        throw new Error(error);
      }
      const status = String(prediction.status || "unknown").toLowerCase();
      if (elapsed % 32 === 0) log(`[${label}] ${status} … ${elapsed}s`);
      if (status === "completed" || status === "succeeded") return prediction;
      if (status === "failed" || status === "timeout" || status === "canceled") {
        throw new Error(`[${label}] ${status}: ${JSON.stringify(prediction.error ?? prediction.meta_info ?? "").slice(0, 300)}`);
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
    if (/^https?:\/\//.test(source)) return source;
    const path = resolve(root, source);
    const buffer = readFileSync(path);
    const mime = /\.(png|jpe?g|webp)$/i.test(path) ? imageMime(buffer, path) : audioMime(path);
    const form = new FormData();
    form.append("file", new Blob([buffer], { type: mime }), basename(path));
    const response = await fetch(`${base}/api/v1/model/uploadMedia`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}` },
      body: form,
    });
    const text = await response.text();
    let json;
    try { json = JSON.parse(text); } catch { throw new Error(`HTTP ${response.status}: ${text.slice(0, 200)}`); }
    const data = unwrap(json);
    const url = data?.download_url || data?.url;
    if (!response.ok || !url) throw new Error(text.slice(0, 300));
    return url;
  }

  async function verifyModels(modelIds) {
    const catalog = await request("/api/v1/models", undefined, { auth: false });
    const available = collectModelIds(catalog);
    const missing = modelIds.filter(model => !available.has(model));
    if (missing.length) throw new Error(`configured model is not in Atlas Cloud's live catalog: ${missing.join(", ")}`);
    log(`[executor] atlas-rest verified ${modelIds.join(", ")}`);
  }

  return {
    id: "atlas-rest",
    maxReferenceAspectRatio: 2.5,
    submitImage: body => request("/api/v1/model/generateImage", body),
    submitVideo: body => request("/api/v1/model/generateVideo", body),
    poll,
    download,
    uploadMedia,
    verifyModels,
  };
}
