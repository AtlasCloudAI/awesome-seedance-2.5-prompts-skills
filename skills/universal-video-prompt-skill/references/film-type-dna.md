# Film type DNA

A film type's DNA is the **3–5 minimum conditions without which the concept stops
being itself**. It sits between a premise (one sentence, per piece) and a full
spec (everything, per piece): more concrete than the premise, more abstract than
the prompt.

DNA exists so that a proven piece can be re-skinned instead of re-derived. Two
entry points, and mixing them wastes work:

| Entry point | Route | What you do |
|---|---|---|
| New concept | Write a spec from scratch | Derive your own premise |
| Proven film type, new subject | Re-skin | Load the DNA, swap the skin, tick each condition |

## Extracting DNA

Ask of every candidate line: **remove this — does the concept still exist?**

- Still exists → it is skin, not DNA. Leave it out.
- Stops existing → DNA.

### The removal test needs a second question

"Does the concept still exist" is too weak on its own. A re-skin can satisfy every
stated condition, stay internally coherent, and still lose the thing that made
anyone want to watch. So ask both:

1. Remove this — does the concept still **hold together**?
2. Remove this — is the reason someone wanted to watch it **still there**?

A condition that survives (1) but fails (2) is DNA that got misfiled as skin. This
is the most expensive mistake in the whole method, because the resulting piece is
defensible on paper and flat on screen — there is nothing to point at in review.

The tell: you compensate. If a re-skin makes you add new devices to recover an
effect the original got for free, you removed DNA.

Constraints on the result:

- **3–5 conditions.** More than five means skin has leaked in.
- **Each is a condition, not a description.** `bright room` is a description;
  `the second medium must not be self-luminous, so the room has to be bright
  enough for it to read` is a condition — it explains what it protects.
- **State what it protects.** A condition whose reason is unrecorded gets
  "optimised away" by the next person.

DNA is not a style guide. It says nothing about palette, subject, or setting —
those are exactly what re-skinning changes.

## Re-skinning

1. Load the DNA.
2. Swap the skin: subject, setting, palette, second medium, era.
3. **Tick each condition explicitly.** For each one, name how the new skin
   satisfies it. A condition you cannot tick means either the skin does not fit
   the film type, or you have found a real sixth condition.
4. Do not re-derive the premise. Adapt the DNA's own logic to the new skin.
5. Carry the granularity field over — it is DNA, not a per-piece choice.

Failing to tick conditions is the usual cause of a re-skin that "looks right but
feels wrong": every surface changed, and one invariant quietly broke.

## Granularity belongs to DNA

Time granularity is a property of the film type, not a per-piece decision:

- A performance or music-driven piece is second-level by nature — it is locked to
  an external track.
- A mood piece is `none` by nature — timestamps fragment it.
- Most narrative types are `stages`.

Recording it in the DNA is what lets a re-skin skip the question. Ask on a
from-scratch spec; inherit on a re-skin.

## Film types

Each entry: DNA conditions, granularity, and what is skin.

---

### Live-action × luminous hand-drawn VFX

A real-world scene into which a second, self-luminous, non-photoreal medium
spreads.

**DNA**

1. **Handheld POV, and the camera arrives late.** The drawing moves first; the
   camera then swings, tilts, or pushes after it. One continuous shot, walking
   through one space — no cuts. A stabilised or locked-off camera turns the piece
   from *chasing* something into *watching* something, and the immersion is the
   product.
2. **A live-action hand touches the drawing, and the drawing is born from that
   contact.** This is what establishes that both media occupy one physical space.
   Skip it and the drawn layer reads as a projection or a hologram composited on
   top. Under POV the hand is the camera operator's own, which also removes any
   need to explain who is drawing.
3. **The drawn medium shows its tool.** Crayon, chalk, coloured pencil, coarse
   brush: visible stroke direction, uneven fill, ragged edges, line weight
   trembling frame to frame. Glow is **weak** — enough to read as luminous, never
   enough to light the live-action space, which keeps its own real colour and
   texture. Smooth vector outlines and neon-tube looks break this.
4. **Drawn forms parasitise existing structures in the real space, and the host
   changes constantly.** Desk, wall, door, fridge; plinth, vitrine, label,
   fossil wall. Each transformation moves to a new host, so the camera keeps
   travelling. Write transformations as *collapsing into* the next form, never as
   one thing vanishing and another appearing.
5. **The last beats escalate from one small creature to the whole space.** The
   room itself becomes the drawing — a ceiling-spanning mouth, every picture frame
   turning into an eye. Without this the piece just stops.

