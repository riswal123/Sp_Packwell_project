"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const team = [
  {
    name: "Mr. Sunil Riswal",
    role: "Proprietor & Founder",
    description:
      "Founded SP Packwell with a vision to manufacture premium quality BOPP tapes and packaging solutions for Indian businesses. 15+ years of industry experience.",
    initials: "SR",
    color: "bg-brand-500",
  },
  {
    name: "Gayatri Enterprises",
    role: "Exclusive Distribution Partner",
    description:
      "Handles wholesale supply, regional sales, and customer support across Maharashtra and neighboring states. Our trusted distribution arm since 2015.",
    initials: "GE",
    color: "bg-emerald-500",
  },
  {
    name: "Production Team",
    role: "Manufacturing & Quality",
    description:
      "120+ skilled professionals managing BOPP tape manufacturing, quality control, slitting, printing, and packaging operations at Waluj MIDC.",
    initials: "PT",
    color: "bg-blue-500",
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container-max">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Users className="h-4 w-4" /> The Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4"
          >
            People Behind <span className="text-gradient">SP Packwell</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A dedicated team committed to quality manufacturing and excellent customer service.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center card-hover"
            >
              <div className={`w-16 h-16 rounded-full ${member.color} flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold font-display`}>
                {member.initials}
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">
                {member.name}
              </h3>
              <div className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-3">
                {member.role}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
