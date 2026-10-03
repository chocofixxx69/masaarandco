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
    default: "Masaar & Co. | Ideas, Engineered into Existence",
    template: "%s | Masaar & Co.",
  },
  description:
    "Masaar & Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions. Ideas, engineered into existence.",
  keywords: [
    "Masaar & Co",
    "Ideas Engineered into Existence",
    "AI Solutions",
    "Digital Products",
    "Software Development",
    "Cloud Infrastructure",
    "Automation",
  ],
  authors: [{ name: "Masaar & Co." }],
  creator: "Masaar & Co.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masaar.co",
    siteName: "Masaar & Co.",
    title: "Masaar & Co. | Ideas, Engineered into Existence",
    description:
      "Turning ideas into practical, real-world solutions. We combine engineering, technology, design, and innovation.",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
      <body className="min-h-full flex flex-col bg-[#F9F1E7] text-[#000000] selection:bg-[#316A7E] selection:text-[#FFFFFF]">
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
