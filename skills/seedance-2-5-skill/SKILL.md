---
name: seedance-2-5-skill
description: >-
  Plan and generate controllable Seedance video using Seedream 5.0 Pro
  storyboards and Seedance 2.0 today, with a Seedance 2.5 route when available.
  Use for consistent people, products, objects, food, or scenes; storyboard-to-
  video; reference-to-video; first-and-last-frame image-to-video; extensions;
  and Atlas Cloud media generation.
---

# Seedance 2.5 Skill

## Language route

- For an English request, follow this file and the `*.md` references.
- For a Chinese request, read [the Chinese workflow](references/workflow.zh-CN.md)
  first, then use the matching `*.zh-CN.md` reference files.
- Keep model IDs, JSON keys, commands, media placeholders, and native-audio
  symbols exactly as code. Do not translate them.

Do not force every request through one image-grid pipeline. Choose the video
route first, then enable only the preparation modules the job needs.

## 1. Choose the creative route

| Need | Route | Inputs | Result |
|---|---|---|---|
| One short, simple scene | T2V | Text prompt | One self-contained shot |
| A multi-shot sequence with readable panels | R2V storyboard | One complete storyboard image | One request turns panel order into a continuous video |
| A clip controlled by people, product, scene, or style assets | R2V asset references | A small role-specific asset pack | One clip built from those references |
| A shot with an exact beginning and ending | I2V shot pair | Start and end keyframes | One independently reviewable shot |
| An uninterrupted action exceeding the supported duration | Extend / chain | Previous generated tail frame and next prompt | Continuation of the same shot |

Use Seedance 2.0 as the executable default. Offer a Seedance 2.5 whole-short
route only when the selected provider exposes that model and its actual limits.

### Storyboard or individual keyframes

- Use the **whole storyboard image in one R2V request** by default whenever
  individual panels remain visually readable. Do not crop it first. Seedance
  can interpret the ordered panels as one continuous multi-shot video.
- Use **I2V shot pairs** only when independent reshoots or precise start/end
  states matter more than the transition quality of one R2V generation.
- Do not upload every storyboard cell as a default R2V asset pack. Use several
  R2V images only when each has a distinct role, such as subject, product,
  setting, style, or motion reference.

## 2. Enable only needed preparation

### Subject brief

Use this only for a person, product, prop, hand, vehicle, or scene that must
recur. Record 3–5 invariants: silhouette or proportion, signature material or
wardrobe, key colour, and any must-preserve marking. Skip it for a one-off
atmosphere shot.

For a recurring person, make a clean face close-up and a separate full-body
reference. Do not use a front/side/back composite as the identity input; it can
be interpreted as multiple people. Multi-angle product references remain useful
when the object itself must be shown from several sides.

### Keyframes

Create a start keyframe for every I2V shot. Add an end keyframe only when the
shot must land on a specific action, composition, product pose, or hand
position. Use one clean scene per keyframe.

### Storyboard

Use an existing storyboard directly as the R2V reference. Seedance normally
understands panel order and does not require panel numbers, dividers, arrows, or
notes to be removed in advance. Make a clean copy only after a test generation
actually renders an unwanted divider, number, caption, or multi-panel layout.

When a multi-shot request has no storyboard, use the Seedream template in
[prompt templates](references/prompt-templates.md) to create one board.
**Display that board in the host UI, inspect it yourself, then continue to
Seedance R2V when it passes review.** Showing the board is a progress update,
not a user-approval gate.

For a supplied storyboard, display it unless it is already visible in the
conversation. Check planned order, readable key beats, recurring-subject
consistency, and content-specific constraints such as anatomy, product form, or
critical text. Refine a visibly failed board before video generation. Ask the
user only when a creative choice cannot be inferred.

If the route deliberately changes to I2V shot pairs, crop panels only then.
Inspect the layout first: automatic crops can verify position, not whether the
image model drew the intended panel layout.

## 3. Design continuity and cuts

First-and-last frames control **one shot**; they do not mean every shot must
inherit the prior clip's tail.

| Transition | Use prior tail as next start? | Design rule |
|---|---:|---|
| One uninterrupted action | Yes | Generate in sequence and inspect the seam |
| Hard cut to a new angle, place, product, or time | No | Design each shot independently |
| Match cut | Usually no | Match movement direction, shape, colour, or composition |
| Occlusion or whip transition | No | End with the occluding action; start the next shot inside or after it |
| Insert or cutaway | No | Use an object, environment, or product detail as a bridge |

Put important cuts, matches, and occlusions in the storyboard and prompt. Do
not rely on a cross-dissolve to repair unrelated shots.

## 4. Write the video prompt

Use only the blocks that affect the shot:

```text
[subject/reference binding]
+ [one observable action]
+ [space and important object relationships]
+ [one primary camera move, coherent composite move, or a cut]
+ [light/style when it matters]
+ [audio or dialogue when enabled]
+ [must-preserve constraints]
```

- Name reference roles explicitly, for example `Image 1: person`, `Image 2:
  product`, `Image 3: kitchen setting`.
- For multi-shot R2V, list `Shot 1`, `Shot 2`, and `Shot 3` in event order.
  Set duration in provider controls rather than forcing exact seconds in text.
- Prefer one primary movement per shot. A composite movement is valid when its
  direction, relation to the subject, and speed express one synchronized intent.
