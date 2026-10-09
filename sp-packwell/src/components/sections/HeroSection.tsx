"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    tag: "🏭 Manufacturer Direct — Aurangabad",
    headline: "Premium BOPP",
    highlight: "Packaging Tape",
    sub: "BOPP Plain & Brown Tape",
    description:
      "SP Packwell manufactures high-performance BOPP tapes, packing materials, chemicals & fasteners. Trusted by 2,500+ businesses across India. Direct factory pricing from Waluj MIDC, Aurangabad.",
    cta: "Explore Products",
    ctaHref: "/products",
    secondaryCta: "Get B2B Quote",
    secondaryHref: "/quote",
    image: "/images/products/plain-tape-1.jpg",
    gradient: "from-slate-900 via-slate-800 to-brand-950",
    accent: "brand",
  },
  {
    tag: "🖨️ Custom Branding",
    headline: "Your Brand on",
    highlight: "Every Roll",
    sub: "Custom Printed Tape",
    description:
      "Flexographic printing in up to 3 colors. Enhance your unboxing experience and deter pilferage with branded packaging tape. MOQ 500 rolls.",
    cta: "Custom Printing",
    ctaHref: "/products/custom-printed-bopp-tape",
    secondaryCta: "Request Sample",
    secondaryHref: "/quote",
    image: "/images/products/printed-tape-1.jpg",
    gradient: "from-slate-900 via-slate-800 to-slate-900",
    accent: "purple",
  },
  {
    tag: "📦 Complete Range",
    headline: "Bubble Wrap &",
    highlight: "Stretch Film",
    sub: "Protective Packaging",
    description:
      "Beyond tape — SP Packwell supplies bubble wrap, stretch film, PP strapping, desiccant pouches, and safety PPE for complete packaging solutions.",
    cta: "View All Products",
    ctaHref: "/products",
    secondaryCta: "Get Quote",
    secondaryHref: "/quote",
    image: "/images/products/bubble-wrap-1.jpg",
    gradient: "from-slate-900 via-slate-800 to-slate-900",
    accent: "green",
  },
  {
    tag: "🤝 Gayatri Enterprises",
    headline: "Wholesale &",
    highlight: "Distribution",
    sub: "Pan-India Network",
    description:
      "Gayatri Enterprises — exclusive distribution partner of SP Packwell. Serving wholesalers, retailers, and industrial buyers across 18+ states.",
    cta: "Become a Dealer",
    ctaHref: "/contact",
    secondaryCta: "View Products",
    secondaryHref: "/products",
    image: "/images/hero/company-strip.jpg",
    gradient: "from-slate-900 via-slate-800 to-slate-900",
    accent: "green",
  },
];

const trustBadges = [
  "ISO Certified Manufacturing",
  "15+ Years Experience",
  "2,500+ Happy Clients",
  "Pan-India Delivery",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-600/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="container-max px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                    {slide.tag}
                  </div>

                  {/* Headline */}
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                    {slide.headline}{" "}
                    <span className="text-gradient">{slide.highlight}</span>
                  </h1>

                  <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    <Button asChild size="lg" variant="gradient">
                      <Link href={slide.ctaHref}>
                        {slide.cta} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                      <Link href={slide.secondaryHref}>
                        {slide.secondaryCta}
                      </Link>
                    </Button>
                  </div>

                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-3">
                    {trustBadges.map((badge) => (
                      <div key={badge} className="flex items-center gap-1.5 text-xs text-slate-400">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-500" />
                        {badge}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — Product showcase cards */}
            <div className="hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Main card */}
                  <div className="glass rounded-2xl overflow-hidden border border-white/10">
                    {/* Product image */}
                    <div className="relative h-52 w-full">
                      <Image
                        src={slide.image}
                        alt={slide.sub}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-display font-bold text-white">
                          {slide.sub}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                    <p className="text-slate-400 text-sm mb-6">
                      Available in 2&quot;, 2.5&quot;, 3&quot;, 4&quot; widths · 30–300 mtr lengths
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {["2 inch", "2.5 inch", "3 inch", "4 inch"].map((size) => (
                        <div key={size} className="bg-white/5 rounded-lg px-3 py-2 text-center text-sm text-slate-300 border border-white/10">
                          {size}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-500">Starting from</div>
                        <div className="text-lg font-bold text-brand-400">Contact for Price</div>
                      </div>
                      <Button asChild size="sm" variant="gradient">
                        <Link href="/quote">Get Quote</Link>
                      </Button>
                    </div>
                    </div>
                  </div>

                  {/* Floating stats */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-brand-500 text-white rounded-xl px-4 py-3 shadow-lg"
                  >
                    <div className="text-2xl font-bold">2500+</div>
                    <div className="text-xs text-brand-100">Happy Clients</div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl px-4 py-3 shadow-lg border border-border"
                  >
                    <div className="text-2xl font-bold text-foreground">15+</div>
                    <div className="text-xs text-muted-foreground">Years Manufacturing</div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-2 mt-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-brand-500" : "w-3 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative flex justify-center pb-8">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-500"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}
