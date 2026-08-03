# Believable human subjects

Two failures recur with generated people: an unmistakable synthetic look, and
multiple characters converging on the same face. Both are addressed by describing
along fixed dimensions rather than piling on adjectives.

**Read the omission rules first.** This detail is written for text-driven
subjects. With an identity reference supplied, most of it becomes harmful.

## The dimensions

```text
[age / ethnicity]      specific age + specific origin + style adjective + face-shape noun
[skin tone / texture]  warm-cool + specific tone + texture adjective + realism suffix
[facial features]      eye shape + brow structure + nose + lips + jaw  (3–4 is enough)
[eyes / interiority]   quality of gaze + what it conveys + the emotion underneath
[hair]                 colour + condition/texture + specific style + how it interacts
                       with the environment
[wardrobe / fabric]    cut + colour + garment noun + material and wear + how it is worn
[build / bearing]      frame and shoulders + framing + action or gaze + overall aura
```

Examples of each, kept short deliberately:

```text
[age / ethnicity]      22-year-old East Asian woman with a classical, gentle face
[skin]                 cool-toned fair skin with a delicate sheen, retaining real
                       fine pores and natural skin texture
[facial features]      slender eyes with slightly moist rims, relaxed brows, a
                       straight delicate nose bridge, a soft jawline
[eyes]                 a gentle, focused gaze carrying deep attachment and a trace
                       of reluctance
[hair]                 jet-black hair in a low classical bun held by a plain jade
                       pin, a few loose strands at the cheeks moving in the breeze
[wardrobe]             minimalist cross-collar white robe in soft silk with a faint
                       lustre, collar slightly loosened
[build / bearing]      slender frame, narrow shoulders; chest-up framing with direct
                       eye contact; gentle classical bearing
```

## Where the anti-synthetic effect actually comes from

Two dimensions carry most of it:

**Skin texture.** The realism suffix — retaining real fine pores and natural skin
texture, optionally freckles or blemishes — counteracts a smoothing default.

**Interiority.** A gaze that conveys something specific is what separates a
photograph of a person from a rendering of a face.

The rest of the dimensions mainly do a different job: **keeping characters
distinct from one another.** Two characters described along the same seven
dimensions with different values will not converge; two characters described as
"a handsome man" and "a beautiful woman" will.

### The realism suffix is model-dependent

It exists to counteract a *particular* model's default. It does not transfer
blindly:

- On a model that already renders coarse skin, it **overshoots** — faces come out
  dirty or aged.
- The correct test is cheap: same prompt with and without the suffix. If the
  version without it already lands, drop it.
- Record both outcomes in [model profile](model-profile.md), including the
  overshoot. A phrase that overshoots is worse than one that does nothing.

## When to omit — per dimension, not all-or-nothing

With an identity reference supplied, written detail **competes** with the image,
and the image usually wins. But switching the whole block off throws away the two
dimensions a reference cannot carry.

| Situation | Dimensions to write |
|---|---|
| Text-driven, no identity reference | All of them |
| Reference locks style or scene only | All of them |
| **Reference locks the face or identity** | **Drop** facial features, skin, hair, wardrobe. **Keep** build/bearing and interiority |

Build, bearing, and interiority stay because a still reference cannot express
them — it has no gaze *behaviour* and no posture *over time*. Those are exactly
what text is for.

When a reference is supplied, describing the face again is not redundancy; it is
a competing instruction. Expect drift.

## Performance, not appearance

Appearance is static; a video needs behaviour. Add a performance line and keep it
observable — two to four cues per emotional turn:

```text
[performance core] restrained and nuanced: a shifting gaze, the rise and fall of
breathing, a slight tremble at the lips, one tear tracking down without being
wiped away
```

Do not write `she looks sad`. Draw from: gaze direction and shift, brow tension,
mouth movement, breathing, throat, hands, posture. Listing every facial detail
does not increase control — the cues start competing.

For several emotional turns, trigger each on an event rather than a timestamp:
`when she hears the applause, her fingers stop on the programme`. Event-triggered
turns do not depend on timing adherence, so they survive a model change.

## Negatives worth stating

Only when the piece is actually at risk of them:

```text
no exaggerated crying · no rapid cuts · no large body movements ·
no extra dialogue or background music · no distorted features or extra fingers
```

Keep this short and specific to the piece. An inherited blocklist makes the prompt
longer without making it better, and dilutes the negatives that matter.

## Related

- [multi reference](multi-reference.md) — binding an identity reference properly
- [model profile](model-profile.md) — where the realism-suffix findings live
- [troubleshooting](troubleshooting.md) — duplicate people, face drift
