import { type PromptRecord, type SortedPromptData } from "./cms-client.js";
import { SUPPORTED_LANGUAGES, t } from "./i18n.js";

const REPO = "awesome-seedance-2.5-prompts-skills";
const REPO_URL = "https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills";
const UTM = `?utm_source=github&utm_campaign=${REPO}`;
const PROMPT_SUBMISSION_URL = `${REPO_URL}/issues/new?template=prompt.yml`;

function buildCategoryAnchor(index: number): string {
  return `category-${index + 1}`;
}

function buildLocalePrefix(locale: string): string {
  return locale === "en" ? "" : `/${locale}`;
}

function buildPromptLibraryUrl(locale: string): string {
  const q = locale === "zh" ? "&locale=zh-CN" : locale === "zh-TW" ? "&locale=zh-TW" : "";
  return `https://www.atlascloud.ai/prompts-hub/seedance-2-5-prompt${UTM}${q}`;
}

function buildAtlasHomepageUrl(): string {
  return `https://www.atlascloud.ai/${UTM}`;
}

function renderBadges(promptCount: number): string {
  return [
    "[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)",
    `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`,
    `[![GitHub stars](https://img.shields.io/github/stars/AtlasCloudAI/awesome-seedance-2.5-prompts-skills?style=social)](${REPO_URL})`,
    `[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](${REPO_URL}/pulls)`,
    `[![Prompts](https://img.shields.io/badge/prompts-${promptCount}%2B-blue.svg)](${REPO_URL})`,
  ].join("\n");
}

interface HomeCopy {
  hero: string;
  languages: string;
  contents: string;
  skillDescription: string;
  install: string;
  installBoth: string;
  whatItDoes: string;
  capabilityPrompt: string;
  capabilityStoryboard: string;
  capabilityGeneration: string;
  skillFiles: string;
  howToUse: string;
  browse: string;
  adapt: string;
  generate: string;
  execution: string;
  executionIntro: string;
  executionSkill: string;
  executionMcp: string;
  executionCliRest: string;
  polling: string;
  modelDefaults: string;
  modelDefaultText: string;
  modelIntro: string;
  modelDescription: string;
  promptGuide: string;
  launchStatus: string;
  capabilityIntro: string;
  availability: string;
  promptStructure: string;
  referenceBinding: string;
  observableAction: string;
  spatialRelations: string;
  cameraCuts: string;
  visualStyle: string;
  audio: string;
  constraints: string;
  curation: string;
  curationText: string;
  officialCommunity: string;
  previewMeaning: string;
  faq: string;
  faqSkillQuestion: string;
  faqSkillAnswer: string;
  faqAvailabilityQuestion: string;
  faqAvailabilityAnswer: string;
  faqStoryboardQuestion: string;
  faqStoryboardAnswer: string;
  faqExecutionQuestion: string;
  faqExecutionAnswer: string;
  faqPromptQuestion: string;
  faqPromptAnswer: string;
  resources: string;
  development: string;
}

