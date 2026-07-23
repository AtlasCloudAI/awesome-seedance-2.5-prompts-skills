# 🎬 Awesome Seedance 2.5 Prompts + Seedance 2.5 Skill

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-seedance-2.5-prompts-skills?style=social)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/pulls)
[![Prompts](https://img.shields.io/badge/prompts-11%2B-blue.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

A curated library of Seedance 2.5 video prompts plus **Seedance 2.5 Skill**, an installable Agent Skill for planning, optimizing, and generating controllable video. The Skill chooses the right T2V, R2V, I2V, or extension route, uses Seedream 5.0 Pro for storyboards and Seedance 2.0 as the current executable default, and switches to Seedance 2.5 only when the selected provider exposes it.

| [Browse prompts](https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Install Seedance 2.5 Skill](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/tree/main/skills/seedance-2-5-skill) | [Generate with Atlas Cloud](https://www.atlascloud.ai/th/models/bytedance/seedance-2.5/text-to-video?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Get an API key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) |
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

**Seedance 2.5 Skill** is the name of the installable Agent Skill in this repository. It turns a creative brief, references, or a storyboard into the right generation route, prompt, intermediate assets, execution request, and review loop.

### Install

Install the workflow Skill and its default Atlas Cloud execution Skill:

```bash
npx skills add AtlasCloudAI/awesome-seedance-2.5-prompts-skills --skill seedance-2-5-skill
npx skills add AtlasCloudAI/atlas-cloud-skills --skill atlas-cloud
```

### What it does

| Route | Use when | Primary input | Generation unit |
|---|---|---|---|
| T2V | One short, simple scene | Text prompt | One self-contained shot |
| R2V storyboard | A readable multi-shot storyboard | One complete storyboard image | One request follows the panel order |
| R2V asset references | People, products, objects, scenes, or styles must stay consistent | A small role-specific asset pack | One reference-controlled clip |
| I2V shot pair | The exact beginning and ending of a shot matter | Start keyframe, optional end keyframe | One independently reviewable shot |
| Extend / chain | A longer sequence must continue an accepted clip | Prior clip or end frame | A continuity-aware extension |

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
3. **Generate:** let the Skill choose the route, create and show intermediate storyboards when needed, review them automatically, and submit the final image or video request through the selected Atlas channel.

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

**Availability note:** provider availability, reference limits, duration, resolution, and editing controls can differ. The Skill verifies the selected route instead of assuming Seedance 2.5 is callable.

### Prompt structure used by the Skill

1. **Reference binding:** state what each image, video, or audio reference controls.
2. **Observable action:** describe visible events in temporal order, including reactions and state changes.
3. **Spatial relationships:** say where subjects, objects, and the camera are in relation to each other.
4. **Camera and cuts:** specify framing, movement, cut order, match actions, and occlusions only where they matter.
5. **Visual style:** define lighting, palette, texture, atmosphere, and pace.
6. **Audio:** define dialogue, ambience, sound effects, or music when the selected model route supports them.
7. **Constraints:** preserve only the identities, product details, scene traits, and exclusions that are essential.

### Primary references

- [Seedance 2.0 prompt guide — Volcengine](https://docs.volcengine.com/docs/82379/2222480?lang=zh)
- [Seedream 5.0 Pro user manual — ByteDance Lark](https://bytedance.larkoffice.com/wiki/HQ8HwXpNFiy6umkP8jNcBwF3nab)
- [Seedance 2.5 launch overview — Atlas Cloud](https://www.atlascloud.ai/th/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)

<a id="curation-and-provenance"></a>

## 🔎 Curation and provenance

Every prompt record keeps its category, source platform, author, source link, input references, and preview video when available. Prompt text remains unchanged during README generation.

- The `official` and `community` labels describe where a prompt came from; they are not a guarantee that every prompt has been independently benchmarked across every provider or model version.
- A preview demonstrates one observed output under its original setup. Results can change with model version, provider parameters, references, aspect ratio, seed, and moderation.

<a id="faq"></a>

## ❓ Frequently asked questions

### What is Seedance 2.5 Skill?

It is the installable Agent Skill in `skills/seedance-2-5-skill/`. It selects a generation route, prepares only the required assets, writes the prompt, executes through Atlas Cloud, and reviews the outputs.

### Does the Skill require public Seedance 2.5 access?

No. The current executable default is Seedance 2.0. The Skill uses Seedance 2.5 only when the selected provider actually exposes it.

### Does every video need a storyboard?

No. A simple scene can use T2V directly. A readable multi-shot storyboard is normally sent as one complete R2V reference; panels are cropped only when the route deliberately changes to independent I2V shots.

### Which Atlas route is used?

Atlas Cloud Skill is the default inside an Agent conversation. MCP, CLI, and REST are selected explicitly for their corresponding environments.

### Can I use the prompts without installing the Skill?

Yes. Browse and copy any prompt directly. Install the Skill when you want route selection, adaptation, storyboard handling, execution, polling, and automated review.

<a id="statistics"></a>

## 📊 Statistics


| Metric | Count |
|--------|-------|
| Total Prompts | **11** |
| Categories | **8** |
| Preview Videos | **11** |
| Last Updated | **2026-07-23** |

<a id="featured-prompts"></a>

## 🔥 Featured Prompts

### No. 1: หนังแมตช์คัตลูกแก้วตามจังหวะบีต

- **Category:** `แมตช์คัต & เอฟเฟกต์สร้างสรรค์`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

หนังแมตช์คัตที่ซิงก์กับจังหวะ: ลูกแก้วใบหนึ่งที่สลักโลโก้ 'seedance' เรืองแสงอยู่ตรงกลางเฟรมตลอด ขณะที่แปดฉากด้านหลังตัดสลับกันอย่างไร้รอยต่อ

#### Prompt

```text
หนังสั้นแมตช์คัตสไตล์ภาพยนตร์จังหวะกระชับ ซิงก์กับบีตอิเล็กทรอนิกส์ที่เร่งเร้า ลูกแก้วไร้ตำหนิถูกตรึงไว้ตรงกลางเฟรมตลอดทั้งเรื่อง ภายในสลักโลโก้ "seedance" เรืองแสง ลูกแก้วคงโฟกัสคมกริบ ขณะที่ทุกจังหวะบีตหนักแน่นทางดนตรี ฉากหลังจะแมตช์คัตอย่างไร้รอยต่อ: Scene 1: โคลสอัปมาโคร น้ำกระเซ็นรอบลูกแก้วแบบภาพยนตร์ หักเหแสงอันซับซ้อน Scene 2: คาเฟ่ยามเช้าสไตล์วินเทจ ลูกแก้ววางบนโต๊ะไม้ดิบ ไอกาแฟลอยขึ้น และผู้คนเดินทางเบลอ ๆ นอกหน้าต่าง Scene 3: สนธยายามโกลเดนอาวร์ วัยรุ่นสเก็ตเตอร์โยนแล้วรับลูกแก้วด้วยมือเดียว ถนนพุ่งถอยหลังด้านหลังในแสงย้อนพระอาทิตย์ตกอันงดงาม Scene 4: เทศกาลดนตรีที่คลั่งไคล้ มือหลายมือชูลูกแก้วสูงขึ้น หักเหแสงเลเซอร์เวทีอันตระการตา Scene 5: โต๊ะปาร์ตี้ครอบครัวที่คึกคัก ลูกแก้ววางกลางเฟรม ผู้คนเบลอ ๆ ชนแก้วและเอื้อมหยิบอาหาร Scene 6: โรงหนังสลัว มือประคองลูกแก้วขณะแสงจาง ๆ จากจอยักษ์เคลื่อนผ่านผิวของมัน Scene 7: ลูกแก้ววางบนไดอะแฟรมลำโพงที่สั่นสะเทือนรุนแรง แมตช์คัตในช่วงไคลแมกซ์ไปยังเทิร์นเทเบิลดีเจที่หมุนอยู่ตรงกลาง Scene 8: ค่ำคืนตั้งแคมป์กลางแจ้ง ฉากหลังกลายเป็นกองไฟอบอุ่นและโบเก้ไฟสายที่แกว่งไกว ตอนจบ: ในจังหวะดาวน์บีตสุดท้าย ลูกแก้วถูกโยนขึ้นออกนอกเฟรม ตัดไปที่จอดำสนิท คำว่า "seedance" สีขาวบนพื้นดำแบบมินิมอลปรากฏตรงกลางเฟรม การตัดต่อแมตช์คัตซิงก์กับบีต การเกรดสีระดับภาพยนตร์ชั้นยอด การหักเหของแก้วสมจริง เรย์เทรซซิง โกลบอลอิลลูมิเนชัน วัตถุคมกริบ ฉากหลังโมชันเบลอหนัก
```

### No. 2: กลไกนาฬิกาสตีมพังก์ — วันเทก 30 วินาที

- **Category:** `การถ่ายทำแบบวันเทค`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

ซีเควนซ์ 3D จิ๋วสไตล์สตีมพังก์ 30 วินาที ด้วยการโคจรต่อเนื่องและการเคลื่อนกล้องทะลุผ่าน

#### Prompt

```text
ซีเควนซ์โมชันกราฟิก 3D ระดับพรีเมียมสไตล์ภาพยนตร์ลึกล้ำ ความยาว 30 วินาที ในสไตล์สตีมพังก์ประณีตและโมเดลจิ๋ววินเทจ ด้วยการโคจรลื่นไหลต่อเนื่องและการเคลื่อนกล้องทะลุผ่าน [0-10s] โคลสอัปมาโครของหน้าปัดนาฬิกาทองเหลืองโบราณที่คลี่ออกทีละชั้นกลายเป็นวงเฟืองหมุนขบกันและหมอกหนา กล้องเจาะทะลุลงไประหว่างเฟือง เครื่องบินปีกกลไก (ornithopter) ทะยานหมุนวนขึ้นจากหุบเขาจิ๋วที่ทำจากหนังสือเก่าทรุดโทรมซ้อนกัน [10-20s] กล้องเลื่อนไปข้างหน้าตามเครื่องบินปีกกลไก ผ่านเข้าไปอย่างไร้รอยต่อสู่ซูโอโทรป (zoetrope) ทองเหลืองประดับประดาที่หมุนเร็วฉายแสงเป็นรูปม้ากลไกควบตะบึง แสงนั้นกระโจนออกมาและฉากกลายเป็นกระเช้าลอยฟ้าทองเหลืองบนรางทองแดงระยิบระยับที่แล่นผ่านป่าเฟือง อาบด้วยแสงโกลเดนอาวร์แบบภาพยนตร์ [20-30s] กล้องแพนลงอย่างสง่างาม ด้านล่างปรากฏเรือใบไม้กลไกอันวิจิตรที่แล่นตัดคลื่นสีน้ำเงินเข้มผิวคล้ายแก้ว ซึ่งแปรเปลี่ยนเป็นดวงจันทร์ยักษ์เรืองแสง โดยมีเงาของนักสำรวจถือโคมไฟเดินป่ายไปตามสันเขาแนวผลึกใต้แสงดาว กล้องหมุนวนอย่างนุ่มนวลย้อนกลับผ่านหมู่เมฆพิสุทธิ์สู่หน้าปัดนาฬิกาทองเหลืองที่เดินติ๊กต่อก เท็กซ์เจอร์กลไกเหนือจริง โทนทองเหลืองและทองคำเข้มข้น ระยะชัดตื้นแบบภาพยนตร์ การเคลื่อนกล้องทะลุผ่านลื่นไหลไร้รอยต่อ บรรยากาศการผจญภัยแฟนตาซีอันยิ่งใหญ่
```

### No. 3: หน้าต่างสู่หลากโลก (ภาพอ้างอิง 5 ภาพ)

- **Category:** `การอ้างอิงหลายภาพ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
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

หนังสั้นคอนเซปต์แบรนด์ที่ขับเคลื่อนด้วยภาพอ้างอิง 5 ภาพ ล่องผ่านหน้าต่างเข้าสู่โลกที่แตกต่างกัน

#### Prompt

```text
หนังสั้นคอนเซปต์แบรนด์สไตล์ภาพยนตร์ @image1 คือเฟรมแรก ภาพสั่นเล็กน้อย กล้องดันเข้าหาเงาต้นไม้ที่พุ่งถอยหลังนอกหน้าต่าง การถอยของมันเร่งเร็วขึ้น แล้วตัดฉับไปที่ @image2 ความเร็วผ่อนลงขณะกล้องล่องช้า ๆ ไปตามลำธาร มีเสียงนกร้องและดอกไม้บาน กล้องดำดิ่งลงใต้น้ำ — เสียงฟองอากาศ — ขณะแมงกะพรุนสีส้มล่องลอยอย่างสง่างามผ่านหน้าเลนส์ @image3 กล้องถอยออกขณะปลาเล็กแวบผ่านและว่ายจากน้ำเข้าไปในหน้าต่าง @image4 เด็กหญิงคนหนึ่งมองไปรอบ ๆ เฝ้าดูพวกมัน กล้องถอยออก โฟกัสเบลอ แล้วปรับกลับมาคมชัด สลับไปตามจังหวะดนตรี: หน้าต่างลายฉลุแบบสวนจีน @image5 ที่มีแสงวนรอบ กระจกสีโบสถ์ ช่องหน้าต่างเครื่องบิน สกายไลต์ทรงโดม หน้าต่างโค้งยื่น มู่ลี่เกล็ด หน้าต่างหลังคาแบบยุโรป ช่องมองประตู ช่องมองภาพกล้อง ตานก และโคลสอัปตามนุษย์ ภาพหยุดนิ่งที่ตามนุษย์ ตาหลับลง จอดำ แล้วจู่ ๆ ก็ลืมตาขึ้น — "seedance" ปรากฏตรงกลางดวงตาในจังหวะเน้น
```

### No. 4: วันเทกผ่านหกห้อง (ภาพอ้างอิง 8 ภาพ)

- **Category:** `การอ้างอิงหลายภาพ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
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

ลองเทกต่อเนื่องเดียวที่ติดตามบุคคลหนึ่งผ่านหกห้องที่อารมณ์แปรเปลี่ยน ขับเคลื่อนด้วยภาพอ้างอิง 8 ภาพ

#### Prompt

```text
ลองเทกต่อเนื่องเดียว กล้องติดตามบุคคลในเสื้อโค้ตสีดำ (อ้างอิง @image1) อย่างนุ่มนวลขณะเคลื่อนจากซ้ายไปขวาผ่านหกห้องที่เชื่อมต่อกันซึ่งมีโทนและอารมณ์ต่างกัน ทุกห้องมีโครงสร้างเดียวกัน: ผนังขาว พื้นไม้ลายก้างปลาสีอ่อน หน้าต่างฝรั่งเศสสูงจรดเพดาน ผ้าม่านโปร่งสีขาว (อ้างอิง @image2) แต่วิวและอารมณ์ภายนอกต่างกันทุกครั้ง ตัวเอกเดินด้วยจังหวะคงที่ ผ่านทุกประตูที่เปิดอยู่ 0-5s ห้องแรก ฉากต่อสู้สไตล์การ์ตูนอเมริกัน: ตัวเอกต่อสู้กับตัวละครหนึ่ง (@image3) ซึ่งพ่ายแพ้ 5-10s ห้องที่สอง ความอบอุ่น สไตล์งานสักหลาด วิวนอกหน้าต่างเป็นทุ่งทานตะวัน (@image4) แสงนุ่มสีส้มอบอุ่น จิตรกรกำลังวาดดอกทานตะวัน (@image5) ตัวเอกกลายเป็นสไตล์สักหลาดเมื่อก้าวเข้าไป 10-15s ห้องที่สาม ความเศร้า สต็อปโมชันการ์ตูนขาวดำ ฝนตกนอกหน้าต่าง แสงสีเทาเย็น มีคนนั่งกอดเข่าอยู่คนเดียวบนพื้น โทรศัพท์เรืองแสงด้วยสายที่ไม่มีใครรับ เมื่อก้าวเข้าไป ไฟกะพริบดับแล้วติด ห้องกลับมีสีสัน ดอกไม้ผลิบานสะพรั่ง 15-20s ห้องที่สี่ ความสุข ห้องที่จมอยู่ใต้ทะเล (อ้างอิง @image6) ตัวเอกกลายเป็นโปร่งใสท่ามกลางปะการังและฝูงปลา 20-25s ห้องที่ห้า ความประหลาดใจ วิวนอกหน้าต่างเป็นท้องฟ้าที่เต็มไปด้วยพลุ (อ้างอิง @image7) แสงวูบวาบหลากสี ตัวเอกถูกฝูงชนที่โห่ร้องโอบล้อมพาไป 25-30s ห้องขาวว่างเปล่า ตัวเอกดีดนิ้ว — เสียงเอฟเฟกต์ดีดนิ้ว — เฟรมกลายเป็นสีดำ "seedance" อยู่ตรงกลาง (อ้างอิง @image8) คุณภาพระดับภาพยนตร์ สไตล์โฆษณาไฮแฟชัน แสงถูกกำหนดโดยวิวนอกหน้าต่างทั้งหมดเพื่อสร้างความคอนทราสต์ทางอารมณ์ที่รุนแรง ไม่มีข้อความในเฟรม
```

### No. 5: ตัดต่อวิดีโอ — ลบทุกคนเหลือแค่ตัวเอก

- **Category:** `การตัดต่อวิดีโอ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

การตัดต่อด้วยวิดีโออ้างอิง: ลบทุกคนออกจากคลิปต้นฉบับ ยกเว้นตัวเอก

#### Prompt

```text
การตัดต่อวิดีโอ: ลบทุกคนใน @video1 ออก ยกเว้นตัวเอก
```

### No. 6: เอ็มวีฮิปฮอป 'Hello' หลายภาษา

- **Category:** `การอ้างอิงหลายภาพ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

เอ็มวีฮิปฮอปริมทะเลที่สร้างจากภาพอ้างอิงภาพเดียว นักร้องนำแร็ปคำว่า 'hello' ใน 8 ภาษา ลิปซิงก์ ตัดฉับตามจังหวะบีต

#### Prompt

```text
มิวสิกวิดีโอฮิปฮอป/แร็ปสไตล์ภาพยนตร์ คุณภาพเสมือนจริง โทนพรีเมียม ฉากริมทะเล สร้างเฟรมจาก @image1: วงดนตรีเล่นที่หาดทรายสีทองที่มีคลื่นซัดสาด — นักร้องนำกำไมค์บนขาตั้งในทรายเปียก มือกีตาร์คนหนึ่งอยู่ซ้าย อีกคนอยู่ขวา มือกลองอยู่ด้านหลัง ด้านหลังเป็นแนวชายฝั่งกว้างใหญ่ คลื่นซัดม้วน แสงอาทิตย์โกลเดนอาวร์อบอุ่นระยิบระยับบนผืนน้ำ ละอองไอทะเลลอยในอากาศ นักร้องนำในชุดวอร์มสีแดงแร็ปใส่กล้อง — ริมฝีปากและกรามซิงก์กับทุกคำอย่างแม่นยำ ศีรษะกระแทกตามบีต แร็ปสดใส หนักแน่น เร็ว มั่นใจ ตัดฉับตามบีต ทุกการสลับเป็นคอนทราสต์คู่ (ขนาดช็อตและประเภทช็อตเปลี่ยนพร้อมกัน) เนื้อร้อง (นักร้องนำร้องคำว่า 'hello' ในแต่ละภาษาตามลำดับ ลิปซิงก์อย่างแม่นยำ): อังกฤษ "Hello", จีน "你好", ญี่ปุ่น "こんにちは", เกาหลี "안녕하세요", โปรตุเกส "Olá", ไทย "สวัสดี", สเปน "Hola", อาหรับ "مرحبا" 8 ช็อตตัดฉับ (ภาพมุมต่ำกว้างปูเรื่อง โคลสอัปแร็ปใส่กล้อง ภาพแทรกมาโครสายกีตาร์ ออร์บิตวนเฉียง 3/4 แทร็กด้านข้างที่ชายหาด ทิลต์อัปมือกลอง ดันเข้าใกล้ตัวนักร้องนำ ดันเข้าหาวงเต็มวงอย่างยิ่งใหญ่) หนึ่งภาษาต่อหนึ่งช็อต ไวต์บาลานซ์ 4000K เกรดสีเทียล-แอมเบอร์ 35mm ระยะชัดตื้น ฟิล์มเกรน ละอองไอทะเล แสงแฟลร์โกลเดนอาวร์ ให้ความรู้สึกพรีเมียม ลิปซิงก์แม่นยำ ไม่มีซับไตเติล ไม่มีข้อความซ้อน ใช้การตัดฉับเท่านั้น รวม 20 วินาที
```

### No. 7: บทเรียนติดตั้งเครื่องชงกาแฟแคปซูล (ภาพอ้างอิง 6 ภาพ)

- **Category:** `บทเรียนแบบมีภาพอ้างอิง`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
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

บทเรียน 30 วินาทีว่าด้วยการติดตั้งและใช้งานเครื่องชงกาแฟแคปซูล หกขั้นตอนแบบมีภาพอ้างอิงพร้อมเสียงบรรยาย — ตั้งแต่ติดตั้งถังน้ำจนถึงการล้างครั้งแรก

#### Prompt

```text
วิดีโอบทเรียน 30 วินาทีว่าด้วยการติดตั้งและใช้งานเครื่องชงกาแฟแคปซูล 0-2s: การ์ดชื่อเรื่องเปิดระบุว่า "บทเรียนติดตั้งเครื่องชงกาแฟแคปซูล seedance" 2-5s, Step 1: ติดตั้งถังน้ำ อ้างอิง @image1 ภาพมีเดียมช็อตจากมุมสูงเล็กน้อย ด้านหลังตัวเครื่อง จัดถังน้ำให้ตรงกับช่องด้านหลังตัวเครื่องแล้วกดลงตรง ๆ จนคลิกล็อกเข้าที่แน่นหนา แสดงให้เห็นชัดว่าตัวล็อกก้นถังตรงกับช่องของตัวเครื่องอย่างไร มองเห็นเส้นระดับน้ำผ่านส่วนโปร่งใสของถัง เสียงบรรยาย "ขั้นแรก ติดตั้งถังน้ำ จัดถังให้ตรงกับช่องด้านหลังเครื่อง เสียงคลิกหมายความว่าล็อกเข้าที่แล้ว" 5-9s, Step 2: ติดตั้งถาดรองน้ำหยด อ้างอิง @image2 โคลสอัปมุมมองด้านหน้า ด้านล่างหน้าตัวเครื่อง เลื่อนถาดรองน้ำหยดในแนวนอนเข้าไปในรางนำที่ด้านล่างจนเข้าที่สนิท เสียงบรรยาย "ต่อไป ติดตั้งถาดรองน้ำหยด จัดถาดให้ตรงกับรางด้านล่าง" 9-13s, Step 3: ติดตั้งกล่องเก็บแคปซูลใช้แล้ว อ้างอิง @image3 โคลสอัปจากมุมต่ำเล็กน้อย ช่องว่างใต้ถาดรองน้ำหยด จัดกล่องเก็บให้ตรงกับช่องเว้าแล้วดันเข้าไปให้เสมอกับถาดรองน้ำหยด เสียงบรรยาย "จากนั้นใส่กล่องเก็บแคปซูล แคปซูลใช้แล้วจะตกลงมาที่นี่โดยอัตโนมัติ" 13-18s, Step 4: เติมน้ำครั้งแรก อ้างอิง @image4 โคลสอัปมุมมองด้านข้าง ถังน้ำที่ด้านบน/ด้านหลังตัวเครื่อง เปิดฝาถังแล้วเทน้ำสะอาดลงไปจนถึงเส้นระดับน้ำ MAX แล้วปิด เน้นที่เส้นระดับน้ำ เสียงบรรยาย "เปิดฝาถัง เทน้ำสะอาดลงไป ระวังอย่าให้เกินเส้นระดับน้ำสูงสุด แล้วปิดฝาถัง" 18-25s, Step 5: เปิดเครื่อง อ้างอิง @image5 มีเดียมช็อตมุมมองด้านหน้า ด้านหน้าตัวเครื่อง เสียบสายไฟแล้วกดปุ่มเปิดเครื่อง ไฟแสดงสถานะเปลี่ยนจากกะพริบเป็นติดค้าง (อุ่นเครื่องเสร็จ) เสียงบรรยาย "ต่อสายไฟแล้วกดปุ่มเปิดเครื่อง ไฟแสดงสถานะเริ่มกะพริบ หมายความว่ากำลังอุ่นเครื่อง เมื่อไฟติดค้าง เครื่องก็พร้อมใช้งาน" 25-30s, Step 6: ล้างครั้งแรก (โดยไม่ใส่แคปซูล) อ้างอิง @image6 มีเดียมช็อตเคลื่อนไปสู่โคลสอัปมุมมองด้านหน้า-ข้าง โดยไม่ใส่แคปซูล กดปุ่มชงโดยตรงเพื่อให้น้ำร้อนไหลออกมาล้างท่อ เน้นข้อความ "ไม่ต้องใส่แคปซูล" เสียงบรรยาย "ขั้นตอนสุดท้าย การล้างครั้งแรก โปรดทราบว่าขั้นตอนนี้ไม่ต้องใช้แคปซูล เพียงกดปุ่มชง เมื่อล้างเสร็จ เครื่องชงกาแฟของคุณก็พร้อมใช้งาน"
```

### No. 8: โฆษณาคุกกี้รสผลไม้ (ภาพ + วิดีโออ้างอิง 6 คลิป)

- **Category:** `การอ้างอิงหลายรูปแบบ (ภาพ+วิดีโอ)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
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

โฆษณาสดใสหลากสีสำหรับคุกกี้รสผลไม้สี่รส — สตรอว์เบอร์รี แอปเปิล องุ่น ส้ม — สร้างจากภาพอ้างอิงหนึ่งภาพและวิดีโออ้างอิงด้านการเคลื่อนไหว/กล้องหกคลิป ตัดฉับตามจังหวะบีตที่เร่งเร้า

#### Prompt

```text
สไตล์โฆษณาสดใสหลากสีที่มีคุกกี้รสผลไม้เป็นพระเอก สี่รส — สตรอว์เบอร์รี แอปเปิล องุ่น และส้ม รสสตรอว์เบอร์รีอ้างอิง @image1 คุกกี้และผลไม้ที่เข้าคู่กันถูกจัดเรียงเป็นอาร์เรย์เรขาคณิตที่เป็นระเบียบอย่างชัดเจน เฟรมโดยรวมสะอาดตา พรีเมียม และเปี่ยมพลัง เปิดเรื่องด้วยผลไม้ที่โคจรอย่างรวดเร็วรอบคุกกี้ตรงกลางเพื่อดึงจุดสนใจทางสายตาอย่างฉับไว — อ้างอิงองค์ประกอบภาพของ @video1 — ตัดเข้าในจังหวะบีตหนักแน่นทางดนตรี จากนั้นคุกกี้รสต่าง ๆ เคลื่อนเข้าหาเลนส์ตามเส้นทางเกลียว ก่อเกิดมิติเชิงพื้นที่ที่ชัดเจน — อ้างอิงการเคลื่อนไหวและการทำงานของกล้องจาก @video2 — สลับสีและรสตามบีตของเพลงประกอบ อาร์เรย์คุกกี้แพนซ้ายขวาด้วยการตัดจากระนาบสู่ระนาบอย่างรวดเร็ว รสสตรอว์เบอร์รี แอปเปิล องุ่น และส้มสลับกันไปขณะเฟรมจัมป์คัตอย่างรวดเร็วตามจังหวะ — อ้างอิงการเคลื่อนไหวของ @video3 ช่วงกลางเพิ่มการแพนขึ้นลง อาร์เรย์คุกกี้ที่เป็นระเบียบขึ้นลงในแนวตั้งเหมือนเครื่องจักร — อ้างอิงการเคลื่อนไหวของ @video4 — เน้นความงามของความเป็นระเบียบและความอุดมของสินค้า ในช่วงไคลแมกซ์ คุกกี้ชิ้นหนึ่งถูกหักเป็นสองท่อน และช่วงเวลานั้นเข้าสู่สโลว์โมชันขณะไส้ผลไม้ระเบิดออก เศษคุกกี้กระจาย ความฉ่ำและแรงปะทะของเนื้อสัมผัสถูกขยายให้เด่นชัด — อ้างอิงเอฟเฟกต์การระเบิดของ @video5 — แล้วกลับสู่การตัดต่อจังหวะเร็วอย่างรวดเร็ว ตอนจบนำข้อความภาษาอังกฤษ "Fresh on Seedance, made for viral vision" เข้ามา ปรากฏทีละคำต่อเนื่องอย่างรวดเร็วด้วยโมชันข้อความที่มีจังหวะหนักแน่นและภาพสินค้าหยุดนิ่ง — อ้างอิง @video6 — คุกกี้สี่รสเรียงกันอย่างเป็นระเบียบพร้อมผลไม้เด้งดึ๋งเข้าจังหวะเพื่อปิดท้ายที่ชูแบรนด์เป็นหลัก เฟรมเต็มไปด้วยบรรยากาศโฆษณาที่ดูอ่อนเยาว์ เปี่ยมพลัง น่ากิน และน่าแชร์
```

<a id="browse-by-category"></a>

## 🏷️ Browse by Category


- [`แมตช์คัต & เอฟเฟกต์สร้างสรรค์`](#category-1): **1**
- [`การถ่ายทำแบบวันเทค`](#category-2): **1**
- [`การอ้างอิงหลายภาพ`](#category-3): **3**
- [`การตัดต่อวิดีโอ`](#category-4): **2**
- [`บทเรียนแบบมีภาพอ้างอิง`](#category-5): **1**
- [`การอ้างอิงหลายรูปแบบ (ภาพ+วิดีโอ)`](#category-6): **1**
- [`การอ้างอิงภาพ`](#category-7): **1**
- [`การอ้างอิงภาพ (สไตล์ภาพยนตร์)`](#category-8): **1**

<a id="all-prompts"></a>

## 📋 All Prompts


<a id="category-1"></a>

### แมตช์คัต & เอฟเฟกต์สร้างสรรค์ (1)

### No. 1: หนังแมตช์คัตลูกแก้วตามจังหวะบีต

- **Category:** `แมตช์คัต & เอฟเฟกต์สร้างสรรค์`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

หนังแมตช์คัตที่ซิงก์กับจังหวะ: ลูกแก้วใบหนึ่งที่สลักโลโก้ 'seedance' เรืองแสงอยู่ตรงกลางเฟรมตลอด ขณะที่แปดฉากด้านหลังตัดสลับกันอย่างไร้รอยต่อ

#### Prompt

```text
หนังสั้นแมตช์คัตสไตล์ภาพยนตร์จังหวะกระชับ ซิงก์กับบีตอิเล็กทรอนิกส์ที่เร่งเร้า ลูกแก้วไร้ตำหนิถูกตรึงไว้ตรงกลางเฟรมตลอดทั้งเรื่อง ภายในสลักโลโก้ "seedance" เรืองแสง ลูกแก้วคงโฟกัสคมกริบ ขณะที่ทุกจังหวะบีตหนักแน่นทางดนตรี ฉากหลังจะแมตช์คัตอย่างไร้รอยต่อ: Scene 1: โคลสอัปมาโคร น้ำกระเซ็นรอบลูกแก้วแบบภาพยนตร์ หักเหแสงอันซับซ้อน Scene 2: คาเฟ่ยามเช้าสไตล์วินเทจ ลูกแก้ววางบนโต๊ะไม้ดิบ ไอกาแฟลอยขึ้น และผู้คนเดินทางเบลอ ๆ นอกหน้าต่าง Scene 3: สนธยายามโกลเดนอาวร์ วัยรุ่นสเก็ตเตอร์โยนแล้วรับลูกแก้วด้วยมือเดียว ถนนพุ่งถอยหลังด้านหลังในแสงย้อนพระอาทิตย์ตกอันงดงาม Scene 4: เทศกาลดนตรีที่คลั่งไคล้ มือหลายมือชูลูกแก้วสูงขึ้น หักเหแสงเลเซอร์เวทีอันตระการตา Scene 5: โต๊ะปาร์ตี้ครอบครัวที่คึกคัก ลูกแก้ววางกลางเฟรม ผู้คนเบลอ ๆ ชนแก้วและเอื้อมหยิบอาหาร Scene 6: โรงหนังสลัว มือประคองลูกแก้วขณะแสงจาง ๆ จากจอยักษ์เคลื่อนผ่านผิวของมัน Scene 7: ลูกแก้ววางบนไดอะแฟรมลำโพงที่สั่นสะเทือนรุนแรง แมตช์คัตในช่วงไคลแมกซ์ไปยังเทิร์นเทเบิลดีเจที่หมุนอยู่ตรงกลาง Scene 8: ค่ำคืนตั้งแคมป์กลางแจ้ง ฉากหลังกลายเป็นกองไฟอบอุ่นและโบเก้ไฟสายที่แกว่งไกว ตอนจบ: ในจังหวะดาวน์บีตสุดท้าย ลูกแก้วถูกโยนขึ้นออกนอกเฟรม ตัดไปที่จอดำสนิท คำว่า "seedance" สีขาวบนพื้นดำแบบมินิมอลปรากฏตรงกลางเฟรม การตัดต่อแมตช์คัตซิงก์กับบีต การเกรดสีระดับภาพยนตร์ชั้นยอด การหักเหของแก้วสมจริง เรย์เทรซซิง โกลบอลอิลลูมิเนชัน วัตถุคมกริบ ฉากหลังโมชันเบลอหนัก
```

<a id="category-2"></a>

### การถ่ายทำแบบวันเทค (1)

### No. 1: กลไกนาฬิกาสตีมพังก์ — วันเทก 30 วินาที

- **Category:** `การถ่ายทำแบบวันเทค`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

ซีเควนซ์ 3D จิ๋วสไตล์สตีมพังก์ 30 วินาที ด้วยการโคจรต่อเนื่องและการเคลื่อนกล้องทะลุผ่าน

#### Prompt

```text
ซีเควนซ์โมชันกราฟิก 3D ระดับพรีเมียมสไตล์ภาพยนตร์ลึกล้ำ ความยาว 30 วินาที ในสไตล์สตีมพังก์ประณีตและโมเดลจิ๋ววินเทจ ด้วยการโคจรลื่นไหลต่อเนื่องและการเคลื่อนกล้องทะลุผ่าน [0-10s] โคลสอัปมาโครของหน้าปัดนาฬิกาทองเหลืองโบราณที่คลี่ออกทีละชั้นกลายเป็นวงเฟืองหมุนขบกันและหมอกหนา กล้องเจาะทะลุลงไประหว่างเฟือง เครื่องบินปีกกลไก (ornithopter) ทะยานหมุนวนขึ้นจากหุบเขาจิ๋วที่ทำจากหนังสือเก่าทรุดโทรมซ้อนกัน [10-20s] กล้องเลื่อนไปข้างหน้าตามเครื่องบินปีกกลไก ผ่านเข้าไปอย่างไร้รอยต่อสู่ซูโอโทรป (zoetrope) ทองเหลืองประดับประดาที่หมุนเร็วฉายแสงเป็นรูปม้ากลไกควบตะบึง แสงนั้นกระโจนออกมาและฉากกลายเป็นกระเช้าลอยฟ้าทองเหลืองบนรางทองแดงระยิบระยับที่แล่นผ่านป่าเฟือง อาบด้วยแสงโกลเดนอาวร์แบบภาพยนตร์ [20-30s] กล้องแพนลงอย่างสง่างาม ด้านล่างปรากฏเรือใบไม้กลไกอันวิจิตรที่แล่นตัดคลื่นสีน้ำเงินเข้มผิวคล้ายแก้ว ซึ่งแปรเปลี่ยนเป็นดวงจันทร์ยักษ์เรืองแสง โดยมีเงาของนักสำรวจถือโคมไฟเดินป่ายไปตามสันเขาแนวผลึกใต้แสงดาว กล้องหมุนวนอย่างนุ่มนวลย้อนกลับผ่านหมู่เมฆพิสุทธิ์สู่หน้าปัดนาฬิกาทองเหลืองที่เดินติ๊กต่อก เท็กซ์เจอร์กลไกเหนือจริง โทนทองเหลืองและทองคำเข้มข้น ระยะชัดตื้นแบบภาพยนตร์ การเคลื่อนกล้องทะลุผ่านลื่นไหลไร้รอยต่อ บรรยากาศการผจญภัยแฟนตาซีอันยิ่งใหญ่
```

<a id="category-3"></a>

### การอ้างอิงหลายภาพ (3)

### No. 1: หน้าต่างสู่หลากโลก (ภาพอ้างอิง 5 ภาพ)

- **Category:** `การอ้างอิงหลายภาพ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
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

หนังสั้นคอนเซปต์แบรนด์ที่ขับเคลื่อนด้วยภาพอ้างอิง 5 ภาพ ล่องผ่านหน้าต่างเข้าสู่โลกที่แตกต่างกัน

#### Prompt

```text
หนังสั้นคอนเซปต์แบรนด์สไตล์ภาพยนตร์ @image1 คือเฟรมแรก ภาพสั่นเล็กน้อย กล้องดันเข้าหาเงาต้นไม้ที่พุ่งถอยหลังนอกหน้าต่าง การถอยของมันเร่งเร็วขึ้น แล้วตัดฉับไปที่ @image2 ความเร็วผ่อนลงขณะกล้องล่องช้า ๆ ไปตามลำธาร มีเสียงนกร้องและดอกไม้บาน กล้องดำดิ่งลงใต้น้ำ — เสียงฟองอากาศ — ขณะแมงกะพรุนสีส้มล่องลอยอย่างสง่างามผ่านหน้าเลนส์ @image3 กล้องถอยออกขณะปลาเล็กแวบผ่านและว่ายจากน้ำเข้าไปในหน้าต่าง @image4 เด็กหญิงคนหนึ่งมองไปรอบ ๆ เฝ้าดูพวกมัน กล้องถอยออก โฟกัสเบลอ แล้วปรับกลับมาคมชัด สลับไปตามจังหวะดนตรี: หน้าต่างลายฉลุแบบสวนจีน @image5 ที่มีแสงวนรอบ กระจกสีโบสถ์ ช่องหน้าต่างเครื่องบิน สกายไลต์ทรงโดม หน้าต่างโค้งยื่น มู่ลี่เกล็ด หน้าต่างหลังคาแบบยุโรป ช่องมองประตู ช่องมองภาพกล้อง ตานก และโคลสอัปตามนุษย์ ภาพหยุดนิ่งที่ตามนุษย์ ตาหลับลง จอดำ แล้วจู่ ๆ ก็ลืมตาขึ้น — "seedance" ปรากฏตรงกลางดวงตาในจังหวะเน้น
```

### No. 2: วันเทกผ่านหกห้อง (ภาพอ้างอิง 8 ภาพ)

- **Category:** `การอ้างอิงหลายภาพ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
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

ลองเทกต่อเนื่องเดียวที่ติดตามบุคคลหนึ่งผ่านหกห้องที่อารมณ์แปรเปลี่ยน ขับเคลื่อนด้วยภาพอ้างอิง 8 ภาพ

#### Prompt

```text
ลองเทกต่อเนื่องเดียว กล้องติดตามบุคคลในเสื้อโค้ตสีดำ (อ้างอิง @image1) อย่างนุ่มนวลขณะเคลื่อนจากซ้ายไปขวาผ่านหกห้องที่เชื่อมต่อกันซึ่งมีโทนและอารมณ์ต่างกัน ทุกห้องมีโครงสร้างเดียวกัน: ผนังขาว พื้นไม้ลายก้างปลาสีอ่อน หน้าต่างฝรั่งเศสสูงจรดเพดาน ผ้าม่านโปร่งสีขาว (อ้างอิง @image2) แต่วิวและอารมณ์ภายนอกต่างกันทุกครั้ง ตัวเอกเดินด้วยจังหวะคงที่ ผ่านทุกประตูที่เปิดอยู่ 0-5s ห้องแรก ฉากต่อสู้สไตล์การ์ตูนอเมริกัน: ตัวเอกต่อสู้กับตัวละครหนึ่ง (@image3) ซึ่งพ่ายแพ้ 5-10s ห้องที่สอง ความอบอุ่น สไตล์งานสักหลาด วิวนอกหน้าต่างเป็นทุ่งทานตะวัน (@image4) แสงนุ่มสีส้มอบอุ่น จิตรกรกำลังวาดดอกทานตะวัน (@image5) ตัวเอกกลายเป็นสไตล์สักหลาดเมื่อก้าวเข้าไป 10-15s ห้องที่สาม ความเศร้า สต็อปโมชันการ์ตูนขาวดำ ฝนตกนอกหน้าต่าง แสงสีเทาเย็น มีคนนั่งกอดเข่าอยู่คนเดียวบนพื้น โทรศัพท์เรืองแสงด้วยสายที่ไม่มีใครรับ เมื่อก้าวเข้าไป ไฟกะพริบดับแล้วติด ห้องกลับมีสีสัน ดอกไม้ผลิบานสะพรั่ง 15-20s ห้องที่สี่ ความสุข ห้องที่จมอยู่ใต้ทะเล (อ้างอิง @image6) ตัวเอกกลายเป็นโปร่งใสท่ามกลางปะการังและฝูงปลา 20-25s ห้องที่ห้า ความประหลาดใจ วิวนอกหน้าต่างเป็นท้องฟ้าที่เต็มไปด้วยพลุ (อ้างอิง @image7) แสงวูบวาบหลากสี ตัวเอกถูกฝูงชนที่โห่ร้องโอบล้อมพาไป 25-30s ห้องขาวว่างเปล่า ตัวเอกดีดนิ้ว — เสียงเอฟเฟกต์ดีดนิ้ว — เฟรมกลายเป็นสีดำ "seedance" อยู่ตรงกลาง (อ้างอิง @image8) คุณภาพระดับภาพยนตร์ สไตล์โฆษณาไฮแฟชัน แสงถูกกำหนดโดยวิวนอกหน้าต่างทั้งหมดเพื่อสร้างความคอนทราสต์ทางอารมณ์ที่รุนแรง ไม่มีข้อความในเฟรม
```

### No. 3: เอ็มวีฮิปฮอป 'Hello' หลายภาษา

- **Category:** `การอ้างอิงหลายภาพ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

เอ็มวีฮิปฮอปริมทะเลที่สร้างจากภาพอ้างอิงภาพเดียว นักร้องนำแร็ปคำว่า 'hello' ใน 8 ภาษา ลิปซิงก์ ตัดฉับตามจังหวะบีต

#### Prompt

```text
มิวสิกวิดีโอฮิปฮอป/แร็ปสไตล์ภาพยนตร์ คุณภาพเสมือนจริง โทนพรีเมียม ฉากริมทะเล สร้างเฟรมจาก @image1: วงดนตรีเล่นที่หาดทรายสีทองที่มีคลื่นซัดสาด — นักร้องนำกำไมค์บนขาตั้งในทรายเปียก มือกีตาร์คนหนึ่งอยู่ซ้าย อีกคนอยู่ขวา มือกลองอยู่ด้านหลัง ด้านหลังเป็นแนวชายฝั่งกว้างใหญ่ คลื่นซัดม้วน แสงอาทิตย์โกลเดนอาวร์อบอุ่นระยิบระยับบนผืนน้ำ ละอองไอทะเลลอยในอากาศ นักร้องนำในชุดวอร์มสีแดงแร็ปใส่กล้อง — ริมฝีปากและกรามซิงก์กับทุกคำอย่างแม่นยำ ศีรษะกระแทกตามบีต แร็ปสดใส หนักแน่น เร็ว มั่นใจ ตัดฉับตามบีต ทุกการสลับเป็นคอนทราสต์คู่ (ขนาดช็อตและประเภทช็อตเปลี่ยนพร้อมกัน) เนื้อร้อง (นักร้องนำร้องคำว่า 'hello' ในแต่ละภาษาตามลำดับ ลิปซิงก์อย่างแม่นยำ): อังกฤษ "Hello", จีน "你好", ญี่ปุ่น "こんにちは", เกาหลี "안녕하세요", โปรตุเกส "Olá", ไทย "สวัสดี", สเปน "Hola", อาหรับ "مرحبا" 8 ช็อตตัดฉับ (ภาพมุมต่ำกว้างปูเรื่อง โคลสอัปแร็ปใส่กล้อง ภาพแทรกมาโครสายกีตาร์ ออร์บิตวนเฉียง 3/4 แทร็กด้านข้างที่ชายหาด ทิลต์อัปมือกลอง ดันเข้าใกล้ตัวนักร้องนำ ดันเข้าหาวงเต็มวงอย่างยิ่งใหญ่) หนึ่งภาษาต่อหนึ่งช็อต ไวต์บาลานซ์ 4000K เกรดสีเทียล-แอมเบอร์ 35mm ระยะชัดตื้น ฟิล์มเกรน ละอองไอทะเล แสงแฟลร์โกลเดนอาวร์ ให้ความรู้สึกพรีเมียม ลิปซิงก์แม่นยำ ไม่มีซับไตเติล ไม่มีข้อความซ้อน ใช้การตัดฉับเท่านั้น รวม 20 วินาที
```

<a id="category-4"></a>

### การตัดต่อวิดีโอ (2)

### No. 1: ตัดต่อวิดีโอ — ลบทุกคนเหลือแค่ตัวเอก

- **Category:** `การตัดต่อวิดีโอ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

การตัดต่อด้วยวิดีโออ้างอิง: ลบทุกคนออกจากคลิปต้นฉบับ ยกเว้นตัวเอก

#### Prompt

```text
การตัดต่อวิดีโอ: ลบทุกคนใน @video1 ออก ยกเว้นตัวเอก
```

### No. 2: รถไฟไอน้ำทะลุจอ (ตัดต่อวิดีโอ)

- **Category:** `การตัดต่อวิดีโอ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-reference1.mov" controls muted width="360"></video>

#### Description

การตัดต่อวิดีโอที่คงคลิปโรงหนังเก่าต้นฉบับ @video1 ไว้ครบถ้วน และเพิ่มเพียงหัวรถจักรไอน้ำที่พุ่งทะลุจอ ฉีกผืนผ้า โดยภาพขาวดำเปลี่ยนเป็นสีเต็มในวินาทีที่พุ่งชน

#### Prompt

```text
สไตล์สัจนิยมภาพยนตร์เหนือจริงพร้อมเท็กซ์เจอร์แบบถ่ายจริงเสมือนจริง เน้นความสมจริงเชิงกายภาพของวัตถุที่พุ่งทะลุออกมา (รถไฟไอน้ำ) ไม่มีความมันวาวแบบ CGI/เกมเอนจิน/3D ที่ปรุงแต่ง คงองค์ประกอบภาพต้นฉบับของ @video1 แสงในโรงฉาย สภาพกล้องแฮนด์เฮลด์ และความไม่สมบูรณ์ตามธรรมชาติไว้ ล็อกวิดีโอต้นฉบับ: คง @video1 ไว้ครบถ้วนเป็นภาพฐาน (โรงฉายแบบเก่า แถวผู้ชมสวมหมวกที่เห็นจากด้านหลัง ลำแสงทรงกรวยของเครื่องฉาย จอ แสงแวดล้อม โทนสี และการเคลื่อนกล้องแฮนด์เฮลด์ ทั้งหมดไม่เปลี่ยนแปลง) สิ่งที่เพิ่มเข้ามาเท่านั้น: รถไฟที่พุ่งทะลุจอ การเปลี่ยนแปลงของแสงและเงาที่มันนำมา การฉีกขาดของจอ และแรงกระแทกทางกายภาพเล็กน้อยต่อโรงฉายและผู้ชมแถวหน้า กฎการเปลี่ยนสี (ส่วนที่เพิ่มหลัก): ในตอนเริ่มต้นคงเท็กซ์เจอร์ฟิล์มขาวดำเก่าต้นฉบับของ @video1 ไว้อย่างเคร่งครัด (เกรน/รอยขีดข่วน/การกะพริบ/โมโนโครม) ในวินาทีที่หัวรถจักรทะลุจอออกมาสู่ความจริงจริง ๆ ภาพเปลี่ยนจากขาวดำเป็นสีจริงเต็มอย่างฉับพลัน สีแผ่ไปทั่วทั้งเฟรมราวคลื่นกระแทกที่มีจุดศูนย์กลางอยู่ที่จุดที่รถไฟทะลุออกมา (ตัวถังเหล็กสีดำของรถไฟ หม้อน้ำสีทองแดงแดง แสงเรืองสีส้มเหลืองของตะเกียงไอน้ำ สีน้ำตาลอบอุ่นของตู้โดยสารไม้ ไอน้ำสีขาวเทา และสีน้ำตาลอบอุ่นของโรงฉาย ล้วนกลับมามีสีตามลำดับ) การเปลี่ยนสีซิงก์กับการพุ่งทะลุจออย่างแม่นยำ หลังจากนั้นคงสีสมจริงไว้จนจบ ล็อกการฉีกขาดของจอ: จอเป็นผ้าฉายสีขาวจริงที่มีแรงตึงของผ้าจริง ขณะรถไฟพุ่งทะลุออกมามันถูกฉีกขาดออกอย่างรุนแรงตามเส้นรูปร่างส่วนหน้าของหัวรถจักร ด้วยรอยฉีกเป็นรัศมีที่ขอบม้วนกลับและเส้นใยผ้าขาดกระจายปลิว วัตถุ: ส่วนหน้าของหัวรถจักรไอน้ำแบบเก่าที่พุ่งทะลุจอออกมาอย่างรุนแรง ตัวถังเหล็กสีดำ หม้อน้ำทรงกระบอก ที่กันวัวด้านหน้า (cowcatcher) ปล่องที่พ่นไอน้ำสีขาวเทา ไฟหน้าสว่างจ้า พื้นผิวโลหะที่มีร่องรอยสึกหรอจริง คราบน้ำมัน หมุดย้ำ และการสะท้อนแบบเปียก พุ่งไปข้างหน้าด้วยน้ำหนักและแรงเฉื่อยมหาศาล กล้อง: สืบทอดการเคลื่อนกล้องแฮนด์เฮลด์ต้นฉบับของ @video1 อย่างเต็มที่ ไม่ปรับให้เรียบ ไม่ปรับจังหวะเวลาใหม่ ไม่จัดองค์ประกอบใหม่ รถไฟที่พุ่งออกมายังคงถูกล็อกเข้ากับจอและพื้นที่ของโรงฉายอย่างถูกต้องตลอดเวลา คงพารัลแลกซ์ การบดบัง และเงาสัมผัสพื้นที่ถูกต้อง เสียง: ไม่มีดนตรี คงไว้เพียงเสียงเอฟเฟกต์จริงในสถานที่ สืบทอดบรรยากาศโรงฉายของ @video1 (เสียงกึกกักของเครื่องฉาย เสียงผู้ชมขยับตัว) และเพิ่มเสียงผ้าฉีกขาด เสียงไอน้ำพวยพุ่ง เสียงคำรามเชิงกลของล้อเหล็ก และเสียงลมกระแทก ความยาวรวมเท่ากับ @video1 ทุกประการ ไม่เพิ่มสิ่งใดนอกจากตัวรถไฟเองและปฏิสัมพันธ์ทางกายภาพของมัน การฉีกขาดของจอ และการเปลี่ยนสีในวินาทีที่พุ่งทะลุ ไม่มีสโลว์โมชัน ไม่มีความรู้สึกมหัศจรรย์ ไม่มีความสยองขวัญที่ปรุงแต่ง ผลลัพธ์สุดท้ายควรดูเหมือนภาพที่ชวนขนลุกแต่สมจริงของ "รถไฟที่พุ่งทะลุจอ ขาวดำกลายเป็นสีในทันที" ที่ถูกกล้องจริงบันทึกได้โดยบังเอิญในโรงฉายเก่า
```

<a id="category-5"></a>

### บทเรียนแบบมีภาพอ้างอิง (1)

### No. 1: บทเรียนติดตั้งเครื่องชงกาแฟแคปซูล (ภาพอ้างอิง 6 ภาพ)

- **Category:** `บทเรียนแบบมีภาพอ้างอิง`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
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

บทเรียน 30 วินาทีว่าด้วยการติดตั้งและใช้งานเครื่องชงกาแฟแคปซูล หกขั้นตอนแบบมีภาพอ้างอิงพร้อมเสียงบรรยาย — ตั้งแต่ติดตั้งถังน้ำจนถึงการล้างครั้งแรก

#### Prompt

```text
วิดีโอบทเรียน 30 วินาทีว่าด้วยการติดตั้งและใช้งานเครื่องชงกาแฟแคปซูล 0-2s: การ์ดชื่อเรื่องเปิดระบุว่า "บทเรียนติดตั้งเครื่องชงกาแฟแคปซูล seedance" 2-5s, Step 1: ติดตั้งถังน้ำ อ้างอิง @image1 ภาพมีเดียมช็อตจากมุมสูงเล็กน้อย ด้านหลังตัวเครื่อง จัดถังน้ำให้ตรงกับช่องด้านหลังตัวเครื่องแล้วกดลงตรง ๆ จนคลิกล็อกเข้าที่แน่นหนา แสดงให้เห็นชัดว่าตัวล็อกก้นถังตรงกับช่องของตัวเครื่องอย่างไร มองเห็นเส้นระดับน้ำผ่านส่วนโปร่งใสของถัง เสียงบรรยาย "ขั้นแรก ติดตั้งถังน้ำ จัดถังให้ตรงกับช่องด้านหลังเครื่อง เสียงคลิกหมายความว่าล็อกเข้าที่แล้ว" 5-9s, Step 2: ติดตั้งถาดรองน้ำหยด อ้างอิง @image2 โคลสอัปมุมมองด้านหน้า ด้านล่างหน้าตัวเครื่อง เลื่อนถาดรองน้ำหยดในแนวนอนเข้าไปในรางนำที่ด้านล่างจนเข้าที่สนิท เสียงบรรยาย "ต่อไป ติดตั้งถาดรองน้ำหยด จัดถาดให้ตรงกับรางด้านล่าง" 9-13s, Step 3: ติดตั้งกล่องเก็บแคปซูลใช้แล้ว อ้างอิง @image3 โคลสอัปจากมุมต่ำเล็กน้อย ช่องว่างใต้ถาดรองน้ำหยด จัดกล่องเก็บให้ตรงกับช่องเว้าแล้วดันเข้าไปให้เสมอกับถาดรองน้ำหยด เสียงบรรยาย "จากนั้นใส่กล่องเก็บแคปซูล แคปซูลใช้แล้วจะตกลงมาที่นี่โดยอัตโนมัติ" 13-18s, Step 4: เติมน้ำครั้งแรก อ้างอิง @image4 โคลสอัปมุมมองด้านข้าง ถังน้ำที่ด้านบน/ด้านหลังตัวเครื่อง เปิดฝาถังแล้วเทน้ำสะอาดลงไปจนถึงเส้นระดับน้ำ MAX แล้วปิด เน้นที่เส้นระดับน้ำ เสียงบรรยาย "เปิดฝาถัง เทน้ำสะอาดลงไป ระวังอย่าให้เกินเส้นระดับน้ำสูงสุด แล้วปิดฝาถัง" 18-25s, Step 5: เปิดเครื่อง อ้างอิง @image5 มีเดียมช็อตมุมมองด้านหน้า ด้านหน้าตัวเครื่อง เสียบสายไฟแล้วกดปุ่มเปิดเครื่อง ไฟแสดงสถานะเปลี่ยนจากกะพริบเป็นติดค้าง (อุ่นเครื่องเสร็จ) เสียงบรรยาย "ต่อสายไฟแล้วกดปุ่มเปิดเครื่อง ไฟแสดงสถานะเริ่มกะพริบ หมายความว่ากำลังอุ่นเครื่อง เมื่อไฟติดค้าง เครื่องก็พร้อมใช้งาน" 25-30s, Step 6: ล้างครั้งแรก (โดยไม่ใส่แคปซูล) อ้างอิง @image6 มีเดียมช็อตเคลื่อนไปสู่โคลสอัปมุมมองด้านหน้า-ข้าง โดยไม่ใส่แคปซูล กดปุ่มชงโดยตรงเพื่อให้น้ำร้อนไหลออกมาล้างท่อ เน้นข้อความ "ไม่ต้องใส่แคปซูล" เสียงบรรยาย "ขั้นตอนสุดท้าย การล้างครั้งแรก โปรดทราบว่าขั้นตอนนี้ไม่ต้องใช้แคปซูล เพียงกดปุ่มชง เมื่อล้างเสร็จ เครื่องชงกาแฟของคุณก็พร้อมใช้งาน"
```

<a id="category-6"></a>

### การอ้างอิงหลายรูปแบบ (ภาพ+วิดีโอ) (1)

### No. 1: โฆษณาคุกกี้รสผลไม้ (ภาพ + วิดีโออ้างอิง 6 คลิป)

- **Category:** `การอ้างอิงหลายรูปแบบ (ภาพ+วิดีโอ)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
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

โฆษณาสดใสหลากสีสำหรับคุกกี้รสผลไม้สี่รส — สตรอว์เบอร์รี แอปเปิล องุ่น ส้ม — สร้างจากภาพอ้างอิงหนึ่งภาพและวิดีโออ้างอิงด้านการเคลื่อนไหว/กล้องหกคลิป ตัดฉับตามจังหวะบีตที่เร่งเร้า

#### Prompt

```text
สไตล์โฆษณาสดใสหลากสีที่มีคุกกี้รสผลไม้เป็นพระเอก สี่รส — สตรอว์เบอร์รี แอปเปิล องุ่น และส้ม รสสตรอว์เบอร์รีอ้างอิง @image1 คุกกี้และผลไม้ที่เข้าคู่กันถูกจัดเรียงเป็นอาร์เรย์เรขาคณิตที่เป็นระเบียบอย่างชัดเจน เฟรมโดยรวมสะอาดตา พรีเมียม และเปี่ยมพลัง เปิดเรื่องด้วยผลไม้ที่โคจรอย่างรวดเร็วรอบคุกกี้ตรงกลางเพื่อดึงจุดสนใจทางสายตาอย่างฉับไว — อ้างอิงองค์ประกอบภาพของ @video1 — ตัดเข้าในจังหวะบีตหนักแน่นทางดนตรี จากนั้นคุกกี้รสต่าง ๆ เคลื่อนเข้าหาเลนส์ตามเส้นทางเกลียว ก่อเกิดมิติเชิงพื้นที่ที่ชัดเจน — อ้างอิงการเคลื่อนไหวและการทำงานของกล้องจาก @video2 — สลับสีและรสตามบีตของเพลงประกอบ อาร์เรย์คุกกี้แพนซ้ายขวาด้วยการตัดจากระนาบสู่ระนาบอย่างรวดเร็ว รสสตรอว์เบอร์รี แอปเปิล องุ่น และส้มสลับกันไปขณะเฟรมจัมป์คัตอย่างรวดเร็วตามจังหวะ — อ้างอิงการเคลื่อนไหวของ @video3 ช่วงกลางเพิ่มการแพนขึ้นลง อาร์เรย์คุกกี้ที่เป็นระเบียบขึ้นลงในแนวตั้งเหมือนเครื่องจักร — อ้างอิงการเคลื่อนไหวของ @video4 — เน้นความงามของความเป็นระเบียบและความอุดมของสินค้า ในช่วงไคลแมกซ์ คุกกี้ชิ้นหนึ่งถูกหักเป็นสองท่อน และช่วงเวลานั้นเข้าสู่สโลว์โมชันขณะไส้ผลไม้ระเบิดออก เศษคุกกี้กระจาย ความฉ่ำและแรงปะทะของเนื้อสัมผัสถูกขยายให้เด่นชัด — อ้างอิงเอฟเฟกต์การระเบิดของ @video5 — แล้วกลับสู่การตัดต่อจังหวะเร็วอย่างรวดเร็ว ตอนจบนำข้อความภาษาอังกฤษ "Fresh on Seedance, made for viral vision" เข้ามา ปรากฏทีละคำต่อเนื่องอย่างรวดเร็วด้วยโมชันข้อความที่มีจังหวะหนักแน่นและภาพสินค้าหยุดนิ่ง — อ้างอิง @video6 — คุกกี้สี่รสเรียงกันอย่างเป็นระเบียบพร้อมผลไม้เด้งดึ๋งเข้าจังหวะเพื่อปิดท้ายที่ชูแบรนด์เป็นหลัก เฟรมเต็มไปด้วยบรรยากาศโฆษณาที่ดูอ่อนเยาว์ เปี่ยมพลัง น่ากิน และน่าแชร์
```

<a id="category-7"></a>

### การอ้างอิงภาพ (1)

### No. 1: กิ้งก่าเขาทะเลทรายกับเกรปฟรุต (โฆษณา 3D)

- **Category:** `การอ้างอิงภาพ`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

โฆษณาแอนิเมชัน 3D สดใสเงางาม: กิ้งก่าเขาทะเลทรายที่กระหายน้ำเจอเกรปฟรุต กัดเข้าไป แล้วคลื่นยักษ์น้ำผลไม้เปลี่ยนทะเลทรายให้กลายเป็นทะเลหน้าร้อน สร้างจากภาพอ้างอิงตัวละครหนึ่งภาพ

#### Prompt

```text
สไตล์โฆษณาแอนิเมชัน 3D สีสันสดใสโปร่งแสง เนื้อและน้ำผลไม้ต้องให้ความรู้สึกสดชื่นและกระแทกใจอย่างเข้มข้น บรรยากาศโดยรวมเหมือนหนังแอนิเมชันโฆษณาคุณภาพสูงที่แฝงอารมณ์ขันเกินจริงเล็กน้อย ตัวละครกิ้งก่าเขาทะเลทรายน่ารัก มีชีวิตชีวา และแสดงอารมณ์ได้ดี อ้างอิง @image1 เท็กซ์เจอร์ของภาพอ้างอิงจากแสงธรรมชาตินุ่มนวล เท็กซ์เจอร์ขนอ่อน/ผิวอันละเอียดอ่อน ระยะชัดมาโครชวนฝัน และความรู้สึกสมจริงแต่แฝงความเป็นเด็กเล็กน้อยจากภาพอ้างอิง 0-3s: ทะเลทรายที่ถูกแดดแผดเผา อากาศระยิบระยับด้วยไอความร้อนและทรายร้อนระอุ กิ้งก่าเขาทะเลทรายตัวหนึ่งนอนแผ่บนทรายที่ร้อนลวก ลิ้นแลบออกเล็กน้อย ดวงตาเลื่อนลอย เกือบแห้งเหี่ยว โซซัดโซเซทุกสองสามก้าวราวกับกำลังจะ "ระเหย" 3-6s: มันหยุดกึกทันใด จมูกกระตุก และเมื่อก้มมองลงไปก็เห็นเกรปฟรุตลูกอวบเย็นฉ่ำเคลือบหยดน้ำค้างครึ่งจมอยู่ในทราย ส่องประกายราวปาฏิหาริย์กลางทะเลทราย ดวงตาของกิ้งก่าเบิกกว้างในพริบตา 6-8s: มันพุ่งเข้าใส่ กอดเกรปฟรุตไว้แน่นด้วยสองมือ เอาใบหน้าทั้งหน้าแนบกับเปลือกด้วยสีหน้าเปี่ยมสุข "ในที่สุดฉันก็รอด" เฟรมค้างไว้ 1 วินาที ก่อเกิดช่วงความทรงจำที่เกินจริงและน่าขัน 8-11s: มันเงยหน้าขึ้น อ้าปากกัดคำโต ๆ เปลือกเกรปฟรุตปริแยกออก เนื้ออวบส่องประกายเงางามโปร่งแสง และวินาทีถัดมาน้ำผลไม้ก็พวยพุ่งออกมาราวคลื่นสึนามิ 11-16s: น้ำเกรปฟรุตสีส้มอมชมพู โปร่งแสง เป็นประกาย หลั่งไหลออกมาอย่างบ้าคลั่ง ไหลบ่าลงเนินทรายและท่วมทะเลทรายทั้งหมดอย่างรวดเร็ว ทรายเหลืองแห้งกลายเป็นทะเลหน้าร้อนที่เย็นฉ่ำ ระยิบระยับ หอมกลิ่นผลไม้ในทันที ต้นกระบองเพชร ก้อนหิน และเนินทรายเล็ก ๆ ถูกกลืนหายไปในคลื่นน้ำผลไม้ สีหน้าของกิ้งก่าเปลี่ยนจากดีใจเป็นหวาดกลัว 16-20s: เกือบจมน้ำใน "ทะเลเกรปฟรุต" มันคว้าเกรปฟรุตครึ่งลูกไว้แน่นราวห่วงชูชีพอย่างลนลานและลอยตัว โผล่หัวที่เปียกโชกขึ้นมาด้วยสีหน้างุนงง 20-24s: ตัดไปที่จอขาว ชื่อแบรนด์และสโลแกนปรากฏตรงกลางเฟรม: "Seedance เกรปฟรุต — กัดเข้าไปเจอเนื้อ สิ่งที่หลั่งออกมาคือหน้าร้อน" เสียงบรรยายอ่านประโยคทั้งหมด 24-30s: ตัดกลับจากจอขาว กิ้งก่าเขาทะเลทรายตอนนี้เอนกายอยู่บนเกรปฟรุตที่ลอยน้ำ สวมแว่นกันแดดตัวจิ๋วและถือแก้วที่มีหลอด ล่องลอยอย่างสบายอารมณ์บน "ทะเลน้ำผลไม้" ราวไปพักร้อน รายล้อมด้วยเนื้อส้มที่ลอยฟ่อง ก้อนน้ำแข็งเล็ก ๆ ละอองน้ำเย็นฉ่ำ และท้องฟ้าสีครามใส อารมณ์เปลี่ยนจาก "การเอาตัวรอด" สู่ "การพักร้อน" และในที่สุดมันก็เอนหลังพิงเกรปฟรุตอย่างพึงพอใจขณะกล้องถอยออกและหยุดนิ่งที่เฟรมหน้าร้อนอันสดชื่น สดใส และขี้เล่น
```

<a id="category-8"></a>

### การอ้างอิงภาพ (สไตล์ภาพยนตร์) (1)

### No. 1: ชายเมาร่วงจากดาดฟ้า (หนังสั้นตลกร้าย)

- **Category:** `การอ้างอิงภาพ (สไตล์ภาพยนตร์)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `th`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

หนังสั้นสไตล์ภาพยนตร์ตลกร้ายยาวราว 30 วินาที: ชายอ้วนเมาคนหนึ่งร่วงตกจากดาดฟ้า คว้าเชือกชูชีพไว้ได้ พุ่งทะลุหน้าต่างเข้าไป แล้วก็หลับไปดื้อ ๆ ตัวละครมาจากภาพอ้างอิงหนึ่งภาพ สร้างขึ้นบนการตัดฉับระหว่างเสียงกึกก้องกับความเงียบสนิท

#### Prompt

```text
[ชายเมาผวาบนดาดฟ้า — ร่วงตกจากขอบ — คว้าเชือกผ่านหน้าต่าง — สลบคาที่ | หนังสั้นตลกร้าย | ประมาณ 30 วินาที] เรื่องย่อหนึ่งบรรทัด: ชายวัยกลางคนอ้วนน่ารักเมา ๆ กำลังกินเบอร์เกอร์และดื่มเบียร์บนดาดฟ้าของอาคาร ขณะลุกขึ้นยืดเส้นยืดสายเขาพลาดเสียหลักและร่วงตก ในความตื่นตระหนกเขาคว้าเชือกชูชีพไว้ได้แล้วพุ่งทะลุหน้าต่างเข้าไปในห้องทันที มึนงงตะลึงหนึ่งวินาที จากนั้นก็ล้มตัวลงนอนตรงนั้นแล้วหลับสนิท ภาพอ้างอิง @image1 — ชายวัยกลางคนอ้วนน่ารักเมา ๆ: รูปร่างกลมล่ำสันมีพุงเบียร์กลมโต ตัวเตี้ย เคลื่อนไหวเชื่องช้าย้วยเยกและโซเซจากฤทธิ์สุรา ใบหน้ากลม คางสองชั้น แก้มและจมูกแดงเรื่อจากการดื่ม ตาหรี่เป็นเส้นด้วยสายตาปรือ ๆ หนวดเคราสั้นขึ้นรุงรังไม่ได้โกน ผมยุ่ง สีหน้าซื่อ ๆ น่ารัก ไร้กังวล สวมเสื้อกล้ามสีขาวเปื้อนซอสเบอร์เกอร์ห้อยหลวม ๆ คลุมพุงกลม กางเกงยีนส์เก่า ลากรองเท้าแตะหลวม ๆ เดินต้วมเตี้ยม มือกำเบอร์เกอร์ที่กินไปครึ่งลูกอยู่เสมอ ทั้งเรื่องมีตัวละครเพียงคนนี้คนเดียว ตรงกับภาพอ้างอิง 100% ลุคโดยรวม: มหานครไซเบอร์พังก์ยามค่ำคืน ป่าตึกระฟ้ากระจกและเหล็กหนาแน่น ป้ายนีออน (ฟ้าครามอมเขียว/ม่วงแดง/น้ำเงินสดใส) ป้ายโฆษณาโฮโลแกรม พื้นเปียกสะท้อนแสง หมอกหนา แสงไฟรถบินและโดรนเป็นทางในระยะไกล เท็กซ์เจอร์แบบถ่ายจริง เลนส์ภาพยนตร์จริง ไม่มีความรู้สึกแบบเรนเดอร์ 3D/เกมเอนจิน/อนิเมะ กล้องผสมระหว่างแฮนด์เฮลด์กับจิบ/โดรน หลังจากการร่วงตก กล้องดิ่งลงไปพร้อมกับเขาขณะที่ผนังภายนอกอาคารและนีออนพุ่งขึ้นเพื่อสื่อความเร็ว เท็กซ์เจอร์เลนส์ภาพยนตร์จอกว้าง 24-35mm โมชันเบลอชัตเตอร์ 180 องศา การออกแบบเสียงคือหัวใจของความตลกร้าย: ตัดฉับซ้ำ ๆ ระหว่าง "เสียงกึกก้อง" กับ "ความเงียบสนิท" คงแรงโน้มถ่วงจริงตลอดทั้งเรื่อง สตอรีบอร์ด (ประมาณ 30 วินาที): S1 (0-4s) เปิดด้วยโคลสอัปใหญ่ตอนเคี้ยว (มีเสียง) ใบหน้าของชายเต็มจอ เคี้ยวเบอร์เกอร์คำโต ๆ ในสภาพเมาที่พึงพอใจ S2 (4-9s) ถอยไปเป็นภาพกว้าง ยืดเส้น -> เสียหลักและร่วงตก (มีเสียง) เขาลุกขึ้นยืนอย่างโซเซและยืดเส้นเต็มที่ เอนไปข้างหลัง ทรงตัวไม่อยู่ เท้าลื่นและตีลังกาถอยหลังข้ามขอบดาดฟ้าไป โดยไม่ปล่อยเบอร์เกอร์เลย พร้อมเสียงตกใจ "เอ๊ะ——!" S3 (9-12s) ตัดไปที่โคลสอัปใบหน้าที่ตกใจ (เสียงกรีดร้องดัง เสียงกึกก้อง) ดวงตาเมากลมโปน คางสองชั้นย่นเป็นก้อน ปากอ้ากว้างกรีดร้อง "อ๊าา——!!" ลมหวีดหวิว S4 (12-16s) ตัดไปที่ภาพลองช็อตระดับสายตา (เงียบสนิท) มองจากอาคารฝั่งตรงข้าม ร่างสีขาวเล็กจิ๋วดิ่งลงตรง ๆ จากตึกสูง เมืองนีออนกว้างใหญ่และเฉยเมย ความเงียบสนิทก่อเกิดความคอนทราสต์แบบตลกร้ายกับเสียงกึกก้องเมื่อวินาทีก่อน S5 (16-21s) ตัดไปที่โคลสอัปใบหน้า (กรีดร้อง) -> คว้าเชือก ยังคงกรีดร้อง สองมือฟาดฟันในอากาศ จู่ ๆ เขาก็คว้าสายเคเบิลชูชีพไว้ได้ สายเคเบิลตึงเปรี๊ยะและโค้งงอใต้น้ำหนักของเขาพร้อมเสียงดีดสะบัด เสียงกรีดร้องขาดหายไปทันทีขณะเขาถูกกระชากและเหวี่ยงออก (สโลว์โมชันสั้น ๆ ในจังหวะที่เขาคว้าเชือก) S6 (21-26s) ตัดไปที่มุมภายในห้อง (เงียบ) -> กระจกแตก -> เขาพุ่งเข้ามา ภายในห้องแรกเริ่มเงียบมีเพียงเสียงหึ่งของเครื่องปรับอากาศ วินาทีถัดมากระจกระเบิดแตกเข้าด้านใน (บูลเลตไทม์สั้น ๆ) ขณะชายเมาพร้อมเบอร์เกอร์พุ่งทะลุหน้าต่างเข้ามา เศษกระจกกระเด็นออกเป็นรัศมี แสงนีออนสาดเข้ามา และเขากระแทกลงในห้องอย่างหนักลงบนพื้น/โซฟา เศษกระจกดังกรุ๊งกริ๊ง S7 (26-30s) ตอนจบ ตกใจหนึ่งวินาที -> หลับไป ชายนอนแผ่หราบนพื้นเกลื่อนเศษกระจก ยังกำเบอร์เกอร์ไว้ ค่อย ๆ ลืมตาขึ้น มึนงง ตะลึงเหม่อลอยเต็มหนึ่งวินาที มองไปรอบ ๆ ราวกับคิดว่า "ฉันอยู่ที่ไหน?" จากนั้นฤทธิ์สุราก็เข้าครอบงำ และไม่แยแสอะไรเลย เขาเลียริมฝีปาก กอดเบอร์เกอร์เข้าอก พลิกตัว ล้มตัวลงนอนตรงนั้นแล้วหลับสนิท ถึงขั้นกรนเบา ๆ กล้องถอยออกและหยุดนิ่ง ตัดฉับเป็นจอดำ ใช้เสียงสดในสถานที่จริงเท่านั้น ไม่มีดนตรี ไม่มีซับไตเติล หัวใจคือการตัดฉับซ้ำ ๆ ระหว่าง "เสียงกึกก้อง" กับ "ความเงียบ"
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
- [Atlas Cloud Seedance 2.5 page](https://www.atlascloud.ai/th/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
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
