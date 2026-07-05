import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ServicesList } from "@/components/services/services-list";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Bernit Laundry's full range of services — laundry, dry cleaning, express, corporate, hotel, hospital, specialty item care, and subscriptions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Every fabric. Every schedule. One tracked process."
        description="Sixteen services, one consistent standard of care — from a single shirt to a hotel's weekly linen turnover."
      />
      <ServicesList />
      <CtaBanner
        title="Not sure which service fits?"
        description="Run your item count and weight through the calculator for an instant, itemised estimate."
        primaryLabel="Open the pricing calculator"
      />
    </>
  );
}
