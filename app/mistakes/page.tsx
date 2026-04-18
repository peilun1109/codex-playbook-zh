import { PageHero } from "@/components/page-hero";
import { SectionNav } from "@/components/section-nav";
import { commonMistakes } from "@/data/site-content";

export default function MistakesPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="常見錯誤"
        title="多數誤改不是因為 Codex 太弱，而是因為操作方式太鬆"
        intro="這一頁整理最常見的 10 個誤用模式。每個錯誤都附上為什麼會出問題、不好的例子、更好的寫法與改善建議。真正能提升穩定度的，不是換模型，而是把錯誤習慣修掉。"
      />

      <div className="content-grid">
        <div className="space-y-6">
          {commonMistakes.map((item, index) => (
            <section key={item.title} id={`mistake-${index + 1}`} className="section-card p-6 sm:p-8">
              <p className="pill">錯誤 {index + 1}</p>
              <h2 className="section-title mt-4">{item.title}</h2>
              <p className="section-copy mt-4">{item.why}</p>
              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5">
                  <h3 className="text-lg font-semibold text-white">不好的例子</h3>
                  <pre className="code-block mt-4 whitespace-pre-wrap">{item.bad}</pre>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                  <h3 className="text-lg font-semibold text-white">更好的寫法</h3>
                  <pre className="code-block mt-4 whitespace-pre-wrap">{item.better}</pre>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <h3 className="text-lg font-semibold text-white">改善建議</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.advice}</p>
              </div>
            </section>
          ))}
        </div>
        <SectionNav
          items={commonMistakes.map((item, index) => ({
            id: `mistake-${index + 1}`,
            label: `${index + 1}. ${item.title}`
          }))}
        />
      </div>
    </div>
  );
}
