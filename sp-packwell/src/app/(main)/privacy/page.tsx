import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – SP Packwell",
  description: "Privacy policy for SP Packwell website and services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-slate-900 py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: October 2026</p>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including name, company name,
            email address, phone number, and business details when you submit a quote request
            or contact form.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and quote requests</li>
            <li>Process and fulfil orders</li>
            <li>Send order updates and invoices</li>
            <li>Improve our products and services</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third
            parties. Your information is shared only with Gayatri Enterprises, our exclusive
            distribution partner, for order fulfilment purposes.
          </p>

          <h2>Contact Us</h2>
          <p>
            For privacy-related queries, contact us at{" "}
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
