import { PromptCard } from "@/components/prompt-card";
import { SectionNav } from "@/components/section-nav";
import { PageHero } from "@/components/page-hero";
import { overviewSections } from "@/data/site-content";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="技巧總覽"
        title="把 Codex 用穩的關鍵，不是更花的 prompt，而是更工程化的操作方式"
        intro="這一頁把使用 Codex 的核心能力拆成六大章節：基礎使用、prompt 設計、codebase 理解、修改與重構、驗證，以及日常協作。每個章節都包含核心概念、重要性、實作建議、可直接複製的 prompt 與常見錯誤。"
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
