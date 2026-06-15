import type { Product, CategoryMeta } from "@/types";

export const categoryMeta: CategoryMeta[] = [
  {
    id: "bopp-plain",
    label: "BOPP Plain Tape",
    description: "Crystal-clear self-adhesive tape for general packaging",
    icon: "📦",
    color: "from-sky-400 to-blue-600",
  },
  {
    id: "bopp-brown",
    label: "BOPP Brown Tape",
    description: "Strong brown tape for heavy-duty carton sealing",
    icon: "🟫",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "bopp-color",
    label: "BOPP Color Tape",
    description: "Vibrant color-coded tapes for identification & branding",
    icon: "🎨",
    color: "from-pink-400 to-purple-600",
  },
  {
    id: "bopp-floor",
    label: "Floor Marking Tape",
    description: "High-visibility floor marking for safety & organization",
    icon: "🏭",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "printed-tape",
    label: "Printed Tape",
    description: "Custom-printed tape with your brand logo & message",
    icon: "🖨️",
    color: "from-brand-400 to-brand-600",
  },
  {
    id: "jumbo-rolls",
    label: "Jumbo Rolls",
    description: "Large-format rolls for industrial slitting operations",
    icon: "🔄",
    color: "from-slate-400 to-slate-600",
  },
  {
    id: "desiccant-pouches",
    label: "Desiccant Pouches",
    description: "Moisture-absorbing pouches for product protection",
    icon: "💧",
    color: "from-cyan-400 to-teal-600",
  },
  {
    id: "industrial",
    label: "Industrial Solutions",
    description: "Complete industrial packaging solutions for bulk buyers",
    icon: "⚙️",
    color: "from-gray-500 to-gray-700",
  },
];

const SIZES = ["2 inch", "2.5 inch", "3 inch", "4 inch"];
const LENGTHS = ["30 mtr", "65 mtr", "100 mtr", "150 mtr", "200 mtr", "250 mtr", "300 mtr"];

function buildVariants(sizes: string[], lengths: string[], basePrice: number | null = null) {
  return sizes.flatMap((size) =>
    lengths.map((length) => ({
      size,
      length,
      sku: `SPP-${size.replace(/\s/g, "")}-${length.replace(/\s/g, "")}`,
      price: basePrice,
      moq: 10,
      stock: 500,
    }))
  );
}

