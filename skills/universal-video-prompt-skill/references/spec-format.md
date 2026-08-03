# Spec format

A spec records the decisions a prompt encodes, kept separate from the dialect
that expresses them. Write the spec first, compile second. The same spec should
survive a change of model without being rewritten.

## The template

```text
[1 GLOBAL]
  film type:          what kind of piece this is
  scene:              where and when
  style:              visual treatment, palette, light behaviour
  premise:            ONE sentence — the single idea the piece exists to deliver
  camera principle:   the governing rule, not a shot list

[2 LOCKS]
  identity:           who or what must stay the same, and by what invariants
  reference roles:    per input — what it controls AND what not to take from it
  audio source:       native, supplied track, or silent
  supporting cast:    positions and what they may not do
  continuity:         what must hold across the whole piece
  negatives:          specific risks only

[3 TIME]
  granularity:        none | stages | second-level   (decide before writing below)
  stage 1..n:         one primary change each
  end state per stage: what is visibly true when the stage ends
```

Drop any field that does not apply. An empty field is better than a padded one —
every line you add competes for the model's attention.

## Field notes

### Premise (bucket 1)

One sentence. If it takes two, the piece is two pieces. The premise is what you
would keep if you could keep only one line — it is also the tie-breaker when
locks conflict.

A weak premise reads like a genre label (`a cinematic product video`). A working
premise names the specific idea (`ink refuses to glow, so the room must be bright
enough for black to read as black`).

### Reference roles (bucket 2)

Always two halves. What the input controls, and what must not leak from it:

```text
Image 1 controls the potter's face, hairstyle, and green apron.
  Do not use its background.
Video 1 controls the pacing of the throwing motion.
  Do not use the person's identity, clothing, or setting.
```

Name every subject and bind it individually. Never write "Images 1–4 define four
characters respectively" — that states no mapping at all. When several images
show one object from different angles, say so explicitly and state the output
count: `All four images define one lamp. Exactly one lamp appears throughout.`

### Negatives (bucket 2)

Specific risks, not a standing blocklist. A negative earns its place when it
names something this piece is actually likely to produce and would be expensive
to redo. Inheriting someone else's negative list is how prompts get long without
getting better.

Negatives are also model-dependent — see [portability](portability.md).

### End states (bucket 3)

The single highest-leverage field in the whole spec. See
[verifiability](verifiability.md).

## Two writing conventions

These govern where text sits, not what it says.

**Restate the few most expensive locks at the physical end.** Recency helps.
This is not a fourth bucket — the content still belongs to buckets 1 and 2, and
appears there first. Restate two or three items, not the whole list.

**Order the output explicitly** when a model writes the spec for you. Without a
stated order the buckets bleed: global rules end up inside beat 3, locks get
restated as events. Name the sections and their sequence in the instruction.

## Worked fill (abbreviated)

```text
[1 GLOBAL]
  film type:        live-action × hand-drawn VFX, 15s
  scene:            bright study, daytime, window light from the left
  style:            real footage plus a second medium that spreads across surfaces
  premise:          ink does not glow, it absorbs — so the room must be bright
                    enough for black to read as black
  camera principle: locked-off wide, one slow push-in at the final transformation

[2 LOCKS]
  identity:         one pair of hands only; no face enters frame
  reference roles:  Image 1 controls the ink-painting palette and brush texture.
                    Do not use its composition or subject placement.
  audio source:     native — paper friction, brush contact, room tone
  continuity:       the second medium stays flat and graphic; it never becomes a
                    photoreal creature
  negatives:        no wall drips, no blood-like runs, no scale conflict between
                    painted mountains and painted figures

[3 TIME]
  granularity:      stages  (multi-event, no external hard beat)
  stage 1:          brush tip touches paper, a dot spreads
                    end state: one wet black dot on otherwise blank paper
  stage 2:          the dot becomes lines, lines become a fish
                    end state: an orange-red fish occupies the paper's centre,
                    still flat and graphic
  stage 3:          painted forms spread past the paper onto the wall
                    end state: the wall carries a continuous green-blue landscape;
                    a vermilion seal sits in the lower right
```

Note what is absent: no shot durations, no camera vocabulary per stage, no
adjective stacking. The premise carries the look; the end states carry the
structure.

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| Style holds early, drifts late | Global rule written inside stage 1 | Move it to bucket 1 |
| Model invents pauses | Second-level granularity on a continuous action | Drop to stages or none |
| Reference bleeds background | Role stated one-sided | Add the "do not use" half |
| Two subjects merge or swap | Bound as a group, not individually | One binding line per subject |
| Long prompt, weak result | Adjective stacking substituting for a premise | Write the one sentence |
| Piece ends unresolved | No end state on the final stage | State the closing visible state |

## Related

- [verifiability](verifiability.md) — how to write each field so it can be checked
- [portability](portability.md) — which fields survive a model change
- [film-type-dna](film-type-dna.md) — reuse a proven spec instead of writing one
