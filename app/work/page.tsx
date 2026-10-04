"use client";

import React from "react";
import PageHeading from "@/components/ui/PageHeading";
import WorkGallery from "@/components/work/WorkGallery";
import Reveal from "@/components/ui/Reveal";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function WorkPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <Reveal>
          <PageHeading
            label={t.workPage.heading.label}
            title={t.workPage.heading.title}
            italicWord={t.workPage.heading.italicWord}
            description={t.workPage.heading.description}
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-6 sm:my-12" aria-hidden="true" />

        {/* Work Gallery with Asymmetric Grid and Filters */}
        <WorkGallery />
      </div>
    </div>
  );
}
