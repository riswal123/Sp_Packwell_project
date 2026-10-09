import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Checkout – SP Packwell",
  description: "Complete your order with SP Packwell.",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-3xl font-display font-bold text-foreground mb-3">
          Checkout Coming Soon
        </h1>
        <p className="text-muted-foreground mb-6">
          Online checkout is under development. For now, please request a quote
          or contact us directly to place your order.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/quote">Request a Quote</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
