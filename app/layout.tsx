import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://codex-playbook.local"),
  title: {
    default: "Codex 使用技巧 + 實戰技巧",
    template: "%s | Codex 使用技巧 + 實戰技巧"
  },
  description:
    "面向工程師與 AI 輔助開發初學者的繁體中文教學網站，聚焦 Codex 的 prompt 設計、codebase 理解、除錯、驗證與 PR 協作流程。",
  keywords: [
    "Codex",
    "Prompt Engineering",
    "AI 輔助開發",
    "Code Review",
    "Debug",
    "Next.js 教學網站"
  ],
  openGraph: {
    title: "Codex 使用技巧 + 實戰技巧",
    description:
      "把 Codex 用進真實開發流程，而不是只會丟一句 prompt 要它寫程式。",
    type: "website",
    locale: "zh_TW"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <div className="min-h-screen">
          <SiteHeader />
          <main className="container-shell py-10 sm:py-14">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
