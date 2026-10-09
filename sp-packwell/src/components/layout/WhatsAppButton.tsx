"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    "I need a bulk pricing quote",
    "I want to order BOPP tapes",
    "Tell me about custom printed tapes",
    "I need desiccant pouches",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-border w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">SP Packwell</div>
                  <div className="text-green-100 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full inline-block" />
                    Typically replies in minutes
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-3">
                Hi! How can we help you today? Choose a quick message or type your own.
              </p>
              <div className="space-y-2">
                {quickMessages.map((msg) => (
                  <a
                    key={msg}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                  >
                    {msg}
                  </a>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-border flex items-center gap-2">
                <a
                  href="tel:+919552877000"
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg py-2 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Us
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg py-2 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Open Chat
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="WhatsApp Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
