import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionNav } from "@/components/section-nav";
import { roadmapLevels } from "@/data/content-v2";

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="學習路線圖"
        title="這條路線圖從懂名詞開始，最後走到能設計完整代理 workflow"
        intro="如果你現在覺得網路上很多 Codex 教學都在談 prompt，卻沒有把 AGENTS.md、MCP、Skills、Apps 的層次講清楚，這頁就是為了補這個洞。"
        stats={[
          { label: "學習層級", value: "5 個 Level" },
          { label: "中段重點", value: "AGENTS.md / MCP" },
          { label: "後段重點", value: "代理 workflow" },
          { label: "目標", value: "讓流程可重複" }
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
            <h2 className="section-title">推薦下一步</h2>
            <p className="section-copy mt-4">
              如果你已經能走到 Level 3，最值得做的不是再找更多 prompt，而是替你的 repo 補 AGENTS.md，並讓常用 GitHub / 文件查詢能力有固定入口。這會讓 Codex 的穩定度提升非常多。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/overview" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-white">
                回到概念與分工
              </Link>
              <Link href="/playbooks" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-white">
                看實戰案例
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
