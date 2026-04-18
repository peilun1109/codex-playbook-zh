export const homepageCards = [
  {
    title: "任務拆解",
    description: "把需求切成可驗證的小步驟，避免一句 prompt 要 Codex 直接做完整產品。"
  },
  {
    title: "Prompt 設計",
    description: "用像工程工單的方式寫 prompt：目標、範圍、限制、驗收條件都要清楚。"
  },
  {
    title: "Codebase 理解",
    description: "先叫 Codex 找入口、列關聯檔案、追資料流，再開始修改。"
  },
  {
    title: "Debug / Test",
    description: "不是只問『幫我修』，而是要求根因分析、修復假設、驗證步驟與風險清單。"
  },
  {
    title: "PR / Review",
    description: "讓 Codex 協助整理 commit、review diff、補 PR 說明，但最後決策由你負責。"
  }
] as const;

export const homepagePrinciples = [
  "不要把 Codex 當成單純寫碼機器，而是當成會執行工單的工程代理。",
  "任務拆解能力比華麗 prompt 更重要，粒度對了，輸出才穩定。",
  "先分析，再修改，再驗證。沒有分析與驗證，就只是高風險嘗試。",
  "最小修改通常比大改更安全，尤其在陌生 codebase 或時間壓力下。",
  "要明確告訴 Codex 不能動什麼、假設什麼、風險在哪裡。"
] as const;

export const learningOrder = [
  "先學會描述任務、範圍與驗收條件。",
  "再學會要求 Codex 先讀專案、找入口、整理資料流。",
  "接著練習 bug 修復、新功能、小範圍重構三種情境。",
  "最後把 lint、test、build、PR review 納入固定流程。"
] as const;

