import { Star, Quote } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="border-y border-border-soft bg-surface-2/40 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What customers say after the first delivery" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <figure className="flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6">
                <Quote className="h-5 w-5 text-accent" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-3.5 w-3.5 ${idx < t.rating ? "fill-accent text-accent" : "text-border-soft"}`}
                    />
                  ))}
                </div>
                <figcaption className="mt-3 text-sm">
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-muted">
                    {t.location} · {t.service}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
