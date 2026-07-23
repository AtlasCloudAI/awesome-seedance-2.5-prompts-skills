# 🎬 Awesome Seedance 2.5 Prompts + Seedance 2.5 Skill

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-seedance-2.5-prompts-skills?style=social)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/pulls)
[![Prompts](https://img.shields.io/badge/prompts-111%2B-blue.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

A curated library of Seedance 2.5 video prompts plus **Seedance 2.5 Skill**, an installable Agent Skill that improves prompts, plans and reviews storyboards when needed, and generates controllable video. It uses Seedream 5.0 Pro for storyboard images and Seedance 2.0 as the current executable video default, switching to Seedance 2.5 only when the selected provider exposes it.

| [Browse prompts](https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Install Seedance 2.5 Skill](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/tree/main/skills/seedance-2-5-skill) | [Generate with Atlas Cloud](https://www.atlascloud.ai/nl/models/bytedance/seedance-2.5/text-to-video?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Get an API key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) |
|---|---|---|---|

<details><summary>Languages (20)</summary>

[English](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/README.md) · [简体中文](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_zh.md) · [繁體中文](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_zh-TW.md) · [日本語](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_ja.md) · [한국어](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_ko.md) · [ไทย](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_th.md) · [Tiếng Việt](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_vi.md) · [हिन्दी](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_hi.md) · [Español](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_es.md) · [Deutsch](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_de.md) · [Français](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_fr.md) · [Italiano](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_it.md) · [Português](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_pt.md) · [Türkçe](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_tr.md) · [العربية](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_ar.md) · [Bahasa Indonesia](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_id.md) · [Nederlands](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_nl.md) · [Polski](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_pl.md) · [Русский](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_ru.md) · [Svenska](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_sv.md)

</details>

<a id="contents"></a>

## 📖 Contents

- [Seedance 2.5 Skill](#seedance-2-5-skill)
- [How to use this repository](#how-to-use)
- [Model and execution defaults](#model-and-execution-defaults)
- [Seedance 2.5 prompt guide](#prompt-guide)
- [Curation and provenance](#curation-and-provenance)
- [Frequently asked questions](#faq)
- [Statistics](#statistics)
- [Featured Prompts](#featured-prompts)
- [Browse by Category](#browse-by-category)
- [All Prompts](#all-prompts)
- [Resources](#resources)
- [License](#license)

<a id="seedance-2-5-skill"></a>

## 🧠 Seedance 2.5 Skill

**Seedance 2.5 Skill** is the name of the installable Agent Skill in this repository. It turns a creative brief, existing prompt, references, or a storyboard into a production-ready prompt, the necessary intermediate assets, an execution request, and a review loop.

### Install

Install the workflow Skill and its default Atlas Cloud execution Skill:

```bash
npx skills add AtlasCloudAI/awesome-seedance-2.5-prompts-skills --skill seedance-2-5-skill
npx skills add AtlasCloudAI/atlas-cloud-skills --skill atlas-cloud
```

### What it does

- **Improve prompts:** turn an idea, an existing prompt, or reference assets into a clearer production-ready Seedance prompt.
- **Plan and review storyboards:** create a Seedream 5.0 Pro storyboard only when the video needs multi-shot planning or stronger visual consistency, display it as progress, and review its quality automatically.
- **Generate and review video:** use the best available Seedance model, submit through the selected Atlas Cloud channel, poll the same task to completion, and check the result.

<details><summary>Skill files and references</summary>

- [`SKILL.md`](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/skills/seedance-2-5-skill/SKILL.md)
- [`references/workflow.zh-CN.md`](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/skills/seedance-2-5-skill/references/workflow.zh-CN.md)
- [`references/cinematography.md`](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/skills/seedance-2-5-skill/references/cinematography.md)
- [`references/prompt-blocks.md`](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/skills/seedance-2-5-skill/references/prompt-blocks.md)
- [`references/prompt-templates.md`](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/skills/seedance-2-5-skill/references/prompt-templates.md)
- [`references/execution-adapters.md`](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/skills/seedance-2-5-skill/references/execution-adapters.md)
- [`references/troubleshooting.md`](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/skills/seedance-2-5-skill/references/troubleshooting.md)
- [`scripts/generate.mjs`](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/skills/seedance-2-5-skill/scripts/generate.mjs)

</details>

<a id="how-to-use"></a>

## 🚀 How to use this repository

1. **Browse:** filter by category, open a real preview when available, and copy the prompt.
2. **Adapt:** ask Seedance 2.5 Skill to rewrite a prompt for your subject, duration, aspect ratio, references, and continuity needs.
3. **Generate:** let the Skill create and show intermediate storyboards when needed, review them automatically, and submit the final image or video request through the selected Atlas channel.

<a id="model-and-execution-defaults"></a>

## ⚙️ Model and execution defaults

The workflow Skill and the execution adapter are separate layers. The workflow decides what to make; the selected Atlas channel submits, polls, and retrieves the media.

### Model defaults

**Storyboard stills:** Seedream 5.0 Pro. **Executable video default:** Seedance 2.0. **Seedance 2.5:** only when the selected provider exposes the model and its actual limits.

- **Atlas Cloud Skill:** default direct execution route inside an Agent conversation. If it is missing, the workflow helps install it and directs the user to obtain an API key.
- **Atlas MCP:** used when the user explicitly selects MCP and its generation tools are available.
- **Atlas CLI / REST:** used for explicit terminal, script, CI, or batch workflows.

All asynchronous jobs are polled every 2 seconds using the same prediction ID. A timeout or delayed output is not permission to submit a duplicate paid generation.

**[→ Get an Atlas Cloud API key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)**

<a id="prompt-guide"></a>

## 🧩 Seedance 2.5 prompt guide

Published Seedance 2.5 launch material describes up to 30-second generation, native 4K output, up to 50 multimodal references, and local region editing. Treat these as announced capabilities, not universal API parameters.

**Availability note:** provider availability, reference limits, duration, resolution, and editing controls can differ. The Skill verifies actual model availability instead of assuming Seedance 2.5 is callable.

### Prompt structure used by the Skill

1. **Reference binding:** state what each image, video, or audio reference controls.
2. **Observable action:** describe visible events in temporal order, including reactions and state changes.
3. **Spatial relationships:** say where subjects, objects, and the camera are in relation to each other.
4. **Camera and cuts:** specify framing, movement, cut order, match actions, and occlusions only where they matter.
5. **Visual style:** define lighting, palette, texture, atmosphere, and pace.
6. **Audio:** define dialogue, ambience, sound effects, or music when the selected model supports them.
7. **Constraints:** preserve only the identities, product details, scene traits, and exclusions that are essential.

### Primary references

- [Seedance 2.0 prompt guide — Volcengine](https://docs.volcengine.com/docs/82379/2222480?lang=zh)
- [Seedream 5.0 Pro user manual — ByteDance Lark](https://bytedance.larkoffice.com/wiki/HQ8HwXpNFiy6umkP8jNcBwF3nab)
- [Seedance 2.5 launch overview — Atlas Cloud](https://www.atlascloud.ai/nl/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)

<a id="curation-and-provenance"></a>

## 🔎 Curation and provenance

Every prompt record keeps its category, source platform, author, source link, input references, and preview video when available. Prompt text remains unchanged during README generation.

- The `official` and `community` labels describe where a prompt came from; they are not a guarantee that every prompt has been independently benchmarked across every provider or model version.
- A preview demonstrates one observed output under its original setup. Results can change with model version, provider parameters, references, aspect ratio, seed, and moderation.

<a id="faq"></a>

## ❓ Frequently asked questions

### What is Seedance 2.5 Skill?

It is the installable Agent Skill in `skills/seedance-2-5-skill/`. It improves prompts, prepares required storyboards or references, executes through Atlas Cloud, and reviews the outputs.

### Does the Skill require public Seedance 2.5 access?

No. The current executable default is Seedance 2.0. The Skill uses Seedance 2.5 only when the selected provider actually exposes it.

### Does every video need a storyboard?

No. The Skill creates or uses a storyboard only when it materially improves multi-shot planning, continuity, or reference control.

### Which Atlas route is used?

Atlas Cloud Skill is the default inside an Agent conversation. MCP, CLI, and REST are selected explicitly for their corresponding environments.

### Can I use the prompts without installing the Skill?

Yes. Browse and copy any prompt directly. Install the Skill when you want prompt adaptation, storyboard handling, execution, polling, and automated review.

<a id="statistics"></a>

## 📊 Statistics


| Metric | Count |
|--------|-------|
| Total Prompts | **111** |
| Categories | **27** |
| Preview Videos | **11** |
| Last Updated | **2026-07-23** |

<a id="featured-prompts"></a>

## 🔥 Featured Prompts

### No. 1: Kristallen bol match-cut op de beat

- **Category:** `Match-cut & creatieve effecten`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

Een op de beat gesynchroniseerde match-cut-film: één kristallen bol met een gloeiend "seedance"-logo erin gegraveerd blijft gecentreerd terwijl er acht scènes naadloos achter overvloeien.

#### Prompt

```text
Een razendsnelle, cinematische match-cut-kortfilm, synchroon aan een stuwende elektronische beat. Een vlekkeloze kristallen bol blijft de hele tijd pal in het midden gefixeerd, met een gloeiend "seedance"-logo erin gegraveerd. De bol blijft messcherp in beeld terwijl bij elke krachtige muziekbeat de achtergrond naadloos in een match-cut wisselt: Scène 1: macro-close-up, cinematisch spattend water rond de bol dat het licht kunstig breekt. Scène 2: een ochtendlijk vintage café, de bol op een tafel van ruw hout, opstijgende koffiestoom en wazige forenzen achter het raam. Scène 3: schemering in het gouden uur, een jeugdige skater gooit de bol omhoog en vangt hem met één hand, de straat raast achter hem achteruit in een prachtige tegenlicht-zonsondergang. Scène 4: een uitzinnig muziekfestival, handen heffen de bol hoog, hij breekt verblindende podiumlasers. Scène 5: een levendige tafel bij een familiefeest, de bol rust in het midden van het beeld, wazige figuren proosten en reiken naar eten. Scène 6: een donkere bioscoop, handen omvatten de bol terwijl de zwakke gloed van het reusachtige scherm over het oppervlak glijdt. Scène 7: de bol op een hevig trillend luidsprekermembraan, die op het hoogtepunt via een match-cut overgaat op een ronddraaiende dj-draaitafel in het midden. Scène 8: een kampeernacht in de openlucht, de achtergrond wordt een warm kampvuur en wiegende bokeh van lichtslingers. Finale: op de laatste downbeat wordt de bol omhoog uit beeld geslingerd; snede naar puur zwart, een minimalistisch wit "seedance" op zwarte achtergrond verschijnt pal in het midden. Op de beat gesynchroniseerde match-cut-montage, eersteklas cinematische kleurcorrectie, fotorealistische glasbreking, ray tracing, global illumination. Onderwerp messcherp, achtergrond met sterke bewegingsonscherpte.
```

### No. 2: Steampunk-uurwerk — one-take van 30s

- **Category:** `One-take-cinematografie`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

Een steampunk-miniatuur-3D-sequentie van 30 seconden met doorlopend cirkelende, doorheen glijdende camerabewegingen.

#### Prompt

```text
Een hoogwaardige, diep cinematische 3D-motion-graphics-sequentie van 30 seconden in een verfijnde steampunk- en vintage-miniatuurstijl, met doorlopend vloeiend cirkelende en doorheen glijdende camerabewegingen. [0-10s] Macro-close-up van een antieke messing wijzerplaat die zich laag voor laag ontvouwt tot in elkaar grijpende, roterende tandwielringen en volumetrische mist. De camera boort naar beneden door de tandwielen heen; een mechanische ornithopter schroeft zich omhoog uit een miniatuurcanyon van opgestapelde, verweerde oude boeken. [10-20s] De camera glijdt naar voren en volgt de ornithopter, gaat naadloos over in een snel ronddraaiend, sierlijk bewerkt messing zoötroop dat het licht van galopperende mechanische paarden projecteert. Het licht springt naar buiten en de scène wordt een zwevende messing kabelbaan op glinsterende koperen rails door een woud van tandwielen, badend in cinematisch licht van het gouden uur. [20-30s] De camera pant elegant naar beneden; daaronder verschijnt een verfijnd houten zeilschip met uurwerk dat door diepblauwe golven met glastextuur snijdt, die veranderen in een gloeiende reusachtige maan waarover silhouetten van ontdekkingsreizigers met lantaarns onder de sterren een bergkam van kristaladers beklimmen. De camera schroeft zich soepel terug door etherische wolken naar de tikkende messing wijzerplaat. Hyperreële mechanische texturen, rijke messing- en goudtinten, cinematische geringe scherptediepte, soepel en naadloos doorheen glijdend camerawerk, epische, fantastische avonturensfeer.
```

### No. 3: Ramen naar andere werelden (5 refs)

- **Category:** `Multi-beeldreferentie`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference5.png" width="180" referrerpolicy="no-referrer">

#### Description

Een merkconcept-kortfilm aangedreven door 5 referentiebeelden, glijdend door ramen naar verschillende werelden.

#### Prompt

```text
Een cinematische merkconcept-kortfilm. @image1 is het eerste beeld; het beeld trilt licht, de camera duwt in naar boomschaduwen die buiten voor het raam naar achteren voorbijrazen, hun terugwijken versnelt, dan een abrupte snede naar @image2, de snelheid neemt af terwijl de camera langzaam langs een beekje glijdt, vogelgezang en bloesems. De camera duikt onder water — geluid van luchtbellen — terwijl oranje kwallen sierlijk langs de lens drijven @image3; de camera trekt terug terwijl kleine visjes voorbijschieten en vanuit het water het raam in zwemmen @image4, een meisje dat om zich heen kijkt en hen gadeslaat. De camera trekt terug, verliest de scherpte, stelt dan weer scherp en wisselt op het ritme van de muziek: een traliewerkraam van een Chinese tuin @image5 met rondcirkelend licht, een kerkraam van glas-in-lood, een vliegtuigpatrijspoort, een koepeldakraam, een erker, een lamellenjaloezie, een Europese dakkapel, een deurkijkgaatje, een camerazoeker, een vogeloog, een close-up van een mensenoog. Het blijft rusten op het mensenoog; het oog sluit zich, scherm zwart, dan opent het zich plotseling — "seedance" verschijnt op de accentbeat in het midden van het oog.
```

### No. 4: One-take door zes kamers (8 refs)

- **Category:** `Multi-beeldreferentie`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference5.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference7.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference8.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference9.png" width="180" referrerpolicy="no-referrer">

#### Description

Eén doorlopende opname die een figuur door zes van sfeer wisselende kamers volgt, aangedreven door 8 referentiebeelden.

#### Prompt

```text
Eén doorlopende opname. De camera volgt soepel een persoon in een zwarte jas (referentie @image1) die van links naar rechts door zes met elkaar verbonden kamers met verschillende tinten en sferen beweegt. Elke kamer heeft dezelfde structuur: witte muren, lichte visgraat-houten vloer, Franse ramen van vloer tot plafond, witte transparante gordijnen (referentie @image2), maar het uitzicht naar buiten en de sfeer verschillen telkens. De hoofdpersoon loopt in een constant tempo en gaat door elke open deur. 0-5s kamer één, gevecht in Amerikaanse comicstijl: de hoofdpersoon vecht tegen een personage (@image3), dat wordt verslagen; 5-10s kamer twee, warmte, viltknutselstijl, uitzicht door het raam op een zonnebloemveld (@image4), warm oranje zacht licht, een schilder die zonnebloemen schildert (@image5), de hoofdpersoon verandert bij het binnenkomen zelf in viltstijl; 10-15s kamer drie, verdriet, zwart-witte comic-stop-motion, regen buiten, koudgrijs licht, een persoon alleen op de grond met de knieën omklemd, een telefoon die oplicht met een onbeantwoorde oproep; bij het binnenkomen knippert het licht uit en weer aan, de kamer kleurt, bloemen komen in één keer tot bloei; 15-20s kamer vier, vreugde, een in zee ondergedompelde kamer (referentie @image6), de hoofdpersoon wordt doorzichtig tussen koraal en vissen; 20-25s kamer vijf, verrassing, uitzicht door het raam op een hemel vol vuurwerk (referentie @image7), kleurrijk flikkerend licht, de hoofdpersoon meegesleept door een juichende menigte; 25-30s een lege witte kamer, de hoofdpersoon knipt met de vingers — knip-geluidseffect — het beeld wordt zwart, "seedance" in het midden (referentie @image8). Cinematische kwaliteit, high-fashion reclamestijl, de belichting volledig bepaald door de uitzichten uit de ramen voor sterk emotioneel contrast, geen tekst in beeld.
```

### No. 5: Videobewerking — Iedereen behalve de hoofdpersoon verwijderen

- **Category:** `Videobewerking`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

Bewerking op basis van een referentievideo: wis iedereen behalve de hoofdpersoon uit een bronclip.

#### Prompt

```text
Videobewerking: verwijder in @video1 iedereen behalve de hoofdpersoon.
```

### No. 6: Meertalige "Hello"-hiphopclip

- **Category:** `Multi-beeldreferentie`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

Een hiphopclip aan zee, opgebouwd uit één referentiebeeld; de leadzanger rapt "hello" in 8 talen, met lipsync, harde sneden op de beat.

#### Prompt

```text
Cinematische hiphop-/rapvideoclip, fotorealistische kwaliteit, hoogwaardige uitstraling, setting aan zee. Bouw het beeld op vanuit @image1: een band speelt op een goudgeel zandstrand met brekende golven — een leadzanger die een microfoon op een standaard vastgrijpt in het natte zand, een gitarist links, een rechts, een drummer achteraan; een weidse kustlijn erachter, rollende golven, een warme zon van het gouden uur die op het water glinstert, zeenevel in de lucht. De leadzanger in een rood trainingspak rapt recht in de camera — lippen en kaak precies synchroon met elk woord, het hoofd stoot mee op de beat. Heldere, krachtige, snelle, zelfverzekerde rap. HARDE SNEDE op de beat, elke wisseling een dubbel contrast (beeldgrootte en shottype veranderen tegelijk). Songtekst (de leadzanger zingt om beurten in elke taal 'hello', precies gelipsynct): Engels "Hello", Chinees "你好", Japans "こんにちは", Koreaans "안녕하세요", Portugees "Olá", Thais "สวัสดี", Spaans "Hola", Arabisch "مرحبا". 8 shots met harde sneden (wijde establishing-shot van onderaf; close-up rap in de camera; macro-insert van de gitaarsnaren; sluipende 3/4-orbit; laterale travelling aan de vloedlijn; opkijkshot van de drummer; strakke inzoom op de leadzanger; heroïsche inzoom op de hele band), één taal per shot. Witbalans 4000K, teal-and-amber-kleurcorrectie, 35mm, geringe scherptediepte, filmkorrel, zeenevel, lens flare van het gouden uur. Premium uitstraling, precieze lipsync, geen ondertitels, geen tekstoverlays, uitsluitend harde sneden, in totaal 20 seconden.
```

### No. 7: Installatietutorial voor capsulekoffiemachine (6 refs)

- **Category:** `Referentiegestuurde tutorial`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference5.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference6.png" width="180" referrerpolicy="no-referrer">

#### Description

Een installatie- en gebruikstutorial van 30 seconden voor een capsulekoffiemachine, zes referentiegestuurde stappen met voice-over — van het plaatsen van het waterreservoir tot de eerste spoeling.

#### Prompt

```text
Een tutorialvideo van 30 seconden over het installeren en gebruiken van een capsulekoffiemachine. 0-2s: de openingstitelkaart luidt "seedance capsulekoffiemachine installatietutorial". 2-5s, Stap 1: het waterreservoir plaatsen, referentie @image1, medium shot vanuit een licht verhoogde hoek, achterkant van de machinebehuizing, lijn het waterreservoir uit met de uitsparing aan de achterkant van de behuizing en druk het recht naar beneden tot het stevig vastklikt, duidelijk tonend hoe de clips aan de onderkant van het reservoir met de uitsparing van de behuizing samenvallen, de waterpeillijn zichtbaar door het transparante deel van het reservoir, voice-over "Plaats eerst het waterreservoir. Lijn het reservoir uit met de uitsparing aan de achterkant van de machine; een klik betekent dat het is vergrendeld.". 5-9s, Stap 2: de lekbak plaatsen, referentie @image2, close-up vooraanzicht, onderaan de voorkant van de behuizing, schuif de lekbak horizontaal in de geleiderails aan de onderkant tot hij volledig op zijn plaats zit, voice-over "Plaats vervolgens de lekbak. Lijn de bak uit met de rails aan de onderkant.". 9-13s, Stap 3: het opvangbakje voor gebruikte capsules plaatsen, referentie @image3, close-up vanuit een licht lage hoek, de holte onder de lekbak, lijn het opvangbakje uit met de uitsparing en schuif het gelijk met de lekbak naar binnen, voice-over "Plaats daarna het capsule-opvangbakje. Gebruikte capsules vallen hier automatisch in.". 13-18s, Stap 4: voor het eerst met water vullen, referentie @image4, close-up zijaanzicht, het waterreservoir boven/achter aan de behuizing, open het deksel van het reservoir en giet schoon water tot aan de MAX-waterpeillijn, sluit het dan, met nadruk op de waterpeillijn, voice-over "Open het deksel van het reservoir, giet schoon water erin en let erop de maximale waterpeillijn niet te overschrijden, sluit daarna het deksel van het reservoir.". 18-25s, Stap 5: inschakelen, referentie @image5, medium shot vooraanzicht, voorkant van de behuizing, steek het netsnoer in het stopcontact en druk op de aan-uitknop; het controlelampje gaat van knipperend naar continu (voorverwarmen voltooid), voice-over "Sluit de stroom aan en druk op de aan-uitknop. Het controlelampje begint te knipperen, wat betekent dat hij aan het voorverwarmen is. Wanneer het lampje continu brandt, is de machine klaar.". 25-30s, Stap 6: eerste spoeling (zonder capsule), referentie @image6, medium shot dat overgaat in een close-up van een driekwart-vooraanzicht, druk zonder een capsule te plaatsen direct op de zetknop zodat er heet water uitstroomt en de leidingen spoelt, met nadruk op de vermelding "geen capsule nodig", voice-over "De laatste stap, de eerste spoeling. Let op dat deze stap geen capsule vereist; druk gewoon op de zetknop. Zodra de spoeling klaar is, is je koffiemachine klaar voor gebruik."
```

### No. 8: Reclamespot voor fruitkoekjes (beeld + 6 videorefs)

- **Category:** `Multimodale referentie (beeld+video)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference1.png" width="180" referrerpolicy="no-referrer">
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference2.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference3.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference4.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference5.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference6.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference7.mp4" controls muted width="360"></video>

#### Description

Een heldere, kleurrijke reclamespot voor fruitkoekjes in vier smaken — aardbei, appel, druif, sinaasappel — opgebouwd uit één beeldreferentie en zes bewegings-/camera-videoreferenties, hard gemonteerd op een stuwende beat.

#### Prompt

```text
Een heldere, kleurrijke reclamestijl met fruitkoekjes in de hoofdrol, in vier smaken — aardbei, appel, druif en sinaasappel; referentie voor de aardbeismaak @image1. De koekjes en de bijpassende vruchten zijn in een streng geordend geometrisch raster gerangschikt; het totaalbeeld is strak, hoogwaardig en energiek. Het opent met de vruchten die snel om het centrale koekje cirkelen om snel de visuele focus te bepalen — verwijs naar de compositie van @video1 — inzettend op een krachtige muziekbeat. Vervolgens komen koekjes van verschillende smaken langs spiraalvormige banen naar de lens toe en vormen een duidelijke ruimtelijke diepte — verwijs naar de beweging en het camerawerk van @video2 — waarbij kleuren en smaken op de beat van de achtergrondmuziek wisselen. Het raster van koekjes pant met snelle vlak-naar-vlak-sneden naar links en rechts, de smaken aardbei, appel, druif en sinaasappel wisselen elkaar af terwijl het beeld snel op het ritme springt — verwijs naar de beweging van @video3. Het middendeel voegt een op-en-neer-pan toe; het nette koekjesraster stijgt en daalt verticaal als een machine — verwijs naar de beweging van @video4 — om de schoonheid van de ordening en de rijkdom van het product te benadrukken. In het hoogtepunt wordt een koekje doormidden gebroken en gaat het moment over in slow motion terwijl de fruitige vulling openbarst, kruimels alle kanten op spatten, het sappige gevoel en de korrelige impact versterkt — verwijs naar het explosie-effect van @video5 — en keert dan snel terug naar de snelle montage. Het einde brengt de Engelse tekst "Fresh on Seedance, made for viral vision" in beeld, die woord voor woord in snelle opeenvolging verschijnt met een sterke ritmische tekstbeweging en een freeze-frame van het product — verwijs naar @video6 — de vier koekjessmaken netjes op een rij terwijl de vruchten synchroon op en neer stuiteren voor een afsluitende, merkgerichte slotshot, het beeld vol jonge, energieke, heerlijke, deelbare reclamesfeer.
```

<a id="browse-by-category"></a>

## 🏷️ Browse by Category


- [`Match-cut & creatieve effecten`](#category-1): **1**
- [`One-take-cinematografie`](#category-2): **1**
- [`Multi-beeldreferentie`](#category-3): **3**
- [`Videobewerking`](#category-4): **2**
- [`Referentiegestuurde tutorial`](#category-5): **1**
- [`Multimodale referentie (beeld+video)`](#category-6): **1**
- [`Beeldreferentie`](#category-7): **1**
- [`Beeldreferentie (cinematisch)`](#category-8): **1**
- [`E-commerce Verkoop`](#category-9): **8**
- [`Eten & Drinken`](#category-10): **8**
- [`Beauty & Mode`](#category-11): **6**
- [`Digitale Technologie`](#category-12): **6**
- [`Auto's`](#category-13): **4**
- [`Vastgoed & Wonen`](#category-14): **4**
- [`Persoonlijke Presentatie / Digitale Mensen`](#category-15): **6**
- [`Korte Series / Emotionele Verhalen`](#category-16): **8**
- [`Merken-TVC / Reclame`](#category-17): **6**
- [`Reizen / Cultuurtoerisme`](#category-18): **6**
- [`Huisdieren / Dieren`](#category-19): **5**
- [`Kinderen / Educatie / Wetenschap`](#category-20): **5**
- [`Gaming / CG / Fantasy`](#category-21): **5**
- [`Animatie / Cartoons`](#category-22): **4**
- [`Sport / Fitness`](#category-23): **4**
- [`Muziek / Dans / Muziekvideo's`](#category-24): **4**
- [`Feestdagen / Seizoenen`](#category-25): **5**
- [`Natuur / Astronomie / Documentaires`](#category-26): **4**
- [`Personificatie / Creatieve Memes`](#category-27): **2**

<a id="all-prompts"></a>

## 📋 All Prompts


<a id="category-1"></a>

### Match-cut & creatieve effecten (1)

### No. 1: Kristallen bol match-cut op de beat

- **Category:** `Match-cut & creatieve effecten`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

Een op de beat gesynchroniseerde match-cut-film: één kristallen bol met een gloeiend "seedance"-logo erin gegraveerd blijft gecentreerd terwijl er acht scènes naadloos achter overvloeien.

#### Prompt

```text
Een razendsnelle, cinematische match-cut-kortfilm, synchroon aan een stuwende elektronische beat. Een vlekkeloze kristallen bol blijft de hele tijd pal in het midden gefixeerd, met een gloeiend "seedance"-logo erin gegraveerd. De bol blijft messcherp in beeld terwijl bij elke krachtige muziekbeat de achtergrond naadloos in een match-cut wisselt: Scène 1: macro-close-up, cinematisch spattend water rond de bol dat het licht kunstig breekt. Scène 2: een ochtendlijk vintage café, de bol op een tafel van ruw hout, opstijgende koffiestoom en wazige forenzen achter het raam. Scène 3: schemering in het gouden uur, een jeugdige skater gooit de bol omhoog en vangt hem met één hand, de straat raast achter hem achteruit in een prachtige tegenlicht-zonsondergang. Scène 4: een uitzinnig muziekfestival, handen heffen de bol hoog, hij breekt verblindende podiumlasers. Scène 5: een levendige tafel bij een familiefeest, de bol rust in het midden van het beeld, wazige figuren proosten en reiken naar eten. Scène 6: een donkere bioscoop, handen omvatten de bol terwijl de zwakke gloed van het reusachtige scherm over het oppervlak glijdt. Scène 7: de bol op een hevig trillend luidsprekermembraan, die op het hoogtepunt via een match-cut overgaat op een ronddraaiende dj-draaitafel in het midden. Scène 8: een kampeernacht in de openlucht, de achtergrond wordt een warm kampvuur en wiegende bokeh van lichtslingers. Finale: op de laatste downbeat wordt de bol omhoog uit beeld geslingerd; snede naar puur zwart, een minimalistisch wit "seedance" op zwarte achtergrond verschijnt pal in het midden. Op de beat gesynchroniseerde match-cut-montage, eersteklas cinematische kleurcorrectie, fotorealistische glasbreking, ray tracing, global illumination. Onderwerp messcherp, achtergrond met sterke bewegingsonscherpte.
```

<a id="category-2"></a>

### One-take-cinematografie (1)

### No. 1: Steampunk-uurwerk — one-take van 30s

- **Category:** `One-take-cinematografie`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

Een steampunk-miniatuur-3D-sequentie van 30 seconden met doorlopend cirkelende, doorheen glijdende camerabewegingen.

#### Prompt

```text
Een hoogwaardige, diep cinematische 3D-motion-graphics-sequentie van 30 seconden in een verfijnde steampunk- en vintage-miniatuurstijl, met doorlopend vloeiend cirkelende en doorheen glijdende camerabewegingen. [0-10s] Macro-close-up van een antieke messing wijzerplaat die zich laag voor laag ontvouwt tot in elkaar grijpende, roterende tandwielringen en volumetrische mist. De camera boort naar beneden door de tandwielen heen; een mechanische ornithopter schroeft zich omhoog uit een miniatuurcanyon van opgestapelde, verweerde oude boeken. [10-20s] De camera glijdt naar voren en volgt de ornithopter, gaat naadloos over in een snel ronddraaiend, sierlijk bewerkt messing zoötroop dat het licht van galopperende mechanische paarden projecteert. Het licht springt naar buiten en de scène wordt een zwevende messing kabelbaan op glinsterende koperen rails door een woud van tandwielen, badend in cinematisch licht van het gouden uur. [20-30s] De camera pant elegant naar beneden; daaronder verschijnt een verfijnd houten zeilschip met uurwerk dat door diepblauwe golven met glastextuur snijdt, die veranderen in een gloeiende reusachtige maan waarover silhouetten van ontdekkingsreizigers met lantaarns onder de sterren een bergkam van kristaladers beklimmen. De camera schroeft zich soepel terug door etherische wolken naar de tikkende messing wijzerplaat. Hyperreële mechanische texturen, rijke messing- en goudtinten, cinematische geringe scherptediepte, soepel en naadloos doorheen glijdend camerawerk, epische, fantastische avonturensfeer.
```

<a id="category-3"></a>

### Multi-beeldreferentie (3)

### No. 1: Ramen naar andere werelden (5 refs)

- **Category:** `Multi-beeldreferentie`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference5.png" width="180" referrerpolicy="no-referrer">

#### Description

Een merkconcept-kortfilm aangedreven door 5 referentiebeelden, glijdend door ramen naar verschillende werelden.

#### Prompt

```text
Een cinematische merkconcept-kortfilm. @image1 is het eerste beeld; het beeld trilt licht, de camera duwt in naar boomschaduwen die buiten voor het raam naar achteren voorbijrazen, hun terugwijken versnelt, dan een abrupte snede naar @image2, de snelheid neemt af terwijl de camera langzaam langs een beekje glijdt, vogelgezang en bloesems. De camera duikt onder water — geluid van luchtbellen — terwijl oranje kwallen sierlijk langs de lens drijven @image3; de camera trekt terug terwijl kleine visjes voorbijschieten en vanuit het water het raam in zwemmen @image4, een meisje dat om zich heen kijkt en hen gadeslaat. De camera trekt terug, verliest de scherpte, stelt dan weer scherp en wisselt op het ritme van de muziek: een traliewerkraam van een Chinese tuin @image5 met rondcirkelend licht, een kerkraam van glas-in-lood, een vliegtuigpatrijspoort, een koepeldakraam, een erker, een lamellenjaloezie, een Europese dakkapel, een deurkijkgaatje, een camerazoeker, een vogeloog, een close-up van een mensenoog. Het blijft rusten op het mensenoog; het oog sluit zich, scherm zwart, dan opent het zich plotseling — "seedance" verschijnt op de accentbeat in het midden van het oog.
```

### No. 2: One-take door zes kamers (8 refs)

- **Category:** `Multi-beeldreferentie`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference5.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference7.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference8.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference9.png" width="180" referrerpolicy="no-referrer">

#### Description

Eén doorlopende opname die een figuur door zes van sfeer wisselende kamers volgt, aangedreven door 8 referentiebeelden.

#### Prompt

```text
Eén doorlopende opname. De camera volgt soepel een persoon in een zwarte jas (referentie @image1) die van links naar rechts door zes met elkaar verbonden kamers met verschillende tinten en sferen beweegt. Elke kamer heeft dezelfde structuur: witte muren, lichte visgraat-houten vloer, Franse ramen van vloer tot plafond, witte transparante gordijnen (referentie @image2), maar het uitzicht naar buiten en de sfeer verschillen telkens. De hoofdpersoon loopt in een constant tempo en gaat door elke open deur. 0-5s kamer één, gevecht in Amerikaanse comicstijl: de hoofdpersoon vecht tegen een personage (@image3), dat wordt verslagen; 5-10s kamer twee, warmte, viltknutselstijl, uitzicht door het raam op een zonnebloemveld (@image4), warm oranje zacht licht, een schilder die zonnebloemen schildert (@image5), de hoofdpersoon verandert bij het binnenkomen zelf in viltstijl; 10-15s kamer drie, verdriet, zwart-witte comic-stop-motion, regen buiten, koudgrijs licht, een persoon alleen op de grond met de knieën omklemd, een telefoon die oplicht met een onbeantwoorde oproep; bij het binnenkomen knippert het licht uit en weer aan, de kamer kleurt, bloemen komen in één keer tot bloei; 15-20s kamer vier, vreugde, een in zee ondergedompelde kamer (referentie @image6), de hoofdpersoon wordt doorzichtig tussen koraal en vissen; 20-25s kamer vijf, verrassing, uitzicht door het raam op een hemel vol vuurwerk (referentie @image7), kleurrijk flikkerend licht, de hoofdpersoon meegesleept door een juichende menigte; 25-30s een lege witte kamer, de hoofdpersoon knipt met de vingers — knip-geluidseffect — het beeld wordt zwart, "seedance" in het midden (referentie @image8). Cinematische kwaliteit, high-fashion reclamestijl, de belichting volledig bepaald door de uitzichten uit de ramen voor sterk emotioneel contrast, geen tekst in beeld.
```

### No. 3: Meertalige "Hello"-hiphopclip

- **Category:** `Multi-beeldreferentie`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

Een hiphopclip aan zee, opgebouwd uit één referentiebeeld; de leadzanger rapt "hello" in 8 talen, met lipsync, harde sneden op de beat.

#### Prompt

```text
Cinematische hiphop-/rapvideoclip, fotorealistische kwaliteit, hoogwaardige uitstraling, setting aan zee. Bouw het beeld op vanuit @image1: een band speelt op een goudgeel zandstrand met brekende golven — een leadzanger die een microfoon op een standaard vastgrijpt in het natte zand, een gitarist links, een rechts, een drummer achteraan; een weidse kustlijn erachter, rollende golven, een warme zon van het gouden uur die op het water glinstert, zeenevel in de lucht. De leadzanger in een rood trainingspak rapt recht in de camera — lippen en kaak precies synchroon met elk woord, het hoofd stoot mee op de beat. Heldere, krachtige, snelle, zelfverzekerde rap. HARDE SNEDE op de beat, elke wisseling een dubbel contrast (beeldgrootte en shottype veranderen tegelijk). Songtekst (de leadzanger zingt om beurten in elke taal 'hello', precies gelipsynct): Engels "Hello", Chinees "你好", Japans "こんにちは", Koreaans "안녕하세요", Portugees "Olá", Thais "สวัสดี", Spaans "Hola", Arabisch "مرحبا". 8 shots met harde sneden (wijde establishing-shot van onderaf; close-up rap in de camera; macro-insert van de gitaarsnaren; sluipende 3/4-orbit; laterale travelling aan de vloedlijn; opkijkshot van de drummer; strakke inzoom op de leadzanger; heroïsche inzoom op de hele band), één taal per shot. Witbalans 4000K, teal-and-amber-kleurcorrectie, 35mm, geringe scherptediepte, filmkorrel, zeenevel, lens flare van het gouden uur. Premium uitstraling, precieze lipsync, geen ondertitels, geen tekstoverlays, uitsluitend harde sneden, in totaal 20 seconden.
```

<a id="category-4"></a>

### Videobewerking (2)

### No. 1: Videobewerking — Iedereen behalve de hoofdpersoon verwijderen

- **Category:** `Videobewerking`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

Bewerking op basis van een referentievideo: wis iedereen behalve de hoofdpersoon uit een bronclip.

#### Prompt

```text
Videobewerking: verwijder in @video1 iedereen behalve de hoofdpersoon.
```

### No. 2: Stoomtrein doorbreekt het scherm (videobewerking)

- **Category:** `Videobewerking`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-reference1.mov" controls muted width="360"></video>

#### Description

Een videobewerking die de originele oude-bioscoopclip @video1 intact houdt en er alleen een stoomlocomotief aan toevoegt die door het scherm breekt en het doek scheurt, waarbij zwart-wit op het moment van de inslag omslaat naar volle kleur.

#### Prompt

```text
Hyperreële cinematisch-realistische stijl met fotorealistische live-actiontextuur, die de reële geloofwaardigheid van het naar buiten brekende fysieke object (de stoomtrein) benadrukt; geen CGI-glans / game-engine / gestileerde 3D. Behoud de originele compositie, de belichting van de projectiezaal, de handheld-camerastaat en de natuurlijke onvolkomenheden van @video1. Bronvideo vergrendeld: houd @video1 volledig intact als basisbeeld (de ouderwetse projectiezaal, de van achteren geziene rijen toeschouwers met hoeden, de kegelvormige bundel van de projector, het scherm, het omgevingslicht, de kleurtoon en de handheld-beweging allemaal ongewijzigd); de enige toevoegingen: de trein die uit het scherm breekt, de licht- en schaduwveranderingen die hij meebrengt, het scheuren van het scherm en de lichte fysieke inslag op de zaal en de toeschouwers op de eerste rij. Kleuromslag-regel (de centrale toevoeging): houd aan het begin strikt de originele zwart-wit-oude-filmtextuur van @video1 aan (korrel / krassen / flikkering / monochroom); op het exacte moment dat de locomotief werkelijk door het scherm breekt en de realiteit in barst, slaat het beeld abrupt om van zwart-wit naar volle, echte kleur, waarbij de kleur zich als een schokgolf over het hele beeld verspreidt, gecentreerd op het punt waar de trein doorbreekt (het zwarte stalen lichaam van de trein, de roodkoperen ketel, de oranjegele gloed van de stoomlamp, het warme bruin van de houten wagon, de witgrijze stoom en het warme bruin van de projectiezaal komen alle overeenkomstig tot kleur); de kleuromslag is precies gesynchroniseerd met de doorbraak van het scherm, waarna de fotorealistische kleur tot het einde behouden blijft. Schermscheuring vergrendeld: het scherm is een echt wit projectiedoek met echte stofspanning; terwijl de trein naar buiten breekt, wordt het met kracht opengescheurd langs de contour van de voorkant van de locomotief, met radiale scheuren waarvan de randen omkrullen en rondvliegende versnipperde stofvezels. Onderwerp: de voorkant van een ouderwetse stoomlocomotief die met kracht uit het scherm breekt, een zwart stalen lichaam, een cilindrische ketel, een koeienvanger aan de voorkant, een schoorsteen die witgrijze stoom uitstoot, een felle koplamp, de metalen oppervlakken met echte slijtage, olievuil, klinknagels en natte weerspiegelingen, met enorm gewicht en traagheid naar voren stormend. Camera: erft volledig de originele handheld-beweging van @video1, niet vloeiend gemaakt, niet opnieuw getimed, niet opnieuw gekadreerd; de doorbrekende trein blijft te allen tijde correct verankerd in het scherm en de zaalruimte en behoudt de juiste parallax, occlusie en grondcontactschaduw. Geluid: geen muziek, behoud alleen echte geluidseffecten van de scène, ervend van de projectiezaalsfeer van @video1 (het geratel van de projector, het geroezemoes van het publiek) en toevoegend: het geluid van het scheurende doek, gutsende stoom, het mechanische gebulder van stalen wielen en de luchtstoot van de inslag. Totale duur exact gelijk aan @video1; voeg niets toe behalve de trein zelf en zijn fysieke interacties, het scheuren van het scherm en de kleuromslag op het moment van de doorbraak. Geen slow motion, geen gevoel van magie, geen gestileerde horror; het eindresultaat moet eruitzien als een griezelig maar echt beeld van "een trein die door het scherm ramt, zwart-wit dat ogenblikkelijk kleur wordt", bij toeval vastgelegd door een echte camera in een oude projectiezaal.
```

<a id="category-5"></a>

### Referentiegestuurde tutorial (1)

### No. 1: Installatietutorial voor capsulekoffiemachine (6 refs)

- **Category:** `Referentiegestuurde tutorial`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference5.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference6.png" width="180" referrerpolicy="no-referrer">

#### Description

Een installatie- en gebruikstutorial van 30 seconden voor een capsulekoffiemachine, zes referentiegestuurde stappen met voice-over — van het plaatsen van het waterreservoir tot de eerste spoeling.

#### Prompt

```text
Een tutorialvideo van 30 seconden over het installeren en gebruiken van een capsulekoffiemachine. 0-2s: de openingstitelkaart luidt "seedance capsulekoffiemachine installatietutorial". 2-5s, Stap 1: het waterreservoir plaatsen, referentie @image1, medium shot vanuit een licht verhoogde hoek, achterkant van de machinebehuizing, lijn het waterreservoir uit met de uitsparing aan de achterkant van de behuizing en druk het recht naar beneden tot het stevig vastklikt, duidelijk tonend hoe de clips aan de onderkant van het reservoir met de uitsparing van de behuizing samenvallen, de waterpeillijn zichtbaar door het transparante deel van het reservoir, voice-over "Plaats eerst het waterreservoir. Lijn het reservoir uit met de uitsparing aan de achterkant van de machine; een klik betekent dat het is vergrendeld.". 5-9s, Stap 2: de lekbak plaatsen, referentie @image2, close-up vooraanzicht, onderaan de voorkant van de behuizing, schuif de lekbak horizontaal in de geleiderails aan de onderkant tot hij volledig op zijn plaats zit, voice-over "Plaats vervolgens de lekbak. Lijn de bak uit met de rails aan de onderkant.". 9-13s, Stap 3: het opvangbakje voor gebruikte capsules plaatsen, referentie @image3, close-up vanuit een licht lage hoek, de holte onder de lekbak, lijn het opvangbakje uit met de uitsparing en schuif het gelijk met de lekbak naar binnen, voice-over "Plaats daarna het capsule-opvangbakje. Gebruikte capsules vallen hier automatisch in.". 13-18s, Stap 4: voor het eerst met water vullen, referentie @image4, close-up zijaanzicht, het waterreservoir boven/achter aan de behuizing, open het deksel van het reservoir en giet schoon water tot aan de MAX-waterpeillijn, sluit het dan, met nadruk op de waterpeillijn, voice-over "Open het deksel van het reservoir, giet schoon water erin en let erop de maximale waterpeillijn niet te overschrijden, sluit daarna het deksel van het reservoir.". 18-25s, Stap 5: inschakelen, referentie @image5, medium shot vooraanzicht, voorkant van de behuizing, steek het netsnoer in het stopcontact en druk op de aan-uitknop; het controlelampje gaat van knipperend naar continu (voorverwarmen voltooid), voice-over "Sluit de stroom aan en druk op de aan-uitknop. Het controlelampje begint te knipperen, wat betekent dat hij aan het voorverwarmen is. Wanneer het lampje continu brandt, is de machine klaar.". 25-30s, Stap 6: eerste spoeling (zonder capsule), referentie @image6, medium shot dat overgaat in een close-up van een driekwart-vooraanzicht, druk zonder een capsule te plaatsen direct op de zetknop zodat er heet water uitstroomt en de leidingen spoelt, met nadruk op de vermelding "geen capsule nodig", voice-over "De laatste stap, de eerste spoeling. Let op dat deze stap geen capsule vereist; druk gewoon op de zetknop. Zodra de spoeling klaar is, is je koffiemachine klaar voor gebruik."
```

<a id="category-6"></a>

### Multimodale referentie (beeld+video) (1)

### No. 1: Reclamespot voor fruitkoekjes (beeld + 6 videorefs)

- **Category:** `Multimodale referentie (beeld+video)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference1.png" width="180" referrerpolicy="no-referrer">
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference2.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference3.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference4.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference5.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference6.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference7.mp4" controls muted width="360"></video>

#### Description

Een heldere, kleurrijke reclamespot voor fruitkoekjes in vier smaken — aardbei, appel, druif, sinaasappel — opgebouwd uit één beeldreferentie en zes bewegings-/camera-videoreferenties, hard gemonteerd op een stuwende beat.

#### Prompt

```text
Een heldere, kleurrijke reclamestijl met fruitkoekjes in de hoofdrol, in vier smaken — aardbei, appel, druif en sinaasappel; referentie voor de aardbeismaak @image1. De koekjes en de bijpassende vruchten zijn in een streng geordend geometrisch raster gerangschikt; het totaalbeeld is strak, hoogwaardig en energiek. Het opent met de vruchten die snel om het centrale koekje cirkelen om snel de visuele focus te bepalen — verwijs naar de compositie van @video1 — inzettend op een krachtige muziekbeat. Vervolgens komen koekjes van verschillende smaken langs spiraalvormige banen naar de lens toe en vormen een duidelijke ruimtelijke diepte — verwijs naar de beweging en het camerawerk van @video2 — waarbij kleuren en smaken op de beat van de achtergrondmuziek wisselen. Het raster van koekjes pant met snelle vlak-naar-vlak-sneden naar links en rechts, de smaken aardbei, appel, druif en sinaasappel wisselen elkaar af terwijl het beeld snel op het ritme springt — verwijs naar de beweging van @video3. Het middendeel voegt een op-en-neer-pan toe; het nette koekjesraster stijgt en daalt verticaal als een machine — verwijs naar de beweging van @video4 — om de schoonheid van de ordening en de rijkdom van het product te benadrukken. In het hoogtepunt wordt een koekje doormidden gebroken en gaat het moment over in slow motion terwijl de fruitige vulling openbarst, kruimels alle kanten op spatten, het sappige gevoel en de korrelige impact versterkt — verwijs naar het explosie-effect van @video5 — en keert dan snel terug naar de snelle montage. Het einde brengt de Engelse tekst "Fresh on Seedance, made for viral vision" in beeld, die woord voor woord in snelle opeenvolging verschijnt met een sterke ritmische tekstbeweging en een freeze-frame van het product — verwijs naar @video6 — de vier koekjessmaken netjes op een rij terwijl de vruchten synchroon op en neer stuiteren voor een afsluitende, merkgerichte slotshot, het beeld vol jonge, energieke, heerlijke, deelbare reclamesfeer.
```

<a id="category-7"></a>

### Beeldreferentie (1)

### No. 1: Woestijnhoornhagedis & grapefruit (3D-reclame)

- **Category:** `Beeldreferentie`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

Een heldere, glanzende 3D-animatiereclame: een uitgedroogde woestijnhoornhagedis vindt een grapefruit, bijt erin, en een sap-tsunami verandert de woestijn in een zomerse zee. Opgebouwd uit één personagereferentie.

#### Prompt

```text
Een 3D-animatiereclamestijl, heldere en doorschijnende kleuren; het vruchtvlees en het sap moeten intens verfrissend en indrukwekkend aanvoelen. De algehele sfeer is als een hoogwaardige geanimeerde reclamekortfilm met een vleugje overdreven humor. Het personage van de woestijnhoornhagedis is schattig, levendig en expressief, referentie @image1. De beeldtextuur verwijst naar het zachte natuurlijke licht, de fijne dons-/huidtextuur, de dromerige macro-scherptediepte en het realistische maar licht kinderlijke gevoel van het referentiebeeld. 0-3s: een woestijn verschroeid door de brandende zon, de lucht trilt van de hitte en het zand is gloeiend heet; een woestijnhoornhagedis ligt op het snikhete zand, de tong licht naar buiten, de ogen glazig, bijna uitgedroogd, wankelend om de paar stappen alsof hij zo gaat "verdampen". 3-6s: hij stopt plotseling, zijn neus trilt, en naar beneden kijkend ontwaart hij een koele, mollige, met dauw bedekte grapefruit, half begraven in het zand, glanzend als een woestijnwonder; de ogen van de hagedis worden in een oogwenk groot. 6-8s: hij springt erop af, omhelst de grapefruit stevig met beide handen en drukt zijn hele gezicht tegen de schil met een zalige "eindelijk leef ik"-uitdrukking; het beeld blijft 1 seconde staan en vormt een overdreven, grappig herinneringsmoment. 8-11s: hij kijkt op, opent zijn bek en neemt een grote hap; de schil van de grapefruit splijt open, het mollige vruchtvlees glanst doorschijnend, en het volgende moment barst het sap eruit als een tsunami. 11-16s: oranjeroze, doorschijnend, glinsterend grapefruitsap gutst wild naar buiten, stroomt de duinen af en overspoelt razendsnel de hele woestijn; het droge gele zand verandert ogenblikkelijk in een koele, fonkelende, naar fruit geurende zomerse zee, cactussen, rotsen en kleine duinen verzwolgen door de golven sap, de uitdrukking van de hagedis slaat om van verrukking naar afgrijzen. 16-20s: bijna verdronken in de "grapefruitzee", klampt hij zich in paniek vast aan een halve grapefruit als aan een reddingsboei en dobbert rond, steekt zijn doorweekte kop naar buiten en kijkt versuft. 20-24s: snede naar een wit scherm; de merknaam en slogan verschijnen pal in het midden: "Seedance Grapefruit — bijt in het vruchtvlees, wat eruit stroomt is de zomer." De voice-over leest de hele regel voor. 24-30s: terugsnede vanuit het wit; de woestijnhoornhagedis luiert nu op de drijvende grapefruit, draagt een piepklein zonnebrilletje en houdt een bekertje met een rietje vast, dobbert op zijn gemak op de "sapzee" op vakantie, omringd door drijvend oranje vruchtvlees, kleine ijsblokjes, koele spatten en een heldere blauwe hemel; de stemming verschuift van "overleven" naar "vakantie", en ten slotte leunt hij tevreden achterover tegen de grapefruit terwijl de camera uitzoomt en bevriest op een verfrissend, helder, speels zomerbeeld.
```

<a id="category-8"></a>

### Beeldreferentie (cinematisch) (1)

### No. 1: De val van de dronken man van het dak (zwarthumor-kortfilm)

- **Category:** `Beeldreferentie (cinematisch)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `nl`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

Een cinematische zwarthumor-kortfilm van circa 30s: een mollige, aangeschoten man tuimelt van een dak, grijpt een reddingslijn, knalt door een raam en valt gewoon in slaap. Personage uit één referentiebeeld; opgebouwd op harde sneden tussen kabaal en volledige stilte.

#### Prompt

```text
[De schrik van de dronken man op het dak — tuimelt over de rand — grijpt door het raam een touw — valt ter plekke flauw | zwarthumor-kortfilm | ongeveer 30 seconden] Premisse in één zin: een mollige, schattige, dronken man van middelbare leeftijd eet een burger en drinkt bier op het dak van een gebouw; terwijl hij opstaat en zich uitrekt verliest hij per ongeluk zijn evenwicht en valt, grijpt in zijn paniek een reddingstouw en knalt meteen door een raam een interieur in, is een seconde lang versuft en verbouwereerd, gaat dan gewoon liggen waar hij is en valt in een diepe slaap. Referentiebeeld @image1 — een mollige, schattige, dronken man van middelbare leeftijd: ronde, gedrongen bouw met een grote ronde bierbuik, klein van stuk, de bewegingen slap, traag en wankel van het drinken; rond gezicht, onderkin, door de drank blozende wangen en neus, tot spleetjes vernauwde ogen met een wazige blik, een onverzorgde krans van korte stoppels, warrig haar, een sullige, schattige, zorgeloze uitdrukking; hij draagt een wit onderhemd besmeurd met burgersaus dat losjes over zijn ronde buik hangt, een oude spijkerbroek, sloft voort op losse sloffen en klemt altijd een half opgegeten burger in zijn hand. Er is maar dit ene personage in de hele film, een 100% overeenkomst met het referentiebeeld. Algehele look: een nachtelijke cyberpunk-megastad, een dicht woud van wolkenkrabbers van glas en staal, neonreclames (cyaan / magenta / elektrisch blauw), holografische reclameborden, natte weerspiegelende grond, volumetrische mist, in de verte lichtsporen van vliegende auto's en drones. Echte live-actiontextuur, fysieke cinemalenzen, geen 3D-rendering / game-engine / anime-gevoel. De camera mengt handheld met kraan / drone; na de val duikt de camera met hem mee omlaag terwijl de buitenmuur van het gebouw en het neon naar boven strepen om snelheid over te brengen, 24-35mm breedbeeld-cinematische lenstextuur, 180-graden-sluiter-bewegingsonscherpte. Het sounddesign is de sleutel tot de zwarte komedie: herhaaldelijk hard snijden tussen "een enorm kabaal" en "volledige stilte". Doorlopend echte zwaartekracht. Storyboard (ongeveer 30 seconden): S1 (0-4s) opening, grote close-up van het kauwen (met geluid) het gezicht van de man vult het scherm, kauwt de burger met grote happen, een tevreden dronken toestand; S2 (4-9s) uittrekken naar een wide shot, uitrekken -> evenwicht verliezen en vallen (met geluid) hij komt wankel overeind en rekt zich groot uit, leunt achterover, kan zijn evenwicht niet houden, zijn voet glijdt weg en hij tuimelt achterover over de rand van het dak, zonder de burger ooit los te laten, met een panische "Eh——!"; S3 (9-12s) snede naar een geschrokken gezichtsclose-up (een luide schreeuw, enorm kabaal) de dronken ogen rond opengesperd, de onderkin samengeknepen, de mond wijd open in een schreeuwende "Ahh——!!", de wind loeit; S4 (12-16s) snede naar een verre opname op ooghoogte (volledige stilte) gezien vanaf het gebouw aan de overkant, een minuscuul wit figuurtje dat recht naar beneden stort van de wolkenkrabber, de neonstad weids en onverschillig, de volledige stilte vormt een zwarthumor-contrast met het enorme kabaal van een seconde eerder; S5 (16-21s) snede naar een gezichtsclose-up (schreeuwend) -> grijpt het touw, nog steeds schreeuwend, de handen maaiend in de lucht, grijpt hij plotseling een reddingskabel, de kabel schiet strak en buigt onder zijn gewicht met een zoevend geluid, de schreeuw breekt abrupt af terwijl hij met een ruk wordt tegengehouden en uitzwaait (een korte slow motion op het moment dat hij het touw grijpt); S6 (21-26s) snede naar een interieurhoek (stil) -> het glas versplintert -> hij knalt naar binnen, het interieur eerst stil met alleen het gezoem van de airconditioning, de volgende seconde barst het glas explosief naar binnen (een korte bullet time) terwijl de dronken man, burger en al, door het raam ramt, scherven radiaal naar buiten vliegend, neonlicht naar binnen stromend, en hij smakt zwaar de kamer in op de vloer / de bank, gebroken glas rinkelend; S7 (26-30s) einde, een geschrokken seconde -> valt in slaap, de man languit met gespreide armen en benen op de vloer, bedekt met gebroken glas, nog steeds de burger omklemmend, opent langzaam zijn ogen, versuft, een hele seconde lang wezenloos en geschrokken, kijkt om zich heen alsof hij denkt "waar ben ik?", dan neemt de dronkenschap het over en, zonder zich er ook maar iets van aan te trekken, smakt hij met zijn lippen, stopt de burger in zijn armen, rolt om, gaat precies daar liggen en valt in een diepe slaap, snurkt zelfs zachtjes, de camera zoomt uit en bevriest, harde snede naar zwart. Alleen live geluid van de set, geen muziek, geen ondertitels; de kern zijn herhaaldelijke harde sneden tussen "enorm kabaal" en "stilte".
```

<a id="category-9"></a>

### E-commerce Verkoop (8)

### No. 1: Kleding aan het lichaam getoond

- **Category:** `E-commerce Verkoop`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Het model uit Afbeelding 1 (gezicht referentie Afbeelding 1 close-up, make-up en styling referentie Afbeelding 2 full-body) als hoofdonderwerp, verticaal formaat 9:16, modieus realistische stijl, genereer een 30 seconden durende kledingpresentatie video.

#### Prompt

```text
Het model uit Afbeelding 1 (gezicht referentie Afbeelding 1 close-up, make-up en styling referentie Afbeelding 2 full-body) als hoofdonderwerp, verticaal formaat 9:16, modieus realistische stijl, genereer een 30 seconden durende kledingpresentatie video.
Shot 1: Medium shot, model @Afbeelding 1 staat zijwaarts, draait zich plots om en zwaait met de onderkant van de trenchcoat, zuivere studio achtergrond met zacht toplicht dat de contouren accentueert, camera zoomt langzaam in, (vrolijke modieuze elektronische muziek begint) <geluid van stofwrijving>.
Shot 2: Close-up, camera beweegt vloeiend horizontaal langs de schoudernaad en de stikdetails van de revers, zij- en tegenlicht verlichten de glans van de stof.
Shot 3: Full shot, model @Afbeelding 1 loopt natuurlijk om de algehele silhouet en de val van het model te tonen, camera volgt vloeiend.
Shot 4: Medium shot, model @Afbeelding 1 raakt de kraag aan en kijkt over de schouder, camera draait langzaam een halve cirkel rond.
Shot 5: Medium close-up, model @Afbeelding 1 stopt met een glimlach, camera zoomt langzaam uit om te eindigen, (muziek eindigt).
Beperkingen: Het gezicht van het model en de make-up/styling moeten gedurende de hele video consistent zijn met Afbeelding 1 en Afbeelding 2; studioachtergrond en toplicht blijven onveranderd.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één type camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 2: Schoen- en laarsdetails

- **Category:** `E-commerce Verkoop`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal formaat 9:16, hoogwaardige, textuurrijke realistische stijl, hoofdonderwerp is een paar leren enkellaarzen, genereer een 30 seconden durende detailvideo van schoenen/laarzen.

#### Prompt

```text
Verticaal formaat 9:16, hoogwaardige, textuurrijke realistische stijl, hoofdonderwerp is een paar leren enkellaarzen, genereer een 30 seconden durende detailvideo van schoenen/laarzen.
Shot 1: Macro close-up, enkellaarzen staan stil op een mat stenen oppervlak, camera zoomt langzaam in op de stiksels bij de neus, koel zijlicht strijkt over het leer, (lage sfeervolle elektronische muziek begint) <zacht geluid van leercontact>.
Shot 2: Close-up, camera draait een cirkel rond de schoen om de gestroomlijnde vorm en de hielcurve te tonen, reflectiescherm vult licht aan.
Shot 3: Macro close-up, vaste camerapositie, vingertip vouwt de tong omhoog om het binnenvoerlogo en de stiksels te tonen.
Shot 4: Medium shot, voet met laars zet neer en tilt de hiel licht op, camera filmt van boven naar beneden om het moment van contact vast te leggen, <geluid van hak op de grond>.
Shot 5: Close-up, camera zoomt langzaam uit en stopt op het volledige beeld van de schoen, (muziek eindigt).
Beperkingen: Het model van de enkellaarzen, leertextuur en kleurschema moeten gedurende de hele video consistent zijn; het stenen oppervlak en de koelkleurige belichting zijn vastgezet; voorkom dat de linker- en rechterschoen niet consistent zijn in vorm.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één type camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 3: Tas openen en sluiten demonstratie

- **Category:** `E-commerce Verkoop`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal formaat 9:16, minimalistisch hoogwaardige realistische stijl, hoofdonderwerp is een werktas, genereer een 30 seconden durende functiedemonstratie video van de tas.

#### Prompt

```text
Verticaal formaat 9:16, minimalistisch hoogwaardige realistische stijl, hoofdonderwerp is een werktas, genereer een 30 seconden durende functiedemonstratie video van de tas.
Shot 1: Medium shot, tas staat rechtop op een effen gekleurd oppervlak, camera zoomt langzaam in op de metalen sluiting, zacht toplicht, (frisse lichte muziek begint).
Shot 2: Close-up, twee handen trekken de rits open om de hoofdruimte te tonen, camera filmt van boven om de interne vakken en kaarthouders te tonen, <geluid van rits>.
Shot 3: Close-up, hand plaatst achtereenvolgens een laptop en een waterfles, camera beweegt vloeiend horizontaal om de capaciteit te tonen.
Shot 4: Medium shot, één hand tilt de tas op om de draagbaarheid en stevigheid van het handvat te tonen, camera filmt van onderen.
Shot 5: Medium shot, sluiting wordt gesloten en tas komt terug in positie, camera zoomt langzaam uit om te eindigen, (muziek eindigt).
Beperkingen: De kleur van de tas, het metaalwerk en het model moeten gedurende de hele video consistent zijn; het oppervlak en het toplicht zijn vastgezet; de open- en sluitacties moeten vloeiend zijn zonder sprongen.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één type camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 4: Sieraden

- **Category:** `E-commerce Verkoop`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal formaat 9:16, luxueus verfijnde realistische stijl, hoofdonderwerp is een diamanten halsketting, genereer een 30 seconden durende sieradenshow video.

#### Prompt

```text
Verticaal formaat 9:16, luxueus verfijnde realistische stijl, hoofdonderwerp is een diamanten halsketting, genereer een 30 seconden durende sieradenshow video.
Shot 1: Macro close-up, ketting ligt op een zwart fluwelen schaal, camera zoomt langzaam in op de hoofdsteen, spotlicht creëert vuur, (elegante strijkersmuziek begint) <subtiel metaalachtig geluid>.
Shot 2: Close-up, camera draait een halve cirkel rond de hoofdsteen om lichtreflecties vanuit verschillende hoeken vast te leggen, achtergrond wordt donker gehouden.
Shot 3: Medium close-up, model draagt de ketting om de nek, camera beweegt op en neer van het sleutelbeen omhoog naar de hanger, zacht licht vult het gezicht aan.
Shot 4: Macro close-up, vaste camerapositie, hanger wiegt lichtjes met de ademhaling en fonkelt.
Shot 5: Close-up, camera zoomt langzaam uit en focust op het vuur om te stoppen, (strijkersmuziek eindigt).
Beperkingen: Het model van de ketting, de diamantslijpvorm en de zetting moeten gedurende de hele video consistent zijn; de zwarte fluwelen achtergrond en de spotbelichting zijn vastgezet; de huidskleur van de nek in het draagsegment moet consistent zijn met die in het studiosegment.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één type camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 5: Huisapparatuur demonstratie (Blender)

- **Category:** `E-commerce Verkoop`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal formaat 9:16, heldere keuken levensstijl realistische stijl, hoofdonderwerp is een high-speed blender, genereer een 30 seconden durende huishoudapparatuur demonstratie video.

#### Prompt

```text
Verticaal formaat 9:16, heldere keuken levensstijl realistische stijl, hoofdonderwerp is een high-speed blender, genereer een 30 seconden durende huishoudapparatuur demonstratie video.
Shot 1: Medium shot, blender staat op een lichtgekleurd aanrecht, camera zoomt langzaam in op het bedieningspaneel, ochtendlicht valt schuin binnen, (levendige levensstijl lichte muziek begint).
Shot 2: Close-up, hand giet fruit en ijsblokjes in de beker, camera filmt van boven de bekeropening, <geluid van ingrediënten die vallen>.
Shot 3: Close-up, drukt op startknop, messen draaien op hoge snelheid en blenden, camera staat vast dicht bij de bekerwand, <geluid van blenden>.
Shot 4: Medium shot, giet gladde smoothie in een glas, camera beweegt vloeiend horizontaal en volgt de vloeistofstroom.
Shot 5: Medium close-up, eindproduct smoothie en apparaat in hetzelfde beeld, camera zoomt langzaam uit om te eindigen, (muziek eindigt).
Beperkingen: De kleur van het apparaat, het paneel en de beker moeten gedurende de hele video consistent zijn; het keukenaanrecht en het ochtendlicht zijn vastgezet; de textuur van de smoothie moet voor en na consistent zijn.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één type camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 6: Babyartikelen

- **Category:** `E-commerce Verkoop`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal formaat 9:16, zacht helende levensstijl realistische stijl, hoofdonderwerp is een geïsoleerde babyfles, genereer een 30 seconden durende babyartikelen presentatie video.

#### Prompt

```text
Verticaal formaat 9:16, zacht helende levensstijl realistische stijl, hoofdonderwerp is een geïsoleerde babyfles, genereer een 30 seconden durende babyartikelen presentatie video.
Shot 1: Medium close-up, fles staat rechtop op een zachte mat in de babykamer, camera zoomt langzaam in op de anti-koliek speen, warm zacht licht, (zachte pianomuziek begint).
Shot 2: Close-up, hand draait de dop eraf om het brede ontwerp en de maatverdeling te tonen, camera beweegt vloeiend horizontaal, <zacht geluid van dop draaien>.
Shot 3: Close-up, na het gieten van warm water raakt de hand de fles aan om de constante temperatuur te voelen, camera staat vast.
Shot 4: Medium shot, moeder houdt de fles vast, schudt zachtjes om de temperatuur te testen voorbereidend op voeden, camera beweegt langzaam op en neer, <geluid van licht schudden van water>.
Shot 5: Medium close-up, fles en zacht speelgoedbeest in hetzelfde beeld gestopt, camera zoomt langzaam uit om te eindigen, (muziek eindigt).
Beperkingen: De kleur van de fles, de maatverdeling op de fles en het speenmodel moeten gedurende de hele video consistent zijn; het warme licht in de babykamer en de zachte matachtergrond zijn vastgezet; de sfeer van het beeld moet zacht en warm blijven.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één type camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 7: Voedselgeschenkdoos

- **Category:** `E-commerce Verkoop`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal 9:16, feestelijke verfijnde realistische stijl, hoofdonderwerp is een geschenkdoos met Chinese gebakjes, genereer een 30 seconden durende korte film voor het presenteren van een voedselgeschenkdoos.

#### Prompt

```text
Verticaal 9:16, feestelijke verfijnde realistische stijl, hoofdonderwerp is een geschenkdoos met Chinese gebakjes, genereer een 30 seconden durende korte film voor het presenteren van een voedselgeschenkdoos.
Shot 1: Middenshot, rood-gouden geschenkdoos rust op houten tafelblad, camera zoomt langzaam in op vergulde omslag, warm zijlicht, (vrolijke Chinese muziek begint).
Shot 2: Close-up, twee handen openen langzaam de doosdeksel om de vakjes met gebakjes te onthullen, camera kijkt van bovenaf op het geheel, <geluid van openende deksel>.
Shot 3: Macro close-up, camera beweegt vloeiend horizontaal langs de textuur van het korstdeeg en de vulling van elk gebakje.
Shot 4: Medium close-up, hand pakt een gebakje op om de lagen te tonen, camera draait langzaam eromheen.
Shot 5: Middenshot, geschenkdoos wordt gesloten en een lint wordt vastgemaakt, camera zoomt langzaam uit om af te sluiten, (muziek eindigt).
Beperkingen: Kleurenschema geschenkdoos, verguld patroon en soorten gebakjes consistent door de hele video; houten tafel en warme belichting vastgehouden; plaatsing gebakjes voor en na consistent.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 8: Digitale accessoires (flitsende promotiestijl, met ondertitels)

- **Category:** `E-commerce Verkoop`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal 9:16, flitsende promotie hoge contrast realistische stijl, hoofdonderwerp is een draadloze noise-cancelling koptelefoon, genereer een 30 seconden durende flitsende promotiekorte film.

#### Prompt

```text
Verticaal 9:16, flitsende promotie hoge contrast realistische stijl, hoofdonderwerp is een draadloze noise-cancelling koptelefoon, genereer een 30 seconden durende flitsende promotiekorte film.
Shot 1: Close-up, koptelefoon zweeft en draait tegen neon verloopachtergrond, camera zoomt snel in, (sterke ritmische elektronische drums beginnen) <opstartgeluid>, 【Directe korting ¥300】.
Shot 2: Macro close-up, camera snijdt naar oorkussendraaipunt en oplaadcontactpunten, hard licht met highlights erover.
Shot 3: Middenshot, camera snijdt naar persoon die koptelefoon draagt en knikt op de maat van de drums, flitsend licht en schaduw, 【Actieve ruisonderdrukking 40 uur batterijduur】.
Shot 4: Close-up, camera beweegt snel horizontaal langs het openen en sluiten van de oplaadcase, <geluid van magnetische sluiting>, 【Tijdelijke uitverkoop eerste 100】.
Shot 5: Medium close-up, koptelefoon en prijskaartje samen in beeld, camera zoomt snel uit en bevriest, (drums eindigen) 【Nu kopen】.
Beperkingen: Kleur en vorm koptelefoon consistent door de hele video; neon achtergrondkleurenpalet vastgehouden; ondertitels verschijnen ritmisch gelijk met shotwisselingen, beeld behoudt hoge contrast promotiegevoel.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

<a id="category-10"></a>

### Eten & Drinken (8)

### No. 1: Hotpot op tafel

- **Category:** `Eten & Drinken`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal 9:16, dampend, eetlustopwekkend realistische stijl, hoofdonderwerp is een hotpot met twee compartimenten, genereer een 30 seconden durende korte film van hotpot op tafel.

#### Prompt

```text
Verticaal 9:16, dampend, eetlustopwekkend realistische stijl, hoofdonderwerp is een hotpot met twee compartimenten, genereer een 30 seconden durende korte film van hotpot op tafel.
Shot 1: Middenshot, hotpot met twee compartimenten wordt op houten tafel gezet, rode soep borrelt, camera zoomt langzaam in op kokende olie, warm geel restaurantlicht, (levendige volksmuziek begint) <geluid van borrelende soep>.
Shot 2: Close-up, hand dompelt pens in rode soep zeven keer op en neer, camera kijkt van bovenaf op stijgende damp, <geluid van dompelen>.
Shot 3: Macro close-up, camera beweegt vloeiend horizontaal langs garnalengehaktballetjes, vers gesneden rundvlees en groentenschotel.
Shot 4: Medium close-up, eetstokjes pakken een met rode olie bedekt vleesschijfje op en trekken het omhoog, camera volgt omhoog, <geluid van druppelende olie>.
Shot 5: Middenshot, meerdere mensen met eetstokjes samen in beeld, sfeer op zijn hoogtepunt, camera zoomt langzaam uit om af te sluiten, (muziek eindigt).
Beperkingen: Stijl hotpot met twee compartimenten, soepkleur en presentatie van gerechten consistent door de hele video; warm restaurantlicht en houten tafel vastgehouden; stoom en kokende staat continu aanwezig.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 2: Koffielatte art

- **Category:** `Eten & Drinken`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal 9:16, rustige artistieke realistische stijl, hoofdonderwerp is een handgemaakte latte met melkschuimkunst, genereer een 30 seconden durende korte film van koffielatte art.

#### Prompt

```text
Verticaal 9:16, rustige artistieke realistische stijl, hoofdonderwerp is een handgemaakte latte met melkschuimkunst, genereer een 30 seconden durende korte film van koffielatte art.
Shot 1: Close-up, espresso druppelt in kop, camera zoomt langzaam in op textuur van de crema, natuurlijk licht bij raam, (ontspannen jazzmuziek begint) <geluid van druppelende espresso>.
Shot 2: Medium close-up, hand met melkkannetje begint melkschuim in te gieten, camera vast op ooghoogte gericht op vloeistofoppervlak, <geluid van ingietend melkschuim>.
Shot 3: Macro close-up, camera kijkt van bovenaf op melkschuim dat zich op koffieoppervlak verspreidt tot bladvormig patroon.
Shot 4: Close-up, pols trilt lichtjes om bladnerf af te maken, camera draait langzaam rond koprand.
Shot 5: Middenshot, voltooide latte wordt opgepakt en bij raam gezet, camera zoomt langzaam uit om af te sluiten, (muziek eindigt).
Beperkingen: Latte art patroon consistent van inschenken tot voltooiing; natuurlijk licht bij raam en tafelblad vastgehouden; melkschuimtextuur duidelijk zonder onderbrekingen.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 3: Dessert gesneden met vloeibare vulling (chocoladelava)

- **Category:** `Eten & Drinken`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal 9:16, rijk verleidelijk realistische stijl, hoofdonderwerp is een chocoladelavacake, genereer een 30 seconden durende korte film van dessert met vloeibare vulling.

#### Prompt

```text
Verticaal 9:16, rijk verleidelijk realistische stijl, hoofdonderwerp is een chocoladelavacake, genereer een 30 seconden durende korte film van dessert met vloeibare vulling.
Shot 1: Medium close-up, lavacake op wit porseleinen bord bestrooid met poedersuiker, camera zoomt langzaam in, warm spotlight, (zachte romantische muziek begint).
Shot 2: Close-up, vork drukt licht op cakelaag waardoor scheur ontstaat, camera vast dichtbij, <geluid van licht brekende korst>.
Shot 3: Macro close-up, mes en vork snijden cake open, chocoladelava stroomt langzaam naar buiten, camera kijkt van bovenaf op hoogtepuntmoment, <geluid van stromende dikke saus>.
Shot 4: Close-up, vork pakt een stuk op met draadtrekkende lava, camera volgt langzaam op en neer de draad.
Shot 5: Middenshot, lavacake en ijs samen in beeld, camera zoomt langzaam uit om af te sluiten, (muziek eindigt).
Beperkingen: Kleur en textuur cakekorst en lava consistent door de hele video; wit porseleinen bord en warm spotlight vastgehouden; uitstromende lava is kern-moneyshot en moet duidelijk uitgelicht worden.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 4: Barbecue grillen

- **Category:** `Eten & Drinken`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Horizontaal 16:9, rokerige ruwe realistische stijl, hoofdonderwerp zijn vleesspiesjes gegrild op houtskoolvuur, genereer een 30 seconden durende korte film van barbecue grillen.

#### Prompt

```text
Horizontaal 16:9, rokerige ruwe realistische stijl, hoofdonderwerp zijn vleesspiesjes gegrild op houtskoolvuur, genereer een 30 seconden durende korte film van barbecue grillen.
Shot 1: Close-up, vleesspiesjes op houtskoolrooster, vet druppelt en steekt vlam, camera zoomt langzaam in, warm rood houtskoolvuurlicht, (energieke barbecue sfeermuziek begint) <sissend geluid van houtskoolvuur>.
Shot 2: Macro close-up, camera beweegt vloeiend horizontaal langs karamelkleurige krokante korst van spiesjes en gestrooide komijn en chilipoeder.
Shot 3: Middenshot, hand draait spiesjes om, rook en vlammen stijgen op, camera volgt handbeweging, <geluid van omdraaien en knallen>.
Shot 4: Close-up, kwast strijkt saus over spiesjes, saus trekt erin, camera vast dichtbij.
Shot 5: Medium close-up, gegrilde spiesjes worden op schaal gelegd en opgepakt, camera zoomt langzaam uit om af te sluiten, (muziek eindigt).
Beperkingen: Soort vleesspiesjes en mate van grillkleuring voor en na consistent; houtskoolvuur en warm rood licht vastgehouden; rook en vlammen aanwezig om rokerige sfeer te creëren.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 5: 日料摆盘

- **Category:** `Eten & Drinken`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

竖屏9:16，极简禅意写实风，主体为一份刺身拼盘，生成30秒日料摆盘短片。

#### Prompt

```text
竖屏9:16，极简禅意写实风，主体为一份刺身拼盘，生成30秒日料摆盘短片。
Shot 1：中景，黑石长盘置于原木台面，镜头缓慢推近，冷调顶光，（清冷古筝音乐起）。
Shot 2：特写，手用镊子精准摆放金枪鱼刺身与紫苏叶，镜头俯拍构图，<食材轻放声>。
Shot 3：微距特写，镜头平稳横移扫过三文鱼油脂纹理与冰粒光泽。
Shot 4：中近景，浇淋酱油点缀山葵与花瓣，镜头缓慢环绕成品。
Shot 5：全景，完整刺身拼盘居中定格，镜头缓慢拉远收尾，（音乐收束）。
约束：刺身种类、切片厚度与摆盘位置全程一致；黑石盘与冷调顶光锁定；构图保持极简留白。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 6: 奶茶制作

- **Category:** `Eten & Drinken`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

竖屏9:16，清新活力写实风，主体为一杯手作珍珠奶茶，生成30秒奶茶制作短片。

#### Prompt

```text
竖屏9:16，清新活力写实风，主体为一杯手作珍珠奶茶，生成30秒奶茶制作短片。
Shot 1：特写，煮好的黑糖珍珠倒入杯底挂壁，镜头缓慢推近，明亮吧台光，（轻快流行音乐起）<珍珠落杯声>。
Shot 2：中近景，手持奶缸注入现萃茶汤与鲜奶，镜头固定机位平视分层，<注入声>。
Shot 3：微距特写，镜头俯拍冰块投入激起茶奶交融，<冰块碰撞声>。
Shot 4：特写，封口机压合杯膜插入吸管，镜头跟拍插管动作，<戳膜声>。
Shot 5：中景，手举成品奶茶轻摇展示珍珠翻涌，镜头缓慢拉远收尾，（音乐收束）。
约束：奶茶分层与珍珠颜色全程一致；吧台明亮光与背景锁定；制作步骤顺序连贯不跳变。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 7: 面点拉面

- **Category:** `Eten & Drinken`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

横屏16:9，匠心手作写实风，主体为手工拉面制作，生成30秒拉面短片。

#### Prompt

```text
横屏16:9，匠心手作写实风，主体为手工拉面制作，生成30秒拉面短片。
Shot 1：中景，面案上揉好的面团静置，双手按压回醒，镜头缓慢推近，暖调厨房光，（明快民乐起）<揉面声>。
Shot 2：特写，双手抻拉面团反复对折甩打案板，镜头跟拍手部弧线，<甩面击案声>。
Shot 3：中近景，面条越拉越细成丝下入沸锅，镜头俯拍热气翻腾，<下锅沸响>。
Shot 4：特写，捞起面条码入海碗浇上高汤，镜头平稳横移展示汤头。
Shot 5：中景，撒葱花摆牛肉完成成品，镜头缓慢拉远收尾，（音乐收束）。
约束：面条粗细与成品浇头前后连贯；厨房暖光与面案锁定；抻拉动作连贯体现手工感。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 8: 早餐场景（一镜到底）

- **Category:** `Eten & Drinken`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

竖屏9:16，温暖治愈生活写实风，主体为一份中式早餐，生成30秒早餐场景一镜到底短片。

#### Prompt

```text
竖屏9:16，温暖治愈生活写实风，主体为一份中式早餐，生成30秒早餐场景一镜到底短片。
Shot 1：一镜到底跟拍，晨光透过窗帘洒落餐桌，镜头缓慢推近热气腾腾的小笼包，（温柔晨间钢琴乐起）<蒸笼揭盖声>。
Shot 2：同一长镜头顺势平稳横移，滑过金黄煎蛋、油条与豆浆，热气与光斑流动。
Shot 3：同一长镜头顺势缓慢升降，手夹起小笼包蘸醋提起，<汤汁滴落声>。
Shot 4：同一长镜头顺势环绕小半圈，掠过餐桌旁翻开的书页与冒烟咖啡杯。
Shot 5：同一长镜头顺势缓慢拉远，定格温馨早餐全景，（音乐收束）。
约束：全程保持单一不间断长镜头运动无剪切；餐品摆盘与晨光基调全程一致；镜头移动平滑衔接体现一镜到底质感。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

<a id="category-11"></a>

### Beauty & Mode (6)

### No. 1: 口红试色

- **Category:** `Beauty & Mode`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

参考Image 1中的口红（膏体色号与管身logo以Image 1为准）为主体，竖屏9:16，高饱和美妆质感，生成30秒试色短片。

#### Prompt

```text
参考Image 1中的口红（膏体色号与管身logo以Image 1为准）为主体，竖屏9:16，高饱和美妆质感，生成30秒试色短片。
Shot 1：极近特写，口红@Image 1 膏体缓缓旋出，绒面反光流转，镜头缓慢推近，（清脆电子音乐起）<旋盖轻响>。
Shot 2：特写，镜头平稳横移扫过唇部，膏体一笔划过双唇留下饱满色泽。
Shot 3：中近景，仰拍模特抿唇微笑，唇色在柔光下显色，【今日色号 · 正红】。
Shot 4：特写，镜头环绕模特侧脸，唇部高光随转头流动。
Shot 5：中景，模特手持口红@Image 1 对镜定格，镜头缓慢拉远，（音乐收束）。
约束：膏体色号与管身logo以Image 1为准不改；唇色须与膏体色一致。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 2: 粉底上妆

- **Category:** `Beauty & Mode`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

参考Image 1中的粉底瓶（瓶身与滴管以Image 1为准）为主体，竖屏9:16，干净通透的护肤妆感，生成30秒上妆短片。

#### Prompt

```text
参考Image 1中的粉底瓶（瓶身与滴管以Image 1为准）为主体，竖屏9:16，干净通透的护肤妆感，生成30秒上妆短片。
Shot 1：极近特写，一滴粉底@Image 1 从滴管垂落至手背，质地荡开，镜头缓慢推近，<液滴滴落声>。
Shot 2：特写，镜头平稳横移，美妆蛋在脸颊按压晕开，肌理逐渐均匀。
Shot 3：中近景，跟拍模特转头，脸颊在自然光下呈现无瑕光泽。
Shot 4：特写，仰拍模特闭眼上妆，睫毛投下柔影，（轻柔钢琴音乐）。
Shot 5：中景，模特手持粉底瓶@Image 1 微笑定格，镜头缓慢拉远，【裸感无瑕】。
约束：瓶身与滴管以Image 1为准；妆面须真实无过度磨皮塑料感。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 3: Parfum sfeer

- **Category:** `Beauty & Mode`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijzing naar de parfumfles in Afbeelding 1 (vorm en gravures zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, Franse vintage sfeer en licht, genereer een 30 seconden sfeerfilmpje.

#### Prompt

```text
Verwijzing naar de parfumfles in Afbeelding 1 (vorm en gravures zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, Franse vintage sfeer en licht, genereer een 30 seconden sfeerfilmpje.
Shot 1: Close-up, parfumfles @Afbeelding 1 staat op een stenen vensterbank, ochtendlicht breekt door de fles en creëert lichtvlekken, camera beweegt langzaam naar voren, (sfeervolle strijkersmuziek begint).
Shot 2: Medium shot, camera draait langzaam om de fles, glasfacetten reflecteren stromend warm licht.
Shot 3: Close-up, low-angle shot van het moment van sprayen, neveldruppels zweven als gouden stofdeeltjes in tegenlicht, <licht spuitgeluid>.
Shot 4: Medium close-up, volg de nevel die naar een gordijn van gaas drijft, gordijnschaduwen wiegen zachtjes in de wind.
Shot 5: Medium shot, parfumfles @Afbeelding 1 komt terug op de vensterbank en bevriest, camera beweegt langzaam naar achteren, (strijkersmuziek zwakt af).
Constraint: Vorm en gravures op de fles zoals in Afbeelding 1; sfeer vastgezet op warme Franse vintage, geen koele kleuren.
Algemene constraints: Zonder ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 4: Serumdruppel valt

- **Category:** `Beauty & Mode`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijzing naar de serumfles in Afbeelding 1 (fles en pipetmarkeringen zoals in Afbeelding 1) als hoofdonderwerp, staand formaat 9:16, kristalheldere, hoogvochtige textuur, genereer een 30 seconden textuurfilmpje.

#### Prompt

```text
Verwijzing naar de serumfles in Afbeelding 1 (fles en pipetmarkeringen zoals in Afbeelding 1) als hoofdonderwerp, staand formaat 9:16, kristalheldere, hoogvochtige textuur, genereer een 30 seconden textuurfilmpje.
Shot 1: Extreme close-up, pipet hangt in de lucht, een druppel serum @Afbeelding 1 hangt op het punt te vallen, camera vast, <subtiel bubbelgeluid>.
Shot 2: Extreme close-up, serum druppelt in water, langzame rimpelingen verspreiden zich, camera beweegt langzaam naar voren, (druppelende muziekaccenten).
Shot 3: Close-up, camera beweegt vloeiend horizontaal, serum trekt een glanzende draad tussen vingertoppen.
Shot 4: Medium close-up, bovenaanzicht van serum aangebracht op de handrug, glans spreidt zich uit als een spiegel.
Shot 5: Medium shot, serumfles @Afbeelding 1 staat bevroren tegen een waterachtige achtergrond, camera rijst langzaam op, 【24 uur hydratatie vasthouden】.
Constraint: Fles en pipetmarkeringen zoals in Afbeelding 1; textuur moet helder en draadvormig zijn, niet troebel.
Algemene constraints: Zonder ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 5: Mode straatfotografie

- **Category:** `Beauty & Mode`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijzing naar de modelstijl in Afbeelding 1 (kleding en accessoires zoals in Afbeelding 1) als hoofdonderwerp, staand formaat 9:16, filmkorrelige stedelijke straatsfeer, genereer een 30 seconden straatfilmpje.

#### Prompt

```text
Verwijzing naar de modelstijl in Afbeelding 1 (kleding en accessoires zoals in Afbeelding 1) als hoofdonderwerp, staand formaat 9:16, filmkorrelige stedelijke straatsfeer, genereer een 30 seconden straatfilmpje.
Shot 1: Medium shot, model @Afbeelding 1 duwt een glazen deur open en stapt de straat op, wind doet kleding wapperen, camera volgt, (retro disco ritme begint).
Shot 2: Full shot, camera beweegt vloeiend horizontaal terwijl het model langs neonetalages loopt, reflecties stromen.
Shot 3: Medium close-up, low-angle shot van model dat omkijkt en een zonnebril afzet, tegenlicht tekent gouden randen rond haren.
Shot 4: Close-up, camera beweegt langzaam naar voren op accessoire details, metaalreflecties flitsen.
Shot 5: Full shot, model @Afbeelding 1 staat stil midden op straat en spreidt armen, bevriest, camera beweegt langzaam naar achteren en rijst op, 【CITY WALK】 (muziek eindigt).
Constraint: Kleding en accessoires zoals in Afbeelding 1, stijl niet veranderen; filmkorrel en stedelijke neontinten vastgezet voor de hele scène.
Algemene constraints: Zonder ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 6: Haarstijl presentatie

- **Category:** `Beauty & Mode`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijzing naar het modelkapsel in Afbeelding 1 (haarkleur en stijl zoals in Afbeelding 1) als hoofdonderwerp, staand formaat 9:16, salonreclamekwaliteit zachte lichtkwaliteit, genereer een 30 seconden haarfilmpje.

#### Prompt

```text
Verwijzing naar het modelkapsel in Afbeelding 1 (haarkleur en stijl zoals in Afbeelding 1) als hoofdonderwerp, staand formaat 9:16, salonreclamekwaliteit zachte lichtkwaliteit, genereer een 30 seconden haarfilmpje.
Shot 1: Close-up, model @Afbeelding 1 buigt hoofd, haren vallen voor het gezicht, camera vast, (ritmische muziek intro).
Shot 2: Medium close-up, model gooit hoofd plotseling terug, haren werpen in slow motion een boog, camera beweegt langzaam naar achteren, <geluid van wapperend haar>.
Shot 3: Close-up, camera draait rond het hoofd, licht en schaduw strijkt over de gladde hooglichten van het haar.
Shot 4: Medium shot, volg vingers van model die door het haar gaan, haarlagen vallen duidelijk.
Shot 5: Medium close-up, model @Afbeelding 1 draait zich om en kijkt terug, bevriest, kapsel vol en gefixeerd, camera beweegt langzaam naar voren, 【glans als een spiegel】.
Constraint: Haarkleur en stijlvorm zoals in Afbeelding 1; haar moet natuurlijk en glad wapperen, geen clipping of breuk.
Algemene constraints: Zonder ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

<a id="category-12"></a>

### Digitale Technologie (6)

### No. 1: Smartphone productrotatie

- **Category:** `Digitale Technologie`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijzing naar de smartphone in Afbeelding 1 (behuizing en logo zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, technologische high-end koele sfeer, genereer een 30 seconden productpresentatiefilm.

#### Prompt

```text
Verwijzing naar de smartphone in Afbeelding 1 (behuizing en logo zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, technologische high-end koele sfeer, genereer een 30 seconden productpresentatiefilm.
Shot 1: Extreme close-up, smartphone @Afbeelding 1 op donker oppervlak, scherm licht op, koele lichtrand, camera beweegt langzaam naar voren, (lage frequentie elektronisch geluid begint).
Shot 2: Medium shot, camera draait vloeiend rond en toont de metalen textuur van de smartphone @Afbeelding 1 achterkant en cameramodule.
Shot 3: Close-up, camera beweegt langzaam horizontaal langs details van zijrandknoppen en aansluitingen.
Shot 4: Medium close-up, low-angle shot van smartphone @Afbeelding 1 die langzaam rechtop komt en zweeft, koel licht stijgt op vanaf de onderkant.
Shot 5: Medium shot, smartphone @Afbeelding 1 zweeft en draait, bevriest, camera beweegt langzaam naar achteren, (muziek eindigt).
Constraint: Behuizing en logo zoals in Afbeelding 1, ontwerp niet veranderen; geen fictieve interface-inhoud; koele industriële verlichting vastgezet voor de hele scène.
Algemene constraints: Zonder ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 2: Oordopjes komen uit oplaadcase

- **Category:** `Digitale Technologie`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijzing naar de oplaadcase voor oordopjes in Afbeelding 1 (vorm en logo zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, minimalistisch zuiver wit studiokwaliteit, genereer een 30 seconden unboxing filmpje.

#### Prompt

```text
Verwijzing naar de oplaadcase voor oordopjes in Afbeelding 1 (vorm en logo zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, minimalistisch zuiver wit studiokwaliteit, genereer een 30 seconden unboxing filmpje.
Shot 1: Extreme close-up, oplaadcase @Afbeelding 1 rust op zuiver wit oppervlak, vingertop nadert deksel, camera vast, (heldere indicatietoon).
Shot 2: Close-up, deksel opent langzaam, indicatielampje licht op, camera beweegt langzaam naar voren, <geluid van openen/sluiten klikmechanisme>.
Shot 3: Medium close-up, oordopjes rijzen langzaam op uit de case en zweven, camera beweegt langzaam op en neer en volgt.
Shot 4: Close-up, camera draait rond één oordopje, toont draaihoek en microfoonopeningen.
Shot 5: Medium shot, oordopjes en oplaadcase @Afbeelding 1 naast elkaar bevroren, camera beweegt langzaam naar achteren, 【naadloos draagbaar】.
Constraint: Vorm en logo zoals in Afbeelding 1, structuur niet veranderen; zuiver wit naadloze achtergrond vastgezet, geen extra objecten toevoegen.
Algemene constraints: Zonder ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 3: Laptop openen en sluiten

- **Category:** `Digitale Technologie`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de laptop in Afbeelding 1 (behuizing en logo zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, hoogwaardige metalen koude glans textuur, genereer een 30 seconden durende presentatievideo.

#### Prompt

```text
Verwijs naar de laptop in Afbeelding 1 (behuizing en logo zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, hoogwaardige metalen koude glans textuur, genereer een 30 seconden durende presentatievideo.
Shot 1: Extreem close-up, laptop @Image 1 ligt gesloten op zijn zij, koud licht veegt over de aluminium scharnier, camera beweegt langzaam horizontaal, (lage omgevingsgeluiden beginnen).
Shot 2: Medium close-up, schermscharnier opent en sluit langzaam tot rechtopstaand, scherm licht geleidelijk op, camera beweegt langzaam naar voren, <geluid van scharnierdemper>.
Shot 3: Close-up, bovenaanzicht toetsenbord achtergrondverlichting die toets voor toets oplicht, lichtgolf stroomt erdoorheen.
Shot 4: Medium shot, camera draait soepel rond om de ultradunne zijkant en poorten van de behuizing te tonen.
Shot 5: Medium shot, laptop @Image 1 zweeft bevroren in halfgeopende houding, camera trekt langzaam terug, (muziek eindigt).
Beperkingen: Behuizingdikte en logo zoals in Afbeelding 1; verzin geen specifieke scherm UI-inhoud; metalen koude glans vastgehouden gedurende de hele video.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 4: Smartwatch interface

- **Category:** `Digitale Technologie`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de smartwatch in Afbeelding 1 (behuizing en band zoals in Afbeelding 1) als hoofdonderwerp, staand formaat 9:16, levendige, vrolijke tech-sfeer, genereer een 30 seconden durende functievideo.

#### Prompt

```text
Verwijs naar de smartwatch in Afbeelding 1 (behuizing en band zoals in Afbeelding 1) als hoofdonderwerp, staand formaat 9:16, levendige, vrolijke tech-sfeer, genereer een 30 seconden durende functievideo.
Shot 1: Extreem close-up, horloge @Image 1 wijzerplaat licht op bij optillen pols, animatie ontvouwt zich, camera beweegt langzaam naar voren, (vrolijke elektronische muziek begint).
Shot 2: Close-up, camera beweegt langzaam horizontaal, kroon draait om wijzerplaatkaarten te wisselen.
Shot 3: Medium close-up, volg de beweging van de pols, sportdata ringen springen mee met de beweging.
Shot 4: Close-up, ronddraaiende weergave van de textuur van de behuizingzijde en de sluiting van de band.
Shot 5: Medium shot, horloge @Image 1 gedragen aan pols bevriest terwijl het wordt opgetild, camera trekt langzaam terug, 【24/7 bescherming】.
Beperkingen: Behuizing en band zoals in Afbeelding 1; interface animaties eenvoudig, verzin geen specifieke numerieke details.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 5: Dronevlucht

- **Category:** `Digitale Technologie`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de drone in Afbeelding 1 (romp en propellers zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, open, luchtfotografie documentaire sfeer, genereer een 30 seconden durende vluchtvideo.

#### Prompt

```text
Verwijs naar de drone in Afbeelding 1 (romp en propellers zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, open, luchtfotografie documentaire sfeer, genereer een 30 seconden durende vluchtvideo.
Shot 1: Medium close-up, drone @Image 1 stijgt langzaam op vanaf grasveld, propellers vervagen door hoge snelheid, camera volgt langzaam op en neer, <gezoem van propellers> (omgevingsmuziek begint).
Shot 2: Close-up, camera draait rond de zwevende romp, gimbal stelt lensrichting bij.
Shot 3: Panoramashot, volg de drone terwijl hij over het wateroppervlak scheert, reflectie glijdt mee.
Shot 4: Extreem wide shot, bovenaanzicht drone vliegt over bergkam, landschap strekt zich eronder uit.
Shot 5: Medium shot, drone @Image 1 keert stabiel terug en zweeft bevroren, camera trekt langzaam terug, (muziek eindigt).
Beperkingen: Romp en propellerstructuur zoals in Afbeelding 1; vluchthouding moet stabiel zijn, in overeenstemming met echte aerodynamica, niet afdrijven of trillen.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 6: Chip macro (tech documentaire)

- **Category:** `Digitale Technologie`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de chip in Afbeelding 1 (behuizing en inscriptie zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, koel, technologische documentaire macro textuur, genereer een 30 seconden durende macro video.

#### Prompt

```text
Verwijs naar de chip in Afbeelding 1 (behuizing en inscriptie zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, koel, technologische documentaire macro textuur, genereer een 30 seconden durende macro video.
Shot 1: Extreem close macro shot, chip @Image 1 ligt stil op printplaat, gouden pennen glanzen met koud licht, camera beweegt langzaam naar voren, (lage industriële geluiden beginnen).
Shot 2: Macro close-up, camera beweegt soepel horizontaal over het oppervlak van de behuizing, inscriptie en snijkanten.
Shot 3: Macro close-up, bovenaanzicht soldeerpunten en leidingen, onscherpte diepte tot slechts één lijn scherp.
Shot 4: Medium close-up, camera trekt langzaam terug om een hele reeks printplaten te onthullen, indicatielampjes knipperen.
Shot 5: Close-up, chip @Image 1 bevriest in koud licht, camera draait langzaam rond om af te sluiten, (muziek vervaagt).
Beperkingen: Behuizingtype en inscriptie zoals in Afbeelding 1, niet wijzigen; macro onscherpte diepte realistisch, verzin geen niet-bestaande circuitstructuren.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

<a id="category-13"></a>

### Auto's (4)

### No. 1: Nachtopname volgen

- **Category:** `Auto's`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de auto in Afbeelding 1 (model en lakkleur zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, cyberpunk nachtfilm textuur, genereer een 30 seconden durende volgvideo.

#### Prompt

```text
Verwijs naar de auto in Afbeelding 1 (model en lakkleur zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, cyberpunk nachtfilm textuur, genereer een 30 seconden durende volgvideo.
Shot 1: Medium close-up, auto @Image 1 geparkeerd op neonstraathoek, koplampen gaan aan, regenachtig oppervlak reflecteert lichtkleuren, camera beweegt langzaam naar voren, (lage elektronische beat begint) <licht gebrul motor>.
Shot 2: Medium shot, zijwaartse volgopname auto rijdt door neonlange straat, lichtbanden stromen over de lak.
Shot 3: Close-up, camera beweegt soepel horizontaal over de koude verlichting van de voorkant, koplampen en grille.
Shot 4: Panoramashot, lage hoekopname auto rijdt door tunnel, plafondlichten als strepen flitsen snel voorbij.
Shot 5: Medium shot, auto @Image 1 rijdt tunnel uit, vertraagt en bevriest, camera trekt langzaam terug en stijgt op, (beat eindigt).
Beperkingen: Model en lakkleur zoals in Afbeelding 1, niet wijzigen; nachtelijke neon en natte reflectie sfeer vastgehouden gedurende de hele video.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 2: Detail close-up snelle cuts

- **Category:** `Auto's`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de auto in Afbeelding 1 (model en lakkleur zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, robuuste, hoog contrast industriële textuur, genereer een 30 seconden durende detailvideo.

#### Prompt

```text
Verwijs naar de auto in Afbeelding 1 (model en lakkleur zoals in Afbeelding 1) als hoofdonderwerp, liggend formaat 16:9, robuuste, hoog contrast industriële textuur, genereer een 30 seconden durende detailvideo.
Shot 1: Extreem close-up, auto @Image 1 koplampen gaan aan, wenkbrauwlijn, koud licht tekent de hoeken, camera beweegt langzaam naar voren, (snelle drumbeat begint).
Shot 2: Close-up, camera cut naar velg, langzaam draaiend, reflecterende lichtvlekken.
Shot 3: Close-up, camera cut naar embleem en grille, metaal hooglicht veegt erover.
Shot 4: Close-up, camera cut naar uitlaat en spoiler lijnen, camera beweegt soepel horizontaal.
Shot 5: Medium shot, auto @Image 1 hele voertuig bevriest in lichtbundel, camera trekt langzaam terug, (drumbeat eindigt) 【Elk detail is scherp】.
Beperkingen: Model en lakkleur zoals in Afbeelding 1; snelle cuts, elk shot focust op één enkel onderdeel zonder herhaling; hoog contrast hard licht vastgehouden gedurende de hele video.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 3: Off-road Scene

- **Category:** `Auto's`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Using the off-road vehicle from Image 1 (model and paint color as per Image 1) as the main subject, landscape 16:9, rough wilderness documentary feel, generate a 30-second off-road short film.

#### Prompt

```text
Using the off-road vehicle from Image 1 (model and paint color as per Image 1) as the main subject, landscape 16:9, rough wilderness documentary feel, generate a 30-second off-road short film.
Shot 1: Medium shot, the off-road vehicle @Image 1 charges up a sand dune, kicking up a wave of dust, camera follows, <sound of tires grinding on sand> (rousing drum music begins).
Shot 2: Close-up, low-angle shot of wheels rolling over gravel, mud and sand splattering on the lens.
Shot 3: Full shot, smooth lateral tracking shot following the vehicle wading through a shallow stream, water splashing.
Shot 4: Extreme long shot, aerial shot looking down on the off-road vehicle traversing a trail in the wilderness, a long trail of dust behind it.
Shot 5: Medium shot, the off-road vehicle @Image 1 reaches the top of a ridge and stops for a final frame, camera slowly rises and pulls back, (drum music concludes).
Constraints: Vehicle model and paint color must match Image 1; off-road dynamics must conform to real terrain physics, no floating, skidding, or distortion.
General constraints: Keep without subtitles; do not generate a Logo; do not generate a watermark; use only one camera movement per shot; people should have natural, slight movements, not be like statues.
```

### No. 4: Interior Showcase

- **Category:** `Auto's`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Using the car interior from Image 1 (materials and color scheme as per Image 1) as the main subject, landscape 16:9, warm, premium cabin lighting feel, generate a 30-second interior short film.

#### Prompt

```text
Using the car interior from Image 1 (materials and color scheme as per Image 1) as the main subject, landscape 16:9, warm, premium cabin lighting feel, generate a 30-second interior short film.
Shot 1: Extreme close-up, the stitching on the leather seat @Image 1 undulates under warm light, camera slowly pans, (relaxed ambient music begins).
Shot 2: Medium close-up, camera slowly pushes in on the central control screen, ambient lighting gradually illuminates.
Shot 3: Close-up, orbiting around the steering wheel and paddle shifters, reflections flow on the metal trim.
Shot 4: Medium shot, overhead shot of the full cabin, light from the sunroof pours down from above.
Shot 5: Medium close-up, camera slowly rises to end on a final frame of the cabin, warm light suffuses, (music fades out) 【Tranquil Cabin】.
Constraints: Materials and color scheme must match Image 1, do not change; do not fabricate specific UI content for the central control screen; warm cabin lighting tone must be consistent throughout.
General constraints: Keep without subtitles; do not generate a Logo; do not generate a watermark; use only one camera movement per shot; people should have natural, slight movements, not be like statues.
```

<a id="category-14"></a>

### Vastgoed & Wonen (4)

### No. 1: Living Room Space Walkthrough

- **Category:** `Vastgoed & Wonen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Vertical 9:16, real estate quality promotional film, bright, airy, warm white tone, generate a 30-second living room space walkthrough short film.

#### Prompt

```text
Vertical 9:16, real estate quality promotional film, bright, airy, warm white tone, generate a 30-second living room space walkthrough short film.
Shot 1: Fixed camera position, morning light slants into the empty living room from floor-to-ceiling windows, dust floats in the light beams, (gentle piano music begins).
Shot 2: Smooth pan, camera glides close to the ground past wooden flooring and a beige fabric sofa, pillow textures are clear, <soft sound of footsteps>.
Shot 3: Slow push-in, focus on a cup of steaming coffee and an open book on the coffee table, warm light falls on them, (strings layer in).
Shot 4: Crane up, camera position slowly lifts from the ground, revealing the open layout connecting the living room and open-plan kitchen/dining area, 【Floor area 98㎡, North-South orientation, well-ventilated】.
Shot 5: Slow pull-back, retreats to the entrance hall looking back at the depth of the entire living room, warm white final frame, (music concludes).
Constraints: No people appear throughout; furniture and decor style must be unified as modern minimalist with wood accents; lighting must maintain consistent morning warm white.
General constraints: Keep without subtitles; do not generate a Logo; do not generate a watermark; use only one camera movement per shot; people should have natural, slight movements, not be like statues.
```

### No. 2: Kitchen Details

- **Category:** `Vastgoed & Wonen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Vertical 9:16, high-end appliance texture advertisement, cool metallic gray paired with warm wood tones, generate a 30-second kitchen details short film.

#### Prompt

```text
Vertical 9:16, high-end appliance texture advertisement, cool metallic gray paired with warm wood tones, generate a 30-second kitchen details short film.
Shot 1: Close-up, water pours from a faucet into a stainless steel sink, water droplets splash in slow motion, <sound of rushing water>.
Shot 2: Smooth pan, camera slides along a quartz countertop past knives, a cutting board, and fresh fruits/vegetables, cool light highlights them, (lively rhythm begins).
Shot 3: Slow push-in, a drawer automatically slides out to reveal compartmentalized storage and matte handles, warm wood tones, <sound of smooth drawer gliding>.
Shot 4: Overhead shot, blue gas flame ignites on the stove, oil sizzles in a pan, steam rises, <click of ignition><sizzle of oil>.
Shot 5: Low-angle shot, camera looks up from the stove towards the range hood and integrated light strip above, metallic reflections, 【Integrated Built-in Kitchen Appliances】, (music concludes).
Constraints: No people appear throughout; countertops must remain tidy and clutter-free; texture of metal and wood materials must be consistent throughout.
General constraints: Keep without subtitles; do not generate a Logo; do not generate a watermark; use only one camera movement per shot; people should have natural, slight movements, not be like statues.
```

### No. 3: Floor Plan Overhead View (Schematic)

- **Category:** `Vastgoed & Wonen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Landscape 16:9, architectural visualization schematic style, clean white model with soft skylight, generate a 30-second floor plan overhead schematic short film.

#### Prompt

```text
Landscape 16:9, architectural visualization schematic style, clean white model with soft skylight, generate a 30-second floor plan overhead schematic short film.
Shot 1: Overhead shot, directly vertical top-down view of the complete floor plan white model, partition lines are clear, (minimal electronic sound begins).
Shot 2: Slow push-in, camera descends through the "vanished ceiling" into the schematic living room area, furniture appears semi-transparent, <space transition sound effect>.
Shot 3: Orbit, rotates once around the schematic master bedroom area, showing the bay window and walk-in closet circulation, soft light gradually brightens, (rhythm intensifies).
Shot 4: Smooth pan, glides along the schematic corridor circulation towards the secondary bedroom and bathroom, annotations appear, 【Three bedrooms, two living rooms, dynamic and static zones separated】.
Shot 5: Crane up, camera position rises back to the global overhead view and overlays area data, skylight final frame, (music concludes).
Constraints: Entire video must be a schematic white model, not a real scene, must include the annotation "Schematic for reference only"; floor plan proportions and structure must be consistent throughout; no real people or furniture.
General constraints: Keep without subtitles; do not generate a Logo; do not generate a watermark; use only one camera movement per shot; people should have natural, slight movements, not be like statues.
```

### No. 4: Bedroom Ambiance

- **Category:** `Vastgoed & Wonen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Vertical 9:16, slow living ambiance advertisement, warm orange night light soft tone, generate a 30-second bedroom ambiance short film.

#### Prompt

```text
Vertical 9:16, slow living ambiance advertisement, warm orange night light soft tone, generate a 30-second bedroom ambiance short film.
Shot 1: Fixed camera position, bedside warm light turns on instantly, illuminating plain bedding and half-drawn curtains, (ambient music begins).
Shot 2: Slow push-in, camera moves close to the pillow, gliding past soft bedding folds and an open book, light and shadow gradually warm, <sound of light rain outside the window>.
Shot 3: Smooth pan, glides along the foot of the bed past plants and a diffuser on the bay window, warm orange light glow flows, (gentle piano notes).
Shot 4: Crane up, camera position slowly lifts to look down on the entire bed and the soft light from the pendant lamp, creating a sense of enveloping sleep comfort, 【Bedroom with excellent natural light and ventilation】.
Shot 5: Slow pull-back, retreats to the doorway looking back at the full view of the bedroom under the warm light, soft tone final frame, (music concludes).
Constraints: No people appear throughout; lighting must maintain consistent warm orange night tone; bedding and decor must maintain a unified simple and elegant style.
General constraints: Keep without subtitles; do not generate a Logo; do not generate a watermark; use only one camera movement per shot; people should have natural, slight movements, not be like statues.
```

<a id="category-15"></a>

### Persoonlijke Presentatie / Digitale Mensen (6)

### No. 1: Kennis Monoloog

- **Category:** `Persoonlijke Presentatie / Digitale Mensen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Presentator gebonden aan @Image 1 (gezichtsstyling volgens de bijbehorende afbeelding), verticaal formaat 9:16, schone studio-stijl van een kennisblogger, helder zacht licht, genereer een 30 seconden durende kennis-monoloog video.

#### Prompt

```text
Presentator gebonden aan @Image 1 (gezichtsstyling volgens de bijbehorende afbeelding), verticaal formaat 9:16, schone studio-stijl van een kennisblogger, helder zacht licht, genereer een 30 seconden durende kennis-monoloog video.
Shot 1: Medium close-up, presentator @Image 1 kijkt recht in de camera, leunt naar voren en stelt een vraag, onscherpe boekenkast op de achtergrond, vaste camerapositie, {Wist je dat 90% van de mensen het verkeerd gebruikt?}.
Shot 2: Langzaam inzoomen, presentator @Image 1 benadrukt met opgeheven vinger terwijl hij spreekt, vastberaden blik, warm licht verheldert het gezicht, (vrolijke achtergrondmuziek begint).
Shot 3: Snede naar, aan de rechterkant van het scherm verschijnt een illustratie van de kernpunten, presentator @Image 1 wijst ernaar terwijl hij opzij draait, vloeiende horizontale beweging, 【Kernpunt één twee drie】.
Shot 4: Medium close-up, presentator @Image 1 draait terug naar de camera, glimlacht en vat samen, spreekt langzamer, vaste camerapositie, {Onthoud deze drie punten en je bent klaar}.
Shot 5: Langzaam uitzoomen, presentator @Image 1 knikt ter afsluiting en zwaait, zacht licht bevriest het beeld, (muziek eindigt).
Beperkingen: Presentator's gezicht moet gedurende de hele video consistent zijn met Image 1; lipbewegingen moeten strikt overeenkomen met de dialoog; studio-achtergrond blijft onveranderd.
Algemene beperkingen: Houd het zonder ondertitels; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personage moet natuurlijke, subtiele bewegingen hebben, niet als een standbeeld.
```

### No. 2: Nieuwsuitzending

- **Category:** `Persoonlijke Presentatie / Digitale Mensen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Presentator gebonden aan @Image 1 (gezichtsstyling volgens de bijbehorende afbeelding), horizontaal formaat 16:9, autoritatieve nieuwsstudio, koele blauwe professionele toon, genereer een 30 seconden durende nieuwsuitzending.

#### Prompt

```text
Presentator gebonden aan @Image 1 (gezichtsstyling volgens de bijbehorende afbeelding), horizontaal formaat 16:9, autoritatieve nieuwsstudio, koele blauwe professionele toon, genereer een 30 seconden durende nieuwsuitzending.
Shot 1: Medium shot, presentator @Image 1 zit rechtop en opent de uitzending door recht in de camera te kijken, blauw nieuws-scherm op de achtergrond, vaste camerapositie, {Goedenavond kijkers, welkom bij deze uitzending}.
Shot 2: Langzaam inzoomen, presentator @Image 1 leest de introductie met serieuze uitdrukking, constant spreektempo, koel blauw licht, 【Hoogtepunten van vandaag】.
Shot 3: Snede naar, rechts achter de presentator @Image 1 verschijnt een nieuwsvenster, vloeiende horizontale beweging, <studio signaal geluid>.
Shot 4: Medium close-up, presentator @Image 1 draait naar een andere camera en gaat verder met de uitzending, natuurlijke blikwisseling, vaste camerapositie, (lage achtergrondmuziek).
Shot 5: Langzaam uitzoomen, presentator @Image 1 vouwt zijn handen en bedankt ter afsluiting, koel blauw beeld bevriest, {Bedankt voor het kijken, tot de volgende keer}.
Beperkingen: Presentator's gezicht moet gedurende de hele video consistent zijn met Image 1; lipbewegingen moeten strikt overeenkomen met de dialoog; houding moet rechtop en professioneel zijn, studio-achtergrond blijft onveranderd.
Algemene beperkingen: Houd het zonder ondertitels; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personage moet natuurlijke, subtiele bewegingen hebben, niet als een standbeeld.
```

### No. 3: Verkoop Monoloog

- **Category:** `Persoonlijke Presentatie / Digitale Mensen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Presentator gebonden aan @Image 2 (gezichtsstyling volgens de bijbehorende afbeelding), verticaal formaat 9:16, levendige live verkoopstijl, heldere hoogverzadigde warme toon, genereer een 30 seconden durende verkoop-monoloog video.

#### Prompt

```text
Presentator gebonden aan @Image 2 (gezichtsstyling volgens de bijbehorende afbeelding), verticaal formaat 9:16, levendige live verkoopstijl, heldere hoogverzadigde warme toon, genereer een 30 seconden durende verkoop-monoloog video.
Shot 1: Medium close-up, presentator @Image 2 houdt het product met beide handen omhoog en brengt het dicht bij de camera terwijl hij enthousiast roept, vaste camerapositie, {Familie, kijk eens, dit product van vandaag is echt geweldig!}.
Shot 2: Langzaam inzoomen, presentator @Image 2 wijst naar de verkoopargumenten van het product, overdreven opgewonden gezichtsuitdrukking, hoogverzadigd warm licht, <ding, geluidseffect van link plaatsen>.
Shot 3: Snede naar, linksonder in het scherm verschijnt een 'explosieve' prijssticker, presentator @Image 2 klapt in zijn handen om te benadrukken, vloeiende horizontale beweging, 【Tijdelijke prijsverlaging slechts 99】.
Shot 4: Medium shot, presentator @Image 2 houdt het product omhoog en toont de details links en rechts, spreektempo versnelt, vaste camerapositie, (opzwepende promotiemuziek).
Shot 5: Langzaam inzoomen, presentator @Image 2 steekt zijn duim omhoog om de bestelling aan te moedigen en sluit af, warme toon bevriest het beeld, {Op is op, bestel snel!}.
Beperkingen: Presentator's gezicht moet gedurende de hele video consistent zijn met Image 2; lipbewegingen moeten strikt overeenkomen met de dialoog; uiterlijk van het product moet consistent blijven; achtergrond met schappen blijft onveranderd.
Algemene beperkingen: Houd het zonder ondertitels; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personage moet natuurlijke, subtiele bewegingen hebben, niet als een standbeeld.
```

### No. 4: Diep in de Nacht Emotionele Radio

- **Category:** `Persoonlijke Presentatie / Digitale Mensen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Presentator gebonden aan @Image 3 (gezichtsstyling volgens de bijbehorende afbeelding), verticaal formaat 9:16, sfeer van een nachtelijke radiozender, warm oranje microlicht laag contrast, genereer een 30 seconden durende emotionele radio video.

#### Prompt

```text
Presentator gebonden aan @Image 3 (gezichtsstyling volgens de bijbehorende afbeelding), verticaal formaat 9:16, sfeer van een nachtelijke radiozender, warm oranje microlicht laag contrast, genereer een 30 seconden durende emotionele radio video.
Shot 1: Medium close-up, presentator @Image 3 staat zijwaarts naar de microfoon, sluit zijn ogen en begint zachtjes te spreken, warm oranje lamplicht valt van opzij, vaste camerapositie, (zachte piano begint) {Het is diep in de nacht, hoe gaat het met jou die nog niet slaapt?}.
Shot 2: Langzaam inzoomen, presentator @Image 3 opent zijn ogen en kijkt in de verte met een zachte blik, ogen lichten op, warm licht vervaagt, <zacht geluid van nachtregen buiten het raam>.
Shot 3: Vloeiende horizontale beweging, de camera beweegt langs een koptelefoon en een warme kop thee op tafel, presentator @Image 3 komt in beeld en fluistert, (piano wordt sterker).
Shot 4: Close-up, presentator @Image 3 glimlacht lichtjes en troost zachtjes, wimpers trillen licht, warm oranje microlicht, {Moge de wereld je vriendelijk behandelen}.
Shot 5: Langzaam uitzoomen, presentator @Image 3 neemt de koptelefoon af, glimlacht naar beneden en sluit af, microlicht bevriest het beeld, (muziek eindigt).
Beperkingen: Presentator's gezicht moet gedurende de hele video consistent zijn met Image 3; lipbewegingen moeten strikt overeenkomen met de dialoog; emotie moet worden uitgedrukt door trillende wimpers en glanzende ogen, verboden expliciete voice-over-achtige acteerwijze; warme oranje nachtelijke toon moet gedurende de hele video consistent zijn.
Algemene beperkingen: Houd het zonder ondertitels; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personage moet natuurlijke, subtiele bewegingen hebben, niet als een standbeeld.
```

### No. 5: Onderwijs Docent

- **Category:** `Persoonlijke Presentatie / Digitale Mensen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Docent gebonden aan @Image 1 (gezichtsstyling volgens de bijbehorende afbeelding), horizontaal formaat 16:9, heldere professionele online lesstijl, frisse whiteboard toon, genereer een 30 seconden durende onderwijsdocent video.

#### Prompt

```text
Docent gebonden aan @Image 1 (gezichtsstyling volgens de bijbehorende afbeelding), horizontaal formaat 16:9, heldere professionele online lesstijl, frisse whiteboard toon, genereer een 30 seconden durende onderwijsdocent video.
Shot 1: Medium shot, docent @Image 1 staat voor een whiteboard, draait zich om en begint te praten terwijl hij naar de camera kijkt, houdt een marker vast, vaste camerapositie, {In deze les bespreken we slechts één kernformule}.
Shot 2: Vloeiende horizontale beweging, docent @Image 1 loopt en schrijft kernwoorden op het whiteboard, camera volgt zijn beweging, helder wit licht, <geluid van marker die schrijft>.
Shot 3: Snede naar, het geschreven gebied op het whiteboard wordt vergroot en de formule verschijnt gemarkeerd, docent @Image 1 wijst ernaar terwijl hij opzij staat, langzaam inzoomen, 【Kernformule】.
Shot 4: Medium close-up, docent @Image 1 draait terug naar de camera en legt een voorbeeld uit, levendige gezichtsuitdrukking, vaste camerapositie, (vrolijke leerachtergrondmuziek).
Shot 5: Langzaam uitzoomen, docent @Image 1 spreidt zijn handen, glimlacht, sluit af en knikt, wit licht bevriest het beeld, {Begrepen? Tot de volgende les}.
Beperkingen: Docent's gezicht moet gedurende de hele video consistent zijn met Image 1; lipbewegingen moeten strikt overeenkomen met de dialoog; whiteboard inhoud moet logisch aansluiten; klaslokaal achtergrond blijft onveranderd.
Algemene beperkingen: Houd het zonder ondertitels; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personage moet natuurlijke, subtiele bewegingen hebben, niet als een standbeeld.
```

### No. 6: Meertalig Alter Ego (Inclusief Redactie Taak Idee)

- **Category:** `Persoonlijke Presentatie / Digitale Mensen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Digitaal persoon gebonden aan @Image 1 (gezichtsstyling volgens de bijbehorende afbeelding), verticaal formaat 9:16, uniforme studio-stijl voor multinationale merken, eenvoudige technologische blauwe toon, genereer een 30 seconden durende meertalig alter ego video.

#### Prompt

```text
Digitaal persoon gebonden aan @Image 1 (gezichtsstyling volgens de bijbehorende afbeelding), verticaal formaat 9:16, uniforme studio-stijl voor multinationale merken, eenvoudige technologische blauwe toon, genereer een 30 seconden durende meertalig alter ego video.
Shot 1: Medium close-up, digitaal persoon @Image 1 opent met een Chinese groet terwijl hij recht in de camera kijkt, technologisch blauw achtergrondscherm, vaste camerapositie, {Hallo iedereen, welkom om meer over ons product te weten te komen}【Chinees】.
Shot 2: Snede naar, dezelfde digitale persoon @Image 1 schakelt naadloos over naar Engelse monoloog, lipbewegingen passen bij het Engels, langzaam inzoomen, {Hello everyone, welcome}【English】.
Shot 3: Snede naar, digitaal persoon @Image 1 schakelt over naar Japanse groet, houding consistent, vloeiende horizontale beweging, {Minasan konnichiwa}【日本語】.
Shot 4: Medium shot, digitaal persoon @Image 1 maakt een welkomend gebaar met gespreide armen, op de achtergrond verschijnt een stroom van meertalige ondertitels, vaste camerapositie, (technologische achtergrondmuziek).
Shot 5: Langzaam uitzoomen, digitaal persoon @Image 1 glimlacht, knikt en sluit af, blauwe toon bevriest het beeld, (muziek eindigt).
Beperkingen: Redactie taak idee — Genereer eerst een Chinese moederversie van de shots, gebruik dan een bewerkingsinstructie "houd het personage en de camerabeweging onveranderd, vervang alleen de dialoog en lipbewegingen naar de doeltaal" om Engelse/Japanse alter ego's af te leiden, zorg ervoor dat het gezicht @Image 1, camerapositie, achtergrond en kleding gedurende de hele video volledig consistent blijven; lipbewegingen voor elke taal moeten strikt overeenkomen met de bijbehorende dialoog; verboden dat alter ego's gezichtsverschuiving vertonen.
Algemene beperkingen: Houd het zonder ondertitels; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personage moet natuurlijke, subtiele bewegingen hebben, niet als een standbeeld.
```

<a id="category-16"></a>

### Korte Series / Emotionele Verhalen (8)

### No. 1: Convenience Store Reunion (Emotional Reversal)

- **Category:** `Korte Series / Emotionele Verhalen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Refer to the female lead in Image 1 and the male lead in Image 3 (their facial makeup/hairstyles should match the corresponding images), vertical 9:16, cinematic realism, cold blue transitioning to warm orange, generate a 30-second emotional short drama.

#### Prompt

```text
Refer to the female lead in Image 1 and the male lead in Image 3 (their facial makeup/hairstyles should match the corresponding images), vertical 9:16, cinematic realism, cold blue transitioning to warm orange, generate a 30-second emotional short drama.
Shot 1: Wide shot, female lead @Image 1 leans against the window alone, head down stirring coffee, cold blue night tone, camera slowly pushes in, (piano starts softly).
Shot 2: Medium close-up, male lead @Image 3 pushes the door into frame, female lead @Image 1 looks up stunned, fixed camera with breathing sensation, <doorbell dings>.
Shot 3: Close-up, cut to alternating shots between the two, color tone gradually warms, male lead @Image 3 says softly {I'm here to pick you up}, (piano intensifies).
Shot 4: Close-up, female lead @Image 1 eyes redden, corners of mouth turn up, camera slowly pulls out, warm orange freeze frame, (music resolves).
Constraints: Male and female lead faces must remain consistent with corresponding images throughout; convenience store scene is fixed; emotional reversal externalized through reddening eyes and trembling lips; doppelgangers/twins prohibited.
General constraints: Keep no subtitles; do not generate Logo; do not generate watermarks; use only one camera movement per shot; characters need natural slight movement, not statues.
```

### No. 2: Rainy Night Monologue

- **Category:** `Korte Series / Emotionele Verhalen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Protagonist bound to @Image 2 (facial makeup/hairstyle should match the corresponding image), vertical 9:16, cool-toned literary realism, bluish-grey rainy night low saturation, generate a 30-second emotional monologue short film.

#### Prompt

```text
Protagonist bound to @Image 2 (facial makeup/hairstyle should match the corresponding image), vertical 9:16, cool-toned literary realism, bluish-grey rainy night low saturation, generate a 30-second emotional monologue short film.
Shot 1: Close-up, rainwater trickles down the glass window, protagonist's @Image 2 blurred reflection appears behind the glass, fixed camera, <sound of light rain> (low cello starts).
Shot 2: Slowly push in, protagonist @Image 2 presses against the window gazing at the rainy night streetlights, fingertips touching the cold glass, bluish-grey cold light, {Some words can only be told to the rain}.
Shot 3: Smooth pan, camera glides past a phone with screen off and half-cooled tea on the table, protagonist's @Image 2 profile enters frame, (cello intensifies).
Shot 4: Medium close-up, protagonist @Image 2 takes a deep breath and closes eyes, a tear traces cheek overlapping with raindrop on window, slowly push in, <rain intensifies>.
Shot 5: Slowly pull out, protagonist @Image 2 opens eyes, pulls a relieved faint smile and turns away from the window, bluish-grey freeze frame, (music resolves).
Constraints: Protagonist's face must remain consistent with Image 2 throughout; emotion externalized through fingertips against window and tear trace, prohibit explicit dialogue saying "I'm very sad"; rainy night bluish-grey tone and scene consistent throughout.
General constraints: Keep no subtitles; do not generate Logo; do not generate watermarks; use only one camera movement per shot; characters need natural slight movement, not statues.
```

### No. 3: Family Dining Table

- **Category:** `Korte Series / Emotionele Verhalen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Refer to the mother in Image 1, the father in Image 2, and the child in Image 4 (their facial makeup/hairstyles should match the corresponding images), horizontal 16:9, warm life realism, warm yellow home tone, generate a 30-second family emotional short film.

#### Prompt

```text
Refer to the mother in Image 1, the father in Image 2, and the child in Image 4 (their facial makeup/hairstyles should match the corresponding images), horizontal 16:9, warm life realism, warm yellow home tone, generate a 30-second family emotional short film.
Shot 1: Wide shot, family of three sits around dining table, steam rises from hot dishes, mother @Image 1 is serving food to child @Image 4, warm yellow lighting, fixed camera, (warm folk song starts) <clinking of bowls and chopsticks>.
Shot 2: Medium close-up, father @Image 2 smilingly serves soup to mother @Image 1, they exchange a smile, slowly push in, <spoon clinks>.
Shot 3: Close-up, child @Image 4 puffs cheeks eating heartily, looks up with a wide grin, warm light falls on face, cut to this shot.
Shot 4: Medium shot, mother @Image 1 reaches out to wipe corner of father's @Image 2 mouth, father pauses then holds her hand, smooth pan, (folk song warms up).
Shot 5: Slowly crane up, camera rises to look down on the table full of food and the family leaning together, warm yellow freeze frame, (music resolves).
Constraints: Three characters' faces strictly match corresponding images, mother/father/child body/age distinctions clear, prohibit doppelgangers/twins or facial confusion; table dishes and warm yellow home scene consistent throughout.
General constraints: Keep no subtitles; do not generate Logo; do not generate watermarks; use only one camera movement per shot; characters need natural slight movement, not statues.
```

### No. 4: Farewell at the Station

- **Category:** `Korte Series / Emotionele Verhalen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Refer to the female lead in Image 1 and the male lead in Image 3 (their facial makeup/hairstyles should match the corresponding images), horizontal 16:9, cinematic realism, cool-toned platform with slightly warm backlight, generate a 30-second farewell emotional short film.

#### Prompt

```text
Refer to the female lead in Image 1 and the male lead in Image 3 (their facial makeup/hairstyles should match the corresponding images), horizontal 16:9, cinematic realism, cool-toned platform with slightly warm backlight, generate a 30-second farewell emotional short film.
Shot 1: Wide shot, platform bustling with people, female lead @Image 1 and male lead @Image 3 stand facing each other holding hands tightly, train beside them, cool tone backlight, slowly push in, (strings play low) <train arrival announcement>.
Shot 2: Close-up, their tightly clasped fingers slowly tighten then reluctantly loosen, warm backlight outlines them, fixed camera.
Shot 3: Medium close-up, male lead @Image 3 raises hand to tuck female lead's @Image 1 wind-blown hair behind ear, hesitates to speak, slowly push in, {When you arrive... remember to let me know you're safe}.
Shot 4: Medium shot, male lead @Image 3 turns and boards train, female lead @Image 1 stands still, shoulders trembling slightly holding back tears, smooth pan, (strings rise) <door closing warning sound>.
Shot 5: Slowly pull out, train departs, female lead @Image 1 stands alone on empty platform, backlit silhouette, cool tone freeze frame, (music resolves).
Constraints: Male and female lead faces must remain consistent with corresponding images throughout; farewell emotion externalized through tightening fingers and trembling shoulders, prohibit explicit crying/yelling; station scene and cool/warm backlight consistent throughout; doppelgangers/twins prohibited.
General constraints: Keep no subtitles; do not generate Logo; do not generate watermarks; use only one camera movement per shot; characters need natural slight movement, not statues.
```

### No. 5: Workplace Highlight

- **Category:** `Korte Series / Emotionele Verhalen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Protagonist bound to @Image 2 (facial makeup/hairstyle should match the corresponding image), horizontal 16:9, business motivational realism, cold blue steel/glass texture transitioning to golden light, generate a 30-second workplace inspirational short film.

#### Prompt

```text
Protagonist bound to @Image 2 (facial makeup/hairstyle should match the corresponding image), horizontal 16:9, business motivational realism, cold blue steel/glass texture transitioning to golden light, generate a 30-second workplace inspirational short film.
Shot 1: Medium close-up, protagonist @Image 2 sits alone in late-night office frowning at screen full of data, cold blue screen light reflects on face, fixed camera, (low drumbeat starts) <intense keyboard typing>.
Shot 2: Slowly push in, protagonist @Image 2 suddenly looks up, eyes light up, grabs pen to circle key point, screen light brightens abruptly, <inspiration strike sound effect>.
Shot 3: Follow shot, protagonist @Image 2 stands up, strides through hallway pushing open conference room door, camera follows from behind, (drumbeat intensifies).
Shot 4: Low angle shot, protagonist @Image 2 stands before floor-to-ceiling window confidently presenting to the group, city skyline as background, backlit gilded, {This is our answer}.
Shot 5: Slowly orbit, entire room stands applauding, protagonist @Image 2 relaxes and reveals a smile, golden light freeze frame, (music climax resolves) <thunderous applause>.
Constraints: Protagonist's face must remain consistent with Image 2 throughout; emotional arc externalized from frowning to relaxing, cold blue to golden light corresponds to low point to highlight; office scene coherent and consistent.
General constraints: Keep no subtitles; do not generate Logo; do not generate watermarks; use only one camera movement per shot; characters need natural slight movement, not statues.
```

### No. 6: Campus Youth

- **Category:** `Korte Series / Emotionele Verhalen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Refer to the girl in Image 4 and the boy in Image 5 (their facial makeup/hairstyles should match the corresponding images), vertical 9:16, youthful fresh realism, bright warm sunlight high transparency, generate a 30-second campus youth short film.

#### Prompt

```text
Refer to the girl in Image 4 and the boy in Image 5 (their facial makeup/hairstyles should match the corresponding images), vertical 9:16, youthful fresh realism, bright warm sunlight high transparency, generate a 30-second campus youth short film.
Shot 1: Wide shot, afternoon playground with warm sunlight slanting, girl @Image 4 walks quickly across the track holding books, wind lifts her skirt, slowly push in, (fresh guitar starts) <light cicada chirping>.
Shot 2: Medium close-up, boy @Image 5 rides bike past, brakes suddenly and looks back, their gazes meet, both startled, fixed camera, <bicycle brake sound>.
Shot 3: Close-up, girl @Image 4 cheeks blush, lowers head with a suppressed smile, dropped books picked up by boy @Image 5 bending down, warm sunlight, cut to this shot.
Shot 4: Medium shot, two walk side by side on tree-lined path talking and laughing, light spots dance on their faces, follow shot walking alongside, (guitar becomes more cheerful).
Shot 5: Slowly crane up, camera rises to look down on their receding backs and campus bathed in golden light, warm sunlight freeze frame, (music resolves).
Constraints: Girl and boy faces must remain consistent with corresponding images throughout, male/female body distinctions clear, prohibit doppelgangers/twins or confusion; campus warm sunlight high transparency scene consistent throughout; youthful emotion externalized through blushing cheeks and suppressed smile.
General constraints: Keep no subtitles; do not generate Logo; do not generate watermarks; use only one camera movement per shot; characters need natural slight movement, not statues.
```

### No. 7: Suspensevolle Gang

- **Category:** `Korte Series / Emotionele Verhalen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Hoofdpersoon gebonden aan @Image 2 (gezichtsstyling volgens de overeenkomstige afbeelding), staand formaat 9:16, thriller-suspense realisme, donker koelgroen hoog contrast schaduwen, genereer een 30 seconden durende suspense korte film.

#### Prompt

```text
Hoofdpersoon gebonden aan @Image 2 (gezichtsstyling volgens de overeenkomstige afbeelding), staand formaat 9:16, thriller-suspense realisme, donker koelgroen hoog contrast schaduwen, genereer een 30 seconden durende suspense korte film.
Shot 1: Close-up, een ganglamp flikkert onregelmatig, de hoofdlampstraal van hoofdpersoon @Image 2 snijdt door de duisternis, donker koelgroen, vaste camerapositie, <zoemend geluid van lichtbuis> (lage frequentie brom begint).
Shot 2: Volgshot, camera dicht tegen de rug van hoofdpersoon @Image 2 aan terwijl hij/zij langzaam de lange gang in loopt, aarzelende voetstappen, schaduwen worden langgerekt, <echo van voetstappen>.
Shot 3: Langzaam inzoomen, hoofdpersoon @Image 2 stopt plotseling, houdt zijn/haar adem in en kijkt om, pupillen vernauwen, zweet breekt uit, koelgroen licht weerkaatst op het gezicht, <vreemd geluid achter zich, klik>.
Shot 4: Cut naar, een deur aan het einde van de gang waar een spleet licht doorheen sijpelt, langzaam opengaat, hoofdpersoon @Image 2 heft zijn/haar lamp waakzaam en trekt zich terug, (scherpe strijkers klimmen).
Shot 5: Langzaam uitzoomen, hoofdpersoon @Image 2 staat alleen in het midden van de donkere lange gang, schaduwen naderen van alle kanten, koelgroen bevriest het beeld, <plotselinge stilte> (muziek stopt abrupt).
Beperkingen: Gezicht hoofdpersoon moet gedurende de hele scène consistent zijn met Image 2; gespannen emotie externaliseren door ingehouden adem, omkijken en zweet/vernauwde pupillen; donker koelgroen hoog contrast licht en schaduw en gangscène consistent door de hele scène; einde gebruiken van stilte om een griezelige open einde te creëren.
Algemene beperkingen: Houd het ondertitelingsvrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 8: Herstelde Relatie (gebruik bewerkingstaak voor contrastafgeleide)

- **Category:** `Korte Series / Emotionele Verhalen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de vrouwelijke hoofdpersoon in Image 1, de mannelijke hoofdpersoon in Image 3 (hun respectievelijke gezichtsstyling volgens de overeenkomstige afbeeldingen), staand formaat 9:16, filmisch realisme, van koudgrijs regenachtig naar warmgouden zonlicht, genereer een 30 seconden durende emotionele korte film over herstelde relaties.

#### Prompt

```text
Verwijs naar de vrouwelijke hoofdpersoon in Image 1, de mannelijke hoofdpersoon in Image 3 (hun respectievelijke gezichtsstyling volgens de overeenkomstige afbeeldingen), staand formaat 9:16, filmisch realisme, van koudgrijs regenachtig naar warmgouden zonlicht, genereer een 30 seconden durende emotionele korte film over herstelde relaties.
Shot 1: Medium close-up, vrouwelijke hoofdpersoon @Image 1 en mannelijke hoofdpersoon @Image 3 staan rug aan rug in de koudgrijze regen, beiden met gebogen hoofd, afstand tussen hen groter wordend, vaste camerapositie, (onderdrukkende piano begint) <koel, eenzaam regengeluid>.
Shot 2: Close-up, een oude foto ligt uitgespreid in een plas water en wordt natgeregend, in de spiegelende reflectie lopen de twee langzaam uit elkaar, langzaam inzoomen.
Shot 3: Cut naar, de lucht klaart op, warm gouden zonlicht valt naar beneden, mannelijke hoofdpersoon @Image 3 draait zich om en strekt zijn hand uit, vrouwelijke hoofdpersoon @Image 1 kijkt langzaam terug met tranen in haar ogen, vloeiende zijwaartse beweging, (piano wordt warmer en sterker).
Shot 4: Medium shot, de twee staan omhelzend, vrouwelijke hoofdpersoon @Image 1 begraaft haar gezicht in de schouder van de mannelijke hoofdpersoon @Image 3, mannelijke hoofdpersoon streelt zachtjes haar haar, warm gouden tegenlicht tekent hun contouren, langzaam ronddraaiende beweging, {Sorry, ik ben terug}.
Shot 5: Langzaam uitzoomen, de twee afhankelijke figuren smelten samen in het warme gouden zonlicht, beeld bevriest, (muziek eindigt bevredigend).
Beperkingen: Bewerkingstaak benadering - Genereer eerst Shot 1 tot Shot 2 "koudgrijs regenachtige afstandelijke versie" moederversie, gebruik dan de bewerkingsinstructie "houd de gezichten van personen @Image 1/@Image 3, camerapositie en compositie hetzelfde, verander alleen het weer naar warm gouden zonlicht, houding van rug aan rug naar omhelzend" om Shot 3 tot Shot 5 contrastversie af te leiden, bereik koud/warm omkering in dezelfde scène; gezichten mannelijke en vrouwelijke hoofdpersoon consistent gedurende de hele scène; verbied gesplitste tweelingen; verzoeningsemotie externaliseren door terugkijken met tranen en omhelzen/gezicht begraven.
Algemene beperkingen: Houd het ondertitelingsvrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

<a id="category-17"></a>

### Merken-TVC / Reclame (6)

### No. 1: Parfummerk in één take

- **Category:** `Merken-TVC / Reclame`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de parfumfles in Image 1 als hoofdonderwerp, breedbeeld 2.35:1, hoogwaardige filmische uitstraling, schemergouden toon, genereer een 30 seconden durende merk sfeerfilm, in één take.

#### Prompt

```text
Verwijs naar de parfumfles in Image 1 als hoofdonderwerp, breedbeeld 2.35:1, hoogwaardige filmische uitstraling, schemergouden toon, genereer een 30 seconden durende merk sfeerfilm, in één take.
Shot 1: Extreme close-up begint bij een waterdruppel die condenseert op het oppervlak van de fles @Image 1, camera trekt langzaam terug, waterdruppel glijdt weg en breekt warm licht, (lage omgevingsstrijkers beginnen zachtjes).
Shot 2: Camera blijft omhoog gaan en zijwaarts bewegen, parfumfles @Image 1 staat langzaam rechtop op een vochtig marmeren oppervlak, zij- en tegenlicht tekent de contouren van de fles, <zacht geluid van vallende waterdruppel>.
Shot 3: Camera draait soepel een halve cirkel rond de fles, toont de breking van het schemerlicht door het geslepen glas, lichtvlekken dansen over het oppervlak.
Shot 4: Camera gaat soepel omhoog en kijkt neer op de hele setting, zijde en bloemblaadjes verspreid over het oppervlak, schemergoud vult het beeld, 【De geur als licht, blijft in dit moment】.
Shot 5: Camera trekt langzaam terug naar de close-up waterdruppel, beeld vervaagt en bevriest op het merk schemergoud, (strijkers houden één lange toon aan en eindigen).
Beperkingen: Gehele scène in één take zonder cuts; fles moet overeenkomen met Image 1; schemergouden toon en vochtige textuur doorlopend.
Algemene beperkingen: Houd het ondertitelingsvrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 2: Sportmerk inspirerend

- **Category:** `Merken-TVC / Reclame`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de atleet in Image 2 als hoofdonderwerp, staand formaat 9:16, hoog contrast robuuste koele toon, korrelige straatstijl, genereer een 30 seconden durende inspirerende sportmerk advertentie.

#### Prompt

```text
Verwijs naar de atleet in Image 2 als hoofdonderwerp, staand formaat 9:16, hoog contrast robuuste koele toon, korrelige straatstijl, genereer een 30 seconden durende inspirerende sportmerk advertentie.
Shot 1: Extreme close-up van de ogen van atleet @Image 2 die plotseling opengaan in de schaduwen, lage hoek opname, <snelle ademhaling>, (lage frequentie drumbeat valt in).
Shot 2: Camera volgt snel atleet @Image 2 die uit een donker steegje sprint, water spat op van onder zijn voeten, koele blauwe straatlantaarns trekken lichtsporen, <geluid van schurende schoenzolen>.
Shot 3: Lage hoek opname van zijn sprong over een obstakel, silhouet tegen het licht vult het beeld, (drumbeat wordt sneller en intenser).
Shot 4: Camera beweegt soepel zijwaarts en volgt zijn zijaanzicht tijdens de sprint, zweetdruppels spatten in het harde licht, spierlijnen gespannen, <bonzend hartgeluid>.
Shot 5: Camera zoomt langzaam in op zijn schreeuwende gezicht vlak voor de finish, koele toon hoog contrast beeld bevriest, 【Voorbijstreven kent geen eindpunt】, (drumbeat stopt abrupt).
Beperkingen: Gehele scène koele blauwe harde lichten hoog contrast; atleet moet overeenkomen met Image 2; ritme loopt op van langzaam ingehouden naar explosief.
Algemene beperkingen: Houd het ondertitelingsvrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 3: Goede doel warmte

- **Category:** `Merken-TVC / Reclame`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Staand formaat 9:16, zacht natuurlijk licht, documentaire warme toon, ondiepe scherptediepte, genereer een 30 seconden durende warme korte film voor een goed doel, emotie van eenzaamheid naar acceptatie.

#### Prompt

```text
Staand formaat 9:16, zacht natuurlijk licht, documentaire warme toon, ondiepe scherptediepte, genereer een 30 seconden durende warme korte film voor een goed doel, emotie van eenzaamheid naar acceptatie.
Shot 1: Vaste camerapositie close-up van een paar kleine handen die een vervaagde lappenpop stevig vasthouden, ochtendlicht schijnt schuin binnen, stofdeeltjes dansen, (piano enkele toon begint zachtjes).
Shot 2: Camera trekt langzaam terug, eenzaam meisje zit alleen in de hoek van een dorpsklaslokaal, zacht tegenlicht van buiten het raam, <geluid van spelende kinderen in de verte>.
Shot 3: Camera beweegt soepel zijwaarts, een grote hand reikt een potlood aan, het meisje kijkt aarzelend op, warm licht overspoelt haar gezicht.
Shot 4: Camera volgt het meisje dat aan de hand wordt meegenomen naar het midden van het klaslokaal, klasgenoten komen samen, ondiepe scherptediepte vervaagt de achtergrond, (warme strijkers spreiden zich uit).
Shot 5: Camera gaat langzaam omhoog en kijkt neer op de hele klas die samen zit te lezen, warm zonlicht vult de vloer, 【Elk kind verdient het om gezien te worden】, (piano en strijkers eindigen).
Beperkingen: Gehele scène zacht natuurlijk licht warme toon; emotionele boog van eenzaamheid naar acceptatie; ondiepe scherptediepte benadrukt personen.
Algemene beperkingen: Houd het ondertitelingsvrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 4: Fintech futuristisch

- **Category:** `Merken-TVC / Reclame`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de creditcard in Image 3 als hoofdonderwerp, liggend formaat 16:9, koel donkerblauw technologische toon, minimalistisch hoogwaardig gevoel, genereer een 30 seconden durende fintech merkfilm.

#### Prompt

```text
Verwijs naar de creditcard in Image 3 als hoofdonderwerp, liggend formaat 16:9, koel donkerblauw technologische toon, minimalistisch hoogwaardig gevoel, genereer een 30 seconden durende fintech merkfilm.
Shot 1: Extreme close-up dicht bij de textuur van de metalen chip van creditcard @Image 3, blauwe data lichtstromen glijden over het oppervlak, (lage frequentie synthesizer puls begint).
Shot 2: Camera trekt langzaam terug, creditcard @Image 3 zweeft in een puur zwarte ruimte, halfdoorzichtige data ringen verschijnen eromheen, <elektronisch scangeluid>.
Shot 3: Camera draait soepel een cirkel rond de kaart, blauw licht raster stroomt met het perspectief mee, licht en schaduw dansen langs de metalen randen.
Shot 4: Camera kijkt neer op de kaart, eronder groeit een stedelijke data skyline, koele blauwe lichtpunten verbinden tot een netwerk, (pulsritme versnelt).
Shot 5: Camera zoomt langzaam in op de kaart en bevriest op het merklogo, donkerblauw vervaagt langzaam, 【Veiligheid, zichtbaar in elk vertrouwen】, (synthesizer lange toon houdt aan en eindigt).
Beperkingen: Gehele scène koel donkerblauw technologische toon; kaart moet overeenkomen met Image 3; data lichtstroom gevoel doorlopend.
Algemene beperkingen: Houd het ondertitelingsvrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijke, subtiele bewegingen hebben, niet als standbeelden.
```

### No. 5: Verfrissend drankje

- **Category:** `Merken-TVC / Reclame`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Gebruik de drankblikjes uit Afbeelding 4 als hoofdonderwerp, verticaal formaat 9:16, hoogverzadigde heldere zomertoon, transparant waterig gevoel, genereer een 30 seconden durende verfrissende drankreclame.

#### Prompt

```text
Gebruik de drankblikjes uit Afbeelding 4 als hoofdonderwerp, verticaal formaat 9:16, hoogverzadigde heldere zomertoon, transparant waterig gevoel, genereer een 30 seconden durende verfrissende drankreclame.
Shot 1: Ultra-highspeed macro close-up, een waterdruppel valt op het oppervlak van een gekoeld drankblikje @Afbeelding 4 en spat uiteen, laaghoekopname, <knappend kraakheldergeluid van water>, (levendige elektronische beat begint).
Shot 2: Camera draait langzaam rond het met condens bedekte blikje @Afbeelding 4, waterdruppels rollen glinsterend in tegenlicht, zonlicht breekt door en creëert regenboogkleuren.
Shot 3: Camera trekt snel terug, drank wordt in een glas vol ijs gegoten, bubbels borrelen op, <sissend geluid van bubbels>.
Shot 4: Laaghoekopname van een hand die het drankje naar de felle zon tilt, citroen en munt vallen door de lucht, (beat stijgt op).
Shot 5: Camera schuift langzaam in op de bubbels aan de rand van het glas en bevriest, hoogverzadigde zomerblauw en geel vullen het beeld, 【Een slok, wekt de hele zomer wakker】, (beat eindigt kraakhelder).
Beperkingen: Doorlopend hoogverzadigde heldere zomertoon; drankblikjes conform Afbeelding 4; transparante textuur van waterdruppels en bubbels benadrukken.
Algemene beperkingen: Geen ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 6: Baby- en moedermerk

- **Category:** `Merken-TVC / Reclame`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verticaal formaat 9:16, extreem zachte crèmekleurige toon, wazige dromerige onscherpte, genereer een 30 seconden durende zachte merkfilm voor een baby- en moedermerk.

#### Prompt

```text
Verticaal formaat 9:16, extreem zachte crèmekleurige toon, wazige dromerige onscherpte, genereer een 30 seconden durende zachte merkfilm voor een baby- en moedermerk.
Shot 1: Vaste camerapositie macro close-up van gekromde babytententjes, ochtendlicht valt als een sluier over hen, (speeldoosachtige heldere tonen beginnen zacht).
Shot 2: Camera trekt langzaam terug, moeder wiegt een slapende baby zachtjes in haar armen, gordijnen laten diffuus, wazig licht door, <subtiel geluid van babyademhaling>.
Shot 3: Camera beweegt vloeiend horizontaal, moeder kust het voorhoofd van de baby, crèmekleurig warm licht stroomt over hun contouren.
Shot 4: Camera stijgt langzaam voor een bovenaanzicht van moeder en kind naast een wieg, zachte katoenen stoffen vullen het beeld, (zachte strijkers voegen zich bij).
Shot 5: Camera schuift langzaam in op de glimlach van de baby, zacht licht overbelicht en vervaagt, 【Tederheid, is de eerste bescherming】, (speeldoos en strijkers eindigen).
Beperkingen: Doorlopend crèmekleurig extreem zacht licht; wazige onscherpte voor dromerige textuur; sfeer van begin tot eind rustig en teder.
Algemene beperkingen: Geen ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

<a id="category-18"></a>

### Reizen / Cultuurtoerisme (6)

### No. 1: Oude stad drone shot in één take

- **Category:** `Reizen / Cultuurtoerisme`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Horizontaal formaat 16:9, inktwas grijsblauwe toon, ochtendmist poëtische filmische sfeer, genereer een 30 seconden durende drone film voor culturele toerisme van een oude stad, in één continue opname.

#### Prompt

```text
Horizontaal formaat 16:9, inktwas grijsblauwe toon, ochtendmist poëtische filmische sfeer, genereer een 30 seconden durende drone film voor culturele toerisme van een oude stad, in één continue opname.
Shot 1: Drone vliegt extreem laag over een geplaveide watersteeg, een traditionele boot komt door het water in de ochtendmist, (een heldere toon van een guzheng begint).
Shot 2: Camera stijgt soepel omhoog, roze muren, zwarte dakpannen en trapgevels ontvouwen zich in lagen, rook stijgt op uit de steegjes, <geluid van roeispaan in water>.
Shot 3: Camera beweegt vloeiend horizontaal over een boogbrug, onder de brug zijn wassende figuren vaag zichtbaar, reflecties deinen op het water.
Shot 4: Camera blijft stijgen en cirkelt rond het panoramische beeld van de oude stad, waterwegen kronkelen als aderen, ochtendmist waait over de grijsblauwe daken, (verre fluitmuziek voegt zich bij).
Shot 5: Camera trekt langzaam omhoog voor een bovenaanzicht van de oude stad omringd door bergen en bevriest, inktwas grijsblauw vervaagt in de horizon, 【Een droom van duizend jaar, wonend aan het water】, (guzheng en fluit eindigen).
Beperkingen: Doorlopend één continue drone opname zonder cuts; inktwas grijsblauwe ochtendmist toon doorlopend; Oosterse poëtische compositie met ruimte voor verbeelding.
Algemene beperkingen: Geen ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 2: Eilandvakantie

- **Category:** `Reizen / Cultuurtoerisme`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Horizontaal formaat 16:9, transparante hoogverzadigde tropische toon, stralend zonlicht textuur, genereer een 30 seconden durende reisfilm voor een eilandvakantie.

#### Prompt

```text
Horizontaal formaat 16:9, transparante hoogverzadigde tropische toon, stralend zonlicht textuur, genereer een 30 seconden durende reisfilm voor een eilandvakantie.
Shot 1: Onderwater macro close-up van zonlicht dat door turquoise water schijnt en lichtstralen werpt, scholen vissen zwemmen snel voorbij, (melodieuze ukelele begint).
Shot 2: Camera komt langzaam boven water, onthult wit zandstrand, palmbomen en helder rifmeer, drone trekt vloeiend terug, <geluid van branding>.
Shot 3: Camera volgt op lage hoogte een persoon die in het transparante ondiepe water springt, opspattend water creëert rimpelingen, zonlicht bedekt het wateroppervlak.
Shot 4: Camera stijgt langzaam en cirkelt voor een bovenaanzicht van een maanvormige baai, een zeilboot glijdt over het smaragdgroene water, (ritme wordt vrolijk en stralend).
Shot 5: Camera schuift in op een silhouet dat een glas heft tegen de ondergaande zon op het strand, warm gouden gloed vult het beeld, 【Laat je zorgen achter aan de andere kant van de kust】, (ukelele eindigt).
Beperkingen: Doorlopend transparante hoogverzadigde tropische toon; turquoise helder water textuur benadrukken; sfeer ontspannen en stralend.
Algemene beperkingen: Geen ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 3: Heiligheid van de besneeuwde berg

- **Category:** `Reizen / Cultuurtoerisme`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Horizontaal formaat 16:9, koud hoogcontrast witblauwe toon, extreem heldere grootsheid, genereer een 30 seconden durende epische culturele toerisme film voor een besneeuwde berg.

#### Prompt

```text
Horizontaal formaat 16:9, koud hoogcontrast witblauwe toon, extreem heldere grootsheid, genereer een 30 seconden durende epische culturele toerisme film voor een besneeuwde berg.
Shot 1: Extreem close macro shot van een scherpe facet van een ijskristal in een sneeuwstorm, koudblauw tegenlicht flikkert, <huilend geluid van ijzige wind>, (lage koorzang begint).
Shot 2: Camera trekt langzaam terug, een eenzame besneeuwde piek doorboort een zee van wolken en staat aan de horizon, ochtendgloren kleurt de top goud, beeld is uitgestrekt.
Shot 3: Drone shot beweegt vloeiend horizontaal langs uitgestrekte sneeuwwallen, wind blaast sneeuwmist op als linten, koudblauwe schaduwen en helder licht contrasteren scherp.
Shot 4: Camera stijgt langzaam voor een bovenaanzicht van een kronkelende gletsjerkloof die naar beneden loopt, blauw ijs is diep en doorschijnend, (koorzang zwelt laag voor laag aan, groots).
Shot 5: Laaghoekopname bevriest op de met zon beschenen gouden piek, op de grens van koud wit en warm goud stort heilig licht naar beneden, 【Omhoog, alleen om puurheid aan te raken】, (menselijke stem eindigt met lange toon).
Beperkingen: Doorlopend koude witblauwe toon met hoog contrast; groots, uitgestrekte compositie; ijskristal textuur en gouden bergpiek als hoogtepunt.
Algemene beperkingen: Geen ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 4: Stadsnacht

- **Category:** `Reizen / Cultuurtoerisme`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Horizontaal formaat 16:9, cyberpunk neon hoogverzadigde toon, vochtig reflecterend stadsgevoel, genereer een 30 seconden durende reisfilm voor stadsnachtleven.

#### Prompt

```text
Horizontaal formaat 16:9, cyberpunk neon hoogverzadigde toon, vochtig reflecterend stadsgevoel, genereer een 30 seconden durende reisfilm voor stadsnachtleven.
Shot 1: Extreem macro close-up van een regendruppel die over glas glijdt, achterliggende neonlichtvlekken vervagen tot wazige lichtbollen, (elektronische synthesizer puls begint).
Shot 2: Camera trekt langzaam terug door een raam, drone bovenaanzicht van drukke straten geweven met lichtsporen van voertuigen na regen, <geluid van verkeersstroom>.
Shot 3: Drone shot stijgt vloeiend en cirkelt rond wolkenkrabbers, glazen gevels reflecteren neonlicht, licht en schaduw flikkeren in lagen.
Shot 4: Camera volgt op lage hoogte een parapludragende voetganger in een neonverlichte steeg, vochtige grond reflecteert kleurrijke lichten, (ritme gaat door).
Shot 5: Camera trekt langzaam omhoog voor een bovenaanzicht van de hele lichtzee van de nachtelijke stad die bevriest, neonlicht pulseert als ademhaling, 【Onder het licht, liggen alle verhalen】, (synthesizer eindigt).
Beperkingen: Doorlopend cyberpunk neon hoogverzadigd; vochtig reflecterende textuur doorlopend; lichtsporen en neonlagen rijk aan details.
Algemene beperkingen: Geen ondertitels; geen Logo genereren; geen watermerk genereren; elke shot gebruikt slechts één camerabeweging; personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 5: 沙漠驼队

- **Category:** `Reizen / Cultuurtoerisme`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

横屏16:9，暖金橙沙漠调、大光比逆光史诗感，生成30秒沙漠文旅片。

#### Prompt

```text
横屏16:9，暖金橙沙漠调、大光比逆光史诗感，生成30秒沙漠文旅片。
Shot 1：极近微距特写细沙自指缝簌簌流泻，逆光下每一粒沙金光闪烁，（悠远弦乐与手鼓起）。
Shot 2：镜头缓慢拉远，一列驼队踏着起伏沙丘剪影缓行，夕阳巨大低垂于地平线，<驼铃叮当声>。
Shot 3：镜头航拍俯拍驼队在沙脊上投下的修长斜影，沙丘曲线如绸缎起伏。
Shot 4：镜头低角度仰拍领驼人迎风前行的逆光剪影，风卷沙尘飞扬，（手鼓节奏渐强）。
Shot 5：镜头缓慢升空俯瞰驼队没入无垠金色沙海定格，暖金橙铺满天地，【穿越荒芜 只为看见辽阔】，（弦乐手鼓收束）。
约束：全程暖金橙大光比逆光；沙丘曲线与驼队剪影为构图核心；史诗辽远情绪。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 6: 街头美食巡游（一镜）

- **Category:** `Reizen / Cultuurtoerisme`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

竖屏9:16，暖橙烟火高饱和调、市井鲜活质感，生成30秒街头美食巡游片，一镜到底。

#### Prompt

```text
竖屏9:16，暖橙烟火高饱和调、市井鲜活质感，生成30秒街头美食巡游片，一镜到底。
Shot 1：极致微距从铁板上滋滋作响溅油的食材开始，镜头缓慢拉远，热气蒸腾，<油花爆响声>，（欢快市井打击乐起）。
Shot 2：镜头顺势平稳横移穿过熙攘夜市，暖黄灯串下摊主翻炒火焰腾起，<人声鼎沸叫卖声>。
Shot 3：镜头继续跟拍钻入小巷，掠过蒸笼掀盖白雾涌出、烤串炭火通红，烟火气弥漫。
Shot 4：镜头缓慢环绕一桌食客大快朵颐，碰杯欢笑，暖橙灯光映满笑脸，（打击乐节奏欢腾）。
Shot 5：镜头顺势升高俯拍整条美食长街灯火通明定格，人潮涌动，【人间烟火 最抚凡心】，（打击乐收束）。
约束：全程一镜到底连续运镜不切；暖橙烟火高饱和调；热气火焰烟火气贯穿。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

<a id="category-19"></a>

### Huisdieren / Dieren (5)

### No. 1: 萌猫特写

- **Category:** `Huisdieren / Dieren`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

以猫咪@Image 1为主体，竖屏9:16，柔焦生活流、暖阳米白色调+浅景深，生成30秒治愈系萌宠短片。

#### Prompt

```text
以猫咪@Image 1为主体，竖屏9:16，柔焦生活流、暖阳米白色调+浅景深，生成30秒治愈系萌宠短片。
Shot 1：特写，猫咪@Image 1 突然睁大瞳孔直视镜头，固定机位，（清脆钢片琴单音）<猫咪软软"喵">。
Shot 2：微距，猫咪@Image 1 粉色鼻头轻轻抽动、胡须颤动，镜头缓慢推近，<细微鼻息声>。
Shot 3：中景，猫咪@Image 1 抬爪按住飘落的羽毛，镜头平稳横移，（钢片琴节奏轻快）。
Shot 4：特写，猫咪@Image 1 打了个哈欠露出小舌头，镜头缓慢拉远，<满足呼噜声>。
Shot 5：全景，猫咪@Image 1 蜷成一团闭眼睡去，镜头缓慢升起俯拍定格，（音乐渐弱）【今天也要好好休息】。
约束：猫咪毛色花纹以Image 1为准全程一致，瞳孔与鼻头保持粉色，禁止换种换色。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 2: 狗狗奔跑

- **Category:** `Huisdieren / Dieren`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

以狗狗@Image 1为主体，横屏16:9，运动追焦、金色逆光草原+高速快门颗粒感，生成30秒热血奔跑片。

#### Prompt

```text
以狗狗@Image 1为主体，横屏16:9，运动追焦、金色逆光草原+高速快门颗粒感，生成30秒热血奔跑片。
Shot 1：低机位特写，狗狗@Image 1 后腿蹬地爆发起跑扬起草屑，固定机位，（鼓点骤起）<爪子踏地闷响>。
Shot 2：全景，狗狗@Image 1 舒展四肢横穿草原，镜头平稳横移追焦，<风声灌耳>。
Shot 3：跟拍中景，狗狗@Image 1 耳朵后掠、舌头甩出，镜头低机位跟拍，（节奏加速）。
Shot 4：特写，狗狗@Image 1 腾空跃过小溪水花四溅，镜头缓慢推近升格慢动作，<水花溅落声>。
Shot 5：全景，狗狗@Image 1 冲向镜头前急停坐下咧嘴喘气，镜头缓慢拉远定格，（音乐收束）<欢快喘息>。
约束：狗狗品种毛色以Image 1为准全程一致，奔跑步态符合真实四足力学，禁止漂浮滑步。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 3: 水下鱼群

- **Category:** `Huisdieren / Dieren`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

以珊瑚礁热带鱼群@Image 1为主体，横屏16:9，纪录片级水下摄影、丁达尔光柱+青蓝通透水色，生成30秒海底探索片。

#### Prompt

```text
以珊瑚礁热带鱼群@Image 1为主体，横屏16:9，纪录片级水下摄影、丁达尔光柱+青蓝通透水色，生成30秒海底探索片。
Shot 1：特写，一条小丑鱼@Image 1 从海葵触手间探头，固定机位，（空灵水滴音乐起）<气泡咕噜>。
Shot 2：全景，成群热带鱼@Image 1 汇聚成银色漩涡，镜头缓慢环绕，<水流涌动声>。
Shot 3：中景，鱼群@Image 1 集体转向穿过光柱，镜头平稳横移穿行，（弦乐铺展）。
Shot 4：仰拍全景，鱼群@Image 1 游向海面剪影，镜头缓慢升起仰拍，<深海低频嗡鸣>。
Shot 5：特写，小丑鱼@Image 1 独自游回海葵停驻，镜头缓慢拉远定格，（音乐渐隐）。
约束：小丑鱼橙白条纹与礁石配色以Image 1为准，鱼群游动保持自然错位不重叠穿模，禁止整齐克隆队列。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 4: 鸟类微距

- **Category:** `Huisdieren / Dieren`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

以蜂鸟@Image 1为主体，竖屏9:16，超微距高速摄影、晨露花丛+虚化奶油背景，生成30秒生态微观片。

#### Prompt

```text
以蜂鸟@Image 1为主体，竖屏9:16，超微距高速摄影、晨露花丛+虚化奶油背景，生成30秒生态微观片。
Shot 1：微距特写，蜂鸟@Image 1 悬停振翅化为透明弧影，固定机位，（竖琴泛音起）<高频振翅嗡响>。
Shot 2：特写，蜂鸟@Image 1 细长喙探入花蕊吸蜜，镜头缓慢推近，<花瓣轻颤>。
Shot 3：微距，蜂鸟@Image 1 喉部虹彩羽毛随角度变色，镜头缓慢环绕，（竖琴滑音）。
Shot 4：中景，蜂鸟@Image 1 抖落身上晨露珠，镜头平稳横移升格慢动作，<水珠坠落>。
Shot 5：全景，蜂鸟@Image 1 骤然弹射飞离画面，镜头缓慢拉远定格空枝，（音乐收束）。
约束：蜂鸟虹彩羽色与喙形以Image 1为准，振翅呈现真实高速虚化残影，禁止翅膀定格僵硬。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 5: Gepersonifieerd huisdier

- **Category:** `Huisdieren / Dieren`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Met de Shiba Inu met chefkoksmuts @Image 1 als hoofdonderwerp, staand formaat 9:16, Pixar-stijl 3D cartoon, warme keukenverlichting + verzadigde highlights, genereer een 30 seconden durende grappige gepersonifieerde korte film. Vergrendel 3D cartoon rendering, verbied realistische verschuiving.

#### Prompt

```text
Met de Shiba Inu met chefkoksmuts @Image 1 als hoofdonderwerp, staand formaat 9:16, Pixar-stijl 3D cartoon, warme keukenverlichting + verzadigde highlights, genereer een 30 seconden durende grappige gepersonifieerde korte film. Vergrendel 3D cartoon rendering, verbied realistische verschuiving.
Shot 1: Close-up, Shiba Inu @Image 1 met scheve chefkoksmuts kijkt serieus naar de koekenpan, vaste camerapositie, (grappige fagot start) {"Vandaag, wokken!"}.
Shot 2: Medium shot, Shiba Inu @Image 1 houdt de pan met beide poten vast en gooit ingrediënten krachtig de lucht in, camera zoomt langzaam in, <olie sist>.
Shot 3: Full shot, Shiba Inu @Image 1 kijkt omhoog en opent zijn mond om het op te vangen maar alles valt op zijn gezicht, vaste camerapositie, (geluidseffect "ping") <plakkerig gezicht>.
Shot 4: Close-up, Shiba Inu @Image 1 knippert verbaasd met zijn ogen met beslag op zijn gezicht, camera zoomt langzaam in, {"...gaat wel."}.
Shot 5: Medium shot, Shiba Inu @Image 1 presenteert trots een zwartgeblakerd gerecht, camera zoomt langzaam uit en bevriest, (vrolijk einde) 【Keukenramp·Shiba】.
Beperkingen: De vachtkleur van de Shiba Inu en de chefkoksmuts moeten gedurende de hele scène overeenkomen met Image 1, vergrendel 3D cartoon stijl, overdreven gepersonifieerde gezichtsuitdrukkingen maar proporties consistent, verbied realistische verschuiving tijdens de scène.
```

<a id="category-20"></a>

### Kinderen / Educatie / Wetenschap (5)

### No. 1: Marsverkenning educatie

- **Category:** `Kinderen / Educatie / Wetenschap`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Met de Marsrover @Image 1 als hoofdonderwerp, liggend formaat 16:9, documentaire educatieve CG, roestige rode oppervlakte + koele sterrenhemel, genereer een 30 seconden durende ruimtevaart educatieve film.

#### Prompt

```text
Met de Marsrover @Image 1 als hoofdonderwerp, liggend formaat 16:9, documentaire educatieve CG, roestige rode oppervlakte + koele sterrenhemel, genereer een 30 seconden durende ruimtevaart educatieve film.
Shot 1: Full shot, rover @Image 1 staat stil op de horizon van de rode wildernis, camera rijst langzaam op, (grandioze synthesizer start) <Mars wind suist>.
Shot 2: Close-up, rover @Image 1 rijdt langzaam over steentjes met zijn zes wielen, camera volgt vanaf lage positie, <mechanisch gekraak>.
Shot 3: Medium shot, rover @Image 1 steekt zijn robotarm uit om een steenmonster te verzamelen, camera zoomt langzaam in, (strijkers worden sterker) 【Boor monster·Analyseer samenstelling】.
Shot 4: Low-angle shot, rover @Image 1 richt zijn cameramast naar de hemel, camera draait langzaam om, <data piepgeluiden>.
Shot 5: Full shot, rover @Image 1 rijdt naar een verre krater, camera zoomt langzaam uit en bevriest in een vogelperspectief, (muziek stijgt) 【Volgende halte: onbekend】.
Beperkingen: De structuur en kleurschema van de rover moeten gedurende de hele scène overeenkomen met Image 1, het Marsoppervlak moet realistisch stof in lage zwaartekracht tonen, verbied aardse vegetatie of blauwe lucht.
```

### No. 2: Menselijk orgaan illustratie

- **Category:** `Kinderen / Educatie / Wetenschap`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Met het 3D hartmodel @Image 1 als hoofdonderwerp, liggend formaat 16:9, medische visualisatie, halfdoorzichtige textuur + donkere achtergrond met rode aderlichten, genereer een 30 seconden durende menselijk lichaam educatieve film. Vergrendel halfdoorzichtige medische 3D stijl, verbied realistische of bloederige verschuiving.

#### Prompt

```text
Met het 3D hartmodel @Image 1 als hoofdonderwerp, liggend formaat 16:9, medische visualisatie, halfdoorzichtige textuur + donkere achtergrond met rode aderlichten, genereer een 30 seconden durende menselijk lichaam educatieve film. Vergrendel halfdoorzichtige medische 3D stijl, verbied realistische of bloederige verschuiving.
Shot 1: Full shot, hart @Image 1 zweeft in een donkere ruimte en klopt langzaam, camera draait langzaam om, (lage frequentie puls muziek start) <hartslag bonkt>.
Shot 2: Close-up, hart @Image 1 oppervlak toont kransslagaders oplichtend, camera zoomt langzaam in, 【Kransslagaders·Bloedtoevoer】.
Shot 3: Doorsnede medium shot, hart @Image 1 wordt halfdoorzichtig en toont bloedstroom in de vier kamers, camera beweegt vlakzijwaarts, <bloedstroom stroomt>.
Shot 4: Close-up, hart @Image 1 mitralisklep opent en sluit met het ritme, vaste camerapositie, (ritme synchroon met hartslag).
Shot 5: Full shot, hart @Image 1 herstelt volledig en blijft kloppen, camera zoomt langzaam uit en bevriest, (muziek wordt stabiel) 【Ongeveer 100.000 slagen per dag】.
Beperkingen: De anatomische structuur en positie van de hartkamers moeten wetenschappelijk accuraat zijn volgens Image 1, behoud halfdoorzichtige illustratieve stijl, verbied realistische bloederigheid of structurele fouten.
```

### No. 3: Kinderprentenboek animatie

- **Category:** `Kinderen / Educatie / Wetenschap`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Met het beertje @Image 1 als hoofdonderwerp, staand formaat 9:16, 2D handgetekende prentenboekstijl, aquarelpapiertextuur + warme kleurpotloodomlijning, genereer een 30 seconden durende slaapverhaalanimatie. Vergrendel 2D handgetekende aquarelstijl, verbied realistische of 3D verschuiving.

#### Prompt

```text
Met het beertje @Image 1 als hoofdonderwerp, staand formaat 9:16, 2D handgetekende prentenboekstijl, aquarelpapiertextuur + warme kleurpotloodomlijning, genereer een 30 seconden durende slaapverhaalanimatie. Vergrendel 2D handgetekende aquarelstijl, verbied realistische of 3D verschuiving.
Shot 1: Medium shot, beertje @Image 1 duwt de hutdeur open en kijkt naar de sterrenhemel, vaste camerapositie, (muziekdoos melodie start) {"Vanavond zijn de sterren zo helder."}.
Shot 2: Full shot, beertje @Image 1 loopt met een lantaarntje over een bloemenpad, camera beweegt vlakzijwaarts, <gras ritselt>.
Shot 3: Close-up, beertje @Image 1 kijkt omhoog naar een vallende ster, camera zoomt langzaam in, (ding dong geluid) 【Doe een wens】.
Shot 4: Medium shot, beertje @Image 1 sluit zijn ogen en vouwt zijn handen om een wens te doen, camera draait langzaam om, <nachtwind waait zacht>.
Shot 5: Full shot, beertje @Image 1 gaat in het gras liggen en dekt zich toe met een bladerdeken om in slaap te vallen, camera rijst langzaam op en bevriest in vogelperspectief, (muziekdoos vervaagt) {"Welterusten, kleine sterren."}.
Beperkingen: Het uiterlijk en kleurenschema van het beertje moeten gedurende de hele scène overeenkomen met Image 1, vergrendel 2D handgetekende aquarel penseelstreken, behoud papiertextuur en omtreklijnen, verbied overgang naar 3D of realisme.
```

### No. 4: Natuurkunde experiment demonstratie

- **Category:** `Kinderen / Educatie / Wetenschap`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Met de Newton's cradle metalen ballen @Image 1 als hoofdonderwerp, liggend formaat 16:9, natuurwetenschappelijke demonstratie realistisch, puur laboratoriumwit + zij- en tegenlicht, genereer een 30 seconden durende natuurkunde educatieve film.

#### Prompt

```text
Met de Newton's cradle metalen ballen @Image 1 als hoofdonderwerp, liggend formaat 16:9, natuurwetenschappelijke demonstratie realistisch, puur laboratoriumwit + zij- en tegenlicht, genereer een 30 seconden durende natuurkunde educatieve film.
Shot 1: Close-up, Newton's cradle @Image 1 een balletje wordt opgetild en hangt stil, vaste camerapositie, (spannende tikkende muziek start) <vinger laat zacht los>.
Shot 2: Medium shot, balletje @Image 1 zwaait naar beneden en raakt de anderen, energieoverdracht op het moment van impact, camera zoomt langzaam in en vertraagt, <heldere metalen botsing>.
Shot 3: Close-up, het andere uiteinde balletje @Image 1 wordt weggeslingerd en stijgt op, camera volgt vlak de opwaartse beweging, (geluidseffect "ping") 【Behoud van impuls】.
Shot 4: Full shot, Newton's cradle @Image 1 ballen aan beide uiteinden zwaaien afwisselend heen en weer, camera draait langzaam om, <ritmische botsingen>.
Shot 5: Medium shot, balletje @Image 1 zwaaiamplitude wordt kleiner en komt tot rust, camera zoomt langzaam uit en bevriest, (muziek eindigt) 【Energie wordt overgedragen tijdens botsingen】.
Beperkingen: Het aantal metalen ballen en de frameconstructie moeten overeenkomen met Image 1, de zwaai moet de echte wet van behoud van impuls volgen, verbied zwevende of toenemende beweging die de mechanica schendt.
```

### No. 5: Historische scène reconstructie

- **Category:** `Kinderen / Educatie / Wetenschap`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Met het Colosseum @Image 1 als hoofdonderwerp, liggend formaat 16:9, epische historische reconstructie, gouden schemering stoflicht + verouderde filmkorrel, genereer een 30 seconden durende historische documentaire.

#### Prompt

```text
Met het Colosseum @Image 1 als hoofdonderwerp, liggend formaat 16:9, epische historische reconstructie, gouden schemering stoflicht + verouderde filmkorrel, genereer een 30 seconden durende historische documentaire.
Shot 1: Full shot, Colosseum @Image 1 baadt in het avondlicht en staat imposant, camera rijst langzaam op (luchtfoto), (episch menselijk gezang start) <oude wind ruist>.
Shot 2: Medium shot, Colosseum @Image 1 tribunes "groeien" geleidelijk van ruïne terug naar volle bezetting, camera zoomt langzaam in, <menigte rumoer zwelt aan>.
Shot 3: Close-up, Colosseum @Image 1 details van stenen booggravures, camera beweegt vlakzijwaarts, (tromgeroffel wordt sterker) 【80 n.Chr.·Voltooiing】.
Shot 4: Low-angle full shot, Colosseum @Image 1 stof wervelt op in het zand van de centrale arena, camera draait langzaam om, <hoorn schalt>.
Shot 5: Full shot, Colosseum @Image 1 gereconstrueerd beeld "vervaagt" en keert terug naar de huidige ruïne, camera zoomt langzaam uit en bevriest in vogelperspectief, (muziek eindigt somber) 【Duizend jaar later, nog steeds staand】.
Beperkingen: De architectonische structuur en locaties van beschadiging van het Colosseum moeten overeenkomen met Image 1, reconstructie en ruïnevorm moeten consistent corresponderen, verbied het verzinnen van moderne elementen die niet historisch accuraat zijn.
```

<a id="category-21"></a>

### Gaming / CG / Fantasy (5)

### No. 1: Draak Duikt Neer

- **Category:** `Gaming / CG / Fantasy`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Gebruik de zwarte draak en ridder uit Afbeelding 1 als hoofdonderwerp, breedbeeld 2.35:1, filmische CG, warme randverlichting + diepblauwe schaduwen, genereer een 30 seconden durende fantasyvluchtfilm.

#### Prompt

```text
Gebruik de zwarte draak en ridder uit Afbeelding 1 als hoofdonderwerp, breedbeeld 2.35:1, filmische CG, warme randverlichting + diepblauwe schaduwen, genereer een 30 seconden durende fantasyvluchtfilm.
Shot 1: Panoramisch, zwarte draak @Afbeelding 1 stijgt op uit een kloof met gespreide vleugels, de camera tilt langzaam op en volgt, (groots orkestmuziek begint).
Shot 2: Medium shot, ridder @Afbeelding 1 bukt zich laag, zwarte draak @Afbeelding 1 duikt scherp naar rechts, camera volgt stabiel (iets lager camerastandpunt), <fluitende wind>.
Shot 3: Close-up, zwarte draak @Afbeelding 1 vouwt één vleugel in en vliegt door de waternevel van een waterval, camera zoomt langzaam in.
Shot 4: Panoramisch, zwarte draak @Afbeelding 1 breekt uit de nevel en glijdt een open plek in het bos in, camera zoomt langzaam uit en eindigt op een vast shot, (muziek eindigt).
Beperkingen: Het uiterlijk van de zwarte draak en ridder moet gedurende de hele scène overeenkomen met Afbeelding 1, verboden dubbelgangers/clonen.
Algemene beperkingen: Houd het ondertitelingsvrij; Genereer geen Logo; Genereer geen watermerk; Gebruik per shot slechts één camerabeweging; Personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 2: Magie Vrijlaten

- **Category:** `Gaming / CG / Fantasy`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Gebruik de tovenares @Afbeelding 1 als hoofdonderwerp, breedbeeld 2.35:1, filmische fantasy CG, spookachtig blauw runenlicht + deeltjesgloed, genereer een 30 seconden durende spreukuitvoeringsfilm.

#### Prompt

```text
Gebruik de tovenares @Afbeelding 1 als hoofdonderwerp, breedbeeld 2.35:1, filmische fantasy CG, spookachtig blauw runenlicht + deeltjesgloed, genereer een 30 seconden durende spreukuitvoeringsfilm.
Shot 1: Close-up, tovenares @Afbeelding 1 opent haar ogen, runen lichten op in haar pupillen, vaste camera, (lage gregoriaanse gezang begint abrupt) {"In naam van de ether——"}.
Shot 2: Medium shot, tovenares @Afbeelding 1 heft haar hand, een draaiend magisch cirkel verzamelt zich in haar palm, camera draait langzaam om haar heen, <energiezoemen stijgt>.
Shot 3: Close-up, deeltjes verzamelen zich tot een lichtbol aan de vingertoppen van tovenares @Afbeelding 1, camera zoomt langzaam in, (muziek houdt even de adem in).
Shot 4: Panoramisch, tovenares @Afbeelding 1 duwt haar handen naar voren, een gigantische vorstuitbarsting explodeert naar voren, camera volgt de schokgolf stabiel, <luid gekraak>.
Shot 5: Medium shot, tovenares @Afbeelding 1 herstelt haar houding, hijgt, de restanten van het magisch cirkel vervagen, camera zoomt langzaam uit en eindigt op een vast shot, (nagezang van het gregoriaans eindigt).
Beperkingen: De kleding van de tovenares en de kleuren van de runen moeten gedurende de hele scène overeenkomen met Afbeelding 1, magische cirkels en deeltjes moeten altijd in het spookachtig blauwe kleurenschema blijven, verboden kleurverandering halverwege of vervorming van personages.
Algemene beperkingen: Houd het ondertitelingsvrij; Genereer geen Logo; Genereer geen watermerk; Gebruik per shot slechts één camerabeweging; Personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 3: Mecha Maakt Zijn Opwachting

- **Category:** `Gaming / CG / Fantasy`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Gebruik de gigantische mecha @Afbeelding 1 als hoofdonderwerp, breedbeeld 2.35:1, hardcore industriële CG, koud staalmetaal + hangarlampen en stoom, genereer een 30 seconden durende mecha-uitvalfilm.

#### Prompt

```text
Gebruik de gigantische mecha @Afbeelding 1 als hoofdonderwerp, breedbeeld 2.35:1, hardcore industriële CG, koud staalmetaal + hangarlampen en stoom, genereer een 30 seconden durende mecha-uitvalfilm.
Shot 1: Close-up, de hoofdoptiek/ogen van mecha @Afbeelding 1 lichten plotseling op met rood licht, vaste camera, (industriële lage bastonen beginnen te rommelen) <systeemstart zoemgeluid>.
Shot 2: Panoramisch laag standpunt, mecha @Afbeelding 1 komt langzaam overeind en gaat staan in de hangar, camera tilt langzaam op vanuit een laag standpunt, <hydraulisch sissen>.
Shot 3: Medium shot, mecha @Afbeelding 1 zet een stap, veroorzaakt een schok, stoom spuit op, camera volgt vanuit een laag standpunt, (drumbeat valt) <zware metalen voetstap>.
Shot 4: Close-up, de raketcompartimenten op de schouders van mecha @Afbeelding 1 openen zich en richten zich, camera zoomt langzaam in, (geluidseffect "target locked" piep) 【Wapens gereed】.
Shot 5: Panoramisch, mecha @Afbeelding 1 stormt de hangar uit en springt het slagveld op, camera volgt stabiel en zoomt dan uit naar een vast shot, (muziek barst los en eindigt) <straalmotor gedreun>.
Beperkingen: De lichaamsstructuur en afwerking van de mecha moeten gedurende de hele scène overeenkomen met Afbeelding 1, de beweging van mechanische gewrichten moet het gewicht en de hydraulische logica volgen, verboden clipping van onderdelen of gewichtloosheid.
Algemene beperkingen: Houd het ondertitelingsvrij; Genereer geen Logo; Genereer geen watermerk; Gebruik per shot slechts één camerabeweging; Personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 4: Open Wereld Ver Gezicht

- **Category:** `Gaming / CG / Fantasy`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Gebruik het panorama van het fantasycontinent @Afbeelding 1 als hoofdonderwerp, breedbeeld 2.35:1, open-wereld game CG, volumetrische wolken ochtendmist + extreem lange afstandsdepth of field, genereer een 30 seconden durende wereldbeeldpresentatiefilm.

#### Prompt

```text
Gebruik het panorama van het fantasycontinent @Afbeelding 1 als hoofdonderwerp, breedbeeld 2.35:1, open-wereld game CG, volumetrische wolken ochtendmist + extreem lange afstandsdepth of field, genereer een 30 seconden durende wereldbeeldpresentatiefilm.
Shot 1: Panoramisch, continent @Afbeelding 1, ochtendmist stroomt over valleien en verre zwevende eilanden, camera tilt langzaam op voor een luchtfoto, (weidse strijkersmuziek begint) <ochtendwind en vogelgezang>.
Shot 2: Medium shot, continent @Afbeelding 1, een waterval stort van een enorme klif in een zee van wolken, camera beweegt stabiel horizontaal, <donderend watergeluid>.
Shot 3: Panoramisch, continent @Afbeelding 1, een kudde gigantische beesten scheert over de grasvlakte richting een verre stad, camera volgt langzaam, (strijkersmuziek bouwt laag op laag op).
Shot 4: Close-up, continent @Afbeelding 1, een oude ruïnesteen bedekt met runen, camera zoomt langzaam in, <mysterieus laag gebrom>.
Shot 5: Panoramisch, continent @Afbeelding 1, camera tilt op en onthult het volledige uitzicht van het hele continent en de dubbele zonnenhemel, camera tilt langzaam op en zoomt uit naar een vast shot, (muziek eindigt groots) 【De wereld wacht op jou om ontdekt te worden】.
Beperkingen: Het landschap en de lay-out van de zwevende eilanden moeten gedurende de hele scène overeenkomen met Afbeelding 1, behoud de gelaagdheid van volumetrische mist in extreem lange afstandsdepth of field, verboden verkeerde aansluiting van terrein of vervormde proporties.
Algemene beperkingen: Houd het ondertitelingsvrij; Genereer geen Logo; Genereer geen watermerk; Gebruik per shot slechts één camerabeweging; Personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 5: Wireframe Render Demonstratie

- **Category:** `Gaming / CG / Fantasy`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Gebruik de wireframe-scène @Afbeelding 1 als hoofdonderwerp, materialen ontleend aan referentie Afbeelding 2, liggend formaat 16:9, real-time render Breakdown-demonstratie, startend met grijswit niet-glanzend basismodel, genereer een 30 seconden durende film van wireframe naar eindrender.

#### Prompt

```text
Gebruik de wireframe-scène @Afbeelding 1 als hoofdonderwerp, materialen ontleend aan referentie Afbeelding 2, liggend formaat 16:9, real-time render Breakdown-demonstratie, startend met grijswit niet-glanzend basismodel, genereer een 30 seconden durende film van wireframe naar eindrender.
Shot 1: Panoramisch, wireframe @Afbeelding 1, grijswitte materiaalloze scène draait langzaam om de volumes te tonen, camera draait langzaam omheen, (techno elektronische muziek begint) 【Blockout·Wireframe】.
Shot 2: Medium shot, wireframe @Afbeelding 1, materialen @Afbeelding 2 worden oppervlak voor oppervlak aangebracht, bedekken steen en houttexturen, camera beweegt stabiel horizontaal, <materiaal laden tikkend geluid>.
Shot 3: Close-up, scène @Afbeelding 1, normaal- en ruwheidsdetails verschijnen voor reliëftextuur, camera zoomt langzaam in, 【PBR-materialen·Kleuren】.
Shot 4: Panoramisch, scène @Afbeelding 1, lampen gaan één voor één aan, werpen schaduwen en reflecties, camera tilt langzaam op, (muziek bouwt laag op laag op) 【Lighting·Verlichting】.
Shot 5: Panoramisch, scène @Afbeelding 1, kleurcorrectie en volumetrisch licht worden toegevoegd om het eindframe te vormen, camera zoomt langzaam uit naar een vast shot, (muziek eindigt) 【Final Render】.
Beperkingen: De volumes en structuur van de scène moeten gedurende de hele scène overeenkomen met Afbeelding 1, materiaaltexturen worden geleidelijk opgebouwd uit Afbeelding 2, van wireframe naar eindrender verandert alleen de shading, niet de geometrische lay-out, verboden modelvervorming of fouten.
Algemene beperkingen: Houd het ondertitelingsvrij; Genereer geen Logo; Genereer geen watermerk; Gebruik per shot slechts één camerabeweging; Personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

<a id="category-22"></a>

### Animatie / Cartoons (4)

### No. 1: Ghibli Eten Special

- **Category:** `Animatie / Cartoons`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Gebruik een paar handen en een nachtelijke keuken uit Afbeelding 1 als hoofdonderwerp (handen en keuken zoals in Afbeelding 1), staand formaat 9:16, Ghibli handgetekende stijl, warmgele nachtkeukensfeer, genereer een 30 seconden durende helende nachtelijke eetfilm.

#### Prompt

```text
Gebruik een paar handen en een nachtelijke keuken uit Afbeelding 1 als hoofdonderwerp (handen en keuken zoals in Afbeelding 1), staand formaat 9:16, Ghibli handgetekende stijl, warmgele nachtkeukensfeer, genereer een 30 seconden durende helende nachtelijke eetfilm.
Shot 1: Extreme close-up, een waterdruppel rolt van de schil van een tomaat en reflecteert warm licht, vaste camera met licht naar beneden gericht, <zacht geluid van vallende druppel>, (helende akoestische gitaar begint).
Shot 2: Medium shot, een hand snijdt een tomaat met een mes, rood sap sijpelt eruit, camera beweegt langzaam horizontaal, <geluid van mes dat door het zachte/knapperige vruchtvlees snijdt>.
Shot 3: Close-up, tomatenstukjes glijden in een hete oliepan, witte rook stijgt op, camera zoomt langzaam in, <geluid van ingrediënten die in de pan gaan>.
Shot 4: Extreme close-up, hand strooit basilicumblaadjes en roert, aroma stijgt op, camera draait langzaam omheen, <geritsel van spatel die roert>.
Shot 5: Medium shot, hete soep wordt in een aardewerken kom geschept, handen brengen het naar het midden van het beeld, camera zoomt langzaam uit, <borrelend soepgeluid>, (akoestische gitaar eindigt).
Beperkingen: Vergrendel op Ghibli handgetekende stijl, verboden verschuiving naar realisme; Gedurende de hele scène slechts één paar handen, geen gezichten of extra handen; Nachtelijke keukeninrichting zoals in Afbeelding 1, vast.
Algemene beperkingen: Houd het ondertitelingsvrij; Genereer geen Logo; Genereer geen watermerk; Gebruik per shot slechts één camerabeweging; Personen moeten natuurlijke, subtiele bewegingen hebben, geen standbeelden.
```

### No. 2: Q版角色互动

- **Category:** `Animatie / Cartoons`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

参考图片1中的两只圆头大眼Q版角色为主体（造型与配色以图片1为准），竖屏9:16，糖果色卡通短片风、高饱和柔光调，生成30秒萌系互动片。

#### Prompt

```text
参考图片1中的两只圆头大眼Q版角色为主体（造型与配色以图片1为准），竖屏9:16，糖果色卡通短片风、高饱和柔光调，生成30秒萌系互动片。
Shot 1：极近特写，一只Q版角色瞪大眼睛脸颊鼓起憋笑，固定机位，<卡通"啵"弹跳音效>，（俏皮马林巴起）。
Shot 2：中景，另一只角色蹦跳着凑近递上一颗爱心糖果，镜头缓慢横移，<脚步弹跳"叮叮"声>。
Shot 3：全景，两只角色手拉手原地转圈甩出星星拖尾，镜头缓慢环绕，{（角色）"一起转呀！"}。
Shot 4：特写，一只角色突然被绊倒眼里蓄满泪花，镜头缓慢推近，<夸张"哇"哭腔音效>。
Shot 5：中景，另一只角色扑上去拥抱两颗心跳出画面，镜头缓慢拉远，【友谊满格】，（马林巴上扬收束）。
约束：锁定Q版糖果色卡通风禁止漂移写实；两角色造型与配色严格以图片1为准；夸张表情与形变遵循卡通物理。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 3: 3D皮克斯风

- **Category:** `Animatie / Cartoons`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

参考图片1中的小机器人角色为主体（造型与材质以图片1为准），横屏16:9，皮克斯3D动画风、清晨暖阳质感调，生成30秒治愈探索短片。

#### Prompt

```text
参考图片1中的小机器人角色为主体（造型与材质以图片1为准），横屏16:9，皮克斯3D动画风、清晨暖阳质感调，生成30秒治愈探索短片。
Shot 1：极近特写，小机器人的圆眼镜头缓缓亮起对焦一朵蒲公英，固定机位，<机械对焦"嘀"声>，（管弦乐轻柔起）。
Shot 2：中景，小机器人歪头好奇地伸出机械臂轻触花瓣，镜头缓慢推近，<伺服马达细微转动声>。
Shot 3：全景，一阵风吹散蒲公英种子小机器人追着奔跑，镜头跟拍，<绒毛飘散的空气声>。
Shot 4：仰拍，种子漫天飞舞小机器人张开双臂仰望，镜头缓慢升降，（弦乐渐强）。
Shot 5：远景，小机器人独自站在山丘顶朝阳升起拉长影子，镜头缓慢拉远，（管弦乐高潮收束）。
约束：锁定皮克斯3D风禁止漂移写实与吉卜力手绘；机器人造型材质以图片1为准；次表面散射暖光贯穿全片。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 4: 水彩风景动画

- **Category:** `Animatie / Cartoons`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

参考图片1中的江南水乡小镇为主体（构图与色调以图片1为准），横屏16:9，流动水彩手绘动画风、雨后青灰淡彩调，生成30秒诗意四季流转片。

#### Prompt

```text
参考图片1中的江南水乡小镇为主体（构图与色调以图片1为准），横屏16:9，流动水彩手绘动画风、雨后青灰淡彩调，生成30秒诗意四季流转片。
Shot 1：极近特写，一滴雨落入水面晕开涟漪墨色扩散，固定微俯机位，<雨滴入水的清响>，（古筝泛音起）。
Shot 2：全景，青瓦白墙倒映水中水彩笔触随波轻荡，镜头缓慢横移，<细雨淅沥声>。
Shot 3：远景，一叶乌篷船划过拱桥荡开水纹，镜头缓慢跟拍，<木桨拨水声>。
Shot 4：中景，桥畔柳枝抽芽花瓣纷落色调转为春粉，镜头缓慢推近，<微风拂叶声>。
Shot 5：远景，暮色四合灯笼次第亮起倒映满河，镜头缓慢升降，（古筝悠远收束）。
约束：锁定流动水彩手绘风禁止漂移写实与3D；水乡构图以图片1为准；笔触晕染感与纸纹肌理全程保留。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

<a id="category-23"></a>

### Sport / Fitness (4)

### No. 1: 健身房力量

- **Category:** `Sport / Fitness`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

参考图片1中的硬拉运动员为主体（人物与器械以图片1为准），竖屏9:16，硬核健身广告风、冷调高对比钢铁质感，生成30秒力量爆发片。

#### Prompt

```text
参考图片1中的硬拉运动员为主体（人物与器械以图片1为准），竖屏9:16，硬核健身广告风、冷调高对比钢铁质感，生成30秒力量爆发片。
Shot 1：极近特写，掌心镁粉重重拍向杠铃粉末四溅，固定机位，<镁粉拍击的闷响>，（低频鼓点脉冲起）。
Shot 2：特写，双手死死缠握杠铃青筋暴起，镜头缓慢推近，<铁杠吱嘎受力声>。
Shot 3：全景，运动员发力起杠杠铃片微微颤动，镜头缓慢升降跟随起身，<深沉发力低吼>。
Shot 4：仰拍，杠铃举至顶点肌肉线条被冷光勾勒，镜头缓慢环绕，（鼓点砸至最重）。
Shot 5：特写，杠铃砸回地面弹起震动汗珠飞溅，镜头缓慢拉远，<铁片落地巨响>，（鼓点戛然而止）。
约束：人物与器械以图片1为准；冷调硬光高对比贯穿；杠铃片颤动与汗珠须符合真实重量物理。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 2: 瑜伽舒展

- **Category:** `Sport / Fitness`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

参考图片1中的瑜伽练习者与晨光教室为主体（人物与空间以图片1为准），竖屏9:16，静谧禅意生活方式风、晨雾柔光低饱和调，生成30秒身心舒展片。

#### Prompt

```text
参考图片1中的瑜伽练习者与晨光教室为主体（人物与空间以图片1为准），竖屏9:16，静谧禅意生活方式风、晨雾柔光低饱和调，生成30秒身心舒展片。
Shot 1：极近特写，练习者闭眼深呼吸鼻息带起细尘在光束中浮动，固定机位，<一次悠长呼吸声>，（颂钵长音起）。
Shot 2：全景，身体缓缓折叠进入前屈晨光洒过背脊，镜头缓慢升降，<衣物摩擦的细响>。
Shot 3：中景，双臂舒展流转进入战士式呼吸平稳，镜头缓慢环绕，（钵音与鸟鸣交织）。
Shot 4：特写，指尖轻点脚踝肌肉线条舒展拉伸，镜头缓慢平移，<肌腱拉伸的轻微声>。
Shot 5：全景，盘坐合十垂首晨雾漫过整个教室，镜头缓慢拉远，（颂钵余音收束）。
约束：人物与晨光教室以图片1为准；柔光低饱和禅意基调贯穿；动作连贯平缓禁止任何急促切换。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 3: 篮球扣篮

- **Category:** `Sport / Fitness`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

参考图片1中的街球运动员为主体（人物与球场以图片1为准），横屏16:9，热血街头运动广告风、黄昏暖橙硬光调，生成30秒扣篮高燃片。

#### Prompt

```text
参考图片1中的街球运动员为主体（人物与球场以图片1为准），横屏16:9，热血街头运动广告风、黄昏暖橙硬光调，生成30秒扣篮高燃片。
Shot 1：极近特写，篮球在指尖飞速旋转纹路清晰，固定机位，<皮球旋转的摩擦声>，（电子鼓点重拍起）。
Shot 2：全景，运动员运球突破急停变向鞋底摩擦地面，镜头跟拍，<球鞋急刹尖叫声>。
Shot 3：中景，双脚蹬地腾空身体拉满向篮筐飞跃，镜头缓慢升降跟随起跳，<起跳蹬地的爆响>。
Shot 4：仰拍，人在空中滞留手举球即将砸下逆光剪影，镜头缓慢环绕，（鼓点抽空静默一拍）。
Shot 5：特写，篮球暴力灌入篮网篮筐剧烈震颤，镜头缓慢推近，<篮筐哐当巨响>，（鼓点炸裂收束）。
约束：人物与街头球场以图片1为准；黄昏暖橙硬光逆光贯穿；腾空滞空与篮网抖动须符合真实运动物理。
通用约束：保持无字幕；不要生成 Logo；不要生成水印；每个镜头只用一种运镜；人物需自然微动非石像。
```

### No. 4: Rennen in Silhouette

- **Category:** `Sport / Fitness`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de ochtendloper en de kustweg in Afbeelding 1 als hoofdonderwerp (de silhouetten van de persoon en de omgeving moeten overeenkomen met Afbeelding 1), liggend formaat 16:9, inspirerende sportmerkstijl, zonsopgang tegenlicht gouden oranje kleurstelling, genereer een 30 seconden durende film over volhouden tijdens het ochtendrennen.

#### Prompt

```text
Verwijs naar de ochtendloper en de kustweg in Afbeelding 1 als hoofdonderwerp (de silhouetten van de persoon en de omgeving moeten overeenkomen met Afbeelding 1), liggend formaat 16:9, inspirerende sportmerkstijl, zonsopgang tegenlicht gouden oranje kleurstelling, genereer een 30 seconden durende film over volhouden tijdens het ochtendrennen.
Shot 1: Extreme close-up, hardloopschoen trapt op nat asfalt en spat kleine waterdruppels op, vaste camera met licht naar beneden gerichte hoek, <geluid van schoenzool die de grond raakt>, (inspirerende strijkersmuziek begint zachtjes).
Shot 2: Medium shot, renner tegenlicht silhouet loopt in gelijkmatige pas, zweet druppelt langs de kin, camera volgt, <rustig en krachtig ademritme>.
Shot 3: Wide shot, kustlijn strekt zich uit, de zon komt op uit de zee en kleurt de hemel rood, camera beweegt langzaam op en neer, (strijkersmuziek voegt drumbeat toe en bouwt op).
Shot 4: Close-up, zwaaiende arm, horloge cijfers veranderen, hartslag stijgt, camera beweegt langzaam zijwaarts, <horloge tikkend signaalg geluid>.
Shot 5: Long shot, renner silhouet rent de heuveltop op en spreidt zijn armen om de ochtendzon te omarmen, camera trekt langzaam terug, (strijkers en drumbeat bereiken een hoogtepunt en eindigen).
Beperkingen: Personen silhouetten en kustweg moeten overeenkomen met Afbeelding 1; zonsopgang tegenlicht gouden oranje kleurstelling door de hele film; loop houding en pasfrequentie moeten gelijkmatig en vloeiend zijn, geen schokkerige bewegingen.
```

<a id="category-24"></a>

### Muziek / Dans / Muziekvideo's (4)

### No. 1: Dans Volgshot

- **Category:** `Muziek / Dans / Muziekvideo's`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de moderne danser en de industriële ruimte in Afbeelding 1 als hoofdonderwerp (de persoon en de scène moeten overeenkomen met Afbeelding 1), staand formaat 9:16, stedelijke MV volgstijl, koud blauw neon licht schaduwtoon, genereer een 30 seconden durende ritmische dansfilm.

#### Prompt

```text
Verwijs naar de moderne danser en de industriële ruimte in Afbeelding 1 als hoofdonderwerp (de persoon en de scène moeten overeenkomen met Afbeelding 1), staand formaat 9:16, stedelijke MV volgstijl, koud blauw neon licht schaduwtoon, genereer een 30 seconden durende ritmische dansfilm.
Shot 1: Extreme close-up, vingertoppen van de danser schieten open op de eerste beat, vaste camera, <knappend vingers knipgeluid>, (ritmische elektronische beat begint).
Shot 2: Wide shot, lichaam maakt grote zwaaiende bewegingen, danspassen spreiden zich uit en zwaaien met de beat mee, camera volgt, <geluid van stof die door de lucht zwiept>.
Shot 3: Medium shot, draaiende sprong, rok trekt een boog met neon sleepspoor, camera draait langzaam rond, (beat wordt dichter en bas wordt toegevoegd).
Shot 4: Close-up, tenen tikken snel op de grond, reflecterend licht wiebelt, camera beweegt langzaam zijwaarts, <geluid van opeenvolgende hak tikken>.
Shot 5: Wide shot, bevroren pose, neonlicht flitst en verlicht de volledige lichaamsomtrek, camera trekt langzaam terug, (beat eindigt op een downbeat).
Beperkingen: Persoon en industriële ruimte moeten overeenkomen met Afbeelding 1; koud blauw neon licht schaduwtoon door de hele film; camerabewegingsritme moet strikt synchroon lopen met de muziek downbeats.
```

### No. 2: Piano Solo

- **Category:** `Muziek / Dans / Muziekvideo's`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de pianist en het oude theaterpodium in Afbeelding 1 als hoofdonderwerp (de persoon en de piano moeten overeenkomen met Afbeelding 1), liggend formaat 16:9, klassiek concertfilm stijl, warm gouden spotlicht donker veldtoon, genereer een 30 seconden durende emotionele solofilm.

#### Prompt

```text
Verwijs naar de pianist en het oude theaterpodium in Afbeelding 1 als hoofdonderwerp (de persoon en de piano moeten overeenkomen met Afbeelding 1), liggend formaat 16:9, klassiek concertfilm stijl, warm gouden spotlicht donker veldtoon, genereer een 30 seconden durende emotionele solofilm.
Shot 1: Extreme close-up, vingertoppen zweven boven de toetsen en dalen zachtjes om de eerste noot te spelen, vaste camera, (heldere piano enkele noot klinkt).
Shot 2: Close-up, handen bewegen vloeiend over de zwart-witte toetsen, hamers gaan op en neer, camera beweegt langzaam zijwaarts, <heldere geluiden van toetsen die de snaren raken>.
Shot 3: Medium shot, pianist gesloten ogen, volledig betrokken, lichaam wiegt lichtjes met de melodie mee, camera beweegt langzaam naar voren, (melodie komt geleidelijk in een hoogtepunt).
Shot 4: Wide shot, piano geïsoleerd onder spotlicht op leeg podium, stofdeeltjes zweven in het licht, camera beweegt langzaam op en neer, (akkoorden stapelen zich op).
Shot 5: Extreme close-up, laatste toets wordt ingedrukt, vinger blijft rusten, nagalm trilt, camera trekt langzaam terug, <nagalm van pianosnaren vervaagt geleidelijk>, (melodie eindigt rustig).
Beperkingen: Persoon en piano moeten overeenkomen met Afbeelding 1; warm gouden spotlicht donker veldtoon door de hele film; handbewegingen op de toetsen moeten strikt overeenkomen met het begin en einde van de noten.
```

### No. 3: Streetdance Battle

- **Category:** `Muziek / Dans / Muziekvideo's`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de twee streetdance dansers en de ondergrondse locatie in Afbeelding 1 als hoofdonderwerp (de personen en de locatie moeten overeenkomen met Afbeelding 1), staand formaat 9:16, ondergrondse streetdance documentaire stijl, hoog contrast warm-koud gemengd lichttoon, genereer een 30 seconden durende battle film.

#### Prompt

```text
Verwijs naar de twee streetdance dansers en de ondergrondse locatie in Afbeelding 1 als hoofdonderwerp (de personen en de locatie moeten overeenkomen met Afbeelding 1), staand formaat 9:16, ondergrondse streetdance documentaire stijl, hoog contrast warm-koud gemengd lichttoon, genereer een 30 seconden durende battle film.
Shot 1: Extreme close-up, een danser trekt zijn pet laag over zijn ogen en kijkt uitdagend recht in de camera, vaste camera, <geluid van onrust en gejoel van de menigte>, (hiphop drumbeat valt in en begint).
Shot 2: Wide shot, eerste danser stormt de vloer op en barst los met floor moves, de kring van toeschouwers maakt ruimte, camera volgt, <geluid van handpalmen die de grond raken>.
Shot 3: Medium shot, Thomas flare windmill beweging, benen draaien in cirkels, camera draait langzaam rond, (gejuich van de menigte mengt met de beat).
Shot 4: Close-up, tegenstander neemt over, heup pop freeze, pet zwiept zweet weg, camera beweegt langzaam naar voren, <snelle ademhaling en stampende voetstappen>.
Shot 5: Wide shot, beide dansers bevriezen tegelijkertijd in een confrontatie, toeschouwers barsten los in koor, camera trekt langzaam terug, {(toeschouwers) "Oh——!"}, (drumbeat downbeat eindigt).
Beperkingen: Twee dansers en ondergrondse locatie moeten overeenkomen met Afbeelding 1; warm-koud gemengd licht hoog contrast door de hele film; floor moves en draaiingen moeten voldoen aan echte mechanica, vloeiend zonder haperingen.
```

### No. 4: Concert Sfeer

- **Category:** `Muziek / Dans / Muziekvideo's`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de leadzanger en het stadionpodium in Afbeelding 1 als hoofdonderwerp (de persoon en het podium moeten overeenkomen met Afbeelding 1), liggend formaat 16:9, groot concert live-opname stijl, gekleurde spotlights en glowstick zee toon, genereer een 30 seconden durende high-energy film met duizenden zingende mensen.

#### Prompt

```text
Verwijs naar de leadzanger en het stadionpodium in Afbeelding 1 als hoofdonderwerp (de persoon en het podium moeten overeenkomen met Afbeelding 1), liggend formaat 16:9, groot concert live-opname stijl, gekleurde spotlights en glowstick zee toon, genereer een 30 seconden durende high-energy film met duizenden zingende mensen.
Shot 1: Extreme close-up, lippen van leadzanger dicht bij de microfoon, opent zijn ogen en zingt de eerste regel, vaste camera, {(leadzanger) "Deze nacht is van jullie!"}, (rock intro brult op en begint).
Shot 2: Wide shot, spotlight veegt over het podium, leadzanger spreidt zijn armen en steekt het publiek aan, camera beweegt langzaam op en neer, <gejuich en geschreeuw van het publiek als een zee>.
Shot 3: Long shot, tribune glowsticks vormen een golvende zee van licht die meedeint op de beat, camera beweegt langzaam zijwaarts, (refrein drumbeat speelt volledig).
Shot 4: Medium shot, leadzanger loopt naar de rand van het podium en reikt uit, publiek strekt hun armen uit om aan te raken, camera volgt, <duizenden mensen zingen in koor>.
Shot 5: Wide shot, vuurwerk en lasers barsten tegelijkertijd los, leadzanger houdt microfoon hoog in silhouet, camera trekt langzaam terug, 【hele stadion zingt in koor】, (refrein hoogtepunt eindigt luid).
Beperkingen: Persoon en stadionpodium moeten overeenkomen met Afbeelding 1; gekleurde spotlights en glowstick zee toon door de hele film; lichtflitsen en vuurwerk moeten synchroon zijn met de drumbeat downbeats.
```

<a id="category-25"></a>

### Feestdagen / Seizoenen (5)

### No. 1: Chinees Nieuwjaar Familiehereniging

- **Category:** `Feestdagen / Seizoenen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de familieleden in Afbeelding 1, Afbeelding 2 en Afbeelding 3 als hoofdonderwerp (elk moet overeenkomen met de respectievelijke afbeelding), liggend formaat 16:9, feestelijk en warm realistisch, warm rood lantaarn toon, genereer een 30 seconden durende Chinees Nieuwjaar film.

#### Prompt

```text
Verwijs naar de familieleden in Afbeelding 1, Afbeelding 2 en Afbeelding 3 als hoofdonderwerp (elk moet overeenkomen met de respectievelijke afbeelding), liggend formaat 16:9, feestelijk en warm realistisch, warm rood lantaarn toon, genereer een 30 seconden durende Chinees Nieuwjaar film.
Shot 1: Langzaam naar voren bewegen, vuurwerk ontploft buiten het raam en verlicht de vensterbank met het gelukskarakter '福', binnen wapperen warmrode lantaarns, (verre Chinese klokken en feestelijke muziek beginnen zachtjes).
Shot 2: Ronddraaiend, familie zit rond de nieuwjaarsmaaltijd tafel en heft glazen, opstijgende stoom en warm licht, <geluid van borden en stokjes die zachtjes tegen elkaar tikken>.
Shot 3: Vaste camera, oudere persoon @Afbeelding 1 serveert kleinkind eten met een liefdevolle glimlach, close-up van tafelgerechten met wazige achtergrond.
Shot 4: Gelijkmatig volgshot, kind @Afbeelding 3 springt opgewonden op de binnenplaats met een rode envelop, een rij rode lantaarns strekt zich uit, <helder lachend geluid>.
Shot 5: Opname van onderaf, hele familie @Afbeelding 2 kijkt omhoog naar de lucht vol vuurwerk in verwondering, licht en schaduw bedekt hun lachende gezichten.
Shot 6: Langzaam terugtrekken, hele familie houdt glazen voor de deur vast, bevroren onder grote rode lantaarns, tekst verschijnt 【Gelukkig Nieuwjaar, Familie Hereniging】, (feestelijke muziek eindigt).
Beperkingen: Elke persoon moet overeenkomen met de respectievelijke afbeelding, verboden identieke tweelingclones, één persoon per shot in hetzelfde frame; rode lantaarn warme toon door de hele film.
```

### No. 2: Valentijnsdag Romantiek

- **Category:** `Feestdagen / Seizoenen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de vrouw in Afbeelding 1 en de man in Afbeelding 2 als hoofdpersonen (elk volgens hun respectieve afbeelding), staand formaat 9:16, Franse film warme romantische realistische stijl, genereer een 30 seconden Valentijnsdag korte film.

#### Prompt

```text
Verwijs naar de vrouw in Afbeelding 1 en de man in Afbeelding 2 als hoofdpersonen (elk volgens hun respectieve afbeelding), staand formaat 9:16, Franse film warme romantische realistische stijl, genereer een 30 seconden Valentijnsdag korte film.
Shot 1: Langzaam inzoomen, vrouw @Image 1 op een straathoek in de schemering kijkt over haar schouder met een roos en glimlacht zachtjes, warm gouden tegenlicht tekent haar haren af, (zachte piano enkele toon begint).
Shot 2: Volgshot, man @Image 2 loopt snel door een menigte, neon lichtvlekken stromen achter hem, <hartslag wordt sterker>.
Shot 3: Omcirkelend shot, het paar omhelst elkaar en draait rond op een plein met vallende bloemblaadjes, warm licht draait tot een gloed, (strijkers bouwen laag voor laag op).
Shot 4: Vaste camerapositie, close-up van handen die elkaar vasthouden en ringen omdoen, ringflits.
Shot 5: Jib shot, camera stijgt op vanaf het paar en zweeft over boomtoppen vol lichtslingers, sterrenhemel, (muziek bereikt hoogtepunt).
Shot 6: Langzaam uitzoomen, silhouet van het paar dat dicht tegen elkaar aan zit op een bank, tekst verschijnt 【Elke dag van jou houden】, (piano uitstervend).
Constraints: Vrouw volgens Afbeelding 1, man volgens Afbeelding 2, hun uiterlijk moet duidelijk onderscheiden zijn, verbied tweeling-effect; warme gouden film look doorlopend.
Algemene constraints: Houd onderschrift-vrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijk licht bewegen, niet als standbeelden.
```

### No. 3: Midherfst Maan Kijken

- **Category:** `Feestdagen / Seizoenen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar het personage in Afbeelding 1 als hoofdpersoon (volgens Afbeelding 1), liggend formaat 16:9, serene oosterse inkt-wash schilderachtige en realistische fusie, blauwachtige maanlicht toon, genereer een 30 seconden Midherfst korte film.

#### Prompt

```text
Verwijs naar het personage in Afbeelding 1 als hoofdpersoon (volgens Afbeelding 1), liggend formaat 16:9, serene oosterse inkt-wash schilderachtige en realistische fusie, blauwachtige maanlicht toon, genereer een 30 seconden Midherfst korte film.
Shot 1: Opwaartse hoek, een volle maan komt langzaam op uit een zee van wolken, helder licht stroomt naar beneden, (oude guqin boventoon begint rustig).
Shot 2: Langzaam inzoomen, personage @Image 1 staat alleen bij een stenen tafel in de tuin en kijkt omhoog naar de maan, schaduwen van een osmanthus-boom dansen, <geluid van nachtwind door bladeren>.
Shot 3: Vaste camerapositie, close-up van een maancake die openbreekt en gouden vloeibare vulling laat zien, theedamp stijgt op.
Shot 4: Vloeiende zijwaartse beweging, lantaarns in de tuin en maanschaduwen weerspiegelen in kabbelend vijverwater, <kabbelend watergeluid>.
Shot 5: Omcirkelend shot, personage @Image 1 heft een glas naar de maan en drinkt, kleding fladdert licht, maanlicht stroomt.
Shot 6: Langzaam uitzoomen, silhouet van persoon en enorme volle maan samen in beeld, tekst verschijnt 【Moge wij lang leven】, (guqin uitstervend).
Constraints: Personage volgens Afbeelding 1; blauwachtige maanlicht koele toon consistent, vermijd warme kleuren die de maansfeer verstoren.
Algemene constraints: Houd onderschrift-vrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijk licht bewegen, niet als standbeelden.
```

### No. 4: Kerst Sfeer

- **Category:** `Feestdagen / Seizoenen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Verwijs naar de twee familieleden in Afbeelding 1 en Afbeelding 2 als hoofdpersonen (elk volgens hun respectieve afbeelding), staand formaat 9:16, Noordse warme sprookjesachtige realistische stijl, openhaard oranje licht toon, genereer een 30 seconden Kerst korte film.

#### Prompt

```text
Verwijs naar de twee familieleden in Afbeelding 1 en Afbeelding 2 als hoofdpersonen (elk volgens hun respectieve afbeelding), staand formaat 9:16, Noordse warme sprookjesachtige realistische stijl, openhaard oranje licht toon, genereer een 30 seconden Kerst korte film.
Shot 1: Langzaam inzoomen, sneeuw valt buiten het raam op een kerstboom versierd met lichtjes, binnen dansen openhaardvlammen, (heldere bellen en kerstmuziek begint).
Shot 2: Vaste camerapositie, persoon @Image 1 hangt de laatste sterdecoratie op en glimlacht tevreden, lichtjes reflecteren op het gezicht.
Shot 3: Volgshot, persoon @Image 2 rent met een cadeaudoos naar de boom en kijkt verrast rond, warm oranje gloed stroomt, <geluid van inpakpapier ritselen>.
Shot 4: Neerwaartse hoek, tafel vol met peperkoek, warme chocolademelk en kaarsen, damp en suikerglans fonkelen.
Shot 5: Omcirkelend shot, de twee @Image 1 @Image 2 leunen tegen elkaar bij de openhaard en klinken met glazen, buiten dwarrelt sneeuw.
Shot 6: Langzaam uitzoomen, warm licht van binnen schijnt door het besneeuwde raamkozijn, tekst verschijnt 【Merry Christmas】, (kerstmuziek uitstervend).
Constraints: Beide personen volgens hun respectieve afbeelding, uiterlijk moet onderscheiden zijn, verbied tweeling-effect, één persoon per beeld in samenstelling; openhaard warm oranje toon doorlopend.
Algemene constraints: Houd onderschrift-vrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijk licht bewegen, niet als standbeelden.
```

### No. 5: Lente Begin Seizoen

- **Category:** `Feestdagen / Seizoenen`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Geen referentiepersonen, liggend formaat 16:9, vierentwintig seizoenen oosterse esthetiek, frisse waterverf schilderachtige realistische stijl, lichtgroen nieuwe scheuten toon, genereer een 30 seconden Lente Begin seizoen korte film.

#### Prompt

```text
Geen referentiepersonen, liggend formaat 16:9, vierentwintig seizoenen oosterse esthetiek, frisse waterverf schilderachtige realistische stijl, lichtgroen nieuwe scheuten toon, genereer een 30 seconden Lente Begin seizoen korte film.
Shot 1: Langzaam inzoomen, op een dorre tak bedekt met resterende sneeuw duwt een jonge knop door een ijskristal, ochtendlicht schijnt erdoorheen, (heldere bamboefluit enkele toon begint).
Shot 2: Macro vaste camerapositie, ijspegels smelten en druppels vallen op vochtige aarde, <heldere druppelgeluiden>.
Shot 3: Vloeiende zijwaartse beweging, op het veld trekt de sneeuw zich terug en spreidt zich lichtgroen uit, eerste wilde bloem steekt zijn kop op, <geluid van lente wind>.
Shot 4: Opwaartse hoek, zwaluwen vliegen over de azuurblauwe lucht en cirkelen, wilgentakken trekken nieuw groen aan en zwaaien in de wind, (fluitgeluid wordt geleidelijk luider).
Shot 5: Jib shot, camera stijgt op vanaf de jonge knop en kijkt uit over het ontwakende land, beek ontdooit en stroomt, (traditionele strijkers bouwen laag voor laag op).
Shot 6: Langzaam uitzoomen, een boom met nieuw groen staat in het veld, tekst verschijnt 【Lente Begin Alles begint te leven】, (traditionele strijkers uitstervend).
Constraints: Kleur verloopt van koud grijs resterende sneeuw naar warm lichtgroen, toont de temporele verandering van winter naar lente; geen personen in beeld.
Algemene constraints: Houd onderschrift-vrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijk licht bewegen, niet als standbeelden.
```

<a id="category-26"></a>

### Natuur / Astronomie / Documentaires (4)

### No. 1: Sterrenhemel Timelapse

- **Category:** `Natuur / Astronomie / Documentaires`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Geen referentiepersonen, liggend formaat 16:9, BBC documentaire niveau sterrenhemel timelapse fotografie, diepe ruimte donkerblauwe toon, genereer een 30 seconden sterrenhemel timelapse korte film.

#### Prompt

```text
Geen referentiepersonen, liggend formaat 16:9, BBC documentaire niveau sterrenhemel timelapse fotografie, diepe ruimte donkerblauwe toon, genereer een 30 seconden sterrenhemel timelapse korte film.
Shot 1: Opwaartse hoek, Melkwegboog overspant de hemel, sterren draaien en stromen, voorgrond silhouet van eenzame piek, (lage kosmische ambient elektronische muziek begint).
Shot 2: Vaste camerapositie timelapse, sterrensporen tekenen concentrische bogen rond de Poolster, <lage nachtinsecten geluiden>.
Shot 3: Langzame zijwaartse beweging, Melkweg zakt langzaam in verre bergen, meteoor scheurt door de nachtelijke hemel en trekt een lange staart.
Shot 4: Jib shot, camera stijgt op vanaf de graslandgrond, Melkweg en horizon ontvouwen samen, (strijkers leggen basis en komen geleidelijk binnen).
Shot 5: Langzaam inzoomen, paarsrode gaswolken van diepe ruimte nevels wervelen in een zee van sterren, sterren fonkelen.
Shot 6: Langzaam uitzoomen, sterrenhemel valt terug naar een eenzame tent met zwak licht, tekst verschijnt 【Het Universum · Eeuwig als altijd】, (ambient muziek uitstervend).
Constraints: Doorlopend timelapse textuur, hemellichaambeweging vloeiend en coherent; diepblauw paarsachtige koele toon consistent, geen close-ups van personen.
Algemene constraints: Houd onderschrift-vrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijk licht bewegen, niet als standbeelden.
```

### No. 2: Noorderlicht Stroming

- **Category:** `Natuur / Astronomie / Documentaires`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Geen referentiepersonen, liggend formaat 16:9, Arctische documentaire realistische stijl, ijs en sneeuw poolnacht en smaragdgroen noorderlicht toon, genereer een 30 seconden noorderlicht korte film.

#### Prompt

```text
Geen referentiepersonen, liggend formaat 16:9, Arctische documentaire realistische stijl, ijs en sneeuw poolnacht en smaragdgroen noorderlicht toon, genereer een 30 seconden noorderlicht korte film.
Shot 1: Opwaartse hoek, smaragdgroen noorderlicht gordijn ontsteekt plotseling aan de hemel en golft als golven, (etherische synthesizer soundwall begint abrupt).
Shot 2: Langzame zijwaartse beweging, noorderlicht weerspiegelt op een bevroren meer, sneeuwvlakte zilverwit, <huilende poolwind>.
Shot 3: Vaste camerapositie timelapse, noorderlicht verandert van groen naar paars en danst snel, sterren verschijnen ertussen.
Shot 4: Langzaam inzoomen, details van het noorderlicht gordijn stromen als zijde naar beneden, <laag gekraak van ijs>.
Shot 5: Jib shot, camera zweeft over een dennenbos en stijgt naar de volle noorderlichthemel, koud en transparant.
Shot 6: Langzaam uitzoomen, noorderlicht omhult de hele ijsvlakte, eenzame boom staat, tekst verschijnt 【Poollicht】, (soundwall vervaagt en sterft weg).
Constraints: Noorderlicht kleurovergang natuurlijk en vloeiend, vermijd harde flikkering; hoofdzakelijk koele toon, geen personen in beeld.
Algemene constraints: Houd onderschrift-vrij; genereer geen Logo; genereer geen watermerk; gebruik slechts één camerabeweging per shot; personen moeten natuurlijk licht bewegen, niet als standbeelden.
```

### No. 3: Vulkanische Lava

- **Category:** `Natuur / Astronomie / Documentaires`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Geen referentiepersonen, liggend formaat 16:9, geologische documentaire indrukwekkend realistisch, contrast tussen gloeiend rode lava en zwart gesteente met koele rook, genereer een 30 seconden durende vulkaanfilm.

#### Prompt

```text
Geen referentiepersonen, liggend formaat 16:9, geologische documentaire indrukwekkend realistisch, contrast tussen gloeiend rode lava en zwart gesteente met koele rook, genereer een 30 seconden durende vulkaanfilm.
Shot 1: Langzaam inzoomen, gloeiend rode lava borrelt, kookt en spettert vonken in de krater, dichte rook stijgt op, (lage brommende drums beginnen abrupt).
Shot 2: Vaste camerapositie, lavastroom kruipt langzaam over het oppervlak van zwart gesteente en vormt goudrode scheuren, <geluid van borrelende, brandende lava>.
Shot 3: Bovenaanzicht, lavarivier kronkelt als een gouden ader door de verkoolde berghelling.
Shot 4: Langzaam horizontaal pannen, lava valt in de zee en veroorzaakt een witte stoomexplosie, <geluid van water en vuur die elkaar ontmoeten en exploderen>.
Shot 5: Onderhoek, vulkaanuitbarsting onder de nachtelijke hemel, lavabommen trekken oranjerode bogen, rookpluim rijst op, (drums bereiken hoogtepunt).
Shot 6: Langzaam uitzoomen, op de afgekoelde lavavlakte gloeien sintels als sterren, tekst verschijnt 【Aarde · Gloeiend Hart】, (gedreun sterft langzaam weg).
Beperkingen: Sterk contrast tussen gloeiend rood warm licht en koele zwarte rotsen; lava moet een realistische, stroperige textuur hebben; geen personen in beeld.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijk, subtiel bewegen, niet als standbeelden.
```

### No. 4: Ochtendmist in het Bos

- **Category:** `Natuur / Astronomie / Documentaires`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Geen referentiepersonen, liggend formaat 16:9, natuurdocumentaire helend realistisch, ochtendlicht met Tyndall-effect en groen mistig bos, genereer een 30 seconden durende film over ochtendmist in het bos.

#### Prompt

```text
Geen referentiepersonen, liggend formaat 16:9, natuurdocumentaire helend realistisch, ochtendlicht met Tyndall-effect en groen mistig bos, genereer een 30 seconden durende film over ochtendmist in het bos.
Shot 1: Langzaam inzoomen, ochtendlicht dringt door het hoge sparrenbos en vormt Tyndall-stralen, dunne mist stroomt, (etherische fluit en vogelgezang beginnen).
Shot 2: Vaste camerapositie, dauwdruppel hangt aan de punt van een varenblad, breekt het ochtendlicht en valt, <helder vogelgezang afwisselend>.
Shot 3: Gelijkmatig horizontaal pannen, mist drijft langzaam over mosstenen en een beekje in het bos, <kabbelend beekgeluid>.
Shot 4: Onderhoek, camera beweegt langs een boomstam omhoog naar de kruin waar zonlicht naar beneden stroomt, lichtvlekken dansen.
Shot 5: Volgshot, een hert loopt geruisloos door het mistige bos, stapt lichtvoetig en kijkt om, <geritsel van vallende bladeren>.
Shot 6: Langzaam uitzoomen, panoramisch beeld van het bos in de ochtendmist wordt geleidelijk helderder, tekst verschijnt 【Ochtendbos · Het Ontwaken van Alle Geluiden】, (fluitklank sterft weg).
Beperkingen: Lichtstralen en mistlagen moeten transparant en natuurlijk zijn; zacht groen warme toon, dierlijke bewegingen realistisch en niet stijf, geen personen in beeld.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijk, subtiel bewegen, niet als standbeelden.
```

<a id="category-27"></a>

### Personificatie / Creatieve Memes (2)

### No. 1: AI-model Gevechtspersonificatie

- **Category:** `Personificatie / Creatieve Memes`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Geen referentiepersonen, gebruik originele gepersonifieerde gevechtsvechters (geen verwijzing naar echte bedrijven of merken), staand formaat 9:16, cyber arena热血 anime stijl, neon holografische toon, genereer een 30 seconden durende gepersonifieerd gevechtsfilm.

#### Prompt

```text
Geen referentiepersonen, gebruik originele gepersonifieerde gevechtsvechters (geen verwijzing naar echte bedrijven of merken), staand formaat 9:16, cyber arena热血 anime stijl, neon holografische toon, genereer een 30 seconden durende gepersonifieerd gevechtsfilm.
Shot 1: Langzaam inzoomen, twee originele gepersonifieerde mecha-vechters staan tegenover elkaar in het midden van een holografische arena en verzamelen kracht, hun borstenergiekernen lichten op, (opzwepende elektronische drums barsten los).
Shot 2: Volgshot, blauwe dataflow-vechter slaat met een lichtvuist die een sleep van nasporen trekt, <hoogfrequent energiezoemgeluid>.
Shot 3: Omcirkelend, oranje rekenkracht-vechter ontwijkt zijwaarts en blokkeert met een tegenaanval, vonken spatten, neon lichtbanen cirkelen.
Shot 4: Onderhoek, twee vuisten botsen en veroorzaken een schokgolf die holografische tribunes omverwerpt, deeltjes vliegen rond, tekst springt in beeld 【Redeneersnelheid Duel】.
Shot 5: Vaste camerapositie slow motion, blauwe vechter's kern overbelast en barst, wordt teruggeslagen, codefragmenten vliegen uiteen, <elektrische ontladingsgeluid>.
Shot 6: Langzaam uitzoomen, oranje vechter staat op de ring en heft een vuist, holografische scorebord licht op, tekst verschijnt 【Deze Ronde Gewonnen】, (drums sterven weg).
Beperkingen: Twee vechters moeten duidelijk onderscheiden zijn in kleur en ontwerp (blauw vs oranje), geen tweelinguitstraling, één van elk in beeld; volledig originele personificatie, geen echte merklogo's of namen.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijk, subtiel bewegen, niet als standbeelden.
```

### No. 2: Programmeertalen Personificatie Ruzie

- **Category:** `Personificatie / Creatieve Memes`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `nl`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts)

#### Description

Geen referentiepersonen, gebruik originele gepersonifieerde karakters (geen verwijzing naar echte bedrijven of merken), liggend formaat 16:9, kantoor situatiekomedie humoristische stijl, levendige warme toon, genereer een 30 seconden durende gepersonifieerde ruziefilm.

#### Prompt

```text
Geen referentiepersonen, gebruik originele gepersonifieerde karakters (geen verwijzing naar echte bedrijven of merken), liggend formaat 16:9, kantoor situatiekomedie humoristische stijl, levendige warme toon, genereer een 30 seconden durende gepersonifieerde ruziefilm.
Shot 1: Langzaam inzoomen, twee originele programmeur gepersonifieerde karakters kijken elkaar over werkplekken heen aan met opgetrokken wenkbrauwen, holografische codeschermen op bureaus flikkeren, (speelse jazzmelodie begint).
Shot 2: Vaste camerapositie, slangvormig mascotte-karakter haalt nonchalant zijn schouders op en zegt sarcastisch {Ik regel het in één regel, jij schrijft er twintig}, <toetsaardaanslaggeluid>.
Shot 3: Volgshot, tandwielharnas-karakter staat op uit ongenoegen, slaat op tafel en weerlegt {Maar ik ren tien keer sneller dan jij}, holografisch scherm toont voortgangsbalk.
Shot 4: Omcirkelend, twee karakters staan rug aan rug en geven geen krimp, codesymbolen botsen boven hun hoofden en veroorzaken vonken, <klingelend botsingsgeluid>.
Shot 5: Bovenaanzicht, derde koffiekop schattig huisdier-karakter brengt twee kopjes koffie om de zaak te sussen, de twee kijken elkaar ongemakkelijk aan.
Shot 6: Langzaam uitzoomen, drie karakters slaan een arm om elkaar heen, klinken met kopjes en lachen om het goed te maken, tekst verschijnt 【Ieder zijn Sterkte, dat is de Sterkste Stack】, (jazzmelodie sterft weg).
Beperkingen: Drie karakters moeten duidelijk onderscheiden zijn in ontwerp en kleur (slang/tandwiel/koffiekop), geen tweelinguitstraling, één van elk in beeld; volledig originele personificatie, geen echte programmeertaalmerken, logo's of geregistreerde namen.
Algemene beperkingen: Houd het ondertitelloos; genereer geen Logo; genereer geen watermerk; gebruik per shot slechts één camerabeweging; personen moeten natuurlijk, subtiel bewegen, niet als standbeelden.
```

<details><summary>Repository development</summary>

```bash
npm ci
npm run generate
npx tsc --noEmit
```

</details>

<a id="resources"></a>

## 🔗 Resources


- [Seedance 2.5 prompt gallery](https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
- [Atlas Cloud Seedance 2.5 page](https://www.atlascloud.ai/nl/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
- [Atlas Cloud Skill](https://github.com/AtlasCloudAI/atlas-cloud-skills)
- [Atlas MCP Server](https://github.com/AtlasCloudAI/mcp-server)
- [Atlas CLI](https://github.com/AtlasCloudAI/cli)
- [Atlas Cloud model catalog](https://www.atlascloud.ai/models?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
- [Discord](https://discord.gg/MWmMr4q9es)

<a id="license"></a>

## 📄 License


[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

> All prompts are shared for learning, organization, and discovery. Open an issue if anything should be removed.

> This README is auto-generated. 2026-07-23.
