"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { getInitials } from "@/lib/utils";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `radial-gradient(circle, rgba(34,212,120,0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="container-max relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Star className="h-4 w-4 fill-current" /> Customer Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
          >
            Trusted by <span className="text-gradient">2,500+ Businesses</span>
          </motion.h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-8 md:p-12 border border-white/10"
              >
                <Quote className="h-10 w-10 text-brand-500/40 mb-6" />
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-lg">
                      {getInitials(testimonials[current].name)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonials[current].name}</div>
                      <div className="text-sm text-slate-400">
                        {testimonials[current].role} · {testimonials[current].company}
                      </div>
                      <div className="text-xs text-slate-500">{testimonials[current].location}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-brand-500" : "w-3 bg-slate-600"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini testimonial grid */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-4 border border-white/10 cursor-pointer hover:border-brand-500/30 transition-colors"
              onClick={() => setCurrent(i)}
            >
              <div className="flex gap-1 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-400 line-clamp-2 mb-3">&ldquo;{t.content}&rdquo;</p>
              <div className="text-xs font-medium text-slate-300">{t.name}</div>
              <div className="text-xs text-slate-500">{t.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
