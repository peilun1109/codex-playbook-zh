type TwoColumnComparisonProps = {
  title: string;
  leftTitle: string;
  rightTitle: string;
  leftItems: string[];
  rightItems: string[];
};

export function TwoColumnComparison({
  title,
  leftTitle,
  rightTitle,
  leftItems,
  rightItems
}: TwoColumnComparisonProps) {
  return (
    <section className="section-card p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5">
          <p className="text-sm font-semibold text-rose-200">{leftTitle}</p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
            {leftItems.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <p className="text-sm font-semibold text-emerald-200">{rightTitle}</p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
            {rightItems.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type ChecklistBlockProps = {
  title: string;
  items: string[];
};

export function ChecklistBlock({ title, items }: ChecklistBlockProps) {
  return (
    <section className="section-card p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-slate-800 bg-slate-950/30 px-4 py-3 text-sm leading-7 text-slate-200"
          >
            [ ] {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

type HighlightGridProps = {
  items: { title: string; description: string }[];
};

export function HighlightGrid({ items }: HighlightGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="section-card p-6">
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
