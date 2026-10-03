import type { Metadata, Viewport } from "next";
import { Newsreader, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#092948",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://masaar.co"),
  title: {
    default: "Masaar & Co. | Pathway to Technology & AI Solutions",
    template: "%s | Masaar & Co.",
  },
  description:
    "Masaar & Co. is a technology company building AI solutions, modern products and intelligent systems for businesses, institutions and communities.",
  keywords: [
    "Masaar & Co",
    "AI Solutions",
    "Product Development",
    "Digital Transformation",
    "Technology Consulting",
    "Intelligent Systems",
  ],
  authors: [{ name: "Masaar & Co." }],
  creator: "Masaar & Co.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masaar.co",
    siteName: "Masaar & Co.",
    title: "Masaar & Co. | Technology for What's Next",
    description:
      "Building AI solutions, modern products and intelligent systems for businesses, institutions and communities.",
    images: [
      {
        url: "/brand/masaar-logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Masaar & Co. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masaar & Co. | Technology for What's Next",
    description:
      "Building AI solutions, modern products and intelligent systems for businesses, institutions and communities.",
    images: ["/brand/masaar-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FEEED7] text-[#000000] selection:bg-[#316A7E] selection:text-[#FFFFFF]">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