export const overviewSections = [
  {
    id: "basic",
    label: "基礎使用技巧",
    title: "A. 基礎使用技巧",
    summary: "先把任務講清楚，Codex 才能穩定。很多誤改不是模型差，而是輸入不夠像工單。",
    why: "模糊描述會讓 Codex 自行補完上下文，結果常常超出你想動的範圍。",
    practices: [
      "用一句話定義目標，再列出明確範圍與不可修改區域。",
      "要求先閱讀相關檔案，摘要理解後再提修改方案。",
      "把輸出要求寫清楚，例如只修改哪些檔案、是否需要補測試。",
      "把驗收標準寫成 checklist，避免『看起來可以』這種主觀判斷。"
    ],
    prompt: `請先不要修改程式。\n我要處理的任務是：修正登入後偶發的 redirect loop。\n請先完成以下事項：\n1. 找出登入流程相關檔案與入口點\n2. 摘要目前 redirect 判斷邏輯\n3. 列出可能造成 loop 的 2-3 個原因\n4. 提出最小修改方案\n限制：\n- 先不要動 UI\n- 不要重構整個 auth flow\n- 若有假設請明確寫出`,
    mistakes: [
      "只說『幫我修登入 bug』，沒有交代系統邊界。",
      "沒有說不能動哪些模組，導致 AI 幫你重寫半套流程。",
      "沒有要求先分析，直接進入修改。"
    ]
  },
  {
    id: "prompt",
    label: "Prompt 技巧",
    title: "B. Prompt 技巧",
    summary: "好的 prompt 不是更長，而是更結構化。目標、限制、驗收標準都應可讀、可執行。",
    why: "結構化 prompt 可以降低誤解、減少 hallucination，也方便後續重用。",
    practices: [
      "先寫背景，再寫任務目標，最後列限制與驗收條件。",
      "把『先分析再實作』與『先提方案』分開寫，避免模型直接開始改。",
      "用具體限制取代抽象要求，例如『只改 routes/auth 與 middleware』。",
      "用『請列出風險與假設』逼出不確定區域。"
    ],
    prompt: `你現在是這個 repo 的協作工程師。\n任務目標：在 dashboard 新增 CSV 匯出功能。\n請先不要直接修改，先做以下輸出：\n- 找出 dashboard 資料表的入口元件與資料來源\n- 說明目前下載/匯出能力是否已存在可重用模組\n- 提出 2 個方案，標出推薦方案與原因\n限制：\n- 儘量維持現有 API 與 UI 風格\n- 先以最小修改完成\n驗收標準：\n- 使用者可下載目前篩選結果的 CSV\n- 需要補上至少一個測試或驗證步驟`,
    mistakes: [
      "用聊天語氣描述需求，沒有輸出格式。",
      "沒有寫驗收條件，Codex 不知道何時算完成。",
      "限制條件太弱，例如只說『盡量不要改太多』。"
    ]
  },
  {
    id: "codebase",
    label: "Codebase 理解",
    title: "C. Codebase 理解技巧",
    summary: "陌生專案中，第一步不是叫它寫 code，而是叫它快速建立地圖。",
    why: "如果入口點、責任邊界、資料流都不清楚，後面每一步都會在猜。",
    practices: [
      "先請 Codex 摘要專案結構、模組責任與主要路徑。",
      "要求列出功能入口、關聯檔案、呼叫鏈與資料流。",
      "叫它標出哪些地方是組合層、哪些地方是核心邏輯。",
      "對陌生 repo，先要 onboarding 路徑與閱讀順序。"
    ],
    prompt: `我剛接手這個 repo，請先幫我做理解，不要修改。\n請輸出：\n1. 專案主要模組與責任分層\n2. 啟動流程與主要入口\n3. 使用者登入後到 dashboard 的資料流\n4. 我若要修改報表匯出功能，應先看哪些檔案\n5. 建議的 onboarding 閱讀順序`,
    mistakes: [
      "還沒搞懂資料流就直接改。",
      "只請它列檔名，沒有要它說明責任關係。",
      "沒有要求它標出不確定處。"
    ]
  },
  {
    id: "refactor",
    label: "修改與重構",
    title: "D. 修改與重構技巧",
    summary: "重構的重點不是漂亮，而是可控。先保行為，再談整理。",
    why: "大範圍改動最容易把不相關功能一起帶壞，尤其在 UI 和狀態管理區域。",
    practices: [
      "指定維持外部 API、props、URL、資料格式不變。",
      "要求分階段進行：先抽純函式，再拆元件，再補測試。",
      "請 Codex 列出高風險變更點，例如 context、hook、side effect。",
      "能做最小修改就不要順手重寫架構。"
    ],
    prompt: `請協助重構 ReportPanel 元件，但要維持外部 API 不變。\n要求：\n- props 介面不可改\n- 不改變畫面行為與事件觸發順序\n- 優先拆出可測試的小元件與 helper\n- 若有高風險區段，先列出再改\n驗收：\n- 原本使用處不需要調整\n- 重要互動流程可通過既有測試或新增測試`,
    mistakes: [
      "一口氣要求『順便優化整個資料流』。",
      "沒寫相容性要求，結果呼叫端全壞。",
      "沒要求驗證 UI 行為。"
    ]
  },
  {
    id: "verify",
    label: "驗證技巧",
    title: "E. 驗證技巧",
    summary: "修完不是結束，證明它真的沒壞才算結束。",
    why: "Codex 能幫你改，但不能替你承擔上線風險。驗證是必需品，不是附加選項。",
    practices: [
      "把 lint、test、build 寫進任務要求中。",
      "要求 Codex 自己列出風險、邊界條件與未覆蓋情況。",
      "若無法跑測試，也要叫它給手動驗證清單。",
      "要求它說明這次修改可能影響的既有功能。"
    ],
    prompt: `完成修改後，請不要只回報完成。\n請依序做：\n1. 說明實際改了哪些檔案與原因\n2. 執行或列出建議執行的 lint / test / build\n3. 列出可能副作用與風險\n4. 提供手動驗證 checklist\n若某項無法執行，請直接說明原因，不要假設成功`,
    mistakes: [
      "只看畫面正常就算完成。",
      "沒有要求風險清單。",
      "測試失敗時沒有追原因就結束。"
    ]
  },
  {
    id: "collab",
    label: "協作技巧",
    title: "F. 協作技巧",
    summary: "高效率用法不是讓 Codex 取代工程流程，而是讓它進入工程流程。",
    why: "當 Codex 能幫你整理 diff、PR、review comment，你會把更多腦力留給決策。",
    practices: [
      "請它依修改內容建議 commit 分組與訊息。",
      "在送 PR 前，先請它 review diff、找 backward compatibility 風險。",
      "收到 reviewer comment 後，讓它幫你整理成待辦與修正策略。",
      "把團隊規則寫進固定 prompt 模板。"
    ],
    prompt: `以下是我這次功能修改的 diff 與背景，請你以 reviewer 身分做最後檢查。\n請重點看：\n- backward compatibility 風險\n- 測試缺口\n- 命名與可維護性\n- 是否有過度修改\n最後請幫我整理一版 PR description，格式包含背景、修改內容、風險、驗證方式`,
    mistakes: [
      "把 review 當成只檢查語法。",
      "沒有要求它看相容性與測試缺口。",
      "PR 說明寫成流水帳，沒有背景與驗證資訊。"
    ]
  }
] as const;

