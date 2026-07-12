export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-accent/50 hover:text-accent">
      {label}
    </span>
  );
}
