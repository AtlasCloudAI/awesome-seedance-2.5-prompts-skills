# Verifiability

One rule underneath every pattern here: **an instruction that cannot be checked
on the output cannot be debugged either.** Rewrite intent as observable result.

This is not about being verbose. Observable writing is usually *shorter* than the
adjective stack it replaces, because it commits to one reading instead of hedging
across several.

## End states

The highest-leverage pattern in the whole skill. Instead of asking for
consistency, state what is visibly true when a stage ends.

```text
weak:   the two of them keep working on the bouquet
strong: end state: the florist holds the bouquet in the left hand;
        the scissors are back on the right side of the bench
```

An end state must be **visible**. "She feels relieved" is not an end state;
"her shoulders drop and the frown clears" is.

### Three forms of the same idea

End states are not only a text device. The same concept has a form in each input
modality, and they compose:

| Form | Carrier | Use when |
|---|---|---|
| Stage end state | Text | Default. Multi-event pieces |
| Keyframe sequence | Images — each image *is* one stage's end state | You can draw or generate the stages |
| Boundary frame | Video — the seam between source and extension | Extending or continuing existing footage |

For a keyframe sequence, state the order explicitly and give each image one role:

```text
Use Image 1 through Image 4 as keyframes in this order.
Image 1 is the first frame: <opening composition and subject state>.
Image 2 is the second keyframe: <visible end state of stage 1>.
Image 3 is the third keyframe: <visible end state of stage 2>.
Image 4 is the last frame: <closing composition and subject state>.
The video passes through these states in order, moving continuously between them.
```

Separate images align more reliably than several stages combined into one grid.
Keyframes control stage order and key states; they do not reproduce every frame.

### Extension needs the boundary written on the correct side

Forward extension (after the source): describe the source's **last frame** as the
continuing state, then what happens next.

Backward extension (before the source): describe the new content first, then
state the source's **first frame as the explicit end state** of what you are
generating. Writing only "then it connects to the source video" is the known
failure — it lets later characters and effects appear too early, or lets the
image keep changing after it has already reached the target state.

Also state what must *not* appear early: `materials that belong after the source
begins must not appear in the backward extension`.

## Emotion becomes observable cues

Emotion words set a direction but leave the performance open. Anchor them:

```text
weak:   she is reluctant to let him go
strong: her gaze shifts off his face to the empty space beside him;
        her eyelids lower; the corners of her mouth lift briefly and fall;
        her chest rises once, held quiet
```

**Two to four cues is enough for one emotional turn.** Listing every facial
feature does not increase control — it competes with itself. Draw from: gaze
direction and shift, brow tension, mouth movement, breathing, throat, hands,
posture.

For multiple emotional turns, trigger each one on an event rather than a
timestamp:

```text
When <first event> happens, <first observable reaction>.
When <second event> happens, <change in gaze, breathing, or expression>.
After confirming <critical information>, what the subject was suppressing
becomes visible through <observable behaviour>.
```

Event-triggered turns survive a change of model better than timed ones, because
they do not depend on timing adherence.

## Pick the property that carries the concept

Making a line checkable is necessary but not sufficient. A lock can be perfectly
verifiable and still measure the wrong thing — and when that happens the model
satisfies it exactly while the piece fails.

A worked case. A hand-drawn VFX piece needed its drawn layer to stay hand-drawn,
so the lock read:

```text
the drawn forms stay graphically flat; never rendered as photoreal creatures
```

Checkable, unambiguous, and two different models both honoured it — by producing
smooth neon-tube vector outlines with even fill. Flat: yes. Hand-drawn: no. The
lock measured *flatness*, but the property that made the concept work was *visible
tooling*. The fix names the tool:

```text
crayon, chalk, coloured pencil, coarse brush; visible stroke direction, uneven
fill, ragged edges, line weight trembling frame to frame
```

The test to apply before trusting a lock: **can the model satisfy this sentence
and still lose the thing I wanted?** If yes, the lock is aimed at a side effect
rather than the cause.

This failure has a signature: the output is defensible against the spec line by
line, and still obviously wrong to anyone who knows the reference. When that
happens, do not add more locks — find the one property that is actually carrying
the concept and name it concretely.

Concrete over abstract, as a rule of thumb:

| Abstract lock | Concrete replacement |
|---|---|
| `graphically flat` | the drawing tool and its marks |
| `cinematic lighting` | key direction, quality, what it falls on |
| `realistic texture` | the specific surface: pores, dust, wear, grain |
| `dynamic camera` | handheld, arriving late, following which subject |
| `high quality` | delete it — it locks nothing |

## Name the mechanism, not just the effect

