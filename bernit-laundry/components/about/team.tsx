import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { teamMembers } from "@/lib/data/company";

export function Team() {
  return (
    <section id="team" className="border-y border-border-soft bg-surface-2/40 py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Meet the Team" title="The people behind every order" />
          <p className="max-w-xs text-sm text-muted">
            We&apos;re hiring across operations, logistics and customer experience —{" "}
            <span className="text-brand">see open roles</span> when our careers page launches.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-royal-500 to-navy-900 font-display text-lg font-semibold text-white">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-brand">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
