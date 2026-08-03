# Pre-submission checklist

Run this before spending a generation. Each item maps to a failure that costs a
full run to discover.

## Spec

- [ ] Is there **one** premise sentence? Two premises means two pieces.
- [ ] Is every line in the bucket that matches its scope? Global rules inside a
      beat stop applying at the next beat.
- [ ] Does every reference state **both** what it controls and what not to take
      from it?
- [ ] Is every distinct subject bound **individually**? No "Images 1–4 define four
      characters".
- [ ] When several references show one object, is the output count stated?
      (`exactly one lamp appears throughout`)
- [ ] Are references selected **per stage** rather than all required at once?
- [ ] Are negatives specific to *this* piece? Delete anything inherited that names
      a risk this piece does not have.

## Verifiability

- [ ] Does every stage end on a **visible** state — not a feeling, not "continues"?
- [ ] Does each stage contain **one** primary change?
- [ ] Is every emotion anchored to 2–4 observable cues?
- [ ] Is every uncommon craft term written as **term + observable description**?
- [ ] Are subject count, wardrobe, prop ownership, and spatial relationships
      stated where they must hold?
- [ ] For a keyframe sequence: is the order explicit and does each image have one
      role?
- [ ] For an extension: is the boundary written on the correct side — and for a
      backward extension, is the source's first frame stated as the **end state**?

## Time

- [ ] Was granularity decided **before** the beats were written?
- [ ] Is the granularity the loosest one that still meets the constraint?
- [ ] If second-level: is there a genuine external hard constraint, or did it
      arrive by habit?
- [ ] Are time ranges consecutive and non-overlapping?
- [ ] Is any range demanding impossible density (several distinct actions inside
      one second)?
- [ ] For a re-skin: was granularity **inherited from the DNA** instead of
      re-asked?

## Portability

- [ ] Does the target model have a profile? If not, has a probe been run and
      recorded?
- [ ] Is the reference addressing syntax emitted in the model's exact form?
- [ ] Is every bias-layer line justified **for this model** — not imported from
      another one?
- [ ] Has any anti-default phrasing been checked against this model's baseline for
      overshoot?
- [ ] Does the spec fit the model's real reference count, duration, and multi-shot
      support?
- [ ] Is every degrade **reported** rather than applied silently?
- [ ] For a comparison run: is the spec held at the intersection of both models'
      capabilities, with only addressing translated?

## Transitions

- [ ] Should the **edit** own this transition instead? Fades, dissolves, flash
      cuts, and wipes are cheaper and more controllable in post.
- [ ] Is the transition type named at the cut point?
- [ ] Are `no hard cut` / `nothing appears from nowhere` applied **only** where a
      seam actually needs protecting — not as a default?
- [ ] Does the model support hard cuts at all, if the spec depends on them?

## Execution

- [ ] Are credentials present in the **submitting** process?
- [ ] Is there somewhere to record prediction IDs before submitting?
- [ ] Is one representative pass planned before fanning out?
- [ ] For chained stages: is the order enforced?

## After the run

- [ ] Reviewed in order: identity → locks → end states → motion and seams →
      audio, stopping at the first failure?
- [ ] Regenerating only what failed?
- [ ] Did anything learned get written into the **profile** rather than patched
      into this one spec?
- [ ] If a piece is now verified working: should its DNA be extracted?

## Related

- [spec-format](spec-format.md) · [verifiability](verifiability.md) ·
  [portability](portability.md) · [execution](execution.md)