export const products: Product[] = [
  {
    id: "1",
    slug: "bopp-plain-self-adhesive-tape",
    name: "BOPP Plain Self-Adhesive Tape",
    shortName: "Plain BOPP Tape",
    category: "bopp-plain",
    description:
      "Crystal-clear biaxially oriented polypropylene tape with superior adhesion for all-purpose packaging and carton sealing.",
    longDescription:
      "Our BOPP Plain Self-Adhesive Tape is manufactured using premium-grade biaxially oriented polypropylene film coated with high-performance hot-melt adhesive. Designed for general-purpose packaging, carton sealing, and bundling applications, this tape offers excellent clarity, strong adhesion to corrugated boxes, and consistent unwind performance. Available in multiple widths and lengths to suit retail, wholesale, and industrial requirements.",
    images: [
      "/images/products/plain-tape-1.jpg",
      "/images/products/plain-tape-2.jpg",
      "/images/products/plain-tape-3.jpg",
    ],
    variants: buildVariants(SIZES, LENGTHS),
    specs: [
      { label: "Material", value: "BOPP Film" },
      { label: "Adhesive", value: "Hot-Melt Acrylic" },
      { label: "Film Thickness", value: "28–40 micron" },
      { label: "Adhesive Thickness", value: "17–22 micron" },
      { label: "Core Diameter", value: "76 mm (3 inch)" },
      { label: "Color", value: "Transparent / Clear" },
      { label: "Temperature Range", value: "-10°C to +60°C" },
      { label: "Tensile Strength", value: "≥ 35 N/25mm" },
      { label: "Peel Adhesion", value: "≥ 3.5 N/25mm" },
    ],
    features: [
      "Crystal-clear transparency",
      "High initial tack and peel strength",
      "Consistent unwind with low noise",
      "Resistant to moisture and humidity",
      "Suitable for automated taping machines",
      "Eco-friendly solvent-free adhesive",
    ],
    applications: [
      "Carton sealing",
      "General packaging",
      "E-commerce fulfillment",
      "Warehouse & logistics",
      "Retail packaging",
    ],
    tags: ["plain", "clear", "transparent", "bopp", "packaging"],
    isFeatured: true,
    isNew: false,
    relatedIds: ["2", "3", "5"],
    seoTitle: "BOPP Plain Self-Adhesive Tape – SP Packwell",
    seoDescription:
      "Buy premium BOPP plain self-adhesive tape in 2\", 2.5\", 3\", 4\" widths and 30–300 mtr lengths. Manufacturer direct pricing. MOQ 10 boxes.",
  },
  {
    id: "2",
    slug: "bopp-brown-self-adhesive-tape",
    name: "BOPP Brown Self-Adhesive Tape",
    shortName: "Brown BOPP Tape",
    category: "bopp-brown",
    description:
      "Heavy-duty brown BOPP tape with aggressive adhesion for secure carton sealing in demanding logistics environments.",
    longDescription:
      "SP Packwell's BOPP Brown Self-Adhesive Tape is engineered for heavy-duty carton sealing and industrial packaging. The brown pigmented BOPP film provides excellent opacity for a professional finish while the high-tack hot-melt adhesive ensures secure bonding even on recycled corrugated surfaces. Ideal for courier companies, warehouses, and manufacturing units requiring reliable, cost-effective sealing solutions.",
    images: [
      "/images/products/brown-tape-1.jpg",
      "/images/products/brown-tape-2.jpg",
    ],
    variants: buildVariants(SIZES, LENGTHS),
    specs: [
      { label: "Material", value: "BOPP Film (Brown Pigmented)" },
      { label: "Adhesive", value: "Hot-Melt Acrylic" },
      { label: "Film Thickness", value: "28–40 micron" },
      { label: "Adhesive Thickness", value: "17–22 micron" },
      { label: "Core Diameter", value: "76 mm (3 inch)" },
      { label: "Color", value: "Brown" },
      { label: "Temperature Range", value: "-10°C to +60°C" },
      { label: "Tensile Strength", value: "≥ 35 N/25mm" },
      { label: "Peel Adhesion", value: "≥ 3.5 N/25mm" },
    ],
    features: [
      "High-opacity brown finish",
      "Aggressive adhesion on recycled surfaces",
      "Excellent holding power",
      "Moisture and humidity resistant",
      "Compatible with tape dispensers",
      "Cost-effective bulk pricing",
    ],
    applications: [
      "Heavy-duty carton sealing",
      "Courier & logistics",
      "Warehouse operations",
      "Export packaging",
      "Industrial bundling",
    ],
    tags: ["brown", "heavy-duty", "bopp", "carton", "sealing"],
    isFeatured: true,
    isNew: false,
    relatedIds: ["1", "3", "5"],
    seoTitle: "BOPP Brown Self-Adhesive Tape – SP Packwell",
    seoDescription:
      "Heavy-duty brown BOPP tape for carton sealing. Available in 2\"–4\" widths, 30–300 mtr lengths. Bulk pricing available.",
  },
  {
    id: "3",
    slug: "bopp-color-self-adhesive-tape",
    name: "BOPP Color Self-Adhesive Tape",
    shortName: "Color BOPP Tape",
    category: "bopp-color",
    description:
      "Vibrant color-coded BOPP tapes for visual identification, branding, and organized warehouse management.",
    longDescription:
      "Our BOPP Color Self-Adhesive Tape range offers a spectrum of vivid colors for color-coding, identification, and branding applications. Each color variant uses the same premium BOPP film and hot-melt adhesive technology as our standard range, ensuring consistent performance. Available in red, blue, green, yellow, orange, and custom colors on request.",
    images: [
      "/images/products/color-tape-1.jpg",
      "/images/products/color-tape-2.jpg",
    ],
    variants: buildVariants(SIZES, LENGTHS),
    specs: [
      { label: "Material", value: "BOPP Film (Color Pigmented)" },
      { label: "Adhesive", value: "Hot-Melt Acrylic" },
      { label: "Film Thickness", value: "28–40 micron" },
      { label: "Available Colors", value: "Red, Blue, Green, Yellow, Orange, Custom" },
      { label: "Core Diameter", value: "76 mm (3 inch)" },
      { label: "Temperature Range", value: "-10°C to +60°C" },
    ],
    features: [
      "Vivid, fade-resistant colors",
      "Color-coding for inventory management",
      "Same adhesive performance as standard BOPP",
      "Custom colors available on request",
      "Minimum order for custom colors: 500 rolls",
    ],
    applications: [
      "Color-coded inventory",
      "Warehouse organization",
      "Brand identification",
      "Safety marking",
      "Promotional packaging",
    ],
    tags: ["color", "colored", "bopp", "identification", "branding"],
    isFeatured: false,
    isNew: true,
    badge: "New",
    relatedIds: ["1", "2", "4"],
    seoTitle: "BOPP Color Self-Adhesive Tape – SP Packwell",
    seoDescription:
      "Color-coded BOPP tapes in red, blue, green, yellow & more. Custom colors available. Manufacturer direct pricing.",
  },
  {
    id: "4",
    slug: "bopp-floor-marking-tape",
    name: "BOPP Floor Marking Tape",
    shortName: "Floor Marking Tape",
    category: "bopp-floor",
    description:
      "High-visibility floor marking tape for 5S implementation, safety lanes, and industrial floor organization.",
    longDescription:
      "SP Packwell's Floor Marking Tape is specifically designed for industrial floor applications. Made with a thicker BOPP film and a pressure-sensitive adhesive that bonds firmly to concrete, epoxy, and tile floors, this tape withstands foot traffic, forklift movement, and cleaning operations. Available in safety yellow, red, white, blue, and green for comprehensive 5S and safety compliance.",
    images: [
      "/images/products/floor-tape-1.jpg",
      "/images/products/floor-tape-2.jpg",
    ],
    variants: buildVariants(["2 inch", "3 inch", "4 inch"], ["30 mtr", "33 mtr", "50 mtr"]),
    specs: [
      { label: "Material", value: "Thick BOPP Film" },
      { label: "Adhesive", value: "Pressure-Sensitive Acrylic" },
      { label: "Film Thickness", value: "50–60 micron" },
      { label: "Available Colors", value: "Yellow, Red, White, Blue, Green" },
      { label: "Surface Compatibility", value: "Concrete, Epoxy, Tile, Wood" },
      { label: "Durability", value: "12–18 months indoor" },
    ],
    features: [
      "High-visibility colors for safety compliance",
      "Withstands forklift and foot traffic",
      "Easy to apply and remove",
      "Suitable for 5S implementation",
      "Resistant to cleaning chemicals",
      "Sharp, clean edges for professional look",
    ],
    applications: [
      "Factory floor marking",
      "5S implementation",
      "Safety lane demarcation",
      "Warehouse aisle marking",
      "Hazard zone identification",
    ],
    tags: ["floor", "marking", "safety", "5S", "industrial"],
    isFeatured: false,
    isNew: false,
    relatedIds: ["3", "7", "8"],
    seoTitle: "Floor Marking Tape – SP Packwell",
    seoDescription:
      "Industrial floor marking tape for 5S and safety compliance. High-visibility colors, forklift-resistant. Bulk pricing available.",
  },
  {
    id: "5",
    slug: "custom-printed-bopp-tape",
    name: "Custom Printed BOPP Tape",
    shortName: "Printed Tape",
    category: "printed-tape",
    description:
      "Brand your packaging with custom-printed BOPP tape featuring your logo, message, or design in up to 3 colors.",
    longDescription:
      "Elevate your brand with SP Packwell's Custom Printed BOPP Tape. Using advanced flexographic printing technology, we print your logo, brand name, or custom message directly onto premium BOPP tape. Available in up to 3 spot colors with consistent print quality across the entire roll. Minimum order of 500 rolls per design. Ideal for e-commerce brands, manufacturers, and businesses looking to enhance unboxing experience.",
    images: [
      "/images/products/printed-tape-1.jpg",
      "/images/products/printed-tape-2.jpg",
    ],
    variants: buildVariants(["2 inch", "2.5 inch", "3 inch"], ["65 mtr", "100 mtr", "200 mtr"]),
    specs: [
      { label: "Printing Method", value: "Flexographic" },
      { label: "Colors", value: "Up to 3 spot colors" },
      { label: "Minimum Order", value: "500 rolls per design" },
      { label: "Lead Time", value: "7–10 working days" },
      { label: "Artwork Format", value: "AI, PDF, EPS (vector)" },
      { label: "Base Material", value: "BOPP Film (Clear or White)" },
    ],
    features: [
      "Custom logo and message printing",
      "Up to 3 spot colors",
      "Consistent print quality",
      "Tamper-evident security feature",
      "Enhances brand visibility",
      "Deters package pilferage",
    ],
    applications: [
      "E-commerce branding",
      "Retail packaging",
      "Corporate gifting",
      "Tamper-evident sealing",
      "Promotional campaigns",
    ],
    tags: ["printed", "custom", "branded", "logo", "flexographic"],
    isFeatured: true,
    isNew: false,
    badge: "Popular",
    relatedIds: ["1", "2", "6"],
    seoTitle: "Custom Printed BOPP Tape – SP Packwell",
    seoDescription:
      "Custom printed BOPP tape with your logo in up to 3 colors. MOQ 500 rolls. 7–10 day lead time. Get a free quote today.",
  },
  {
    id: "6",
    slug: "bopp-jumbo-rolls",
    name: "BOPP Jumbo Rolls",
    shortName: "Jumbo Rolls",
    category: "jumbo-rolls",
    description:
      "Large-format BOPP jumbo rolls for tape converters, slitters, and industrial packaging operations.",
    longDescription:
      "SP Packwell supplies BOPP Jumbo Rolls to tape converters, packaging companies, and industrial users who require large-format rolls for slitting into finished tape products. Our jumbo rolls are manufactured on state-of-the-art coating lines ensuring uniform adhesive coating, consistent film thickness, and minimal splices. Available in custom widths from 500mm to 1500mm and lengths up to 6000 meters.",
    images: [
      "/images/products/jumbo-roll-1.jpg",
      "/images/products/jumbo-roll-2.jpg",
    ],
    variants: [
      { size: "500 mm", length: "3000 mtr", sku: "SPP-JR-500-3000", price: null, moq: 5, stock: 50 },
      { size: "750 mm", length: "3000 mtr", sku: "SPP-JR-750-3000", price: null, moq: 5, stock: 50 },
      { size: "1000 mm", length: "3000 mtr", sku: "SPP-JR-1000-3000", price: null, moq: 5, stock: 30 },
      { size: "1500 mm", length: "6000 mtr", sku: "SPP-JR-1500-6000", price: null, moq: 3, stock: 20 },
    ],
    specs: [
      { label: "Width Range", value: "500 mm – 1500 mm" },
      { label: "Length", value: "3000 – 6000 mtr" },
      { label: "Core Diameter", value: "76 mm or 152 mm" },
      { label: "Film Thickness", value: "28–40 micron" },
      { label: "Splices", value: "≤ 2 per roll" },
      { label: "Packaging", value: "Stretch-wrapped on pallet" },
    ],
    features: [
      "Uniform adhesive coating",
      "Minimal splices per roll",
      "Custom widths available",
      "Consistent film thickness",
      "Suitable for high-speed slitting",
      "Pallet delivery available",
    ],
    applications: [
      "Tape converting",
      "Industrial slitting",
      "OEM supply",
      "Large-scale packaging operations",
    ],
    tags: ["jumbo", "rolls", "converter", "slitting", "industrial"],
    isFeatured: false,
    isNew: false,
    relatedIds: ["1", "2", "5"],
    seoTitle: "BOPP Jumbo Rolls – SP Packwell",
    seoDescription:
      "BOPP jumbo rolls for tape converters and slitters. Custom widths 500–1500mm, lengths up to 6000m. Request a quote.",
  },
  {
    id: "7",
    slug: "silica-gel-desiccant-pouches",
    name: "Silica Gel Desiccant Pouches",
    shortName: "Desiccant Pouches",
    category: "desiccant-pouches",
    description:
      "High-absorption silica gel desiccant pouches for moisture control in packaging, electronics, and pharmaceuticals.",
    longDescription:
      "SP Packwell's Silica Gel Desiccant Pouches provide effective moisture control for a wide range of products. Made with food-grade silica gel beads enclosed in breathable Tyvek or non-woven fabric pouches, they absorb moisture efficiently without any chemical reaction. Available in 1g to 500g sizes, suitable for electronics, pharmaceuticals, leather goods, food packaging, and industrial components.",
    images: [
      "/images/products/desiccant-1.jpg",
      "/images/products/desiccant-2.jpg",
    ],
    variants: [
      { size: "1g", length: "N/A", sku: "SPP-DSC-1G", price: null, moq: 1000, stock: 100000 },
      { size: "2g", length: "N/A", sku: "SPP-DSC-2G", price: null, moq: 1000, stock: 100000 },
      { size: "5g", length: "N/A", sku: "SPP-DSC-5G", price: null, moq: 500, stock: 50000 },
      { size: "10g", length: "N/A", sku: "SPP-DSC-10G", price: null, moq: 500, stock: 50000 },
      { size: "50g", length: "N/A", sku: "SPP-DSC-50G", price: null, moq: 200, stock: 10000 },
      { size: "100g", length: "N/A", sku: "SPP-DSC-100G", price: null, moq: 100, stock: 5000 },
      { size: "500g", length: "N/A", sku: "SPP-DSC-500G", price: null, moq: 50, stock: 2000 },
    ],
    specs: [
      { label: "Material", value: "Silica Gel (SiO₂)" },
      { label: "Pouch Material", value: "Tyvek / Non-woven Fabric" },
      { label: "Absorption Capacity", value: "30–40% of own weight" },
      { label: "Operating Temp", value: "-40°C to +120°C" },
      { label: "Compliance", value: "RoHS, REACH, FDA" },
      { label: "Sizes Available", value: "1g, 2g, 5g, 10g, 50g, 100g, 500g" },
    ],
    features: [
      "High moisture absorption capacity",
      "Food-grade silica gel",
      "Non-toxic and chemically inert",
      "Breathable Tyvek pouch",
      "Compliant with international standards",
      "Custom sizes and packaging available",
    ],
    applications: [
      "Electronics packaging",
      "Pharmaceutical packaging",
      "Leather goods",
      "Food packaging",
      "Industrial components",
      "Shipping containers",
    ],
    tags: ["desiccant", "silica gel", "moisture", "humidity", "packaging"],
    isFeatured: false,
    isNew: true,
    badge: "New",
    relatedIds: ["8"],
    seoTitle: "Silica Gel Desiccant Pouches – SP Packwell",
    seoDescription:
      "Food-grade silica gel desiccant pouches 1g–500g. RoHS & FDA compliant. Bulk pricing for electronics, pharma & industrial use.",
  },
  {
    id: "8",
    slug: "industrial-packaging-solutions",
    name: "Industrial Packaging Solutions",
    shortName: "Industrial Solutions",
    category: "industrial",
    description:
      "Complete industrial packaging solutions including stretch films, bubble wraps, and custom packaging for manufacturing units.",
    longDescription:
      "SP Packwell offers comprehensive industrial packaging solutions tailored for manufacturing units, export houses, and large-scale logistics operations. Our industrial range includes machine-grade stretch films, anti-static bubble wraps, VCI films for metal protection, and custom-engineered packaging solutions. We work directly with procurement teams to design cost-effective packaging that meets your specific requirements.",
    images: [
      "/images/products/industrial-1.jpg",
      "/images/products/industrial-2.jpg",
    ],
    variants: [
      { size: "Custom", length: "As Required", sku: "SPP-IND-CUSTOM", price: null, moq: 1, stock: 999 },
    ],
    specs: [
      { label: "Product Range", value: "Stretch Films, Bubble Wrap, VCI Films, Custom" },
      { label: "MOQ", value: "As per product" },
      { label: "Lead Time", value: "5–15 working days" },
      { label: "Customization", value: "Full custom engineering available" },
    ],
    features: [
      "Custom-engineered solutions",
      "Dedicated account manager",
      "Volume-based pricing",
      "Technical consultation included",
      "Sample testing before bulk order",
    ],
    applications: [
      "Manufacturing units",
      "Export packaging",
      "Automotive components",
      "Metal protection",
      "Heavy machinery",
    ],
    tags: ["industrial", "custom", "bulk", "manufacturing", "export"],
    isFeatured: false,
    isNew: false,
    relatedIds: ["6", "7"],
    seoTitle: "Industrial Packaging Solutions – SP Packwell",
    seoDescription:
      "Custom industrial packaging solutions for manufacturing units. Stretch films, bubble wrap, VCI films. Request a consultation.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getRelatedProducts(product: Product): Product[] {
  return products.filter((p) => product.relatedIds.includes(p.id));
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q))
  );
}
