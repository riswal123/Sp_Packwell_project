"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, X, ArrowRight, Star, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { products, categoryMeta } from "@/data/products";
import type { ProductCategory } from "@/types";
import { cn } from "@/lib/utils";

export default function ProductCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as ProductCategory | null;

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">(
    initialCategory || "all"
  );
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const categoryIcons: Record<string, string> = {
    "bopp-plain": "📦",
    "bopp-brown": "🟫",
    "bopp-color": "🎨",
    "bopp-floor": "🏭",
    "printed-tape": "🖨️",
    "jumbo-rolls": "🔄",
    "desiccant-pouches": "💧",
    industrial: "⚙️",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="bg-slate-900 pt-8 pb-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Complete range of BOPP packaging tapes and industrial packaging solutions.
              Manufacturer direct pricing.
            </p>
          </div>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<Search className="h-4 w-4" />}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:w-auto"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {selectedCategory !== "all" && (
              <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-[10px]">1</Badge>
            )}
          </Button>
          {(search || selectedCategory !== "all") && (
            <Button
              variant="ghost"
              onClick={() => { setSearch(""); setSelectedCategory("all"); }}
              className="sm:w-auto text-muted-foreground"
            >
              <X className="h-4 w-4" /> Clear
            </Button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
              selectedCategory === "all"
                ? "bg-brand-500 text-white"
                : "bg-muted text-muted-foreground hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950"
            )}
          >
            All Products ({products.length})
          </button>
          {categoryMeta.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5",
                  selectedCategory === cat.id
                    ? "bg-brand-500 text-white"
                    : "bg-muted text-muted-foreground hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950"
                )}
              >
                <span>{cat.icon}</span>
                {cat.label}
                <span className="text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="text-sm text-muted-foreground mb-6">
          Showing {filtered.length} of {products.length} products
          {selectedCategory !== "all" && (
            <span> in <strong>{categoryMeta.find((c) => c.id === selectedCategory)?.label}</strong></span>
          )}
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
            <Button onClick={() => { setSearch(""); setSelectedCategory("all"); }}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link href={`/products/${product.slug}`}>
                  <Card className="h-full card-hover cursor-pointer group overflow-hidden">
                    {/* Image area */}
                    <div className="h-44 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {categoryIcons[product.category] || "📦"}
                      </span>
                      <div className="absolute top-2 right-2 flex flex-col gap-1">
                        {product.badge && (
                          <Badge variant={product.badge === "New" ? "new" : "default"} className="text-[10px]">
                            {product.badge}
                          </Badge>
                        )}
                        {product.isFeatured && (
                          <Badge variant="warning" className="text-[10px]">
                            <Star className="h-2.5 w-2.5 fill-current mr-0.5" /> Featured
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold uppercase tracking-wider mb-1">
                        {categoryMeta.find((c) => c.id === product.category)?.label}
                      </div>
                      <h3 className="font-semibold text-sm text-foreground group-hover:text-brand-600 transition-colors mb-1.5 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                        {product.description}
                      </p>

                      {/* Sizes */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.variants.slice(0, 4).map((v, vi) => (
                          <span key={vi} className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                            {v.size}
                          </span>
                        ))}
                        {product.variants.length > 4 && (
                          <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                            +{product.variants.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-brand-600">Contact for Price</span>
                        <span className="flex items-center gap-0.5 text-xs text-brand-600 font-medium group-hover:gap-1.5 transition-all">
                          Details <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* B2B CTA */}
        <div className="mt-16 bg-gradient-to-r from-brand-50 to-brand-100 dark:from-brand-950 dark:to-brand-900 rounded-2xl p-8 text-center border border-brand-200 dark:border-brand-800">
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">
            Need bulk pricing or custom specifications?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our B2B team handles custom sizes, custom printing, and volume discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/quote">Request B2B Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
