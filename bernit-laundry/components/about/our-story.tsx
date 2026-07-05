import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { milestones } from "@/lib/data/company";

export function OurStory() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <p className="font-data text-xs font-medium uppercase tracking-[0.2em] text-brand">Our Story</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Laundry care built like a hotel would build it — for everyone
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Bernit Laundry started with a simple observation: hotels and hospitals get meticulous,
              accountable laundry service, but households and small businesses are usually left choosing
              between a corner shop and doing it themselves.
            </p>
            <p>
              Bernit Global Limited built Bernit Laundry to close that gap — bringing the same tracked,
              inspected, fabric-matched care used in hospitality laundering to everyday pickup-and-delivery
              customers, without the hospitality price tag.
            </p>
            <p>
              Today that means a facility that runs on its own solar power, an order-tracking system built
              from the ground up rather than bolted on, and a growing list of corporate, hotel and hospital
              clients who rely on the same infrastructure everyday customers do.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="relative space-y-8 border-l border-border-soft pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[2.35rem] flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                  •
                </span>
                <p className="font-data text-sm font-semibold text-brand">{m.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{m.label}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
