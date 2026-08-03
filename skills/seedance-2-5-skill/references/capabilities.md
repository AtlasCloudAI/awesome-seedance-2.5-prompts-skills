# Capabilities: 2.0 versus 2.5, and what to promise

Two separate questions get conflated constantly:

1. What did the **model launch** announce?
2. What can **this provider's API** actually accept today?

Treat every number below as the first until verified as the second. Announced
capability is not an API contract, and several widely-quoted 2.5 headline
capabilities are platform features rather than API parameters.

## Reference material limits

| Type | 2.0 | 2.5 |
|---|---|---|
| Images per request | 0–9 | up to 30 |
| Video references | up to 3, single clip 2–15s, total ≤15s | up to 10, single clip 2–30s, total ≤30s |
| Audio references | up to 3, single clip 2–15s, total ≤15s | up to 10, single clip 2–30s, total ≤30s |
| Audio-only reference | not supported — at least one image or video required | supported |
| Combined ceiling | — | around 50 materials |

Effective clip bounds run marginally wider than the nominal ones (roughly 1.8s at
the low end, and slightly over the stated ceiling at the top) because the output
runs a little longer than the requested duration.

## Duration

| | 2.0 | 2.5 |
|---|---|---|
| Range | 4–15s | 4–30s |

## Resolution

2.0 exposes 480p and 720p. **For 2.5, read the provider's model page** — launch
material describes higher output than 2.0, but the enumerated values differ by
provider and are the only thing worth quoting. Do not restate launch-material
resolution as an API parameter.

## Stability ranges

Recommended ranges are about stability, not hard limits. Exceeding them is
allowed and gets less predictable — expect to regenerate more.

| Input | Stable | Possible, less reliable |
|---|---|---|
| Distinct subjects in subject images | 1–8 | 9–12 |
| Distinct subjects in subject audio/video | 1–5 | 6–10 |
| Reference clip duration per subject | 5–10s | longer |
| Source video for editing | under ~20s | longer |
| Reference images for video editing | 1–5 | 6–8 |

**Views:** up to about five subjects, single-view and multi-view both work. Past
that, prefer single-view. When several views are needed, separate images per view
are more stable than one collage.

## Automatically locked parameters

Some task types derive parameters from the input and will not let you set them:

| Task | Aspect ratio | Duration |
|---|---|---|
| Video editing | Inherits the source; cannot be set | Approximately the source's; cannot be set. Frame handling can shift it by up to ~0.3s |
| First frame, or first-and-last frame | Inherits the **first** image | Can be set |
| Video extension | Inherits the source | Extension length can be set |

For first-and-last-frame work, give both images the **same aspect ratio** —
mismatched ratios stretch the last frame.

## Platform features versus API parameters

The following appear in 2.5 launch and product documentation. They are features of
the **first-party creation platform**. Whether any of them is reachable through a
given API depends entirely on that provider, and several are UI-driven by nature:

| Feature | Why it may not be an API parameter |
|---|---|
| Long-video mode well beyond 30s in one pass | A distinct product mode, not a duration argument |
| Nested extension stacking past a single request's ceiling | An iterative UI flow |
| Mark-based editing (box select, brush, anchor points) | Requires on-frame annotation input |
| DCC blockout plugins (Maya, Blender) | A separate integration, not a model parameter |
| One-click assembly from a set of images | A product workflow above the model |
| Seamless bridging between two finished clips | May or may not be exposed |

**Do not quote these as model specifications.** The common error is repeating a
maximum duration from launch material as though any API call can request it. State
what the provider's model page enumerates; describe the rest as announced platform
capability if it needs mentioning at all.

## Before offering a route

1. Confirm the provider exposes the model. A 200 response is not confirmation —
   fallback pages return 200 too. Check the page's title and body, not the status
   code, and never infer an endpoint from a guessed org/model slug.
2. Read the enumerated parameters from that page rather than from doc examples.
   Parameter names sometimes differ between an external reference and a live page;
   when they disagree, the live page wins.
3. Confirm which task types are exposed. Text-to-video availability says nothing
   about whether editing or extension is available.
4. Record what you found in [model profile](model-profile.md) so the next run does
   not re-probe.

## What no capability tier fixes

- Text that must read exactly — subtitles, formulas, signage, product specs.
  Prepare it as an asset or add it in post.
- Frame-accurate timing. Timestamps allocate a budget, not an edit point.
- Pixel-identical preservation across an edit or a boundary. Editing preserves
  content and event order substantially, not exactly.

## Related

- [model profile](model-profile.md) · [long video](long-video.md) ·
  [multi reference](multi-reference.md) ·
  [editing and extension](editing-and-extension.md)
