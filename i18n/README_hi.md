# 🎬 Awesome Seedance 2.5 Prompts + Seedance 2.5 Skill

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-seedance-2.5-prompts-skills?style=social)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/pulls)
[![Prompts](https://img.shields.io/badge/prompts-11%2B-blue.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

A curated library of Seedance 2.5 video prompts plus **Seedance 2.5 Skill**, an installable Agent Skill that improves prompts, plans and reviews storyboards when needed, and generates controllable video. It uses Seedream 5.0 Pro for storyboard images and Seedance 2.0 as the current executable video default, switching to Seedance 2.5 only when the selected provider exposes it.

| [Browse prompts](https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Install Seedance 2.5 Skill](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/tree/main/skills/seedance-2-5-skill) | [Generate with Atlas Cloud](https://www.atlascloud.ai/hi/models/bytedance/seedance-2.5/text-to-video?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Get an API key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) |
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
- [Seedance 2.5 launch overview — Atlas Cloud](https://www.atlascloud.ai/hi/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)

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

### No. 1: क्रिस्टल बॉल मैच-कट बीट फिल्म

- **Category:** `मैच-कट और रचनात्मक प्रभाव`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

एक बीट-सिंक्ड मैच-कट फिल्म: एक क्रिस्टल बॉल जिस पर चमकता हुआ 'seedance' लोगो उकेरा गया है, केंद्र में स्थिर रहती है जबकि उसके पीछे आठ दृश्य निर्बाध रूप से कट होते जाते हैं।

#### Prompt

```text
एक तेज़-रफ़्तार, सिनेमैटिक मैच-कट लघु फिल्म जो एक धड़कते इलेक्ट्रॉनिक बीट के साथ सिंक की गई है। एक बेदाग क्रिस्टल बॉल पूरे समय बिल्कुल केंद्र में स्थिर रहती है, जिसके भीतर एक चमकता हुआ "seedance" लोगो उकेरा गया है। गेंद पर बिल्कुल तीखा फ़ोकस बना रहता है, जबकि हर तेज़ संगीत-बीट पर पृष्ठभूमि निर्बाध रूप से मैच-कट होती है: Scene 1: मैक्रो क्लोज़-अप, गेंद के चारों ओर सिनेमैटिक पानी के छींटे, जटिल रोशनी का अपवर्तन करते हुए। Scene 2: एक विंटेज सुबह का कैफ़े, कच्ची लकड़ी की मेज़ पर गेंद, उठती हुई कॉफ़ी की भाप और खिड़की के पार धुंधले राहगीर। Scene 3: गोल्डन-आवर की शाम, एक स्केटर युवा एक हाथ से गेंद उछालता और लपकता है, उसके पीछे खूबसूरत बैकलिट सूर्यास्त में सड़क पीछे की ओर दौड़ती हुई। Scene 4: एक उन्मादी संगीत महोत्सव, हाथ गेंद को ऊँचा उठाते हैं, चकाचौंध करने वाले स्टेज लेज़रों का अपवर्तन करते हुए। Scene 5: एक जीवंत पारिवारिक पार्टी की मेज़, गेंद फ्रेम के केंद्र में टिकी हुई, धुंधली आकृतियाँ जाम टकराती और खाने की ओर हाथ बढ़ाती हुई। Scene 6: एक मंद रोशनी वाला सिनेमाघर, हाथ गेंद को कटोरे की तरह थामे हुए जबकि विशाल स्क्रीन की मद्धम चमक उसकी सतह पर तैरती है। Scene 7: एक ज़ोर से कंपन करते स्पीकर डायफ्राम पर रखी गेंद, चरमोत्कर्ष पर केंद्र में घूमते DJ टर्नटेबल पर मैच-कट होती हुई। Scene 8: एक बाहरी कैंपिंग रात, पृष्ठभूमि गर्म अलाव और झूलती स्ट्रिंग-लाइट बोकेह में बदलती हुई। समापन: अंतिम डाउनबीट पर गेंद फ्रेम से बाहर ऊपर उछाल दी जाती है; कट होकर पूर्ण कालेपन में, बीचोंबीच एक न्यूनतम सफ़ेद-पर-काला "seedance" प्रकट होता है। बीट-सिंक्ड मैच-कट एडिटिंग, शीर्ष-स्तरीय सिनेमैटिक कलर ग्रेडिंग, फ़ोटोरियल ग्लास अपवर्तन, रे ट्रेसिंग, ग्लोबल इल्युमिनेशन। विषय बिल्कुल तीखा, पृष्ठभूमि में भारी मोशन ब्लर।
```

### No. 2: स्टीमपंक क्लॉकवर्क — 30 सेकंड वन-टेक

- **Category:** `वन-टेक सिनेमैटोग्राफी`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

निरंतर परिक्रमा करते और आर-पार गुज़रते कैमरा मूवमेंट के साथ एक 30-सेकंड का स्टीमपंक मिनिएचर 3D सीक्वेंस।

#### Prompt

```text
परिष्कृत स्टीमपंक और विंटेज-मिनिएचर शैली में एक उच्च-स्तरीय, गहराई से सिनेमैटिक 30-सेकंड का 3D मोशन-ग्राफिक्स सीक्वेंस, निरंतर तरल परिक्रमा और आर-पार गुज़रते कैमरा मूवमेंट के साथ। [0-10s] एक प्राचीन पीतल की घड़ी के चेहरे का मैक्रो क्लोज़-अप जो परत-दर-परत खुलकर आपस में जुड़े घूमते गियर-छल्लों और वॉल्यूमेट्रिक कोहरे में बदल जाता है। कैमरा गियरों के बीच से नीचे भेदता है; पुरानी जर्जर किताबों से भरी एक मिनिएचर घाटी से एक यांत्रिक ऑर्निथॉप्टर सर्पिल में ऊपर उठता है। [10-20s] कैमरा ऑर्निथॉप्टर का पीछा करते हुए आगे सरकता है, और निर्बाध रूप से एक तेज़ी से घूमते अलंकृत पीतल के ज़ोइट्रोप में प्रवेश करता है जो सरपट दौड़ते यांत्रिक-घोड़े की रोशनी प्रक्षेपित करता है। रोशनी बाहर छलांग लगाती है और दृश्य गियरों के जंगल के बीच चमकती तांबे की पटरियों पर तैरती एक पीतल की केबल कार बन जाता है, जो सिनेमैटिक गोल्डन-आवर रोशनी में नहाई हुई है। [20-30s] कैमरा शालीनता से नीचे पैन करता है; नीचे एक उत्कृष्ट क्लॉकवर्क लकड़ी का पालदार जहाज़ प्रकट होता है जो गहरे-नीले काँच-बनावट वाली लहरों को चीरता है, जो एक चमकते विशाल चंद्रमा में रूपांतरित हो जाती हैं जिसमें लालटेन थामे खोजकर्ताओं की छायाकृतियाँ तारों तले एक क्रिस्टल-शिरा वाली चोटी पर पदयात्रा करती हैं। कैमरा सहजता से अलौकिक बादलों के बीच से सर्पिल में वापस टिक-टिक करती पीतल की घड़ी के चेहरे तक लौटता है। अति-यथार्थ यांत्रिक बनावटें, समृद्ध पीतल और सुनहरे रंग, सिनेमैटिक उथली गहराई-क्षेत्र, सहज निर्बाध आर-पार कैमरावर्क, महाकाव्यात्मक काल्पनिक साहसिक वातावरण।
```

### No. 3: दुनियाओं के भीतर झरोखे (5 रेफरेंस)

- **Category:** `मल्टी-इमेज रेफरेंस`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
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

5 रेफरेंस इमेज से संचालित एक ब्रांड कॉन्सेप्ट शॉर्ट, जो झरोखों से होकर अलग-अलग दुनियाओं में सरकता है।

#### Prompt

```text
एक सिनेमैटिक ब्रांड कॉन्सेप्ट शॉर्ट। @image1 पहला फ्रेम है; तस्वीर हल्के से काँपती है, कैमरा खिड़की के बाहर पीछे की ओर दौड़ती पेड़ों की परछाइयों की ओर पुश-इन करता है, उनका पीछे भागना तेज़ होता जाता है, फिर अचानक @image2 पर कट हो जाता है, गति धीमी पड़ती है जब कैमरा एक धारा के साथ धीरे-धीरे सरकता है, पक्षियों का कलरव और खिलते फूल। कैमरा पानी के नीचे उतरता है — बुलबुलों की आवाज़ — जब नारंगी जेलीफ़िश शालीनता से लेंस के पास से तैरती है @image3; कैमरा पीछे हटता है जब छोटी मछलियाँ फुर्ती से गुज़रती हैं और पानी से खिड़की में तैरकर आती हैं @image4, एक लड़की इधर-उधर देखती हुई, उन्हें निहारती हुई। कैमरा पीछे हटता है, डिफ़ोकस होता है, फिर तीखा रीफ़ोकस होता है, संगीत की लय पर स्विच करते हुए: एक चीनी-उद्यान की जालीदार खिड़की @image5 जिसके चारों ओर रोशनी घूमती है, चर्च की रंगीन काँच की खिड़की, एक हवाई जहाज़ का पोरथोल, एक गुंबदाकार रोशनदान, एक बे विंडो, लूवर ब्लाइंड्स, एक यूरोपीय डॉर्मर, एक दरवाज़े का पीपहोल, एक कैमरा व्यूफ़ाइंडर, एक पक्षी की आँख, एक मानव आँख का क्लोज़-अप। यह मानव आँख पर स्थिर होता है; आँख बंद होती है, स्क्रीन काली, फिर अचानक खुलती है — एक्सेंट बीट पर आँख के केंद्र में "seedance" प्रकट होता हुआ।
```

### No. 4: छह कमरों से एक ही टेक में (8 रेफरेंस)

- **Category:** `मल्टी-इमेज रेफरेंस`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
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

8 रेफरेंस इमेज से संचालित, एक ही निरंतर टेक जो एक आकृति का पीछा करते हुए मूड बदलते छह कमरों से गुज़रता है।

#### Prompt

```text
एक ही निरंतर टेक। कैमरा काले कोट (रेफरेंस @image1) पहने एक व्यक्ति का सहजता से पीछा करता है, जो अलग-अलग रंगत और मूड वाले छह जुड़े हुए कमरों से होकर बाएँ से दाएँ बढ़ता है। हर कमरे की संरचना एक जैसी है: सफ़ेद दीवारें, हल्की हेरिंगबोन लकड़ी का फ़र्श, फ़्रेंच फ़र्श-से-छत तक की खिड़कियाँ, सफ़ेद पारदर्शी परदे (रेफरेंस @image2) पर बाहर का नज़ारा और मूड हर बार अलग होता है। नायक एक समान गति से चलता है, हर खुले दरवाज़े से गुज़रता हुआ। 0-5s कमरा एक, अमेरिकी-कॉमिक लड़ाई: नायक एक किरदार (@image3) से लड़ता है, जो हार जाता है; 5-10s कमरा दो, गर्माहट, फ़ेल्ट-क्राफ्ट शैली, खिड़की का नज़ारा सूरजमुखी का खेत (@image4), गर्म-नारंगी मुलायम रोशनी, एक चित्रकार सूरजमुखी चित्रित करता हुआ (@image5), नायक भीतर आते ही फ़ेल्ट-शैली में बदल जाता है; 10-15s कमरा तीन, विषाद, श्वेत-श्याम कॉमिक स्टॉप-मोशन, बाहर बारिश, ठंडी-धूसर रोशनी, एक व्यक्ति अकेला फ़र्श पर घुटनों को गले लगाए बैठा, एक फ़ोन जो एक अनुत्तरित कॉल से चमक रहा है; भीतर आते ही रोशनी बुझती फिर जलती है, कमरा रंगीन हो जाता है, फूल खिल उठते हैं; 15-20s कमरा चार, आनंद, समुद्र में डूबा एक कमरा (रेफरेंस @image6), नायक मूँगों और मछलियों के बीच पारदर्शी होता हुआ; 20-25s कमरा पाँच, विस्मय, खिड़की का नज़ारा आतिशबाज़ी से भरा आसमान (रेफरेंस @image7), रंगीन झिलमिलाती रोशनी, नायक जयकार करती भीड़ में बहता हुआ; 25-30s एक कोरा सफ़ेद कमरा, नायक चुटकी बजाता है — चुटकी की ध्वनि — फ्रेम काला हो जाता है, बीच में "seedance" (रेफरेंस @image8)। सिनेमैटिक गुणवत्ता, हाई-फ़ैशन विज्ञापन शैली, रोशनी पूरी तरह खिड़की के नज़ारों से तय होती है ताकि प्रबल भावनात्मक विरोधाभास बने, फ्रेम में कोई टेक्स्ट नहीं।
```

### No. 5: वीडियो एडिट — नायक को छोड़ बाकी सबको हटाओ

- **Category:** `वीडियो एडिटिंग`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

रेफरेंस-वीडियो एडिटिंग: एक स्रोत क्लिप से नायक को छोड़कर हर किसी को मिटा दें।

#### Prompt

```text
वीडियो एडिटिंग: @video1 में नायक को छोड़कर हर किसी को हटा दें।
```

### No. 6: बहुभाषी हिप-हॉप 'हैलो' MV

- **Category:** `मल्टी-इमेज रेफरेंस`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

एक रेफरेंस इमेज से बना समुद्रतटीय हिप-हॉप MV; लीड 8 भाषाओं में 'हैलो' रैप करता है, लिप-सिंक के साथ, बीट पर हार्ड कट।

#### Prompt

```text
सिनेमैटिक हिप-हॉप / रैप म्यूज़िक वीडियो, फ़ोटोरियल गुणवत्ता, उच्च-स्तरीय रंगत, समुद्रतटीय सेटिंग। फ्रेम को @image1 से बनाएँ: सुनहरी रेत वाले समुद्रतट पर एक बैंड प्रस्तुति देता है, जहाँ लहरें टकरा रही हैं — एक लीड गायक गीली रेत में स्टैंड पर लगे माइक को थामे हुए, बाएँ एक गिटारवादक, दाएँ एक, पीछे एक ड्रमर; पीछे एक विशाल तटरेखा, लहराती लहरें, पानी पर झिलमिलाता गर्म गोल्डन-आवर सूरज, हवा में समुद्री धुंध। लाल ट्रैकसूट में लीड कैमरे की ओर रैप करता है — हर शब्द के साथ होंठ और जबड़ा बिल्कुल सटीक सिंक, सिर बीट पर झटके मारता हुआ। चमकीला, दमदार, तेज़, आत्मविश्वासी रैप। बीट पर हार्ड कट, हर बदलाव एक दोहरा विरोधाभास (शॉट साइज़ और प्रकार एक साथ बदलते हैं)। बोल (लीड बारी-बारी हर भाषा में 'हैलो' गाता है, बिल्कुल लिप-सिंक): अंग्रेज़ी "Hello", चीनी "你好", जापानी "こんにちは", कोरियाई "안녕하세요", पुर्तगाली "Olá", थाई "สวัสดี", स्पेनी "Hola", अरबी "مرحبا"। 8 हार्ड-कट शॉट (लो-एंगल वाइड एस्टैब्लिशिंग; कैमरे की ओर क्लोज़-अप रैप; मैक्रो गिटार-स्ट्रिंग इंसर्ट; 3/4 दबे-पाँव ऑर्बिट; किनारे पर पार्श्व ट्रैक; ड्रमर टिल्ट-अप; लीड पर टाइट पुश; भव्य पूर्ण-बैंड पुश-इन), एक शॉट में एक भाषा। व्हाइट बैलेंस 4000K, टील-एंड-एम्बर ग्रेड, 35mm, उथली गहराई-क्षेत्र, फ़िल्म ग्रेन, समुद्री धुंध, गोल्डन-आवर फ़्लेयर। प्रीमियम एहसास, सटीक लिप-सिंक, कोई सबटाइटल नहीं, कोई टेक्स्ट ओवरले नहीं, सिर्फ़ हार्ड कट, कुल 20 सेकंड।
```

### No. 7: कैप्सूल कॉफ़ी मशीन सेटअप ट्यूटोरियल (6 रेफरेंस)

- **Category:** `रेफरेंस-गाइडेड ट्यूटोरियल`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
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

एक कैप्सूल कॉफ़ी मशीन के लिए 30-सेकंड का सेटअप-और-उपयोग ट्यूटोरियल, वॉइसओवर के साथ रेफरेंस-निर्देशित छह चरण — पानी की टंकी लगाने से लेकर पहली रिंस तक।

#### Prompt

```text
कैप्सूल कॉफ़ी मशीन को लगाने और उपयोग करने पर एक 30-सेकंड का ट्यूटोरियल वीडियो। 0-2s: शुरुआती टाइटल कार्ड पर लिखा है "seedance कैप्सूल कॉफ़ी मशीन सेटअप ट्यूटोरियल"। 2-5s, चरण 1: पानी की टंकी लगाएँ, रेफरेंस @image1, थोड़े ऊँचे कोण से मीडियम शॉट, मशीन बॉडी का पिछला हिस्सा, पानी की टंकी को बॉडी के पीछे के स्लॉट के साथ संरेखित करें और सीधे नीचे तब तक दबाएँ जब तक वह क्लिक करके मज़बूती से बैठ न जाए, यह स्पष्ट रूप से दिखाते हुए कि टंकी के तल की क्लिप बॉडी के स्लॉट के साथ कैसे संरेखित होती हैं, टंकी के पारदर्शी हिस्से से पानी की स्तर-रेखा दिखती हुई, वॉइसओवर "सबसे पहले, पानी की टंकी लगाएँ। टंकी को मशीन के पीछे के स्लॉट के साथ संरेखित करें; क्लिक की आवाज़ का मतलब है कि वह अपनी जगह लॉक हो गई है।"। 5-9s, चरण 2: ड्रिप ट्रे लगाएँ, रेफरेंस @image2, सामने से क्लोज़-अप, बॉडी का अगला निचला हिस्सा, ड्रिप ट्रे को तल की गाइड-रेल में क्षैतिज रूप से तब तक सरकाएँ जब तक वह पूरी तरह बैठ न जाए, वॉइसओवर "इसके बाद, ड्रिप ट्रे लगाएँ। ट्रे को तल की रेल के साथ संरेखित करें।"। 9-13s, चरण 3: इस्तेमाल किए गए कैप्सूल का संग्रह-बॉक्स लगाएँ, रेफरेंस @image3, थोड़े नीचे कोण से क्लोज़-अप, ड्रिप ट्रे के नीचे की गुहा, संग्रह-बॉक्स को खाँचे के साथ संरेखित करें और इसे ड्रिप ट्रे के समतल तक अंदर दबाएँ, वॉइसओवर "फिर कैप्सूल संग्रह-बॉक्स अंदर डालें। इस्तेमाल किए गए कैप्सूल यहाँ अपने आप गिरेंगे।"। 13-18s, चरण 4: पहली बार पानी भरें, रेफरेंस @image4, बगल से क्लोज़-अप, बॉडी के ऊपर/पीछे की पानी की टंकी, टंकी का ढक्कन खोलें और MAX पानी स्तर-रेखा तक साफ़ पानी डालें, फिर बंद करें, पानी स्तर-रेखा पर ज़ोर देते हुए, वॉइसओवर "टंकी का ढक्कन खोलें, साफ़ पानी डालें, ध्यान रखें कि अधिकतम पानी स्तर-रेखा से ज़्यादा न भरें, फिर टंकी का ढक्कन बंद करें।"। 18-25s, चरण 5: पावर ऑन करें, रेफरेंस @image5, सामने से मीडियम शॉट, बॉडी का अगला हिस्सा, पावर कॉर्ड लगाएँ और पावर बटन दबाएँ; इंडिकेटर लाइट झपकने से स्थिर होने लगती है (प्रीहीटिंग पूर्ण), वॉइसओवर "पावर लगाएँ और पावर बटन दबाएँ। इंडिकेटर लाइट झपकने लगती है, जिसका मतलब है कि यह प्रीहीट हो रही है। जब लाइट स्थिर हो जाए, मशीन तैयार है।"। 25-30s, चरण 6: पहली रिंस (बिना कैप्सूल के), रेफरेंस @image6, मीडियम शॉट से सामने-बगल के क्लोज़-अप की ओर बढ़ते हुए, बिना कैप्सूल डाले सीधे ब्रू बटन दबाएँ ताकि गर्म पानी बहकर लाइनों को रिंस कर दे, "कैप्सूल की ज़रूरत नहीं" वाले नोट पर ज़ोर देते हुए, वॉइसओवर "आख़िरी चरण, पहली रिंस। ध्यान दें कि इस चरण में कैप्सूल की ज़रूरत नहीं है; बस ब्रू बटन दबाएँ। रिंस पूरी होते ही, आपकी कॉफ़ी मशीन इस्तेमाल के लिए तैयार है।"
```

### No. 8: फ्रूटी कुकी कमर्शियल (इमेज + 6 वीडियो रेफरेंस)

- **Category:** `मल्टीमॉडल रेफरेंस (इमेज+वीडियो)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
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

चार फ्लेवर — स्ट्रॉबेरी, सेब, अंगूर, संतरा — की फ्रूटी कुकीज़ के लिए एक चमकीला, रंगीन कमर्शियल, जो एक इमेज रेफरेंस और छह मोशन/कैमरा वीडियो रेफरेंस से बना है, धड़कती बीट पर हार्ड-कट।

#### Prompt

```text
एक चमकीली, रंगीन कमर्शियल शैली जिसमें फ्रूटी कुकीज़ हीरो हैं, चार फ्लेवर में — स्ट्रॉबेरी, सेब, अंगूर और संतरा; स्ट्रॉबेरी फ्लेवर रेफरेंस @image1। कुकीज़ और उनके मिलते-जुलते फल एक कस-कर व्यवस्थित ज्यामितीय सरणी में सजे हैं; समग्र फ्रेम साफ़-सुथरा, प्रीमियम और ऊर्जावान है। इसकी शुरुआत केंद्रीय कुकी के चारों ओर तेज़ी से परिक्रमा करते फलों से होती है ताकि दृश्य फ़ोकस झट से बन जाए — @video1 की कम्पोज़िशन को रेफर करें — तेज़ संगीत-बीट पर कट होते हुए। फिर अलग-अलग फ्लेवर की कुकीज़ सर्पिल पथों पर लेंस की ओर बढ़ती हैं, स्पष्ट स्थानिक गहराई बनाती हुई — @video2 की गति और कैमरावर्क को रेफर करें — बैकग्राउंड म्यूज़िक के साथ बीट पर रंग और फ्लेवर बदलती हुई। कुकीज़ की सरणी तेज़ प्लेन-से-प्लेन कट के साथ बाएँ-दाएँ पैन करती है, स्ट्रॉबेरी, सेब, अंगूर और संतरा फ्लेवर बारी-बारी आते हैं जब फ्रेम लय पर तेज़ी से जंप-कट होता है — @video3 की गति को रेफर करें। बीच का हिस्सा ऊपर-नीचे पैनिंग जोड़ता है; कुकीज़ की सुव्यवस्थित सरणी किसी मशीन की तरह लंबवत उठती-गिरती है — @video4 की गति को रेफर करें — व्यवस्था की सुंदरता और उत्पाद की समृद्धि को उजागर करते हुए। चरमोत्कर्ष में एक कुकी दो टुकड़ों में तोड़ी जाती है और वह क्षण स्लो मोशन में प्रवेश करता है जब फ्रूटी फिलिंग फूट पड़ती है, टुकड़े बिखरते हुए, रसीला एहसास और दानेदार प्रभाव तीव्र होते हुए — @video5 के विस्फोट प्रभाव को रेफर करें — फिर तेज़-रफ़्तार एडिट पर लौटते हुए। अंत में अंग्रेज़ी टेक्स्ट "Fresh on Seedance, made for viral vision" आता है, तेज़ी से एक-एक शब्द करके प्रवेश करता हुआ, प्रबल लयबद्ध टेक्स्ट मोशन और एक प्रोडक्ट फ़्रीज़-फ्रेम के साथ — @video6 को रेफर करें — चारों कुकी फ्लेवर सुव्यवस्थित पंक्ति में, फल लय में उछलते हुए, एक अंतिम ब्रांड-केंद्रित समापन के लिए, फ्रेम एक युवा, ऊर्जावान, स्वादिष्ट, शेयर-योग्य विज्ञापन वातावरण से भरा हुआ।
```

<a id="browse-by-category"></a>

## 🏷️ Browse by Category


- [`मैच-कट और रचनात्मक प्रभाव`](#category-1): **1**
- [`वन-टेक सिनेमैटोग्राफी`](#category-2): **1**
- [`मल्टी-इमेज रेफरेंस`](#category-3): **3**
- [`वीडियो एडिटिंग`](#category-4): **2**
- [`रेफरेंस-गाइडेड ट्यूटोरियल`](#category-5): **1**
- [`मल्टीमॉडल रेफरेंस (इमेज+वीडियो)`](#category-6): **1**
- [`इमेज रेफरेंस`](#category-7): **1**
- [`इमेज रेफरेंस (सिनेमैटिक)`](#category-8): **1**

<a id="all-prompts"></a>

## 📋 All Prompts


<a id="category-1"></a>

### मैच-कट और रचनात्मक प्रभाव (1)

### No. 1: क्रिस्टल बॉल मैच-कट बीट फिल्म

- **Category:** `मैच-कट और रचनात्मक प्रभाव`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

एक बीट-सिंक्ड मैच-कट फिल्म: एक क्रिस्टल बॉल जिस पर चमकता हुआ 'seedance' लोगो उकेरा गया है, केंद्र में स्थिर रहती है जबकि उसके पीछे आठ दृश्य निर्बाध रूप से कट होते जाते हैं।

#### Prompt

```text
एक तेज़-रफ़्तार, सिनेमैटिक मैच-कट लघु फिल्म जो एक धड़कते इलेक्ट्रॉनिक बीट के साथ सिंक की गई है। एक बेदाग क्रिस्टल बॉल पूरे समय बिल्कुल केंद्र में स्थिर रहती है, जिसके भीतर एक चमकता हुआ "seedance" लोगो उकेरा गया है। गेंद पर बिल्कुल तीखा फ़ोकस बना रहता है, जबकि हर तेज़ संगीत-बीट पर पृष्ठभूमि निर्बाध रूप से मैच-कट होती है: Scene 1: मैक्रो क्लोज़-अप, गेंद के चारों ओर सिनेमैटिक पानी के छींटे, जटिल रोशनी का अपवर्तन करते हुए। Scene 2: एक विंटेज सुबह का कैफ़े, कच्ची लकड़ी की मेज़ पर गेंद, उठती हुई कॉफ़ी की भाप और खिड़की के पार धुंधले राहगीर। Scene 3: गोल्डन-आवर की शाम, एक स्केटर युवा एक हाथ से गेंद उछालता और लपकता है, उसके पीछे खूबसूरत बैकलिट सूर्यास्त में सड़क पीछे की ओर दौड़ती हुई। Scene 4: एक उन्मादी संगीत महोत्सव, हाथ गेंद को ऊँचा उठाते हैं, चकाचौंध करने वाले स्टेज लेज़रों का अपवर्तन करते हुए। Scene 5: एक जीवंत पारिवारिक पार्टी की मेज़, गेंद फ्रेम के केंद्र में टिकी हुई, धुंधली आकृतियाँ जाम टकराती और खाने की ओर हाथ बढ़ाती हुई। Scene 6: एक मंद रोशनी वाला सिनेमाघर, हाथ गेंद को कटोरे की तरह थामे हुए जबकि विशाल स्क्रीन की मद्धम चमक उसकी सतह पर तैरती है। Scene 7: एक ज़ोर से कंपन करते स्पीकर डायफ्राम पर रखी गेंद, चरमोत्कर्ष पर केंद्र में घूमते DJ टर्नटेबल पर मैच-कट होती हुई। Scene 8: एक बाहरी कैंपिंग रात, पृष्ठभूमि गर्म अलाव और झूलती स्ट्रिंग-लाइट बोकेह में बदलती हुई। समापन: अंतिम डाउनबीट पर गेंद फ्रेम से बाहर ऊपर उछाल दी जाती है; कट होकर पूर्ण कालेपन में, बीचोंबीच एक न्यूनतम सफ़ेद-पर-काला "seedance" प्रकट होता है। बीट-सिंक्ड मैच-कट एडिटिंग, शीर्ष-स्तरीय सिनेमैटिक कलर ग्रेडिंग, फ़ोटोरियल ग्लास अपवर्तन, रे ट्रेसिंग, ग्लोबल इल्युमिनेशन। विषय बिल्कुल तीखा, पृष्ठभूमि में भारी मोशन ब्लर।
```

<a id="category-2"></a>

### वन-टेक सिनेमैटोग्राफी (1)

### No. 1: स्टीमपंक क्लॉकवर्क — 30 सेकंड वन-टेक

- **Category:** `वन-टेक सिनेमैटोग्राफी`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

निरंतर परिक्रमा करते और आर-पार गुज़रते कैमरा मूवमेंट के साथ एक 30-सेकंड का स्टीमपंक मिनिएचर 3D सीक्वेंस।

#### Prompt

```text
परिष्कृत स्टीमपंक और विंटेज-मिनिएचर शैली में एक उच्च-स्तरीय, गहराई से सिनेमैटिक 30-सेकंड का 3D मोशन-ग्राफिक्स सीक्वेंस, निरंतर तरल परिक्रमा और आर-पार गुज़रते कैमरा मूवमेंट के साथ। [0-10s] एक प्राचीन पीतल की घड़ी के चेहरे का मैक्रो क्लोज़-अप जो परत-दर-परत खुलकर आपस में जुड़े घूमते गियर-छल्लों और वॉल्यूमेट्रिक कोहरे में बदल जाता है। कैमरा गियरों के बीच से नीचे भेदता है; पुरानी जर्जर किताबों से भरी एक मिनिएचर घाटी से एक यांत्रिक ऑर्निथॉप्टर सर्पिल में ऊपर उठता है। [10-20s] कैमरा ऑर्निथॉप्टर का पीछा करते हुए आगे सरकता है, और निर्बाध रूप से एक तेज़ी से घूमते अलंकृत पीतल के ज़ोइट्रोप में प्रवेश करता है जो सरपट दौड़ते यांत्रिक-घोड़े की रोशनी प्रक्षेपित करता है। रोशनी बाहर छलांग लगाती है और दृश्य गियरों के जंगल के बीच चमकती तांबे की पटरियों पर तैरती एक पीतल की केबल कार बन जाता है, जो सिनेमैटिक गोल्डन-आवर रोशनी में नहाई हुई है। [20-30s] कैमरा शालीनता से नीचे पैन करता है; नीचे एक उत्कृष्ट क्लॉकवर्क लकड़ी का पालदार जहाज़ प्रकट होता है जो गहरे-नीले काँच-बनावट वाली लहरों को चीरता है, जो एक चमकते विशाल चंद्रमा में रूपांतरित हो जाती हैं जिसमें लालटेन थामे खोजकर्ताओं की छायाकृतियाँ तारों तले एक क्रिस्टल-शिरा वाली चोटी पर पदयात्रा करती हैं। कैमरा सहजता से अलौकिक बादलों के बीच से सर्पिल में वापस टिक-टिक करती पीतल की घड़ी के चेहरे तक लौटता है। अति-यथार्थ यांत्रिक बनावटें, समृद्ध पीतल और सुनहरे रंग, सिनेमैटिक उथली गहराई-क्षेत्र, सहज निर्बाध आर-पार कैमरावर्क, महाकाव्यात्मक काल्पनिक साहसिक वातावरण।
```

<a id="category-3"></a>

### मल्टी-इमेज रेफरेंस (3)

### No. 1: दुनियाओं के भीतर झरोखे (5 रेफरेंस)

- **Category:** `मल्टी-इमेज रेफरेंस`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
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

5 रेफरेंस इमेज से संचालित एक ब्रांड कॉन्सेप्ट शॉर्ट, जो झरोखों से होकर अलग-अलग दुनियाओं में सरकता है।

#### Prompt

```text
एक सिनेमैटिक ब्रांड कॉन्सेप्ट शॉर्ट। @image1 पहला फ्रेम है; तस्वीर हल्के से काँपती है, कैमरा खिड़की के बाहर पीछे की ओर दौड़ती पेड़ों की परछाइयों की ओर पुश-इन करता है, उनका पीछे भागना तेज़ होता जाता है, फिर अचानक @image2 पर कट हो जाता है, गति धीमी पड़ती है जब कैमरा एक धारा के साथ धीरे-धीरे सरकता है, पक्षियों का कलरव और खिलते फूल। कैमरा पानी के नीचे उतरता है — बुलबुलों की आवाज़ — जब नारंगी जेलीफ़िश शालीनता से लेंस के पास से तैरती है @image3; कैमरा पीछे हटता है जब छोटी मछलियाँ फुर्ती से गुज़रती हैं और पानी से खिड़की में तैरकर आती हैं @image4, एक लड़की इधर-उधर देखती हुई, उन्हें निहारती हुई। कैमरा पीछे हटता है, डिफ़ोकस होता है, फिर तीखा रीफ़ोकस होता है, संगीत की लय पर स्विच करते हुए: एक चीनी-उद्यान की जालीदार खिड़की @image5 जिसके चारों ओर रोशनी घूमती है, चर्च की रंगीन काँच की खिड़की, एक हवाई जहाज़ का पोरथोल, एक गुंबदाकार रोशनदान, एक बे विंडो, लूवर ब्लाइंड्स, एक यूरोपीय डॉर्मर, एक दरवाज़े का पीपहोल, एक कैमरा व्यूफ़ाइंडर, एक पक्षी की आँख, एक मानव आँख का क्लोज़-अप। यह मानव आँख पर स्थिर होता है; आँख बंद होती है, स्क्रीन काली, फिर अचानक खुलती है — एक्सेंट बीट पर आँख के केंद्र में "seedance" प्रकट होता हुआ।
```

### No. 2: छह कमरों से एक ही टेक में (8 रेफरेंस)

- **Category:** `मल्टी-इमेज रेफरेंस`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
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

8 रेफरेंस इमेज से संचालित, एक ही निरंतर टेक जो एक आकृति का पीछा करते हुए मूड बदलते छह कमरों से गुज़रता है।

#### Prompt

```text
एक ही निरंतर टेक। कैमरा काले कोट (रेफरेंस @image1) पहने एक व्यक्ति का सहजता से पीछा करता है, जो अलग-अलग रंगत और मूड वाले छह जुड़े हुए कमरों से होकर बाएँ से दाएँ बढ़ता है। हर कमरे की संरचना एक जैसी है: सफ़ेद दीवारें, हल्की हेरिंगबोन लकड़ी का फ़र्श, फ़्रेंच फ़र्श-से-छत तक की खिड़कियाँ, सफ़ेद पारदर्शी परदे (रेफरेंस @image2) पर बाहर का नज़ारा और मूड हर बार अलग होता है। नायक एक समान गति से चलता है, हर खुले दरवाज़े से गुज़रता हुआ। 0-5s कमरा एक, अमेरिकी-कॉमिक लड़ाई: नायक एक किरदार (@image3) से लड़ता है, जो हार जाता है; 5-10s कमरा दो, गर्माहट, फ़ेल्ट-क्राफ्ट शैली, खिड़की का नज़ारा सूरजमुखी का खेत (@image4), गर्म-नारंगी मुलायम रोशनी, एक चित्रकार सूरजमुखी चित्रित करता हुआ (@image5), नायक भीतर आते ही फ़ेल्ट-शैली में बदल जाता है; 10-15s कमरा तीन, विषाद, श्वेत-श्याम कॉमिक स्टॉप-मोशन, बाहर बारिश, ठंडी-धूसर रोशनी, एक व्यक्ति अकेला फ़र्श पर घुटनों को गले लगाए बैठा, एक फ़ोन जो एक अनुत्तरित कॉल से चमक रहा है; भीतर आते ही रोशनी बुझती फिर जलती है, कमरा रंगीन हो जाता है, फूल खिल उठते हैं; 15-20s कमरा चार, आनंद, समुद्र में डूबा एक कमरा (रेफरेंस @image6), नायक मूँगों और मछलियों के बीच पारदर्शी होता हुआ; 20-25s कमरा पाँच, विस्मय, खिड़की का नज़ारा आतिशबाज़ी से भरा आसमान (रेफरेंस @image7), रंगीन झिलमिलाती रोशनी, नायक जयकार करती भीड़ में बहता हुआ; 25-30s एक कोरा सफ़ेद कमरा, नायक चुटकी बजाता है — चुटकी की ध्वनि — फ्रेम काला हो जाता है, बीच में "seedance" (रेफरेंस @image8)। सिनेमैटिक गुणवत्ता, हाई-फ़ैशन विज्ञापन शैली, रोशनी पूरी तरह खिड़की के नज़ारों से तय होती है ताकि प्रबल भावनात्मक विरोधाभास बने, फ्रेम में कोई टेक्स्ट नहीं।
```

### No. 3: बहुभाषी हिप-हॉप 'हैलो' MV

- **Category:** `मल्टी-इमेज रेफरेंस`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

एक रेफरेंस इमेज से बना समुद्रतटीय हिप-हॉप MV; लीड 8 भाषाओं में 'हैलो' रैप करता है, लिप-सिंक के साथ, बीट पर हार्ड कट।

#### Prompt

```text
सिनेमैटिक हिप-हॉप / रैप म्यूज़िक वीडियो, फ़ोटोरियल गुणवत्ता, उच्च-स्तरीय रंगत, समुद्रतटीय सेटिंग। फ्रेम को @image1 से बनाएँ: सुनहरी रेत वाले समुद्रतट पर एक बैंड प्रस्तुति देता है, जहाँ लहरें टकरा रही हैं — एक लीड गायक गीली रेत में स्टैंड पर लगे माइक को थामे हुए, बाएँ एक गिटारवादक, दाएँ एक, पीछे एक ड्रमर; पीछे एक विशाल तटरेखा, लहराती लहरें, पानी पर झिलमिलाता गर्म गोल्डन-आवर सूरज, हवा में समुद्री धुंध। लाल ट्रैकसूट में लीड कैमरे की ओर रैप करता है — हर शब्द के साथ होंठ और जबड़ा बिल्कुल सटीक सिंक, सिर बीट पर झटके मारता हुआ। चमकीला, दमदार, तेज़, आत्मविश्वासी रैप। बीट पर हार्ड कट, हर बदलाव एक दोहरा विरोधाभास (शॉट साइज़ और प्रकार एक साथ बदलते हैं)। बोल (लीड बारी-बारी हर भाषा में 'हैलो' गाता है, बिल्कुल लिप-सिंक): अंग्रेज़ी "Hello", चीनी "你好", जापानी "こんにちは", कोरियाई "안녕하세요", पुर्तगाली "Olá", थाई "สวัสดี", स्पेनी "Hola", अरबी "مرحبا"। 8 हार्ड-कट शॉट (लो-एंगल वाइड एस्टैब्लिशिंग; कैमरे की ओर क्लोज़-अप रैप; मैक्रो गिटार-स्ट्रिंग इंसर्ट; 3/4 दबे-पाँव ऑर्बिट; किनारे पर पार्श्व ट्रैक; ड्रमर टिल्ट-अप; लीड पर टाइट पुश; भव्य पूर्ण-बैंड पुश-इन), एक शॉट में एक भाषा। व्हाइट बैलेंस 4000K, टील-एंड-एम्बर ग्रेड, 35mm, उथली गहराई-क्षेत्र, फ़िल्म ग्रेन, समुद्री धुंध, गोल्डन-आवर फ़्लेयर। प्रीमियम एहसास, सटीक लिप-सिंक, कोई सबटाइटल नहीं, कोई टेक्स्ट ओवरले नहीं, सिर्फ़ हार्ड कट, कुल 20 सेकंड।
```

<a id="category-4"></a>

### वीडियो एडिटिंग (2)

### No. 1: वीडियो एडिट — नायक को छोड़ बाकी सबको हटाओ

- **Category:** `वीडियो एडिटिंग`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

रेफरेंस-वीडियो एडिटिंग: एक स्रोत क्लिप से नायक को छोड़कर हर किसी को मिटा दें।

#### Prompt

```text
वीडियो एडिटिंग: @video1 में नायक को छोड़कर हर किसी को हटा दें।
```

### No. 2: भाप का इंजन स्क्रीन फोड़कर निकलता है (वीडियो एडिट)

- **Category:** `वीडियो एडिटिंग`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-reference1.mov" controls muted width="360"></video>

#### Description

एक वीडियो एडिट जो मूल @video1 पुराने-सिनेमा क्लिप को यथावत रखता है और सिर्फ़ एक भाप का इंजन जोड़ता है जो स्क्रीन फोड़कर, कपड़े को चीरता निकलता है, टकराव के क्षण श्वेत-श्याम पूर्ण रंग में बदलता हुआ।

#### Prompt

```text
अति-यथार्थ सिनेमैटिक यथार्थवादी शैली, फ़ोटोरियलिस्टिक लाइव-एक्शन बनावट के साथ, बाहर फूटती भौतिक वस्तु (भाप का इंजन) की असल-दुनिया की विश्वसनीयता पर ज़ोर देते हुए; कोई CGI चमक / गेम इंजन / शैलीकृत 3D नहीं। @video1 की मूल कम्पोज़िशन, प्रोजेक्शन-हॉल की रोशनी, हैंडहेल्ड कैमरे की स्थिति और प्राकृतिक खामियाँ बरकरार रखें। स्रोत वीडियो लॉक: @video1 को आधार-चित्र के रूप में पूरी तरह यथावत रखें (पुराने ढंग का प्रोजेक्शन हॉल, पीछे से दिखते टोपी पहने दर्शकों की कतारें, प्रोजेक्टर की शंक्वाकार किरण, स्क्रीन, परिवेशी रोशनी, रंगत और हैंडहेल्ड मूवमेंट सब अपरिवर्तित); केवल ये जोड़: स्क्रीन से फूटता इंजन, इससे आते रोशनी-छाया के बदलाव, स्क्रीन का चिरना, और हॉल तथा अगली-पंक्ति के दर्शकों पर हल्का भौतिक प्रभाव। रंग-परिवर्तन नियम (मुख्य जोड़): शुरुआत में सख़्ती से @video1 की मूल श्वेत-श्याम पुरानी-फ़िल्म बनावट रखें (ग्रेन / खरोंचें / झिलमिलाहट / एकवर्णी); ठीक उस क्षण जब इंजन सचमुच स्क्रीन तोड़कर वास्तविकता में फूटता है, चित्र अचानक श्वेत-श्याम से पूर्ण, असली रंग में बदल जाता है, रंग पूरे फ्रेम में एक शॉकवेव की तरह उस बिंदु से फैलता है जहाँ इंजन बाहर निकलता है (इंजन की काली इस्पात काया, लाल-तांबई बॉयलर, नारंगी-पीली भाप-लैंप की चमक, लकड़ी के डिब्बे का गर्म भूरा, सफ़ेद-धूसर भाप, और प्रोजेक्शन हॉल का गर्म भूरा सब तदनुसार रंग में आते हुए); रंग-परिवर्तन स्क्रीन-तोड़ने वाले विस्फोट के साथ बिल्कुल तालमेल में है, जिसके बाद अंत तक फ़ोटोरियलिस्टिक रंग बना रहता है। स्क्रीन-चिरना लॉक: स्क्रीन एक असली सफ़ेद प्रोजेक्शन कपड़ा है जिसमें वास्तविक कपड़े का तनाव है; जैसे इंजन फूटता है वह इंजन के अगले हिस्से की रूपरेखा के साथ बलपूर्वक फट खुलता है, त्रिज्यवत चीरों के साथ जिनके किनारे मुड़कर पीछे हटते और कतरे कपड़े के रेशे उड़ते हैं। विषय: एक पुराने ढंग के भाप के इंजन का अगला हिस्सा जो स्क्रीन से बलपूर्वक बाहर फूटता है, एक काली इस्पात काया, एक बेलनाकार बॉयलर, एक अगला काउकैचर, सफ़ेद-धूसर भाप उगलती एक चिमनी, एक तेज़ हेडलैंप, धातु सतहों पर असली घिसाव, तेल की कालिख, रिवेट और गीले परावर्तन, अपार भार और जड़त्व के साथ आगे दौड़ता हुआ। कैमरा: @video1 की मूल हैंडहेल्ड मूवमेंट को पूरी तरह विरासत में लेता है, न चिकना किया, न री-टाइम किया, न री-कम्पोज़ किया; फूटता इंजन हर समय स्क्रीन और हॉल-स्पेस में सही ढंग से लॉक रहता है, सही पैरालैक्स, ऑक्लूज़न और ज़मीन-संपर्क छाया बनाए रखते हुए। ध्वनि: कोई संगीत नहीं, सिर्फ़ असली ऑन-सीन साउंड इफ़ेक्ट रखें, @video1 के प्रोजेक्शन-हॉल परिवेश (प्रोजेक्टर की खटखट, दर्शकों की हलचल) को विरासत में लेते हुए और कपड़ा चिरने, भाप उमड़ने, इस्पात पहियों की यांत्रिक गर्जना, और टकराव के हवा-झोंके की आवाज़ जोड़ते हुए। कुल अवधि बिल्कुल @video1 जितनी; इंजन और उसकी भौतिक अंतःक्रियाओं, स्क्रीन-चिरने, और टूटने के क्षण रंग-परिवर्तन के अलावा कुछ न जोड़ें। कोई स्लो मोशन नहीं, कोई जादुई एहसास नहीं, कोई शैलीकृत डरावनापन नहीं; अंतिम परिणाम "एक ट्रेन स्क्रीन तोड़ती हुई, श्वेत-श्याम पल भर में रंग में बदलता" वाले एक अजीब किन्तु असली चित्र जैसा दिखना चाहिए जो किसी पुराने प्रोजेक्शन हॉल में एक असली कैमरे से संयोगवश कैद हुआ हो।
```

<a id="category-5"></a>

### रेफरेंस-गाइडेड ट्यूटोरियल (1)

### No. 1: कैप्सूल कॉफ़ी मशीन सेटअप ट्यूटोरियल (6 रेफरेंस)

- **Category:** `रेफरेंस-गाइडेड ट्यूटोरियल`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
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

एक कैप्सूल कॉफ़ी मशीन के लिए 30-सेकंड का सेटअप-और-उपयोग ट्यूटोरियल, वॉइसओवर के साथ रेफरेंस-निर्देशित छह चरण — पानी की टंकी लगाने से लेकर पहली रिंस तक।

#### Prompt

```text
कैप्सूल कॉफ़ी मशीन को लगाने और उपयोग करने पर एक 30-सेकंड का ट्यूटोरियल वीडियो। 0-2s: शुरुआती टाइटल कार्ड पर लिखा है "seedance कैप्सूल कॉफ़ी मशीन सेटअप ट्यूटोरियल"। 2-5s, चरण 1: पानी की टंकी लगाएँ, रेफरेंस @image1, थोड़े ऊँचे कोण से मीडियम शॉट, मशीन बॉडी का पिछला हिस्सा, पानी की टंकी को बॉडी के पीछे के स्लॉट के साथ संरेखित करें और सीधे नीचे तब तक दबाएँ जब तक वह क्लिक करके मज़बूती से बैठ न जाए, यह स्पष्ट रूप से दिखाते हुए कि टंकी के तल की क्लिप बॉडी के स्लॉट के साथ कैसे संरेखित होती हैं, टंकी के पारदर्शी हिस्से से पानी की स्तर-रेखा दिखती हुई, वॉइसओवर "सबसे पहले, पानी की टंकी लगाएँ। टंकी को मशीन के पीछे के स्लॉट के साथ संरेखित करें; क्लिक की आवाज़ का मतलब है कि वह अपनी जगह लॉक हो गई है।"। 5-9s, चरण 2: ड्रिप ट्रे लगाएँ, रेफरेंस @image2, सामने से क्लोज़-अप, बॉडी का अगला निचला हिस्सा, ड्रिप ट्रे को तल की गाइड-रेल में क्षैतिज रूप से तब तक सरकाएँ जब तक वह पूरी तरह बैठ न जाए, वॉइसओवर "इसके बाद, ड्रिप ट्रे लगाएँ। ट्रे को तल की रेल के साथ संरेखित करें।"। 9-13s, चरण 3: इस्तेमाल किए गए कैप्सूल का संग्रह-बॉक्स लगाएँ, रेफरेंस @image3, थोड़े नीचे कोण से क्लोज़-अप, ड्रिप ट्रे के नीचे की गुहा, संग्रह-बॉक्स को खाँचे के साथ संरेखित करें और इसे ड्रिप ट्रे के समतल तक अंदर दबाएँ, वॉइसओवर "फिर कैप्सूल संग्रह-बॉक्स अंदर डालें। इस्तेमाल किए गए कैप्सूल यहाँ अपने आप गिरेंगे।"। 13-18s, चरण 4: पहली बार पानी भरें, रेफरेंस @image4, बगल से क्लोज़-अप, बॉडी के ऊपर/पीछे की पानी की टंकी, टंकी का ढक्कन खोलें और MAX पानी स्तर-रेखा तक साफ़ पानी डालें, फिर बंद करें, पानी स्तर-रेखा पर ज़ोर देते हुए, वॉइसओवर "टंकी का ढक्कन खोलें, साफ़ पानी डालें, ध्यान रखें कि अधिकतम पानी स्तर-रेखा से ज़्यादा न भरें, फिर टंकी का ढक्कन बंद करें।"। 18-25s, चरण 5: पावर ऑन करें, रेफरेंस @image5, सामने से मीडियम शॉट, बॉडी का अगला हिस्सा, पावर कॉर्ड लगाएँ और पावर बटन दबाएँ; इंडिकेटर लाइट झपकने से स्थिर होने लगती है (प्रीहीटिंग पूर्ण), वॉइसओवर "पावर लगाएँ और पावर बटन दबाएँ। इंडिकेटर लाइट झपकने लगती है, जिसका मतलब है कि यह प्रीहीट हो रही है। जब लाइट स्थिर हो जाए, मशीन तैयार है।"। 25-30s, चरण 6: पहली रिंस (बिना कैप्सूल के), रेफरेंस @image6, मीडियम शॉट से सामने-बगल के क्लोज़-अप की ओर बढ़ते हुए, बिना कैप्सूल डाले सीधे ब्रू बटन दबाएँ ताकि गर्म पानी बहकर लाइनों को रिंस कर दे, "कैप्सूल की ज़रूरत नहीं" वाले नोट पर ज़ोर देते हुए, वॉइसओवर "आख़िरी चरण, पहली रिंस। ध्यान दें कि इस चरण में कैप्सूल की ज़रूरत नहीं है; बस ब्रू बटन दबाएँ। रिंस पूरी होते ही, आपकी कॉफ़ी मशीन इस्तेमाल के लिए तैयार है।"
```

<a id="category-6"></a>

### मल्टीमॉडल रेफरेंस (इमेज+वीडियो) (1)

### No. 1: फ्रूटी कुकी कमर्शियल (इमेज + 6 वीडियो रेफरेंस)

- **Category:** `मल्टीमॉडल रेफरेंस (इमेज+वीडियो)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
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

चार फ्लेवर — स्ट्रॉबेरी, सेब, अंगूर, संतरा — की फ्रूटी कुकीज़ के लिए एक चमकीला, रंगीन कमर्शियल, जो एक इमेज रेफरेंस और छह मोशन/कैमरा वीडियो रेफरेंस से बना है, धड़कती बीट पर हार्ड-कट।

#### Prompt

```text
एक चमकीली, रंगीन कमर्शियल शैली जिसमें फ्रूटी कुकीज़ हीरो हैं, चार फ्लेवर में — स्ट्रॉबेरी, सेब, अंगूर और संतरा; स्ट्रॉबेरी फ्लेवर रेफरेंस @image1। कुकीज़ और उनके मिलते-जुलते फल एक कस-कर व्यवस्थित ज्यामितीय सरणी में सजे हैं; समग्र फ्रेम साफ़-सुथरा, प्रीमियम और ऊर्जावान है। इसकी शुरुआत केंद्रीय कुकी के चारों ओर तेज़ी से परिक्रमा करते फलों से होती है ताकि दृश्य फ़ोकस झट से बन जाए — @video1 की कम्पोज़िशन को रेफर करें — तेज़ संगीत-बीट पर कट होते हुए। फिर अलग-अलग फ्लेवर की कुकीज़ सर्पिल पथों पर लेंस की ओर बढ़ती हैं, स्पष्ट स्थानिक गहराई बनाती हुई — @video2 की गति और कैमरावर्क को रेफर करें — बैकग्राउंड म्यूज़िक के साथ बीट पर रंग और फ्लेवर बदलती हुई। कुकीज़ की सरणी तेज़ प्लेन-से-प्लेन कट के साथ बाएँ-दाएँ पैन करती है, स्ट्रॉबेरी, सेब, अंगूर और संतरा फ्लेवर बारी-बारी आते हैं जब फ्रेम लय पर तेज़ी से जंप-कट होता है — @video3 की गति को रेफर करें। बीच का हिस्सा ऊपर-नीचे पैनिंग जोड़ता है; कुकीज़ की सुव्यवस्थित सरणी किसी मशीन की तरह लंबवत उठती-गिरती है — @video4 की गति को रेफर करें — व्यवस्था की सुंदरता और उत्पाद की समृद्धि को उजागर करते हुए। चरमोत्कर्ष में एक कुकी दो टुकड़ों में तोड़ी जाती है और वह क्षण स्लो मोशन में प्रवेश करता है जब फ्रूटी फिलिंग फूट पड़ती है, टुकड़े बिखरते हुए, रसीला एहसास और दानेदार प्रभाव तीव्र होते हुए — @video5 के विस्फोट प्रभाव को रेफर करें — फिर तेज़-रफ़्तार एडिट पर लौटते हुए। अंत में अंग्रेज़ी टेक्स्ट "Fresh on Seedance, made for viral vision" आता है, तेज़ी से एक-एक शब्द करके प्रवेश करता हुआ, प्रबल लयबद्ध टेक्स्ट मोशन और एक प्रोडक्ट फ़्रीज़-फ्रेम के साथ — @video6 को रेफर करें — चारों कुकी फ्लेवर सुव्यवस्थित पंक्ति में, फल लय में उछलते हुए, एक अंतिम ब्रांड-केंद्रित समापन के लिए, फ्रेम एक युवा, ऊर्जावान, स्वादिष्ट, शेयर-योग्य विज्ञापन वातावरण से भरा हुआ।
```

<a id="category-7"></a>

### इमेज रेफरेंस (1)

### No. 1: रेगिस्तानी सींगदार छिपकली और चकोतरा (3D विज्ञापन)

- **Category:** `इमेज रेफरेंस`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

एक चमकीला, चमकदार 3D एनिमेटेड कमर्शियल: एक प्यासी रेगिस्तानी सींगदार छिपकली को चकोतरा मिलता है, वह उसमें दाँत गड़ाती है, और रस की सुनामी रेगिस्तान को गर्मियों के समुद्र में बदल देती है। एक किरदार रेफरेंस से बना।

#### Prompt

```text
एक 3D एनिमेटेड कमर्शियल शैली, चमकीले और पारभासी रंग; गूदे और रस का एहसास बेहद ताज़गी-भरा और प्रभावशाली होना चाहिए। समग्र माहौल हल्के अतिरंजित हास्य के छींटे वाले एक उच्च-गुणवत्ता कमर्शियल एनिमेटेड शॉर्ट जैसा है। रेगिस्तानी सींगदार छिपकली किरदार प्यारा, जीवंत और भावप्रवण है, रेफरेंस @image1। इमेज बनावट के लिए रेफरेंस इमेज से वह मुलायम प्राकृतिक रोशनी, नाज़ुक रोएँ/त्वचा बनावट, स्वप्निल मैक्रो गहराई-क्षेत्र, और एक यथार्थ-किन्तु-हल्का बालसुलभ एहसास लें। 0-3s: चिलचिलाती धूप से झुलसा एक रेगिस्तान, हवा गर्मी से थरथराती और रेत तपती हुई; एक रेगिस्तानी सींगदार छिपकली तपती रेत पर पड़ी है, जीभ हल्की बाहर, आँखें धुँधली, लगभग सूखी हुई, हर कुछ कदम पर लड़खड़ाती मानो "वाष्पित" होने वाली हो। 3-6s: वह अचानक रुकती है, नाक फड़फड़ाती है, और नीचे देखते ही रेत में आधा दबा एक ठंडा, भरा-भरा, ओस से ढका चकोतरा देखती है, जो किसी रेगिस्तानी चमत्कार-सा चमक रहा है; छिपकली की आँखें एक पल में फैल जाती हैं। 6-8s: वह झपटकर आती है, दोनों हाथों से चकोतरे को कस कर गले लगाती है, पूरा चेहरा छिलके से सटाकर एक परम आनंदित "आख़िर मैं ज़िंदा हूँ" वाले भाव के साथ; फ्रेम 1 सेकंड के लिए टिकता है, एक अतिरंजित, मज़ेदार यादगार क्षण बनाता हुआ। 8-11s: वह ऊपर देखती है, मुँह खोलती है और एक बड़ा निवाला लेती है; चकोतरे का छिलका फट जाता है, भरा-भरा गूदा पारभासी चमक से दमकता, और अगले ही पल रस सुनामी की तरह फूट पड़ता है। 11-16s: नारंगी-गुलाबी, पारभासी, दमकता चकोतरे का रस बेतहाशा उमड़ता है, टीलों से नीचे बहता और तेज़ी से पूरे रेगिस्तान को डुबोता; सूखी पीली रेत पल भर में एक ठंडे, झिलमिलाते, फल-सुगंधित गर्मियों के समुद्र में बदल जाती है, कैक्टस, चट्टानें और छोटे टीले रस की लहरों में समाते हुए, छिपकली का भाव आनंद से आतंक में बदलता हुआ। 16-20s: "चकोतरा-समुद्र" में लगभग डूबती हुई, वह बदहवास होकर आधे चकोतरे को किसी लाइफ-बॉय की तरह जकड़ती और तैरती है, अपना भीगा सिर बाहर निकालकर हक्की-बक्की ताकती हुई। 20-24s: कट होकर एक सफ़ेद स्क्रीन; बीचोंबीच ब्रांड नाम और स्लोगन प्रकट होते हैं: "Seedance Grapefruit — दाँत गड़ाओ गूदे के लिए, जो बहकर आए वो है गर्मियाँ।" वॉइसओवर पूरी पंक्ति पढ़ता है। 24-30s: सफ़ेद से वापस कट; रेगिस्तानी सींगदार छिपकली अब तैरते चकोतरे पर आराम फरमा रही है, छोटा-सा धूप का चश्मा पहने और स्ट्रॉ वाला गिलास थामे, "रस-समुद्र" पर इत्मीनान से छुट्टियाँ मनाती बहती हुई, चारों ओर तैरता नारंगी गूदा, छोटे बर्फ़ के टुकड़े, ठंडे छींटे और एक साफ़ नीला आसमान; मूड "जीवन-रक्षा" से "छुट्टियों" में बदलता है, और अंत में वह संतोष से चकोतरे पर पीछे टिकती है जब कैमरा पीछे हटकर एक ताज़गी-भरे, चमकीले, चंचल गर्मियों के फ्रेम पर फ़्रीज़ हो जाता है।
```

<a id="category-8"></a>

### इमेज रेफरेंस (सिनेमैटिक) (1)

### No. 1: नशे में धुत आदमी का छत से गिरना (ब्लैक-कॉमेडी शॉर्ट)

- **Category:** `इमेज रेफरेंस (सिनेमैटिक)`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `hi`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

एक ~30 सेकंड की ब्लैक-कॉमेडी सिनेमैटिक शॉर्ट: एक गोल-मटोल, नशे में धुत आदमी छत से लुढ़क जाता है, एक लाइफलाइन पकड़ता है, खिड़की तोड़कर घुसता है, और बस सो जाता है। किरदार एक रेफरेंस इमेज से; गर्जना और पूर्ण सन्नाटे के बीच हार्ड कट पर बना।

#### Prompt

```text
[नशे में धुत आदमी की छत पर दहशत — किनारे से गिरता है — खिड़की से रस्सी पकड़ता है — वहीं बेहोश हो जाता है | ब्लैक-कॉमेडी शॉर्ट | लगभग 30 सेकंड] एक-पंक्ति का सार: एक गोल-मटोल, प्यारा, नशे में धुत अधेड़ आदमी एक इमारत की छत पर बर्गर खा रहा और बीयर पी रहा है; जैसे ही वह खड़ा होकर अंगड़ाई लेता है, गलती से पैर फिसल जाता है और गिर पड़ता है, घबराहट में एक जान बचाने वाली रस्सी पकड़ता है और तुरंत एक खिड़की तोड़कर भीतर एक कमरे में जा गिरता है, एक सेकंड के लिए हक्का-बक्का और स्तब्ध रहता है, फिर बस वहीं लेटकर गहरी नींद में सो जाता है। रेफरेंस इमेज @image1 — एक गोल-मटोल, प्यारा, नशे में धुत अधेड़ आदमी: गोल और गठीली काया जिसमें बड़ी गोल बीयर-तोंद, छोटा कद, ढीली हरकतें, शराब से धीमा और लड़खड़ाता; गोल चेहरा, दोहरी ठुड्डी, शराब से लाल गाल और नाक, आँखें झपकी-सी सिकुड़ी और धुँधली नज़र, बेतरतीब बढ़ी छोटी दाढ़ी का घेरा, बिखरे बाल, एक बेवकूफ़-सा, प्यारा, बेफ़िक्र भाव; बर्गर-सॉस से सने एक सफ़ेद बनियान में जो उसकी गोल तोंद पर ढीला लटका है, पुरानी जींस, ढीली चप्पलों में घसीटते कदम, हाथ में हमेशा आधा खाया बर्गर जकड़े हुए। पूरी फिल्म में बस यही एक किरदार है, रेफरेंस इमेज से 100% मेल खाता। समग्र लुक: एक रात्रिकालीन साइबरपंक महानगर, काँच-और-इस्पात की गगनचुंबी इमारतों का घना जंगल, नियॉन साइनबोर्ड (सियान / मैजेंटा / इलेक्ट्रिक ब्लू), होलोग्राफिक बिलबोर्ड, गीली परावर्ती ज़मीन, वॉल्यूमेट्रिक कोहरा, दूर उड़ती कारों की लाइट-ट्रेल और ड्रोन। असली लाइव-एक्शन बनावट, भौतिक सिनेमा लेंस, कोई 3D रेंडरिंग / गेम इंजन / एनिमे एहसास नहीं। कैमरा हैंडहेल्ड को जिब / ड्रोन के साथ मिलाता है; गिरने के बाद कैमरा उसके साथ नीचे झपटता है जबकि इमारत की बाहरी दीवार और नियॉन ऊपर की ओर धारियाँ खींचते हैं ताकि गति का बोध हो, 24-35mm वाइडस्क्रीन सिनेमैटिक लेंस बनावट, 180-डिग्री शटर मोशन ब्लर। साउंड डिज़ाइन ब्लैक कॉमेडी की कुंजी है: "एक भारी गर्जना" और "पूर्ण सन्नाटे" के बीच बार-बार हार्ड कट। पूरे समय असली गुरुत्वाकर्षण। स्टोरीबोर्ड (लगभग 30 सेकंड): S1 (0-4s) शुरुआती चबाने का बड़ा क्लोज़-अप (आवाज़ के साथ) आदमी का चेहरा स्क्रीन भर देता है, बड़े-बड़े निवालों में बर्गर चबाता, एक संतुष्ट नशीली अवस्था; S2 (4-9s) वाइड शॉट की ओर खींचें, अंगड़ाई लेना -> पैर फिसलना और गिरना (आवाज़ के साथ) वह लड़खड़ाते हुए खड़ा होकर ज़ोर से अंगड़ाई लेता है, पीछे झुकता है, संतुलन नहीं रख पाता, पैर फिसलता है और वह छत के किनारे से पीछे की ओर लुढ़क जाता है, बर्गर कभी नहीं छोड़ता, एक घबराई "एँ——!" के साथ; S3 (9-12s) कट होकर एक चौंके चेहरे का क्लोज़-अप (एक तेज़ चीख, भारी गर्जना) नशीली आँखें गोल उभरी, दोहरी ठुड्डी सिमटी, मुँह "आह्ह्ह——!!" चीख में फैला, हवा सनसनाती हुई; S4 (12-16s) कट होकर आँख के स्तर पर एक लॉन्ग शॉट (पूर्ण सन्नाटा) सामने की इमारत से देखा गया, एक नन्हीं सफ़ेद आकृति ऊँची इमारत से सीधी नीचे गिरती हुई, नियॉन शहर विशाल और उदासीन, पूर्ण सन्नाटा एक सेकंड पहले की भारी गर्जना के साथ ब्लैक-कॉमेडी विरोधाभास बनाता हुआ; S5 (16-21s) कट होकर एक चेहरे का क्लोज़-अप (चीखता हुआ) -> रस्सी पकड़ना, अब भी चीखता, हाथ हवा में हड़बड़ाते, वह अचानक एक जान बचाने वाली केबल पकड़ लेता है, केबल उसके वज़न से खिंचकर तनती और झुकती है एक "ट्वैंग" के साथ, चीख अचानक कट जाती है जब वह झटके से बाहर झूलता है (रस्सी पकड़ने के पल एक संक्षिप्त स्लो मोशन); S6 (21-26s) कट होकर एक भीतरी कोण (शांत) -> काँच चटकना -> वह भीतर आ धमकता है, कमरा पहले शांत जिसमें बस एयर कंडीशनर की गूँज, अगले ही सेकंड काँच विस्फोटक रूप से भीतर की ओर फूटता है (एक संक्षिप्त बुलेट टाइम) जब नशे में धुत आदमी, बर्गर समेत, खिड़की तोड़ता है, टुकड़े त्रिज्यवत बाहर उड़ते, नियॉन रोशनी भीतर बहती, और वह ज़ोर से कमरे में फ़र्श / सोफ़े पर आ गिरता है, टूटे काँच खनकते हुए; S7 (26-30s) समापन, एक चौंका हुआ क्षण -> सो जाना, आदमी फ़र्श पर हाथ-पैर फैलाए पसरा, टूटे काँच से लदा, अब भी बर्गर जकड़े, धीरे-धीरे आँखें खोलता, हक्का-बक्का, पूरे एक सेकंड कोरा और चौंका हुआ, इधर-उधर देखता मानो सोच रहा हो "मैं कहाँ हूँ?", फिर नशा हावी हो जाता है और, बिल्कुल परवाह न करते हुए, वह होंठ चटकाता है, बर्गर को बाँहों में समेटता है, करवट लेता है, वहीं लेट जाता है और गहरी नींद में सो जाता है, हल्के खर्राटे तक लेता हुआ, कैमरा पीछे हटकर फ़्रीज़ होता है, हार्ड कट होकर काला। सिर्फ़ ऑन-सेट लाइव साउंड, कोई संगीत नहीं, कोई सबटाइटल नहीं; मूल तत्व "भारी गर्जना" और "सन्नाटे" के बीच बार-बार हार्ड कट है।
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
- [Atlas Cloud Seedance 2.5 page](https://www.atlascloud.ai/hi/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
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
