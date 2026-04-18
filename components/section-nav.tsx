type SectionNavProps = {
  items: { id: string; label: string }[];
  title?: string;
};

export function SectionNav({ items, title = "本頁導覽" }: SectionNavProps) {
  return (
    <aside className="section-card sticky top-6 hidden h-fit p-5 lg:block">
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
