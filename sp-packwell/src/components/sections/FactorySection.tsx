"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, CheckCircle2 } from "lucide-react";

const capabilities = [
  "Automated BOPP film coating lines",
  "Hot-melt adhesive application units",
  "High-speed slitting machines",
  "Custom printing (flexographic, up to 3 colors)",
  "In-house quality testing laboratory",
  "Jumbo roll manufacturing for converters",
  "Cold storage for adhesive raw materials",
  "Dedicated dispatch & logistics bay",
];

const factoryImages = [
  { src: "/images/factory/factory-1.jpg", alt: "Production Floor" },
  { src: "/images/factory/factory-2.jpg", alt: "BOPP Coating Line" },
  { src: "/images/factory/factory-3.jpg", alt: "Slitting Section" },
  { src: "/images/factory/factory-4.jpg", alt: "Finished Goods" },
  { src: "/images/factory/factory-5.jpg", alt: "Packaging Station" },
  { src: "/images/factory/factory-6.jpg", alt: "Dispatch Area" },
];

export default function FactorySection() {
  return (
    <section id="factory" className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Factory className="h-4 w-4" /> Manufacturing Facility
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our <span className="text-gradient">Factory</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            50,000 sq ft state-of-the-art manufacturing facility at Waluj MIDC, Aurangabad.
            Every roll is made with precision and quality control.
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-14">
          {factoryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative h-52 rounded-xl overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Manufacturing Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {capabilities.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl p-8 text-white"
          >
            <h3 className="text-xl font-display font-bold mb-6 text-brand-400">
              Factory Location
            </h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Workshop / Manufacturing</div>
                <div className="leading-relaxed">
                  X-340, Phase No 3, Shop No 10/21/22,<br />
                  Behind Dreamline Hotel, Bajaj Nagar,<br />
                  <span className="text-brand-400 font-medium">Waluj MIDC, Aurangabad – 431136</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Office</div>
                <div className="leading-relaxed">
                  12th Scheme, Shivaji Nagar,<br />
                  Opp Morya Mangal Karyalaya,<br />
                  <span className="text-brand-400 font-medium">Aurangabad, Maharashtra</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700">
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">Contact</div>
                <a href="tel:+919552877000" className="block hover:text-brand-400 transition-colors">
                  📞 +91 95528 77000
                </a>
                <a href="tel:+918983377000" className="block hover:text-brand-400 transition-colors">
                  📞 +91 89833 77000
                </a>
                <a href="mailto:sp.packwell1@gmail.com" className="block hover:text-brand-400 transition-colors mt-1">
                  ✉️ sp.packwell1@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
