"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Factory, Users, Globe } from "lucide-react";

const milestones = [
  { year: "2009", event: "SP Packwell founded in Maharashtra" },
  { year: "2012", event: "First automated BOPP coating line installed" },
  { year: "2015", event: "Gayatri Enterprises partnership established" },
  { year: "2018", event: "Expanded to custom printed tape division" },
  { year: "2021", event: "Desiccant pouches product line launched" },
  { year: "2024", event: "Pan-India distribution across 18+ states" },
];

const highlights = [
  { icon: Factory, label: "Manufacturing Facility", value: "50,000 sq ft" },
  { icon: Award, label: "Years of Excellence", value: "15+" },
  { icon: Users, label: "Workforce", value: "120+" },
  { icon: Globe, label: "States Served", value: "18+" },
];

export default function AboutHero() {
  return (
    <section className="bg-slate-900 pt-24 pb-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🏭 Our Story
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Built on Quality,{" "}
            <span className="text-gradient">Driven by Trust</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            SP Packwell has been manufacturing premium BOPP packaging solutions since 2009.
            Partnered with Gayatri Enterprises, we serve 2,500+ businesses across India with
            consistent quality and reliable supply.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <h.icon className="h-8 w-8 text-brand-400 mx-auto mb-3" />
              <div className="text-3xl font-display font-bold text-white mb-1">{h.value}</div>
              <div className="text-sm text-slate-400">{h.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-white text-center mb-10">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-brand-500/30" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="glass rounded-xl p-4 inline-block">
                      <div className="text-brand-400 font-bold text-sm mb-1">{m.year}</div>
                      <div className="text-white text-sm">{m.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-brand-500 border-4 border-slate-900 shrink-0 z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
