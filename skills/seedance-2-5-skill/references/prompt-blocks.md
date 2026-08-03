# Prompt blocks and conventions

Use only the blocks that affect the shot.

| Block | Purpose | Example |
|---|---|---|
| Reference binding | State what an input controls | `Use the insulated cup in Image 1 as the subject` |
| Action | Give one observable event | `A hand naturally lifts and slightly turns the cup` |
| Space | Lock an important relation | `The cup sits at the centre of a wood table; window light enters from the left` |
| Camera | State framing and camera intent | `Medium close-up; smooth rightward move while tracking the cup` |
| Light/style | Unify the look when needed | `Warm practical light; hand-drawn food-animation texture` |
| Audio | Add only when native audio is enabled | `（upbeat jazz）<oil sizzling>` |
| End state | Land a stage on a checkable state | `End state: the cup sits centred on the shelf; both hands have left frame` |
| Constraint | Preserve expensive-to-redo details | `Keep the label readable; no subtitles` |

For whole-storyboard R2V, order events as `Shot 1 / Shot 2 / Shot 3`. For I2V,
write one shot and its start-to-end change.

## End states

Any stage that must land somewhere specific gets one. This is the block that
carries multi-event work — it converts "keep it consistent" into something the
model can target and you can check on a still frame.

```text
weak:   they keep working on the bouquet
strong: End state: the florist holds the bouquet in the left hand; the scissors
        are back on the right side of the bench
```

Rules:

- It must be **visible**. `she feels relieved` is not an end state;
  `her shoulders drop and the frown clears` is.
- Positions, who holds what, what is open or closed, what has left frame.
- The **final** stage needs one too — the most common omission, and the reason
  pieces trail off instead of landing.
- One primary change per stage. Two changes means the model picks one.

The same device has an image form (a keyframe sequence, where each image *is* one
stage's end state) and a video form (the boundary frame of an extension). See
[long video](long-video.md) and
[editing and extension](editing-and-extension.md).

## Camera

Choose one primary movement per shot:

- `Static camera`: observation, product stillness, dialogue.
- `Slow push-in`: reveal, emotion, key detail.
- `Slow pull-out`: release, ending, space reveal.
- `Smooth lateral move`: product display or a walking subject.
- `Tracking shot`: travel or action with a clear direction.
- `Pan or tilt`: reveal a second subject or location.
- `Crane move`: opening scale or final lift.
- `Smooth orbit`: product or medium/wide character shot; avoid large rotations in tight face close-ups.

A composite move is valid when every part supports one synchronized intent. For
example, `move smoothly to the right while tracking the person` is a side-tracking
shot. State direction, subject relation, and speed. Split at a planned cut when
movements are independent or compete for attention.

## Audio symbols

| Type | Symbol | Example |
|---|---|---|
| Music | `（）` | `（fast rock music plays in the background）` |
| Sound effect | `<>` | `<a dog barks in the distance>` |
| Dialogue | `{}` | `She says in Japanese {こんにちは}` |
| Caption | `【】` | `【Chapter One: Departure】` |

The runner enables native audio by default. Set `generate_audio:false` only
when the user explicitly wants a fully replaced post-production soundtrack. Keep
native dialogue in one language and use the symbols above.

## Constraints

Use constraints for specific risks rather than a long negative-prompt list:

- `Preserve the bottle proportion and readable label in Image 1.`
- `No subtitles.`
- `No unrelated text, platform UI, or corner badge.`
- `Keep only one corresponding person in frame; do not duplicate similar-looking people.`

Put the few most important constraints last. Do not require an exact
second-by-second schedule in text; use provider duration controls.

## Cut vocabulary

- `Hard cut to ...`: deliberate energy or angle change.
- `Match cut on <shape, colour, or movement> to ...`: match cut.
- `After steam, a person, or an object fully occludes the lens, cut to ...`: occlusion cut.
- `Insert <product or environmental detail>, then cut back ...`: cutaway.

Use `continue seamlessly from the final frame of the prior segment` only for a
true extension of the same shot. For whole-storyboard R2V, state a transition
only when it matters to the story; otherwise let ordered panels establish cuts.
