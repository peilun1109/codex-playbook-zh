type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  stats?: { label: string; value: string }[];
};

export function PageHero({ eyebrow, title, intro, stats }: PageHeroProps) {
  return (
    <section className="section-card overflow-hidden p-8 sm:p-10">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title mt-4">{title}</h1>
      <p className="page-intro mt-5">{intro}</p>
      {stats?.length ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
