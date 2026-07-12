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
        <div className="overflow-hidden rounded-xl border border-line bg-card">
          {/* Embedded PDF viewer. Falls back to a link if the browser blocks it. */}
          <object
            data={site.resume}
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Resume PDF"
          >
            <div className="p-8 text-center text-sm text-muted">
              Your browser can&apos;t display the embedded PDF.{" "}
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Download the resume instead.
              </a>
            </div>
          </object>
        </div>
      </Reveal>
    </Section>
  );
}
