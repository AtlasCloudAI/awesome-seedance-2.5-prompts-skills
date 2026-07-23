# Prompt templates

Replace angle-bracket placeholders. Choose one route; do not combine every
template into one request.

## Subject reference: image model, optional

Use this only when a person, product, object, or scene must recur.

```text
Create a clean reference image for <subject>.
Keep only these invariants: <silhouette or proportion>, <signature material or
wardrobe>, <key colour>, <must-preserve marking>.
<For a person: neutral face close-up, simple background, no text.>
<For a product: clear three-quarter view, clean background, no text.>
```

For a recurring person, generate a face close-up and a separate full-body image.
Use a multi-view turnaround only as an image-design aid; do not submit it as a
person's video identity reference.

## Seedream storyboard reference: default Seedance R2V route

Use this to generate the one storyboard image uploaded directly as `Image 1` to
Seedance. Panel numbers, arrows, and concise notes are allowed when they help
explain sequence.

```text
Generate one <rows>x<cols> visual storyboard grid for this sequence, read left
to right and top to bottom:
<sequence summary>.

Panel 1: <shot purpose, composition, action>.
Panel 2: <shot purpose, composition, action>.
...

Keep <subject / product / scene> consistent across panels: <invariants>.
Each panel must visibly show its planned composition and action. For a continuing
action, show the next meaningful visible moment; for a cut, show the new shot
clearly. Add panel numbers, concise notes, arrows, and clear cut or transition
intentions when they help explain order or motion.
```

Inspect panel order, planned beats, essential identity or scene details, and
task-critical visual elements before R2V. Regenerate the whole board when a
critical panel is wrong. Submit the accepted board as one image; create a clean
copy only if a test generation renders labels or dividers into the video.

## Clean storyboard: optional retry or I2V crop source

```text
Generate one clean <rows>x<cols> visual storyboard grid for this sequence:
<sequence summary>.

Each panel contains only the planned shot composition and action. Keep
<subject / product / scene> consistent: <invariants>.
Use thin neutral panel dividers only. Do not include numbers, captions, speech
bubbles, labels, subtitles, logos, unrelated overlay marks, UI, or contact-sheet
text.
```

Use this only after a previous generation leaked labels or dividers, or when a
deliberate I2V crop route needs it. Inspect layout and aspect ratios before
cropping.

## Whole-storyboard R2V: preferred while panels remain readable

Upload the complete storyboard as `Image 1`.

```text
Follow the storyboard in Image 1 in left-to-right, top-to-bottom order. Generate
one complete shot at a time.

Shot 1: <panel 1 action and camera>.
Shot 2: <panel 2 action and its cut or transition from the prior shot>.
Shot 3: <panel 3 action and camera>.

Keep <subject / product / scene invariants> throughout; <global lighting or
style rule>. <Audio rule, if enabled>.
Use Image 1 panel dividers, numbers, arrows, and notes only to understand the
shot order and intention; do not render them into the final video.
```

Do not split the board first. Panel count is not decisive; readable visual detail
is. Switch to I2V shot pairs only when independent reshoots or precise start/end
states matter more than one-pass transition quality.

## R2V asset references: one clip from a small asset pack

Upload only assets with different jobs.

```text
Use the <person / product> in Image 1 as the subject. Use Image 2 as the
<scene or wardrobe> reference and Image 3 as the <visual style or composition>
reference. <State the role of Video 1 or Audio 1 when supplied.>

<One main action>. <Camera and light>.
Keep <the two or three essential invariants>.
```

Do not treat a large set of sequential storyboard cells as an asset pack. Use a
whole storyboard or separate I2V shots for a sequence.

## I2V shot pair: start and end keyframes

Upload the start keyframe as `Image 1` and the target end keyframe as `Image 2`.

```text
Start from Image 1. The subject is <subject>.
<One continuous, observable action>.
Camera: <one move>. <Space or important object relationship>.
Naturally resolve into the composition and subject state in Image 2.
<Light or style>. Preserve <identity, product label, or scene invariants>.
```

For an intentional hard cut, do not use `Image 2` as the following shot's start
image. The next shot uses its own pair.

## Continuous extension or chain

Use the prior generated tail only for the same uninterrupted shot.

```text
Continue seamlessly from the final frame of the prior segment: <continue the
same action, subject, space, light, and camera intention>. <One next beat>.
```

Inspect the boundary before later segments. If the scene, angle, time, or story
emphasis changes, end the chain and design a cut.

## Native-audio markers

```text
（<music description>）
<sound-effect description>
<character> says {dialogue}.
On-screen caption: 【caption text】.
```

Keep dialogue in one language. Enable native audio only when the chosen provider
supports it and the shot needs it.

## Video-edit variant

```text
Strictly edit Video 1: change <one specified property> to <new value>.
Keep the subject, action, setting, lighting, and camera movement unchanged.
```

For editing, refer to `Video 1` directly; do not call it a reference video.
