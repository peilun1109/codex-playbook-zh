import Link from "next/link";
import { ChecklistBlock, HighlightGrid, TwoColumnComparison } from "@/components/content-blocks";
import { PageHero } from "@/components/page-hero";
import { homepageCards, homepagePrinciples, learningOrder } from "@/data/site-content";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="首頁"
        title="把 Codex 用進真實開發流程，而不是只會問它幫你寫程式"
        intro="這是一個面向工程師、學生與 AI 輔助開發初學者的繁體中文教學站。你會在這裡學到如何設計 prompt、理解 codebase、做最小修改、修 bug、補測試、整理 PR，讓 Codex 成為你的工程協作代理，而不是一次性聊天機器。"
        stats={[
          { label: "核心主題", value: "7 頁完整教學" },
          { label: "可直接複製", value: "10 組 Prompt 模板" },
          { label: "實戰案例", value: "5 種工程情境" },
          { label: "核心流程", value: "先分析 → 再修改 → 再驗證" }
        ]}
      />

      <section className="space-y-5">
        <div className="max-w-3xl">
          <p className="eyebrow">核心價值</p>
          <h2 className="section-title mt-3">你需要的不是更會聊天的 AI，而是更可控的工程協作方式</h2>
          <p className="section-copy mt-4">
            真正高效的用法，不是把所有需求一次丟給 Codex，而是把任務拆成可理解、可修改、可驗證的步驟。這個網站會反覆強調三件事：先理解、再修改、再驗證。
          </p>
        </div>
        <HighlightGrid items={[...homepageCards]} />
      </section>

      <TwoColumnComparison
        title="使用 Codex 最重要的 5 個觀念"
        leftTitle="常見誤用"
        rightTitle="工程導向用法"
        leftItems={[
          "把 Codex 當成單純寫碼機器。",
          "一句 prompt 想完成整個需求。",
          "先改再說，出問題再 debug。",
          "沒有寫範圍、限制與驗收。",
          "看起來能跑就直接相信。"
        ]}
        rightItems={[...homepagePrinciples]}
      />

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="section-card p-6 sm:p-8">
          <p className="eyebrow">推薦學習順序</p>
          <h2 className="section-title mt-3">從會下指令，到會做工程協作</h2>
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
          title="開始使用前先確認"
          items={[
            "我能清楚描述任務目標與不在範圍內的東西",
            "我知道這次要先分析還是先修改",
            "我有寫驗收標準與驗證方式",
            "我有要求列出風險與假設",
            "我知道最後仍需要人類確認結果"
          ]}
        />
      </section>

      <section className="section-card p-6 sm:p-8">
        <p className="eyebrow">CTA</p>
        <h2 className="section-title mt-3">從最常見的三種操作開始</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href="/overview"
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-slate-600"
          >
            <h3 className="text-lg font-semibold text-white">先學技巧總覽</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              建立任務拆解、prompt、理解、修改與驗證的基本功。
            </p>
          </Link>
          <Link
            href="/prompts"
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-slate-600"
          >
            <h3 className="text-lg font-semibold text-white">直接複製 Prompt 模板</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              把常見任務做成模板，讓輸出更穩定。
            </p>
          </Link>
          <Link
            href="/playbooks"
            className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-slate-600"
          >
            <h3 className="text-lg font-semibold text-white">看實戰案例</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              用 bug、新功能、重構、讀 repo、PR review 五種情境練流程。
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
