import React from "react";
import PageHeading from "@/components/ui/PageHeading";
import WorkGallery from "@/components/work/WorkGallery";
import Reveal from "@/components/ui/Reveal";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Selected Work & Implementations",
  description:
    "Explore case studies in AI healthcare, educational analytics, and enterprise platforms engineered by Masaar & Co.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="bg-[#F9F1E7] min-h-screen pt-28 md:pt-36 pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <Reveal>
          <PageHeading
            label="Selected Implementations"
            title="Durable Systems Engineered for Real-World Demands"
            italicWord="Real-World"
            description="A curated selection of our deployments across ambient artificial intelligence, university platforms, and logistics infrastructure."
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-12" aria-hidden="true" />

        {/* Work Gallery with Asymmetric Grid and Filters */}
        <WorkGallery />
      </div>
    </div>
  );
}
