export const homepageCards = [
  {
    title: "AGENTS.md",
    description: "把 repo 規則、禁區、驗證流程寫給 Codex，降低誤改與過度發揮。"
  },
  {
    title: "MCP",
    description: "讓 Codex 接上 GitHub、文件、資料來源與工具，不只靠聊天猜。"
  },
  {
    title: "Skills / Plugins / Apps",
    description: "理解三者分工，知道什麼時候該用流程能力、什麼時候該用工具能力。"
  },
  {
    title: "Codebase 理解",
    description: "先找入口、追資料流、列出相關檔案，再開始動手。"
  },
  {
    title: "驗證與 Review",
    description: "把 lint、test、build、風險檢查與 PR review 納入固定流程。"
  }
] as const;

export const homepagePrinciples = [
  "Prompt 不是主角，流程才是主角。",
  "AGENTS.md 用來定義規則，MCP 用來提供能力。",
  "先分析，再修改，再驗證，這比任何華麗 prompt 都重要。",
  "最小修改通常比全面重寫更安全，尤其在陌生 repo。",
  "真正高效的用法，是把 Codex 納入團隊工程流程。"
] as const;

export const learningOrder = [
  "先搞懂 Codex 跟聊天式 AI 的差別，再學會如何下明確任務。",
  "再建立 AGENTS.md，讓 Codex 遵守 repo 規則與驗證流程。",
  "接著理解 MCP、Skills、Plugins、Apps 的分工。",
  "最後把 bug 修復、功能開發、PR review 與部署串成完整 workflow。"
] as const;

