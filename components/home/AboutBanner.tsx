"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function AboutBanner() {
  const { t, isArabic } = useTranslation();

  return (
    <section
      className="py-10 sm:py-16 md:py-24 bg-[#FFFFFF]"
      aria-labelledby="about-banner-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="bg-[#F9F1E7] rounded-[4px] p-4 sm:p-8 md:p-14 border border-[#092948]/12 shadow-xs">
          {/* Top Text Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-8 pb-4 sm:pb-8 md:pb-10">
            <div className="space-y-2 sm:space-y-3 max-w-2xl">
              <div className="inline-block px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFFFFF] border border-[#092948]/10 mb-1.5 sm:mb-2">
                <p className="font-caps-label text-[#316A7E] text-[0.68rem] sm:text-[0.72rem] tracking-[0.2em] uppercase font-semibold">
                  {t.home.aboutBanner.label}
                </p>
              </div>
              <h2
                id="about-banner-heading"
                className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#092948] font-normal leading-[1.1]"
              >
                {isArabic ? (
                  <>
                    أفكارٌ، تُهندَسُ لتصبح{" "}
                    <span className="text-[#316A7E] font-medium">واقعاً.</span>
                  </>
                ) : (
                  <>
                    Ideas, Engineered into{" "}
                    <em className="italic text-[#316A7E] font-normal font-serif">
                      Existence.
                    </em>
                  </>
                )}
              </h2>
            </div>

            <div className="max-w-lg space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm md:text-base text-[#000000]/80 leading-relaxed font-normal">
                {t.home.aboutBanner.paragraph}
              </p>
              <p className={`text-[0.7rem] sm:text-xs md:text-sm text-[#316A7E] font-medium ${isArabic ? "" : "italic"}`}>
                &ldquo;{t.home.aboutBanner.quote}&rdquo;
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#092948]/25 bg-[#FFFFFF] px-4 sm:px-5 py-2 sm:py-2.5 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FFFFFF] transition-all min-h-[40px] sm:min-h-[44px]"
                >
                  <span>{t.home.aboutBanner.cta}</span>
                  <span className="font-mono rtl:-scale-x-100 inline-block">↗</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Architectural Canopy Image Banner */}
          <div className="relative w-full h-[140px] sm:h-[240px] md:h-[360px] lg:h-[380px] overflow-hidden rounded-[2px] border border-[#092948]/15 mt-2 sm:mt-4">
            <Image
              src="/images/arch-curved-concrete.jpg"
              alt="Masaar architectural canopy symbolizing clarity of form and pathway"
              fill
              sizes="100vw"
              className="object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#092948]/25 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
