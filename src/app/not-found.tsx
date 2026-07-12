import Section from "@/components/Section";
import Button from "@/components/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-ink">Page not found</h1>
      <p className="mt-2 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8">
        <Button href="/">
          <Home size={16} /> Back home
        </Button>
      </div>
    </Section>
  );
}
