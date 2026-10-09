"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "ISO Certified Manufacturing",
    description:
      "Our manufacturing processes follow ISO quality management standards, ensuring consistent product quality across every batch.",
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950",
  },
  {
    icon: BadgeCheck,
    title: "Food-Grade Desiccants",
    description:
      "Silica gel desiccant pouches are food-grade, RoHS compliant, REACH compliant, and FDA approved. Test certificates available with bulk orders.",
    color: "text-green-600 bg-green-50 dark:bg-green-950",
  },
  {
    icon: Award,
    title: "GST Registered Business",
    description:
      "Fully GST-registered manufacturer. All orders come with proper GST invoices supporting input tax credit for B2B buyers.",
    color: "text-brand-600 bg-brand-50 dark:bg-brand-950",
  },
  {
    icon: ShieldCheck,
    title: "PPE Safety Standards",
    description:
      "Safety & PPE products meet ISI, CE, and FDA standards where applicable. Certified products for industrial and commercial use.",
    color: "text-orange-600 bg-orange-50 dark:bg-orange-950",
  },
  {
    icon: BadgeCheck,
    title: "BIS Compliant Tapes",
    description:
      "BOPP tapes manufactured in compliance with BIS standards. Consistent film thickness, adhesive coating, and tensile strength across all rolls.",
    color: "text-purple-600 bg-purple-50 dark:bg-purple-950",
  },
  {
    icon: Award,
    title: "15+ Years of Trust",
    description:
      "Over 15 years of uninterrupted manufacturing and supply to 2,500+ businesses across 18+ states in India.",
    color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950",
  },
];

export default function CertificationsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Award className="h-4 w-4" /> Certifications & Standards
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4"
          >
            Quality You Can <span className="text-gradient">Trust</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Every product from SP Packwell meets strict quality and compliance standards.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cert.color}`}>
                <cert.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