const homeCopyEn: HomeCopy = {
  hero:
    "A curated library of Seedance 2.5 video prompts plus **Seedance 2.5 Skill**, an installable Agent Skill that improves prompts, plans and reviews storyboards when needed, and generates controllable video. It uses Seedream 5.0 Pro for storyboard images and Seedance 2.0 as the current executable video default, switching to Seedance 2.5 only when the selected provider exposes it.",
  languages: "Languages",
  contents: "Contents",
  skillDescription:
    "**Seedance 2.5 Skill** is the name of the installable Agent Skill in this repository. It turns a creative brief, existing prompt, references, or a storyboard into a production-ready prompt, the necessary intermediate assets, an execution request, and a review loop.",
  install: "Install",
  installBoth: "Install the workflow Skill and its default Atlas Cloud execution Skill:",
  whatItDoes: "What it does",
  capabilityPrompt:
    "**Improve prompts:** turn an idea, an existing prompt, or reference assets into a clearer production-ready Seedance prompt.",
  capabilityStoryboard:
    "**Plan and review storyboards:** create a Seedream 5.0 Pro storyboard only when the video needs multi-shot planning or stronger visual consistency, display it as progress, and review its quality automatically.",
  capabilityGeneration:
    "**Generate and review video:** use the best available Seedance model, submit through the selected Atlas Cloud channel, poll the same task to completion, and check the result.",
  skillFiles: "Skill files and references",
  howToUse: "How to use this repository",
  browse: "**Browse:** filter by category, open a real preview when available, and copy the prompt.",
  adapt: "**Adapt:** ask Seedance 2.5 Skill to rewrite a prompt for your subject, duration, aspect ratio, references, and continuity needs.",
  generate:
    "**Generate:** let the Skill create and show intermediate storyboards when needed, review them automatically, and submit the final image or video request through the selected Atlas channel.",
  execution: "Model and execution defaults",
  executionIntro:
    "The workflow Skill and the execution adapter are separate layers. The workflow decides what to make; the selected Atlas channel submits, polls, and retrieves the media.",
  executionSkill:
    "**Atlas Cloud Skill:** default direct execution route inside an Agent conversation. If it is missing, the workflow helps install it and directs the user to obtain an API key.",
  executionMcp: "**Atlas MCP:** used when the user explicitly selects MCP and its generation tools are available.",
  executionCliRest: "**Atlas CLI / REST:** used for explicit terminal, script, CI, or batch workflows.",
  polling:
    "All asynchronous jobs are polled every 2 seconds using the same prediction ID. A timeout or delayed output is not permission to submit a duplicate paid generation.",
  modelDefaults: "Model defaults",
  modelDefaultText:
    "**Storyboard stills:** Seedream 5.0 Pro. **Executable video default:** Seedance 2.0. **Seedance 2.5:** only when the selected provider exposes the model and its actual limits.",
  modelIntro: "What is Seedance 2.5?",
  modelDescription:
    "Seedance 2.5 is ByteDance's next-generation multimodal video generation model, following Seedance 2.0. It is designed for reference-driven video creation, longer narrative sequences, synchronized audio and video, and precise visual control.",
  promptGuide: "Seedance 2.5 prompt guide",
  launchStatus:
    "**Launch status:** Seedance 2.5 is expected to launch in August 2026. Atlas Cloud is one of the first official API launch partners for Seedance 2.5.",
  capabilityIntro:
    "Published Seedance 2.5 launch material describes up to 30-second generation, native 4K output, up to 50 multimodal references, and local region editing. Treat these as announced capabilities, not universal API parameters.",
  availability:
    "**Availability note:** provider availability, reference limits, duration, resolution, and editing controls can differ. The Skill verifies actual model availability instead of assuming Seedance 2.5 is callable.",
  promptStructure: "Prompt structure used by the Skill",
  referenceBinding: "**Reference binding:** state what each image, video, or audio reference controls.",
  observableAction: "**Observable action:** describe visible events in temporal order, including reactions and state changes.",
  spatialRelations: "**Spatial relationships:** say where subjects, objects, and the camera are in relation to each other.",
  cameraCuts: "**Camera and cuts:** specify framing, movement, cut order, match actions, and occlusions only where they matter.",
  visualStyle: "**Visual style:** define lighting, palette, texture, atmosphere, and pace.",
  audio: "**Audio:** define dialogue, ambience, sound effects, or music when the selected model supports them.",
  constraints: "**Constraints:** preserve only the identities, product details, scene traits, and exclusions that are essential.",
  curation: "Curation and provenance",
  curationText:
    "Every prompt record keeps its category, source platform, author, source link, input references, and preview video when available. Prompt text remains unchanged during README generation.",
  officialCommunity:
    "The `official` and `community` labels describe where a prompt came from; they are not a guarantee that every prompt has been independently benchmarked across every provider or model version.",
  previewMeaning:
    "A preview demonstrates one observed output under its original setup. Results can change with model version, provider parameters, references, aspect ratio, seed, and moderation.",
  faq: "Frequently asked questions",
  faqSkillQuestion: "What is Seedance 2.5 Skill?",
  faqSkillAnswer:
    "It is the installable Agent Skill in `skills/seedance-2-5-skill/`. It improves prompts, prepares required storyboards or references, executes through Atlas Cloud, and reviews the outputs.",
  faqAvailabilityQuestion: "Does the Skill require public Seedance 2.5 access?",
  faqAvailabilityAnswer:
    "No. The current executable default is Seedance 2.0. The Skill uses Seedance 2.5 only when the selected provider actually exposes it.",
  faqStoryboardQuestion: "Does every video need a storyboard?",
  faqStoryboardAnswer:
    "No. The Skill creates or uses a storyboard only when it materially improves multi-shot planning, continuity, or reference control.",
  faqExecutionQuestion: "Which Atlas route is used?",
  faqExecutionAnswer:
    "Atlas Cloud Skill is the default inside an Agent conversation. MCP, CLI, and REST are selected explicitly for their corresponding environments.",
  faqPromptQuestion: "Can I use the prompts without installing the Skill?",
  faqPromptAnswer:
    "Yes. Browse and copy any prompt directly. Install the Skill when you want prompt adaptation, storyboard handling, execution, polling, and automated review.",
  resources: "Resources",
  development: "Repository development",
};

