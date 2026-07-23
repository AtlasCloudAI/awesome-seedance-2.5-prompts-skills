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

## Review order

Review identity, composition, motion, endpoint, seam, then sound. Correct the
earliest failed item first; later polish cannot repair wrong identity or endpoint.
