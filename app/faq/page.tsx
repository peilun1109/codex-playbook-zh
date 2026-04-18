import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { faqItems } from "@/data/content-v2";

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="FAQ"
        title="把幾個最常混淆的點一次講清楚"
        intro="這一頁現在不再只是泛用問答，而是集中回答你真正關心的：AGENTS.md 是什麼、MCP 解什麼問題、Skills / Plugins / Apps 怎麼分。"
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
        <h2 className="section-title">如果你只想先做一件事</h2>
        <p className="section-copy mt-4">
          先替你的 repo 補一份最小可用 AGENTS.md，然後在每次任務開始前要求 Codex 先讀它。這通常比追求更花的 prompt 更有效。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/prompts" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-white">
            看模板
          </Link>
          <Link href="/overview" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-white">
            看概念頁
          </Link>
        </div>
      </section>
    </div>
  );
}