const homeCopyZh: HomeCopy = {
  ...homeCopyEn,
  hero:
    "一个经过整理的 Seedance 2.5 视频提示词库，以及可安装的 **Seedance 2.5 Skill**。这个 Agent Skill 可以优化提示词、按需规划并检查 Storyboard，并生成可控视频。Storyboard 图片默认使用 Seedream 5.0 Pro，当前视频生成默认使用 Seedance 2.0；只有当所选服务商实际提供 Seedance 2.5 时，才切换到 2.5。",
  languages: "语言",
  contents: "目录",
  skillDescription:
    "**Seedance 2.5 Skill** 是本仓库内可安装 Agent Skill 的正式名称。它会把创意需求、已有提示词、参考素材或 Storyboard 转换成可以直接生产的提示词、必要的中间素材、执行请求和质量复查流程。",
  install: "安装",
  installBoth: "安装工作流 Skill，以及默认用于执行生成的 Atlas Cloud Skill：",
  whatItDoes: "它会做什么",
  capabilityPrompt:
    "**优化提示词：** 把一个创意、已有提示词或参考素材，整理成更清晰、可以直接用于生产的 Seedance 提示词。",
  capabilityStoryboard:
    "**规划并检查 Storyboard：** 只有视频确实需要多镜头规划或更强视觉一致性时，才使用 Seedream 5.0 Pro 生成 Storyboard；生成后会展示中间图并自动检查质量。",
  capabilityGeneration:
    "**生成并复查视频：** 使用当前可用的最佳 Seedance 模型，通过所选 Atlas Cloud 通道提交任务，持续轮询同一个任务并检查最终结果。",
  skillFiles: "Skill 文件与参考资料",
  howToUse: "如何使用这个仓库",
  browse: "**浏览：** 按分类查找提示词；有真实预览时先看预览，再复制提示词。",
  adapt: "**优化：** 让 Seedance 2.5 Skill 根据主体、时长、画幅、参考素材和连续性要求改写提示词。",
  generate:
    "**生成：** 需要 Storyboard 时先生成并展示中间图，由 Agent 自行检查质量，然后通过所选 Atlas 通道提交图片或视频任务。",
  execution: "默认模型与执行方式",
  executionIntro:
    "工作流 Skill 和执行适配层是两层：前者决定做什么、怎么做；Atlas 执行通道负责提交、轮询和取回图片或视频。",
  executionSkill:
    "**Atlas Cloud Skill：** Agent 会话中的默认直接执行方式。若未安装，工作流会协助安装，并引导用户获取 API Key。",
  executionMcp: "**Atlas MCP：** 只有用户明确选择 MCP，且当前客户端暴露生成工具时才使用。",
  executionCliRest: "**Atlas CLI / REST：** 用于用户明确选择的终端、脚本、CI 或批量任务。",
  polling:
    "所有异步任务都使用同一个 prediction ID 每 2 秒轮询一次。超时或暂时没有输出，不代表可以重复提交付费生成任务。",
  modelDefaults: "默认模型",
  modelDefaultText:
    "**Storyboard 静帧：** Seedream 5.0 Pro。**当前默认视频模型：** Seedance 2.0。**Seedance 2.5：** 只有所选服务商实际提供模型和明确参数限制时才使用。",
  modelIntro: "Seedance 2.5 是什么？",
  modelDescription:
    "Seedance 2.5 是字节跳动继 Seedance 2.0 之后推出的下一代多模态视频生成模型，面向参考素材驱动的视频创作、更完整的叙事、音视频同步和精确的视觉控制。",
  promptGuide: "Seedance 2.5 提示词指南",
  launchStatus:
    "**上线信息：** Seedance 2.5 预计于 2026 年 8 月上线。Atlas Cloud 是 Seedance 2.5 首批 API 上线的官方合作伙伴之一。",
  capabilityIntro:
    "公开的 Seedance 2.5 发布资料描述了最长 30 秒、原生 4K、最多 50 个多模态参考素材和局部区域编辑等能力。这些是已发布的能力信息，不应直接视为所有 API 都支持的固定参数。",
  availability:
    "**可用性说明：** 不同服务商的模型开放状态、参考素材数量、时长、分辨率和编辑能力可能不同。Skill 会核对实际模型可用性，不会假定 Seedance 2.5 一定可调用。",
  promptStructure: "Skill 使用的提示词结构",
  referenceBinding: "**参考绑定：** 明确每张图片、每段视频或音频分别控制什么。",
  observableAction: "**可观察动作：** 按时间顺序写清画面中真正发生的事件、反应和状态变化。",
  spatialRelations: "**空间关系：** 写清主体、物体与镜头之间的位置和相对关系。",
  cameraCuts: "**镜头与剪辑：** 只在必要时指定景别、运镜、切镜顺序、动作匹配和遮挡转场。",
  visualStyle: "**视觉风格：** 定义光线、色彩、材质、氛围和节奏。",
  audio: "**音频：** 当所选模型支持时，定义对白、环境声、音效或音乐。",
  constraints: "**约束：** 只保留真正重要的人物身份、产品细节、场景特征和禁止项。",
  curation: "收录标准与来源说明",
  curationText:
    "每条提示词都会保留分类、来源平台、作者、原始链接、输入参考素材，以及可用时的预览视频。README 生成过程不会改写提示词正文。",
  officialCommunity:
    "`official` 和 `community` 标签表示提示词的来源性质，并不代表每条提示词都已经在所有服务商和模型版本上完成独立测试。",
  previewMeaning:
    "预览视频代表原始配置下的一次真实输出。模型版本、服务商参数、参考素材、画幅、seed 和内容审核变化，都可能导致不同结果。",
  faq: "常见问题",
  faqSkillQuestion: "Seedance 2.5 Skill 是什么？",
  faqSkillAnswer:
    "它是 `skills/seedance-2-5-skill/` 中的可安装 Agent Skill，负责优化提示词、准备必要的 Storyboard 或参考素材、通过 Atlas Cloud 执行并复查结果。",
  faqAvailabilityQuestion: "使用这个 Skill 必须已经开放 Seedance 2.5 吗？",
  faqAvailabilityAnswer:
    "不需要。当前可执行默认模型是 Seedance 2.0；只有所选服务商真实提供 Seedance 2.5 时，Skill 才会使用 2.5。",
  faqStoryboardQuestion: "每个视频都必须先生成 Storyboard 吗？",
  faqStoryboardAnswer:
    "不需要。只有 Storyboard 能明显改善多镜头规划、连续性或参考控制时，Skill 才会生成或使用它。",
  faqExecutionQuestion: "默认使用哪个 Atlas 执行通道？",
  faqExecutionAnswer:
    "Agent 会话默认使用 Atlas Cloud Skill。MCP、CLI 和 REST 只在用户明确选择相应环境时使用。",
  faqPromptQuestion: "不安装 Skill，也能直接使用提示词吗？",
  faqPromptAnswer:
    "可以。你可以直接浏览和复制任意提示词；需要提示词优化、Storyboard 处理、任务执行、轮询和自动复查时，再安装 Skill。",
  resources: "相关资源",
  development: "仓库开发",
};

