import { ScanLine, ClipboardCheck, ShieldCheck, MessageSquareWarning } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const checkpoints = [
  {
    icon: ScanLine,
    title: "Intake inspection",
    description: "Every item is logged, photographed on request, and checked against its care label at drop-off.",
  },
  {
    icon: ClipboardCheck,
    title: "Process checkpoints",
    description: "Washing, drying, ironing and packaging stages are each signed off before the next begins.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-dispatch quality check",
    description: "A final inspection confirms cleanliness, finishing and item count before it leaves the facility.",
  },
  {
    icon: MessageSquareWarning,
    title: "Service guarantee",
    description: "Any issue reported after delivery is investigated against the order's full processing log.",
  },
];

export function QualityAssurance() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Four checkpoints, every single order"
          description="Consistency doesn't happen by accident — it's enforced by the same process on order one and order ten thousand."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {checkpoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
