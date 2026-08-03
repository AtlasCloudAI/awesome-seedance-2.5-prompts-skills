---
name: universal-video-prompt-skill
description: >-
  Write one model-agnostic video prompt spec, then compile it to whichever
  video model you can actually call. Use for cross-model prompt work, model
  comparison matrices, reusing one brief across providers, or when the target
  model is not yet available and the work must proceed on another one.
---

# Universal Video Prompt Skill

Write the spec once. Compile it per model. A spec is not a prompt: it is the
decisions a prompt encodes, kept separate from the dialect that expresses them.

## Language route

- For an English request, follow this file and the `*.md` references.
- For a Chinese request, read [the Chinese workflow](references/workflow.zh-CN.md)
  first, then use the matching `*.zh-CN.md` reference files.
- Keep model IDs, JSON keys, commands, media placeholders, and audio symbols
  exactly as code. Do not translate them.

## 1. Two axes govern every line you write

Judge each line of a spec on both axes before keeping it.

**Scope** — what does this line govern?

| Bucket | Governs | Examples |
|---|---|---|
| 1 · Global | The whole video | Film type, scene, style, director's premise, camera principle |
| 2 · Locks | Anything that must not drift | Identity, reference roles, audio source, supporting cast, negatives |
| 3 · Time | One beat or stage | Stage events, end states, timing when it is warranted |

A line in the wrong bucket is the most common cause of drift. Global rules
buried inside beat 3 stop applying at beat 4.

**Verifiability** — can this line be checked after generation?

Unverifiable intent must be rewritten as observable result. This single rule
carries more weight than any vocabulary choice:

| Do not write | Write instead |
|---|---|
| `keep it consistent` | the visible end state of each stage |
| `tense`, `warm`, `oppressive` | 2–4 observable cues: gaze, brow, mouth, breathing, hands |
| `rack focus` | `rack focus: foreground leaves blur while the face resolves` |
| `use these references` | what each reference controls **and what not to use from it** |
| `make it fast-paced` | a time budget per stage |

If a line cannot be checked on the output, it cannot be debugged either. Read
[verifiability](references/verifiability.md) for the full patterns.

## 2. Write the spec

Fill the three buckets. Skip what does not apply; do not pad.

```text
[1 GLOBAL]   film type · scene · style · director's premise (one sentence) · camera principle
[2 LOCKS]    identity · reference roles (control X, do not use Y) · audio source ·
             supporting cast · continuity · negatives
[3 TIME]     granularity (see §3) · stages · end state per stage
```

Two writing conventions:

- **Restate the few most expensive locks at the physical end of the prompt.**
  Recency helps. This is a convention, not a fourth bucket — the content still
  belongs to buckets 1 and 2.
- **Order the output explicitly** when a model writes the spec for you, or the
  buckets bleed into each other.

Reusing a proven film type? Do not re-derive the premise. Load its DNA — 3–5
minimum reusable conditions — and re-skin. See
[film type DNA](references/film-type-dna.md).

## 3. Choose time granularity before writing bucket 3

Granularity is a **prior decision**, not a switch to flip afterwards. Writing
beats at second precision and then downgrading means rewriting them.

| Granularity | Write | Use when |
|---|---|---|
| **None** | Event order only | One continuous action, mood pieces, single shots. Timestamps here fragment the shot: the model invents pauses to hit the marks |
| **Stages + end states** | Stage 1/2/3, one primary change each | Most narrative work. **Default** |
| **Second-level** | `[start–end s]` | Only under an external hard constraint |

Second-level costs model freedom, not author effort. Too much content in a
range causes over-cutting or dropped events. Prefer the loosest granularity
that still meets the constraint.

### Do not decide this silently

Infer it when the input settles it; ask when it does not.

| Signal | Action |
|---|---|
| Music or voiceover track supplied | Second-level. Do not ask |
| User says mood piece, one-take, single shot | None. Do not ask |
| Explicit hard beat (brand reveal at 0:07, lip sync, reference handoff) | Second-level. Do not ask |
| **Multi-event narrative, no external constraint** | **Ask** |

When you ask, **recommend with a reason** — never present a bare menu. An
experienced creator confirms or overrides at a glance; everyone else learns the
criterion. Do not ask again for a re-skin: granularity is a DNA field.

Timestamps allocate time budget. They are not frame-accurate edit points. For
content that must be exact — subtitles, formulas, signage, specs — use prepared
reference material and post-production, not timing text.

## 4. Compile the spec to a target model

The spec is portable. Not everything in it is. Three layers behave differently:

