import type { Metadata } from "next";
import { Suspense } from "react";
import ProductCatalog from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Products – BOPP Tapes & Packaging Solutions",
  description:
    "Browse SP Packwell's complete range of BOPP packaging tapes, printed tapes, floor marking tapes, jumbo rolls, and desiccant pouches. Filter by category, size, and length.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">Loading products...</p>
        </div>
      </div>
    }>
      <ProductCatalog />
    </Suspense>
  );
}
