import { CopyButton } from "@/components/copy-button";

type PromptCardProps = {
  title: string;
  context?: string;
  prompt: string;
  notes?: readonly string[];
};

export function PromptCard({ title, context, prompt, notes }: PromptCardProps) {
  return (
    <section className="section-card p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {context ? <p className="mt-2 text-sm leading-7 text-slate-300">{context}</p> : null}
        </div>
        <CopyButton text={prompt} />
      </div>
      <pre className="code-block mt-5 whitespace-pre-wrap">{prompt}</pre>
      {notes?.length ? (
        <ul className="prose-list mt-4 space-y-2 text-sm leading-7">
          {notes.map((note) => (
            <li key={note}>- {note}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
