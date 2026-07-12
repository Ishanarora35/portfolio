import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ishan Arora.",
};

export default function ContactPage() {
  const links = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Github, label: "GitHub", value: "Ishanarora35", href: site.github },
    { icon: Linkedin, label: "LinkedIn", value: "ishanaroraaa", href: site.linkedin },
    { icon: MapPin, label: "Location", value: site.location, href: undefined },
  ];

  return (
    <Section className="py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="I'm open to software engineering internships, collaborations, and good conversations. Reach out any time."
        />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="space-y-3">
            {links.map((link) => {
              const content = (
                <div className="flex items-center gap-4 rounded-xl border border-line bg-card p-4 transition-colors hover:border-accent/50">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-base text-accent">
                    <link.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-ink">
                      {link.value}
                    </p>
                  </div>
                </div>
              );
              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={link.label}>{content}</div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-xl border border-line bg-card p-6 sm:p-8">
            <h3 className="mb-5 text-lg font-semibold text-ink">
              Send me a message
            </h3>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