export const playbooks = [
  {
    id: "bug-fix",
    label: "修 bug",
    title: "案例 1：登入後發生 redirect loop",
    problem: "使用者登入成功後，頁面在 /login 與 /dashboard 之間反覆跳轉，偶發但影響整個登入流程。",
    badAsk: "登入有 bug，幫我修一下。",
    goodAsk: "請先分析登入後 redirect loop 的根因，範圍限定在 auth middleware、route guard、session restore，先不要重構整個 auth flow。",
    better: [
      "先請 Codex 找 middleware、auth guard、session restore 的入口。",
      "要求它列出 redirect 決策點與依賴條件，例如 token、cookie、profile 狀態。",
      "先要根因假設，再指定只做最小修正。"
    ],
    prompt: `請先不要修改程式。\n我要修一個登入後 redirect loop 的 bug。\n請先：\n1. 找出 auth middleware、route guard、session restore 相關檔案\n2. 摘要登入成功後的 redirect 決策流程\n3. 列出最可能造成 loop 的根因，並說明依據\n4. 提出最小修改方案，只修正造成 loop 的判斷\n限制：\n- 不要重構整個 auth flow\n- 不要改 UI\n- 若需要改動多個檔案，請先說明每個檔案的必要性\n修完後請提供驗證 checklist，包括登入成功、登出、token 過期、直接開 dashboard URL 這幾種情境`,
    validate: [
      "正常登入後只會導向一次 dashboard。",
      "已登入使用者重新整理頁面不會回到 login。",
      "token 過期時會被導向 login，但不會出現 loop。",
      "middleware 與 client-side guard 的條件一致。"
    ]
  },
  {
    id: "feature",
    label: "新功能",
    title: "案例 2：在既有 dashboard 新增匯出 CSV 功能",
    problem: "產品想在現有 dashboard 表格上加入 CSV 匯出，而且要沿用現在的篩選條件與權限邏輯。",
    badAsk: "幫我在 dashboard 加一個匯出功能。",
    goodAsk: "先找 dashboard 表格入口、資料流與權限檢查點，再提出 CSV 匯出方案，只改 dashboard 匯出相關模組。",
    better: [
      "先找表格入口元件、資料來源 hook、API 層與權限檢查點。",
      "要求先提方案，再決定是前端組 CSV 還是後端提供匯出 endpoint。",
      "限制變更範圍，避免順手重寫整個 dashboard。"
    ],
    prompt: `我要在既有 dashboard 新增 CSV 匯出功能。\n先不要實作，先做分析：\n1. 找出 dashboard 表格入口元件、資料抓取 hook、API 呼叫位置\n2. 說明目前篩選條件與排序條件如何傳遞\n3. 判斷 CSV 匯出應該重用現有查詢結果，還是新增專用匯出流程\n4. 提出兩個實作方案，標出推薦方案與原因\n限制：\n- 儘量沿用現有資料模型與權限邏輯\n- 只改與 dashboard 匯出相關的檔案\n- 不修改不相干頁面\n若開始實作，請一併補上測試或最少提供可執行的驗證步驟`,
    validate: [
      "下載內容與目前畫面篩選結果一致。",
      "沒有權限的使用者看不到或無法使用匯出。",
      "大型資料集時不會讓主畫面卡死。",
      "至少有一個測試覆蓋匯出邏輯或參數傳遞。"
    ]
  },
  {
    id: "refactor-case",
    label: "重構",
    title: "案例 3：把過大的 React component 拆成多個元件",
    problem: "單一元件超過一千行，混合 UI、商業邏輯、表單狀態與副作用，維護成本很高。",
    badAsk: "這個元件太亂了，直接幫我重構乾淨。",
    goodAsk: "以維持外部 props 與 UI 行為不變為前提，先盤點可安全抽離的區塊，再分階段做最小風險重構。",
    better: [
      "要求維持外部 API、props 與事件契約不變。",
      "先拆 pure helper，再拆視覺區塊，再評估狀態抽離。",
      "要求列出高風險互動，例如 keyboard shortcut、modal lifecycle、effect 順序。"
    ],
    prompt: `請協助重構這個過大的 React component，但優先考慮風險控制。\n要求：\n- 維持外部 props、輸出行為、事件契約不變\n- 先盤點可安全抽離的 UI 區塊、helper、custom hook\n- 提供分階段重構方案，說明每一步的風險\n- 若開始修改，請採最小修改策略，不要順手重命名整個檔案結構\n- 補上重構後驗證 checklist，確認 UI 與互動不變`,
    validate: [
      "呼叫端不需要改任何用法。",
      "主要操作流程與重構前一致。",
      "effect 順序、資料提交、error handling 都沒有退化。",
      "拆出的元件或 helper 有清楚責任。"
    ]
  },
  {
    id: "read-repo",
    label: "讀陌生專案",
    title: "案例 4：剛接手新 repo，要快速理解系統",
    problem: "你需要在短時間內看懂 repo，知道應該先讀哪裡、哪些模組是核心、資料怎麼流動。",
    badAsk: "幫我看一下這個 repo 在幹嘛。",
    goodAsk: "先做架構摘要、找主要入口、標出核心模組與資料流，最後給我 onboarding 閱讀順序。",
    better: [
      "先請 Codex 摘要模組分層與責任，不急著改 code。",
      "要求它畫出資料流、事件流或呼叫鏈的文字版地圖。",
      "請它給 onboarding 路徑，幫你把閱讀順序排出來。"
    ],
    prompt: `我剛接手這個 repo，先不要改 code。\n請協助我在 30 分鐘內建立理解地圖：\n1. 摘要專案分層、主要模組與責任\n2. 找出啟動入口與最核心的 5 個檔案\n3. 以文字方式畫出從 API 到 UI 的主要資料流\n4. 如果我要修改登入、權限、報表三個功能，各自先看哪些檔案\n5. 提供一份 onboarding 閱讀順序，讓我能快速上手`,
    validate: [
      "能說出主要入口與系統分層。",
      "知道功能修改前應先看哪些檔案。",
      "能快速定位登入、資料抓取、狀態管理所在位置。",
      "對模組責任有初步心智模型。"
    ]
  },
  {
    id: "review",
    label: "PR / Review",
    title: "案例 5：送 PR 前，請 Codex 幫你做最後檢查",
    problem: "功能已完成，但你想在送 review 前先找出 backward compatibility 風險、測試缺口與 PR 說明素材。",
    badAsk: "幫我看看這個 PR 有沒有問題。",
    goodAsk: "請以 reviewer 身分檢查這份 diff，優先列出 bug、相容性風險、測試缺口與過度修改，最後幫我整理 PR description。",
    better: [
      "直接提供 diff 或變更摘要，請它以 reviewer 視角看風險。",
      "要求它不要重講程式，而是優先列問題與測試缺口。",
      "讓它順手整理 PR description，節省文件時間。"
    ],
    prompt: `以下是這次功能的 diff 與背景。\n請你扮演 reviewer，重點檢查：\n1. backward compatibility 風險\n2. 未覆蓋的測試情境\n3. 可能的副作用或邊界條件\n4. 是否有過度修改或命名不清\n輸出格式：\n- Findings：依風險排序\n- Open questions：需要確認的假設\n- PR description：背景、修改內容、驗證方式、風險`,
    validate: [
      "有列出具體風險而不是泛泛稱讚。",
      "測試缺口與驗證方式清楚。",
      "PR 說明能直接貼上使用。",
      "最終仍由人類確認高風險決策。"
    ]
  }
] as const;

