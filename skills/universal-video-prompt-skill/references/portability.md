# Portability

A spec is portable. Not every line in it is. Sort each line into one of three
layers, because each needs different handling — and only one of them can be
written once and trusted everywhere.

| Layer | What it is | Handling | Where it lives |
|---|---|---|---|
| **Language** | Structure and observable description | Portable as written | The spec |
| **Bias** | What counteracts a model's defaults | Measured per model | The model profile |
| **Capability** | What the interface can physically accept | Probe, then degrade | The model profile |

The most common cross-model mistake is treating a bias-layer line as a
language-layer line — copying an anti-AI-look suffix that worked on one model
into a prompt for another, and assuming it still helps.

## Language layer — portable

- Bucket structure and scope discipline
- End states, in all three forms
- Observable emotional cues
- Term-plus-description double writing
- Reference roles stated as *controls X, do not use Y*
- Event-triggered progression

These depend on the model reading language, nothing more. Write once.

## Bias layer — measured, never assumed

Every generative model has defaults it returns to. Bias-layer text exists to
counteract *that model's* defaults, which means it does not transfer:

| Line | Why it is bias-layer |
|---|---|
| `retain real fine pores and skin texture` | Counteracts a smoothing/beauty default. On a model that already renders coarse skin it overshoots and the face looks dirty |
| `no subtitles, no BGM` | Only needed where unrequested subtitles and music actually appear |
| Specific transition vocabulary | Recognition varies; some terms are culturally scoped |
| `@image1` vs `Reference Image 1` | Interface addressing syntax |
| Negative lists generally | The failure modes differ per model |

Two of these deserve special handling.

### Anti-default suffixes: overshoot is a real failure

Do not port an anti-default phrase without checking the target's baseline. The
test is cheap: generate once with the phrase and once without, on the same spec.
If the version *without* it is already at or past the target, the phrase is
counterproductive on this model. Record both results in the profile — the
"ineffective or overshooting" field exists for this.

### Addressing syntax: the one thing that must be translated

This is the only common case where description cannot substitute. If the model
expects a particular token to bind a reference, that token has to be emitted
correctly or the binding is lost. Keep the mapping in the profile and translate
at compile time; leave the surrounding sentence structure alone.

## Capability layer — probe, then degrade

These are not misunderstandings; they are hard limits on what the interface takes.

| Capability | Why it matters |
|---|---|
| Reference addressing and count | Determines how much of a multi-reference spec survives |
| Multi-shot in one generation | Determines whether cuts belong in the prompt or the edit |
| Hard cut support | Same |
| Duration ceiling | Determines stage count per request |
| Timing adherence | Determines whether second-level granularity is honest |
| Audio: native, reference, or none | Determines whether audio lines belong in the prompt at all |

### Probing

No profile means no assumptions. Run the smallest test that settles the question,
then record it. Order probes cheapest-first and stop as soon as the spec is
satisfiable:

1. **Read what is published** — reference limits, durations, resolutions. Verify
   against the live model page rather than a doc example; treat a 200 response as
   inconclusive until the page content confirms the model exists.

   ⚠️ **A published enumeration is a hypothesis, not a limit.** Documented ranges
   are frequently narrower than what submission accepts, and pages contradict
   themselves — the same page has been observed stating three different duration
   ranges in three places. **Submit the value you actually want and let the API
   answer.** A rejected submission creates no task and costs nothing, so testing
   beats designing around the table.

   This error is asymmetric: believing a too-narrow table silently degrades the
   spec, the run then succeeds, and nothing in the output reveals that a better
   configuration was available. Nobody notices.
2. **One minimal generation** for anything behaviour-dependent — timing adherence
   and multi-shot cannot be read off a spec sheet.
3. **Record immediately**, including failures. An unrecorded probe gets re-run by
   the next person at full cost.

For timing adherence specifically, the probe that pays: run the same spec at
`stages` and at `second-level`, then measure the drift between requested and
delivered beats. That single comparison decides the model's default granularity.

### Degrading

| Missing capability | Degrade to |
|---|---|
| Multi-reference addressing | One reference for identity; carry everything else in text |
| Multi-shot in one generation | One shot per request; assemble the cuts in the edit |
| Reference count below spec | Merge roles by priority: identity > key prop > scene > style |
| Duration below spec | Split into stages that each stand alone, then chain via boundary frames |
| Weak timing adherence | Drop to stages plus end states |
| No native audio | Remove audio lines from the prompt; plan a post-production pass |
| Single-image I2V only | Keep the start frame as the sole visual lock; the rest becomes text |

**Always report a degrade.** A silently degraded spec looks like a spec that ran
as written, which makes the output impossible to interpret and quietly corrupts
any comparison built on it.

## Comparing models fairly

If the point is to compare rather than to ship, degrading defeats the purpose —
you end up comparing two different specs. For a controlled comparison:

- Hold the spec at the **intersection** of both models' capabilities. Do not use
  a 30-reference spec to compare a 30-reference model against a 9-reference one.
- Translate only the addressing syntax. Leave every other word identical.
- Keep bias-layer lines **out** of a comparison, or run them as a separate
  variable. An anti-default suffix tuned for model A is a handicap for model B.
- Record what you had to hold back. A comparison whose constraints are unstated
  reads as a general verdict when it is a narrow one.

## Related

- [model-profile-schema](model-profile-schema.md) — the fields to record
- [verifiability](verifiability.md) — the language-layer patterns in full
- [spec-format](spec-format.md) — where each layer's content sits in a spec
