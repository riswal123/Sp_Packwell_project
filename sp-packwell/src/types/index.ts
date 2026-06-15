// ─── Product Types ────────────────────────────────────────────────────────────
export interface ProductVariant {
  size: string;       // e.g. "2 inch", "2.5 inch"
  length: string;     // e.g. "65 mtr", "100 mtr"
  sku: string;
  price: number | null;
  moq: number;        // minimum order quantity (boxes)
  stock: number;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  description: string;
  longDescription: string;
  images: string[];
  variants: ProductVariant[];
  specs: ProductSpec[];
  features: string[];
  applications: string[];
  tags: string[];
  isFeatured: boolean;
  isNew: boolean;
  badge?: string;
  relatedIds: string[];
  seoTitle: string;
  seoDescription: string;
}

export type ProductCategory =
  | "bopp-plain"
  | "bopp-brown"
  | "bopp-color"
  | "bopp-floor"
  | "printed-tape"
  | "jumbo-rolls"
  | "desiccant-pouches"
  | "industrial";

export interface CategoryMeta {
  id: ProductCategory;
  label: string;
  description: string;
  icon: string;
  color: string;
  count?: number;
}

// ─── Cart Types ───────────────────────────────────────────────────────────────
export interface CartItem {
  productId: string;
  variantSku: string;
  name: string;
  image: string;
  size: string;
  length: string;
  price: number;
  quantity: number;
  moq: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  gst: number;
  total: number;
}

// ─── Quote Types ──────────────────────────────────────────────────────────────
export interface QuoteItem {
  productId: string;
  productName: string;
  size: string;
  length: string;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface QuoteRequest {
  id?: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  gstNumber?: string;
  businessType: "manufacturer" | "distributor" | "retailer" | "end-user" | "other";
  items: QuoteItem[];
  message?: string;
  status?: "pending" | "reviewed" | "quoted" | "accepted" | "rejected";
  createdAt?: string;
}

// ─── Order Types ──────────────────────────────────────────────────────────────
export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "dispatched"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  productId: string;
  name: string;
  size: string;
  length: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  gst: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  paymentMethod: string;
  razorpayOrderId?: string;
  shippingAddress: Address;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── User Types ───────────────────────────────────────────────────────────────
export interface Address {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "customer" | "admin" | "staff";
  companyName?: string;
  gstNumber?: string;
  addresses: Address[];
  createdAt: string;
}

// ─── Contact Types ────────────────────────────────────────────────────────────
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: "general" | "b2b" | "support" | "complaint";
}

// ─── Testimonial Types ────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  location: string;
}

// ─── Stat Types ───────────────────────────────────────────────────────────────
export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description: string;
  icon: string;
}

// ─── FAQ Types ────────────────────────────────────────────────────────────────
export interface FAQ {
  question: string;
  answer: string;
  category: "general" | "products" | "ordering" | "shipping" | "b2b";
}
