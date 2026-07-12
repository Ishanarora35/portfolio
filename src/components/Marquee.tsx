export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line/70 bg-card/40 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-0 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center text-2xl font-semibold tracking-tight text-muted sm:text-4xl">
            {t}
            <span className="mx-8 text-cyan">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