export const overviewSections = [
  {
    id: "agents",
    label: "AGENTS.md",
    title: "A. AGENTS.md：把專案規則寫給代理看",
    summary: "AGENTS.md 不是一般說明文件，而是 Codex 在這個 repo 內應該如何做事的操作手冊。",
    why: "如果 repo 規則只存在工程師腦中，Codex 只能用預設行為做事。預設行為通常太泛，容易改太多、漏驗證、忽略禁區。",
    practices: [
      "寫清楚哪些目錄可以改、哪些目錄不要碰。",
      "明定修改前要先分析、修改後要跑哪些驗證。",
      "把相容性要求寫清楚，例如不可改 API、route contract、資料格式。",
      "把 PR、commit、review 的輸出格式一併寫入。"
    ],
    prompt: `請先閱讀 repo 中的 AGENTS.md，並依其規則工作。\n這次任務是修正登入後 redirect loop。\n請先輸出：\n1. 你從 AGENTS.md 讀到的相關限制\n2. 你會先檢查哪些檔案\n3. 你預計如何驗證修復\n在完成上述分析前，先不要修改程式。`,
    mistakes: [
      "只寫抽象原則，沒有寫具體禁止事項。",
      "沒有把驗證命令寫進去，導致 Codex 修改後不主動檢查。",
      "把 AGENTS.md 寫成團隊宣言，對實際執行沒有幫助。"
    ]
  },
  {
    id: "mcp",
    label: "MCP",
    title: "B. MCP：讓 Codex 有能力接工具，不只會聊天",
    summary: "MCP 可以把 GitHub、知識庫、資料庫 schema、內部文件或自訂工具接進來，讓 Codex 取得真實上下文。",
    why: "很多模糊與 hallucination 不是模型太弱，而是它拿不到真正需要的系統資訊。MCP 的價值在於讓 Codex 根據資料做事，而不是憑印象猜。",
    practices: [
      "用 MCP 讀 PR、issue、review comments，而不是手貼大量文字。",
      "用 MCP 接文件或規格來源，避免回答過期資訊。",
      "把常用內部查詢能力做成 MCP，而不是每次手動複製資料。",
      "把 MCP 當成能力層，不是當成 prompt 技巧。"
    ],
    prompt: `請先透過可用的 MCP 工具收集這次任務需要的上下文。\n任務：整理這個功能 PR 的未解 review comments。\n請輸出：\n1. 目前有哪些 comments 還沒處理\n2. 哪些是 bug / 相容性 / 測試缺口\n3. 建議修正順序\n如果 MCP 工具拿不到資料，請明確說明缺口。`,
    mistakes: [
      "把 MCP 當成一個名詞背起來，卻不知道它解決的是上下文與工具接入問題。",
      "明明可以直接查 GitHub 或文件，卻還是用 prompt 讓 Codex猜。",
      "沒有區分規則層與能力層，導致 AGENTS.md 和 MCP 混在一起。"
    ]
  },
  {
    id: "capabilities",
    label: "Skills / Plugins / Apps",
    title: "C. Skills / Plugins / Apps：先搞清楚分工，再談怎麼用",
    summary: "這三個詞很容易混淆，但它們解決的是不同層次的問題。",
    why: "如果不知道分工，你就會把流程說明、工具入口、能力套件混著用，最後整個 workflow 會很亂。",
    practices: [
      "把 Skill 理解成某類任務的專門流程。",
      "把 Plugin 理解成一組相關能力的打包與提供者。",
      "把 App 理解成具體外部系統的操作入口，例如 GitHub。",
      "在實戰中先問：我缺的是流程、工具還是整套能力。"
    ],
    prompt: `請先說明這個任務最適合用哪一層能力處理：AGENTS.md、Skill、Plugin、App 或 MCP。\n任務：我想處理 PR review comments，並補上必要修正。\n請回答：\n1. 哪一層負責規則\n2. 哪一層負責流程\n3. 哪一層負責存取 GitHub\n4. 建議的操作順序`,
    mistakes: [
      "把 Apps 當成 Plugins 的同義詞。",
      "把 Skills 當成單純 prompt 模板，忽略它其實可以是流程指南。",
      "沒有先判斷自己缺哪一層能力，就直接開始操作。"
    ]
  },
  {
    id: "analysis",
    label: "分析與理解",
    title: "D. 先理解 codebase，再交付修改",
    summary: "不管你有沒有 AGENTS.md 或 MCP，修改前都應該先建立對系統的理解。",
    why: "入口點、責任邊界、資料流不清楚時，模型很容易在錯的位置修正正確的問題。",
    practices: [
      "先找入口檔案、關聯檔案與關鍵判斷點。",
      "要求 Codex 說明資料流、事件流與呼叫鏈。",
      "先標出不確定點與假設，再開始修改。",
      "把先分析，不要改當成高風險任務的預設起手式。"
    ],
    prompt: `先不要修改程式。\n請先幫我理解這個任務：在 dashboard 新增 CSV 匯出。\n請輸出：\n1. 入口元件與資料來源\n2. 相關 API 與權限邏輯\n3. 需要維持不變的外部行為\n4. 最小修改方案`,
    mistakes: [
      "一開始就要 patch，沒有先建立理解。",
      "只要檔名列表，不要責任關係與資料流。",
      "沒有要求列出風險與假設。"
    ]
  },
  {
    id: "verification",
    label: "驗證與交付",
    title: "E. 驗證、Review、交付：這些不是附加品，是主流程",
    summary: "真正成熟的用法不是改完就好，而是讓 Codex 協助你完成驗證、風險檢查與交付文件。",
    why: "如果沒有驗證與 review，AI 只是在加速產生 patch，不是在加速工程交付。",
    practices: [
      "要求跑 lint / test / build，或至少提供手動驗證 checklist。",
      "請 Codex review diff，優先找 bug、相容性與測試缺口。",
      "讓 Codex 根據修改內容整理 PR description。",
      "把這些步驟固定進 AGENTS.md 或團隊模板。"
    ],
    prompt: `完成修改後，請不要只回報完成。\n請依序輸出：\n1. 實際修改了哪些檔案\n2. 跑了哪些驗證\n3. 還有哪些風險與假設\n4. 一版可直接貼上的 PR description`,
    mistakes: [
      "把驗證當成最後有空再做的事。",
      "review diff 時只看語法，不看相容性與副作用。",
      "PR description 寫成流水帳，沒有背景與驗證資訊。"
    ]
  }
] as const;

