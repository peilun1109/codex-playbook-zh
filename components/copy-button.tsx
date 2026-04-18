"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
};

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200 transition hover:border-slate-500 hover:text-white"
    >
      {copied ? "已複製" : "複製 Prompt"}
    </button>
  );
}
