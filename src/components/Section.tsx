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
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
      )}
    </div>
  );
}
