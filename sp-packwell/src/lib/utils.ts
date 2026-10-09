import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "INR"): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num);
}

export function calculateGST(amount: number, rate = 18): { gst: number; total: number } {
  const gst = (amount * rate) / 100;
  return { gst, total: amount + gst };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "…";
}

export function generateOrderId(): string {
  const prefix = "SPP";
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export function getWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function getProductWhatsAppMessage(
  productName: string,
  size?: string,
  length?: string,
  quantity?: number
): string {
  let msg = `Hello SP Packwell! I'm interested in:\n\nProduct: ${productName}`;
  if (size) msg += `\nSize: ${size}`;
  if (length) msg += `\nLength: ${length}`;
  if (quantity) msg += `\nQuantity: ${quantity} boxes`;
  msg += `\n\nPlease share pricing and availability.`;
  return msg;
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export const WHATSAPP_NUMBER = "919552877000";
export const WHATSAPP_NUMBER_2 = "918983377000";
export const COMPANY_EMAIL = "sp.packwell1@gmail.com";
export const COMPANY_PHONE = "+91 95528 77000";
export const COMPANY_PHONE_2 = "+91 89833 77000";
export const COMPANY_OWNER = "Mr. Sunil Riswal";
export const COMPANY_ADDRESS_WORKSHOP = "X-340, Phase No 3, Shop No 10/21/22, Behind Dreamline Hotel, Bajaj Nagar, Waluj MIDC, Aurangabad – 431136";
export const COMPANY_ADDRESS_OFFICE = "12th Scheme, Shivaji Nagar, Opp Morya Mangal Karyalaya, Aurangabad, Maharashtra";
export const GST_RATE = 18;
