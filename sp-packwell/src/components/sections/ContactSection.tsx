"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, MessageCircle,
  Clock, Send, CheckCircle2, Factory
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 95528 77000", "+91 89833 77000"],
    href: "tel:+919552877000",
    color: "text-brand-600 bg-brand-50 dark:bg-brand-950",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: ["+91 95528 77000"],
    href: "https://wa.me/919552877000?text=Hello SP Packwell, I need a quote",
    color: "text-green-600 bg-green-50 dark:bg-green-950",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["sp.packwell1@gmail.com"],
    href: "mailto:sp.packwell1@gmail.com",
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950",
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: By Appointment"],
    href: null,
    color: "text-orange-600 bg-orange-50 dark:bg-orange-950",
  },
];

const addresses = [
  {
    icon: Factory,
    label: "Workshop / Manufacturing",
    address:
      "X-340, Phase No 3, Shop No 10/21/22,\nBehind Dreamline Hotel, Bajaj Nagar,\nWaluj MIDC, Aurangabad – 431136",
    mapUrl:
      "https://www.google.com/maps/search/Waluj+MIDC+Aurangabad+Maharashtra",
  },
  {
    icon: MapPin,
    label: "Office",
    address:
      "12th Scheme, Shivaji Nagar,\nOpp Morya Mangal Karyalaya,\nAurangabad, Maharashtra",
    mapUrl:
      "https://www.google.com/maps/search/Shivaji+Nagar+Aurangabad+Maharashtra",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form
    const msg = `Hello SP Packwell!\n\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`;
    const waUrl = `https://wa.me/919552877000?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-slate-900 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
          >
            📞 Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-4"
          >
            Contact <span className="text-gradient">SP Packwell</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Reach out for bulk orders, custom printing, product enquiries, or to become a dealer.
            We respond within 4 business hours.
          </motion.p>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — Contact info & addresses */}
            <div className="space-y-8">
              {/* Contact cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-brand-300 hover:shadow-md transition-all group"
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wide">{item.label}</div>
                          {item.lines.map((line) => (
                            <div key={line} className="text-sm font-semibold text-foreground group-hover:text-brand-600 transition-colors">
                              {line}
                            </div>
                          ))}
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wide">{item.label}</div>
                          {item.lines.map((line) => (
                            <div key={line} className="text-sm font-semibold text-foreground">{line}</div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Addresses */}
              <div className="space-y-4">
                {addresses.map((addr, i) => (
                  <motion.div
                    key={addr.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-card border border-border rounded-xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <addr.icon className="h-5 w-5 text-brand-500" />
                      <span className="font-semibold text-sm text-foreground">{addr.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed mb-3">
                      {addr.address}
                    </p>
                    <a
                      href={addr.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-600 hover:underline font-medium"
                    >
                      📍 View on Google Maps →
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Proprietor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-slate-900 rounded-xl p-5 text-white"
              >
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">Proprietor</div>
                <div className="text-lg font-display font-bold text-brand-400">Mr. Sunil Riswal</div>
                <div className="text-sm text-slate-400 mt-1">SP Packwell — Manufacturer of BOPP Tapes</div>
                <div className="text-xs text-slate-500 mt-1">
                  All type of chemicals, mineral, packing material, fasteners
                </div>
                <div className="flex gap-3 mt-4">
                  <a
                    href="tel:+919552877000"
                    className="flex-1 text-center text-xs bg-brand-500 hover:bg-brand-600 text-white py-2 rounded-lg transition-colors font-medium"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="https://wa.me/919552877000?text=Hello SP Packwell, I need a quote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors font-medium"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill the form below — it will open WhatsApp with your message pre-filled.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      WhatsApp Opened!
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Your message is pre-filled in WhatsApp. Just hit Send.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="ABC Pvt Ltd"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="Bulk Order Enquiry">Bulk Order Enquiry</option>
                        <option value="Custom Printed Tape">Custom Printed Tape</option>
                        <option value="Pricing & MOQ">Pricing & MOQ</option>
                        <option value="Product Sample Request">Product Sample Request</option>
                        <option value="Dealer / Distributor">Dealer / Distributor Enquiry</option>
                        <option value="Swimming Pool Chemicals">Swimming Pool Chemicals</option>
                        <option value="Safety & PPE">Safety & PPE Products</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you need — product, quantity, size, delivery location..."
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-muted-foreground resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Send className="h-4 w-4" />
                      Send via WhatsApp
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      This will open WhatsApp with your message pre-filled for Mr. Sunil Riswal.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
