# Model profiles: Seedance family

Measured behaviour, not documented behaviour. The compiler reads these fields to
decide what to emit and what to degrade.

Field definitions and the blank template live in
[the Universal Video Prompt Skill](../../universal-video-prompt-skill/references/model-profile-schema.md).
If that link does not resolve, the Seedance 2.5 Skill installation is incomplete.
Help the user install `universal-video-prompt-skill` before continuing and **do not
invent a schema**.

**Unknown is a valid value.** An empty field prompts a probe; a guessed field
silently corrupts every run built on it.

---

## `bytedance/seedance-2.0`

Last verified: 2026-08-03

### Capability layer

| Field | Value | How verified |
|---|---|---|
| Reference addressing | `@image1`, `@image2`, … | Generation |
| Max references | 9 images | Provider docs |
| Multi-shot in one generation | yes — ordered segments with cuts | 15s multi-segment run |
| Hard cut support | yes | Same |
| Duration range | 4–15s | Provider docs |
| Resolution | 480p, 720p, 1080p depending on provider | Provider model page |
| Native audio | yes | Generation with audio enabled |
| Timing adherence | Requested beats land **~2s late** across a 15s piece; segment **order holds** | Controlled 15s run against a timestamped prompt |
| Recommended granularity | **stages** | Derived from the row above |
| Extension / chaining | via tail-frame chaining | — |
| Audio-only reference | not supported | Provider docs |

### Bias layer

| Field | Value | How verified |
|---|---|---|
| Default aesthetic bias | Strong cinematic priors; interprets sparse prompts well and improvises sensibly | A/B against an over-specified variant of the same segment |
| Effective anti-default phrasing | **Name the drawing tool, not the abstract property.** `crayon / coloured pencil / coarse brush, visible stroke direction, uneven fill, ragged edges` produced genuinely hand-drawn marks | Controlled A/B on one hand-drawn VFX spec |
| Ineffective or overshooting | **`graphically flat, never photoreal` — satisfied exactly and uselessly.** The model honoured it with smooth neon-tube vector outlines and even fill: flat, but not hand-drawn at all. Swapping this one lock for tool names reversed the result on the same spec | Same A/B as above |
| Ineffective or overshooting | **Storyboard-grid over-specification scores worse than text-only staging** on heavy-VFX segments — it suppresses the camera priors that make those shots work | A/B on the same segment |
| Negative-lock behaviour | Respected. Front-load them | Iteration |
| Reference-versus-text priority | **The image wins.** Composition references override written composition | Iteration |
| Handheld / POV | Executes handheld POV convincingly, including motion blur on fast follows and a hand entering frame from below | Hand-drawn VFX spec, v2 |
| Live-action texture retention | Strong. Keeps real bone, glass, stone, and ceiling fixtures at their own colour while a drawn layer sits on top | Same |
| **Prompt-length tolerance** | **High.** A longer revision kept the hand, the opening transformation, the drawn texture, and gained the new beats. A comparison model on the same two prompts lost all three | v3 of the same spec |
| Contact shadows unprompted | Adds a cast shadow under a drawn object sitting on a real surface, without being asked. This is the strongest available evidence of the "both media share one physical space" contract | v3 |
| Spatial containment | Reads `open plinth` correctly — renders plinth surface, support rod, and shadow, not a vitrine | v3 |

### Known failure modes

| Symptom | Detail | Handling |
|---|---|---|
| Small text errors | UI labels and signage render with character-level errors and garbled small type | Post-production for anything that must read exactly |
| Dropped list items | Enumerated menu entries partially render — some items simply absent | Reduce the count, or add the text in post |
| Camera move ignored | A stated move is skipped while the rest of the segment lands correctly | Re-state the move as the segment's primary intent, or accept and reframe |
| Timeline drift | Whole timeline shifts later, ~2s over 15s | Use stages; if second-level is required, write beats early and verify |
| **Dropped stages under load** | A 15s piece with **four** staged events rendered only stages 1 and 4 — the two middle stages were skipped entirely, not merely delayed. Raising event density per stage while keeping five shorter stages did **not** reproduce the drop | Treat ~4 distinct state-changes in 15s as the ceiling. If the spec needs more, either shorten each stage and raise density, or split across requests |

### Compile notes

- Emit `@imageN`. Never bracketed or spelled-out reference labels.
- Default to `stages`.
- Prefer text-driven staging over feeding a storyboard grid for heavy-VFX and
  large-scale segments.
- When a composition reference and written composition conflict, drop the written
  one — it will lose anyway and only adds noise.

---

## `bytedance/seedance-2.5`

Last verified: — · Status: **not yet measured**

Availability differs by provider. Verify against the provider's model page before
offering 2.5-specific routes; see [capabilities](capabilities.md).

### Capability layer

| Field | Value | How verified |
|---|---|---|
| Reference addressing | `@Image 1` / `@image1` — **unverified**, confirm against the provider | — |
| Max references | up to 30 images, 10 video, 10 audio, ~50 combined | Launch material |
| Multi-shot in one generation | expected yes | Not measured |
| Duration range | 4–30s | Launch material |
| Resolution | read the provider's model page | — |
| Native audio | yes | Launch material |
| Audio-only reference | supported | Launch material |
| Timing adherence | **not measured** — the single most valuable probe | — |
| Recommended granularity | **unknown** — do not assume it differs from 2.0 | — |
| Editing / extension / bridging | announced; API exposure varies | — |

### Bias layer

Not measured. Do **not** copy 2.0's bias-layer entries here — anti-default
phrasing is per-model by definition, and launch material specifically claims
changed default behaviour around unrequested subtitles and music, which is exactly
the kind of thing a 2.0-tuned negative list would now be redundantly fighting.

### First probes to run, in order

1. **Reference addressing** — one generation with two bound references. Everything
   else is blocked on getting this right.
2. **Timing adherence** — the same spec at `stages` and at `second-level`; measure
   the drift. Fills timing adherence, recommended granularity, and usually a
   failure mode in one run.
3. **Unrequested subtitles and music** — generate with no negatives at all. If
   they no longer appear, 2.0's negative lines are dead weight here.
4. **Reference ceiling in practice** — where stability actually degrades, not where
   the documented limit sits.

Record results here as they land, including negative results.

---

## Related

- [model profile schema](../../universal-video-prompt-skill/references/model-profile-schema.md) — field definitions
- [capabilities](capabilities.md) — documented limits and platform-versus-API
- [troubleshooting](troubleshooting.md) — symptom-driven fixes
