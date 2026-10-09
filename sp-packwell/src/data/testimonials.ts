import type { Testimonial, Stat, FAQ } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Procurement Team",
    company: "Hyatt Place Aurangabad Airport",
    role: "Housekeeping & Maintenance",
    content:
      "SP Packwell has been a reliable supplier for our hotel's housekeeping and pool maintenance requirements. Their swimming pool chemicals are consistently quality-checked and delivered on time. The team at Gayatri Enterprises is always responsive.",
    rating: 5,
    location: "Aurangabad, Maharashtra",
  },
  {
    id: "2",
    name: "Stores Manager",
    company: "Lemon Tree Hotels",
    role: "Purchase Department",
    content:
      "We source BOPP tapes, bubble wrap, and safety PPE from SP Packwell for multiple Lemon Tree properties. The bulk pricing is competitive and the product quality has never disappointed us across repeat orders.",
    rating: 5,
    location: "Maharashtra",
  },
  {
    id: "3",
    name: "Rahul Tiwari",
    company: "Bagla Electricals & Electronics",
    role: "Procurement Head",
    content:
      "Bagla Electricals has been sourcing eyelet, adhesive tapes, and packaging products from SP Packwell for years. Their product range, consistent quality, and Gayatri Enterprises' service have made them our preferred vendor.",
    rating: 5,
    location: "Aurangabad, Maharashtra",
  },
  {
    id: "4",
    name: "Operations Team",
    company: "Ulik Agritech Pvt. Ltd.",
    role: "Packaging & Logistics",
    content:
      "We needed food-grade desiccant pouches and specialized packaging for our agri products. SP Packwell delivered exactly what we needed with proper certifications. The pricing was very competitive for the quality.",
    rating: 4,
    location: "Maharashtra",
  },
  {
    id: "5",
    name: "Factory Manager",
    company: "Moto Tech",
    role: "Production & Packaging",
    content:
      "The floor marking tape and PP strapping from SP Packwell have been integral to our 5S implementation. It's been over a year and the floor tape is still holding strong despite daily forklift traffic. Excellent product.",
    rating: 5,
    location: "Aurangabad, Maharashtra",
  },
  {
    id: "6",
    name: "Suraj Baid",
    company: "Suraj Bloplast",
    role: "Director",
    content:
      "As a packaging converter, we rely on SP Packwell for BOPP tape jumbo rolls. Consistent quality, minimal splices, and a reliable delivery schedule. Gayatri Enterprises handles our account professionally.",
    rating: 5,
    location: "Aurangabad, Maharashtra",
  },
];

export const stats: Stat[] = [
  {
    label: "Years of Manufacturing",
    value: "15",
    suffix: "+",
    description: "Decades of expertise in BOPP tape manufacturing",
    icon: "🏭",
  },
  {
    label: "Happy Clients",
    value: "2500",
    suffix: "+",
    description: "Businesses trust SP Packwell across India",
    icon: "🤝",
  },
  {
    label: "Products Delivered",
    value: "50",
    suffix: "M+",
    description: "Rolls delivered to customers nationwide",
    icon: "📦",
  },
  {
    label: "States Covered",
    value: "18",
    suffix: "+",
    description: "Pan-India distribution through Gayatri Enterprises",
    icon: "🗺️",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What is the minimum order quantity (MOQ) for BOPP tapes?",
    answer:
      "Our standard MOQ is 10 boxes per variant (size + length combination). For bulk B2B orders, we offer flexible MOQ starting from 1 box for trial orders. Contact us for custom MOQ arrangements.",
    category: "ordering",
  },
  {
    question: "Do you offer custom printed tapes with our company logo?",
    answer:
      "Yes! We offer custom flexographic printing in up to 3 spot colors. The MOQ for printed tapes is 500 rolls per design. Lead time is 7–10 working days after artwork approval. Please share your artwork in AI, PDF, or EPS format.",
    category: "products",
  },
  {
    question: "What sizes and lengths are available for BOPP tapes?",
    answer:
      "We manufacture BOPP tapes in 2\", 2.5\", 3\", and 4\" widths. Standard lengths are 30, 65, 100, 150, 200, 250, and 300 meters. Custom sizes are available for bulk orders.",
    category: "products",
  },
  {
    question: "How do I get a bulk pricing quote?",
    answer:
      "You can use our online Quote Request form, WhatsApp us at +91 77209 90081, or email info@sppackwell.com. Our team responds within 4 business hours with pricing and availability.",
    category: "b2b",
  },
  {
    question: "What is the delivery timeline?",
    answer:
      "Standard orders are dispatched within 2–3 business days. Delivery takes 3–7 days depending on your location. Express delivery is available for urgent requirements at additional cost.",
    category: "shipping",
  },
  {
    question: "Do you provide GST invoices?",
    answer:
      "Yes, all orders come with proper GST invoices. Our GSTIN is available on all invoices. We support input tax credit for B2B buyers.",
    category: "ordering",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, NEFT/RTGS, credit/debit cards, and net banking through our secure Razorpay payment gateway. For B2B customers with credit terms, we also offer 30-day credit on approved accounts.",
    category: "ordering",
  },
  {
    question: "Are your desiccant pouches food-grade and certified?",
    answer:
      "Yes, our silica gel desiccant pouches are food-grade, RoHS compliant, REACH compliant, and FDA approved. We provide test certificates with bulk orders.",
    category: "products",
  },
  {
    question: "Can I get samples before placing a bulk order?",
    answer:
      "Absolutely. We provide free samples (up to 3 variants) for genuine B2B inquiries. Courier charges apply for outstation deliveries. Contact our sales team to request samples.",
    category: "b2b",
  },
  {
    question: "Who is Gayatri Enterprises?",
    answer:
      "Gayatri Enterprises is the exclusive distribution partner of SP Packwell. They handle wholesale supply, regional sales, and customer support across Maharashtra and neighboring states. For orders and inquiries, you can contact either SP Packwell or Gayatri Enterprises.",
    category: "general",
  },
];
