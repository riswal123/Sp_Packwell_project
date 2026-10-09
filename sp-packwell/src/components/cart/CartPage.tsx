"use client";

import React from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { formatCurrency, WHATSAPP_NUMBER } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, gst, total, clearCart } = useCartStore();

  // Build a WhatsApp message with all cart items
  const buildWhatsAppMsg = () => {
    if (items.length === 0) return "";
    const lines = items.map(
      (i) => `• ${i.name} – ${i.size} × ${i.length} — Qty: ${i.quantity} boxes`
    );
    return encodeURIComponent(
      `Hello SP Packwell! I'd like to order:\n\n${lines.join("\n")}\n\nPlease share pricing and confirm availability.`
    );
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-display font-bold text-foreground mb-3">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">
            Browse our products and add items to get a bulk pricing quote.
          </p>
          <Button asChild size="lg">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-slate-900 py-10">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-white mb-1">Your Cart</h1>
          <p className="text-slate-400 text-sm">{items.length} item{items.length !== 1 ? "s" : ""} selected</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.variantSku}
                className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row gap-4"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-3xl shrink-0">
                  📦
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {item.size} × {item.length}
                  </p>

                  {/* Qty controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.variantSku, item.quantity - item.moq)}
                      disabled={item.quantity <= item.moq}
                      className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-10 text-center font-semibold text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.variantSku, item.quantity + item.moq)}
                      className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                    <span className="text-xs text-muted-foreground">boxes (MOQ: {item.moq})</span>
                  </div>
                </div>

                {/* Price + remove */}
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                  {item.price ? (
                    <div className="text-sm font-bold text-foreground">
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  ) : (
                    <div className="text-xs font-semibold text-brand-600">Price on request</div>
                  )}
                  <button
                    onClick={() => removeItem(item.variantSku)}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-xs text-muted-foreground hover:text-destructive transition-colors mt-2"
            >
              Clear entire cart
            </button>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display font-semibold text-lg text-foreground mb-4">Order Summary</h2>

              <div className="space-y-2.5 text-sm mb-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{subtotal > 0 ? formatCurrency(subtotal) : "—"}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>GST (18%)</span>
                  <span>{gst > 0 ? formatCurrency(gst) : "—"}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-brand-600">Calculated at checkout</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between font-semibold text-foreground">
                  <span>Total</span>
                  <span>{total > 0 ? formatCurrency(total) : "Contact for price"}</span>
                </div>
              </div>

              <div className="bg-brand-50 dark:bg-brand-950 rounded-lg p-3 text-xs text-brand-700 dark:text-brand-300 mb-4">
                💡 All prices are on request. Our team will confirm pricing within 4 hours.
              </div>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full">
                  <Link href="/quote">
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white border-0"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMsg()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" /> Order via WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Continue shopping */}
            <Button asChild variant="outline" className="w-full">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
