# Troubleshooting

Fix the failed shot or seam rather than restarting a complete sequence.

## Identity and reference problems

| Symptom | Likely cause | Targeted fix |
|---|---|---|
| Person changes face or outfit | Weak or mixed identity reference | Use a clean face close-up and separate full-body image; name their roles clearly |
| Duplicate people | A composite human reference reads as several subjects | Replace the turnaround or contact sheet with one single-person image; state the one-person constraint |
| Product form or label changes | Product reference has insufficient priority | Use one clean product image, bind it as `Image 1`, and explicitly preserve proportion and label |
| Style changes across cuts | Conflicting light or art direction | Lock the same dominant light direction, palette, and material language in every relevant shot |

## Motion and shot problems

| Symptom | Likely cause | Targeted fix |
|---|---|---|
| Wobble or morphing | Too much action or competing camera instructions | Reduce to one continuous action and one primary move, or describe one synchronized composite move |
| Face warps in close-up | Tight framing plus aggressive rotation | Use wider framing, gentler motion, or a planned cut |
| Endpoint is missed | I2V lacks a usable end keyframe | Regenerate a clean end keyframe and use it as `last_image` |
| R2V ignores storyboard order | Sequence is ambiguous or panels are too small | Write `Shot 1 / Shot 2 / Shot 3`; simplify only the ambiguous board; switch to I2V only when individual control is required |

## Seams and edit problems

| Symptom | Likely cause | Targeted fix |
|---|---|---|
| A continuous chain jumps or rewinds | Generated tail does not align sufficiently with the next segment | Rework the ending action, regenerate the boundary segment, and trim only after visual inspection |
| Hard cut feels arbitrary | No planned visual or audio relationship | Add a match cut, occlusion, cutaway, or strong beat before the cut |
| Dissolve looks muddy | Two unrelated compositions are blended | Use a hard, match, or occlusion cut; reserve dissolves for true time or place changes |
| Input audio fails | A supplied reference audio file or URL was rejected | Fix or replace `audio.references`; do not expect silent removal of the input audio |
| Output audio fails after retries | Seedance returned no audio stream or reported audio-generation failure | Inspect the request and rerun that segment with `generate_audio:true` rather than silently falling back to silent video |
| Native audio ends with a click | Generated clip audio is truncated | Regenerate the segment with native audio; add a short fade only after the new generation is acceptable |

## Multi-reference problems

| Symptom | Likely cause | Targeted fix |
|---|---|---|
| Wrong reference applied to a subject | Bound as a group (`images 1–4 define four characters`) | One binding line per subject, each naming its own reference |
| One object appears twice | Multi-view references read as several objects | State the output count: `all three images define one lamp; exactly one appears throughout` |
| Props migrate between characters | Ownership never stated | Add `belongs only to <subject>` |
| Every reference crowds into every shot | No per-scene selection | List which references each scene uses |
| Reference background leaks in | Role stated one-sided | Add the `do not use` half |
| Re-described motion conflicts with a motion reference | Text competes with the video | State only which attributes to inherit |

## Stage and timing problems

| Symptom | Likely cause | Targeted fix |
|---|---|---|
| Stage ends in the wrong state | No end state written | State what is visibly true when the stage ends |
| Piece trails off | Final stage has no end state | Add one — the most common omission |
| Model invents pauses or extra cuts | Second-level granularity on a continuous action | Drop to stages, or to event order only |
| Beats land consistently late | Model timing drift | Check the profile; write beats earlier, or drop to stages |
| Events dropped inside a range | Too much content in one time range | Split into more stages |
| Style holds early then drifts | A global rule was written inside stage 1 | Move it to the global block |
| Later characters appear too early in a backward extension | Source's first frame not stated as an end state | State it explicitly, and name what must not appear early |

## Review order

Review identity, locks, stage end states, composition, motion, seam, then sound.
**Stop at the first failure** — later polish cannot repair wrong identity or a
missed endpoint, so checking past the first break wastes the pass.

When the same lock breaks repeatedly on one model, that is a profile finding, not
a prompt problem. Record it in [model profile](model-profile.md) instead of
rewriting the prompt again.
