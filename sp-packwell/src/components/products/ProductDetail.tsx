"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, MessageCircle, Phone, ShoppingCart,
  CheckCircle2, Package, Star, ChevronRight, Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types";
import { getRelatedProducts, categoryMeta } from "@/data/products";
import { getProductWhatsAppMessage, WHATSAPP_NUMBER, cn } from "@/lib/utils";
import { toast } from "sonner";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState(product.variants[0]?.size || "");
  const [selectedLength, setSelectedLength] = useState(product.variants[0]?.length || "");
  const [quantity, setQuantity] = useState(10);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "applications">("overview");

  const related = getRelatedProducts(product);
  const catMeta = categoryMeta.find((c) => c.id === product.category);

  const uniqueSizes = [...new Set(product.variants.map((v) => v.size))];
  const uniqueLengths = [...new Set(product.variants.map((v) => v.length))];

  const whatsappMsg = getProductWhatsAppMessage(product.name, selectedSize, selectedLength, quantity);

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${product.shortName} – ${selectedSize} × ${selectedLength}`,
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: product.name, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-foreground transition-colors"
            >
              {catMeta?.label}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium line-clamp-1">{product.shortName}</span>
          </nav>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        {/* Back button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden">
              <span className="text-[120px]">
                {product.category === "bopp-plain" ? "📦" :
                 product.category === "bopp-brown" ? "🟫" :
                 product.category === "bopp-color" ? "🎨" :
                 product.category === "bopp-floor" ? "🏭" :
                 product.category === "printed-tape" ? "🖨️" :
                 product.category === "jumbo-rolls" ? "🔄" :
                 product.category === "desiccant-pouches" ? "💧" : "⚙️"}
              </span>
              {product.badge && (
                <div className="absolute top-4 right-4">
                  <Badge variant={product.badge === "New" ? "new" : "default"} className="text-sm px-3 py-1">
                    {product.badge}
                  </Badge>
                </div>
              )}
            </div>

            {/* Thumbnail row */}
            <div className="flex gap-3 mt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center text-2xl cursor-pointer border-2 border-transparent hover:border-brand-500 transition-colors"
                >
                  📦
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category + badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                {catMeta?.label}
              </span>
              {product.isFeatured && (
                <Badge variant="warning" className="text-xs">
                  <Star className="h-3 w-3 fill-current mr-1" /> Featured
                </Badge>
              )}
              {product.isNew && <Badge variant="new" className="text-xs">New</Badge>}
            </div>

            <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {product.features.slice(0, 4).map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 mb-6">
              {/* Size selector */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Width: <span className="text-brand-600">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {uniqueSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                        selectedSize === size
                          ? "border-brand-500 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300"
                          : "border-border text-muted-foreground hover:border-brand-300 hover:text-foreground"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Length selector */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Length: <span className="text-brand-600">{selectedLength}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {uniqueLengths.map((length) => (
                    <button
                      key={length}
                      onClick={() => setSelectedLength(length)}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                        selectedLength === length
                          ? "border-brand-500 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300"
                          : "border-border text-muted-foreground hover:border-brand-300 hover:text-foreground"
                      )}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Quantity (boxes): <span className="text-xs text-muted-foreground font-normal">MOQ: 10 boxes</span>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(10, quantity - 10))}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-lg font-bold hover:bg-muted transition-colors"
                  >
                    −
                  </button>
                  <span className="w-16 text-center font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 10)}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-lg font-bold hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                  <span className="text-sm text-muted-foreground">boxes</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-brand-50 dark:bg-brand-950 rounded-xl p-4 mb-6 border border-brand-200 dark:border-brand-800">
              <div className="text-sm text-muted-foreground mb-1">Price</div>
              <div className="text-2xl font-bold text-brand-600">Contact for Pricing</div>
              <div className="text-xs text-muted-foreground mt-1">
                Bulk discounts available · GST extra · Free samples for B2B
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button onClick={handleAddToCart} size="lg" className="flex-1">
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1">
                <Link href="/quote">Request Quote</Link>
              </Button>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white border-0"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1">
                <a href="tel:+919552877000">
                  <Phone className="h-4 w-4" /> Call Us
                </a>
              </Button>
              <Button size="lg" variant="ghost" onClick={handleShare} className="px-3">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="flex gap-1 border-b border-border mb-8">
            {(["overview", "specs", "applications"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-5 py-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px",
                  activeTab === tab
                    ? "border-brand-500 text-brand-600"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose prose-sm max-w-none dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed text-base">{product.longDescription}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "specs" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                        <td className="px-5 py-3 font-medium text-foreground w-1/3">{spec.label}</td>
                        <td className="px-5 py-3 text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === "applications" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.applications.map((app) => (
                  <div key={app} className="flex items-center gap-3 bg-muted/30 rounded-xl p-4 border border-border">
                    <Package className="h-5 w-5 text-brand-500 shrink-0" />
                    <span className="text-sm font-medium text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link key={rp.id} href={`/products/${rp.slug}`}>
                  <Card className="card-hover cursor-pointer group">
                    <div className="h-32 bg-muted flex items-center justify-center text-5xl">
                      {rp.category === "bopp-plain" ? "📦" :
                       rp.category === "bopp-brown" ? "🟫" :
                       rp.category === "bopp-color" ? "🎨" :
                       rp.category === "bopp-floor" ? "🏭" :
                       rp.category === "printed-tape" ? "🖨️" : "📦"}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm group-hover:text-brand-600 transition-colors">
                        {rp.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{rp.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
