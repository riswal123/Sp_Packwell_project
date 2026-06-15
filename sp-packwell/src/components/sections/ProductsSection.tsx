"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedProducts } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductsSection() {
  const featured = getFeaturedProducts();

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Package className="h-4 w-4" /> Our Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4"
          >
            Featured <span className="text-gradient">Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From standard BOPP tapes to custom-printed solutions — manufactured with precision,
            delivered with reliability.
          </motion.p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={`/products/${product.slug}`}>
                <Card className="h-full card-hover cursor-pointer group overflow-hidden">
                  {/* Image placeholder with gradient */}
                  <div className={cn(
                    "h-48 bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
                    i % 3 === 0 ? "from-sky-50 to-blue-100 dark:from-sky-950 dark:to-blue-900" :
                    i % 3 === 1 ? "from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-900" :
                    "from-brand-50 to-green-100 dark:from-brand-950 dark:to-green-900"
                  )}>
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                      {product.category === "bopp-plain" ? "📦" :
                       product.category === "bopp-brown" ? "🟫" :
                       product.category === "bopp-color" ? "🎨" :
                       product.category === "bopp-floor" ? "🏭" :
                       product.category === "printed-tape" ? "🖨️" :
                       product.category === "jumbo-rolls" ? "🔄" :
                       product.category === "desiccant-pouches" ? "💧" : "⚙️"}
                    </span>
                    {product.badge && (
                      <div className="absolute top-3 right-3">
                        <Badge variant={product.badge === "New" ? "new" : "default"}>
                          {product.badge}
                        </Badge>
                      </div>
                    )}
                    {product.isFeatured && (
                      <div className="absolute top-3 left-3">
                        <div className="flex items-center gap-1 bg-yellow-400/90 text-yellow-900 text-xs font-semibold px-2 py-0.5 rounded-full">
                          <Star className="h-3 w-3 fill-current" /> Featured
                        </div>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-5">
                    <div className="text-xs text-brand-600 dark:text-brand-400 font-medium uppercase tracking-wide mb-1">
                      {product.category.replace(/-/g, " ")}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-brand-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {product.description}
                    </p>

                    {/* Sizes */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {["2\"", "2.5\"", "3\"", "4\""].map((s) => (
                        <span key={s} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground">Price</div>
                        <div className="text-sm font-semibold text-brand-600">Contact for Quote</div>
                      </div>
                      <div className="flex items-center gap-1 text-brand-600 text-sm font-medium group-hover:gap-2 transition-all">
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
