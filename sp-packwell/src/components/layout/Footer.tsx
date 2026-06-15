import React from "react";
import Link from "next/link";
import { Package, Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { categoryMeta } from "@/data/products";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Factory Tour", href: "/about#factory" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "Order Tracking", href: "/dashboard/orders" },
  { label: "B2B Pricing", href: "/quote" },
  { label: "Bulk Orders", href: "/quote" },
  { label: "Custom Printing", href: "/products/custom-printed-bopp-tape" },
  { label: "FAQs", href: "/#faq" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                Ready to place a bulk order?
              </h3>
              <p className="text-brand-100 mt-1">
                Get competitive pricing for your business. MOQ from 10 boxes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello SP Packwell, I need a bulk pricing quote`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">SP Packwell</div>
                <div className="text-xs text-slate-400 leading-tight">Premium Packaging Solutions</div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Manufacturer of premium BOPP packaging tapes and industrial packaging solutions.
              Distributed across India by Gayatri Enterprises.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+917720990081" className="flex items-center gap-2 text-slate-400 hover:text-brand-400 transition-colors">
                <Phone className="h-4 w-4 text-brand-500 shrink-0" />
                +91 77209 90081
              </a>
              <a href="mailto:info@sppackwell.com" className="flex items-center gap-2 text-slate-400 hover:text-brand-400 transition-colors">
                <Mail className="h-4 w-4 text-brand-500 shrink-0" />
                info@sppackwell.com
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              {categoryMeta.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{cat.icon}</span> {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Gayatri Enterprises */}
            <div className="mt-6 p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-1">
                Distribution Partner
              </div>
              <div className="font-semibold text-white text-sm">Gayatri Enterprises</div>
              <div className="text-xs text-slate-400 mt-1">
                Wholesale · Regional Sales · Customer Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SP Packwell. All rights reserved. Distributed by Gayatri Enterprises.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <span>GST: 27XXXXX0000X1ZX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
