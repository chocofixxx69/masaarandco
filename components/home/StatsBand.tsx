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
        <div className="bg-[#F9F1E7] rounded-[4px] p-4 sm:p-8 md:p-10 border border-[#092948]/12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
            {/* Architectural vignette + banner statement (cols 1-4) */}
            <div className="lg:col-span-4 flex items-center gap-3.5 sm:gap-6 pb-4 sm:pb-6 lg:pb-0 border-b lg:border-b-0 border-[#092948]/12">
              <div className="relative w-20 sm:w-36 h-16 sm:h-24 flex-shrink-0 overflow-hidden rounded-[2px] border border-[#092948]/20">
                <Image
                  src="/images/arch-curved-concrete.jpg"
                  alt="Architectural structure"
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-caps-label text-[#316A7E] text-[0.68rem] sm:text-xs tracking-[0.2em] uppercase leading-relaxed">
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
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 sm:gap-4 sm:divide-x rtl:sm:divide-x-reverse divide-[#092948]/15 pt-1 sm:pt-0">
              {t.home.stats.items.map((stat, i) => (
                <div key={i} className={`${i > 0 ? "sm:ps-6" : ""}`}>
                  <p className="font-caps-label text-[#316A7E] text-[0.625rem] sm:text-[0.65rem] tracking-[0.18em] uppercase mb-0.5 sm:mb-1">
                    {stat.label}
                  </p>
                  <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#092948] font-normal tracking-tight" dir="ltr">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
