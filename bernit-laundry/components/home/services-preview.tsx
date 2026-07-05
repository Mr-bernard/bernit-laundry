import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/shared/button";
import { services } from "@/lib/data/services";

const featured = services.filter((s) =>
  ["laundry", "dry-cleaning", "express-laundry", "ironing", "corporate-laundry", "subscription", "shoe-cleaning", "wedding-dress-cleaning"].includes(
    s.slug
  )
);

export function ServicesPreview() {
  return (
    <section className="border-y border-border-soft bg-surface-2/40 py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Services"
            title="One platform for every fabric, every schedule"
            description="From everyday wash-fold to hospital contracts, each service is priced and tracked the same transparent way."
          />
          <Button href="/services" variant="outline">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
                <p className="mt-4 font-data text-xs uppercase tracking-wider text-brand">
                  {service.turnaround}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