export const playbooks = [
  {
    id: "agents-setup",
    label: "AGENTS.md",
    title: "案例 1：替現有 repo 補一份真的有用的 AGENTS.md",
    problem: "你發現 Codex 常常改太多、忘記驗證、沒有遵守 repo 慣例，因為 repo 裡沒有清楚的代理規則。",
    badAsk: "幫我寫一份 AGENTS.md。",
    goodAsk: "請先閱讀目前專案結構與 workflow，幫我設計一份最小但實用的 AGENTS.md，內容要包含可修改範圍、不可修改範圍、驗證命令與相容性要求。",
    better: [
      "先從 repo 的真實流程反推規則，不要憑空寫大而全規範。",
      "優先寫會直接影響 Codex 行為的內容：禁區、驗證、相容性。",
      "把高風險區域與常見誤用寫明。"
    ],
    prompt: `請先不要直接產生完整文件。\n請先閱讀這個 repo 的目錄結構與常用指令，然後幫我設計 AGENTS.md。\n請先輸出：\n1. 哪些規則最值得寫進 AGENTS.md\n2. 哪些目錄應標成高風險或不可修改\n3. 修改前後應加入哪些固定步驟\n等我確認後，再產出正式內容。`,
    validate: [
      "文件內容能直接限制 Codex 的修改邊界。",
      "驗證與 review 流程寫得具體，不是空話。",
      "內容反映真實 repo，而不是泛用模板。"
    ]
  },
  {
    id: "mcp-pr",
    label: "MCP / GitHub",
    title: "案例 2：用 MCP 幫你整理 PR 與 reviewer comment",
    problem: "PR 留了很多 review comments，但你不想手動逐條整理，也不想把整串對話複製給 Codex。",
    badAsk: "幫我看這個 PR 有什麼問題。",
    goodAsk: "請用可用的 GitHub / MCP 能力抓 PR comments，整理成可執行的修正清單，區分 bug、相容性、測試缺口。",
    better: [
      "讓 Codex 直接讀 GitHub 上的真實資料，而不是靠你手貼摘要。",
      "先整理 comment 類型與優先順序，再決定要不要直接修。",
      "把資料取得層與修正層分開。"
    ],
    prompt: `請用可用的 GitHub / MCP 工具讀取這個 PR 的 review comments。\n請輸出：\n1. 尚未處理的 comments\n2. 每條 comment 屬於 bug、相容性、測試缺口或命名問題\n3. 建議處理順序\n4. 哪些 comment 需要我先做產品或架構決策`,
    validate: [
      "整理結果來自真實 PR 資料，而不是模型猜測。",
      "有做分類與優先級排序。",
      "能直接轉成修正待辦。"
    ]
  },
  {
    id: "capability-choice",
    label: "Skills / Plugins / Apps",
    title: "案例 3：先判斷該用哪一層能力，再開始做事",
    problem: "你知道 Codex 有很多能力，但不確定什麼情境該用 Skill，什麼情境該用 GitHub App，什麼又該寫進 AGENTS.md。",
    badAsk: "這個任務要用哪個功能？",
    goodAsk: "請根據任務拆分規則層、流程層與工具層，告訴我 AGENTS.md、Skill、Plugin、App 各自負責什麼。",
    better: [
      "先分類：規則、流程、工具、外部資料，避免混用。",
      "遇到 GitHub、部署、PR 這類外部系統時，優先想 App 或 MCP。",
      "遇到固定任務流程時，優先想 Skill。"
    ],
    prompt: `我現在的任務是：修完 PR comments、補測試、整理 PR description。\n請先拆解這個任務的能力分工：\n1. 哪些規則應由 AGENTS.md 提供\n2. 哪些流程可以交給 Skill\n3. 哪些 GitHub 動作需要 App 或 MCP\n4. 實際執行順序應該怎麼排`,
    validate: [
      "你能說清楚每一層解決的是什麼問題。",
      "知道什麼該寫成 repo 規則，什麼該交給工具。",
      "workflow 不再混亂或重複。"
    ]
  },
  {
    id: "legacy-read",
    label: "讀陌生 repo",
    title: "案例 4：剛接手陌生 repo，先用代理方式建立理解地圖",
    problem: "你不是要立刻改功能，而是要快速知道這個系統怎麼運作、哪裡危險、哪些規則要先補。",
    badAsk: "幫我看懂這個 repo。",
    goodAsk: "請先摘要架構、找關鍵模組、列出高風險區域，最後告訴我這個 repo 缺不缺 AGENTS.md 或工具接入。",
    better: [
      "除了理解程式，也要評估 repo 是否缺少代理規則與工具能力。",
      "先找 onboarding 路徑，再決定要不要寫 AGENTS.md。",
      "把理解系統與改善協作環境一起做。"
    ],
    prompt: `我剛接手這個 repo，先不要改功能。\n請輸出：\n1. 專案分層與主要入口\n2. 高風險模組與原因\n3. 如果要讓 Codex 更穩定，這個 repo 最缺什麼：AGENTS.md、測試、文件還是工具接入\n4. 建議的 onboarding 閱讀順序`,
    validate: [
      "能說出架構與風險點。",
      "能判斷 repo 在代理協作上缺了什麼。",
      "有形成具體 onboarding 路徑。"
    ]
  },
  {
    id: "handoff",
    label: "交付流程",
    title: "案例 5：用 Codex 完成修改後的最後交付",
    problem: "你已經改完功能，但還需要整理風險、驗證、PR 說明與 reviewer 預期會問的問題。",
    badAsk: "幫我整理一下。",
    goodAsk: "請 review 這次 diff，優先列出風險、測試缺口、受影響範圍，最後整理一版 PR description。",
    better: [
      "先找問題與缺口，再寫漂亮文件。",
      "不要只讓 Codex總結變更，要它明確指出風險與假設。",
      "把交付資訊做成固定格式。"
    ],
    prompt: `以下是這次功能修改的 diff 與背景。\n請先做 reviewer 觀點檢查，輸出：\n1. bug 或 backward compatibility 風險\n2. 尚未覆蓋的測試情境\n3. 需要在 PR 中說清楚的假設\n4. 一版可直接貼上的 PR description`,
    validate: [
      "PR 說明可直接使用。",
      "風險與測試缺口具體，不是空泛稱讚。",
      "交付品質比單純 patch 更完整。"
    ]
  }
] as const;

