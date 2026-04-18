import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { faqItems } from "@/data/site-content";

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="FAQ"
        title="常見問題，直接回答"
        intro="這裡整理使用 Codex 時最常遇到的十個問題。回答都刻意保持短而有力，讓你在卡住時能快速找到下一步。"
      />

      <section className="grid gap-4">
        {faqItems.map((item) => (
          <article key={item.q} className="section-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white">{item.q}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.a}</p>
          </article>
        ))}
      </section>

      <section className="section-card p-6 sm:p-8">
        <h2 className="section-title">不知道從哪裡開始？</h2>
        <p className="section-copy mt-4">
          最推薦的起點是先用「分析不要改」模板讀自己的專案，再用「最小修改」模板處理一個小 bug。你會很快感受到可控性和聊天式用法的差別。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/prompts" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-white">
            先拿模板
          </Link>
          <Link href="/overview" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-white">
            看技巧總覽
          </Link>
        </div>
      </section>
    </div>
  );
}
