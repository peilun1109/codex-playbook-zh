import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionNav } from "@/components/section-nav";
import { roadmapLevels } from "@/data/site-content";

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="學習路線圖"
        title="把能力拆成五個等級，從會問到會協作"
        intro="如果你現在還停留在『請 AI 幫我寫 code』，這條路線圖會幫你往前走。每一層都包含學習目標、要學會的能力、常見卡點與建議練習方式，讓你逐步把 Codex 納入日常工程流程。"
        stats={[
          { label: "能力等級", value: "5 個 Level" },
          { label: "學習主線", value: "指令 → 分析 → 修改 → 協作" },
          { label: "核心習慣", value: "先證明，再相信" },
          { label: "練習方式", value: "小任務反覆迭代" }
        ]}
      />

      <div className="content-grid">
        <div className="space-y-6">
          {roadmapLevels.map((level, index) => (
            <section key={level.title} id={`level-${index + 1}`} className="section-card p-6 sm:p-8">
              <p className="pill">Level {index + 1}</p>
              <h2 className="section-title mt-4">{level.title}</h2>
              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5">
                  <h3 className="text-lg font-semibold text-white">目標</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{level.goal}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/30 p-5">
                  <h3 className="text-lg font-semibold text-white">要學會的能力</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {level.skills.map((skill) => (
                      <li key={skill}>- {skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                  <h3 className="text-lg font-semibold text-white">常見卡點</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {level.blockers.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                  <h3 className="text-lg font-semibold text-white">建議練習方式</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{level.practice}</p>
                </div>
              </div>
            </section>
          ))}

          <section className="section-card p-6 sm:p-8">
            <h2 className="section-title">下一步建議</h2>
            <p className="section-copy mt-4">
              如果你已經能穩定做到 Level 3，最值得投入的是建立自己的 reusable prompts 與 repo 規則。這會讓你從「偶爾用得好」進化成「持續用得穩」。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/prompts" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-white">
                查看 Prompt 模板
              </Link>
              <Link href="/playbooks" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-white">
                進入實戰案例
              </Link>
            </div>
          </section>
        </div>
        <SectionNav
          items={roadmapLevels.map((level, index) => ({
            id: `level-${index + 1}`,
            label: level.title
          }))}
        />
      </div>
    </div>
  );
}
