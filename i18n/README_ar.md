# 🎬 Awesome Seedance 2.5 Prompts + Seedance 2.5 Skill

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-seedance-2.5-prompts-skills?style=social)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/pulls)
[![Prompts](https://img.shields.io/badge/prompts-11%2B-blue.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

A curated library of Seedance 2.5 video prompts plus **Seedance 2.5 Skill**, an installable Agent Skill that improves prompts, plans and reviews storyboards when needed, and generates controllable video. It uses Seedream 5.0 Pro for storyboard images and Seedance 2.0 as the current executable video default, switching to Seedance 2.5 only when the selected provider exposes it.

| [Browse prompts](https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Install Seedance 2.5 Skill](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/tree/main/skills/seedance-2-5-skill) | [Generate with Atlas Cloud](https://www.atlascloud.ai/ar/models/bytedance/seedance-2.5/text-to-video?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Get an API key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) |
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
- [Seedance 2.5 launch overview — Atlas Cloud](https://www.atlascloud.ai/ar/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)

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
| Total Prompts | **11** |
| Categories | **8** |
| Preview Videos | **11** |
| Last Updated | **2026-07-23** |

<a id="featured-prompts"></a>

## 🔥 Featured Prompts

### No. 1: فيلم إيقاعي بالقطع المتطابق مع الكرة البلورية

- **Category:** `القطع المتطابق والمؤثرات الإبداعية`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

فيلم بالقطع المتطابق متزامن مع الإيقاع: كرة بلورية محفور بداخلها شعار 'seedance' متوهّج تبقى في المنتصف بينما تتوالى خلفها ثمانية مشاهد بقطعٍ سلس.

#### Prompt

```text
فيلم قصير سينمائي سريع الإيقاع بأسلوب القطع المتطابق، متزامن مع إيقاع إلكتروني نابض. تبقى كرة بلورية لا تشوبها شائبة ثابتة في منتصف الإطار تمامًا طوال الوقت، وقد حُفر بداخلها شعار "seedance" متوهّج. تحتفظ الكرة بتركيز حاد كالموسى، بينما تتبدّل الخلفية بقطعٍ متطابق سلس عند كل ضربة موسيقية قوية: Scene 1: لقطة ماكرو مقرّبة، رذاذ ماء سينمائي يتطاير حول الكرة، ويعكس ضوءًا متشعبًا دقيقًا. Scene 2: مقهى صباحي عتيق الطراز، الكرة على طاولة من الخشب الخام، بخار قهوة يتصاعد وعابرون ضبابيون خلف النافذة. Scene 3: غسق الساعة الذهبية، شاب متزلّج يقذف الكرة ويلتقطها بيد واحدة، والشارع يتراجع خلفه في غروب خلفيّ الإضاءة بديع. Scene 4: مهرجان موسيقي صاخب، أيادٍ ترفع الكرة عاليًا، تعكس أشعة ليزر المسرح الباهرة. Scene 5: طاولة حفلة عائلية مفعمة بالحياة، الكرة مستقرة في وسط الإطار، وأشخاص ضبابيون يرفعون نخبًا ويمدّون أيديهم نحو الطعام. Scene 6: صالة سينما خافتة، أيادٍ تحتضن الكرة بينما يتهادى وهج الشاشة العملاقة الخافت على سطحها. Scene 7: الكرة فوق غشاء مكبّر صوت يهتز بعنف، تتبدّل بقطعٍ متطابق عند الذروة إلى قرص دوّار (تيرن تيبل) لمنسّق أغانٍ في المنتصف. Scene 8: ليلة تخييم في الخلاء، تتحول الخلفية إلى نار مخيّم دافئة وأضواء سلسلية متمايلة بتأثير بوكيه. الخاتمة: عند الضربة الأخيرة تُقذف الكرة إلى أعلى خارج الإطار؛ قطع إلى سواد خالص، تظهر كلمة "seedance" بسيطة بالأبيض على الأسود في المنتصف تمامًا. مونتاج بالقطع المتطابق متزامن مع الإيقاع، تدرّج ألوان سينمائي من الطراز الأول، انكسار زجاجي فوتوريالي، تتبّع الأشعة، إضاءة شاملة. الهدف حاد كالموسى، والخلفية بها ضبابية حركة كثيفة.
```

### No. 2: آلية ساعة ستيمبانك — لقطة واحدة 30 ثانية

- **Category:** `التصوير بلقطة واحدة متواصلة`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

تسلسل ثلاثي الأبعاد مصغّر بأسلوب الستيمبانك مدته 30 ثانية، بحركة كاميرا دائرية متواصلة تخترق المشاهد.

#### Prompt

```text
تسلسل رسوم متحركة ثلاثي الأبعاد راقٍ وسينمائي بامتياز مدته 30 ثانية، بأسلوب ستيمبانك مصقول ومصغّرات عتيقة، بحركة كاميرا دائرية سلسة ومتواصلة تخترق العناصر. [0-10s] لقطة ماكرو مقرّبة لوجه ساعة نحاسية عتيقة تتفتّح طبقةً تلو الأخرى إلى حلقات تروس دوّارة متعاشقة وضباب حجمي. تخترق الكاميرا نزولًا عبر التروس؛ وتصعد طائرة مجنّحة ميكانيكية في حركة حلزونية من وادٍ مصغّر مكوّن من أكوام كتب قديمة بالية. [10-20s] تنساب الكاميرا إلى الأمام متتبّعة الطائرة المجنّحة، لتعبر بسلاسة إلى زوتروب نحاسي مزخرف يدور بسرعة ويعرض ضوء خيول ميكانيكية تعدو. يقفز الضوء إلى الخارج فيتحول المشهد إلى عربة تلفريك نحاسية طافية على قضبان نحاسية متلألئة تعبر غابة من التروس، تغمرها إضاءة الساعة الذهبية السينمائية. [20-30s] تميل الكاميرا برشاقة إلى الأسفل؛ فتظهر في الأسفل سفينة شراعية خشبية بديعة تعمل بآلية ساعة تشقّ أمواجًا زرقاء داكنة بملمس زجاجي، تتحول إلى قمر عملاق متوهّج تظهر عليه صور ظلية لمستكشفين يحملون فوانيس يجوبون حافة عرق بلوري تحت النجوم. تعود الكاميرا بحركة حلزونية سلسة عبر سحب أثيرية إلى وجه الساعة النحاسية النابض بالتكتكة. ملمس ميكانيكي شديد الواقعية، درجات نحاسية وذهبية غنية، عمق ميدان ضحل سينمائي، حركة كاميرا اختراقية سلسة متصلة، أجواء مغامرة خيالية ملحمية.
```

### No. 3: نوافذ على عوالم (5 مراجع)

- **Category:** `مرجع متعدد الصور`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
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

فيلم قصير لمفهوم علامة تجارية تقوده 5 صور مرجعية، ينساب عبر النوافذ إلى عوالم مختلفة.

#### Prompt

```text
فيلم قصير سينمائي لمفهوم علامة تجارية. @image1 هو الإطار الأول؛ ترتجف الصورة قليلًا، وتتقدّم الكاميرا نحو ظلال الأشجار المندفعة إلى الخلف خارج النافذة، ويتسارع تراجعها، ثم تقطع فجأة إلى @image2، لتخفّ السرعة بينما تنساب الكاميرا ببطء بمحاذاة جدول، مع تغريد الطيور والأزهار المتفتّحة. تغوص الكاميرا تحت الماء — أصوات فقاعات — بينما يمرّ قنديل بحر برتقالي بأناقة أمام العدسة @image3؛ تتراجع الكاميرا بينما تخطف أسماك صغيرة عبرها وتسبح من الماء إلى داخل النافذة @image4، وفتاة تتلفّت حولها وتراقبها. تتراجع الكاميرا وتفقد التركيز، ثم تعيد التركيز بوضوح حاد، متبدّلةً على إيقاع الموسيقى: نافذة مشبّكة على طراز الحدائق الصينية @image5 يدور الضوء حولها، زجاج كنيسة ملوّن، كوّة طائرة، منور قبّة، نافذة بارزة (باي ويندو)، ستائر معدنية أفقية، نافذة سطح أوروبية، ثقب باب للنظر، محدّد رؤية كاميرا، عين طائر، ولقطة مقرّبة لعين بشرية. يستقر المشهد على العين البشرية؛ تنغلق العين، فتُظلم الشاشة، ثم تنفتح فجأة — لتظهر كلمة "seedance" في مركز العين على الضربة المميّزة.
```

### No. 4: لقطة واحدة عبر ست غرف (8 مراجع)

- **Category:** `مرجع متعدد الصور`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
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

لقطة واحدة متواصلة تتبع شخصًا عبر ست غرف تتبدّل أجواؤها، تقودها 8 صور مرجعية.

#### Prompt

```text
لقطة واحدة متواصلة. تتبع الكاميرا بسلاسة شخصًا يرتدي معطفًا أسود (المرجع @image1) وهو ينتقل من اليسار إلى اليمين عبر ست غرف متصلة مختلفة الألوان والأجواء. تشترك كل الغرف في البنية نفسها: جدران بيضاء، أرضية خشبية فاتحة بنقشة عظم السمكة، نوافذ فرنسية ممتدة من الأرض إلى السقف، ستائر بيضاء شفافة (المرجع @image2) لكن المنظر الخارجي والأجواء يختلفان في كل مرة. يمشي البطل بوتيرة ثابتة، عابرًا كل باب مفتوح. 0-5s الغرفة الأولى، شجار على طراز الكوميكس الأمريكي: يتقاتل البطل مع شخصية (@image3) فتُهزم؛ 5-10s الغرفة الثانية، دفء، بأسلوب حرفة اللباد، منظر النافذة حقل عبّاد شمس (@image4)، ضوء ناعم برتقالي دافئ، ورسّام يرسم عبّاد الشمس (@image5)، ويتحول البطل إلى أسلوب اللباد لحظة دخوله؛ 10-15s الغرفة الثالثة، حزن، كوميكس أبيض وأسود بأسلوب ستوب موشن، مطر في الخارج، ضوء رمادي بارد، شخص وحيد على الأرض يحتضن ركبتيه، وهاتف يتوهّج بمكالمة لم يُجب عليها؛ لحظة الدخول ينطفئ الضوء ثم يعود، فتكتسي الغرفة بالألوان، وتتفتّح الأزهار دفعة واحدة؛ 15-20s الغرفة الرابعة، فرح، غرفة غارقة في البحر (المرجع @image6)، ويصير البطل شفافًا بين الشعاب المرجانية والأسماك؛ 20-25s الغرفة الخامسة، دهشة، منظر النافذة سماء تملؤها الألعاب النارية (المرجع @image7)، ضوء ملوّن متلألئ، والبطل تجرفه حشود مهلّلة؛ 25-30s غرفة بيضاء فارغة، يفرقع البطل أصابعه — مؤثر صوتي للفرقعة — فيصير الإطار أسود، وتظهر "seedance" في المنتصف (المرجع @image8). جودة سينمائية، أسلوب إعلانات أزياء راقية، الإضاءة تحدّدها بالكامل مناظر النوافذ لخلق تباين عاطفي قوي، بلا أي نص في الإطار.
```

### No. 5: تحرير الفيديو — إزالة الجميع باستثناء البطل

- **Category:** `تحرير الفيديو`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

تحرير بالاستناد إلى فيديو مرجعي: مسح كل الأشخاص عدا البطل من مقطع المصدر.

#### Prompt

```text
تحرير الفيديو: أزِل كل الأشخاص في @video1 عدا البطل.
```

### No. 6: فيديو كليب هيب هوب متعدد اللغات بعنوان 'Hello'

- **Category:** `مرجع متعدد الصور`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

فيديو كليب هيب هوب على شاطئ البحر مبنيّ من صورة مرجعية واحدة؛ يؤدّي المغني الرئيسي كلمة 'hello' راب بثماني لغات، بتزامن شفاه، مع قطعات حادة على الإيقاع.

#### Prompt

```text
فيديو كليب هيب هوب / راب سينمائي، بجودة فوتوريالية ونبرة راقية، في أجواء شاطئ البحر. ابنِ الإطار من @image1: فرقة تؤدّي على شاطئ رملي ذهبي حيث تتكسّر الأمواج — مغنٍّ رئيسي يمسك ميكروفونًا على حامل في الرمل المبلل، عازف غيتار على اليسار وآخر على اليمين، وعازف طبول في الخلف؛ خلفهم خط ساحلي شاسع، وأمواج متدحرجة، وشمس الساعة الذهبية الدافئة تتلألأ على الماء، ورذاذ بحري في الهواء. يؤدّي المغني الرئيسي بزيّ رياضي أحمر الراب نحو الكاميرا — شفتاه وفكّه متزامنان بدقة مع كل كلمة، ورأسه ينبض مع الإيقاع. راب مشرق وقوي وسريع وواثق. قطع حاد على الإيقاع، وكل انتقال يحمل تباينًا مزدوجًا (يتغيّر حجم اللقطة ونوعها معًا). الكلمات (يغني المغني الرئيسي 'hello' بكل لغة بالتناوب، بتزامن شفاه دقيق): الإنجليزية "Hello"، الصينية "你好"، اليابانية "こんにちは"، الكورية "안녕하세요"، البرتغالية "Olá"، التايلاندية "สวัสดี"، الإسبانية "Hola"، العربية "مرحبا". 8 لقطات بقطع حاد (لقطة تأسيسية واسعة من زاوية منخفضة؛ راب مقرّب نحو الكاميرا؛ لقطة ماكرو مقحمة لأوتار الغيتار؛ دوران متسلّل بزاوية 3/4؛ تتبّع جانبي عند الشاطئ؛ إمالة لأعلى نحو عازف الطبول؛ اقتراب محكم نحو المغني الرئيسي؛ اقتراب بطولي نحو الفرقة كاملة)، لغة واحدة لكل لقطة. توازن أبيض 4000K، تدرّج ألوان أزرق مخضرّ وكهرماني، عدسة 35mm، عمق ميدان ضحل، حبيبات فيلمية، رذاذ بحري، وهج الساعة الذهبية. إحساس فاخر، تزامن شفاه دقيق، بلا ترجمة، بلا نصوص فوق الصورة، قطعات حادة فقط، المدة الإجمالية 20 ثانية.
```

### No. 7: درس إعداد آلة قهوة الكبسولات (6 مراجع)

- **Category:** `درس تعليمي موجّه بالمراجع`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
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

درس تعليمي مدته 30 ثانية لإعداد آلة قهوة الكبسولات واستخدامها، بست خطوات موجّهة بالمراجع مع تعليق صوتي — من تركيب خزّان الماء إلى الشطف الأول.

#### Prompt

```text
فيديو تعليمي مدته 30 ثانية حول تركيب آلة قهوة الكبسولات واستخدامها. 0-2s: بطاقة العنوان الافتتاحية تحمل "seedance: درس إعداد آلة قهوة الكبسولات". 2-5s، الخطوة 1: ركّب خزّان الماء، المرجع @image1، لقطة متوسطة من زاوية مرتفعة قليلًا، الجزء الخلفي من جسم الآلة، حاذِ خزّان الماء مع الفتحة في مؤخرة الجسم وادفعه مستقيمًا للأسفل حتى يستقر بإحكام مع صوت طقّة، مع إظهار واضح لكيفية محاذاة مشابك قاع الخزّان مع فتحة الجسم، وخط مستوى الماء ظاهر عبر الجزء الشفاف من الخزّان، تعليق صوتي "أولًا، ركّب خزّان الماء. حاذِ الخزّان مع الفتحة في مؤخرة الآلة؛ صوت الطقّة يعني أنه استقر في مكانه.". 5-9s، الخطوة 2: ركّب صينية التقطير، المرجع @image2، لقطة مقرّبة من الأمام، الجزء الأمامي السفلي من الجسم، أدخِل صينية التقطير أفقيًا في القضبان الموجّهة أسفل الجسم حتى تستقر تمامًا، تعليق صوتي "بعد ذلك، ركّب صينية التقطير. حاذِ الصينية مع القضبان السفلية.". 9-13s، الخطوة 3: ركّب صندوق تجميع الكبسولات المستعملة، المرجع @image3، لقطة مقرّبة من زاوية منخفضة قليلًا، التجويف أسفل صينية التقطير، حاذِ صندوق التجميع مع التجويف وادفعه ليصير مستويًا مع صينية التقطير، تعليق صوتي "ثم أدخِل صندوق تجميع الكبسولات. ستسقط الكبسولات المستعملة هنا تلقائيًا.". 13-18s، الخطوة 4: املأ الماء لأول مرة، المرجع @image4، لقطة مقرّبة جانبية، خزّان الماء في أعلى/مؤخرة الجسم، افتح غطاء الخزّان واسكب ماءً نظيفًا حتى خط مستوى الماء MAX، ثم أغلقه، مع التركيز على خط مستوى الماء، تعليق صوتي "افتح غطاء الخزّان، واسكب ماءً نظيفًا، مع الانتباه إلى عدم تجاوز خط مستوى الماء الأقصى، ثم أغلق غطاء الخزّان.". 18-25s، الخطوة 5: التشغيل، المرجع @image5، لقطة متوسطة من الأمام، الجزء الأمامي من الجسم، أوصل سلك الطاقة واضغط زر التشغيل؛ ينتقل ضوء المؤشر من الوميض إلى الثبات (اكتمل التسخين المسبق)، تعليق صوتي "أوصل الطاقة واضغط زر التشغيل. يبدأ ضوء المؤشر بالوميض، ما يعني أنه في طور التسخين. وحين يثبت الضوء، تكون الآلة جاهزة.". 25-30s، الخطوة 6: الشطف الأول (بدون كبسولة)، المرجع @image6، لقطة متوسطة تنتقل إلى لقطة مقرّبة أمامية جانبية، بدون إدخال كبسولة اضغط زر التحضير مباشرة ليتدفق الماء الساخن ويشطف الأنابيب، مع التركيز على ملاحظة "لا حاجة لكبسولة"، تعليق صوتي "الخطوة الأخيرة، الشطف الأول. لاحظ أن هذه الخطوة لا تتطلب كبسولة؛ فقط اضغط زر التحضير. وبمجرد انتهاء الشطف، تصبح آلة القهوة جاهزة للاستخدام."
```

### No. 8: إعلان بسكويت الفواكه (صورة + 6 مراجع فيديو)

- **Category:** `مرجع متعدد الوسائط (صورة+فيديو)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
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

إعلان مشرق وملوّن لبسكويت الفواكه بأربع نكهات — فراولة، تفاح، عنب، برتقال — مبنيّ من مرجع صورة واحد وستة مراجع فيديو للحركة والكاميرا، بقطعات حادة على إيقاع نابض.

#### Prompt

```text
أسلوب إعلاني مشرق وملوّن يتصدّره بسكويت الفواكه بطلًا، بأربع نكهات — فراولة وتفاح وعنب وبرتقال؛ نكهة الفراولة المرجع @image1. البسكويت والفواكه المطابقة له مرتّبة في مصفوفة هندسية بالغة الانتظام؛ والإطار العام نظيف وفاخر ومفعم بالطاقة. يفتتح المشهد بالفواكه تدور بسرعة حول البسكويتة المركزية لترسّخ بؤرة بصرية سريعًا — استند إلى تكوين @video1 — مع قطع داخل على ضربة موسيقية قوية. ثم تتقدّم بسكويتات بنكهات مختلفة نحو العدسة على مسارات حلزونية، مكوّنةً عمقًا مكانيًا واضحًا — استند إلى حركة وتصوير @video2 — مع تبديل الألوان والنكهات على الإيقاع مع الموسيقى الخلفية. تتحرك مصفوفة البسكويت يمينًا ويسارًا مع قطعات سريعة من مستوى إلى مستوى، وتتناوب نكهات الفراولة والتفاح والعنب والبرتقال بينما يقطع الإطار سريعًا مع الإيقاع — استند إلى حركة @video3. يضيف الجزء الأوسط حركة عمودية صعودًا وهبوطًا؛ فترتفع مصفوفة البسكويت المنتظمة وتنخفض عموديًا كالآلة — استند إلى حركة @video4 — مبرزًا جمال النظام وثراء المنتج. في الذروة تُكسر بسكويتة إلى نصفين وتدخل اللحظة إلى الحركة البطيئة بينما تنفجر حشوة الفواكه، وتتطاير الفتات، ويتضخّم الإحساس بالعصارة والوقع الحبيبي — استند إلى تأثير الانفجار في @video5 — ثم يعود سريعًا إلى المونتاج السريع الإيقاع. تأتي النهاية بالنص الإنجليزي "Fresh on Seedance, made for viral vision"، يدخل كلمةً كلمةً في تعاقب سريع بحركة نصية إيقاعية قوية ولقطة تجميد للمنتج — استند إلى @video6 — وتصطف نكهات البسكويت الأربع بانتظام مع ارتداد الفواكه بتزامن في ختام يبرز العلامة التجارية، والإطار يفيض بأجواء إعلانية شابة ومفعمة بالطاقة وشهية وقابلة للمشاركة.
```

<a id="browse-by-category"></a>

## 🏷️ Browse by Category


- [`القطع المتطابق والمؤثرات الإبداعية`](#category-1): **1**
- [`التصوير بلقطة واحدة متواصلة`](#category-2): **1**
- [`مرجع متعدد الصور`](#category-3): **3**
- [`تحرير الفيديو`](#category-4): **2**
- [`درس تعليمي موجّه بالمراجع`](#category-5): **1**
- [`مرجع متعدد الوسائط (صورة+فيديو)`](#category-6): **1**
- [`مرجع صورة`](#category-7): **1**
- [`مرجع صورة (سينمائي)`](#category-8): **1**

<a id="all-prompts"></a>

## 📋 All Prompts


<a id="category-1"></a>

### القطع المتطابق والمؤثرات الإبداعية (1)

### No. 1: فيلم إيقاعي بالقطع المتطابق مع الكرة البلورية

- **Category:** `القطع المتطابق والمؤثرات الإبداعية`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

فيلم بالقطع المتطابق متزامن مع الإيقاع: كرة بلورية محفور بداخلها شعار 'seedance' متوهّج تبقى في المنتصف بينما تتوالى خلفها ثمانية مشاهد بقطعٍ سلس.

#### Prompt

```text
فيلم قصير سينمائي سريع الإيقاع بأسلوب القطع المتطابق، متزامن مع إيقاع إلكتروني نابض. تبقى كرة بلورية لا تشوبها شائبة ثابتة في منتصف الإطار تمامًا طوال الوقت، وقد حُفر بداخلها شعار "seedance" متوهّج. تحتفظ الكرة بتركيز حاد كالموسى، بينما تتبدّل الخلفية بقطعٍ متطابق سلس عند كل ضربة موسيقية قوية: Scene 1: لقطة ماكرو مقرّبة، رذاذ ماء سينمائي يتطاير حول الكرة، ويعكس ضوءًا متشعبًا دقيقًا. Scene 2: مقهى صباحي عتيق الطراز، الكرة على طاولة من الخشب الخام، بخار قهوة يتصاعد وعابرون ضبابيون خلف النافذة. Scene 3: غسق الساعة الذهبية، شاب متزلّج يقذف الكرة ويلتقطها بيد واحدة، والشارع يتراجع خلفه في غروب خلفيّ الإضاءة بديع. Scene 4: مهرجان موسيقي صاخب، أيادٍ ترفع الكرة عاليًا، تعكس أشعة ليزر المسرح الباهرة. Scene 5: طاولة حفلة عائلية مفعمة بالحياة، الكرة مستقرة في وسط الإطار، وأشخاص ضبابيون يرفعون نخبًا ويمدّون أيديهم نحو الطعام. Scene 6: صالة سينما خافتة، أيادٍ تحتضن الكرة بينما يتهادى وهج الشاشة العملاقة الخافت على سطحها. Scene 7: الكرة فوق غشاء مكبّر صوت يهتز بعنف، تتبدّل بقطعٍ متطابق عند الذروة إلى قرص دوّار (تيرن تيبل) لمنسّق أغانٍ في المنتصف. Scene 8: ليلة تخييم في الخلاء، تتحول الخلفية إلى نار مخيّم دافئة وأضواء سلسلية متمايلة بتأثير بوكيه. الخاتمة: عند الضربة الأخيرة تُقذف الكرة إلى أعلى خارج الإطار؛ قطع إلى سواد خالص، تظهر كلمة "seedance" بسيطة بالأبيض على الأسود في المنتصف تمامًا. مونتاج بالقطع المتطابق متزامن مع الإيقاع، تدرّج ألوان سينمائي من الطراز الأول، انكسار زجاجي فوتوريالي، تتبّع الأشعة، إضاءة شاملة. الهدف حاد كالموسى، والخلفية بها ضبابية حركة كثيفة.
```

<a id="category-2"></a>

### التصوير بلقطة واحدة متواصلة (1)

### No. 1: آلية ساعة ستيمبانك — لقطة واحدة 30 ثانية

- **Category:** `التصوير بلقطة واحدة متواصلة`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

تسلسل ثلاثي الأبعاد مصغّر بأسلوب الستيمبانك مدته 30 ثانية، بحركة كاميرا دائرية متواصلة تخترق المشاهد.

#### Prompt

```text
تسلسل رسوم متحركة ثلاثي الأبعاد راقٍ وسينمائي بامتياز مدته 30 ثانية، بأسلوب ستيمبانك مصقول ومصغّرات عتيقة، بحركة كاميرا دائرية سلسة ومتواصلة تخترق العناصر. [0-10s] لقطة ماكرو مقرّبة لوجه ساعة نحاسية عتيقة تتفتّح طبقةً تلو الأخرى إلى حلقات تروس دوّارة متعاشقة وضباب حجمي. تخترق الكاميرا نزولًا عبر التروس؛ وتصعد طائرة مجنّحة ميكانيكية في حركة حلزونية من وادٍ مصغّر مكوّن من أكوام كتب قديمة بالية. [10-20s] تنساب الكاميرا إلى الأمام متتبّعة الطائرة المجنّحة، لتعبر بسلاسة إلى زوتروب نحاسي مزخرف يدور بسرعة ويعرض ضوء خيول ميكانيكية تعدو. يقفز الضوء إلى الخارج فيتحول المشهد إلى عربة تلفريك نحاسية طافية على قضبان نحاسية متلألئة تعبر غابة من التروس، تغمرها إضاءة الساعة الذهبية السينمائية. [20-30s] تميل الكاميرا برشاقة إلى الأسفل؛ فتظهر في الأسفل سفينة شراعية خشبية بديعة تعمل بآلية ساعة تشقّ أمواجًا زرقاء داكنة بملمس زجاجي، تتحول إلى قمر عملاق متوهّج تظهر عليه صور ظلية لمستكشفين يحملون فوانيس يجوبون حافة عرق بلوري تحت النجوم. تعود الكاميرا بحركة حلزونية سلسة عبر سحب أثيرية إلى وجه الساعة النحاسية النابض بالتكتكة. ملمس ميكانيكي شديد الواقعية، درجات نحاسية وذهبية غنية، عمق ميدان ضحل سينمائي، حركة كاميرا اختراقية سلسة متصلة، أجواء مغامرة خيالية ملحمية.
```

<a id="category-3"></a>

### مرجع متعدد الصور (3)

### No. 1: نوافذ على عوالم (5 مراجع)

- **Category:** `مرجع متعدد الصور`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
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

فيلم قصير لمفهوم علامة تجارية تقوده 5 صور مرجعية، ينساب عبر النوافذ إلى عوالم مختلفة.

#### Prompt

```text
فيلم قصير سينمائي لمفهوم علامة تجارية. @image1 هو الإطار الأول؛ ترتجف الصورة قليلًا، وتتقدّم الكاميرا نحو ظلال الأشجار المندفعة إلى الخلف خارج النافذة، ويتسارع تراجعها، ثم تقطع فجأة إلى @image2، لتخفّ السرعة بينما تنساب الكاميرا ببطء بمحاذاة جدول، مع تغريد الطيور والأزهار المتفتّحة. تغوص الكاميرا تحت الماء — أصوات فقاعات — بينما يمرّ قنديل بحر برتقالي بأناقة أمام العدسة @image3؛ تتراجع الكاميرا بينما تخطف أسماك صغيرة عبرها وتسبح من الماء إلى داخل النافذة @image4، وفتاة تتلفّت حولها وتراقبها. تتراجع الكاميرا وتفقد التركيز، ثم تعيد التركيز بوضوح حاد، متبدّلةً على إيقاع الموسيقى: نافذة مشبّكة على طراز الحدائق الصينية @image5 يدور الضوء حولها، زجاج كنيسة ملوّن، كوّة طائرة، منور قبّة، نافذة بارزة (باي ويندو)، ستائر معدنية أفقية، نافذة سطح أوروبية، ثقب باب للنظر، محدّد رؤية كاميرا، عين طائر، ولقطة مقرّبة لعين بشرية. يستقر المشهد على العين البشرية؛ تنغلق العين، فتُظلم الشاشة، ثم تنفتح فجأة — لتظهر كلمة "seedance" في مركز العين على الضربة المميّزة.
```

### No. 2: لقطة واحدة عبر ست غرف (8 مراجع)

- **Category:** `مرجع متعدد الصور`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
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

لقطة واحدة متواصلة تتبع شخصًا عبر ست غرف تتبدّل أجواؤها، تقودها 8 صور مرجعية.

#### Prompt

```text
لقطة واحدة متواصلة. تتبع الكاميرا بسلاسة شخصًا يرتدي معطفًا أسود (المرجع @image1) وهو ينتقل من اليسار إلى اليمين عبر ست غرف متصلة مختلفة الألوان والأجواء. تشترك كل الغرف في البنية نفسها: جدران بيضاء، أرضية خشبية فاتحة بنقشة عظم السمكة، نوافذ فرنسية ممتدة من الأرض إلى السقف، ستائر بيضاء شفافة (المرجع @image2) لكن المنظر الخارجي والأجواء يختلفان في كل مرة. يمشي البطل بوتيرة ثابتة، عابرًا كل باب مفتوح. 0-5s الغرفة الأولى، شجار على طراز الكوميكس الأمريكي: يتقاتل البطل مع شخصية (@image3) فتُهزم؛ 5-10s الغرفة الثانية، دفء، بأسلوب حرفة اللباد، منظر النافذة حقل عبّاد شمس (@image4)، ضوء ناعم برتقالي دافئ، ورسّام يرسم عبّاد الشمس (@image5)، ويتحول البطل إلى أسلوب اللباد لحظة دخوله؛ 10-15s الغرفة الثالثة، حزن، كوميكس أبيض وأسود بأسلوب ستوب موشن، مطر في الخارج، ضوء رمادي بارد، شخص وحيد على الأرض يحتضن ركبتيه، وهاتف يتوهّج بمكالمة لم يُجب عليها؛ لحظة الدخول ينطفئ الضوء ثم يعود، فتكتسي الغرفة بالألوان، وتتفتّح الأزهار دفعة واحدة؛ 15-20s الغرفة الرابعة، فرح، غرفة غارقة في البحر (المرجع @image6)، ويصير البطل شفافًا بين الشعاب المرجانية والأسماك؛ 20-25s الغرفة الخامسة، دهشة، منظر النافذة سماء تملؤها الألعاب النارية (المرجع @image7)، ضوء ملوّن متلألئ، والبطل تجرفه حشود مهلّلة؛ 25-30s غرفة بيضاء فارغة، يفرقع البطل أصابعه — مؤثر صوتي للفرقعة — فيصير الإطار أسود، وتظهر "seedance" في المنتصف (المرجع @image8). جودة سينمائية، أسلوب إعلانات أزياء راقية، الإضاءة تحدّدها بالكامل مناظر النوافذ لخلق تباين عاطفي قوي، بلا أي نص في الإطار.
```

### No. 3: فيديو كليب هيب هوب متعدد اللغات بعنوان 'Hello'

- **Category:** `مرجع متعدد الصور`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

فيديو كليب هيب هوب على شاطئ البحر مبنيّ من صورة مرجعية واحدة؛ يؤدّي المغني الرئيسي كلمة 'hello' راب بثماني لغات، بتزامن شفاه، مع قطعات حادة على الإيقاع.

#### Prompt

```text
فيديو كليب هيب هوب / راب سينمائي، بجودة فوتوريالية ونبرة راقية، في أجواء شاطئ البحر. ابنِ الإطار من @image1: فرقة تؤدّي على شاطئ رملي ذهبي حيث تتكسّر الأمواج — مغنٍّ رئيسي يمسك ميكروفونًا على حامل في الرمل المبلل، عازف غيتار على اليسار وآخر على اليمين، وعازف طبول في الخلف؛ خلفهم خط ساحلي شاسع، وأمواج متدحرجة، وشمس الساعة الذهبية الدافئة تتلألأ على الماء، ورذاذ بحري في الهواء. يؤدّي المغني الرئيسي بزيّ رياضي أحمر الراب نحو الكاميرا — شفتاه وفكّه متزامنان بدقة مع كل كلمة، ورأسه ينبض مع الإيقاع. راب مشرق وقوي وسريع وواثق. قطع حاد على الإيقاع، وكل انتقال يحمل تباينًا مزدوجًا (يتغيّر حجم اللقطة ونوعها معًا). الكلمات (يغني المغني الرئيسي 'hello' بكل لغة بالتناوب، بتزامن شفاه دقيق): الإنجليزية "Hello"، الصينية "你好"، اليابانية "こんにちは"، الكورية "안녕하세요"، البرتغالية "Olá"، التايلاندية "สวัสดี"، الإسبانية "Hola"، العربية "مرحبا". 8 لقطات بقطع حاد (لقطة تأسيسية واسعة من زاوية منخفضة؛ راب مقرّب نحو الكاميرا؛ لقطة ماكرو مقحمة لأوتار الغيتار؛ دوران متسلّل بزاوية 3/4؛ تتبّع جانبي عند الشاطئ؛ إمالة لأعلى نحو عازف الطبول؛ اقتراب محكم نحو المغني الرئيسي؛ اقتراب بطولي نحو الفرقة كاملة)، لغة واحدة لكل لقطة. توازن أبيض 4000K، تدرّج ألوان أزرق مخضرّ وكهرماني، عدسة 35mm، عمق ميدان ضحل، حبيبات فيلمية، رذاذ بحري، وهج الساعة الذهبية. إحساس فاخر، تزامن شفاه دقيق، بلا ترجمة، بلا نصوص فوق الصورة، قطعات حادة فقط، المدة الإجمالية 20 ثانية.
```

<a id="category-4"></a>

### تحرير الفيديو (2)

### No. 1: تحرير الفيديو — إزالة الجميع باستثناء البطل

- **Category:** `تحرير الفيديو`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

تحرير بالاستناد إلى فيديو مرجعي: مسح كل الأشخاص عدا البطل من مقطع المصدر.

#### Prompt

```text
تحرير الفيديو: أزِل كل الأشخاص في @video1 عدا البطل.
```

### No. 2: قطار البخار يقتحم الشاشة (تحرير فيديو)

- **Category:** `تحرير الفيديو`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-reference1.mov" controls muted width="360"></video>

#### Description

تحرير فيديو يبقي مقطع @video1 السينمائي القديم سليمًا بالكامل ويضيف فقط قاطرة بخارية تقتحم الشاشة، تمزّق القماش، مع تحوّل الأبيض والأسود إلى ألوان كاملة لحظة الاصطدام.

#### Prompt

```text
أسلوب واقعي سينمائي شديد الواقعية بملمس تصوير حي فوتوريالي، يؤكّد على المعقولية الواقعية للجسم المادي المنطلق للخارج (قطار البخار)؛ بلا لمعان CGI / محرك ألعاب / ثلاثي أبعاد مصمَّم. حافظ على تكوين @video1 الأصلي، وإضاءة قاعة العرض، وحالة الكاميرا المحمولة باليد، والعيوب الطبيعية. فيديو المصدر مقفل: أبقِ @video1 سليمًا بالكامل كصورة أساس (قاعة العرض القديمة الطراز، صفوف الجمهور المعتمرين قبّعات مرئية من الخلف، الشعاع المخروطي للجهاز، الشاشة، الضوء المحيط، درجة اللون والحركة المحمولة باليد، كلها دون تغيير)؛ الإضافات الوحيدة: القطار المنطلق من الشاشة، والتغيرات في الضوء والظل التي يجلبها، وتمزّق الشاشة، والوقع المادي الطفيف على القاعة وجمهور الصف الأمامي. قاعدة تحوّل اللون (الإضافة الجوهرية): في البداية احتفظ بصرامة بملمس الفيلم القديم بالأبيض والأسود الأصلي لـ @video1 (حبيبات / خدوش / وميض / أحادي اللون)؛ وفي اللحظة الدقيقة التي تخترق فيها القاطرة الشاشة فعلًا وتنطلق إلى الواقع، تتحول الصورة فجأة من الأبيض والأسود إلى ألوان حقيقية كاملة، وينتشر اللون عبر الإطار كله كموجة صدمية مركزها نقطة انطلاق القطار (هيكل القطار الفولاذي الأسود، والغلاية النحاسية الحمراء، ووهج مصباح البخار البرتقالي الأصفر، والبني الدافئ للعربة الخشبية، والبخار الأبيض الرمادي، والبني الدافئ لقاعة العرض، كلها تكتسي بالألوان تبعًا لذلك)؛ يتزامن تحوّل اللون بدقة مع اندفاعة اختراق الشاشة، وبعدها يُحافظ على اللون الفوتوريالي حتى النهاية. تمزّق الشاشة مقفل: الشاشة قماش عرض أبيض حقيقي بشدّ نسيج فعلي؛ ومع انطلاق القطار تتمزّق قسرًا على امتداد حدّ مقدّمة القاطرة، بتمزّقات شعاعية تتلوّى حوافها للخلف وتتطاير ألياف قماش ممزّقة. الموضوع: مقدّمة قاطرة بخارية قديمة الطراز تنطلق قسرًا من الشاشة، هيكل فولاذي أسود، غلاية أسطوانية، مصدّ ماشية أمامي، مدخنة تنفث بخارًا أبيض رماديًا، مصباح أمامي ساطع، وأسطح معدنية عليها تآكل حقيقي وأوساخ زيتية ومسامير برشام وانعكاسات مبتلّة، تندفع للأمام بثقل هائل وقصور ذاتي. الكاميرا: ترث بالكامل حركة @video1 المحمولة باليد الأصلية، دون تنعيم، دون إعادة توقيت، دون إعادة تكوين؛ ويبقى القطار المنطلق مقفلًا بشكل صحيح في الشاشة وفضاء القاعة في كل الأوقات، مع الحفاظ على المنظور التبايني (البارالاكس) الصحيح، والحجب، وظل ملامسة الأرض. الصوت: بلا موسيقى، احتفظ فقط بالمؤثرات الصوتية الحقيقية من الموقع، وارثًا أجواء قاعة العرض من @video1 (طقطقة الجهاز، حركة الجمهور) ومضيفًا صوت تمزّق القماش، واندفاع البخار، والزئير الميكانيكي للعجلات الفولاذية، وعصفة هواء الاصطدام. المدة الإجمالية مطابقة تمامًا لـ @video1؛ لا تضِف شيئًا سوى القطار نفسه وتفاعلاته المادية، وتمزّق الشاشة، وتحوّل اللون لحظة الاختراق. بلا حركة بطيئة، بلا إحساس سحري، بلا رعب مصمَّم؛ يجب أن تبدو النتيجة النهائية كصورة مخيفة لكن حقيقية لـ "قطار يقتحم الشاشة، والأبيض والأسود يتحول فورًا إلى ألوان" التقطتها بالصدفة كاميرا حقيقية في قاعة عرض قديمة.
```

<a id="category-5"></a>

### درس تعليمي موجّه بالمراجع (1)

### No. 1: درس إعداد آلة قهوة الكبسولات (6 مراجع)

- **Category:** `درس تعليمي موجّه بالمراجع`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
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

درس تعليمي مدته 30 ثانية لإعداد آلة قهوة الكبسولات واستخدامها، بست خطوات موجّهة بالمراجع مع تعليق صوتي — من تركيب خزّان الماء إلى الشطف الأول.

#### Prompt

```text
فيديو تعليمي مدته 30 ثانية حول تركيب آلة قهوة الكبسولات واستخدامها. 0-2s: بطاقة العنوان الافتتاحية تحمل "seedance: درس إعداد آلة قهوة الكبسولات". 2-5s، الخطوة 1: ركّب خزّان الماء، المرجع @image1، لقطة متوسطة من زاوية مرتفعة قليلًا، الجزء الخلفي من جسم الآلة، حاذِ خزّان الماء مع الفتحة في مؤخرة الجسم وادفعه مستقيمًا للأسفل حتى يستقر بإحكام مع صوت طقّة، مع إظهار واضح لكيفية محاذاة مشابك قاع الخزّان مع فتحة الجسم، وخط مستوى الماء ظاهر عبر الجزء الشفاف من الخزّان، تعليق صوتي "أولًا، ركّب خزّان الماء. حاذِ الخزّان مع الفتحة في مؤخرة الآلة؛ صوت الطقّة يعني أنه استقر في مكانه.". 5-9s، الخطوة 2: ركّب صينية التقطير، المرجع @image2، لقطة مقرّبة من الأمام، الجزء الأمامي السفلي من الجسم، أدخِل صينية التقطير أفقيًا في القضبان الموجّهة أسفل الجسم حتى تستقر تمامًا، تعليق صوتي "بعد ذلك، ركّب صينية التقطير. حاذِ الصينية مع القضبان السفلية.". 9-13s، الخطوة 3: ركّب صندوق تجميع الكبسولات المستعملة، المرجع @image3، لقطة مقرّبة من زاوية منخفضة قليلًا، التجويف أسفل صينية التقطير، حاذِ صندوق التجميع مع التجويف وادفعه ليصير مستويًا مع صينية التقطير، تعليق صوتي "ثم أدخِل صندوق تجميع الكبسولات. ستسقط الكبسولات المستعملة هنا تلقائيًا.". 13-18s، الخطوة 4: املأ الماء لأول مرة، المرجع @image4، لقطة مقرّبة جانبية، خزّان الماء في أعلى/مؤخرة الجسم، افتح غطاء الخزّان واسكب ماءً نظيفًا حتى خط مستوى الماء MAX، ثم أغلقه، مع التركيز على خط مستوى الماء، تعليق صوتي "افتح غطاء الخزّان، واسكب ماءً نظيفًا، مع الانتباه إلى عدم تجاوز خط مستوى الماء الأقصى، ثم أغلق غطاء الخزّان.". 18-25s، الخطوة 5: التشغيل، المرجع @image5، لقطة متوسطة من الأمام، الجزء الأمامي من الجسم، أوصل سلك الطاقة واضغط زر التشغيل؛ ينتقل ضوء المؤشر من الوميض إلى الثبات (اكتمل التسخين المسبق)، تعليق صوتي "أوصل الطاقة واضغط زر التشغيل. يبدأ ضوء المؤشر بالوميض، ما يعني أنه في طور التسخين. وحين يثبت الضوء، تكون الآلة جاهزة.". 25-30s، الخطوة 6: الشطف الأول (بدون كبسولة)، المرجع @image6، لقطة متوسطة تنتقل إلى لقطة مقرّبة أمامية جانبية، بدون إدخال كبسولة اضغط زر التحضير مباشرة ليتدفق الماء الساخن ويشطف الأنابيب، مع التركيز على ملاحظة "لا حاجة لكبسولة"، تعليق صوتي "الخطوة الأخيرة، الشطف الأول. لاحظ أن هذه الخطوة لا تتطلب كبسولة؛ فقط اضغط زر التحضير. وبمجرد انتهاء الشطف، تصبح آلة القهوة جاهزة للاستخدام."
```

<a id="category-6"></a>

### مرجع متعدد الوسائط (صورة+فيديو) (1)

### No. 1: إعلان بسكويت الفواكه (صورة + 6 مراجع فيديو)

- **Category:** `مرجع متعدد الوسائط (صورة+فيديو)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
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

إعلان مشرق وملوّن لبسكويت الفواكه بأربع نكهات — فراولة، تفاح، عنب، برتقال — مبنيّ من مرجع صورة واحد وستة مراجع فيديو للحركة والكاميرا، بقطعات حادة على إيقاع نابض.

#### Prompt

```text
أسلوب إعلاني مشرق وملوّن يتصدّره بسكويت الفواكه بطلًا، بأربع نكهات — فراولة وتفاح وعنب وبرتقال؛ نكهة الفراولة المرجع @image1. البسكويت والفواكه المطابقة له مرتّبة في مصفوفة هندسية بالغة الانتظام؛ والإطار العام نظيف وفاخر ومفعم بالطاقة. يفتتح المشهد بالفواكه تدور بسرعة حول البسكويتة المركزية لترسّخ بؤرة بصرية سريعًا — استند إلى تكوين @video1 — مع قطع داخل على ضربة موسيقية قوية. ثم تتقدّم بسكويتات بنكهات مختلفة نحو العدسة على مسارات حلزونية، مكوّنةً عمقًا مكانيًا واضحًا — استند إلى حركة وتصوير @video2 — مع تبديل الألوان والنكهات على الإيقاع مع الموسيقى الخلفية. تتحرك مصفوفة البسكويت يمينًا ويسارًا مع قطعات سريعة من مستوى إلى مستوى، وتتناوب نكهات الفراولة والتفاح والعنب والبرتقال بينما يقطع الإطار سريعًا مع الإيقاع — استند إلى حركة @video3. يضيف الجزء الأوسط حركة عمودية صعودًا وهبوطًا؛ فترتفع مصفوفة البسكويت المنتظمة وتنخفض عموديًا كالآلة — استند إلى حركة @video4 — مبرزًا جمال النظام وثراء المنتج. في الذروة تُكسر بسكويتة إلى نصفين وتدخل اللحظة إلى الحركة البطيئة بينما تنفجر حشوة الفواكه، وتتطاير الفتات، ويتضخّم الإحساس بالعصارة والوقع الحبيبي — استند إلى تأثير الانفجار في @video5 — ثم يعود سريعًا إلى المونتاج السريع الإيقاع. تأتي النهاية بالنص الإنجليزي "Fresh on Seedance, made for viral vision"، يدخل كلمةً كلمةً في تعاقب سريع بحركة نصية إيقاعية قوية ولقطة تجميد للمنتج — استند إلى @video6 — وتصطف نكهات البسكويت الأربع بانتظام مع ارتداد الفواكه بتزامن في ختام يبرز العلامة التجارية، والإطار يفيض بأجواء إعلانية شابة ومفعمة بالطاقة وشهية وقابلة للمشاركة.
```

<a id="category-7"></a>

### مرجع صورة (1)

### No. 1: السحلية الصحراوية القرناء والجريب فروت (إعلان ثلاثي الأبعاد)

- **Category:** `مرجع صورة`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

إعلان رسوم متحركة ثلاثي الأبعاد مشرق ولمّاع: سحلية صحراوية قرناء ظمآنة تعثر على جريب فروت، تعضّها، فيحوّل طوفان العصير الصحراء إلى بحر صيفي. مبنيّ من مرجع شخصية واحد.

#### Prompt

```text
أسلوب إعلان رسوم متحركة ثلاثي الأبعاد، بألوان مشرقة وشفافة؛ ويجب أن يمنح اللبّ والعصير إحساسًا بالانتعاش والوقع الشديد. الأجواء العامة أشبه بفيلم إعلاني قصير متحرك عالي الجودة مع لمسة من الفكاهة المبالَغ فيها. شخصية السحلية الصحراوية القرناء لطيفة وحيوية ومعبّرة، المرجع @image1. ملمس الصورة يستند إلى ذلك الضوء الطبيعي الناعم، والملمس الدقيق للزغب/الجلد، وعمق الميدان الماكرو الحالم، والإحساس الواقعي مع لمسة طفولية خفيفة المستمدة من الصورة المرجعية. 0-3s: صحراء تحرقها الشمس اللاهبة، والهواء يتموّج بالحرارة والرمل يلتهب سخونة؛ تستلقي سحلية صحراوية قرناء على الرمل الحارق، لسانها خارج قليلًا، عيناها زائغتان، وقد كادت تجفّ، تترنّح مع كل بضع خطوات وكأنها على وشك أن "تتبخّر". 3-6s: تتوقف فجأة، يرتجف أنفها، وحين تنظر للأسفل تلمح جريب فروت باردة ممتلئة مغطّاة بالندى نصف مدفونة في الرمل، تتلألأ كأنها معجزة صحراوية؛ فتتّسع عينا السحلية في لحظة. 6-8s: تنقضّ عليها، تحتضن الجريب فروت بكلتا يديها بإحكام، وتضغط وجهها كله على القشرة بتعبير غامر ينمّ عن نشوة "أخيرًا عدت إلى الحياة"؛ يثبت الإطار لثانية واحدة، مكوّنًا لحظة تذكارية مبالَغًا فيها ومضحكة. 8-11s: ترفع رأسها، تفتح فمها وتأخذ قضمة كبيرة؛ تنشقّ قشرة الجريب فروت، ويلمع اللبّ الممتلئ ببريق شفاف، وفي اللحظة التالية ينفجر العصير كالطوفان. 11-16s: عصير جريب فروت برتقالي وردي شفاف لمّاع يتدفق بجموح، ينهمر على الكثبان ويغرق الصحراء بأكملها بسرعة؛ يتحول الرمل الأصفر الجاف في لحظة إلى بحر صيفي بارد متلألئ بعبق الفواكه، وتبتلع أمواج العصير الصبّار والصخور والكثبان الصغيرة، ويتحول تعبير السحلية من البهجة إلى الرعب. 16-20s: وقد كادت تغرق في "بحر الجريب فروت"، تتشبّث بذعر بنصف جريب فروت كأنه طوق نجاة وتطفو، مخرجةً رأسها المبلل تنظر بذهول. 20-24s: قطع إلى شاشة بيضاء؛ يظهر اسم العلامة والشعار في المنتصف تمامًا: "Seedance Grapefruit — اعضض تنَل اللبّ، وما ينهمر هو الصيف." ويقرأ التعليق الصوتي السطر كاملًا. 24-30s: قطع عائد من البياض؛ صارت السحلية الصحراوية القرناء الآن تسترخي على جريب فروت طافية، مرتديةً نظارة شمسية صغيرة وممسكةً كوبًا بقشّة، تنجرف على مهل في "بحر العصير" في إجازة، محاطة بلبّ برتقالي طافٍ ومكعبات ثلج صغيرة ورذاذ منعش وسماء زرقاء صافية؛ ينتقل المزاج من "النجاة" إلى "الإجازة"، وأخيرًا تتّكئ براحة على الجريب فروت بينما تتراجع الكاميرا وتتجمّد على إطار صيفي منعش ومشرق ومرح.
```

<a id="category-8"></a>

### مرجع صورة (سينمائي) (1)

### No. 1: سقوط الرجل الثمل من السطح (فيلم كوميديا سوداء قصير)

- **Category:** `مرجع صورة (سينمائي)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ar`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

فيلم قصير سينمائي بكوميديا سوداء مدته ~30 ثانية: رجل بدين ثمل يتدحرج من سطح مبنى، يمسك بحبل نجاة، يقتحم نافذة محطّمًا إياها، ثم ينام ببساطة. الشخصية من صورة مرجعية واحدة؛ مبنيّ على قطعات حادة بين الهدير والصمت التام.

#### Prompt

```text
[فزع الرجل الثمل على السطح — يسقط عن الحافة — يمسك حبلًا عبر النافذة — يُغمى عليه في مكانه | فيلم كوميديا سوداء قصير | نحو 30 ثانية] الفكرة في سطر واحد: رجل بدين لطيف ثمل في منتصف العمر يأكل برغر ويشرب بيرة على سطح مبنى؛ وبينما يقف ويتمطّى يفقد توازنه بالخطأ ويسقط، وفي هلعه يمسك بحبل نجاة فيقتحم فورًا نافذة إلى داخل غرفة، يبقى مذهولًا مصعوقًا لثانية واحدة، ثم يستلقي في مكانه ببساطة وينام نومًا عميقًا. الصورة المرجعية @image1 — رجل بدين لطيف ثمل في منتصف العمر: بنية مستديرة ممتلئة بكرش بيرة كبير مستدير، قصير القامة، حركاته مرتخية بطيئة متمايلة من الشرب؛ وجه مستدير، ذقن مزدوجة، وجنتان وأنف محمرّة من الشرب، عينان ضيقتان كالشقّين بنظرة زائغة، حلقة من شعر ذقن قصير غير مهذّب، شعر أشعث، تعبير أحمق لطيف لا مبالٍ؛ يرتدي فانلة داخلية بيضاء بلا أكمام ملطّخة بصلصة البرغر تتدلّى فضفاضة فوق كرشه المستدير، جينز قديم، يجرّ قدميه في شبشب فضفاض، ممسكًا دائمًا برغر نصف مأكول في يده. لا توجد سوى هذه الشخصية الوحيدة في الفيلم كله، مطابقة 100% للصورة المرجعية. المظهر العام: مدينة عملاقة سايبربانك ليلية، غابة كثيفة من ناطحات السحاب الزجاجية الفولاذية، لافتات نيون (سماوي / أرجواني / أزرق كهربائي)، لوحات إعلانية هولوغرافية، أرض مبتلّة عاكسة، ضباب حجمي، ومسارات ضوء سيارات طائرة بعيدة وطائرات مسيّرة. ملمس واقعي حقيقي، عدسات سينما فيزيائية، بلا أي إحساس بالرندر ثلاثي الأبعاد / محرك ألعاب / أنمي. تمزج الكاميرا بين المحمولة باليد والرافعة / الدرون؛ بعد السقوط تنقضّ الكاميرا معه إلى الأسفل بينما تندفع الجدران الخارجية للمبنى والنيون إلى الأعلى لنقل الإحساس بالسرعة، بملمس عدسة سينمائية عريضة 24-35mm، وضبابية حركة بغالق 180 درجة. تصميم الصوت هو مفتاح الكوميديا السوداء: قطع حاد متكرر بين "هدير هائل" و"صمت تام". جاذبية حقيقية طوال الوقت. لوحة القصة (نحو 30 ثانية): S1 (0-4s) لقطة افتتاحية مقرّبة كبيرة للمضغ (بصوت) وجه الرجل يملأ الشاشة، يمضغ البرغر بقضمات كبيرة، في حالة ثمالة راضية؛ S2 (4-9s) سحب إلى لقطة واسعة، تمطٍّ -> فقدان التوازن والسقوط (بصوت) يقف مترنّحًا ويتمطّى بقوة، يميل إلى الخلف، لا يستطيع الحفاظ على توازنه، تزلّ قدمه فيتدحرج إلى الخلف عن حافة السطح، دون أن يفلت البرغر أبدًا، مع صرخة هلع "إيه——!"؛ S3 (9-12s) قطع إلى لقطة وجه مذعور مقرّبة (صرخة عالية، هدير هائل) عينان ثملتان جاحظتان مستديرتان، ذقن مزدوجة منكمشة، فم مفتوح على اتساعه بصرخة "آه——!!"، والريح تعوي؛ S4 (12-16s) قطع إلى لقطة بعيدة بمستوى النظر (صمت تام) مرئية من المبنى المقابل، شبح أبيض ضئيل يهوي مستقيمًا من ناطحة السحاب، ومدينة النيون شاسعة لا مبالية، ويشكّل الصمت التام تباينًا كوميديًا أسود مع الهدير الهائل قبل ثانية؛ S5 (16-21s) قطع إلى لقطة وجه مقرّبة (يصرخ) -> إمساك الحبل، لا يزال يصرخ، ويداه تتخبّطان في الهواء، يمسك فجأة بكابل نجاة، فيشتدّ الكابل وينحني تحت وزنه بطنين، وتنقطع الصرخة فجأة بينما يُجذب ويتأرجح للخارج (حركة بطيئة قصيرة في لحظة إمساكه بالحبل)؛ S6 (21-26s) قطع إلى زاوية داخلية (هادئ) -> تحطّم الزجاج -> يقتحم الداخل، الغرفة هادئة أولًا لا يُسمع فيها سوى أزيز المكيّف، وفي الثانية التالية ينفجر الزجاج نحو الداخل بعنف (بوليت تايم قصير) بينما يقتحم الرجل الثمل، بالبرغر وكل شيء، النافذة، وتتطاير الشظايا شعاعيًا إلى الخارج، وينساب ضوء النيون إلى الداخل، ويرتطم بعنف داخل الغرفة على الأرض / الأريكة، والزجاج المكسور يرنّ؛ S7 (26-30s) الخاتمة، ثانية من الذهول -> ينام، الرجل مبسوط الأطراف على الأرض، يغطّيه الزجاج المكسور، ولا يزال ممسكًا بالبرغر، يفتح عينيه ببطء، مذهولًا، فارغ الذهن مصعوقًا لثانية كاملة، يتلفّت حوله وكأنه يفكّر "أين أنا؟"، ثم تسيطر الثمالة عليه فلا يبالي بشيء إطلاقًا، يمصمص شفتيه، يضمّ البرغر إلى صدره، يتقلّب، يستلقي في مكانه تمامًا وينام نومًا عميقًا، بل يشخر خفيفًا، وتتراجع الكاميرا وتتجمّد، ثم قطع حاد إلى السواد. صوت حي من موقع التصوير فقط، بلا موسيقى، بلا ترجمة؛ الجوهر هو القطع الحاد المتكرر بين "الهدير الهائل" و"الصمت".
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
- [Atlas Cloud Seedance 2.5 page](https://www.atlascloud.ai/ar/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
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
