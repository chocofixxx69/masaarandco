"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function StatsBand() {
  const { t, isArabic } = useTranslation();

  const movementStatement = isArabic
    ? "في كل مسار تتجدد الإمكانات"
    : t.home.stats.movementText.join(" ");

  const items = t.home.stats.items;

  // Single marquee content unit
  const renderMarqueeUnit = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex items-center flex-shrink-0">
      {items.map((stat, i) => {
        const hasPlus = stat.value.endsWith("+");
        const numericValue = hasPlus ? stat.value.slice(0, -1) : stat.value;
        const indexNum = `0${i + 1}`;

        return (
          <React.Fragment key={`${keyPrefix}-stat-${i}`}>
            <div className="flex items-center gap-3.5 sm:gap-4 md:gap-5 px-6 sm:px-8 md:px-10 py-1 flex-shrink-0 text-start group/item">
              {/* Numeric Display */}
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#092948] font-normal tracking-tight leading-none group-hover/item:-translate-y-0.5 transition-transform duration-200">
                <span dir="ltr" className="inline-flex items-baseline">
                  <span>{numericValue}</span>
                  {hasPlus && (
                    <span className="text-[#316A7E] text-2xl sm:text-3xl md:text-4xl ms-0.5 font-sans font-light">
                      +
                    </span>
                  )}
                </span>
              </p>

              {/* Meta + Label Lockup */}
              <div className="flex flex-col justify-center space-y-0.5 max-w-[14ch] sm:max-w-[16ch]">
                <span className="font-mono text-[0.625rem] text-[#316A7E]/65 font-medium tracking-widest leading-none">
                  {indexNum}
                </span>
                <p className="font-caps-label text-[#316A7E] text-[0.6875rem] sm:text-xs tracking-[0.16em] uppercase font-semibold leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>

            {/* Architectural Hairline Separator */}
            <div
              className="w-[1px] h-7 sm:h-9 bg-[#092948]/15 flex-shrink-0"
              aria-hidden="true"
            />
          </React.Fragment>
        );
      })}

      {/* Movement Statement Accent */}
      <div className="flex items-center gap-2.5 sm:gap-3 px-6 sm:px-10 py-1 flex-shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-[#316A7E]" aria-hidden="true" />
        <span
          className={`text-sm sm:text-base md:text-lg tracking-normal ${
            isArabic
              ? "text-[#316A7E] font-medium"
              : "font-serif text-[#092948]/85 italic font-normal"
          }`}
        >
          {movementStatement}
        </span>
      </div>

      {/* Trailing Architectural Hairline Separator */}
      <div
        className="w-[1px] h-7 sm:h-9 bg-[#092948]/15 flex-shrink-0"
        aria-hidden="true"
      />
    </div>
  );

  return (
    <section
      className="py-6 sm:py-10 md:py-14 bg-[#FFFFFF]"
      aria-label="Key Performance Indicators"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Architectural Marquee Banner */}
        <div className="group relative bg-gradient-to-r from-[#F9F1E7] via-[#FAF3EC] to-[#F9F1E7] rounded-[4px] border border-[#092948]/15 py-4 sm:py-5 md:py-6 overflow-hidden shadow-[0_2px_12px_rgba(9,41,72,0.03)]">
          {/* Subtle Top Accent Line */}
          <div
            className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#316A7E]/30 to-transparent"
            aria-hidden="true"
          />

          {/* Edge Soft Vignette Fades */}
          <div
            className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r rtl:bg-gradient-to-l from-[#F9F1E7] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l rtl:bg-gradient-to-r from-[#F9F1E7] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Continuous Infinite Marquee Track (4 units to prevent any gap on ultrawide screens) */}
          <div className="flex w-max animate-marquee">
            {renderMarqueeUnit("track-1")}
            {renderMarqueeUnit("track-2")}
            {renderMarqueeUnit("track-3")}
            {renderMarqueeUnit("track-4")}
          </div>
        </div>
      </div>
    </section>
  );
}