A subjective effect usually has more than one physical route to it. State the
effect alone and the model picks a route — often not yours.

A worked case. A shot needed a huge drawn mouth to feel threatening. Two drafts:

```text
draft A:  the open jaws span the entire domed ceiling
draft B:  the skull looms in the centre of the hall, front-on, jaws wide,
          teeth closing in from top and bottom
```

Draft B reads as the more aggressive instruction, and it produced a **worse**
result: the drawn mouth turned into a rendered, volumetric skull. Removing
`span the entire ceiling` removed the only **scale reference** in the shot, so the
model reached for the other available route to menace — volume — and volume
requires solidity, which broke the flat hand-drawn look the piece depended on.

The same effect, two mechanisms:

| Effect wanted | Mechanism A | Mechanism B |
|---|---|---|
| Menace | **Scale**: it fills the frame / spans a known structure | **Volume**: it is solid and coming at you |
| Grandeur | Subject small against something known | Wide lens, high vantage |
| Intimacy | Tight framing | Shallow focus, soft light |
| Speed | Motion blur, things passing frame | Camera shake, cutting rhythm |

Ask before writing an effect word: **how many ways could this be achieved?** If
more than one, and one of them conflicts with another lock, say which mechanism.

The failure signature here is distinctive: **one lock quietly cancels another.**
The piece satisfies the effect and violates a constraint elsewhere, and the two
lines never look related. Scale-versus-volume did exactly that — a change in the
final beat's phrasing broke the texture rule stated three paragraphs later.

## Craft terms: keep the term, add the description

Any term whose recognition varies — across models, across languages, across
industry usage — gets written twice:

```text
<term> + <target subject> + <visible change> + <foreground/background relation>
      + <direction or speed>
```

```text
rack focus: shift focus from the foreground leaves to the person behind them.
  The leaves go soft while the face resolves from soft to sharp.

bullet time: freeze the moment the bat meets the ball; the camera orbits
  clockwise around the contact point while debris hangs in the air.
```

A model that knows the term takes the shortcut. A model that does not follows the
description. One prompt serves both, which is why this beats maintaining a
per-model vocabulary table. See [portability](portability.md).

Terms that are usually safe unqualified: shot sizes (wide, medium, close-up,
extreme close-up), basic moves (push in, pull out, pan, tilt, tracking, orbit,
handheld), basic positions (low angle, overhead, first-person).

Terms that usually need the description: dolly zoom, bullet time, speed ramp,
rack focus, whip-pan transition, match cut, bounce ramp, and anything named after
a film, director, or platform trend.

Numeric values (aperture, focal length, shutter) are allowed, but the intended
visible result controls more reliably than the number alone.

## References: both halves, always

A reference role is incomplete until it says what *not* to take:

```text
Image 1 controls the character's face, hairstyle, and jacket.
  Do not use its background or composition.
Video 1 controls motion path, blocking, and cut points.
  Do not use its appearance, materials, or setting.
Audio 1 controls the narrator's voice.
  Do not inherit its room tone.
```

When a reference video already defines motion accurately, state only what to
inherit. Re-describing the same motion in text competes with the reference.

## Anti-patterns

| Do not write | Why it fails | Write instead |
|---|---|---|
| `keep it consistent` | Nothing to check | The visible end state |
| `cinematic`, `high quality`, `masterpiece` | No visual commitment | The specific light, palette, texture |
| `she looks sad` | Performance unconstrained | 2–4 observable cues |
| `Images 1–4 define four characters` | States no mapping | One binding line per subject |
| `make it feel epic` | Unfalsifiable | Scale cue: what is in frame, how small the subject is against it |
| `perfect lip sync` | Not an instruction | Supply the audio; state the speaker |
| `no bad anatomy, no artifacts, no blur...` | Inherited blocklist, unrelated to this piece | The two or three risks this piece actually has |
| `complete three actions in one second` | Impossible pacing demand | Give each action its own stage |

## Limits worth stating honestly

Verifiable writing raises the probability of a hit; it does not make generation
deterministic.

- Timestamps allocate a time budget. They are **not** frame-accurate edit points,
  and actions may land slightly before or after a boundary.
- Boundary frames connect visually. They are not pixel-identical splices.
- Multi-reference work selects and combines the right materials for each moment.
  It does not make every reference appear at once.
- Content that must be exactly right — subtitles, formulas, signage, product
  specs, frame-level timing — should come from prepared assets and
  post-production, not from prompt text.

## Related

- [spec-format](spec-format.md) — where each of these lines belongs
- [portability](portability.md) — which of these survive a model change
- [checklist](checklist.md) — pre-submission review
