import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Quotes – SP Packwell",
  description: "View and manage your quote requests with SP Packwell.",
};

export default function QuotesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-slate-900 py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-display font-bold text-white mb-1">My Quotes</h1>
          <p className="text-slate-400 text-sm">Track your quote requests and responses</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">No quotes yet</h2>
          <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
            Submit a quote request and our team will respond within 4 business hours.
          </p>
          <Button asChild>
            <Link href="/quote">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
