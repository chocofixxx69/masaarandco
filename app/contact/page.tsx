import React from "react";
import ContactContent from "@/components/contact/ContactContent";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact & Consultations — مسار وشركاه",
  description:
    "Direct inquiry pathway to Masaar & Co. technology and engineering directors. تواصل مباشر مع إدارة الهندسة والحلول التقنية في مسار وشركاه.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