const homeCopyZhTw: HomeCopy = {
  ...homeCopyZh,
  hero:
    "一個經過整理的 Seedance 2.5 影片提示詞庫，以及可安裝的 **Seedance 2.5 Skill**。這個 Agent Skill 可以最佳化提示詞、視需要規劃並檢查 Storyboard，並生成可控影片。Storyboard 圖片預設使用 Seedream 5.0 Pro，目前影片生成預設使用 Seedance 2.0；只有所選服務商實際提供 Seedance 2.5 時，才切換到 2.5。",
  languages: "語言",
  contents: "目錄",
  skillDescription:
    "**Seedance 2.5 Skill** 是本倉庫內可安裝 Agent Skill 的正式名稱。它會把創意需求、現有提示詞、參考素材或 Storyboard 轉換成可以直接製作的提示詞、必要的中間素材、執行請求和品質複查流程。",
  install: "安裝",
  installBoth: "安裝工作流 Skill，以及預設用於執行生成的 Atlas Cloud Skill：",
  whatItDoes: "它會做什麼",
  capabilityPrompt:
    "**最佳化提示詞：** 把一個創意、現有提示詞或參考素材，整理成更清楚、可以直接用於製作的 Seedance 提示詞。",
  capabilityStoryboard:
    "**規劃並檢查 Storyboard：** 只有影片確實需要多鏡頭規劃或更強視覺一致性時，才使用 Seedream 5.0 Pro 生成 Storyboard；生成後會展示中間圖並自動檢查品質。",
  capabilityGeneration:
    "**生成並複查影片：** 使用目前可用的最佳 Seedance 模型，透過所選 Atlas Cloud 通道提交任務，持續輪詢同一個任務並檢查最終結果。",
  skillFiles: "Skill 檔案與參考資料",
  howToUse: "如何使用這個倉庫",
  browse: "**瀏覽：** 按分類尋找提示詞；有真實預覽時先看預覽，再複製提示詞。",
  adapt: "**最佳化：** 讓 Seedance 2.5 Skill 根據主體、時長、畫幅、參考素材和連續性要求改寫提示詞。",
  generate:
    "**生成：** 需要 Storyboard 時先生成並展示中間圖，由 Agent 自行檢查品質，然後透過所選 Atlas 通道提交圖片或影片任務。",
  execution: "預設模型與執行方式",
  executionIntro:
    "工作流 Skill 和執行適配層是兩層：前者決定做什麼、怎麼做；Atlas 執行通道負責提交、輪詢和取回圖片或影片。",
  executionSkill:
    "**Atlas Cloud Skill：** Agent 對話中的預設直接執行方式。若未安裝，工作流會協助安裝，並引導使用者取得 API Key。",
  executionMcp: "**Atlas MCP：** 只有使用者明確選擇 MCP，且目前客戶端提供生成工具時才使用。",
  executionCliRest: "**Atlas CLI / REST：** 用於使用者明確選擇的終端機、腳本、CI 或批次任務。",
  polling:
    "所有非同步任務都使用同一個 prediction ID 每 2 秒輪詢一次。逾時或暫時沒有輸出，不代表可以重複提交付費生成任務。",
  modelDefaults: "預設模型",
  modelDefaultText:
    "**Storyboard 靜幀：** Seedream 5.0 Pro。**目前預設影片模型：** Seedance 2.0。**Seedance 2.5：** 只有所選服務商實際提供模型和明確參數限制時才使用。",
  modelIntro: "Seedance 2.5 是什麼？",
  modelDescription:
    "Seedance 2.5 是字節跳動繼 Seedance 2.0 之後推出的下一代多模態影片生成模型，面向參考素材驅動的影片創作、更完整的敘事、音影片同步和精確的視覺控制。",
  promptGuide: "Seedance 2.5 提示詞指南",
  launchStatus:
    "**上線資訊：** Seedance 2.5 預計於 2026 年 8 月上線。Atlas Cloud 是 Seedance 2.5 首批 API 上線的官方合作夥伴之一。",
  capabilityIntro:
    "公開的 Seedance 2.5 發布資料描述了最長 30 秒、原生 4K、最多 50 個多模態參考素材和局部區域編輯等能力。這些是已發布的能力資訊，不應直接視為所有 API 都支援的固定參數。",
  availability:
    "**可用性說明：** 不同服務商的模型開放狀態、參考素材數量、時長、解析度和編輯能力可能不同。Skill 會核對實際模型可用性，不會假定 Seedance 2.5 一定可呼叫。",
  promptStructure: "Skill 使用的提示詞結構",
  referenceBinding: "**參考綁定：** 明確每張圖片、每段影片或音訊分別控制什麼。",
  observableAction: "**可觀察動作：** 按時間順序寫清畫面中真正發生的事件、反應和狀態變化。",
  spatialRelations: "**空間關係：** 寫清主體、物體與鏡頭之間的位置和相對關係。",
  cameraCuts: "**鏡頭與剪輯：** 只在必要時指定景別、運鏡、切鏡順序、動作匹配和遮擋轉場。",
  visualStyle: "**視覺風格：** 定義光線、色彩、材質、氛圍和節奏。",
  audio: "**音訊：** 當所選模型支援時，定義對白、環境聲、音效或音樂。",
  constraints: "**約束：** 只保留真正重要的人物身分、產品細節、場景特徵和禁止項。",
  curation: "收錄標準與來源說明",
  curationText:
    "每條提示詞都會保留分類、來源平台、作者、原始連結、輸入參考素材，以及可用時的預覽影片。README 生成過程不會改寫提示詞正文。",
  officialCommunity:
    "`official` 和 `community` 標籤表示提示詞的來源性質，並不代表每條提示詞都已經在所有服務商和模型版本上完成獨立測試。",
  previewMeaning:
    "預覽影片代表原始設定下的一次真實輸出。模型版本、服務商參數、參考素材、畫幅、seed 和內容審核變化，都可能導致不同結果。",
  faq: "常見問題",
  faqSkillQuestion: "Seedance 2.5 Skill 是什麼？",
  faqSkillAnswer:
    "它是 `skills/seedance-2-5-skill/` 中可安裝的 Agent Skill，負責最佳化提示詞、準備必要的 Storyboard 或參考素材、透過 Atlas Cloud 執行並複查結果。",
  faqAvailabilityQuestion: "使用這個 Skill 必須已經開放 Seedance 2.5 嗎？",
  faqAvailabilityAnswer:
    "不需要。目前可執行的預設模型是 Seedance 2.0；只有所選服務商實際提供 Seedance 2.5 時，Skill 才會使用 2.5。",
  faqStoryboardQuestion: "每個影片都必須先生成 Storyboard 嗎？",
  faqStoryboardAnswer:
    "不需要。只有 Storyboard 能明顯改善多鏡頭規劃、連續性或參考控制時，Skill 才會生成或使用它。",
  faqExecutionQuestion: "預設使用哪個 Atlas 執行通道？",
  faqExecutionAnswer:
    "Agent 對話預設使用 Atlas Cloud Skill。MCP、CLI 和 REST 只在使用者明確選擇相應環境時使用。",
  faqPromptQuestion: "不安裝 Skill，也能直接使用提示詞嗎？",
  faqPromptAnswer:
    "可以。你可以直接瀏覽和複製任意提示詞；需要提示詞最佳化、Storyboard 處理、任務執行、輪詢和自動複查時，再安裝 Skill。",
  resources: "相關資源",
  development: "倉庫開發",
};

