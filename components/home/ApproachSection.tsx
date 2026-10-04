"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function ApproachSection() {
  const { t, isArabic } = useTranslation();

  return (
    <section
      className="py-10 sm:py-16 md:py-32 bg-[#092948] text-[#F9F1E7] relative overflow-hidden"
      aria-label="Our Approach"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <p className="font-caps-label text-[#619AAA] text-xs tracking-[0.2em] mb-3 sm:mb-6">
          {t.home.approach.label}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Column 1: Heading (cols 1-6) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] sm:leading-[1.05] tracking-tight text-[#F9F1E7]">
              {t.home.approach.headlineLines.map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              <span className={isArabic ? "text-[#619AAA] font-medium inline-block" : "italic text-[#619AAA] font-serif font-normal"}>
                {t.home.approach.headlineItalic}
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#F9F1E7]/85 leading-relaxed max-w-lg pt-1 sm:pt-4 font-normal">
              {t.home.approach.paragraph}
            </p>
          </div>

          {/* Column 2: Steps (cols 7-12) */}
          <div className="lg:col-span-6 divide-y divide-[rgba(249,241,231,0.15)]">
            {t.home.approach.steps.map((step) => (
              <div key={step.step} className="py-4 sm:py-6 md:py-8 first:pt-0 last:pb-0 group">
                <div className="flex items-baseline gap-3 sm:gap-6 mb-1.5 sm:mb-3">
                  <span className="font-mono text-xs sm:text-sm text-[#619AAA] tracking-widest font-semibold" dir="ltr">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl md:text-3xl text-[#F9F1E7] group-hover:text-[#619AAA] transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-base text-[#F9F1E7]/75 leading-relaxed ps-6 sm:ps-14">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Structural Pathway Baseline */}
        <div className="pathway-rule-dark mt-8 sm:mt-12 md:mt-24" aria-hidden="true" />
      </div>
    </section>
  );
}
