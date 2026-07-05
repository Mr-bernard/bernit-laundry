import { Sun, Droplets, Leaf, BatteryCharging } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const stats = [
  { icon: Sun, label: "Solar-powered facility", value: "On-site generation" },
  { icon: BatteryCharging, label: "Uptime through outages", value: "Zero grid dependency" },
  { icon: Droplets, label: "Water-efficient machines", value: "Across every load" },
  { icon: Leaf, label: "Carbon footprint", value: "Actively reduced" },
];

export function Sustainability() {
  return (
    <section id="sustainability" className="relative overflow-hidden py-20 text-white sm:py-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-900">
        <div className="absolute -top-20 right-[-5%] h-[360px] w-[360px] animate-drift rounded-full bg-gold-500/15 blur-[110px]" />
        <div className="absolute -bottom-24 left-[-5%] h-[360px] w-[360px] animate-drift rounded-full bg-royal-500/25 blur-[110px] [animation-delay:-6s]" />
      </div>
      <Container>
        <Reveal>
          <p className="font-data text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
            Sustainability &amp; Green Energy
          </p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Powered by the sun, not dependent on the grid
          </h2>
          <p className="mt-4 max-w-xl text-balance leading-relaxed text-white/70">
            Our processing facility runs on an on-site solar energy system, keeping washing, drying and
            ironing running through outages that would stall a grid-only competitor — while cutting the
            carbon footprint of every order we process.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-gold-300">
                  <stat.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-lg font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