function getHomeCopy(locale: string): HomeCopy {
  if (locale === "zh") return homeCopyZh;
  if (locale === "zh-TW") return homeCopyZhTw;
  return homeCopyEn;
}

function renderHeading(id: string, heading: string): string {
  return [`<a id="${id}"></a>`, "", `## ${heading}`, ""].join("\n");
}

function renderLanguageNavigation(currentLocale: string): string {
  const badges = SUPPORTED_LANGUAGES.map((lang) => {
    const isCurrent = lang.code === currentLocale;
    const color = isCurrent ? "brightgreen" : "lightgrey";
    const text = isCurrent ? t("current", currentLocale) : t("view", currentLocale);
    return `[![${lang.name}](https://img.shields.io/badge/${encodeURIComponent(lang.name)}-${encodeURIComponent(text)}-${color})](${REPO_URL}/blob/main/${lang.readmeFileName})`;
  }).join(" ");

  return `${badges}\n\n---\n`;
}

function renderQuickLinks(locale: string): string {
  const apiKeyUrl = `https://www.atlascloud.ai/console/api-keys${UTM}`;
  const skillUrl = `${REPO_URL}/tree/main/skills/seedance-2-5-skill`;
  const labels =
    locale === "zh"
      ? ["浏览提示词", "提交提示词", "安装 Seedance 2.5 Skill", "在 Atlas Cloud 生成", "获取 API Key"]
      : locale === "zh-TW"
        ? ["瀏覽提示詞", "提交提示詞", "安裝 Seedance 2.5 Skill", "在 Atlas Cloud 生成", "取得 API Key"]
        : ["Browse prompts", "Submit your prompt", "Install Seedance 2.5 Skill", "Generate with Atlas Cloud", "Get an API key"];

  return [
    `| [${labels[0]}](${buildPromptLibraryUrl(locale)}) | [${labels[1]}](${PROMPT_SUBMISSION_URL}) | [${labels[2]}](${skillUrl}) | [${labels[3]}](${buildAtlasHomepageUrl()}) | [${labels[4]}](${apiKeyUrl}) |`,
    "|---|---|---|---|---|",
    "",
    renderLanguageNavigation(locale),
  ].join("\n");
}

