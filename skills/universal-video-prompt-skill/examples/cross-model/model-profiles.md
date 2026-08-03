# Cross-model profiles

Measured behaviour for non-Seedance models, filled by running one spec across
several models. Field definitions live in
[model-profile-schema](../../references/model-profile-schema.md).

These were produced by a **controlled comparison**: identical prompt text,
duration held at the capability intersection, no bias-layer wording for any
model, only submit parameters differing. Anything not measured is marked as such
rather than guessed.

---

## `minimax/h3/text-to-video`

Last verified: 2026-08-03 · Provider: Atlas Cloud

### Capability layer

| Field | Value | How verified |
|---|---|---|
| Reference addressing | n/a for text-to-video; the r2v variant documents `Reference Image N` phrasing | Not exercised here |
| Duration range | **up to 15s** | Submitted `duration=15`, accepted and delivered 15.08s |
| Resolution | `2K` (2560×1440 delivered) | Generation |
| Aspect ratio | 16:9 accepted | Generation |
| Native audio | yes — AAC stereo, 32 kHz | Generation |
| Frame rate | 24 fps | Generation |
| Multi-shot in one generation | yes, and it walks through a space continuously | Generation |
| Timing adherence | **Runs early, and the lead accumulates.** Requested 4/8/12s stage boundaries landed at 4/6/8s; the final stage stretched to fill 8–15s | Frame-by-frame against a staged prompt |
| Recommended granularity | `stages`, written slightly **late** if precision matters | Derived from the row above |

⚠️ **The model page contradicts itself on duration.** Header text says `5-15s`,
the "Why Choose" section says `5s or 10s`, the parameter table says
`8 (default), 5-10`. The parameter table also omits `16:9` from `ratio` while the
playground offers it. **Submission is the only authority** — 15s and 16:9 both
work. Do not trust a parameter table over a live test.

### Bias layer

| Field | Value | How verified |
|---|---|---|
| Default aesthetic bias | Toward clean, smooth, high-contrast rendering | Two versions of one spec |
| Effective anti-default phrasing | Tool-naming (`crayon, coloured pencil, ragged edges`) shifts it, and works **best on large forms** | v2 of the spec |
| Partially effective | On **small, thin strokes** the marks stay smooth even with tool-naming — plausibly a resolution floor rather than a comprehension failure. Large shapes in the same frame do show grain | Same generation, different elements |
| Glow control | Follows `weak glow, do not light the live-action space` correctly | v2 |
| Handheld / POV | Executes it well, including motion blur on fast follows | v2 |

### Known failure modes

| Symptom | Detail | Handling |
|---|---|---|
| Spatial containment misread | "A skeleton **on an open plinth**" was rendered as a specimen **inside a glass case**, putting the live-action hand implausibly through the glass. Adding `open plinth, no glass case, low enough to touch` did **not** fix it on the next attempt | Persistent. Consider a reference image for the plinth, or accept and reframe |
| **Exclusion instructions under-honoured** | `only a mouth, not a complete head` → still rendered a full skull with eye sockets and nostrils. A comparison model on the identical line obeyed it exactly. Same class as the plinth-versus-vitrine miss: both are *don't include X* instructions | State the target **positively** instead of excluding: describe what the shape *is* (an arc of jaws spanning the ceiling) rather than what it is not |
| **Long prompts cost the opening** | Same spec at two lengths: the longer version dropped the hand entirely, skipped the opening transformation, and **regressed the drawn texture back to neon** — while its later beats improved. Nothing about the texture lock had changed | Keep the prompt short, or restate the highest-priority lock **inside every beat** rather than once at the end |

### Prompt-length tolerance

**Low.** This model spends its budget on the later beats when a prompt grows, and
the opening is what gets cut. A comparison model on the same two prompts held both
opening and texture, so this is a per-model trait, not a property of the prompt.

Practical consequence: the two failure modes above are the *same* failure. Don't
patch them separately — shorten, or repeat the critical lock per beat.

### Compile notes

- `duration=15` is available despite the parameter table; verify per provider.
- Default to `stages`; the model finishes early, so front-loaded content gets room
  and the last stage absorbs the slack.
- For hand-drawn looks, put the important marks on **large** forms.

---

## `alibaba/happyhorse-1.1/text-to-video`

Last verified: 2026-08-03 · Provider: Atlas Cloud

### Capability layer

| Field | Value | How verified |
|---|---|---|
| Duration range | 3–15s | Provider page; 15s submitted and delivered 15.16s |
| Resolution | `720p`, `1080p` | Provider page; 1080p delivered 1920×1080 |
| Aspect ratio | 16:9 accepted | Generation |
| Native audio | yes — AAC present | Generation |
| Frame rate | 24 fps | Generation |
| Seed | exposed | Provider page |
| Multi-shot / storyboard switch | **none exposed** | Form fields enumerated |

### Bias layer

**Not measured.** Output not reviewed frame by frame in this run.

### Compile notes

