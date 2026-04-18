import { PromptCard } from "@/components/prompt-card";
import { SectionNav } from "@/components/section-nav";
import { PageHero } from "@/components/page-hero";
import { extraPromptTemplates, promptTemplates } from "@/data/site-content";

const items = [...promptTemplates, ...extraPromptTemplates];

export default function PromptsPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Prompt 模板"
        title="把常見任務寫成可複製模板，輸出才會穩"
        intro="好用的 prompt 應該像工單，而不是即興聊天。這一頁整理 10 組最常用模板，每組都提供使用情境、模板本體、說明與變形用法。你可以直接複製後替換變數。"
        stats={[
          { label: "最常用模板", value: "10 組" },
          { label: "使用方式", value: "直接複製後填空" },
          { label: "適用情境", value: "分析 / 修改 / 驗證 / 協作" },
          { label: "核心原則", value: "目標 + 限制 + 驗收" }
        ]}
      />

      <div className="content-grid">
        <div className="space-y-6">
          <section className="section-card p-6 sm:p-8">
            <h2 className="section-title">怎麼用這一頁</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              <li>- 先選情境，再複製模板。</li>
              <li>- 把任務目標、範圍、不可修改區域填完整。</li>
              <li>- 若任務風險高，先用「先分析不要改」當第一輪。</li>
              <li>- 每次用完後回頭微調，逐步沉澱成自己的固定版本。</li>
            </ul>
          </section>

          {items.map((item, index) => (
            <section key={item.title} id={`template-${index + 1}`} className="space-y-4">
              <PromptCard
                title={`${index + 1}. ${item.title}`}
                context={item.context}
                prompt={item.prompt}
                notes={item.notes}
              />
              <div className="section-card p-6">
                <h3 className="text-lg font-semibold text-white">變形用法</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  你可以把這組模板再補上 repo 規則、檔案限制、測試要求，或把輸出格式固定成條列與 checklist。重點不是照抄，而是把它變成你的工程流程。
                </p>
              </div>
            </section>
          ))}
        </div>

        <SectionNav
          title="模板導覽"
          items={items.map((item, index) => ({
            id: `template-${index + 1}`,
            label: `${index + 1}. ${item.title}`
          }))}
        />
      </div>
    </div>
  );
}
