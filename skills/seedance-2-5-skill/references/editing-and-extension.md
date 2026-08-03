# Editing and extension

Three jobs that all start from existing video. What they share: the source video
is the authority, and the prompt's job is to say precisely **what changes and what
must not.**

Editing and extension also lock some parameters automatically based on the input.
Check [capabilities](capabilities.md) before promising an aspect ratio or duration.

## Editing an existing video

```text
[Edit goal]
Edit @video1. Within <the whole video | a time range>, <add | remove | replace |
adjust> <object, region, or audio category>.

[Source role]
@video1 is the sole editing master. It defines <characters, scene, actions,
composition, camera movement, occlusion relationships, audio, event order>.

[Target material role]
@image1 defines <the specified attributes of the target>.
  Do not use <its background, composition, or unrelated objects>.

[Edit scope]
Modify only <object, region, time range, or audio category>.

[Preserve]
Keep <everything that must not change> from @video1.
```

Four things make this work:

**Sole editing master.** Say it. Without it, supplied reference images compete
with the source for control of composition and staging.

**Scope stated twice** — once as what to change, once as what to keep. The second
half is not redundant; it is what stops collateral changes.

**Target count.** When replacing an object, state how many exist:
`exactly one white lamp appears throughout; replace only the original yellow one`.

**Timeline inheritance.** A replaced object inherits everything the original did:

```text
The white lamp inherits every appearance, rotation, hand occlusion, and exit of
the original yellow lamp, including timing, path, and speed changes.
```

Without that line the replacement often appears correctly but moves differently.

### Natural responses are allowed

Scope should not be so tight that the result looks pasted. When changing light
colour, allow skin tone to respond: `change only the light colour on the right
wall and the area it illuminates; allow the character's skin tone to respond
naturally to the environmental light.`

### Audio can be edited separately

Dialogue, language, voice, music, and effects are independently addressable. Name
the speaker or sound category, the change, and what must stay:

```text
Edit @video1. Remove only the original background music. Keep the character
dialogue, lip sync, ambience, and action sound effects; preserve the visuals,
camera treatment, and editing rhythm from @video1.
```

## Forward extension — after the source

Describe the boundary state first, then what happens next.

```text
Extend @video1 forward. The first frame of the extended segment continues directly
from the last frame of @video1. Maintain continuity in <subject pose and
orientation>, <prop position>, <background and spatial relationships>, <camera
position and composition>, <lighting>, and <motion direction>.

Then, <the new action, event, camera treatment, or audio>.

Throughout, maintain <character identity and clothing>, <key props>, <background
layout>, and <axis of action>. Keep each subject one continuous instance: do not
duplicate or split it.
```

This is the context where seam defaults are correct: **require natural
continuation, smooth motion connection, no rigid cut, no objects appearing from
nowhere.** Those constraints belong here, not globally — see
[transitions](transitions.md).

## Backward extension — before the source

The direction that goes wrong, and the reason is specific.

Describe the new content first, then state the source's **first frame as the
explicit end state** of what you are generating:

```text
Extend @video1 backward. Before the source begins, <the preceding action or event>.

The last frame of the extended segment connects naturally to the first frame of
@video1: <subject pose and orientation>, <prop position and state>, <other
subjects' positions>. Match the <camera position and composition>, <lighting>, and
<motion direction> of @video1's first frame.

<Materials that should only appear after the source begins> must not appear early
in the backward extension.
```

**Writing only "then it connects to the source video" is the failure mode.** Two
things go wrong: characters or effects that belong *after* the source show up
early, and the image keeps changing after it has already reached the target state.
Both are fixed by treating the source's first frame as a stated end state — the
same device that carries staged long video.

The last line matters when references are supplied. Say which materials are for the
preceding segment and which must wait.

## Chaining

For an action longer than one request supports:

- Split where a stage genuinely ends, not mid-action.
- Feed the **real generated tail** forward — not the tail you intended.
- Generate chained segments in order; they depend on each other.
- Generate cut-separated shots independently and assemble in the edit.

A chain is an alignment aid, not a guarantee of an invisible seam.

## Review

Boundary frames connect **visually**. They are not pixel-identical splices, and
expecting that leads to endless regeneration of acceptable output.

Check, in order:

1. Both sides of the boundary — pose, props, light, motion direction
2. The complete extended segment, not only the seam
3. Whether anything appeared early (backward extension) or persisted wrongly
4. Audio continuity across the boundary; the extended segment's level may differ
   slightly from the source

Fix the failed segment only.

## Related

- [long video](long-video.md) — the end-state device this reuses
- [transitions](transitions.md) — where seam constraints belong
- [capabilities](capabilities.md) — what these tasks lock automatically
