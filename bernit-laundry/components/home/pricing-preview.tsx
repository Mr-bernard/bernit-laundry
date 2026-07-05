import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/shared/button";
import { serviceTypeOptions, CURRENCY } from "@/lib/data/pricing-config";

const highlights: Record<string, string[]> = {
  "wash-fold": ["5kg minimum", "Free pickup & delivery", "48–72 hr turnaround"],
  "dry-cleaning": ["Priced per garment", "Fabric-matched solvents", "Hanger-finished"],
  ironing: ["Priced per garment", "Steam pressing", "Hanger-finished"],
  specialty: ["Rugs, curtains, gowns & suits", "Inspection before final quote", "Preservation options available"],
};

export function PricingPreview() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent starting rates, an exact quote in seconds"
          description="Every price is built from the same four inputs: what you need done, how much of it, how far it travels, and how fast you need it back."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceTypeOptions.map((option, i) => (
            <Reveal key={option.id} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6">
                <p className="font-display text-sm font-semibold text-foreground">{option.label}</p>
                <p className="mt-3">
                  <span className="font-display text-3xl font-bold text-brand">
                    {CURRENCY}
                    {option.baseRate.toLocaleString("en-NG")}
                  </span>
                  <span className="text-sm text-muted"> / {option.unit}</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {highlights[option.id].map((line) => (
                    <li key={line} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/pricing" size="lg">
            Open the pricing calculator
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
