---
title: Claude Code 入门指南：从工具到工作流的 AI 编程新范式
published: 2026-03-26
description: 不只是聊天：Claude Code + Superpowers 打造你的 AI 开发工作流
image: ./images/firefly1.avif
tags: [ClaudeCode， Agent, Codex]
category: AI编程
draft: false
---
# Claude Code 入门指南：从工具到工作流的 AI 编程新范式

> 不只是聊天：Claude Code + Superpowers 打造你的 AI 开发工作流

---

## 开篇：AI 编程助手的进化

如果你是一名开发者，过去几年你可能经历了这样的心路历程：

**2021 年，GitHub Copilot** 横空出世，代码补全突然变得智能了。你在 VS Code 里敲几个字符，它就能猜出你想写什么。但它的能力仅限于此——只能"帮你写一行"。

**2022 年，ChatGPT** 爆发。你可以在对话框里问它任何编程问题，它会给你代码片段。但每次你都得手动复制粘贴到编辑器里，它无法真正操作你的代码库。

**2023-2025 年，Cursor** 快速进化，从最初的 IDE 集成发展为一个功能强大的 AI 编程平台：

- **Agent 模式**：支持自主执行多步骤任务
- **Background Agents**：后台自动处理任务
- **MCP 支持**：连接外部工具和数据源
- **YOLO 模式**：自动执行，减少确认步骤
- **Composer**：跨文件编辑和重构

**2024-2025 年，Claude Code** 和 **Codex CLI** 代表了另一种路径——**终端原生的 Agent 式编程**。

### 当前格局：两条并行的发展路线

今天，AI 编程工具已经分化为两种主要形态：

| 维度                 | IDE 集成型（Cursor）     | 终端原生型（Claude Code）      |
| -------------------- | ------------------------ | ------------------------------ |
| **运行环境**   | VS Code 改造版 IDE       | 命令行终端                     |
| **交互方式**   | 图形界面 + 对话框        | 纯文本对话                     |
| **上下文**     | 可视化代码、文件树       | 文本输出、命令行工具           |
| **工作流集成** | IDE 生态（插件、调试器） | Shell 生态（git、npm、docker） |
| **自动化程度** | 高（Agent 模式、YOLO）   | 高（自主执行、计划模式）       |
| **适合场景**   | 可视化开发、调试         | 自动化脚本、CI/CD、服务器开发  |

### 核心差异：不是能力高低，而是工作方式不同

**两者都已经具备 Agent 能力**，都能自主规划、执行、验证任务。真正的区别在于：

**Cursor**：

- ✅ 可视化上下文，直观看到代码变更
- ✅ 深度 IDE 集成，调试、断点、预览一体化
- ✅ 学习曲线平缓，对新手友好
- ⚠️ 依赖图形界面，服务器/远程环境不便
- ⚠️ 封闭生态，定制化能力有限

**Claude Code**：

- ✅ 终端原生，服务器、CI/CD、远程开发无缝衔接
- ✅ 可编程性强，易于集成到自动化流程
- ✅ 丰富的扩展生态（MCP、Skills、SubAgents）
- ⚠️ 学习曲线较陡，需要熟悉命令行
- ⚠️ 纯文本交互，复杂上下文理解成本高

### 选择建议

| 你的情况                          | 推荐                                   |
| --------------------------------- | -------------------------------------- |
| 日常前端/全栈开发，需要可视化调试 | Cursor                                 |
| 服务器开发、DevOps、自动化脚本    | Claude Code                            |
| 两者都有需求                      | **同时使用**（很多开发者这样做） |
| 刚接触 AI 编程工具                | Cursor（更容易上手）                   |
| 熟悉终端，追求自动化              | Claude Code                            |

> 💡 **现实是**：很多开发者同时使用两者。用 Cursor 做日常编码和调试，用 Claude Code 处理服务器任务、自动化流程、以及需要深度定制工作流的场景。

---

## 一、Claude Code 是什么？

### 1.1 官方定义

Claude Code 是 Anthropic 官方推出的终端原生 AI 编程助手。它基于 Claude 模型（Opus 4.6 和 Sonnet 4.6），可以直接在你的命令行中运行，操作你的本地文件和代码库。

**核心能力**：

- **读取、编辑、创建文件**——它可以像你一样操作项目中的任何文件
- **执行终端命令**——它可以运行测试、安装依赖、执行构建
- **理解整个项目上下文**——它会索引你的整个项目，理解文件之间的关系
- **多步骤任务自主规划**——给定一个目标，它能自己拆解并执行

### 1.2 与 Cursor 的定位差异

**不是"谁更好"，而是"谁更适合你的场景"**：

**选择 Cursor 的场景**：

- 日常 Web 开发，需要频繁预览和调试
- 团队协作，需要可视化 Code Review
- 前端开发，需要实时看到 UI 变化
- 新手入门，希望低学习成本

**选择 Claude Code 的场景**：

- 服务器端开发、后端 API
- DevOps、自动化脚本、CI/CD
- 需要深度定制工作流（MCP、Skills、SubAgents）
- 远程开发、SSH 环境
- 已有成熟的终端工作流

**两者共用的场景**：

- 复杂的多文件重构
- 代码库迁移
- 添加新功能

### 1.3 适用人群

Claude Code 特别适合以下开发者：

- **熟悉命令行的开发者**——如果你习惯在终端工作，Claude Code 会让你感觉如鱼得水
- **需要处理复杂多文件任务**——重构、添加新功能、迁移代码库
- **追求自动化和可定制性**——Claude Code 的扩展生态（MCP、Skills、SubAgents）提供了强大的定制能力
- **后端/DevOps 开发者**——服务器环境、自动化脚本、CI/CD 流程

**可能不太适合**：

- 完全不习惯命令行操作的开发者（建议先用 Cursor）
- 只需要简单的代码补全的场景（Copilot 足够）
- 项目极其敏感、不允许任何 AI 工具接触代码库的情况

---

## 二、安装与基础配置

### 2.1 系统要求

在安装之前，请确保你具备以下条件：

