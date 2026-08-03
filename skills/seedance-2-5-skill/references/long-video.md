# Long video: stages and end states

A longer duration is not a longer prompt. It is a **sequence of stages, each with
one primary change and a stated end state.** Get that structure right and the
piece holds; get it wrong and extra length only produces more drift.

## Structure

```text
[Goal]
  One sentence: what kind of piece, the central subject, the primary event.

[Global]
  Environment and texture · visual style · camera language · subject styling ·
  performance core · prohibitions

[Stage 1]
  Initial state: characters, props, scene as the piece opens
  Primary event: ONE action or change
  End state: what is visibly true when this stage ends

[Stage 2]
  Continue from: what must remain unchanged from the previous stage
  Primary event: ONE action or change
  End state: ...

[Stage n]
  Primary event: the closing event
  End state: the final visible state

[Consistency]
  What holds across every stage: identity, subject count, wardrobe, prop
  ownership, spatial direction, audio relationships
```

Restate the two or three most expensive consistency items at the physical end.

## The rules that matter

**One primary change per stage.** Two changes in one stage means the model
chooses which to honour. Split them.

**Every stage ends on something visible.** Not a mood, not "continues" — a
checkable state:

```text
End state: the florist holds the bouquet in the left hand; the scissors are
back on the right side of the bench.
```

Positions, who holds what, what is open or closed, what has left frame. If you
cannot check it on a still frame, it is not an end state.

**Each stage names what carries over.** `Continue from the previous stage: both
characters keep the same identities and clothing; the florist still holds the
bouquet.` This is where identity drift gets caught before it starts.

**The closing stage needs an end state too.** The most common omission, and the
reason pieces trail off instead of landing.

## Timestamps: only when something external demands them

Stages are the default. Reach for one-second precision only for a critical
handoff, an entrance or exit, a transition, or a beat that must land at a fixed
time.

| Pattern | Form | Use for |
|---|---|---|
| Time range | `0–5s ... 5–10s ... 10–15s` | Allocating pacing across stages |
| Exact point | `at 5s the camera whip-pans left and completes the transition` | One critical beat |
| Relative | `three seconds after the button is pressed, the lights fade` | A delay between events |

Rules:

- Ranges must be **consecutive and non-overlapping**.
- A range is a **time budget, not an edit point.** Actions may land slightly
  before or after a boundary.
- **Too little content in a range** gives the model more freedom; **too much**
  causes over-cutting or dropped events.
- Never demand a frequency such as "complete three actions in one second".
- Combine ranges with end states. A range says how long; the end state says what
  must be true when it is over. The end state is doing the real work.

If a model's timing adherence is weak, drop to stages — a timestamp the model
does not honour is worse than no timestamp, because it looks like control.
See [model profile](model-profile.md).

## Worked shape

```text
[Goal]
An instructional video showing a flower shop's order-packing process. A florist
and a store assistant arrange, wrap, and hand off a bouquet together.

[Stage 1]
Initial state: the florist stands behind the workbench; loose stems, scissors,
and wrapping paper lie on the tabletop.
Primary event: the florist arranges the stems and trims them to length.
End state: the florist holds the bouquet in the left hand; the scissors are back
on the right side of the workbench.

[Stage 2]
Continue from: both characters keep the same identities and clothing; the florist
still holds the bouquet.
Primary event: the assistant unfolds the wrapping paper; the florist places the
bouquet inside and ties it with a green ribbon.
End state: the wrapped bouquet lies flat in the centre of the workbench, ribbon
bow facing the camera.

[Stage 3]
Primary event: the assistant lifts the bouquet onto the pickup shelf.
End state: the bouquet sits centred on the pickup shelf; both characters stand
behind the workbench inspecting the finished order.

[Consistency]
Keep both identities, both outfits, the workbench orientation, the scissors
position, and bouquet ownership consistent throughout.
```

Note the absence of adjective stacking and per-stage camera vocabulary. The
Global block carries the look; the end states carry the structure.

## Beyond a single request

When the piece exceeds what one request supports, chain instead of cramming:

- Split at a point where a stage genuinely ends, not mid-action.
- Feed the real generated tail forward — see
  [editing and extension](editing-and-extension.md).
- Each segment still needs its own end states.

A chain is an alignment aid, not a guarantee of an invisible seam. Inspect both
sides of every boundary.

## Related

- [prompt blocks](prompt-blocks.md) · [multi reference](multi-reference.md) ·
  [capabilities](capabilities.md) · [editing and extension](editing-and-extension.md)