function renderSkill(locale: string): string {
  const copy = getHomeCopy(locale);
  const base = `${REPO_URL}/blob/main/skills/seedance-2-5-skill`;
  return [
    renderHeading("seedance-2-5-skill", "🧠 Seedance 2.5 Skill"),
    copy.skillDescription,
    "",
    `### ${copy.install}`,
    "",
    copy.installBoth,
    "",
    "```bash",
    `npx skills add AtlasCloudAI/${REPO} --skill seedance-2-5-skill`,
    "npx skills add AtlasCloudAI/atlas-cloud-skills --skill atlas-cloud",
    "```",
    "",
    `### ${copy.whatItDoes}`,
    "",
    "- " + copy.capabilityPrompt,
    "- " + copy.capabilityStoryboard,
    "- " + copy.capabilityGeneration,
    "",
    `<details><summary>${copy.skillFiles}</summary>`,
    "",
    `- [\`SKILL.md\`](${base}/SKILL.md)`,
    `- [\`references/workflow.zh-CN.md\`](${base}/references/workflow.zh-CN.md)`,
    `- [\`references/cinematography.md\`](${base}/references/cinematography.md)`,
    `- [\`references/prompt-blocks.md\`](${base}/references/prompt-blocks.md)`,
    `- [\`references/prompt-templates.md\`](${base}/references/prompt-templates.md)`,
    `- [\`references/execution-adapters.md\`](${base}/references/execution-adapters.md)`,
    `- [\`references/troubleshooting.md\`](${base}/references/troubleshooting.md)`,
    `- [\`scripts/generate.mjs\`](${base}/scripts/generate.mjs)`,
    "",
    "</details>",
    "",
  ].join("\n");
}

function renderHowToUse(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("how-to-use", `🚀 ${copy.howToUse}`),
    `1. ${copy.browse}`,
    `2. ${copy.adapt}`,
    `3. ${copy.generate}`,
    "",
  ].join("\n");
}

function renderExecution(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("model-and-execution-defaults", `⚙️ ${copy.execution}`),
    copy.executionIntro,
    "",
    `### ${copy.modelDefaults}`,
    "",
    copy.modelDefaultText,
    "",
    "- " + copy.executionSkill,
    "- " + copy.executionMcp,
    "- " + copy.executionCliRest,
    "",
    copy.polling,
    "",
    `**[→ ${locale === "zh" ? "获取 Atlas Cloud API Key" : locale === "zh-TW" ? "取得 Atlas Cloud API Key" : "Get an Atlas Cloud API key"}](https://www.atlascloud.ai/console/api-keys${UTM})**`,
    "",
  ].join("\n");
}

