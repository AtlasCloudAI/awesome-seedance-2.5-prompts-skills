# 🎬 Awesome Seedance 2.5 Prompts + Seedance 2.5 Skill

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-seedance-2.5-prompts-skills?style=social)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/pulls)
[![Prompts](https://img.shields.io/badge/prompts-111%2B-blue.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

A curated library of Seedance 2.5 video prompts plus **Seedance 2.5 Skill**, an installable Agent Skill that improves prompts, plans and reviews storyboards when needed, and generates controllable video. It uses Seedream 5.0 Pro for storyboard images and Seedance 2.0 as the current executable video default, switching to Seedance 2.5 only when the selected provider exposes it.

| [Browse prompts](https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Install Seedance 2.5 Skill](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/tree/main/skills/seedance-2-5-skill) | [Generate with Atlas Cloud](https://www.atlascloud.ai/ja/models/bytedance/seedance-2.5/text-to-video?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [Get an API key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) |
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
- [Seedance 2.5 launch overview — Atlas Cloud](https://www.atlascloud.ai/ja/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)

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

### No. 1: クリスタルボールのマッチカット・ビート映像

- **Category:** `マッチカットとクリエイティブエフェクト`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

ビートに同期したマッチカット映像。発光する「seedance」ロゴが刻まれた一つのクリスタルボールが中央に固定され、その背後で8つのシーンがシームレスに切り替わる。

#### Prompt

```text
力強いエレクトロビートに同期した、疾走感あふれるシネマティックなマッチカット・ショートフィルム。一点の曇りもないクリスタルボールが常に画面のど真ん中に固定され、その内部には発光する「seedance」ロゴが刻まれている。ボールは極めてシャープなフォーカスを保ち、強拍ごとに背景がシームレスにマッチカットする。シーン1：マクロクローズアップ、シネマティックな水しぶきがボールの周囲で弾け、複雑な光を屈折させる。シーン2：ヴィンテージな朝のカフェ、無垢材のテーブルに置かれたボール、立ちのぼるコーヒーの湯気、窓の外にはぼやけた通勤者たち。シーン3：ゴールデンアワーの夕暮れ、スケーターの若者が片手でボールを放り投げてキャッチし、背後では逆光の美しい夕日の中で通りが後方へ流れていく。シーン4：熱狂的な音楽フェス、無数の手がボールを高々と掲げ、まばゆいステージレーザーを屈折させる。シーン5：賑やかな家族パーティーのテーブル、中央に置かれたボール、ぼやけた人影が乾杯し料理へ手を伸ばす。シーン6：薄暗い映画館、両手で包み込まれたボールの表面を、巨大スクリーンのかすかな光が漂うように移ろう。シーン7：激しく振動するスピーカーのコーンの上に置かれたボールが、クライマックスで中央に回転するDJターンテーブルへマッチカットする。シーン8：野外キャンプの夜、背景は暖かな焚き火と揺れるストリングライトのボケへと変わる。フィナーレ：最後のダウンビートでボールがフレーム外へ投げ上げられ、真っ黒にカット、黒地に白のミニマルな「seedance」が中央に現れる。ビート同期のマッチカット編集、最高峰のシネマティックなカラーグレーディング、フォトリアルなガラスの屈折、レイトレーシング、グローバルイルミネーション。被写体は極めてシャープ、背景は強いモーションブラー。
```

### No. 2: スチームパンクの時計仕掛け — 30秒ワンテイク

- **Category:** `ワンテイク撮影`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

連続的な旋回とパススルーのカメラワークで撮る、30秒のスチームパンク・ミニチュア3Dシーケンス。

#### Prompt

```text
洗練されたスチームパンクとヴィンテージ・ミニチュアの様式による、ハイエンドで深くシネマティックな30秒の3Dモーショングラフィックス・シーケンス。途切れなく流麗に旋回し、対象を通り抜けていくカメラワーク。[0-10s] アンティークな真鍮の時計文字盤のマクロクローズアップが、一層また一層と噛み合い回転する歯車のリングとボリューメトリックな霧へと展開していく。カメラは歯車を貫いて下降し、風化した古書が積み重なるミニチュアの峡谷から機械仕掛けのオーニソプター（羽ばたき飛行機）が螺旋を描いて舞い上がる。[10-20s] カメラは前進しながらオーニソプターを追い、高速回転する装飾的な真鍮のゾートロープへとシームレスに入り込み、疾走する機械仕掛けの馬の光が投影される。その光が飛び出し、シーンは歯車の森を抜けてきらめく銅のレールを走る真鍮の浮遊ケーブルカーへと変わり、シネマティックなゴールデンアワーの光に包まれる。[20-30s] カメラは優雅に下へパンし、下方には深いブルーのガラス質の波を切り裂く精巧な時計仕掛けの木造帆船が現れ、それは発光する巨大な月へと姿を変え、ランタンを掲げた探検家のシルエットが星空の下、水晶の鉱脈が走る尾根を踏破していく。カメラは幻想的な雲の中をなめらかに螺旋を描いて戻り、時を刻む真鍮の時計文字盤へと帰る。超リアルな機械の質感、豊かな真鍮とゴールドのトーン、シネマティックな浅い被写界深度、なめらかでシームレスなパススルーのカメラワーク、壮大で幻想的な冒険の雰囲気。
```

### No. 3: 窓を抜けて異世界へ（参考画像5枚）

- **Category:** `複数画像リファレンス`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
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

5枚の参考画像で駆動するブランドコンセプトのショートフィルム。窓を次々と抜け、異なる世界へ滑り込んでいく。

#### Prompt

```text
シネマティックなブランドコンセプトのショートフィルム。@image1 が最初のフレーム。画面がわずかに震え、カメラが押し込むと窓の外で木々の影が後方へ流れ去り、その退きが加速していく。そして突然 @image2 へカット、速度が緩やかになり、カメラは小川に沿ってゆっくりと滑り、鳥のさえずりと花。カメラは水中へ潜り——泡の音——オレンジ色のクラゲが優雅にレンズの前を漂い過ぎる @image3。カメラが引くと小魚がすっと横切り、水の中から窓の中へ泳ぎ込む @image4、一人の少女があたりを見回し、彼らを見つめる。カメラが引いてピントを外し、再びシャープに合わせ、音楽のリズムに合わせて切り替わる。中国庭園の格子窓 @image5 に光が巡り、教会のステンドグラス、飛行機の丸窓、ドーム状の天窓、出窓、ルーバーブラインド、ヨーロッパ風の屋根窓、ドアの覗き穴、カメラのファインダー、鳥の目、人間の目のクローズアップ。人間の目に落ち着き、目が閉じ、画面は暗転、そして突然開く——アクセントのビートで「seedance」が目の中央に現れる。
```

### No. 4: ワンテイクで六つの部屋を抜けて（参考画像8枚）

- **Category:** `複数画像リファレンス`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
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

8枚の参考画像で駆動し、一続きのワンテイクで人物を追い、雰囲気の移り変わる六つの部屋を抜けていく。

#### Prompt

```text
一続きのワンテイク。カメラは黒いコートの人物（リファレンス @image1）を、色調と雰囲気の異なる六つの連なる部屋を通って左から右へなめらかに追う。どの部屋も同じ構造を共有する。白い壁、明るいヘリンボーンの木の床、フランス窓（掃き出し窓）、白いシアーカーテン（リファレンス @image2）だが、外の眺めと雰囲気は毎回異なる。主人公は一定のペースで歩き、開いたすべてのドアを通り抜ける。0-5s 部屋その一、アメコミ調のバトル：主人公はキャラクター（@image3）と戦い、相手は倒される。5-10s 部屋その二、温かさ、フェルトクラフト風、窓の眺めはヒマワリ畑（@image4）、暖かなオレンジの柔らかい光、ヒマワリを描く画家（@image5）、主人公は入室と同時にフェルト風に変わる。10-15s 部屋その三、悲しみ、白黒コミックのストップモーション、外は雨、冷たいグレーの光、一人きりで床に座り膝を抱える人物、応答のない着信で光るスマートフォン。入室すると照明が明滅して消え、また点き、部屋は色づき、花々が一斉に咲きほころぶ。15-20s 部屋その四、歓喜、海に沈んだ部屋（リファレンス @image6）、主人公はサンゴと魚の間で透明になっていく。20-25s 部屋その五、驚き、窓の眺めは花火が広がる夜空（リファレンス @image7）、色とりどりの明滅する光、主人公は歓声を上げる群衆に巻き込まれる。25-30s 真っ白な何もない部屋、主人公が指を鳴らす——指パッチンのSE——画面が暗転し、中央に「seedance」（リファレンス @image8）。シネマティックなクオリティ、ハイファッション広告のスタイル、照明は完全に窓の眺めによって決まり強い感情のコントラストを生む、画面内に文字なし。
```

### No. 5: 動画編集 — 主役以外を全員消す

- **Category:** `動画編集`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

リファレンス動画の編集：元クリップから主人公以外の全員を消し去る。

#### Prompt

```text
動画編集：@video1 の中の主人公以外の全員を取り除く。
```

### No. 6: 多言語ヒップホップ「Hello」MV

- **Category:** `複数画像リファレンス`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

1枚の参考画像から組み立てる海辺のヒップホップMV。リードが8言語で「hello」をラップし、リップシンクは正確、ビートでハードカット。

#### Prompt

```text
シネマティックなヒップホップ／ラップのミュージックビデオ、フォトリアルなクオリティ、ハイエンドなトーン、海辺のセッティング。@image1 からフレームを組み立てる。打ち寄せる波の黄金の砂浜でバンドが演奏する——濡れた砂の上でスタンドマイクを握るリードボーカル、左に一人、右に一人のギタリスト、後方にドラマー。背後には広大な海岸線、うねる波、水面にきらめく暖かなゴールデンアワーの太陽、宙に漂う海霧。赤いトラックスーツのリードがカメラに向かってラップする——唇と顎はすべての言葉に正確に同期し、頭はビートに合わせて力強く打ち込む。明るく、パンチが効き、速く、自信に満ちたラップ。ビートでハードカット、切り替えごとに二重のコントラスト（ショットサイズとタイプが同時に変わる）。歌詞（リードが各言語で順番に「hello」を歌い、リップシンクは正確）：英語「Hello」、中国語「你好」、日本語「こんにちは」、韓国語「안녕하세요」、ポルトガル語「Olá」、タイ語「สวัสดี」、スペイン語「Hola」、アラビア語「مرحبا」。8つのハードカット・ショット（ローアングルのワイドな確立ショット、カメラへのラップのクローズアップ、ギターの弦のマクロインサート、3/4の忍び寄る旋回、岸辺での横移動トラッキング、ドラマーのティルトアップ、リードへのタイトな寄り、バンド全員への堂々たる寄り）、1ショットにつき1言語。ホワイトバランス4000K、ティール＆アンバーのグレーディング、35mm、浅い被写界深度、フィルムグレイン、海霧、ゴールデンアワーのフレア。上質な質感、正確なリップシンク、字幕なし、テキストオーバーレイなし、ハードカットのみ、合計20秒。
```

### No. 7: カプセルコーヒーマシンのセットアップ・チュートリアル（参考画像6枚）

- **Category:** `リファレンス誘導チュートリアル`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
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

カプセルコーヒーマシンのセットアップと使い方を解説する30秒チュートリアル。ナレーション付きの、参考画像で誘導する6ステップ——給水タンクの取り付けから初回のすすぎまで。

#### Prompt

```text
カプセルコーヒーマシンの取り付けと使い方を解説する30秒のチュートリアル動画。0-2s：オープニングのタイトルカードには「seedance カプセルコーヒーマシン セットアップ・チュートリアル」と表示される。2-5s、ステップ1：給水タンクの取り付け、リファレンス @image1、やや高い角度からのミディアムショット、本体の背面、給水タンクを本体背面のスロットに合わせてカチッとしっかりはまるまでまっすぐ下へ押し込む。タンク底部のクリップが本体のスロットにどう合うかを明確に見せ、タンクの透明部分から水位線が見える。ナレーション「まず、給水タンクを取り付けます。タンクをマシン背面のスロットに合わせてください。カチッと音がすれば固定完了です。」。5-9s、ステップ2：ドリップトレイの取り付け、リファレンス @image2、正面からのクローズアップ、本体の前面下部、ドリップトレイを底部のガイドレールに水平に、完全に収まるまでスライドさせる。ナレーション「次に、ドリップトレイを取り付けます。トレイを底部のレールに合わせてください。」。9-13s、ステップ3：使用済みカプセル回収ボックスの取り付け、リファレンス @image3、やや低い角度からのクローズアップ、ドリップトレイの下の空洞、回収ボックスをくぼみに合わせてドリップトレイと面一になるまで押し込む。ナレーション「続いて、カプセル回収ボックスを差し込みます。使用済みのカプセルはここへ自動的に落ちます。」。13-18s、ステップ4：初回の給水、リファレンス @image4、側面からのクローズアップ、本体の上部／背面にある給水タンク、タンクの蓋を開けてMAX水位線まできれいな水を注ぎ、蓋を閉じる。水位線を強調。ナレーション「タンクの蓋を開け、きれいな水を注ぎます。最高水位線を超えないよう注意し、タンクの蓋を閉じてください。」。18-25s、ステップ5：電源を入れる、リファレンス @image5、正面からのミディアムショット、本体の前面、電源コードを差し込み電源ボタンを押す。インジケーターランプが点滅から点灯へ変わる（予熱完了）。ナレーション「電源をつなぎ、電源ボタンを押します。インジケーターランプが点滅を始めたら予熱中の合図です。ランプが点灯に変われば、マシンの準備完了です。」。25-30s、ステップ6：初回のすすぎ（カプセルなし）、リファレンス @image6、ミディアムショットから正面斜めのクローズアップへ、カプセルを入れずに直接抽出ボタンを押し、お湯を流して配管をすすぐ。「カプセル不要」の注意点を強調。ナレーション「最後のステップ、初回のすすぎです。このステップにカプセルは不要で、抽出ボタンを押すだけです。すすぎが終われば、あなたのコーヒーマシンはすぐに使えます。」
```

### No. 8: フルーツクッキーのCM（画像1枚＋動画リファレンス6本）

- **Category:** `マルチモーダルリファレンス（画像＋動画）`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
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

明るくカラフルな、4つのフレーバー——ストロベリー、アップル、グレープ、オレンジ——のフルーツクッキーCM。1枚の画像リファレンスと6本のモーション／カメラ動画リファレンスから構築し、力強いビートでハードカット。

#### Prompt

```text
フルーツクッキーを主役にした、明るくカラフルなCMスタイル。フレーバーは4種——ストロベリー、アップル、グレープ、オレンジ。ストロベリー味のリファレンスは @image1。クッキーと対応するフルーツは強い秩序を持つ幾何学的な配列に並び、全体の画面はクリーンで上質、ハイエナジー。オープニングはフルーツが中央のクッキーの周りを高速で旋回し、視覚的な焦点を素早く確立する——@video1 の構図を参照——力強い音楽のビートでカットイン。次に異なるフレーバーのクッキーがスパイラルの軌道に沿ってレンズへ向かって前進し、明確な空間の奥行きを形づくる——@video2 のモーションとカメラワークを参照——BGMに合わせてビートで色とフレーバーを切り替える。クッキーの配列が左右にパンし、面から面への高速なカットで、ストロベリー、アップル、グレープ、オレンジのフレーバーが交互に現れ、画面はリズムに合わせて素早くジャンプカットする——@video3 の動きを参照。中盤では上下のパンを加え、整然としたクッキーの配列が機械のように垂直に上下する——@video4 の動きを参照——秩序の美しさと製品の豊かさを際立たせる。クライマックスでは1枚のクッキーが二つに割られ、その瞬間スローモーションに入り、フルーティーなフィリングが弾け出し、くずが飛び散り、みずみずしさと粒感のインパクトが増幅される——@video5 の爆発エフェクトを参照——その後すぐに速いテンポの編集へ戻る。エンディングでは英語のテキスト「Fresh on Seedance, made for viral vision」が導入され、一文字ずつ素早く次々と登場し、力強いリズミカルなテキストモーションと製品のフリーズフレームを伴う——@video6 を参照——4つのクッキーのフレーバーがフルーツと整然と並び、同期して弾んで最後のブランドを前面に押し出す締めとなり、画面は若々しく、エネルギッシュで、おいしそうで、シェアしたくなる広告の雰囲気に満ちる。
```

<a id="browse-by-category"></a>

## 🏷️ Browse by Category


- [`マッチカットとクリエイティブエフェクト`](#category-1): **1**
- [`ワンテイク撮影`](#category-2): **1**
- [`複数画像リファレンス`](#category-3): **3**
- [`動画編集`](#category-4): **2**
- [`リファレンス誘導チュートリアル`](#category-5): **1**
- [`マルチモーダルリファレンス（画像＋動画）`](#category-6): **1**
- [`画像リファレンス`](#category-7): **1**
- [`画像リファレンス（シネマティック）`](#category-8): **1**
- [`ECライブコマース`](#category-9): **8**
- [`グルメ / 飲食`](#category-10): **8**
- [`ビューティ / ファッション`](#category-11): **6**
- [`デジタルテクノロジー`](#category-12): **6**
- [`自動車`](#category-13): **4**
- [`不動産 / 住まい`](#category-14): **4**
- [`人物トーク / デジタルヒューマン`](#category-15): **6**
- [`ショートドラマ / 感情叙事`](#category-16): **8**
- [`ブランドCM / 広告`](#category-17): **6**
- [`旅行 / 文化観光`](#category-18): **6**
- [`ペット / 動物`](#category-19): **5**
- [`子ども / 教育 / 科学`](#category-20): **5**
- [`ゲーム / CG / ファンタジー`](#category-21): **5**
- [`アニメ / カートゥーン`](#category-22): **4**
- [`スポーツ / フィットネス`](#category-23): **4**
- [`音楽 / ダンス / MV`](#category-24): **4**
- [`祝祭 / 二十四節気`](#category-25): **5**
- [`自然 / 天文 / ドキュメンタリー`](#category-26): **4**
- [`擬人化 / クリエイティブネタ`](#category-27): **2**

<a id="all-prompts"></a>

## 📋 All Prompts


<a id="category-1"></a>

### マッチカットとクリエイティブエフェクト (1)

### No. 1: クリスタルボールのマッチカット・ビート映像

- **Category:** `マッチカットとクリエイティブエフェクト`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

ビートに同期したマッチカット映像。発光する「seedance」ロゴが刻まれた一つのクリスタルボールが中央に固定され、その背後で8つのシーンがシームレスに切り替わる。

#### Prompt

```text
力強いエレクトロビートに同期した、疾走感あふれるシネマティックなマッチカット・ショートフィルム。一点の曇りもないクリスタルボールが常に画面のど真ん中に固定され、その内部には発光する「seedance」ロゴが刻まれている。ボールは極めてシャープなフォーカスを保ち、強拍ごとに背景がシームレスにマッチカットする。シーン1：マクロクローズアップ、シネマティックな水しぶきがボールの周囲で弾け、複雑な光を屈折させる。シーン2：ヴィンテージな朝のカフェ、無垢材のテーブルに置かれたボール、立ちのぼるコーヒーの湯気、窓の外にはぼやけた通勤者たち。シーン3：ゴールデンアワーの夕暮れ、スケーターの若者が片手でボールを放り投げてキャッチし、背後では逆光の美しい夕日の中で通りが後方へ流れていく。シーン4：熱狂的な音楽フェス、無数の手がボールを高々と掲げ、まばゆいステージレーザーを屈折させる。シーン5：賑やかな家族パーティーのテーブル、中央に置かれたボール、ぼやけた人影が乾杯し料理へ手を伸ばす。シーン6：薄暗い映画館、両手で包み込まれたボールの表面を、巨大スクリーンのかすかな光が漂うように移ろう。シーン7：激しく振動するスピーカーのコーンの上に置かれたボールが、クライマックスで中央に回転するDJターンテーブルへマッチカットする。シーン8：野外キャンプの夜、背景は暖かな焚き火と揺れるストリングライトのボケへと変わる。フィナーレ：最後のダウンビートでボールがフレーム外へ投げ上げられ、真っ黒にカット、黒地に白のミニマルな「seedance」が中央に現れる。ビート同期のマッチカット編集、最高峰のシネマティックなカラーグレーディング、フォトリアルなガラスの屈折、レイトレーシング、グローバルイルミネーション。被写体は極めてシャープ、背景は強いモーションブラー。
```

<a id="category-2"></a>

### ワンテイク撮影 (1)

### No. 1: スチームパンクの時計仕掛け — 30秒ワンテイク

- **Category:** `ワンテイク撮影`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### Description

連続的な旋回とパススルーのカメラワークで撮る、30秒のスチームパンク・ミニチュア3Dシーケンス。

#### Prompt

```text
洗練されたスチームパンクとヴィンテージ・ミニチュアの様式による、ハイエンドで深くシネマティックな30秒の3Dモーショングラフィックス・シーケンス。途切れなく流麗に旋回し、対象を通り抜けていくカメラワーク。[0-10s] アンティークな真鍮の時計文字盤のマクロクローズアップが、一層また一層と噛み合い回転する歯車のリングとボリューメトリックな霧へと展開していく。カメラは歯車を貫いて下降し、風化した古書が積み重なるミニチュアの峡谷から機械仕掛けのオーニソプター（羽ばたき飛行機）が螺旋を描いて舞い上がる。[10-20s] カメラは前進しながらオーニソプターを追い、高速回転する装飾的な真鍮のゾートロープへとシームレスに入り込み、疾走する機械仕掛けの馬の光が投影される。その光が飛び出し、シーンは歯車の森を抜けてきらめく銅のレールを走る真鍮の浮遊ケーブルカーへと変わり、シネマティックなゴールデンアワーの光に包まれる。[20-30s] カメラは優雅に下へパンし、下方には深いブルーのガラス質の波を切り裂く精巧な時計仕掛けの木造帆船が現れ、それは発光する巨大な月へと姿を変え、ランタンを掲げた探検家のシルエットが星空の下、水晶の鉱脈が走る尾根を踏破していく。カメラは幻想的な雲の中をなめらかに螺旋を描いて戻り、時を刻む真鍮の時計文字盤へと帰る。超リアルな機械の質感、豊かな真鍮とゴールドのトーン、シネマティックな浅い被写界深度、なめらかでシームレスなパススルーのカメラワーク、壮大で幻想的な冒険の雰囲気。
```

<a id="category-3"></a>

### 複数画像リファレンス (3)

### No. 1: 窓を抜けて異世界へ（参考画像5枚）

- **Category:** `複数画像リファレンス`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
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

5枚の参考画像で駆動するブランドコンセプトのショートフィルム。窓を次々と抜け、異なる世界へ滑り込んでいく。

#### Prompt

```text
シネマティックなブランドコンセプトのショートフィルム。@image1 が最初のフレーム。画面がわずかに震え、カメラが押し込むと窓の外で木々の影が後方へ流れ去り、その退きが加速していく。そして突然 @image2 へカット、速度が緩やかになり、カメラは小川に沿ってゆっくりと滑り、鳥のさえずりと花。カメラは水中へ潜り——泡の音——オレンジ色のクラゲが優雅にレンズの前を漂い過ぎる @image3。カメラが引くと小魚がすっと横切り、水の中から窓の中へ泳ぎ込む @image4、一人の少女があたりを見回し、彼らを見つめる。カメラが引いてピントを外し、再びシャープに合わせ、音楽のリズムに合わせて切り替わる。中国庭園の格子窓 @image5 に光が巡り、教会のステンドグラス、飛行機の丸窓、ドーム状の天窓、出窓、ルーバーブラインド、ヨーロッパ風の屋根窓、ドアの覗き穴、カメラのファインダー、鳥の目、人間の目のクローズアップ。人間の目に落ち着き、目が閉じ、画面は暗転、そして突然開く——アクセントのビートで「seedance」が目の中央に現れる。
```

### No. 2: ワンテイクで六つの部屋を抜けて（参考画像8枚）

- **Category:** `複数画像リファレンス`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
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

8枚の参考画像で駆動し、一続きのワンテイクで人物を追い、雰囲気の移り変わる六つの部屋を抜けていく。

#### Prompt

```text
一続きのワンテイク。カメラは黒いコートの人物（リファレンス @image1）を、色調と雰囲気の異なる六つの連なる部屋を通って左から右へなめらかに追う。どの部屋も同じ構造を共有する。白い壁、明るいヘリンボーンの木の床、フランス窓（掃き出し窓）、白いシアーカーテン（リファレンス @image2）だが、外の眺めと雰囲気は毎回異なる。主人公は一定のペースで歩き、開いたすべてのドアを通り抜ける。0-5s 部屋その一、アメコミ調のバトル：主人公はキャラクター（@image3）と戦い、相手は倒される。5-10s 部屋その二、温かさ、フェルトクラフト風、窓の眺めはヒマワリ畑（@image4）、暖かなオレンジの柔らかい光、ヒマワリを描く画家（@image5）、主人公は入室と同時にフェルト風に変わる。10-15s 部屋その三、悲しみ、白黒コミックのストップモーション、外は雨、冷たいグレーの光、一人きりで床に座り膝を抱える人物、応答のない着信で光るスマートフォン。入室すると照明が明滅して消え、また点き、部屋は色づき、花々が一斉に咲きほころぶ。15-20s 部屋その四、歓喜、海に沈んだ部屋（リファレンス @image6）、主人公はサンゴと魚の間で透明になっていく。20-25s 部屋その五、驚き、窓の眺めは花火が広がる夜空（リファレンス @image7）、色とりどりの明滅する光、主人公は歓声を上げる群衆に巻き込まれる。25-30s 真っ白な何もない部屋、主人公が指を鳴らす——指パッチンのSE——画面が暗転し、中央に「seedance」（リファレンス @image8）。シネマティックなクオリティ、ハイファッション広告のスタイル、照明は完全に窓の眺めによって決まり強い感情のコントラストを生む、画面内に文字なし。
```

### No. 3: 多言語ヒップホップ「Hello」MV

- **Category:** `複数画像リファレンス`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

1枚の参考画像から組み立てる海辺のヒップホップMV。リードが8言語で「hello」をラップし、リップシンクは正確、ビートでハードカット。

#### Prompt

```text
シネマティックなヒップホップ／ラップのミュージックビデオ、フォトリアルなクオリティ、ハイエンドなトーン、海辺のセッティング。@image1 からフレームを組み立てる。打ち寄せる波の黄金の砂浜でバンドが演奏する——濡れた砂の上でスタンドマイクを握るリードボーカル、左に一人、右に一人のギタリスト、後方にドラマー。背後には広大な海岸線、うねる波、水面にきらめく暖かなゴールデンアワーの太陽、宙に漂う海霧。赤いトラックスーツのリードがカメラに向かってラップする——唇と顎はすべての言葉に正確に同期し、頭はビートに合わせて力強く打ち込む。明るく、パンチが効き、速く、自信に満ちたラップ。ビートでハードカット、切り替えごとに二重のコントラスト（ショットサイズとタイプが同時に変わる）。歌詞（リードが各言語で順番に「hello」を歌い、リップシンクは正確）：英語「Hello」、中国語「你好」、日本語「こんにちは」、韓国語「안녕하세요」、ポルトガル語「Olá」、タイ語「สวัสดี」、スペイン語「Hola」、アラビア語「مرحبا」。8つのハードカット・ショット（ローアングルのワイドな確立ショット、カメラへのラップのクローズアップ、ギターの弦のマクロインサート、3/4の忍び寄る旋回、岸辺での横移動トラッキング、ドラマーのティルトアップ、リードへのタイトな寄り、バンド全員への堂々たる寄り）、1ショットにつき1言語。ホワイトバランス4000K、ティール＆アンバーのグレーディング、35mm、浅い被写界深度、フィルムグレイン、海霧、ゴールデンアワーのフレア。上質な質感、正確なリップシンク、字幕なし、テキストオーバーレイなし、ハードカットのみ、合計20秒。
```

<a id="category-4"></a>

### 動画編集 (2)

### No. 1: 動画編集 — 主役以外を全員消す

- **Category:** `動画編集`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### Description

リファレンス動画の編集：元クリップから主人公以外の全員を消し去る。

#### Prompt

```text
動画編集：@video1 の中の主人公以外の全員を取り除く。
```

### No. 2: 蒸気機関車がスクリーンを突き破る（動画編集）

- **Category:** `動画編集`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-reference1.mov" controls muted width="360"></video>

#### Description

@video1 の古い映画館クリップをそのまま完全に保ち、スクリーンを突き破って幕を引き裂く蒸気機関車だけを加える動画編集。衝突の瞬間に白黒がフルカラーへ切り替わる。

#### Prompt

```text
超リアルなシネマティック・リアリズムのスタイルで、フォトリアルな実写の質感を持ち、実在の物体（蒸気機関車）が飛び出してくる現実的な説得力を強調する。CGIのつるつる感／ゲームエンジン／様式化された3Dは一切なし。@video1 の元の構図、上映ホールの照明、ハンドヘルドカメラの状態、そして自然な不完全さを保つ。ソース動画をロック：@video1 を完全にそのまま下地として保持する（旧式の上映ホール、後ろから見た帽子をかぶった観客の列、映写機の円錐状の光線、スクリーン、環境光、色調、ハンドヘルドの動き、すべて変えない）。加えるのは次のものだけ：スクリーンから飛び出す機関車、それがもたらす光と影の変化、スクリーンの引き裂き、そして上映ホールと最前列の観客へのわずかな物理的衝撃。色変化のルール（核心となる追加）：冒頭は @video1 の元の白黒の古いフィルムの質感（グレイン／傷／ちらつき／モノクロ）を厳密に保つ。機関車が本当にスクリーンを突き破って現実へ飛び出す、まさにその瞬間、映像は白黒から完全でリアルなフルカラーへ突然切り替わり、色は機関車が破って出た地点を中心に衝撃波のように画面全体へ広がる（機関車の黒い鋼鉄の車体、赤銅色のボイラー、オレンジ黄色の蒸気ランプの光、木造車両の暖かな茶色、白灰色の蒸気、そして上映ホールの暖かな茶色がそれに応じて色づく）。色の切り替わりはスクリーンを破って飛び出す瞬間と精密に同期し、その後はフォトリアルなカラーが最後まで保たれる。スクリーンの引き裂きをロック：スクリーンは本物の白い上映用の布で、本物の布地の張力を持つ。機関車が飛び出すと、機関車前面の輪郭に沿って布は強引に引き裂かれ、放射状の裂け目ができ、その縁は後ろへめくれ上がり、ちぎれた布の繊維が飛び散る。被写体：旧式の蒸気機関車の前面が強引にスクリーンから飛び出す。黒い鋼鉄の車体、円筒形のボイラー、前面の排障器（カウキャッチャー）、白灰色の蒸気を噴き出す煙突、明るいヘッドランプ、金属表面には本物の摩耗、油汚れ、リベット、濡れた反射があり、圧倒的な重量と慣性で前へ突進してくる。カメラ：@video1 の元のハンドヘルドの動きを完全に受け継ぎ、スムージングも、リタイミングも、再構図もしない。飛び出す機関車は常にスクリーンとホール空間の中に正しくロックされ、正しい視差、オクルージョン、接地の影を保つ。サウンド：音楽なし、本物の現場の音効果だけを保ち、@video1 の上映ホールの環境音（映写機のカタカタ音、観客のざわめき）を受け継ぎ、布が裂ける音、蒸気が噴き出す音、鋼鉄の車輪の機械的な轟音、衝撃の爆風を加える。総尺は @video1 とまったく同じ。機関車そのものとその物理的な相互作用、スクリーンの引き裂き、破って出る瞬間の色変化以外は、何も加えない。スローモーションなし、魔法めいた感じなし、様式化されたホラーなし。最終的な仕上がりは、旧い上映ホールで本物のカメラが偶然とらえた「一台の機関車がスクリーンを突き破り、白黒が一瞬でカラーに変わる」不気味でありながらリアルな映像のように見えるべきである。
```

<a id="category-5"></a>

### リファレンス誘導チュートリアル (1)

### No. 1: カプセルコーヒーマシンのセットアップ・チュートリアル（参考画像6枚）

- **Category:** `リファレンス誘導チュートリアル`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
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

カプセルコーヒーマシンのセットアップと使い方を解説する30秒チュートリアル。ナレーション付きの、参考画像で誘導する6ステップ——給水タンクの取り付けから初回のすすぎまで。

#### Prompt

```text
カプセルコーヒーマシンの取り付けと使い方を解説する30秒のチュートリアル動画。0-2s：オープニングのタイトルカードには「seedance カプセルコーヒーマシン セットアップ・チュートリアル」と表示される。2-5s、ステップ1：給水タンクの取り付け、リファレンス @image1、やや高い角度からのミディアムショット、本体の背面、給水タンクを本体背面のスロットに合わせてカチッとしっかりはまるまでまっすぐ下へ押し込む。タンク底部のクリップが本体のスロットにどう合うかを明確に見せ、タンクの透明部分から水位線が見える。ナレーション「まず、給水タンクを取り付けます。タンクをマシン背面のスロットに合わせてください。カチッと音がすれば固定完了です。」。5-9s、ステップ2：ドリップトレイの取り付け、リファレンス @image2、正面からのクローズアップ、本体の前面下部、ドリップトレイを底部のガイドレールに水平に、完全に収まるまでスライドさせる。ナレーション「次に、ドリップトレイを取り付けます。トレイを底部のレールに合わせてください。」。9-13s、ステップ3：使用済みカプセル回収ボックスの取り付け、リファレンス @image3、やや低い角度からのクローズアップ、ドリップトレイの下の空洞、回収ボックスをくぼみに合わせてドリップトレイと面一になるまで押し込む。ナレーション「続いて、カプセル回収ボックスを差し込みます。使用済みのカプセルはここへ自動的に落ちます。」。13-18s、ステップ4：初回の給水、リファレンス @image4、側面からのクローズアップ、本体の上部／背面にある給水タンク、タンクの蓋を開けてMAX水位線まできれいな水を注ぎ、蓋を閉じる。水位線を強調。ナレーション「タンクの蓋を開け、きれいな水を注ぎます。最高水位線を超えないよう注意し、タンクの蓋を閉じてください。」。18-25s、ステップ5：電源を入れる、リファレンス @image5、正面からのミディアムショット、本体の前面、電源コードを差し込み電源ボタンを押す。インジケーターランプが点滅から点灯へ変わる（予熱完了）。ナレーション「電源をつなぎ、電源ボタンを押します。インジケーターランプが点滅を始めたら予熱中の合図です。ランプが点灯に変われば、マシンの準備完了です。」。25-30s、ステップ6：初回のすすぎ（カプセルなし）、リファレンス @image6、ミディアムショットから正面斜めのクローズアップへ、カプセルを入れずに直接抽出ボタンを押し、お湯を流して配管をすすぐ。「カプセル不要」の注意点を強調。ナレーション「最後のステップ、初回のすすぎです。このステップにカプセルは不要で、抽出ボタンを押すだけです。すすぎが終われば、あなたのコーヒーマシンはすぐに使えます。」
```

<a id="category-6"></a>

### マルチモーダルリファレンス（画像＋動画） (1)

### No. 1: フルーツクッキーのCM（画像1枚＋動画リファレンス6本）

- **Category:** `マルチモーダルリファレンス（画像＋動画）`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
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

明るくカラフルな、4つのフレーバー——ストロベリー、アップル、グレープ、オレンジ——のフルーツクッキーCM。1枚の画像リファレンスと6本のモーション／カメラ動画リファレンスから構築し、力強いビートでハードカット。

#### Prompt

```text
フルーツクッキーを主役にした、明るくカラフルなCMスタイル。フレーバーは4種——ストロベリー、アップル、グレープ、オレンジ。ストロベリー味のリファレンスは @image1。クッキーと対応するフルーツは強い秩序を持つ幾何学的な配列に並び、全体の画面はクリーンで上質、ハイエナジー。オープニングはフルーツが中央のクッキーの周りを高速で旋回し、視覚的な焦点を素早く確立する——@video1 の構図を参照——力強い音楽のビートでカットイン。次に異なるフレーバーのクッキーがスパイラルの軌道に沿ってレンズへ向かって前進し、明確な空間の奥行きを形づくる——@video2 のモーションとカメラワークを参照——BGMに合わせてビートで色とフレーバーを切り替える。クッキーの配列が左右にパンし、面から面への高速なカットで、ストロベリー、アップル、グレープ、オレンジのフレーバーが交互に現れ、画面はリズムに合わせて素早くジャンプカットする——@video3 の動きを参照。中盤では上下のパンを加え、整然としたクッキーの配列が機械のように垂直に上下する——@video4 の動きを参照——秩序の美しさと製品の豊かさを際立たせる。クライマックスでは1枚のクッキーが二つに割られ、その瞬間スローモーションに入り、フルーティーなフィリングが弾け出し、くずが飛び散り、みずみずしさと粒感のインパクトが増幅される——@video5 の爆発エフェクトを参照——その後すぐに速いテンポの編集へ戻る。エンディングでは英語のテキスト「Fresh on Seedance, made for viral vision」が導入され、一文字ずつ素早く次々と登場し、力強いリズミカルなテキストモーションと製品のフリーズフレームを伴う——@video6 を参照——4つのクッキーのフレーバーがフルーツと整然と並び、同期して弾んで最後のブランドを前面に押し出す締めとなり、画面は若々しく、エネルギッシュで、おいしそうで、シェアしたくなる広告の雰囲気に満ちる。
```

<a id="category-7"></a>

### 画像リファレンス (1)

### No. 1: 砂漠のツノトカゲとグレープフルーツ（3D広告）

- **Category:** `画像リファレンス`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

明るくつややかな3DアニメーションCM。干上がった砂漠のツノトカゲがグレープフルーツを見つけて噛みつくと、果汁の津波が砂漠を夏の海に変える。1枚のキャラクターリファレンスから構築。

#### Prompt

```text
3DアニメーションのCMスタイル、明るく透き通った色彩。果肉と果汁は強烈に爽やかでインパクトのある感触でなければならない。全体の雰囲気は、少し誇張したユーモアを添えた高品質なCMアニメーションの短編のよう。砂漠のツノトカゲのキャラクターはかわいらしく、生き生きとして表情豊か、リファレンスは @image1。画像の質感は、参考画像にある柔らかな自然光、繊細な産毛／肌の質感、夢のようなマクロの被写界深度、そしてリアルでありながらどこか幼さの残る感触を参照する。0-3s：灼熱の太陽に焼かれた砂漠、陽炎に空気が揺らめき砂は焼けつくように熱い。砂漠のツノトカゲが焼けた砂の上に伏せ、舌をわずかに出し、目はうつろで、ほとんど干からび、数歩ごとにふらつき、今にも「蒸発」してしまいそう。3-6s：突然立ち止まり、鼻をひくつかせ、見下ろすと、ひんやりとみずみずしく露をまとったグレープフルーツが砂に半分埋もれ、砂漠の奇跡のようにきらめいているのを見つける。トカゲの目が一瞬でまん丸に見開かれる。6-8s：飛びかかり、両手でグレープフルーツをぎゅっと抱きしめ、顔全体を果皮に押しつけ、「やっと生き返った」という至福の表情。フレームは1秒間ホールドされ、誇張したおかしな印象的な見せ場をつくる。8-11s：顔を上げ、口を開けて大きくかぶりつく。グレープフルーツの果皮が裂け、みずみずしい果肉が透き通った光沢を放ち、次の瞬間、果汁が津波のように噴き出す。11-16s：オレンジピンクの、透き通ってきらめくグレープフルーツの果汁が激しく噴き出し、砂丘を流れ落ちて砂漠全体を一気に飲み込む。乾いた黄色い砂は瞬く間にひんやりときらめく果実の香りの夏の海へと変わり、サボテンや岩、小さな砂丘が果汁の波にのまれ、トカゲの表情は歓喜から恐怖へと変わる。16-20s：「グレープフルーツの海」にほとんど溺れそうになりながら、半分のグレープフルーツを浮き輪のように必死に抱えて浮かび、ずぶ濡れの頭を突き出して呆然とする。20-24s：白い画面にカット。ブランド名とスローガンがど真ん中に現れる。「Seedance グレープフルーツ——かじれば果肉、あふれ出すのは夏。」ナレーションが一文まるごと読み上げる。24-30s：白からカットバック。砂漠のツノトカゲは今や浮かぶグレープフルーツの上でくつろぎ、小さなサングラスをかけ、ストロー付きのカップを手に、「果汁の海」の上をのんびりとバカンス気分で漂い、周りにはオレンジ色の果肉、小さな氷、爽やかな水しぶき、澄んだ青空が浮かぶ。ムードは「サバイバル」から「バカンス」へ移り、最後にトカゲは満足げにグレープフルーツにもたれかかり、カメラが引いて、爽やかで明るく茶目っ気のある夏のフレームでフリーズする。
```

<a id="category-8"></a>

### 画像リファレンス（シネマティック） (1)

### No. 1: 酔っ払いの屋上落下（ブラックコメディ短編）

- **Category:** `画像リファレンス（シネマティック）`
- **Source:** `official`
- **Author:** Volcengine Ark
- **Language:** `ja`
- **Video:** [View](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4" controls muted playsinline width="720"></video>
- **Source Link:** [View](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-reference1.png" width="180" referrerpolicy="no-referrer">

#### Description

約30秒のブラックコメディ・シネマティック短編。ぽっちゃりしたほろ酔いの男が屋上から転落し、命綱をつかみ、窓を突き破って、そのまま眠りにつく。キャラクターは1枚の参考画像から。轟音と完全な静寂のハードカットで構築。

#### Prompt

```text
[酔っ払いの屋上パニック——縁から転落——窓越しにロープをつかむ——その場で気絶 | ブラックコメディ短編 | 約30秒] 一行のあらすじ：ぽっちゃりしてかわいい、酔った中年男がビルの屋上でハンバーガーを食べビールを飲んでいる。立ち上がって伸びをした拍子に足を滑らせて転落し、パニックの中で命綱のロープをつかみ、すぐさま窓を突き破って室内へ突入、一秒ぼうっと呆然とした後、その場に横になってぐっすり眠り込む。参考画像 @image1——ぽっちゃりしてかわいい、酔った中年男：丸くずんぐりした体型で大きな丸いビール腹を突き出し、背は低く、酔いで動きはだらしなく、鈍く、ふらついている。丸顔、二重あご、酒で赤らんだ頬と鼻、細く糸のように狭めた目はとろんとしたまなざし、手入れされていない短い無精ひげの輪、ぼさぼさの髪、間の抜けた、かわいくて能天気な表情。ハンバーガーのソースがついた白いタンクトップの肌着を丸い腹の上にだらしなく垂らし、古いジーンズをはき、ゆるいスリッパを引きずって歩き、いつも食べかけのハンバーガーを手に握りしめている。作品全体にこの一人のキャラクターしか登場せず、参考画像と100%一致する。全体のルック：夜のサイバーパンクな巨大都市、ガラスと鋼の摩天楼が密集する森、ネオンサイン（シアン／マゼンタ／エレクトリックブルー）、ホログラムの広告板、濡れて反射する地面、ボリューメトリックな霧、遠くを走る空飛ぶ車の光跡とドローン。リアルな実写の質感、物理的なシネマレンズ、3Dレンダリング／ゲームエンジン／アニメ調は一切なし。カメラはハンドヘルドとジブ／ドローンを併用する。転落後、カメラは彼とともに急降下し、ビルの外壁とネオンが上方へ流れてスピード感を伝える、24-35mmのワイドスクリーン・シネマレンズの質感、180度シャッターのモーションブラー。サウンドデザインこそブラックコメディの鍵：「巨大な轟音」と「完全な静寂」の間で何度もハードカットする。全編を通して本物の重力。絵コンテ（約30秒）：S1（0-4s）冒頭、咀嚼の大クローズアップ（音あり）男の顔が画面いっぱいに広がり、大口でハンバーガーを頬張り、満足げな酔いの状態。S2（4-9s）ワイドショットへ引く、伸びをする -> 足を滑らせて転落（音あり）ふらつきながら立ち上がり、大きく伸びをして体をのけぞらせ、バランスを崩し、足が滑って屋上の縁を後ろ向きに越えて転がり落ちる。ハンバーガーは決して離さず、パニックの「えぇ——っ！」とともに。S3（9-12s）驚愕の顔のクローズアップへカット（大きな叫び、巨大な轟音）酔った目が真ん丸に飛び出し、二重あごがくしゃっと寄り、口を大きく開けて「ああ——っ！！」と絶叫、風がうなる。S4（12-16s）目線の高さのロングショットへカット（完全な静寂）向かいのビルから見ると、白い小さな人影が高層ビルから真下へ落ちていき、ネオンの街は広大で無関心、この完全な静寂が一秒前の巨大な轟音とブラックコメディのコントラストをつくる。S5（16-21s）顔のクローズアップへカット（絶叫）-> ロープをつかむ、なおも絶叫し、両手を宙で振り回し、突然命綱のケーブルをつかむ。ケーブルは彼の重みでビンと張りつめてしなり、絶叫はぷつりと途切れ、彼はガクンと引かれて振り出される（ロープをつかむ瞬間に短いスローモーション）。S6（21-26s）室内アングルへカット（静か）-> ガラスが砕ける -> 彼が突っ込んでくる、室内は最初エアコンの低いうなりだけの静けさ、次の瞬間ガラスが爆発的に内側へ砕け散り（短いバレットタイム）、酔っ払いがハンバーガーごと窓を突き破り、破片が放射状に飛び散り、ネオンの光が流れ込み、彼は室内の床／ソファへ重々しく激突し、割れたガラスがチリンチリンと鳴る。S7（26-30s）エンディング、驚いて呆然の一秒 -> 眠りにつく、男は床に大の字で伸び、割れたガラスにまみれ、なおもハンバーガーを握りしめ、ゆっくりと目を開け、ぼんやりと、呆然と驚いたまま丸一秒、あたりを見回して「ここはどこだ？」と考えているかのよう。その後、酔いが勝ち、まったく気にせず口をぺちゃぺちゃ鳴らし、ハンバーガーを胸に抱え込み、寝返りを打って、その場に横になりぐっすり眠り込み、軽くいびきさえかき始める。カメラが引いてフリーズし、暗転へハードカット。現場の同時録音のみ、音楽なし、字幕なし。核心は「巨大な轟音」と「静寂」の間で何度もハードカットすること。
```

<a id="category-9"></a>

### ECライブコマース (8)

### No. 1: 服装上身展示

- **Category:** `ECライブコマース`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のモデル（顔は画像1のクローズアップ、メイクとスタイリングは画像2の全身写真を参考）を主体に、縦長9:16、ファッションリアリズム風で、30秒の服装展示ショートムービーを生成。

#### Prompt

```text
画像1のモデル（顔は画像1のクローズアップ、メイクとスタイリングは画像2の全身写真を参考）を主体に、縦長9:16、ファッションリアリズム風で、30秒の服装展示ショートムービーを生成。
Shot 1：ミディアムショット、モデル@Image 1が横向きに立ち、突然振り返ってトレンチコートの裾を振り回す。単色スタジオ背景の柔らかいトップライトが輪郭を浮かび上がらせる。カメラがゆっくりとズームイン。（軽快なファッショナブルなエレクトロミュージックが始まる）<衣擦れの音>。
Shot 2：クローズアップ、カメラが滑らかに横パンし、肩ラインの縫い目とラペルの縫製ディテールをなぞる。サイドバックライトが生地の光沢を際立たせる。
Shot 3：フルショット、モデル@Image 1が自然に歩き出し、全体のシルエットとドレープ感を展示。カメラが滑らかにトラッキング。
Shot 4：ミディアムショット、モデル@Image 1が襟を整えながら振り返る。カメラがゆっくりと半周ドリーアラウンド。
Shot 5：ミディアムクローズアップ、モデル@Image 1が微笑みでポーズを決める。カメラがゆっくりズームアウトして終了。（音楽が収束）。
【制約】：モデルの顔、メイク、スタイリングは画像1、画像2に準拠し、全編を通して一貫させる。スタジオ背景とトップライトは固定で変更しない。
【共通制約】：字幕なしを維持。ロゴを生成しない。ウォーターマークを生成しない。各ショットは一種類のカメラワークのみを使用。人物は自然な微動を伴い、石像のように静止しない。
```

### No. 2: 靴のディテール

- **Category:** `ECライブコマース`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、高級感のある質感リアリズム風、主体は本革のショートブーツ一足、30秒の靴ディテールショートムービーを生成。

#### Prompt

```text
縦長9:16、高級感のある質感リアリズム風、主体は本革のショートブーツ一足、30秒の靴ディテールショートムービーを生成。
Shot 1：マクロクローズアップ、ショートブーツがマットな石台の上に静置される。カメラがゆっくりと靴先の縫い目にズームイン。クールトーンのサイドライトが革をなぞる。（低音の雰囲気のあるエレクトロミュージックが始まる）<革が軽く触れる音>。
Shot 2：クローズアップ、カメラが靴の周りを一周ドリーアラウンドし、流線形のシルエットとヒールのカーブを展示。レフ板で補光。
Shot 3：マクロクローズアップ、固定カメラ位置、指先がタンをめくって内側のロゴと縫い目を見せる。
Shot 4：ミディアムショット、ブーツを履いた足が地面を踏み、かかとを軽く上げる。カメラが俯瞰で下に向かい、接地の瞬間を捉える。<ヒールが地面を叩く音>。
Shot 5：クローズアップ、カメラがゆっくりズームアウトし、靴全体をフレームに収めて終了。（音楽が収束）。
【制約】：ショートブーツのデザイン、革のテクスチャ、カラーリングは全編を通して一貫させる。石台とクールトーンのライティングは固定。左右の靴の形状が不一致にならないようにする。
【共通制約】：字幕なしを維持。ロゴを生成しない。ウォーターマークを生成しない。各ショットは一種類のカメラワークのみを使用。人物は自然な微動を伴い、石像のように静止しない。
```

### No. 3: バッグの開閉デモ

- **Category:** `ECライブコマース`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、シンプルで高級なリアリズム風、主体は通勤用ハンドバッグ一款、30秒のバッグ機能デモンストレーションショートムービーを生成。

#### Prompt

```text
縦長9:16、シンプルで高級なリアリズム風、主体は通勤用ハンドバッグ一款、30秒のバッグ機能デモンストレーションショートムービーを生成。
Shot 1：ミディアムショット、ハンドバッグが単色の台の上に正面を向いて立つ。カメラがゆっくりと金属製のロック部分にズームイン。柔らかいトップライト。（爽やかな軽音楽が始まる）。
Shot 2：クローズアップ、両手がファスナーを開きメインコンパートメントを広げる。カメラが俯瞰で、内部の仕切りとカードポケットを展示。<ファスナーを滑らせる音>。
Shot 3：クローズアップ、手がノートパソコンと水筒を順番に入れる。カメラが滑らかに横パンし、容量を展示。
Shot 4：ミディアムショット、片手でバッグを持ち上げ、ハンドルの耐荷重としっかりした形状感を展示。カメラがローアングル。
Shot 5：ミディアムショット、ロックを閉めてバッグを元の位置に戻す。カメラがゆっくりズームアウトして終了。（音楽が収束）。
【制約】：ハンドバッグの色、金具、形状は全編を通して一貫させる。台とトップライトは固定。開閉動作は連続して途切れないようにする。
【共通制約】：字幕なしを維持。ロゴを生成しない。ウォーターマークを生成しない。各ショットは一種類のカメラワークのみを使用。人物は自然な微動を伴い、石像のように静止しない。
```

### No. 4: ジュエリー

- **Category:** `ECライブコマース`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、豪華で精巧なリアリズム風、主体はダイヤモンドネックレス一本、30秒のジュエリー展示ショートムービーを生成。

#### Prompt

```text
縦長9:16、豪華で精巧なリアリズム風、主体はダイヤモンドネックレス一本、30秒のジュエリー展示ショートムービーを生成。
Shot 1：マクロクローズアップ、ネックレスが黒ベルベットのトレイの上に置かれる。カメラがゆっくりとメインストーンにズームイン。スポットライトがファイアー（輝き）を引き出す。（優雅な弦楽器音楽が始まる）<微かな金属の澄んだ音>。
Shot 2：クローズアップ、カメラがメインストーンの周りを半周ドリーアラウンドし、多角的な光の反射を捉える。背景は暗く。
Shot 3：ミディアムクローズアップ、モデルの首にネックレスを着用。カメラが鎖骨からペンダントへと上下に移動。柔らかい光で顔を補光。
Shot 4：マクロクローズアップ、固定カメラ位置、ペンダントが呼吸に合わせて軽く揺れ、きらめく。
Shot 5：クローズアップ、カメラがゆっくりズームアウトし、輝きに焦点を合わせて終了。（弦楽器音楽が収束）。
【制約】：ネックレスのデザイン、ダイヤモンドのカット、セッティングは全編を通して一貫させる。黒ベルベット背景とスポットライトのライティングは固定。着用シーンの首の肌色はスタジオシーンと一致させる。
【共通制約】：字幕なしを維持。ロゴを生成しない。ウォーターマークを生成しない。各ショットは一種類のカメラワークのみを使用。人物は自然な微動を伴い、石像のように静止しない。
```

### No. 5: 家電展示（ハイスピードブレンダー）

- **Category:** `ECライブコマース`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、明るいキッチンの生活リアリズム風、主体はハイスピードブレンダー一台、30秒の家電デモンストレーションショートムービーを生成。

#### Prompt

```text
縦長9:16、明るいキッチンの生活リアリズム風、主体はハイスピードブレンダー一台、30秒の家電デモンストレーションショートムービーを生成。
Shot 1：ミディアムショット、ブレンダーが薄色の台の上に置かれる。カメラがゆっくりと操作パネルにズームイン。朝日が斜めに差し込む。（明るい生活軽音楽が始まる）。
Shot 2：クローズアップ、手がフルーツと氷をカップに入れる。カメラが俯瞰でカップの口元を捉える。<食材が落ちる音>。
Shot 3：クローズアップ、スタートボタンを押し、刃が高速回転して撹拌する。カメラが固定位置でカップの壁に近づく。<ブレンダーの轟音>。
Shot 4：ミディアムショット、滑らかなスムージーをグラスに注ぐ。カメラが滑らかに横パンし、液の流れを追う。
Shot 5：ミディアムクローズアップ、完成したスムージーと本体が同じフレームに収まる。カメラがゆっくりズームアウトして終了。（音楽が収束）。
【制約】：ブレンダー本体の色、パネル、カップは全編を通して一貫させる。キッチン台と朝の光は固定。スムージーの質感は前後で連続させる。
【共通制約】：字幕なしを維持。ロゴを生成しない。ウォーターマークを生成しない。各ショットは一種類のカメラワークのみを使用。人物は自然な微動を伴い、石像のように静止しない。
```

### No. 6: ベビー用品

- **Category:** `ECライブコマース`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、優しく癒しのある生活リアリズム風、主体は赤ちゃん用保温哺乳瓶一款、30秒のベビー用品展示ショートムービーを生成。

#### Prompt

```text
縦長9:16、優しく癒しのある生活リアリズム風、主体は赤ちゃん用保温哺乳瓶一款、30秒のベビー用品展示ショートムービーを生成。
Shot 1：ミディアムクローズアップ、哺乳瓶がベビールームの柔らかいマットの上に立つ。カメラがゆっくりと防脹気用乳首にズームイン。暖色の柔らかい光。（優しいピアノ音楽が始まる）。
Shot 2：クローズアップ、手がキャップを回して開け、広口デザインと目盛りを展示。カメラが滑らかに横パン。<軽やかにキャップを回す音>。
Shot 3：クローズアップ、お湯を入れた後、手が瓶の側面に触れて保温を感じる。カメラ固定位置。
Shot 4：ミディアムショット、母親が哺乳瓶を持ち、軽く振って温度を確かめ、授乳の準備をする。カメラがゆっくり上下に移動。<水が軽く揺れる音>。
Shot 5：ミディアムクローズアップ、哺乳瓶と柔らかいぬいぐるみが同じフレームに収まって終了。カメラがゆっくりズームアウトして終了。（音楽が収束）。
【制約】：哺乳瓶の色、瓶の目盛り、乳首のデザインは全編を通して一貫させる。ベビールームの暖色光と柔らかいマット背景は固定。画面のトーンは柔らかく温かみを保つ。
【共通制約】：字幕なしを維持。ロゴを生成しない。ウォーターマークを生成しない。各ショットは一種類のカメラワークのみを使用。人物は自然な微動を伴い、石像のように静止しない。
```

### No. 7: 食品ギフトボックス

- **Category:** `ECライブコマース`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、節慶で精緻なリアリズムスタイル。主体は中華菓子ギフトボックス。30秒の食品ギフトボックス展示ショート動画を生成。

#### Prompt

```text
縦長9:16、節慶で精緻なリアリズムスタイル。主体は中華菓子ギフトボックス。30秒の食品ギフトボックス展示ショート動画を生成。
Shot 1：中景、赤と金色のギフトボックスが木製テーブルの上に静置され、カメラがゆっくりと金箔押しの表紙に接近、暖色系のサイドライト、（お祝いの国風音楽が始まる）。
Shot 2：クローズアップ、両手がゆっくりと蓋を開けて仕切り菓子を露出、カメラが俯瞰で全体像を撮影、<蓋を開ける音>。
Shot 3：マクロクローズアップ、カメラが滑らかに横移動し、各仕切りの菓子のサクサク皮と餡の質感をなぞる。
Shot 4：中近景、手が一つ菓子をつまんで層を展示、カメラがゆっくりと周回。
Shot 5：中景、ギフトボックスが閉じられリボンが結ばれる、カメラがゆっくりと引き収束、（音楽が収束）。
制約：ギフトボックスの配色、金箔押しの模様と菓子の種類は全編を通して一貫；木製テーブルと暖色系の照明は固定；菓子の配置位置は前後で連続。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 8: デジタルアクセサリー（フラッシュセール風、字幕あり）

- **Category:** `ECライブコマース`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、フラッシュセールの高コントラストリアリズムスタイル。主体はワイヤレスノイズキャンセリングイヤホン。30秒のプロモーションフラッシュショート動画を生成。

#### Prompt

```text
縦長9:16、フラッシュセールの高コントラストリアリズムスタイル。主体はワイヤレスノイズキャンセリングイヤホン。30秒のプロモーションフラッシュショート動画を生成。
Shot 1：クローズアップ、イヤホンがネオングラデーション背景で浮遊回転、カメラが素早く接近、（強力なリズムの電子ドラムビートが始まる）<電源オン音>、【全品直下げ ¥300】。
Shot 2：マクロクローズアップ、カメラがイヤーパッドのヒンジと充電接点にカット、ハードライトのハイライトが掃過。
Shot 3：中景、カメラがイヤホンを装着しドラムビートに合わせてうなずく人にカット、光と影が点滅、【アクティブノイズキャンセリング 40時間駆動】。
Shot 4：クローズアップ、カメラが素早く横移動し充電ケースの開閉を掠める、<磁石の吸着音>、【期間限定タイムセール 先着100名】。
Shot 5：中近景、イヤホンと価格タグが同枠、カメラが素早く引き遠ざかりフリーズ、（ドラムビート収束）【今すぐ購入】。
制約：イヤホンの配色と外形は全編を通して一貫；ネオン背景のカラーパレットは固定；字幕はショット切り替えに合わせてリズム統一で出現、画面は高コントラストのプロモーション感を維持。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

<a id="category-10"></a>

### グルメ / 飲食 (8)

### No. 1: 火鍋の提供

- **Category:** `グルメ / 飲食`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、湯気が立ち食欲をそそるリアリズムスタイル。主体は鴛鴦鍋（二種類スープの火鍋）。30秒の火鍋提供ショート動画を生成。

#### Prompt

```text
縦長9:16、湯気が立ち食欲をそそるリアリズムスタイル。主体は鴛鴦鍋（二種類スープの火鍋）。30秒の火鍋提供ショート動画を生成。
Shot 1：中景、鴛鴦鍋が木製テーブルに運ばれ赤いスープが滾る、カメラがゆっくりと沸騰する油の泡に接近、暖黄色の店内照明、（賑やかな市井の音楽が始まる）<スープのグツグツ音>。
Shot 2：クローズアップ、手が牛の第一胃（トリッパ）を赤いスープに七上八下でくぐらせる、カメラが俯瞰で湯気の立ち上る様子を撮影、<しゃぶしゃぶ音>。
Shot 3：マクロクローズアップ、カメラが滑らかに横移動し、エビすり身、鮮切れ牛肉と野菜盛り合わせをなぞる。
Shot 4：中近景、箸が赤い油をたっぷりまとった肉片をつまみ上げる、カメラが上方向にフォロー、<油滴り音>。
Shot 5：中景、皆が箸を手に同枠で雰囲気満点、カメラがゆっくりと引き収束、（音楽が収束）。
制約：鴛鴦鍋の様式、スープの色と料理の盛り付けは全編を通して一貫；店内の暖色光と木製テーブルは固定；湯気と沸騰状態は持続して貫通。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 2: コーヒーラテアート

- **Category:** `グルメ / 飲食`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、静寂で文芸的なリアリズムスタイル。主体は一杯の手作りラテアートラテ。30秒のコーヒーラテアートショート動画を生成。

#### Prompt

```text
縦長9:16、静寂で文芸的なリアリズムスタイル。主体は一杯の手作りラテアートラテ。30秒のコーヒーラテアートショート動画を生成。
Shot 1：クローズアップ、エスプレッソが抽出されカップに滴り落ちる、カメラがゆっくりとクレマの紋様に接近、窓辺の自然光、（穏やかなジャズ音楽が始まる）<抽出滴下音>。
Shot 2：中近景、手持ちのミルクピッチャーでミルクフォームの注入を開始、カメラが固定位置で液面を水平視、<ミルクフォーム注入音>。
Shot 3：マクロクローズアップ、カメラが俯瞰でミルクフォームがコーヒー表面に広がり葉形の紋様になる様子を撮影。
Shot 4：クローズアップ、手首を軽く震わせ葉脈を描き終える、カメラがゆっくりとカップ口を周回。
Shot 5：中景、完成したラテが持ち上げられ窓辺に置かれる、カメラがゆっくりと引き収束、（音楽が収束）。
制約：ラテアートの模様は注入から成型まで連続して一貫；窓辺の自然光とテーブルは固定；ミルクフォームの質感は明確で断層なし。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 3: デザートを切ると中からとろり（溶岩チョコレート）

- **Category:** `グルメ / 飲食`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦長9:16、濃厚で魅惑的なリアリズムスタイル。主体は一切れの溶岩チョコレートケーキ。30秒のデザートとろりショート動画を生成。

#### Prompt

```text
縦長9:16、濃厚で魅惑的なリアリズムスタイル。主体は一切れの溶岩チョコレートケーキ。30秒のデザートとろりショート動画を生成。
Shot 1：中近景、溶岩ケーキが白磁の皿に盛られ粉砂糖が振りかけられる、カメラがゆっくりと接近、暖色系のスポットライト、（優しくロマンチックな音楽が始まる）。
Shot 2：クローズアップ、フォークがケーキの表面を軽く押し裂け目ができる、カメラが固定位置で接近、<サク皮の軽い裂ける音>。
Shot 3：マクロクローズアップ、ナイフとフォークで切る瞬間チョコレートのとろりがゆっくりと湧き出る、カメラが俯瞰でクライマックスの瞬間を撮影、<濃厚なソースの流れる音>。
Shot 4：クローズアップ、フォークで一切れのとろりをすくい上げ糸を引く、カメラがゆっくりと上下にフォローし糸引きを追う。
Shot 5：中景、とろりケーキとアイスクリームが同枠、カメラがゆっくりと引き収束、（音楽が収束）。
制約：ケーキの外殻ととろりの色と質感は全編を通して一貫；白磁の皿と暖色系のスポットライトは固定；とろりが湧き出るシーンは核心のmoney shotで明確に突出させる必要あり。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 4: 焼き肉の直火焼き

- **Category:** `グルメ / 飲食`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

横長16:9、煙と火の粗野なリアリズムスタイル。主体は炭火で焼く肉串。30秒の焼き肉直火焼きショート動画を生成。

#### Prompt

```text
横長16:9、煙と火の粗野なリアリズムスタイル。主体は炭火で焼く肉串。30秒の焼き肉直火焼きショート動画を生成。
Shot 1：クローズアップ、肉串が炭火網の上に置かれ脂が滴り落ち炎が上がる、カメラがゆっくりと接近、暖赤い炭火の光、（躍動的な焼き肉の雰囲気音楽が始まる）<炭火のじゅうじゅう音>。
Shot 2：マクロクローズアップ、カメラが滑らかに横移動し、肉串のキャラメル色のカリッとした皮と振りかけられたクミンと唐辛子の粉をなぞる。
Shot 3：中景、手が肉串をひっくり返し煙と炎が立ち上る、カメラが手の動きをフォロー、<ひっくり返す爆ぜる音>。
Shot 4：クローズアップ、タレ刷毛が肉串を掃過しタレが染み込む、カメラが固定位置で接近。
Shot 5：中近景、焼き上がった肉串が盛り付けられ持ち上げられる、カメラがゆっくりと引き収束、（音楽が収束）。
制約：肉串の種類と焼き色の程度は前後で連続；炭火と暖赤い光は固定；煙と炎は貫通させて煙火気を醸成。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 5: 日本料理の盛り付け

- **Category:** `グルメ / 飲食`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦画面9:16、極簡禅意リアリズム風、主体は刺身盛り合わせ、30秒の日本料理盛り付けショート動画を生成。

#### Prompt

```text
縦画面9:16、極簡禅意リアリズム風、主体は刺身盛り合わせ、30秒の日本料理盛り付けショート動画を生成。
Shot 1：中景、黒い石の長皿が無垢材の台の上に置かれ、カメラがゆっくりと接近、冷たいトップライト、（清涼な琴の音楽が始まる）。
Shot 2：クローズアップ、手がピンセットでマグロの刺身とシソの葉を正確に配置、カメラは俯瞰構図、<食材を軽く置く音>。
Shot 3：マクロクローズアップ、カメラが滑らかに横移動し、サーモンの脂の筋と氷粒の輝きをなぞる。
Shot 4：中近景、醤油をかけワサビと花びらを添える、カメラがゆっくりと完成品を周回する。
Shot 5：全景、完成した刺身盛り合わせが中央で静止、カメラがゆっくりと引きながら終了、（音楽が収束する）。
制約：刺身の種類、切り身の厚さ、盛り付け位置は全編を通して一貫させる；黒い石皿と冷たいトップライトは固定；構図は極簡で余白を保つ。
共通制約：字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 6: タピオカミルクティー作り

- **Category:** `グルメ / 飲食`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦画面9:16、爽やかで活気あるリアリズム風、主体は手作りタピオカミルクティー、30秒のタピオカミルクティー作りショート動画を生成。

#### Prompt

```text
縦画面9:16、爽やかで活気あるリアリズム風、主体は手作りタピオカミルクティー、30秒のタピオカミルクティー作りショート動画を生成。
Shot 1：クローズアップ、煮上がった黒糖タピオカがカップ底に注がれ壁を伝う、カメラがゆっくりと接近、明るいバーカウンターの光、（軽快なポップミュージックが始まる）<タピオカがカップに落ちる音>。
Shot 2：中近景、手に持ったミルクピッチャーから抽出したての茶と生乳を注ぐ、カメラは固定位置で平視し層を作る、<注ぐ音>。
Shot 3：マクロクローズアップ、カメラは俯瞰で氷を投入し茶とミルクの混ざり合いを起こす、<氷のぶつかる音>。
Shot 4：クローズアップ、シーラーでカップフィルムを圧着しストローを挿す、カメラはストローを挿す動作を追う、<フィルムを突き破る音>。
Shot 5：中景、手に持った完成品のタピオカミルクティーを軽く揺らしタピオカの動きを展示、カメラがゆっくりと引きながら終了、（音楽が収束する）。
制約：ミルクティーの層とタピオカの色は全編を通して一貫させる；バーカウンターの明るい光と背景は固定；製造工程の順序は連続して飛ばさない。
共通制約：字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 7: 手打ち麺の引き延ばし

- **Category:** `グルメ / 飲食`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

横画面16:9、匠の手仕事リアリズム風、主体は手打ち麺の製造、30秒の手打ち麺ショート動画を生成。

#### Prompt

```text
横画面16:9、匠の手仕事リアリズム風、主体は手打ち麺の製造、30秒の手打ち麺ショート動画を生成。
Shot 1：中景、麺台の上でこねられた生地が置かれ、両手で押して休ませる、カメラがゆっくりと接近、暖かいキッチンの光、（明るい民族音楽が始まる）<生地をこねる音>。
Shot 2：クローズアップ、両手で生地を引き延ばし繰り返し折り畳み麺台に打ち付ける、カメラは手の弧線を追う、<麺を打ち付ける音>。
Shot 3：中近景、麺が細く引き延ばされ沸騰した鍋に入る、カメラは俯瞰で湯気が立ち上る様子を撮る、<鍋に入る沸騰音>。
Shot 4：クローズアップ、麺をすくい上げ丼に盛りつけスープをかける、カメラが滑らかに横移動しスープを展示。
Shot 5：中景、ネギを散らし牛肉を並べて完成品にする、カメラがゆっくりと引きながら終了、（音楽が収束する）。
制約：麺の太さと完成品のトッピングは前後で一貫させる；キッチンの暖かい光と麺台は固定；引き延ばし動作は連続して手作りの感覚を体現。
共通制約：字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 8: 朝食シーン（ワンカット）

- **Category:** `グルメ / 飲食`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦画面9:16、温かく癒される生活リアリズム風、主体は中華朝食、30秒の朝食シーンワンカットショート動画を生成。

#### Prompt

```text
縦画面9:16、温かく癒される生活リアリズム風、主体は中華朝食、30秒の朝食シーンワンカットショート動画を生成。
Shot 1：ワンカットで追い撮り、朝日がカーテン越しに食卓に差し込み、カメラがゆっくりと湯気の立つ小籠包に接近、（優しい朝のピアノ音楽が始まる）<蒸籠の蓋を開ける音>。
Shot 2：同じ長回しで滑らかに横移動し、黄金色の目玉焼き、揚げパン、豆乳をなぞり、湯気と光の斑が流れる。
Shot 3：同じ長回しでゆっくりと上下移動し、手が小籠包をつまみ酢につけて持ち上げる、<汁が垂れる音>。
Shot 4：同じ長回しで小半周周回し、食卓の脇の開いた本のページと湯気の立つコーヒーカップを掠める。
Shot 5：同じ長回しでゆっくりと引き、温かい朝食の全景で静止、（音楽が収束する）。
制約：全編を通して単一の途切れない長回しカメラワークでカットなし；料理の盛り付けと朝日の基調は全編を通して一貫；カメラの移動は滑らかにつながりワンカットの質感を体現。
共通制約：字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

<a id="category-11"></a>

### ビューティ / ファッション (6)

### No. 1: リップスティック試色

- **Category:** `ビューティ / ファッション`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Image 1のリップスティック（芯の色番号とチューブのロゴはImage 1に準拠）を主体に、縦画面9:16、高彩度メイクアップ質感、30秒の試色ショート動画を生成。

#### Prompt

```text
Image 1のリップスティック（芯の色番号とチューブのロゴはImage 1に準拠）を主体に、縦画面9:16、高彩度メイクアップ質感、30秒の試色ショート動画を生成。
Shot 1：極近クローズアップ、リップスティック@Image 1の芯がゆっくりと回転して出てくる、ベルベット調の反射が揺らめく、カメラがゆっくりと接近、（軽快な電子音楽が始まる）<キャップを回す軽い音>。
Shot 2：クローズアップ、カメラが滑らかに横移動し唇部をなぞり、芯が唇を一筆で滑り豊かな色合いを残す。
Shot 3：中近景、モデルが唇をとじて微笑むのをローアングルで撮影、柔らかい光の下で唇色が発色、【今日のカラー・レッド】。
Shot 4：クローズアップ、カメラがモデルの横顔を周回し、唇のハイライトが顔を向けるのに合わせて流れる。
Shot 5：中景、モデルがリップスティック@Image 1を持ち鏡に向かって静止、カメラがゆっくりと引きながら終了、（音楽が収束する）。
制約：芯の色番号とチューブのロゴはImage 1に準拠し変更しない；唇色は芯の色と一致させる。
共通制約：字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 2: ファンデーション塗布

- **Category:** `ビューティ / ファッション`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

Image 1のファンデーションボトル（ボトル本体とスポイトはImage 1に準拠）を主体に、縦画面9:16、クリーンで透明感のあるスキンケアメイク感、30秒の塗布ショート動画を生成。

#### Prompt

```text
Image 1のファンデーションボトル（ボトル本体とスポイトはImage 1に準拠）を主体に、縦画面9:16、クリーンで透明感のあるスキンケアメイク感、30秒の塗布ショート動画を生成。
Shot 1：極近クローズアップ、一滴のファンデーション@Image 1がスポイトから手の甲に垂れ落ち、質感が広がる、カメラがゆっくりと接近、<液体が滴り落ちる音>。
Shot 2：クローズアップ、カメラが滑らかに横移動、メイクアップスポンジが頬を押さえて馴染ませ、肌理が次第に均一になる。
Shot 3：中近景、モデルが顔を向けるのを追い撮り、頬が自然光の下で無垢な光沢を呈する。
Shot 4：クローズアップ、モデルが目を閉じてメイクするのをローアングルで撮影、まつげが柔らかい影を落とす、（優しいピアノ音楽）。
Shot 5：中景、モデルがファンデーションボトル@Image 1を持ち微笑み静止、カメラがゆっくりと引きながら終了、【裸感無垢】。
制約：ボトル本体とスポイトはImage 1に準拠；メイクはリアルで過度な磨き上げプラスチック感がないように。
共通制約：字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動で石像ではない。
```

### No. 3: 香水の雰囲気

- **Category:** `ビューティ / ファッション`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の香水瓶（瓶の形状と刻印は画像1に準拠）を主体とし、横画面16:9、フレンチレトロな雰囲気の光と影で、30秒の雰囲気ショートムービーを生成。

#### Prompt

```text
画像1の香水瓶（瓶の形状と刻印は画像1に準拠）を主体とし、横画面16:9、フレンチレトロな雰囲気の光と影で、30秒の雰囲気ショートムービーを生成。
Shot 1: クローズアップ、香水瓶@Image 1が窓辺の石台に立ち、朝の光が瓶を通して光の斑点を屈折させ、カメラがゆっくりと近づく、（弦楽器の雰囲気音楽が始まる）。
Shot 2: ミディアムショット、カメラが瓶の周りをゆっくりと回り、ガラスの切り子面が流れる暖かい光を反射する。
Shot 3: クローズアップ、ローアングルでスプレーの瞬間を撮影、霧の粒子が逆光の中で金色の微塵として浮遊する、<スプレーの軽い音>。
Shot 4: ミディアムクローズアップ、霧がレースのカーテンに向かって漂うのを追いかけ、カーテンの影が風にそよぐ。
Shot 5: ミディアムショット、香水瓶@Image 1が石台に戻り静止、カメラがゆっくりと引き離す、（弦楽器の音楽が次第に弱まる）。
制約: 瓶の形状と瓶の刻印は画像1に準拠；雰囲気は暖色系のフレンチレトロに固定し、寒色系に偏らない。
共通制約: 字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動で石像ではない。
```

### No. 4: スキンケアエッセンスの滴下

- **Category:** `ビューティ / ファッション`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のエッセンス瓶（瓶本体とスポイトの目盛りは画像1に準拠）を主体とし、縦画面9:16、水晶のように透明で高保湿の質感で、30秒の質感ショートムービーを生成。

#### Prompt

```text
画像1のエッセンス瓶（瓶本体とスポイトの目盛りは画像1に準拠）を主体とし、縦画面9:16、水晶のように透明で高保湿の質感で、30秒の質感ショートムービーを生成。
Shot 1: 超クローズアップ、スポイトが空中に吊るされ、一滴のエッセンス@Image 1が落ちそうで落ちない、カメラは固定位置、<微かな気泡音>。
Shot 2: 超クローズアップ、エッセンスが落下して水面に落ち、スローで波紋が広がる、カメラがゆっくりと近づく、（水滴の音楽がアクセント）。
Shot 3: クローズアップ、カメラが滑らかに横移動し、エッセンスが指先から水晶のような糸を引く。
Shot 4: ミディアムクローズアップ、俯瞰でエッセンスが手の甲に塗り広げられる様子を撮影、光沢が鏡面のように広がる。
Shot 5: ミディアムショット、エッセンス瓶@Image 1が水の光を背景に立ち静止、カメラがゆっくりと上昇する、【24時間保湿】。
制約: 瓶本体とスポイトの目盛りは画像1に準拠；質感は透き通って糸を引くようにし、濁らない。
共通制約: 字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動で石像ではない。
```

### No. 5: ファッションストリートスナップ

- **Category:** `ビューティ / ファッション`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のモデルのスタイリング（服装とアクセサリーは画像1に準拠）を主体とし、縦画面9:16、フィルムグレインの都市ストリート感で、30秒のストリートスナップショートムービーを生成。

#### Prompt

```text
画像1のモデルのスタイリング（服装とアクセサリーは画像1に準拠）を主体とし、縦画面9:16、フィルムグレインの都市ストリート感で、30秒のストリートスナップショートムービーを生成。
Shot 1: ミディアムショット、モデル@Image 1がガラスドアを押し開けて街頭に足を踏み出し、風が服の裾を翻らせる、カメラが追いかける、（レトロディスコのリズムが始まる）。
Shot 2: ワイドショット、カメラが滑らかに横移動してモデルがネオンサインのショーウィンドウを通り過ぎるのを追いかけ、流れる影。
Shot 3: ミディアムクローズアップ、ローアングルでモデルが振り返ってサングラスを外す様子を撮影、逆光が髪の毛の金色の縁取りを描く。
Shot 4: クローズアップ、カメラがゆっくりとアクセサリーのディテールに近づき、金属の反射がきらめく。
Shot 5: ワイドショット、モデル@Image 1が街の中心に立ち止まり手を広げて静止、カメラがゆっくりと引き離し上昇する、【CITY WALK】（音楽が収束）。
制約: 服装とアクセサリーは画像1に準拠しデザインを変更しない；フィルムグレインと都市のネオンカラーは全編を通して固定。
共通制約: 字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動で石像ではない。
```

### No. 6: ヘアスタイル展示

- **Category:** `ビューティ / ファッション`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のモデルのヘアスタイル（髪色とスタイリングは画像1に準拠）を主体とし、縦画面9:16、サロン広告級の柔らかい光の質感で、30秒のヘアスタイルショートムービーを生成。

#### Prompt

```text
画像1のモデルのヘアスタイル（髪色とスタイリングは画像1に準拠）を主体とし、縦画面9:16、サロン広告級の柔らかい光の質感で、30秒のヘアスタイルショートムービーを生成。
Shot 1: クローズアップ、モデル@Image 1がうつむいて構え、髪が顔を覆って垂れる、カメラは固定位置、（リズム音楽の前奏）。
Shot 2: ミディアムクローズアップ、モデルが猛然と頭を振り、髪がスローで弧を描いて舞い上がる、カメラがゆっくりと引き離す、<髪を振る風の音>。
Shot 3: クローズアップ、カメラが頭部を周回し、光と影が髪の滑らかなハイライトを掃く。
Shot 4: ミディアムショット、モデルの指が髪の間を通り抜ける様子を追いかけ、髪の流れの層がはっきりと落ちる。
Shot 5: ミディアムクローズアップ、モデル@Image 1が振り返って静止、ヘアスタイルがしっかりと整いふっくらしている、カメラがゆっくりと近づく、【鏡のような光沢】。
制約: 髪色とスタイリングの輪郭は画像1に準拠；髪を振る動作は自然で滑らかにし、モデル抜けや断裂がない。
共通制約: 字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動で石像ではない。
```

<a id="category-12"></a>

### デジタルテクノロジー (6)

### No. 1: スマートフォン製品の回転

- **Category:** `デジタルテクノロジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のスマートフォン（本体とlogoは画像1に準拠）を主体とし、横画面16:9、ハイテクな高級感のある寒色系で、30秒の製品展示ムービーを生成。

#### Prompt

```text
画像1のスマートフォン（本体とlogoは画像1に準拠）を主体とし、横画面16:9、ハイテクな高級感のある寒色系で、30秒の製品展示ムービーを生成。
Shot 1: 超クローズアップ、スマートフォン@Image 1が暗い台面で画面が点灯し、冷たい光が縁取りをする、カメラがゆっくりと近づく、（低周波電子音が始まる）。
Shot 2: ミディアムショット、カメラが滑らかに周回し、スマートフォン@Image 1の背面の金属質感とカメラモジュールを展示。
Shot 3: クローズアップ、カメラがゆっくりと横移動し、側面のボタンとポートのディテールをなぞる。
Shot 4: ミディアムクローズアップ、ローアングルでスマートフォン@Image 1がゆっくりと立ち上がり浮遊し、冷たい光が底部からゆっくりと上昇する。
Shot 5: ミディアムショット、スマートフォン@Image 1が浮遊して回転し静止、カメラがゆっくりと引き離す、（音楽が収束）。
制約: 本体とlogoは画像1に準拠しデザインを変更しない；架空のインターフェース内容を創作しない；寒色系の工業用光は全編を通して固定。
共通制約: 字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動で石像ではない。
```

### No. 2: イヤホンが充電ケースから飛び出す

- **Category:** `デジタルテクノロジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のイヤホン充電ケース（外形とlogoは画像1に準拠）を主体とし、横画面16:9、ミニマルな純白スタジオ撮影の質感で、30秒の開封ショートムービーを生成。

#### Prompt

```text
画像1のイヤホン充電ケース（外形とlogoは画像1に準拠）を主体とし、横画面16:9、ミニマルな純白スタジオ撮影の質感で、30秒の開封ショートムービーを生成。
Shot 1: 超クローズアップ、充電ケース@Image 1が純白の台面に静置され、指先がケースの蓋に近づく、カメラは固定位置、（軽快な通知音）。
Shot 2: クローズアップ、ケースの蓋がゆっくりと開き、インジケーターランプが点灯する、カメラがゆっくりと近づく、<開閉のカチッという音>。
Shot 3: ミディアムクローズアップ、イヤホンがケース内からゆっくりと上昇し浮遊する、カメラがゆっくりと上下に追従。
Shot 4: クローズアップ、カメラが片方のイヤホンを周回し、耳への装着角度とマイクの穴を展示。
Shot 5: ミディアムショット、イヤホンと充電ケース@Image 1が並べて静止、カメラがゆっくりと引き離す、【シームレスに携帯】。
制約: 外形とlogoは画像1に準拠し構造を変更しない；純白のシームレスな背景に固定し、余計なものを加えない。
共通制約: 字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動で石像ではない。
```

### No. 3: ノートパソコンの開閉

- **Category:** `デジタルテクノロジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のノートパソコン（筐体とロゴは画像1に準拠）を主体とし、横画面16:9、高級な金属の冷たい光沢質感で、30秒の展示ショートムービーを生成。

#### Prompt

```text
画像1のノートパソコン（筐体とロゴは画像1に準拠）を主体とし、横画面16:9、高級な金属の冷たい光沢質感で、30秒の展示ショートムービーを生成。
Shot 1: 極近接アップ、ノートパソコン@Image 1 が閉じた状態で横たわり、冷たい光がアルミ合金ヒンジをなぞり、カメラがゆっくり横移動、（低周波の雰囲気音が始まる）。
Shot 2: ミディアムクローズアップ、ヒンジがゆっくり開閉して立ち上がり、画面が徐々に明るくなる、カメラがゆっくりズームイン、<ヒンジのダンパー音>。
Shot 3: クローズアップ、俯瞰でキーボードのバックライトがキーごとに点灯し、光の波が流れる。
Shot 4: ミディアムショット、カメラが滑らかに回り込み、ボディの超薄型サイドとインターフェースを展示。
Shot 5: ミディアムショット、ノートパソコン@Image 1 が半開きの姿勢で浮遊し静止、カメラがゆっくりズームアウト、（音楽が収束）。
制約: 筐体の厚さとロゴは画像1に準拠；画面UIの具体的な内容は創作しない；金属の冷たい光沢を全編通して維持。
共通制約: 字幕無しを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像のように動かない。
```

### No. 4: スマートウォッチのインターフェース

- **Category:** `デジタルテクノロジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のスマートウォッチ（ケースとバンドは画像1に準拠）を主体とし、縦画面9:16、明るく活気のあるテクノロジー感覚で、30秒の機能紹介ショートムービーを生成。

#### Prompt

```text
画像1のスマートウォッチ（ケースとバンドは画像1に準拠）を主体とし、縦画面9:16、明るく活気のあるテクノロジー感覚で、30秒の機能紹介ショートムービーを生成。
Shot 1: 極近接アップ、スマートウォッチ@Image 1 の文字盤が手首を上げると点灯し、動的エフェクトが展開、カメラがゆっくりズームイン、（明るい電子音楽が始まる）。
Shot 2: クローズアップ、カメラがゆっくり横移動、クラウンを回して文字盤カードを切り替え。
Shot 3: ミディアムクローズアップ、手首の動きに追従して撮影、運動データリングが動作に合わせて跳ねる。
Shot 4: クローズアップ、回り込みでケース側面とバンドの留め具の質感を展示。
Shot 5: ミディアムショット、スマートウォッチ@Image 1 が手首に装着された状態で静止し持ち上げる、カメラがゆっくりズームアウト、【全天候守護】。
制約: ケースとバンドは画像1に準拠；インターフェースの動的エフェクトは簡潔にし、具体的な数値の詳細は創作しない。
共通制約: 字幕無しを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像のように動かない。
```

### No. 5: ドローンの飛行

- **Category:** `デジタルテクノロジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のドローン（機体とプロペラは画像1に準拠）を主体とし、横画面16:9、広々とした空撮ドキュメンタリー感覚で、30秒の飛行ショートムービーを生成。

#### Prompt

```text
画像1のドローン（機体とプロペラは画像1に準拠）を主体とし、横画面16:9、広々とした空撮ドキュメンタリー感覚で、30秒の飛行ショートムービーを生成。
Shot 1: ミディアムクローズアップ、ドローン@Image 1 が草地からゆっくり離陸、プロペラが高速でぼやける、カメラがゆっくり上下に追従、<プロペラのブーンという音>（雰囲気音楽が始まる）。
Shot 2: クローズアップ、カメラがホバリングする機体を回り込み、ジンバルがレンズの方向を微調整。
Shot 3: ワイドショット、ドローンが湖面を掠める様子を追従撮影、影が滑るように進む。
Shot 4: 超ロングショット、俯瞰でドローンが山稜を飛び越え、大地が下方に広がる。
Shot 5: ミディアムショット、ドローン@Image 1 が安定して帰還しホバリングして静止、カメラがゆっくりズームアウト、（音楽が収束）。
制約: 機体とプロペラの構造は画像1に準拠；飛行姿勢は安定しており、実際の空気力学に合致し、漂ったり揺れたりしない。
共通制約: 字幕無しを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像のように動かない。
```

### No. 6: チップの接写（テクノロジードキュメンタリー）

- **Category:** `デジタルテクノロジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のチップ（パッケージとシルク印刷は画像1に準拠）を主体とし、横画面16:9、冷徹なテクノロジードキュメンタリーの接写質感で、30秒の接写ショートムービーを生成。

#### Prompt

```text
画像1のチップ（パッケージとシルク印刷は画像1に準拠）を主体とし、横画面16:9、冷徹なテクノロジードキュメンタリーの接写質感で、30秒の接写ショートムービーを生成。
Shot 1: 極近接マクロクローズアップ、チップ@Image 1 が基板上に静かに横たわり、金のピンが冷たい光を放つ、カメラがゆっくりズームイン、（低周波の工業音が始まる）。
Shot 2: マクロクローズアップ、カメラが滑らかに横移動し、パッケージ表面のシルク印刷とカットエッジをなぞる。
Shot 3: マクロクローズアップ、俯瞰で半田付け点と配線を撮影、被写界深度は浅く一線のみが鮮明。
Shot 4: ミディアムクローズアップ、カメラがゆっくりズームアウトし、基板アレイ全体を露出、インジケーターランプが点滅。
Shot 5: クローズアップ、チップ@Image 1 が冷たい光の中に静止、カメラがゆっくり回り込んで終了、（音楽が次第に弱まる）。
制約: パッケージの型番とシルク印刷は画像1に準拠し変更しない；接写の被写界深度は現実的で、存在しない回路構造を創作しない。
共通制約: 字幕無しを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像のように動かない。
```

<a id="category-13"></a>

### 自動車 (4)

### No. 1: 夜景での追従撮影

- **Category:** `自動車`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の自動車（車種と塗装色は画像1に準拠）を主体とし、横画面16:9、サイバーパンク夜景の映画的質感で、30秒の追従撮影ショートムービーを生成。

#### Prompt

```text
画像1の自動車（車種と塗装色は画像1に準拠）を主体とし、横画面16:9、サイバーパンク夜景の映画的質感で、30秒の追従撮影ショートムービーを生成。
Shot 1: ミディアムクローズアップ、車@Image 1 がネオン街路に停車、ヘッドライトが点灯、雨に濡れた路面が光色を反射、カメラがゆっくりズームイン、（低音の電子リズムが始まる）<エンジンの軽い唸り>。
Shot 2: ミディアムショット、横向きに車がネオンの長い通りを走行する様子を追従撮影、光の帯が塗装面を流れる。
Shot 3: クローズアップ、カメラが滑らかに横移動し、フロントグリルとヘッドライトの冷たい光をなぞる。
Shot 4: ワイドショット、アングルアップで車がトンネルを通過、天井灯の条状の光と影が素早く掠める。
Shot 5: ミディアムショット、車@Image 1 がトンネルから出て減速し静止、カメラがゆっくりズームアウトしながら上昇、（リズムが収束）。
制約: 車種と塗装色は画像1に準拠し変更しない；夜景のネオンと湿った路面の反射光の雰囲気を全編通して維持。
共通制約: 字幕無しを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像のように動かない。
```

### No. 2: ディテール接写のクイックカット

- **Category:** `自動車`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の自動車（車種と塗装色は画像1に準拠）を主体とし、横画面16:9、力強いハイコントラストの工業的質感で、30秒のディテールショートムービーを生成。

#### Prompt

```text
画像1の自動車（車種と塗装色は画像1に準拠）を主体とし、横画面16:9、力強いハイコントラストの工業的質感で、30秒のディテールショートムービーを生成。
Shot 1: 極近接アップ、車@Image 1 のヘッドライトが点灯しライトアイブロウラインを照らし、冷たい光がエッジを浮かび上がらせる、カメラがゆっくりズームイン、（急なドラムビートが始まる）。
Shot 2: クローズアップ、カメラがホイールにカット、ゆっくり回転し光の反射を映す。
Shot 3: クローズアップ、カメラがエンブレムとグリルにカット、金属のハイライトがなぞる。
Shot 4: クローズアップ、カメラがマフラーとスポイラーのラインにカット、カメラが滑らかに横移動。
Shot 5: ミディアムショット、車@Image 1 が車体全体でビームの中に静止、カメラがゆっくりズームアウト、（ドラムビートが収束）【あらゆる部分が鋭さを放つ】。
制約: 車種と塗装色は画像1に準拠；クイックカットは各ショットが単一の部品に焦点を合わせ、繰り返さない；ハイコントラストの硬質な光を全編通して維持。
共通制約: 字幕無しを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像のように動かない。
```

### No. 3: オフロードシーン

- **Category:** `自動車`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のオフロード車（車種と塗装は画像1に準拠）を主体とし、横画面16:9、荒々しい荒野のドキュメンタリー感覚で、30秒のオフロードショートムービーを生成。

#### Prompt

```text
画像1のオフロード車（車種と塗装は画像1に準拠）を主体とし、横画面16:9、荒々しい荒野のドキュメンタリー感覚で、30秒のオフロードショートムービーを生成。
Shot 1: ミディアムショット、オフロード車@Image 1が砂丘を駆け上がり土煙を上げる、カメラが追従、<タイヤが砂を踏む音>（激昂したドラム音楽が始まる）。
Shot 2: クローズアップ、ローアングルで車輪が砂利を踏みつけ、泥砂が飛び散る。
Shot 3: ワイドショット、横方向にスムーズにパンしながら車が浅瀬を渡り、水しぶきが上がる。
Shot 4: エクストリームロングショット、俯瞰でオフロード車が荒野の轍を走り抜け、長く煙が引く。
Shot 5: ミディアムショット、オフロード車@Image 1が尾根の頂上に登り停止して安定したフレーム、カメラがゆっくり上昇し引く、（ドラム音楽が収束）。
制約：車種と塗装は画像1に準拠；オフロードの動きは実際の地形物理に合致し、浮遊・スリップ・歪みがないこと。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではないこと。
```

### No. 4: インテリア展示

- **Category:** `自動車`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の自動車インテリア（材質と配色は画像1に準拠）を主体とし、横画面16:9、温かみのある高級キャビンの光感で、30秒のインテリアショートムービーを生成。

#### Prompt

```text
画像1の自動車インテリア（材質と配色は画像1に準拠）を主体とし、横画面16:9、温かみのある高級キャビンの光感で、30秒のインテリアショートムービーを生成。
Shot 1: 極近接クローズアップ、インテリア@Image 1の本革シートの縫い目が暖かい光の下で起伏し、カメラがゆっくり横移動、（穏やかな雰囲気の音楽が始まる）。
Shot 2: ミディアムクローズアップ、カメラがゆっくりセンターコンソールスクリーンにズームイン、アンビエントライトが順次点灯。
Shot 3: クローズアップ、ステアリングホイールとパドルを囲むように、金属トリムの反射が流れる。
Shot 4: ミディアムショット、俯瞰でキャビン全景、サンルーフからの光が上から注ぐ。
Shot 5: ミディアムクローズアップ、カメラがゆっくり上昇しキャビンでフレームを収め、暖かい光が広がる、（音楽が次第に弱まる）【静かなキャビン】。
制約：材質と配色は画像1に準拠し変更しない；中控スクリーンの具体的なUI内容を創作しない；暖色系キャビン光を全編通してロック。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではないこと。
```

<a id="category-14"></a>

### 不動産 / 住まい (4)

### No. 1: リビング空間巡遊

- **Category:** `不動産 / 住まい`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦画面9:16、不動産品質プロモーション、明るく透明感のある暖かい白調で、30秒のリビング空間巡遊ショートムービーを生成。

#### Prompt

```text
縦画面9:16、不動産品質プロモーション、明るく透明感のある暖かい白調で、30秒のリビング空間巡遊ショートムービーを生成。
Shot 1: 固定カメラ位置、朝日がフロア窓から斜めに空のリビングに差し込み、光柱の中で塵が浮遊、（穏やかなピアノが始まる）。
Shot 2: スムーズな横移動、カメラが床に沿って無垢材の床とベージュの布張りソファを掠め、クッションのテクスチャが鮮明、<軽い足音>。
Shot 3: ゆっくりズームイン、テーブルの上にある湯気の立つコーヒーと開かれた本に焦点を合わせ、暖かい光が降り注ぐ、（弦楽器が重なる）。
Shot 4: 昇降、カメラ位置が床からゆっくり上昇し、リビングとオープンキッチンの透明感のあるレイアウトを展開、【床面積98㎡ 南北通風】。
Shot 5: ゆっくりズームアウト、玄関まで戻りリビング全体の奥行きを見渡す、暖かい白でフレームを収める、（音楽が収束）。
制約：全編人物は登場しない；家具調度品のスタイルはモダンでシンプルな無垢材風に統一；光は朝の暖かい白調を一貫して維持。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではないこと。
```

### No. 2: キッチン詳細

- **Category:** `不動産 / 住まい`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦画面9:16、高級家電の質感広告、冷静なメタリックグレーと暖かい木目調で、30秒のキッチン詳細ショートムービーを生成。

#### Prompt

```text
縦画面9:16、高級家電の質感広告、冷静なメタリックグレーと暖かい木目調で、30秒のキッチン詳細ショートムービーを生成。
Shot 1: クローズアップ、蛇口から流れ落ちる水がステンレスシンクに注ぎ、水滴が飛び散るスロー感、<水の流れる音>。
Shot 2: スムーズな横移動、カメラがクオーツカウンターに沿ってナイフ、まな板、新鮮な野菜を滑り、冷たい光で強調、（軽快なリズムが始まる）。
Shot 3: ゆっくりズームイン、引き出しが自動的に滑り出し仕切り収納とマットな取っ手を展示、暖かい木目調、<引き出しの滑らかなレール音>。
Shot 4: 俯瞰、ガスコンロの青い炎が点火、鍋の中で油が跳ね、湯気が立ち上る、<点火のカチッという音><油の跳ねるジューという音>。
Shot 5: ローアングル、カメラ位置がコンロから上部のレンジフードと埋め込み式ライトストリップを見上げ、金属の反射、【埋め込み式統合キッチン家電】、（音楽が収束）。
制約：全編人物は登場しない；カウンターは常に整理整頓され雑物がない；金属と木目調の材質感は全編通して一貫。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではないこと。
```

### No. 3: 間取り俯瞰（示意）

- **Category:** `不動産 / 住まい`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

横画面16:9、建築ビジュアライゼーション示意風、クリーンな白モデルに柔らかな天窓光で、30秒の間取り俯瞰示意ショートムービーを生成。

#### Prompt

```text
横画面16:9、建築ビジュアライゼーション示意風、クリーンな白モデルに柔らかな天窓光で、30秒の間取り俯瞰示意ショートムービーを生成。
Shot 1: 俯瞰、真上から垂直に完全な間取り白モデル平面を見下ろし、仕切り線が鮮明、（ミニマルな電子音が始まる）。
Shot 2: ゆっくりズームイン、カメラが下がり"消えた天井"を通り抜けてリビング示意エリアに入る、家具は半透明で表示、<空間切り替え音効>。
Shot 3: 周回、主寝室示意エリアを一周回り、出窓とウォークインクローゼットの動線を展示、柔らかな光が次第に明るくなる、（リズムが次第に強まる）。
Shot 4: スムーズな横移動、廊下の示意動線に沿って子供部屋とバスルームへ滑る、注釈が浮かび上がる、【3LDK 動静分離】。
Shot 5: 昇降、カメラ位置が高くなり全体俯瞰に戻り面積データを重ねる、天窓光でフレームを収める、（音楽が収束）。
制約：全編は実景ではなく示意白モデルであり、"示意图仅供参考"の文字を表示すること；間取りの比率構造は全編通して一貫；実際の人物・家具はなし。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではないこと。
```

### No. 4: 寝室の雰囲気

- **Category:** `不動産 / 住まい`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦画面9:16、スローライフ雰囲気広告、暖かいオレンジのナイトライト柔らかい調子で、30秒の寝室雰囲気ショートムービーを生成。

#### Prompt

```text
縦画面9:16、スローライフ雰囲気広告、暖かいオレンジのナイトライト柔らかい調子で、30秒の寝室雰囲気ショートムービーを生成。
Shot 1: 固定カメラ位置、ベッドサイドの暖かいライトが点灯した瞬間、無地の寝具と半分閉まったカーテンを照らす、（雰囲気音楽が始まる）。
Shot 2: ゆっくりズームイン、カメラが枕元に近づき柔らかい布団のひだと広げられた本を掠め、光と影が次第に暖かくなる、<窓外の小雨の音>。
Shot 3: スムーズな横移動、ベッドの足元に沿って出窓の上の観葉植物とアロマディフューザーを滑り、暖かいオレンジの光の輪が流れる、（ピアノが軽く響く）。
Shot 4: 昇降、カメラ位置がゆっくり上昇しベッド全体とペンダントライトの柔らかな光を俯瞰し、安眠を包み込む感覚を醸成、【寝室は採光・通風ともに優れる】。
Shot 5: ゆっくりズームアウト、部屋のドア口まで退き暖かいライトの下の寝室全景を見渡す、柔らかい調子でフレームを収める、（音楽が収束）。
制約：全編人物は登場しない；照明は暖かいオレンジの夜の調子を一貫して維持；寝具の陳列はシンプルで上品な統一スタイルを維持。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではないこと。
```

<a id="category-15"></a>

### 人物トーク / デジタルヒューマン (6)

### No. 1: 知識口述

- **Category:** `人物トーク / デジタルヒューマン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

アンカーを@画像1にバインド（顔のメイクは対応する画像に準拠）、縦画面9:16、知識系ブロガーの清潔なスタジオ風、明るい柔らかい光で、30秒の知識口述ショート動画を生成。

#### Prompt

```text
アンカーを@画像1にバインド（顔のメイクは対応する画像に準拠）、縦画面9:16、知識系ブロガーの清潔なスタジオ風、明るい柔らかい光で、30秒の知識口述ショート動画を生成。
Shot 1：中近景，アンカー@画像1 がカメラをまっすぐ見つめ、体を前に傾けて質問を投げかけ、浅い被写界深度の本棚背景、固定カメラ位置、{あなたは90%の人が間違って使っていることを知っていますか？}。
Shot 2：ゆっくりとズームイン、アンカー@画像1 が話しながら指を立てて強調し、確信に満ちた眼差し、暖かい光で明るく、（軽快なBGMが始まる）。
Shot 3：カットイン、画面右側に要点の図示が浮かび上がり、アンカー@画像1 が横向きになって指さし、スムーズな横移動、【要点一 二 三】。
Shot 4：中近景、アンカー@画像1 が体を正面に戻し、微笑みながらまとめ、口調を緩めて、固定カメラ位置、{この三点を覚えれば十分です}。
Shot 5：ゆっくりとズームアウト、アンカー@画像1 がうなずいて締めくくり、手を振り、柔らかい光でフリーズ、（音楽が収束）。
制約：アンカーの顔は画像1に準拠し、全編を通じて一貫させる；口の動きと台詞を厳密に同期させる；スタジオ背景は固定で変化させない。
共通制約：字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動を伴い、石像のようにしない。
```

### No. 2: ニュース放送

- **Category:** `人物トーク / デジタルヒューマン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

アンカーを@画像1にバインド（顔のメイクは対応する画像に準拠）、横画面16:9、権威あるニューススタジオ、冷たい青のプロフェッショナルなトーンで、30秒のニュース放送ショート動画を生成。

#### Prompt

```text
アンカーを@画像1にバインド（顔のメイクは対応する画像に準拠）、横画面16:9、権威あるニューススタジオ、冷たい青のプロフェッショナルなトーンで、30秒のニュース放送ショート動画を生成。
Shot 1：中景、アンカー@画像1 が姿勢を正して座り、カメラをまっすぐ見つめてオープニング、背後に青色の放送スクリーン、固定カメラ位置、{視聴者の皆さん、こんばんは、今期の放送へようこそ}。
Shot 2：ゆっくりとズームイン、アンカー@画像1 が真剣な表情でニュースの導入を読み上げ、安定した話速、冷たい青の光、【今日の主なニュース】。
Shot 3：カットイン、アンカー@画像1 の右後方にニュース映像のウィンドウが浮かび上がり、スムーズな横移動、<スタジオの案内音>。
Shot 4：中近景、アンカー@画像1 が別のカメラ位置に向きを変えて放送を続け、眼差しの切り替えが自然、固定カメラ位置、（低音のBGM）。
Shot 5：ゆっくりとズームアウト、アンカー@画像1 が両手を組んで挨拶して締めくくり、冷たい青でフリーズ、{ご視聴ありがとうございました、また次回お会いしましょう}。
制約：アンカーの顔は画像1に準拠し、全編を通じて一貫させる；口の動きと台詞を厳密に同期させる；姿勢は端正でプロフェッショナルに、スタジオ背景は固定。
共通制約：字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動を伴い、石像のようにしない。
```

### No. 3: 販売口述

- **Category:** `人物トーク / デジタルヒューマン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

アンカーを@画像2にバインド（顔のメイクは対応する画像に準拠）、縦画面9:16、ライブ販売の賑やかなスタイル、明るく高彩度の暖かいトーンで、30秒の販売口述ショート動画を生成。

#### Prompt

```text
アンカーを@画像2にバインド（顔のメイクは対応する画像に準拠）、縦画面9:16、ライブ販売の賑やかなスタイル、明るく高彩度の暖かいトーンで、30秒の販売口述ショート動画を生成。
Shot 1：中近景、アンカー@画像2 が両手で商品を掲げ、カメラに近づけて熱心に呼び込み、固定カメラ位置、{皆さん、見てください、今日のこの商品は本当に最高です！}。
Shot 2：ゆっくりとズームイン、アンカー@画像2 が指で商品のセールスポイントをなぞり、誇張した興奮した表情、高彩度の暖かい光、<チン リンク追加の効果音>。
Shot 3：カットイン、画面左下に価格の爆発的なポップアップが浮かび上がり、アンカー@画像2 が手を叩いて強調、スムーズな横移動、【期間限定直下げ わずか99】。
Shot 4：中景、アンカー@画像2 が商品を掲げて左右に細部を展示し、話速を速めて、固定カメラ位置、（激しいプロモーション音楽）。
Shot 5：ゆっくりとズームイン、アンカー@画像2 が親指を立てて注文を促して締めくくり、暖かいトーンでフリーズ、{手遅れになる前に、すぐに注文を！}。
制約：アンカーの顔は画像2に準拠し、全編を通じて一貫させる；口の動きと台詞を厳密に同期させる；商品の外観は一貫させる；背景の商品棚の陳列は固定。
共通制約：字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動を伴い、石像のようにしない。
```

### No. 4: 深夜の情感ラジオ

- **Category:** `人物トーク / デジタルヒューマン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

アンカーを@画像3にバインド（顔のメイクは対応する画像に準拠）、縦画面9:16、深夜ラジオの雰囲気、暖かいオレンジの微光で低コントラスト、30秒の情感ラジオショート動画を生成。

#### Prompt

```text
アンカーを@画像3にバインド（顔のメイクは対応する画像に準拠）、縦画面9:16、深夜ラジオの雰囲気、暖かいオレンジの微光で低コントラスト、30秒の情感ラジオショート動画を生成。
Shot 1：中近景、アンカー@画像3 がマイクに横向きで目を閉じてそっと口を開く、暖かいオレンジの卓上ランプが横からの光を当てる、固定カメラ位置、（優しいピアノが始まる）{夜が更けました、まだ眠っていないあなたは元気ですか}。
Shot 2：ゆっくりとズームイン、アンカー@画像3 が目を開けて虚空を見つめ、優しい表情、目元に光が浮かぶ、暖かい光が広がる、<窓の外の夜の雨のそよぎ>。
Shot 3：スムーズな横移動、レンズが机の上のヘッドホンと温かい湯呑み茶碗を掠め、アンカー@画像3 が画面に入り、低い声で囁く、（ピアノが次第に強くなる）。
Shot 4：クローズアップ、アンカー@画像3 が口元をほころばせてそっと慰め、まつげが微かに震える、暖かいオレンジの微光、{あなたがこの世界に優しく扱われますように}。
Shot 5：ゆっくりとズームアウト、アンカー@画像3 がヘッドホンを外し、うつむいて微笑みながら締めくくり、微光でフリーズ、（音楽が収束）。
制約：アンカーの顔は画像3に準拠し、全編を通じて一貫させる；口の動きと台詞を厳密に同期させる；感情はまつげの微震えと目元の光で外在化させ、露骨なナレーション式の演技は禁止；暖かいオレンジの夜のトーンは全編を通じて一貫。
共通制約：字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動を伴い、石像のようにしない。
```

### No. 5: 教育講師

- **Category:** `人物トーク / デジタルヒューマン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

講師を@画像1にバインド（顔のメイクは対応する画像に準拠）、横画面16:9、オンライン授業の明るくプロフェッショナル、ホワイトボードの爽やかなトーンで、30秒の教育講師ショート動画を生成。

#### Prompt

```text
講師を@画像1にバインド（顔のメイクは対応する画像に準拠）、横画面16:9、オンライン授業の明るくプロフェッショナル、ホワイトボードの爽やかなトーンで、30秒の教育講師ショート動画を生成。
Shot 1：中景、講師@画像1 がホワイトボードの前に立ち、カメラに向き直って講義を開始、マーカーペンを持っている、固定カメラ位置、{この授業では、一つの核心となる公式だけを説明します}。
Shot 2：スムーズな横移動、講師@画像1 が歩きながらホワイトボードにキーワードを書き、レンズが彼/彼女に追従して移動、明るい白い光、<マーカーペンの書き音>。
Shot 3：カットイン、ホワイトボードの板書エリアを拡大し、公式がハイライト表示で浮かび上がる、講師@画像1 が横向きになって指さし、ゆっくりとズームイン、【核心公式】。
Shot 4：中近景、講師@画像1 がカメラに戻り、例を挙げて説明、表情豊かに、固定カメラ位置、（軽快な学習BGM）。
Shot 5：ゆっくりとズームアウト、講師@画像1 が両手を広げて微笑みながらまとめ、うなずき、白い光でフリーズ、{理解できましたか、次回の授業でお会いしましょう}。
制約：講師の顔は画像1に準拠し、全編を通じて一貫させる；口の動きと台詞を厳密に同期させる；ホワイトボードの板書内容は前後で一貫させる；教室の背景は固定。
共通制約：字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動を伴い、石像のようにしない。
```

### No. 6: 多言語分身（編集タスクの考え方を含む）

- **Category:** `人物トーク / デジタルヒューマン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

デジタルヒューマンを@画像1にバインド（顔のメイクは対応する画像に準拠）、縦画面9:16、多国籍ブランド統一スタジオ風、シンプルなテクノロジーブルーのトーンで、30秒の多言語分身ショート動画を生成。

#### Prompt

```text
デジタルヒューマンを@画像1にバインド（顔のメイクは対応する画像に準拠）、縦画面9:16、多国籍ブランド統一スタジオ風、シンプルなテクノロジーブルーのトーンで、30秒の多言語分身ショート動画を生成。
Shot 1：中近景、デジタルヒューマン@画像1 がカメラをまっすぐ見つめ、中国語で挨拶してオープニング、テクノロジーブルーの背景スクリーン、固定カメラ位置、{皆さん、こんにちは、私たちの製品についてご覧ください}【中国語】。
Shot 2：カットイン、同一のデジタルヒューマン@画像1 がシームレスに英語の口述に切り替え、口の動きを英語に同期、ゆっくりとズームイン、{Hello everyone, welcome}【English】。
Shot 3：カットイン、デジタルヒューマン@画像1 が日本語の挨拶に切り替え、表情は一貫、スムーズな横移動、{皆さんこんにちは}【日本語】。
Shot 4：中景、デジタルヒューマン@画像1 が両腕を広げて歓迎のジェスチャー、背景に多言語の字幕ストリームが浮かび上がる、固定カメラ位置、（テクノ感のあるBGM）。
Shot 5：ゆっくりとズームアウト、デジタルヒューマン@画像1 が微笑みながらうなずいて締めくくり、ブルートーンでフリーズ、（音楽が収束）。
制約：編集タスクの考え方——まず中国語のマスターショットを生成し、その後「人物とカメラワークを変えず、台詞と口の動きのみをターゲット言語に置き換える」という編集指示で英語/日本語の分身を派生させ、顔@画像1、カメラ位置、背景、服装が全編を通じて完全に一致することを確保；各言語の口の動きと対応する台詞を厳密に同期させる；分身で顔の漂移が発生することを禁止。
共通制約：字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみを使用；人物は自然な微動を伴い、石像のようにしない。
```

<a id="category-16"></a>

### ショートドラマ / 感情叙事 (8)

### No. 1: コンビニでの再会（感情の反転）

- **Category:** `ショートドラマ / 感情叙事`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のヒロイン、画像3のヒーローを参考（それぞれの顔のメイク・スタイルは対応する画像に準拠）、縦長9:16、映画的なリアリズム、冷たい青から暖かいオレンジへ、30秒の感情的なショートドラマを生成。

#### Prompt

```text
画像1のヒロイン、画像3のヒーローを参考（それぞれの顔のメイク・スタイルは対応する画像に準拠）、縦長9:16、映画的なリアリズム、冷たい青から暖かいオレンジへ、30秒の感情的なショートドラマを生成。
Shot 1: 全景、ヒロイン@Image 1が窓際で一人うつむきコーヒーをかき混ぜる、冷たい青の夜のトーン、カメラがゆっくりと近づく、（ピアノが軽く始まる）。
Shot 2: 中近景、ヒーロー@Image 3がドアを押して画面に入る、ヒロイン@Image 1が顔を上げて呆然とする、固定カメラ位置に息づかい感を帯びる、<ドアのチャイムが鳴る>。
Shot 3: クローズアップ、カメラが二人の間で切り替わり、トーンが次第に暖かくなる、ヒーロー@Image 3が小声で{迎えに来たよ}と言う、（ピアノが次第に強くなる）。
Shot 4: クローズアップ、ヒロイン@Image 1が目を赤く潤ませ口元を上げる、カメラがゆっくりと引く、暖かいオレンジで静止、（音楽が収束する）。
制約: ヒロインとヒーローの顔は対応する画像に準拠し一貫させる；コンビニの設定は固定；感情の反転は潤んだ目と震える口元で外化；分身や双子は禁止。
共通制約: 字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然に微動し、石像のように固まらない。
```

### No. 2: 雨の夜の独白

- **Category:** `ショートドラマ / 感情叙事`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

主人公を@Image 2にバインド（顔のメイク・スタイルは対応する画像に準拠）、縦長9:16、冷たいトーンの文芸的リアリズム、青灰色の雨の夜の低彩度、30秒の感情的な独白ショートフィルムを生成。

#### Prompt

```text
主人公を@Image 2にバインド（顔のメイク・スタイルは対応する画像に準拠）、縦長9:16、冷たいトーンの文芸的リアリズム、青灰色の雨の夜の低彩度、30秒の感情的な独白ショートフィルムを生成。
Shot 1: クローズアップ、雨水がガラス窓を伝って滑り落ちる、主人公@Image 2のぼやけた影が窓の向こうに浮かび上がる、固定カメラ位置、<雨音がしとしと>（低音のチェロが始まる）。
Shot 2: ゆっくりと近づく、主人公@Image 2が窓に寄り添って雨の夜の街灯を見つめる、指先が冷たいガラスに触れる、青灰色の冷たい光、{ある言葉は、雨にしか話せない}。
Shot 3: 安定した横移動、カメラが机の上で消えた携帯電話と冷めかけたお茶を掠める、主人公@Image 2の横顔が画面に入る、（チェロが次第に強くなる）。
Shot 4: 中近景、主人公@Image 2が深く息を吸い込み目を閉じる、一滴の涙が頬を伝い窓の雨筋と重なる、ゆっくりと近づく、<雨が強くなる>。
Shot 5: ゆっくりと引く、主人公@Image 2が目を開け、ほっとしたような浅い笑みを浮かべて窓から離れ振り返る、青灰色で静止、（音楽が収束する）。
制約: 主人公の顔は画像2に準拠し一貫させる；感情は窓に触れる指先と涙の跡で外化し、「悲しい」などの直白的な台詞は禁止；雨の夜の青灰色トーンと設定は一貫させる。
共通制約: 字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然に微動し、石像のように固まらない。
```

### No. 3: 家族の食卓

- **Category:** `ショートドラマ / 感情叙事`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の母親、画像2の父親、画像4の子供を参考（それぞれの顔のメイク・スタイルは対応する画像に準拠）、横長16:9、温かい生活感のあるリアリズム、暖かい黄色の家庭的なトーン、30秒の家族の感情的なショートフィルムを生成。

#### Prompt

```text
画像1の母親、画像2の父親、画像4の子供を参考（それぞれの顔のメイク・スタイルは対応する画像に準拠）、横長16:9、温かい生活感のあるリアリズム、暖かい黄色の家庭的なトーン、30秒の家族の感情的なショートフィルムを生成。
Shot 1: 全景、家族三人が食卓を囲み、温かい料理から湯気が立ち上る、母親@Image 1が子供@Image 4に料理を取り分けている、暖かい黄色の照明、固定カメラ位置、（温かいフォークソングが始まる）<食器の軽い音>。
Shot 2: 中近景、父親@Image 2が笑顔で母親@Image 1にスープをよそう、二人が顔を見合わせて微笑む、ゆっくりと近づく、<スープレードルの音>。
Shot 3: クローズアップ、子供@Image 4が頬を膨らませて大口でご飯を食べ、顔を上げてにっこり笑う、暖かい光が顔に降り注ぐ、カメラが切り替わる。
Shot 4: 中景、母親@Image 1が手を伸ばして父親@Image 2の口元を拭う、父親が一瞬驚き、すぐに彼女の手を握る、安定した横移動、（フォークソングが次第に温かくなる）。
Shot 5: ゆっくりと上下移動、カメラが上昇して食卓の料理と寄り添う家族を見下ろす、暖かい黄色で静止、（音楽が収束する）。
制約: 三人の人物の顔は厳密に対応する画像に準拠、母親/父親/子供の体格・年齢は明確に区別し、分身や双子、顔の混同は禁止；食卓の料理と暖かい黄色の家庭的な設定は一貫させる。
共通制約: 字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然に微動し、石像のように固まらない。
```

### No. 4: 別れの駅

- **Category:** `ショートドラマ / 感情叙事`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のヒロイン、画像3のヒーローを参考（それぞれの顔のメイク・スタイルは対応する画像に準拠）、横長16:9、映画的なリアリズム、冷たいトーンの駅に微かな暖かい逆光、30秒の別れの感情的なショートフィルムを生成。

#### Prompt

```text
画像1のヒロイン、画像3のヒーローを参考（それぞれの顔のメイク・スタイルは対応する画像に準拠）、横長16:9、映画的なリアリズム、冷たいトーンの駅に微かな暖かい逆光、30秒の別れの感情的なショートフィルムを生成。
Shot 1: 全景、駅のホームは人混み、ヒロイン@Image 1とヒーロー@Image 3が向き合い手を固く握り合う、列車が横にいる、冷たいトーンの逆光、ゆっくりと近づく、（弦楽器の低い響きが始まる）<列車到着アナウンス>。
Shot 2: クローズアップ、二人が絡み合った指がゆっくりと締まり、名残惜しそうに緩む、暖かい逆光が輪郭を描く、固定カメラ位置。
Shot 3: 中近景、ヒーロー@Image 3が手を上げてヒロイン@Image 1の風で乱れた髪を整える、言いたいことがあるが言葉を飲み込む、ゆっくりと近づく、{着いたら…連絡してね}。
Shot 4: 中景、ヒーロー@Image 3が振り返って列車に乗り込む、ヒロイン@Image 1がその場に立ち、肩をわずかに震わせ涙をこらえる、安定した横移動、（弦楽器の音が高まる）<ドア閉め案内音>。
Shot 5: ゆっくりと引く、列車が去り、ヒロイン@Image 1が一人空っぽのホームに立つ逆光のシルエット、冷たいトーンで静止、（音楽が収束する）。
制約: ヒロインとヒーローの顔は対応する画像に準拠し一貫させる；別れの感情は締め合う指と震える肩で外化し、直情的な泣き叫びは禁止；駅のホームの設定と冷暖の逆光は一貫させる；分身や双子は禁止。
共通制約: 字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然に微動し、石像のように固まらない。
```

### No. 5: 職場のハイライト

- **Category:** `ショートドラマ / 感情叙事`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

主人公を@Image 2にバインド（顔のメイク・スタイルは対応する画像に準拠）、横長16:9、ビジネス燃え系リアリズム、冷たい青の鋼とガラスの質感から金色の光へ、30秒の職場の励ましショートフィルムを生成。

#### Prompt

```text
主人公を@Image 2にバインド（顔のメイク・スタイルは対応する画像に準拠）、横長16:9、ビジネス燃え系リアリズム、冷たい青の鋼とガラスの質感から金色の光へ、30秒の職場の励ましショートフィルムを生成。
Shot 1: 中近景、主人公@Image 2が深夜のオフィスで一人座り、満面のデータに眉をひそめる、冷たい青の画面の光が顔に映る、固定カメラ位置、（低いドラムビートが始まる）<キーボードの激しい打鍵音>。
Shot 2: ゆっくりと近づく、主人公@Image 2が突然顔を上げ、目を輝かせてペンをつかみキーポイントを丸で囲む、画面の光が急に明るくなる、<ひらめきの効果音>。
Shot 3: フォローフォーカス、主人公@Image 2が立ち上がり、廊下を大股で歩き会議室のドアを押し開ける、カメラがその背中を追う、（ドラムビートが次第に強くなる）。
Shot 4: ローアングル、主人公@Image 2が窓際に立ち、皆を前に自信を持って説明する、都市のスカイラインが背景、逆光が金色に縁取る、{これが私たちの答えです}。
Shot 5: ゆっくりと周回、会場の全員が立ち上がり拍手する、主人公@Image 2がほっと一息つき笑みを浮かべる、金色の光で静止、（音楽がクライマックスで収束）<雷のような拍手>。
制約: 主人公の顔は画像2に準拠し一貫させる；感情の弧は眉をひそめることから緩めることで外化、冷たい青から金色の光への変化は低迷からハイライトに対応；オフィスの設定は一貫させる。
共通制約: 字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然に微動し、石像のように固まらない。
```

### No. 6: 青春の学園

- **Category:** `ショートドラマ / 感情叙事`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像4の女子生徒、画像5の男子生徒を参考（それぞれの顔のメイク・スタイルは対応する画像に準拠）、縦長9:16、青春の爽やかでリアル、明るい暖かい太陽の高い透過光、30秒の学園青春ショートフィルムを生成。

#### Prompt

```text
画像4の女子生徒、画像5の男子生徒を参考（それぞれの顔のメイク・スタイルは対応する画像に準拠）、縦長9:16、青春の爽やかでリアル、明るい暖かい太陽の高い透過光、30秒の学園青春ショートフィルムを生成。
Shot 1: 全景、午後のグラウンドに暖かい陽が斜めに差す、女子生徒@Image 4が本を抱えて歩道を急ぎ足で歩く、風がスカートを揺らす、ゆっくりと近づく、（爽やかなギターが始まる）<セミの軽い鳴き声>。
Shot 2: 中近景、男子生徒@Image 5が自転車で通り過ぎ、急ブレーキをかけて振り返る、二人の視線がぶつかりそれぞれ一瞬固まる、固定カメラ位置、<自転車のブレーキ音>。
Shot 3: クローズアップ、女子生徒@Image 4が頬を赤らめうつむき口元を押さえて笑う、落ちた本を男子生徒@Image 5がかがんで拾う、暖かい陽の光の中でカメラが切り替わる。
Shot 4: 中景、二人が並んで木陰の道を歩き笑いながら話す、木漏れ日が顔の上で跳ねる、フォローフォーカスで同行する、（ギターが次第に陽気になる）。
Shot 5: ゆっくりと上下移動、カメラが上昇して二人の遠ざかる後ろ姿と金色の光に満ちた学園を見下ろす、暖かい陽の光で静止、（音楽が収束する）。
制約: 女子生徒と男子生徒の顔は対応する画像に準拠し一貫させ、男女の体格を明確に区別し双子の混同は禁止；学園の暖かい太陽の高い透過光の設定は一貫させる；淡い恋心は赤らめた頬と口元を押さえた笑みで外化。
共通制約: 字幕なしを維持；seedanceのロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然に微動し、石像のように固まらない。
```

### No. 7: サスペンス回廊

- **Category:** `ショートドラマ / 感情叙事`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

主人公は@画像2にバインド（顔のメイクは対応画像を基準）、縦画面9:16、スリラー・サスペンス写実、暗く冷たい緑のハイコントラストシャドウ、30秒のサスペンスショートフィルムを生成。

#### Prompt

```text
主人公は@画像2にバインド（顔のメイクは対応画像を基準）、縦画面9:16、スリラー・サスペンス写実、暗く冷たい緑のハイコントラストシャドウ、30秒のサスペンスショートフィルムを生成。
Shot 1：クローズアップ、廊下の一灯が明滅し点滅、主人公@画像2の懐中電灯の光が闇を貫く、暗く冷たい緑、固定カメラ位置、<蛍光灯のジージーという電流音>（低周波のうなり音が始まる）。
Shot 2：フォローワーク、カメラは主人公@画像2の背中に密着し、彼/彼女がゆっくりと長い廊下を進むのを追う、足取りはためらいがち、影が長く伸びる、<足音の反響>。
Shot 3：ゆっくりとプッシュイン、主人公@画像2が突然立ち止まり息を殺して振り返る、瞳孔が収縮し冷や汗が滲む、冷たい緑が顔を照らす、<背後からの異音 カタッ>。
Shot 4：カットイン、廊下の突き当たりの一つのドアの隙間から微かな光が漏れ、ゆっくりと開く、主人公@画像2が警戒してライトを掲げ後退する、（弦楽器の鋭い音が高まる）。
Shot 5：ゆっくりとズームアウト、主人公@画像2が暗く長い廊下の中央に一人立つ、周囲の影が迫る、冷たい緑でフリーズ、<突然の無音>（音楽が突然止まる）。
制約：主人公の顔は画像2を基準に全編一貫；緊張感は息を殺した振り返りと冷や汗・瞳孔収縮で外在化；暗く冷たい緑のハイコントラスト光と影、廊下のシーンは全編一貫；エンディングは無音でサスペンスの余韻を残す。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動あり、石像ではない。
```

### No. 8: 破鏡重円（編集タスクで対比を派生）

- **Category:** `ショートドラマ / 感情叙事`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のヒロイン、画像3のヒーローを参考（それぞれの顔のメイクは対応画像を基準）、縦画面9:16、映画的な写実、冷たい灰色の雨から暖かい金色の晴れ日に転換、30秒の破鏡重円感情ショートフィルムを生成。

#### Prompt

```text
画像1のヒロイン、画像3のヒーローを参考（それぞれの顔のメイクは対応画像を基準）、縦画面9:16、映画的な写実、冷たい灰色の雨から暖かい金色の晴れ日に転換、30秒の破鏡重円感情ショートフィルムを生成。
Shot 1：ミディアムクローズアップ、ヒロイン@画像1とヒーロー@画像3が冷たい灰色の雨の中で背中合わせに立ち、それぞれうつむく、二人の間に距離がある、固定カメラ位置、（重苦しいピアノが始まる）<冷たい雨音>。
Shot 2：クローズアップ、一枚の古い写真が水たまりに広げられ雨に濡れる、鏡面の反射に二人が遠ざかっていく、ゆっくりとプッシュイン。
Shot 3：カットイン、空が晴れ暖かい金色の光が降り注ぐ、ヒーロー@画像3が振り返り手を差し伸べる、ヒロイン@画像1がゆっくりと振り返り熱い涙を目に浮かべる、スムーズなパン、（ピアノが暖かく次第に強くなる）。
Shot 4：ミディアムショット、二人が抱き合って立つ、ヒロイン@画像1がヒーロー@画像3の肩に顔を埋める、ヒーローが彼女の髪をそっと撫でる、暖かい金色の逆光が輪郭を描く、ゆっくりとオービット、{ごめん、戻ってきたよ}。
Shot 5：ゆっくりとズームアウト、二人が寄り添う姿が暖かい金色の晴れ日の下で一つに溶け合う、フリーズ、（音楽が円満に収束）。
制約：編集タスクの考え方——まずShot 1からShot 2「冷たい灰色の雨で疎遠な版」マスターバージョンを生成し、その後「人物@画像1/@画像3の顔、カメラ位置・構図を保持し、天候のみを暖かい金色の晴れ日に変更、ポーズを背中合わせから抱き合いに変更」という編集指示でShot 3からShot 5の対比版を派生させ、同シーンでの冷暖反転を実現；ヒロイン・ヒーローの顔は全編一貫、分身・双子は禁止；和解の感情は振り返りの熱い涙と抱擁・顔を埋めることで外在化。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動あり、石像ではない。
```

<a id="category-17"></a>

### ブランドCM / 広告 (6)

### No. 1: フレグランスブランド ワンショット

- **Category:** `ブランドCM / 広告`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の香水瓶を主体として参考、ワイドスクリーン2.35:1、高級映画感、トワイライトゴールドトーン、30秒のブランドムードフィルム、ワンショット（一発撮り）。

#### Prompt

```text
画像1の香水瓶を主体として参考、ワイドスクリーン2.35:1、高級映画感、トワイライトゴールドトーン、30秒のブランドムードフィルム、ワンショット（一発撮り）。
Shot 1：究極のマクロで瓶@画像1の表面に凝結した一滴の水滴から始まり、カメラがゆっくりとズームアウト、水滴が滑り落ち暖かい光を屈折させる、（低く響く環境弦楽が次第に始まる）。
Shot 2：カメラがさらに上昇しパン、香水瓶@画像1が湿った大理石の台の上にゆっくりと立つ、サイド逆光が瓶の輪郭を描く、<水滴が軽く落ちる音>。
Shot 3：カメラが瓶をなめらかに半周オービット、カットガラスを通して金色の液体がトワイライトを屈折させる様子を映し出す、光の斑点が台の上を動く。
Shot 4：カメラがそのまま上昇しセット全体を俯瞰、シルクと花びらが台の上に散らばり、トワイライトゴールドが画面を満たす、【息吹は光のように この瞬間に留まる】。
Shot 5：カメラがゆっくりとズームアウトしてマクロ水滴に戻り、画面がブランドのトワイライトゴールドでボケてフリーズ、（弦楽の一つの長い音で収束）。
制約：全編ワンショットでカットなし；瓶は画像1を基準；トワイライトゴールドトーンと湿った質感を全編通して貫く。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動あり、石像ではない。
```

### No. 2: スポーツブランド 燃える方向

- **Category:** `ブランドCM / 広告`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像2のアスリートを主体として参考、縦画面9:16、ハイコントラストで硬質な冷たいトーン、粒状感のあるストリート風、30秒のスポーツブランド燃える方向の広告を生成。

#### Prompt

```text
画像2のアスリートを主体として参考、縦画面9:16、ハイコントラストで硬質な冷たいトーン、粒状感のあるストリート風、30秒のスポーツブランド燃える方向の広告を生成。
Shot 1：極近クローズアップ、アスリート@画像2の目が影の中で突然開く、ローアングル、<荒い呼吸音>、（低音ドラムが叩き込まれる）。
Shot 2：カメラが素早くフォローワーク、アスリート@画像2が暗い路地からスタートダッシュで飛び出す、足元で水しぶきが飛ぶ、冷たい青い街灯が光の軌跡を引く、<靴底の摩擦音>。
Shot 3：カメラがローアングルで彼/彼女が障害物を飛び越えるのを仰角撮影、逆光シルエットが画面を満たす、（ドラムビートが密集し加速）。
Shot 4：カメラがスムーズにパンしてスプリントする横顔を追う、汗が硬質な光の下で飛び散る、筋肉のラインが緊張する、<心臓の鼓動が轟く>。
Shot 5：カメラがゆっくりと彼/彼女のゴール前の怒涛の表情にプッシュイン、冷たいトーンのハイコントラストでフリーズ、【超越 終わりはない】、（ドラムビートが突然止まる）。
制約：全編冷たい青の硬質光・ハイコントラスト；アスリートは画像2を基準；リズムは遅い我慢から爆発へと段階的に進む。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動あり、石像ではない。
```

### No. 3: 公益 温かみ

- **Category:** `ブランドCM / 広告`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦画面9:16、柔らかい自然光、ドキュメンタリー暖色トーン、浅い被写界深度、30秒の公益温かみショートフィルムを生成、感情は孤独から受け入れられへ。

#### Prompt

```text
縦画面9:16、柔らかい自然光、ドキュメンタリー暖色トーン、浅い被写界深度、30秒の公益温かみショートフィルムを生成、感情は孤独から受け入れられへ。
Shot 1：固定カメラ位置クローズアップ、小さな手が色あせた布のぬいぐるみをしっかり握る、朝日が斜めに差し塵が浮遊、（ピアノの単音が軽く始まる）。
Shot 2：カメラがゆっくりとズームアウト、一人の少女が田舎の教室の隅に独り座る、窓の外は柔らかい逆光、<遠くの子供たちの遊び声>。
Shot 3：カメラがスムーズにパン、大きな手が一本の鉛筆を差し出す、少女がためらいながら顔を上げる、暖かい光が彼女の頬に広がる。
Shot 4：カメラがフォローワーク、少女が手を取られて教室の中央へ歩いていく、クラスメートが集まる、浅い被写界深度で背景がボケる、（弦楽が温かく広がる）。
Shot 5：カメラがゆっくりと上昇し俯瞰、クラス全員が輪になって座り一緒に読書する、暖かい陽が床一面に降り注ぐ、【どの子も 見られる価値がある】、（ピアノと弦楽が収束）。
制約：全編柔らかい自然光・暖色トーン；感情の弧は孤独から受け入れへ；浅い被写界深度で人物を際立たせる。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動あり、石像ではない。
```

### No. 4: 金融 テクノ感

- **Category:** `ブランドCM / 広告`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像3のクレジットカードを主体として参考、横画面16:9、冷静な深青のテクノトーン、ミニマルで高級な質感、30秒の金融テクノロジーブランドフィルムを生成。

#### Prompt

```text
画像3のクレジットカードを主体として参考、横画面16:9、冷静な深青のテクノトーン、ミニマルで高級な質感、30秒の金融テクノロジーブランドフィルムを生成。
Shot 1：究極のマクロでクレジットカード@画像3の金属チップのテクスチャに接近、青色のデータ光の流れがその表面を掠める、（低周波シンセサイザーのパルスが始まる）。
Shot 2：カメラがゆっくりとズームアウト、クレジットカード@画像3が純黒の空間に浮遊、周囲に半透明のデータリングが浮かび上がる、<電子スキャン音>。
Shot 3：カメラがカードをなめらかに一周オービット、青い光のグリッドが視点に合わせて流動、光と影が金属の縁を動く。
Shot 4：カメラが俯瞰、カードの下方から都市のデータのスカイラインが成長する、冷たい青い光点がネットワークを形成、（パルスリズムが推進）。
Shot 5：カメラがゆっくりとカードのブランドロゴにプッシュインしてフリーズ、深青が次第に暗くなる、【安全 は信頼のたびに現れる】、（シンセサイザーの長い音で収束）。
制約：全編冷静な深青のテクノトーン；カードは画像3を基準；データ光の流れの質感を全編貫く。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動あり、石像ではない。
```

### No. 5: 飲料の爽快感

- **Category:** `ブランドCM / 広告`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

参考画像4の飲料缶を主体に、縦画面9:16、高彩度で明るい夏のトーン、透明感のある水感で、30秒の飲料爽快感広告を生成。

#### Prompt

```text
参考画像4の飲料缶を主体に、縦画面9:16、高彩度で明るい夏のトーン、透明感のある水感で、30秒の飲料爽快感広告を生成。
Shot 1: 超高速マクロ接写、一滴の水滴が冷やされた飲料缶@Image 4の表面に落ちてはじける、ローアングル、<さわやかな水の破裂音>、（軽快な電子ビート始まる）。
Shot 2: カメラが結露した水滴で覆われた缶@Image 4をゆっくりと周回、逆光の中で水滴がきらめきながら転がり落ち、陽光が屈折して彩光を放つ。
Shot 3: カメラが素早くズームアウト、飲料が氷で満たされたグラスに注がれ、泡が湧き上がる、<泡のシューという音>。
Shot 4: ローアングルで手が飲料を持ち上げ太陽に向かって掲げる、レモンとミントが空中に散らばる、（ビートが盛り上がる）。
Shot 5: カメラがゆっくりとグラスの口元の泡にズームインして静止、高彩度の夏の青と黄色が画面を満たす、【一口で 夏全体を目覚めさせる】、（ビートがさわやかに終わる）。
制約：全体を通して高彩度で明るい夏のトーン；飲料缶は画像4に準拠；水滴と泡の透明感のある質感を強調。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で、石像のように固まらない。
```

### No. 6: マタニティ・ベビーブランド

- **Category:** `ブランドCM / 広告`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦画面9:16、極限の柔らかい光とクリーム色のトーン、ぼんやりとした夢のような浅い被写界深度で、30秒のマタニティ・ベビーブランドの優しいブランド映像を生成。

#### Prompt

```text
縦画面9:16、極限の柔らかい光とクリーム色のトーン、ぼんやりとした夢のような浅い被写界深度で、30秒のマタニティ・ベビーブランドの優しいブランド映像を生成。
Shot 1: 固定カメラ位置でのマクロ接写、赤ちゃんの丸まった小さなつま先、朝の柔らかい光がベールのように包み込む、（オルゴールの澄んだ音が静かに始まる）。
Shot 2: カメラがゆっくりズームアウト、母親が眠る赤ちゃんを抱いてそっと揺らす、カーテンからぼんやりとした拡散光が差し込む、<赤ちゃんの微かな呼吸音>。
Shot 3: カメラが滑らかに横移動、母親がうつむいて赤ちゃんの額にキスする、クリーム色の暖かい光が二人の輪郭を包む。
Shot 4: カメラがゆっくりと上昇し俯瞰、揺りかごのそばで寄り添う母子、柔らかい綿織物が画面を満たす、（弦楽器の優しい音が加わる）。
Shot 5: カメラがゆっくりと赤ちゃんの広がる笑顔にズームイン、柔らかい光が露出オーバーでぼかされる、【優しさは 最初の守り】、（オルゴールと弦楽器の音が終わる）。
制約：全体を通してクリーム色の極限の柔らかい光；ぼんやりとした浅い被写界深度の夢のような質感；情緒は最初から最後まで静かで優しい。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で、石像のように固まらない。
```

<a id="category-18"></a>

### 旅行 / 文化観光 (6)

### No. 1: 古い町の空撮ワンショット

- **Category:** `旅行 / 文化観光`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

横画面16:9、水墨画のような青灰色のトーン、朝霧の詩的な映画感で、30秒の古い町の文化観光空撮映像を、ワンショット（一発撮り）で生成。

#### Prompt

```text
横画面16:9、水墨画のような青灰色のトーン、朝霧の詩的な映画感で、30秒の古い町の文化観光空撮映像を、ワンショット（一発撮り）で生成。
Shot 1: 空撮で極低空、青石の水路をかすめるように飛ぶ、朝霧の中を一艘の烏篷船が水を切って進んでくる、（古箏の一撥の澄んだ音が始まる）。
Shot 2: カメラがその流れに乗ってゆっくりと上昇、白壁と黒瓦の馬頭牆が重なり合って広がり、路地から炊煙が立ち上る、<櫓や櫂が水をかく音>。
Shot 3: カメラが滑らかに横移動してアーチ橋を越える、橋の下で洗濯する人影がほのかに見え、水面に映る影が揺らぐ。
Shot 4: カメラが上昇を続けながら古い町の全景を周回、水路が脈絡のように曲がりくねり、朝霧が青灰色の屋根を覆う、（笛の遠く響く音が加わる）。
Shot 5: カメラがゆっくりと引き上げ、山々に囲まれた古い町を俯瞰で静止、水墨画のような青灰色が天際にぼかされる、【千年の夢 水辺に寄り添う暮らし】、（古箏と笛の音が終わる）。
制約：全体を通してワンショット（一発撮り）の空撮でカットなし；水墨画のような青灰色と朝霧のトーンを貫く；東洋的な詩情と余白の構図。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で、石像のように固まらない。
```

### No. 2: 島のリゾート

- **Category:** `旅行 / 文化観光`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

横画面16:9、透明感のある高彩度のトロピカルトーン、明るい陽光の質感で、30秒の島のリゾート旅行映像を生成。

#### Prompt

```text
横画面16:9、透明感のある高彩度のトロピカルトーン、明るい陽光の質感で、30秒の島のリゾート旅行映像を生成。
Shot 1: 水中マクロ接写、陽光が碧い海を貫いて投げかける光の柱、魚の群れがさっと泳ぎ過ぎる、（ゆったりとしたウクレレの音が始まる）。
Shot 2: カメラがゆっくりと水面から上がり、白い砂浜とヤシの木、澄んだ礁湖が現れる、ドローンが滑らかにズームアウト、<波が岸を打つ音>。
Shot 3: カメラが低空で一人が透明な浅瀬に飛び込むのを追う、水しぶきがはねてさざ波が広がり、陽光が水面を満たす。
Shot 4: カメラがゆっくりと上昇し周回しながら三日月形の湾を俯瞰、ヨットがエメラルドグリーンの海を滑るように進む、（リズムが軽快で明るい）。
Shot 5: カメラが砂浜で夕日に向かってグラスを掲げるシルエットにズームイン、暖かい金色の光が画面を満たす、【悩みを 岸の向こうに残して】、（ウクレレの音が終わる）。
制約：全体を通して透明感のある高彩度のトロピカルトーン；海の碧さと澄んだ質感を強調；情緒はリラックスして明るい。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で、石像のように固まらない。
```

### No. 3: 雪山の聖潔

- **Category:** `旅行 / 文化観光`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

横画面16:9、冷たく高コントラストな雪白と青のトーン、極限の透明感と壮大さで、30秒の雪山文化観光叙事詩的映像を生成。

#### Prompt

```text
横画面16:9、冷たく高コントラストな雪白と青のトーン、極限の透明感と壮大さで、30秒の雪山文化観光叙事詩的映像を生成。
Shot 1: 極近接マクロ特写、吹雪の中の一片の氷晶の鋭い稜面、冷たい青の逆光がきらめく、<吹きすさぶ寒風の音>、（低い合唱の声が始まる）。
Shot 2: カメラがゆっくりズームアウト、孤峰の雪山が雲海を突き破って天際にそびえ立ち、朝焼けが山頂を金色に染める、画面は広大。
Shot 3: カメラが空撮で滑らかに横移動、連なる雪の稜線をかすめるように飛ぶ、風が雪煙を巻き上げてリボンのように舞う、冷たい青の影と明暗がはっきりと分かれる。
Shot 4: カメラがゆっくりと上昇し、氷河の裂け目が蛇行しながら下るのを俯瞰、青い氷は深く透き通っている、（合唱が層を重ねて壮大に盛り上がる）。
Shot 5: カメラがローアングルで、日照金山（太陽に照らされた山頂）の頂上で静止、冷たい白と暖かい金色の境界に聖なる光が降り注ぐ、【上へ 純粋なものに触れるために】、（人の声が長く伸びて終わる）。
制約：全体を通して冷たい雪白と青のトーンで高コントラスト；壮大で広大な構図；氷晶の質感と日照金山がアクセント。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で、石像のように固まらない。
```

### No. 4: 都市の夜景

- **Category:** `旅行 / 文化観光`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

横画面16:9、サイバーネオンの高彩度トーン、湿った反射光の都市感で、30秒の都市夜景旅行映像を生成。

#### Prompt

```text
横画面16:9、サイバーネオンの高彩度トーン、湿った反射光の都市感で、30秒の都市夜景旅行映像を生成。
Shot 1: 極限マクロ特写、雨滴がガラスを伝って滑り落ちる、背後でネオンの光の斑点がぼんやりとした光の塊になる、（電子シンセサイザーのパルス音が始まる）。
Shot 2: カメラがゆっくりとズームアウトして窓を抜け、ドローンが雨後の車の光跡が織りなす繁華街を俯瞰、<車の流れのざわめき>。
Shot 3: カメラが空撮で滑らかに上昇し、高層ビル群を周回、ガラスカーテンウォールにネオンが反射し、光と影が重なり合ってきらめく。
Shot 4: カメラが低空で、ネオンの街路で傘を差す歩行者を追う、湿った地面がカラフルな灯火を反射する、（ビートがリズミカルに進む）。
Shot 5: カメラがゆっくりと引き上げ、不夜城全体の灯りの海を俯瞰で静止、ネオンが脈打つように呼吸する、【灯火の下には すべて物語がある】、（シンセサイザーの音が終わる）。
制約：全体を通してサイバーネオンの高彩度；湿った反射光の質感を貫く；光跡とネオンの階調が豊か。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で、石像のように固まらない。
```

### No. 5: 砂漠のキャラバン

- **Category:** `旅行 / 文化観光`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

横画面16:9、暖かい金色とオレンジの砂漠トーン、大きな光比の逆光による叙事詩的な感覚で、30秒の砂漠観光プロモーション映像を生成。

#### Prompt

```text
横画面16:9、暖かい金色とオレンジの砂漠トーン、大きな光比の逆光による叙事詩的な感覚で、30秒の砂漠観光プロモーション映像を生成。
Shot 1：極近接マクロで、細かい砂が指の間からさらさらと流れ落ちるクローズアップ、逆光で一粒一粒が金色に輝く、（遠くから聞こえる弦楽器と手鼓の音）。
Shot 2：カメラがゆっくりと引き、一列のキャラバンが起伏する砂丘のシルエットをゆっくりと歩く、夕陽が巨大に地平線に低く垂れている、<ラクダの鈴の音>。
Shot 3：ドローン空撮でキャラバンが砂の尾根に落とす長い斜影を俯瞰、砂丘の曲線が絹のように起伏する。
Shot 4：ローアングルで、先頭のラクダ使いが風に向かって進む逆光シルエットを仰角撮影、風が砂塵を巻き上げる、（手鼓のリズムが次第に強くなる）。
Shot 5：カメラがゆっくりと上昇し、キャラバンが果てしない金色の砂海に消えていくのを俯瞰で固定、暖かい金色とオレンジが天地を覆う、【荒涼を越えて 広大さを見るために】、（弦楽器と手鼓の音が収束する）。
制約：全編を通して暖かい金色とオレンジの大きな光比の逆光；砂丘の曲線とキャラバンのシルエットを構図の核心に；叙事詩的で遠大な情緒。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一つのカメラワークのみを使用；人物は自然に微動し、石像のようにしない。
```

### No. 6: ストリートフード巡り（ワンショット）

- **Category:** `旅行 / 文化観光`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

縦画面9:16、暖かいオレンジの煙と高い彩度のトーン、市井の生き生きとした質感で、30秒のストリートフード巡り映像を生成、ワンショット。

#### Prompt

```text
縦画面9:16、暖かいオレンジの煙と高い彩度のトーン、市井の生き生きとした質感で、30秒のストリートフード巡り映像を生成、ワンショット。
Shot 1：極限のマクロで、鉄板の上でじゅうじゅうと音を立て油が跳ねる食材から始まり、カメラがゆっくりと引き、湯気が立ち上る、<油の跳ねる音>、（陽気な市井の打楽器が始まる）。
Shot 2：カメラが滑らかに横移動し、にぎやかな夜市を通り抜ける、暖かい黄色の電球の下で店主が炒め、炎が立ち上がる、<人声が沸き立つ呼び売りの声>。
Shot 3：カメラが続けて小路に入り込み、蒸籠の蓋を開けると白い湯気が湧き出る、串焼きの炭火が真っ赤なのを掠め、煙と火の気が漂う。
Shot 4：カメラがゆっくりと一つのテーブルを囲む客たちが大いに食べ、杯を合わせて笑う様子を回り込む、暖かいオレンジの灯りが笑顔を満たす、（打楽器のリズムが陽気に）。
Shot 5：カメラがそのまま上昇し、美食の長い通り全体が灯りで明るく照らされるのを俯瞰で固定、人波が動く、【人の世の煙火 最も凡人の心をなだめる】、（打楽器の音が収束する）。
制約：全編ワンショットで連続したカメラワーク、カットなし；暖かいオレンジの煙と高い彩度のトーン；湯気、炎、煙火の気が貫通。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一つのカメラワークのみを使用；人物は自然に微動し、石像のようにしない。
```

<a id="category-19"></a>

### ペット / 動物 (5)

### No. 1: かわいい猫のクローズアップ

- **Category:** `ペット / 動物`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

猫@Image 1を主体に、縦画面9:16、ソフトフォーカスの生活流、暖かい陽射しの米白色調+浅い被写界深度で、30秒の癒し系ペットショートフィルムを生成。

#### Prompt

```text
猫@Image 1を主体に、縦画面9:16、ソフトフォーカスの生活流、暖かい陽射しの米白色調+浅い被写界深度で、30秒の癒し系ペットショートフィルムを生成。
Shot 1：クローズアップ、猫@Image 1が突然瞳孔を大きく開いてレンズを直視、固定カメラ位置、（澄んだチェレスタの単音）<猫の柔らかい「にゃあ」>。
Shot 2：マクロ、猫@Image 1のピンクの鼻が軽く動き、ひげが震える、カメラがゆっくりと接近、<微かな鼻息の音>。
Shot 3：ミディアムショット、猫@Image 1が前足で舞い落ちる羽根を押さえる、カメラが滑らかに横移動、（チェレスタのリズムが軽快に）。
Shot 4：クローズアップ、猫@Image 1があくびをして小さな舌を見せる、カメラがゆっくりと引き、<満足げなゴロゴロ音>。
Shot 5：ワイドショット、猫@Image 1が丸くなって目を閉じて眠りにつく、カメラがゆっくりと上昇し俯瞰で固定、（音楽が次第に弱まる）【今日もゆっくり休もう】。
制約：猫の毛色と模様はImage 1に準じて全編一貫、瞳孔と鼻はピンクを維持、種類や色の変更禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一つのカメラワークのみを使用；人物は自然に微動し、石像のようにしない。
```

### No. 2: 犬の疾走

- **Category:** `ペット / 動物`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

犬@Image 1を主体に、横画面16:9、スポーツフォーカストラッキング、金色の逆光の草原+高速シャッターの粒状感で、30秒の熱血疾走フィルムを生成。

#### Prompt

```text
犬@Image 1を主体に、横画面16:9、スポーツフォーカストラッキング、金色の逆光の草原+高速シャッターの粒状感で、30秒の熱血疾走フィルムを生成。
Shot 1：ローアングルのクローズアップ、犬@Image 1が後ろ足で地面を蹴り爆発的に走り出し草屑を舞い上げる、固定カメラ位置、（ドラムビートが突然始まる）<足音の鈍い響き>。
Shot 2：ワイドショット、犬@Image 1が四肢を伸ばして草原を横断する、カメラが滑らかに横移動でフォーカストラッキング、<風が耳を貫く音>。
Shot 3：フォローミディアムショット、犬@Image 1の耳が後ろに流れ、舌を振り出す、カメラがローアングルでフォロー、（リズムが加速）。
Shot 4：クローズアップ、犬@Image 1が小川を跳び越え水しぶきを上げる、カメラがゆっくりと接近しスローモーション、（<水しぶきが落ちる音>）。
Shot 5：ワイドショット、犬@Image 1がレンズ前に駆け寄り急停止して座り、口を開けて息を切らす、カメラがゆっくりと引き固定、（音楽が収束）<陽気な息遣い>。
制約：犬の品種と毛色はImage 1に準じて全編一貫、走る歩様は実際の四足の力学に合致、浮遊や滑る歩き禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一つのカメラワークのみを使用；人物は自然に微動し、石像のようにしない。
```

### No. 3: 水中の魚群

- **Category:** `ペット / 動物`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

サンゴ礁の熱帯魚群@Image 1を主体に、横画面16:9、ドキュメンタリー級の水中撮影、ティンダル光線+青く透明な水色で、30秒の海底探索フィルムを生成。

#### Prompt

```text
サンゴ礁の熱帯魚群@Image 1を主体に、横画面16:9、ドキュメンタリー級の水中撮影、ティンダル光線+青く透明な水色で、30秒の海底探索フィルムを生成。
Shot 1：クローズアップ、クマノミ一匹@Image 1がイソギンチャクの触手の間から顔を出す、固定カメラ位置、（幻想的な水滴の音楽が始まる）<気泡のぶくぶく音>。
Shot 2：ワイドショット、熱帯魚の群れ@Image 1が集まって銀色の渦を形成する、カメラがゆっくりと回り込む、<水流のうねる音>。
Shot 3：ミディアムショット、魚群@Image 1が一斉に向きを変えて光の柱を通り抜ける、カメラが滑らかに横移動で通り抜ける、（弦楽器が広がる）。
Shot 4：仰角ワイドショット、魚群@Image 1が海面のシルエットに向かって泳ぐ、カメラがゆっくりと上昇し仰角撮影、<深海の低周波の唸り>。
Shot 5：クローズアップ、クマノミ一匹@Image 1が単独でイソギンチャクに戻り留まる、カメラがゆっくりと引き固定、（音楽が次第に消える）。
制約：クマノミのオレンジと白の縞模様と岩礁の配色はImage 1に準じる、魚群の遊泳は自然な位置ずれを保ち重なりやモデル貫通禁止、整然としたクローン隊列禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一つのカメラワークのみを使用；人物は自然に微動し、石像のようにしない。
```

### No. 4: 鳥類のマクロ

- **Category:** `ペット / 動物`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

ハチドリ@Image 1を主体に、縦画面9:16、超マクロ高速撮影、朝露の花叢+ボケたクリーム色の背景で、30秒の生態微視フィルムを生成。

#### Prompt

```text
ハチドリ@Image 1を主体に、縦画面9:16、超マクロ高速撮影、朝露の花叢+ボケたクリーム色の背景で、30秒の生態微視フィルムを生成。
Shot 1：マクロクローズアップ、ハチドリ@Image 1がホバリングし羽ばたきが透明な弧の残像となる、固定カメラ位置、（ハープの倍音が始まる）<高周波の羽ばたきのブーンという音>。
Shot 2：クローズアップ、ハチドリ@Image 1の細長いくちばしが花の蜜腺に探り入れる、カメラがゆっくりと接近、<花びらが軽く震える>。
Shot 3：マクロ、ハチドリ@Image 1の喉の虹色の羽毛が角度に応じて色を変える、カメラがゆっくりと回り込む、（ハープのグリッサンド）。
Shot 4：ミディアムショット、ハチドリ@Image 1が体についた朝露のしずくを振り落とす、カメラが滑らかに横移動しスローモーション、<水滴が落ちる>。
Shot 5：ワイドショット、ハチドリ@Image 1が突然弾丸のように飛び去り画面から消える、カメラがゆっくりと引き空の枝を固定、（音楽が収束）。
制約：ハチドリの虹色の羽色とくちばしの形はImage 1に準じる、羽ばたきは実際の高速ボケ残像を表現、羽が固定されて硬直するのを禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一つのカメラワークのみを使用；人物は自然に微動し、石像のようにしない。
```

### No. 5: 擬人化ペット

- **Category:** `ペット / 動物`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

シェフ帽をかぶった柴犬@画像1を主体に、縦長9:16、ピクサー風3Dカートゥーン、暖かいキッチン照明+高彩度ハイライトで、30秒のコミカルな擬人化ショート動画を生成。3Dカートゥーンレンダリングに固定し、リアルへの逸脱を禁止。

#### Prompt

```text
シェフ帽をかぶった柴犬@画像1を主体に、縦長9:16、ピクサー風3Dカートゥーン、暖かいキッチン照明+高彩度ハイライトで、30秒のコミカルな擬人化ショート動画を生成。3Dカートゥーンレンダリングに固定し、リアルへの逸脱を禁止。
Shot 1：クローズアップ、柴犬@画像1 が斜めにかぶったシェフ帽でフライパンを真剣に見つめる、固定カメラ位置、（コミカルなファゴットの音）{"今日は、フライパンをあおるぞ！"}。
Shot 2：ミディアムショット、柴犬@画像1 が両前足でフライパンを握り食材を空高くあおる、カメラがゆっくりズームイン、<油の跳ねる音>。
Shot 3：ワイドショット、柴犬@画像1 が上を向いて口を開けるが、全て顔に落ちてくる、固定カメラ位置、（効果音"チーン"）<ペタッと顔に貼りつく音>。
Shot 4：クローズアップ、柴犬@画像1 が顔中に生地を付けられ呆然と瞬きする、カメラがゆっくりズームイン、{"...まあ、悪くない。"}。
Shot 5：ミディアムショット、柴犬@画像1 が冷静に焦げた料理を差し出して自慢する、カメラがゆっくりズームアウトしてフリーズ、（軽快なエンディング）【失敗続きの料理の神様・柴】。
制約：柴犬の毛色とシェフ帽は画像1に準拠して全編一貫、3Dカートゥーン画風に固定、顔のパーツは擬人化して表情を誇張するが比率は統一、途中でのリアル化を禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を付け、石像のようにしない。
```

<a id="category-20"></a>

### 子ども / 教育 / 科学 (5)

### No. 1: 火星探査の科学解説

- **Category:** `子ども / 教育 / 科学`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

火星探査車@画像1を主体に、横長16:9、ドキュメンタリー風科学CG、錆びた赤い地表+冷たい星空で、30秒の宇宙科学解説動画を生成。

#### Prompt

```text
火星探査車@画像1を主体に、横長16:9、ドキュメンタリー風科学CG、錆びた赤い地表+冷たい星空で、30秒の宇宙科学解説動画を生成。
Shot 1：ワイドショット、探査車@画像1 が赤い荒野の地平線に静かに佇む、カメラがゆっくり上昇、（壮大なシンセサイザーの音）<火星の風の低いうなり>。
Shot 2：クローズアップ、探査車@画像1 の六輪が礫を踏みしめてゆっくり前進、低いカメラ位置でフォロー、<機械のきしむ音>。
Shot 3：ミディアムショット、探査車@画像1 がロボットアームを伸ばして岩石サンプルを採取、カメラがゆっくりズームイン、（弦楽器の音が次第に強く）【サンプル採取・成分分析】。
Shot 4：ローアングル、探査車@画像1 がカメラマストを上げて空を見上げる、カメラがゆっくり旋回、<データのビープ音>。
Shot 5：ワイドショット、探査車@画像1 が遠くのクレーターに向かって走行する、カメラがゆっくりズームアウトして俯瞰でフリーズ、（音楽が高揚）【次の目的地：未知】。
制約：探査車の構造と配色は画像1に準拠して全編一貫、火星地表は低重力での塵の舞い上がりをリアルに再現、地球の植生や青空の出現を禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を付け、石像のようにしない。
```

### No. 2: 人体器官の図解

- **Category:** `子ども / 教育 / 科学`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

3D心臓モデル@画像1を主体に、横長16:9、医学的可視化、半透明質感+暗い背景に赤い血管の光で、30秒の人体科学解説動画を生成。半透明の医学3Dスタイルに固定し、リアルで血生臭い描写への逸脱を禁止。

#### Prompt

```text
3D心臓モデル@画像1を主体に、横長16:9、医学的可視化、半透明質感+暗い背景に赤い血管の光で、30秒の人体科学解説動画を生成。半透明の医学3Dスタイルに固定し、リアルで血生臭い描写への逸脱を禁止。
Shot 1：ワイドショット、心臓@画像1 が暗い空間に浮かびゆっくり鼓動する、カメラがゆっくり旋回、（低周波の脈動する音楽）<鼓動の音 ドクンドクン>。
Shot 2：クローズアップ、心臓@画像1 の表面に冠動脈がハイライト表示される、カメラがゆっくりズームイン、【冠動脈・血液供給】。
Shot 3：断面ミディアムショット、心臓@画像1 が半透明化して四つの腔と血流を露出、カメラが滑らかに横移動、<血流が流れる音>。
Shot 4：クローズアップ、心臓@画像1 の僧帽弁がリズムに合わせて開閉する、固定カメラ位置、（リズムが鼓動と同期）。
Shot 5：ワイドショット、心臓@画像1 が完全な形に戻り鼓動を続ける、カメラがゆっくりズームアウトしてフリーズ、（音楽が穏やかに）【一日約10万回の鼓動】。
制約：心臓の解剖学的構造と腔の位置は画像1に準拠して科学的に正確、半透明の図解スタイルを維持、リアルで血生臭い描写や構造のずれを禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を付け、石像のようにしない。
```

### No. 3: 子供向け絵本アニメーション

- **Category:** `子ども / 教育 / 科学`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

子熊@画像1を主体に、縦長9:16、2D手描き絵本風、水彩紙の質感+暖色のクレヨン縁取りで、30秒の寝る前の物語アニメーションを生成。2D手描き水彩スタイルに固定し、リアルや3Dへの逸脱を禁止。

#### Prompt

```text
子熊@画像1を主体に、縦長9:16、2D手描き絵本風、水彩紙の質感+暖色のクレヨン縁取りで、30秒の寝る前の物語アニメーションを生成。2D手描き水彩スタイルに固定し、リアルや3Dへの逸脱を禁止。
Shot 1：ミディアムショット、子熊@画像1 が木の戸を押し開けて星空を見つめる、固定カメラ位置、（オルゴールのメロディー）{"今夜の星は本当にきれいだね。"}。
Shot 2：ワイドショット、子熊@画像1 が小さな提灯を持って花咲く小道を歩く、カメラが滑らかに横移動、<草の葉がさらさら鳴る音>。
Shot 3：クローズアップ、子熊@画像1 が上を見上げて流れ星が通り過ぎるのを見る、カメラがゆっくりズームイン、（チーンという音）【願い事をしよう】。
Shot 4：ミディアムショット、子熊@画像1 が目を閉じて両手を合わせて願い事をする、カメラがゆっくり旋回、<夜風が優しく吹く音>。
Shot 5：ワイドショット、子熊@画像1 が草地に横たわり葉っぱの布団をかけて眠りにつく、カメラがゆっくり上昇して俯瞰でフリーズ、（オルゴールの音が次第に弱く）{"おやすみ、小さな星たち。"}。
制約：子熊のデザインと配色は画像1に準拠して全編一貫、2D手描き水彩の筆跡に固定、紙の質感と縁取りを残し、3Dやリアル化への転換を禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を付け、石像のようにしない。
```

### No. 4: 物理実験のデモンストレーション

- **Category:** `子ども / 教育 / 科学`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

ニュートンのゆりかごの金属球@画像1を主体に、横長16:9、理科演示リアル、純粋な実験室の白+サイドからの逆光で、30秒の物理科学解説動画を生成。

#### Prompt

```text
ニュートンのゆりかごの金属球@画像1を主体に、横長16:9、理科演示リアル、純粋な実験室の白+サイドからの逆光で、30秒の物理科学解説動画を生成。
Shot 1：クローズアップ、ニュートンのゆりかご@画像1 の一端の小球が持ち上げられ静止、固定カメラ位置、（サスペンスな時計の音）<指が離れる軽い音>。
Shot 2：ミディアムショット、小球@画像1 が振り下ろされ衝突の瞬間にエネルギーが伝わる、カメラがゆっくりズームインしてスローモーション、<金属の澄んだ衝突音>。
Shot 3：クローズアップ、反対側の小球@画像1 が弾かれて空中に浮かび上がる、カメラが滑らかに上昇をフォロー、（効果音"チーン"）【運動量保存】。
Shot 4：ワイドショット、ニュートンのゆりかご@画像1 の両端が交互に往復運動する、カメラがゆっくり旋回、<規則的なリズムの衝突音>。
Shot 5：ミディアムショット、小球@画像1 の振幅が次第に小さくなり静止に近づく、カメラがゆっくりズームアウトしてフリーズ、（音楽が収束）【エネルギーは衝突の中で伝わる】。
制約：金属球の数と支持構造は画像1に準拠、振動は現実の運動量保存の物理法則に従い、力学に反する浮遊や増幅を禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を付け、石像のようにしない。
```

### No. 5: 歴史シーンの再現

- **Category:** `子ども / 教育 / 科学`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

古代ローマのコロッセオ@画像1を主体に、横長16:9、歴史再現の叙事詩、金色の黄昏の塵の光+古いフィルムの粒子で、30秒の歴史ドキュメンタリー動画を生成。

#### Prompt

```text
古代ローマのコロッセオ@画像1を主体に、横長16:9、歴史再現の叙事詩、金色の黄昏の塵の光+古いフィルムの粒子で、30秒の歴史ドキュメンタリー動画を生成。
Shot 1：ワイドショット、コロッセオ@画像1 が黄昏の残光を浴びて堂々とそびえ立つ、カメラがゆっくり上昇して空撮、（叙事詩的な合唱）<古代の風の音>。
Shot 2：ミディアムショット、コロッセオ@画像1 の観客席が廃墟から次第に"再生"して満席に復元される、カメラがゆっくりズームイン、<群衆の喧騒が湧き上がる>。
Shot 3：クローズアップ、コロッセオ@画像1 の石造アーチの彫刻の詳細、カメラが滑らかに横移動、（ドラムの音が次第に強く）【紀元80年・完成】。
Shot 4：ローアングルワイドショット、コロッセオ@画像1 の中央競技場の砂地から塵が舞い上がる、カメラがゆっくり旋回、<角笛が長く鳴り響く>。
Shot 5：ワイドショット、コロッセオ@画像1 の復元された映像が"消散"して現在の廃墟に戻る、カメラがゆっくりズームアウトして俯瞰でフリーズ、（音楽が寂しく収束）【千年の後も、なおそびえ立つ】。
制約：コロッセオの建築構造と損傷箇所は画像1に準拠、復元と廃墟の形態は一致して対応、史実に合わない現代的な要素の創作を禁止。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を付け、石像のようにしない。
```

<a id="category-21"></a>

### ゲーム / CG / ファンタジー (5)

### No. 1: 巨竜の急降下

- **Category:** `ゲーム / CG / ファンタジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

参考画像1の黒竜と騎士を主体に、ワイドスクリーン2.35:1、映画級CG、暖かいエッジライト+深い青のシャドウで、30秒のファンタジーフライト映像を生成。

#### Prompt

```text
参考画像1の黒竜と騎士を主体に、ワイドスクリーン2.35:1、映画級CG、暖かいエッジライト+深い青のシャドウで、30秒のファンタジーフライト映像を生成。
Shot 1：全景，黒竜@Image 1 が峡谷から飛び立ち翼を広げ、カメラがゆっくり上昇して追従，（壮大なオーケストラ音楽が始まる）。
Shot 2：中景，騎士@Image 1 が身を低くし、黒竜@Image 1 が右に急旋回して急降下、カメラが安定して追従（やや低いアングル），<風の唸る音>。
Shot 3：クローズアップ，黒竜@Image 1 が片翼を畳んで滝の水霧を抜ける、カメラがゆっくりズームイン。
Shot 4：全景，黒竜@Image 1 が霧から飛び出し森林の空き地に滑り込む、カメラがゆっくりズームアウトして静止，（音楽が収束）。
约束：黒竜と騎士の外見はImage 1に準拠し全編を通して一貫、分身や双子は禁止。
通用约束：字幕無しを保持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い石像ではない。
```

### No. 2: 魔法発動

- **Category:** `ゲーム / CG / ファンタジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

女魔術師@Image 1を主体に、ワイドスクリーン2.35:1、映画級ファンタジーCG、幽玄なルーンの光+粒子の輝きで、30秒の詠唱シーンを生成。

#### Prompt

```text
女魔術師@Image 1を主体に、ワイドスクリーン2.35:1、映画級ファンタジーCG、幽玄なルーンの光+粒子の輝きで、30秒の詠唱シーンを生成。
Shot 1：クローズアップ，女魔術師@Image 1 が目を見開き瞳にルーンが輝く、固定アングル，（低い聖歌が突然始まる）{"エーテルの名において——"}。
Shot 2：中景，女魔術師@Image 1 が手を上げ掌に回転する魔法陣が集束、カメラがゆっくり旋回，<エネルギーが唸り上がる音>。
Shot 3：クローズアップ，女魔術師@Image 1 の指先に粒子が集まり光球となる、カメラがゆっくりズームイン，（音楽が一瞬止まる）。
Shot 4：全景，女魔術師@Image 1 が両手を押し出し巨大な氷霜の爆発を前方に放つ、カメラが安定して衝撃波を追従，<轟然と炸裂する音>。
Shot 5：中景，女魔術師@Image 1 が構えを解き息を切らし魔法陣の残光が消える、カメラがゆっくりズームアウトして静止，（聖歌の余韻が収束）。
约束：女魔術師の衣装とルーンの配色はImage 1に準拠し全編一貫、魔法陣と粒子は常に幽玄な青系色を保持、途中での色変化や人物の変形は禁止。
通用约束：字幕無しを保持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い石像ではない。
```

### No. 3: メカ登場

- **Category:** `ゲーム / CG / ファンタジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

巨大メカ@Image 1を主体に、ワイドスクリーン2.35:1、ハードコア工業CG、冷たい鋼鉄の金属+格納庫のスポットライトと蒸気で、30秒のメカ出撃シーンを生成。

#### Prompt

```text
巨大メカ@Image 1を主体に、ワイドスクリーン2.35:1、ハードコア工業CG、冷たい鋼鉄の金属+格納庫のスポットライトと蒸気で、30秒のメカ出撃シーンを生成。
Shot 1：クローズアップ，メカ@Image 1 のメインカメラ（目）が突然赤く光る、固定アングル，（工業的な低音の轟音が始まる）<システム起動の唸り音>。
Shot 2：ローアングル全景，メカ@Image 1 が格納庫でゆっくり頭を上げ立ち上がる、カメラがゆっくり上昇しローアングルで撮影，<油圧のシューという音>。
Shot 3：中景，メカ@Image 1 が一歩踏み出し地面を震わせ、蒸気が噴出、カメラがローアングルで追従，（ドラムビートが響く）<重い金属の足音>。
Shot 4：クローズアップ，メカ@Image 1 の肩部ミサイルランチャーが展開しロックオン、カメラがゆっくりズームイン，（効果音"ロックオン"ビー）【武装完了】。
Shot 5：全景，メカ@Image 1 が格納庫から飛び出し戦場に躍り出る、カメラが安定して追従しズームアウトして静止，（音楽が爆発的に収束）<スラスターの轟音>。
约束：メカの機体構造と塗装はImage 1に準拠し全編一貫、機械関節の動きは重量感と油圧の論理に合致、部品の貫通や軽快な動きは禁止。
通用约束：字幕無しを保持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い石像ではない。
```

### No. 4: オープンワールド遠景

- **Category:** `ゲーム / CG / ファンタジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

ファンタジー大陸の全景@Image 1を主体に、ワイドスクリーン2.35:1、オープンワールドゲームCG、体積雲と朝霧+超遠距離の被写界深度で、30秒の世界観展示映像を生成。

#### Prompt

```text
ファンタジー大陸の全景@Image 1を主体に、ワイドスクリーン2.35:1、オープンワールドゲームCG、体積雲と朝霧+超遠距離の被写界深度で、30秒の世界観展示映像を生成。
Shot 1：全景，大陸@Image 1 に朝霧が谷間と遠方の浮遊島を覆う、カメラがゆっくり上昇し空撮，（広大なストリングス音楽が始まる）<朝風と鳥のさえずり>。
Shot 2：中景，大陸@Image 1 の滝が巨大な崖から雲海に落下、カメラが安定して横移動，<水の轟音>。
Shot 3：全景，大陸@Image 1 を一群の巨獣が草原を掠め遠方の城郭へと駆ける、カメラがゆっくり追従，（ストリングス音楽が層を成して進行）。
Shot 4：クローズアップ，大陸@Image 1 の古代遺跡の石碑にルーンが刻まれている、カメラがゆっくりズームイン，<神秘的な低鳴り>。
Shot 5：全景，大陸@Image 1 カメラが引き上げ大陸全体の全貌と二つの太陽の空を明らかにする、カメラがゆっくり上昇しズームアウトして静止，（音楽が壮大に収束）【世界は、あなたの探索を待っている】。
约束：大陸の地形と浮遊島の配置はImage 1に準拠し全編一貫、超遠景の被写界深度は体積霧の階調を保持、地形の継ぎ目ずれや比率の歪みは禁止。
通用约束：字幕無しを保持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い石像ではない。
```

### No. 5: 白モデルレンダリングデモ

- **Category:** `ゲーム / CG / ファンタジー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

シーンの白モデル@Image 1を主体に、材質は参考画像2から取得、横画面16:9、リアルタイムレンダリングBreakdownデモ、灰色の無光沢なベースモデルから始まり、30秒の白モデルから完成映像へのレンダリング進化シーンを生成。

#### Prompt

```text
シーンの白モデル@Image 1を主体に、材質は参考画像2から取得、横画面16:9、リアルタイムレンダリングBreakdownデモ、灰色の無光沢なベースモデルから始まり、30秒の白モデルから完成映像へのレンダリング進化シーンを生成。
Shot 1：全景，白モデル@Image 1 灰色の無材質シーンがゆっくり回転しブロックを展示、カメラがゆっくり旋回，（テクノ感のある電子音楽が始まる）【Blockout・白モデル】。
Shot 2：中景，白モデル@Image 1 の表面に材質@Image 2 が刷り込まれ石材や木目が面ごとに覆われる、カメラが安定して横移動，<材質ロードのカチカチ音>。
Shot 3：クローズアップ，シーン@Image 1 に法線と粗さのディテールが浮かび上がり凹凸の質感が現れる、カメラがゆっくりズームイン，【PBR材質・彩色】。
Shot 4：全景，シーン@Image 1 にライトが一つずつ点灯し影と反射を落とす、カメラがゆっくり上昇，（音楽が層を成して進行）【Lighting・照明】。
Shot 5：全景，シーン@Image 1 にポストプロダクションのカラーグレーディングと体積光が加わり最終フレームとなる、カメラがゆっくりズームアウトして静止，（音楽が収束）【Final Render】。
约束：シーンのブロックと構造はImage 1に準拠し全編一貫、材質テクスチャはImage 2から段階的に重ね合わせ、白モデルから完成映像への変化はシェーディングのみで幾何レイアウトは変更せず、モデルの変形や穿幫は禁止。
通用约束：字幕無しを保持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い石像ではない。
```

<a id="category-22"></a>

### アニメ / カートゥーン (4)

### No. 1: ジブリ風深夜ごはん

- **Category:** `アニメ / カートゥーン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

参考画像1の一組の手と深夜の台所を主体に（手と台所は画像1に準拠）、縦画面9:16、ジブリ手描き風、暖かい黄色の夜の台所調で、30秒の癒しの深夜食堂シーンを生成。

#### Prompt

```text
参考画像1の一組の手と深夜の台所を主体に（手と台所は画像1に準拠）、縦画面9:16、ジブリ手描き風、暖かい黄色の夜の台所調で、30秒の癒しの深夜食堂シーンを生成。
Shot 1：極近クローズアップ，一滴の水玉がトマトの表皮を転がり暖かい灯りを映す、固定の微俯角アングル，<水玉が落ちる軽い音>，（癒しの木製ギターが始まる）。
Shot 2：中景，片手が包丁を持ちトマトを切り赤い汁が滲む、カメラがゆっくり平行移動，<刃が果肉を切る柔らかく脆い音>。
Shot 3：クローズアップ，トマトの切れ端が熱した油鍋に滑り込み白煙が立ち上る、カメラがゆっくりズームイン，<食材が鍋に入る爆ぜる音>。
Shot 4：極近クローズアップ，手がバジルの葉を振り入れ炒め香りが立ち上る、カメラがゆっくり旋回，<フライ返しで炒めるサラサラ音>。
Shot 5：中景，熱いスープが陶器の丼によそわれ手に持たれ画面中央へ、カメラがゆっくりズームアウト，<スープがグツグツ煮える音>，（木製ギターが収束）。
约束：ジブリ手描き風に固定しリアル寄りへの逸脱は禁止；全編を通して一組の手のみで顔や余分な手は出現しない；夜の台所の調度品はImage 1に準拠し固定。
通用约束：字幕無しを保持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い石像ではない。
```

### No. 2: Q版キャラクターのインタラクション

- **Category:** `アニメ / カートゥーン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の2体の丸い頭に大きな目のQ版キャラクターを主体に（デザインと配色は画像1に準拠）、縦画面9:16、キャンディカラーのカートゥーンショート風、高彩度の柔らかい光調で、30秒の萌え系インタラクション動画を生成。

#### Prompt

```text
画像1の2体の丸い頭に大きな目のQ版キャラクターを主体に（デザインと配色は画像1に準拠）、縦画面9:16、キャンディカラーのカートゥーンショート風、高彩度の柔らかい光調で、30秒の萌え系インタラクション動画を生成。
Shot 1: 極端なクローズアップ、一匹のQ版キャラクターが目を大きく見開き、頬を膨らませて笑いをこらえる、固定カメラ位置、<カートゥーン風の「ポン」とはじける効果音>、（軽快なマリンバの音で始まる）。
Shot 2: ミディアムショット、もう一匹のキャラクターが跳ねながら近づき、ハート型のキャンディを差し出す、カメラがゆっくり横移動、<足音の跳ねる「チンチン」という音>。
Shot 3: フルショット、2匹のキャラクターが手をつないでその場で回転し、星の軌跡を振りまく、カメラがゆっくり旋回、{（キャラクター）「一緒に回ろう！」}。
Shot 4: クローズアップ、一匹のキャラクターが突然つまずき、目に涙をいっぱいにためる、カメラがゆっくりズームイン、<大げさな「わあ」という泣き声の効果音>。
Shot 5: ミディアムショット、もう一匹のキャラクターが飛びついて抱きしめ、二つのハートが画面から飛び出す、カメラがゆっくりズームアウト、【友情満タン】、（マリンバの音が上昇して終わる）。
制約: Q版キャンディカラーカートゥーン風に固定し、リアルや写実への逸脱を禁止；2体のキャラクターデザインと配色は画像1に厳密に準拠；誇張された表情と変形はカートゥーンの物理法則に従う。
共通制約: 字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動を伴い、石像のように動かないこと。
```

### No. 3: 3Dピクサー風

- **Category:** `アニメ / カートゥーン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の小さなロボットキャラクターを主体に（デザインと材質は画像1に準拠）、横画面16:9、ピクサー風3Dアニメーション、朝の暖かい陽射しの質感調で、30秒の癒やし探索ショートを生成。

#### Prompt

```text
画像1の小さなロボットキャラクターを主体に（デザインと材質は画像1に準拠）、横画面16:9、ピクサー風3Dアニメーション、朝の暖かい陽射しの質感調で、30秒の癒やし探索ショートを生成。
Shot 1: 極端なクローズアップ、小さなロボットの丸い目のレンズがゆっくりと点灯し、タンポポの綿毛に焦点を合わせる、固定カメラ位置、<機械的な焦点合わせの「チッ」という音>、（オーケストラの柔らかい音で始まる）。
Shot 2: ミディアムショット、小さなロボットが首をかしげて興味津々に機械の腕を伸ばし、花びらにそっと触れる、カメラがゆっくりズームイン、<サーボモーターの微細な回転音>。
Shot 3: フルショット、一陣の風がタンポポの種を吹き飛ばし、小さなロボットが追いかけて走る、カメラが追従撮影、<綿毛が散る空気の音>。
Shot 4: ローアングル、種が空一面に舞い、小さなロボットが両腕を広げて見上げる、カメラがゆっくり上下移動、（弦楽器の音が次第に強くなる）。
Shot 5: ロングショット、小さなロボットが丘の頂上に一人立ち、朝日が昇り影を長く伸ばす、カメラがゆっくりズームアウト、（オーケストラの音がクライマックスで終わる）。
制約: ピクサー風3Dに固定し、リアルやジブリ風手描きへの逸脱を禁止；ロボットのデザインと材質は画像1に準拠；サブサーフェススキャッタリングによる暖かい光を全編通して貫く。
共通制約: 字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動を伴い、石像のように動かないこと。
```

### No. 4: 水彩風景アニメーション

- **Category:** `アニメ / カートゥーン`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の江南の水郷の町を主体に（構図と色調は画像1に準拠）、横画面16:9、流動する水彩手描きアニメーション風、雨後の青みがかった淡い彩度調で、30秒の詩的な四季の移り変わりショートを生成。

#### Prompt

```text
画像1の江南の水郷の町を主体に（構図と色調は画像1に準拠）、横画面16:9、流動する水彩手描きアニメーション風、雨後の青みがかった淡い彩度調で、30秒の詩的な四季の移り変わりショートを生成。
Shot 1: 極端なクローズアップ、一滴の雨が水面に落ち、波紋が広がり墨色が拡散する、固定された微俯角のカメラ位置、<雨滴が水に落ちる澄んだ音>、（箏のハーモニクスで始まる）。
Shot 2: フルショット、青い瓦と白い壁が水中に映り、水彩の筆致が波と共にゆらぐ、カメラがゆっくり横移動、<細かい雨のしとしとという音>。
Shot 3: ロングショット、一枚の烏篷船がアーチ橋の下を滑るように通り、水紋を広げる、カメラがゆっくり追従撮影、<木の櫂が水をかく音>。
Shot 4: ミディアムショット、橋のたもとの柳の枝が芽吹き、花びらが舞い落ち、色調が春のピンクに変わる、カメラがゆっくりズームイン、<微風が葉を揺らす音>。
Shot 5: ロングショット、暮れなずむ空の下、提灯が次々と灯り、川一面に映る、カメラがゆっくり上下移動、（箏の音が遠くへ消えるように終わる）。
制約: 流動する水彩手描き風に固定し、リアルや3Dへの逸脱を禁止；水郷の構図は画像1に準拠；筆致のにじみ感と紙の質感テクスチャーを全編通して保持。
共通制約: 字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動を伴い、石像のように動かないこと。
```

<a id="category-23"></a>

### スポーツ / フィットネス (4)

### No. 1: ジムでのパワー

- **Category:** `スポーツ / フィットネス`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のデッドリフトを行うアスリートを主体に（人物と器具は画像1に準拠）、縦画面9:16、ハードコアなフィットネス広告風、クールトーンでハイコントラストの鋼鉄質感調で、30秒のパワー爆発ショートを生成。

#### Prompt

```text
画像1のデッドリフトを行うアスリートを主体に（人物と器具は画像1に準拠）、縦画面9:16、ハードコアなフィットネス広告風、クールトーンでハイコントラストの鋼鉄質感調で、30秒のパワー爆発ショートを生成。
Shot 1: 極端なクローズアップ、手のひらに付けたチョークがバーベルに強く叩きつけられ、粉が飛び散る、固定カメラ位置、<チョークが叩きつけられる鈍い音>、（低音のドラムビートのパルスで始まる）。
Shot 2: クローズアップ、両手がバーベルを強く握りしめ、青筋が浮き出る、カメラがゆっくりズームイン、<鉄のバーがきしむ負荷の音>。
Shot 3: フルショット、アスリートが力を込めてバーベルを持ち上げ、ウエイトプレートが微かに震える、カメラがゆっくり上下移動し、立ち上がりに追従、<深い力みのうなり声>。
Shot 4: ローアングル、バーベルが頂点に挙がり、筋肉のラインがクールな光で浮かび上がる、カメラがゆっくり旋回、（ドラムビートが最も重く打ち鳴らされる）。
Shot 5: クローズアップ、バーベルが地面に叩きつけられ、跳ね上がって震え、汗のしずくが飛び散る、カメラがゆっくりズームアウト、<鉄のプレートが地面に落ちる大きな音>、（ドラムビートが突然止まる）。
制約: 人物と器具は画像1に準拠；クールトーンのハードライトとハイコントラストを全編通して貫く；ウエイトプレートの震えと汗のしずくは、実際の重量の物理法則に従うこと。
共通制約: 字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動を伴い、石像のように動かないこと。
```

### No. 2: ヨガのストレッチ

- **Category:** `スポーツ / フィットネス`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のヨガ実践者と朝の光が差し込む教室を主体に（人物と空間は画像1に準拠）、縦画面9:16、静寂で禅的なライフスタイル風、朝霧の柔らかい光の低彩度調で、30秒の心身を伸ばすショートを生成。

#### Prompt

```text
画像1のヨガ実践者と朝の光が差し込む教室を主体に（人物と空間は画像1に準拠）、縦画面9:16、静寂で禅的なライフスタイル風、朝霧の柔らかい光の低彩度調で、30秒の心身を伸ばすショートを生成。
Shot 1: 極端なクローズアップ、実践者が目を閉じて深く呼吸し、鼻息が細かな塵を舞い上げ、光の束の中で浮遊する、固定カメラ位置、<長くゆったりとした呼吸音>、（シンギングボウルの長い音で始まる）。
Shot 2: フルショット、身体がゆっくりと折りたたまれ、前屈に入り、朝の光が背中を滑る、カメラがゆっくり上下移動、<衣服が擦れる微かな音>。
Shot 3: ミディアムショット、両腕を伸ばし流れるように動かし、ウォーリアーのポーズに入り、呼吸は安定している、カメラがゆっくり旋回、（ボウルの音と鳥のさえずりが織り交ざる）。
Shot 4: クローズアップ、指先がそっと足首に触れ、筋肉のラインが伸びてストレッチされる、カメラがゆっくり横移動、<腱が伸びる微かな音>。
Shot 5: フルショット、あぐらをかいて合掌し、うつむき、朝霧が教室全体に広がる、カメラがゆっくりズームアウト、（シンギングボウルの余韻が消える）。
制約: 人物と朝の光の教室は画像1に準拠；柔らかい光の低彩度で禅的な基調を全編通して貫く；動作は連続的で緩やかであり、いかなる急な切り替えも禁止。
共通制約: 字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動を伴い、石像のように動かないこと。
```

### No. 3: バスケットボールダンク

- **Category:** `スポーツ / フィットネス`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のストリートバスケットボール選手を主体に（人物とコートは画像1に準拠）、横画面16:9、熱血ストリートスポーツ広告風、夕暮れの暖かいオレンジ色のハードライト調で、30秒のダンク高揚ショートを生成。

#### Prompt

```text
画像1のストリートバスケットボール選手を主体に（人物とコートは画像1に準拠）、横画面16:9、熱血ストリートスポーツ広告風、夕暮れの暖かいオレンジ色のハードライト調で、30秒のダンク高揚ショートを生成。
Shot 1: 極端なクローズアップ、バスケットボールが指先で高速回転し、模様が鮮明に見える、固定カメラ位置、<皮のボールが回転する摩擦音>、（エレクトロニックドラムの重いビートで始まる）。
Shot 2: フルショット、選手がドリブルで突破し、急停止して方向転換し、靴底が地面を擦る、カメラが追従撮影、<シューズが急ブレーキをかけるきしむ音>。
Shot 3: ミディアムショット、両足で地面を蹴り、身体を目一杯に伸ばしてバスケットゴールに向かって飛び上がる、カメラがゆっくり上下移動し、ジャンプに追従、<ジャンプで地面を蹴る爆発音>。
Shot 4: ローアングル、空中で一瞬静止し、手にボールを構えてまさに叩き込もうとする逆光のシルエット、カメラがゆっくり旋回、（ドラムビートが一拍分空ける静寂）。
Shot 5: クローズアップ、バスケットボールが暴力的にネットに叩き込まれ、リムが激しく震える、カメラがゆっくりズームイン、<リムがガシャンと鳴る大きな音>、（ドラムビートが炸裂して終わる）。
制約: 人物とストリートコートは画像1に準拠；夕暮れの暖かいオレンジ色のハードライトと逆光を全編通して貫く；空中での浮遊時間とネットの震えは、実際の運動の物理法則に従うこと。
共通制約: 字幕なしを維持；Logoを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ使用；人物は自然な微動を伴い、石像のように動かないこと。
```

### No. 4: ランニングシルエット

- **Category:** `スポーツ / フィットネス`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の朝のランナーと海岸道路を主体に（人物のシルエットと環境は画像1に準拠）、横画面16:9、スポーツブランドのインスピレーショナルなスタイル、日の出逆光のゴールデンオレンジ調で、30秒の朝ラン継続動画を生成。

#### Prompt

```text
画像1の朝のランナーと海岸道路を主体に（人物のシルエットと環境は画像1に準拠）、横画面16:9、スポーツブランドのインスピレーショナルなスタイル、日の出逆光のゴールデンオレンジ調で、30秒の朝ラン継続動画を生成。
Shot 1: 極近接アップ、ランニングシューズが濡れたアスファルトを踏み小さな水しぶき、固定されたやや俯瞰のカメラ位置、<靴底が地面に触れる踏み鳴らし音>、（鼓舞するストリングスのベースが始まる）。
Shot 2: 中景、ランナーの逆光シルエットが均一な歩幅で歩み、汗があごに沿って滴り落ちる、カメラが追従、<安定した力強い呼吸のリズム>。
Shot 3: 全景、海岸線が広がり朝日が海から飛び出し空を赤く染める、カメラがゆっくり上下移動、（ストリングスにドラムビートが加わり進行）。
Shot 4: クローズアップ、腕を振る手首の時計の数字が跳ね上がり心拍数が上昇、カメラがゆっくりパン、<時計のチクタク音>。
Shot 5: 遠景、ランナーのシルエットが坂の頂上に駆け上がり両腕を広げて朝日を抱擁、カメラがゆっくりズームアウト、（ストリングスとドラムビートが共に鳴り響きクライマックスで収束）。
制約：人物のシルエットと海岸道路は画像1に準拠；日の出逆光のゴールデンオレンジ調を貫く；走る姿勢と歩頻は均一で連続し、途切れない。
```

<a id="category-24"></a>

### 音楽 / ダンス / MV (4)

### No. 1: ダンスフォロー

- **Category:** `音楽 / ダンス / MV`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のモダンダンサーと工業風空間を主体に（人物とシーンは画像1に準拠）、縦画面9:16、都市MVフォロー撮影風、クールブルーのネオン光と影のトーンで、30秒のリズミカルなダンス動画を生成。

#### Prompt

```text
画像1のモダンダンサーと工業風空間を主体に（人物とシーンは画像1に準拠）、縦画面9:16、都市MVフォロー撮影風、クールブルーのネオン光と影のトーンで、30秒のリズミカルなダンス動画を生成。
Shot 1: 極近接アップ、ダンサーの指先が最初のビートに合わせて突然弾ける、固定カメラ位置、<パキッという指パッチン音>、（リズミカルなエレクトロニックビートが始まる）。
Shot 2: 全景、身体が大きく振られダンスステップが広がりビートに合わせて揺れる、カメラが追従、<衣料が空気を切る音>。
Shot 3: 中景、回転ジャンプでスカートが弧を描きネオンの残像が引く、カメラがゆっくり周回、（ビートが密になりベースが重なる）。
Shot 4: クローズアップ、つま先が急にステップを踏み地面の反射が揺らぐ、カメラがゆっくりパン、<ヒールの連続した踏み鳴らし音>。
Shot 5: 全景、ポーズで静止しネオンのストロボが全身の輪郭を照らす、カメラがゆっくりズームアウト、（ビートが強拍で収束）。
制約：人物と工業風空間は画像1に準拠；クールブルーのネオン光と影のトーンを貫く；カメラワークのリズムは音楽の強拍と厳密に同期すること。
```

### No. 2: ピアノソロ

- **Category:** `音楽 / ダンス / MV`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のピアニストと古い劇場の舞台を主体に（人物とピアノは画像1に準拠）、横画面16:9、クラシックコンサート映画感風、暖かい金色のスポットライトと暗い場のトーンで、30秒の情感豊かなソロ演奏動画を生成。

#### Prompt

```text
画像1のピアニストと古い劇場の舞台を主体に（人物とピアノは画像1に準拠）、横画面16:9、クラシックコンサート映画感風、暖かい金色のスポットライトと暗い場のトーンで、30秒の情感豊かなソロ演奏動画を生成。
Shot 1: 極近接アップ、指先が鍵盤の上に静止しそっと下ろして最初の音を鳴らす、固定カメラ位置、（ピアノの単音が澄んで響き始める）。
Shot 2: クローズアップ、両手が白黒鍵盤上を滑らかに動きピアノハンマーが上下する、カメラがゆっくりパン、<鍵盤が弦を打つ軽快な音>。
Shot 3: 中景、ピアニストが目を閉じて没頭し身体がメロディーに合わせてわずかに前後する、カメラがゆっくりズームイン、（メロディーがクライマックスに入る）。
Shot 4: 全景、スポットライトを浴びたピアノが広い舞台に浮かび塵の光が漂う、カメラがゆっくり上下移動、（和音が層を成して重なる）。
Shot 5: 極近接アップ、最後の鍵が押され指が留まり余韻が震える、カメラがゆっくりズームアウト、<弦の余韻が徐々に消える>、（メロディーが静かに収束）。
制約：人物とピアノは画像1に準拠；暖かい金色のスポットライトと暗い場のトーンを貫く；手の鍵盤動作は音符の開始と終了に厳密に対応すること。
```

### No. 3: ストリートダンスバトル

- **Category:** `音楽 / ダンス / MV`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の2人のストリートダンサーと地下会場を主体に（人物と場所は画像1に準拠）、縦画面9:16、地下ストリートダンスドキュメンタリー風、ハイコントラストの暖色と寒色の混光トーンで、30秒の対決バトル動画を生成。

#### Prompt

```text
画像1の2人のストリートダンサーと地下会場を主体に（人物と場所は画像1に準拠）、縦画面9:16、地下ストリートダンスドキュメンタリー風、ハイコントラストの暖色と寒色の混光トーンで、30秒の対決バトル動画を生成。
Shot 1: 極近接アップ、一人のダンサーが帽子のつばを下げ挑発的にカメラを直視する、固定カメラ位置、<群衆のざわめきと野次>、（ヒップホップのドラムビートが叩きつけられる）。
Shot 2: 全景、最初のダンサーが場に飛び出し爆発的なフロアアクションを披露、見物人の輪が開く、カメラが追従、<手のひらが床を叩く実感のある音>。
Shot 3: 中景、トーマス回転やウィンドミルアクションで足が円を描く、カメラがゆっくり周回、（群衆の歓声がビートに重なる）。
Shot 4: クローズアップ、対戦相手がリレーで腰を突き出し静止し凍りつき、帽子のつばから汗が飛ぶ、カメラがゆっくりズームイン、<急な息遣いと足踏みの音>。
Shot 5: 全景、二人が同時に静止して対峙し見物人が一斉に沸き立つ、カメラがゆっくりズームアウト、{（見物人）「おーーっ！」}、（ドラムビートの強拍で収束）。
制約：2人のダンサーと地下会場は画像1に準拠；暖色と寒色の混光ハイコントラストを貫く；フロアアクションの回転は実際の力学に合致し連続して途切れないこと。
```

### No. 4: コンサートの雰囲気

- **Category:** `音楽 / ダンス / MV`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1のボーカリストとスタジアムの舞台を主体に（人物と舞台は画像1に準拠）、横画面16:9、大型コンサート実録風、カラーフォローライトと蛍光の海のトーンで、30秒の万人合唱の熱狂動画を生成。

#### Prompt

```text
画像1のボーカリストとスタジアムの舞台を主体に（人物と舞台は画像1に準拠）、横画面16:9、大型コンサート実録風、カラーフォローライトと蛍光の海のトーンで、30秒の万人合唱の熱狂動画を生成。
Shot 1: 極近接アップ、ボーカリストが唇をマイクに近づけ目を見開いて最初のフレーズを歌い出す、固定カメラ位置、{（ボーカリスト）「今夜は君たちのものだ！」}、（ロックのイントロが轟音で始まる）。
Shot 2: 全景、フォローライトが舞台を掃きボーカリストが腕を広げて会場を沸かせる、カメラがゆっくり上下移動、<観客の山呼海嘯の歓声>。
Shot 3: 遠景、スタンドのペンライトが連なり起伏する光の海がビートに合わせて揺れる、カメラがゆっくり横移動、（サビのドラムビートが一斉に奏でられる）。
Shot 4: 中景、ボーカリストがステージ前へ歩み出し手を伸ばし観客が腕を伸ばして応える、カメラが追従、<万人の一斉合唱>。
Shot 5: 全景、花火とレーザーが同時に噴出しボーカリストがマイクを高く掲げるシルエット、カメラがゆっくりズームアウト、【会場全体の大合唱】、（サビのクライマックスが轟音で収束）。
制約：人物とスタジアムの舞台は画像1に準拠；カラーフォローライトと蛍光の海のトーンを貫く；ライトのストロボと花火はドラムビートの強拍と同期すること。
```

<a id="category-25"></a>

### 祝祭 / 二十四節気 (5)

### No. 1: 春節の団欒

- **Category:** `祝祭 / 二十四節気`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1、画像2、画像3の家族を主体に（それぞれ対応する画像に準拠）、横画面16:9、祝祭的で温かいリアリズム、暖かい赤い提灯のトーンで、30秒の春節ショート動画を生成。

#### Prompt

```text
画像1、画像2、画像3の家族を主体に（それぞれ対応する画像に準拠）、横画面16:9、祝祭的で温かいリアリズム、暖かい赤い提灯のトーンで、30秒の春節ショート動画を生成。
Shot 1: ゆっくりズームイン、窓の外で花火が咲き福の字が貼られた窓枠を照らす、室内の暖かい赤い提灯が揺れる、（遠くの中式の鐘の音と祝いの音楽が次第に始まる）。
Shot 2: 周回、家族が大晦日の食事テーブルを囲み杯を掲げる、湯気と暖かい光、<茶碗や箸が軽く触れ合う音>。
Shot 3: 固定カメラ位置、老人@Image 1が孫に料理を取ってやり慈愛に満ちた微笑み、テーブルのごちそうのクローズアップで背景はボケている。
Shot 4: 安定した追従撮影、子供@Image 3がお年玉を掲げて庭で跳ねる、赤い提灯の連なりが道に続く、<はっきりとした楽しげな笑い声>。
Shot 5: ローアングル、家族全員@Image 2が空一面の花火を見上げ驚嘆する、光と影が笑顔いっぱいに降り注ぐ。
Shot 6: ゆっくりズームアウト、家族全員が門前で杯を掲げ赤い提灯の下で静止、字幕が現れる【新年快樂 闔家團圓】、（祝いの音楽が収束）。
制約：各人物は対応する画像に準拠、外見が同じ分身や双子は禁止、同フレーム内は各一人；赤い提灯の暖かいトーンを全編貫く。
```

### No. 2: バレンタインデーのロマンス

- **Category:** `祝祭 / 二十四節気`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の女性、画像2の男性を主体として（それぞれ対応する画像に準拠）、縦画面9:16、フレンチフィルムの暖かいトーンのロマンティックなリアリズムで、30秒のバレンタインデーショートムービーを生成。

#### Prompt

```text
画像1の女性、画像2の男性を主体として（それぞれ対応する画像に準拠）、縦画面9:16、フレンチフィルムの暖かいトーンのロマンティックなリアリズムで、30秒のバレンタインデーショートムービーを生成。
Shot 1：ゆっくりとズームイン、夕暮れの街角で女性@Image 1がバラの花束を抱えて振り返り微笑む、暖かい金色の逆光が髪を縁取る、（柔らかいピアノの単音が始まる）。
Shot 2：フォローフォーカス、男性@Image 2が人混みを抜けて近づく、ネオンの光の斑点が背後で流れる、<心臓の鼓動が次第に強くなる>。
Shot 3：サークルショット、二人が花びらが舞う広場で抱き合いながら回転する、暖かい光が光の輪になって回る、（弦楽器の音が層を成して盛り上がる）。
Shot 4：固定カメラ位置、クローズアップで指を絡ませてお互いに指輪をはめる、指輪の表面が一瞬光る。
Shot 5：クレーンショット、カメラが二人から上昇し、イルミネーションがかかった梢をかすめ、夜空に星が瞬く、（音楽がクライマックスに）。
Shot 6：ゆっくりとズームアウト、二人がベンチで寄り添うシルエット、字幕が現れる【愛するあなたとの毎日】、（ピアノの余韻が収まる）。
制約：女性は画像1、男性は画像2に準拠、二人の外見は明確に区別し、双子化を禁止；暖かい金色のフィルム調を貫く。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像ではない。
```

### No. 3: 中秋の名月を愛でる

- **Category:** `祝祭 / 二十四節気`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1の人物を主体として（画像1に準拠）、横画面16:9、静謐な東洋水墨画の写意と写実の融合、青藍の月光調で、30秒の中秋ショートムービーを生成。

#### Prompt

```text
画像1の人物を主体として（画像1に準拠）、横画面16:9、静謐な東洋水墨画の写意と写実の融合、青藍の月光調で、30秒の中秋ショートムービーを生成。
Shot 1：ローアングル、満月が雲海からゆっくりと浮かび上がり、清らかな光が降り注ぐ、（古琴のハーモニクスが悠然と始まる）。
Shot 2：ゆっくりとズームイン、人物@Image 1が庭の石卓の前に立ち月を見上げる、桂の木の影が揺れる、<夜風が葉を撫でる音>。
Shot 3：固定カメラ位置、クローズアップで月餅が割れ黄金の流心が現れる、お茶の湯気がゆらゆらと立ち上る。
Shot 4：スムーズなパン、庭の提灯と月影が池の水面のさざ波に映る、<水のせせらぎ>。
Shot 5：サークルショット、人物@Image 1が杯を掲げ月に杯を交わし衣が軽やかに翻る、月の光が流れる。
Shot 6：ゆっくりとズームアウト、人影と巨大な満月が同フレームでシルエットになる、字幕が現れる【千里共嬋娟】、（古琴が収まる）。
制約：人物は画像1に準拠；青藍の月光の冷たいトーンを統一し、暖色が月の雰囲気を妨げないように。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像ではない。
```

### No. 4: クリスマスの雰囲気

- **Category:** `祝祭 / 二十四節気`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

画像1、画像2の二人の家族を主体として（それぞれ対応する画像に準拠）、縦画面9:16、北欧の暖かいトーンのおとぎ話的リアリズム、暖炉のオレンジ色の光調で、30秒のクリスマスショートムービーを生成。

#### Prompt

```text
画像1、画像2の二人の家族を主体として（それぞれ対応する画像に準拠）、縦画面9:16、北欧の暖かいトーンのおとぎ話的リアリズム、暖炉のオレンジ色の光調で、30秒のクリスマスショートムービーを生成。
Shot 1：ゆっくりとズームイン、窓の外に雪が降り、イルミネーションで飾られたクリスマスツリーに積もる、室内の暖炉の炎が揺らめく、（澄んだ鈴の音とクリスマス音楽が始まる）。
Shot 2：固定カメラ位置、人物@Image 1が最後の星形の飾りを掛けて満足げに微笑む、イルミネーションの光が顔に映る。
Shot 3：フォローフォーカス、人物@Image 2がプレゼントボックスを抱えてツリーの方へ走り驚きの表情で見つめる、暖かいオレンジ色の光の輪が流れる、<プレゼントの包装紙を開ける音>。
Shot 4：ハイアングル、テーブルにジンジャーブレッド、ホットココア、キャンドルが並び、湯気とシュガーパウダーがきらめく。
Shot 5：サークルショット、二人@Image 1@Image 2が暖炉の前で寄り添いグラスを合わせる、窓の外で雪が舞う。
Shot 6：ゆっくりとズームアウト、屋内の暖かい光が雪の夜の窓枠から漏れる、字幕が現れる【Merry Christmas】、（クリスマス音楽が収まる）。
制約：二人はそれぞれ対応する画像に準拠、外見は区別し、双子化を禁止、同フレームに各一人；暖炉の暖かいオレンジ調を貫く。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像ではない。
```

### No. 5: 立春の節気

- **Category:** `祝祭 / 二十四節気`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

参考人物なし、横画面16:9、二十四節気の東洋美学、清新な水彩画の写意と写実、若芽の緑調で、30秒の立春節気ショートムービーを生成。

#### Prompt

```text
参考人物なし、横画面16:9、二十四節気の東洋美学、清新な水彩画の写意と写実、若芽の緑調で、30秒の立春節気ショートムービーを生成。
Shot 1：ゆっくりとズームイン、残雪に覆われた枯れ枝の先端で一粒の若芽が氷晶を静かに押し上げる、朝の光が差し込む、（澄んだ竹笛の単音が始まる）。
Shot 2：マクロ固定カメラ位置、つららが溶け水滴が湿った土に落ちる、<水滴の澄んだ音>。
Shot 3：スムーズなパン、野原の残雪が次第に退き若緑が広がる、最初の野の花が顔を出す、<春風がそよぐ音>。
Shot 4：ローアングル、ツバメが紺碧の空をかすめ旋回する、柳の枝が新緑を出し風に揺れる、（笛の音が次第に高揚）。
Shot 5：クレーンショット、カメラが若芽から上昇し目覚める大地を俯瞰する、小川の氷が解け流れ出す、（シタールなどの音が層を成して盛り上がる）。
Shot 6：ゆっくりとズームアウト、一本の新緑の木が野原に立つ、字幕が現れる【立春 万物始生】、（シタールなどの音が収まる）。
制約：色彩は冷たい灰色の残雪から暖かい若緑へと移行し、冬から春への時間的変化を表現；人物は登場しない。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像ではない。
```

<a id="category-26"></a>

### 自然 / 天文 / ドキュメンタリー (4)

### No. 1: 星空のタイムラプス

- **Category:** `自然 / 天文 / ドキュメンタリー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

参考人物なし、横画面16:9、BBCドキュメンタリー級の星空タイムラプス撮影、深宇宙の青藍調で、30秒の星空タイムラプスショートムービーを生成。

#### Prompt

```text
参考人物なし、横画面16:9、BBCドキュメンタリー級の星空タイムラプス撮影、深宇宙の青藍調で、30秒の星空タイムラプスショートムービーを生成。
Shot 1：ローアングル、天の川のアーチが天頂を横切り星々が回転して流れる、前景に孤峰のシルエット、（低音の宇宙的雰囲気の電子音楽が始まる）。
Shot 2：固定カメラ位置タイムラプス、星の軌跡が北極星を中心に同心円の弧を描く、<夜の虫の低い鳴き声>。
Shot 3：ゆっくりとパン、天の川がゆっくりと遠くの山に沈み、流星が夜空を切り裂き長い尾を引く。
Shot 4：クレーンショット、カメラが草原の地面から上昇し、天の川と地平線が共に広がる、（弦楽器が下地として次第に入る）。
Shot 5：ゆっくりとズームイン、深宇宙の星雲の紫紅色のガス塊が星の海で渦巻く、星の点が瞬く。
Shot 6：ゆっくりとズームアウト、星空が一人の小さなテントの微かな光に戻る、字幕が現れる【宇宙 · 亘古如斯】、（雰囲気音楽が収まる）。
制約：全編タイムラプスの質感、天体の動きは滑らかで連続的；深い青から紫の冷たいトーンを統一、人物のクローズアップなし。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像ではない。
```

### No. 2: オーロラの流動

- **Category:** `自然 / 天文 / ドキュメンタリー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

参考人物なし、横画面16:9、北極ドキュメンタリー写実、氷雪の極夜と翠緑のオーロラ調で、30秒のオーロラショートムービーを生成。

#### Prompt

```text
参考人物なし、横画面16:9、北極ドキュメンタリー写実、氷雪の極夜と翠緑のオーロラ調で、30秒のオーロラショートムービーを生成。
Shot 1：ローアングル、翠緑のオーロラのカーテンが天際から突然灯り波のように渦巻く、（空霊なシンセサイザーの音の壁が突然始まる）。
Shot 2：ゆっくりとパン、オーロラが凍った湖面に映り雪原は一面の銀白、<極寒の風の唸る音>。
Shot 3：固定カメラ位置タイムラプス、オーロラが緑から紫へと急速に舞い変化する、星の点がその間にちらつく。
Shot 4：ゆっくりとズームイン、オーロラの光のカーテンの細部が絹のように流れ落ちる、<氷面が割れる低い音>。
Shot 5：クレーンショット、カメラが雪松林をかすめ満天のオーロラへと上昇する、冷たく透き通る。
Shot 6：ゆっくりとズームアウト、オーロラが氷原全体を包み込む一本の木が立つ、字幕が現れる【極地の光】、（音の壁が次第に消え収まる）。
制約：オーロラの色彩の移り変わりは自然で滑らか、生硬な点滅を避ける；冷たいトーンを主とし、人物は登場しない。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動を伴い、石像ではない。
```

### No. 3: 火山溶岩

- **Category:** `自然 / 天文 / ドキュメンタリー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

人物なし、横画面16:9、地質ドキュメンタリーの迫力あるリアリズム、赤熱した溶岩と黒い岩の冷たい煙の対比トーン、30秒の火山ショート動画を生成。

#### Prompt

```text
人物なし、横画面16:9、地質ドキュメンタリーの迫力あるリアリズム、赤熱した溶岩と黒い岩の冷たい煙の対比トーン、30秒の火山ショート動画を生成。
Shot 1：ゆっくりとズームイン、火口で赤熱した溶岩が沸騰し飛び散る火花、濃い煙が立ち上る、（低音の轟くドラムビートが突然始まる）。
Shot 2：固定カメラ、溶岩流が黒い岩地の表面をゆっくりと覆い、金赤のひび割れができる、<溶岩のグツグツと燃える音>。
Shot 3：俯瞰、溶岩の川が金色の血管のように曲がりくねり、焦げた山の斜面を切り裂く。
Shot 4：ゆっくりとパン、溶岩が海面に落ちて白い蒸気の爆発を引き起こす、<水と火が激しく反応する爆発音>。
Shot 5：ローアングル、夜空の下で火山が噴火し、溶岩弾がオレンジ色の弧を描く、煙の柱が天に昇る、（ドラムビートがクライマックスに）。
Shot 6：ゆっくりとズームアウト、冷えた溶岩原で残り火が星のようにきらめく、字幕が現れる【大地・灼熱の心臓】、（轟音が次第に収まる）。
制約：赤熱した暖かい光と黒い岩の冷たいトーンの強い対比；溶岩の流れる質感がリアルで粘り気があり、人物は登場しない。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではない。
```

### No. 4: 森林の朝霧

- **Category:** `自然 / 天文 / ドキュメンタリー`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

人物なし、横画面16:9、自然ドキュメンタリーの癒し系リアリズム、朝日のティンダル光と青々とした霧の森のトーン、30秒の森林朝霧ショート動画を生成。

#### Prompt

```text
人物なし、横画面16:9、自然ドキュメンタリーの癒し系リアリズム、朝日のティンダル光と青々とした霧の森のトーン、30秒の森林朝霧ショート動画を生成。
Shot 1：ゆっくりとズームイン、朝日が高い杉林を貫き、ティンダル光の筋が道々に形成され、薄霧が流れる、（空霊なフルートと鳥のさえずりが始まる）。
Shot 2：固定カメラ、シダの葉先に朝露がかかり朝光を屈折させて落ちる、<さわやかな鳥のさえずりが次々と起こる>。
Shot 3：スムーズにパン、霧が林間の苔むした岩と小川の上をゆっくりと漂う、<せせらぎの音>。
Shot 4：ローアングル、カメラが木の幹に沿って上に向かい、林冠の頂上から陽光が注ぎ、光の斑点が跳ねる。
Shot 5：フォロー、一頭の鹿が霧の森を静かに軽やかな足取りで通り過ぎ、振り返る、<落ち葉の軽やかな音>。
Shot 6：ゆっくりとズームアウト、朝霧の中の森林の全景が次第に明るくなる、字幕が現れる【朝の森・万物が目覚める時】、（フルートの余韻が収まる）。
制約：光の筋と霧の層が透明で自然；青々とした柔らかい暖色調、動物の動きがリアルで硬くなく、人物は登場しない。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではない。
```

<a id="category-27"></a>

### 擬人化 / クリエイティブネタ (2)

### No. 1: AIモデル格闘擬人化

- **Category:** `擬人化 / クリエイティブネタ`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

人物なし、オリジナルの擬人格闘選手を採用（いかなる実在の会社やブランド商標も暗示しない）、縦画面9:16、サイバー競技場の熱血アニメ風、ネオンホログラム調、30秒の擬人格闘ショート動画を生成。

#### Prompt

```text
人物なし、オリジナルの擬人格闘選手を採用（いかなる実在の会社やブランド商標も暗示しない）、縦画面9:16、サイバー競技場の熱血アニメ風、ネオンホログラム調、30秒の擬人格闘ショート動画を生成。
Shot 1：ゆっくりとズームイン、ホログラム競技場の中央で二人のオリジナルメカ擬人選手が対峙して力を溜める、胸のエネルギーコアが輝く、（熱い電子ドラムビートが炸裂して始まる）。
Shot 2：フォロー、青いデータストリームの選手が光の拳を振り下ろし残像が糸を引く、<高周波エネルギーのブーンという音>。
Shot 3：サークル、オレンジの計算力選手が身をかわして反撃し、火花が散り、ネオン光の軌道が周囲を囲む。
Shot 4：ローアングル、両者の拳が衝突して衝撃波が発生し、ホログラム観客席の粒子を巻き上げる、字幕がポップアップする【推論速度対決】。
Shot 5：固定カメラスローモーション、青側選手のコアが過負荷で破裂し、撃退され、コードの破片が飛び散る、<電流の破裂音>。
Shot 6：ゆっくりとズームアウト、オレンジ側選手がリングに立ち拳を上げる、ホログラムランキングが輝く、字幕が現れる【今ラウンド勝利】、（ドラムビートが収まる）。
制約：二人の選手の配色とデザインは明確に区別すること（青 vs オレンジ）、双子化は禁止、同フレームに各一名；純粋なオリジナル擬人、いかなる実在のブランド識別や名称も出現させない。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではない。
```

### No. 2: プログラミング言語擬人化の言い争い

- **Category:** `擬人化 / クリエイティブネタ`
- **Source:** `community`
- **Author:** Atlas Cloud
- **Language:** `ja`
- **Source Link:** [View](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### Description

人物なし、オリジナルの擬人キャラクターを採用（いかなる実在の会社やブランド商標も暗示しない）、横画面16:9、オフィスシチュエーションコメディのユーモア風、明るい暖色調、30秒の擬人言い争いショート動画を生成。

#### Prompt

```text
人物なし、オリジナルの擬人キャラクターを採用（いかなる実在の会社やブランド商標も暗示しない）、横画面16:9、オフィスシチュエーションコメディのユーモア風、明るい暖色調、30秒の擬人言い争いショート動画を生成。
Shot 1：ゆっくりとズームイン、二人のオリジナルプログラマー擬人キャラクターがデスク越しに目を合わせ眉を上げる、デスク上のコードホログラムスクリーンが点滅、（軽快なジャズ調の音楽が始まる）。
Shot 2：固定カメラ、蛇のマスコットキャラクターがだらりと手を広げて文句を言う{俺は一行で済む、お前は二十行も書く}、<キーボードの打鍵音>。
Shot 3：フォロー、歯車の鎧キャラクターが納得せず立ち上がり机を叩いて反論する{でも俺はお前の十倍速く動くぞ}、ホログラムスクリーンにプログレスバーがポップアップする。
Shot 4：サークル、二人のキャラクターが背中合わせで譲らず、コード記号が頭上で衝突して火花を散らす、<チンチンと衝突する効果音>。
Shot 5：俯瞰、三人目のコーヒーカップのマスコットキャラクターがコーヒーを二杯持ってきて仲裁する、二人は気まずそうに目を合わせる。
Shot 6：ゆっくりとズームアウト、三人のキャラクターが肩を組んで杯を合わせて和解し大笑いする、字幕が現れる【それぞれに長所がある それが最強のスタック】、（ジャズ調の音楽が収まる）。
制約：三人のキャラクターのデザインと配色は明確に区別すること（蛇/歯車/コーヒーカップ）、双子化は禁止、同フレームに各一名；純粋なオリジナル擬人、いかなる実在のプログラミング言語の商標、ロゴ、登録名称も出現させない。
共通制約：字幕なしを維持；ロゴを生成しない；ウォーターマークを生成しない；各ショットは一種類のカメラワークのみ；人物は自然な微動で石像ではない。
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
- [Atlas Cloud Seedance 2.5 page](https://www.atlascloud.ai/ja/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
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
