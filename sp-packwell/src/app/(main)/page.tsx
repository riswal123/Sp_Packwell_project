import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import CategoriesSection from "@/components/sections/CategoriesSection";

export const metadata: Metadata = {
  title: "SP Packwell – Premium BOPP Packaging Tape Manufacturer",
  description:
    "SP Packwell manufactures premium BOPP packaging tapes, printed tapes, brown tapes, jumbo rolls, and desiccant pouches. Distributed by Gayatri Enterprises across India.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <ProductsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
