import type { Metadata } from "next";
import ContactPage from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us – SP Packwell",
  description:
    "Get in touch with SP Packwell for bulk orders, custom printing, pricing, and product enquiries. Call, WhatsApp, or email us. Located at Waluj MIDC, Aurangabad.",
};

export default function Contact() {
  return <ContactPage />;
}
