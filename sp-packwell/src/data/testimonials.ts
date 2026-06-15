import type { Testimonial, Stat, FAQ } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Sharma",
    company: "Sharma Logistics Pvt. Ltd.",
    role: "Procurement Manager",
    content:
      "SP Packwell has been our trusted tape supplier for over 3 years. The quality is consistently excellent and Gayatri Enterprises always delivers on time. Their brown tape holds up even in our high-humidity warehouse.",
    rating: 5,
    location: "Pune, Maharashtra",
  },
  {
    id: "2",
    name: "Priya Mehta",
    company: "QuickShip E-commerce",
    role: "Operations Head",
    content:
      "We switched to SP Packwell's printed tape for our brand packaging and the response from customers has been amazing. The print quality is sharp and the tape sticks perfectly to all our box types.",
    rating: 5,
    location: "Mumbai, Maharashtra",
  },
  {
    id: "3",
    name: "Anil Kumar",
    company: "AK Manufacturing Co.",
    role: "Factory Manager",
    content:
      "The floor marking tape from SP Packwell is outstanding. It's been 8 months and the tape is still holding strong despite daily forklift traffic. Highly recommend for any 5S implementation.",
    rating: 5,
    location: "Nashik, Maharashtra",
  },
  {
    id: "4",
    name: "Sunita Patel",
    company: "Patel Exports",
    role: "Director",
    content:
      "We needed custom-sized desiccant pouches for our export shipments. SP Packwell delivered exactly what we needed with proper certifications. The pricing was very competitive for the quality.",
    rating: 4,
    location: "Surat, Gujarat",
  },
  {
    id: "5",
    name: "Mohammed Farooq",
    company: "Farooq Packaging Solutions",
    role: "CEO",
    content:
      "As a tape converter, the jumbo rolls from SP Packwell are our primary raw material. Consistent quality, minimal splices, and reliable delivery schedule. Gayatri Enterprises handles our account professionally.",
    rating: 5,
    location: "Aurangabad, Maharashtra",
  },
  {
    id: "6",
    name: "Deepika Joshi",
    company: "Joshi Retail Chain",
    role: "Supply Chain Manager",
    content:
      "We order color-coded tapes in bulk for our 12 warehouses. SP Packwell's color consistency across batches is impressive. The B2B quote system makes ordering very convenient.",
    rating: 4,
    location: "Nagpur, Maharashtra",
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
