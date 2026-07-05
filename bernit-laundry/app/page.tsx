import { Hero } from "@/components/home/hero";
import { WhyChoose } from "@/components/home/why-choose";
import { ServicesPreview } from "@/components/home/services-preview";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { PricingPreview } from "@/components/home/pricing-preview";
import { Promotions } from "@/components/home/promotions";
import { Faq } from "@/components/home/faq";
import { Newsletter } from "@/components/home/newsletter";
import { AppDownload } from "@/components/home/app-download";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Promotions />
      <WhyChoose />
      <ServicesPreview />
      <HowItWorks />
      <Testimonials />
      <PricingPreview />
      <Faq />
      <Newsletter />
      <AppDownload />
    </main>
  );
}
