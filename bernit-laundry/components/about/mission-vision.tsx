import { Target, Telescope } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function MissionVision() {
  return (
    <section className="border-y border-border-soft bg-surface-2/40 py-20 sm:py-24">
      <Container className="grid gap-5 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border-soft bg-surface p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Target className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              To deliver professional, transparent laundry and dry cleaning care to every doorstep we reach —
              powered by renewable energy and tracked in real time, so quality is never a guessing game.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-border-soft bg-surface p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-gold-600 dark:text-gold-300">
              <Telescope className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-xl font-semibold text-foreground">Our Vision</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              To become the leading technology-driven laundry brand across Nigeria and beyond — the standard
              other services are compared against for reliability, sustainability, and care.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
