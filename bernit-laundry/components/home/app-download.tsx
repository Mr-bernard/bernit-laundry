import { Smartphone, Apple, Bell } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function AppDownload() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="grid items-center gap-8 rounded-2xl border border-border-soft bg-surface p-8 sm:p-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                <Bell className="h-3 w-3" /> Coming soon
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                The Bernit app — booking and tracking, in your pocket
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                Push notifications for every stage, one-tap rebooking, and offline-ready digital receipts.
                Leave your email above and we&apos;ll let you know the moment it&apos;s live.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <div className="flex h-14 items-center gap-2.5 rounded-xl border border-border-soft bg-surface-2 px-4 opacity-70">
                <Apple className="h-6 w-6 text-foreground" />
                <div className="text-left">
                  <p className="text-[10px] leading-none text-muted">Coming soon on</p>
                  <p className="text-sm font-medium leading-tight text-foreground">App Store</p>
                </div>
              </div>
              <div className="flex h-14 items-center gap-2.5 rounded-xl border border-border-soft bg-surface-2 px-4 opacity-70">
                <Smartphone className="h-6 w-6 text-foreground" />
                <div className="text-left">
                  <p className="text-[10px] leading-none text-muted">Coming soon on</p>
                  <p className="text-sm font-medium leading-tight text-foreground">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
