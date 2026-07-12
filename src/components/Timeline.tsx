import { type TimelineItem } from "@/data/experience";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-line pl-6">
      {items.map((item, i) => (
        <li key={i} className="mb-10 last:mb-0">
          <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-accent bg-base" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              {item.title}
            </h3>
            <span className="text-sm text-muted">{item.period}</span>
          </div>
          <p className="mt-0.5 text-sm font-medium text-accent">
            {item.org}
            {item.location && <span className="text-muted"> · {item.location}</span>}
          </p>
          <ul className="mt-3 space-y-1.5">
            {item.points.map((point, j) => (
              <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                {point}
              </li>
            ))}
          </ul>
          {item.tags && item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-card2 px-2.5 py-0.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
