# 🎬 Seedance 2.5 提示詞大全 + Seedance 2.5 Skill

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-seedance-2.5-prompts-skills?style=social)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/pulls)
[![Prompts](https://img.shields.io/badge/prompts-111%2B-blue.svg)](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

一個經過整理的 Seedance 2.5 影片提示詞庫，以及可安裝的 **Seedance 2.5 Skill**。這個 Agent Skill 可以最佳化提示詞、視需要規劃並檢查 Storyboard，並生成可控影片。Storyboard 圖片預設使用 Seedream 5.0 Pro，目前影片生成預設使用 Seedance 2.0；只有所選服務商實際提供 Seedance 2.5 時，才切換到 2.5。

| [瀏覽提示詞](https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills&locale=zh-TW) | [安裝 Seedance 2.5 Skill](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/tree/main/skills/seedance-2-5-skill) | [在 Atlas Cloud 生成](https://www.atlascloud.ai/zh-TW/models/bytedance/seedance-2.5/text-to-video?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) | [取得 API Key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills) |
|---|---|---|---|

<details><summary>語言 (20)</summary>

[English](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/README.md) · [简体中文](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_zh.md) · [繁體中文](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_zh-TW.md) · [日本語](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_ja.md) · [한국어](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_ko.md) · [ไทย](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_th.md) · [Tiếng Việt](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_vi.md) · [हिन्दी](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_hi.md) · [Español](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_es.md) · [Deutsch](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_de.md) · [Français](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_fr.md) · [Italiano](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_it.md) · [Português](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_pt.md) · [Türkçe](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_tr.md) · [العربية](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_ar.md) · [Bahasa Indonesia](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_id.md) · [Nederlands](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_nl.md) · [Polski](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_pl.md) · [Русский](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_ru.md) · [Svenska](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills/blob/main/i18n/README_sv.md)

</details>

<a id="contents"></a>

## 📖 目錄

- [Seedance 2.5 Skill](#seedance-2-5-skill)
- [如何使用這個倉庫](#how-to-use)
- [預設模型與執行方式](#model-and-execution-defaults)
- [Seedance 2.5 提示詞指南](#prompt-guide)
- [收錄標準與來源說明](#curation-and-provenance)
- [常見問題](#faq)
- [統計資料](#statistics)
- [精選提示詞](#featured-prompts)
- [按分類瀏覽](#browse-by-category)
- [全部提示詞](#all-prompts)
- [相關資源](#resources)
- [授權條款](#license)

<a id="seedance-2-5-skill"></a>

## 🧠 Seedance 2.5 Skill

**Seedance 2.5 Skill** 是本倉庫內可安裝 Agent Skill 的正式名稱。它會把創意需求、現有提示詞、參考素材或 Storyboard 轉換成可以直接製作的提示詞、必要的中間素材、執行請求和品質複查流程。

### 安裝

安裝工作流 Skill，以及預設用於執行生成的 Atlas Cloud Skill：

```bash
npx skills add AtlasCloudAI/awesome-seedance-2.5-prompts-skills --skill seedance-2-5-skill
npx skills add AtlasCloudAI/atlas-cloud-skills --skill atlas-cloud
```

### 它會做什麼

- **最佳化提示詞：** 把一個創意、現有提示詞或參考素材，整理成更清楚、可以直接用於製作的 Seedance 提示詞。
- **規劃並檢查 Storyboard：** 只有影片確實需要多鏡頭規劃或更強視覺一致性時，才使用 Seedream 5.0 Pro 生成 Storyboard；生成後會展示中間圖並自動檢查品質。
- **生成並複查影片：** 使用目前可用的最佳 Seedance 模型，透過所選 Atlas Cloud 通道提交任務，持續輪詢同一個任務並檢查最終結果。

<details><summary>Skill 檔案與參考資料</summary>

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

## 🚀 如何使用這個倉庫

1. **瀏覽：** 按分類尋找提示詞；有真實預覽時先看預覽，再複製提示詞。
2. **最佳化：** 讓 Seedance 2.5 Skill 根據主體、時長、畫幅、參考素材和連續性要求改寫提示詞。
3. **生成：** 需要 Storyboard 時先生成並展示中間圖，由 Agent 自行檢查品質，然後透過所選 Atlas 通道提交圖片或影片任務。

<a id="model-and-execution-defaults"></a>

## ⚙️ 預設模型與執行方式

工作流 Skill 和執行適配層是兩層：前者決定做什麼、怎麼做；Atlas 執行通道負責提交、輪詢和取回圖片或影片。

### 預設模型

**Storyboard 靜幀：** Seedream 5.0 Pro。**目前預設影片模型：** Seedance 2.0。**Seedance 2.5：** 只有所選服務商實際提供模型和明確參數限制時才使用。

- **Atlas Cloud Skill：** Agent 對話中的預設直接執行方式。若未安裝，工作流會協助安裝，並引導使用者取得 API Key。
- **Atlas MCP：** 只有使用者明確選擇 MCP，且目前客戶端提供生成工具時才使用。
- **Atlas CLI / REST：** 用於使用者明確選擇的終端機、腳本、CI 或批次任務。

所有非同步任務都使用同一個 prediction ID 每 2 秒輪詢一次。逾時或暫時沒有輸出，不代表可以重複提交付費生成任務。

**[→ 取得 Atlas Cloud API Key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)**

<a id="prompt-guide"></a>

## 🧩 Seedance 2.5 提示詞指南

**上線資訊：** Seedance 2.5 預計於 2026 年 8 月上線。Atlas Cloud 是 Seedance 2.5 首批 API 上線的官方合作夥伴之一。

公開的 Seedance 2.5 發布資料描述了最長 30 秒、原生 4K、最多 50 個多模態參考素材和局部區域編輯等能力。這些是已發布的能力資訊，不應直接視為所有 API 都支援的固定參數。

**可用性說明：** 不同服務商的模型開放狀態、參考素材數量、時長、解析度和編輯能力可能不同。Skill 會核對實際模型可用性，不會假定 Seedance 2.5 一定可呼叫。

### Skill 使用的提示詞結構

1. **參考綁定：** 明確每張圖片、每段影片或音訊分別控制什麼。
2. **可觀察動作：** 按時間順序寫清畫面中真正發生的事件、反應和狀態變化。
3. **空間關係：** 寫清主體、物體與鏡頭之間的位置和相對關係。
4. **鏡頭與剪輯：** 只在必要時指定景別、運鏡、切鏡順序、動作匹配和遮擋轉場。
5. **視覺風格：** 定義光線、色彩、材質、氛圍和節奏。
6. **音訊：** 當所選模型支援時，定義對白、環境聲、音效或音樂。
7. **約束：** 只保留真正重要的人物身分、產品細節、場景特徵和禁止項。

### 主要參考資料

- [Seedance 2.0 prompt guide — Volcengine](https://docs.volcengine.com/docs/82379/2222480?lang=zh)
- [Seedream 5.0 Pro user manual — ByteDance Lark](https://bytedance.larkoffice.com/wiki/HQ8HwXpNFiy6umkP8jNcBwF3nab)
- [Seedance 2.5 launch overview — Atlas Cloud](https://www.atlascloud.ai/zh-TW/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)

<a id="curation-and-provenance"></a>

## 🔎 收錄標準與來源說明

每條提示詞都會保留分類、來源平台、作者、原始連結、輸入參考素材，以及可用時的預覽影片。README 生成過程不會改寫提示詞正文。

- `official` 和 `community` 標籤表示提示詞的來源性質，並不代表每條提示詞都已經在所有服務商和模型版本上完成獨立測試。
- 預覽影片代表原始設定下的一次真實輸出。模型版本、服務商參數、參考素材、畫幅、seed 和內容審核變化，都可能導致不同結果。

<a id="faq"></a>

## ❓ 常見問題

### Seedance 2.5 Skill 是什麼？

它是 `skills/seedance-2-5-skill/` 中可安裝的 Agent Skill，負責最佳化提示詞、準備必要的 Storyboard 或參考素材、透過 Atlas Cloud 執行並複查結果。

### 使用這個 Skill 必須已經開放 Seedance 2.5 嗎？

不需要。目前可執行的預設模型是 Seedance 2.0；只有所選服務商實際提供 Seedance 2.5 時，Skill 才會使用 2.5。

### 每個影片都必須先生成 Storyboard 嗎？

不需要。只有 Storyboard 能明顯改善多鏡頭規劃、連續性或參考控制時，Skill 才會生成或使用它。

### 預設使用哪個 Atlas 執行通道？

Agent 對話預設使用 Atlas Cloud Skill。MCP、CLI 和 REST 只在使用者明確選擇相應環境時使用。

### 不安裝 Skill，也能直接使用提示詞嗎？

可以。你可以直接瀏覽和複製任意提示詞；需要提示詞最佳化、Storyboard 處理、任務執行、輪詢和自動複查時，再安裝 Skill。

<a id="statistics"></a>

## 📊 統計資料


| 指標 | 數量 |
|--------|-------|
| 提示詞總數 | **111** |
| 分類數 | **27** |
| 預覽影片數 | **11** |
| 最後更新 | **2026-07-23** |

<a id="featured-prompts"></a>

## 🔥 精選提示詞

### No. 1: 水晶球匹配剪輯節拍短片

- **分類:** `匹配剪輯與創意特效`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 描述

一部踩著節拍的匹配剪輯短片：一顆內部蝕刻著發光 seedance 標誌的水晶球始終置中，身後的八個場景無縫切換。

#### 提示詞

```text
一部快節奏、電影感十足的匹配剪輯短片，與強勁的電子節拍同步。一顆完美無瑕的水晶球始終牢牢固定在正中央，內部蝕刻著發光的 "seedance" 標誌。水晶球保持極致銳利的對焦，而每逢強節拍，背景便無縫匹配切換：場景 1：微距特寫，電影感的水花在球體周圍飛濺，折射出繁複的光線。場景 2：一間復古的清晨咖啡館，球體置於原木桌面上，咖啡熱氣升騰，窗外是虛化的通勤人群。場景 3：黃金時刻的黃昏，一名滑板少年單手拋接球體，身後街道向後飛馳，籠罩在絕美的逆光夕陽中。場景 4：狂熱的音樂節，眾手將球體高高舉起，折射出炫目的舞台雷射。場景 5：熱鬧的家庭聚會餐桌，球體停在畫面中央，虛化的人影舉杯暢飲、伸手取食。場景 6：昏暗的影院，雙手捧著球體，巨幕微弱的光暈在球面上緩緩游移。場景 7：球體置於劇烈震動的揚聲器振膜上，在高潮處匹配切換到畫面中央旋轉的 DJ 唱盤。場景 8：戶外露營之夜，背景化為溫暖的篝火與搖曳的串燈散景。終章：在最後一記重拍上，球體被拋出畫面之外；切入純黑，一行極簡的黑底白字 "seedance" 出現在正中央。踩點匹配剪輯，頂級電影級調色，照片級真實的玻璃折射，光線追蹤，全域光照。主體極致銳利，背景強烈動態模糊。
```

### No. 2: 蒸汽龐克發條機械 —— 30 秒一鏡到底

- **分類:** `一鏡到底運鏡`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 描述

一段 30 秒的蒸汽龐克微縮 3D 影像，運用持續環繞、穿越式的運鏡。

#### 提示詞

```text
一段高端、極具電影感的 30 秒 3D 動態影像，採用精緻的蒸汽龐克與復古微縮風格，運用持續流暢的環繞與穿越式運鏡。[0-10s] 一枚古董黃銅鐘面的微距特寫，層層展開為相互咬合、轉動的齒輪環與體積霧。鏡頭向下穿透齒輪；一架機械撲翼機從一座由風化舊書堆疊而成的微縮峽谷中盤旋而上。[10-20s] 鏡頭向前滑行跟拍撲翼機，無縫穿入一座飛速旋轉、裝飾華麗的黃銅走馬燈，投射出奔騰的機械駿馬光影。光影躍出，畫面化為一輛黃銅懸浮纜車，行駛在閃爍的銅軌上，穿越齒輪森林，沐浴在電影感的黃金時刻光線中。[20-30s] 鏡頭優雅地向下搖；下方現出一艘精緻的發條木質帆船，破開深藍色、玻璃質感的波浪，波浪又幻化為一輪發光的巨月，手持燈籠的探險者剪影正在星空下跋涉於水晶礦脈的山脊之上。鏡頭順暢地螺旋穿回縹緲雲層，回到滴答作響的黃銅鐘面。超寫實的機械質感，濃郁的黃銅與金色調，電影級淺景深，流暢無縫的穿越式運鏡，史詩般的奇幻冒險氛圍。
```

### No. 3: 穿窗入界（5 張參考圖）

- **分類:** `多圖參考`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference5.png" width="180" referrerpolicy="no-referrer">

#### 描述

一支由 5 張參考圖驅動的品牌概念短片，穿過一扇扇窗戶，滑入不同的世界。

#### 提示詞

```text
一支電影感的品牌概念短片。@image1 為首幀；畫面輕微顫動，鏡頭推進，窗外的樹影向後飛掠，退去的速度越來越快，隨後猛然切至 @image2，速度趨緩，鏡頭沿著一條溪流緩緩滑行，鳥鳴與花開。鏡頭潛入水下——傳來氣泡聲——橙色的水母優雅地從鏡頭前飄過 @image3；鏡頭後拉，小魚倏忽游過，從水中游進窗戶 @image4，一個女孩四處張望，注視著牠們。鏡頭後拉、失焦，再重新對實，隨著音樂的節奏切換：一扇中式園林的花格窗 @image5，光線環繞其上、教堂的彩繪玻璃、飛機的舷窗、穹頂天窗、飄窗、百葉窗、歐式老虎窗、門上的貓眼、相機的取景器、鳥的眼睛、人眼的特寫。最終定格在人眼上；眼睛閉合，畫面全黑，隨後驟然睜開——在重音節拍上，"seedance" 出現在眼睛中央。
```

### No. 4: 一鏡穿越六個房間（8 張參考圖）

- **分類:** `多圖參考`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference5.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference7.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference8.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference9.png" width="180" referrerpolicy="no-referrer">

#### 描述

一鏡到底，跟隨一個人物穿過六個情緒不斷變化的房間，由 8 張參考圖驅動。

#### 提示詞

```text
一鏡到底。鏡頭平穩地跟隨一個身穿黑色大衣的人（參考 @image1）從左至右穿過六個色調與情緒各異、彼此相連的房間。每個房間結構相同：白牆、淺色人字拼木地板、落地法式窗、白色薄紗窗簾（參考 @image2），但窗外的景緻與情緒每次都不同。主角以勻速行走，穿過每一道敞開的門。0-5s 第一個房間，美式漫畫打鬥：主角與一個角色（@image3）搏鬥，將其擊敗；5-10s 第二個房間，溫馨，毛氈手工風格，窗外是一片向日葵花田（@image4），暖橙色柔光，一位畫家在畫向日葵（@image5），主角進入時變為毛氈質感；10-15s 第三個房間，悲傷，黑白漫畫定格動畫，窗外下著雨，冷灰色光線，一個人獨自抱膝坐在地上，手機亮著一通未接來電；進入時，燈光閃滅又亮起，房間轉為彩色，花朵驟然綻放；15-20s 第四個房間，歡樂，一個沉入海中的房間（參考 @image6），主角在珊瑚與游魚間變得透明；20-25s 第五個房間，驚喜，窗外是漫天煙火的夜空（參考 @image7），彩色的光閃爍不定，主角被歡呼的人群簇擁；25-30s 一個空白的白色房間，主角打了個響指——響指音效——畫面轉黑，"seedance" 出現在中央（參考 @image8）。電影級質感，高級時尚廣告風格，光線完全由窗外景緻決定，形成強烈的情緒對比，畫面中無文字。
```

### No. 5: 影片剪輯 —— 只留主角，刪除其餘所有人

- **分類:** `影片剪輯`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### 描述

參考影片剪輯：從來源片段中抹除除主角以外的所有人。

#### 提示詞

```text
影片剪輯：移除 @video1 中除主角以外的所有人。
```

### No. 6: 多語言嘻哈 "Hello" MV

- **分類:** `多圖參考`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### 描述

一支由單張參考圖打造的海邊嘻哈 MV；主唱用 8 種語言饒舌 "你好"，嘴型精準同步，踩著節拍硬切。

#### 提示詞

```text
電影感的嘻哈 / 饒舌音樂錄影帶，照片級真實質感，高端調性，海邊場景。以 @image1 建構畫面：一支樂團在金色沙灘上演出，海浪拍岸——主唱在濕潤的沙地上握著立式麥克風，一名吉他手在左、一名在右，鼓手在後；身後是遼闊的海岸線，起伏的浪濤，暖調的黃金時刻夕陽在水面上閃爍，空氣中瀰漫著海霧。身穿紅色運動套裝的主唱對著鏡頭饒舌——唇形與下巴與每一個字精準同步，頭隨節拍有力地點動。明亮、有力、快速、自信的饒舌。踩著節拍硬切，每次切換都是雙重反差（景別與鏡頭類型同時改變）。歌詞（主唱依次用每種語言唱出 "你好"，嘴型精準同步）：英語 "Hello"、中文 "你好"、日語 "こんにちは"、韓語 "안녕하세요"、葡萄牙語 "Olá"、泰語 "สวัสดี"、西班牙語 "Hola"、阿拉伯語 "مرحبا"。8 個硬切鏡頭（低角度大遠景定場；對鏡饒舌特寫；吉他弦微距插入鏡頭；3/4 側游走環繞；海岸線橫移跟拍；鼓手仰搖；主唱緊湊推近；全樂團英姿推進），每個鏡頭一種語言。白平衡 4000K，青橙調色，35mm，淺景深，膠片顆粒，海霧，黃金時刻眩光。高級質感，精準對嘴型，無字幕，無文字疊加，僅硬切，總時長 20 秒。
```

### No. 7: 膠囊咖啡機安裝使用教學（6 張參考圖）

- **分類:** `參考圖引導教學`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-output.mov" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference5.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference6.png" width="180" referrerpolicy="no-referrer">

#### 描述

一支 30 秒的膠囊咖啡機安裝與使用教學，六個由參考圖引導的步驟並配旁白——從安裝水箱到首次沖洗。

#### 提示詞

```text
一支 30 秒的膠囊咖啡機安裝與使用教學影片。0-2s：開場標題卡寫著 "seedance 膠囊咖啡機安裝教學"。2-5s，第 1 步：安裝水箱，參考 @image1，略帶俯角的中景，機身背面，將水箱對準機身背部的卡槽豎直向下推入，直到 "喀噠" 一聲穩固到位，清晰展示水箱底部卡扣如何與機身卡槽對齊，透過水箱透明部分可見水位線，旁白 "第一步，安裝水箱。將水箱對準機器背部的卡槽；聽到喀噠一聲即表示已鎖定到位。"。5-9s，第 2 步：安裝滴水盤，參考 @image2，正面近景，機身正面底部，將滴水盤水平滑入底部導軌直至完全到位，旁白 "接下來，安裝滴水盤。將滴水盤對準底部導軌。"。9-13s，第 3 步：安裝廢膠囊收集盒，參考 @image3，略帶仰角的近景，滴水盤下方的凹腔，將收集盒對準凹槽推入，與滴水盤齊平，旁白 "然後放入膠囊收集盒。用過的膠囊會自動掉落到這裡。"。13-18s，第 4 步：首次加水，參考 @image4，側面近景，位於機身頂部/背部的水箱，打開水箱蓋倒入清水至 MAX 水位線，然後蓋好，重點強調水位線，旁白 "打開水箱蓋，倒入清水，注意不要超過最高水位線，然後蓋好水箱蓋。"。18-25s，第 5 步：開機，參考 @image5，正面中景，機身正面，插上電源線並按下電源鍵；指示燈從閃爍轉為恆亮（預熱完成），旁白 "接通電源，按下電源鍵。指示燈開始閃爍，表示正在預熱。當燈變為恆亮時，機器即可使用。"。25-30s，第 6 步：首次沖洗（不放膠囊），參考 @image6，中景推至正側面近景，不放入膠囊，直接按下沖泡鍵，讓熱水流出沖洗管路，重點強調 "無需膠囊" 的提示，旁白 "最後一步，首次沖洗。請注意這一步無需放入膠囊，直接按下沖泡鍵即可。沖洗完成後，你的咖啡機就可以使用了。"
```

### No. 8: 水果餅乾廣告（1 張圖 + 6 段影片參考）

- **分類:** `多模態參考（圖片+影片）`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference1.png" width="180" referrerpolicy="no-referrer">
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference2.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference3.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference4.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference5.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference6.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference7.mp4" controls muted width="360"></video>

#### 描述

一支明亮多彩的水果餅乾廣告，共四種口味——草莓、蘋果、葡萄、柳橙——由 1 張圖片參考與 6 段運動/運鏡影片參考打造，隨強勁節拍硬切。

#### 提示詞

```text
明亮多彩的廣告風格，以水果餅乾為主角，共四種口味——草莓、蘋果、葡萄和柳橙；草莓口味參考 @image1。餅乾與相配的水果以極具秩序感的幾何陣列排布；整體畫面乾淨、高級、充滿活力。開場時，水果圍繞中央的餅乾快速環繞旋轉，迅速建立視覺焦點——參考 @video1 的構圖——在強節拍上切入。隨後不同口味的餅乾沿螺旋路徑向鏡頭推進，形成清晰的空間縱深——參考 @video2 的運動與運鏡——隨背景音樂在節拍上切換顏色與口味。餅乾陣列左右橫搖，以快速的平面到平面切換，草莓、蘋果、葡萄、柳橙口味交替出現，畫面隨節奏快速跳切——參考 @video3 的運動。中段加入上下搖移；整齊的餅乾陣列像機械般垂直升降——參考 @video4 的運動——凸顯秩序之美與產品的豐富。高潮處一塊餅乾被掰成兩半，畫面進入慢動作，果味夾心迸裂而出，餅屑四散，多汁的口感與顆粒的衝擊被放大——參考 @video5 的爆炸效果——隨後迅速回到快節奏剪輯。結尾引入英文文字 "Fresh on Seedance, made for viral vision"，逐字快速依次入場，配以強烈的節奏化文字動效與產品定格——參考 @video6——四種口味的餅乾與水果整齊排列、同步彈跳，完成最後的品牌收尾，畫面充滿年輕、活力、美味、值得分享的廣告氛圍。
```

<a id="browse-by-category"></a>

## 🏷️ 按分類瀏覽


- [`匹配剪輯與創意特效`](#category-1): **1**
- [`一鏡到底運鏡`](#category-2): **1**
- [`多圖參考`](#category-3): **3**
- [`影片剪輯`](#category-4): **2**
- [`參考圖引導教學`](#category-5): **1**
- [`多模態參考（圖片+影片）`](#category-6): **1**
- [`圖片參考`](#category-7): **1**
- [`圖片參考（電影感）`](#category-8): **1**
- [`電商帶貨`](#category-9): **8**
- [`美食餐飲`](#category-10): **8**
- [`美妝時尚`](#category-11): **6**
- [`數碼科技`](#category-12): **6**
- [`汽車`](#category-13): **4**
- [`房產與家居`](#category-14): **4**
- [`人物口播與數位人像`](#category-15): **6**
- [`短劇與情感敘事`](#category-16): **8**
- [`品牌電視廣告`](#category-17): **6**
- [`旅行與文化旅遊`](#category-18): **6**
- [`寵物與動物`](#category-19): **5**
- [`兒童教育與科普知識`](#category-20): **5**
- [`遊戲、CG與幻想`](#category-21): **5**
- [`動畫與卡通`](#category-22): **4**
- [`運動與健身`](#category-23): **4**
- [`音樂、舞蹈與MV`](#category-24): **4**
- [`節日與節氣`](#category-25): **5**
- [`自然、天文與紀錄片`](#category-26): **4**
- [`擬人化與創意梗`](#category-27): **2**

<a id="all-prompts"></a>

## 📋 全部提示詞


<a id="category-1"></a>

### 匹配剪輯與創意特效 (1)

### No. 1: 水晶球匹配剪輯節拍短片

- **分類:** `匹配剪輯與創意特效`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group1-1.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 描述

一部踩著節拍的匹配剪輯短片：一顆內部蝕刻著發光 seedance 標誌的水晶球始終置中，身後的八個場景無縫切換。

#### 提示詞

```text
一部快節奏、電影感十足的匹配剪輯短片，與強勁的電子節拍同步。一顆完美無瑕的水晶球始終牢牢固定在正中央，內部蝕刻著發光的 "seedance" 標誌。水晶球保持極致銳利的對焦，而每逢強節拍，背景便無縫匹配切換：場景 1：微距特寫，電影感的水花在球體周圍飛濺，折射出繁複的光線。場景 2：一間復古的清晨咖啡館，球體置於原木桌面上，咖啡熱氣升騰，窗外是虛化的通勤人群。場景 3：黃金時刻的黃昏，一名滑板少年單手拋接球體，身後街道向後飛馳，籠罩在絕美的逆光夕陽中。場景 4：狂熱的音樂節，眾手將球體高高舉起，折射出炫目的舞台雷射。場景 5：熱鬧的家庭聚會餐桌，球體停在畫面中央，虛化的人影舉杯暢飲、伸手取食。場景 6：昏暗的影院，雙手捧著球體，巨幕微弱的光暈在球面上緩緩游移。場景 7：球體置於劇烈震動的揚聲器振膜上，在高潮處匹配切換到畫面中央旋轉的 DJ 唱盤。場景 8：戶外露營之夜，背景化為溫暖的篝火與搖曳的串燈散景。終章：在最後一記重拍上，球體被拋出畫面之外；切入純黑，一行極簡的黑底白字 "seedance" 出現在正中央。踩點匹配剪輯，頂級電影級調色，照片級真實的玻璃折射，光線追蹤，全域光照。主體極致銳利，背景強烈動態模糊。
```

<a id="category-2"></a>

### 一鏡到底運鏡 (1)

### No. 1: 蒸汽龐克發條機械 —— 30 秒一鏡到底

- **分類:** `一鏡到底運鏡`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group2-2.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

#### 描述

一段 30 秒的蒸汽龐克微縮 3D 影像，運用持續環繞、穿越式的運鏡。

#### 提示詞

```text
一段高端、極具電影感的 30 秒 3D 動態影像，採用精緻的蒸汽龐克與復古微縮風格，運用持續流暢的環繞與穿越式運鏡。[0-10s] 一枚古董黃銅鐘面的微距特寫，層層展開為相互咬合、轉動的齒輪環與體積霧。鏡頭向下穿透齒輪；一架機械撲翼機從一座由風化舊書堆疊而成的微縮峽谷中盤旋而上。[10-20s] 鏡頭向前滑行跟拍撲翼機，無縫穿入一座飛速旋轉、裝飾華麗的黃銅走馬燈，投射出奔騰的機械駿馬光影。光影躍出，畫面化為一輛黃銅懸浮纜車，行駛在閃爍的銅軌上，穿越齒輪森林，沐浴在電影感的黃金時刻光線中。[20-30s] 鏡頭優雅地向下搖；下方現出一艘精緻的發條木質帆船，破開深藍色、玻璃質感的波浪，波浪又幻化為一輪發光的巨月，手持燈籠的探險者剪影正在星空下跋涉於水晶礦脈的山脊之上。鏡頭順暢地螺旋穿回縹緲雲層，回到滴答作響的黃銅鐘面。超寫實的機械質感，濃郁的黃銅與金色調，電影級淺景深，流暢無縫的穿越式運鏡，史詩般的奇幻冒險氛圍。
```

<a id="category-3"></a>

### 多圖參考 (3)

### No. 1: 穿窗入界（5 張參考圖）

- **分類:** `多圖參考`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/firstScreen-group3-reference5.png" width="180" referrerpolicy="no-referrer">

#### 描述

一支由 5 張參考圖驅動的品牌概念短片，穿過一扇扇窗戶，滑入不同的世界。

#### 提示詞

```text
一支電影感的品牌概念短片。@image1 為首幀；畫面輕微顫動，鏡頭推進，窗外的樹影向後飛掠，退去的速度越來越快，隨後猛然切至 @image2，速度趨緩，鏡頭沿著一條溪流緩緩滑行，鳥鳴與花開。鏡頭潛入水下——傳來氣泡聲——橙色的水母優雅地從鏡頭前飄過 @image3；鏡頭後拉，小魚倏忽游過，從水中游進窗戶 @image4，一個女孩四處張望，注視著牠們。鏡頭後拉、失焦，再重新對實，隨著音樂的節奏切換：一扇中式園林的花格窗 @image5，光線環繞其上、教堂的彩繪玻璃、飛機的舷窗、穹頂天窗、飄窗、百葉窗、歐式老虎窗、門上的貓眼、相機的取景器、鳥的眼睛、人眼的特寫。最終定格在人眼上；眼睛閉合，畫面全黑，隨後驟然睜開——在重音節拍上，"seedance" 出現在眼睛中央。
```

### No. 2: 一鏡穿越六個房間（8 張參考圖）

- **分類:** `多圖參考`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference5.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference7.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference8.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group2-reference9.png" width="180" referrerpolicy="no-referrer">

#### 描述

一鏡到底，跟隨一個人物穿過六個情緒不斷變化的房間，由 8 張參考圖驅動。

#### 提示詞

```text
一鏡到底。鏡頭平穩地跟隨一個身穿黑色大衣的人（參考 @image1）從左至右穿過六個色調與情緒各異、彼此相連的房間。每個房間結構相同：白牆、淺色人字拼木地板、落地法式窗、白色薄紗窗簾（參考 @image2），但窗外的景緻與情緒每次都不同。主角以勻速行走，穿過每一道敞開的門。0-5s 第一個房間，美式漫畫打鬥：主角與一個角色（@image3）搏鬥，將其擊敗；5-10s 第二個房間，溫馨，毛氈手工風格，窗外是一片向日葵花田（@image4），暖橙色柔光，一位畫家在畫向日葵（@image5），主角進入時變為毛氈質感；10-15s 第三個房間，悲傷，黑白漫畫定格動畫，窗外下著雨，冷灰色光線，一個人獨自抱膝坐在地上，手機亮著一通未接來電；進入時，燈光閃滅又亮起，房間轉為彩色，花朵驟然綻放；15-20s 第四個房間，歡樂，一個沉入海中的房間（參考 @image6），主角在珊瑚與游魚間變得透明；20-25s 第五個房間，驚喜，窗外是漫天煙火的夜空（參考 @image7），彩色的光閃爍不定，主角被歡呼的人群簇擁；25-30s 一個空白的白色房間，主角打了個響指——響指音效——畫面轉黑，"seedance" 出現在中央（參考 @image8）。電影級質感，高級時尚廣告風格，光線完全由窗外景緻決定，形成強烈的情緒對比，畫面中無文字。
```

### No. 3: 多語言嘻哈 "Hello" MV

- **分類:** `多圖參考`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### 描述

一支由單張參考圖打造的海邊嘻哈 MV；主唱用 8 種語言饒舌 "你好"，嘴型精準同步，踩著節拍硬切。

#### 提示詞

```text
電影感的嘻哈 / 饒舌音樂錄影帶，照片級真實質感，高端調性，海邊場景。以 @image1 建構畫面：一支樂團在金色沙灘上演出，海浪拍岸——主唱在濕潤的沙地上握著立式麥克風，一名吉他手在左、一名在右，鼓手在後；身後是遼闊的海岸線，起伏的浪濤，暖調的黃金時刻夕陽在水面上閃爍，空氣中瀰漫著海霧。身穿紅色運動套裝的主唱對著鏡頭饒舌——唇形與下巴與每一個字精準同步，頭隨節拍有力地點動。明亮、有力、快速、自信的饒舌。踩著節拍硬切，每次切換都是雙重反差（景別與鏡頭類型同時改變）。歌詞（主唱依次用每種語言唱出 "你好"，嘴型精準同步）：英語 "Hello"、中文 "你好"、日語 "こんにちは"、韓語 "안녕하세요"、葡萄牙語 "Olá"、泰語 "สวัสดี"、西班牙語 "Hola"、阿拉伯語 "مرحبا"。8 個硬切鏡頭（低角度大遠景定場；對鏡饒舌特寫；吉他弦微距插入鏡頭；3/4 側游走環繞；海岸線橫移跟拍；鼓手仰搖；主唱緊湊推近；全樂團英姿推進），每個鏡頭一種語言。白平衡 4000K，青橙調色，35mm，淺景深，膠片顆粒，海霧，黃金時刻眩光。高級質感，精準對嘴型，無字幕，無文字疊加，僅硬切，總時長 20 秒。
```

<a id="category-4"></a>

### 影片剪輯 (2)

### No. 1: 影片剪輯 —— 只留主角，刪除其餘所有人

- **分類:** `影片剪輯`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-output.mov" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group1-reference1.mp4" controls muted width="360"></video>

#### 描述

參考影片剪輯：從來源片段中抹除除主角以外的所有人。

#### 提示詞

```text
影片剪輯：移除 @video1 中除主角以外的所有人。
```

### No. 2: 蒸汽火車衝破銀幕（影片剪輯）

- **分類:** `影片剪輯`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-output.mov" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part2-group2-reference1.mov" controls muted width="360"></video>

#### 描述

一段影片剪輯：完整保留 @video1 的老電影原片，僅添加一輛蒸汽機車衝破銀幕、撕裂幕布，並在衝擊的瞬間由黑白驟然轉為全彩。

#### 提示詞

```text
超寫實電影寫實主義風格，具備照片級真實的實拍質感，強調實體物件（蒸汽火車）破畫而出的現實合理性；無 CGI 光澤感 / 遊戲引擎 / 風格化 3D。保留 @video1 原有的構圖、放映廳光線、手持鏡頭狀態與自然的瑕疵。鎖定來源影片：將 @video1 完整保留作為底圖（老式放映廳、從背後看過去成排戴帽子的觀眾、放映機的錐形光束、銀幕、環境光、色調與手持運動全部不變）；唯一新增的：火車衝出銀幕、由此帶來的光影變化、銀幕的撕裂，以及對放映廳和前排觀眾輕微的物理衝擊。變色規則（核心新增）：開頭嚴格保留 @video1 原有的黑白老電影質感（顆粒 / 刮痕 / 閃爍 / 單色）；就在機車真正衝破銀幕、闖入現實的確切瞬間，畫面驟然從黑白轉為飽滿真實的彩色，色彩如衝擊波般以火車破出的位置為中心向整個畫面擴散（火車的黑色鋼鐵車身、紅銅色鍋爐、橙黃色蒸汽燈光暈、木質車廂的暖棕色、白灰色蒸汽，以及放映廳的暖棕色都隨之顯現色彩）；變色與破幕衝出精準同步，此後照片級真實的彩色一直保持到結尾。鎖定撕幕：銀幕是一塊真實的白色放映幕布，具備真實的織物張力；火車衝出時，幕布沿機車車頭的輪廓被強行撕開，形成放射狀的裂口，邊緣向後捲起，撕碎的布纖維四處飛揚。主體：一輛老式蒸汽機車車頭強行衝出銀幕，黑色鋼鐵車身，圓柱形鍋爐，車頭排障器，煙囪噴吐白灰色蒸汽，明亮的車頭燈，金屬表面帶有真實的磨損、油污、鉚釘與濕潤的反光，以巨大的重量與慣性向前衝來。鏡頭：完全繼承 @video1 原有的手持運動，不做平滑、不重新變速、不重新構圖；衝出的火車始終正確地鎖定在銀幕與放映廳空間之中，保持正確的視差、遮擋與觸地投影。聲音：無音樂，僅保留真實的現場音效，繼承 @video1 放映廳的環境聲（放映機的喀噠聲、觀眾的騷動），並加入幕布撕裂聲、蒸汽噴湧聲、鋼輪的機械轟鳴聲與衝擊氣浪聲。總時長與 @video1 完全相同；除火車本身及其物理互動、銀幕撕裂，以及破出瞬間的變色之外，不添加任何其他內容。無慢動作，無魔法感，無風格化恐怖；最終成片應看起來像是一台真實相機在老放映廳中偶然捕捉到的、"一列火車衝破銀幕、黑白瞬間轉為彩色" 的詭異而真實的影像。
```

<a id="category-5"></a>

### 參考圖引導教學 (1)

### No. 1: 膠囊咖啡機安裝使用教學（6 張參考圖）

- **分類:** `參考圖引導教學`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-output.mov)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-output.mov" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference1.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference2.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference3.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference4.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference5.png" width="180" referrerpolicy="no-referrer">
<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab1-group3-reference6.png" width="180" referrerpolicy="no-referrer">

#### 描述

一支 30 秒的膠囊咖啡機安裝與使用教學，六個由參考圖引導的步驟並配旁白——從安裝水箱到首次沖洗。

#### 提示詞

```text
一支 30 秒的膠囊咖啡機安裝與使用教學影片。0-2s：開場標題卡寫著 "seedance 膠囊咖啡機安裝教學"。2-5s，第 1 步：安裝水箱，參考 @image1，略帶俯角的中景，機身背面，將水箱對準機身背部的卡槽豎直向下推入，直到 "喀噠" 一聲穩固到位，清晰展示水箱底部卡扣如何與機身卡槽對齊，透過水箱透明部分可見水位線，旁白 "第一步，安裝水箱。將水箱對準機器背部的卡槽；聽到喀噠一聲即表示已鎖定到位。"。5-9s，第 2 步：安裝滴水盤，參考 @image2，正面近景，機身正面底部，將滴水盤水平滑入底部導軌直至完全到位，旁白 "接下來，安裝滴水盤。將滴水盤對準底部導軌。"。9-13s，第 3 步：安裝廢膠囊收集盒，參考 @image3，略帶仰角的近景，滴水盤下方的凹腔，將收集盒對準凹槽推入，與滴水盤齊平，旁白 "然後放入膠囊收集盒。用過的膠囊會自動掉落到這裡。"。13-18s，第 4 步：首次加水，參考 @image4，側面近景，位於機身頂部/背部的水箱，打開水箱蓋倒入清水至 MAX 水位線，然後蓋好，重點強調水位線，旁白 "打開水箱蓋，倒入清水，注意不要超過最高水位線，然後蓋好水箱蓋。"。18-25s，第 5 步：開機，參考 @image5，正面中景，機身正面，插上電源線並按下電源鍵；指示燈從閃爍轉為恆亮（預熱完成），旁白 "接通電源，按下電源鍵。指示燈開始閃爍，表示正在預熱。當燈變為恆亮時，機器即可使用。"。25-30s，第 6 步：首次沖洗（不放膠囊），參考 @image6，中景推至正側面近景，不放入膠囊，直接按下沖泡鍵，讓熱水流出沖洗管路，重點強調 "無需膠囊" 的提示，旁白 "最後一步，首次沖洗。請注意這一步無需放入膠囊，直接按下沖泡鍵即可。沖洗完成後，你的咖啡機就可以使用了。"
```

<a id="category-6"></a>

### 多模態參考（圖片+影片） (1)

### No. 1: 水果餅乾廣告（1 張圖 + 6 段影片參考）

- **分類:** `多模態參考（圖片+影片）`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference1.png" width="180" referrerpolicy="no-referrer">
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference2.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference3.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference4.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference5.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference6.mp4" controls muted width="360"></video>
<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab2-group2-reference7.mp4" controls muted width="360"></video>

#### 描述

一支明亮多彩的水果餅乾廣告，共四種口味——草莓、蘋果、葡萄、柳橙——由 1 張圖片參考與 6 段運動/運鏡影片參考打造，隨強勁節拍硬切。

#### 提示詞

```text
明亮多彩的廣告風格，以水果餅乾為主角，共四種口味——草莓、蘋果、葡萄和柳橙；草莓口味參考 @image1。餅乾與相配的水果以極具秩序感的幾何陣列排布；整體畫面乾淨、高級、充滿活力。開場時，水果圍繞中央的餅乾快速環繞旋轉，迅速建立視覺焦點——參考 @video1 的構圖——在強節拍上切入。隨後不同口味的餅乾沿螺旋路徑向鏡頭推進，形成清晰的空間縱深——參考 @video2 的運動與運鏡——隨背景音樂在節拍上切換顏色與口味。餅乾陣列左右橫搖，以快速的平面到平面切換，草莓、蘋果、葡萄、柳橙口味交替出現，畫面隨節奏快速跳切——參考 @video3 的運動。中段加入上下搖移；整齊的餅乾陣列像機械般垂直升降——參考 @video4 的運動——凸顯秩序之美與產品的豐富。高潮處一塊餅乾被掰成兩半，畫面進入慢動作，果味夾心迸裂而出，餅屑四散，多汁的口感與顆粒的衝擊被放大——參考 @video5 的爆炸效果——隨後迅速回到快節奏剪輯。結尾引入英文文字 "Fresh on Seedance, made for viral vision"，逐字快速依次入場，配以強烈的節奏化文字動效與產品定格——參考 @video6——四種口味的餅乾與水果整齊排列、同步彈跳，完成最後的品牌收尾，畫面充滿年輕、活力、美味、值得分享的廣告氛圍。
```

<a id="category-7"></a>

### 圖片參考 (1)

### No. 1: 沙漠角蜥與葡萄柚（3D 廣告）

- **分類:** `圖片參考`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group1-reference1.png" width="180" referrerpolicy="no-referrer">

#### 描述

一支明亮、光澤感十足的 3D 動畫廣告：一隻焦渴的沙漠角蜥找到一顆葡萄柚，一口咬下，果汁海嘯將沙漠變成夏日之海。由單張角色參考圖打造。

#### 提示詞

```text
3D 動畫廣告風格，色彩明亮而通透；果肉與果汁必須給人極度清爽、極具衝擊力的感覺。整體氛圍如同一支帶著誇張幽默感的高品質廣告動畫短片。沙漠角蜥這一角色可愛、活潑、表情豐富，參考 @image1。畫面質感參考參考圖中那種柔和的自然光、細膩的絨毛/皮膚質感、夢幻的微距景深，以及寫實中略帶童趣的感覺。0-3s：一片被烈日炙烤的沙漠，空氣因高溫而扭曲，沙子滾燙；一隻沙漠角蜥趴在滾燙的沙地上，舌頭微微伸出，雙眼呆滯，幾近脫水，每走兩步就搖晃一下，彷彿馬上就要 "蒸發"。3-6s：牠突然停下，鼻子抽動了一下，低頭發現一顆清涼、飽滿、掛滿露珠的葡萄柚半埋在沙中，晶瑩得如同沙漠中的奇蹟；角蜥的雙眼瞬間瞪大。6-8s：牠猛撲過去，雙手緊緊抱住葡萄柚，整張臉貼在果皮上，露出 "我終於活過來了" 的幸福表情；畫面定格 1 秒，形成一個誇張、搞笑的記憶點。8-11s：牠抬起頭，張嘴狠狠咬了一大口；葡萄柚皮裂開，飽滿的果肉泛著通透的光澤，下一刻果汁如海嘯般噴湧而出。11-16s：橙粉色、通透、晶瑩的葡萄柚汁瘋狂噴湧，順著沙丘傾瀉而下，迅速淹沒整片沙漠；乾黃的沙子瞬間化作清涼、閃耀、果香四溢的夏日之海，仙人掌、岩石與小沙丘被果汁的浪濤吞沒，角蜥的表情從欣喜轉為驚恐。16-20s：幾乎被 "葡萄柚之海" 淹沒的牠，慌亂地抱住半顆葡萄柚當作救生圈漂浮著，把濕透的腦袋探出水面，一臉茫然。20-24s：切至白屏；品牌名與標語出現在正中央："Seedance 葡萄柚——咬下去是果肉，湧出來的是夏天。" 旁白讀出整句。24-30s：從白屏切回；沙漠角蜥此刻正愜意地躺在漂浮的葡萄柚上，戴著小墨鏡，端著一杯插著吸管的飲料，在 "果汁海" 上悠閒地度假漂流，四周漂著橙色果肉、小冰塊、清涼的水花和一片湛藍晴空；情緒從 "求生" 轉為 "度假"，最後牠心滿意足地靠在葡萄柚上，鏡頭拉出，定格在一個清爽、明亮、俏皮的夏日畫面上。
```

<a id="category-8"></a>

### 圖片參考（電影感） (1)

### No. 1: 醉漢墜樓記（黑色幽默短片）

- **分類:** `圖片參考（電影感）`
- **來源:** `official`
- **作者:** Volcengine Ark
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4)

<video src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-output.mp4" controls muted playsinline width="720"></video>
- **原始連結:** [查看](https://ark.volcengine.com/promotion?modelName=seedance-2-5)

- **Inputs:**

<img src="https://static.atlascloud.ai/model/example/seedance-2.5/cn-part1-tab3-group2-reference1.png" width="180" referrerpolicy="no-referrer">

#### 描述

一支約 30 秒的黑色幽默電影感短片：一個胖乎乎、醉醺醺的男人從樓頂跌落，抓住一根救命繩，撞穿窗戶，然後就地睡著。角色來自單張參考圖；以巨響與全然寂靜之間的硬切為核心。

#### 提示詞

```text
[醉漢樓頂驚魂——跌落邊緣——抓住繩索穿窗而入——當場昏睡 | 黑色幽默短片 | 約 30 秒] 一句話梗概：一個胖乎乎、可愛、喝醉的中年男人正在一棟樓的樓頂吃漢堡、喝啤酒；他站起來伸懶腰時不慎失足跌落，慌亂中抓住一根救命繩，隨即撞穿一扇窗戶跌進室內，愣神驚呆了一秒，然後就地一躺，呼呼大睡。參考圖 @image1——一個胖乎乎、可愛、喝醉的中年男人：體型圓潤敦實，挺著一個又圓又大的啤酒肚，個子矮，因醉酒動作鬆垮、遲緩、搖搖晃晃；圓臉，雙下巴，臉頰和鼻子因喝酒泛紅，眼睛瞇成一條縫、目光迷離，一圈未修剪的短鬍碴，頭髮凌亂，一副憨傻、可愛、無憂無慮的表情；身穿一件沾著漢堡醬汁的白色背心，鬆垮地耷拉在圓肚子上，一條舊牛仔褲，趿拉著鬆垮的拖鞋挪步，手裡始終攥著一個吃了一半的漢堡。全片只有這一個角色，與參考圖 100% 一致。整體觀感：夜晚的賽博龐克巨型都市，密密麻麻的玻璃鋼鐵摩天樓森林，霓虹招牌（青色 / 洋紅 / 電光藍），全息廣告牌，濕漉漉的反光地面，體積霧，遠處飛行汽車的光軌與無人機。真實的實拍質感，物理電影鏡頭，無 3D 渲染 / 遊戲引擎 / 動漫感。鏡頭混用手持與搖臂 / 無人機；墜落後鏡頭隨他一同俯衝而下，樓體外牆與霓虹向上飛掠以傳達速度感，24-35mm 寬銀幕電影鏡頭質感，180 度快門動態模糊。聲音設計是黑色幽默的關鍵：在 "巨大的轟鳴" 與 "全然的寂靜" 之間反覆硬切。全程真實重力。分鏡（約 30 秒）：S1（0-4s）開場咀嚼大特寫（有聲）男人的臉佔滿整個畫面，大口咀嚼漢堡，一副心滿意足的醉態；S2（4-9s）拉至全景，伸懶腰 -> 失足跌落（有聲）他搖搖晃晃站起身、大大地伸個懶腰，身體後仰，失去平衡，腳一滑便向後翻越樓頂邊緣跌下，手裡始終沒鬆開漢堡，伴著一聲驚慌的 "欸——！"；S3（9-12s）切至受驚面部特寫（一聲大叫，巨大轟鳴）醉眼滾圓暴突，雙下巴擠作一團，嘴大張發出尖叫 "啊——！！"，狂風呼嘯；S4（12-16s）切至平視遠景（全然寂靜）從對面樓看去，一個白色的小小身影從高樓筆直墜下，霓虹都市浩瀚而冷漠，這份全然的寂靜與一秒前的巨大轟鳴構成黑色幽默的反差；S5（16-21s）切至面部特寫（尖叫）-> 抓住繩索，仍在尖叫，雙手在空中亂抓，他忽然抓住一根救命纜繩，纜繩被他的重量猛地繃緊、彎折，發出 "嗡" 的一聲，尖叫戛然而止，他被猛地拽住並盪了出去（抓住繩索的一瞬有短暫慢動作）；S6（21-26s）切至室內視角（安靜）-> 玻璃碎裂 -> 他撞了進來，室內起初安靜，只有空調的嗡嗡聲，下一秒玻璃猛然向內爆裂（短暫子彈時間），醉漢連人帶漢堡撞穿窗戶，碎片呈放射狀飛濺而出，霓虹光湧入，他重重摔進屋內，砸在地板 / 沙發上，碎玻璃叮噹作響；S7（26-30s）結尾，驚愣一秒 -> 睡著，男人四仰八叉癱在地板上，渾身是碎玻璃，仍攥著漢堡，緩緩睜開眼，迷迷糊糊，茫然受驚地愣了整整一秒，四處張望彷彿在想 "我這是在哪兒？"，隨後醉意上湧，他毫不在意地咂咂嘴，把漢堡摟進懷裡，一翻身，就地躺下呼呼大睡，還輕輕打起了鼾，鏡頭拉出並定格，硬切轉黑。僅用現場同期聲，無音樂，無字幕；核心是在 "巨大轟鳴" 與 "寂靜" 之間反覆硬切。
```

<a id="category-9"></a>

### 電商帶貨 (8)

### No. 1: 服裝上身展示

- **分類:** `電商帶貨`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的模特（面部參考圖片1大頭照，妝造參考圖片2全身照）為主體，豎屏9:16，時尚寫實風，生成30秒服裝展示短片。

#### 提示詞

```text
參考圖片1中的模特（面部參考圖片1大頭照，妝造參考圖片2全身照）為主體，豎屏9:16，時尚寫實風，生成30秒服裝展示短片。
Shot 1：中景，模特@Image 1 側身站定忽然轉身甩動風衣下擺，純色影棚柔和頂光勾勒輪廓，鏡頭緩慢推近，（輕快時尚電子樂起）<衣料摩擦聲>。
Shot 2：特寫，鏡頭平穩橫移掃過肩線走線與翻領縫製細節，側逆光打亮面料光澤。
Shot 3：全景，模特@Image 1 自然邁步走動展示整體廓形與版型垂墜，鏡頭平穩跟拍。
Shot 4：中景，模特@Image 1 抬手整理衣領並回眸，鏡頭緩慢環繞半圈。
Shot 5：中近景，模特@Image 1 定格微笑，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：模特面部與妝造以圖片1、圖片2為準全程一致；影棚背景與頂光固定不變。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 鞋靴細節

- **分類:** `電商帶貨`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，高端質感寫實風，主體為一雙真皮短靴，生成30秒鞋靴細節短片。

#### 提示詞

```text
豎屏9:16，高端質感寫實風，主體為一雙真皮短靴，生成30秒鞋靴細節短片。
Shot 1：微距特寫，短靴靜置於啞光石台，鏡頭緩慢推近至鞋頭縫線，冷調側光掃過皮革，（低沉氛圍電子樂起）<皮革輕觸聲>。
Shot 2：特寫，鏡頭環繞鞋身一周展示流線鞋型與後跟弧度，反光板補光。
Shot 3：微距特寫，固定機位，指尖翻折鞋舌露出內襯logo與走線。
Shot 4：中景，穿靴的腳踏地並輕抬鞋跟，鏡頭俯拍向下捕捉著地瞬間，<鞋跟叩地聲>。
Shot 5：特寫，鏡頭緩慢拉遠定格鞋身全貌，（音樂收束）。
約束：短靴款式、皮革紋理與配色全程一致；石台與冷調布光鎖定不變；防止左右兩隻鞋型不一致。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 箱包開合演示

- **分類:** `電商帶貨`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，簡約高級寫實風，主體為一款通勤手提包，生成30秒箱包功能演示短片。

#### 提示詞

```text
豎屏9:16，簡約高級寫實風，主體為一款通勤手提包，生成30秒箱包功能演示短片。
Shot 1：中景，手提包正面立於純色台面，鏡頭緩慢推近至金屬鎖扣，柔和頂光，（清爽輕音樂起）。
Shot 2：特寫，雙手拉開拉鏈展開主袋，鏡頭俯拍展示內部分層與卡位，<拉鏈滑動聲>。
Shot 3：特寫，手依次放入筆記型電腦與水壺，鏡頭平穩橫移展示容量。
Shot 4：中景，單手提起身展示提手承重與挺括感，鏡頭仰拍。
Shot 5：中景，扣合鎖扣包體歸位，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：手提包顏色、五金與版型全程一致；台面與頂光鎖定；開合動作連貫不跳變。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 珠寶首飾

- **分類:** `電商帶貨`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，奢華精緻寫實風，主體為一條鑽石項鍊，生成30秒珠寶展示短片。

#### 提示詞

```text
豎屏9:16，奢華精緻寫實風，主體為一條鑽石項鍊，生成30秒珠寶展示短片。
Shot 1：微距特寫，項鍊盤放於黑絨托盤，鏡頭緩慢推近至主鑽，聚光燈打出火彩，（優雅弦樂起）<細微金屬清響>。
Shot 2：特寫，鏡頭環繞主鑽半圈捕捉多角度折射光斑，背景壓暗。
Shot 3：中近景，模特頸部佩戴項鍊，鏡頭升降由鎖骨上移至鏈墜，柔光補面。
Shot 4：微距特寫，固定機位，鏈墜隨呼吸輕晃閃爍。
Shot 5：特寫，鏡頭緩慢拉遠聚焦火彩定格，（弦樂收束）。
約束：項鍊款式、鑽石切工與鑲座全程一致；黑絨背景與聚光布光鎖定；佩戴段頸部膚色與影棚段一致。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 家電展示（破壁機）

- **分類:** `電商帶貨`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，明亮廚房生活寫實風，主體為一台高速破壁機，生成30秒家電演示短片。

#### 提示詞

```text
豎屏9:16，明亮廚房生活寫實風，主體為一台高速破壁機，生成30秒家電演示短片。
Shot 1：中景，破壁機置於淺色台面，鏡頭緩慢推近至操作面板，晨光斜射，（明快生活輕音樂起）。
Shot 2：特寫，手倒入水果與冰塊入杯，鏡頭俯拍杯口，<食材落入聲>。
Shot 3：特寫，按下啟動鍵刀組高速旋轉攪打，鏡頭固定機位貼近杯壁，<破壁轟鳴聲>。
Shot 4：中景，倒出細膩果昔入玻璃杯，鏡頭平穩橫移跟隨液流。
Shot 5：中近景，成品果昔與機身同框，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：破壁機機身顏色、面板與杯體全程一致；廚房台面與晨光鎖定；果昔質地前後連貫。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 6: 母嬰用品

- **分類:** `電商帶貨`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，溫柔治癒生活寫實風，主體為一款嬰兒保溫奶瓶，生成30秒母嬰用品展示短片。

#### 提示詞

```text
豎屏9:16，溫柔治癒生活寫實風，主體為一款嬰兒保溫奶瓶，生成30秒母嬰用品展示短片。
Shot 1：中近景，奶瓶立於嬰兒房軟墊上，鏡頭緩慢推近至防脹氣奶嘴，暖色柔光，（溫柔鋼琴音樂起）。
Shot 2：特寫，手旋開瓶蓋展示寬口設計與刻度，鏡頭平穩橫移，<輕柔旋蓋聲>。
Shot 3：特寫，倒入溫水後手觸瓶身感受恆溫，鏡頭固定機位。
Shot 4：中景，母親手持奶瓶輕晃試溫準備餵養，鏡頭緩慢升降，<水流輕晃聲>。
Shot 5：中近景，奶瓶與柔軟玩偶同框定格，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：奶瓶顏色、瓶身刻度與奶嘴款式全程一致；嬰兒房暖光與軟墊背景鎖定；畫面基調保持柔和溫暖。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 7: 食品禮盒

- **分類:** `電商帶貨`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，節慶精緻寫實風，主體為一款中式點心禮盒，生成30秒食品禮盒展示短片。

#### 提示詞

```text
豎屏9:16，節慶精緻寫實風，主體為一款中式點心禮盒，生成30秒食品禮盒展示短片。
Shot 1：中景，紅金禮盒靜置於木質桌面，鏡頭緩慢推近至燙金封面，暖調側光，（喜慶國風音樂起）。
Shot 2：特寫，雙手緩緩揭開盒蓋露出分格點心，鏡頭俯拍全貌，<盒蓋開啟聲>。
Shot 3：微距特寫，鏡頭平穩橫移掃過每格點心的酥皮與餡料紋理。
Shot 4：中近景，手拈起一塊點心展示層次，鏡頭緩慢環繞。
Shot 5：中景，禮盒合攏繫上絲帶，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：禮盒配色、燙金圖案與點心種類全程一致；木桌與暖調布光鎖定；點心擺放位置前後連貫。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 8: 數碼配件（快閃促銷風，含字幕）

- **分類:** `電商帶貨`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，快閃促銷高對比寫實風，主體為一副無線降噪耳機，生成30秒促銷快閃短片。

#### 提示詞

```text
豎屏9:16，快閃促銷高對比寫實風，主體為一副無線降噪耳機，生成30秒促銷快閃短片。
Shot 1：特寫，耳機懸浮旋轉於霓虹漸變背景，鏡頭快速推近，（強節奏電子鼓點起）<開機提示音>，【全場直降 ¥300】。
Shot 2：微距特寫，鏡頭切至耳罩轉軸與充電觸點，硬光高光掃過。
Shot 3：中景，鏡頭切至佩戴耳機的人隨鼓點點頭，光影頻閃，【主動降噪 40小時續航】。
Shot 4：特寫，鏡頭快速橫移掠過充電盒開合，<磁吸吸附聲>，【限時秒殺 前100名】。
Shot 5：中近景，耳機與價格標籤同框，鏡頭快速拉遠定格，（鼓點收束）【立即搶購】。
約束：耳機配色與外形全程一致；霓虹背景色板鎖定；字幕隨鏡頭切換出現節奏統一，畫面保持高對比促銷感。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-10"></a>

### 美食餐飲 (8)

### No. 1: 火鍋上桌

- **分類:** `美食餐飲`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，熱氣騰騰食慾寫實風，主體為一鍋鴛鴦火鍋，生成30秒火鍋上桌短片。

#### 提示詞

```text
豎屏9:16，熱氣騰騰食慾寫實風，主體為一鍋鴛鴦火鍋，生成30秒火鍋上桌短片。
Shot 1：中景，鴛鴦鍋端上木桌紅湯翻滾，鏡頭緩慢推近至沸騰油花，暖黃餐廳光，（熱鬧市井音樂起）<湯底咕嘟聲>。
Shot 2：特寫，手將毛肚下入紅湯七上八下，鏡頭俯拍熱氣升騰，<涮燙聲>。
Shot 3：微距特寫，鏡頭平穩橫移掃過蝦滑、鮮切牛肉與蔬菜拼盤。
Shot 4：中近景，筷子夾起裹滿紅油的肉片提拉，鏡頭跟拍向上，<油滴聲>。
Shot 5：中景，眾人舉筷同框氛圍拉滿，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：鴛鴦鍋樣式、湯色與菜品擺盤全程一致；餐廳暖光與木桌鎖定；蒸汽與沸騰狀態持續貫穿。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 咖啡拉花

- **分類:** `美食餐飲`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，靜謐文藝寫實風，主體為一杯手工拉花拿鐵，生成30秒咖啡拉花短片。

#### 提示詞

```text
豎屏9:16，靜謐文藝寫實風，主體為一杯手工拉花拿鐵，生成30秒咖啡拉花短片。
Shot 1：特寫，濃縮咖啡萃取滴落入杯，鏡頭緩慢推近至油脂紋路，窗邊自然光，（舒緩爵士樂起）<萃取滴落聲>。
Shot 2：中近景，手持奶缸開始注入奶泡，鏡頭固定機位平視液面，<奶泡注入聲>。
Shot 3：微距特寫，鏡頭俯拍奶泡在咖啡表面暈開成葉形紋路。
Shot 4：特寫，手腕輕抖收尾拉出葉脈，鏡頭緩慢環繞杯口。
Shot 5：中景，成品拿鐵端起置於窗邊，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：拉花圖案由注入到成型連貫一致；窗邊自然光與桌面鎖定；奶泡紋理清晰無斷層。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 甜品切開流心（熔岩巧克力）

- **分類:** `美食餐飲`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，濃郁誘人寫實風，主體為一塊熔岩巧克力蛋糕，生成30秒甜品流心短片。

#### 提示詞

```text
豎屏9:16，濃郁誘人寫實風，主體為一塊熔岩巧克力蛋糕，生成30秒甜品流心短片。
Shot 1：中近景，熔岩蛋糕盛於白瓷盤撒糖粉，鏡頭緩慢推近，暖調聚光，（輕柔浪漫音樂起）。
Shot 2：特寫，叉子輕壓蛋糕表層出現裂口，鏡頭固定機位貼近，<酥皮輕裂聲>。
Shot 3：微距特寫，刀叉切開瞬間巧克力流心緩緩湧出，鏡頭俯拍高潮時刻，<濃漿流淌聲>。
Shot 4：特寫，叉起一塊拉絲流心提起，鏡頭緩慢升降跟隨拉絲。
Shot 5：中景，流心蛋糕與冰淇淋同框，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：蛋糕外殼與流心顏色質地全程一致；白瓷盤與暖調聚光鎖定；流心湧出為核心money shot需清晰突出。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 燒烤炙烤

- **分類:** `美食餐飲`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

橫屏16:9，煙火氣粗獷寫實風，主體為炭火燒烤的肉串，生成30秒燒烤炙烤短片。

#### 提示詞

```text
橫屏16:9，煙火氣粗獷寫實風，主體為炭火燒烤的肉串，生成30秒燒烤炙烤短片。
Shot 1：特寫，肉串置於炭火網上油脂滴落起火苗，鏡頭緩慢推近，暖紅炭火光，（動感燒烤氛圍樂起）<炭火滋滋聲>。
Shot 2：微距特寫，鏡頭平穩橫移掃過肉串焦糖色脆殼與撒落的孜辣椒麵。
Shot 3：中景，手翻轉肉串騰起煙霧與火光，鏡頭跟拍手部動作，<翻烤爆響>。
Shot 4：特寫，刷醬筆掃過肉串醬汁滲入，鏡頭固定機位貼近。
Shot 5：中近景，烤好的肉串碼盤端起，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：肉串種類與炙烤上色程度前後連貫；炭火與暖紅光鎖定；煙霧與火苗貫穿營造煙火氣。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 日料擺盤

- **分類:** `美食餐飲`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，極簡禪意寫實風，主體為一份刺身拼盤，生成30秒日料擺盤短片。

#### 提示詞

```text
豎屏9:16，極簡禪意寫實風，主體為一份刺身拼盤，生成30秒日料擺盤短片。
鏡頭1：中景，黑石長盤置於原木檯面，鏡頭緩慢推近，冷調頂光，（清冷古箏音樂起）。
鏡頭2：特寫，手用鑷子精準擺放鮪魚刺身與紫蘇葉，鏡頭俯拍構圖，<食材輕放聲>。
鏡頭3：微距特寫，鏡頭平穩橫移掃過鮭魚油脂紋理與冰粒光澤。
鏡頭4：中近景，澆淋醬油點綴山葵與花瓣，鏡頭緩慢環繞成品。
鏡頭5：全景，完整刺身拼盤居中定格，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：刺身種類、切片厚度與擺盤位置全程一致；黑石盤與冷調頂光鎖定；構圖保持極簡留白。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 6: 奶茶製作

- **分類:** `美食餐飲`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，清新活力寫實風，主體為一杯手作珍珠奶茶，生成30秒奶茶製作短片。

#### 提示詞

```text
豎屏9:16，清新活力寫實風，主體為一杯手作珍珠奶茶，生成30秒奶茶製作短片。
鏡頭1：特寫，煮好的黑糖珍珠倒入杯底掛壁，鏡頭緩慢推近，明亮吧檯光，（輕快流行音樂起）<珍珠落杯聲>。
鏡頭2：中近景，手持奶缸注入現萃茶湯與鮮奶，鏡頭固定機位平視分層，<注入聲>。
鏡頭3：微距特寫，鏡頭俯拍冰塊投入激起茶奶交融，<冰塊碰撞聲>。
鏡頭4：特寫，封口機壓合杯膜插入吸管，鏡頭跟拍插管動作，<戳膜聲>。
鏡頭5：中景，手舉成品奶茶輕搖展示珍珠翻湧，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：奶茶分層與珍珠顏色全程一致；吧檯明亮光與背景鎖定；製作步驟順序連貫不跳變。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 7: 麵點拉麵

- **分類:** `美食餐飲`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

橫屏16:9，匠心手作寫實風，主體為手工拉麵製作，生成30秒拉麵短片。

#### 提示詞

```text
橫屏16:9，匠心手作寫實風，主體為手工拉麵製作，生成30秒拉麵短片。
鏡頭1：中景，麵案上揉好的麵糰靜置，雙手按壓回醒，鏡頭緩慢推近，暖調廚房光，（明快民樂起）<揉麵聲>。
鏡頭2：特寫，雙手抻拉麵糰反覆對折甩打案板，鏡頭跟拍手部弧線，<甩麵擊案聲>。
鏡頭3：中近景，麵條越拉越細成絲下入沸鍋，鏡頭俯拍熱氣翻騰，<下鍋沸響>。
鏡頭4：特寫，撈起麵條碼入海碗澆上高湯，鏡頭平穩橫移展示湯頭。
鏡頭5：中景，撒蔥花擺牛肉完成成品，鏡頭緩慢拉遠收尾，（音樂收束）。
約束：麵條粗細與成品澆頭前後連貫；廚房暖光與麵案鎖定；抻拉動作連貫體現手工感。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 8: 早餐場景（一鏡到底）

- **分類:** `美食餐飲`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，溫暖治癒生活寫實風，主體為一份中式早餐，生成30秒早餐場景一鏡到底短片。

#### 提示詞

```text
豎屏9:16，溫暖治癒生活寫實風，主體為一份中式早餐，生成30秒早餐場景一鏡到底短片。
鏡頭1：一鏡到底跟拍，晨光透過窗簾灑落餐桌，鏡頭緩慢推近熱氣騰騰的小籠包，（溫柔晨間鋼琴樂起）<蒸籠揭蓋聲>。
鏡頭2：同一長鏡頭順勢平穩橫移，滑過金黃煎蛋、油條與豆漿，熱氣與光斑流動。
鏡頭3：同一長鏡頭順勢緩慢升降，手夾起小籠包蘸醋提起，<湯汁滴落聲>。
鏡頭4：同一長鏡頭順勢環繞小半圈，掠過餐桌旁翻開的書頁與冒煙咖啡杯。
鏡頭5：同一長鏡頭順勢緩慢拉遠，定格溫馨早餐全景，（音樂收束）。
約束：全程保持單一不間斷長鏡頭運動無剪切；餐品擺盤與晨光基調全程一致；鏡頭移動平滑銜接體現一鏡到底質感。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-11"></a>

### 美妝時尚 (6)

### No. 1: 口紅試色

- **分類:** `美妝時尚`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的口紅（膏體色號與管身logo以圖片1為準）為主體，豎屏9:16，高飽和美妝質感，生成30秒試色短片。

#### 提示詞

```text
參考圖片1中的口紅（膏體色號與管身logo以圖片1為準）為主體，豎屏9:16，高飽和美妝質感，生成30秒試色短片。
鏡頭1：極近特寫，口紅@圖片1 膏體緩緩旋出，絨面反光流轉，鏡頭緩慢推近，（清脆電子音樂起）<旋蓋輕響>。
鏡頭2：特寫，鏡頭平穩橫移掃過唇部，膏體一筆劃過雙唇留下飽滿色澤。
鏡頭3：中近景，仰拍模特抿唇微笑，唇色在柔光下顯色，【今日色號 · 正紅】。
鏡頭4：特寫，鏡頭環繞模特側臉，唇部高光隨轉頭流動。
鏡頭5：中景，模特手持口紅@圖片1 對鏡定格，鏡頭緩慢拉遠，（音樂收束）。
約束：膏體色號與管身logo以圖片1為準不改；唇色須與膏體色一致。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 粉底上妝

- **分類:** `美妝時尚`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的粉底瓶（瓶身與滴管以圖片1為準）為主體，豎屏9:16，乾淨通透的護膚妝感，生成30秒上妝短片。

#### 提示詞

```text
參考圖片1中的粉底瓶（瓶身與滴管以圖片1為準）為主體，豎屏9:16，乾淨通透的護膚妝感，生成30秒上妝短片。
鏡頭1：極近特寫，一滴粉底@圖片1 從滴管垂落至手背，質地盪開，鏡頭緩慢推近，<液滴滴落聲>。
鏡頭2：特寫，鏡頭平穩橫移，美妝蛋在臉頰按壓暈開，肌理逐漸均勻。
鏡頭3：中近景，跟拍模特轉頭，臉頰在自然光下呈現無瑕光澤。
鏡頭4：特寫，仰拍模特閉眼上妝，睫毛投下柔影，（輕柔鋼琴音樂）。
鏡頭5：中景，模特手持粉底瓶@圖片1 微笑定格，鏡頭緩慢拉遠，【裸感無瑕】。
約束：瓶身與滴管以圖片1為準；妝面須真實無過度磨皮塑膠感。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 香水氛圍

- **分類:** `美妝時尚`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的香水瓶（瓶型與刻字以圖片1為準）為主體，橫屏16:9，法式復古氛圍光影，生成30秒氛圍短片。

#### 提示詞

```text
參考圖片1中的香水瓶（瓶型與刻字以圖片1為準）為主體，橫屏16:9，法式復古氛圍光影，生成30秒氛圍短片。
Shot 1：特寫，香水瓶@Image 1 立於窗邊石台，晨光穿瓶折射光斑，鏡頭緩慢推近，（弦樂氛圍起）。
Shot 2：中景，鏡頭緩慢環繞瓶身，玻璃切面反射流轉的暖光。
Shot 3：特寫，仰拍噴霧瞬間，霧珠在逆光中懸浮成金色微塵，<噴霧輕響>。
Shot 4：中近景，跟拍霧氣飄向紗簾，簾影隨風輕擺。
Shot 5：中景，香水瓶@Image 1 回落石台定格，鏡頭緩慢拉遠，（弦樂漸弱）。
約束：瓶型與瓶身刻字以圖片1為準；氛圍鎖定暖調法式復古不偏冷色。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 護膚精華滴落

- **分類:** `美妝時尚`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的精華瓶（瓶身與滴管刻度以圖片1為準）為主體，豎屏9:16，晶瑩通透的高保濕質感，生成30秒質地短片。

#### 提示詞

```text
參考圖片1中的精華瓶（瓶身與滴管刻度以圖片1為準）為主體，豎屏9:16，晶瑩通透的高保濕質感，生成30秒質地短片。
Shot 1：極近特寫，滴管懸於半空，一滴精華@Image 1 將墜未墜，鏡頭固定機位，<細微氣泡聲>。
Shot 2：極近特寫，精華垂落砸入水面，慢速漣漪擴散，鏡頭緩慢推近，（水滴音樂點綴）。
Shot 3：特寫，鏡頭平穩橫移，精華在指尖拉出晶瑩絲線。
Shot 4：中近景，俯拍精華塗抹於手背，光澤如鏡面鋪展。
Shot 5：中景，精華瓶@Image 1 立於水光背景定格，鏡頭緩慢升起，【24小時鎖水】。
約束：瓶身與滴管刻度以圖片1為準；質地須透亮拉絲不渾濁。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 時尚街拍

- **分類:** `美妝時尚`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的模特造型（服裝與配飾以圖片1為準）為主體，豎屏9:16，膠片顆粒都市街頭感，生成30秒街拍短片。

#### 提示詞

```text
參考圖片1中的模特造型（服裝與配飾以圖片1為準）為主體，豎屏9:16，膠片顆粒都市街頭感，生成30秒街拍短片。
Shot 1：中景，模特@Image 1 推開玻璃門邁出街頭，風揚起衣擺，鏡頭跟拍，（復古disco節奏起）。
Shot 2：全景，鏡頭平穩橫移追隨模特走過霓虹櫥窗，倒影流動。
Shot 3：中近景，仰拍模特回眸摘下墨鏡，逆光勾出發絲金邊。
Shot 4：特寫，鏡頭緩慢推近配飾細節，金屬反光閃爍。
Shot 5：全景，模特@Image 1 站定街心張手定格，鏡頭緩慢拉遠升起，【CITY WALK】（音樂收束）。
約束：服裝與配飾以圖片1為準不改款式；膠片顆粒與都市霓虹色調鎖定全程。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 6: 髮型展示

- **分類:** `美妝時尚`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的模特髮型（髮色與造型以圖片1為準）為主體，豎屏9:16，沙龍廣告級柔光質感，生成30秒髮型短片。

#### 提示詞

```text
參考圖片1中的模特髮型（髮色與造型以圖片1為準）為主體，豎屏9:16，沙龍廣告級柔光質感，生成30秒髮型短片。
Shot 1：特寫，模特@Image 1 低頭蓄勢，髮絲垂落遮面，鏡頭固定機位，（節奏音樂前奏）。
Shot 2：中近景，模特猛然甩頭，髮絲在慢速中揚起弧線，鏡頭緩慢拉遠，<甩髮風聲>。
Shot 3：特寫，鏡頭環繞頭部，光影掃過髮絲的順滑高光。
Shot 4：中景，跟拍模特手指穿過髮間，髮流層次分明落下。
Shot 5：中近景，模特@Image 1 轉身回眸定格，髮型定型飽滿，鏡頭緩慢推近，【光澤如鏡】。
約束：髮色與造型輪廓以圖片1為準；甩髮須自然順滑無穿模斷裂。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-12"></a>

### 數碼科技 (6)

### No. 1: 手機產品旋轉

- **分類:** `數碼科技`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的手機（機身與logo以圖片1為準）為主體，橫屏16:9，科技高級感冷調，生成30秒產品展示片。

#### 提示詞

```text
參考圖片1中的手機（機身與logo以圖片1為準）為主體，橫屏16:9，科技高級感冷調，生成30秒產品展示片。
Shot 1：極近特寫，手機@Image 1 在深色台面亮屏點亮，冷光勾邊，鏡頭緩慢推近，（低頻電子音起）。
Shot 2：中景，鏡頭平穩環繞展示手機@Image 1 背板金屬質感與攝像頭模組。
Shot 3：特寫，鏡頭緩慢橫移掃過側邊按鍵與接口細節。
Shot 4：中近景，仰拍手機@Image 1 緩緩立起懸浮，冷光自底部漫上。
Shot 5：中景，手機@Image 1 懸浮旋轉定格，鏡頭緩慢拉遠，（音樂收束）。
約束：機身與logo以圖片1為準不改設計；不虛構界面內容；冷調工業光鎖定全程。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 耳機彈出充電倉

- **分類:** `數碼科技`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的耳機充電倉（外形與logo以圖片1為準）為主體，橫屏16:9，極簡純白棚拍質感，生成30秒開箱短片。

#### 提示詞

```text
參考圖片1中的耳機充電倉（外形與logo以圖片1為準）為主體，橫屏16:9，極簡純白棚拍質感，生成30秒開箱短片。
Shot 1：極近特寫，充電倉@Image 1 靜置純白台面，指尖將至倉蓋，鏡頭固定機位，（清脆提示音）。
Shot 2：特寫，倉蓋緩緩掀開，指示燈點亮，鏡頭緩慢推近，<開合卡扣聲>。
Shot 3：中近景，耳機自倉內緩緩升起懸浮，鏡頭緩慢升降跟隨。
Shot 4：特寫，鏡頭環繞單隻耳機，展示入耳角度與麥克風開孔。
Shot 5：中景，耳機與充電倉@Image 1 並置定格，鏡頭緩慢拉遠，【無縫隨身】。
約束：外形與logo以圖片1為準不改結構；純白無縫背景鎖定不加雜物。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 筆記本開合

- **分類:** `數碼科技`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的筆記型電腦（外殼與logo以圖片1為準）為主體，橫屏16:9，高級金屬冷光質感，生成30秒展示短片。

#### 提示詞

```text
參考圖片1中的筆記型電腦（外殼與logo以圖片1為準）為主體，橫屏16:9，高級金屬冷光質感，生成30秒展示短片。
Shot 1：極近特寫，筆記本@Image 1 合蓋側躺，冷光掃過鋁合金轉軸，鏡頭緩慢橫移，（低頻氛圍音起）。
Shot 2：中近景，屏軸緩緩開合至立起，螢幕漸亮，鏡頭緩慢推近，<轉軸阻尼聲>。
Shot 3：特寫，俯拍鍵盤背光逐鍵點亮，光波流過。
Shot 4：中景，鏡頭平穩環繞展示機身超薄側面與接口。
Shot 5：中景，筆記本@Image 1 半開姿態懸浮定格，鏡頭緩慢拉遠，（音樂收束）。
約束：外殼厚度與logo以圖片1為準；不虛構螢幕UI具體內容；金屬冷光鎖定全程。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 智慧手錶介面

- **分類:** `數碼科技`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的智慧手錶（錶殼與錶帶以圖片1為準）為主體，豎屏9:16，明快活力科技感，生成30秒功能短片。

#### 提示詞

```text
參考圖片1中的智慧手錶（錶殼與錶帶以圖片1為準）為主體，豎屏9:16，明快活力科技感，生成30秒功能短片。
Shot 1：極近特寫，手錶@Image 1 錶盤抬腕亮屏，動效展開，鏡頭緩慢推近，（明快電子音樂起）。
Shot 2：特寫，鏡頭緩慢橫移，錶冠轉動切換錶盤卡片。
Shot 3：中近景，跟拍手腕擺動，運動數據環隨動作跳動。
Shot 4：特寫，環繞展示錶殼側邊與錶帶扣合質感。
Shot 5：中景，手錶@Image 1 佩戴於腕定格抬起，鏡頭緩慢拉遠，【全天候守護】。
約束：錶殼與錶帶以圖片1為準；介面動效簡潔不虛構具體數值細節。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 無人機飛行

- **分類:** `數碼科技`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的無人機（機身與槳葉以圖片1為準）為主體，橫屏16:9，開闊航拍紀實感，生成30秒飛行短片。

#### 提示詞

```text
參考圖片1中的無人機（機身與槳葉以圖片1為準）為主體，橫屏16:9，開闊航拍紀實感，生成30秒飛行短片。
Shot 1：中近景，無人機@Image 1 自草地緩緩升空，槳葉高速虛化，鏡頭緩慢升降跟隨，<槳葉嗡鳴>（氛圍音樂起）。
Shot 2：特寫，鏡頭環繞懸停機身，雲台微調鏡頭方向。
Shot 3：全景，跟拍無人機掠過湖面，倒影隨之滑行。
Shot 4：大遠景，俯拍無人機飛越山脊，大地在下方鋪展。
Shot 5：中景，無人機@Image 1 平穩返航懸停定格，鏡頭緩慢拉遠，（音樂收束）。
約束：機身與槳葉結構以圖片1為準；飛行姿態須穩定符合真實空氣動力不漂移抖動。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 6: 晶片微距（科技紀實）

- **分類:** `數碼科技`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的晶片（封裝與絲印以圖片1為準）為主體，橫屏16:9，冷峻科技紀實微距質感，生成30秒微距短片。

#### 提示詞

```text
參考圖片1中的晶片（封裝與絲印以圖片1為準）為主體，橫屏16:9，冷峻科技紀實微距質感，生成30秒微距短片。
Shot 1：極近微距特寫，晶片@Image 1 靜臥電路板，金針腳泛冷光，鏡頭緩慢推近，（低頻工業音起）。
Shot 2：微距特寫，鏡頭平穩橫移掃過封裝表面絲印與切割邊緣。
Shot 3：微距特寫，俯拍焊點與走線，景深淺至一線清晰。
Shot 4：中近景，鏡頭緩慢拉遠露出整塊電路板陣列，指示燈明滅。
Shot 5：特寫，晶片@Image 1 在冷光中定格，鏡頭緩慢環繞收尾，（音樂漸弱）。
約束：封裝型號與絲印以圖片1為準不改；微距景深真實不虛構不存在的電路結構。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-13"></a>

### 汽車 (4)

### No. 1: 夜景跟拍

- **分類:** `汽車`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的汽車（車型與車漆以圖片1為準）為主體，橫屏16:9，賽博夜景電影質感，生成30秒跟拍短片。

#### 提示詞

```text
參考圖片1中的汽車（車型與車漆以圖片1為準）為主體，橫屏16:9，賽博夜景電影質感，生成30秒跟拍短片。
Shot 1：中近景，車@Image 1 停於霓虹街口，車燈點亮，雨面倒映光色，鏡頭緩慢推近，（低音電子節奏起）<引擎輕吼>。
Shot 2：中景，側向跟拍車輛駛過霓虹長街，光帶在車漆流淌。
Shot 3：特寫，鏡頭平穩橫移掃過前臉大燈與格柵冷光。
Shot 4：全景，仰拍車輛穿越隧道，頂燈條狀光影快速掠過。
Shot 5：中景，車@Image 1 駛出隧道減速定格，鏡頭緩慢拉遠升起，（節奏收束）。
約束：車型與車漆顏色以圖片1為準不改；夜景霓虹與濕地反光氛圍鎖定全程。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 細節特寫快切

- **分類:** `汽車`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的汽車（車型與車漆以圖片1為準）為主體，橫屏16:9，硬朗高對比工業質感，生成30秒細節短片。

#### 提示詞

```text
參考圖片1中的汽車（車型與車漆以圖片1為準）為主體，橫屏16:9，硬朗高對比工業質感，生成30秒細節短片。
Shot 1：極近特寫，車@Image 1 大燈亮起燈眉線，冷光勾勒稜角，鏡頭緩慢推近，（急促鼓點起）。
Shot 2：特寫，鏡頭切至輪轂，慢速旋轉反射光斑。
Shot 3：特寫，鏡頭切至車標與格柵，金屬高光掃過。
Shot 4：特寫，鏡頭切至排氣與尾翼線條，鏡頭平穩橫移。
Shot 5：中景，車@Image 1 整車定格於光束中，鏡頭緩慢拉遠，（鼓點收束）【每處皆鋒芒】。
約束：車型與車漆以圖片1為準；快切每鏡聚焦單一部件不重複；高對比硬光鎖定全程。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 越野場景

- **分類:** `汽車`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的越野車（車型與車漆以圖片1為準）為主體，橫屏16:9，粗礪荒野紀實感，生成30秒越野短片。

#### 提示詞

```text
參考圖片1中的越野車（車型與車漆以圖片1為準）為主體，橫屏16:9，粗礪荒野紀實感，生成30秒越野短片。
Shot 1：中景，越野車@Image 1 衝上沙丘揚起塵浪，鏡頭跟拍，<輪胎碾砂聲>（激昂鼓樂起）。
Shot 2：特寫，仰拍車輪碾過碎石，泥砂飛濺鏡頭。
Shot 3：全景，側向平穩橫移追隨車輛涉過淺溪，水花四濺。
Shot 4：大遠景，俯拍越野車穿行荒原車轍，塵煙拖長。
Shot 5：中景，越野車@Image 1 登頂山脊停穩定格，鏡頭緩慢升起拉遠，（鼓樂收束）。
約束：車型與車漆以圖片1為準；越野動態須符合真實地形物理不懸浮打滑失真。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 內飾展示

- **分類:** `汽車`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的汽車內飾（材質與配色以圖片1為準）為主體，橫屏16:9，溫潤高級座艙光感，生成30秒內飾短片。

#### 提示詞

```text
參考圖片1中的汽車內飾（材質與配色以圖片1為準）為主體，橫屏16:9，溫潤高級座艙光感，生成30秒內飾短片。
Shot 1：極近特寫，內飾@Image 1 真皮座椅縫線在暖光下起伏，鏡頭緩慢橫移，（舒緩氛圍音樂起）。
Shot 2：中近景，鏡頭緩慢推近中控屏，氛圍燈漸次點亮。
Shot 3：特寫，環繞方向盤與撥片，金屬飾條反光流轉。
Shot 4：中景，俯拍座艙全景，天窗光自上傾落。
Shot 5：中近景，鏡頭緩慢升起收於座艙定格，暖光瀰漫，（音樂漸弱）【靜謐座艙】。
約束：材質與配色以圖片1為準不改；不虛構中控屏具體UI內容；暖調座艙光鎖定全程。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-14"></a>

### 房產與家居 (4)

### No. 1: 客廳空間漫遊

- **分類:** `房產與家居`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，房產品質宣傳片、明亮通透暖白調，生成30秒客廳空間漫遊短片。

#### 提示詞

```text
豎屏9:16，房產品質宣傳片、明亮通透暖白調，生成30秒客廳空間漫遊短片。
Shot 1：固定機位，晨光從落地窗斜射入空蕩客廳，塵埃在光柱中浮動，（舒緩鋼琴起）。
Shot 2：平穩橫移，鏡頭貼地掠過原木地板與米色布藝沙發，抱枕紋理清晰，<腳步輕響>。
Shot 3：緩慢推近，聚焦茶几上一杯冒著熱氣的咖啡與攤開的書，暖光灑落，（弦樂疊入）。
Shot 4：升降，機位由地面緩緩抬升，展現客廳與開放式餐廚的通透格局，【建面98㎡ 南北通透】。
Shot 5：緩慢拉遠，退回至玄關回望整個客廳縱深，暖白定格，（音樂收束）。
約束：全程無人物出鏡；家具陳設風格統一為現代簡約原木風；光線保持晨間暖白一致。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 廚房細節

- **分類:** `房產與家居`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，高端家電質感廣告、冷靜金屬灰配暖木色，生成30秒廚房細節短片。

#### 提示詞

```text
豎屏9:16，高端家電質感廣告、冷靜金屬灰配暖木色，生成30秒廚房細節短片。
Shot 1：特寫，水龍頭流水傾瀉在不鏽鋼台盆，水珠飛濺慢感，<水流嘩嘩>。
Shot 2：平穩橫移，鏡頭沿石英石台面滑過刀具、砧板與新鮮蔬果，冷光提亮，（輕快節奏起）。
Shot 3：緩慢推近，抽屜自動滑出展示分格收納與啞光把手，暖木色調，<抽屜順滑軌道聲>。
Shot 4：俯拍，燃氣灶藍焰點燃、鍋中油花跳動，熱氣升騰，<點火咔噠><油爆滋滋>。
Shot 5：仰拍，機位由灶台仰望頂部油煙機與嵌入式燈帶，金屬反光，【嵌入式集成廚電】，（音樂收束）。
約束：全程無人物出鏡；台面始終整潔無雜物；金屬與木色材質質感全程一致。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 戶型俯瞰（示意）

- **分類:** `房產與家居`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

橫屏16:9，建築可視化示意風、乾淨白模配柔和天光，生成30秒戶型俯瞰示意短片。

#### 提示詞

```text
橫屏16:9，建築可視化示意風、乾淨白模配柔和天光，生成30秒戶型俯瞰示意短片。
Shot 1：俯拍，正上方垂直俯視完整戶型白模平面，隔斷線清晰，（極簡電子音起）。
Shot 2：緩慢推近，鏡頭下探穿過"消失的天花板"進入客廳示意區，家具以半透明呈現，<空間切換音效>。
Shot 3：環繞，繞主臥示意區旋轉一週，展示飄窗與衣帽間動線，柔光漸亮，（節奏漸強）。
Shot 4：平穩橫移，沿走廊示意動線滑向次臥與衛生間，標註浮現，【三室兩廳 動靜分區】。
Shot 5：升降，機位拔高回到全局俯瞰並疊加面積數據，天光定格，（音樂收束）。
約束：全程為示意白模非實景，需標註"示意圖僅供參考"字樣；戶型比例結構全程一致；無真實人物家具。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 臥室氛圍

- **分類:** `房產與家居`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，慢生活氛圍廣告、暖橙夜燈柔調，生成30秒臥室氛圍短片。

#### 提示詞

```text
豎屏9:16，慢生活氛圍廣告、暖橙夜燈柔調，生成30秒臥室氛圍短片。
Shot 1：固定機位，床頭暖燈亮起瞬間照亮素色床品與半掩的窗簾，（氛圍音樂起）。
Shot 2：緩慢推近，鏡頭貼近枕邊掠過柔軟被褶與攤放的書本，光影漸暖，<窗外細雨聲>。
Shot 3：平穩橫移，沿床尾滑過飄窗上的綠植與香薰，暖橙光暈流動，（鋼琴輕點）。
Shot 4：升降，機位緩緩抬升俯瞰整床與吊燈柔光，營造安睡包圍感，【臥室採光通風俱佳】。
Shot 5：緩慢拉遠，退至房門口回望暖燈下的臥室全景，柔調定格，（音樂收束）。
約束：全程無人物出鏡；燈光維持暖橙夜調一致；床品陳設保持素雅統一風格。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-15"></a>

### 人物口播與數位人像 (6)

### No. 1: 知識口播

- **分類:** `人物口播與數位人像`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

主播綁定@圖片1（面部妝造以對應圖為準），豎屏9:16，知識博主乾淨演播風、明亮柔光，生成30秒知識口播短片。

#### 提示詞

```text
主播綁定@圖片1（面部妝造以對應圖為準），豎屏9:16，知識博主乾淨演播風、明亮柔光，生成30秒知識口播短片。
Shot 1：中近景，主播@Image 1 直視鏡頭身體前傾拋出問題，淺景深書架背景，固定機位，{你知道90%的人都用錯了嗎？}。
Shot 2：緩慢推近，主播@Image 1 邊說邊豎起手指強調，眼神篤定，暖光提亮，（輕快背景樂起）。
Shot 3：鏡頭切至，屏幕右側浮現要點圖示，主播@Image 1 側身指向，平穩橫移，【要點一 二 三】。
Shot 4：中近景，主播@Image 1 回正身體微笑總結，語氣放緩，固定機位，{記住這三點就夠了}。
Shot 5：緩慢拉遠，主播@Image 1 點頭收尾並招手，柔光定格，（音樂收束）。
約束：主播面部以圖片1為準全程一致；口型與台詞嚴格對齊；演播背景固定不變。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 新聞播報

- **分類:** `人物口播與數位人像`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

主播綁定@圖片1（面部妝造以對應圖為準），橫屏16:9，權威新聞演播室、冷藍專業調，生成30秒新聞播報短片。

#### 提示詞

```text
主播綁定@圖片1（面部妝造以對應圖為準），橫屏16:9，權威新聞演播室、冷藍專業調，生成30秒新聞播報短片。
Shot 1：中景，主播@Image 1 正襟危坐正視鏡頭開場，身後藍色演播屏，固定機位，{觀眾朋友晚上好，歡迎收看本期播報}。
Shot 2：緩慢推近，主播@Image 1 神情嚴肅播報導語，語速平穩，冷藍光，【今日要聞】。
Shot 3：鏡頭切至，主播@Image 1 右後方浮現新聞畫面窗口，平穩橫移，<演播室提示音>。
Shot 4：中近景，主播@Image 1 轉向另一機位繼續播報，眼神切換自然，固定機位，（低沉背景樂）。
Shot 5：緩慢拉遠，主播@Image 1 雙手交疊致意收尾，冷藍定格，{感謝收看，我們下期再見}。
約束：主播面部以圖片1為準全程一致；口型與台詞嚴格對齊；坐姿端正專業，演播室背景固定。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 帶貨口播

- **分類:** `人物口播與數位人像`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

主播綁定@圖片2（面部妝造以對應圖為準），豎屏9:16，直播帶貨熱鬧風、明亮高飽和暖調，生成30秒帶貨口播短片。

#### 提示詞

```text
主播綁定@圖片2（面部妝造以對應圖為準），豎屏9:16，直播帶貨熱鬧風、明亮高飽和暖調，生成30秒帶貨口播短片。
Shot 1：中近景，主播@Image 2 雙手舉起產品湊近鏡頭熱情吆喝，固定機位，{家人們看過來，今天這款真的絕了！}。
Shot 2：緩慢推近，主播@Image 2 手指劃過產品賣點，表情誇張興奮，高飽和暖光，<叮 上連結音效>。
Shot 3：鏡頭切至，屏幕左下浮現價格爆炸貼，主播@Image 2 拍手強調，平穩橫移，【限時直降 僅99】。
Shot 4：中景，主播@Image 2 舉起產品左右展示細節，語速加快，固定機位，（激昂促銷樂）。
Shot 5：緩慢推近，主播@Image 2 豎大拇指催單收尾，暖調定格，{手慢無，趕緊下單！}。
約束：主播面部以圖片2為準全程一致；口型與台詞嚴格對齊；產品外觀保持一致；背景貨架陳列固定。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 深夜情感電台

- **分類:** `人物口播與數位人像`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

主播綁定@圖片3（面部妝造以對應圖為準），豎屏9:16，深夜電台氛圍、暖橙微光低對比，生成30秒情感電台短片。

#### 提示詞

```text
主播綁定@圖片3（面部妝造以對應圖為準），豎屏9:16，深夜電台氛圍、暖橙微光低對比，生成30秒情感電台短片。
Shot 1：中近景，主播@Image 3 側對麥克風閉眼輕聲開口，暖橙檯燈打側光，固定機位，（溫柔鋼琴起）{夜深了，還沒睡的你還好嗎}。
Shot 2：緩慢推近，主播@Image 3 睜眼望向虛空神情溫柔，眼底泛光，暖光暈染，<窗外夜雨輕響>。
Shot 3：平穩橫移，鏡頭掠過桌面的耳機與溫熱的茶杯，主播@Image 3 入畫低語，（鋼琴漸強）。
Shot 4：特寫，主播@Image 3 嘴角微揚輕聲安慰，睫毛微顫，暖橙微光，{願你被這個世界溫柔以待}。
Shot 5：緩慢拉遠，主播@Image 3 摘下耳機低頭微笑收尾，微光定格，（音樂收束）。
約束：主播面部以圖片3為準全程一致；口型與台詞嚴格對齊；情緒用睫毛微顫與眼底泛光外化，禁止直白旁白式表演；暖橙夜調全程一致。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 教學講師

- **分類:** `人物口播與數位人像`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

講師綁定@圖片1（面部妝造以對應圖為準），橫屏16:9，在線課堂明亮專業、白板清爽調，生成30秒教學講師短片。

#### 提示詞

```text
講師綁定@圖片1（面部妝造以對應圖為準），橫屏16:9，在線課堂明亮專業、白板清爽調，生成30秒教學講師短片。
Shot 1：中景，講師@Image 1 站於白板前轉身面向鏡頭開講，手持記號筆，固定機位，{這節課我們只講一個核心公式}。
Shot 2：平穩橫移，講師@Image 1 邊走邊在白板書寫關鍵詞，鏡頭隨其移動，明亮白光，<記號筆書寫聲>。
Shot 3：鏡頭切至，白板板書區放大浮現公式高亮，講師@Image 1 側身指點，緩慢推近，【核心公式】。
Shot 4：中近景，講師@Image 1 轉回鏡頭舉例講解，表情生動，固定機位，（輕快學習背景樂）。
Shot 5：緩慢拉遠，講師@Image 1 雙手一攤微笑收束並點頭，白光定格，{聽懂了嗎，下節課見}。
約束：講師面部以圖片1為準全程一致；口型與台詞嚴格對齊；白板板書內容前後連貫；課堂背景固定。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 6: 多語言分身（含編輯任務思路）

- **分類:** `人物口播與數位人像`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

數字人綁定@圖片1（面部妝造以對應圖為準），豎屏9:16，跨國品牌統一演播風、簡潔科技藍調，生成30秒多語言分身短片。

#### 提示詞

```text
數字人綁定@圖片1（面部妝造以對應圖為準），豎屏9:16，跨國品牌統一演播風、簡潔科技藍調，生成30秒多語言分身短片。
Shot 1：中近景，數字人@Image 1 正視鏡頭用中文問候開場，科技藍背景屏，固定機位，{大家好，歡迎了解我們的產品}【中文】。
Shot 2：鏡頭切至，同一數字人@Image 1 無縫切換英文口播，口型對齊英文，緩慢推近，{Hello everyone, welcome}【English】。
Shot 3：鏡頭切至，數字人@Image 1 切換日語問候，神態一致，平穩橫移，{皆さんこんにちは}【日本語】。
Shot 4：中景，數字人@Image 1 張開雙臂歡迎手勢，背景浮現多語言字幕流，固定機位，（科技感背景樂）。
Shot 5：緩慢拉遠，數字人@Image 1 微笑點頭收尾，藍調定格，（音樂收束）。
約束：編輯任務思路——先生成中文母版鏡頭，再用"保持人物與運鏡不變、僅替換台詞與口型為目標語言"的編輯指令派生英/日分身，確保面部@Image 1、機位、背景、著裝全程完全一致；各語種口型與對應台詞嚴格對齊；禁止分身出現面容漂移。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-16"></a>

### 短劇與情感敘事 (8)

### No. 1: 便利店重逢（情緒反轉）

- **分類:** `短劇與情感敘事`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的女主、圖片3中的男主（各自面部妝造以對應圖為準），豎屏9:16，電影感寫實、冷藍轉暖橙，生成30秒情感短劇。

#### 提示詞

```text
參考圖片1中的女主、圖片3中的男主（各自面部妝造以對應圖為準），豎屏9:16，電影感寫實、冷藍轉暖橙，生成30秒情感短劇。
Shot 1：全景，女主@Image 1 獨自靠窗低頭攪動咖啡，冷藍夜調，鏡頭緩慢推近，（鋼琴輕起）。
Shot 2：中近景，男主@Image 3 推門入畫，女主@Image 1 抬頭怔住，固定機位帶呼吸感，<門鈴叮咚>。
Shot 3：特寫，鏡頭切至兩人之間來回對切，色調漸暖，男主@Image 3 輕聲說{我來接你了}，（鋼琴漸強）。
Shot 4：特寫，女主@Image 1 眼眶泛紅嘴角上揚，鏡頭緩慢拉遠，暖橙定格，（音樂收束）。
約束：男女主面部以對應圖片為準全程一致；便利店場景固定；情緒反轉用眼眶泛紅與嘴角顫抖外化；禁止分身雙胞胎。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 雨夜獨白

- **分類:** `短劇與情感敘事`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

主角綁定@圖片2（面部妝造以對應圖為準），豎屏9:16，冷調文藝寫實、青灰雨夜低飽和，生成30秒情感獨白短片。

#### 提示詞

```text
主角綁定@Image 2（面部妝造以對應圖為準），豎屏9:16，冷調文藝寫實、青灰雨夜低飽和，生成30秒情感獨白短片。
Shot 1：特寫，雨水順著玻璃窗蜿蜒滑落，主角@Image 2 模糊倒影浮現窗後，固定機位，<雨聲淅瀝>（低沉大提琴起）。
Shot 2：緩慢推近，主角@Image 2 貼窗凝視雨夜街燈，指尖抵住冰涼玻璃，青灰冷光，{有些話，只能說給雨聽}。
Shot 3：平穩橫移，鏡頭掠過桌上熄滅的手機與半涼的茶，主角@Image 2 側臉入畫，（大提琴漸強）。
Shot 4：中近景，主角@Image 2 深吸一口氣閉眼，一滴淚滑過臉頰與窗上雨痕重疊，緩慢推近，<雨勢漸大>。
Shot 5：緩慢拉遠，主角@Image 2 睜眼扯出釋然淺笑轉身離窗，青灰定格，（音樂收束）。
約束：主角面部以圖片2為準全程一致；情緒用抵窗指尖與淚痕外化，禁止直白台詞說"我很難過"；雨夜青灰調與場景全程一致。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 家庭餐桌

- **分類:** `短劇與情感敘事`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的母親、圖片2中的父親、圖片4中的孩子（各自面部妝造以對應圖為準），橫屏16:9，溫馨生活寫實、暖黃居家調，生成30秒家庭情感短片。

#### 提示詞

```text
參考圖片1中的母親、圖片2中的父親、圖片4中的孩子（各自面部妝造以對應圖為準），橫屏16:9，溫馨生活寫實、暖黃居家調，生成30秒家庭情感短片。
Shot 1：全景，一家三口圍坐餐桌，熱菜升騰白氣，母親@Image 1 正為孩子@Image 4 夾菜，暖黃燈光，固定機位，（溫暖民謠起）<碗筷輕碰>。
Shot 2：中近景，父親@Image 2 笑著給母親@Image 1 盛湯，兩人相視一笑，緩慢推近，<湯勺叮噹>。
Shot 3：特寫，孩子@Image 4 鼓著腮幫大口吃飯抬頭咧嘴笑，暖光灑臉，鏡頭切至。
Shot 4：中景，母親@Image 1 伸手替父親@Image 2 擦去嘴角，父親愣了下隨即握住她的手，平穩橫移，（民謠漸暖）。
Shot 5：緩慢升降，機位抬升俯瞰滿桌飯菜與相依的一家人，暖黃定格，（音樂收束）。
約束：三位人物面部嚴格以對應圖片為準，母親/父親/孩子體貌年齡區分明顯，禁止分身雙胞胎或面容混淆；餐桌菜品與暖黃居家場景全程一致。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 離別車站

- **分類:** `短劇與情感敘事`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的女主、圖片3中的男主（各自面部妝造以對應圖為準），橫屏16:9，電影感寫實、冷調站台微暖逆光，生成30秒離別情感短片。

#### 提示詞

```text
參考圖片1中的女主、圖片3中的男主（各自面部妝造以對應圖為準），橫屏16:9，電影感寫實、冷調站台微暖逆光，生成30秒離別情感短片。
Shot 1：全景，站台人潮湧動，女主@Image 1 與男主@Image 3 相對而立緊握雙手，列車在旁，冷調逆光，緩慢推近，（弦樂低回起）<列車進站廣播>。
Shot 2：特寫，兩人緊扣的手指緩緩收緊又不捨鬆開，暖逆光勾邊，固定機位。
Shot 3：中近景，男主@Image 3 抬手替女主@Image 1 別好被風吹亂的髮絲，欲言又止，緩慢推近，{到了……記得報平安}。
Shot 4：中景，男主@Image 3 轉身登車，女主@Image 1 站在原地肩膀微微顫抖強忍淚水，平穩橫移，（弦樂拔高）<車門關閉提示音>。
Shot 5：緩慢拉遠，列車駛離，女主@Image 1 獨立空蕩站台逆光剪影，冷調定格，（音樂收束）。
約束：男女主面部以對應圖片為準全程一致；離別情緒用收緊的手指與顫抖肩膀外化，禁止直白哭喊；站台場景與冷暖逆光全程一致；禁止分身雙胞胎。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 職場高光

- **分類:** `短劇與情感敘事`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

主角綁定@圖片2（面部妝造以對應圖為準），橫屏16:9，商務燃系寫實、冷藍鋼玻璃質感轉金光，生成30秒職場勵志短片。

#### 提示詞

```text
主角綁定@Image 2（面部妝造以對應圖為準），橫屏16:9，商務燃系寫實、冷藍鋼玻璃質感轉金光，生成30秒職場勵志短片。
Shot 1：中近景，主角@Image 2 獨坐深夜辦公室對滿屏數據蹙眉，冷藍屏光映臉，固定機位，（低鼓點起）<鍵盤敲擊密集>。
Shot 2：緩慢推近，主角@Image 2 猛地抬頭眼神一亮抓起筆圈出關鍵，屏光驟亮，<靈光乍現提示音>。
Shot 3：跟拍，主角@Image 2 起身大步穿過走廊推開會議室門，鏡頭緊隨其後背影，（鼓點漸強）。
Shot 4：仰拍，主角@Image 2 立於落地窗前面向眾人自信陳述，城市天際線為背景，逆光鍍金，{這就是我們的答案}。
Shot 5：緩慢環繞，全場起立鼓掌，主角@Image 2 鬆一口氣露出笑意，金光定格，（音樂高潮收束）<掌聲雷動>。
約束：主角面部以圖片2為準全程一致；情緒弧線由蹙眉到舒展外化，冷藍轉金光對應低谷到高光；辦公場景連貫一致。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 6: 校園青春

- **分類:** `短劇與情感敘事`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片4中的女生、圖片5中的男生（各自面部妝造以對應圖為準），豎屏9:16，青春清新寫實、明媚暖陽高透光，生成30秒校園青春短片。

#### 提示詞

```text
參考圖片4中的女生、圖片5中的男生（各自面部妝造以對應圖為準），豎屏9:16，青春清新寫實、明媚暖陽高透光，生成30秒校園青春短片。
Shot 1：全景，午後操場暖陽斜照，女生@Image 4 抱書快步走過跑道，風揚起裙擺，緩慢推近，（清新吉他起）<蟬鳴輕響>。
Shot 2：中近景，男生@Image 5 騎車經過急剎回頭，兩人目光相撞各自一怔，固定機位，<自行車剎車聲>。
Shot 3：特寫，女生@Image 4 臉頰泛紅低頭抿嘴笑，散落的書被男生@Image 5 彎腰拾起，暖陽鏡頭切至。
Shot 4：中景，兩人並肩走過林蔭道說笑，光斑在臉上跳動，跟拍隨行，（吉他漸歡快）。
Shot 5：緩慢升降，機位抬升俯瞰兩人漸遠背影與灑滿金光的校園，暖陽定格，（音樂收束）。
約束：男女生面部以對應圖片為準全程一致，男女體貌區分明顯禁止雙胞胎混淆；校園暖陽高透光場景全程一致；青澀情緒用泛紅臉頰與抿嘴笑外化。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 7: 懸疑走廊

- **分類:** `短劇與情感敘事`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

主角綁定@圖片2（面部妝造以對應圖為準），豎屏9:16，驚悚懸疑寫實、幽暗冷綠高對比陰影，生成30秒懸疑短片。

#### 提示詞

```text
主角綁定@圖片2（面部妝造以對應圖為準），豎屏9:16，驚悚懸疑寫實、幽暗冷綠高對比陰影，生成30秒懸疑短片。
Shot 1：特寫，一盞走廊燈忽明忽暗閃爍，主角@圖片2 手電光束刺入黑暗，幽暗冷綠，固定機位，<燈管滋滋電流聲>（低頻嗡鳴起）。
Shot 2：跟拍，鏡頭貼緊主角@圖片2 後背隨其緩步深入長廊，腳步遲疑，陰影拉長，<腳步回響>。
Shot 3：緩慢推近，主角@圖片2 驟然停步屏息回頭，瞳孔收縮冷汗滲出，冷綠映臉，<身後異響咔噠>。
Shot 4：鏡頭切至，走廊盡頭一扇門縫滲出微光緩緩開啟，主角@圖片2 舉燈戒備後退，（弦樂尖銳拔高）。
Shot 5：緩慢拉遠，主角@圖片2 孤身立於幽長走廊中央，四周陰影逼近，冷綠定格，<猛然靜音>（音樂戛然而止）。
約束：主角面部以圖片2為準全程一致；緊張情緒用屏息回頭與冷汗瞳孔收縮外化；幽暗冷綠高對比光影與走廊場景全程一致；結尾用靜音製造驚悚留白。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 8: 破鏡重圓（用編輯任務做反差衍生）

- **分類:** `短劇與情感敘事`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的女主、圖片3中的男主（各自面部妝造以對應圖為準），豎屏9:16，電影感寫實、由冷灰陰雨轉暖金晴光，生成30秒破鏡重圓情感短片。

#### 提示詞

```text
參考圖片1中的女主、圖片3中的男主（各自面部妝造以對應圖為準），豎屏9:16，電影感寫實、由冷灰陰雨轉暖金晴光，生成30秒破鏡重圓情感短片。
Shot 1：中近景，女主@圖片1 與男主@圖片3 背對背站在冷灰雨中各自低頭，兩人間距離拉開，固定機位，（壓抑鋼琴起）<雨聲冷清>。
Shot 2：特寫，一張舊合照攤在積水中被雨打濕，鏡面倒影裡兩人漸行漸遠，緩慢推近。
Shot 3：鏡頭切至，天色轉晴暖金光灑落，男主@圖片3 轉身伸手，女主@圖片1 緩緩回望眼含熱淚，平穩橫移，（鋼琴轉暖漸強）。
Shot 4：中景，兩人相擁而立，女主@圖片1 埋首男主@圖片3 肩頭，男主輕撫其發，暖金逆光勾邊，緩慢環繞，{對不起，我回來了}。
Shot 5：緩慢拉遠，兩人相依身影在暖金晴光下融為一體，定格，（音樂圓滿收束）。
約束：編輯任務思路——先生成Shot 1至Shot 2"冷灰陰雨疏離版"母版，再用"保持人物@圖片1/@圖片3面部、機位構圖不變，僅將天氣改為暖金晴光、姿態由背對改為相擁"的編輯指令衍生Shot 3至Shot 5反差版，實現同場景冷暖反轉；男女主面部全程一致，禁止分身雙胞胎；和解情緒用回望熱淚與相擁埋首外化。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-17"></a>

### 品牌電視廣告 (6)

### No. 1: 香氛品牌一鏡到底

- **分類:** `品牌電視廣告`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的香水瓶為主體，寬幅2.35:1，高級電影感、暮光金調，生成30秒品牌氛圍片，一鏡到底。

#### 提示詞

```text
參考圖片1中的香水瓶為主體，寬幅2.35:1，高級電影感、暮光金調，生成30秒品牌氛圍片，一鏡到底。
Shot 1：極致微距從瓶身@圖片1 表面凝結的一顆水珠開始，鏡頭緩慢拉遠，水珠滑落折射暖光，（低回環境弦樂漸起）。
Shot 2：鏡頭繼續上升平移，香水瓶@圖片1 緩緩立於濕潤大理石檯，側逆光勾出瓶身輪廓，<水珠輕落聲>。
Shot 3：鏡頭平穩環繞瓶身半周，透過切面玻璃展示金色液體對暮光的折射，光斑在檯面遊走。
Shot 4：鏡頭順勢升高俯拍整個佈景，綢緞與花瓣散落檯面，暮光金鋪滿畫面，【氣息如光 停駐此刻】。
Shot 5：鏡頭緩慢拉遠回到微距水珠，畫面虛化定格於品牌暮光金，（弦樂一聲長音收束）。
約束：全程一鏡到底不切；瓶身以圖片1為準；暮光金調與濕潤質感貫穿始終。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 運動品牌燃向

- **分類:** `品牌電視廣告`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片2中的運動員為主體，豎屏9:16，高對比硬朗冷調、顆粒感街頭風，生成30秒運動品牌燃向廣告。

#### 提示詞

```text
參考圖片2中的運動員為主體，豎屏9:16，高對比硬朗冷調、顆粒感街頭風，生成30秒運動品牌燃向廣告。
Shot 1：極近特寫運動員@圖片2 的雙眼在陰影中驟然睜開，仰拍，<急促呼吸聲>，（低頻鼓點砸入）。
Shot 2：鏡頭快速跟拍運動員@圖片2 起跑衝出暗巷，腳下水花飛濺，冷藍路燈拖出光軌，<鞋底摩擦聲>。
Shot 3：鏡頭低角度仰拍其騰空躍過障礙，逆光剪影撐滿畫面，（鼓點密集加速）。
Shot 4：鏡頭平穩橫移追隨衝刺側影，汗珠在硬光下迸射，肌肉線條緊繃，<心跳轟鳴>。
Shot 5：鏡頭緩慢推近其終點前的怒吼面孔，冷調高對比定格，【超越 沒有終點】，（鼓點戛然而止）。
約束：全程冷藍硬光高對比；運動員以圖片2為準；節奏由慢憋到爆發遞進。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 公益溫情

- **分類:** `品牌電視廣告`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，柔和自然光、紀實暖調、淺景深，生成30秒公益溫情短片，情緒由孤獨到被接納。

#### 提示詞

```text
豎屏9:16，柔和自然光、紀實暖調、淺景深，生成30秒公益溫情短片，情緒由孤獨到被接納。
Shot 1：固定機位特寫一雙小手緊攥褪色布娃娃，晨光斜照塵埃浮動，（鋼琴單音輕起）。
Shot 2：鏡頭緩慢拉遠，孤身女孩獨坐鄉村教室角落，窗外逆光柔和，<遠處孩童嬉鬧聲>。
Shot 3：鏡頭平穩橫移，一隻大手遞來一支鉛筆，女孩遲疑抬頭，暖光漫上她的臉頰。
Shot 4：鏡頭跟拍女孩被牽起手走向教室中央，同學圍攏，淺景深虛化背景，（弦樂溫暖鋪開）。
Shot 5：鏡頭緩慢升高俯拍全班圍坐共讀，暖陽灑滿地面，【每個孩子 都值得被看見】，（鋼琴弦樂收束）。
約束：全程柔和自然光暖調；情緒弧線由孤獨抵達接納；淺景深突出人物。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 金融科技感

- **分類:** `品牌電視廣告`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片3中的信用卡為主體，橫屏16:9，冷靜深藍科技調、極簡高級質感，生成30秒金融科技品牌片。

#### 提示詞

```text
參考圖片3中的信用卡為主體，橫屏16:9，冷靜深藍科技調、極簡高級質感，生成30秒金融科技品牌片。
Shot 1：極致微距貼近信用卡@圖片3 金屬晶片紋理，藍色數據光流在其表面掠過，（低頻合成器脈衝起）。
Shot 2：鏡頭緩慢拉遠，信用卡@圖片3 懸浮於純黑空間，四周浮現半透明數據環，<電子掃描音>。
Shot 3：鏡頭平穩環繞卡片一周，藍光網格隨視角流動，光影在金屬邊緣遊走。
Shot 4：鏡頭俯拍卡片下方生長出城市數據天際線，冷藍光點連成網絡，（脈衝節奏推進）。
Shot 5：鏡頭緩慢推近卡片定格於品牌標識，深藍漸暗，【安全 見於每一次信任】，（合成器長音收束）。
約束：全程冷靜深藍科技調；卡片以圖片3為準；數據光流質感貫穿。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 飲料清爽

- **分類:** `品牌電視廣告`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片4中的飲料罐為主體，豎屏9:16，高飽和明亮夏日調、通透水感，生成30秒飲料清爽廣告。

#### 提示詞

```text
參考圖片4中的飲料罐為主體，豎屏9:16，高飽和明亮夏日調、通透水感，生成30秒飲料清爽廣告。
Shot 1：超高速微距特寫，一滴水珠砸在冰鎮飲料罐@Image 4 表面炸開，仰拍，<清脆爆裂水聲>，（明快電子節拍起）。
Shot 2：鏡頭緩慢環繞佈滿冷凝水珠的罐身@Image 4，逆光下水珠晶瑩滾落，陽光穿透折射彩光。
Shot 3：鏡頭快速拉遠，飲料傾倒入滿冰玻璃杯，氣泡翻湧上升，<氣泡嘶嘶聲>。
Shot 4：鏡頭低角度仰拍手舉起飲料迎向烈日，檸檬薄荷在空中散落，（節拍上揚）。
Shot 5：鏡頭緩慢推近杯口氣泡定格，高飽和夏日藍黃鋪滿，【一口 喚醒整個夏天】，（節拍清脆收束）。
約束：全程高飽和明亮夏日調；飲料罐以圖片4為準；水珠氣泡通透質感突出。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 6: 母嬰品牌

- **分類:** `品牌電視廣告`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，極致柔光奶油色調、朦朧夢幻淺景深，生成30秒母嬰品牌溫柔品牌片。

#### 提示詞

```text
豎屏9:16，極致柔光奶油色調、朦朧夢幻淺景深，生成30秒母嬰品牌溫柔品牌片。
Shot 1：固定機位微距特寫嬰兒蜷曲的小腳趾，晨間柔光如紗籠罩，（音樂盒清音輕起）。
Shot 2：鏡頭緩慢拉遠，母親懷抱熟睡嬰兒輕輕搖晃，窗紗透進朦朧漫射光，<嬰兒細微呼吸聲>。
Shot 3：鏡頭平穩橫移，母親低頭親吻嬰兒額頭，奶油色暖光漫過兩人輪廓。
Shot 4：鏡頭緩慢升高俯拍母子相依於搖籃旁，柔軟棉織物鋪滿畫面，（弦樂溫柔加入）。
Shot 5：鏡頭緩慢推近嬰兒綻開的微笑，柔光過曝暈染，【溫柔 是最初的守護】，（音樂盒弦樂收束）。
約束：全程奶油色極致柔光；朦朧淺景深夢幻質感；情緒自始至終寧靜溫柔。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-18"></a>

### 旅行與文化旅遊 (6)

### No. 1: 古鎮航拍一鏡

- **分類:** `旅行與文化旅遊`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

橫屏16:9，水墨青灰調、晨霧詩意電影感，生成30秒古鎮文旅航拍片，一鏡到底。

#### 提示詞

```text
橫屏16:9，水墨青灰調、晨霧詩意電影感，生成30秒古鎮文旅航拍片，一鏡到底。
Shot 1：航拍極低空掠過青石板水巷，晨霧中一葉烏篷船破水而來，（古箏一撥清音起）。
Shot 2：鏡頭順勢緩慢升高，粉牆黛瓦馬頭牆層疊展開，炊煙自巷陌升騰，<櫓槳划水聲>。
Shot 3：鏡頭平穩橫移跨越拱橋，橋下浣衣人影綽約，倒影在水面蕩漾。
Shot 4：鏡頭持續升空環繞古鎮全景，河道如脈絡蜿蜒，晨霧漫過青灰屋脊，（笛聲悠遠加入）。
Shot 5：鏡頭緩慢拉高俯瞰群山環抱下的古鎮定格，水墨青灰暈開天際，【千年一夢 枕水而居】，（古箏笛聲收束）。
約束：全程一鏡到底航拍不切；水墨青灰晨霧調貫穿；東方詩意留白構圖。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 海島度假

- **分類:** `旅行與文化旅遊`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

橫屏16:9，通透高飽和熱帶調、明媚陽光質感，生成30秒海島度假旅行片。

#### 提示詞

```text
橫屏16:9，通透高飽和熱帶調、明媚陽光質感，生成30秒海島度假旅行片。
Shot 1：水下微距特寫陽光穿透碧藍海水投下的光柱，魚群倏忽游過，（悠揚烏克麗麗起）。
Shot 2：鏡頭緩慢升出水面，露出白沙灘椰林與澄澈礁湖，無人機平穩拉遠，<海浪拍岸聲>。
Shot 3：鏡頭低空跟拍一人躍入透明淺海，水花四濺漾開漣漪，陽光灑滿水面。
Shot 4：鏡頭緩慢升高環繞俯瞰新月形海灣，帆船劃過碧綠海水，（節奏輕快明媚）。
Shot 5：鏡頭推近沙灘上迎著夕陽舉杯的剪影，暖金光暈鋪滿，【把煩惱 留在岸的另一邊】，（烏克麗麗收束）。
約束：全程通透高飽和熱帶調；海水碧藍澄澈質感突出；情緒輕鬆明媚。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 雪山聖潔

- **分類:** `旅行與文化旅遊`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

橫屏16:9，冷冽高對比雪白藍調、極致清透宏大感，生成30秒雪山文旅史詩片。

#### 提示詞

```text
橫屏16:9，冷冽高對比雪白藍調、極致清透宏大感，生成30秒雪山文旅史詩片。
Shot 1：極近微距特寫風雪中一片冰晶的鋒利稜面，冷藍逆光閃爍，<呼嘯寒風聲>，（低沉合唱人聲起）。
Shot 2：鏡頭緩慢拉遠，孤峰雪山刺破雲海矗立天際，晨曦為峰頂染上金邊，畫面遼闊。
Shot 3：鏡頭航拍平穩橫移掠過綿延雪脊，風捲起雪霧如絲帶飛舞，冷藍陰影明暗分明。
Shot 4：鏡頭緩慢升空俯拍冰川裂谷蜿蜒而下，藍冰幽深透亮，（合唱層層疊湧宏大）。
Shot 5：鏡頭仰拍定格於日照金山之巔，冷白與暖金交界處聖光傾瀉，【向上 只為觸碰純淨】，（人聲長音收束）。
約束：全程冷冽雪白藍調高對比；宏大遼闊構圖；冰晶質感與日照金山點睛。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 城市夜景

- **分類:** `旅行與文化旅遊`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

橫屏16:9，賽博霓虹高飽和調、濕潤反光都市感，生成30秒城市夜景旅行片。

#### 提示詞

```text
橫屏16:9，賽博霓虹高飽和調、濕潤反光都市感，生成30秒城市夜景旅行片。
Shot 1：極致微距特寫雨滴順玻璃滑落，背後霓虹光斑暈成迷離光團，（電子合成器脈衝起）。
Shot 2：鏡頭緩慢拉遠穿過窗戶，無人機俯瞰雨後車流光軌織成的繁華街道，<車流嘶鳴聲>。
Shot 3：鏡頭航拍平穩升高環繞摩天樓群，玻璃幕牆倒映霓虹，光影層疊閃爍。
Shot 4：鏡頭低空跟拍霓虹街巷中撐傘的行人，濕潤地面反射五彩燈火，（節拍律動推進）。
Shot 5：鏡頭緩慢拉高俯瞰整座不夜城燈海定格，霓虹脈動如呼吸，【燈火之下 皆是故事】，（合成器收束）。
約束：全程賽博霓虹高飽和；濕潤反光質感貫穿；光軌與霓虹層次豐富。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 沙漠駝隊

- **分類:** `旅行與文化旅遊`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

橫屏16:9，暖金橙沙漠調、大光比逆光史詩感，生成30秒沙漠文旅片。

#### 提示詞

```text
橫屏16:9，暖金橙沙漠調、大光比逆光史詩感，生成30秒沙漠文旅片。
Shot 1：極近微距特寫細沙自指縫簌簌流瀉，逆光下每一粒沙金光閃爍，（悠遠弦樂與手鼓起）。
Shot 2：鏡頭緩慢拉遠，一列駝隊踏著起伏沙丘剪影緩行，夕陽巨大低垂於地平線，<駝鈴叮噹聲>。
Shot 3：鏡頭航拍俯拍駝隊在沙脊上投下的修長斜影，沙丘曲線如綢緞起伏。
Shot 4：鏡頭低角度仰拍領駝人迎風前行的逆光剪影，風捲沙塵飛揚，（手鼓節奏漸強）。
Shot 5：鏡頭緩慢升空俯瞰駝隊沒入無垠金色沙海定格，暖金橙鋪滿天地，【穿越荒蕪 只為看見遼闊】，（弦樂手鼓收束）。
約束：全程暖金橙大光比逆光；沙丘曲線與駝隊剪影為構圖核心；史詩遼遠情緒。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 6: 街頭美食巡遊（一鏡）

- **分類:** `旅行與文化旅遊`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

豎屏9:16，暖橙煙火高飽和調、市井鮮活質感，生成30秒街頭美食巡遊片，一鏡到底。

#### 提示詞

```text
豎屏9:16，暖橙煙火高飽和調、市井鮮活質感，生成30秒街頭美食巡遊片，一鏡到底。
Shot 1：極致微距從鐵板上滋滋作響濺油的食材開始，鏡頭緩慢拉遠，熱氣蒸騰，<油花爆響聲>，（歡快市井打擊樂起）。
Shot 2：鏡頭順勢平穩橫移穿過熙攘夜市，暖黃燈串下攤主翻炒火焰騰起，<人聲鼎沸叫賣聲>。
Shot 3：鏡頭繼續跟拍鑽入小巷，掠過蒸籠掀蓋白霧湧出、烤串炭火通紅，煙火氣瀰漫。
Shot 4：鏡頭緩慢環繞一桌食客大快朵頤，碰杯歡笑，暖橙燈光映滿笑臉，（打擊樂節奏歡騰）。
Shot 5：鏡頭順勢升高俯拍整條美食長街燈火通明定格，人潮湧動，【人間煙火 最撫凡心】，（打擊樂收束）。
約束：全程一鏡到底連續運鏡不切；暖橙煙火高飽和調；熱氣火焰煙火氣貫穿。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-19"></a>

### 寵物與動物 (5)

### No. 1: 萌貓特寫

- **分類:** `寵物與動物`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以貓咪@Image 1為主體，豎屏9:16，柔焦生活流、暖陽米白色調+淺景深，生成30秒治癒系萌寵短片。

#### 提示詞

```text
以貓咪@Image 1為主體，豎屏9:16，柔焦生活流、暖陽米白色調+淺景深，生成30秒治癒系萌寵短片。
Shot 1：特寫，貓咪@Image 1 突然睜大瞳孔直視鏡頭，固定機位，（清脆鋼片琴單音）<貓咪軟軟"喵">。
Shot 2：微距，貓咪@Image 1 粉色鼻頭輕輕抽動、鬍鬚顫動，鏡頭緩慢推近，<細微鼻息聲>。
Shot 3：中景，貓咪@Image 1 抬爪按住飄落的羽毛，鏡頭平穩橫移，（鋼片琴節奏輕快）。
Shot 4：特寫，貓咪@Image 1 打了個哈欠露出小舌頭，鏡頭緩慢拉遠，<滿足呼嚕聲>。
Shot 5：全景，貓咪@Image 1 蜷成一團閉眼睡去，鏡頭緩慢升起俯拍定格，（音樂漸弱）【今天也要好好休息】。
約束：貓咪毛色花紋以Image 1為準全程一致，瞳孔與鼻頭保持粉色，禁止換種換色。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 狗狗奔跑

- **分類:** `寵物與動物`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以狗狗@Image 1為主體，橫屏16:9，運動追焦、金色逆光草原+高速快門顆粒感，生成30秒熱血奔跑片。

#### 提示詞

```text
以狗狗@Image 1為主體，橫屏16:9，運動追焦、金色逆光草原+高速快門顆粒感，生成30秒熱血奔跑片。
Shot 1：低機位特寫，狗狗@Image 1 後腿蹬地爆發起跑揚起草屑，固定機位，（鼓點驟起）<爪子踏地悶響>。
Shot 2：全景，狗狗@Image 1 舒展四肢橫穿草原，鏡頭平穩橫移追焦，<風聲灌耳>。
Shot 3：跟拍中景，狗狗@Image 1 耳朵後掠、舌頭甩出，鏡頭低機位跟拍，（節奏加速）。
Shot 4：特寫，狗狗@Image 1 騰空躍過小溪水花四濺，鏡頭緩慢推近升格慢動作，<水花濺落聲>。
Shot 5：全景，狗狗@Image 1 衝向鏡頭前急停坐下咧嘴喘氣，鏡頭緩慢拉遠定格，（音樂收束）<歡快喘息>。
約束：狗狗品種毛色以Image 1為準全程一致，奔跑步態符合真實四足力學，禁止漂浮滑步。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 水下魚群

- **分類:** `寵物與動物`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以珊瑚礁熱帶魚群@Image 1為主體，橫屏16:9，紀錄片級水下攝影、丁達爾光柱+青藍通透水色，生成30秒海底探索片。

#### 提示詞

```text
以珊瑚礁熱帶魚群@Image 1為主體，橫屏16:9，紀錄片級水下攝影、丁達爾光柱+青藍通透水色，生成30秒海底探索片。
Shot 1：特寫，一條小丑魚@Image 1 從海葵觸手間探頭，固定機位，（空靈水滴音樂起）<氣泡咕嚕>。
Shot 2：全景，成群熱帶魚@Image 1 匯聚成銀色漩渦，鏡頭緩慢環繞，<水流湧動聲>。
Shot 3：中景，魚群@Image 1 集體轉向穿過光柱，鏡頭平穩橫移穿行，（弦樂鋪展）。
Shot 4：仰拍全景，魚群@Image 1 游向海面剪影，鏡頭緩慢升起仰拍，<深海低頻嗡鳴>。
Shot 5：特寫，小丑魚@Image 1 獨自游回海葵停駐，鏡頭緩慢拉遠定格，（音樂漸隱）。
約束：小丑魚橙白條紋與礁石配色以Image 1為準，魚群游動保持自然錯位不重疊穿模，禁止整齊克隆隊列。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 鳥類微距

- **分類:** `寵物與動物`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以蜂鳥@Image 1為主體，豎屏9:16，超微距高速攝影、晨露花叢+虛化奶油背景，生成30秒生態微觀片。

#### 提示詞

```text
以蜂鳥@Image 1為主體，豎屏9:16，超微距高速攝影、晨露花叢+虛化奶油背景，生成30秒生態微觀片。
Shot 1：微距特寫，蜂鳥@Image 1 懸停振翅化為透明弧影，固定機位，（豎琴泛音起）<高頻振翅嗡響>。
Shot 2：特寫，蜂鳥@Image 1 細長喙探入花蕊吸蜜，鏡頭緩慢推近，<花瓣輕顫>。
Shot 3：微距，蜂鳥@Image 1 喉部虹彩羽毛隨角度變色，鏡頭緩慢環繞，（豎琴滑音）。
Shot 4：中景，蜂鳥@Image 1 抖落身上晨露珠，鏡頭平穩橫移升格慢動作，<水珠墜落>。
Shot 5：全景，蜂鳥@Image 1 驟然彈射飛離畫面，鏡頭緩慢拉遠定格空枝，（音樂收束）。
約束：蜂鳥虹彩羽色與喙形以Image 1為準，振翅呈現真實高速虛化殘影，禁止翅膀定格僵硬。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 擬人寵物

- **分類:** `寵物與動物`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以廚師帽柴犬@圖片1為主體，豎屏9:16，皮克斯式3D卡通、暖廚房燈+飽和高光，生成30秒搞笑擬人短片。鎖定3D卡通渲染，禁止漂移寫實。

#### 提示詞

```text
以廚師帽柴犬@圖片1為主體，豎屏9:16，皮克斯式3D卡通、暖廚房燈+飽和高光，生成30秒搞笑擬人短片。鎖定3D卡通渲染，禁止漂移寫實。
鏡頭1：特寫，柴犬@圖片1 戴歪廚師帽嚴肅盯著平底鍋，固定機位，（滑稽巴松管起）{"今天，顛勺！"}。
鏡頭2：中景，柴犬@圖片1 雙爪握鍋奮力一顛食材飛上天，鏡頭緩慢推近，<油花滋啦>。
鏡頭3：全景，柴犬@圖片1 仰頭張嘴接住卻全砸臉上，鏡頭固定機位，（音效"叮"）<啪嘰糊臉>。
鏡頭4：特寫，柴犬@圖片1 滿臉麵糊呆滯眨眼，鏡頭緩慢推近，{"...還行。"}。
鏡頭5：中景，柴犬@圖片1 淡定端出焦黑料理獻寶，鏡頭緩慢拉遠定格，（歡快結尾）【翻車廚神·柴】。
約束：柴犬毛色與廚師帽以圖片1為準全程一致，鎖定3D卡通畫風，五官擬人表情誇張但比例統一，禁止中途寫實化。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-20"></a>

### 兒童教育與科普知識 (5)

### No. 1: 火星探測科普

- **分類:** `兒童教育與科普知識`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以火星探測車@圖片1為主體，橫屏16:9，紀實科普CG、鏽紅星表+冷調星空，生成30秒航天科普片。

#### 提示詞

```text
以火星探測車@圖片1為主體，橫屏16:9，紀實科普CG、鏽紅星表+冷調星空，生成30秒航天科普片。
鏡頭1：全景，探測車@圖片1 靜立於紅色荒原地平線，鏡頭緩慢升起，（宏大合成器起）<火星風低嘯>。
鏡頭2：特寫，探測車@圖片1 六輪碾過碎石緩行，鏡頭低機位跟拍，<機械咯吱>。
鏡頭3：中景，探測車@圖片1 機械臂伸出採集岩樣，鏡頭緩慢推近，（弦樂漸強）【鑽取樣本·分析成分】。
鏡頭4：仰拍，探測車@圖片1 抬起相機桅杆望向天空，鏡頭緩慢環繞，<數據滴滴聲>。
鏡頭5：全景，探測車@圖片1 駛向遠方隕石坑，鏡頭緩慢拉遠俯拍定格，（音樂昇華）【下一站：未知】。
約束：探測車結構與配色以圖片1為準全程一致，火星地表符合真實低重力揚塵，禁止出現地球植被藍天。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 人體器官示意

- **分類:** `兒童教育與科普知識`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以3D心臟模型@圖片1為主體，橫屏16:9，醫學可視化、半透明肌理+暗底血紅脈絡光，生成30秒人體科普片。鎖定半透明醫學3D風，禁止漂移寫實血腥。

#### 提示詞

```text
以3D心臟模型@圖片1為主體，橫屏16:9，醫學可視化、半透明肌理+暗底血紅脈絡光，生成30秒人體科普片。鎖定半透明醫學3D風，禁止漂移寫實血腥。
鏡頭1：全景，心臟@圖片1 懸浮於深色空間緩緩搏動，鏡頭緩慢環繞，（低頻脈衝音樂起）<心跳咚咚>。
鏡頭2：特寫，心臟@圖片1 表面冠狀動脈高亮浮現，鏡頭緩慢推近，【冠狀動脈·供血】。
鏡頭3：剖面中景，心臟@圖片1 半透明化露出四腔血流，鏡頭平穩橫移，<血流湧動>。
鏡頭4：特寫，心臟@圖片1 二尖瓣隨節拍開合，鏡頭固定機位，（節拍同步心跳）。
鏡頭5：全景，心臟@圖片1 恢復完整持續搏動，鏡頭緩慢拉遠定格，（音樂平穩）【每天約10萬次跳動】。
約束：心臟解剖結構與腔室位置以圖片1為準科學準確，保持半透明示意風格，禁止寫實血腥或結構錯位。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 兒童繪本動畫

- **分類:** `兒童教育與科普知識`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以小熊@圖片1為主體，豎屏9:16，2D手繪繪本風、水彩紙紋+暖色蠟筆描邊，生成30秒睡前故事動畫。鎖定2D手繪水彩風，禁止漂移寫實或3D。

#### 提示詞

```text
以小熊@圖片1為主體，豎屏9:16，2D手繪繪本風、水彩紙紋+暖色蠟筆描邊，生成30秒睡前故事動畫。鎖定2D手繪水彩風，禁止漂移寫實或3D。
鏡頭1：中景，小熊@圖片1 推開木屋門望向星空，鏡頭固定機位，（八音盒旋律起）{"今晚的星星真亮呀。"}。
鏡頭2：全景，小熊@圖片1 提著小燈籠走過花叢小徑，鏡頭平穩橫移，<草葉沙沙>。
鏡頭3：特寫，小熊@圖片1 仰頭看一顆流星劃過，鏡頭緩慢推近，（叮咚一聲）【許個願吧】。
鏡頭4：中景，小熊@圖片1 閉眼雙手合十許願，鏡頭緩慢環繞，<夜風輕柔>。
鏡頭5：全景，小熊@圖片1 躺進草地蓋上葉子被入睡，鏡頭緩慢升起俯拍定格，（八音盒漸弱）{"晚安，小星星。"}。
約束：小熊造型與配色以圖片1為準全程一致，鎖定2D手繪水彩筆觸，保留紙紋描邊，禁止轉3D或寫實化。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 物理實驗演示

- **分類:** `兒童教育與科普知識`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以牛頓擺金屬球@圖片1為主體，橫屏16:9，理科演示寫實、純淨實驗室白+側逆硬光，生成30秒物理科普片。

#### 提示詞

```text
以牛頓擺金屬球@圖片1為主體，橫屏16:9，理科演示寫實、純淨實驗室白+側逆硬光，生成30秒物理科普片。
鏡頭1：特寫，牛頓擺@圖片1 一端小球被抬起懸停，固定機位，（懸念滴答音樂起）<手指鬆開輕響>。
鏡頭2：中景，小球@圖片1 擺下撞擊瞬間能量傳遞，鏡頭緩慢推近升格慢動作，<清脆金屬撞擊>。
鏡頭3：特寫，另一端小球@圖片1 被彈起騰空，鏡頭平穩跟拍上升，（音效"叮"）【動量守恆】。
鏡頭4：全景，牛頓擺@圖片1 兩端交替往復擺動，鏡頭緩慢環繞，<規律節拍碰撞>。
鏡頭5：中景，小球@圖片1 擺幅漸小趨於靜止，鏡頭緩慢拉遠定格，（音樂收束）【能量在碰撞中傳遞】。
約束：金屬球數量與支架結構以圖片1為準，擺動遵循真實動量守恆物理規律，禁止違反力學的漂浮或增幅。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 歷史場景重現

- **分類:** `兒童教育與科普知識`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以古羅馬鬥獸場@圖片1為主體，橫屏16:9，史詩歷史重現、金色黃昏塵光+做舊膠片顆粒，生成30秒歷史紀錄片。

#### 提示詞

```text
以古羅馬鬥獸場@圖片1為主體，橫屏16:9，史詩歷史重現、金色黃昏塵光+做舊膠片顆粒，生成30秒歷史紀錄片。
鏡頭1：全景，鬥獸場@圖片1 沐浴黃昏殘陽巍然矗立，鏡頭緩慢升起航拍，（史詩人聲吟唱起）<遠古風聲>。
鏡頭2：中景，鬥獸場@圖片1 看台從殘破漸漸"生長"復原為滿座，鏡頭緩慢推近，<人群喧沸湧起>。
鏡頭3：特寫，鬥獸場@圖片1 石砌拱門雕紋細節，鏡頭平穩橫移，（鼓點漸強）【公元80年·落成】。
鏡頭4：仰拍全景，鬥獸場@圖片1 中央競技場沙地揚起塵土，鏡頭緩慢環繞，<號角長鳴>。
鏡頭5：全景，鬥獸場@圖片1 復原畫面"消散"回歸今日廢墟，鏡頭緩慢拉遠俯拍定格，（音樂蒼涼收束）【千年之後，依然屹立】。
約束：鬥獸場建築結構與殘損位置以圖片1為準，復原與廢墟形態一致對應，禁止臆造不符史實的現代元素。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-21"></a>

### 遊戲、CG與幻想 (5)

### No. 1: 巨龍俯衝

- **分類:** `遊戲、CG與幻想`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的黑龍與騎士為主體，寬幅2.35:1，電影級CG、暖邊緣光+深藍陰影，生成30秒奇幻飛行片。

#### 提示詞

```text
參考圖片1中的黑龍與騎士為主體，寬幅2.35:1，電影級CG、暖邊緣光+深藍陰影，生成30秒奇幻飛行片。
Shot 1：全景，黑龍@Image 1 從峽谷騰空翼展張開，鏡頭緩慢升起跟隨，（宏大管弦樂起）。
Shot 2：中景，騎士@Image 1 壓低身體、黑龍@Image 1 向右急轉俯衝，鏡頭平穩跟拍（略低機位），<風聲呼嘯>。
Shot 3：特寫，黑龍@Image 1 收攏一側翅膀穿過瀑布水霧，鏡頭緩慢推近。
Shot 4：全景，黑龍@Image 1 衝出霧氣滑入森林空地，鏡頭緩慢拉遠定格，（音樂收束）。
約束：黑龍與騎士外形以圖片1為準全程一致，禁止分身雙胞胎。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 魔法釋放

- **分類:** `遊戲、CG與幻想`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以女法師@圖片1為主體，寬幅2.35:1，電影級魔幻CG、幽藍符文光+粒子輝光，生成30秒法術詠唱片。

#### 提示詞

```text
以女法師@Image 1為主體，寬幅2.35:1，電影級魔幻CG、幽藍符文光+粒子輝光，生成30秒法術詠唱片。
Shot 1：特寫，女法師@Image 1 睜眼瞳中亮起符文，固定機位，（低沉聖詠驟起）{"以太之名——"}。
Shot 2：中景，女法師@Image 1 抬手掌心匯聚旋轉法陣，鏡頭緩慢環繞，<能量嗡鳴攀升>。
Shot 3：特寫，女法師@Image 1 指尖粒子凝聚成光球，鏡頭緩慢推近，（音樂屏息一頓）。
Shot 4：全景，女法師@Image 1 雙手推出巨型冰霜爆發轟向前方，鏡頭平穩跟拍衝擊波，<轟然炸裂>。
Shot 5：中景，女法師@Image 1 收勢喘息法陣餘光消散，鏡頭緩慢拉遠定格，（聖詠餘韻收束）。
約束：女法師服飾與符文配色以圖片1為準全程一致，法陣與粒子始終保持幽藍色系，禁止中途變色或人物走形。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 機甲登場

- **分類:** `遊戲、CG與幻想`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以巨型機甲@圖片1為主體，寬幅2.35:1，硬核工業CG、冷鋼金屬+機庫射燈與蒸汽，生成30秒機甲出擊片。

#### 提示詞

```text
以巨型機甲@Image 1為主體，寬幅2.35:1，硬核工業CG、冷鋼金屬+機庫射燈與蒸汽，生成30秒機甲出擊片。
Shot 1：特寫，機甲@Image 1 主攝影機眼部驟然亮起紅光，固定機位，（工業低音轟鳴起）<系統啟動嗡聲>。
Shot 2：仰拍全景，機甲@Image 1 在機庫中緩緩抬頭站起，鏡頭緩慢升起仰拍，<液壓嘶鳴>。
Shot 3：中景，機甲@Image 1 邁步踏地震動、蒸汽噴湧，鏡頭低機位跟拍，（鼓點砸下）<沉重金屬踏步>。
Shot 4：特寫，機甲@Image 1 肩部飛彈艙展開鎖定，鏡頭緩慢推近，（音效"鎖定"嗶）【武裝就緒】。
Shot 5：全景，機甲@Image 1 衝出機庫躍入戰場，鏡頭平穩跟拍再拉遠定格，（音樂爆發收束）<推進器轟鳴>。
約束：機甲機體結構與塗裝以圖片1為準全程一致，機械關節運動符合重量感與液壓邏輯，禁止部件穿模或輕飄。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 開放世界遠景

- **分類:** `遊戲、CG與幻想`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以幻想大陸全景@圖片1為主體，寬幅2.35:1，開放世界遊戲CG、體積雲晨霧+超遠視距景深，生成30秒世界觀展示片。

#### 提示詞

```text
以幻想大陸全景@Image 1為主體，寬幅2.35:1，開放世界遊戲CG、體積雲晨霧+超遠視距景深，生成30秒世界觀展示片。
Shot 1：全景，大陸@Image 1 晨霧漫過山谷與遠方懸浮島，鏡頭緩慢升起航拍，（遼闊弦樂起）<晨風與鳥鳴>。
Shot 2：中景，大陸@Image 1 瀑布自巨崖傾瀉入雲海，鏡頭平穩橫移，<水聲轟隆>。
Shot 3：全景，大陸@Image 1 一群巨獸掠過草原奔向遠方城郭，鏡頭緩慢跟拍，（弦樂層疊推進）。
Shot 4：特寫，大陸@Image 1 古老遺跡石碑刻滿符文，鏡頭緩慢推近，<神秘低鳴>。
Shot 5：全景，大陸@Image 1 鏡頭拉升揭示整片大陸全貌與雙日天空，鏡頭緩慢升起拉遠定格，（音樂磅礴收束）【世界，等你探索】。
約束：大陸地貌與懸浮島佈局以圖片1為準全程一致，超遠景深保持體積霧層次，禁止地形拼接錯位或比例失真。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 白模渲染演示

- **分類:** `遊戲、CG與幻想`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

以場景白模@圖片1為主體、材質取自參考圖片2，橫屏16:9，即時渲染Breakdown演示、灰白無光澤底模起步，生成30秒從白模到成片的渲染進化片。

#### 提示詞

```text
以場景白模@Image 1為主體、材質取自參考圖片2，橫屏16:9，即時渲染Breakdown演示、灰白無光澤底模起步，生成30秒從白模到成片的渲染進化片。
Shot 1：全景，白模@Image 1 灰白無材質場景緩緩旋轉展示體塊，鏡頭緩慢環繞，（科技感電子樂起）【Blockout·白模】。
Shot 2：中景，白模@Image 1 表面刷入材質@Image 2 逐面覆蓋石材木紋，鏡頭平穩橫移，<材質加載滴答>。
Shot 3：特寫，場景@Image 1 法線與粗糙度細節浮現凹凸質感，鏡頭緩慢推近，【PBR材質·上色】。
Shot 4：全景，場景@Image 1 燈光逐盞點亮投下陰影與反射，鏡頭緩慢升起，（音樂層次遞進）【Lighting·打光】。
Shot 5：全景，場景@Image 1 後期調色與體積光加入成為終幀，鏡頭緩慢拉遠定格，（音樂收束）【Final Render】。
約束：場景體塊與結構以圖片1為準全程一致，材質紋理取自圖片2逐步疊加，白模到成片僅改變著色不改變幾何佈局，禁止模型形變或穿幫。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-22"></a>

### 動畫與卡通 (4)

### No. 1: 吉卜力食物番

- **分類:** `動畫與卡通`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的一雙手與深夜廚房為主體（手與廚房以圖片1為準），豎屏9:16，吉卜力手繪風、暖黃夜廚調，生成30秒治癒深夜食堂片。

#### 提示詞

```text
參考圖片1中的一雙手與深夜廚房為主體（手與廚房以圖片1為準），豎屏9:16，吉卜力手繪風、暖黃夜廚調，生成30秒治癒深夜食堂片。
Shot 1：極近特寫，一滴水珠從番茄表皮滾落映出暖燈，固定微俯機位，<水珠墜落輕響>，（治癒木吉他起）。
Shot 2：中景，一隻手持刀切番茄紅汁滲出，鏡頭緩慢平移，<刀刃切過果肉的軟脆聲>。
Shot 3：特寫，番茄塊滑入熱油鍋騰起白煙，鏡頭緩慢推近，<食材下鍋爆響>。
Shot 4：極近特寫，手撒下羅勒葉片翻炒香氣升騰，鏡頭緩慢環繞，<鏟子翻炒的沙沙聲>。
Shot 5：中景，熱湯盛入陶碗手捧至畫面中央，鏡頭緩慢拉遠，<湯汁咕嘟聲>，（木吉他收束）。
約束：鎖定吉卜力手繪風禁止漂移寫實；全程僅一雙手不出現人臉與多餘的手；夜廚陳設以圖片1為準固定。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: Q版角色互動

- **分類:** `動畫與卡通`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的兩隻圓頭大眼Q版角色為主體（造型與配色以圖片1為準），豎屏9:16，糖果色卡通短片風、高飽和柔光調，生成30秒萌系互動片。

#### 提示詞

```text
參考圖片1中的兩隻圓頭大眼Q版角色為主體（造型與配色以圖片1為準），豎屏9:16，糖果色卡通短片風、高飽和柔光調，生成30秒萌系互動片。
Shot 1：極近特寫，一隻Q版角色瞪大眼睛臉頰鼓起憋笑，固定機位，<卡通"啵"彈跳音效>，（俏皮馬林巴起）。
Shot 2：中景，另一隻角色蹦跳著湊近遞上一顆愛心糖果，鏡頭緩慢橫移，<腳步彈跳"叮叮"聲>。
Shot 3：全景，兩隻角色手拉手原地轉圈甩出星星拖尾，鏡頭緩慢環繞，{（角色）"一起轉呀！"}。
Shot 4：特寫，一隻角色突然被絆倒眼裡蓄滿淚花，鏡頭緩慢推近，<誇張"哇"哭腔音效>。
Shot 5：中景，另一隻角色撲上去擁抱兩顆心跳出畫面，鏡頭緩慢拉遠，【友誼滿格】，（馬林巴上揚收束）。
約束：鎖定Q版糖果色卡通風禁止漂移寫實；兩角色造型與配色嚴格以圖片1為準；誇張表情與形變遵循卡通物理。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 3D皮克斯風

- **分類:** `動畫與卡通`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的小機器人角色為主體（造型與材質以圖片1為準），橫屏16:9，皮克斯3D動畫風、清晨暖陽質感調，生成30秒治癒探索短片。

#### 提示詞

```text
參考圖片1中的小機器人角色為主體（造型與材質以圖片1為準），橫屏16:9，皮克斯3D動畫風、清晨暖陽質感調，生成30秒治癒探索短片。
Shot 1：極近特寫，小機器人的圓眼鏡頭緩緩亮起對焦一朵蒲公英，固定機位，<機械對焦"嘀"聲>，（管弦樂輕柔起）。
Shot 2：中景，小機器人歪頭好奇地伸出機械臂輕觸花瓣，鏡頭緩慢推近，<伺服馬達細微轉動聲>。
Shot 3：全景，一陣風吹散蒲公英種子小機器人追著奔跑，鏡頭跟拍，<絨毛飄散的空氣聲>。
Shot 4：仰拍，種子漫天飛舞小機器人張開雙臂仰望，鏡頭緩慢升降，（弦樂漸強）。
Shot 5：遠景，小機器人獨自站在山丘頂朝陽升起拉長影子，鏡頭緩慢拉遠，（管弦樂高潮收束）。
約束：鎖定皮克斯3D風禁止漂移寫實與吉卜力手繪；機器人造型材質以圖片1為準；次表面散射暖光貫穿全片。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 水彩風景動畫

- **分類:** `動畫與卡通`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的江南水鄉小鎮為主體（構圖與色調以圖片1為準），橫屏16:9，流動水彩手繪動畫風、雨後青灰淡彩調，生成30秒詩意四季流轉片。

#### 提示詞

```text
參考圖片1中的江南水鄉小鎮為主體（構圖與色調以圖片1為準），橫屏16:9，流動水彩手繪動畫風、雨後青灰淡彩調，生成30秒詩意四季流轉片。
Shot 1：極近特寫，一滴雨落入水面暈開漣漪墨色擴散，固定微俯機位，<雨滴入水的清響>，（古箏泛音起）。
Shot 2：全景，青瓦白牆倒映水中水彩筆觸隨波輕蕩，鏡頭緩慢橫移，<細雨淅瀝聲>。
Shot 3：遠景，一葉烏篷船劃過拱橋蕩開水紋，鏡頭緩慢跟拍，<木槳撥水聲>。
Shot 4：中景，橋畔柳枝抽芽花瓣紛落色調轉為春粉，鏡頭緩慢推近，<微風拂葉聲>。
Shot 5：遠景，暮色四合燈籠次第亮起倒映滿河，鏡頭緩慢升降，（古箏悠遠收束）。
約束：鎖定流動水彩手繪風禁止漂移寫實與3D；水鄉構圖以圖片1為準；筆觸暈染感與紙紋肌理全程保留。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-23"></a>

### 運動與健身 (4)

### No. 1: 健身房力量

- **分類:** `運動與健身`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的硬拉運動員為主體（人物與器械以圖片1為準），豎屏9:16，硬核健身廣告風、冷調高對比鋼鐵質感，生成30秒力量爆發片。

#### 提示詞

```text
參考圖片1中的硬拉運動員為主體（人物與器械以圖片1為準），豎屏9:16，硬核健身廣告風、冷調高對比鋼鐵質感，生成30秒力量爆發片。
Shot 1：極近特寫，掌心鎂粉重重拍向槓鈴粉末四濺，固定機位，<鎂粉拍擊的悶響>，（低頻鼓點脈衝起）。
Shot 2：特寫，雙手死死纏握槓鈴青筋暴起，鏡頭緩慢推近，<鐵槓吱嘎受力聲>。
Shot 3：全景，運動員發力起槓槓鈴片微微顫動，鏡頭緩慢升降跟隨起身，<深沉發力低吼>。
Shot 4：仰拍，槓鈴舉至頂點肌肉線條被冷光勾勒，鏡頭緩慢環繞，（鼓點砸至最重）。
Shot 5：特寫，槓鈴砸回地面彈起震動汗珠飛濺，鏡頭緩慢拉遠，<鐵片落地巨響>，（鼓點戛然而止）。
約束：人物與器械以圖片1為準；冷調硬光高對比貫穿；槓鈴片顫動與汗珠須符合真實重量物理。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 瑜伽舒展

- **分類:** `運動與健身`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的瑜伽練習者與晨光教室為主體（人物與空間以圖片1為準），豎屏9:16，靜謐禪意生活方式風、晨霧柔光低飽和調，生成30秒身心舒展片。

#### 提示詞

```text
參考圖片1中的瑜伽練習者與晨光教室為主體（人物與空間以圖片1為準），豎屏9:16，靜謐禪意生活方式風、晨霧柔光低飽和調，生成30秒身心舒展片。
Shot 1：極近特寫，練習者閉眼深呼吸鼻息帶起細塵在光束中浮動，固定機位，<一次悠長呼吸聲>，（頌缽長音起）。
Shot 2：全景，身體緩緩折疊進入前屈晨光灑過背脊，鏡頭緩慢升降，<衣物摩擦的細響>。
Shot 3：中景，雙臂舒展流轉進入戰士式呼吸平穩，鏡頭緩慢環繞，（缽音與鳥鳴交織）。
Shot 4：特寫，指尖輕點腳踝肌肉線條舒展拉伸，鏡頭緩慢平移，<肌腱拉伸的輕微聲>。
Shot 5：全景，盤坐合十垂首晨霧漫過整個教室，鏡頭緩慢拉遠，（頌缽餘音收束）。
約束：人物與晨光教室以圖片1為準；柔光低飽和禪意基調貫穿；動作連貫平緩禁止任何急促切換。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 籃球扣籃

- **分類:** `運動與健身`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的街球運動員為主體（人物與球場以圖片1為準），橫屏16:9，熱血街頭運動廣告風、黃昏暖橙硬光調，生成30秒扣籃高燃片。

#### 提示詞

```text
參考圖片1中的街球運動員為主體（人物與球場以圖片1為準），橫屏16:9，熱血街頭運動廣告風、黃昏暖橙硬光調，生成30秒扣籃高燃片。
Shot 1：極近特寫，籃球在指尖飛速旋轉紋路清晰，固定機位，<皮球旋轉的摩擦聲>，（電子鼓點重拍起）。
Shot 2：全景，運動員運球突破急停變向鞋底摩擦地面，鏡頭跟拍，<球鞋急煞尖叫聲>。
Shot 3：中景，雙腳蹬地騰空身體拉滿向籃筐飛躍，鏡頭緩慢升降跟隨起跳，<起跳蹬地的爆響>。
Shot 4：仰拍，人在空中滯留手舉球即將砸下逆光剪影，鏡頭緩慢環繞，（鼓點抽空靜默一拍）。
Shot 5：特寫，籃球暴力灌入籃網籃筐劇烈震顫，鏡頭緩慢推近，<籃筐哐當巨響>，（鼓點炸裂收束）。
約束：人物與街頭球場以圖片1為準；黃昏暖橙硬光逆光貫穿；騰空滯空與籃網抖動須符合真實運動物理。
通用約束：保持無字幕；不要生成 Logo；不要生成水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 跑步剪影

- **分類:** `運動與健身`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的晨跑者與海岸公路為主體（人物剪影與環境以圖片1為準），橫屏16:9，勵志運動品牌片風、日出逆光金橙調，生成30秒晨跑堅持片。

#### 提示詞

```text
參考圖片1中的晨跑者與海岸公路為主體（人物剪影與環境以圖片1為準），橫屏16:9，勵志運動品牌片風、日出逆光金橙調，生成30秒晨跑堅持片。
Shot 1：極近特寫，跑鞋踏上濕瀝青濺起細小水花，固定微俯機位，<鞋底觸地的踏響>，（激勵弦樂鋪底起）。
Shot 2：中景，跑者逆光剪影勻速邁步汗水沿下頜滴落，鏡頭跟拍，<平穩有力的呼吸節奏>。
Shot 3：全景，海岸線延展朝陽躍出海面染紅天際，鏡頭緩慢升降，（弦樂加入鼓點推進）。
Shot 4：特寫，擺臂手錶數字跳動心率攀升，鏡頭緩慢平移，<手錶滴答提示音>。
Shot 5：遠景，跑者剪影衝上坡頂張開雙臂擁抱朝陽，鏡頭緩慢拉遠，（弦樂鼓點齊鳴高潮收束）。
約束：人物剪影與海岸公路以圖片1為準；日出逆光金橙調貫穿；跑姿步頻均勻連貫不出現頓挫。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-24"></a>

### 音樂、舞蹈與MV (4)

### No. 1: 舞蹈跟拍

- **分類:** `音樂、舞蹈與MV`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的現代舞者與工業風空間為主體（人物與場景以圖片1為準），豎屏9:16，都市MV跟拍風、冷藍霓虹光影調，生成30秒律動舞蹈片。

#### 提示詞

```text
參考圖片1中的現代舞者與工業風空間為主體（人物與場景以圖片1為準），豎屏9:16，都市MV跟拍風、冷藍霓虹光影調，生成30秒律動舞蹈片。
Shot 1：極近特寫，舞者指尖隨第一記節拍驟然彈開，固定機位，<清脆響指>，（律動電子節拍起）。
Shot 2：全景，身體大幅甩動舞步鋪開跟隨節拍擺動，鏡頭跟拍，<衣料破空甩動聲>。
Shot 3：中景，旋轉跳躍裙擺劃出弧線霓虹拖影，鏡頭緩慢環繞，（節拍加密疊入貝斯）。
Shot 4：特寫，腳尖急促踩點地面反光晃動，鏡頭緩慢平移，<鞋跟連續踏點聲>。
Shot 5：全景，定格pose霓虹頻閃照亮全身輪廓，鏡頭緩慢拉遠，（節拍在重拍上收束）。
約束：人物與工業風空間以圖片1為準；冷藍霓虹光影貫穿；運鏡節奏須與音樂重拍嚴格同步。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 鋼琴獨奏

- **分類:** `音樂、舞蹈與MV`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的鋼琴家與老劇院舞台為主體（人物與鋼琴以圖片1為準），橫屏16:9，古典音樂會電影感風、暖金聚光暗場調，生成30秒深情獨奏片。

#### 提示詞

```text
參考圖片1中的鋼琴家與老劇院舞台為主體（人物與鋼琴以圖片1為準），橫屏16:9，古典音樂會電影感風、暖金聚光暗場調，生成30秒深情獨奏片。
Shot 1：極近特寫，指尖懸停琴鍵上方輕輕落下按響第一音，固定機位，（鋼琴單音清越響起）。
Shot 2：特寫，雙手在黑白鍵上流暢遊走琴錘起落，鏡頭緩慢平移，<琴鍵擊弦的清脆聲>。
Shot 3：中景，琴家閉眼投入身體隨旋律微微俯仰，鏡頭緩慢推近，（旋律漸入高潮）。
Shot 4：全景，聚光燈下鋼琴孤懸空曠舞台塵光浮動，鏡頭緩慢升降，（和弦層層疊起）。
Shot 5：極近特寫，最後一鍵按下手指停駐餘音震顫，鏡頭緩慢拉遠，<琴弦餘音漸消>，（旋律靜靜收束）。
約束：人物與鋼琴以圖片1為準；暖金聚光暗場影調貫穿；手部按鍵動作須與音符起落嚴格對應。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 街舞battle

- **分類:** `音樂、舞蹈與MV`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的兩位街舞舞者與地下場館為主體（人物與場地以圖片1為準），豎屏9:16，地下街舞紀實風、高對比暖冷混光調，生成30秒對決battle片。

#### 提示詞

```text
參考圖片1中的兩位街舞舞者與地下場館為主體（人物與場地以圖片1為準），豎屏9:16，地下街舞紀實風、高對比暖冷混光調，生成30秒對決battle片。
Shot 1：極近特寫，一名舞者壓低帽簷抬眼挑釁直視鏡頭，固定機位，<人群騷動起鬨聲>，（嘻哈鼓點砸下起）。
Shot 2：全景，第一名舞者衝入場中爆發地板動作圍觀圈讓開，鏡頭跟拍，<手掌拍地的實響>。
Shot 3：中景，托馬斯旋轉風車動作雙腿劃圈，鏡頭緩慢環繞，（人群喝彩疊入節拍）。
Shot 4：特寫，對手接力頂胯定格凍結帽簷甩汗，鏡頭緩慢推近，<急促換氣與踏步聲>。
Shot 5：全景，兩人同時定格對峙圍觀者齊聲爆發，鏡頭緩慢拉遠，{（圍觀者）"哦——！"}，（鼓點重拍收束）。
約束：兩位舞者與地下場館以圖片1為準；暖冷混光高對比貫穿；地板動作旋轉須符合真實力學連貫不卡頓。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 演唱會氛圍

- **分類:** `音樂、舞蹈與MV`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的主唱與體育館舞台為主體（人物與舞台以圖片1為準），橫屏16:9，大型演唱會實錄風、彩色追光與螢光海調，生成30秒萬人合唱高燃片。

#### 提示詞

```text
參考圖片1中的主唱與體育館舞台為主體（人物與舞台以圖片1為準），橫屏16:9，大型演唱會實錄風、彩色追光與螢光海調，生成30秒萬人合唱高燃片。
Shot 1：極近特寫，主唱嘴唇貼近話筒睜眼開口唱出第一句，固定機位，{（主唱）"這一夜屬於你們！"}，（搖滾前奏轟鳴起）。
Shot 2：全景，追光掃過舞台主唱張臂點燃全場，鏡頭緩慢升降，<觀眾山呼海嘯的歡呼>。
Shot 3：遠景，看台螢光棒連成起伏光海隨節拍搖擺，鏡頭緩慢橫移，（副歌鼓點齊奏）。
Shot 4：中景，主唱走向台前伸手觀眾伸臂相接，鏡頭跟拍，<萬人齊聲合唱>。
Shot 5：全景，煙花與雷射同時噴發主唱高舉話筒剪影，鏡頭緩慢拉遠，【全場大合唱】，（副歌高潮轟然收束）。
約束：人物與體育館舞台以圖片1為準；彩色追光與螢光海貫穿；燈光頻閃與煙花須與鼓點重拍同步。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-25"></a>

### 節日與節氣 (5)

### No. 1: 春節團圓

- **分類:** `節日與節氣`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1、圖片2、圖片3中的家人為主體（各自以對應圖為準），橫屏16:9，喜慶溫情寫實、暖紅燈籠調，生成30秒春節短片。

#### 提示詞

```text
參考圖片1、圖片2、圖片3中的家人為主體（各自以對應圖為準），橫屏16:9，喜慶溫情寫實、暖紅燈籠調，生成30秒春節短片。
Shot 1：緩慢推近，窗外煙花綻放照亮貼著福字的窗欞，室內暖紅燈籠搖曳，（悠遠中式鐘聲與喜樂漸起）。
Shot 2：環繞，一家人圍坐年夜飯桌舉杯，蒸騰熱氣與暖光，<碗筷輕碰聲>。
Shot 3：固定機位，老人@Image 1 給孫輩夾菜慈愛微笑，桌面佳餚特寫虛化背景。
Shot 4：平穩跟拍，孩子@Image 3 舉起紅包在院中蹦跳，紅燈籠串一路鋪展，<清脆歡笑聲>。
Shot 5：仰拍，全家人@Image 2 抬頭望向漫天煙花驚嘆，光影灑滿笑臉。
Shot 6：緩慢拉遠，全家門前舉杯定格於大紅燈籠下，出現字幕【新年快樂 闔家團圓】，（喜樂收束）。
約束：各人物以對應圖片為準，禁止外形一致的分身雙胞胎，同框各一人；紅燈籠暖調貫穿全片。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 情人節浪漫

- **分類:** `節日與節氣`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的女子、圖片2中的男子為主體（各自以對應圖為準），豎屏9:16，法式膠片暖調浪漫寫實，生成30秒情人節短片。

#### 提示詞

```text
參考圖片1中的女子、圖片2中的男子為主體（各自以對應圖為準），豎屏9:16，法式膠片暖調浪漫寫實，生成30秒情人節短片。
Shot 1：緩慢推近，黃昏街角女子@Image 1 手捧玫瑰回眸淺笑，暖金逆光勾勒髮絲，（輕柔鋼琴單音起）。
Shot 2：跟拍，男子@Image 2 穿過人群快步走近，霓虹光斑在身後流動，<心跳聲漸強>。
Shot 3：環繞，兩人相擁旋轉於灑落花瓣的廣場，暖光旋轉成光暈，（弦樂層層推起）。
Shot 4：固定機位，特寫十指相扣互戴對戒，戒面反光一閃。
Shot 5：升降，鏡頭自二人上升掠過掛滿燈串的樹梢，夜空繁星點點，（音樂至高潮）。
Shot 6：緩慢拉遠，二人依偎長椅剪影，出現字幕【愛你的每一天】，（鋼琴餘韻收束）。
約束：女子以圖片1、男子以圖片2為準，二人外形須清晰區分，禁止雙胞胎化；暖金膠片調貫穿。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 中秋賞月

- **分類:** `節日與節氣`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1中的人物為主體（以圖片1為準），橫屏16:9，靜謐東方水墨寫意與寫實融合、青藍月華調，生成30秒中秋短片。

#### 提示詞

```text
參考圖片1中的人物為主體（以圖片1為準），橫屏16:9，靜謐東方水墨寫意與寫實融合、青藍月華調，生成30秒中秋短片。
Shot 1：仰拍，一輪滿月自雲海中緩緩浮出，清輝傾瀉，（古琴泛音悠然起）。
Shot 2：緩慢推近，人物@Image 1 獨立庭院石桌前抬頭望月，桂樹影婆娑，<夜風拂葉聲>。
Shot 3：固定機位，特寫月餅被掰開露出金黃流心，茶煙裊裊升起。
Shot 4：平穩橫移，庭院燈籠與月影倒映於池水微波蕩漾，<水聲潺潺>。
Shot 5：環繞，人物@Image 1 舉杯邀月對飲衣袂輕揚，月華流轉。
Shot 6：緩慢拉遠，人影與巨大滿月同框成剪影，出現字幕【但願人長久】，（古琴收束）。
約束：人物以圖片1為準；青藍月華冷調統一，避免暖色干擾月色氛圍。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 聖誕氛圍

- **分類:** `節日與節氣`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

參考圖片1、圖片2中的兩位家人為主體（各自以對應圖為準），豎屏9:16，北歐暖調童話寫實、壁爐橙光調，生成30秒聖誕短片。

#### 提示詞

```text
參考圖片1、圖片2中的兩位家人為主體（各自以對應圖為準），豎屏9:16，北歐暖調童話寫實、壁爐橙光調，生成30秒聖誕短片。
Shot 1：緩慢推近，窗外飄雪落在綴滿彩燈的聖誕樹上，室內壁爐火光跳動，（清脆鈴鐺與聖誕樂起）。
Shot 2：固定機位，人物@Image 1 掛上最後一顆星形裝飾滿意微笑，彩燈映在臉上。
Shot 3：跟拍，人物@Image 2 抱著禮物盒跑向樹下驚喜張望，暖橙光暈流轉，<拆禮物紙聲>。
Shot 4：俯拍，桌上薑餅、熱可可與蠟燭鋪陳，熱氣與糖霜閃爍。
Shot 5：環繞，兩人@Image 1@Image 2 依偎壁爐前碰杯，窗外雪花紛飛。
Shot 6：緩慢拉遠，屋內暖光透過雪夜窗櫺，出現字幕【Merry Christmas】，（聖誕樂收束）。
約束：兩人各以對應圖片為準，外形須區分，禁止雙胞胎化，同框各一人；壁爐暖橙調貫穿。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 5: 立春節氣

- **分類:** `節日與節氣`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

無參考人物，橫屏16:9，二十四節氣東方美學、清新水彩寫意寫實、嫩綠新芽調，生成30秒立春節氣短片。

#### 提示詞

```text
無參考人物，橫屏16:9，二十四節氣東方美學、清新水彩寫意寫實、嫩綠新芽調，生成30秒立春節氣短片。
Shot 1：緩慢推近，殘雪覆蓋的枯枝頂端一粒嫩芽悄然頂出冰晶，晨光穿透，（清越竹笛單音起）。
Shot 2：微距固定機位，冰凌融化滴落砸在濕潤泥土上，<水滴清脆聲>。
Shot 3：平穩橫移，田野殘雪漸退嫩綠鋪展，第一株野花探頭，<春風輕拂聲>。
Shot 4：仰拍，燕子掠過湛藍天空盤旋，柳條抽出新綠隨風擺動，（笛聲漸揚）。
Shot 5：升降，鏡頭自嫩芽升起俯瞰甦醒的大地，溪流解凍奔湧，（絲竹層層推起）。
Shot 6：緩慢拉遠，一樹新綠立於原野，出現字幕【立春 萬物始生】，（絲竹收束）。
約束：色彩由冷灰殘雪過渡到暖嫩綠，體現由冬入春的時序變化；無人物出鏡。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-26"></a>

### 自然、天文與紀錄片 (4)

### No. 1: 星空延時

- **分類:** `自然、天文與紀錄片`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

無參考人物，橫屏16:9，BBC紀錄片級星空延時攝影、深空幽藍調，生成30秒星空延時短片。

#### 提示詞

```text
無參考人物，橫屏16:9，BBC紀錄片級星空延時攝影、深空幽藍調，生成30秒星空延時短片。
Shot 1：仰拍，銀河拱橋橫貫天頂群星旋轉流動，前景孤峰剪影，（低沉宇宙氛圍電子樂起）。
Shot 2：固定機位延時，星軌以北極星為心畫出同心圓弧，<夜蟲低鳴>。
Shot 3：緩慢橫移，銀河緩緩沉入遠山，流星劃破夜空拖出長尾。
Shot 4：升降，鏡頭自地面草原升起，銀河與地平線一同展開，（弦樂鋪底漸入）。
Shot 5：緩慢推近，深空星雲的紫紅氣團在星海中翻湧，星點閃爍。
Shot 6：緩慢拉遠，星空回落至一人孤帳微光，出現字幕【宇宙 · 亙古如斯】，（氛圍樂收束）。
約束：全程延時質感，天體運動流暢連貫；深藍幽紫冷調統一，無人物特寫。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 極光流動

- **分類:** `自然、天文與紀錄片`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

無參考人物，橫屏16:9，北極紀錄片寫實、冰雪極夜與翠綠極光調，生成30秒極光短片。

#### 提示詞

```text
無參考人物，橫屏16:9，北極紀錄片寫實、冰雪極夜與翠綠極光調，生成30秒極光短片。
Shot 1：仰拍，翠綠極光簾幕自天際驟然點亮如波濤翻捲，（空靈合成器音牆驟起）。
Shot 2：緩慢橫移，極光倒映於結冰湖面雪原一片銀白，<極寒風聲呼嘯>。
Shot 3：固定機位延時，極光由綠轉紫急速舞動變幻，星點隱現其間。
Shot 4：緩慢推近，極光光簾細節如絲綢般流瀉垂落，<冰面開裂低鳴>。
Shot 5：升降，鏡頭掠過雪松林升向漫天極光，冷冽通透。
Shot 6：緩慢拉遠，極光籠罩整片冰原孤木佇立，出現字幕【極地之光】，（音牆漸隱收束）。
約束：極光色彩過渡自然流暢，避免生硬閃爍；冷調為主，無人物出鏡。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 3: 火山熔岩

- **分類:** `自然、天文與紀錄片`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

無參考人物，橫屏16:9，地質紀錄片震撼寫實、熾紅熔岩與黑岩冷煙對比調，生成30秒火山短片。

#### 提示詞

```text
無參考人物，橫屏16:9，地質紀錄片震撼寫實、熾紅熔岩與黑岩冷煙對比調，生成30秒火山短片。
鏡頭1：緩慢推近，火山口熾紅熔岩翻滾沸騰迸濺火星，濃煙升騰，（低頻轟鳴鼓點驟起）。
鏡頭2：固定機位，熔岩流緩慢漫過黑色岩地表面結出金紅裂紋，<岩漿咕嘟灼燒聲>。
鏡頭3：俯拍，熔岩河如金色血脈蜿蜒流淌切開焦黑山坡。
鏡頭4：緩慢橫移，熔岩墜入海面激起白色蒸汽爆裂，<水火相激爆裂聲>。
鏡頭5：仰拍，夜空下火山噴發熔岩彈劃出橙紅弧線，煙柱沖天，（鼓點至高潮）。
鏡頭6：緩慢拉遠，冷卻熔岩原上餘燼閃爍如星，出現字幕【大地 · 熾熱心臟】，（轟鳴漸息收束）。
約束：熾紅暖光與黑岩冷調強烈對比；熔岩流動質感真實黏稠，無人物出鏡。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 4: 森林晨霧

- **分類:** `自然、天文與紀錄片`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

無參考人物，橫屏16:9，自然紀錄片治癒寫實、晨光丁達爾與青翠霧林調，生成30秒森林晨霧短片。

#### 提示詞

```text
無參考人物，橫屏16:9，自然紀錄片治癒寫實、晨光丁達爾與青翠霧林調，生成30秒森林晨霧短片。
鏡頭1：緩慢推近，晨光穿透高大杉林形成道道丁達爾光束，薄霧流動，（空靈長笛與鳥鳴起）。
鏡頭2：固定機位，露珠懸於蕨葉尖端折射晨光墜落，<清脆鳥鳴此起彼伏>。
鏡頭3：平穩橫移，霧氣在林間苔石溪流上緩緩漂移，<溪水潺潺>。
鏡頭4：仰拍，鏡頭沿樹幹上搖至林冠頂端陽光傾瀉而下，光斑跳動。
鏡頭5：跟拍，一頭鹿悄然穿行霧林步履輕盈回眸，<落葉輕響>。
鏡頭6：緩慢拉遠，晨霧中的森林全景漸次明亮，出現字幕【晨林 · 萬籟初醒】，（長笛餘韻收束）。
約束：光束與霧氣層次通透自然；青翠柔和暖調，動物動作真實不僵硬，無人物出鏡。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<a id="category-27"></a>

### 擬人化與創意梗 (2)

### No. 1: AI 模型格鬥擬人化

- **分類:** `擬人化與創意梗`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

無參考人物，採用原創擬人格鬥選手（不影射任何真實公司或品牌商標），豎屏9:16，賽博競技場熱血動漫風、霓虹全息調，生成30秒擬人格鬥短片。

#### 提示詞

```text
無參考人物，採用原創擬人格鬥選手（不影射任何真實公司或品牌商標），豎屏9:16，賽博競技場熱血動漫風、霓虹全息調，生成30秒擬人格鬥短片。
鏡頭1：緩慢推近，全息競技場中央兩名原創機甲擬人選手對峙蓄力，胸口能量核心亮起，（燃系電子鼓點炸裂起）。
鏡頭2：跟拍，藍色數據流選手揮出光拳殘影拉絲，<高頻能量嗡鳴>。
鏡頭3：環繞，橙色算力選手側身閃避反手格擋火花四濺，霓虹光軌環繞。
鏡頭4：仰拍，兩拳相撞爆發衝擊波掀翻全息看台粒子，字幕彈出【推理速度對決】。
鏡頭5：固定機位慢鏡，藍方選手核心過載迸裂被擊退，代碼碎片飛散，<電流爆裂聲>。
鏡頭6：緩慢拉遠，橙方選手立於擂台舉拳，全息榜單亮起，出現字幕【本輪勝出】，（鼓點收束）。
約束：兩名選手配色造型須明顯區分（藍vs橙），禁止雙胞胎化，同框各一名；純原創擬人，不出現任何真實品牌標識或名稱。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

### No. 2: 編程語言擬人化互懟

- **分類:** `擬人化與創意梗`
- **來源:** `community`
- **作者:** Atlas Cloud
- **語言:** `zh-TW`
- **原始連結:** [查看](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)

#### 描述

無參考人物，採用原創擬人角色（不影射任何真實公司或品牌商標），橫屏16:9，辦公室情景喜劇幽默風、明快暖調，生成30秒擬人互懟短片。

#### 提示詞

```text
無參考人物，採用原創擬人角色（不影射任何真實公司或品牌商標），橫屏16:9，辦公室情景喜劇幽默風、明快暖調，生成30秒擬人互懟短片。
鏡頭1：緩慢推近，兩名原創程式設計師擬人角色隔工位對視挑眉，桌面代碼全息屏閃爍，（俏皮爵士小調起）。
鏡頭2：固定機位，蛇形吉祥物角色慵懶攤手吐槽台詞{我一行搞定，你寫二十行}，<鍵盤敲擊聲>。
鏡頭3：跟拍，齒輪盔甲角色不服起身拍桌反駁{可我跑得比你快十倍}，全息屏彈出進度條。
鏡頭4：環繞，兩角色背靠背互不相讓代碼符號在頭頂碰撞爆火花，<叮噹碰撞音效>。
鏡頭5：俯拍，第三名咖啡杯萌寵角色端來兩杯咖啡打圓場，兩人尷尬對視。
鏡頭6：緩慢拉遠，三角色勾肩碰杯和解大笑，出現字幕【各有所長 才是最強棧】，（爵士小調收束）。
約束：三名角色造型配色須明顯區分（蛇形/齒輪/咖啡杯），禁止雙胞胎化，同框各一名；純原創擬人，不出現任何真實編程語言商標、logo 或註冊名稱。
通用約束：保持無字幕；不要生成 Logo；不要生成浮水印；每個鏡頭只用一種運鏡；人物需自然微動非石像。
```

<details><summary>倉庫開發</summary>

```bash
npm ci
npm run generate
npx tsc --noEmit
```

</details>

<a id="resources"></a>

## 🔗 相關資源


- [Seedance 2.5 prompt gallery](https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills&locale=zh-TW)
- [Atlas Cloud Seedance 2.5 page](https://www.atlascloud.ai/zh-TW/seedance-2-5?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
- [Atlas Cloud Skill](https://github.com/AtlasCloudAI/atlas-cloud-skills)
- [Atlas MCP Server](https://github.com/AtlasCloudAI/mcp-server)
- [Atlas CLI](https://github.com/AtlasCloudAI/cli)
- [Atlas Cloud model catalog](https://www.atlascloud.ai/models?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills)
- [Discord](https://discord.gg/MWmMr4q9es)

<a id="license"></a>

## 📄 授權條款


[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

> 所有提示詞僅用於學習、整理與檢索。如有內容需要移除，請提交 issue。

> 此 README 為自動生成。 2026-07-23.
