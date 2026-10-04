"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function ContactBand() {
  const { t, isArabic } = useTranslation();

  return (
    <section
      className="py-10 sm:py-16 md:py-32 bg-[#092948] text-[#F9F1E7] relative overflow-hidden"
      aria-labelledby="contact-band-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <p className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs tracking-[0.2em] mb-2.5 sm:mb-6">
          {t.home.contactBand.label}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          {/* Column 1: Heading + CTA (cols 1-7) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-8">
            <h2
              id="contact-band-title"
              className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] sm:leading-[1.05] tracking-tight text-[#F9F1E7]"
            >
              {isArabic ? (
                <>
                  هل لديك مبادرة تقنية؟ لننطلق بها نحو{" "}
                  <span className="text-[#619AAA] font-medium inline-block">النجاح.</span>
                </>
              ) : (
                <>
                  Have a Project in{" "}
                  <em className="italic text-[#619AAA] font-serif font-normal">
                    Mind?
                  </em>
                </>
              )}
            </h2>

            <p className="text-xs sm:text-base md:text-lg text-[#F9F1E7]/80 leading-relaxed max-w-xl">
              {t.home.contactBand.description}
            </p>

            <div className="pt-1 sm:pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(249,241,231,0.4)] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-[0.9375rem] font-medium text-[#F9F1E7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] transition-all duration-200 focus-ring-dark min-h-[44px] sm:min-h-[48px] w-full sm:w-auto"
              >
                <span>{t.home.contactBand.cta}</span>
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center p-0.5 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] rtl:-scale-x-100" />
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Pillars (cols 8-12) */}
          <div className="lg:col-span-5 pt-5 sm:pt-8 border-t border-[rgba(249,241,231,0.2)] lg:pt-0 lg:border-t-0 lg:ps-10 lg:border-s lg:border-[rgba(249,241,231,0.2)]">
            <div className="space-y-2 sm:space-y-4">
              <p className="text-[0.6875rem] sm:text-xs uppercase tracking-[0.25em] text-[#619AAA] font-medium">
                {isArabic ? "الركائز الأساسية" : "Core Philosophy"}
              </p>
              <div className="grid grid-cols-2 sm:block sm:space-y-2 text-xs sm:text-base text-[#F9F1E7]/80 tracking-wide font-sans gap-2">
                <p className="hover:text-[#FFFFFF] transition-colors">{isArabic ? "الإنسان" : "People"}</p>
                <p className="hover:text-[#FFFFFF] transition-colors">{isArabic ? "الأفكار" : "Ideas"}</p>
                <p className="hover:text-[#FFFFFF] transition-colors">{isArabic ? "التقنية" : "Technology"}</p>
                <p className="text-[#619AAA] font-medium">{isArabic ? "غدٌ أكثر إشراقاً" : "A Brighter Tomorrow"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Structural Pathway Baseline */}
        <div className="pathway-rule-dark mt-8 sm:mt-12 md:mt-24" aria-hidden="true" />
      </div>
    </section>
  );
}
