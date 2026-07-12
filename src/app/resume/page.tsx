import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download Ishan Arora's resume.",
};

export default function ResumePage() {
  return (
    <Section className="py-16">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Resume" title="My resume" />
          <div className="mb-10 flex gap-3">
            <Button href={site.resume} external>
              <Download size={16} /> Download PDF
            </Button>
            <Button href={site.resume} variant="secondary" external>
              <ExternalLink size={16} /> Open in new tab
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          {/* Native browser PDF viewer via iframe — renders reliably across browsers. */}
          <iframe
            src={`${site.resume}#view=FitH`}
            title="Ishan Arora resume"
            className="h-[85vh] w-full"
          />
        </div>
      </Reveal>

      <p className="mt-4 text-center text-sm text-muted">
        Can&apos;t see the resume above?{" "}
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Open it in a new tab
        </a>
        .
      </p>
    </Section>
  );
}
