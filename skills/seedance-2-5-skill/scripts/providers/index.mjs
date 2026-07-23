import { createAtlasRestExecutor } from "./atlas-rest.mjs";
import { createAtlasCliExecutor } from "./atlas-cli.mjs";

export const MODEL_PROFILES = Object.freeze({
  "seedance-default": Object.freeze({
    image: "bytedance/seedream-v5.0-pro/text-to-image",
    video: Object.freeze({
      t2v: "bytedance/seedance-2.0/text-to-video",
      i2v: "bytedance/seedance-2.0/image-to-video",
      r2v: "bytedance/seedance-2.0/reference-to-video",
    }),
  }),
});

export function resolveModelProfile(profileName = "seedance-default") {
  const profile = MODEL_PROFILES[profileName];
  if (!profile) throw new Error(`unknown model profile: ${profileName}`);
  return profile;
}

export function createExecutor({ config, root, log }) {
  const adapter = config.execution?.adapter || "atlas-rest";
  if (adapter === "atlas-cli") return createAtlasCliExecutor({ config, root, log });
  if (adapter === "atlas-rest") return createAtlasRestExecutor({ config, root, log });
  if (adapter === "auto") {
    log?.("[executor] execution.adapter=auto is retained for compatibility and now resolves to atlas-rest; set atlas-cli explicitly for CLI execution.");
    return createAtlasRestExecutor({ config, root, log });
  }
  if (adapter === "atlas-skill" || adapter === "atlas-mcp") {
    throw new Error(`runner cannot call ${adapter} directly. Use that route from the agent conversation, or set execution.adapter to atlas-rest or atlas-cli.`);
  }
  if (adapter === "manual") {
    throw new Error("manual execution does not submit a runner job; emit the prepared prompts and assets from the agent instead.");
  }
  throw new Error(`unknown execution.adapter: ${adapter}`);
}
