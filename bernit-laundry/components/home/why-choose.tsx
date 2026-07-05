import { Sun, ScanLine, Truck, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const points = [
  {
    icon: Sun,
    title: "Solar-powered facility",
    description:
      "Our processing runs on on-site solar generation, so turnaround times hold steady even through grid outages.",
  },
  {
    icon: ScanLine,
    title: "Real-time, QR-verified tracking",
    description:
      "Every order gets a tracking ID and QR code, with live status updates from pickup to delivery.",
  },
  {
    icon: Truck,
    title: "Free doorstep pickup & delivery",
    description: "No drop-off required — we collect from your address and return it clean, on schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Handled by fabric, not by batch",
    description: "Delicate, specialty and everyday items each get care matched to what they're made of.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Bernit"
          title="Built to be the reliable option, not just the convenient one"
          description="These are the parts of the experience customers mention most — not marketing lines, just how the service actually runs."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface p-6 transition-colors hover:border-brand/30">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <point.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