export const promptTemplates = [
  {
    title: "先分析不要改",
    context: "適合陌生需求、風險高功能或你還沒掌握 codebase 時。",
    prompt: `先不要修改任何程式。\n請先幫我理解這個任務：\n- 目標：{在這裡填任務目標}\n- 範圍：{相關模組 / 頁面 / API}\n- 不可修改：{不能動的檔案、流程、UI}\n請先輸出：\n1. 功能入口與關聯檔案\n2. 現況邏輯摘要\n3. 可能風險與假設\n4. 建議方案，並說明最小修改做法`,
    notes: ["先要求理解，可以大幅降低一開始就誤改的機率。", "這個模板適合拿來當每個任務的第一步。"]
  },
  {
    title: "找出 bug 根因",
    context: "當你知道有問題，但還不確定是哪個條件或模組造成時。",
    prompt: `我需要你協助找出 bug 根因，先不要急著修。\n問題現象：{描述錯誤症狀}\n重現方式：{步驟}\n預期行為：{本來應該怎樣}\n請先做：\n1. 找相關檔案與入口\n2. 推測最可能的根因，按可能性排序\n3. 說明每個根因的依據\n4. 提出最小修復方案與驗證方法`,
    notes: ["重點不是先拿到 patch，而是先把根因假設列清楚。"]
  },
  {
    title: "做最小修改",
    context: "適合線上問題、時間壓力大或你只想修一個點時。",
    prompt: `請以最小修改方式完成這個任務。\n要求：\n- 只修改必要檔案\n- 保持既有 API 與外部行為不變\n- 不做順手重構\n- 若需要擴大修改，先說明原因再進行\n完成後請列出：\n1. 實際改動檔案\n2. 為什麼每個改動都是必要的\n3. 風險與驗證方式`,
    notes: ["這個模板的關鍵是把『不做順手重構』寫明。"]
  },
  {
    title: "新增功能",
    context: "適合在既有產品中加入一個清楚可界定的新能力。",
    prompt: `我要新增功能：{功能名稱}\n請先分析，不要直接實作。\n請回答：\n1. 功能入口點在哪裡\n2. 會影響哪些模組、API、狀態或權限邏輯\n3. 最推薦的實作方案是什麼，原因是什麼\n4. 如何限制修改範圍\n5. 需要補哪些測試\n若開始實作，請優先保留既有結構並採最小修改`,
    notes: ["避免一開始就叫它『直接幫我做』，先拿到方案比較穩。"]
  },
  {
    title: "補測試",
    context: "當功能已改完，想補上單元測試、整合測試或最低限度的驗證時。",
    prompt: `請根據這次修改幫我補測試。\n先判斷最值得補的測試層級：單元測試、整合測試或 E2E。\n要求：\n- 優先覆蓋這次修改直接影響的邏輯\n- 不要為了補測試而重寫大量程式\n- 若目前架構不易測，請先說明最小可行做法\n最後請列出還沒覆蓋到的風險`,
    notes: ["好測試不是數量多，而是能有效保護這次修改。"]
  }
] as const;

