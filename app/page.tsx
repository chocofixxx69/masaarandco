import React from "react";
import Hero from "@/components/home/Hero";
import AudienceRow from "@/components/home/AudienceRow";
import EditorialBlock from "@/components/ui/EditorialBlock";
import StatsBand from "@/components/home/StatsBand";
import ServicesPreview from "@/components/home/ServicesPreview";
import ApproachSection from "@/components/home/ApproachSection";
import FeaturedWork from "@/components/home/FeaturedWork";
import AboutBanner from "@/components/home/AboutBanner";
import ContactBand from "@/components/home/ContactBand";
import Reveal from "@/components/ui/Reveal";
import { getOrganizationJsonLd } from "@/lib/metadata";

export default function HomePage() {
  const jsonLd = getOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* A. Hero (P0) */}
      <Hero />

      {/* B. Audience / Sectors Row (Ref. 3) */}
      <AudienceRow />

      {/* C. Introduction (P0) */}
      <Reveal>
        <EditorialBlock
          heading="From Ideas to Impact"
          italicWord="Impact"
          paragraph="Masaar & Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions. We combine engineering, technology, design, and innovation to build digital products, intelligent systems, software, automation, and infrastructure."
          ctaText="Our Services"
          ctaHref="/services"
        />
      </Reveal>

      {/* D. Stats Band (Ref. 3 & PRD §5) */}
      <Reveal>
        <StatsBand />
      </Reveal>

      {/* E. Services Preview (P0) */}
      <Reveal>
        <ServicesPreview />
      </Reveal>

      {/* F. Approach Section (Ref. 3) */}
      <Reveal>
        <ApproachSection />
      </Reveal>

      {/* G. Selected Work (P1) */}
      <Reveal>
        <FeaturedWork />
      </Reveal>

      {/* H. About Narrative Banner (Ref. 3) */}
      <Reveal>
        <AboutBanner />
      </Reveal>

      {/* I. Closing Contact Band (P1) */}
      <Reveal>
        <ContactBand />
      </Reveal>
    </>
  );
}
