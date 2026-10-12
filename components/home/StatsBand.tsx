"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function StatsBand() {
  const { t } = useTranslation();

  return (
    <section
      className="py-6 sm:py-10 md:py-16 bg-[#FFFFFF]"
      aria-label="Key Performance Indicators"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Architectural Framed Container with Drafting Accents */}
        <div className="relative bg-gradient-to-br from-[#F9F1E7] via-[#FAF3EC] to-[#F5ECE0] rounded-[4px] p-4 sm:p-7 md:p-10 border border-[#092948]/15 shadow-[0_2px_12px_rgba(9,41,72,0.04)] overflow-hidden">
          {/* Subtle Top Architectural Accent Line */}
          <div
            className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#316A7E]/30 to-transparent"
            aria-hidden="true"
          />

          {/* Architectural Corner Crosshairs */}
          <span
            className="absolute top-2 start-2 font-mono text-[0.65rem] text-[#092948]/20 select-none pointer-events-none leading-none"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="absolute top-2 end-2 font-mono text-[0.65rem] text-[#092948]/20 select-none pointer-events-none leading-none"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="absolute bottom-2 start-2 font-mono text-[0.65rem] text-[#092948]/20 select-none pointer-events-none leading-none"
            aria-hidden="true"
          >
            +
          </span>
          <span
            className="absolute bottom-2 end-2 font-mono text-[0.65rem] text-[#092948]/20 select-none pointer-events-none leading-none"
            aria-hidden="true"
          >
            +
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center">
            {/* Architectural Vignette + Banner Statement (cols 1-4) */}
            <div className="lg:col-span-4 flex items-center gap-3.5 sm:gap-6 pb-4 sm:pb-6 lg:pb-0 border-b lg:border-b-0 border-[#092948]/12">
              {/* Framed Thumbnail with Micro-Tag */}
              <div className="group/thumb relative p-1 bg-[#FFFFFF] rounded-[3px] border border-[#092948]/15 shadow-2xs flex-shrink-0">
                <div className="relative w-20 sm:w-32 md:w-36 h-16 sm:h-22 md:h-24 overflow-hidden rounded-[2px] bg-[#092948]/5">
                  <Image
                    src="/images/arch-curved-concrete.jpg"
                    alt="Architectural structure"
                    fill
                    sizes="(max-width: 640px) 100px, 150px"
                    className="object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-105"
                  />
                  {/* Discreet FIG tag */}
                  <div className="absolute bottom-1 start-1 px-1.5 py-0.5 rounded-[1px] bg-[#092948]/80 backdrop-blur-xs text-[0.55rem] font-mono text-[#F9F1E7] tracking-wider uppercase leading-none">
                    FIG. 01
                  </div>
                </div>
              </div>

              {/* Slogan with Accent Line */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-4 h-[1.5px] bg-[#316A7E] rounded-full" />
                  <span className="w-1 h-1 rounded-full bg-[#316A7E]/50" />
                </div>
                <p className="font-caps-label text-[#316A7E] text-[0.68rem] sm:text-xs tracking-[0.2em] uppercase leading-relaxed font-semibold">
                  {t.home.stats.movementText.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < t.home.stats.movementText.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>

            {/* 4 Stats Columns (cols 5-12) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-0 sm:divide-x rtl:sm:divide-x-reverse divide-[#092948]/15">
              {t.home.stats.items.map((stat, i) => {
                const hasPlus = stat.value.endsWith("+");
                const numericValue = hasPlus ? stat.value.slice(0, -1) : stat.value;
                const indexNum = `0${i + 1}`;

                return (
                  <div
                    key={i}
                    className={`group/stat relative p-2.5 sm:p-3 md:p-4 rounded-[3px] bg-[#FFFFFF]/40 sm:bg-transparent border sm:border-0 border-[#092948]/8 sm:rounded-none transition-all duration-300 hover:bg-[#FFFFFF]/70 hover:shadow-2xs text-start ${
                      i > 0 ? "sm:ps-4 md:ps-6" : ""
                    }`}
                  >
                    {/* Top Meta: Index Number + Animated Hairline Tick */}
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="font-mono text-[0.625rem] text-[#316A7E]/65 font-medium tracking-widest">
                        {indexNum}
                      </span>
                      <span
                        className="w-2.5 group-hover/stat:w-5 h-[1.5px] bg-[#316A7E]/40 group-hover/stat:bg-[#316A7E] transition-all duration-300 rounded-full"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Stat Label */}
                    <p className="font-caps-label text-[#316A7E] text-[0.625rem] sm:text-[0.6875rem] tracking-[0.16em] uppercase mb-0.5 sm:mb-1 font-medium leading-tight">
                      {stat.label}
                    </p>

                    {/* Numeric Serif Display */}
                    <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#092948] font-normal tracking-tight group-hover/stat:-translate-y-0.5 transition-transform duration-300">
                      <span dir="ltr" className="inline-flex items-baseline">
                        <span>{numericValue}</span>
                        {hasPlus && (
                          <span className="text-[#316A7E] text-2xl sm:text-3xl lg:text-4xl ms-0.5 font-sans font-light">
                            +
                          </span>
                        )}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
