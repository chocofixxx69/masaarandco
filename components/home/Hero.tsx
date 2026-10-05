"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t, isArabic } = useTranslation();

  return (
    <section
      className="relative w-full min-h-[100svh] lg:h-screen lg:min-h-[720px] bg-[#FFFFFF] text-[#092948] overflow-hidden flex flex-col justify-between"
      aria-label="Hero Section"
    >
      {/* Realistic Riyadh Sky & Terrace Panoramic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/hero-skyline-bg.jpg"
          alt="Masaar & Co. Technology headquarters terrace overlooking the Riyadh skyline"
          fill
          priority
          quality={94}
          sizes="100vw"
          className="object-cover object-center md:object-[center_32%]"
        />
        {/* Soft atmospheric gradient wash on left/right to guarantee contrast and effortless readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/25 to-transparent md:bg-gradient-to-r rtl:md:bg-gradient-to-l md:from-white/75 md:via-white/35 md:to-transparent pointer-events-none" />
        <div className="hidden lg:block absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 w-[55%] bg-gradient-to-r rtl:bg-gradient-to-l from-white/60 via-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Visual Leader Scene for Tablet & Desktop (>= 768px): Pinned Right in LTR, Pinned Left in RTL */}
      <div className="hidden md:block absolute right-0 rtl:right-auto rtl:left-0 sm:right-2 rtl:sm:left-2 md:right-4 rtl:md:left-4 lg:right-6 rtl:lg:left-6 xl:right-10 rtl:xl:left-10 2xl:right-16 rtl:2xl:left-16 bottom-0 top-20 md:top-24 lg:top-28 xl:top-32 w-[46%] lg:w-[45%] xl:w-[43%] max-w-[560px] lg:max-w-[660px] xl:max-w-[740px] z-10 pointer-events-none select-none overflow-hidden">
        <div className="relative w-full h-full flex items-end justify-end rtl:justify-start transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] scale-100 opacity-100 translate-y-0">
          <Image
            src="/images/hero-leader-laptop.png"
            alt={t.home.hero.imageAlt}
            fill
            priority
            quality={96}
            sizes="(max-width: 1024px) 46vw, 44vw"
            className="object-contain object-right-bottom rtl:object-left-bottom select-none"
          />
        </div>
      </div>

      {/* Top Spacer for Fixed Navigation */}
      <div className="pt-20 sm:pt-24 md:pt-24 lg:pt-28" />

      {/* Main Content Area */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-6 md:px-10 lg:px-16 flex-1 flex flex-col justify-start md:justify-center items-start pb-6 sm:pb-8 md:pb-0">
        {/* Brand Narrative Lockup: Editorial Typography */}
        <div className="w-full md:max-w-[62%] lg:max-w-[56%] xl:max-w-[52%] space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 pt-1 sm:pt-0 text-start">
          {/* Top Micro-label with Subtle Rule Line */}
          <div className="flex items-center gap-3 w-full">
            <div className="inline-flex items-center gap-2 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#316A7E]" />
              <p className="font-caps-label text-[#316A7E] text-[0.68rem] sm:text-[0.75rem] md:text-[0.8rem] tracking-[0.22em] uppercase font-semibold">
                {t.home.hero.pill}
              </p>
            </div>
            <div className="h-[1px] bg-[#092948]/20 flex-1 max-w-[80px] sm:max-w-[160px] md:max-w-[220px]" />
          </div>

          {/* Large Editorial Headline */}
          <h1 className="font-serif text-[#092948] text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal tracking-tight rtl:tracking-normal leading-[1.08] sm:leading-[1.12] rtl:leading-[1.25] text-start">
            {t.home.hero.headlineLine1}
            <br />
            {t.home.hero.headlineLine2}{" "}
            <span className={isArabic ? "text-[#316A7E] font-medium" : "italic font-normal"}>
              {t.home.hero.headlineItalic}
            </span>
          </h1>

          {/* Calligraphic Subheading Accent */}
          <p
            className="text-start text-[1.625rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] text-[#316A7E] font-normal leading-tight tracking-normal"
            style={{ fontFamily: 'var(--font-arabic), serif' }}
          >
            {isArabic ? t.brand.tagline : t.home.hero.arabicCalligraphy}
          </p>

          {/* High-Trust Narrative Copy */}
          <p className="text-[0.8125rem] sm:text-[0.9375rem] md:text-base lg:text-lg text-[#092948]/85 font-normal leading-relaxed max-w-[46ch] rtl:max-w-[54ch] text-start">
            {t.home.hero.subheading}
          </p>

          {/* Action CTAs */}
          <div className="pt-1.5 sm:pt-3 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 md:gap-8 justify-start w-full">
            {/* Primary Filled Navy Pill Button */}
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-[#092948] hover:bg-[#316A7E] px-5 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-[0.9375rem] font-semibold text-[#FFFFFF] shadow-sm transition-all duration-200 focus-ring-light active:scale-[0.98] whitespace-nowrap min-h-[44px]"
            >
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white/80 flex items-center justify-center p-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                {isArabic ? (
                  <ArrowUpLeft className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                ) : (
                  <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                )}
              </span>
              <span className="tracking-wider uppercase">{t.home.hero.ctaSecondary}</span>
            </Link>

            {/* Secondary Text Link with Arrow */}
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold text-[#092948] hover:text-[#316A7E] transition-colors py-2 whitespace-nowrap min-h-[44px]"
            >
              <span>{t.home.hero.ctaPrimary}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile-Only Leader Scene at Bottom (< 768px): Anchored naturally to bottom terrace */}
      <div className="md:hidden absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden h-[40svh] sm:h-[44svh] max-h-[380px] flex items-end justify-center z-10">
        <div className="relative w-full h-full max-w-[320px] sm:max-w-[380px] flex items-end justify-center transition-all duration-[800ms] ease-out opacity-100 translate-y-0 scale-100">
          <Image
            src="/images/hero-leader-laptop.png"
            alt={t.home.hero.imageAlt}
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 320px, 380px"
            className="object-contain object-bottom select-none"
          />
        </div>
      </div>
    </section>
  );
}
