import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border-soft py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-royal-500/10 blur-[100px]" />
      </div>
      <Container>
        <Reveal>
          <p className="font-data text-xs font-medium uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-4xl font-bold text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
