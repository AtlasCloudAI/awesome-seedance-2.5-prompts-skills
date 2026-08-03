# Multi-reference binding

The goal is **not** to make every reference appear at once. It is to let the model
select the right materials for the moment it is generating. More references
without clearer relationships produces worse output, not richer output.

Work in this order. Each step exists because skipping it produces a specific
failure.

## Step 1 — Bind each subject individually

One line per subject. State what the reference controls **and** what not to take
from it.

```text
Character A corresponds to @image1. Use only the appearance, hairstyle, and clothing.
Character B corresponds to @image2. Use only the appearance, hairstyle, and clothing.
Prop A corresponds to @image3. Use only the structure, material, and colour.
Scene A references @image4. Use only the spatial layout and lighting.
  Do not use the people in the image.
```

**Never write** `@image1 through @image4 define four characters respectively`. That
states no mapping at all — it tells the model there are four characters and four
images, not which is which.

When several images show one object from different angles, say so and state the
output count:

```text
@image1 defines the front of the folding desk lamp.
@image2 defines its left-side structure.
@image3 defines its right-side structure.
All three images define one lamp. Exactly one lamp appears throughout.
```

Without the count line, multi-view references are a common cause of duplicated
objects.

## Step 2 — Group by type

Once there are more than a handful, group them. Grouping is what makes the
relationships readable rather than a flat list.

```text
[Characters]
Conservator → @image1. Appearance, hairstyle, clothing only.
Registrar   → @image2. Appearance, hairstyle, clothing only.
Do not interchange their appearances, clothing, actions, positions, or dialogue.

[Props]
Sample Case  → @image5, belongs only to the Conservator.
Record Board → @image6, belongs only to the Registrar.

[Scenes]
Conservation Lab → @image7. Space, materials, lighting only.
Gallery          → @image8. Space, materials, lighting only.

[Motion and audio]
@video1 defines the motion of the Conservator opening the Sample Case.
  Do not use the person or scene from the video.
@audio1 defines the Guide's voice and dialogue.
```

**Prop ownership** is the line people omit and then need. `belongs only to X` is
what prevents props migrating between characters mid-piece.

## Step 3 — Profile the subjects that recur

When one subject uses several references across several scenes, collect them:

```text
[Subject profile: Conservator]
Appearance and clothing: @image1
Fixed prop: Sample Case from @image5
Locations: Conservation Lab, Gallery
Motion references: case-opening from @video1, sample-placement from @video2
Do not use: other characters' clothing. Do not give this character the
Record Board or guide equipment.
```

A profile is worth writing when a subject appears in more than two scenes.
Below that it is overhead.

## Step 4 — Select references per scene

This is the step that makes many references work. Each scene names only what it
uses, plus its end state:

```text
Scene 1 | Inspection in the Conservation Lab
Use: Conservator, Sample Case, Conservation Lab, case-opening motion from @video1.
Event: the Conservator opens the Sample Case at the workbench and inspects it.
End state: the Conservator remains on the inner side of the workbench; the Sample
Case stays beside their right hand, on the left of frame.

Scene 2 | Registration in the Gallery
Use: Registrar, Record Board, Gallery.
Event: the Registrar checks the number on the Record Board beside the display case.
End state: the Registrar still holds the Record Board with both hands; no other
character enters the display-case area.
```

Without per-scene selection, the model tries to satisfy every reference in every
shot, which is the actual mechanism behind crowded, incoherent output.

## Choosing what to supply

Recommended ranges improve stability; they are not capability limits. Exceeding
them is allowed and gets less predictable.

| Material | Prefer | Why |
|---|---|---|
| Subject images | 1–8 distinct subjects | Beyond this, identity separation degrades |
| Subject video/audio | 1–5 subjects, 5–10s each | Longer references dilute what is inherited |
| Video editing | source under ~20s, 1–5 reference images | Scope stays controllable |

**Views:** with up to about five subjects, single-view and multi-view both work.
Past that, prefer single-view. When multiple views are needed, **separate images
per view beat one collage** — a composite is frequently read as several subjects.

**Faces:** use a clean face close-up plus a separate full-body image. Do not use a
front/side/back turnaround sheet as an identity input; it reads as multiple people.

**Motion references:** when a reference video already defines motion, camera, and
sequence accurately, state only which attributes to inherit. Re-describing the
same motion in text competes with the reference. A coarse blockout is the
exception — it supplies motion and space only, so the prompt must still define
subjects, scene, action, and style.

## Check before submitting

- [ ] Every subject bound individually, one line each
- [ ] Every reference states both what it controls and what not to use
- [ ] Multi-view sets state the output count
- [ ] Prop ownership stated where props could migrate
- [ ] References selected per scene, not required all at once
- [ ] Reference count within what the target model accepts —
      see [capabilities](capabilities.md)

## Related

- [long video](long-video.md) · [real person](real-person.md) ·
  [capabilities](capabilities.md) · [troubleshooting](troubleshooting.md)