export const extraPromptTemplates = [
  {
    title: "做 code review",
    context: "適合送 PR 前自查，或收到別人 diff 後做第一輪風險檢查。",
    prompt: `請對這份 diff 做 code review。\n不要先總結優點，先找問題。\n請優先檢查：\n- bug 風險\n- backward compatibility\n- 測試缺口\n- 命名與可維護性\n- 過度修改\n輸出格式：\n1. Findings（依嚴重度排序）\n2. Open questions\n3. 建議補強的驗證`,
    notes: ["把『先找問題』寫清楚，才能避免模型只給禮貌性稱讚。"]
  },
  {
    title: "寫 PR 說明",
    context: "想快速整理背景、修改內容、風險與驗證步驟時。",
    prompt: `請依據這次修改內容幫我整理 PR description。\n格式請包含：\n- 背景 / 為什麼要改\n- 這次修改了什麼\n- 沒有修改什麼\n- 風險與注意事項\n- 驗證方式\n語氣請偏工程導向，不要行銷化，不要只重複 diff`,
    notes: ["清楚寫出『沒有修改什麼』，reviewer 會更放心。"]
  },
  {
    title: "重構但保留外部 API",
    context: "適合需要整理舊程式，但不能影響呼叫端時。",
    prompt: `我要重構 {元件 / 模組}，但必須保留外部 API 不變。\n限制：\n- props / function signature / route contract 不可改\n- UI 行為與 side effect 順序不可改\n- 優先拆 helper、抽小元件、降低複雜度\n請先列出：\n1. 可安全重構的區塊\n2. 高風險區塊\n3. 分階段執行方案\n4. 重構後驗證 checklist`,
    notes: ["這個模板能把『整理』與『風險控制』綁在一起。"]
  },
  {
    title: "讀專案架構",
    context: "新接手 repo、要快速 onboarding 時很好用。",
    prompt: `我剛接手這個專案，請先幫我做架構導覽，不要修改程式。\n請輸出：\n1. 主要模組與責任分層\n2. 啟動入口與請求流程\n3. 狀態管理、API 層、UI 層各在哪裡\n4. 若我要修改 {功能}，應先讀哪些檔案\n5. 建議的閱讀順序`,
    notes: ["這個模板最適合用在陌生 codebase 的第一天。"]
  },
  {
    title: "追資料流 / 事件流 / 呼叫鏈",
    context: "當你知道某個功能存在，但不知道資料是怎麼一路傳過去時。",
    prompt: `請幫我追這個功能的資料流 / 事件流 / 呼叫鏈：{功能名稱}\n請從入口開始，依序列出：\n1. 使用者互動或觸發點\n2. 元件 / hook / service / API 的傳遞路徑\n3. 關鍵條件判斷與 side effect\n4. 最後資料如何影響 UI 或狀態\n請用清楚的步驟與關聯檔案表示`,
    notes: ["當你要 debug 或做新功能，資料流清楚會省掉很多猜測。"]
  }
] as const;