- No smart-storyboard or multi-shot parameter to disable.
- Seed is exposed, so this model can hold a variable fixed across a comparison —
  useful when isolating prompt changes rather than models.

---

## `kwaivgi/kling-v3.0-pro/text-to-video`

Last verified: 2026-08-03 · Provider: Atlas Cloud

### Capability layer

| Field | Value | How verified |
|---|---|---|
| Duration range | **15s works.** The parameter table says `5 or 10` and is wrong here too | `duration=15` submitted and accepted |
| Audio | **opt-in via `sound`** — off by default | `sound: true` accepted; an earlier run without it produced no track |
| Resolution | 1920×1080 delivered | Generation |
| Aspect ratio | 16:9 accepted | Generation |
| Native audio | **off by default — no audio track produced** | Generation; sound generation is a separate opt-in |
| Frame rate | 24 fps | Generation |
| Negative prompt | supported as a separate field | Provider page |
| CFG scale | exposed, default `0.5` | Page form state |
| **`multi_shot`** | **boolean, default `false`** | Page JSON: `"multi_shot": false` |
| Voice list | up to 2 custom voice entries | Provider page |

### Bias layer

**Not measured.** Output not reviewed frame by frame in this run.

### Compile notes

- **15s is available.** An earlier run was needlessly capped at 10s because the
  parameter table was believed without testing — see the platform-wide warning
  below.
- `multi_shot` is the auto-storyboard switch. It already defaults to `false`, but
  pass it explicitly when a single continuous shot is required — a default is not
  a guarantee across provider versions.
- Audio must be opted into via `sound`. A silent output without it is expected
  behaviour, not a failure.
- `negative_prompt` exists, but for a **controlled** comparison keep exclusions
  inside the shared prompt body so every model receives identical text.

---

## ⚠️ Platform-wide: parameter tables are unreliable

Three separate confirmed cases on this platform, all in the same direction — the
documented enumeration was **narrower** than what submission accepts:

| Model | Table said | Reality |
|---|---|---|
| `minimax/h3/text-to-video` | `duration: 8 (default), 5-10`; `ratio` omitted 16:9 | 15s works; 16:9 works |
| `kwaivgi/kling-v3.0-turbo/text-to-video` | `duration: 5 or 10` | 15s works |
| `kwaivgi/kling-v3.0-pro/text-to-video` | `duration: 5 or 10` | 15s works |

**Treat this as a hard rule, not a caution:** a documented enumeration is a
hypothesis. The only authority is a submission. Cheap to test — a rejected
submission creates no task and costs nothing, so testing the value you actually
want is strictly better than designing around the table.

The failure this prevents is asymmetric and invisible: believing a too-narrow
table silently degrades the spec, the run succeeds, and nothing in the output
indicates that a better configuration was available.

---

## `kwaivgi/kling-v3.0-turbo/text-to-video`

Last verified: 2026-08-03 · Provider: Atlas Cloud

### Capability layer

| Field | Value | How verified |
|---|---|---|
| Duration range | **15s works** despite the parameter table saying `5 or 10` | Submitted `duration=15`, delivered 15.04s |
| Resolution | **1280×720 by default**; no `resolution` parameter documented | Generation with no resolution passed |
| Aspect ratio | 16:9, 9:16, 1:1 | Provider page |
| Native audio | **opt-in via `sound`** — passing `sound: true` produced an AAC track | Generation |
| Frame rate | 24 fps | Generation |
| CFG scale | exposed, default `0.5` | Provider page |
| First/last frame | supported | Provider page |
| `multi_shot` | **not exposed on Turbo** — that switch is Pro-only | Page HTML search found no match |

### Bias layer

**Not measured.**

### Compile notes

- **Second confirmed case of a wrong parameter table on this platform.** Both Kling
  tiers document `5 or 10`; Turbo accepts 15. Treat every documented enumeration as
  a hypothesis until submitted.
- ⚠️ The Pro tier was **降级 to 10s on the basis of that same table without
  testing 15s** — an avoidable mistake, and the exact error this file warns
  against. Pro's real ceiling is still unverified.
- Resolution appears fixed at 720p, which makes this the lowest-resolution option
  in a mixed comparison. Note it rather than trying to match the others.
- No auto-storyboard switch to disable here.

---

## What this comparison established about the method

1. **Text-only specs compile almost identically across models.** With no
   reference material, dialect translation had nothing to do — the four prompts
   were byte-identical and only submit parameters differed. Portability cost is
   concentrated in **reference addressing**, not in language.
2. **Timing failure has a direction and a kind.** One model ran early and
   compressed; another ran late and **dropped whole stages**. Both are "poor
   timing adherence" and they need opposite fixes, so the profile field has to
   record kind and direction, not just magnitude.
3. **Naming the wrong property fails identically on every model.** An abstract
   lock (`graphically flat`) was satisfied by two different models in the same
   wrong way. Tool-naming fixed both. When several models fail the same way, the
   spec is wrong — not the models.
