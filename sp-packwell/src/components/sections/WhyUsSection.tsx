"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Truck, HeadphonesIcon, Award, Factory } from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Direct from Manufacturer",
    description:
      "No middlemen. Buy directly from SP Packwell's factory and get the best prices with guaranteed quality.",
    color: "text-brand-600 bg-brand-50 dark:bg-brand-950",
  },
  {
    icon: Shield,
    title: "Consistent Quality",
    description:
      "Every roll is manufactured under strict quality control. Uniform adhesive coating, consistent film thickness, minimal splices.",
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Standard orders dispatched in 2–3 business days. Express options available for urgent requirements.",
    color: "text-yellow-600 bg-yellow-50 dark:bg-yellow-950",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description:
      "Gayatri Enterprises ensures reliable delivery across 18+ states through our established logistics network.",
    color: "text-purple-600 bg-purple-50 dark:bg-purple-950",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Dedicated account managers for B2B clients. WhatsApp, phone, and email support with 4-hour response time.",
    color: "text-orange-600 bg-orange-50 dark:bg-orange-950",
  },
  {
    icon: Award,
    title: "Custom Solutions",
    description:
      "Custom sizes, custom printing, custom packaging — we engineer solutions to match your exact requirements.",
    color: "text-pink-600 bg-pink-50 dark:bg-pink-950",
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Award className="h-4 w-4" /> Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4"
          >
            The SP Packwell <span className="text-gradient">Advantage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            15 years of manufacturing excellence, backed by Gayatri Enterprises&apos; distribution network.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${reason.color}`}>
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