- When native audio is enabled, use `（）` for music, `<>` for sound effects,
  `{}` for dialogue, and `【】` for on-screen captions.
- State only constraints that are costly to redo.

Read [prompt templates](references/prompt-templates.md) for route-specific
templates, [prompt blocks](references/prompt-blocks.md) for reusable camera,
audio, and constraint patterns, and [cinematography](references/cinematography.md)
only for detailed visual decisions.

## 5. Generate, review, and finish

1. For a generated storyboard, create only the still first, display it in the
   conversation, and inspect it before any video request.
2. For a supplied storyboard, display the input unless it is already visible,
   then verify it fits the chosen route.
3. If the board passes review, generate one representative video pass without
   waiting for approval. Otherwise refine or regenerate the board first.
4. Review identity, composition, motion, endpoint, seam, and audio in that
   order. Regenerate only the failed shot or segment.
5. Generate chains in order because the next segment needs the real prior tail.
   Generate cut-based clips independently and edit the planned transition.

The bundled script is a draft assembler, not a colour-grading or music-mixing
system.

## Atlas execution layer

Keep creative route selection independent from how a job is submitted. The
default models are Seedream 5.0 Pro for stills and Seedance 2.0 for video;
users may override them only after verifying route support.

In an agent conversation, use the **Atlas Cloud Skill** as the default direct
generation route. It can discover a model, upload local media, submit an image
or video request, poll, and retrieve outputs. Report `Execution: atlas-skill`
only when it actually submitted the generation.

Use `atlas-mcp` only when the user explicitly selects MCP and its generation
tools are exposed. Use `atlas-cli` only when the user explicitly selects a
terminal, script, CI, or batch run. If the Atlas Cloud Skill is missing, help
install `AtlasCloudAI/atlas-cloud-skills` before selecting a fallback.

Before reporting that an Atlas Cloud API key is missing, check the credentials
in the **selected execution process**. For the REST runner, check
`ATLASCLOUD_API_KEY` first and `ATLAS_CLOUD_API_KEY` as a compatibility alias.
Do not infer credential availability from a different provider, plugin, or
process; each execution channel can have an independent credential scope.

If neither key exists, direct the user to
`https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills`.
Never ask them to paste the key in
chat. Tell them to set `ATLASCLOUD_API_KEY` in the submitting process or the
host's secure environment settings, then refresh or restart the execution
session if needed. If the key exists in a parent or host configuration but is
absent from the submitting process, report an environment-scope mismatch
instead of saying the user has no key.

### Billable task state machine

Apply these rules to every image and video generation:

1. After submission, record the prediction ID and logical stage immediately.
2. Treat `starting`, `queued`, `pending`, and `processing` as active. Poll the
   same ID every 2 seconds; never submit another task for that stage.
3. Treat `completed` and `succeeded` as successful terminal states. Download and
   inspect the output before starting a dependent stage.
4. Treat `failed`, `timeout`, and `canceled` as terminal failures. A new task
   requires an explicit retry decision; report the old ID and possible extra
   cost first.
5. A zero or missing processing-time field, delayed output, a local polling
   timeout, a stopped turn, or a temporary status-query error is **not** proof
   of failure. Preserve the ID and resume polling.
6. Interpret `continue` as “resume the existing task,” never as permission to
   retry. Do not submit video while its required storyboard is still active.

The 2-second interval applies to every Atlas execution route in this workflow.
For `atlas-skill`, repeat its prediction-result step with the same ID. For
`atlas-mcp`, call `atlas_get_prediction` with the same ID every 2 seconds. The
MCP server performs a single status lookup per tool call; the agent owns the
loop. The bundled REST and CLI adapters enforce the interval in code. A status
lookup is read-only and must never be replaced with another generation call.

When the runner must resume, set `execution.resumePredictionIds.<stage>` to the
existing ID. Supported stage keys include `grid`, `ref1`, `ref2`, `seg1`,
`shot1`, and `clip1`. Never create a replacement merely because a prior polling
process ended.

`scripts/generate.mjs` cannot invoke an agent Skill or MCP server. It is a
separate batch runner: it defaults to `atlas-rest`, and can use `atlas-cli`
only when explicitly set in `execution.adapter`. It never selects CLI
automatically. See [execution adapters](references/execution-adapters.md).

```bash
# Generate a storyboard only. The runner prints [storyboard-preview] with an
# absolute path; display and inspect that image before starting video work.
GRID_ONLY=1 node scripts/generate.mjs scripts/myjob.json

# Run only the first independent clip or segment as a quality gate.
CLIPS_MAX=1 node scripts/generate.mjs scripts/myjob.json
SEGS_MAX=1 node scripts/generate.mjs scripts/myjob.json
```

```json
{ "execution": { "adapter": "atlas-cli" } }
```

Available runner modes:

- `grid`: crop a model storyboard and make one independent I2V clip per panel;
  suitable for a hard-cut montage.
- `shot-pairs`: make independent I2V shots from `segments[]`, with a `first`
  and optional `last` keyframe index.
- `reference`: send a small role-specific set of R2V references. A reference
  may be generated from a prompt or read from a local file.
- `chain`: continue one action by feeding the generated tail frame to the next
  segment. It is an alignment aid, not a guarantee of an invisible seam.

For fault-specific fixes, read [troubleshooting](references/troubleshooting.md).
