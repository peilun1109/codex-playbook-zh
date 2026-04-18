import Link from "next/link";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/overview", label: "技巧總覽" },
  { href: "/playbooks", label: "實戰案例" },
  { href: "/prompts", label: "Prompt 模板" },
  { href: "/mistakes", label: "常見錯誤" },
  { href: "/roadmap", label: "學習路線圖" },
  { href: "/faq", label: "FAQ" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800/80 bg-ink/80 backdrop-blur">
      <div className="container-shell flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="max-w-xl">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Codex Playbook
          </div>
          <div className="mt-1 text-lg font-semibold text-white">
            Codex 使用技巧 + 實戰技巧
          </div>
          <p className="mt-1 text-sm text-slate-400">
            面向工程師的繁體中文教學站，專注於 prompt、理解、修改與驗證。
          </p>
        </Link>

        <nav aria-label="主要導覽" className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-600 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
