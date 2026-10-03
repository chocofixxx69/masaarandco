import { Metadata } from "next";

export const siteConfig = {
  name: "Masaar & Co.",
  legalName: "Masaar & Co. Technology Group",
  url: "https://masaar.co",
  ogImage: "https://masaar.co/brand/masaar-logo.jpg",
  description:
    "Masaar & Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions. Ideas, engineered into existence.",
  contactEmail: "contact@masaar.co",
};

export function constructMetadata({
  title,
  description,
  image,
  path = "",
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | Masaar & Co.` : "Masaar & Co. | Technology for What's Next";
  const pageDesc = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
  const ogImg = image || siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImg,
          width: 1024,
          height: 1024,
          alt: `${siteConfig.name} - Identity Lockup`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [ogImg],
      creator: "@masaarco",
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Masaar & Co.",
    legalName: "Masaar & Co. Technology Group",
    url: "https://masaar.co",
    logo: "https://masaar.co/brand/masaar-logo.jpg",
    description:
      "A technology company building AI solutions, modern products and intelligent systems for businesses, institutions and communities.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@masaar.co",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: [
      "https://linkedin.com/company/masaar-co",
      "https://x.com/masaarco",
      "https://github.com/masaar-co",
    ],
  };
}
