# Model profile schema

A profile is what makes this skill adjust to a model instead of merely describing
one. This file defines the **fields**; each model gets its own filled instance.

Two rules govern every entry:

1. **Record the measurement, not the impression.** `timing drifts` is unusable;
   `requested beats land ~2s late across a 15s piece` compiles into a decision.
2. **Unknown is a valid value.** An empty field prompts a probe. A guessed field
   silently corrupts every compile and every comparison built on it.

## Template

```markdown
# Model profile: <provider>/<model>

Last verified: <date> · Verified by: <who> · Provider: <what you called>

## Capability layer

| Field | Value | How verified |
|---|---|---|
| Reference addressing syntax | | |
| Max references (image / video / audio) | | |
| Multi-shot in one generation | yes / no / partial | |
| Hard cut support | yes / no | |
| Duration range | | |
| Resolution options | | |
| Native audio | native / reference / none | |
| Timing adherence | | |
| Recommended granularity | none / stages / second-level | |
| First frame / first-and-last frame | | |
| Extension or chaining | | |
| Video editing | | |

## Bias layer

| Field | Value | How verified |
|---|---|---|
| Default aesthetic bias | | |
| Effective anti-default phrasing | | |
| Ineffective or overshooting phrasing | | |
| Negative-lock behaviour | | |
| Transition vocabulary recognised | | |
| Language sensitivity | | |

## Known failure modes

- <what breaks, under what conditions, and the workaround if there is one>

## Compile notes

- <anything the compiler must do for this model specifically>
```

## Field definitions

### Capability layer

**Reference addressing syntax** — the exact token that binds a reference. The one
thing that must be translated rather than described. Record the literal form.

**Max references** — per type, and the combined ceiling if one exists. Note the
*stable* range separately from the documented maximum when the provider publishes
both; stability usually degrades before the hard limit.

**Multi-shot in one generation** — can one request produce ordered shots with cuts?
`partial` means it works but unreliably; say what makes it fail.

**Hard cut support** — separate from multi-shot. Some models produce multiple
shots but always bridge them with movement.

**Duration range** — and whether duration is set by parameter or inferred from
inputs. Note any task type that locks it.

**Native audio** — `native` generates sound, `reference` only accepts audio input,
`none` means audio lines should be stripped at compile time.

**Timing adherence** — the measurement, with the piece length it was measured on.
Direction matters: consistently late is correctable by writing earlier;
inconsistent is not correctable at all.

**Recommended granularity** — the conclusion drawn from timing adherence. This is
the field the compiler reads.

**First frame / first-and-last frame** — supported, and whether it locks aspect
ratio or duration.

**Extension or chaining** — supported, the ceiling, and whether it nests.

**Video editing** — supported, scope granularity, what it locks.

### Bias layer

**Default aesthetic bias** — where the model lands with no styling instruction.
Be concrete: `smoothed beauty-filter faces`, `CG-looking surfaces`,
`over-saturated grade`. This is what anti-default phrasing has to fight.

**Effective anti-default phrasing** — what measurably shifted the output on *this*
model.

**Ineffective or overshooting phrasing** — equally valuable, and the field people
skip. A phrase that overshoots is worse than one that does nothing, and this is
where you record that a technique imported from another model backfired.

**Negative-lock behaviour** — do negatives get respected? Which kinds fail?

**Transition vocabulary recognised** — which named transitions land unqualified.
Everything else needs term-plus-description.

**Language sensitivity** — does prompt language change results? Which language is
strongest? Note if a term only works in one language.

## Filled example: `bytedance/seedance-2.0`

```markdown
# Model profile: bytedance/seedance-2.0

Last verified: 2026-08-03 · Provider: Atlas Cloud

## Capability layer

| Field | Value | How verified |
|---|---|---|
| Reference addressing syntax | `@image1`, `@image2`, … | Generation |
| Max references (image / video / audio) | 9 images | Provider docs |
| Multi-shot in one generation | yes — ordered segments with cuts | 15s multi-segment generation |
| Hard cut support | yes | Same |
| Duration range | 4–15s | Provider docs |
| Native audio | native | Generation with audio enabled |
| Timing adherence | Requested beats land ~2s late across a 15s piece; segment *order* holds | Controlled 15s run against a timestamped prompt |
| Recommended granularity | stages | Derived from the row above |
| Extension or chaining | via tail-frame chaining | — |

## Bias layer

| Field | Value | How verified |
|---|---|---|
| Default aesthetic bias | Strong cinematic priors; interprets sparse prompts well | A/B against an over-specified variant |
| Effective anti-default phrasing | Explicit flatness lock when a 2D medium must stay graphic | Iteration on a hand-drawn VFX piece |
| Ineffective or overshooting phrasing | Storyboard-grid over-specification — suppresses good camera priors and scores *worse* than a text-only version | A/B on the same segment |
| Negative-lock behaviour | Respected; front-load them | Iteration |

## Known failure modes

- Small UI text and signage render with character-level errors. Use post-production
  for anything that must read exactly.
- Enumerated menu items get partially dropped; only some list entries render.
- Explicit camera-move instructions are sometimes ignored while the rest of the
  segment lands. Re-state the move as the segment's primary intent if it matters.

## Compile notes

- Emit `@imageN`. Do not emit bracketed or spelled-out reference labels.
- Default to `stages`; when second-level is genuinely required, write beats
  ~2s early and verify.
- Prefer text-driven staging over feeding a storyboard grid.
```

## Where profiles come from

Profiles are the output of comparison work, not a prerequisite for it. Running the
same spec across models **is** how these fields get filled — which means a
comparison matrix is a data-collection exercise whose deliverable is the filled
table, not only the videos.

The highest-information single test: run one spec at `stages` and at
`second-level`, measure the drift, and fill three fields at once — timing
adherence, recommended granularity, and usually one failure mode.

## Related

- [portability](portability.md) — how the compiler consumes these fields
- [checklist](checklist.md) — pre-submission review