export const commonMistakes = [
  {
    title: "問題描述太模糊",
    why: "Codex 會自己補完上下文，結果可能偏離真實需求。",
    bad: "幫我修一下登入。",
    better: "修正登入成功後偶發 redirect loop，範圍限於 auth middleware 與 route guard，先分析根因再改。",
    advice: "描述症狀、範圍、限制與預期行為。"
  },
  {
    title: "沒有限定範圍",
    why: "沒有邊界時，模型可能從 UI 改到 API，最後改太大。",
    bad: "把 dashboard 匯出做好。",
    better: "在現有 dashboard 新增 CSV 匯出，限制只改 dashboard 相關元件與匯出邏輯，不要重構資料表。",
    advice: "列出可動區域與不可動區域。"
  },
  {
    title: "沒寫驗收條件",
    why: "沒有完成定義，Codex 無法知道何時算完成，也無法自我檢查。",
    bad: "做完跟我說。",
    better: "完成後請提供 lint/test/build 結果，並附上手動驗證 checklist。",
    advice: "把驗收條件改寫成 checklist。"
  },
  {
    title: "直接叫它改，沒有先分析",
    why: "在陌生 codebase 中直接改，風險通常最高。",
    bad: "直接改成新的 auth flow。",
    better: "先整理 auth flow 與 redirect 決策點，再提出最小修改方案。",
    advice: "把『先不要修改程式』放進第一輪 prompt。"
  },
  {
    title: "一次要求太大",
    why: "需求太大會讓模型為了完成任務而過度推論。",
    bad: "把這個 monolith 順便重構成乾淨架構。",
    better: "先拆出其中一個高複雜度區塊，維持外部 API 不變，再評估下一步。",
    advice: "能拆就拆，能分階段就不要一次做完。"
  },
  {
    title: "不要求驗證",
    why: "AI 可以產生 patch，但不會自動替你承擔風險。",
    bad: "改完就好。",
    better: "改完後請執行或列出 lint/test/build，並說明風險與副作用。",
    advice: "永遠把驗證流程寫進任務。"
  },
  {
    title: "不檢查副作用",
    why: "局部修正很可能傷到鄰近功能，尤其是共享 hook、middleware、狀態邏輯。",
    bad: "修這個 bug 就行。",
    better: "修完後請列出可能受影響的登入、登出、token 過期情境。",
    advice: "要求列出受影響情境與風險。"
  },
  {
    title: "把 AI 當成絕對正確",
    why: "Codex 很強，但它仍會誤判、不完整理解或產生看似合理的錯誤。",
    bad: "它都改好了，直接 merge。",
    better: "請它列出假設與不確定處，我再逐項確認。",
    advice: "養成『先證明，再相信』的習慣。"
  },
  {
    title: "不給專案規則",
    why: "沒有規則時，模型會用自己的預設值行事。",
    bad: "幫我整理一下。",
    better: "遵守這個 repo 的命名、測試與相容性規則；不要改動既有 API。",
    advice: "把團隊規範與禁區寫進 prompt。"
  },
  {
    title: "不做漸進式迭代",
    why: "一次把所有需求塞進去，最終很難判斷是哪一步出問題。",
    bad: "直接做完功能、測試、文件、重構。",
    better: "先分析，再做最小實作，再補驗證與文件。",
    advice: "把任務切成小回合，逐步確認。"
  }
] as const;