export const promptTemplates = [
  {
    title: "先讀 AGENTS.md 再開始",
    context: "適合已有 AGENTS.md 的 repo，讓 Codex 先遵守專案規則。",
    prompt: `請先閱讀 AGENTS.md，並依照其中規則處理這次任務。\n先不要修改程式。\n請先輸出：\n1. 與這次任務相關的 repo 規則\n2. 哪些檔案可改、哪些不該改\n3. 建議的分析與驗證步驟`,
    notes: ["這是最值得變成預設起手式的模板之一。"]
  },
  {
    title: "幫我設計 AGENTS.md",
    context: "適合 repo 還沒有 AGENTS.md，或現有內容太空泛時。",
    prompt: `請先閱讀這個 repo 的結構與常用 workflow，幫我設計一份實用的 AGENTS.md。\n要求：\n- 不要寫空泛原則\n- 要包含可修改範圍、禁止變更區域、驗證命令、相容性要求\n- 若 repo 有高風險模組，請特別標註\n先輸出設計大綱，再產出完整內容。`,
    notes: ["先出大綱再出全文，品質通常會更高。"]
  },
  {
    title: "先用 MCP 蒐集上下文",
    context: "適合 PR、issue、文件、外部資料等任務。",
    prompt: `請先使用可用的 MCP / App 工具蒐集這次任務需要的上下文。\n任務：{填任務}\n請先輸出：\n1. 成功取得了哪些資料\n2. 還缺哪些資料\n3. 這些資料如何影響後續做法\n在上下文不足前，先不要直接下結論。`,
    notes: ["這個模板可以有效降低靠猜回答的情況。"]
  },
  {
    title: "判斷該用 Skill / Plugin / App",
    context: "適合你不知道該走哪條能力路徑時。",
    prompt: `請先判斷這個任務最適合使用哪一層能力：AGENTS.md、Skill、Plugin、App 或 MCP。\n任務：{填任務}\n請說明：\n1. 規則層由誰負責\n2. 流程層由誰負責\n3. 工具層由誰負責\n4. 建議執行順序`,
    notes: ["先分層，再執行，整體 workflow 會清楚很多。"]
  },
  {
    title: "先分析，不要修改",
    context: "適合高風險修改、陌生 codebase、模糊 bug。",
    prompt: `先不要修改任何程式。\n我要處理的任務是：{填任務}\n請先輸出：\n1. 功能入口與關聯檔案\n2. 現況邏輯摘要\n3. 可能風險與假設\n4. 最小修改方案\n如果上下文不足，請先說明缺口。`,
    notes: ["高風險任務幾乎都該先走這一步。"]
  }
] as const;

