import { PromptCard } from "@/components/prompt-card";
import { SectionNav } from "@/components/section-nav";
import { PageHero } from "@/components/page-hero";
import { extraPromptTemplates, promptTemplates } from "@/data/content-v2";

const items = [...promptTemplates, ...extraPromptTemplates];

export default function PromptsPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Prompt 模板"
        title="模板仍然重要，但它現在回到正確的位置"
        intro="這一頁保留模板，但不再把 prompt 神化。這些模板的目的，是幫你把 AGENTS.md、MCP、分析、驗證與交付流程落地，而不是取代它們。"
        stats={[
          { label: "模板數量", value: "10 組" },
          { label: "重點", value: "規則 + 上下文 + 驗證" },
          { label: "適用情境", value: "分析 / GitHub / 交付" },
          { label: "風格", value: "短、準、可直接用" }
        ]}
      />

      <div className="content-grid">
        <div className="space-y-6">
          <section className="section-card p-6 sm:p-8">
            <h2 className="section-title">怎麼用這頁模板</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              <li>- 若 repo 有 AGENTS.md，先用讀規則模板。</li>
              <li>- 若任務需要 GitHub 或外部資料，先用 MCP 蒐集上下文模板。</li>
              <li>- 若你搞不清楚該走哪一層能力，先用分層判斷模板。</li>
              <li>- 模板要服務流程，不是反過來。</li>
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
                <h3 className="text-lg font-semibold text-white">使用提醒</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  真正穩定的做法不是硬背模板，而是把模板放進你的 repo 規則與任務流程裡。能沉澱成 AGENTS.md 或團隊文件的，就不要永遠只放在聊天輸入框。
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
