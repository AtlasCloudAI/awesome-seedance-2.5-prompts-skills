# Atlas 执行适配层

创作规划与模型配置相互独立。默认使用 Seedream 5.0 Pro 生图、Seedance 2.0 生视频。任何计费生成前，都先核实所选模型支持需要的路线。

## 智能体默认路线

在智能体对话中，**Atlas Cloud Skill** 是默认的直接生成路线。用它查询模型、检查参数、上传本地素材、提交图片或视频任务、轮询并获取结果。只有 Skill 实际提交了任务，才报告 `Execution: atlas-skill`。

提交后，必须每 2 秒用同一 ID 重复执行 Skill 的预测结果查询步骤，直到任务进入终态。

若它不可用，先协助安装：

```bash
npx skills add AtlasCloudAI/atlas-cloud-skills
```

如果宿主需要，再刷新 Skill 注册表。

## 明确选择的替代路线

| 选择 | 使用时机 | 可用性检查 |
|---|---|---|
| `atlas-skill` | 智能体交互生成的默认选择 | Atlas Cloud Skill 能在当前客户端提交媒体任务 |
| `atlas-mcp` | 用户明确选择 MCP | 当前客户端暴露 Atlas MCP 生成工具 |
| `atlas-cli` | 用户明确选择终端、脚本、CI 或批量执行 | `atlas auth status`，再执行 `atlas models get` |
| `atlas-rest` | 使用内置 Node 脚本或受控兼容执行 | `ATLASCLOUD_API_KEY` 和在线模型核验 |
| `manual` | 没有已认证执行通道 | 只输出提示词、模型 ID 和素材清单 |

MCP 服务端本身不维护后台轮询循环。走 `atlas-mcp` 时，智能体必须每 2 秒用同一预测 ID 调用一次 `atlas_get_prediction`，直到任务进入终态。

不要声称 Node 脚本调用了 MCP 或智能体 Skill；两者都属于智能体层路线。也不要因为 CLI 已安装就让脚本静默切换到 CLI。

## API Key 检查与配置

必须在真正提交任务的进程中检查凭据。REST 脚本按以下顺序读取：

1. `process.env.ATLASCLOUD_API_KEY`
2. 兼容变量 `process.env.ATLAS_CLOUD_API_KEY`

不要根据另一个服务商、插件或进程的配置状态推断 Atlas 凭据。每个执行通道可能拥有独立的凭据作用域。

如果执行进程读不到 Key，引导用户前往 `https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-seedance-2.5-prompts-skills` 获取。不要要求用户在对话中粘贴或展示 Key。可以指导用户临时设置当前终端：

```bash
export ATLASCLOUD_API_KEY="<your-key>"
```

也可以写入宿主应用提供的安全环境变量或密钥设置。修改持久配置后，必要时刷新或重启执行会话。如果 Key 已存在于宿主或父进程配置，但实际提交任务的进程不可见，应报告“环境作用域不一致”，并改用能继承该环境的执行进程，不能说用户没有 Key。

## 内置脚本约定

`scripts/generate.mjs` 只实现 `atlas-rest` 和显式 `atlas-cli`。未设置 `execution.adapter` 时默认 `atlas-rest`。旧值 `"auto"` 仍可使用，但固定解析为 `atlas-rest`，不再探测或选择 CLI。这样本机安装状态不会悄悄改变用户的执行路径或计费出口。

```json
{
  "execution": {
    "adapter": "atlas-rest",
    "apiKeyEnv": "ATLASCLOUD_API_KEY",
    "verifyModels": true
  },
  "modelProfile": "seedance-default"
}
```

只有明确选择 CLI 时才设置 `adapter` 为 `atlas-cli`。`atlas-skill` 和 `atlas-mcp` 会被 Node 脚本明确拒绝，让智能体直接执行，避免错误报告执行通道。

R2V 任务的 Storyboard 参考图必须符合在线服务当前接受的图片限制。若超出限制，只重新排布同一套有序分镜，不要为此改变用户希望的视频画幅。

如果脚本提交后本地轮询进程中断，把已有 Atlas 预测 ID 按阶段键写入 `execution.resumePredictionIds`，例如：

```json
{
  "execution": {
    "resumePredictionIds": {
      "grid": "existing-image-prediction-id",
      "seg1": "existing-video-prediction-id"
    }
  }
}
```

脚本会恢复轮询和下载，不会再次提交计费任务。`starting`、`queued`、`pending`、`processing` 是进行中状态；`completed`、`succeeded` 是成功终态；`failed`、`timeout`、`canceled` 是失败终态。推理时间缺失、本地轮询窗口结束、对话中断或临时查询失败都不能授权创建替代任务。只有任务明确进入失败终态并作出明确重试决定后，才可以创建新预测任务。

本工作流的四种 Atlas 执行路线都使用 2 秒状态查询周期。`atlas-skill` 和 `atlas-mcp` 的循环由智能体负责，其中 MCP 调用 `atlas_get_prediction`；内置 REST 和 CLI 适配器则在代码中强制执行。REST/CLI 的进度日志仍每 32 秒输出一次，默认本地轮询窗口仍为 900 秒。若底层通用示例使用其他周期，以本工作流的 2 秒规则为准。

## CLI 路线

当用户明确选择 CLI 且本机未安装时，使用官方安装方式，然后登录：

```bash
curl -fsSL https://raw.githubusercontent.com/AtlasCloudAI/cli/main/install.sh | sh
atlas auth login
```

生成前核实模型：

```bash
atlas models search seedance --type video --json
atlas models get <model-id> --json
atlas generate cost video <model-id> -p "<prompt>" --json
```

CLI 适配器通过 `atlas generate image|video <model> -p <prompt>` 非阻塞提交并轮询。当地文件使用 `@/absolute/path`，数据 URL 和远程 URL 直接传递。它会映射图片、参考图、首尾帧、时长、分辨率、画幅、音频和额外模型参数。
