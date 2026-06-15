import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sppackwell.com"),
  title: {
    default: "SP Packwell – Premium BOPP Packaging Tape Manufacturer",
    template: "%s | SP Packwell",
  },
  description:
    "SP Packwell manufactures high-quality BOPP packaging tapes, printed tapes, brown tapes, jumbo rolls, and desiccant pouches. Distributed by Gayatri Enterprises across India.",
  keywords: [
    "BOPP tape",
    "packaging tape",
    "printed tape",
    "brown tape",
    "jumbo rolls",
    "desiccant pouches",
    "industrial packaging",
    "SP Packwell",
    "Gayatri Enterprises",
    "tape manufacturer India",
  ],
  authors: [{ name: "SP Packwell" }],
  creator: "SP Packwell",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sppackwell.com",
    siteName: "SP Packwell",
    title: "SP Packwell – Premium BOPP Packaging Tape Manufacturer",
    description:
      "Manufacturer of high-quality BOPP packaging tapes and industrial packaging solutions. Distributed by Gayatri Enterprises.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SP Packwell" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SP Packwell – Premium BOPP Packaging Tape Manufacturer",
    description: "Manufacturer of high-quality BOPP packaging tapes and industrial packaging solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#22D478" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
