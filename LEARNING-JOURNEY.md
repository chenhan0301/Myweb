# 大學四年學習歷程｜2022–2026

這份文件整理我在國立臺灣師範大學四年間，從人力資源背景走向資訊工程、資料分析、系統實作與 AI 研究的完整學習軌跡。

它不是履歷的另一個版本，而是回答一個更重要的問題：

> **我現在會做的事情，是怎麼一步一步學來的？**

---

# Year 1｜2022–2023
## 建立人資問題意識，也開始走進程式設計

大一的核心仍在人力資源發展與科技應用領域。

這個階段我開始接觸：
- 人力資源發展
- 人力資源管理基礎
- 組織與人才議題
- 學習與訓練
- 程式設計基礎

同時也逐漸發現，我對「如何把抽象的人與組織問題轉成可以分析的問題」有很強的興趣。

因此，我後續選擇雙主修資訊工程。

### Year 1 的核心轉折

**不是離開人資去學資訊，而是開始思考如何讓資訊能力回頭解決人資問題。**

---

# Year 2｜2023–2024
## 第一次把程式做成公開作品

## 112-1｜網際網路概論

Repository: [Web](https://github.com/chenhan0301/Web)

### 學習內容

- Node.js
- VS Code
- Git / GitHub Desktop
- GitHub Pages
- HTML
- CSS
- Bootstrap
- JavaScript
- 動態網頁
- Azure deployment

### 代表成果

我建立了自己的第一個 GitHub Pages 個人網站。

今天的 Portfolio 仍沿用同一個 repository：

[Myweb](https://github.com/chenhan0301/Myweb)

因此它本身也是一個很有意思的版本紀錄——從 2023 年的 Bootstrap 課堂作業，一路演化成 2026 年的研究與學習 Portfolio。

### 我學到什麼

過去我認為程式只要「可以執行」就算完成。

這門課讓我第一次理解：

> **真正的資訊系統還需要考慮使用者如何看見、理解與操作。**

---

## 112-2｜程式語言

Repository: [program-language](https://github.com/chenhan0301/program-language)

這個階段的重點從 Web 轉向 Python 與資料。

### HW1｜世界排名集合分析

以撞球 2023 / 2024 世界排名為例：

- Pandas 讀取 CSV
- DataFrame
- Python Set
- Union
- Intersection
- Difference

Repository evidence:  
[HW1.ipynb](https://github.com/chenhan0301/program-language/blob/main/HW1.ipynb)

### HW2｜選手資料結構與分析

整理：
- 收入
- 國籍
- 世界排名

再將不同欄位整合為 JSON，並做條件篩選。

Repository evidence:  
[HW2.ipynb](https://github.com/chenhan0301/program-language/blob/main/HW2.ipynb)

### HW3｜PTT Baseball 爬蟲

使用：
- Requests
- BeautifulSoup
- JSON
- Pandas

將 PTT Baseball 文章資料擷取後，轉成 JSON 與 CSV。

Repository evidence:  
[HW3.ipynb](https://github.com/chenhan0301/program-language/blob/main/HW3.ipynb)

### HW4｜資料分析 / 文字處理延伸

在 Google Colab 與 GPU 環境中延伸資料分析與文字資料處理。

Repository evidence:  
[HW4.ipynb](https://github.com/chenhan0301/program-language/blob/main/HW4.ipynb)

### Year 2 的核心轉折

**Website → Data**

我開始不只在意「資訊怎麼呈現」，也開始學習「資訊從哪裡來，以及如何整理成證據」。

---

# Year 3｜2024–2025
## 從資料分析走向完整資訊系統

## 113-1｜資料庫系統

Repository: [Database-System](https://github.com/chenhan0301/Database-System)

### 技術學習路徑

1. Flask + MySQL
2. Create / Read
3. Delete
4. Update
5. Search
6. INNER / LEFT / RIGHT JOIN
7. MongoDB
8. Final Project

### Final Project｜Library Management System

[Code](https://github.com/chenhan0301/Database-System/tree/main/Final%20Project)

系統使用：
- Python
- Flask
- MongoDB
- PyMongo
- HTML / CSS

主要資料模型：
- Books
- Users
- Loans

功能包含：
- 新增 / 刪除 / 更新書籍
- 模糊搜尋
- 使用者管理
- 借閱紀錄管理

### Year 3 的核心轉折

**Data → System**

資料不再只是 Notebook 裡的分析結果，而是成為完整應用流程的一部分。

這個時候我開始真正理解：

> Frontend、Backend、Database 與 User Flow 並不是四個分離的技能，而是一個系統。

---

# Year 4｜2025–2026
## 把人資、資訊與 AI 放進同一個產品

## LexiAI｜AI 輔助人才甄選

Repository: [Report-template](https://github.com/chenhan0301/Report-template)

Live demo:  
https://chenhan0301.github.io/Report-template/

### System flow

Interview  
↓  
Speech-to-Text  
↓  
LLM Analysis  
↓  
Structured JSON  
↓  
Dashboard / Report  
↓  
Decision Support

### 報表內容

- 回答完整性
- 內容品質
- 優勢 / 不足
- 追問建議
- 人格 / 特質
- 溝通分析
- 適任性
- 發展建議

### 我的主要貢獻

#### Prompt / Evaluation Logic
反覆設計 Prompt 與輸出結構，使 LLM 結果可以穩定進入系統。

#### Web Report / Dashboard
將 JSON 分析結果轉換為可以被 HR 閱讀的報表與圖表。

### 驗證帶來的研究轉折

專題的人格文字分析結果與傳統參考人格分數的同向度相關普遍偏弱。

這代表我們不能直接宣稱 AI 已經能取代傳統面試。

反而讓我開始真正關注：

- 模型為什麼這樣判斷？
- 使用者能不能看到支持判斷的證據？
- AI 回饋怎樣才不只是看起來合理？
- 人如何利用 AI 的結果做更好的判斷？

因此 LexiAI 的定位逐漸變成：

> **Complementary Decision Support**

而不是自動化取代面試官。

---

# From Project to Research｜2026

目前我的研究計畫進一步聚焦：

## 生成式 AI 面試回饋之證據可追溯性對面試表現之影響

核心問題：

> 當 AI 回饋可以明確連回受試者原始回答中的證據，是否能提升理解、反思與跨題目的學習遷移？

研究概念包括：

- Evidence Traceability
- AI Feedback
- Reflection
- Metacognition
- Learning Transfer
- BARS
- Human–AI Interaction

這代表我的大學學習軌跡從：

**Website → Data → Database → AI System**

繼續走向：

**AI System → Research → Trustworthy Decision Support**

---

# Beyond GitHub

GitHub 主要保留技術學習，但我的四年並不只由程式碼組成。

其他重要經驗包括：

- 科技應用與人力資源發展學系人資組
- 雙主修資訊工程
- 人力資源發展、人力資源管理、人員數據分析等課程
- 畢業專展總籌
- 跨系聯展
- 系學會與學生代表
- 熱音社攝影幹部
- 補習班輔導老師兩年
- aPHRi
- TOEIC 895
- EMI Certificate

這些經驗共同形成我目前的研究定位：

## Human Resources × Computer Science × Trustworthy AI

---

# Repository index

| Stage | Repository | Main focus |
|---|---|---|
| Year 2 | [Web](https://github.com/chenhan0301/Web) | Web development |
| Year 2 | [program-language](https://github.com/chenhan0301/program-language) | Python & data |
| Year 3 | [Database-System](https://github.com/chenhan0301/Database-System) | Database & backend |
| Year 4 | [Report-template](https://github.com/chenhan0301/Report-template) | LexiAI report |
| Year 2–4 | [Myweb](https://github.com/chenhan0301/Myweb) | Portfolio evolution |

---

完整視覺化版本：  
**https://chenhan0301.github.io/Myweb/**
