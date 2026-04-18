import Link from "next/link";
import { ChecklistBlock, HighlightGrid, TwoColumnComparison } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { homepageCards, homepagePrinciples, learningOrder } from "@/data/content-v2";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="首頁"
        title="這不是一個教你亂寫 prompt 的網站，而是教你怎麼把 Codex 變成工程代理"
        intro="如果你真正想學的是 AGENTS.md、MCP、Skills、Plugins、Apps 怎麼進入開發流程，這個版本會更接近你要的東西。網站主軸不再是 prompt 花招，而是規則、能力、流程與交付怎麼一起工作。"
        stats={[
          { label: "核心主軸", value: "規則 + 能力 + 流程" },
          { label: "新增重點", value: "AGENTS.md / MCP" },
          { label: "內容方向", value: "代理協作，不是聊天技巧" },
          { label: "核心流程", value: "先分析 → 再修改 → 再驗證" }
        ]}
      />

      <section className="space-y-5">
        <div className="max-w-3xl">
          <p className="eyebrow">這版調整</p>
          <h2 className="section-title mt-3">我把原本站點過度重複、偏空泛的部分收掉了</h2>
          <p className="section-copy mt-4">
            原本的問題不只是內容多，而是焦點不夠準。這一版把重心重新拉回真正有差異化的主題：`AGENTS.md`
            怎麼約束 Codex、`MCP` 怎麼提供上下文與工具能力、`Skills / Plugins / Apps`
            怎麼分工，以及這些機制如何進入真實工程工作流。
          </p>
        </div>
        <HighlightGrid items={[...homepageCards]} />
      </section>

      <TwoColumnComparison
        title="這個網站現在真正想教你的 5 件事"
        leftTitle="不要再停在這裡"
        rightTitle="應該往這裡學"
        leftItems={[
          "只收集各種 prompt 套版。",
          "把所有效果都歸因於 prompt 寫得好不好。",
          "把 AGENTS.md、MCP、Apps 混成同一件事。",
          "只教 bug / feature，忽略規則與工具接入。",
          "修改完成就結束，沒有交付與驗證。"
        ]}
        rightItems={[...homepagePrinciples]}
      />

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="section-card p-6 sm:p-8">
          <p className="eyebrow">建議學習順序</p>
          <h2 className="section-title mt-3">從懂名詞，到能設計完整代理 workflow</h2>
          <ol className="mt-6 space-y-4">
            {learningOrder.map((item, index) => (
              <li key={item} className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5">
                <p className="text-sm font-semibold text-accent">Step {index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{item}</p>
              </li>
            ))}
          </ol>
        </div>
        <ChecklistBlock
          title="讀這個網站前先確認"
          items={[
            "我想學的不只是 prompt，而是整體工作流",
            "我想知道 AGENTS.md 實際要寫什麼",
            "我想知道 MCP 在工程上到底能幫什麼",
            "我需要分清楚 Skills / Plugins / Apps 的層次",
            "我希望網站內容能直接拿去用，而不是只有口號"
          ]}
        />
      </section>

      <section className="section-card p-6 sm:p-8">
        <p className="eyebrow">從這三頁開始</p>
        <h2 className="section-title mt-3">先把最有價值的內容看完</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/overview"
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-slate-600"
          >
            <h3 className="text-lg font-semibold text-white">先看概念與分工</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              一次搞懂 AGENTS.md、MCP、Skills、Plugins、Apps 各自解決什麼問題。
            </p>
          </Link>
          <Link
            href="/playbooks"
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-slate-600"
          >
            <h3 className="text-lg font-semibold text-white">看實戰案例</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              從補 AGENTS.md、讀 PR comments、設計代理 workflow 開始看。
            </p>
          </Link>
          <Link
            href="/prompts"
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-slate-600"
          >
            <h3 className="text-lg font-semibold text-white">拿可用模板</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              這次的模板更偏工程操作，不再只是泛用 prompt 寫法。
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
