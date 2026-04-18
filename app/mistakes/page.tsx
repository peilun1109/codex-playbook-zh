import { PageHero } from "@/components/page-hero";
import { SectionNav } from "@/components/section-nav";
import { commonMistakes } from "@/data/content-v2";

export default function MistakesPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="常見錯誤"
        title="我先幫你做了一輪內容 review，這些就是原本站點最明顯的問題"
        intro="這一頁不只是教使用者常犯什麼錯，也反映我這次對網站內容本身的重寫方向：少一點空話，多一點可執行的分工、規則與案例。"
      />

      <div className="content-grid">
        <div className="space-y-6">
          {commonMistakes.map((item, index) => (
            <section key={item.title} id={`mistake-${index + 1}`} className="section-card p-6 sm:p-8">
              <p className="pill">問題 {index + 1}</p>
              <h2 className="section-title mt-4">{item.title}</h2>
              <p className="section-copy mt-4">{item.why}</p>
              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5">
                  <h3 className="text-lg font-semibold text-white">不好的寫法</h3>
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
