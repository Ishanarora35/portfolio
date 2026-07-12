import { type ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Consistent horizontal padding + max width wrapper used across the site. */
export default function Section({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`mx-auto w-full max-w-content px-6 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent/50" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tightest text-ink sm:text-[2.75rem] sm:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
