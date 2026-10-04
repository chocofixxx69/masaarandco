import React from "react";
import ContactContent from "@/components/contact/ContactContent";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact & Consultations — مسار وشركاه",
  description:
    "Direct inquiry pathway to Masaar & Co. technology directors in Riyadh, Dubai, and London. استشارات تقنية وهندسية مباشرة في الرياض ودبي ولندن.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