export const extraPromptTemplates = [
  {
    title: "讀陌生 repo 並評估代理準備度",
    context: "不只看程式，也看 repo 是否適合 Codex 協作。",
    prompt: `我剛接手這個 repo，請先不要改 code。\n請輸出：\n1. 專案分層與主要入口\n2. 高風險區域\n3. 目前缺哪些會影響 Codex 穩定度的東西：AGENTS.md、測試、文件、MCP 接入\n4. 建議補強順序`,
    notes: ["這能把理解程式和改善協作環境一起完成。"]
  },
  {
    title: "用 reviewer 角度看 diff",
    context: "適合送 PR 前的最後自查。",
    prompt: `請對這份 diff 做 review。\n不要先總結優點，先找問題。\n請優先看：\n- bug 風險\n- backward compatibility\n- 測試缺口\n- 過度修改\n- 是否違反 AGENTS.md 規則\n輸出格式：\n1. Findings\n2. Open questions\n3. 建議補強的驗證`,
    notes: ["把 AGENTS.md 規則也納入 review，會更貼近真實 repo。"]
  },
  {
    title: "寫 PR description",
    context: "適合功能完成後整理交付資訊。",
    prompt: `請依據這次修改內容整理 PR description。\n格式請包含：\n- 背景\n- 修改內容\n- 沒有修改什麼\n- 風險與假設\n- 驗證方式\n語氣請偏工程導向，不要行銷化。`,
    notes: ["清楚寫出沒改什麼，可以降低 reviewer 不必要的擔心。"]
  },
  {
    title: "補測試與驗證清單",
    context: "適合你已經改完功能，但想補保護網。",
    prompt: `請根據這次修改幫我補測試。\n要求：\n- 優先覆蓋這次變更直接影響的邏輯\n- 若目前不適合補自動化測試，請提供手動驗證 checklist\n- 最後列出仍未覆蓋的風險`,
    notes: ["補測試的目的不是加數量，而是保護這次改動。"]
  },
  {
    title: "把流程沉澱成團隊模板",
    context: "適合你已經找到一套有效 workflow，想固定下來。",
    prompt: `請根據這次成功的操作流程，幫我整理成一份團隊可重用模板。\n請包含：\n1. 任務起手式\n2. 分析步驟\n3. 修改限制\n4. 驗證步驟\n5. 交付輸出格式\n請讓內容適合寫進 AGENTS.md 或團隊文件。`,
    notes: ["好的團隊效率，來自可重複使用的流程，而不是每次重新發明 prompt。"]
  }
] as const;

export const commonMistakes = [
  {
    title: "把網站寫成 prompt 技巧大全",
    why: "如果只講 prompt，讀者會誤以為 Codex 的核心價值只是更會下指令，而不是工程代理能力。",
    bad: "重點是學會很多種 prompt 寫法。",
    better: "重點是理解規則層、能力層、流程層怎麼協作：AGENTS.md、MCP、Skills、Apps、驗證。",
    advice: "把 prompt 放回工具位置，不要把它寫成整站主角。"
  },
  {
    title: "內容太長但不夠準",
    why: "太多泛用句子會讓讀者看完覺得好像有學到，實際上拿不去用。",
    bad: "你要學會更好地和 AI 溝通，才能提升效率。",
    better: "如果 repo 有 AGENTS.md，就先要求 Codex 讀完後再分析；如果沒有，就先補一份最小可用版本。",
    advice: "每段都要問自己：工程師看完能不能立刻照做。"
  },
  {
    title: "沒有把名詞講清楚",
    why: "AGENTS.md、MCP、Skill、Plugin、App 若混在一起講，使用者很容易混淆。",
    bad: "這些功能都可以幫你提升效率。",
    better: "AGENTS.md 管規則，MCP 管能力接入，Skill 管任務流程，App 管外部系統操作入口。",
    advice: "先定義分工，再講案例。"
  },
  {
    title: "案例不夠貼近真實 workflow",
    why: "只講 bug、功能、重構還不夠，實際上大家常卡在 repo 規則、PR、GitHub comments、工具接入。",
    bad: "教你修 bug、加功能、寫 prompt。",
    better: "補上 AGENTS.md 設計、MCP 讀 PR、Skill / App 分工、交付流程等案例。",
    advice: "讓案例更貼近工程團隊實際每天在做的事。"
  },
  {
    title: "一直講原則，沒有講怎麼落地",
    why: "光說先分析再修改很容易空泛，使用者不知道實際該怎麼要求 Codex。",
    bad: "做任何事都要先分析。",
    better: "先要求輸出：入口檔案、現況邏輯、風險與假設、最小修改方案，再決定是否開始實作。",
    advice: "每個觀念旁邊都放一個可直接複製的 prompt 或 checklist。"
  },
  {
    title: "把驗證寫得太輕",
    why: "如果驗證只是順帶提一下，讀者會回到改完就好的舊習慣。",
    bad: "有空可以跑一下測試。",
    better: "完成後必須回報 lint / test / build，若無法執行也要說明原因並提供手動驗證清單。",
    advice: "把驗證寫成主流程，而不是附註。"
  }
] as const;

