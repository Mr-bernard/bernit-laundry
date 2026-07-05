import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { PricingCalculator } from "@/components/pricing/pricing-calculator";
import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Pricing Calculator",
  description:
    "Get an instant, itemised laundry and dry cleaning quote based on weight, item count, distance, urgency and special care.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Estimate your order in seconds"
        description="Adjust the details below for an instant, transparent quote. The exact same inputs used at checkout."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <PricingCalculator />
        </Container>
      </section>
    </>
  );
}
