# 🎬 Awesome Seedance 2.5 Prompts + Seedance 2.5 Skill

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-seedance-2.5-prompts-skills?style=social)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/pulls)
[![Prompts](https://img.shields.io/badge/prompts-111%2B-blue.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

A curated library of Seedance 2.5 video prompts plus **Seedance 2.5 Skill**, an installable Agent Skill that improves prompts, plans and reviews storyboards when needed, and generates controllable video. It uses Seedream 5.0 Pro for storyboard images and Seedance 2.0 as the current executable video default, switching to Seedance 2.5 only when the selected provider exposes it.

| [Browse prompts](https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Install Seedance 2.5 Skill](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/tree/main/skills/seedance-2-5-skill) | [Generate with Atlas Cloud](https://www.atlascloud.ai/es/models/bytedance/seedance-2.5/text-to-video?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Get an API key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) |
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

**Launch status:** Seedance 2.5 is expected to launch in August 2026. Atlas Cloud is one of the first official API launch partners for Seedance 2.5.

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
- [Seedance 2.5 launch overview — Atlas Cloud](https://www.atlascloud.ai/es/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)

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

### No. 1: Match-cut rítmico con bola de cristal

- **Category:** `Match-cut y efectos creativos`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

Un cortometraje con match-cut sincronizado al ritmo: una bola de cristal grabada con un logo luminoso de 'seedance' permanece centrada mientras ocho escenas se suceden sin cortes visibles tras ella.

#### Prompt

```text
Un cortometraje cinematográfico y trepidante con match-cut sincronizado a un ritmo electrónico contundente. Una bola de cristal impecable permanece fija en el centro exacto durante todo el metraje, con un logo luminoso de "seedance" grabado en su interior. La bola mantiene un enfoque nitidísimo mientras, en cada golpe fuerte de la música, el fondo cambia con match-cuts perfectos: Escena 1: primer plano macro, agua salpicando de forma cinematográfica alrededor de la bola y refractando una luz intrincada. Escena 2: una cafetería matinal de estilo vintage, la bola sobre una mesa de madera en bruto, el vapor del café ascendiendo y transeúntes desenfocados al otro lado de la ventana. Escena 3: crepúsculo en hora dorada, un joven patinador lanza y atrapa la bola con una sola mano, la calle desplazándose hacia atrás tras él en un precioso atardecer a contraluz. Escena 4: un festival de música frenético, unas manos alzan la bola en alto refractando deslumbrantes láseres del escenario. Escena 5: una animada mesa de fiesta familiar, la bola descansando en el centro del encuadre, figuras desenfocadas brindando y alcanzando la comida. Escena 6: un cine en penumbra, unas manos ahuecadas sostienen la bola mientras el tenue resplandor de la pantalla gigante recorre su superficie. Escena 7: la bola sobre la membrana de un altavoz que vibra con violencia, con un match-cut en el clímax hacia un plato de DJ girando en el centro. Escena 8: una noche de acampada al aire libre, el fondo convirtiéndose en una cálida hoguera y el bokeh oscilante de guirnaldas de luces. Final: en el último golpe la bola sale despedida hacia arriba fuera de cuadro; corte a negro puro y un minimalista "seedance" en blanco sobre negro apareciendo en el centro exacto. Montaje con match-cut sincronizado al ritmo, etalonaje cinematográfico de primer nivel, refracción de cristal fotorrealista, ray tracing e iluminación global. Sujeto nitidísimo, fondo con fuerte desenfoque de movimiento.
```

### No. 2: Mecanismo de relojería steampunk — plano secuencia de 30 s

- **Category:** `Cinematografía en plano secuencia`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

Una secuencia 3D de 30 segundos en miniatura steampunk con movimientos de cámara continuos, orbitando y atravesando los elementos.

#### Prompt

```text
Una secuencia de motion graphics 3D de 30 segundos, de alta gama y profundamente cinematográfica, en un refinado estilo steampunk y de miniatura vintage, con un orbitar fluido y continuo y movimientos de cámara que atraviesan los elementos. [0-10s] Primer plano macro de la esfera de un antiguo reloj de latón que se despliega capa a capa en anillos de engranajes que giran y encajan entre sí, entre niebla volumétrica. La cámara se hunde a través de los engranajes; un ornitóptero mecánico asciende en espiral desde un cañón en miniatura de viejos libros desgastados y apilados. [10-20s] La cámara avanza deslizándose siguiendo al ornitóptero y penetra sin cortes en un ornamentado zoótropo de latón que gira a toda velocidad y proyecta la luz de caballos mecánicos al galope. La luz salta hacia fuera y la escena se convierte en un teleférico de latón flotando sobre relucientes raíles de cobre a través de un bosque de engranajes, bañado por una luz cinematográfica de hora dorada. [20-30s] La cámara desciende con elegancia; abajo aparece un exquisito velero de madera de relojería surcando olas de textura vítrea azul profundo, que se transforman en una gigantesca luna luminosa con siluetas de exploradores portando faroles que atraviesan una cresta de vetas de cristal bajo las estrellas. La cámara regresa en espiral, con suavidad, a través de nubes etéreas hasta la esfera de latón que hace tictac. Texturas mecánicas hiperrealistas, ricos tonos de latón y oro, poca profundidad de campo cinematográfica, movimientos de cámara suaves que atraviesan los elementos sin cortes, atmósfera épica de aventura fantástica.
```

### No. 3: Ventanas a otros mundos (5 refs)

- **Category:** `Referencia con múltiples imágenes`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
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

Un cortometraje conceptual de marca guiado por 5 imágenes de referencia, que se desliza a través de ventanas hacia mundos diferentes.

#### Prompt

```text
Un cortometraje conceptual de marca, cinematográfico. @image1 es el primer fotograma; la imagen tiembla ligeramente y la cámara avanza hacia las sombras de los árboles que pasan raudas hacia atrás al otro lado de la ventana, acelerando su fuga, para cortar de golpe a @image2, donde la velocidad se suaviza mientras la cámara se desliza despacio a lo largo de un arroyo, con cantos de pájaros y flores. La cámara se sumerge bajo el agua —sonido de burbujas— mientras unas medusas naranjas pasan con gracia ante el objetivo @image3; la cámara retrocede a medida que unos pececillos revolotean y nadan del agua hacia el interior de la ventana @image4, con una niña mirando alrededor, observándolos. La cámara retrocede, se desenfoca y vuelve a enfocar con nitidez, cambiando al ritmo de la música: una celosía de ventana de jardín chino @image5 con la luz girando, una vidriera de iglesia, la ventanilla de un avión, un tragaluz de cúpula, un mirador, unas persianas de lamas, una buhardilla europea, la mirilla de una puerta, el visor de una cámara, un ojo de pájaro, un primer plano de un ojo humano. Se detiene en el ojo humano; el ojo se cierra, la pantalla se pone negra y de repente se abre: "seedance" aparece en el centro del ojo en el golpe de acento.
```

### No. 4: Plano secuencia a través de seis habitaciones (8 refs)

- **Category:** `Referencia con múltiples imágenes`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
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

Un único plano continuo que sigue a una figura a través de seis habitaciones de estados de ánimo cambiantes, guiado por 8 imágenes de referencia.

#### Prompt

```text
Un único plano continuo. La cámara sigue con suavidad a una persona con un abrigo negro (referencia @image1) que se desplaza de izquierda a derecha a través de seis habitaciones conectadas, de tonos y estados de ánimo distintos. Todas las habitaciones comparten la misma estructura: paredes blancas, suelo de madera claro en espiga, ventanales franceses de suelo a techo, visillos blancos y translúcidos (referencia @image2), pero la vista del exterior y el ambiente cambian cada vez. El protagonista camina a un ritmo constante, atravesando cada puerta abierta. 0-5s habitación uno, pelea de cómic estadounidense: el protagonista pelea con un personaje (@image3), que resulta vencido; 5-10s habitación dos, calidez, estilo de manualidad en fieltro, la vista de la ventana es un campo de girasoles (@image4), luz suave naranja cálida, un pintor pintando girasoles (@image5), el protagonista transformándose en estilo fieltro al entrar; 10-15s habitación tres, tristeza, stop-motion de cómic en blanco y negro, lluvia fuera, luz gris fría, una persona sola en el suelo abrazándose las rodillas, un teléfono que brilla con una llamada sin contestar; al entrar, la luz parpadea y se apaga y vuelve a encenderse, la habitación se llena de color y las flores estallan en flor; 15-20s habitación cuatro, alegría, una habitación sumergida en el mar (referencia @image6), el protagonista volviéndose transparente entre corales y peces; 20-25s habitación cinco, sorpresa, la vista de la ventana es un cielo de fuegos artificiales (referencia @image7), luz parpadeante y colorida, el protagonista arrastrado por una multitud que lo aclama; 25-30s una habitación blanca y vacía, el protagonista chasquea los dedos —efecto de chasquido— el cuadro se pone negro, "seedance" en el centro (referencia @image8). Calidad cinematográfica, estilo de publicidad de alta costura, iluminación determinada por completo por las vistas de las ventanas para lograr un fuerte contraste emocional, sin texto en el encuadre.
```

### No. 5: Edición de video — eliminar a todos menos al protagonista

- **Category:** `Edición de video`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

Edición basada en un video de referencia: borra a todos excepto al protagonista de un clip de origen.

#### Prompt

```text
Edición de video: elimina a todos los que aparecen en @video1 excepto al protagonista.
```

### No. 6: Videoclip de hip-hop multilingüe 'Hello'

- **Category:** `Referencia con múltiples imágenes`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

Un videoclip de hip-hop junto al mar creado a partir de una sola imagen de referencia; el cantante principal rapea un saludo en 8 idiomas, con sincronización labial y cortes secos al ritmo.

#### Prompt

```text
Videoclip de hip-hop / rap cinematográfico, con calidad fotorrealista, tono de alta gama y ambientación junto al mar. Construye el encuadre a partir de @image1: una banda actúa en una playa de arena dorada con olas rompiendo —un vocalista principal agarrando un micrófono en su pie sobre la arena mojada, un guitarrista a la izquierda, otro a la derecha, un batería al fondo; una vasta línea de costa detrás, olas ondulantes, un cálido sol de hora dorada rielando sobre el agua, bruma marina en el aire. El vocalista, con un chándal rojo, rapea a cámara —labios y mandíbula sincronizados con precisión con cada palabra, la cabeza marcando el ritmo con fuerza. Rap luminoso, contundente, rápido y seguro. CORTE SECO al ritmo, cada cambio con un doble contraste (el tamaño y el tipo de plano cambian a la vez). Letra (el vocalista canta un saludo en cada idioma por turnos, con sincronización labial precisa): inglés "Hello", chino "你好", japonés "こんにちは", coreano "안녕하세요", portugués "Olá", tailandés "สวัสดี", español "Hola", árabe "مرحبا". 8 planos con corte seco (plano general de establecimiento en contrapicado; primer plano rapeando a cámara; inserto macro de las cuerdas de la guitarra; órbita al acecho en 3/4; travelling lateral en la orilla; contrapicado ascendente del batería; acercamiento cerrado al vocalista; heroico acercamiento a toda la banda), un idioma por plano. Balance de blancos a 4000K, etalonaje teal and amber, 35mm, poca profundidad de campo, grano de película, bruma marina, destello de hora dorada. Sensación premium, sincronización labial precisa, sin subtítulos, sin textos sobreimpresos, solo cortes secos, 20 segundos en total.
```

### No. 7: Tutorial de instalación de cafetera de cápsulas (6 refs)

- **Category:** `Tutorial guiado por referencias`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
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

Un tutorial de 30 segundos para instalar y usar una cafetera de cápsulas, con seis pasos guiados por referencias y locución en off, desde la instalación del depósito de agua hasta el primer enjuague.

#### Prompt

```text
Un video tutorial de 30 segundos sobre cómo instalar y usar una cafetera de cápsulas. 0-2s: el rótulo inicial dice "tutorial de instalación de la cafetera de cápsulas seedance". 2-5s, Paso 1: instalar el depósito de agua, referencia @image1, plano medio desde un ángulo ligeramente picado, parte trasera del cuerpo de la máquina, alinea el depósito de agua con la ranura de la parte de atrás del cuerpo y empújalo recto hacia abajo hasta que encaje con un clic firme, mostrando con claridad cómo los enganches de la base del depósito se alinean con la ranura del cuerpo, con la línea del nivel de agua visible a través de la sección transparente del depósito, locución "Primero, instala el depósito de agua. Alinéalo con la ranura de la parte trasera de la máquina; un clic significa que ha quedado bien fijado.". 5-9s, Paso 2: instalar la bandeja antigoteo, referencia @image2, primer plano de frente, parte inferior delantera del cuerpo, desliza la bandeja antigoteo en horizontal por los raíles guía de la base hasta que quede completamente encajada, locución "A continuación, instala la bandeja antigoteo. Alinéala con los raíles de la base.". 9-13s, Paso 3: instalar el cajón recogedor de cápsulas usadas, referencia @image3, primer plano desde un ángulo ligeramente contrapicado, el hueco bajo la bandeja antigoteo, alinea el cajón recogedor con el rebaje y empújalo hasta que quede al ras de la bandeja antigoteo, locución "Después, introduce el cajón recogedor de cápsulas. Las cápsulas usadas caerán aquí automáticamente.". 13-18s, Paso 4: primer llenado de agua, referencia @image4, primer plano de perfil, el depósito de agua en la parte superior/trasera del cuerpo, abre la tapa del depósito y vierte agua limpia hasta la línea de nivel MAX, luego ciérrala, destacando la línea del nivel de agua, locución "Abre la tapa del depósito, vierte agua limpia con cuidado de no superar la línea de nivel máximo y luego cierra la tapa del depósito.". 18-25s, Paso 5: encender, referencia @image5, plano medio de frente, parte delantera del cuerpo, enchufa el cable de alimentación y pulsa el botón de encendido; el piloto indicador pasa de parpadear a quedarse fijo (precalentamiento completado), locución "Conecta la corriente y pulsa el botón de encendido. El piloto indicador empieza a parpadear, lo que significa que se está precalentando. Cuando la luz se quede fija, la máquina estará lista.". 25-30s, Paso 6: primer enjuague (sin cápsula), referencia @image6, plano medio que pasa a un primer plano de tres cuartos, sin introducir ninguna cápsula pulsa directamente el botón de preparación para que salga agua caliente y enjuague los conductos, destacando la nota de "no hace falta cápsula", locución "El último paso, el primer enjuague. Ten en cuenta que este paso no requiere cápsula; solo pulsa el botón de preparación. Una vez terminado el enjuague, tu cafetera estará lista para usar.".
```

### No. 8: Anuncio de galletas afrutadas (imagen + 6 refs de video)

- **Category:** `Referencia multimodal (imagen+video)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
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

Un anuncio luminoso y colorido de galletas afrutadas en cuatro sabores —fresa, manzana, uva y naranja— creado a partir de una imagen de referencia y seis referencias de video de movimiento/cámara, con cortes secos a un ritmo contundente.

#### Prompt

```text
Un estilo publicitario luminoso y colorido con galletas afrutadas como protagonistas, en cuatro sabores —fresa, manzana, uva y naranja—; referencia del sabor fresa @image1. Las galletas y sus frutas correspondientes se disponen en una matriz geométrica de fuerte orden; el encuadre general es limpio, premium y de gran energía. Abre con las frutas orbitando rápidamente alrededor de la galleta central para establecer enseguida el foco visual —toma como referencia la composición de @video1— entrando con un corte en un golpe fuerte de la música. Luego, galletas de distintos sabores avanzan hacia el objetivo siguiendo trayectorias en espiral, creando una clara profundidad espacial —toma como referencia el movimiento y el trabajo de cámara de @video2— cambiando de colores y sabores al ritmo de la música de fondo. La matriz de galletas hace paneos a izquierda y derecha con rápidos cortes de plano a plano, alternando los sabores de fresa, manzana, uva y naranja mientras el encuadre salta con jump-cuts veloces al compás —toma como referencia el movimiento de @video3. La parte central añade paneos de arriba abajo; la ordenada matriz de galletas sube y baja verticalmente como una máquina —toma como referencia el movimiento de @video4— resaltando la belleza del orden y la riqueza del producto. En el clímax, una galleta se parte en dos y el instante entra en cámara lenta mientras el relleno afrutado estalla, esparciendo migas, amplificando la sensación jugosa y el impacto granulado —toma como referencia el efecto de explosión de @video5— para luego volver enseguida al montaje trepidante. El cierre incorpora el texto "Fresco en Seedance, hecho para una visión viral", que entra palabra por palabra en rápida sucesión con una fuerte animación rítmica del texto y un fotograma congelado del producto —toma como referencia @video6— con los cuatro sabores de galleta alineados con esmero y las frutas rebotando al unísono para un cierre final centrado en la marca, con el encuadre lleno de una atmósfera publicitaria joven, enérgica, deliciosa y compartible.
```

<a id="browse-by-category"></a>

## 🏷️ Browse by Category


- [`Match-cut y efectos creativos`](#category-1): **1**
- [`Cinematografía en plano secuencia`](#category-2): **1**
- [`Referencia con múltiples imágenes`](#category-3): **3**
- [`Edición de video`](#category-4): **2**
- [`Tutorial guiado por referencias`](#category-5): **1**
- [`Referencia multimodal (imagen+video)`](#category-6): **1**
- [`Referencia de imagen`](#category-7): **1**
- [`Referencia de imagen (cinematográfico)`](#category-8): **1**
- [`Comercio Electrónico con Venta en Vivo`](#category-9): **8**
- [`Gastronomía y Restauración`](#category-10): **8**
- [`Belleza y Moda`](#category-11): **6**
- [`Tecnología Digital`](#category-12): **6**
- [`Automóviles`](#category-13): **4**
- [`Inmobiliaria y Hogar`](#category-14): **4**
- [`Presentación Personal / Avatar Digital`](#category-15): **6**
- [`Miniserie / Narrativa Emocional`](#category-16): **8**
- [`Anuncio de Marca / Publicidad`](#category-17): **6**
- [`Viajes / Turismo Cultural`](#category-18): **6**
- [`Mascotas / Animales`](#category-19): **5**
- [`Infantil / Educación / Divulgación Científica`](#category-20): **5**
- [`Videojuegos / Gráficos por Computadora / Fantasía`](#category-21): **5**
- [`Animación / Dibujos Animados`](#category-22): **4**
- [`Deportes / Fitness`](#category-23): **4**
- [`Música / Danza / Videoclip`](#category-24): **4**
- [`Festividades / Estaciones del Año`](#category-25): **5**
- [`Naturaleza / Astronomía / Documental`](#category-26): **4**
- [`Antropomorfización / Broma Creativa`](#category-27): **2**

<a id="all-prompts"></a>

## 📋 All Prompts


<a id="category-1"></a>

### Match-cut y efectos creativos (1)

### No. 1: Match-cut rítmico con bola de cristal

- **Category:** `Match-cut y efectos creativos`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

Un cortometraje con match-cut sincronizado al ritmo: una bola de cristal grabada con un logo luminoso de 'seedance' permanece centrada mientras ocho escenas se suceden sin cortes visibles tras ella.

#### Prompt

```text
Un cortometraje cinematográfico y trepidante con match-cut sincronizado a un ritmo electrónico contundente. Una bola de cristal impecable permanece fija en el centro exacto durante todo el metraje, con un logo luminoso de "seedance" grabado en su interior. La bola mantiene un enfoque nitidísimo mientras, en cada golpe fuerte de la música, el fondo cambia con match-cuts perfectos: Escena 1: primer plano macro, agua salpicando de forma cinematográfica alrededor de la bola y refractando una luz intrincada. Escena 2: una cafetería matinal de estilo vintage, la bola sobre una mesa de madera en bruto, el vapor del café ascendiendo y transeúntes desenfocados al otro lado de la ventana. Escena 3: crepúsculo en hora dorada, un joven patinador lanza y atrapa la bola con una sola mano, la calle desplazándose hacia atrás tras él en un precioso atardecer a contraluz. Escena 4: un festival de música frenético, unas manos alzan la bola en alto refractando deslumbrantes láseres del escenario. Escena 5: una animada mesa de fiesta familiar, la bola descansando en el centro del encuadre, figuras desenfocadas brindando y alcanzando la comida. Escena 6: un cine en penumbra, unas manos ahuecadas sostienen la bola mientras el tenue resplandor de la pantalla gigante recorre su superficie. Escena 7: la bola sobre la membrana de un altavoz que vibra con violencia, con un match-cut en el clímax hacia un plato de DJ girando en el centro. Escena 8: una noche de acampada al aire libre, el fondo convirtiéndose en una cálida hoguera y el bokeh oscilante de guirnaldas de luces. Final: en el último golpe la bola sale despedida hacia arriba fuera de cuadro; corte a negro puro y un minimalista "seedance" en blanco sobre negro apareciendo en el centro exacto. Montaje con match-cut sincronizado al ritmo, etalonaje cinematográfico de primer nivel, refracción de cristal fotorrealista, ray tracing e iluminación global. Sujeto nitidísimo, fondo con fuerte desenfoque de movimiento.
```

<a id="category-2"></a>

### Cinematografía en plano secuencia (1)

### No. 1: Mecanismo de relojería steampunk — plano secuencia de 30 s

- **Category:** `Cinematografía en plano secuencia`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

Una secuencia 3D de 30 segundos en miniatura steampunk con movimientos de cámara continuos, orbitando y atravesando los elementos.

#### Prompt

```text
Una secuencia de motion graphics 3D de 30 segundos, de alta gama y profundamente cinematográfica, en un refinado estilo steampunk y de miniatura vintage, con un orbitar fluido y continuo y movimientos de cámara que atraviesan los elementos. [0-10s] Primer plano macro de la esfera de un antiguo reloj de latón que se despliega capa a capa en anillos de engranajes que giran y encajan entre sí, entre niebla volumétrica. La cámara se hunde a través de los engranajes; un ornitóptero mecánico asciende en espiral desde un cañón en miniatura de viejos libros desgastados y apilados. [10-20s] La cámara avanza deslizándose siguiendo al ornitóptero y penetra sin cortes en un ornamentado zoótropo de latón que gira a toda velocidad y proyecta la luz de caballos mecánicos al galope. La luz salta hacia fuera y la escena se convierte en un teleférico de latón flotando sobre relucientes raíles de cobre a través de un bosque de engranajes, bañado por una luz cinematográfica de hora dorada. [20-30s] La cámara desciende con elegancia; abajo aparece un exquisito velero de madera de relojería surcando olas de textura vítrea azul profundo, que se transforman en una gigantesca luna luminosa con siluetas de exploradores portando faroles que atraviesan una cresta de vetas de cristal bajo las estrellas. La cámara regresa en espiral, con suavidad, a través de nubes etéreas hasta la esfera de latón que hace tictac. Texturas mecánicas hiperrealistas, ricos tonos de latón y oro, poca profundidad de campo cinematográfica, movimientos de cámara suaves que atraviesan los elementos sin cortes, atmósfera épica de aventura fantástica.
```

<a id="category-3"></a>

### Referencia con múltiples imágenes (3)

### No. 1: Ventanas a otros mundos (5 refs)

- **Category:** `Referencia con múltiples imágenes`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
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

Un cortometraje conceptual de marca guiado por 5 imágenes de referencia, que se desliza a través de ventanas hacia mundos diferentes.

#### Prompt

```text
Un cortometraje conceptual de marca, cinematográfico. @image1 es el primer fotograma; la imagen tiembla ligeramente y la cámara avanza hacia las sombras de los árboles que pasan raudas hacia atrás al otro lado de la ventana, acelerando su fuga, para cortar de golpe a @image2, donde la velocidad se suaviza mientras la cámara se desliza despacio a lo largo de un arroyo, con cantos de pájaros y flores. La cámara se sumerge bajo el agua —sonido de burbujas— mientras unas medusas naranjas pasan con gracia ante el objetivo @image3; la cámara retrocede a medida que unos pececillos revolotean y nadan del agua hacia el interior de la ventana @image4, con una niña mirando alrededor, observándolos. La cámara retrocede, se desenfoca y vuelve a enfocar con nitidez, cambiando al ritmo de la música: una celosía de ventana de jardín chino @image5 con la luz girando, una vidriera de iglesia, la ventanilla de un avión, un tragaluz de cúpula, un mirador, unas persianas de lamas, una buhardilla europea, la mirilla de una puerta, el visor de una cámara, un ojo de pájaro, un primer plano de un ojo humano. Se detiene en el ojo humano; el ojo se cierra, la pantalla se pone negra y de repente se abre: "seedance" aparece en el centro del ojo en el golpe de acento.
```

### No. 2: Plano secuencia a través de seis habitaciones (8 refs)

- **Category:** `Referencia con múltiples imágenes`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
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

Un único plano continuo que sigue a una figura a través de seis habitaciones de estados de ánimo cambiantes, guiado por 8 imágenes de referencia.

#### Prompt

```text
Un único plano continuo. La cámara sigue con suavidad a una persona con un abrigo negro (referencia @image1) que se desplaza de izquierda a derecha a través de seis habitaciones conectadas, de tonos y estados de ánimo distintos. Todas las habitaciones comparten la misma estructura: paredes blancas, suelo de madera claro en espiga, ventanales franceses de suelo a techo, visillos blancos y translúcidos (referencia @image2), pero la vista del exterior y el ambiente cambian cada vez. El protagonista camina a un ritmo constante, atravesando cada puerta abierta. 0-5s habitación uno, pelea de cómic estadounidense: el protagonista pelea con un personaje (@image3), que resulta vencido; 5-10s habitación dos, calidez, estilo de manualidad en fieltro, la vista de la ventana es un campo de girasoles (@image4), luz suave naranja cálida, un pintor pintando girasoles (@image5), el protagonista transformándose en estilo fieltro al entrar; 10-15s habitación tres, tristeza, stop-motion de cómic en blanco y negro, lluvia fuera, luz gris fría, una persona sola en el suelo abrazándose las rodillas, un teléfono que brilla con una llamada sin contestar; al entrar, la luz parpadea y se apaga y vuelve a encenderse, la habitación se llena de color y las flores estallan en flor; 15-20s habitación cuatro, alegría, una habitación sumergida en el mar (referencia @image6), el protagonista volviéndose transparente entre corales y peces; 20-25s habitación cinco, sorpresa, la vista de la ventana es un cielo de fuegos artificiales (referencia @image7), luz parpadeante y colorida, el protagonista arrastrado por una multitud que lo aclama; 25-30s una habitación blanca y vacía, el protagonista chasquea los dedos —efecto de chasquido— el cuadro se pone negro, "seedance" en el centro (referencia @image8). Calidad cinematográfica, estilo de publicidad de alta costura, iluminación determinada por completo por las vistas de las ventanas para lograr un fuerte contraste emocional, sin texto en el encuadre.
```

### No. 3: Videoclip de hip-hop multilingüe 'Hello'

- **Category:** `Referencia con múltiples imágenes`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

Un videoclip de hip-hop junto al mar creado a partir de una sola imagen de referencia; el cantante principal rapea un saludo en 8 idiomas, con sincronización labial y cortes secos al ritmo.

#### Prompt

```text
Videoclip de hip-hop / rap cinematográfico, con calidad fotorrealista, tono de alta gama y ambientación junto al mar. Construye el encuadre a partir de @image1: una banda actúa en una playa de arena dorada con olas rompiendo —un vocalista principal agarrando un micrófono en su pie sobre la arena mojada, un guitarrista a la izquierda, otro a la derecha, un batería al fondo; una vasta línea de costa detrás, olas ondulantes, un cálido sol de hora dorada rielando sobre el agua, bruma marina en el aire. El vocalista, con un chándal rojo, rapea a cámara —labios y mandíbula sincronizados con precisión con cada palabra, la cabeza marcando el ritmo con fuerza. Rap luminoso, contundente, rápido y seguro. CORTE SECO al ritmo, cada cambio con un doble contraste (el tamaño y el tipo de plano cambian a la vez). Letra (el vocalista canta un saludo en cada idioma por turnos, con sincronización labial precisa): inglés "Hello", chino "你好", japonés "こんにちは", coreano "안녕하세요", portugués "Olá", tailandés "สวัสดี", español "Hola", árabe "مرحبا". 8 planos con corte seco (plano general de establecimiento en contrapicado; primer plano rapeando a cámara; inserto macro de las cuerdas de la guitarra; órbita al acecho en 3/4; travelling lateral en la orilla; contrapicado ascendente del batería; acercamiento cerrado al vocalista; heroico acercamiento a toda la banda), un idioma por plano. Balance de blancos a 4000K, etalonaje teal and amber, 35mm, poca profundidad de campo, grano de película, bruma marina, destello de hora dorada. Sensación premium, sincronización labial precisa, sin subtítulos, sin textos sobreimpresos, solo cortes secos, 20 segundos en total.
```

<a id="category-4"></a>

### Edición de video (2)

### No. 1: Edición de video — eliminar a todos menos al protagonista

- **Category:** `Edición de video`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

Edición basada en un video de referencia: borra a todos excepto al protagonista de un clip de origen.

#### Prompt

```text
Edición de video: elimina a todos los que aparecen en @video1 excepto al protagonista.
```

### No. 2: Un tren de vapor irrumpe a través de la pantalla (edición de video)

- **Category:** `Edición de video`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-reference1.mov" controls muted width="360"></video>

#### Description

Una edición de video que mantiene intacto el clip original de cine antiguo de @video1 y solo añade una locomotora de vapor irrumpiendo a través de la pantalla, rasgando la tela, con el blanco y negro saltando a todo color en el momento del impacto.

#### Prompt

```text
Estilo realista cinematográfico hiperreal con textura fotorrealista de acción real, enfatizando la verosimilitud realista del objeto físico que irrumpe (el tren de vapor); sin acabado de CGI / motor de videojuego / 3D estilizado. Conserva la composición original de @video1, la iluminación de la sala de proyección, el estado de cámara en mano y las imperfecciones naturales. Video de origen bloqueado: mantén @video1 totalmente intacto como imagen base (la anticuada sala de proyección, las filas de espectadores con sombrero vistos por detrás, el haz cónico del proyector, la pantalla, la luz ambiente, la tonalidad de color y el movimiento en mano, todo sin cambios); las únicas adiciones: el tren irrumpiendo a través de la pantalla, los cambios de luz y sombra que provoca, el desgarro de la pantalla y el leve impacto físico sobre la sala y el público de la primera fila. Regla del cambio de color (la adición central): al principio, mantén estrictamente la textura original de película antigua en blanco y negro de @video1 (grano / arañazos / parpadeo / monocromo); en el instante exacto en que la locomotora atraviesa de verdad la pantalla e irrumpe en la realidad, la imagen cambia de golpe del blanco y negro al color pleno y real, extendiéndose el color por todo el encuadre como una onda expansiva centrada en el punto por donde el tren irrumpe (el cuerpo de acero negro del tren, la caldera de cobre rojizo, el resplandor naranja-amarillo de la lámpara de vapor, el marrón cálido del vagón de madera, el vapor blanco-grisáceo y el marrón cálido de la sala de proyección cobran color en consecuencia); el cambio de color está sincronizado con precisión con el estallido que rompe la pantalla, tras lo cual se mantiene el color fotorrealista hasta el final. Desgarro de la pantalla bloqueado: la pantalla es una auténtica tela de proyección blanca con una tensión de tejido genuina; a medida que el tren irrumpe, se rasga a la fuerza siguiendo el contorno del frontal de la locomotora, con desgarros radiales cuyos bordes se curvan hacia atrás y fibras de tela hechas jirones saliendo volando. Sujeto: el frontal de una anticuada locomotora de vapor irrumpiendo a la fuerza a través de la pantalla, un cuerpo de acero negro, una caldera cilíndrica, un quitapiedras delantero, una chimenea expulsando vapor blanco-grisáceo, un faro brillante, las superficies metálicas con desgaste real, mugre de aceite, remaches y reflejos húmedos, embistiendo hacia delante con un peso y una inercia inmensos. Cámara: hereda por completo el movimiento en mano original de @video1, sin suavizar, sin reajustar el tiempo, sin recomponer; el tren que irrumpe se mantiene correctamente encajado en la pantalla y en el espacio de la sala en todo momento, conservando el paralaje, la oclusión y la sombra de contacto con el suelo correctos. Sonido: sin música, conserva solo los efectos de sonido reales de la escena, heredando la ambientación de la sala de proyección de @video1 (el traqueteo del proyector, el murmullo del público) y añadiendo el sonido de la tela rasgándose, el vapor brotando, el rugido mecánico de las ruedas de acero y la ráfaga de aire del impacto. Duración total exactamente igual que la de @video1; no añadas nada más que el propio tren y sus interacciones físicas, el desgarro de la pantalla y el cambio de color en el momento de la irrupción. Sin cámara lenta, sin sensación de magia, sin terror estilizado; el resultado final debe parecer una imagen inquietante pero real de "un tren atravesando la pantalla, el blanco y negro volviéndose color al instante" captada por casualidad por una cámara real en una vieja sala de proyección.
```

<a id="category-5"></a>

### Tutorial guiado por referencias (1)

### No. 1: Tutorial de instalación de cafetera de cápsulas (6 refs)

- **Category:** `Tutorial guiado por referencias`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
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

Un tutorial de 30 segundos para instalar y usar una cafetera de cápsulas, con seis pasos guiados por referencias y locución en off, desde la instalación del depósito de agua hasta el primer enjuague.

#### Prompt

```text
Un video tutorial de 30 segundos sobre cómo instalar y usar una cafetera de cápsulas. 0-2s: el rótulo inicial dice "tutorial de instalación de la cafetera de cápsulas seedance". 2-5s, Paso 1: instalar el depósito de agua, referencia @image1, plano medio desde un ángulo ligeramente picado, parte trasera del cuerpo de la máquina, alinea el depósito de agua con la ranura de la parte de atrás del cuerpo y empújalo recto hacia abajo hasta que encaje con un clic firme, mostrando con claridad cómo los enganches de la base del depósito se alinean con la ranura del cuerpo, con la línea del nivel de agua visible a través de la sección transparente del depósito, locución "Primero, instala el depósito de agua. Alinéalo con la ranura de la parte trasera de la máquina; un clic significa que ha quedado bien fijado.". 5-9s, Paso 2: instalar la bandeja antigoteo, referencia @image2, primer plano de frente, parte inferior delantera del cuerpo, desliza la bandeja antigoteo en horizontal por los raíles guía de la base hasta que quede completamente encajada, locución "A continuación, instala la bandeja antigoteo. Alinéala con los raíles de la base.". 9-13s, Paso 3: instalar el cajón recogedor de cápsulas usadas, referencia @image3, primer plano desde un ángulo ligeramente contrapicado, el hueco bajo la bandeja antigoteo, alinea el cajón recogedor con el rebaje y empújalo hasta que quede al ras de la bandeja antigoteo, locución "Después, introduce el cajón recogedor de cápsulas. Las cápsulas usadas caerán aquí automáticamente.". 13-18s, Paso 4: primer llenado de agua, referencia @image4, primer plano de perfil, el depósito de agua en la parte superior/trasera del cuerpo, abre la tapa del depósito y vierte agua limpia hasta la línea de nivel MAX, luego ciérrala, destacando la línea del nivel de agua, locución "Abre la tapa del depósito, vierte agua limpia con cuidado de no superar la línea de nivel máximo y luego cierra la tapa del depósito.". 18-25s, Paso 5: encender, referencia @image5, plano medio de frente, parte delantera del cuerpo, enchufa el cable de alimentación y pulsa el botón de encendido; el piloto indicador pasa de parpadear a quedarse fijo (precalentamiento completado), locución "Conecta la corriente y pulsa el botón de encendido. El piloto indicador empieza a parpadear, lo que significa que se está precalentando. Cuando la luz se quede fija, la máquina estará lista.". 25-30s, Paso 6: primer enjuague (sin cápsula), referencia @image6, plano medio que pasa a un primer plano de tres cuartos, sin introducir ninguna cápsula pulsa directamente el botón de preparación para que salga agua caliente y enjuague los conductos, destacando la nota de "no hace falta cápsula", locución "El último paso, el primer enjuague. Ten en cuenta que este paso no requiere cápsula; solo pulsa el botón de preparación. Una vez terminado el enjuague, tu cafetera estará lista para usar.".
```

<a id="category-6"></a>

### Referencia multimodal (imagen+video) (1)

### No. 1: Anuncio de galletas afrutadas (imagen + 6 refs de video)

- **Category:** `Referencia multimodal (imagen+video)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
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

Un anuncio luminoso y colorido de galletas afrutadas en cuatro sabores —fresa, manzana, uva y naranja— creado a partir de una imagen de referencia y seis referencias de video de movimiento/cámara, con cortes secos a un ritmo contundente.

#### Prompt

```text
Un estilo publicitario luminoso y colorido con galletas afrutadas como protagonistas, en cuatro sabores —fresa, manzana, uva y naranja—; referencia del sabor fresa @image1. Las galletas y sus frutas correspondientes se disponen en una matriz geométrica de fuerte orden; el encuadre general es limpio, premium y de gran energía. Abre con las frutas orbitando rápidamente alrededor de la galleta central para establecer enseguida el foco visual —toma como referencia la composición de @video1— entrando con un corte en un golpe fuerte de la música. Luego, galletas de distintos sabores avanzan hacia el objetivo siguiendo trayectorias en espiral, creando una clara profundidad espacial —toma como referencia el movimiento y el trabajo de cámara de @video2— cambiando de colores y sabores al ritmo de la música de fondo. La matriz de galletas hace paneos a izquierda y derecha con rápidos cortes de plano a plano, alternando los sabores de fresa, manzana, uva y naranja mientras el encuadre salta con jump-cuts veloces al compás —toma como referencia el movimiento de @video3. La parte central añade paneos de arriba abajo; la ordenada matriz de galletas sube y baja verticalmente como una máquina —toma como referencia el movimiento de @video4— resaltando la belleza del orden y la riqueza del producto. En el clímax, una galleta se parte en dos y el instante entra en cámara lenta mientras el relleno afrutado estalla, esparciendo migas, amplificando la sensación jugosa y el impacto granulado —toma como referencia el efecto de explosión de @video5— para luego volver enseguida al montaje trepidante. El cierre incorpora el texto "Fresco en Seedance, hecho para una visión viral", que entra palabra por palabra en rápida sucesión con una fuerte animación rítmica del texto y un fotograma congelado del producto —toma como referencia @video6— con los cuatro sabores de galleta alineados con esmero y las frutas rebotando al unísono para un cierre final centrado en la marca, con el encuadre lleno de una atmósfera publicitaria joven, enérgica, deliciosa y compartible.
```

<a id="category-7"></a>

### Referencia de imagen (1)

### No. 1: Lagarto cornudo del desierto y pomelo (anuncio 3D)

- **Category:** `Referencia de imagen`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

Un anuncio de animación 3D luminoso y reluciente: un sediento lagarto cornudo del desierto encuentra un pomelo, le da un mordisco y un tsunami de zumo convierte el desierto en un mar de verano. Creado a partir de una referencia de personaje.

#### Prompt

```text
Un estilo de anuncio de animación 3D, con colores luminosos y translúcidos; la pulpa y el zumo deben transmitir una sensación intensamente refrescante e impactante. La onda general es la de un cortometraje publicitario animado de alta calidad con un toque de humor exagerado. El personaje del lagarto cornudo del desierto es adorable, vivaz y expresivo, referencia @image1. La textura de la imagen toma como referencia esa luz natural suave, la delicada textura de pelusa/piel, la onírica profundidad de campo macro y esa sensación realista pero ligeramente infantil de la imagen de referencia. 0-3s: un desierto abrasado por un sol de justicia, el aire vibrando de calor y la arena ardiendo; un lagarto cornudo del desierto yace sobre la arena hirviente, la lengua un poco fuera, los ojos vidriosos, casi reseco, tambaleándose cada dos pasos como si fuera a "evaporarse". 3-6s: se detiene de golpe, se le mueve el hocico y, al mirar hacia abajo, descubre un pomelo fresco, rollizo y cubierto de rocío, medio enterrado en la arena, reluciendo como un milagro del desierto; al instante, al lagarto se le abren los ojos como platos. 6-8s: se abalanza sobre él, abrazando el pomelo con fuerza con ambas manos, apretando toda la cara contra la cáscara con una expresión de dicha de "por fin estoy vivo"; el cuadro se congela durante 1 segundo, formando un momento memorable, exagerado y gracioso. 8-11s: alza la vista, abre la boca y le da un buen mordisco; la cáscara del pomelo se abre, la pulpa rolliza brilla con un lustre translúcido y, al momento siguiente, el zumo estalla como un tsunami. 11-16s: un zumo de pomelo entre naranja y rosa, translúcido y reluciente, brota a raudales, cayendo por las dunas e inundando rápidamente todo el desierto; la seca arena amarilla se convierte al instante en un mar de verano fresco, chispeante y con aroma a fruta, con cactus, rocas y pequeñas dunas engullidos por las olas de zumo, mientras la expresión del lagarto pasa del deleite al terror. 16-20s: casi ahogado por el "mar de pomelo", se aferra frenéticamente a medio pomelo como si fuera un flotador y flota, sacando la cabeza empapada con cara de aturdimiento. 20-24s: corte a una pantalla blanca; el nombre de la marca y el eslogan aparecen en el centro exacto: "Pomelo Seedance: muerde la pulpa y lo que brota es verano." La locución en off lee la frase entera. 24-30s: vuelve del blanco; ahora el lagarto cornudo del desierto está tumbado sobre el pomelo flotante, con unas gafas de sol diminutas y sosteniendo un vaso con pajita, dejándose llevar tranquilamente por el "mar de zumo" de vacaciones, rodeado de pulpa anaranjada flotante, cubitos de hielo, frescas salpicaduras y un cielo azul despejado; el ánimo pasa de la "supervivencia" a las "vacaciones" y, por fin, se recuesta satisfecho sobre el pomelo mientras la cámara se aleja y se congela en un fotograma veraniego refrescante, luminoso y desenfadado.
```

<a id="category-8"></a>

### Referencia de imagen (cinematográfico) (1)

### No. 1: La caída desde la azotea de un borracho (corto de humor negro)

- **Category:** `Referencia de imagen (cinematográfico)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `es`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

Un cortometraje cinematográfico de humor negro de unos 30 s: un hombre rechoncho y achispado se cae de una azotea, se agarra a un cabo salvavidas, atraviesa una ventana y, sin más, se queda dormido. Personaje a partir de una imagen de referencia; construido sobre cortes secos entre el estruendo y el silencio absoluto.

#### Prompt

```text
[El susto en la azotea de un borracho — se cae por el borde — se agarra a una cuerda a través de la ventana — se desmaya en el sitio | corto de humor negro | unos 30 segundos] Premisa en una línea: un hombre de mediana edad, rechoncho, adorable y borracho, está comiendo una hamburguesa y bebiendo cerveza en la azotea de un edificio; al levantarse y estirarse pierde el equilibrio por accidente y se cae, y en su pánico se agarra a una cuerda salvavidas y de inmediato atraviesa una ventana hacia un interior, se queda aturdido y pasmado un segundo y luego, sin más, se tumba donde está y se queda profundamente dormido. Imagen de referencia @image1 — un hombre de mediana edad, rechoncho, adorable y borracho: complexión redonda y robusta con una gran barriga cervecera, de baja estatura, movimientos sueltos, lentos y tambaleantes por la bebida; cara redonda, papada, mejillas y nariz enrojecidas por el alcohol, ojos entornados como rendijas con la mirada turbia, un cerco descuidado de barba corta, pelo revuelto, una expresión boba, adorable y despreocupada; lleva una camiseta interior de tirantes blanca manchada de salsa de hamburguesa que le cuelga holgada sobre la barriga redonda, vaqueros viejos, arrastrando unas zapatillas de andar por casa holgadas, y siempre aferrando una hamburguesa a medio comer en la mano. En toda la película solo aparece este personaje, con una coincidencia del 100 % con la imagen de referencia. Aspecto general: una megaciudad cyberpunk nocturna, un denso bosque de rascacielos de cristal y acero, letreros de neón (cian / magenta / azul eléctrico), vallas publicitarias holográficas, suelo mojado y reflectante, niebla volumétrica, estelas de luz de coches voladores a lo lejos y drones. Textura de imagen real de acción real, ópticas de cine físicas, sin renderizado 3D / motor de videojuego / estética anime. La cámara combina la cámara en mano con grúa / dron; tras la caída, la cámara se precipita hacia abajo con él mientras la pared exterior del edificio y el neón se disparan hacia arriba para transmitir velocidad, textura de óptica cinematográfica panorámica de 24-35mm, desenfoque de movimiento con obturador de 180 grados. El diseño de sonido es la clave del humor negro: cortando en seco una y otra vez entre "un enorme estruendo" y "el silencio absoluto". Gravedad real en todo momento. Storyboard (unos 30 segundos): S1 (0-4s) primer plano de apertura masticando (con sonido), la cara del hombre llena la pantalla, masticando la hamburguesa a grandes bocados, en un satisfecho estado de borrachera; S2 (4-9s) apertura a un plano general, estirándose -> perdiendo el equilibrio y cayendo (con sonido), se pone en pie tambaleándose y se estira a lo grande, se echa hacia atrás, no logra mantener el equilibrio, se le resbala el pie y cae de espaldas por el borde de la azotea, sin soltar en ningún momento la hamburguesa, con un aterrorizado "¡Eh——!"; S3 (9-12s) corte a un primer plano de rostro sobresaltado (un grito fuerte, enorme estruendo), los ojos de borracho saliéndose de las órbitas, la papada arrugada, la boca muy abierta en un grito de "¡Ahh——!!", el viento aullando; S4 (12-16s) corte a un plano lejano a la altura de los ojos (silencio absoluto), visto desde el edificio de enfrente, una diminuta figura blanca desplomándose en vertical desde el rascacielos, la ciudad de neón vasta e indiferente, y el silencio absoluto formando un contraste de humor negro con el enorme estruendo de un segundo antes; S5 (16-21s) corte a un primer plano de rostro (gritando) -> agarrando la cuerda, todavía gritando, las manos agitándose en el aire, de repente se agarra a un cable salvavidas, el cable tensándose de golpe y curvándose bajo su peso con un chasquido vibrante, el grito cortándose de forma abrupta al dar la sacudida y salir balanceándose (una breve cámara lenta en el momento en que agarra la cuerda); S6 (21-26s) corte a un ángulo interior (tranquilo) -> el cristal se hace añicos -> irrumpe dentro, el interior primero tranquilo con solo el zumbido del aire acondicionado, y al segundo siguiente el cristal estalla hacia dentro de forma explosiva (un breve bullet time) mientras el borracho, con hamburguesa y todo, atraviesa la ventana, con los fragmentos saliendo despedidos de forma radial, la luz de neón entrando a raudales, y él estrellándose con fuerza en la habitación contra el suelo / el sofá, con los cristales rotos tintineando; S7 (26-30s) final, un segundo de sobresalto -> se queda dormido, el hombre despatarrado en el suelo, cubierto de cristales rotos, aún aferrando la hamburguesa, abre lentamente los ojos, aturdido, con la mirada perdida y sobresaltado durante un segundo entero, mirando alrededor como si pensara "¿dónde estoy?", y luego la borrachera se impone y, sin importarle lo más mínimo, chasquea los labios, se acurruca la hamburguesa entre los brazos, se da la vuelta, se tumba allí mismo y se queda profundamente dormido, incluso roncando ligeramente, la cámara se aleja y se congela, corte seco a negro. Solo sonido directo del set, sin música, sin subtítulos; el núcleo son los cortes secos repetidos entre "enorme estruendo" y "silencio".
```

<a id="category-9"></a>

### Comercio Electrónico con Venta en Vivo (8)

### No. 1: Presentación de la prenda puesta

- **Category:** `Comercio Electrónico con Venta en Vivo`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Usando como sujeto principal al modelo de la Imagen 1 (referencia facial de la foto de primer plano de la Imagen 1, referencia de maquillaje y peinado de la foto de cuerpo entero de la Imagen 2), formato vertical 9:16, estilo de moda realista, generar un video corto de 30 segundos mostrando la prenda.

#### Prompt

```text
Usando como sujeto principal al modelo de la Imagen 1 (referencia facial de la foto de primer plano de la Imagen 1, referencia de maquillaje y peinado de la foto de cuerpo entero de la Imagen 2), formato vertical 9:16, estilo de moda realista, generar un video corto de 30 segundos mostrando la prenda.
Shot 1: Plano medio, el modelo @Image 1 de pie de lado se da la vuelta de repente haciendo que la parte inferior del abrigo se mueva, luz cenital suave en estudio de color liso que perfila el contorno, la cámara se acerca lentamente, (música electrónica ligera y moderna comienza) <sonido de fricción de la tela>.
Shot 2: Primer plano, la cámara se desplaza horizontalmente de manera estable barriendo los detalles de la costura de la línea del hombro y la solapa, luz lateral trasera ilumina el brillo de la tela.
Shot 3: Plano general, el modelo @Image 1 camina de forma natural mostrando la silueta general y la caída del corte, la cámara lo sigue de manera estable.
Shot 4: Plano medio, el modelo @Image 1 levanta la mano para arreglarse el cuello de la prenda y mira hacia atrás, la cámara gira lentamente medio círculo a su alrededor.
Shot 5: Plano medio-cercano, el modelo @Image 1 se queda quieto sonriendo, la cámara se aleja lentamente para terminar, (la música concluye).
Restricciones: El rostro del modelo y el maquillaje/peinado deben coincidir con la Imagen 1 y la Imagen 2 durante todo el video; el fondo del estudio y la luz cenital deben permanecer fijos e inalterados.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales leves, no ser estatuas.
```

### No. 2: Detalles de calzado/botas

- **Category:** `Comercio Electrónico con Venta en Vivo`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, estilo realista de alta gama y textura, el sujeto principal es un par de botas cortas de piel genuina, generar un video corto de 30 segundos mostrando los detalles del calzado.

#### Prompt

```text
Formato vertical 9:16, estilo realista de alta gama y textura, el sujeto principal es un par de botas cortas de piel genuina, generar un video corto de 30 segundos mostrando los detalles del calzado.
Shot 1: Primer plano macro, las botas cortas reposan quietas sobre una plataforma de piedra mate, la cámara se acerca lentamente a la costura de la puntera, luz lateral fría barre el cuero, (música electrónica ambiental y grave comienza) <sonido suave del cuero al contacto>.
Shot 2: Primer plano, la cámara rodea la bota una vez mostrando la forma aerodinámica y la curvatura del tacón, reflector de luz para relleno.
Shot 3: Primer plano macro, cámara fija, un dedo dobla la lengüeta revelando el logo del forro interior y las costuras.
Shot 4: Plano medio, un pie calzado con la bota pisa el suelo y levanta ligeramente el talón, la cámara en picado hacia abajo captura el momento del contacto, <sonido del tacón golpeando el suelo>.
Shot 5: Primer plano, la cámara se aleja lentamente enfocando la apariencia completa de la bota, (la música concluye).
Restricciones: El estilo de las botas cortas, la textura del cuero y la combinación de colores deben ser consistentes durante todo el video; la plataforma de piedra y la iluminación fría deben estar bloqueadas y no cambiar; evitar inconsistencias en la forma entre las botas izquierda y derecha.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales leves, no ser estatuas.
```

### No. 3: Demostración de apertura y cierre de bolso

- **Category:** `Comercio Electrónico con Venta en Vivo`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, estilo realista minimalista y de alta gama, el sujeto principal es un bolso de mano para el trabajo, generar un video corto de 30 segundos demostrando la funcionalidad del bolso.

#### Prompt

```text
Formato vertical 9:16, estilo realista minimalista y de alta gama, el sujeto principal es un bolso de mano para el trabajo, generar un video corto de 30 segundos demostrando la funcionalidad del bolso.
Shot 1: Plano medio, el bolso de mano de pie frontalmente sobre una superficie de color liso, la cámara se acerca lentamente a la hebilla metálica, luz cenital suave, (música ligera y fresca comienza).
Shot 2: Primer plano, dos manos abren la cremallera desplegando el compartimento principal, cámara en picado mostrando los compartimentos internos y los espacios para tarjetas, <sonido de la cremallera deslizándose>.
Shot 3: Primer plano, la mano coloca sucesivamente una computadora portátil y una botella de agua, la cámara se desplaza horizontalmente de manera estable mostrando la capacidad.
Shot 4: Plano medio, una sola mano levanta el bolso mostrando la resistencia del asa y la rigidez de la estructura, cámara en contrapicado.
Shot 5: Plano medio, se cierra la hebilla y el bolso vuelve a su posición, la cámara se aleja lentamente para terminar, (la música concluye).
Restricciones: El color del bolso de mano, los herrajes y el corte deben ser consistentes durante todo el video; la superficie y la luz cenital deben estar bloqueadas; las acciones de apertura y cierre deben ser fluidas sin saltos.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales leves, no ser estatuas.
```

### No. 4: Joyería

- **Category:** `Comercio Electrónico con Venta en Vivo`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, estilo realista lujoso y refinado, el sujeto principal es un collar de diamantes, generar un video corto de 30 segundos mostrando la joyería.

#### Prompt

```text
Formato vertical 9:16, estilo realista lujoso y refinado, el sujeto principal es un collar de diamantes, generar un video corto de 30 segundos mostrando la joyería.
Shot 1: Primer plano macro, el collar colocado en una bandeja de terciopelo negro, la cámara se acerca lentamente al diamante principal, un foco de luz proyecta el fuego, (música de cuerdas elegante comienza) <ligero tintineo metálico>.
Shot 2: Primer plano, la cámara rodea medio círculo al diamante principal capturando los destellos de luz refractada desde múltiples ángulos, fondo oscurecido.
Shot 3: Plano medio-cercano, el collar puesto en el cuello de la modelo, la cámara sube y baja desde la clavícula hasta el colgante, luz suave para relleno facial.
Shot 4: Primer plano macro, cámara fija, el colgante se balancea ligeramente con la respiración centelleando.
Shot 5: Primer plano, la cámara se aleja lentamente enfocándose en el fuego del diamante para un plano final, (la música de cuerdas concluye).
Restricciones: El estilo del collar, el tallado del diamante y el engaste deben ser consistentes durante todo el video; el fondo de terciopelo negro y la iluminación con focos deben estar bloqueados; el tono de piel del cuello en la parte de uso debe coincidir con el del segmento en estudio.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales leves, no ser estatuas.
```

### No. 5: Demostración de electrodoméstico (licuadora de alta velocidad)

- **Category:** `Comercio Electrónico con Venta en Vivo`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, estilo realista de vida en cocina brillante, el sujeto principal es una licuadora de alta velocidad, generar un video corto de 30 segundos demostrando el electrodoméstico.

#### Prompt

```text
Formato vertical 9:16, estilo realista de vida en cocina brillante, el sujeto principal es una licuadora de alta velocidad, generar un video corto de 30 segundos demostrando el electrodoméstico.
Shot 1: Plano medio, la licuadora colocada sobre una encimera de color claro, la cámara se acerca lentamente al panel de control, luz de la mañana entrando en diagonal, (música ligera de vida alegre comienza).
Shot 2: Primer plano, la mano vierte fruta y hielo en la jarra, cámara en picado sobre la boca de la jarra, <sonido de los ingredientes cayendo>.
Shot 3: Primer plano, se presiona el botón de inicio y las cuchillas giran a alta velocidad triturando, cámara fija cerca de la pared de la jarra, <rugido de la licuadora>.
Shot 4: Plano medio, se vierte el batido suave en un vaso de vidrio, la cámara se desplaza horizontalmente de manera estable siguiendo el flujo del líquido.
Shot 5: Plano medio-cercano, el batido terminado y el cuerpo de la licuadora en el mismo encuadre, la cámara se aleja lentamente para terminar, (la música concluye).
Restricciones: El color del cuerpo de la licuadora, el panel y la jarra deben ser consistentes durante todo el video; la encimera de la cocina y la luz de la mañana deben estar bloqueadas; la textura del batido debe ser coherente de principio a fin.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales leves, no ser estatuas.
```

### No. 6: Artículos para bebés y maternidad

- **Category:** `Comercio Electrónico con Venta en Vivo`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, estilo realista de vida tierno y reconfortante, el sujeto principal es un biberón térmico para bebés, generar un video corto de 30 segundos mostrando el artículo para bebés.

#### Prompt

```text
Formato vertical 9:16, estilo realista de vida tierno y reconfortante, el sujeto principal es un biberón térmico para bebés, generar un video corto de 30 segundos mostrando el artículo para bebés.
Shot 1: Plano medio-cercano, el biberón de pie sobre una almohadilla suave en la habitación del bebé, la cámara se acerca lentamente a la tetina anticólicos, luz cálida y suave, (música de piano tierna comienza).
Shot 2: Primer plano, la mano desenrosca la tapa mostrando el diseño de boca ancha y las marcas de medición, la cámara se desplaza horizontalmente de manera estable, <sonido suave de la tapa girando>.
Shot 3: Primer plano, después de verter agua tibia, la mano toca el cuerpo del biberón para sentir la temperatura constante, cámara fija.
Shot 4: Plano medio, la madre sostiene el biberón agitándolo suavemente para probar la temperatura antes de alimentar, la cámara sube y baja lentamente, <sonido del agua balanceándose suavemente>.
Shot 5: Plano medio-cercano, el biberón y un peluche suave en el mismo encuadre para un plano final, la cámara se aleja lentamente para terminar, (la música concluye).
Restricciones: El color del biberón, las marcas de medición en el cuerpo y el estilo de la tetina deben ser consistentes durante todo el video; la luz cálida de la habitación del bebé y el fondo de la almohadilla deben estar bloqueados; la atmósfera visual debe mantenerse suave y cálida.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales leves, no ser estatuas.
```

### No. 7: Caja de regalo de alimentos

- **Category:** `Comercio Electrónico con Venta en Vivo`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Vertical 9:16, estilo festivo realista y refinado, el sujeto principal es una caja de regalo de pasteles chinos, genera un video corto de 30 segundos mostrando la caja de regalo de alimentos.

#### Prompt

```text
Vertical 9:16, estilo festivo realista y refinado, el sujeto principal es una caja de regalo de pasteles chinos, genera un video corto de 30 segundos mostrando la caja de regalo de alimentos.
Shot 1: Plano medio, una caja de regalo roja y dorada reposa sobre una mesa de madera, la cámara se acerca lentamente a la portada dorada caliente, luz lateral cálida, (música festiva de estilo chino comienza).
Shot 2: Primer plano, dos manos abren lentamente la tapa de la caja revelando los pasteles en compartimentos, la cámara toma una vista cenital completa, <sonido de apertura de la tapa>.
Shot 3: Primer plano macro, la cámara se desplaza horizontalmente de manera estable barriendo la textura de la masa hojaldrada y el relleno de cada pastel.
Shot 4: Plano medio-cercano, una mano toma un pastel para mostrar sus capas, la cámara gira lentamente alrededor.
Shot 5: Plano medio, la caja de regalo se cierra y se ata con una cinta, la cámara se aleja lentamente para terminar, (la música concluye).
Restricciones: La combinación de colores de la caja de regalo, el patrón dorado caliente y los tipos de pasteles deben ser consistentes en todo el video; la mesa de madera y la iluminación cálida están bloqueadas; la disposición de los pasteles debe ser coherente de principio a fin.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

### No. 8: Accesorio digital (estilo flash promocional, con subtítulos)

- **Category:** `Comercio Electrónico con Venta en Vivo`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Vertical 9:16, estilo promocional flash realista de alto contraste, el sujeto principal es un par de auriculares inalámbricos con cancelación de ruido, genera un video corto promocional flash de 30 segundos.

#### Prompt

```text
Vertical 9:16, estilo promocional flash realista de alto contraste, el sujeto principal es un par de auriculares inalámbricos con cancelación de ruido, genera un video corto promocional flash de 30 segundos.
Shot 1: Primer plano, los auriculares flotan y giran sobre un fondo de neón degradado, la cámara se acerca rápidamente, (fuertes golpes de batería electrónica comienzan) <sonido de encendido>, 【Descuento directo en toda la tienda ¥300】.
Shot 2: Primer plano macro, la cámara corta a la bisagra de la almohadilla y los contactos de carga, una luz dura barre los reflejos.
Shot 3: Plano medio, la cámara corta a una persona usando los auriculares asintiendo al ritmo de la batería, luces parpadeantes, 【Cancelación activa de ruido 40 horas de autonomía】.
Shot 4: Primer plano, la cámara se desplaza rápidamente horizontalmente pasando por la apertura y cierre del estuche de carga, <sonido de cierre magnético>, 【Compra relámpago por tiempo limitado primeros 100】.
Shot 5: Plano medio-cercano, los auriculares y la etiqueta de precio en el mismo cuadro, la cámara se aleja rápidamente y se congela, (los golpes de batería concluyen) 【Compra ahora】.
Restricciones: La combinación de colores y la forma de los auriculares deben ser consistentes en todo el video; la paleta de colores del fondo de neón está bloqueada; los subtítulos aparecen con un ritmo uniforme al cambiar de toma, manteniendo una sensación promocional de alto contraste.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

<a id="category-10"></a>

### Gastronomía y Restauración (8)

### No. 1: Olla caliente servida en la mesa

- **Category:** `Gastronomía y Restauración`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Vertical 9:16, estilo realista apetitoso y humeante, el sujeto principal es una olla caliente de dos sabores, genera un video corto de 30 segundos de la olla caliente servida.

#### Prompt

```text
Vertical 9:16, estilo realista apetitoso y humeante, el sujeto principal es una olla caliente de dos sabores, genera un video corto de 30 segundos de la olla caliente servida.
Shot 1: Plano medio, la olla de dos sabores se coloca en una mesa de madera con el caldo rojo burbujeando, la cámara se acerca lentamente a las gotas de aceite hirviendo, luz cálida amarilla de restaurante, (música animada de mercado comienza) <sonido de burbujeo del caldo>.
Shot 2: Primer plano, una mano coloca tripa de res en el caldo rojo siete veces arriba y ocho abajo, la cámara toma una vista cenital del vapor ascendente, <sonido de escaldado>.
Shot 3: Primer plano macro, la cámara se desplaza horizontalmente de manera estable barriendo la pasta de camarones, la carne de res recién cortada y el plato de verduras.
Shot 4: Plano medio-cercano, los palillos levantan una rebanada de carne cubierta de aceite rojo, la cámara la sigue hacia arriba, <sonido de goteo de aceite>.
Shot 5: Plano medio, varias personas levantan sus palillos en el mismo cuadro creando un ambiente completo, la cámara se aleja lentamente para terminar, (la música concluye).
Restricciones: El estilo de la olla de dos sabores, el color del caldo y la presentación de los platos deben ser consistentes en todo el video; la luz cálida del restaurante y la mesa de madera están bloqueadas; el vapor y el estado de ebullición deben continuar a lo largo del video.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

### No. 2: Arte de latte

- **Category:** `Gastronomía y Restauración`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Vertical 9:16, estilo realista tranquilo y artístico, el sujeto principal es un café con leche con arte de latte hecho a mano, genera un video corto de 30 segundos del arte de latte.

#### Prompt

```text
Vertical 9:16, estilo realista tranquilo y artístico, el sujeto principal es un café con leche con arte de latte hecho a mano, genera un video corto de 30 segundos del arte de latte.
Shot 1: Primer plano, el espresso se extrae y cae en la taza, la cámara se acerca lentamente a las vetas de la crema, luz natural junto a la ventana, (música de jazz relajante comienza) <sonido de goteo de la extracción>.
Shot 2: Plano medio-cercano, una mano sostiene la jarra de leche y comienza a verter la espuma, la cámara fija a nivel de los ojos mira la superficie del líquido, <sonido de inyección de espuma de leche>.
Shot 3: Primer plano macro, la cámara toma una vista cenital de la espuma de leche extendiéndose sobre la superficie del café formando un patrón de hoja.
Shot 4: Primer plano, la muñeca se mueve ligeramente para terminar dibujando las venas de la hoja, la cámara gira lentamente alrededor del borde de la taza.
Shot 5: Plano medio, el café con leche terminado se levanta y se coloca junto a la ventana, la cámara se aleja lentamente para terminar, (la música concluye).
Restricciones: El patrón del arte de latte debe ser coherente desde el vertido hasta la formación; la luz natural junto a la ventana y la mesa están bloqueadas; la textura de la espuma de leche debe ser clara y sin interrupciones.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

### No. 3: Postre cortado con relleno fluido (pastel de chocolate fundente)

- **Category:** `Gastronomía y Restauración`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Vertical 9:16, estilo realista rico y tentador, el sujeto principal es un pastel de chocolate fundente, genera un video corto de 30 segundos del postre con relleno fluido.

#### Prompt

```text
Vertical 9:16, estilo realista rico y tentador, el sujeto principal es un pastel de chocolate fundente, genera un video corto de 30 segundos del postre con relleno fluido.
Shot 1: Plano medio-cercano, el pastel fundente servido en un plato blanco de porcelana espolvoreado con azúcar en polvo, la cámara se acerca lentamente, luz cálida focalizada, (música romántica suave comienza).
Shot 2: Primer plano, un tenedor presiona ligeramente la superficie del pastel creando una grieta, la cámara fija cerca, <sonido de crujido ligero de la corteza>.
Shot 3: Primer plano macro, el momento en que el cuchillo y el tenedor cortan el pastel y el relleno fluido de chocolate comienza a fluir lentamente, la cámara toma una vista cenital del momento culminante, <sonido de flujo de salsa espesa>.
Shot 4: Primer plano, un tenedor levanta un trozo con hilos del relleno fluido, la cámara se mueve lentamente hacia arriba y abajo siguiendo los hilos.
Shot 5: Plano medio, el pastel de relleno fluido y un helado en el mismo cuadro, la cámara se aleja lentamente para terminar, (la música concluye).
Restricciones: El color y la textura de la corteza del pastel y del relleno fluido deben ser consistentes en todo el video; el plato blanco de porcelana y la luz cálida focalizada están bloqueadas; la salida del relleno fluido es el "money shot" central y debe destacarse claramente.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

### No. 4: Asado a la parrilla

- **Category:** `Gastronomía y Restauración`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Horizontal 16:9, estilo realista rústico y lleno de humo, el sujeto principal son brochetas de carne asadas al carbón, genera un video corto de 30 segundos del asado a la parrilla.

#### Prompt

```text
Horizontal 16:9, estilo realista rústico y lleno de humo, el sujeto principal son brochetas de carne asadas al carbón, genera un video corto de 30 segundos del asado a la parrilla.
Shot 1: Primer plano, las brochetas de carne sobre la parrilla de carbón con grasa goteando y llamas, la cámara se acerca lentamente, luz cálida roja del carbón, (música animada de ambiente de asado comienza) <sonido chisporroteante del carbón>.
Shot 2: Primer plano macro, la cámara se desplaza horizontalmente de manera estable barriendo la corteza caramelizada de las brochetas y las especias de comino y chino espolvoreadas.
Shot 3: Plano medio, una mano voltea las brochetas levantando humo y llamas, la cámara sigue el movimiento de la mano, <sonido de chisporroteo al voltear>.
Shot 4: Primer plano, un pincel para salsa barre las brochetas y la salsa se impregna, la cámara fija cerca.
Shot 5: Plano medio-cercano, las brochetas asadas se colocan en un plato y se levantan, la cámara se aleja lentamente para terminar, (la música concluye).
Restricciones: El tipo de brochetas y el grado de dorado deben ser coherentes de principio a fin; el carbón y la luz cálida roja están bloqueadas; el humo y las llamas deben estar presentes a lo largo del video para crear un ambiente lleno de humo.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

### No. 5: Presentación de comida japonesa

- **Category:** `Gastronomía y Restauración`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Vertical 9:16, estilo realista minimalista zen, el sujeto principal es un plato combinado de sashimi, genera un corto de 30 segundos sobre la presentación de comida japonesa.

#### Prompt

```text
Vertical 9:16, estilo realista minimalista zen, el sujeto principal es un plato combinado de sashimi, genera un corto de 30 segundos sobre la presentación de comida japonesa.
Shot 1: Plano medio, un plato largo de piedra negra sobre una mesa de madera natural, la cámara se acerca lentamente, luz cenital fría, (música de guzheng fría y clara comienza).
Shot 2: Primer plano, una mano usa pinzas para colocar con precisión sashimi de atún y hojas de shiso, composición en picado de la cámara, <sonido suave al colocar los ingredientes>.
Shot 3: Primer plano macro, la cámara se desplaza horizontalmente con suavidad sobre la textura grasa del salmón y el brillo de los granos de hielo.
Shot 4: Plano medio cercano, se vierte salsa de soja y se adorna con wasabi y pétalos, la cámara rodea lentamente el producto terminado.
Shot 5: Plano general, el plato combinado de sashimi completo se congela en el centro, la cámara se aleja lentamente para terminar, (la música se desvanece).
Restricciones: Los tipos de sashimi, el grosor del corte y la posición en el plato deben ser consistentes durante todo el video; el plato de piedra negra y la luz cenital fría están fijos; la composición debe mantener el minimalismo y el espacio en blanco.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales y sutiles, no como estatuas.
```

### No. 6: Preparación de té con leche y perlas

- **Category:** `Gastronomía y Restauración`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Vertical 9:16, estilo realista fresco y vibrante, el sujeto principal es una taza de té con leche y perlas de tapioca hechas a mano, genera un corto de 30 segundos sobre la preparación de té con leche.

#### Prompt

```text
Vertical 9:16, estilo realista fresco y vibrante, el sujeto principal es una taza de té con leche y perlas de tapioca hechas a mano, genera un corto de 30 segundos sobre la preparación de té con leche.
Shot 1: Primer plano, perlas de tapioca de azúcar moreno cocidas se vierten en el fondo del vaso cubriendo las paredes, la cámara se acerca lentamente, luz brillante de barra, (música pop ligera comienza) <sonido de las perlas cayendo al vaso>.
Shot 2: Plano medio cercano, una mano sostiene una jarra de leche vertiendo té recién infusionado y leche fresca, cámara fija a nivel de los ojos mostrando las capas, <sonido de vertido>.
Shot 3: Primer plano macro, la cámara en picado captura los cubitos de hielo al caer agitando la mezcla de té y leche, <sonido de choque de hielo>.
Shot 4: Primer plano, una selladora presiona la tapa del vaso y se inserta una pajita, la cámara sigue la acción de insertar la pajita, <sonido de perforar la tapa>.
Shot 5: Plano medio, una mano levanta y agita suavemente el té con leche terminado mostrando las perlas revolviéndose, la cámara se aleja lentamente para terminar, (la música se desvanece).
Restricciones: Las capas del té con leche y el color de las perlas deben ser consistentes durante todo el video; la luz brillante de la barra y el fondo están fijos; los pasos de preparación deben ser secuenciales y coherentes sin saltos.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales y sutiles, no como estatuas.
```

### No. 7: Estiramiento de fideos a mano

- **Category:** `Gastronomía y Restauración`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Horizontal 16:9, estilo realista artesanal, el sujeto principal es la elaboración de fideos estirados a mano, genera un corto de 30 segundos sobre fideos estirados.

#### Prompt

```text
Horizontal 16:9, estilo realista artesanal, el sujeto principal es la elaboración de fideos estirados a mano, genera un corto de 30 segundos sobre fideos estirados.
Shot 1: Plano medio, la masa amasada reposa sobre la mesa de trabajo, las manos la presionan para que descanse, la cámara se acerca lentamente, luz cálida de cocina, (música folclórica animada comienza) <sonido de amasar>.
Shot 2: Primer plano, las manos estiran la masa, la doblan repetidamente y la golpean contra la mesa, la cámara sigue el arco del movimiento de las manos, <sonido de estirar y golpear la masa contra la mesa>.
Shot 3: Plano medio cercano, los fideos se estiran cada vez más finos hasta convertirse en hebras y se sumergen en agua hirviendo, la cámara en picado captura el vapor burbujeante, <sonido de echar a la olla hirviendo>.
Shot 4: Primer plano, se sacan los fideos y se colocan en un cuenco grande, se vierte caldo por encima, la cámara se desplaza horizontalmente con suavidad mostrando el caldo.
Shot 5: Plano medio, se esparce cebollino y se coloca carne de res para completar el plato, la cámara se aleja lentamente para terminar, (la música se desvanece).
Restricciones: El grosor de los fideos y los ingredientes finales deben ser coherentes de principio a fin; la luz cálida de la cocina y la mesa de trabajo están fijos; las acciones de estirar deben ser fluidas para reflejar el carácter artesanal.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales y sutiles, no como estatuas.
```

### No. 8: Escena de desayuno (toma continua)

- **Category:** `Gastronomía y Restauración`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Vertical 9:16, estilo realista de vida cálido y reconfortante, el sujeto principal es un desayuno chino, genera un corto de 30 segundos de una escena de desayuno en una toma continua.

#### Prompt

```text
Vertical 9:16, estilo realista de vida cálido y reconfortante, el sujeto principal es un desayuno chino, genera un corto de 30 segundos de una escena de desayuno en una toma continua.
Shot 1: Seguimiento en una toma continua, la luz matutina se filtra a través de las cortinas sobre la mesa, la cámara se acerca lentamente a los bollos al vapor humeantes, (suave música de piano matutina comienza) <sonido de destapar la vaporera>.
Shot 2: El mismo plano largo se desplaza horizontalmente con suavidad, deslizándose sobre el huevo frito dorado, los youtiao y la leche de soja, el vapor y los reflejos de luz fluyen.
Shot 3: El mismo plano largo asciende y desciende lentamente, una mano toma un bollo al vapor, lo sumerge en vinagre y lo levanta, <sonido de goteo del caldo>.
Shot 4: El mismo plano largo rodea medio círculo, pasando por las páginas de un libro abierto junto a la mesa y una taza de café humeante.
Shot 5: El mismo plano largo se aleja lentamente, se congela en una vista panorámica del acogedor desayuno, (la música se desvanece).
Restricciones: Mantener un único movimiento de cámara continuo e ininterrumpido sin cortes durante todo el video; la presentación de la comida y el tono de la luz matutina deben ser consistentes; el movimiento de cámara debe ser suave y conectado para reflejar la calidad de la toma continua.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales y sutiles, no como estatuas.
```

<a id="category-11"></a>

### Belleza y Moda (6)

### No. 1: Prueba de color de lápiz labial

- **Category:** `Belleza y Moda`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

El sujeto principal es el lápiz labial de la Imagen 1 (el color de la barra y el logo del tubo deben coincidir con la Imagen 1), vertical 9:16, alta saturación, calidad de maquillaje, genera un corto de 30 segundos de prueba de color.

#### Prompt

```text
El sujeto principal es el lápiz labial de la Imagen 1 (el color de la barra y el logo del tubo deben coincidir con la Imagen 1), vertical 9:16, alta saturación, calidad de maquillaje, genera un corto de 30 segundos de prueba de color.
Shot 1: Primer plano extremo, la barra del lápiz labial @Image 1 se desenrosca lentamente, el brillo aterciopelado fluye, la cámara se acerca lentamente, (música electrónica nítida comienza) <sonido suave de desenroscar la tapa>.
Shot 2: Primer plano, la cámara se desplaza horizontalmente con suavidad sobre los labios, la barra traza una línea sobre los labios dejando un color intenso.
Shot 3: Plano medio cercano, picado de la modelo sonriendo con los labios fruncidos, el color labial se muestra bajo una luz suave, 【Color del día · Rojo intenso】.
Shot 4: Primer plano, la cámara rodea el perfil de la modelo, el brillo de los labios fluye al girar la cabeza.
Shot 5: Plano medio, la modelo sostiene el lápiz labial @Image 1 y se congela frente al espejo, la cámara se aleja lentamente, (la música se desvanece).
Restricciones: El color de la barra y el logo del tubo deben coincidir con la Imagen 1 sin cambios; el color de los labios debe coincidir con el color de la barra.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales y sutiles, no como estatuas.
```

### No. 2: Aplicación de base de maquillaje

- **Category:** `Belleza y Moda`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

El sujeto principal es el frasco de base de maquillaje de la Imagen 1 (el frasco y el cuentagotas deben coincidir con la Imagen 1), vertical 9:16, sensación de maquillaje limpia y translúcida, genera un corto de 30 segundos sobre la aplicación de maquillaje.

#### Prompt

```text
El sujeto principal es el frasco de base de maquillaje de la Imagen 1 (el frasco y el cuentagotas deben coincidir con la Imagen 1), vertical 9:16, sensación de maquillaje limpia y translúcida, genera un corto de 30 segundos sobre la aplicación de maquillaje.
Shot 1: Primer plano extremo, una gota de base de maquillaje @Image 1 cae del cuentagotas al dorso de la mano, la textura se extiende, la cámara se acerca lentamente, <sonido de la gota cayendo>.
Shot 2: Primer plano, la cámara se desplaza horizontalmente con suavidad, una esponja de maquillaje presiona y difumina sobre la mejilla, la textura de la piel se uniformiza gradualmente.
Shot 3: Plano medio cercano, seguimiento de la modelo girando la cabeza, la mejilla muestra un brillo impecable bajo luz natural.
Shot 4: Primer plano, picado de la modelo con los ojos cerrados aplicándose maquillaje, las pestañas proyectan sombras suaves, (suave música de piano).
Shot 5: Plano medio, la modelo sostiene el frasco de base de maquillaje @Image 1 y se congela sonriendo, la cámara se aleja lentamente, 【Sensación desnuda e impecable】.
Restricciones: El frasco y el cuentagotas deben coincidir con la Imagen 1; el maquillaje debe ser realista sin exceso de suavizado plástico.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales y sutiles, no como estatuas.
```

### No. 3: Ambiente de Perfume

- **Category:** `Belleza y Moda`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Usando el frasco de perfume de la Imagen 1 (la forma del frasco y el grabado deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, atmósfera de luz y sombra retro francesa, generar un corto de ambiente de 30 segundos.

#### Prompt

```text
Usando el frasco de perfume de la Imagen 1 (la forma del frasco y el grabado deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, atmósfera de luz y sombra retro francesa, generar un corto de ambiente de 30 segundos.
Shot 1: Primer plano extremo, el frasco de perfume @Image 1 está sobre un alféizar de piedra junto a la ventana, la luz matutina atraviesa el frasco creando destellos, la cámara se acerca lentamente, (comienza música de cuerdas ambiental).
Shot 2: Plano medio, la cámara rodea lentamente el frasco, las facetas de vidrio reflejan luces cálidas cambiantes.
Shot 3: Primer plano, toma baja del instante de la pulverización, las gotitas de rocío suspendidas a contraluz como polvo dorado, <sonido ligero del pulverizador>.
Shot 4: Plano medio cercano, seguimiento de la niebla flotando hacia una cortina de gasa, la sombra de la cortina se mece suavemente con el viento.
Shot 5: Plano medio, el frasco de perfume @Image 1 vuelve a posarse en el alféizar de piedra en posición fija, la cámara se aleja lentamente, (la música de cuerdas se desvanece).
Restricciones: La forma del frasco y el grabado en el cuerpo deben coincidir con la Imagen 1; la atmósfera debe estar bloqueada en tonos cálidos retro franceses, no desviarse a colores fríos.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimiento natural leve, no ser estatuas.
```

### No. 4: Caída de Esencia para el Cuidado de la Piel

- **Category:** `Belleza y Moda`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Usando el frasco de esencia de la Imagen 1 (el cuerpo del frasco y las marcas del cuentagotas deben coincidir con la Imagen 1) como sujeto principal, formato vertical 9:16, textura cristalina y translúcida de alta hidratación, generar un corto de textura de 30 segundos.

#### Prompt

```text
Usando el frasco de esencia de la Imagen 1 (el cuerpo del frasco y las marcas del cuentagotas deben coincidir con la Imagen 1) como sujeto principal, formato vertical 9:16, textura cristalina y translúcida de alta hidratación, generar un corto de textura de 30 segundos.
Shot 1: Primer plano extremo, el cuentagotas suspendido en el aire, una gota de esencia @Image 1 a punto de caer, cámara en posición fija, <sonido de burbujas sutiles>.
Shot 2: Primer plano extremo, la esencia cae y golpea la superficie del agua, ondas de expansión en cámara lenta, la cámara se acerca lentamente, (toques musicales de gotas de agua).
Shot 3: Primer plano, la cámara se desplaza horizontalmente con suavidad, la esencia forma un hilo cristalino entre los dedos.
Shot 4: Plano medio cercano, toma cenital de la esencia aplicada en el dorso de la mano, el brillo se extiende como un espejo.
Shot 5: Plano medio, el frasco de esencia @Image 1 posado sobre un fondo de reflejos acuáticos en posición fija, la cámara se eleva lentamente, 【24 horas de hidratación bloqueada】.
Restricciones: El cuerpo del frasco y las marcas del cuentagotas deben coincidir con la Imagen 1; la textura debe ser transparente, brillante y capaz de formar hilos, no turbia.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimiento natural leve, no ser estatuas.
```

### No. 5: Street Style

- **Category:** `Belleza y Moda`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Usando el estilo de la modelo de la Imagen 1 (la ropa y los accesorios deben coincidir con la Imagen 1) como sujeto principal, formato vertical 9:16, sensación urbana de grano de película, generar un corto de street style de 30 segundos.

#### Prompt

```text
Usando el estilo de la modelo de la Imagen 1 (la ropa y los accesorios deben coincidir con la Imagen 1) como sujeto principal, formato vertical 9:16, sensación urbana de grano de película, generar un corto de street style de 30 segundos.
Shot 1: Plano medio, la modelo @Image 1 empuja una puerta de vidrio y sale a la calle, el viento levanta su ropa, la cámara la sigue, (comienza ritmo disco retro).
Shot 2: Plano general, la cámara se desplaza horizontalmente con suavidad siguiendo a la modelo pasando frente a escaparates de neón, los reflejos fluyen.
Shot 3: Plano medio cercano, toma baja de la modelo volviendo la cabeza y quitándose las gafas de sol, la luz a contraluz perfila un borde dorado en su cabello.
Shot 4: Primer plano, la cámara se acerca lentamente a los detalles de los accesorios, los reflejos metálicos destellan.
Shot 5: Plano general, la modelo @Image 1 se detiene en medio de la calle con los brazos abiertos en posición fija, la cámara se aleja y se eleva lentamente, 【CITY WALK】 (la música concluye).
Restricciones: La ropa y los accesorios deben coincidir con la Imagen 1 sin modificar el diseño; el grano de película y la paleta de colores de neón urbano deben estar bloqueados durante toda la secuencia.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimiento natural leve, no ser estatuas.
```

### No. 6: Exhibición de Peinado

- **Category:** `Belleza y Moda`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Usando el peinado de la modelo de la Imagen 1 (el color y el estilo del cabello deben coincidir con la Imagen 1) como sujeto principal, formato vertical 9:16, calidad de luz suave nivel publicidad de salón, generar un corto de peinado de 30 segundos.

#### Prompt

```text
Usando el peinado de la modelo de la Imagen 1 (el color y el estilo del cabello deben coincidir con la Imagen 1) como sujeto principal, formato vertical 9:16, calidad de luz suave nivel publicidad de salón, generar un corto de peinado de 30 segundos.
Shot 1: Primer plano, la modelo @Image 1 baja la cabeza preparándose, mechones de cabello caen cubriendo su rostro, cámara en posición fija, (preludio de música rítmica).
Shot 2: Plano medio cercano, la modelo sacude bruscamente la cabeza, el cabello se eleva en un arco en cámara lenta, la cámara se aleja lentamente, <sonido del viento al sacudir el cabello>.
Shot 3: Primer plano, la cámara rodea la cabeza, la luz y la sombra barren los reflejos suaves del cabello.
Shot 4: Plano medio, seguimiento de los dedos de la modelo pasando entre el cabello, las capas del cabello caen claramente definidas.
Shot 5: Plano medio cercano, la modelo @Image 1 se da la vuelta y mira fijamente en posición fija, el peinado está fijo y voluminoso, la cámara se acerca lentamente, 【Brillo como un espejo】.
Restricciones: El color del cabello y el contorno del estilo deben coincidir con la Imagen 1; el movimiento del cabello debe ser natural y suave, sin clipping o roturas.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimiento natural leve, no ser estatuas.
```

<a id="category-12"></a>

### Tecnología Digital (6)

### No. 1: Rotación de Producto - Teléfono

- **Category:** `Tecnología Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Usando el teléfono de la Imagen 1 (la carcasa y el logo deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, sensación tecnológica avanzada en tonos fríos, generar un corto de exhibición de producto de 30 segundos.

#### Prompt

```text
Usando el teléfono de la Imagen 1 (la carcasa y el logo deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, sensación tecnológica avanzada en tonos fríos, generar un corto de exhibición de producto de 30 segundos.
Shot 1: Primer plano extremo, el teléfono @Image 1 sobre una superficie oscura se enciende, un borde de luz fría lo perfila, la cámara se acerca lentamente, (comienza sonido electrónico de baja frecuencia).
Shot 2: Plano medio, la cámara rodea con suavidad mostrando la textura metálica de la parte trasera del teléfono @Image 1 y el módulo de la cámara.
Shot 3: Primer plano, la cámara se desplaza horizontalmente lentamente barriendo los detalles de los botones laterales y los puertos.
Shot 4: Plano medio cercano, toma baja del teléfono @Image 1 elevándose lentamente y flotando, la luz fría se extiende desde la base.
Shot 5: Plano medio, el teléfono @Image 1 flota y gira en posición fija, la cámara se aleja lentamente, (la música concluye).
Restricciones: La carcasa y el logo deben coincidir con la Imagen 1 sin modificar el diseño; no inventar contenido de la interfaz; la iluminación industrial de tonos fríos debe estar bloqueada durante toda la secuencia.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimiento natural leve, no ser estatuas.
```

### No. 2: Auriculares Emergiendo del Estuche de Carga

- **Category:** `Tecnología Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Usando el estuche de carga de auriculares de la Imagen 1 (la forma exterior y el logo deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, calidad minimalista de estudio puramente blanco, generar un corto de unboxing de 30 segundos.

#### Prompt

```text
Usando el estuche de carga de auriculares de la Imagen 1 (la forma exterior y el logo deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, calidad minimalista de estudio puramente blanco, generar un corto de unboxing de 30 segundos.
Shot 1: Primer plano extremo, el estuche de carga @Image 1 reposa sobre una superficie blanca pura, un dedo está a punto de tocar la tapa, cámara en posición fija, (sonido de notificación nítido).
Shot 2: Primer plano, la tapa se abre lentamente, el indicador LED se enciende, la cámara se acerca lentamente, <sonido del mecanismo de apertura/cierre>.
Shot 3: Plano medio cercano, los auriculares se elevan lentamente desde el interior del estuche flotando, la cámara sube y baja lentamente siguiéndolos.
Shot 4: Primer plano, la cámara rodea un solo auricular, mostrando el ángulo de inserción y los orificios del micrófono.
Shot 5: Plano medio, los auriculares y el estuche de carga @Image 1 colocados juntos en posición fija, la cámara se aleja lentamente, 【Sin costuras, contigo】.
Restricciones: La forma exterior y el logo deben coincidir con la Imagen 1 sin modificar la estructura; el fondo blanco puro y sin costuras debe estar bloqueado, sin añadir objetos extraños.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimiento natural leve, no ser estatuas.
```

### No. 3: Apertura y cierre del portátil

- **Category:** `Tecnología Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia la computadora portátil de la Imagen 1 (la carcasa y el logo deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, textura de luz fría metálica premium, generar un video de presentación de 30 segundos.

#### Prompt

```text
Tomando como referencia la computadora portátil de la Imagen 1 (la carcasa y el logo deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, textura de luz fría metálica premium, generar un video de presentación de 30 segundos.
Shot 1: Primer plano extremo, el portátil @Image 1 de lado con la tapa cerrada, una luz fría barre la bisagra de aluminio, la cámara se desplaza lentamente en horizontal, (sonido ambiental de baja frecuencia comienza).
Shot 2: Plano medio cercano, la bisagra de la pantalla se abre y cierra lentamente hasta quedar erguida, la pantalla se ilumina gradualmente, la cámara avanza lentamente, <sonido de amortiguación de la bisagra>.
Shot 3: Primer plano, vista cenital, la retroiluminación del teclado se enciende tecla por tecla, una onda de luz fluye.
Shot 4: Plano medio, la cámara rodea suavemente el cuerpo para mostrar el perfil ultrafino y los puertos.
Shot 5: Plano medio, el portátil @Image 1 flota congelado en una postura semiabierta, la cámara se aleja lentamente, (la música concluye).
Restricciones: El grosor de la carcasa y el logo deben coincidir con la Imagen 1; no inventar contenido específico de la interfaz de usuario de la pantalla; la luz fría metálica debe mantenerse durante todo el video.
Restricciones generales: Mantener sin subtítulos; no generar Logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimientos naturales y sutiles, no ser estatuas.
```

### No. 4: Interfaz del reloj inteligente

- **Category:** `Tecnología Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia el reloj inteligente de la Imagen 1 (la caja y la correa deben coincidir con la Imagen 1) como sujeto principal, formato vertical 9:16, sensación tecnológica vibrante y dinámica, generar un video funcional de 30 segundos.

#### Prompt

```text
Tomando como referencia el reloj inteligente de la Imagen 1 (la caja y la correa deben coincidir con la Imagen 1) como sujeto principal, formato vertical 9:16, sensación tecnológica vibrante y dinámica, generar un video funcional de 30 segundos.
Shot 1: Primer plano extremo, el reloj @Image 1 levanta la muñeca y la esfera se ilumina, se despliegan animaciones, la cámara avanza lentamente, (música electrónica vibrante comienza).
Shot 2: Primer plano, la cámara se desplaza lentamente en horizontal, la corona gira para cambiar las tarjetas de la esfera.
Shot 3: Plano medio cercano, seguimiento del movimiento de la muñeca, los anillos de datos deportivos saltan con el movimiento.
Shot 4: Primer plano, vista envolvente que muestra la textura lateral de la caja y el cierre de la correa.
Shot 5: Plano medio, el reloj @Image 1 se congela en la muñeca al levantarse, la cámara se aleja lentamente, 【Protección las 24 horas】.
Restricciones: La caja y la correa deben coincidir con la Imagen 1; las animaciones de la interfaz deben ser simples, no inventar detalles numéricos específicos.
Restricciones generales: Mantener sin subtítulos; no generar Logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimientos naturales y sutiles, no ser estatuas.
```

### No. 5: Vuelo del dron

- **Category:** `Tecnología Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia el dron de la Imagen 1 (el fuselaje y las hélices deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, sensación documental de grabación aérea expansiva, generar un video de vuelo de 30 segundos.

#### Prompt

```text
Tomando como referencia el dron de la Imagen 1 (el fuselaje y las hélices deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, sensación documental de grabación aérea expansiva, generar un video de vuelo de 30 segundos.
Shot 1: Plano medio cercano, el dron @Image 1 se eleva lentamente desde el césped, las hélices se desdibujan a alta velocidad, la cámara sube y baja lentamente siguiéndolo, <zumbido de las hélices> (música ambiental comienza).
Shot 2: Primer plano, la cámara rodea el fuselaje en vuelo estacionario, el cardán ajusta ligeramente la dirección del objetivo.
Shot 3: Plano general, seguimiento del dron deslizándose sobre la superficie del lago, su reflejo se desliza con él.
Shot 4: Plano general lejano, vista cenital del dron volando sobre la cresta de una montaña, la tierra se extiende debajo.
Shot 5: Plano medio, el dron @Image 1 se congela en vuelo estacionario al regresar suavemente, la cámara se aleja lentamente, (la música concluye).
Restricciones: La estructura del fuselaje y las hélices debe coincidir con la Imagen 1; la actitud de vuelo debe ser estable, acorde con la aerodinámica real, sin deriva ni vibraciones.
Restricciones generales: Mantener sin subtítulos; no generar Logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimientos naturales y sutiles, no ser estatuas.
```

### No. 6: Macro del chip (documental tecnológico)

- **Category:** `Tecnología Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia el chip de la Imagen 1 (el encapsulado y la serigrafía deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, textura macro de documental tecnológico fría y austera, generar un video macro de 30 segundos.

#### Prompt

```text
Tomando como referencia el chip de la Imagen 1 (el encapsulado y la serigrafía deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, textura macro de documental tecnológico fría y austera, generar un video macro de 30 segundos.
Shot 1: Primer plano macro extremo, el chip @Image 1 descansa sobre la placa de circuito, los pines dorados brillan con luz fría, la cámara avanza lentamente, (sonido industrial de baja frecuencia comienza).
Shot 2: Primer plano macro, la cámara se desplaza suavemente en horizontal barriendo la superficie del encapsulado, la serigrafía y los bordes de corte.
Shot 3: Primer plano macro, vista cenital de las soldaduras y las pistas de cobre, poca profundidad de campo con solo una línea enfocada.
Shot 4: Plano medio cercano, la cámara se aleja lentamente para revelar toda la matriz de placas de circuito, los LEDs parpadean.
Shot 5: Primer plano, el chip @Image 1 se congela en luz fría, la cámara lo rodea lentamente para finalizar, (la música se desvanece).
Restricciones: El modelo de encapsulado y la serigrafía deben coincidir con la Imagen 1 sin cambios; la profundidad de campo macro debe ser realista, no inventar estructuras de circuito inexistentes.
Restricciones generales: Mantener sin subtítulos; no generar Logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimientos naturales y sutiles, no ser estatuas.
```

<a id="category-13"></a>

### Automóviles (4)

### No. 1: Seguimiento nocturno

- **Category:** `Automóviles`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia el automóvil de la Imagen 1 (el modelo y la pintura deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, textura cinematográfica de paisaje nocturno ciberpunk, generar un video de seguimiento de 30 segundos.

#### Prompt

```text
Tomando como referencia el automóvil de la Imagen 1 (el modelo y la pintura deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, textura cinematográfica de paisaje nocturno ciberpunk, generar un video de seguimiento de 30 segundos.
Shot 1: Plano medio cercano, el coche @Image 1 detenido en una intersección de neón, las luces se encienden, la lluvia refleja los colores de la luz, la cámara avanza lentamente, (ritmo electrónico de graves comienza) <rugido suave del motor>.
Shot 2: Plano medio, seguimiento lateral del vehículo conduciendo por una larga calle de neón, bandas de luz fluyen sobre la pintura.
Shot 3: Primer plano, la cámara se desplaza suavemente en horizontal barriendo los faros delanteros y la luz fría de la parrilla.
Shot 4: Plano general, vista desde abajo del vehículo atravesando un túnel, las luces del techo pasan rápidamente en franjas.
Shot 5: Plano medio, el coche @Image 1 sale del túnel, frena y se congela, la cámara se aleja lentamente y se eleva, (el ritmo concluye).
Restricciones: El modelo y el color de la pintura deben coincidir con la Imagen 1 sin cambios; el ambiente de neón nocturno y los reflejos en el suelo mojado deben mantenerse durante todo el video.
Restricciones generales: Mantener sin subtítulos; no generar Logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimientos naturales y sutiles, no ser estatuas.
```

### No. 2: Cortes rápidos de detalles en primer plano

- **Category:** `Automóviles`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia el automóvil de la Imagen 1 (el modelo y la pintura deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, textura industrial de alto contraste y robusta, generar un video de detalles de 30 segundos.

#### Prompt

```text
Tomando como referencia el automóvil de la Imagen 1 (el modelo y la pintura deben coincidir con la Imagen 1) como sujeto principal, formato horizontal 16:9, textura industrial de alto contraste y robusta, generar un video de detalles de 30 segundos.
Shot 1: Primer plano extremo, los faros del coche @Image 1 se encienden, la línea de la ceja del faro, la luz fría perfila los bordes angulares, la cámara avanza lentamente, (redoble de tambores urgente comienza).
Shot 2: Primer plano, corte a la llanta, girando lentamente reflejando destellos de luz.
Shot 3: Primer plano, corte al emblema y la parrilla, un destello de luz metálica los barre.
Shot 4: Primer plano, corte a las líneas del escape y el alerón trasero, la cámara se desplaza suavemente en horizontal.
Shot 5: Plano medio, el coche @Image 1 se congela en un haz de luz, la cámara se aleja lentamente, (los redobles de tambor concluyen) 【Cada detalle es filo】.
Restricciones: El modelo y la pintura deben coincidir con la Imagen 1; cada corte rápido debe enfocarse en un solo componente sin repetición; la luz dura de alto contraste debe mantenerse durante todo el video.
Restricciones generales: Mantener sin subtítulos; no generar Logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben tener movimientos naturales y sutiles, no ser estatuas.
```

### No. 3: Escena todoterreno

- **Category:** `Automóviles`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Toma como sujeto principal el vehículo todoterreno de la Imagen 1 (el modelo y el color de la pintura deben coincidir con la Imagen 1), formato horizontal 16:9, sensación documental cruda y salvaje, genera un corto de 30 segundos sobre todoterreno.

#### Prompt

```text
Toma como sujeto principal el vehículo todoterreno de la Imagen 1 (el modelo y el color de la pintura deben coincidir con la Imagen 1), formato horizontal 16:9, sensación documental cruda y salvaje, genera un corto de 30 segundos sobre todoterreno.
Shot 1: Plano medio, el todoterreno @Image 1 sube por una duna levantando una nube de polvo, la cámara lo sigue, <sonido de neumáticos sobre la arena> (música de batería enérgica comienza).
Shot 2: Primer plano, toma baja de la rueda pasando sobre grava, salpicaduras de lodo y arena en la lente.
Shot 3: Plano general, seguimiento lateral suave y horizontal del vehículo cruzando un arroyo poco profundo, salpicaduras de agua.
Shot 4: Plano general extremo, toma cenital del todoterreno atravesando las huellas en terreno baldío, una larga estela de polvo.
Shot 5: Plano medio, el todoterreno @Image 1 llega a la cima de la cresta y se detiene en un encuadre fijo, la cámara se eleva y aleja lentamente, (la música de batería concluye).
Restricciones: El modelo y el color de la pintura deben coincidir con la Imagen 1; la dinámica todoterreno debe ajustarse a la física del terreno real, sin flotar, patinar o distorsión.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Las personas deben tener movimiento natural leve, no ser estatuas.
```

### No. 4: Exhibición del interior

- **Category:** `Automóviles`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Toma como sujeto principal el interior del automóvil de la Imagen 1 (los materiales y la combinación de colores deben coincidir con la Imagen 1), formato horizontal 16:9, sensación de luz cálida y premium en la cabina, genera un corto de 30 segundos del interior.

#### Prompt

```text
Toma como sujeto principal el interior del automóvil de la Imagen 1 (los materiales y la combinación de colores deben coincidir con la Imagen 1), formato horizontal 16:9, sensación de luz cálida y premium en la cabina, genera un corto de 30 segundos del interior.
Shot 1: Primer plano extremo, las costuras del asiento de cuero del interior @Image 1 se ondulan bajo una luz cálida, la cámara se desplaza lentamente en horizontal, (música ambiental relajada comienza).
Shot 2: Plano medio-cercano, la cámara se acerca lentamente a la pantalla central, las luces ambientales se encienden gradualmente.
Shot 3: Primer plano, rodeando el volante y las levas, el brillo fluye sobre las molduras metálicas.
Shot 4: Plano medio, toma cenital de la cabina completa, la luz del techo solar cae desde arriba.
Shot 5: Plano medio-cercano, la cámara se eleva lentamente y termina en un encuadre fijo de la cabina, luz cálida se difunde, (la música se desvanece) 【Cabina silenciosa】.
Restricciones: Los materiales y la combinación de colores deben coincidir con la Imagen 1 sin cambios; No inventar contenido UI específico para la pantalla central; La luz cálida de la cabina debe mantenerse durante todo el video.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Las personas deben tener movimiento natural leve, no ser estatuas.
```

<a id="category-14"></a>

### Inmobiliaria y Hogar (4)

### No. 1: Recorrido por el espacio de la sala de estar

- **Category:** `Inmobiliaria y Hogar`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, video promocional de calidad inmobiliaria, tono blanco cálido brillante y luminoso, genera un corto de 30 segundos de recorrido por la sala de estar.

#### Prompt

```text
Formato vertical 9:16, video promocional de calidad inmobiliaria, tono blanco cálido brillante y luminoso, genera un corto de 30 segundos de recorrido por la sala de estar.
Shot 1: Cámara fija, la luz matutina entra oblicuamente por la ventana de piso a techo a una sala de estar vacía, el polvo flota en los rayos de luz, (suave piano comienza).
Shot 2: Desplazamiento horizontal suave, la cámara pasa rozando el suelo de madera y el sofá de tela beige, la textura de los cojines es clara, <sonido ligero de pasos>.
Shot 3: Acercamiento lento, enfoque en una taza de café humeante y un libro abierto sobre la mesa de centro, la luz cálida se derrama, (cuerdas se superponen).
Shot 4: Movimiento vertical, el punto de vista se eleva lentamente desde el suelo, mostrando la transparencia del diseño entre la sala de estar y la cocina comedor abierta, 【Superficie construida 98㎡, ventilación cruzada norte-sur】.
Shot 5: Alejamiento lento, retrocede hasta la entrada y mira hacia la profundidad de toda la sala de estar, encuadre fijo en blanco cálido, (la música concluye).
Restricciones: Sin personas en pantalla durante todo el video; El estilo del mobiliario y la decoración debe ser uniforme, moderno minimalista con madera natural; La luz debe mantener la consistencia del blanco cálido matutino.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Las personas deben tener movimiento natural leve, no ser estatuas.
```

### No. 2: Detalles de la cocina

- **Category:** `Inmobiliaria y Hogar`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, anuncio de calidad de electrodomésticos de alta gama, combinación de gris metálico frío y madera cálida, genera un corto de 30 segundos de detalles de cocina.

#### Prompt

```text
Formato vertical 9:16, anuncio de calidad de electrodomésticos de alta gama, combinación de gris metálico frío y madera cálida, genera un corto de 30 segundos de detalles de cocina.
Shot 1: Primer plano, el agua fluye del grifo hacia el fregadero de acero inoxidable, salpicaduras de gotas de agua en cámara lenta, <sonido de agua corriendo>.
Shot 2: Desplazamiento horizontal suave, la cámara se desliza a lo largo de la encimera de cuarzo pasando por cuchillos, tabla de cortar y vegetales frescos, luz fría los realza, (ritmo alegre comienza).
Shot 3: Acercamiento lento, el cajón se abre automáticamente mostrando el almacenamiento compartimentado y las manijas mate, tonos de madera cálida, <sonido suave del riel del cajón>.
Shot 4: Toma cenital, la llama azul de la estufa de gas se enciende, el aceite salta en la sartén, el vapor se eleva, <clic de encendido><chisporroteo del aceite>.
Shot 5: Toma baja, el punto de vista mira desde la estufa hacia la campana extractora y la tira de luces empotradas en el techo, reflejos metálicos, 【Electrodomésticos de cocina integrados empotrados】, (la música concluye).
Restricciones: Sin personas en pantalla durante todo el video; La encimera debe permanecer siempre ordenada y sin desorden; La textura de los materiales metálicos y de madera debe ser consistente durante todo el video.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Las personas deben tener movimiento natural leve, no ser estatuas.
```

### No. 3: Vista aérea de la planta (ilustrativa)

- **Category:** `Inmobiliaria y Hogar`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato horizontal 16:9, estilo de visualización arquitectónica ilustrativa, modelo blanco limpio con luz natural suave, genera un corto de 30 segundos ilustrativo de vista aérea de la planta.

#### Prompt

```text
Formato horizontal 16:9, estilo de visualización arquitectónica ilustrativa, modelo blanco limpio con luz natural suave, genera un corto de 30 segundos ilustrativo de vista aérea de la planta.
Shot 1: Toma cenital, vista vertical desde arriba del plano completo del modelo blanco de la planta, líneas divisorias claras, (sonido electrónico minimalista comienza).
Shot 2: Acercamiento lento, la cámara desciende atravesando el 'techo desaparecido' hacia el área ilustrativa de la sala de estar, los muebles se presentan semitransparentes, <efecto de sonido de cambio de espacio>.
Shot 3: Envolvente, gira 360 grados alrededor del área ilustrativa del dormitorio principal, mostrando la ventana salediza y la circulación hacia el vestidor, la luz suave se intensifica gradualmente, (el ritmo se intensifica).
Shot 4: Desplazamiento horizontal suave, se desliza a lo largo del corredor ilustrativo hacia el dormitorio secundario y el baño, aparecen anotaciones, 【Tres dormitorios, dos salas, zonas activas y pasivas separadas】.
Shot 5: Movimiento vertical, el punto de vista se eleva de regreso a la vista aérea global y se superponen datos de área, encuadre fijo con luz natural, (la música concluye).
Restricciones: Todo el video es un modelo blanco ilustrativo, no una escena real, debe incluir el texto 'Ilustración solo como referencia'; La proporción y estructura de la planta deben ser consistentes durante todo el video; Sin muebles ni personas reales.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Las personas deben tener movimiento natural leve, no ser estatuas.
```

### No. 4: Ambiente del dormitorio

- **Category:** `Inmobiliaria y Hogar`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, anuncio de ambiente de vida lenta, tono suave con luz nocturna cálida anaranjada, genera un corto de 30 segundos del ambiente del dormitorio.

#### Prompt

```text
Formato vertical 9:16, anuncio de ambiente de vida lenta, tono suave con luz nocturna cálida anaranjada, genera un corto de 30 segundos del ambiente del dormitorio.
Shot 1: Cámara fija, la luz cálida de la lámpara de cabecera se enciende instantáneamente iluminando la ropa de cama de color liso y las cortinas entreabiertas, (música ambiental comienza).
Shot 2: Acercamiento lento, la cámara se acerca a la almohada pasando por los pliegues suaves de la manta y un libro abierto, la luz y la sombra se vuelven gradualmente más cálidas, <sonido de lluvia ligera afuera>.
Shot 3: Desplazamiento horizontal suave, se desliza a lo largo del pie de la cama pasando por las plantas y el difusor de aroma en la ventana salediza, el resplandor cálido anaranjado fluye, (toques ligeros de piano).
Shot 4: Movimiento vertical, el punto de vista se eleva lentamente para una vista cenital de toda la cama y la luz suave de la lámpara colgante, creando una sensación envolvente de sueño, 【El dormitorio tiene buena iluminación natural y ventilación】.
Shot 5: Alejamiento lento, retrocede hasta la puerta de la habitación y mira hacia el panorama completo del dormitorio bajo la luz cálida, encuadre fijo en tono suave, (la música concluye).
Restricciones: Sin personas en pantalla durante todo el video; La iluminación debe mantener el tono nocturno cálido anaranjado consistente; La ropa de cama y la decoración deben mantener un estilo sencillo y elegante uniforme.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Las personas deben tener movimiento natural leve, no ser estatuas.
```

<a id="category-15"></a>

### Presentación Personal / Avatar Digital (6)

### No. 1: Presentación de Conocimientos

- **Category:** `Presentación Personal / Avatar Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

La presentadora está vinculada a @Imagen 1 (maquillaje y peinado facial según la imagen correspondiente), formato vertical 9:16, estilo de estudio limpio de creador de contenido de conocimiento, iluminación suave y brillante. Generar un video corto de presentación de conocimientos de 30 segundos.

#### Prompt

```text
La presentadora está vinculada a @Imagen 1 (maquillaje y peinado facial según la imagen correspondiente), formato vertical 9:16, estilo de estudio limpio de creador de contenido de conocimiento, iluminación suave y brillante. Generar un video corto de presentación de conocimientos de 30 segundos.
Shot 1: Plano medio-corto, la presentadora @Imagen 1 mira directamente a la cámara, se inclina hacia adelante y plantea una pregunta, fondo de estantería con poca profundidad de campo, cámara fija, {¿Sabías que el 90% de las personas lo usa mal?}.
Shot 2: Acercamiento lento, la presentadora @Imagen 1 habla y levanta un dedo para enfatizar, mirada decidida, luz cálida para resaltar, (música de fondo alegre comienza).
Shot 3: Corte a, en el lado derecho de la pantalla aparece un gráfico con los puntos clave, la presentadora @Imagen 1 se gira y señala, desplazamiento horizontal suave, 【Punto uno dos tres】.
Shot 4: Plano medio-corto, la presentadora @Imagen 1 vuelve a una posición frontal, sonríe y resume, tono más lento, cámara fija, {Recuerda estos tres puntos y es suficiente}.
Shot 5: Alejamiento lento, la presentadora @Imagen 1 asiente para terminar y saluda con la mano, luz suave se congela, (la música concluye).
Restricciones: El rostro de la presentadora debe coincidir con la Imagen 1 de manera consistente; la sincronización labial debe alinearse estrictamente con el diálogo; el fondo del estudio debe permanecer fijo.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; el personaje debe tener movimientos naturales sutiles, no ser una estatua.
```

### No. 2: Noticiero

- **Category:** `Presentación Personal / Avatar Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

El presentador está vinculado a @Imagen 1 (maquillaje y peinado facial según la imagen correspondiente), formato horizontal 16:9, estudio de noticias autoritativo, tono profesional frío azul. Generar un video corto de noticiero de 30 segundos.

#### Prompt

```text
El presentador está vinculado a @Imagen 1 (maquillaje y peinado facial según la imagen correspondiente), formato horizontal 16:9, estudio de noticias autoritativo, tono profesional frío azul. Generar un video corto de noticiero de 30 segundos.
Shot 1: Plano medio, el presentador @Imagen 1 se sienta erguido, mira directamente a la cámara para comenzar, fondo de pantalla azul de estudio detrás, cámara fija, {Buenas noches espectadores, bienvenidos al informe de hoy}.
Shot 2: Acercamiento lento, el presentador @Imagen 1 con expresión seria presenta la introducción, ritmo de habla constante, luz fría azul, 【Noticias del día】.
Shot 3: Corte a, en la parte posterior derecha del presentador @Imagen 1 aparece una ventana con imágenes de noticias, desplazamiento horizontal suave, <sonido de aviso del estudio>.
Shot 4: Plano medio-corto, el presentador @Imagen 1 gira hacia otra cámara para continuar el informe, cambio de mirada natural, cámara fija, (música de fondo grave).
Shot 5: Alejamiento lento, el presentador @Imagen 1 junta las manos en señal de despedida, congelado en tono frío azul, {Gracias por vernos, hasta la próxima edición}.
Restricciones: El rostro del presentador debe coincidir con la Imagen 1 de manera consistente; la sincronización labial debe alinearse estrictamente con el diálogo; postura sentada erguida y profesional, fondo del estudio fijo.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; el personaje debe tener movimientos naturales sutiles, no ser una estatua.
```

### No. 3: Presentación de Venta

- **Category:** `Presentación Personal / Avatar Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

El presentador está vinculado a @Imagen 2 (maquillaje y peinado facial según la imagen correspondiente), formato vertical 9:16, estilo animado de ventas en vivo, iluminación brillante, alta saturación, tono cálido. Generar un video corto de presentación de ventas de 30 segundos.

#### Prompt

```text
El presentador está vinculado a @Imagen 2 (maquillaje y peinado facial según la imagen correspondiente), formato vertical 9:16, estilo animado de ventas en vivo, iluminación brillante, alta saturación, tono cálido. Generar un video corto de presentación de ventas de 30 segundos.
Shot 1: Plano medio-corto, el presentador @Imagen 2 levanta el producto con ambas manos acercándolo a la cámara y lo anuncia con entusiasmo, cámara fija, {¡Familia, miren aquí, el producto de hoy es increíble!}.
Shot 2: Acercamiento lento, el presentador @Imagen 2 señala las características del producto con el dedo, expresión exagerada y emocionada, luz cálida de alta saturación, <efecto de sonido de enlace activado>.
Shot 3: Corte a, en la esquina inferior izquierda de la pantalla aparece una etiqueta explosiva con el precio, el presentador @Imagen 2 aplaude para enfatizar, desplazamiento horizontal suave, 【Precio reducido por tiempo limitado solo 99】.
Shot 4: Plano medio, el presentador @Imagen 2 levanta el producto mostrando los detalles a izquierda y derecha, ritmo de habla acelerado, cámara fija, (música promocional enérgica).
Shot 5: Acercamiento lento, el presentador @Imagen 2 levanta el pulgar para presionar la compra y terminar, congelado en tono cálido, {¡Se acaba rápido, compren ahora!}.
Restricciones: El rostro del presentador debe coincidir con la Imagen 2 de manera consistente; la sincronización labial debe alinearse estrictamente con el diálogo; la apariencia del producto debe ser consistente; la exhibición de estantes de fondo fija.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; el personaje debe tener movimientos naturales sutiles, no ser una estatua.
```

### No. 4: Radio de Sentimientos Nocturna

- **Category:** `Presentación Personal / Avatar Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

El presentador está vinculado a @Imagen 3 (maquillaje y peinado facial según la imagen correspondiente), formato vertical 9:16, ambiente de radio nocturna, luz cálida anaranjada tenue, bajo contraste. Generar un video corto de radio de sentimientos de 30 segundos.

#### Prompt

```text
El presentador está vinculado a @Imagen 3 (maquillaje y peinado facial según la imagen correspondiente), formato vertical 9:16, ambiente de radio nocturna, luz cálida anaranjada tenue, bajo contraste. Generar un video corto de radio de sentimientos de 30 segundos.
Shot 1: Plano medio-corto, el presentador @Imagen 3 de lado al micrófono cierra los ojos y habla suavemente, luz lateral de lámpara cálida anaranjada, cámara fija, (suave piano comienza) {Es de noche, ¿cómo estás tú que aún no duermes?}.
Shot 2: Acercamiento lento, el presentador @Imagen 3 abre los ojos y mira al vacío con expresión tierna, brillo en los ojos, difusión de luz cálida, <sonido suave de lluvia nocturna afuera>.
Shot 3: Desplazamiento horizontal suave, la cámara pasa sobre los auriculares y la taza de té caliente en la mesa, el presentador @Imagen 3 entra en cuadro y susurra, (el piano se intensifica).
Shot 4: Primer plano, el presentador @Imagen 3 esboza una sonrisa y consuela suavemente, pestañas temblorosas, luz cálida anaranjada tenue, {Que seas tratado con amabilidad por este mundo}.
Shot 5: Alejamiento lento, el presentador @Imagen 3 se quita los auriculares, baja la cabeza y sonríe para terminar, congelado en luz tenue, (la música concluye).
Restricciones: El rostro del presentador debe coincidir con la Imagen 3 de manera consistente; la sincronización labial debe alinearse estrictamente con el diálogo; las emociones se externalizan con temblor de pestañas y brillo en los ojos, prohibida la actuación explícita tipo voz en off; el tono nocturno cálido anaranjado debe ser consistente.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; el personaje debe tener movimientos naturales sutiles, no ser una estatua.
```

### No. 5: Instructor de Enseñanza

- **Category:** `Presentación Personal / Avatar Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

El instructor está vinculado a @Imagen 1 (maquillaje y peinado facial según la imagen correspondiente), formato horizontal 16:9, aula en línea brillante y profesional, tono fresco de pizarra blanca. Generar un video corto de instructor de enseñanza de 30 segundos.

#### Prompt

```text
El instructor está vinculado a @Imagen 1 (maquillaje y peinado facial según la imagen correspondiente), formato horizontal 16:9, aula en línea brillante y profesional, tono fresco de pizarra blanca. Generar un video corto de instructor de enseñanza de 30 segundos.
Shot 1: Plano medio, el instructor @Imagen 1 de pie frente a la pizarra blanca se gira hacia la cámara para comenzar la lección, marcador en mano, cámara fija, {En esta lección solo explicaremos una fórmula central}.
Shot 2: Desplazamiento horizontal suave, el instructor @Imagen 1 camina y escribe palabras clave en la pizarra blanca, la cámara lo sigue, luz blanca brillante, <sonido de escritura con marcador>.
Shot 3: Corte a, el área de la pizarra se amplía y aparece la fórmula resaltada, el instructor @Imagen 1 de lado señala, acercamiento lento, 【Fórmula central】.
Shot 4: Plano medio-corto, el instructor @Imagen 1 vuelve a la cámara para explicar con un ejemplo, expresión animada, cámara fija, (música de fondo de aprendizaje alegre).
Shot 5: Alejamiento lento, el instructor @Imagen 1 extiende las manos, sonríe, concluye y asiente, congelado en luz blanca, {¿Entendieron? Hasta la próxima lección}.
Restricciones: El rostro del instructor debe coincidir con la Imagen 1 de manera consistente; la sincronización labial debe alinearse estrictamente con el diálogo; el contenido de la pizarra blanca debe ser coherente; el fondo del aula fijo.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; el personaje debe tener movimientos naturales sutiles, no ser una estatua.
```

### No. 6: Avatar Multilingüe (incluye idea de tarea de edición)

- **Category:** `Presentación Personal / Avatar Digital`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

El avatar digital está vinculado a @Imagen 1 (maquillaje y peinado facial según la imagen correspondiente), formato vertical 9:16, estilo de estudio unificado para marca transnacional, tono azul tecnológico simple. Generar un video corto de avatar multilingüe de 30 segundos.

#### Prompt

```text
El avatar digital está vinculado a @Imagen 1 (maquillaje y peinado facial según la imagen correspondiente), formato vertical 9:16, estilo de estudio unificado para marca transnacional, tono azul tecnológico simple. Generar un video corto de avatar multilingüe de 30 segundos.
Shot 1: Plano medio-corto, el avatar digital @Imagen 1 mira directamente a la cámara y saluda en chino para comenzar, fondo de pantalla azul tecnológico, cámara fija, {Hola a todos, bienvenidos a conocer nuestro producto}【Chino】.
Shot 2: Corte a, el mismo avatar digital @Imagen 1 cambia sin problemas a presentación en inglés, sincronización labial alineada con el inglés, acercamiento lento, {Hello everyone, welcome}【English】.
Shot 3: Corte a, el avatar digital @Imagen 1 cambia a saludo en japonés, expresión consistente, desplazamiento horizontal suave, {皆さんこんにちは}【日本語】.
Shot 4: Plano medio, el avatar digital @Imagen 1 abre los brazos en gesto de bienvenida, en el fondo aparecen flujos de subtítulos multilingües, cámara fija, (música de fondo con sensación tecnológica).
Shot 5: Alejamiento lento, el avatar digital @Imagen 1 sonríe, asiente y termina, congelado en tono azul, (la música concluye).
Restricciones: Idea de tarea de edición: Primero generar la toma maestra en chino, luego usar la instrucción de edición "mantener al personaje y el movimiento de cámara sin cambios, solo reemplazar el diálogo y la sincronización labial por el idioma objetivo" para derivar los avatares en inglés/japonés, asegurando que el rostro @Imagen 1, el ángulo de cámara, el fondo y la vestimenta sean completamente consistentes; la sincronización labial de cada idioma debe alinearse estrictamente con el diálogo correspondiente; prohibido que los avatares muestren desviación facial.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; el personaje debe tener movimientos naturales sutiles, no ser una estatua.
```

<a id="category-16"></a>

### Miniserie / Narrativa Emocional (8)

### No. 1: Reencuentro en la tienda de conveniencia (inversión emocional)

- **Category:** `Miniserie / Narrativa Emocional`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia a la protagonista de la Imagen 1 y al protagonista de la Imagen 3 (maquillaje facial según la imagen correspondiente), formato vertical 9:16, realismo cinematográfico, transición de azul frío a naranja cálido, generar un corto emocional de 30 segundos.

#### Prompt

```text
Referencia a la protagonista de la Imagen 1 y al protagonista de la Imagen 3 (maquillaje facial según la imagen correspondiente), formato vertical 9:16, realismo cinematográfico, transición de azul frío a naranja cálido, generar un corto emocional de 30 segundos.
Shot 1: Plano general, la protagonista @Imagen 1 sola, apoyada en la ventana, baja la cabeza y revuelve el café, tono nocturno azul frío, la cámara se acerca lentamente, (piano suave comienza).
Shot 2: Plano medio cercano, el protagonista @Imagen 3 empuja la puerta y entra en cuadro, la protagonista @Imagen 1 levanta la vista y se queda paralizada, cámara fija con sensación de respiración, <timbre de la puerta ding-dong>.
Shot 3: Primer plano, la cámara corta a tomas alternas entre los dos, los tonos se calientan gradualmente, el protagonista @Imagen 3 dice suavemente {Vengo a buscarte}, (el piano se intensifica).
Shot 4: Primer plano, los ojos de la protagonista @Imagen 1 se enrojecen y la comisura de sus labios se eleva, la cámara se aleja lentamente, congelado en naranja cálido, (la música concluye).
Restricciones: Los rostros del protagonista y la protagonista deben coincidir con las imágenes correspondientes en todo momento; la escena de la tienda de conveniencia es fija; la inversión emocional se exterioriza con ojos enrojecidos y labios temblorosos; prohibido dobles o gemelos.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimientos naturales leves, no ser estatuas.
```

### No. 2: Monólogo en una noche lluviosa

- **Category:** `Miniserie / Narrativa Emocional`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Protagonista vinculado a @Imagen 2 (maquillaje facial según la imagen correspondiente), formato vertical 9:16, realismo artístico frío, noche lluviosa gris-verdosa de baja saturación, generar un corto de monólogo emocional de 30 segundos.

#### Prompt

```text
Protagonista vinculado a @Imagen 2 (maquillaje facial según la imagen correspondiente), formato vertical 9:16, realismo artístico frío, noche lluviosa gris-verdosa de baja saturación, generar un corto de monólogo emocional de 30 segundos.
Shot 1: Primer plano, la lluvia serpentea y cae por la ventana de cristal, el reflejo borroso del protagonista @Imagen 2 aparece detrás de la ventana, cámara fija, <sonido de lluvia suave> (comienza el violonchelo grave).
Shot 2: Acercamiento lento, el protagonista @Imagen 2 pegado a la ventana contempla las farolas de la noche lluviosa, la yema del dedo presiona el cristal frío, luz fría gris-verdosa, {Algunas palabras, solo se las puedo decir a la lluvia}.
Shot 3: Desplazamiento horizontal suave, la cámara pasa por encima del teléfono apagado y el té medio frío sobre la mesa, el rostro de perfil del protagonista @Imagen 2 entra en cuadro, (el violonchelo se intensifica).
Shot 4: Plano medio cercano, el protagonista @Imagen 2 inhala profundamente y cierra los ojos, una lágrima recorre su mejilla y se superpone con el rastro de lluvia en la ventana, acercamiento lento, <la lluvia se intensifica>.
Shot 5: Alejamiento lento, el protagonista @Imagen 2 abre los ojos, esboza una sonrisa leve de alivio y se aleja de la ventana, congelado en gris-verdoso, (la música concluye).
Restricciones: El rostro del protagonista debe coincidir con la Imagen 2 en todo momento; la emoción se exterioriza con el dedo presionando la ventana y el rastro de lágrimas, prohibido diálogo directo que diga "Estoy triste"; el tono gris-verdoso de la noche lluviosa y la escena son consistentes en todo momento.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimientos naturales leves, no ser estatuas.
```

### No. 3: Mesa familiar

- **Category:** `Miniserie / Narrativa Emocional`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia a la madre de la Imagen 1, el padre de la Imagen 2 y el niño de la Imagen 4 (maquillaje facial según la imagen correspondiente), formato horizontal 16:9, realismo de vida cálido, tono hogareño amarillo cálido, generar un corto familiar emocional de 30 segundos.

#### Prompt

```text
Referencia a la madre de la Imagen 1, el padre de la Imagen 2 y el niño de la Imagen 4 (maquillaje facial según la imagen correspondiente), formato horizontal 16:9, realismo de vida cálido, tono hogareño amarillo cálido, generar un corto familiar emocional de 30 segundos.
Shot 1: Plano general, la familia de tres sentada alrededor de la mesa, el vapor caliente se eleva de los platos, la madre @Imagen 1 le sirve comida al niño @Imagen 4, luz cálida amarilla, cámara fija, (comienza la balada cálida) <sonido suave de platos y cubiertos>.
Shot 2: Plano medio cercano, el padre @Imagen 2 sonríe mientras le sirve sopa a la madre @Imagen 1, ambos intercambian una mirada y sonríen, acercamiento lento, <cuchara de sopa tintineando>.
Shot 3: Primer plano, el niño @Imagen 4 con las mejillas hinchadas comiendo a grandes bocados, levanta la vista y muestra una sonrisa amplia, la luz cálida baña su rostro, corte a esta toma.
Shot 4: Plano medio, la madre @Imagen 1 extiende la mano y limpia la comisura de los labios del padre @Imagen 2, él se sorprende y luego toma su mano, desplazamiento horizontal suave, (la balada se vuelve más cálida).
Shot 5: Movimiento de cámara lento ascendente/descendente, la cámara se eleva para una vista aérea de la mesa llena de comida y la familia unida, congelado en amarillo cálido, (la música concluye).
Restricciones: Los rostros de los tres personajes deben coincidir estrictamente con las imágenes correspondientes, la madre/padre/niño deben diferenciarse claramente en edad y apariencia física, prohibido dobles, gemelos o confusión de rostros; los platos de la mesa y la escena hogareña amarilla cálida son consistentes en todo momento.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimientos naturales leves, no ser estatuas.
```

### No. 4: Estación de despedida

- **Category:** `Miniserie / Narrativa Emocional`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia a la protagonista de la Imagen 1 y al protagonista de la Imagen 3 (maquillaje facial según la imagen correspondiente), formato horizontal 16:9, realismo cinematográfico, andén frío con cálida luz trasera, generar un corto emocional de despedida de 30 segundos.

#### Prompt

```text
Referencia a la protagonista de la Imagen 1 y al protagonista de la Imagen 3 (maquillaje facial según la imagen correspondiente), formato horizontal 16:9, realismo cinematográfico, andén frío con cálida luz trasera, generar un corto emocional de despedida de 30 segundos.
Shot 1: Plano general, multitudes en el andén, la protagonista @Imagen 1 y el protagonista @Imagen 3 de pie frente a frente con las manos entrelazadas, el tren al lado, luz trasera fría, acercamiento lento, (comienzan las cuerdas graves) <anuncio de llegada del tren>.
Shot 2: Primer plano, los dedos entrelazados de ambos se aprietan lentamente y luego se sueltan con pesar, cálida luz trasera delineando los bordes, cámara fija.
Shot 3: Plano medio cercano, el protagonista @Imagen 3 levanta la mano y arregla el cabello de la protagonista @Imagen 1 desordenado por el viento, quiere hablar pero se detiene, acercamiento lento, {Cuando llegues... recuerda avisar que estás bien}.
Shot 4: Plano medio, el protagonista @Imagen 3 se da la vuelta y sube al tren, la protagonista @Imagen 1 se queda de pie, sus hombros tiemblan levemente mientras contiene las lágrimas, desplazamiento horizontal suave, (las cuerdas se elevan) <sonido de cierre de puertas>.
Shot 5: Alejamiento lento, el tren se aleja, la protagonista @Imagen 1 sola, silueta contra la luz en el andén vacío, congelado en tono frío, (la música concluye).
Restricciones: Los rostros del protagonista y la protagonista deben coincidir con las imágenes correspondientes en todo momento; la emoción de despedida se exterioriza con dedos que se aprietan y hombros que tiemblan, prohibido llantos o gritos directos; la escena del andén y la luz trasera fría/cálida son consistentes en todo momento; prohibido dobles o gemelos.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimientos naturales leves, no ser estatuas.
```

### No. 5: Momento cumbre profesional

- **Category:** `Miniserie / Narrativa Emocional`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Protagonista vinculado a @Imagen 2 (maquillaje facial según la imagen correspondiente), formato horizontal 16:9, realismo inspirador de negocios, textura de acero y cristal azul frío que se transforma en luz dorada, generar un corto inspirador profesional de 30 segundos.

#### Prompt

```text
Protagonista vinculado a @Imagen 2 (maquillaje facial según la imagen correspondiente), formato horizontal 16:9, realismo inspirador de negocios, textura de acero y cristal azul frío que se transforma en luz dorada, generar un corto inspirador profesional de 30 segundos.
Shot 1: Plano medio cercano, el protagonista @Imagen 2 sentado solo en la oficina tarde en la noche, frunciendo el ceño ante una pantalla llena de datos, luz de pantalla azul fría reflejada en su rostro, cámara fija, (comienzan los golpes de batería graves) <sonido denso de tecleo>.
Shot 2: Acercamiento lento, el protagonista @Imagen 2 levanta bruscamente la vista con una mirada de comprensión, agarra un bolígrafo y marca lo clave, la luz de la pantalla brilla repentinamente, <sonido de inspiración repentina>.
Shot 3: Seguimiento, el protagonista @Imagen 2 se levanta y camina con paso decidido por el pasillo, empuja la puerta de la sala de reuniones, la cámara sigue su espalda, (los golpes de batería se intensifican).
Shot 4: Contrapicado, el protagonista @Imagen 2 de pie frente a la ventana panorámica, presentando con confianza ante el grupo, el horizonte de la ciudad como fondo, luz trasera bañada en dorado, {Esta es nuestra respuesta}.
Shot 5: Movimiento de cámara lento de giro alrededor, todo el público se pone de pie y aplaude, el protagonista @Imagen 2 exhala aliviado y muestra una sonrisa, congelado en luz dorada, (clímax musical que concluye) <aplausos atronadores>.
Restricciones: El rostro del protagonista debe coincidir con la Imagen 2 en todo momento; el arco emocional se exterioriza desde fruncir el ceño hasta relajarse, el azul frío que se transforma en dorado corresponde al valle hasta el momento cumbre; la escena de la oficina es coherente y consistente.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimientos naturales leves, no ser estatuas.
```

### No. 6: Juventud escolar

- **Category:** `Miniserie / Narrativa Emocional`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia a la chica de la Imagen 4 y el chico de la Imagen 5 (maquillaje facial según la imagen correspondiente), formato vertical 9:16, realismo juvenil fresco, sol cálido y brillante con alta transparencia de luz, generar un corto juvenil escolar de 30 segundos.

#### Prompt

```text
Referencia a la chica de la Imagen 4 y el chico de la Imagen 5 (maquillaje facial según la imagen correspondiente), formato vertical 9:16, realismo juvenil fresco, sol cálido y brillante con alta transparencia de luz, generar un corto juvenil escolar de 30 segundos.
Shot 1: Plano general, sol cálido de la tarde iluminando oblicuamente el campo de deportes, la chica @Imagen 4 caminando rápido por la pista con libros en brazos, el viento levanta su falda, acercamiento lento, (comienza la guitarra fresca) <sonido ligero de cigarras>.
Shot 2: Plano medio cercano, el chico @Imagen 5 pasa en bicicleta, frena de repente y mira hacia atrás, sus miradas se encuentran y ambos se quedan paralizados, cámara fija, <sonido de freno de bicicleta>.
Shot 3: Primer plano, las mejillas de la chica @Imagen 4 se sonrojan, baja la vista y sonríe con los labios apretados, los libros caídos son recogidos por el chico @Imagen 5 que se agacha, corte a esta toma con sol cálido.
Shot 4: Plano medio, ambos caminan hombro con hombro por el camino arbolado conversando y riendo, manchas de luz bailan en sus rostros, seguimiento mientras caminan, (la guitarra se vuelve más alegre).
Shot 5: Movimiento de cámara lento ascendente/descendente, la cámara se eleva para una vista aérea de sus espaldas alejándose y el campus bañado en luz dorada, congelado en sol cálido, (la música concluye).
Restricciones: Los rostros de la chica y el chico deben coincidir con las imágenes correspondientes en todo momento, la apariencia física masculina/femenina debe diferenciarse claramente, prohibido gemelos o confusión; la escena escolar con sol cálido y alta transparencia de luz es consistente en todo momento; la emoción tímida se exterioriza con mejillas sonrojadas y sonrisa con labios apretados.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimientos naturales leves, no ser estatuas.
```

### No. 7: Pasillo de Suspenso

- **Category:** `Miniserie / Narrativa Emocional`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

La protagonista está vinculada a @Imagen 2 (el maquillaje facial debe coincidir con la imagen de referencia), formato vertical 9:16, realismo de suspenso y terror, sombras oscuras de alto contraste en tonos fríos verdes, generar un corto de suspenso de 30 segundos.

#### Prompt

```text
La protagonista está vinculada a @Imagen 2 (el maquillaje facial debe coincidir con la imagen de referencia), formato vertical 9:16, realismo de suspenso y terror, sombras oscuras de alto contraste en tonos fríos verdes, generar un corto de suspenso de 30 segundos.
Shot 1: Primer plano, una luz de pasillo parpadea intermitentemente, el haz de la linterna de la protagonista @Imagen 2 penetra la oscuridad, tonos fríos verdes oscuros, cámara fija, <sonido de zumbido de corriente de tubo de luz> (zumbido de baja frecuencia comienza).
Shot 2: Seguimiento, la cámara pegada a la espalda de la protagonista @Imagen 2 la sigue mientras avanza lentamente por el largo pasillo, pasos vacilantes, sombras alargadas, <eco de pasos>.
Shot 3: Acercamiento lento, la protagonista @Imagen 2 se detiene abruptamente, conteniendo la respiración y mirando hacia atrás, pupilas contraídas, sudor frío en la frente, rostro iluminado por luz fría verde, <sonido extraño detrás, clic>.
Shot 4: Corte a, al final del pasillo, una puerta entreabierta deja escapar un tenue rayo de luz que se abre lentamente, la protagonista @Imagen 2 levanta la linterna y retrocede con cautela, (cuerdas agudas se intensifican).
Shot 5: Alejamiento lento, la protagonista @Imagen 2 se encuentra sola en el centro del largo y oscuro pasillo, las sombras la rodean acercándose, tono frío verde congelado, <silencio repentino> (la música se detiene abruptamente).
Restricciones: El rostro de la protagonista debe coincidir con la Imagen 2 en todo momento; la tensión se exterioriza mediante la contención de la respiración, la mirada hacia atrás y la contracción de pupilas con sudor frío; la iluminación oscura de tonos fríos verdes de alto contraste y la escena del pasillo deben ser consistentes; usar el silencio al final para crear un vacío aterrador.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 8: Reconciliación (Usar tarea de edición para crear contraste derivado)

- **Category:** `Miniserie / Narrativa Emocional`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia: la protagonista de la Imagen 1, el protagonista de la Imagen 3 (el maquillaje facial de cada uno debe coincidir con su imagen de referencia), formato vertical 9:16, realismo cinematográfico, transición de lluvia gris fría a luz dorada cálida y soleada, generar un corto emocional de reconciliación de 30 segundos.

#### Prompt

```text
Referencia: la protagonista de la Imagen 1, el protagonista de la Imagen 3 (el maquillaje facial de cada uno debe coincidir con su imagen de referencia), formato vertical 9:16, realismo cinematográfico, transición de lluvia gris fría a luz dorada cálida y soleada, generar un corto emocional de reconciliación de 30 segundos.
Shot 1: Plano medio-cercano, la protagonista @Imagen 1 y el protagonista @Imagen 3 están de espaldas bajo la lluvia gris fría, cada uno con la cabeza baja, distancia entre ellos, cámara fija, (piano opresivo comienza) <sonido frío de lluvia>.
Shot 2: Primer plano, una vieja foto mojada sobre un charco de agua bajo la lluvia, en el reflejo del espejo de agua los dos se alejan gradualmente, acercamiento lento.
Shot 3: Corte a, el cielo se despeja, luz dorada cálida baña la escena, el protagonista @Imagen 3 se da la vuelta y extiende la mano, la protagonista @Imagen 1 lo mira lentamente, lágrimas en los ojos, desplazamiento horizontal suave, (el piano se vuelve cálido y se intensifica).
Shot 4: Plano medio, los dos se abrazan de pie, la protagonista @Imagen 1 entierra su rostro en el hombro del protagonista @Imagen 3, él acaricia suavemente su cabello, luz dorada cálida a contraluz perfila sus figuras, movimiento de cámara lento en círculo, {Lo siento, he vuelto}.
Shot 5: Alejamiento lento, las figuras de ambos abrazados se funden bajo la luz dorada cálida y soleada, congelado, (la música concluye de manera satisfactoria).
Restricciones: Enfoque de tarea de edición: primero generar la versión madre de la Toma 1 a la Toma 2 "versión distante de lluvia gris fría", luego usar la instrucción de edición "mantener los rostros de los personajes @Imagen 1/@Imagen 3, la composición y posición de cámara sin cambios, solo cambiar el clima a luz dorada cálida y soleada, y la postura de espaldas a abrazados" para derivar la versión de contraste de la Toma 3 a la Toma 5, logrando la inversión frío/calor en la misma escena; los rostros de los protagonistas deben ser consistentes en todo momento, prohibido dobles/gemelos; la emoción de reconciliación se exterioriza mediante la mirada con lágrimas y el abrazo con rostro enterrado.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural leve, no ser estatuas.
```

<a id="category-17"></a>

### Anuncio de Marca / Publicidad (6)

### No. 1: Marca de Fragancia - Plano Secuencia

- **Category:** `Anuncio de Marca / Publicidad`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia: el frasco de perfume de la Imagen 1 como sujeto principal, formato panorámico 2.35:1, estilo cinematográfico de alta gama, tonos dorados del crepúsculo, generar un video de ambiente de marca de 30 segundos, plano secuencia.

#### Prompt

```text
Referencia: el frasco de perfume de la Imagen 1 como sujeto principal, formato panorámico 2.35:1, estilo cinematográfico de alta gama, tonos dorados del crepúsculo, generar un video de ambiente de marca de 30 segundos, plano secuencia.
Shot 1: Macro extremo comenzando desde una gota de agua condensada en la superficie del frasco @Imagen 1, la cámara se aleja lentamente, la gota se desliza reflejando la luz cálida, (cuerdas ambientales graves comienzan gradualmente).
Shot 2: La cámara continúa elevándose y desplazándose lateralmente, el frasco de perfume @Imagen 1 se yergue lentamente sobre una mesa de mármol húmeda, luz lateral a contraluz perfila el contorno del frasco, <sonido suave de la gota al caer>.
Shot 3: La cámara rodea suavemente medio frasco, mostrando a través del cristal facetado la refracción de la luz del crepúsculo en el líquido dorado, manchas de luz se deslizan sobre la mesa.
Shot 4: La cámara asciende naturalmente para una vista cenital de toda la escenografía, sedas y pétalos esparcidos sobre la mesa, el dorado del crepúsculo inunda el cuadro, 【El aroma como la luz, se detiene en este instante】.
Shot 5: La cámara se aleja lentamente volviendo a la gota de agua en macro, la imagen se desenfoca y congela en el dorado del crepúsculo de la marca, (una nota larga de cuerdas concluye).
Restricciones: Plano secuencia continuo sin cortes; el frasco debe coincidir con la Imagen 1; los tonos dorados del crepúsculo y la textura húmeda deben mantenerse de principio a fin.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 2: Marca Deportiva - Energía Motivacional

- **Category:** `Anuncio de Marca / Publicidad`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia: el atleta de la Imagen 2 como sujeto principal, formato vertical 9:16, alto contraste, tonos fríos duros, estilo urbano con granulado, generar un anuncio deportivo motivacional de 30 segundos.

#### Prompt

```text
Referencia: el atleta de la Imagen 2 como sujeto principal, formato vertical 9:16, alto contraste, tonos fríos duros, estilo urbano con granulado, generar un anuncio deportivo motivacional de 30 segundos.
Shot 1: Primer plano extremo de los ojos del atleta @Imagen 2 abriéndose de repente en las sombras, ángulo bajo, <sonido de respiración agitada>, (golpe de batería grave entra).
Shot 2: La cámara sigue rápidamente al atleta @Imagen 2 saliendo disparado de un callejón oscuro, salpicaduras de agua bajo sus pies, farolas azul frío dejan estelas de luz, <sonido de fricción de suela>.
Shot 3: Ángulo bajo, la cámara lo capta saltando en el aire sobre un obstáculo, silueta a contraluz llena el cuadro, (la batería se acelera y se hace más densa).
Shot 4: La cámara se desplaza lateralmente con suavidad siguiendo su perfil en el sprint, gotas de sudor estallan bajo la luz dura, líneas musculares tensas, <latido del corazón retumba>.
Shot 5: La cámara se acerca lentamente a su rostro gritando justo antes de la meta, tonos fríos de alto contraste congelados, 【Superar, no tiene fin】, (la batería se detiene abruptamente).
Restricciones: Luz dura azul fría de alto contraste en todo momento; el atleta debe coincidir con la Imagen 2; el ritmo progresa de lento/contendido a explosivo.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 3: Campaña de Bien Público - Calidez

- **Category:** `Anuncio de Marca / Publicidad`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, luz natural suave, tonos cálidos documentales, poca profundidad de campo, generar un corto cálido de bien público de 30 segundos, emoción que va de la soledad a la aceptación.

#### Prompt

```text
Formato vertical 9:16, luz natural suave, tonos cálidos documentales, poca profundidad de campo, generar un corto cálido de bien público de 30 segundos, emoción que va de la soledad a la aceptación.
Shot 1: Cámara fija, primer plano de unas manitas apretando una muñeca de trapo descolorida, luz matutina oblicua, polvo flotando, (nota simple de piano comienza suavemente).
Shot 2: La cámara se aleja lentamente, una niña sola sentada en un rincón de un aula rural, luz suave a contraluz desde la ventana, <sonido de niños jugando a lo lejos>.
Shot 3: La cámara se desplaza lateralmente con suavidad, una mano grande ofrece un lápiz, la niña levanta la vista con vacilación, la luz cálida inunda su rostro.
Shot 4: La cámara sigue a la niña siendo tomada de la mano hacia el centro del aula, compañeros se acercan, poca profundidad de campo desenfoca el fondo, (cuerdas cálidas se despliegan).
Shot 5: La cámara se eleva lentamente para una vista cenital del grupo sentado leyendo juntos, luz cálida del sol baña el suelo, 【Cada niño, merece ser visto】, (piano y cuerdas concluyen).
Restricciones: Luz natural suave y tonos cálidos en todo momento; arco emocional que va de la soledad a la aceptación; usar poca profundidad de campo para resaltar a los personajes.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 4: Tecnología Financiera - Estilo Tecnológico

- **Category:** `Anuncio de Marca / Publicidad`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia: la tarjeta de crédito de la Imagen 3 como sujeto principal, formato horizontal 16:9, tono tecnológico azul oscuro y sobrio, textura minimalista de alta gama, generar un video de marca de tecnología financiera de 30 segundos.

#### Prompt

```text
Referencia: la tarjeta de crédito de la Imagen 3 como sujeto principal, formato horizontal 16:9, tono tecnológico azul oscuro y sobrio, textura minimalista de alta gama, generar un video de marca de tecnología financiera de 30 segundos.
Shot 1: Macro extremo acercándose a la textura del chip metálico de la tarjeta de crédito @Imagen 3, flujos de luz de datos azules se deslizan sobre su superficie, (pulso de sintetizador grave comienza).
Shot 2: La cámara se aleja lentamente, la tarjeta de crédito @Imagen 3 flota en un espacio negro puro, anillos de datos semitransparentes aparecen a su alrededor, <sonido de escaneo electrónico>.
Shot 3: La cámara rodea suavemente la tarjeta una vez, una cuadrícula de luz azul fluye con el cambio de perspectiva, luces y sombras se deslizan por los bordes metálicos.
Shot 4: Vista cenital, debajo de la tarjeta crece un horizonte de datos de ciudad, puntos de luz azul frío se conectan formando una red, (el ritmo de pulsos avanza).
Shot 5: La cámara se acerca lentamente a la tarjeta congelándose en el logotipo de la marca, azul oscuro se desvanece hacia la oscuridad, 【Seguridad, en cada confianza】, (nota larga de sintetizador concluye).
Restricciones: Tono tecnológico azul oscuro y sobrio en todo momento; la tarjeta debe coincidir con la Imagen 3; la textura del flujo de luz de datos debe mantenerse.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 5: Bebida Refrescante

- **Category:** `Anuncio de Marca / Publicidad`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Usando la lata de bebida de la Imagen 4 como sujeto principal, formato vertical 9:16, paleta de verano brillante y saturada, sensación acuosa y transparente, genera un anuncio de bebida refrescante de 30 segundos.

#### Prompt

```text
Usando la lata de bebida de la Imagen 4 como sujeto principal, formato vertical 9:16, paleta de verano brillante y saturada, sensación acuosa y transparente, genera un anuncio de bebida refrescante de 30 segundos.
Shot 1: Primer plano macro de alta velocidad, una gota de agua golpea y estalla en la superficie de la lata de bebida helada @Image 4, ángulo bajo, <sonido de agua crujiente al estallar>, (comienza el ritmo electrónico animado).
Shot 2: La cámara rodea lentamente el cuerpo de la lata @Image 4 cubierto de gotas de condensación, las gotas ruedan cristalinas a contraluz, la luz del sol se refracta en colores.
Shot 3: La cámara se aleja rápidamente, la bebida se vierte en un vaso lleno de hielo, las burbujas suben burbujeando, <sonido burbujeante>.
Shot 4: La cámara en ángulo bajo mira hacia arriba mientras una mano levanta la bebida hacia el sol, limón y menta caen por el aire, (el ritmo se eleva).
Shot 5: La cámara se acerca lentamente a las burbujas en la boca del vaso y se congela, azules y amarillos saturados de verano llenan la pantalla, 【Un sorbo despierta todo el verano】, (el ritmo termina con un sonido claro).
Restricciones: Paleta de verano brillante y saturada durante todo el video; la lata de bebida debe coincidir con la Imagen 4; destacar la textura transparente de las gotas de agua y las burbujas.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben moverse naturalmente, no como estatuas.
```

### No. 6: Marca para Madres y Bebés

- **Category:** `Anuncio de Marca / Publicidad`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato vertical 9:16, tonos crema suaves extremos, profundidad de campo baja difusa y onírica, genera un video de marca tierno de 30 segundos para una marca de madres y bebés.

#### Prompt

```text
Formato vertical 9:16, tonos crema suaves extremos, profundidad de campo baja difusa y onírica, genera un video de marca tierno de 30 segundos para una marca de madres y bebés.
Shot 1: Primer plano macro con cámara fija de los dedos pequeños y encogidos del pie de un bebé, la luz suave de la mañana los envuelve como un velo, (comienza el sonido claro de una caja de música).
Shot 2: La cámara se aleja lentamente, una madre mece suavemente a su bebé dormido en brazos, la luz difusa entra a través de la cortina de la ventana, <sonido de la respiración sutil del bebé>.
Shot 3: La cámara se desplaza horizontalmente con suavidad, la madre baja la cabeza para besar la frente del bebé, la luz cálida color crema baña los contornos de ambos.
Shot 4: La cámara se eleva lentamente para una vista cenital de la madre y el hijo acurrucados junto a una cuna, telas de algodón suaves llenan la imagen, (se incorporan cuerdas suaves).
Shot 5: La cámara se acerca lentamente a la sonrisa que se abre en el rostro del bebé, la luz suave se desvanece por sobreexposición, 【La ternura es la primera protección】, (la caja de música y las cuerdas concluyen).
Restricciones: Luz suave extrema color crema durante todo el video; textura onírica con profundidad de campo baja difusa; el estado de ánimo debe ser tranquilo y tierno de principio a fin.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben moverse naturalmente, no como estatuas.
```

<a id="category-18"></a>

### Viajes / Turismo Cultural (6)

### No. 1: Toma Aérea Continua de un Pueblo Antiguo

- **Category:** `Viajes / Turismo Cultural`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato horizontal 16:9, paleta de tinta china gris-azulada, sensación cinematográfica poética con niebla matutina, genera un video de viaje aéreo de 30 segundos de un pueblo antiguo, en una toma continua.

#### Prompt

```text
Formato horizontal 16:9, paleta de tinta china gris-azulada, sensación cinematográfica poética con niebla matutina, genera un video de viaje aéreo de 30 segundos de un pueblo antiguo, en una toma continua.
Shot 1: Toma aérea a muy baja altura sobrevolando un callejón de agua con adoquines de piedra, un bote de cubierta negra emerge rompiendo el agua en la niebla matutina, (comienza un sonido claro de un guzheng).
Shot 2: La cámara se eleva suavemente, revelando capas de muros rosados, techos de tejas negras y paredes con cabezas de caballo, el humo de las cocinas se eleva desde los callejones, <sonido de remos en el agua>.
Shot 3: La cámara se desplaza horizontalmente con suavidad cruzando un puente arqueado, bajo el puque se ven figuras lavando ropa, sus reflejos se ondulan en el agua.
Shot 4: La cámara continúa ascendiendo y rodeando la vista panorámica del pueblo antiguo, los canales serpentean como venas, la niebla matutina se desliza sobre los techos gris-azulados, (se incorpora el sonido lejano de una flauta).
Shot 5: La cámara se aleja lentamente para una vista cenital final del pueblo rodeado por montañas, la tinta china gris-azulada se difumina hacia el horizonte, 【Un sueño milenario, viviendo junto al agua】, (el guzheng y la flauta concluyen).
Restricciones: Toma aérea continua sin cortes durante todo el video; paleta de tinta china gris-azulada con niebla matutina constante; composición poética oriental con espacio en blanco.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben moverse naturalmente, no como estatuas.
```

### No. 2: Vacaciones en una Isla

- **Category:** `Viajes / Turismo Cultural`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato horizontal 16:9, paleta tropical saturada y transparente, textura de luz solar brillante, genera un video de viaje de vacaciones en una isla de 30 segundos.

#### Prompt

```text
Formato horizontal 16:9, paleta tropical saturada y transparente, textura de luz solar brillante, genera un video de viaje de vacaciones en una isla de 30 segundos.
Shot 1: Primer plano macro submarino de los rayos de sol penetrando el agua azul turquesa, bancos de peces nadan rápidamente, (comienza un ukelele melódico).
Shot 2: La cámara emerge lentamente del agua, revelando una playa de arena blanca, palmeras y una laguna transparente, el dron se aleja con suavidad, <sonido de las olas rompiendo en la orilla>.
Shot 3: La cámara a baja altura sigue a una persona saltando al mar transparente y poco profundo, salpicaduras de agua crean ondas, la luz del sol cubre la superficie del agua.
Shot 4: La cámara se eleva lentamente y rodea para una vista cenital de una bahía en forma de media luna, un velero surca el agua verde esmeralda, (ritmo alegre y brillante).
Shot 5: La cámara se acerca a la silueta de alguien brindando con una copa al atardecer en la playa, un halo dorado y cálido llena la pantalla, 【Deja las preocupaciones al otro lado de la orilla】, (el ukelele concluye).
Restricciones: Paleta tropical saturada y transparente durante todo el video; destacar la textura azul turquesa y cristalina del agua; estado de ánimo relajado y brillante.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben moverse naturalmente, no como estatuas.
```

### No. 3: Nieve Pura de Montaña

- **Category:** `Viajes / Turismo Cultural`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato horizontal 16:9, paleta fría de alto contraste en blanco y azul, sensación épica de claridad extrema y grandeza, genera un video épico de viaje de montaña nevada de 30 segundos.

#### Prompt

```text
Formato horizontal 16:9, paleta fría de alto contraste en blanco y azul, sensación épica de claridad extrema y grandeza, genera un video épico de viaje de montaña nevada de 30 segundos.
Shot 1: Primer plano macro extremo de la faceta afilada de un cristal de hielo en una ventisca, destellos de luz fría azul a contraluz, <sonido del viento gélido aullando>, (comienza un coro bajo de voces humanas).
Shot 2: La cámara se aleja lentamente, un pico solitario de montaña nevada se alza perforando un mar de nubes en el horizonte, el amanecer tiñe de oro la cima, la imagen es vasta.
Shot 3: La cámara aérea se desplaza horizontalmente con suavidad sobrevolando crestas nevadas extendidas, el viento levanta niebla de nieve como cintas que vuelan, sombras frías azules con claroscuro definido.
Shot 4: La cámara asciende lentamente para una vista cenital de un glaciar y sus grietas serpenteando hacia abajo, el hielo azul es profundo y translúcido, (el coro se eleva en capas, haciéndose épico).
Shot 5: La cámara en ángulo bajo se congela en la cima bañada por el sol dorado, luz sagrada se derrama en el límite entre el blanco frío y el dorado cálido, 【Ascender, solo para tocar la pureza】, (las voces humanas concluyen con una nota larga).
Restricciones: Paleta fría de alto contraste en blanco y azul durante todo el video; composición grandiosa y vasta; textura de cristales de hielo y el sol dorado en la montaña como puntos culminantes.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben moverse naturalmente, no como estatuas.
```

### No. 4: Paisaje Nocturno Urbano

- **Category:** `Viajes / Turismo Cultural`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Formato horizontal 16:9, paleta cibernética de neón saturada, sensación urbana húmeda y reflectante, genera un video de viaje de paisaje nocturno urbano de 30 segundos.

#### Prompt

```text
Formato horizontal 16:9, paleta cibernética de neón saturada, sensación urbana húmeda y reflectante, genera un video de viaje de paisaje nocturno urbano de 30 segundos.
Shot 1: Primer plano macro extremo de una gota de lluvia deslizándose por un cristal, detrás, las manchas de luz de neón se difuminan en masas de luz difusas, (comienza un pulso de sintetizador electrónico).
Shot 2: La cámara se aleja lentamente a través de la ventana, el dron muestra una vista cenital de una calle bulliciosa después de la lluvia, con las estelas de luz de los coches tejiendo un tapiz, <sonido del tráfico rugiente>.
Shot 3: La cámara aérea asciende con suavidad y rodea un grupo de rascacielos, las fachadas de vidrio reflejan el neón, las luces parpadean en capas.
Shot 4: La cámara a baja altura sigue a un peatón con paraguas en un callejón de neón, el suelo húmedo refleja luces multicolores, (el ritmo avanza con un pulso).
Shot 5: La cámara se aleja lentamente para una vista cenital final del mar de luces de la ciudad que nunca duerme, el neón late como una respiración, 【Bajo las luces, todas son historias】, (el sintetizador concluye).
Restricciones: Paleta cibernética de neón saturada durante todo el video; textura húmeda y reflectante constante; riqueza de capas en las estelas de luz y el neón.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marcas de agua; usar solo un tipo de movimiento de cámara por toma; las personas deben moverse naturalmente, no como estatuas.
```

### No. 5: 沙漠驼队

- **Category:** `Viajes / Turismo Cultural`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

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

- **Category:** `Viajes / Turismo Cultural`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

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

### Mascotas / Animales (5)

### No. 1: 萌猫特写

- **Category:** `Mascotas / Animales`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

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

- **Category:** `Mascotas / Animales`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

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

- **Category:** `Mascotas / Animales`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

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

- **Category:** `Mascotas / Animales`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

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

### No. 5: Mascota antropomórfica

- **Category:** `Mascotas / Animales`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con el Shiba Inu con gorro de chef @Imagen 1 como sujeto principal, formato vertical 9:16, estilo de caricatura 3D al estilo Pixar, iluminación cálida de cocina + reflejos saturados, genera un corto cómico antropomórfico de 30 segundos. Bloquea el renderizado de caricatura 3D, prohibido derivar hacia realismo.

#### Prompt

```text
Con el Shiba Inu con gorro de chef @Imagen 1 como sujeto principal, formato vertical 9:16, estilo de caricatura 3D al estilo Pixar, iluminación cálida de cocina + reflejos saturados, genera un corto cómico antropomórfico de 30 segundos. Bloquea el renderizado de caricatura 3D, prohibido derivar hacia realismo.
Shot 1: Primer plano, el Shiba Inu @Imagen 1 con el gorro de chef torcido mira seriamente la sartén, cámara fija, (comienza el fagot cómico) {"¡Hoy, volteo la sartén!"}.
Shot 2: Plano medio, el Shiba Inu @Imagen 1 sostiene la sartén con ambas patas y la voltea con fuerza haciendo volar los ingredientes, la cámara se acerca lentamente, <chisporroteo de aceite>.
Shot 3: Plano general, el Shiba Inu @Imagen 1 levanta la cabeza y abre la boca para atraparlos pero todo le cae en la cara, cámara fija, (efecto de sonido "ding") <chapoteo en la cara>.
Shot 4: Primer plano, el Shiba Inu @Imagen 1 con la cara cubierta de masa parpadea aturdido, la cámara se acerca lentamente, {"... no está mal."}.
Shot 5: Plano medio, el Shiba Inu @Imagen 1 presenta con calma su plato quemado como un tesoro, la cámara se aleja lentamente y se congela, (final alegre) 【Chef desastroso · Shiba】.
Restricciones: El color del pelaje del Shiba Inu y el gorro de chef deben coincidir con la Imagen 1 durante toda la secuencia, bloquear el estilo de caricatura 3D, las expresiones faciales antropomórficas deben ser exageradas pero con proporciones uniformes, prohibido volverse realista a mitad de camino.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener micro-movimientos naturales, no ser estatuas.
```

<a id="category-20"></a>

### Infantil / Educación / Divulgación Científica (5)

### No. 1: Divulgación sobre exploración marciana

- **Category:** `Infantil / Educación / Divulgación Científica`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con el rover marciano @Imagen 1 como sujeto principal, formato horizontal 16:9, CG de divulgación documental, superficie estelar oxidada roja + cielo estrellado de tonos fríos, genera un video de divulgación espacial de 30 segundos.

#### Prompt

```text
Con el rover marciano @Imagen 1 como sujeto principal, formato horizontal 16:9, CG de divulgación documental, superficie estelar oxidada roja + cielo estrellado de tonos fríos, genera un video de divulgación espacial de 30 segundos.
Shot 1: Plano general, el rover @Imagen 1 está quieto en el horizonte del desierto rojo, la cámara se eleva lentamente, (comienzo de sintetizador majestuoso) <silbido bajo del viento marciano>.
Shot 2: Primer plano, las seis ruedas del rover @Imagen 1 avanzan lentamente sobre grava, cámara en ángulo bajo siguiendo el movimiento, <crujido mecánico>.
Shot 3: Plano medio, el brazo robótico del rover @Imagen 1 se extiende para recolectar una muestra de roca, la cámara se acerca lentamente, (cuerdas que aumentan en intensidad) 【Perforar muestra · Analizar composición】.
Shot 4: Contrapicado, el rover @Imagen 1 levanta su mástil con cámara y mira hacia el cielo, la cámara gira lentamente alrededor, <pitidos de datos>.
Shot 5: Plano general, el rover @Imagen 1 se dirige hacia un cráter de impacto a lo lejos, la cámara se aleja lentamente en picado y se congela, (música que se eleva) 【Próxima parada: lo desconocido】.
Restricciones: La estructura y combinación de colores del rover deben coincidir con la Imagen 1 durante toda la secuencia, la superficie marciana debe mostrar polvo suspendido acorde a la baja gravedad real, prohibida la aparición de vegetación terrestre o cielo azul.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener micro-movimientos naturales, no ser estatuas.
```

### No. 2: Esquema de órganos humanos

- **Category:** `Infantil / Educación / Divulgación Científica`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con el modelo 3D del corazón @Imagen 1 como sujeto principal, formato horizontal 16:9, visualización médica, textura semitransparente + luz de venas rojas sobre fondo oscuro, genera un video de divulgación sobre el cuerpo humano de 30 segundos. Bloquea el estilo 3D médico semitransparente, prohibido derivar hacia realismo sangriento.

#### Prompt

```text
Con el modelo 3D del corazón @Imagen 1 como sujeto principal, formato horizontal 16:9, visualización médica, textura semitransparente + luz de venas rojas sobre fondo oscuro, genera un video de divulgación sobre el cuerpo humano de 30 segundos. Bloquea el estilo 3D médico semitransparente, prohibido derivar hacia realismo sangriento.
Shot 1: Plano general, el corazón @Imagen 1 flota en un espacio oscuro latiendo lentamente, la cámara gira lentamente alrededor, (comienza música de pulsos de baja frecuencia) <latido del corazón>.
Shot 2: Primer plano, las arterias coronarias en la superficie del corazón @Imagen 1 se iluminan y aparecen, la cámara se acerca lentamente, 【Arterias coronarias · Suministro de sangre】.
Shot 3: Plano medio en sección transversal, el corazón @Imagen 1 se vuelve semitransparente revelando el flujo sanguíneo en sus cuatro cámaras, la cámara se desplaza horizontalmente con suavidad, <flujo sanguíneo pulsante>.
Shot 4: Primer plano, la válvula mitral del corazón @Imagen 1 se abre y cierra al ritmo del latido, cámara fija, (ritmo sincronizado con el latido).
Shot 5: Plano general, el corazón @Imagen 1 recupera su integridad y continúa latiendo, la cámara se aleja lentamente y se congela, (música estable) 【Aproximadamente 100,000 latidos al día】.
Restricciones: La estructura anatómica del corazón y la posición de las cámaras deben ser científicamente precisas según la Imagen 1, mantener el estilo de esquema semitransparente, prohibido realismo sangriento o desalineación estructural.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener micro-movimientos naturales, no ser estatuas.
```

### No. 3: Animación de libro ilustrado infantil

- **Category:** `Infantil / Educación / Divulgación Científica`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con el osito @Imagen 1 como sujeto principal, formato vertical 9:16, estilo de libro ilustrado 2D dibujado a mano, textura de papel acuarela + contornos cálidos de crayón, genera una animación de cuento para dormir de 30 segundos. Bloquea el estilo 2D de acuarela dibujada a mano, prohibido derivar hacia realismo o 3D.

#### Prompt

```text
Con el osito @Imagen 1 como sujeto principal, formato vertical 9:16, estilo de libro ilustrado 2D dibujado a mano, textura de papel acuarela + contornos cálidos de crayón, genera una animación de cuento para dormir de 30 segundos. Bloquea el estilo 2D de acuarela dibujada a mano, prohibido derivar hacia realismo o 3D.
Shot 1: Plano medio, el osito @Imagen 1 empuja la puerta de la cabaña de madera y mira las estrellas, cámara fija, (comienza melodía de caja de música) {"Las estrellas están muy brillantes esta noche."}.
Shot 2: Plano general, el osito @Imagen 1 camina por un sendero entre flores llevando una linternita, la cámara se desplaza horizontalmente con suavidad, <susurro de las hojas de hierba>.
Shot 3: Primer plano, el osito @Imagen 1 levanta la cabeza y ve una estrella fugaz cruzando el cielo, la cámara se acerca lentamente, (sonido de campanilla) 【Pide un deseo】.
Shot 4: Plano medio, el osito @Imagen 1 cierra los ojos y junta las manos para pedir un deseo, la cámara gira lentamente alrededor, <brisa nocturna suave>.
Shot 5: Plano general, el osito @Imagen 1 se acuesta en la hierba, se cubre con una manta de hojas y se duerme, la cámara se eleva lentamente en picado y se congela, (la caja de música se desvanece) {"Buenas noches, estrellitas."}.
Restricciones: La forma y combinación de colores del osito deben coincidir con la Imagen 1 durante toda la secuencia, bloquear el estilo 2D de acuarela dibujada a mano, conservar la textura del papel y los contornos, prohibido cambiar a 3D o volverse realista.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener micro-movimientos naturales, no ser estatuas.
```

### No. 4: Demostración de experimento físico

- **Category:** `Infantil / Educación / Divulgación Científica`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con las bolas metálicas del péndulo de Newton @Imagen 1 como sujeto principal, formato horizontal 16:9, realismo de demostración científica, blanco puro de laboratorio + luz dura lateral/contraluz, genera un video de divulgación física de 30 segundos.

#### Prompt

```text
Con las bolas metálicas del péndulo de Newton @Imagen 1 como sujeto principal, formato horizontal 16:9, realismo de demostración científica, blanco puro de laboratorio + luz dura lateral/contraluz, genera un video de divulgación física de 30 segundos.
Shot 1: Primer plano, una bola del péndulo de Newton @Imagen 1 es levantada y queda suspendida, cámara fija, (comienza música de suspenso con tictac) <sonido suave al soltar el dedo>.
Shot 2: Plano medio, la bola @Imagen 1 se balancea hacia abajo y en el instante del impacto la energía se transfiere, la cámara se acerca lentamente en cámara lenta, <claro choque metálico>.
Shot 3: Primer plano, la bola del otro extremo @Imagen 1 es lanzada hacia arriba, la cámara la sigue con suavidad en su ascenso, (efecto de sonido "ding") 【Conservación del momento】.
Shot 4: Plano general, las bolas del péndulo de Newton @Imagen 1 se balancean alternativamente de un extremo a otro, la cámara gira lentamente alrededor, <colisiones rítmicas regulares>.
Shot 5: Plano medio, la amplitud del balanceo de las bolas @Imagen 1 disminuye gradualmente hasta casi detenerse, la cámara se aleja lentamente y se congela, (música que concluye) 【La energía se transfiere en las colisiones】.
Restricciones: El número de bolas metálicas y la estructura del soporte deben coincidir con la Imagen 1, el balanceo debe seguir las leyes físicas reales de conservación del momento, prohibido flotar o aumentar la amplitud violando la mecánica.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener micro-movimientos naturales, no ser estatuas.
```

### No. 5: Recreación de escena histórica

- **Category:** `Infantil / Educación / Divulgación Científica`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con el Coliseo romano @Imagen 1 como sujeto principal, formato horizontal 16:9, recreación histórica épica, luz dorada del atardecer con polvo + grano de película envejecida, genera un documental histórico de 30 segundos.

#### Prompt

```text
Con el Coliseo romano @Imagen 1 como sujeto principal, formato horizontal 16:9, recreación histórica épica, luz dorada del atardecer con polvo + grano de película envejecida, genera un documental histórico de 30 segundos.
Shot 1: Plano general, el Coliseo @Imagen 1 bañado por los últimos rayos del atardecer se alza imponente, la cámara se eleva lentamente en toma aérea, (comienza canto épico de voces humanas) <viento ancestral>.
Shot 2: Plano medio, las gradas del Coliseo @Imagen 1 pasan gradualmente de estar en ruinas a "reconstruirse" hasta llenarse de espectadores, la cámara se acerca lentamente, <estallido del bullicio de la multitud>.
Shot 3: Primer plano, detalles de los grabados en los arcos de piedra del Coliseo @Imagen 1, la cámara se desplaza horizontalmente con suavidad, (redobles de tambor que aumentan en intensidad) 【Año 80 d.C. · Inauguración】.
Shot 4: Contrapicado general, en la arena central del Coliseo @Imagen 1 se levanta polvo de la arena, la cámara gira lentamente alrededor, <toque de trompeta prolongado>.
Shot 5: Plano general, la imagen reconstruida del Coliseo @Imagen 1 se "disipa" y regresa a las ruinas actuales, la cámara se aleja lentamente en picado y se congela, (música que concluye con melancolía) 【Mil años después, aún en pie】.
Restricciones: La estructura arquitectónica del Coliseo y la ubicación de los daños deben coincidir con la Imagen 1, las formas reconstruida y en ruinas deben corresponderse consistentemente, prohibido inventar elementos modernos que no concuerden con la historia.
Restricciones generales: Mantener sin subtítulos; no generar logotipo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener micro-movimientos naturales, no ser estatuas.
```

<a id="category-21"></a>

### Videojuegos / Gráficos por Computadora / Fantasía (5)

### No. 1: Dragón en Picado

- **Category:** `Videojuegos / Gráficos por Computadora / Fantasía`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Utilizando el dragón negro y el caballero de la Imagen 1 como sujetos principales, relación de aspecto panorámica 2.35:1, CG cinematográfico, luz de borde cálida + sombras azul profundo, genera un clip de vuelo fantástico de 30 segundos.

#### Prompt

```text
Utilizando el dragón negro y el caballero de la Imagen 1 como sujetos principales, relación de aspecto panorámica 2.35:1, CG cinematográfico, luz de borde cálida + sombras azul profundo, genera un clip de vuelo fantástico de 30 segundos.
Shot 1: Vista panorámica, el dragón negro @Imagen 1 se eleva desde el cañón desplegando sus alas, la cámara se eleva lentamente siguiéndolo, (comienza una orquesta grandiosa).
Shot 2: Plano medio, el caballero @Imagen 1 se agacha, el dragón negro @Imagen 1 gira bruscamente a la derecha en picado, la cámara lo sigue con un movimiento suave (ángulo de cámara ligeramente bajo), <silbido del viento>.
Shot 3: Primer plano, el dragón negro @Imagen 1 repliega un ala mientras atraviesa la neblina de una cascada, la cámara se acerca lentamente.
Shot 4: Vista panorámica, el dragón negro @Imagen 1 sale de la neblina y se desliza hacia un claro en el bosque, la cámara se aleja lentamente y se congela, (la música concluye).
Restricciones: La apariencia del dragón negro y el caballero debe ser consistente con la Imagen 1 durante todo el clip, prohibido duplicar o crear gemelos.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 2: Liberación Mágica

- **Category:** `Videojuegos / Gráficos por Computadora / Fantasía`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con la archimaga @Imagen 1 como sujeto principal, relación de aspecto panorámica 2.35:1, CG mágico cinematográfico, luz de runas azul etéreo + brillo de partículas, genera un clip de invocación de hechizos de 30 segundos.

#### Prompt

```text
Con la archimaga @Imagen 1 como sujeto principal, relación de aspecto panorámica 2.35:1, CG mágico cinematográfico, luz de runas azul etéreo + brillo de partículas, genera un clip de invocación de hechizos de 30 segundos.
Shot 1: Primer plano, la archimaga @Imagen 1 abre los ojos y las runas brillan en sus pupilas, cámara fija, (comienza un canto grave y repentino) {"En nombre del éter——"}.
Shot 2: Plano medio, la archimaga @Imagen 1 levanta la mano y un círculo mágico giratorio se concentra en su palma, la cámara gira lentamente alrededor, <zumbido de energía que se intensifica>.
Shot 3: Primer plano, las partículas se condensan en una esfera de luz en la punta de los dedos de la archimaga @Imagen 1, la cámara se acerca lentamente, (la música contiene la respiración por un momento).
Shot 4: Vista panorámica, la archimaga @Imagen 1 empuja con ambas manos una explosión gigante de escarcha hacia adelante, la cámara sigue suavemente la onda de choque, <estallido repentino>.
Shot 5: Plano medio, la archimaga @Imagen 1 recupera la postura jadeando mientras los últimos destellos del círculo mágico se desvanecen, la cámara se aleja lentamente y se congela, (el eco del canto concluye).
Restricciones: La vestimenta de la archimaga y la combinación de colores de las runas deben ser consistentes con la Imagen 1 durante todo el clip, los círculos mágicos y las partículas deben mantener siempre una gama de colores azul etéreo, prohibido cambiar de color a mitad o deformar al personaje.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 3: Presentación del Mecha

- **Category:** `Videojuegos / Gráficos por Computadora / Fantasía`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con el mecha gigante @Imagen 1 como sujeto principal, relación de aspecto panorámica 2.35:1, CG industrial de alta tecnología, metal de acero frío + luces de hangar y vapor, genera un clip de despliegue de mecha de 30 segundos.

#### Prompt

```text
Con el mecha gigante @Imagen 1 como sujeto principal, relación de aspecto panorámica 2.35:1, CG industrial de alta tecnología, metal de acero frío + luces de hangar y vapor, genera un clip de despliegue de mecha de 30 segundos.
Shot 1: Primer plano, la cámara principal/ojos del mecha @Imagen 1 se encienden repentinamente con luz roja, cámara fija, (comienza un retumbar grave industrial) <zumbido de inicio del sistema>.
Shot 2: Vista panorámica desde abajo, el mecha @Imagen 1 levanta lentamente la cabeza y se pone de pie en el hangar, la cámara se eleva lentamente mirando hacia arriba, <siseo hidráulico>.
Shot 3: Plano medio, el mecha @Imagen 1 da un paso que hace temblar el suelo, vapor brota, la cámara lo sigue desde un ángulo bajo, (golpe de tambor) <pesado paso metálico>.
Shot 4: Primer plano, el compartimento de misiles en el hombro del mecha @Imagen 1 se despliega y apunta, la cámara se acerca lentamente, (efecto de sonido "bloqueo" bip) 【Armamento listo】.
Shot 5: Vista panorámica, el mecha @Imagen 1 sale del hangar y salta hacia el campo de batalla, la cámara lo sigue suavemente y luego se aleja y se congela, (la música estalla y concluye) <rugido de propulsores>.
Restricciones: La estructura del cuerpo del mecha y el esquema de pintura deben ser consistentes con la Imagen 1 durante todo el clip, el movimiento de las articulaciones mecánicas debe ajustarse a la sensación de peso y la lógica hidráulica, prohibido clipping de partes o movimiento ligero/ingrávido.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 4: Vista Panorámica de Mundo Abierto

- **Category:** `Videojuegos / Gráficos por Computadora / Fantasía`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con la vista panorámica del continente fantástico @Imagen 1 como sujeto principal, relación de aspecto panorámica 2.35:1, CG de videojuego de mundo abierto, nubes volumétricas + niebla matutina + profundidad de campo de visión ultra lejana, genera un clip de presentación del mundo de 30 segundos.

#### Prompt

```text
Con la vista panorámica del continente fantástico @Imagen 1 como sujeto principal, relación de aspecto panorámica 2.35:1, CG de videojuego de mundo abierto, nubes volumétricas + niebla matutina + profundidad de campo de visión ultra lejana, genera un clip de presentación del mundo de 30 segundos.
Shot 1: Vista panorámica, la niebla matutina @Imagen 1 fluye sobre los valles y las islas flotantes distantes, la cámara se eleva lentamente en un plano aéreo, (comienza una música de cuerdas expansiva) <viento matutino y canto de pájaros>.
Shot 2: Plano medio, una cascada @Imagen 1 cae desde un acantilado gigante hacia un mar de nubes, la cámara se desplaza horizontalmente con suavidad, <rugido del agua>.
Shot 3: Vista panorámica, una manada de bestias gigantes @Imagen 1 vuela sobre la pradera hacia una ciudad distante, la cámara las sigue lentamente, (las capas de cuerdas se intensifican).
Shot 4: Primer plano, una antigua estela con runas grabadas @Imagen 1, la cámara se acerca lentamente, <zumbido misterioso>.
Shot 5: Vista panorámica, la cámara se eleva para revelar la forma completa del continente @Imagen 1 y el cielo con dos soles, la cámara se eleva lentamente y se aleja y se congela, (la música majestuosa concluye) 【El mundo, te espera para explorar】.
Restricciones: La topografía del continente y la disposición de las islas flotantes deben ser consistentes con la Imagen 1 durante todo el clip, mantener la profundidad de campo de visión ultra lejana con capas de niebla volumétrica, prohibido uniones incorrectas del terreno o distorsión de proporciones.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 5: Demostración de Renderizado de Modelo Blanco

- **Category:** `Videojuegos / Gráficos por Computadora / Fantasía`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Con el modelo blanco de escena @Imagen 1 como sujeto principal, texturas tomadas de la imagen de referencia 2, pantalla horizontal 16:9, demostración de desglose de renderizado en tiempo real, comenzando con un modelo base gris/blanco sin brillo, genera un clip de evolución de renderizado de 30 segundos desde modelo blanco hasta resultado final.

#### Prompt

```text
Con el modelo blanco de escena @Imagen 1 como sujeto principal, texturas tomadas de la imagen de referencia 2, pantalla horizontal 16:9, demostración de desglose de renderizado en tiempo real, comenzando con un modelo base gris/blanco sin brillo, genera un clip de evolución de renderizado de 30 segundos desde modelo blanco hasta resultado final.
Shot 1: Vista panorámica, el modelo blanco @Imagen 1 (escena gris/blanca sin texturas) gira lentamente mostrando sus volúmenes, la cámara gira lentamente alrededor, (comienza música electrónica con sensación tecnológica) 【Blockout·Modelo Blanco】.
Shot 2: Plano medio, las texturas @Imagen 2 se aplican sobre la superficie del modelo blanco @Imagen 1 cubriendo gradualmente piedra y vetas de madera, la cámara se desplaza horizontalmente con suavidad, <tic-tac de carga de texturas>.
Shot 3: Primer plano, los detalles de normales y rugosidad aparecen en la escena @Imagen 1 mostrando textura de relieve, la cámara se acerca lentamente, 【Materiales PBR·Color】.
Shot 4: Vista panorámica, las luces de la escena @Imagen 1 se encienden una a una proyectando sombras y reflejos, la cámara se eleva lentamente, (la música avanza en capas) 【Lighting·Iluminación】.
Shot 5: Vista panorámica, la escena @Imagen 1 recibe gradación de color y luz volumétrica convirtiéndose en el fotograma final, la cámara se aleja lentamente y se congela, (la música concluye) 【Final Render】.
Restricciones: Los volúmenes y la estructura de la escena deben ser consistentes con la Imagen 1 durante todo el clip, las texturas se toman de la Imagen 2 y se aplican gradualmente, la transición de modelo blanco a resultado final solo cambia el sombreado, no la disposición geométrica, prohibido deformación del modelo o errores visibles.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Los personajes deben tener movimiento natural leve, no ser estatuas.
```

<a id="category-22"></a>

### Animación / Dibujos Animados (4)

### No. 1: Especial de Comida al Estilo Ghibli

- **Category:** `Animación / Dibujos Animados`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Utilizando las manos y la cocina nocturna de la Imagen 1 como sujetos principales (las manos y la cocina según la Imagen 1), pantalla vertical 9:16, estilo de dibujo a mano alzada Ghibli, tono cálido de cocina nocturna, genera un clip curativo de comedor nocturno de 30 segundos.

#### Prompt

```text
Utilizando las manos y la cocina nocturna de la Imagen 1 como sujetos principales (las manos y la cocina según la Imagen 1), pantalla vertical 9:16, estilo de dibujo a mano alzada Ghibli, tono cálido de cocina nocturna, genera un clip curativo de comedor nocturno de 30 segundos.
Shot 1: Primer plano extremo, una gota de agua rueda por la piel de un tomate reflejando la luz cálida, cámara fija ligeramente inclinada hacia abajo, <sonido suave de la gota cayendo>, (comienza una guitarra acústica curativa).
Shot 2: Plano medio, una mano corta un tomate con un cuchillo y el jugo rojo se escapa, la cámara se desplaza lentamente, <sonido del cuchillo cortando la pulpa suave y crujiente>.
Shot 3: Primer plano, los trozos de tomate se deslizan hacia una sartén con aceite caliente levantando humo blanco, la cámara se acerca lentamente, <sonido de los ingredientes al caer en la sartén>.
Shot 4: Primer plano extremo, la mano espolvorea hojas de albahaca mientras revuelve y el aroma se eleva, la cámara gira lentamente alrededor, <sonido de la espátula revolviendo>.
Shot 5: Plano medio, la sopa caliente se sirve en un cuenco de cerámica y las manos lo llevan al centro del encuadre, la cámara se aleja lentamente, <sonido burbujeante de la sopa>, (la guitarra acústica concluye).
Restricciones: Bloquear el estilo de dibujo a mano Ghibli, prohibido desviarse hacia realismo; Solo un par de manos durante todo el clip, no mostrar rostros ni manos adicionales; La disposición de la cocina nocturna debe ser fija según la Imagen 1.
Restricciones generales: Mantener sin subtítulos; No generar Logo; No generar marca de agua; Cada toma usa solo un tipo de movimiento de cámara; Los personajes deben tener movimiento natural leve, no ser estatuas.
```

### No. 2: Interacción de personajes chibi

- **Category:** `Animación / Dibujos Animados`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia los dos personajes chibi de ojos grandes y cabeza redonda de la Imagen 1 (el diseño y la paleta de colores deben coincidir exactamente con la Imagen 1), formato vertical 9:16, estilo de corto animado de colores dulces, iluminación suave y alta saturación, generar un corto adorable de 30 segundos de interacción.

#### Prompt

```text
Tomando como referencia los dos personajes chibi de ojos grandes y cabeza redonda de la Imagen 1 (el diseño y la paleta de colores deben coincidir exactamente con la Imagen 1), formato vertical 9:16, estilo de corto animado de colores dulces, iluminación suave y alta saturación, generar un corto adorable de 30 segundos de interacción.
Shot 1: Primerísimo plano, un personaje chibi abre los ojos muy grandes, sus mejillas se hinchan mientras intenta contener la risa, cámara fija, <efecto de sonido de 'pop' saltarín de dibujos animados>, (comienza una marimba juguetona).
Shot 2: Plano medio, el otro personaje se acerca saltando y ofrece un caramelo con forma de corazón, la cámara se desplaza lentamente en horizontal, <sonido de pasos saltarines 'ding ding'>.
Shot 3: Plano general, los dos personajes giran en círculo tomados de la mano dejando una estela de estrellas, la cámara se mueve lentamente en círculo alrededor, {(los personajes) "¡A girar juntos!"}.
Shot 4: Primer plano, un personaje tropieza de repente y sus ojos se llenan de lágrimas, la cámara se acerca lentamente, <efecto de sonido exagerado de llanto 'waaa'>.
Shot 5: Plano medio, el otro personaje se lanza a abrazarlo, dos corazones saltan fuera de la escena, la cámara se aleja lentamente, 【Amistad al máximo】, (la marimba sube y concluye).
Restricciones: Bloquear el estilo de dibujos animados de colores dulces chibi, prohibido derivar hacia realismo; el diseño y la paleta de colores de los dos personajes deben ser estrictamente como en la Imagen 1; las expresiones exageradas y las deformaciones deben seguir la física de los dibujos animados.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural sutil, no ser estatuas.
```

### No. 3: Estilo Pixar 3D

- **Category:** `Animación / Dibujos Animados`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia el pequeño robot de la Imagen 1 (el diseño y los materiales deben coincidir exactamente con la Imagen 1), formato horizontal 16:9, estilo de animación 3D Pixar, calidad de luz cálida de sol matutino, generar un corto curativo de exploración de 30 segundos.

#### Prompt

```text
Tomando como referencia el pequeño robot de la Imagen 1 (el diseño y los materiales deben coincidir exactamente con la Imagen 1), formato horizontal 16:9, estilo de animación 3D Pixar, calidad de luz cálida de sol matutino, generar un corto curativo de exploración de 30 segundos.
Shot 1: Primerísimo plano, los ojos redondos del pequeño robot se encienden lentamente y enfocan un diente de león, cámara fija, <sonido mecánico de enfoque 'dii'>, (comienza suavemente la orquesta).
Shot 2: Plano medio, el pequeño robot inclina la cabeza con curiosidad y extiende su brazo mecánico para tocar suavemente un pétalo, la cámara se acerca lentamente, <sonido sutil de motores servo girando>.
Shot 3: Plano general, una ráfaga de viento dispersa las semillas del diente de león y el pequeño robot corre tras ellas, la cámara lo sigue, <sonido de aire al dispersarse las semillas plumosas>.
Shot 4: Contrapicado, las semillas vuelan por el cielo y el pequeño robot abre los brazos mirando hacia arriba, la cámara se eleva y desciende lentamente, (las cuerdas de la orquesta aumentan gradualmente).
Shot 5: Plano lejano, el pequeño robot solo en la cima de una colina, el sol de la mañana se alza alargando su sombra, la cámara se aleja lentamente, (la orquesta alcanza su clímax y concluye).
Restricciones: Bloquear el estilo Pixar 3D, prohibido derivar hacia realismo o hacia el dibujo a mano de Ghibli; el diseño y materiales del robot deben ser como en la Imagen 1; la luz cálida con dispersión subsuperficial debe estar presente en todo el corto.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural sutil, no ser estatuas.
```

### No. 4: Animación de paisaje en acuarela

- **Category:** `Animación / Dibujos Animados`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia el pueblo de aguas del sur de China de la Imagen 1 (la composición y la paleta de colores deben coincidir exactamente con la Imagen 1), formato horizontal 16:9, estilo de animación a mano de acuarela fluida, paleta de colores claros gris-verdes post-lluvia, generar un corto poético de 30 segundos sobre el paso de las estaciones.

#### Prompt

```text
Tomando como referencia el pueblo de aguas del sur de China de la Imagen 1 (la composición y la paleta de colores deben coincidir exactamente con la Imagen 1), formato horizontal 16:9, estilo de animación a mano de acuarela fluida, paleta de colores claros gris-verdes post-lluvia, generar un corto poético de 30 segundos sobre el paso de las estaciones.
Shot 1: Primerísimo plano, una gota de lluvia cae en el agua, las ondas se expanden y la tinta se difunde, cámara ligeramente inclinada hacia abajo fija, <sonido claro de la gota de lluvia al entrar en el agua>, (comienzan los armónicos del guzheng).
Shot 2: Plano general, las paredes blancas y los tejados grises se reflejan en el agua, las pinceladas de acuarela se mecen suavemente con las olas, la cámara se desplaza lentamente en horizontal, <sonido de llovizna suave>.
Shot 3: Plano lejano, un bote de remos pasa bajo un puente arqueado abriendo ondas en el agua, la cámara lo sigue lentamente, <sonido de los remos moviendo el agua>.
Shot 4: Plano medio, junto al puente, las ramas de sauce brotan y los pétalos caen, la paleta de colores cambia a rosa primaveral, la cámara se acerca lentamente, <sonido del viento rozando las hojas>.
Shot 5: Plano lejano, cae el crepúsculo, las linternas se encienden una tras otra reflejándose en el río, la cámara se eleva y desciende lentamente, (el guzheng concluye con un sonido lejano).
Restricciones: Bloquear el estilo de dibujo a mano de acuarela fluida, prohibido derivar hacia realismo o 3D; la composición del pueblo de aguas debe ser como en la Imagen 1; la sensación de difuminado de las pinceladas y la textura del papel deben conservarse durante todo el corto.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural sutil, no ser estatuas.
```

<a id="category-23"></a>

### Deportes / Fitness (4)

### No. 1: Fuerza en el gimnasio

- **Category:** `Deportes / Fitness`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia el atleta de peso muerto de la Imagen 1 (la persona y el equipo deben coincidir exactamente con la Imagen 1), formato vertical 9:16, estilo de anuncio de fitness duro, calidad de acero con alto contraste y tonos fríos, generar un corto de explosión de fuerza de 30 segundos.

#### Prompt

```text
Tomando como referencia el atleta de peso muerto de la Imagen 1 (la persona y el equipo deben coincidir exactamente con la Imagen 1), formato vertical 9:16, estilo de anuncio de fitness duro, calidad de acero con alto contraste y tonos fríos, generar un corto de explosión de fuerza de 30 segundos.
Shot 1: Primerísimo plano, la palma de la mano golpea fuertemente la barra con magnesio, el polvo salpica, cámara fija, <sonido sordo del golpe de magnesio>, (comienza el pulso de percusión de baja frecuencia).
Shot 2: Primer plano, las manos agarran la barra con fuerza, las venas sobresalen, la cámara se acerca lentamente, <sonido de la barra de hierro crujiendo bajo tensión>.
Shot 3: Plano general, el atleta hace fuerza para levantar la barra, los discos tiemblan ligeramente, la cámara se eleva y desciende lentamente siguiendo el levantamiento, <gruñido profundo de esfuerzo>.
Shot 4: Contrapicado, la barra se levanta hasta el punto más alto, la luz fría perfila las líneas musculares, la cámara se mueve lentamente en círculo alrededor, (el golpe de percusión alcanza su punto más fuerte).
Shot 5: Primer plano, la barra cae al suelo, rebota y vibra, salpicando gotas de sudor, la cámara se aleja lentamente, <estruendo de los discos de hierro al golpear el suelo>, (la percusión se detiene abruptamente).
Restricciones: La persona y el equipo deben ser como en la Imagen 1; la luz dura fría y el alto contraste deben estar presentes en todo el corto; el temblor de los discos y las gotas de sudor deben ajustarse a la física real del peso.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural sutil, no ser estatuas.
```

### No. 2: Extensión de yoga

- **Category:** `Deportes / Fitness`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia la practicante de yoga y el aula con luz matutina de la Imagen 1 (la persona y el espacio deben coincidir exactamente con la Imagen 1), formato vertical 9:16, estilo de vida tranquilo y zen, paleta de baja saturación con luz suave de niebla matutina, generar un corto de extensión cuerpo-mente de 30 segundos.

#### Prompt

```text
Tomando como referencia la practicante de yoga y el aula con luz matutina de la Imagen 1 (la persona y el espacio deben coincidir exactamente con la Imagen 1), formato vertical 9:16, estilo de vida tranquilo y zen, paleta de baja saturación con luz suave de niebla matutina, generar un corto de extensión cuerpo-mente de 30 segundos.
Shot 1: Primerísimo plano, la practicante cierra los ojos y respira profundamente, su aliento levanta motas de polvo que flotan en un haz de luz, cámara fija, <sonido de una respiración larga y profunda>, (comienza el sonido largo de un cuenco tibetano).
Shot 2: Plano general, el cuerpo se pliega lentamente hacia adelante en una flexión, la luz matutina baña la espalda, la cámara se eleva y desciende lentamente, <sonido sutil de la ropa rozando>.
Shot 3: Plano medio, los brazos se extienden y fluyen hacia la postura del guerrero, la respiración es estable, la cámara se mueve lentamente en círculo alrededor, (el sonido del cuenco y el canto de los pájaros se entrelazan).
Shot 4: Primer plano, las yemas de los dedos tocan suavemente el tobillo, las líneas musculares se extienden y estiran, la cámara se desplaza lentamente en horizontal, <sonido leve del estiramiento del tendón>.
Shot 5: Plano general, sentada en posición de loto con las manos juntas en oración, la cabeza inclinada, la niebla matutina llena toda el aula, la cámara se aleja lentamente, (el sonido del cuenco tibetano se desvanece y concluye).
Restricciones: La persona y el aula con luz matutina deben ser como en la Imagen 1; la base zen de luz suave y baja saturación debe estar presente en todo el corto; los movimientos deben ser fluidos y pausados, prohibidos los cambios bruscos.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural sutil, no ser estatuas.
```

### No. 3: Mate de baloncesto

- **Category:** `Deportes / Fitness`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia el jugador de baloncesto callejero de la Imagen 1 (la persona y la cancha deben coincidir exactamente con la Imagen 1), formato horizontal 16:9, estilo de anuncio deportivo callejero ardiente, paleta de luz dura cálida anaranjada al atardecer, generar un corto de alto voltaje de mate de 30 segundos.

#### Prompt

```text
Tomando como referencia el jugador de baloncesto callejero de la Imagen 1 (la persona y la cancha deben coincidir exactamente con la Imagen 1), formato horizontal 16:9, estilo de anuncio deportivo callejero ardiente, paleta de luz dura cálida anaranjada al atardecer, generar un corto de alto voltaje de mate de 30 segundos.
Shot 1: Primerísimo plano, el balón gira rápidamente en la punta de los dedos, las líneas son claras, cámara fija, <sonido de fricción del balón de cuero girando>, (comienza el golpe fuerte de la percusión electrónica).
Shot 2: Plano general, el atleta dribla, rompe la defensa, se detiene en seco y cambia de dirección, las suelas de los zapatos rozan el suelo, la cámara lo sigue, <chillido de los zapatos al frenar bruscamente>.
Shot 3: Plano medio, los pies empujan contra el suelo para despegar, el cuerpo se estira al máximo volando hacia la canasta, la cámara se eleva y desciende lentamente siguiendo el salto, <estallido del empuje contra el suelo al saltar>.
Shot 4: Contrapicado, el jugador queda suspendido en el aire, la mano levantando el balón a punto de estrellarlo, silueta a contraluz, la cámara se mueve lentamente en círculo alrededor, (la percusión se vacía y hay un compás de silencio).
Shot 5: Primer plano, el balón entra violentamente en la red, el aro tiembla fuertemente, la cámara se acerca lentamente, <estruendo del aro al golpear>, (la percusión estalla y concluye).
Restricciones: La persona y la cancha callejera deben ser como en la Imagen 1; la luz dura cálida anaranjada del atardecer y el contraluz deben estar presentes en todo el corto; la suspensión en el aire y el temblor de la red deben ajustarse a la física real del movimiento.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marca de agua; cada toma usa solo un tipo de movimiento de cámara; los personajes deben tener movimiento natural sutil, no ser estatuas.
```

### No. 4: Silueta de Carrera

- **Category:** `Deportes / Fitness`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia a la persona que corre al amanecer y la carretera costera de la Imagen 1 como sujetos principales (la silueta de la persona y el entorno deben coincidir con la Imagen 1), formato horizontal 16:9, estilo de vídeo inspiracional para marca deportiva, tonos dorados y naranjas a contraluz del amanecer, generar un vídeo de 30 segundos sobre la perseverancia en el running matutino.

#### Prompt

```text
Tomando como referencia a la persona que corre al amanecer y la carretera costera de la Imagen 1 como sujetos principales (la silueta de la persona y el entorno deben coincidir con la Imagen 1), formato horizontal 16:9, estilo de vídeo inspiracional para marca deportiva, tonos dorados y naranjas a contraluz del amanecer, generar un vídeo de 30 segundos sobre la perseverancia en el running matutino.
Shot 1: Primerísimo plano, zapatilla de correr pisando el asfalto húmedo salpicando pequeñas gotas de agua, cámara fija ligeramente en picado, <sonido del impacto de la suela contra el suelo>, (cuerdas inspiradoras comienzan de fondo).
Shot 2: Plano medio, silueta del corredor a contraluz dando zancadas uniformes con sudor goteando por la mandíbula, cámara siguiendo el movimiento, <ritmo de respiración estable y potente>.
Shot 3: Plano general, línea costera extendiéndose, el sol saliendo del mar tiñendo el cielo de rojo, cámara elevándose y descendiendo lentamente, (las cuerdas se suman al avance de la percusión).
Shot 4: Primer plano, brazo balanceándose, números del reloj pulsando, frecuencia cardíaca aumentando, cámara desplazándose lentamente, <tic-tac del reloj>.
Shot 5: Plano lejano, silueta del corredor alcanzando la cima de la colina con los brazos abiertos abrazando el sol naciente, cámara alejándose lentamente, (cuerdas y percusión alcanzan un clímax y concluyen).
Restricciones: La silueta de la persona y la carretera costera deben coincidir con la Imagen 1; los tonos dorados y naranjas a contraluz del amanecer deben ser consistentes; la postura al correr y la cadencia deben ser uniformes y fluidas, sin movimientos bruscos.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma debe usar solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

<a id="category-24"></a>

### Música / Danza / Videoclip (4)

### No. 1: Seguimiento de Baile

- **Category:** `Música / Danza / Videoclip`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia a la bailarina de danza contemporánea y el espacio de estilo industrial de la Imagen 1 como sujetos principales (la persona y la escena deben coincidir con la Imagen 1), formato vertical 9:16, estilo de seguimiento tipo videoclip urbano, iluminación de neón azul frío, generar un vídeo de baile rítmico de 30 segundos.

#### Prompt

```text
Tomando como referencia a la bailarina de danza contemporánea y el espacio de estilo industrial de la Imagen 1 como sujetos principales (la persona y la escena deben coincidir con la Imagen 1), formato vertical 9:16, estilo de seguimiento tipo videoclip urbano, iluminación de neón azul frío, generar un vídeo de baile rítmico de 30 segundos.
Shot 1: Primerísimo plano, dedos de la bailarina abriéndose bruscamente al primer golpe del ritmo, cámara fija, <chasquido nítido>, (ritmo electrónico comienza).
Shot 2: Plano general, cuerpo balanceándose ampliamente, pasos de baile desplegándose siguiendo el ritmo, cámara siguiendo el movimiento, <sonido de la tela agitándose en el aire>.
Shot 3: Plano medio, giro y salto, falda trazando un arco con estela de neón, cámara orbitando lentamente, (el ritmo se intensifica y se superpone un bajo).
Shot 4: Primer plano, punta del pie pisando el suelo rápidamente, reflejos en el suelo temblando, cámara desplazándose lentamente, <sonido continuo de los tacones golpeando el suelo>.
Shot 5: Plano general, pose congelada, luces de neón parpadeando iluminando el contorno del cuerpo, cámara alejándose lentamente, (el ritmo concluye en un golpe fuerte).
Restricciones: La persona y el espacio de estilo industrial deben coincidir con la Imagen 1; la iluminación de neón azul frío debe ser consistente; el ritmo del movimiento de cámara debe estar estrictamente sincronizado con los golpes fuertes de la música.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma debe usar solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

### No. 2: Solo de Piano

- **Category:** `Música / Danza / Videoclip`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia al pianista y el escenario del viejo teatro de la Imagen 1 como sujetos principales (la persona y el piano deben coincidir con la Imagen 1), formato horizontal 16:9, estilo cinematográfico de concierto clásico, iluminación cálida dorada con foco en oscuridad, generar un vídeo de solo profundo de 30 segundos.

#### Prompt

```text
Tomando como referencia al pianista y el escenario del viejo teatro de la Imagen 1 como sujetos principales (la persona y el piano deben coincidir con la Imagen 1), formato horizontal 16:9, estilo cinematográfico de concierto clásico, iluminación cálida dorada con foco en oscuridad, generar un vídeo de solo profundo de 30 segundos.
Shot 1: Primerísimo plano, dedos suspendidos sobre las teclas del piano descendiendo suavemente para tocar la primera nota, cámara fija, (una nota clara de piano suena).
Shot 2: Primer plano, manos deslizándose fluidamente sobre las teclas blancas y negras, martillos subiendo y bajando, cámara desplazándose lentamente, <sonido nítido de las teclas golpeando las cuerdas>.
Shot 3: Plano medio, pianista con los ojos cerrados, inmerso, cuerpo inclinándose ligeramente con la melodía, cámara acercándose lentamente, (la melodía gradualmente alcanza su clímax).
Shot 4: Plano general, piano solo bajo el foco de luz en un escenario vacío y amplio, polvo flotando en la luz, cámara elevándose y descendiendo lentamente, (acordes superponiéndose capa tras capa).
Shot 5: Primerísimo plano, última tecla presionada, dedo detenido, vibración residual del sonido, cámara alejándose lentamente, <vibración residual de la cuerda del piano desvaneciéndose>, (la melodía concluye en silencio).
Restricciones: La persona y el piano deben coincidir con la Imagen 1; la iluminación cálida dorada con foco en oscuridad debe ser consistente; las acciones de las manos presionando las teclas deben corresponder estrictamente al inicio y fin de las notas.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma debe usar solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

### No. 3: Batalla de Street Dance

- **Category:** `Música / Danza / Videoclip`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia a los dos bailarines de street dance y el local subterráneo de la Imagen 1 como sujetos principales (las personas y el lugar deben coincidir con la Imagen 1), formato vertical 9:16, estilo documental de street dance subterráneo, iluminación de alto contraste mezclando luces cálidas y frías, generar un vídeo de batalla de 30 segundos.

#### Prompt

```text
Tomando como referencia a los dos bailarines de street dance y el local subterráneo de la Imagen 1 como sujetos principales (las personas y el lugar deben coincidir con la Imagen 1), formato vertical 9:16, estilo documental de street dance subterráneo, iluminación de alto contraste mezclando luces cálidas y frías, generar un vídeo de batalla de 30 segundos.
Shot 1: Primerísimo plano, un bailarín bajando la visera de su gorra y mirando desafiante directamente a la cámara, cámara fija, <sonido de la multitud agitándose y animando>, (golpe de batería hip-hop comienza).
Shot 2: Plano general, primer bailarín entrando en el área de baile con movimientos explosivos en el suelo, círculo de espectadores abriéndose, cámara siguiendo el movimiento, <sonido sólido de las palmas golpeando el suelo>.
Shot 3: Plano medio, movimiento de giro Thomas (windmill), piernas trazando círculos, cámara orbitando lentamente, (ovación de la multitud superpuesta al ritmo).
Shot 4: Primer plano, oponente relevando con un movimiento de cadera congelado, sudor salpicando de la visera, cámara acercándose lentamente, <respiración agitada y sonido de pisadas>.
Shot 5: Plano general, ambos bailarines congelados en postura de enfrentamiento, espectadores estallando al unísono, cámara alejándose lentamente, {(espectadores) "¡Oh—!"}, (golpe fuerte de batería concluye).
Restricciones: Los dos bailarines y el local subterráneo deben coincidir con la Imagen 1; la mezcla de luces cálidas y frías de alto contraste debe ser consistente; los movimientos en el suelo y los giros deben ser físicamente realistas, fluidos y sin interrupciones.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma debe usar solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

### No. 4: Ambiente de Concierto

- **Category:** `Música / Danza / Videoclip`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia al vocalista principal y el escenario del estadio de la Imagen 1 como sujetos principales (la persona y el escenario deben coincidir con la Imagen 1), formato horizontal 16:9, estilo de grabación realista de concierto masivo, iluminación de focos de colores y mar de luces fluorescentes, generar un vídeo épico de 30 segundos de canto masivo.

#### Prompt

```text
Tomando como referencia al vocalista principal y el escenario del estadio de la Imagen 1 como sujetos principales (la persona y el escenario deben coincidir con la Imagen 1), formato horizontal 16:9, estilo de grabación realista de concierto masivo, iluminación de focos de colores y mar de luces fluorescentes, generar un vídeo épico de 30 segundos de canto masivo.
Shot 1: Primerísimo plano, labios del vocalista cerca del micrófono, abriendo los ojos y cantando la primera frase, cámara fija, {(vocalista) "¡Esta noche es vuestra!"}, (introducción de rock rugiendo).
Shot 2: Plano general, focos barriendo el escenario, vocalista abriendo los brazos encendiendo al público, cámara elevándose y descendiendo lentamente, <gritos ensordecedores del público>.
Shot 3: Plano lejano, luces fluorescentes en las gradas formando un mar ondulante balanceándose al ritmo, cámara desplazándose lentamente horizontalmente, (estribillo con percusión completa).
Shot 4: Plano medio, vocalista caminando hacia el frente del escenario extendiendo la mano, público extendiendo los brazos para conectar, cámara siguiendo el movimiento, <canto unísono de miles>.
Shot 5: Plano general, fuegos artificiales y láseres estallando simultáneamente, silueta del vocalista sosteniendo alto el micrófono, cámara alejándose lentamente, 【canto masivo de todo el estadio】, (estribillo alcanza un clímax épico y concluye).
Restricciones: La persona y el escenario del estadio deben coincidir con la Imagen 1; los focos de colores y el mar de luces fluorescentes deben ser consistentes; el parpadeo de luces y los fuegos artificiales deben estar sincronizados con los golpes fuertes de la percusión.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma debe usar solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

<a id="category-25"></a>

### Festividades / Estaciones del Año (5)

### No. 1: Reunión de Año Nuevo Chino

- **Category:** `Festividades / Estaciones del Año`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Tomando como referencia a los miembros de la familia de la Imagen 1, Imagen 2 e Imagen 3 como sujetos principales (cada uno según su imagen correspondiente), formato horizontal 16:9, estilo realista festivo y cálido, tonos cálidos rojos de linternas, generar un vídeo corto de Año Nuevo Chino de 30 segundos.

#### Prompt

```text
Tomando como referencia a los miembros de la familia de la Imagen 1, Imagen 2 e Imagen 3 como sujetos principales (cada uno según su imagen correspondiente), formato horizontal 16:9, estilo realista festivo y cálido, tonos cálidos rojos de linternas, generar un vídeo corto de Año Nuevo Chino de 30 segundos.
Shot 1: Acercamiento lento, fuegos artificiales explotando fuera de la ventana iluminando el marco con el carácter '福' (Fú) pegado, linternas rojas cálidas balanceándose en el interior, (campanadas chinas distantes y música festiva comienzan gradualmente).
Shot 2: Orbital, familia sentada alrededor de la mesa de la cena de Año Nuevo brindando, vapor caliente y luz cálida, <sonido suave de tazones y palillos chocando>.
Shot 3: Cámara fija, persona mayor @Imagen 1 sirviendo comida a los nietos con una sonrisa amorosa, primer plano de los platos deliciosos en la mesa con fondo desenfocado.
Shot 4: Seguimiento estable, niño @Imagen 3 sosteniendo un sobre rojo (hongbao) saltando en el patio, hileras de linternas rojas extendiéndose a lo largo del camino, <risas alegres y nítidas>.
Shot 5: Plano contrapicado, toda la familia @Imagen 2 mirando hacia arriba asombrada por los fuegos artificiales que llenan el cielo, luz y sombras cubriendo sus rostros sonrientes.
Shot 6: Alejamiento lento, toda la familia frente a la puerta brindando congelada bajo las grandes linternas rojas, aparece el texto 【Feliz Año Nuevo, reunión familiar】, (la música festiva concluye).
Restricciones: Cada persona debe coincidir con su imagen correspondiente, prohibido usar clones/gemelos idénticos, una persona por imagen en tomas conjuntas; los tonos cálidos rojos de las linternas deben ser consistentes en todo el vídeo.
Restricciones generales: Mantener sin subtítulos; no generar Logo; no generar marcas de agua; cada toma debe usar solo un tipo de movimiento de cámara; las personas deben tener movimientos naturales, no ser estatuas.
```

### No. 2: Romance de San Valentín

- **Category:** `Festividades / Estaciones del Año`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia a la mujer de la Imagen 1 y al hombre de la Imagen 2 como sujetos principales (según sus respectivas imágenes), formato vertical 9:16, estilo realista romántico cálido de película francesa, generar un corto de 30 segundos para San Valentín.

#### Prompt

```text
Referencia a la mujer de la Imagen 1 y al hombre de la Imagen 2 como sujetos principales (según sus respectivas imágenes), formato vertical 9:16, estilo realista romántico cálido de película francesa, generar un corto de 30 segundos para San Valentín.
Shot 1: Lento acercamiento, en una esquina al atardecer, la mujer @Image 1 sostiene rosas y mira hacia atrás con una leve sonrisa, la luz trasera cálida y dorada perfila su cabello, (comienza un suave tono de piano).
Shot 2: Seguimiento, el hombre @Image 2 camina rápido acercándose a través de la multitud, las manchas de luz de neón fluyen detrás de él, <el sonido del latido del corazón se intensifica gradualmente>.
Shot 3: Envolvente, la pareja se abraza y gira en una plaza con pétalos cayendo, la luz cálida gira formando halos, (las cuerdas se elevan en capas).
Shot 4: Cámara fija, primer plano de las manos entrelazadas poniéndose anillos de compromiso, un destello de luz se refleja en la superficie de los anillos.
Shot 5: Movimiento vertical ascendente, la cámara asciende desde la pareja pasando por las ramas de los árboles llenas de luces, estrellas centelleantes en el cielo nocturno, (la música llega a su clímax).
Shot 6: Lento alejamiento, silueta de la pareja acurrucada en un banco, aparece el subtítulo 【Cada día te amo】, (el eco del piano se desvanece).
Restricciones: La mujer según la Imagen 1, el hombre según la Imagen 2, sus apariencias deben distinguirse claramente, prohibido hacerlos gemelos; el tono cálido dorado de película debe mantenerse a lo largo.
```

### No. 3: Admirando la Luna en el Festival del Medio Otoño

- **Category:** `Festividades / Estaciones del Año`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia a la persona de la Imagen 1 como sujeto principal (según la Imagen 1), formato horizontal 16:9, fusión de tinta china oriental serena y realismo, tono azul verdoso de luz lunar, generar un corto de 30 segundos para el Festival del Medio Otoño.

#### Prompt

```text
Referencia a la persona de la Imagen 1 como sujeto principal (según la Imagen 1), formato horizontal 16:9, fusión de tinta china oriental serena y realismo, tono azul verdoso de luz lunar, generar un corto de 30 segundos para el Festival del Medio Otoño.
Shot 1: Plano contrapicado, una luna llena emerge lentamente de un mar de nubes, su luz clara se derrama, (comienza el sonido etéreo de un guqin).
Shot 2: Lento acercamiento, la persona @Image 1 de pie sola en el patio mira hacia la luna frente a una mesa de piedra, las sombras del árbol de osmanthus se mecen, <sonido del viento nocturno rozando las hojas>.
Shot 3: Cámara fija, primer plano de un pastel de luna partido revelando su relleno dorado fluido, el vapor del té se eleva en espirales.
Shot 4: Desplazamiento horizontal suave, los faroles del patio y el reflejo de la luna se ondulan en el agua del estanque, <sonido del agua fluyendo>.
Shot 5: Envolvente, la persona @Image 1 levanta una copa brindando con la luna, su ropa ondea suavemente, la luz lunar fluye.
Shot 6: Lento alejamiento, silueta de la persona y la enorme luna llena en el mismo encuadre, aparece el subtítulo 【Que seamos bendecidos con longevidad】, (el guqin concluye).
Restricciones: La persona según la Imagen 1; el tono frío azul verdoso de luz lunar debe ser uniforme, evitar colores cálidos que interfieran con la atmósfera lunar.
```

### No. 4: Ambiente Navideño

- **Category:** `Festividades / Estaciones del Año`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Referencia a los dos miembros de la familia de la Imagen 1 e Imagen 2 como sujetos principales (según sus respectivas imágenes), formato vertical 9:16, realismo de cuento de hadas nórdico con tonos cálidos, tono naranja de chimenea, generar un corto de 30 segundos de Navidad.

#### Prompt

```text
Referencia a los dos miembros de la familia de la Imagen 1 e Imagen 2 como sujetos principales (según sus respectivas imágenes), formato vertical 9:16, realismo de cuento de hadas nórdico con tonos cálidos, tono naranja de chimenea, generar un corto de 30 segundos de Navidad.
Shot 1: Lento acercamiento, nieve cayendo fuera de la ventana sobre un árbol de Navidad decorado con luces de colores, dentro el fuego de la chimenea parpadea, (comienzan campanillas y música navideña).
Shot 2: Cámara fija, la persona @Image 1 cuelga la última estrella decorativa con una sonrisa de satisfacción, las luces de colores se reflejan en su rostro.
Shot 3: Seguimiento, la persona @Image 2 corre hacia el árbol con una caja de regalos mirando con sorpresa, el halo cálido naranja fluye, <sonido de papel de regalo desgarrado>.
Shot 4: Plano picado, galletas de jengibre, chocolate caliente y velas dispuestas sobre la mesa, el vapor y el azúcar glas centellean.
Shot 5: Envolvente, las dos personas @Image1@Image2 acurrucadas frente a la chimenea chocan sus copas, fuera la nieve cae copiosamente.
Shot 6: Lento alejamiento, la luz cálida del interior atraviesa la ventana en la noche nevada, aparece el subtítulo 【Merry Christmas】, (la música navideña concluye).
Restricciones: Cada persona según su imagen correspondiente, sus apariencias deben distinguirse, prohibido hacerlas gemelas, una persona por imagen en el mismo encuadre; el tono cálido naranja de la chimenea debe mantenerse a lo largo.
```

### No. 5: Festival Solar del Inicio de la Primavera (Lichun)

- **Category:** `Festividades / Estaciones del Año`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Sin referencia a personas, formato horizontal 16:9, estética oriental de los 24 festivales solares, acuarela fresca fusionando expresión y realismo, tono verde tierno de brotes nuevos, generar un corto de 30 segundos para el Festival Solar del Inicio de la Primavera.

#### Prompt

```text
Sin referencia a personas, formato horizontal 16:9, estética oriental de los 24 festivales solares, acuarela fresca fusionando expresión y realismo, tono verde tierno de brotes nuevos, generar un corto de 30 segundos para el Festival Solar del Inicio de la Primavera.
Shot 1: Lento acercamiento, un tierno brote emerge silenciosamente del hielo en la punta de una rama seca cubierta de nieve residual, la luz del amanecer lo atraviesa, (comienza un tono claro de flauta de bambú).
Shot 2: Cámara fija macro, un carámbano se derrite y una gota cae sobre la tierra húmeda, <sonido claro de la gota de agua>.
Shot 3: Desplazamiento horizontal suave, la nieve residual en el campo retrocede gradualmente y se extiende un verde tierno, la primera flor silvestre asoma, <sonido suave del viento primaveral>.
Shot 4: Plano contrapicado, golondrinas cruzan el cielo azul girando en círculos, los sauces despliegan nuevos brotes verdes meciéndose con el viento, (el sonido de la flauta se eleva gradualmente).
Shot 5: Movimiento vertical ascendente, la cámara se eleva desde el brote para ver la tierra despertando, el arroyo se descongela y fluye vigorosamente, (los instrumentos de cuerda y bambú se elevan en capas).
Shot 6: Lento alejamiento, un árbol con nuevo follaje verde se yergue en el campo, aparece el subtítulo 【Inicio de la Primavera - El comienzo de todas las cosas】, (los instrumentos de cuerda y bambú concluyen).
Restricciones: Los colores deben transicionar del gris frío de la nieve residual al verde cálido y tierno, reflejando el cambio temporal del invierno a la primavera; sin aparición de personas.
```

<a id="category-26"></a>

### Naturaleza / Astronomía / Documental (4)

### No. 1: Time-lapse del Cielo Estrellado

- **Category:** `Naturaleza / Astronomía / Documental`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Sin referencia a personas, formato horizontal 16:9, fotografía time-lapse del cielo estrellado de nivel documental de la BBC, tono azul oscuro del espacio profundo, generar un corto time-lapse de 30 segundos del cielo estrellado.

#### Prompt

```text
Sin referencia a personas, formato horizontal 16:9, fotografía time-lapse del cielo estrellado de nivel documental de la BBC, tono azul oscuro del espacio profundo, generar un corto time-lapse de 30 segundos del cielo estrellado.
Shot 1: Plano contrapicado, el arco de la Vía Láctea cruza el cenit, las estrellas giran y fluyen, la silueta de un pico solitario en primer plano, (comienza música electrónica ambiental de baja frecuencia cósmica).
Shot 2: Time-lapse con cámara fija, las estelas estelares dibujan arcos concéntricos alrededor de la Estrella Polar, <sonido bajo de insectos nocturnos>.
Shot 3: Desplazamiento horizontal lento, la Vía Láctea se hunde lentamente tras las montañas lejanas, un meteoro rasga el cielo nocturno dejando una larga estela.
Shot 4: Movimiento vertical ascendente, la cámara se eleva desde la pradera en el suelo, la Vía Láctea y la línea del horizonte se despliegan juntas, (las cuerdas se introducen gradualmente como base).
Shot 5: Lento acercamiento, las nubes de gas púrpura-rojizas de una nebulosa de espacio profundo se arremolinan en el mar de estrellas, los puntos estelares centellean.
Shot 6: Lento alejamiento, el cielo estrellado retrocede hasta una pequeña luz de una tienda de campaña solitaria, aparece el subtítulo 【El Universo · Eterno como siempre】, (la música ambiental concluye).
Restricciones: Sensación de time-lapse durante todo el video, movimiento de los cuerpos celestes fluido y coherente; tono frío azul oscuro y púrpura uniforme, sin primeros planos de personas.
```

### No. 2: Flujo de Auroras

- **Category:** `Naturaleza / Astronomía / Documental`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Sin referencia a personas, formato horizontal 16:9, realismo documental del Ártico, tonos de noche polar nevada y auroras verdes esmeralda, generar un corto de auroras de 30 segundos.

#### Prompt

```text
Sin referencia a personas, formato horizontal 16:9, realismo documental del Ártico, tonos de noche polar nevada y auroras verdes esmeralda, generar un corto de auroras de 30 segundos.
Shot 1: Plano contrapicado, las cortinas de auroras verdes esmeralda se encienden abruptamente en el horizonte como olas ondulantes, (un muro de sonido sintetizado etéreo surge abruptamente).
Shot 2: Desplazamiento horizontal lento, las auroras se reflejan en la superficie helada de un lago, la tundra blanca plateada, <aullido del viento ártico gélido>.
Shot 3: Time-lapse con cámara fija, las auroras cambian de verde a púrpura bailando y transformándose rápidamente, puntos estelares aparecen entre ellas.
Shot 4: Lento acercamiento, los detalles de las cortinas de luz auroral fluyen y caen como seda, <sonido bajo de grietas en el hielo>.
Shot 5: Movimiento vertical ascendente, la cámara pasa por un bosque de pinos nevados ascendiendo hacia las auroras que llenan el cielo, frío y transparente.
Shot 6: Lento alejamiento, las auroras envuelven toda la tundra helada con un árbol solitario en pie, aparece el subtítulo 【Luz Polar】, (el muro de sonido se desvanece gradualmente y concluye).
Restricciones: La transición de colores de las auroras debe ser natural y fluida, evitar parpadeos bruscos; tono frío predominante, sin aparición de personas.
```

### No. 3: Volcanic Lava

- **Category:** `Naturaleza / Astronomía / Documental`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

No reference characters, landscape 16:9, geological documentary stunning realism, contrast between fiery red lava and black rock with cold smoke tones, generate a 30-second volcano short film.

#### Prompt

```text
No reference characters, landscape 16:9, geological documentary stunning realism, contrast between fiery red lava and black rock with cold smoke tones, generate a 30-second volcano short film.
Shot 1: Slow push-in, fiery red lava boils and splatters sparks inside the volcanic crater, thick smoke billows, (low-frequency rumbling drumbeats suddenly start).
Shot 2: Fixed camera position, lava flow slowly spreads over black rocky ground surface forming golden-red cracks, <gurgling, scorching sound of magma>.
Shot 3: Overhead shot, lava river winds like a golden vein cutting through the charred hillside.
Shot 4: Slow pan, lava falls into the sea surface causing white steam explosions, <sound of water and fire violently interacting>.
Shot 5: Low-angle shot, under the night sky, volcanic eruption launches lava bombs tracing orange-red arcs, smoke column rises skyward, (drumbeats reach climax).
Shot 6: Slow pull-out, on the cooled lava field, embers flicker like stars, subtitle appears 【Earth · Fiery Heart】, (rumbling gradually fades and concludes).
Constraints: Strong contrast between fiery red warm light and black rock cool tones; lava flow texture realistic and viscous, no characters appear.
General constraints: Keep without subtitles; do not generate Logo; do not generate watermarks; each shot uses only one camera movement; characters need natural slight movement, not statues.
```

### No. 4: Forest Morning Mist

- **Category:** `Naturaleza / Astronomía / Documental`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

No reference characters, landscape 16:9, nature documentary healing realism, morning light Tyndall effect and verdant misty forest tones, generate a 30-second forest morning mist short film.

#### Prompt

```text
No reference characters, landscape 16:9, nature documentary healing realism, morning light Tyndall effect and verdant misty forest tones, generate a 30-second forest morning mist short film.
Shot 1: Slow push-in, morning light penetrates tall fir forest forming distinct Tyndall beams, thin mist flows, (ethereal flute and bird songs start).
Shot 2: Fixed camera position, dewdrop hangs from fern leaf tip refracting morning light before falling, <crisp bird calls echoing>.
Shot 3: Smooth pan, mist drifts slowly over mossy rocks and stream in the forest, <babbling stream>.
Shot 4: Low-angle shot, camera tilts up along tree trunk to the forest canopy where sunlight pours down, light spots dance.
Shot 5: Follow shot, a deer walks quietly through the misty forest with light steps, glances back, <rustling of fallen leaves>.
Shot 6: Slow pull-out, panoramic view of forest in morning mist gradually brightens, subtitle appears 【Morning Forest · All Sounds Awaken】, (flute melody fades and concludes).
Constraints: Beams and mist layers transparent and natural; verdant soft warm tones, animal movements realistic and not stiff, no characters appear.
General constraints: Keep without subtitles; do not generate Logo; do not generate watermarks; each shot uses only one camera movement; characters need natural slight movement, not statues.
```

<a id="category-27"></a>

### Antropomorfización / Broma Creativa (2)

### No. 1: AI Model Personified Fighting

- **Category:** `Antropomorfización / Broma Creativa`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

No reference characters, use original personified fighting contestants (not referencing any real company or brand trademarks), vertical 9:16, cyber arena热血 anime style, neon holographic tones, generate a 30-second personified fighting short film.

#### Prompt

```text
No reference characters, use original personified fighting contestants (not referencing any real company or brand trademarks), vertical 9:16, cyber arena热血 anime style, neon holographic tones, generate a 30-second personified fighting short film.
Shot 1: Slow push-in, in the center of the holographic arena, two original mecha-personified contestants face off and charge up, their chest energy cores light up, (fiery electronic drumbeats explode and start).
Shot 2: Follow shot, blue data-stream contestant throws a light punch with trailing afterimages, <high-frequency energy hum>.
Shot 3: Orbiting shot, orange computing-power contestant sidesteps to evade and blocks with a backhand, sparks fly, neon light trails orbit.
Shot 4: Low-angle shot, two fists collide releasing a shockwave that flips over holographic spectator stands particles, subtitle pops up 【Reasoning Speed Duel】.
Shot 5: Fixed camera position slow motion, blue contestant's core overloads and cracks as they are knocked back, code fragments scatter, <electric current crackling sound>.
Shot 6: Slow pull-out, orange contestant stands on the ring raising a fist, holographic leaderboard lights up, subtitle appears 【This Round Winner】, (drumbeats conclude).
Constraints: Two contestants' color schemes and designs must be clearly distinct (blue vs orange), no twin-like appearance, one of each in frame; purely original personifications, do not include any real brand logos or names.
General constraints: Keep without subtitles; do not generate Logo; do not generate watermarks; each shot uses only one camera movement; characters need natural slight movement, not statues.
```

### No. 2: Programming Language Personifications Bickering

- **Category:** `Antropomorfización / Broma Creativa`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `es`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

No reference characters, use original personified characters (not referencing any real company or brand trademarks), landscape 16:9, office sitcom humorous style, bright warm tones, generate a 30-second personified bickering short film.

#### Prompt

```text
No reference characters, use original personified characters (not referencing any real company or brand trademarks), landscape 16:9, office sitcom humorous style, bright warm tones, generate a 30-second personified bickering short film.
Shot 1: Slow push-in, two original programmer-personified characters look at each other across workstations raising eyebrows, desktop code holographic screens flicker, (playful jazz tune starts).
Shot 2: Fixed camera position, snake mascot character lazily shrugs and delivers吐槽 line {I do it in one line, you write twenty}, <keyboard typing sounds>.
Shot 3: Follow shot, gear armor character不服 stands up slamming the table retorting {But I run ten times faster than you}, holographic screen pops up a progress bar.
Shot 4: Orbiting shot, two characters stand back-to-back refusing to yield, code symbols collide above their heads bursting sparks, <clinking collision sound effects>.
Shot 5: Overhead shot, third coffee cup cute pet character brings two cups of coffee to mediate, the two look at each other awkwardly.
Shot 6: Slow pull-out, three characters put arms around shoulders clinking cups reconciling and laughing, subtitle appears 【Each Has Its Strengths, That's The Strongest Stack】, (jazz tune concludes).
Constraints: Three characters' designs and color schemes must be clearly distinct (snake/gear/coffee cup), no twin-like appearance, one of each in frame; purely original personifications, do not include any real programming language trademarks, logos, or registered names.
General constraints: Keep without subtitles; do not generate Logo; do not generate watermarks; each shot uses only one camera movement; characters need natural slight movement, not statues.
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
- [Atlas Cloud Seedance 2.5 page](https://www.atlascloud.ai/es/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
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
