"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-max relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-6"
          >
            Ready to Order? Get a Quote in Minutes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-100 text-lg mb-10"
          >
            Fill our quick quote form or WhatsApp us directly. Our team responds within 4 business hours
            with pricing, availability, and samples.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="xl" variant="white">
              <Link href="/quote">
                Request a Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              className="bg-green-500 hover:bg-green-600 text-white border-0"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello SP Packwell, I need a bulk pricing quote`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <a href="tel:+919552877000">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-brand-100 text-sm"
          >
            <span>✓ Free samples for B2B buyers</span>
            <span>✓ MOQ from 10 boxes</span>
            <span>✓ GST invoice included</span>
            <span>✓ Pan-India delivery</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
