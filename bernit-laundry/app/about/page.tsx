import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { OurStory } from "@/components/about/our-story";
import { MissionVision } from "@/components/about/mission-vision";
import { CoreValues } from "@/components/about/core-values";
import { Team } from "@/components/about/team";
import { Sustainability } from "@/components/about/sustainability";
import { QualityAssurance } from "@/components/about/quality-assurance";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bernit Laundry's story, mission, and commitment to solar-powered, quality-assured laundry service across Abuja and beyond.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Bernit"
        title="Hospitality-grade laundry care, for everyone"
        description="A Bernit Global Limited company built on transparency, sustainability, and a level of care that doesn't change with the size of the order."
      />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Team />
      <Sustainability />
      <QualityAssurance />
    </>
  );
}