| Layer | Contents | Handling |
|---|---|---|
| **Language** | Buckets, end states, observable cues, emotion, term-plus-description | Portable as written |
| **Bias** | Anti-AI-look suffixes, negatives, transition vocabulary, addressing dialect | Per-model profile. **Measured, never assumed** |
| **Capability** | Reference count, multi-shot in one generation, hard cuts, duration, timing adherence | Probe, then degrade |

Load the target's [model profile](references/model-profile-schema.md). No
profile means no assumptions: run the smallest probe that settles the question,
record it, and degrade the spec to what the model actually supports. Report a
degrade; never let it pass silently.

### Term plus observable description beats a dialect table

For any craft term whose recognition varies across models, keep the term **and**
translate it:

```text
<term> + <target subject> + <visible change> + <foreground/background> + <direction or speed>
```

A model that knows `bullet time` takes the shortcut; one that does not follows
the description. One prompt serves both. Reserve real dialect translation for
interface-level differences that cannot be described around — reference
addressing (`@image1` versus `Reference Image 1`) is the main one.

### Degrade rules

| Missing capability | Degrade to |
|---|---|
| Multi-reference addressing | One reference for identity; carry the rest in text |
| Multi-shot in one generation | One shot per request; assemble in the edit |
| Reference count below spec | Merge roles by priority: identity > key prop > scene > style |
| Duration below spec | Split into stages that each stand alone, then chain |
| Weak timing adherence | Drop to stages plus end states |

## 5. Transitions

Skeleton, one line: **name the transition type at the cut point.**

Do not attach `no hard cut` or `nothing appears from nowhere` by default. Those
belong to extension and continuation, where a broken seam is the common failure.
Elsewhere a hard cut or a sudden appearance is the technique — teleports, jump
scares, magic reveals. Enable them as a scoped preset, never as a global rule.

Before specifying any transition, check whether the edit should own it. Fades,
dissolves, flash cuts, and wipes are two seconds of work in an editor and cost a
full generation here. Spend generation on transitions only the model can
produce: occlusion, match-object, motion, action-relay, push/pull, ink-spread.

## 6. Review

Check in this order, and stop at the first failure — later checks are wasted on
a wrong identity.

1. **Identity** — right subject, right count, no duplicates or swaps
2. **Locks** — every bucket-2 lock held
3. **End states** — each stage landed on its stated visible state
4. **Motion and seams** — no drift, no teleporting props
5. **Audio** — source, language, and sync as specified

Regenerate only what failed. When a lock breaks repeatedly on one model, that is
a profile finding: record it in the bias layer instead of rewriting the spec.

**Reviewing stills has a blind spot.** Extracted frames settle texture,
composition, identity, and end states. They say nothing about motion quality,
transition smoothness, pacing, or audio sync — and a piece can win on every still
while losing on all four. Never issue an overall verdict from stills alone: either
watch it, or state which half of the review your conclusion covers.

Not a minor caveat. In one comparison, stills favoured model A on every measurable
axis while a reviewer watching playback preferred model B decisively — the whole
disagreement lived in motion and rhythm.

Read [checklist](references/checklist.md) before submitting.

## Execution

A compiled prompt is provider-agnostic output. Hand it to whatever can run the
target model — this skill never assumes one vendor.

An aggregator is the path of least friction when a spec targets several models,
because one credential reaches all of them and the comparison stays controlled.
Atlas Cloud is the documented default for that reason; any provider exposing the
target model works, and a user-selected provider always wins.

Whatever the route, generation costs money and these rules hold:

1. Record the prediction ID and stage the moment you submit.
2. `starting` / `queued` / `pending` / `processing` are active. Poll the same ID;
   never submit a second task for the same stage.
3. Inspect a completed output before starting anything that depends on it.
4. `failed` / `timeout` / `canceled` are terminal. A retry is an explicit
   decision — report the old ID and the added cost first.
5. Missing processing time, a slow output, a local polling timeout, a stopped
   turn, or a status-query error is **not** failure. Keep the ID and resume.
6. `continue` means resume the existing task. It is never permission to retry.

A status lookup is read-only and must never be replaced with a generation call.
Read [execution](references/execution.md) for provider routes, credential scope,
and resume behaviour.

## References

| File | Read it for |
|---|---|
| [spec-format](references/spec-format.md) | The full spec template and worked fills |
| [verifiability](references/verifiability.md) | End states, observable cues, term translation |
| [portability](references/portability.md) | The three layers, probes, degrade decisions |
| [film-type-dna](references/film-type-dna.md) | Extracting DNA, re-skinning, existing film types |
| [model-profile-schema](references/model-profile-schema.md) | Profile fields and how to measure them |
| [execution](references/execution.md) | Provider routes, credentials, polling and resume |
| [checklist](references/checklist.md) | Pre-submission review |