function renderMoreTools(locale: string): string {
  const copy = getHomeCopy(locale);
  const websiteLabel =
    locale === "zh" ? "Atlas Cloud 官网" : locale === "zh-TW" ? "Atlas Cloud 官方網站" : "Atlas Cloud official website";
  return [
    renderHeading("resources", `🔗 ${copy.resources}`),
    "",
    `- [${websiteLabel}](${buildAtlasHomepageUrl()})`,
    `- [Seedance 2.5 prompt gallery](${buildPromptLibraryUrl(locale)})`,
    `- [Atlas Cloud Seedance 2.5 page](https://www.atlascloud.ai${buildLocalePrefix(locale)}/seedance-2-5${UTM})`,
    "- [Atlas Cloud Skill](https://github.com/AtlasCloudAI/atlas-cloud-skills)",
    "- [Atlas MCP Server](https://github.com/AtlasCloudAI/mcp-server)",
    "- [Atlas CLI](https://github.com/AtlasCloudAI/cli)",
    `- [Atlas Cloud model catalog](https://www.atlascloud.ai/models${UTM})`,
    "- [Discord](https://discord.gg/MWmMr4q9es)",
    "",
  ].join("\n");
}

function renderContents(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("contents", `📖 ${copy.contents}`),
    `- [🤔 ${copy.modelIntro}](#model-overview)`,
    `- [🧩 ${copy.promptGuide}](#prompt-guide)`,
    "- [🧠 Seedance 2.5 Skill](#seedance-2-5-skill)",
    `- [🚀 ${copy.howToUse}](#how-to-use)`,
    `- [⚙️ ${copy.execution}](#model-and-execution-defaults)`,
    `- [🔎 ${copy.curation}](#curation-and-provenance)`,
    `- [📊 ${t("stats", locale)}](#statistics)`,
    `- [🔥 ${t("featuredPrompts", locale)}](#featured-prompts)`,
    `- [🏷️ ${t("browseByCategory", locale)}](#browse-by-category)`,
    `- [📋 ${t("allPrompts", locale)}](#all-prompts)`,
    `- [❓ ${copy.faq}](#faq)`,
    `- [🔗 ${copy.resources}](#resources)`,
    `- [📄 ${t("license", locale)}](#license)`,
    "",
  ].join("\n");
}

function renderPrompt(prompt: PromptRecord, index: number, locale: string): string {
  const lines = [
    `### No. ${index + 1}: ${prompt.title}`,
    "",
    `- **${t("category", locale)}:** \`${prompt.category}\``,
    `- **${t("source", locale)}:** \`${prompt.source_platform}\``,
    `- **${t("author", locale)}:** ${prompt.author_name}`,
    `- **${t("language", locale)}:** \`${prompt.language}\``,
  ];

  if (prompt.video_url) {
    lines.push(`- **${t("video", locale)}:** [${t("view", locale)}](${prompt.video_url})`);
    lines.push("");
    lines.push(`<video src="${prompt.video_url}" controls muted playsinline width="720"></video>`);
  }

  const referenceImages = prompt.reference_images ?? [];
  const referenceVideos = prompt.reference_videos ?? [];
  if (referenceImages.length > 0 || prompt.reference_video || referenceVideos.length > 0) {
    lines.push("");
    lines.push(`- **Inputs:**`);
    lines.push("");
    if (referenceImages.length > 0) {
      lines.push("<p>");
      for (const image of referenceImages) {
        lines.push(`  <img src="${image}" width="180" referrerpolicy="no-referrer">`);
      }
      lines.push("</p>");
    }
    if (prompt.reference_video) {
      lines.push(`<video src="${prompt.reference_video}" controls muted width="360"></video>`);
    }
    for (const video of referenceVideos) {
      lines.push(`<video src="${video}" controls muted width="360"></video>`);
    }
  }

  lines.push(
    "",
    `#### ${t("description", locale)}`,
    "",
    prompt.description,
    "",
    `#### ${t("prompt", locale)}`,
    "",
    "```text",
    prompt.prompt,
    "```",
    ""
  );

  return lines.join("\n");
}

function renderModelOverview(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("model-overview", `🤔 ${copy.modelIntro}`),
    copy.modelDescription,
    "",
    copy.launchStatus,
    "",
    copy.capabilityIntro,
    "",
    copy.availability,
    "",
  ].join("\n");
}

function renderPromptGuide(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("prompt-guide", `🧩 ${copy.promptGuide}`),
    `### ${copy.promptStructure}`,
    "",
    "1. " + copy.referenceBinding,
    "2. " + copy.observableAction,
    "3. " + copy.spatialRelations,
    "4. " + copy.cameraCuts,
    "5. " + copy.visualStyle,
    "6. " + copy.audio,
    "7. " + copy.constraints,
    "",
  ].join("\n");
}

