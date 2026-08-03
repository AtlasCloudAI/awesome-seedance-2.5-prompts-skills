# Transitions

Two decisions, in this order:

1. **Should the model generate this transition at all,** or should the edit own it?
2. If the model, **name the type at the cut point.**

## First: does this belong in the edit?

A generation costs money and gives you less control than a timeline. Several
common transitions are two seconds of work in any editor:

| Transition | Where it belongs | Why |
|---|---|---|
| Straight cut | Edit | Nothing to generate |
| Fade to/from black or white | Edit | Exact, adjustable, free |
| Cross dissolve | Edit | Same, and easier to time |
| Flash frame (white/black) | Edit | Frame-accurate there, approximate here |
| Wipe / slide | Edit | A geometric effect, not a photographed event |

Generate the transitions that are **photographed events** — things an editor
cannot fabricate from two finished clips:

| Transition | What it is | Suits |
|---|---|---|
| **Occlusion** | Camera moves until an object fills frame; the next shot pulls out of it | Space and time jumps |
| **Match object** | The outgoing frame's shape, outline, or colour becomes the incoming one | Montage, conceptual links |
| **Motion / whip** | Rapid camera movement blurs out and resolves in the next scene | Speed, action, travel |
| **Action relay** | A subject's movement carries across: they leave frame one way and enter the next continuing it | Outfit changes, location hops |
| **Push / pull through** | A detail is magnified until it becomes the next scene, or the reverse | Scale shifts, worlds-within-worlds |
| **Material spread** | A medium — ink, smoke, light — spreads across frame and the next scene emerges from it | Stylised and culturally specific work |

These need generation because the camera and the subject have to *do* something
during the transition. That is also why they read as craft rather than as effects.

## Second: name it at the cut point

The skeleton is one line:

```text
Use a <transition type> at the cut.
```

Then, if the transition needs staging, describe the mechanics — what triggers it,
which direction things move, and what the next shot opens on:

```text
Use an occlusion transition at the cut. The camera pushes forward until a person's
back fills the frame and the image goes dark; the next shot pulls out of the
darkness onto the gallery interior.
```

For the trickier types, state: **trigger action → camera movement → the visual
transformation → the arrival state.** Arrival state is the one people skip, and it
is what stops the incoming shot from drifting after the transition completes.

## Do not attach "no hard cut" by default

`no hard cut` and `nothing appears from nowhere` are **extension and continuation
defaults**. In that context they are correct: a broken seam and objects
materialising are the two characteristic failures of continuing existing footage.

Everywhere else, a hard cut or a sudden appearance is a **technique** — teleports,
jump scares, magic reveals, comedic timing. Attaching those constraints globally
removes tools you may want.

Enable them as a scoped preset:

- Extending or chaining a continuous action → **on**
- Deliberate discontinuity → **off**
- Everything else → decide per piece

The general rule this instantiates: a default that is correct in one scope is not
a global rule. The same mistake shows up as "every beat must end on a camera move"
— true in a piece where camera movement *is* the premise, wrong as a universal.

## Letting the model choose

When the piece has a consistent style but no specific transition requirement, a
constrained menu works better than either silence or a hard pick:

```text
At each cut, choose whichever suits this piece from: occlusion, match object,
motion, or material spread.
```

Silence gets you an arbitrary transition; a hard pick may fight the material. A
menu keeps the choice inside a set you have already approved.

## Multi-shot support is model-dependent

All of this assumes the model can produce ordered shots with cuts in one
generation. Some models always bridge shots with movement instead. Verify before
building a spec around cuts — see [model profile](model-profile.md) and
[capabilities](capabilities.md).

When multi-shot is unavailable, generate one shot per request and assemble the
cuts in the edit. That also moves the five edit-owned transitions above back where
they belong.

## Related

- [editing and extension](editing-and-extension.md) — where the seam defaults apply
- [cinematography](cinematography.md) — camera vocabulary
- [troubleshooting](troubleshooting.md) — seams that jump or feel arbitrary
