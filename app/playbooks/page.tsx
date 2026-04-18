import { PromptCard } from "@/components/prompt-card";
import { SectionNav } from "@/components/section-nav";
import { PageHero } from "@/components/page-hero";
import { playbooks } from "@/data/site-content";

export default function PlaybooksPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="實戰案例"
        title="用真實工程情境練 Codex，而不是停留在抽象技巧"
        intro="這一頁用五種常見場景示範怎麼把 Codex 用進實際工作：修 bug、加新功能、重構舊程式、讀陌生 repo，以及送 PR 前的最後檢查。每個案例都依照『問題 → 好的操作方式 → prompt 範本 → 驗證方式』展開。"
      />

      <div className="content-grid">
        <div className="space-y-6">
          {playbooks.map((item) => (
            <section key={item.id} id={item.id} className="section-card p-6 sm:p-8">
              <p className="pill">{item.label}</p>
              <h2 className="section-title mt-4">{item.title}</h2>
              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5">
                  <h3 className="text-lg font-semibold text-white">問題</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.problem}</p>
                </div>
                <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5">
                  <h3 className="text-lg font-semibold text-white">好的操作方式</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {item.better.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5">
                  <h3 className="text-lg font-semibold text-white">糟糕問法</h3>
                  <pre className="code-block mt-4 whitespace-pre-wrap">{item.badAsk}</pre>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                  <h3 className="text-lg font-semibold text-white">正確問法</h3>
                  <pre className="code-block mt-4 whitespace-pre-wrap">{item.goodAsk}</pre>
                </div>
              </div>

              <div className="mt-6">
                <PromptCard title="建議 Prompt 範本" prompt={item.prompt} />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/30 p-5">
                <h3 className="text-lg font-semibold text-white">如何驗證修復或實作成功</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                  {item.validate.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
        <SectionNav items={playbooks.map(({ id, title }) => ({ id, label: title }))} />
      </div>
    </div>
  );
}