export const roadmapLevels = [
  {
    title: "Level 1：搞懂 Codex 不是聊天機器",
    goal: "先建立正確心智模型。",
    skills: ["知道 Codex 與一般聊天 AI 的差別", "知道 prompt 不是全部", "知道先分析再修改的重要性"],
    blockers: ["把所有問題都歸因於 prompt", "不知道規則層與能力層差別", "過度期待一次完成"],
    practice: "用一個小 repo 練習：先分析，不改 code，只做理解與任務拆解。"
  },
  {
    title: "Level 2：會寫 AGENTS.md",
    goal: "讓 Codex 在 repo 內有規則可遵守。",
    skills: ["寫可修改範圍", "寫禁止變更區域", "寫驗證與相容性要求"],
    blockers: ["規則太空泛", "不知道哪些規則最值得寫", "把文件寫成宣言而不是操作手冊"],
    practice: "為自己的 repo 補一份最小可用 AGENTS.md，只保留會直接影響行為的規則。"
  },
  {
    title: "Level 3：會用 MCP 與 Apps 拿真實上下文",
    goal: "讓 Codex 根據資料做事，而不是靠猜。",
    skills: ["知道何時該查 GitHub、文件、外部資料", "知道 MCP 解的是上下文問題", "知道 App 是外部系統操作入口"],
    blockers: ["明明能查資料卻還是靠聊天描述", "把 MCP 當成抽象名詞", "不知道哪些任務該優先走工具層"],
    practice: "拿一個真實 PR，讓 Codex 直接讀 comments 與 metadata，再整理成修正清單。"
  },
  {
    title: "Level 4：會分辨 Skills / Plugins / Apps",
    goal: "知道自己缺的是流程、工具還是整套能力。",
    skills: ["Skill 作為任務流程", "Plugin 作為能力打包", "App 作為系統入口"],
    blockers: ["術語混用", "不會判斷該走哪一層", "把所有事情都丟給 prompt"],
    practice: "拿三種任務分類：讀 repo、處理 PR comments、寫 PR 說明，分別判斷該用哪一層能力。"
  },
  {
    title: "Level 5：會設計完整代理 workflow",
    goal: "把規則、能力、驗證、交付串成穩定流程。",
    skills: ["把 AGENTS.md、MCP、Skill、驗證流程串起來", "建立團隊模板", "降低誤改與不確定性"],
    blockers: ["每次都從零開始", "流程無法複用", "沒有把成功經驗沉澱成規則"],
    practice: "把一次成功任務整理成團隊模板，包含起手式、分析、修改限制、驗證與交付格式。"
  }
] as const;

export const faqItems = [
  {
    q: "AGENTS.md 跟 README 有什麼差別？",
    a: "README 主要寫給人看，AGENTS.md 主要寫給代理看。README 解釋專案，AGENTS.md 約束行為。"
  },
  {
    q: "AGENTS.md 一定要很長嗎？",
    a: "不用。短但具體比長但空泛有用。優先寫修改範圍、禁區、驗證、相容性。"
  },
  {
    q: "MCP 到底解決什麼問題？",
    a: "它解決模型拿不到真實上下文的問題，讓 Codex 可以接工具與資料來源。"
  },
  {
    q: "Skills、Plugins、Apps 到底怎麼分？",
    a: "Skill 偏任務流程，Plugin 偏能力打包，App 偏外部系統入口。先分清楚層次，再決定怎麼用。"
  },
  {
    q: "什麼情況下最該補 AGENTS.md？",
    a: "當 Codex 常常改太多、忽略驗證、碰到不該動的區域時，就該補。"
  },
  {
    q: "什麼情況下最該用 MCP？",
    a: "當任務需要 GitHub、文件、資料庫 schema、知識庫或任何外部真實資料時。"
  },
  {
    q: "我還需要 prompt 嗎？",
    a: "當然需要，但 prompt 應該負責描述這次任務，不該獨自承擔規則與能力。"
  },
  {
    q: "GitHub Pages、Vercel、PR review 這些也算 Codex workflow 嗎？",
    a: "算。真正的 Codex workflow 不只包含寫 code，還包含交付、驗證、部署與 review。"
  },
  {
    q: "最容易忽略但最有價值的是什麼？",
    a: "把成功做法沉澱成 AGENTS.md 與團隊模板。這比每次重寫 prompt 更有長期價值。"
  },
  {
    q: "對新手最推薦的起點是什麼？",
    a: "先用先分析，不要修改讀 repo，再為自己的專案補一份最小可用 AGENTS.md。"
  }
] as const;
