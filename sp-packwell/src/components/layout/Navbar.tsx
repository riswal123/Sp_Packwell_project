"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ShoppingCart, Phone, ChevronDown,
  Sun, Moon, MessageCircle
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn, WHATSAPP_NUMBER } from "@/lib/utils";
import { categoryMeta } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Factory", href: "/about#factory" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const itemCount = useCartStore((s) => s.itemCount);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-brand-600 text-white text-xs py-1.5">
        <div className="container-max px-4 flex items-center justify-between">
          <span>🏭 Manufacturer: SP Packwell, Aurangabad | 🤝 Distributor: Gayatri Enterprises</span>
          <div className="flex items-center gap-4">
            <a href="tel:+919552877000" className="flex items-center gap-1 hover:text-brand-200 transition-colors">
              <Phone className="h-3 w-3" /> +91 95528 77000
            </a>
            <a href="tel:+918983377000" className="flex items-center gap-1 hover:text-brand-200 transition-colors">
              <Phone className="h-3 w-3" /> +91 89833 77000
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello SP Packwell, I need a quote`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-brand-200 transition-colors"
            >
              <MessageCircle className="h-3 w-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="SP Packwell Logo"
                fill
                className="object-contain rounded"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-lg leading-tight text-foreground">
                SP Packwell
              </div>
              <div className="text-[10px] text-muted-foreground leading-tight">
                Manufacturer of BOPP Tapes
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "text-brand-600 bg-brand-50 dark:bg-brand-950 dark:text-brand-400"
                        : "text-foreground hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        productsOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-border p-2 grid grid-cols-1 gap-0.5"
                      >
                        {categoryMeta.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/products?category=${cat.id}`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors group"
                          >
                            <span className="text-xl">{cat.icon}</span>
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-brand-600">
                                {cat.label}
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-1">
                                {cat.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-border mt-1 pt-1">
                          <Link
                            href="/products"
                            className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors"
                          >
                            View All Products →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-brand-600 bg-brand-50 dark:bg-brand-950 dark:text-brand-400"
                      : "text-foreground hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>

            {/* Quote CTA */}
            <Button asChild size="sm" className="hidden sm:flex">
              <Link href="/quote">Get Quote</Link>
            </Button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-brand-600 bg-brand-50 dark:bg-brand-950"
                      : "text-foreground hover:bg-accent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <Button asChild className="w-full">
                  <Link href="/quote" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col gap-1 pt-2 text-sm text-muted-foreground">
                <a href="tel:+919552877000" className="flex items-center gap-1.5 hover:text-brand-600">
                  <Phone className="h-3.5 w-3.5" /> +91 95528 77000
                </a>
                <a href="tel:+918983377000" className="flex items-center gap-1.5 hover:text-brand-600">
                  <Phone className="h-3.5 w-3.5" /> +91 89833 77000
                </a>
                <a href="mailto:sp.packwell1@gmail.com" className="text-xs text-muted-foreground hover:text-brand-600">
                  sp.packwell1@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
