import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/shared/button";

export function CtaBanner({
  title,
  description,
  primaryLabel = "Get an instant quote",
  primaryHref = "/pricing",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-navy-900 px-8 py-12 text-center text-white sm:px-12">
            <h2 className="max-w-xl text-balance font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
            <p className="max-w-lg text-balance text-sm text-white/70 sm:text-base">{description}</p>
            <Button href={primaryHref} variant="gold" size="lg">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
