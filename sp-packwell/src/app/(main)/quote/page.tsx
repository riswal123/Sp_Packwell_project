import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote – B2B Bulk Pricing",
  description:
    "Request a bulk pricing quote for BOPP tapes and packaging solutions. MOQ from 10 boxes. Our team responds within 4 business hours.",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-slate-900 pt-8 pb-12">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            🤝 B2B Quote Request
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Get a <span className="text-gradient">Custom Quote</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Fill in your requirements and our team will respond with pricing, availability,
            and samples within 4 business hours.
          </p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why quote */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                Why Request a Quote?
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Volume-based pricing — the more you order, the better the price",
                  "Custom sizes and lengths available",
                  "Custom printing with your logo",
                  "Free samples before bulk order",
                  "Dedicated account manager",
                  "GST invoice with every order",
                  "30-day credit for approved accounts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                Prefer to talk directly?
              </h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/917720990081?text=Hello SP Packwell, I need a bulk pricing quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 text-white rounded-lg px-4 py-3 text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  <span className="text-lg">💬</span>
                  WhatsApp: +91 77209 90081
                </a>
                <a
                  href="tel:+917720990081"
                  className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-border rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                >
                  <span className="text-lg">📞</span>
                  Call: +91 77209 90081
                </a>
                <a
                  href="mailto:info@sppackwell.com"
                  className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-border rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                >
                  <span className="text-lg">📧</span>
                  info@sppackwell.com
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="font-semibold text-foreground">4-Hour Response</div>
              <div className="text-sm text-muted-foreground mt-1">
                Mon–Sat, 9 AM – 7 PM IST
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
