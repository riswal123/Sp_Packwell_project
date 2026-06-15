"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus, Trash2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/products";
import { toast } from "sonner";

const quoteSchema = z.object({
  companyName: z.string().min(2, "Company name required"),
  contactName: z.string().min(2, "Contact name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  city: z.string().min(2, "City required"),
  state: z.string().min(2, "State required"),
  gstNumber: z.string().optional(),
  businessType: z.enum(["manufacturer", "distributor", "retailer", "end-user", "other"]),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteItem {
  productId: string;
  size: string;
  length: string;
  quantity: number;
  notes: string;
}

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh",
];

export default function QuoteForm() {
  const [items, setItems] = useState<QuoteItem[]>([
    { productId: "", size: "", length: "", quantity: 10, notes: "" },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { businessType: "manufacturer" },
  });

  const addItem = () => {
    setItems([...items, { productId: "", size: "", length: "", quantity: 10, notes: "" }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof QuoteItem, value: string | number) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const onSubmit = async (data: QuoteFormData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Quote submitted:", { ...data, items });
      setSubmitted(true);
      toast.success("Quote request submitted!", {
        description: "Our team will contact you within 4 business hours.",
      });
    } catch {
      toast.error("Failed to submit. Please try again or WhatsApp us.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-12 text-center">
        <div className="w-20 h-20 bg-brand-50 dark:bg-brand-950 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-brand-500" />
        </div>
        <h2 className="text-2xl font-display font-bold text-foreground mb-3">
          Quote Request Submitted!
        </h2>
        <p className="text-muted-foreground mb-6">
          Thank you! Our team will review your requirements and contact you within 4 business hours
          with pricing and availability.
        </p>
        <div className="bg-muted/50 rounded-xl p-4 text-sm text-muted-foreground mb-6">
          <strong>Reference:</strong> SPP-{Date.now().toString(36).toUpperCase()}
        </div>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Submit Another Quote
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Company Details */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="font-display font-semibold text-xl text-foreground mb-6">
          Company Details
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Company Name *"
            placeholder="Your company name"
            error={errors.companyName?.message}
            {...register("companyName")}
          />
          <Input
            label="Contact Person *"
            placeholder="Your full name"
            error={errors.contactName?.message}
            {...register("contactName")}
          />
          <Input
            label="Email Address *"
            type="email"
            placeholder="you@company.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Phone Number *"
            type="tel"
            placeholder="+91 98765 43210"
            error={errors.phone?.message}
            {...register("phone")}
          />
          <Input
            label="City *"
            placeholder="Your city"
            error={errors.city?.message}
            {...register("city")}
          />
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-foreground">State *</label>
            <select
              className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...register("state")}
            >
              <option value="">Select state</option>
              {INDIAN_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.state && <p className="text-xs text-destructive">{errors.state.message}</p>}
          </div>
          <Input
            label="GST Number (optional)"
            placeholder="27XXXXX0000X1ZX"
            {...register("gstNumber")}
          />
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-foreground">Business Type *</label>
            <select
              className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...register("businessType")}
            >
              <option value="manufacturer">Manufacturer</option>
              <option value="distributor">Distributor / Wholesaler</option>
              <option value="retailer">Retailer</option>
              <option value="end-user">End User</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Requirements */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-semibold text-xl text-foreground">
            Product Requirements
          </h2>
          <Button type="button" variant="outline" size="sm" onClick={addItem}>
            <Plus className="h-4 w-4" /> Add Product
          </Button>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-muted/30 rounded-xl p-4 border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">Product {index + 1}</span>
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-destructive hover:text-destructive/80 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-foreground mb-1">Product</label>
                  <select
                    className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={item.productId}
                    onChange={(e) => updateItem(index, "productId", e.target.value)}
                  >
                    <option value="">Select product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Size (Width)</label>
                  <select
                    className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={item.size}
                    onChange={(e) => updateItem(index, "size", e.target.value)}
                  >
                    <option value="">Select size</option>
                    <option value="2 inch">2 inch</option>
                    <option value="2.5 inch">2.5 inch</option>
                    <option value="3 inch">3 inch</option>
                    <option value="4 inch">4 inch</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Length</label>
                  <select
                    className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={item.length}
                    onChange={(e) => updateItem(index, "length", e.target.value)}
                  >
                    <option value="">Select length</option>
                    {["30 mtr", "65 mtr", "100 mtr", "150 mtr", "200 mtr", "250 mtr", "300 mtr", "Custom"].map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Qty (boxes)</label>
                  <input
                    type="number"
                    min={10}
                    step={10}
                    value={item.quantity}
                    onChange={(e) => updateItem(index, "quantity", parseInt(e.target.value))}
                    className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-foreground mb-1">Notes (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., custom color, specific adhesive, delivery date..."
                    value={item.notes}
                    onChange={(e) => updateItem(index, "notes", e.target.value)}
                    className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional message */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <Textarea
          label="Additional Message (optional)"
          placeholder="Any specific requirements, delivery timeline, or questions..."
          rows={4}
          {...register("message")}
        />
      </div>

      <Button type="submit" size="xl" className="w-full" loading={loading}>
        <Send className="h-5 w-5" />
        Submit Quote Request
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By submitting, you agree to be contacted by SP Packwell / Gayatri Enterprises regarding your inquiry.
      </p>
    </form>
  );
}
