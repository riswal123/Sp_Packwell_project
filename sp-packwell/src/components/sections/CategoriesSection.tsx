"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { categoryMeta } from "@/data/products";
import { cn } from "@/lib/utils";

export default function CategoriesSection() {
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
            <Layers className="h-4 w-4" /> Product Categories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4"
          >
            Complete <span className="text-gradient">Packaging Range</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From standard BOPP tapes to industrial packaging solutions — one manufacturer, complete range.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoryMeta.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link
                href={`/products?category=${cat.id}`}
                className="group block bg-card border border-border rounded-xl overflow-hidden card-hover"
              >
                {/* Product image */}
                <div className="relative h-36 overflow-hidden bg-muted/40">
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={cn(
                      "w-full h-full bg-gradient-to-br flex items-center justify-center text-4xl",
                      cat.color
                    )}>
                      {cat.icon}
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Icon badge */}
                  <div className={cn(
                    "absolute top-2 right-2 w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-sm shadow-md",
                    cat.color
                  )}>
                    {cat.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-brand-600 transition-colors mb-1 line-clamp-1">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-brand-600 font-medium">
                    View Products <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
