import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { services, serviceCategories } from "@/lib/data/services";

const categoryCopy: Record<(typeof serviceCategories)[number], string> = {
  Everyday: "The services most customers use every week.",
  Specialty: "Fabric- and item-specific care for the harder things to get right.",
  Business: "Recurring, contract-based laundry for organisations.",
  Plans: "How your order gets to us, and how it's billed.",
};

export function ServicesList() {
  return (
    <div className="divide-y divide-border-soft">
      {serviceCategories.map((category) => {
        const items = services.filter((s) => s.category === category);
        return (
          <section key={category} className="py-16 sm:py-20">
            <Container>
              <div className="mb-10 max-w-xl">
                <p className="font-data text-xs font-medium uppercase tracking-[0.2em] text-brand">
                  {category}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {category === "Plans" ? "Delivery & Plans" : `${category} Services`}
                </h2>
                <p className="mt-2 text-sm text-muted">{categoryCopy[category]}</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, i) => (
                  <Reveal key={service.slug} delay={i * 0.04}>
                    <div
                      id={service.slug}
                      className="scroll-mt-24 flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                          <service.icon className="h-5 w-5" />
                        </span>
                        <span className="font-data text-[11px] uppercase tracking-wide text-muted">
                          {service.turnaround}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