function renderCuration(locale: string): string {
  const copy = getHomeCopy(locale);
  return [
    renderHeading("curation-and-provenance", `🔎 ${copy.curation}`),
    copy.curationText,
    "",
    "- " + copy.officialCommunity,
    "- " + copy.previewMeaning,
    "",
  ].join("\n");
}

function renderFaq(locale: string): string {
  const copy = getHomeCopy(locale);
  const items = [
    [copy.faqSkillQuestion, copy.faqSkillAnswer],
    [copy.faqAvailabilityQuestion, copy.faqAvailabilityAnswer],
    [copy.faqStoryboardQuestion, copy.faqStoryboardAnswer],
    [copy.faqExecutionQuestion, copy.faqExecutionAnswer],
    [copy.faqPromptQuestion, copy.faqPromptAnswer],
  ];
  const lines = [renderHeading("faq", `❓ ${copy.faq}`)];
  for (const [question, answer] of items) {
    lines.push(`### ${question}`, "", answer, "");
  }
  return lines.join("\n");
}

export function generateMarkdown(data: SortedPromptData, locale: string): string {
  const now = new Date().toISOString().slice(0, 10);
  const copy = getHomeCopy(locale);
  const lines: string[] = [];
  const promptsByCategory = new Map<string, PromptRecord[]>();

  for (const prompt of data.all) {
    const categoryPrompts = promptsByCategory.get(prompt.category) || [];
    categoryPrompts.push(prompt);
    promptsByCategory.set(prompt.category, categoryPrompts);
  }

  lines.push(`# 🎬 ${t("title", locale)}`);
  lines.push("");
  lines.push(renderBadges(data.stats.total));
  lines.push("");
  lines.push(copy.hero);
  lines.push("");
  lines.push(renderQuickLinks(locale));
  lines.push(renderContents(locale));
  lines.push(renderModelOverview(locale));
  lines.push(renderPromptGuide(locale));
  lines.push(renderSkill(locale));
  lines.push(renderHowToUse(locale));
  lines.push(renderExecution(locale));
  lines.push(renderCuration(locale));
  lines.push(renderHeading("statistics", `📊 ${t("stats", locale)}`));
  lines.push("");
  lines.push(`| ${t("metric", locale)} | ${t("count", locale)} |`);
  lines.push("|--------|-------|");
  lines.push(`| ${t("totalPrompts", locale)} | **${data.stats.total}** |`);
  lines.push(`| ${t("categories", locale)} | **${data.categoryCounts.length}** |`);
  lines.push(`| ${t("previewVideos", locale)} | **${data.stats.videos}** |`);
  lines.push(`| ${t("lastUpdated", locale)} | **${now}** |`);
  lines.push("");
  lines.push(renderHeading("featured-prompts", `🔥 ${t("featuredPrompts", locale)}`));
  data.featured.forEach((prompt, index) => lines.push(renderPrompt(prompt, index, locale)));
  lines.push(renderHeading("browse-by-category", `🏷️ ${t("browseByCategory", locale)}`));
  lines.push("");

  data.categoryCounts.forEach((item, index) => {
    const anchor = buildCategoryAnchor(index);
    lines.push(`- [\`${item.category}\`](#${anchor}): **${item.count}**`);
  });

  lines.push("");
  lines.push(renderHeading("all-prompts", `📋 ${t("allPrompts", locale)}`));
  lines.push("");

  data.categoryCounts.forEach((item, index) => {
    const anchor = buildCategoryAnchor(index);
    const prompts = promptsByCategory.get(item.category) || [];
    lines.push(`<a id="${anchor}"></a>`);
    lines.push("");
    lines.push(`### ${item.category} (${prompts.length})`);
    lines.push("");
    prompts.forEach((prompt, promptIndex) => lines.push(renderPrompt(prompt, promptIndex, locale)));
  });

  lines.push(renderFaq(locale));
  lines.push(`<details><summary>${copy.development}</summary>`);
  lines.push("");
  lines.push("```bash");
  lines.push("npm ci");
  lines.push("npm run generate");
  lines.push("npx tsc --noEmit");
  lines.push("```");
  lines.push("");
  lines.push("</details>");
  lines.push("");
  lines.push(renderMoreTools(locale));
  lines.push(renderHeading("license", `📄 ${t("license", locale)}`));
  lines.push("");
  lines.push("[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)");
  lines.push("");
  lines.push(`> ${t("copyright", locale)}`);
  lines.push("");
  lines.push(`> ${t("autoGenerated", locale)} ${now}.`);
  lines.push("");

  return lines.join("\n");
}
