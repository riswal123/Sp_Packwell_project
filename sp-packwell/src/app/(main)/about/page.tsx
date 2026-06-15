import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import FactorySection from "@/components/sections/FactorySection";
import TeamSection from "@/components/sections/TeamSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us – SP Packwell & Gayatri Enterprises",
  description:
    "Learn about SP Packwell, a 15+ year manufacturer of premium BOPP packaging tapes, and Gayatri Enterprises, our exclusive distribution partner across India.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FactorySection />
      <TeamSection />
      <CertificationsSection />
      <CTASection />
    </>
  );
}