export const roadmapLevels = [
  {
    title: "Level 1：會下清楚指令",
    goal: "把任務說清楚，讓 Codex 不需要猜。",
    skills: ["描述目標與範圍", "指定不能動的部分", "寫出驗收條件"],
    blockers: ["習慣用聊天語氣下指令", "不知道該怎麼寫限制", "需求描述太散"],
    practice: "用真實小任務練習把 prompt 寫成工單格式：目標、範圍、限制、驗收。"
  },
  {
    title: "Level 2：會讓 Codex 幫你分析",
    goal: "在修改前先建立理解，降低盲改風險。",
    skills: ["讀 codebase", "找功能入口", "追資料流與呼叫鏈", "先提方案再改"],
    blockers: ["急著拿結果", "不知道該看哪些檔案", "沒有要求風險與假設"],
    practice: "拿陌生 repo 練習：只做架構摘要與入口定位，不急著改 code。"
  },
  {
    title: "Level 3：會做可控修改",
    goal: "用最小變更完成需求，並保護相容性。",
    skills: ["最小修改", "保留 API", "補測試", "列出副作用與驗證步驟"],
    blockers: ["順手重構", "忽略相容性", "驗證做得太薄"],
    practice: "挑 3 個小 bug，要求每次都只做必要改動並附驗證 checklist。"
  },
  {
    title: "Level 4：會把 Codex 納入工程流程",
    goal: "讓 Codex 參與 commit、PR、review、文件整理，而不是只寫 patch。",
    skills: ["review diff", "整理 PR description", "拆 commit", "處理 reviewer comment"],
    blockers: ["只把 AI 用在生成程式", "沒有固定工作流程", "文件總是事後補"],
    practice: "每次送 PR 前，用同一份 review prompt 做自查。"
  },
  {
    title: "Level 5：會做高品質協作",
    goal: "建立可重複使用的模板、規則與團隊習慣，讓輸出穩定且可維護。",
    skills: ["建立 reusable prompts", "沉澱專案規則", "設計固定 workflow", "降低 hallucination 風險"],
    blockers: ["每次都從零寫 prompt", "規則只存在腦中", "缺少團隊共識"],
    practice: "整理自己的前 10 個常用 prompt，並為團隊建立共用版本。"
  }
] as const;

export const faqItems = [
  {
    q: "Codex 跟一般聊天式 AI 寫 code 有什麼差別？",
    a: "重點不只是回答，而是能直接在工程流程中協作。你應該把它當成會讀 repo、做修改、幫你驗證與整理工作輸出的工程代理。"
  },
  {
    q: "為什麼它有時候會亂改很多檔案？",
    a: "通常是因為任務範圍不清、沒有寫不可修改區域，或你一次要求太大。先限定檔案與模組，再要求最小修改。"
  },
  {
    q: "怎麼讓它只做最小修改？",
    a: "直接寫明『只修改必要檔案、不做順手重構、保留既有 API』，並要求它先說明每個改動的必要性。"
  },
  {
    q: "怎麼讓它先分析不要直接動手？",
    a: "把『先不要修改程式』寫在開頭，並指定它先輸出入口、現況摘要、風險與方案。"
  },
  {
    q: "怎麼提升輸出穩定度？",
    a: "結構化 prompt、縮小範圍、補上驗收條件，再把常用任務沉澱成模板，穩定度會明顯提升。"
  },
  {
    q: "怎麼避免改壞既有功能？",
    a: "要求最小修改、保留外部 API、列出副作用與風險，並補上 lint/test/build 或手動驗證 checklist。"
  },
  {
    q: "什麼時候要用它做 code review？",
    a: "送 PR 前、自查 diff、收到 reviewer comment 後都很適合，尤其是想快速找 backward compatibility 風險與測試缺口時。"
  },
  {
    q: "什麼時候不該完全相信它？",
    a: "高風險邏輯、權限、安全、資料刪除、付款流程都不該直接相信。先證明，再相信。"
  },
  {
    q: "怎麼建立自己的 prompt 模板？",
    a: "從你最常做的 5 種任務開始，把成功 prompt 拆成背景、目標、限制、驗收四段，慢慢沉澱。"
  },
  {
    q: "對新手最推薦的使用方式是什麼？",
    a: "先從『分析不要改』和『最小修改』兩種模板開始，先學會控制風險，再追求速度。"
  }
] as const;
