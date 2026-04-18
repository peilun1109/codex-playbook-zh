import { PromptCard } from "@/components/prompt-card";
import { SectionNav } from "@/components/section-nav";
import { PageHero } from "@/components/page-hero";
import { overviewSections } from "@/data/content-v2";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="技巧總覽"
        title="先把規則、能力、流程分清楚，再談怎麼把 Codex 用好"
        intro="這一頁直接收斂到五件事：AGENTS.md 怎麼限制與引導代理、MCP 怎麼提供上下文與工具能力、Skills / Plugins / Apps 怎麼分工、修改前怎麼分析，以及最後怎麼驗證與交付。"
      />

      <div className="content-grid">
        <div className="space-y-6">
          {overviewSections.map((section) => (
            <section key={section.id} id={section.id} className="section-card p-6 sm:p-8">
              <p className="pill">{section.label}</p>
              <h2 className="section-title mt-4">{section.title}</h2>
              <p className="section-copy mt-4">{section.summary}</p>

              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5">
                  <h3 className="text-lg font-semibold text-white">為什麼重要</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{section.why}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5">
                  <h3 className="text-lg font-semibold text-white">實作建議</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {section.practices.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <PromptCard title={`${section.label} Prompt 範例`} prompt={section.prompt} />
              </div>

              <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <h3 className="text-lg font-semibold text-white">常見錯誤</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                  {section.mistakes.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
        <SectionNav items={overviewSections.map(({ id, label }) => ({ id, label }))} />
      </div>
    </div>
  );
}