**Granularity**: `stages` — the chain gives natural stage boundaries and there is
no external track. Note that stages here are **dense**: a 15s piece carries a
dozen or more transformations, two or three per stage.

**Skin**: the space (a lived-in room, an after-hours museum, a night park), what
gets drawn, palette, which structures act as hosts, what the final escalation
becomes.

**Notes**: condition 3 needs the medium named by tool, not by abstraction — see
the second worked failure below. Condition 5 is what a 15s version compresses and
a 30s version can actually deliver.

> **Worked failure 1 — trading away condition 3.**
> An earlier re-skin replaced the luminous medium with an absorbing one (ink),
> which forced the inverse lighting: a bright daylit room, so black could read as
> black. Internally that is airtight. But weak glow on a bright ground has nothing
> to read against, the camera also went locked-off (breaking condition 1), and the
> piece came out elegant instead of surreal. No review note could name what was
> missing — the concept still held together (removal test 1) while the reason to
> watch was gone (removal test 2).
>
> The absorbing-medium version is a legitimate film type; it is simply a
> *different* one, needing its own DNA.

> **Worked failure 2 — a lock that was verifiable but measured the wrong thing.**
> A later attempt locked the drawn layer as "graphically flat, never rendered as a
> photoreal creature." That is a perfectly checkable instruction, and two
> different models both satisfied it — by producing smooth neon-tube vector
> outlines with even fill. Flat: yes. Hand-drawn: not at all, and neon tubes are
> explicitly what this film type excludes.
>
> The fix was to stop naming an abstract property and name the tool instead:
> crayon, chalk, coloured pencil, coarse brush, visible stroke direction, uneven
> fill, ragged edges. **Verifiable is not sufficient — the lock has to measure the
> property that makes the concept work.** See
> [verifiability](verifiability.md#pick-the-property-that-carries-the-concept).

---

### Performance / music-driven

A subject performing to an existing or implied track.

**DNA**

1. **The audio track is the master clock.** Every visual beat is placed against
   it, never the reverse.
2. **Mouth and body sync are separate obligations.** Lip alignment and rhythmic
   body motion fail independently; lock them separately.
3. **The performance space stays coherent across cuts.** Same room, same light
   logic, or the cuts read as different shoots.
4. **One performer identity holds absolutely.** Any drift reads as a different
   person, which no amount of styling recovers.

**Granularity**: `second-level` — non-negotiable; the external track *is* the
hard constraint.

**Skin**: genre, choreography, wardrobe, set, palette, camera energy.

---

### Action / VFX set-piece

A physical event carrying the piece.

**DNA**

1. **Physical causality is visible.** Impact, mass, and reaction are shown, not
   implied. Effects without visible cause read as decoration.
2. **Spatial continuity across the action.** Screen direction and relative
   positions hold; crossing the axis mid-action destroys legibility.
3. **The effect obeys one material logic.** Metal stays rigid, cloth stays cloth.
   Naming the material behaviour in the negatives is usually required.
4. **One escalation, one release.** Sustained maximum intensity flattens.

**Granularity**: `stages` — unless a specific hit must land on a musical beat.

**Skin**: subject, effect type, setting, palette, scale.

**Notes**: heavy-VFX and large-scale segments generally do **better** with
text-driven staging than with a storyboard grid — over-specification suppresses
the camera priors that make these shots work. Verify per model; record it in the
profile.

---

### Anime / stylised 2D

**DNA**

1. **The render style holds absolutely** — no drift toward 3D or photoreal.
   Usually needs an explicit negative.
2. **Motion follows animation timing, not live-action timing.** Holds, snaps, and
   smears; not uniform interpolation.
3. **Line and shading logic stays consistent** across every cut.
4. **Stillness earns the motion.** Continuous movement reads as cheap animation.

**Granularity**: `stages`.

**Skin**: subject, genre, palette, era, setting.

---

## Adding a film type

Only after a piece is **verified working** — DNA extracted from an unverified
concept is a guess wearing a contract's clothing. Then:

1. Extract 3–5 conditions by the removal test.
2. State what each protects.
3. Record granularity.
4. Name what is skin.
5. Note per-model findings separately — those belong in
   [model-profile-schema](model-profile-schema.md), not here. DNA is
   model-independent; if a condition only holds on one model, it is a profile
   finding, not DNA.

## Related

- [spec-format](spec-format.md) — the spec a DNA gets re-skinned into
- [portability](portability.md) — model-dependent findings go in the profile
