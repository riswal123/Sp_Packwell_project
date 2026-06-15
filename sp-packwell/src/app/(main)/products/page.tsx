import type { Metadata } from "next";
import ProductCatalog from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Products – BOPP Tapes & Packaging Solutions",
  description:
    "Browse SP Packwell's complete range of BOPP packaging tapes, printed tapes, floor marking tapes, jumbo rolls, and desiccant pouches. Filter by category, size, and length.",
};

export default function ProductsPage() {
  return <ProductCatalog />;
}