- **操作系统**——macOS 10.15+、Ubuntu 20.04+/Debian 10+、或 Windows 10+（需要 WSL 1/2 或 Git for Windows）
- **硬件**——4GB+ 内存
- **软件**——[Node.js 18+](https://nodejs.org/en/download)
- **网络**——需要互联网连接进行认证和 AI 处理
- **Shell**——推荐使用 Bash、Zsh 或 Fish
- **地区**——需要在 [Anthropic 支持的国家/地区](https://www.anthropic.com/supported-countries)
- **ripgrep**——通常已包含在 Claude Code 中

### 2.2 安装方式

**方式一：Native 安装（推荐）**

这是官方推荐的安装方式，支持自动后台更新：

**macOS / Linux / WSL：**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell：**

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Windows CMD：**

```batch
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

> ⚠️ **Windows 用户注意**：需要先安装 [Git for Windows](https://git-scm.com/downloads/win)。

> 💡 **提示**：Native 安装会自动在后台更新，保持最新版本。

**方式二：包管理器安装**

**Homebrew（macOS, Linux）：**

```bash
brew install --cask claude-code
```

> ⚠️ **注意**：Homebrew 安装**不会自动更新**，需要定期运行 `brew upgrade claude-code`。

**WinGet（Windows）：**

```powershell
winget install Anthropic.ClaudeCode
```

> ⚠️ **注意**：WinGet 安装**不会自动更新**，需要定期运行 `winget upgrade Anthropic.ClaudeCode`。

**方式三：npm 安装**

```bash
npm install -g @anthropic-ai/claude-code
```

> ⚠️ **注意**：不要使用 `sudo npm install -g`，这可能导致权限问题和安全风险。

> 💡 **提示**：安装完成后运行 `claude doctor` 检查安装类型和版本。

### 2.3 Windows 设置

**选项一：在 WSL 中使用**

WSL 1 和 WSL 2 都支持。

**选项二：在原生 Windows 上使用（需要 Git Bash）**

需要安装 [Git for Windows](https://git-scm.com/downloads/win)。如果是便携式 Git 安装，需要指定 `bash.exe` 路径：

```powershell
$env:CLAUDE_CODE_GIT_BASH_PATH="C:\Program Files\Git\bin\bash.exe"
```

### 2.4 验证安装

```bash
claude --version
claude doctor  # 检查安装类型和版本
```

### 2.5 认证方式

Claude Code 需要账户才能使用。首次运行 `claude` 命令时会提示登录：

```bash
claude
# 首次运行会提示你登录
```

支持的账户类型：

- **[Claude 订阅](https://claude.com/pricing)**（推荐）—— Pro 或 Max 计划，可在网页界面和 Claude Code 通用
- **[Anthropic Console](https://console.anthropic.com/)** —— API 访问，预付费余额模式

终端 CLI 和 VS Code 还支持**第三方提供商**（如 Amazon Bedrock、Google Vertex AI），详见[第三方集成](https://code.claude.com/docs/en/third-party-integrations)。

> 💡 **提示**：同一邮箱可以同时拥有两种账户类型。如需重新登录或切换账户，使用 `/login` 命令。

### 2.6 基础命令速查

| 命令                  | 作用                                  |
| --------------------- | ------------------------------------- |
| `claude`            | 启动交互模式                          |
| `claude "任务描述"` | 运行一次性任务                        |
| `claude -p "查询"`  | 运行一次性查询后退出                  |
| `claude -c`         | 继续最近的对话                        |
| `claude -r`         | 恢复之前的对话                        |
| `claude commit`     | 创建 Git 提交                         |
| `claude update`     | 手动更新 Claude Code                  |
| `claude doctor`     | 检查安装类型和版本                    |
| `/help`             | 会话内查看所有可用命令                |
| `/login`            | 登录或切换账户                        |
| `/clear`            | 清空对话上下文，重新开始              |
| `/plan`             | 进入计划模式——Claude 先规划后执行   |
| `/cost`             | 显示当前会话的 token 使用量和预估费用 |
| `/compact`          | 压缩对话历史，节省上下文空间          |

### 2.7 首次体验建议

安装完成后，进入你的项目目录启动 Claude Code：

```bash
cd ~/projects/my-app
claude
```

第一次启动时，Claude 会索引你的项目。然后尝试这样一个简单任务：

```
> 这个项目是做什么的？总结一下技术栈和文件夹结构。
```

Claude 会扫描你的文件，给你一个结构化的项目概览。

---

## 三、cc-switch：AI 编程工具的统一管理中心

### 3.1 为什么需要 cc-switch？

如果你同时使用多个 AI 编程 CLI 工具，你可能会遇到这些痛点：

- **配置分散**——Claude Code、Codex、Gemini CLI 各有不同的配置格式（JSON、TOML、.env）
- **切换麻烦**——换个 API 提供商要手动编辑配置文件
- **MCP 管理混乱**——不同工具的 MCP 服务器配置不统一
- **成本追踪困难**——不知道每个工具花了多少钱

**cc-switch** 就是为了解决这些问题而生的。

### 3.2 什么是 cc-switch？

cc-switch 是一个**跨平台桌面应用**（Windows、macOS、Linux），用 Tauri 2 构建，作为 Claude Code、Codex、Gemini CLI、OpenCode 和 OpenClaw 的统一管理中心。截至 2026 年 3 月，它在 GitHub 上拥有超过 **33,600 个 star**，是 AI 编程工具生态中最受欢迎的管理工具之一。

**核心功能**：

| 功能                             | 说明                                                    |
| -------------------------------- | ------------------------------------------------------- |
| **一个应用管理五个 CLI**   | Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw      |
| **50+ 提供商预设**         | AWS Bedrock、NVIDIA NIM、GLM、DeepSeek、Kimi 等一键导入 |
| **统一 MCP & Skills 管理** | 一个面板管理所有工具的 MCP 服务器和 Skills              |
| **系统托盘快速切换**       | 不打开主界面也能切换提供商                              |
| **云同步**                 | 通过 Dropbox、OneDrive、iCloud、WebDAV 同步配置         |
| **用量与成本追踪**         | 仪表盘显示花费、请求数、token 使用趋势                  |
| **会话管理器**             | 浏览、搜索、恢复所有工具的对话历史                      |

### 3.3 安装方式

**Windows**：

```bash
# 下载 MSI 安装包或便携版
# https://github.com/farion1231/cc-switch/releases
```

**macOS**（推荐 Homebrew）：

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

**Linux (Arch)**：

```bash
paru -S cc-switch-bin
```

**Linux (Ubuntu/Debian)**：

```bash
# 下载 .deb 或 .AppImage
# https://github.com/farion1231/cc-switch/releases
```

### 3.4 基本使用流程

**第一步：添加提供商**

点击"Add Provider"→ 选择预设（如 GLM、DeepSeek、Kimi）或创建自定义配置 → 粘贴 API Key。

**第二步：切换提供商**

- **主界面**：选择提供商 → 点击"Enable"
- **系统托盘**：直接点击提供商名称（即时生效）

**第三步：生效**

重启终端或对应的 CLI 工具。Claude Code 不需要重启即可生效。

**第四步：回到官方登录**

添加"Official Login"预设 → 重启 CLI 工具 → 按照其登录/OAuth 流程操作。

### 3.5 支持的 CLI 工具和提供商

**支持的 CLI 工具**：

- Claude Code
- Codex (OpenAI)
- Gemini CLI (Google)
- OpenCode
- OpenClaw

**内置提供商预设（部分）**：

- Claude 官方 API
- AWS Bedrock
- NVIDIA NIM
- GLM（智谱 AI）
- DeepSeek
- Kimi（Moonshot）
- 通义千问（阿里云）
- MiniMax
- 豆包/Seed（字节跳动）
- OpenRouter
- 更多...

### 3.6 高级功能

#### MCP、Prompts & Skills 统一管理

- **MCP 面板**：在一个地方管理 4 个应用的 MCP 服务器，支持双向同步和 Deep Link 导入
- **Prompts**：Markdown 编辑器，跨应用同步（CLAUDE.md / AGENTS.md / GEMINI.md）
- **Skills**：从 GitHub 仓库或 ZIP 文件一键安装，支持自定义仓库管理

#### 代理与故障转移

- 本地代理，支持热切换
- 自动故障转移、熔断器、提供商健康监控
- 应用级接管：独立代理 Claude、Codex 或 Gemini

#### 用量仪表盘

- 追踪花费、请求数、token 使用量
- 趋势图表、详细请求日志
- 自定义每模型定价

### 3.7 常见使用场景

**场景一：国内开发者使用 GLM/DeepSeek**

添加 GLM 或 DeepSeek 预设 → 粘贴 API Key → 点击 Enable → 立即生效。

**场景二：多工具统一管理**

你有 Claude Code 和 Codex 两个工具，想用同一个 GLM 账号。cc-switch 的 Universal providers 功能可以让一个配置同步到多个应用。

**场景三：成本追踪**

用量仪表盘帮你追踪每个工具、每个模型的花费，月底再也不用猜花了多少钱。

**场景四：MCP 服务器管理**

不用分别编辑每个工具的 MCP 配置文件，在 cc-switch 的 MCP 面板中一键管理。

### 3.8 与其他工具的对比

| 方面                 | cc-switch    | ccm (CLI)        | 手动编辑配置 |
| -------------------- | ------------ | ---------------- | ------------ |
| **界面**       | GUI 桌面应用 | 命令行           | 文本编辑器   |
| **支持工具数** | 5 个         | 主要 Claude Code | 任意         |
| **提供商预设** | 50+          | 多个             | 无           |
| **MCP 管理**   | 统一面板     | 无               | 手动         |
| **用量追踪**   | 有           | 无               | 无           |
| **云同步**     | 有           | 无               | 手动         |
| **适合人群**   | 所有用户     | 终端爱好者       | 高级用户     |

---

## 四、MCP 服务器：无限扩展可能

### 4.1 什么是 MCP？

MCP（Model Context Protocol）是一个开放协议，让 Claude Code 能够连接外部工具和数据源。可以把 MCP 服务器理解为 Claude Code 的"插件系统"——每个 MCP 服务器为 Claude 提供一套新的能力。

MCP 的关键特性：

- **客户端无关**——同一个 MCP 服务器可以在 Claude Code、Cursor、Windsurf、VS Code 中使用
- **本地或远程运行**——支持 stdio、HTTP、SSE 多种传输方式
- **可组合**——你可以同时启用多个 MCP 服务器
- **OAuth 认证**——云端服务支持安全的 OAuth 2.0 认证

### 4.2 安装 MCP 服务器

Claude Code 提供了三种安装方式：

**方式一：HTTP 服务器（推荐用于云服务）**

```bash
# 基本语法
claude mcp add --transport http <name> <url>

# 示例：连接 Notion
claude mcp add --transport http notion https://mcp.notion.com/mcp

# 示例：连接 Sentry
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp
```

**方式二：SSE 服务器**

```bash
# 基本语法
claude mcp add --transport sse <name> <url>

# 示例：连接 Asana
claude mcp add --transport sse asana https://mcp.asana.com/sse
```

**方式三：Stdio 服务器（本地运行）**

```bash
# 基本语法
claude mcp add --transport stdio <name> -- <command>

# 示例：添加 Airtable 服务器
claude mcp add --transport stdio airtable --env AIRTABLE_API_KEY=YOUR_KEY \
  -- npx -y airtable-mcp-server
```

> ⚠️ **Windows 用户注意**：在原生 Windows（非 WSL）上，使用 npx 的本地 MCP 服务器需要 `cmd /c` 包装器：
>
> ```bash
> claude mcp add --transport stdio my-server -- cmd /c npx -y @some/package
> ```

### 4.3 管理和认证

**管理命令**：

```bash
# 列出所有已配置的服务器
claude mcp list

# 获取特定服务器详情
claude mcp get github

# 移除服务器
claude mcp remove github
```

**OAuth 认证**（用于需要登录的云服务）：

```bash
# 在 Claude Code 会话中
> /mcp
# 选择需要认证的服务器，按提示完成 OAuth 流程
```

### 4.4 MCP 作用域

MCP 服务器可以在三个层级配置：

| 作用域            | 存储位置             | 适用场景               |
| ----------------- | -------------------- | ---------------------- |
| **local**   | 项目用户设置（默认） | 个人实验配置、敏感凭据 |
| **project** | `.mcp.json` 文件   | 团队共享、项目特定工具 |
| **user**    | 用户全局设置         | 跨项目使用的个人工具   |

```bash
# 添加项目作用域服务器（共享给团队）
claude mcp add --transport http github --scope project https://api.githubcopilot.com/mcp/
```

### 4.5 热门 MCP 服务器推荐

#### 开发与测试工具

| 服务器             | 功能                   | 安装命令                                                                       |
| ------------------ | ---------------------- | ------------------------------------------------------------------------------ |
| **GitHub**   | 操作仓库、PR、Issue    | `claude mcp add --transport http github https://api.githubcopilot.com/mcp/`  |
| **Sentry**   | 错误监控、调试生产问题 | `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`          |
| **Figma**    | 获取设计上下文         | `claude mcp add --transport http figma-remote-mcp https://mcp.figma.com/mcp` |
| **Context7** | 获取最新库文档         | 见官方文档                                                                     |

#### 项目管理

| 服务器              | 功能                 | 安装命令                                                                      |
| ------------------- | -------------------- | ----------------------------------------------------------------------------- |
| **Notion**    | 读写文档、管理任务   | `claude mcp add --transport http notion https://mcp.notion.com/mcp`         |
| **Linear**    | Issue 追踪、项目管理 | `claude mcp add --transport http linear https://mcp.linear.app/mcp`         |
| **Atlassian** | Jira + Confluence    | `claude mcp add --transport sse atlassian https://mcp.atlassian.com/v1/sse` |
| **Asana**     | 项目追踪             | `claude mcp add --transport sse asana https://mcp.asana.com/sse`            |

#### 支付与商务

| 服务器           | 功能               | 安装命令                                                              |
| ---------------- | ------------------ | --------------------------------------------------------------------- |
| **Stripe** | 支付处理、订阅管理 | `claude mcp add --transport http stripe https://mcp.stripe.com`     |
| **PayPal** | 支付集成           | `claude mcp add --transport http paypal https://mcp.paypal.com/mcp` |

#### 基础设施

| 服务器               | 功能               | 安装命令                                                                        |
| -------------------- | ------------------ | ------------------------------------------------------------------------------- |
| **Vercel**     | 部署管理、日志分析 | `claude mcp add --transport http vercel https://mcp.vercel.com/`              |
| **Netlify**    | 网站部署管理       | `claude mcp add --transport http netlify https://netlify-mcp.netlify.app/mcp` |
| **Cloudflare** | 流量分析、安全设置 | 见官方文档                                                                      |

### 4.6 实用示例

**示例：使用 Sentry 调试生产问题**

```bash
# 1. 添加 Sentry MCP 服务器
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# 2. 在 Claude Code 中认证
> /mcp
# 选择 Sentry 完成认证

# 3. 调试问题
> 过去 24 小时最常见的错误是什么？
> 显示错误 ID abc123 的堆栈跟踪
> 哪个部署引入了这些新错误？
```

**示例：连接 GitHub 进行代码审查**

```bash
# 1. 添加 GitHub MCP
claude mcp add --transport http github https://api.githubcopilot.com/mcp/

# 2. 在 Claude Code 中
> 审查 PR #456 并提出改进建议
> 为我们刚发现的 bug 创建一个新 issue
> 显示所有分配给我的开放 PR
```

### 4.7 MCP 资源

如果你想探索更多 MCP 服务器：

- **[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)**——官方参考实现
- **[best-of-mcp-servers](https://github.com/tolkonepiu/best-of-mcp-servers)**——450+ MCP 服务器精选列表
- **[MCP Market](https://mcpmarket.com/leaderboards)**——按 GitHub star 排名的 MCP 服务器排行榜

---

## 五、Skills：封装专业知识，自动化工作流

### 5.1 什么是 Skills？

Skills（技能）是 Claude Code 的模块化能力扩展系统。每个 Skill 包含一个 `SKILL.md` 文件，其中包含 Claude 在特定场景下应该遵循的指令。

**Skills 与 Slash Commands 的关键区别**：

| 特性               | Skills                            | Slash Commands            |
| ------------------ | --------------------------------- | ------------------------- |
| **触发方式** | 模型自动判断（基于描述）          | 用户显式输入 `/command` |
| **使用场景** | Claude 识别到相关上下文时自动激活 | 用户主动调用特定功能      |
| **灵活性**   | 可以组合多个 Skills               | 一次只能执行一个命令      |

### 5.2 Skills 的存储位置

Skills 可以存储在三个位置：

| 位置                  | 路径                  | 适用场景                  |
| --------------------- | --------------------- | ------------------------- |
| **个人 Skills** | `~/.claude/skills/` | 个人工作流、实验性 Skills |
| **项目 Skills** | `.claude/skills/`   | 团队共享、项目特定工作流  |
| **插件 Skills** | 随插件安装            | 第三方分发的 Skills       |

项目 Skills 会通过 git 自动共享给团队成员。

### 5.3 创建一个 Skill

Skills 的核心是 `SKILL.md` 文件，使用 YAML frontmatter + Markdown 格式：

```yaml
---
name: Git Commit Messages
description: 生成清晰的 Git 提交信息。当用户需要写提交信息或审查暂存更改时使用。
---

# Git Commit Messages

## 指令

1. 运行 `git diff --staged` 查看更改
2. 我会建议一个提交信息，包含：
   - 50 字符以内的摘要
   - 详细的描述
   - 受影响的组件

## 最佳实践

- 使用现在时态
- 解释"做了什么"和"为什么"，而不是"怎么做"
```

**关键点**：`description` 字段至关重要——Claude 根据这个描述来判断何时使用你的 Skill。描述应该包含：

- Skill 做什么
- 什么时候应该使用
- 用户可能提到的关键词

### 5.4 Skill 目录结构

一个完整的 Skill 可以包含多个文件：

```
my-skill/
├── SKILL.md          # 必需：主指令文件
├── reference.md      # 可选：详细参考文档
├── examples.md       # 可选：使用示例
├── scripts/
│   └── helper.py     # 可选：辅助脚本
└── templates/
    └── template.txt  # 可选：模板文件
```

Claude 会根据需要按需加载这些文件（渐进式披露），不会一次性加载所有内容。

### 5.5 限制工具访问

使用 `allowed-tools` 字段可以限制 Skill 激活时 Claude 可用的工具：

```yaml
---
name: Code Reviewer
description: 审查代码最佳实践和潜在问题。用于代码审查、检查 PR 或分析代码质量。
allowed-tools: Read, Grep, Glob
---

# Code Reviewer

这个 Skill 提供只读的代码审查能力，不会修改任何文件。
```

这对于：

- 只读 Skills（不应该修改文件）
- 范围有限的 Skills（只做数据分析，不写文件）
- 安全敏感的工作流非常有用

### 5.6 安装 Skills

**方式一：通过插件市场**

```bash
# 添加插件市场
/plugin marketplace add <marketplace-url>

# 安装包含 Skills 的插件
/plugin install <plugin-name>@<marketplace-name>
```

**方式二：手动安装**

```bash
# 创建 Skill 目录
mkdir -p ~/.claude/skills/my-skill

# 创建 SKILL.md 文件
echo '---
name: My Skill
description: 描述这个 Skill 的功能和使用场景
---

# My Skill

这里是具体指令...
' > ~/.claude/skills/my-skill/SKILL.md
```

**方式三：从 GitHub 仓库安装**

直接克隆 Skills 仓库到 skills 目录：

```bash
git clone https://github.com/user/skill-repo.git ~/.claude/skills/skill-name
```

### 5.7 测试和调试 Skills

**测试 Skill**：

创建 Skill 后，问一个与你描述匹配的问题：

```
> 能帮我提取这个 PDF 中的文本吗？
```

如果 Skill 的描述包含"PDF"相关关键词，Claude 会自动激活该 Skill。

**调试技巧**：

1. **检查描述是否足够具体**：

   - ❌ 太模糊：`description: Helps with documents`
   - ✅ 具体：`description: 从 PDF 文件提取文本和表格，填写表单，合并文档。当处理 PDF 文件或用户提到 PDF、表单、文档提取时使用。`
2. **验证文件路径**：

   ```bash
   ls ~/.claude/skills/my-skill/SKILL.md
   ls .claude/skills/my-skill/SKILL.md
   ```
3. **检查 YAML 语法**：

   ```bash
   cat SKILL.md | head -n 10
   # 确保开头的 `---` 在第一行
   # 确保结束的 `---` 在 Markdown 内容之前
   ```
4. **使用调试模式**：

   ```bash
   claude --debug
   # 会显示 Skill 加载错误
   ```

### 5.8 与团队共享 Skills

**推荐方式**：通过插件分发

1. 创建包含 `skills/` 目录的插件
2. 添加到插件市场
3. 团队成员安装插件

**直接共享**：通过项目仓库

```bash
# 1. 在项目中创建 Skill
mkdir -p .claude/skills/team-skill
# 创建 SKILL.md

# 2. 提交到 git
git add .claude/skills/
git commit -m "Add team Skill for PDF processing"
git push

# 3. 团队成员拉取后自动可用
git pull
claude  # Skills 立即可用
```

### 5.9 热门 Skills 推荐

| Skill                              | 功能                     | 来源             |
| ---------------------------------- | ------------------------ | ---------------- |
| **superpowers:brainstorm**   | 苏格拉底式头脑风暴       | Superpowers 插件 |
| **superpowers:write-plan**   | 创建实现计划             | Superpowers 插件 |
| **superpowers:execute-plan** | 执行计划                 | Superpowers 插件 |
| **openspec-workflow**        | 规格驱动开发             | MCP Market       |
| **working-with-claude-code** | Claude Code 官方文档查询 | Superpowers 插件 |

### 5.10 Skills vs MCP vs Hooks vs CLI：如何选择？

Claude Code 提供了多种扩展机制，每种都有其适用场景。理解它们的 trade-off 是构建高效工作流的关键。

#### 快速对比

| 工具                   | 用途                       | 最佳场景                        | 学习曲线 |
| ---------------------- | -------------------------- | ------------------------------- | -------- |
| **Skills**       | 封装专业知识、工作流程指导 | 需要遵循特定开发规范、最佳实践  | 低       |
| **MCP**          | 连接外部工具和数据源       | 需要访问数据库、API、第三方服务 | 中       |
| **Hooks**        | 自动化操作、触发器         | 需要在特定事件前后执行脚本      | 低       |
| **CLI Commands** | 直接执行系统命令           | 一次性操作、简单任务            | 无       |

#### 详细 Trade-off 分析

##### Skills：知识封装

| 优点                      | 缺点                                 |
| ------------------------- | ------------------------------------ |
| ✅ 自动触发，无需手动调用 | ❌ 触发依赖描述匹配，可能漏触发      |
| ✅ 可组合多个 Skills      | ❌ 调试困难，不知道哪个 Skill 被激活 |
| ✅ 通过 git 轻松共享      | ❌ 只能指导行为，不能执行实际操作    |
| ✅ 渐进式披露，按需加载   | ❌ 无法访问外部系统                  |

**适合**：编码规范、代码审查清单、项目特定的工作流程

**不适合**：需要实际执行操作、访问外部 API 的场景

##### MCP 服务器：工具连接

| 优点                                            | 缺点                                 |
| ----------------------------------------------- | ------------------------------------ |
| ✅ 可以执行实际操作（读写数据库、调用 API）     | ❌ 配置相对复杂                      |
| ✅ 跨客户端复用（Claude Code、Cursor、VS Code） | ❌ 需要维护认证凭据                  |
| ✅ 丰富的生态系统（450+ 服务器）                | ❌ 本地 MCP 可能影响启动速度         |
| ✅ 支持 OAuth 安全认证                          | ❌ 每个 MCP 独立运行，可能有性能开销 |

**适合**：访问 GitHub、Notion、数据库、云服务等外部系统

**不适合**：纯指导性的工作流程、不需要外部访问的场景

##### Hooks：事件驱动自动化

| 优点                       | 缺点                        |
| -------------------------- | --------------------------- |
| ✅ 在特定事件自动触发      | ❌ 只能在预定义的事件点触发 |
| ✅ 可以执行任意 shell 脚本 | ❌ 脚本错误不会阻止主流程   |
| ✅ 轻量级，几乎无开销      | ❌ 调试困难，日志分散       |
| ✅ 可以链式触发多个操作    | ❌ 可能产生意外的副作用     |

**适合**：自动格式化、提交后操作、会话开始/结束时的初始化/清理

**不适合**：需要 AI 判断决策的场景

##### CLI Commands（原生命令）

| 优点                    | 缺点                        |
| ----------------------- | --------------------------- |
| ✅ 即时执行，无需配置   | ❌ 每次都需要手动触发       |
| ✅ 完全控制，行为可预测 | ❌ 无法利用 AI 的上下文理解 |
| ✅ 无额外依赖           | ❌ 重复性任务效率低         |
| ✅ 适合一次性操作       | ❌ 无法封装复杂逻辑         |

**适合**：简单的一次性操作、需要精确控制的场景

#### 决策矩阵

```
                    需要外部访问？
                         │
            ┌────────────┴────────────┐
           是                          否
            │                          │
     使用 MCP               需要自动触发？
            │                    ┌─────┴─────┐
            │                   是           否
            │                    │           │
            │              使用 Hooks   使用 Skills
            │              或 CLI
            │
     数据源还是服务？
     ┌──────┴──────┐
    数据           服务
     │             │
  数据库类       API 类
  (PostgreSQL,   (GitHub,
   SQLite)        Notion)
```

#### 组合使用示例

**场景一：代码提交工作流**

```
1. Skill 指导如何写提交信息
2. Claude 使用 CLI 执行 git add
3. MCP 连接 GitHub 创建 PR
4. Hook 在提交后自动运行 lint 和测试
```

**场景二：数据库操作**

```
1. Skill 定义数据库操作规范（命名、索引策略）
2. MCP 连接 PostgreSQL 执行查询
3. Hook 在文件保存后验证 SQL 语法
```

**场景三：文档生成**

```
1. Skill 定义文档格式和结构
2. MCP 读取 Notion 中的需求
3. CLI 生成 Markdown 文件
4. Hook 在文件创建后自动提交
```

#### 性能与成本考量

| 因素                 | Skills                | MCP                        | Hooks | CLI |
| -------------------- | --------------------- | -------------------------- | ----- | --- |
| **启动延迟**   | 几乎无                | 100ms-2s（取决于服务器）   | 无    | 无  |
| **Token 消耗** | 中（加载 Skill 内容） | 低（只传递结果）           | 无    | 无  |
| **内存占用**   | 低                    | 中-高（每个 MCP 独立进程） | 低    | 低  |
| **维护成本**   | 低（纯文本）          | 中（需要维护连接）         | 低    | 无  |

#### 推荐配置数量

| 工具       | 推荐数量 | 过多的后果           |
| ---------- | -------- | -------------------- |
| Skills     | 5-15 个  | 上下文膨胀，触发冲突 |
| MCP 服务器 | 3-8 个   | 启动慢，资源占用高   |
| Hooks      | 3-10 个  | 难以追踪副作用       |

> 💡 **最佳实践**：从一个 MCP（如 GitHub）和一个 Skill（项目规范）开始，根据需要逐步添加。

---

## 六、SubAgents 与 Agent Teams：并行执行的两种模式

Claude Code 提供了两种并行化工作的机制：**SubAgents（子代理）** 和 **Agent Teams（代理团队）**。它们都能让多个 AI 实例同时工作，但适用场景和运作方式不同。

### 6.1 什么是 SubAgent？

SubAgent 是主 Claude 实例生成的独立 AI 助手，专门处理特定类型的任务。每个 SubAgent：

- 拥有**独立的上下文窗口**，不会污染主对话
- 可以配置**特定的工具权限**
- 包含**自定义系统提示词**指导其行为
- 完成任务后返回结果摘要

```
┌─────────────────────────────────────────┐
│           Main Claude Session           │
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │SubAgent │ │SubAgent │ │SubAgent │   │
│  │   #1    │ │   #2    │ │   #3    │   │
│  │(代码审查)│ │(测试运行)│ │(文档生成)│   │
│  └────┬────┘ └────┬────┘ └────┬────┘   │
│       │           │           │         │
│       └───────────┴───────────┘         │
│                   │                     │
│           返回结果摘要                    │
└─────────────────────────────────────────┘
```

### 6.2 内置 SubAgents

Claude Code 自带几个内置 SubAgent，Claude 会自动在适当时机使用：

| SubAgent                  | 模型          | 工具     | 用途                                                       |
| ------------------------- | ------------- | -------- | ---------------------------------------------------------- |
| **Explore**         | Haiku（快速） | 只读工具 | 搜索和分析代码库，支持 quick/medium/very thorough 三种深度 |
| **Plan**            | 继承主会话    | 只读工具 | 在 plan 模式下收集上下文                                   |
| **general-purpose** | 继承主会话    | 所有工具 | 需要探索和修改的复杂任务                                   |

### 6.3 创建自定义 SubAgent

**方式一：使用 `/agents` 命令（推荐）**

```
/agents
# 选择 "Create New Agent"
# 选择 "Personal"（用户级）或 "Project"（项目级）
# 使用 Claude 生成或手动编写
# 选择允许的工具
# 选择模型
# 保存
```

**方式二：手动创建文件**

SubAgent 是带有 YAML frontmatter 的 Markdown 文件：

```markdown
---
name: code-reviewer
description: 代码审查专家。在编写或修改代码后主动审查质量、安全性和可维护性。
tools: Read, Grep, Glob, Bash
model: inherit
---

你是资深代码审查专家，确保高质量的代码标准。

审查清单：
- 代码简洁可读
- 函数和变量命名清晰
- 无重复代码
- 适当的错误处理
- 无暴露的密钥或 API Key
- 输入验证已实现

反馈按优先级组织：
- 关键问题（必须修复）
- 警告（应该修复）
- 建议（考虑改进）
```

### 6.4 SubAgent 配置字段

| 字段                | 必需 | 说明                                                                       |
| ------------------- | ---- | -------------------------------------------------------------------------- |
| `name`            | 是   | 唯一标识符，小写字母和连字符                                               |
| `description`     | 是   | Claude 用这个判断何时委派任务                                              |
| `tools`           | 否   | 允许的工具列表。省略则继承所有工具                                         |
| `disallowedTools` | 否   | 禁用的工具列表                                                             |
| `model`           | 否   | `sonnet`、`opus`、`haiku` 或 `inherit`（默认）                     |
| `permissionMode`  | 否   | `default`、`acceptEdits`、`dontAsk`、`bypassPermissions`、`plan` |
| `memory`          | 否   | `user`、`project` 或 `local`——启用跨会话学习                       |
| `skills`          | 否   | 预加载的 Skills                                                            |
| `mcpServers`      | 否   | 专属于此 SubAgent 的 MCP 服务器                                            |
| `hooks`           | 否   | 生命周期钩子                                                               |
| `isolation`       | 否   | `worktree`——在隔离的 git worktree 中运行                               |

### 6.5 什么是 AgentTeam？

AgentTeam 是一种更高级的并行协调机制，允许多个 Claude Code 实例作为一个**团队**协同工作。与 SubAgent 不同：

- 有一个 **Team Lead（团队领导）**负责协调
- 使用**共享的 TaskList**分配和追踪任务
- 队友之间可以**直接通信**，不必须通过 Team Lead
- 你可以直接与任何队友交互

```
┌─────────────────────────────────────────────────────┐
│                    Team Lead                         │
│         (协调任务、分配工作、综合结果)                  │
│                                                     │
│   TaskList (共享任务列表)                             │
│   ┌─────────────────────────────────────┐           │
│   │ [ ] 任务1: 分析前端组件              │           │
│   │ [ ] 任务2: 审查后端 API              │           │
│   │ [ ] 任务3: 检查数据库层              │           │
│   │ [ ] 任务4: 生成测试用例              │           │
│   └─────────────────────────────────────┘           │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │Teammate 1│  │Teammate 2│  │Teammate 3│          │
│  │ 认领任务1 │  │ 认领任务2 │  │ 认领任务3 │          │
│  │   和 4   │  │          │  │          │          │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘          │
│       │             │             │                 │
│       └─────────────┴─────────────┘                 │
│                     │                               │
│            队友间直接通信                             │
└─────────────────────────────────────────────────────┘
```

> ⚠️ **注意**：Agent Teams 是实验性功能，需要在 `settings.json` 中设置 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS: "1"` 启用。

### 6.6 SubAgent vs AgentTeam：如何选择？

| 方面                 | SubAgent                 | AgentTeam                        |
| -------------------- | ------------------------ | -------------------------------- |
| **上下文**     | 独立窗口，结果返回调用者 | 独立窗口，完全独立               |
| **通信方式**   | 只能向主代理报告结果     | 队友之间可以直接通信             |
| **协调方式**   | 主代理管理所有工作       | 共享 TaskList 自我协调           |
| **最佳场景**   | 只关心结果的聚焦任务     | 需要讨论和协作的复杂工作         |
| **Token 消耗** | 较低：结果摘要回主上下文 | 较高：每个队友是独立 Claude 实例 |

**选择 SubAgent 的场景**：

- 任务是独立的，只需要最终结果
- 不需要代理间通信
- 想要控制成本

**选择 AgentTeam 的场景**：

- 队友需要分享发现、互相质疑
- 复杂工作需要讨论和协作
- 愿意接受更高的 token 成本以换取更好的协调

### 6.7 使用 SubAgent

#### 自动委派

Claude Code 会根据任务描述和 SubAgent 的 `description` 字段自动委派任务：

```
> 分析这 5 家竞争对手的市场定位，每家用一个独立的子代理
```

#### 显式请求

```
> 使用 code-reviewer 子代理检查我最近的代码变更
> 让 debugger 子代理调查这个错误
```

#### 创建自定义 SubAgent

**方式一：使用 `/agents` 命令（推荐）**

```
> /agents
# 选择 "Create New Agent"
# 描述你的子代理功能和触发条件
# 选择允许的工具
```

**方式二：手动创建文件**

在 `.claude/agents/` 目录创建 Markdown 文件：

```markdown
---
name: code-reviewer
description: 代码审查专家。在编写或修改代码后主动审查质量、安全性和可维护性。
tools: Read, Grep, Glob, Bash
model: inherit
---

你是资深代码审查专家，确保高质量的代码标准。

审查清单：
- 代码简洁可读
- 函数和变量命名清晰
- 无重复代码
- 适当的错误处理
- 无暴露的密钥或 API Key
- 输入验证已实现
- 良好的测试覆盖

反馈按优先级组织：
- 关键问题（必须修复）
- 警告（应该修复）
- 建议（考虑改进）
```

### 6.8 使用 AgentTeam

#### 启用 Agent Teams

Agent Teams 是实验性功能，需要先启用：

```json
// settings.json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

#### 创建团队

直接用自然语言描述任务和团队结构：

```
> 我在开发一个 CLI 工具，帮助开发者追踪代码中的 TODO 注释。
> 创建一个 AgentTeam 从不同角度探索：
> - 一个队友负责 UX
> - 一个队友负责技术架构
> - 一个队友扮演反对者
```

#### 显示模式

Agent Teams 支持两种显示模式：

| 模式                         | 说明                                         |
| ---------------------------- | -------------------------------------------- |
| **in-process**（默认） | 所有队友在主终端运行，用 Shift+Down 切换     |
| **tmux**               | 每个队友有独立的分屏窗格，可同时看到所有输出 |

```json
// settings.json
{
  "teammateMode": "tmux"  // 或 "in-process"
}
```

> ⚠️ **注意**：tmux 模式需要安装 [tmux](https://github.com/tmux/tmux/wiki)，在 macOS 上效果最好。

#### 团队工作流程

1. **Team Lead 分析任务**，拆解为子任务
2. **创建 TaskList**，列出所有待完成任务
3. **生成 Teammates**，每个认领任务
4. **并行执行**，队友间直接通信
5. **综合结果**，Team Lead 汇总报告

#### 与队友直接交互

- **in-process 模式**：Shift+Down 切换队友，直接输入消息
- **tmux 模式**：点击窗格直接与队友交互

#### 清理团队

工作完成后：

```
> 清理团队
```

### 6.9 实战示例

#### 并行代码审查

```
> 创建一个 AgentTeam 审查 PR #142。生成三个审查员：
> - 一个关注安全影响
> - 一个检查性能影响
> - 一个验证测试覆盖
>
> 让他们各自审查并报告发现。
```

#### 竞争假设调查

```
> 用户报告应用在发送一条消息后就断开了。
> 生成 5 个队友调查不同的假设。让他们互相交流，
> 试图推翻彼此的理论，像科学辩论一样。
> 用形成的共识更新发现文档。
```

### 6.10 实战技巧

#### SubAgent 最佳实践

1. **在描述中使用关键词**：如 "use PROACTIVELY"、"MUST BE USED" 提高自动触发率
2. **限制工具访问**：只授予必要的工具，提高安全性和专注度
3. **设计专注的 SubAgent**：单一职责，而非大而全
4. **版本控制**：将项目 SubAgent 提交到 git，让团队共享

#### AgentTeam 最佳实践

1. **任务粒度适中**：太大导致并行度低，太小增加协调开销
2. **明确的任务边界**：避免队友工作重叠
3. **使用共享上下文**：通过 TaskList 共享进度和发现
4. **设置超时**：避免某个队友卡住影响整体进度

### 6.11 并行化示例

**场景：分析 5 家竞争对手**

使用 SubAgent（推荐）：

```
> 并行研究这 5 家公司的市场定位，每家用一个独立的子代理：
> - Acme Corp
> - Beta Industries
> - Gamma Tech
> - Delta Solutions
> - Epsilon Labs
>
> 每个子代理应分析：市场地位、近期新闻、竞争优势。
> 完成后综合成对比矩阵。
```

**场景：大型代码库重构**

使用 AgentTeam（推荐）：

```
> 创建一个 AgentTeam 来重构这个项目的认证系统：
> - Teammate 1: 重构登录模块
> - Teammate 2: 重构权限检查
> - Teammate 3: 更新 API 端点
> - Teammate 4: 更新测试用例
>
> 确保所有变更保持 API 兼容性。
```

### 6.12 限制与注意事项

**SubAgent 限制**：

- 不能嵌套（SubAgent 不能再创建 SubAgent）
- 多个 SubAgent 的结果返回时可能消耗大量上下文
- 并行写入同一文件可能导致冲突

**AgentTeam 限制**（实验性功能）：

- **不支持会话恢复**：`/resume` 和 `/rewind` 不会恢复队友
- **任务状态可能滞后**：队友有时未能标记任务完成，阻塞依赖任务
- **关闭可能较慢**：队友需要完成当前请求才能关闭
- **一个团队/会话**：Lead 只能管理一个团队
- **无嵌套团队**：队友不能生成自己的团队
- **Lead 固定**：创建团队的会话是 Lead，不能转移领导权
- **分屏需要 tmux 或 iTerm2**：VS Code 终端、Windows Terminal 不支持

### 6.13 最佳实践总结

**SubAgent 最佳实践**：

1. **在描述中使用触发词**：如 "use PROACTIVELY"、"MUST BE USED" 提高自动触发率
2. **限制工具访问**：只授予必要的工具，提高安全性和专注度
3. **设计专注的 SubAgent**：单一职责，而非大而全
4. **版本控制**：将项目 SubAgent 提交到 git，让团队共享

**AgentTeam 最佳实践**：

1. **任务粒度适中**：太大并行度低，太小增加协调开销
2. **明确的任务边界**：避免队友工作重叠
3. **适当的团队规模**：3-5 个队友是大多数场景的最佳范围
4. **给队友足够的上下文**：在 spawn 提示中包含任务特定的详细信息
5. **从研究和审查开始**：如果刚开始使用 Agent Teams，先从不需要写代码的任务开始

---

## 七、Superpowers 工作流：从想法到代码的完整路径

### 7.1 为什么 AI 编程 Agent 需要"纪律"？

如果你直接让一个"裸"的 Claude Code 实例去处理一个复杂项目，结果往往是可预测的：

- 它会直接开始写代码，跳过设计
- 它不会写测试，或者测试写得很敷衍
- 它会把不同的职责混在一起
- 最终产出的代码脆弱，需要重写

**问题不在于模型的智能程度，而在于缺乏纪律。**

有经验的开发者都知道：软件质量不是来自于写代码的速度，而是来自于**流程**——需求澄清、任务拆解、先写测试再实现、代码审查、分支隔离。这些经过数十年软件工程实践沉淀下来的方法，恰恰是 AI Agent 在自由行动时会忽略的。

**Superpowers 就是来解决这个问题的。**

### 7.2 什么是 Superpowers？

Superpowers 是由 Jesse Vincent（GitHub ID: obra）创建的 Claude Code 技能框架和软件开发方法论。截至 2026 年 3 月，它在 GitHub 上拥有超过 93,000 个 star，是 Claude Code 生态中最受欢迎的插件。

Jesse Vincent 不是新手。他创建了 Request Tracker (RT)——一个被全球数千组织使用的开源工单系统；他曾担任 Perl 5 的"pumpking"（版本发布负责人）；他还是 Keyboardio 的联合创始人，设计和制造高端人体工学机械键盘。

他的背景解释了 Superpowers 的哲学：来自一个流程严谨、自动化测试和文档不可或缺的世界。当他开始密集使用 Claude Code 时，他很快发现了模型原始能力与实际代码质量之间的差距。他的回应是构建一套可组合的"技能"系统，把 Agent 变成一个结构化的开发团队。

**Superpowers 的核心原则很简单但很激进：与其让 Agent 更聪明，不如强制执行人类开发者花了几十年建立的纪律。**

### 7.3 核心工作流：七步完成一个开发周期

Superpowers 不是增强的提示词或孤立的指令集合，而是一个完整的软件开发生命周期工作流。关键词是"强制"——技能不是建议，而是必须遵守的规则。

#### 第一步：头脑风暴（Socratic Design）

当 Agent 检测到你要构建什么东西时，它不会急着写代码。它会后退一步，问你真正想做什么。通过苏格拉底式的问答过程，它：

- 澄清你的想法
- 识别边界情况
- 产出设计文档

这个文档会分段呈现，让你可以逐步验证，而不会一次被太多信息淹没。

```
> 我想给应用添加一个深色模式

Claude: 好的，在开始之前，我想先了解一些细节：
1. 深色模式应该自动跟随系统设置，还是让用户手动切换？
2. 用户的选择应该持久化吗？用什么方式存储？
3. 切换时需要动画过渡吗？
4. 有没有特定的颜色需要自定义？
```

#### 第二步：创建 Git Worktree

设计文档批准后，Superpowers 会自动在一个新分支上创建一个隔离的 Git worktree。

这个隔离是根本性的：它允许同一项目上的并行任务不会互相干扰。Agent 还会验证测试基线是干净的，然后再开始工作。

#### 第三步：编写实现计划

设计文档被拆解成 2-5 分钟的任务，每个任务包含：

- 精确的文件路径
- 完整的预期代码
- 验证步骤

计划写得足够详细，以至于"一个热情但没有判断力、没有项目上下文、讨厌测试的初级工程师"也能执行。这种措辞确保每个任务足够明确，不留解释空间。

```
## 实现计划

### 任务 1：创建主题 Context (预计 3 分钟)
文件：src/context/ThemeContext.tsx
代码：
- 创建 ThemeProvider 组件
- 定义 light/dark 两种主题状态
- 实现 toggle 函数
验证：TypeScript 编译通过

### 任务 2：添加 localStorage 持久化 (预计 2 分钟)
文件：src/context/ThemeContext.tsx
修改：
- 在 useEffect 中读取 localStorage
- 在切换主题时写入 localStorage
验证：刷新页面后主题保持
...
```

#### 第四步：子代理驱动开发

这是系统的核心。Superpowers 为每个任务启动一个全新的子代理，而不是在一个上下文中执行所有任务（这会导致长时间项目中的漂移）。

每个子代理经历两阶段审查：

1. **规范合规性审查**——确保代码符合设计文档
2. **代码质量审查**——检查代码风格和最佳实践

这个机制让 Claude 可以自主工作几个小时而不偏离计划。

#### 第五步：严格的测试驱动开发

Superpowers 强制执行 **RED-GREEN-REFACTOR** 循环，没有商量余地：

1. **RED**：必须先写一个失败的测试
2. **GREEN**：写最少的代码让测试通过
3. **REFACTOR**：在测试保护下重构代码

如果代码在失败测试存在之前就被写出，框架会删除它。这种激进的 TDD 方法消除了 AI 生成代码最常见的问题：完全没有测试覆盖。

```
# 错误的方式（会被拒绝）
Claude: 我先写实现代码...
Superpowers: 错误！没有失败的测试存在。代码已删除。

# 正确的方式
Claude: 首先我写一个测试，期望 toggleTheme 函数存在...
（测试运行 → 失败 ✓）
Claude: 现在我实现 toggleTheme 函数...
（测试运行 → 通过 ✓）
```

#### 第六步：自动化代码审查

每个任务之间会进行代码审查：

- 问题按严重程度分类
- 关键问题会阻塞进度
- Agent 在关键问题解决之前不能进入下一个任务

#### 第七步：分支最终化

所有任务完成后，Agent 会验证所有测试通过，然后提供四个选项：

1. **合并分支**——直接合并到主分支
2. **创建 GitHub PR**——创建拉取请求等待人工审查
3. **保留分支**——留着以后处理
4. **放弃一切**——丢弃所有改动

然后 worktree 会被清理。

### 7.4 有无 Superpowers 的对比

| 方面     | 普通 Claude Code         | Claude Code + Superpowers                 |
| -------- | ------------------------ | ----------------------------------------- |
| 起点     | 立即开始写代码           | 苏格拉底式头脑风暴和验证过的设计          |
| 计划     | 没有，或模糊的一次性计划 | 详细计划，2-5 分钟任务，精确文件路径      |
| 测试     | 事后写，通常不完整       | 严格 TDD：每行代码前都有失败测试          |
| 长上下文 | 逐渐漂移，忘记初始指令   | 每个任务用新子代理，无漂移                |
| 代码审查 | 没有                     | 每个任务后自动审查，关键问题阻塞          |
| 隔离     | 直接在主分支修改         | 隔离的 Git worktree，专用分支             |
| 自主性   | 10-15 分钟内工作良好     | 可以自主工作数小时                        |
| 产出     | 功能可用但脆弱的原型     | 生产级代码，有测试、审查、干净的 Git 历史 |

### 7.5 安装与设置

安装 Superpowers 只需要几秒钟：

```bash
# 添加 marketplace
/plugin marketplace add obra/superpowers-marketplace

# 安装 Superpowers
/plugin install superpowers@superpowers-marketplace
```

验证安装：

```
> /help
```

你应该能看到 Superpowers 的命令。三个主要命令是：

```
/superpowers:brainstorm     # 开始头脑风暴会话
/superpowers:write-plan     # 创建实现计划
/superpowers:execute-plan   # 用子代理执行计划
```

插件会通过 `/plugin update superpowers` 自动更新。

### 7.6 什么时候用 Superpowers？

**适合使用 Superpowers 的场景**：

- 新功能开发——需要设计、实现、测试完整流程
- 复杂重构——涉及多个文件和模块
- 需要高质量产出——生产环境代码、团队项目
- 长时间自主工作——让 Agent 独立工作数小时

**可能不需要 Superpowers 的场景**：

- 简单的 bug 修复——直接用普通模式或 `/plan` 就够了
- 快速原型探索——还在摸索方向，结构化流程会觉得重
- 一两个文件的简单修改——用原生功能更轻量

---

## 八、OpenSpec 工作流：规格驱动开发

### 8.1 什么是 OpenSpec？

OpenSpec 是一种**规格驱动开发（Spec-Driven Development, SDD）**工作流，由 Fission AI 团队开发。它的核心理念是：**将规划与执行分离**——在写代码之前，先创建详细的规格文档。

与 Superpowers 类似，OpenSpec 也强调纪律和流程，但它更侧重于**文档化的规格说明**，通过 Markdown 文件来驱动整个开发过程。

### 8.2 OpenSpec 的三阶段工作流

OpenSpec 通过三个核心阶段来指导 Claude Code 完成软件开发：

| 阶段               | 名称 | 说明                                   |
| ------------------ | ---- | -------------------------------------- |
| **Proposal** | 提案 | 创建 Markdown 规格文档，描述要构建什么 |
| **Apply**    | 应用 | Claude 根据规格实现代码                |
| **Archive**  | 归档 | 完成后归档变更，保留文档记录           |

### 8.3 为什么需要规格驱动？

AI 编程 Agent 有一个常见问题：**上下文丢失**。当任务变得复杂时，Agent 会：

- 忘记最初的需求
- 偏离设计方向
- 在长对话中逐渐"漂移"

OpenSpec 通过**将规格写入文件**来解决这个问题。规格文档成为"单一真实来源"，Agent 可以随时参考，确保实现与设计一致。

### 8.4 OpenSpec 目录结构

一个典型的 OpenSpec 项目结构：

```
project/
├── .specs/
│   ├── steering.md        # 项目指导原则
│   ├── features/          # 功能规格
│   │   ├── auth.md
│   │   └── dashboard.md
│   └── tasks/             # 任务列表
│       └── auth-tasks.md
├── design.md              # 设计文档
└── src/                   # 源代码
```

### 8.5 OpenSpec 与 Superpowers 的对比

| 方面               | Superpowers             | OpenSpec                 |
| ------------------ | ----------------------- | ------------------------ |
| **核心理念** | 强制执行 TDD 和代码审查 | 规格文档驱动开发         |
| **工作流**   | 七步完整开发周期        | 三阶段：提案→应用→归档 |
| **文档化**   | 设计文档 + 实现计划     | Markdown 规格文件        |
| **适用场景** | 复杂功能开发、重构      | 需要清晰文档记录的项目   |
| **学习曲线** | 较陡（完整方法论）      | 较平缓（三个命令）       |

### 8.6 如何选择？

- **选择 Superpowers**：如果你需要严格的 TDD 流程、子代理执行、自动代码审查
- **选择 OpenSpec**：如果你更看重文档化、规格清晰、团队协作
- **两者结合**：先使用 OpenSpec 创建规格，再用 Superpowers 执行实现

### 8.7 安装 OpenSpec

OpenSpec 可以作为 Claude Code Skill 安装：

```bash
# 通过 MCP Market 安装
# 或手动克隆到 skills 目录
git clone https://github.com/Fission-AI/OpenSpec.git ~/.claude/skills/openspec
```

安装后，可以使用以下命令：

```
/opspec:propose    # 创建提案
/opspec:apply      # 应用规格
/opspec:archive    # 归档变更
```

### 8.8 如何评估 AI 是否遵守规格？

使用规格驱动开发后，一个关键问题是：**AI 真的按规格实现了吗？** 这需要建立一套评估体系。

#### 评估指标体系

借鉴信息检索和机器学习领域的评估方法，我们可以用以下指标来衡量 AI 对规格的遵守程度：

| 指标              | 英文       | 定义                                | 计算公式                             |
| ----------------- | ---------- | ----------------------------------- | ------------------------------------ |
| **精确率**  | Precision  | AI 实现的功能中，符合规格的比例     | `符合规格的功能 / AI 实现的总功能` |
| **召回率**  | Recall     | 规格要求的功能中，AI 实际实现的比例 | `已实现的需求 / 规格中的总需求`    |
| **F1 分数** | F1 Score   | 精确率和召回率的调和平均            | `2 × (P × R) / (P + R)`          |
| **漂移率**  | Drift Rate | AI 偏离规格的程度                   | `偏离规格的决策 / 总决策数`        |
| **覆盖率**  | Coverage   | 规格被代码覆盖的比例                | `被测试覆盖的规格点 / 总规格点`    |

#### 实际评估方法

**方法一：人工审查（推荐用于关键项目）**

```
评估步骤：
1. 列出规格中的所有需求点（N 个）
2. 检查代码，标记每个需求是否实现（✓ / ✗）
3. 检查是否有多余的实现（规格未要求）
4. 计算 P/R/F1

示例：
- 规格要求：10 个功能
- AI 实现：12 个功能（10 个符合规格 + 2 个额外）
- 遗漏：1 个规格功能未实现

精确率 = 10/12 = 83.3%
召回率 = 9/10 = 90%
F1 = 2 × (0.833 × 0.9) / (0.833 + 0.9) = 86.5%
```

**方法二：自动化测试覆盖**

```bash
# 使用测试覆盖来间接评估规格遵守
npm test -- --coverage

# 将规格点映射到测试用例
# 每个规格需求至少有一个对应测试
```

**方法三：AI 辅助审查**

```
> 请对照 .specs/features/auth.md 规格文档，审查 src/auth/ 目录下的代码。
>
> 1. 列出规格中的每个需求点
> 2. 检查代码是否实现了该需求
> 3. 检查是否有代码超出了规格范围
> 4. 计算精确率和召回率
> 5. 标记任何偏离规格的决策
```

#### 常见偏差类型

| 偏差类型           | 描述               | 示例                                  |
| ------------------ | ------------------ | ------------------------------------- |
| **遗漏偏差** | 规格要求但未实现   | 规格要求"支持暗色模式"，代码未实现    |
| **幻觉偏差** | 规格未要求但实现了 | 规格未提及"记住密码"，AI 自动添加     |
| **理解偏差** | 理解与规格不符     | 规格说"可选字段"，AI 做成了必填       |
| **顺序偏差** | 功能顺序与规格不同 | 规格要求先验证后保存，AI 先保存后验证 |

#### 提高遵守率的技巧

1. **规格要具体**：避免模糊表述如"优化性能"，改用"页面加载时间 < 2s"
2. **显式边界**：明确说明"不需要做什么"，如"此版本不需要支持 IE"
3. **增量验证**：每完成一个规格点就验证，而非最后一次性检查
4. **使用检查清单**：将规格转化为可勾选的清单，让 AI 逐项确认

```
## 实现检查清单

- [ ] 用户可以用邮箱注册
- [ ] 用户可以用手机号注册
- [ ] 密码强度验证（≥8位，含数字和字母）
- [ ] 重复密码校验
- [ ] 注册成功后跳转到登录页
- [ ] 注册失败显示错误提示

> ❌ 不要实现：第三方登录、邮箱验证、手机验证码
```

#### 基准参考

根据社区实践，不同场景下的典型遵守率：

| 场景                 | 精确率 | 召回率 | 说明                     |
| -------------------- | ------ | ------ | ------------------------ |
| **简单功能**   | 90-95% | 95-99% | 需求明确，边界清晰       |
| **中等复杂度** | 80-90% | 85-95% | 需要一定的设计决策       |
| **复杂功能**   | 70-85% | 75-90% | 涉及多个模块、边界情况多 |
| **跨文件重构** | 60-80% | 70-85% | 上下文复杂，容易遗漏     |

> 💡 **经验法则**：如果召回率 < 80%，说明规格可能不够清晰或任务过于复杂，考虑拆分成更小的规格。

---

## 九、AI 编程工具横向对比：Claude Code vs Cursor vs Codex

### 9.1 三种工具的定位

| 工具                  | 开发者    | 运行环境              | 核心定位            |
| --------------------- | --------- | --------------------- | ------------------- |
| **Claude Code** | Anthropic | 终端                  | 终端原生的 AI Agent |
| **Cursor**      | Anysphere | IDE（VS Code 改造版） | 深度集成的 AI IDE   |
| **Codex CLI**   | OpenAI    | 终端 + VS Code        | 轻量级终端 Agent    |

### 9.2 功能对比矩阵

| 功能                     | Claude Code          | Cursor                  | Codex CLI |
| ------------------------ | -------------------- | ----------------------- | --------- |
| **Agent 自主执行** | ✅                   | ✅（Agent 模式）        | ✅        |
| **多文件编辑**     | ✅                   | ✅（Composer）          | ✅        |
| **后台任务**       | ✅（后台模式）       | ✅（Background Agents） | ✅        |
| **MCP 支持**       | ✅                   | ✅                      | ❌        |
| **子代理/并行**    | ✅（SubAgents）      | ✅                      | ✅        |
| **上下文窗口**     | 200K（Opus 1M）      | 依模型而定              | 较小      |
| **可视化调试**     | ❌                   | ✅                      | ❌        |
| **服务器/远程**    | ✅                   | ⚠️（需要图形界面）    | ✅        |
| **CI/CD 集成**     | ✅                   | ❌                      | ✅        |
| **扩展生态**       | MCP + Skills + Hooks | 插件系统                | 有限      |

### 9.3 价格与订阅

| 工具                  | 订阅方式                | 月费       | 免费额度 |
| --------------------- | ----------------------- | ---------- | -------- |
| **Claude Code** | Claude Pro/Max 或 API   | $20-200/月 | 有限免费 |
| **Cursor**      | Pro 或 Business         | $20-40/月  | 有限免费 |
| **Codex CLI**   | ChatGPT Plus/Pro 或 API | $20-200/月 | 有限免费 |

### 9.4 选择决策树

```
你的主要工作环境是什么？
│
├─ 图形界面 IDE
│   └─ 选择 Cursor
│       - 可视化调试
│       - 实时预览
│       - 低学习曲线
│
├─ 终端/命令行
│   ├─ 需要可视化调试？ ── 是 ── 考虑 Cursor
│   │
│   └─ 纯终端环境
│       ├─ 已有 ChatGPT Plus？ ── 是 ── Codex CLI
│       │
│       ├─ 已有 Claude Pro？ ── 是 ── Claude Code
│       │
│       └─ 都没有
│           ├─ 需要超长上下文？ ── 是 ── Claude Code
│           ├─ 需要丰富扩展生态？ ── 是 ── Claude Code
│           └─ 追求轻量简单？ ── 是 ── Codex CLI
│
└─ 服务器/远程开发
    └─ Claude Code 或 Codex CLI
```

### 9.5 实际使用建议

**场景一：全栈 Web 开发**

```
推荐：Cursor（主）+ Claude Code（辅）

- 用 Cursor 做日常编码、UI 调试
- 用 Claude Code 处理部署脚本、后端自动化
```

**场景二：后端/DevOps**

```
推荐：Claude Code（主）

- 终端原生，与服务器环境无缝衔接
- 丰富的自动化能力（MCP、Skills、Hooks）
- 可集成到 CI/CD 流程
```

**场景三：开源项目维护**

```
推荐：Claude Code

- 超长上下文分析大型代码库
- 自动处理 Issue、PR
- 生成发布文档
```

**场景四：数据科学/研究**

```
推荐：Cursor + Claude Code

- Cursor：Notebook 集成、可视化
- Claude Code：数据处理脚本、自动化流程
```

### 9.6 为什么我推荐同时使用？

**现实是**：没有完美的工具，每个都有自己的优势场景。

- **Cursor** 在可视化开发上无可替代
- **Claude Code** 在自动化和扩展性上领先
- **Codex CLI** 轻量简单，适合快速任务

很多资深开发者的工作流是：

1. 日常编码用 Cursor（可视化、调试方便）
2. 自动化任务用 Claude Code（MCP、Skills）
3. 快速一次性任务用 Codex CLI

> 💡 **建议**：先选择一个作为主力工具，熟悉后再根据需要补充其他工具。不要一开始就同时学习三个。

---

## 十、实战案例：从零开始一个小工具

让我们用一个实际例子来演示 Claude Code 的使用流程。

### 10.1 任务描述

假设我们要创建一个命令行工具，功能是：

- 接收一个 GitHub 仓库 URL
- 分析仓库的代码结构
- 生成一份 Markdown 格式的项目概览报告

### 10.2 启动会话

```bash
mkdir github-analyzer
cd github-analyzer
claude
```

### 10.3 使用 Superpowers 工作流

```
> /superpowers:brainstorm

我想创建一个命令行工具，输入 GitHub 仓库 URL，
输出一份项目概览报告（Markdown 格式），包含：
- 项目结构
- 主要技术栈
- 核心模块说明
```

Claude 会开始问澄清问题：

```
Claude: 好的，在开始设计之前，我想确认几点：

1. 这个工具是给自己用还是需要发布给其他人？
2. 需要支持私有仓库吗？
3. 报告需要包含依赖分析吗？
4. 你偏好什么编程语言？
```

你逐一回答后，Claude 会产出设计文档。

### 10.4 批准设计并生成计划

```
> 看起来不错，继续

Claude: 好的，我来生成详细的实现计划...

## 实现计划

### 任务 1：初始化项目结构
文件：package.json, tsconfig.json, src/index.ts
...

### 任务 2：实现 GitHub API 客户端
文件：src/github/client.ts
...

### 任务 3：实现目录结构分析器
文件：src/analyzer/structure.ts
...
```

### 10.5 执行计划

```
> /superpowers:execute-plan

Claude: 开始执行计划...

[任务 1/6] 初始化项目结构
- 创建 package.json ✓
- 创建 tsconfig.json ✓
- 创建 src/index.ts ✓
- 测试通过 ✓

[任务 2/6] 实现 GitHub API 客户端
- 先写测试...
- 测试失败 (预期) ✓
- 实现代码...
- 测试通过 ✓
...
```

### 10.6 完成并创建 PR

```
Claude: 所有任务完成！所有测试通过。

你想如何处理这个分支？
1. 合并到 main
2. 创建 GitHub PR
3. 保留分支
4. 放弃

> 2

Claude: 正在创建 PR...
PR 已创建：https://github.com/you/github-analyzer/pull/1
```

### 10.7 不用 Superpowers 的简化流程

如果你觉得 Superpowers 太重，也可以用原生的 `/plan` 模式：

```
> /plan

创建一个 GitHub 仓库分析工具...

Claude: 这是我的计划：
1. 初始化 Node.js 项目
2. 添加必要的依赖（@octokit/rest, commander 等）
3. 实现 GitHub API 调用逻辑
4. 实现目录结构分析
5. 实现 Markdown 报告生成
6. 添加 CLI 入口

批准这个计划吗？

> 批准

Claude: 开始执行...
（逐步完成每个步骤）
```

---

## 十一、总结与进阶建议

### 11.1 关键要点回顾

1. **Claude Code 是终端原生的 AI Agent**——它可以自主执行多步骤任务，特别适合服务器开发和自动化场景
2. **Cursor 和 Claude Code 不是竞争关系**——IDE 集成型和终端原生型各有优势，很多开发者同时使用两者
3. **Native Install 是推荐的安装方式**——自动后台更新，跨平台支持
4. **Superpowers 把纪律注入 AI 开发**——通过 TDD、代码审查、子代理等机制，确保产出生产级代码
5. **OpenSpec 提供规格驱动开发**——将规划与执行分离，通过文档化的规格驱动整个开发过程
6. **评估 AI 规格遵守需要量化指标**——使用精确率、召回率、F1 分数等指标衡量 AI 对规格的执行程度
7. **SubAgent 实现并行任务处理**——独立上下文窗口，适合独立的并行任务
8. **AgentTeam 支持团队协作**——共享 TaskList、代理间通信，适合需要协调的复杂任务
9. **MCP 服务器扩展能力边界**——从获取最新文档到操作浏览器，让 Claude Code 连接整个开发生态
10. **Skills 封装专业知识**——将最佳实践和工作流程打包成可复用的模块
11. **四种扩展机制各有侧重**——MCP 连接外部、Skills 指导行为、Hooks 自动化事件、CLI 一次性操作
12. **工具选择取决于场景**——可视化开发选 Cursor，终端/自动化选 Claude Code，轻量任务选 Codex

### 11.2 学习路径建议

**第一周：熟悉基础**

- 每天用 Claude Code 完成一些小任务
- 尝试 `/plan` 模式理解它的思考过程
- 创建你的 `CLAUDE.md` 文件

**第二周：引入工作流框架**

- 安装 Superpowers 或 OpenSpec
- 用完整工作流做一个小项目
- 体验结构化流程带来的质量提升

**第三周：探索并行化**

- 学习使用 SubAgent 处理独立并行任务
- 尝试 AgentTeam 处理需要协调的复杂任务
- 创建自定义 SubAgent 封装常用工作流

**第四周：扩展能力边界**

- 配置几个常用的 MCP 服务器（如 GitHub、Notion）
- 安装或创建有用的 Skills
- 形成自己的高效工作流

### 11.3 常见问题

**Q：Claude Code 会修改我不想修改的文件吗？**

A：不会。Claude Code 有权限系统，每次文件修改和命令执行都需要你的批准。你可以随时拒绝。

**Q：使用 Superpowers/OpenSpec 会更慢吗？**

A：短期内是的——因为它们强制你先设计、先规划。但长期来看，它们会节省调试和返工的时间，产出更可靠的代码。

**Q：SubAgent 和 AgentTeam 有什么区别？**

A：SubAgent 适合完全独立的并行任务（如研究 5 家公司），AgentTeam 适合需要协调的复杂任务（如多模块重构）。SubAgent 更简单，AgentTeam 更强大但需要更多设置。

**Q：什么时候用并行 SubAgent？**

A：当任务可以完全独立执行、不需要代理间通信时使用。例如：分析多个文件、研究多个主题、运行多个独立的测试套件。

**Q：我的代码会发送到云端吗？**

A：是的。Claude Code 需要把代码发送到 Anthropic 的服务器进行处理。如果你的代码敏感，请评估风险。

**Q：Sonnet 和 Opus 怎么选？**

A：80% 的日常任务用 Sonnet 就够了。只有复杂重构、架构决策、或需要超长上下文的场景才需要 Opus。

**Q：Skills 和 MCP 有什么区别？**

A：Skills 是知识封装（怎么写代码），MCP 是工具连接（访问什么数据）。两者可以组合使用。

**Q：如何判断 AI 是否按规格实现了？**

A：使用量化指标：精确率（AI 实现的功能中有多少符合规格）、召回率（规格要求的功能中有多少被实现）、F1 分数（综合指标）。如果召回率 < 80%，说明规格可能不够清晰或任务过于复杂，考虑拆分。

**Q：什么时候用 MCP、Skills、Hooks？**

A：需要访问外部数据/服务用 MCP；需要指导 AI 工作方式用 Skills；需要在特定事件时自动执行用 Hooks。三者可以组合使用。

### 11.4 资源链接

**官方资源**：

- [Claude Code 官方文档](https://code.claude.com/docs/en/overview)
- [Anthropic API 文档](https://platform.claude.com/docs)

**管理工具**：

- [cc-switch GitHub](https://github.com/farion1231/cc-switch)——AI 编程工具统一管理中心

**工作流框架**：

- [Superpowers GitHub](https://github.com/obra/superpowers)
- [OpenSpec GitHub](https://github.com/Fission-AI/OpenSpec)

**MCP 服务器**：

- [官方 MCP 服务器](https://github.com/modelcontextprotocol/servers)
- [MCP 服务器精选列表](https://github.com/tolkonepiu/best-of-mcp-servers)
- [MCP Market 排行榜](https://mcpmarket.com/leaderboards)

**Skills 市场**：

- [MCP Market Skills](https://mcpmarket.com/tools/skills)

**社区**：

- [r/ClaudeCode Reddit](https://www.reddit.com/r/ClaudeCode/)
- [r/ClaudeAI Reddit](https://www.reddit.com/r/ClaudeAI/)

---

## 结语

AI 编程助手正在从"帮你写代码"进化到"帮你做完一件事"。Claude Code 代表了这个新范式——它不是一个更聪明的聊天机器人，而是一个可以真正执行操作的 Agent。

但要发挥它的最大价值，你需要的不只是工具本身，还需要配套的工作流：

- **cc-switch** 让你统一管理多个 AI 编程工具和提供商
- **Superpowers / OpenSpec** 让 AI 遵循软件工程的最佳实践
- **SubAgent / AgentTeam** 让多个 AI 实例并行工作，成倍提升效率
- **MCP 服务器** 让 Claude Code 连接整个开发生态
- **Skills** 封装专业知识，让 AI 按你的规范工作

这些工具组合起来，形成了一个完整的 AI 辅助开发生态。**工具只是工具。真正让你与众不同的，是你如何使用它们。**

希望这篇指南能帮助你开始 Claude Code 之旅。如果你有任何问题，欢迎在评论区讨论。

---

*本文写作于 2026 年 3 月，信息基于当时可用的版本。AI 工具迭代很快，建议查阅官方文档获取最新信息。*
