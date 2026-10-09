import type { Metadata } from "next";
import CartPage from "@/components/cart/CartPage";

export const metadata: Metadata = {
  title: "Your Cart – SP Packwell",
  description: "Review your selected products and request a bulk quote.",
};

export default function Cart() {
  return <CartPage />;
}
