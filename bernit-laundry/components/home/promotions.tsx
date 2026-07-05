import { Gift, Users, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const promos = [
  {
    icon: Sparkles,
    title: "Founding member rates",
    description: "Start a monthly subscription now and keep the introductory rate for as long as it stays active.",
    tag: "Subscriptions",
  },
  {
    icon: Users,
    title: "Refer a friend, both save",
    description: "Share your referral code — your friend gets 20% off their first order, you get loyalty points.",
    tag: "Referrals",
  },
  {
    icon: Gift,
    title: "First pickup, half price",
    description: "New customers get 50% off their first Wash & Fold order, automatically applied at checkout.",
    tag: "New customers",
  },
];

export function Promotions() {
  return (
    <section className="py-4 sm:py-6">
      <Container>
        <div className="grid gap-5 lg:grid-cols-3">
          {promos.map((promo, i) => (
            <Reveal key={promo.title} delay={i * 0.06}>
              <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-6 text-white">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-royal-500/40 to-gold-500/30 blur-2xl"
                />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-gold-300">
                  {promo.tag}
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <promo.icon className="h-4 w-4 text-gold-300" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold">{promo.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">{promo.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
