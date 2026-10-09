import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Orders – SP Packwell",
  description: "Track and manage your SP Packwell orders.",
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-slate-900 py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-white mb-1">My Orders</h1>
          <p className="text-slate-400 text-sm">Track and manage your orders</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">No orders yet</h2>
          <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
            Once you place an order or submit a quote request, it will appear here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
