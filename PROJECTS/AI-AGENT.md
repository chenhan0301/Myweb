# Personal AI Agent｜前瞻科技情報與知識歸檔系統

> Applied AI course project · 2026  
> **Voice Input × Agent Workflow × External Data × Notion API**

## Problem

我原本希望透過 Telegram 取得每日 AI / 科技情報，但很快發現「訊息流」不適合作為長期知識庫。

高價值摘要很容易被後續聊天淹沒，形成：

`Information overload → Fragmented notes → Poor retrieval`

因此，我把需求重新定義成一條可以自動完成「取得、分析、推播、歸檔」的個人知識管線。

## System concept

```text
Telegram voice/text
        ↓
     AI Agent
        ↓
Semantic task routing
        ↓
External information / API
        ↓
Structured analysis
      ↙       ↘
Telegram     Notion
instant      persistent
output       knowledge base
```

## Main functions

### Technology intelligence mode
- 擷取 AI / software technology information
- 摘要技術突破
- 分析底層架構
- 整理產業影響
- 提供可執行的工程啟發

### Baseball analytics extension
將同一套 Agent workflow 延伸到 MLB 數據分析，包括：
- AVG / OBP / SLG / OPS
- ISO
- BB% / K%
- Batted-ball profile
- Scouting-style summary

## Technical learning

### 1. Structured output reliability
LLM 產出的 Markdown / JSON 若包含未處理的引號或特殊字元，可能造成 API request 失敗。

實作中必須加入：
- Prompt format constraints
- Escaping rules
- Error handling
- Output validation thinking

### 2. API permission scope
Notion integration 必須正確授權至特定 database，讓我實際理解：
- API authentication
- Permission scope
- Resource-level access
- 404 / 400 debugging

### 3. Workflow orchestration
這個專案讓我從「寫一個功能」轉向思考：

> 一個 AI 系統如何把多個工具、資料來源與輸出目的地編排成穩定工作流？

## Reflection

這個專案對我最大的價值，不是宣稱 Agent 比人工快多少，而是讓我實際碰到 AI system engineering 的問題：

- 非結構化文字如何穩定轉成結構化資料？
- API 權限如何控制？
- Agent 如何決定下一個動作？
- 生成內容如何持久化？
- 系統發生錯誤時如何定位問題？

這些問題後來也連到我對 **Trustworthy AI、Evidence Traceability、Decision Support** 的研究興趣。

## Connection to my four-year learning path

`Web → Data → Database → API Integration → AI Agent → Trustworthy AI`

See:
- [Academic Coursework](../ACADEMIC-COURSEWORK.md)
- [Four-year Journey](../LEARNING-JOURNEY.md)
- [Portfolio](https://chenhan0301.github.io/Myweb/)
