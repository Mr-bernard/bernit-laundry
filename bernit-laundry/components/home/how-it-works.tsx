import { CalendarCheck, Truck, WandSparkles, PackageCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { TrackingStrip } from "@/components/shared/tracking-strip";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book your pickup",
    description: "Choose a service, pick a pickup window, and get instant confirmation with a tracking ID.",
  },
  {
    icon: Truck,
    title: "We collect from your door",
    description: "A driver arrives in your window and scans your order's QR code to confirm pickup.",
  },
  {
    icon: WandSparkles,
    title: "We clean, press & inspect",
    description: "Your items move through washing, drying, ironing and a final quality check at our facility.",
  },
  {
    icon: PackageCheck,
    title: "We deliver it back",
    description: "Track it live to your door, confirmed by OTP or digital signature on handoff.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Four steps, one tracking ID the whole way"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <ol className="space-y-8">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    {i < steps.length - 1 && <span className="mt-2 h-full w-px flex-1 bg-border-soft" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
                      <step.icon className="h-4 w-4 text-brand" />
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.15}>
            <GlassCard className="p-6 sm:p-7">
              <p className="font-display text-sm font-semibold text-foreground">Live example</p>
              <p className="text-xs text-muted">This is what you&apos;ll see in your dashboard</p>
              <TrackingStrip className="mt-6" />
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
