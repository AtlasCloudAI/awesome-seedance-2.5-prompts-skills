# Cinematography vocabulary: camera, light, and composition

Use this vocabulary to describe how a shot is filmed. It is a creative library,
not an API parameter list or an outcome guarantee.

## Working rules

1. Pick one primary movement per shot. Composite movement is valid when
   direction, subject relation, and speed form one intention.
2. Use `Shot 1`, `Shot 2`, and `Shot 3` for storyboard order; set duration in
   provider controls instead of writing a timestamp schedule in the prompt.
3. Tight close-ups combined with large rotations are less stable than wider
   framing or a planned cut.
4. Choose the frame ratio and safe areas for the user's actual delivery context.

## Uncommon terms: keep the term, add the description

Terms whose recognition varies — niche vocabulary, terms with inconsistent
industry usage, anything named after a film, director, or platform trend — get
written twice:

```text
<term> + <target subject> + <visible change> + <foreground/background relation>
      + <direction or speed>
```

```text
rack focus: shift focus from the foreground leaves to the person behind them.
  The leaves go soft while the face resolves from soft to sharp.

bullet time: freeze the moment bat meets ball; the camera orbits clockwise
  around the contact point while debris hangs in the air.
```

A model that knows the term takes the shortcut; one that does not follows the
description. The same prompt then works on both, which is why this is preferable
to maintaining a per-model vocabulary list.

**Usually safe unqualified:** shot scales, the basic moves in the table below,
basic positions (low angle, overhead, first-person).

**Usually needs the description:** dolly zoom, bullet time, speed ramp, bounce
ramp, rack focus, whip-pan transition, match cut.

Aperture, focal length, and shutter values are allowed, but the intended visible
result controls more reliably than a number alone.

## Camera

### Shot scale

| Scale | What it shows | Typical use |
|---|---|---|
| Extreme close-up | Eye, mouth, droplet, texture | Tension or a key material detail |
| Close-up | Face or one object | Emotion, decision, product texture |
| Medium close-up | Head and shoulders | Dialogue and expression |
| Medium shot | Waist-up subject | Everyday action and expression |
| Wide shot | Full person and setting | Space and full-body action |
| Extreme wide / establishing shot | Whole environment | Opening tone, scale, or release |

Move wide to close to concentrate attention; move close to wide to release or
finish. Open with a scale that reads immediately, such as a strong detail or
an establishing shot with clear scale.

### Camera angle

- Eye level: objective, equal, natural.
- Low angle: power, heroism, pressure.
- High angle: vulnerability, overview, observation.
- Top-down: pattern, layout, preparation, spatial explanation.
- First-person view: participation and immersion.

### Movement

| Movement | Effect | Best use | Caution |
|---|---|---|---|
| Slow push-in | Focus and rising emotion | Reveal, decision, key detail | Avoid combining with a large orbit |
| Slow pull-out | Release and closure | Ending, spatial reveal | Keep the subject readable |
| Smooth lateral move | Smooth display or accompaniment | Product sweep, side-following walk | Avoid unexplained speed changes |
| Tracking shot | Motion and immersion | Run, walk, drive | Excessive handheld shake can distract |
| Pan or tilt | Guide attention and reveal | Move from A to B | Fast moves can blur |
| Crane move | Scale and emotional rise/fall | Opening lift, ending descent | Preserve a clear subject anchor |
| Smooth orbit | Three-dimensional display | Product or medium/wide character | Avoid large close-up face rotations |
| Handheld drift | Documentary tension or realism | Street, suspense, lived-in scene | Avoid for polished product work |
| Static camera | Stability and observation | Dialogue, still life, atmosphere | Give a person a subtle natural action |

Examples of coherent composite movement: `track the person with a steady
rightward lateral move`; `slowly push in while rising slightly to reveal the
subject`. Do not stack unrelated push-ins, orbits, and pans without a shared
purpose.

### Lens, depth, and transitions

- Shallow depth of field: isolates the subject and gives texture or intimacy.
- Deep focus: keeps environment and subject clear for documentary or landscape.
- Wide lens feeling: spatial energy, perspective, slight distortion.
- Long-lens feeling: compressed space and background separation.
- Hard cut: rhythm, energy, process montage.
- Dissolve: genuine change of time or place.
- One take: one continuous movement chain with compatible segment boundaries.

## Lighting

### Lighting setups

- Three-point lighting: key, fill, and rim; a reliable dimensional baseline.
- Rembrandt light: a 45-degree side key with a small cheek triangle; dramatic portraiture.
- Butterfly light: high frontal key; beauty and fashion.
- Backlit silhouette: light behind the subject; atmosphere, emotion, epic scale.
- Low key: mostly dark with controlled highlights; suspense, force, luxury.
- High key: bright, low-shadow image; clean, fresh, commerce.
- Practical light: a visible source such as lamp, stove, neon, or window; natural atmosphere.

Use one or two visual anchors in a video prompt: for example, `warm practical
light from the stove, soft rim light` or `cool neon backlight with a magenta
accent`. Keep key direction and warm/cool relationships consistent across shots
that share one place and time.

### Palette and mood

| Palette | Visual anchor | Use |
|---|---|---|
| Golden hour | Warm key, deep-blue shadows | Warmth, romance, final release |
| Blue hour | Cool environment, small warm points | Quiet, solitude, night opening |
| Noon hard light | Bright highlights, hard shadows | Reality, sport, documentary |
| Overcast soft light | Diffuse grey-white light, low saturation | Poetic, subdued, gentle |
| Neon night | Magenta and cyan contrast | Cyber city, fashion, nightlife |
| Warm kitchen | Yellow practical light, wood brown | Food, comfort, home |
| Cool technology | Cool white key, restrained brand colour | Clean product or finance |

## Composition

- Rule of thirds: stable general-purpose placement.
- Central symmetry: ritual, product hero, confrontation.
- Leading lines: direct attention with architecture, props, or light.
- Frame within a frame: use doorways, windows, or foreground objects for depth.
- Diagonal or triangular arrangement: movement or stable multi-subject layout.
- Foreground, midground, and background: plan three layers to avoid a flat image.
- One visual centre: one brightest, sharpest, or most active focal point.
- Negative space: leave room when simplicity and focus are the goal.

For a key product moment, place the decisive detail clearly in the composition,
give it a compatible light cue, and use a restrained push-in. Never impose a
single frame ratio or universal safe-area percentage; determine both from the
user's intended delivery context.
