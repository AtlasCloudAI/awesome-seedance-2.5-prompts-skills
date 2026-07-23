# Atlas execution adapters

Creative planning and the model profile are independent from the execution
channel. Default profile: Seedream 5.0 Pro for stills and Seedance 2.0 for
video. Verify that a chosen model supports the required route before a billable
generation.

## Default agent route

In an agent conversation, the **Atlas Cloud Skill** is the default direct
generation route. Use it to discover models, inspect parameters, upload local
assets, submit image or video generation, poll, and retrieve results. Report
`Execution: atlas-skill` only when the Skill actually submitted the job.
After submission, repeat the Skill's prediction-result step with the same ID
every 2 seconds until a terminal state is returned.

If it is unavailable, help install it before choosing another route:

```bash
npx skills add AtlasCloudAI/atlas-cloud-skills
```

Then refresh the agent's Skill registry if the host requires it.

## Explicit alternatives

| Choice | Use it when | Availability check |
|---|---|---|
| `atlas-skill` | Default for an interactive agent generation | The Atlas Cloud Skill can submit media in this client |
| `atlas-mcp` | The user explicitly selects MCP | Atlas MCP generation tools are exposed in the current client |
| `atlas-cli` | The user explicitly selects terminal, script, CI, or batch execution | `atlas auth status`, then `atlas models get` |
| `atlas-rest` | The bundled Node runner or a controlled compatibility run | `ATLASCLOUD_API_KEY` and live model verification |
| `manual` | No authenticated executor is available | Return prompts, model IDs, and asset list only |

The MCP server does not own a background polling loop. On the `atlas-mcp`
route, the agent must call `atlas_get_prediction` with the same prediction ID
every 2 seconds until a terminal state is returned.

Do not say that a Node runner invoked MCP or an agent Skill. They are
agent-level routes. Do not let a terminal runner silently choose the CLI merely
because it is installed.

## API key discovery and setup

Check credentials in the process that will actually submit the task. For the
REST runner, use this order:

1. `process.env.ATLASCLOUD_API_KEY`
2. `process.env.ATLAS_CLOUD_API_KEY` as a compatibility alias

Do not infer Atlas credentials from a different provider, plugin, or process.
Each execution channel can have an independent credential scope.

If no key is visible, direct the user to
`https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills`.
Do not request or print the key in
chat. Offer either a current-shell setup:

```bash
export ATLASCLOUD_API_KEY="<your-key>"
```

or the host application's secure environment or secret settings. Refresh or
restart the execution session after changing persistent configuration when
required. If the key exists in a parent or host configuration but the submitting
process cannot see it, report an environment-scope mismatch and use a process
that receives the configured environment. Do not claim that the user has no key.

## Bundled runner contract

`scripts/generate.mjs` implements only `atlas-rest` and explicit `atlas-cli`.
It defaults to `atlas-rest` when `execution.adapter` is absent. The legacy value
`"auto"` remains accepted but resolves to `atlas-rest`; it no longer probes or
selects the CLI. This prevents a local installation from changing a user's
execution path or billing destination.

```json
{
  "execution": {
    "adapter": "atlas-rest",
    "apiKeyEnv": "ATLASCLOUD_API_KEY",
    "verifyModels": true
  },
  "modelProfile": "seedance-default"
}
```

Set `adapter` to `atlas-cli` only when the CLI route was explicitly selected.
`atlas-skill` and `atlas-mcp` are intentionally rejected by the Node runner so
the agent can execute them directly rather than misreporting the channel.

For an R2V job, keep the submitted storyboard image within the live provider's
accepted reference-image constraints. If a board exceeds a provider constraint,
re-layout the same ordered panels; do not change the intended output frame
ratio as a workaround.

If a submitted runner task loses its local polling process, set a segment's
prediction ID under `execution.resumePredictionIds` using its stage key, for
example:

```json
{
  "execution": {
    "resumePredictionIds": {
      "grid": "existing-image-prediction-id",
      "seg1": "existing-video-prediction-id"
    }
  }
}
```

The runner resumes polling and download rather than submitting a second
billable task. Active states are `starting`, `queued`, `pending`, and
`processing`; successful states are `completed` and `succeeded`; terminal
failure states are `failed`, `timeout`, and `canceled`. Missing inference time,
an expired local polling window, an interrupted turn, or a temporary query
failure never authorizes a replacement task. Only an explicit retry decision
after a terminal failure may create a new prediction.

All four Atlas execution routes use a 2-second status-query interval in this
workflow. The agent owns the loop for `atlas-skill` and `atlas-mcp`; the MCP
operation is `atlas_get_prediction`. The bundled REST and CLI adapters enforce
the interval in code. Their progress logs are still emitted every 32 seconds,
and the default local polling window remains 900 seconds. This workflow-level
rule takes precedence over a generic lower-level example with a different
cadence.

## CLI route

When the user explicitly selects the CLI and it is not installed, use the
official installer and then authenticate:

```bash
curl -fsSL https://raw.githubusercontent.com/AtlasCloudAI/cli/main/install.sh | sh
atlas auth login
```

Verify the selected model before generation:

```bash
atlas models search seedance --type video --json
atlas models get <model-id> --json
atlas generate cost video <model-id> -p "<prompt>" --json
```

The CLI adapter uses `atlas generate image|video <model> -p <prompt>` with
non-blocking submission and polling. Local media is passed as `@/absolute/path`;
data URLs and remote URLs are passed directly. It maps images, references,
start/end frames, duration, resolution, ratio, audio, and additional model
parameters.
