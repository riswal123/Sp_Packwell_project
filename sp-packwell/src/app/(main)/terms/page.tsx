import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions – SP Packwell",
  description: "Terms and conditions for purchasing from SP Packwell.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-slate-900 py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-2">Terms &amp; Conditions</h1>
          <p className="text-slate-400">Last updated: October 2026</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2>Orders and Pricing</h2>
          <p>
            All prices are subject to change without notice. A confirmed order is binding once
            a purchase order is accepted by SP Packwell or Gayatri Enterprises. Prices are
            exclusive of GST unless stated otherwise.
          </p>

          <h2>Minimum Order Quantity</h2>
          <p>
            Standard MOQ is 10 boxes per product variant. Custom orders (printed tape, custom
            sizes) have specific MOQs stated on the product page.
          </p>

          <h2>Payment Terms</h2>
          <p>
            Standard payment terms are advance payment for new customers. Approved accounts
            may receive 30-day credit terms. GST invoice is provided with every order.
          </p>

          <h2>Returns and Defects</h2>
          <p>
            Claims for defective goods must be raised within 7 days of receipt with photographs.
            We will replace defective products or issue a credit note at our discretion.
          </p>

          <h2>Contact</h2>
          <p>
            For any queries, contact{" "}
            <a href="mailto:sp.packwell1@gmail.com" className="text-brand-600">
              sp.packwell1@gmail.com
            </a>{" "}
            or call +91 95528 77000.
          </p>
        </div>
      </div>
    </div>
  );
}
