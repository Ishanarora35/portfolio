export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-surface-border bg-surface-raised px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-accent/60 hover:text-white">
      {label}
    </span>
  );
}
