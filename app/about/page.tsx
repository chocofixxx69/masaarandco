"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeading from "@/components/ui/PageHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function AboutPage() {
  const { t, isArabic } = useTranslation();

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Page Header */}
        <Reveal>
          <PageHeading
            label={t.about.heading.label}
            title={t.about.heading.title}
            italicWord={t.about.heading.italicWord}
            description={t.about.heading.description}
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-6 sm:my-12 md:my-16" aria-hidden="true" />

        {/* Main Narrative & Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start pb-8 sm:pb-16 md:pb-20">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl text-[#092948] font-normal leading-snug">
              {t.about.narrative.headline}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#000000]/85 leading-relaxed font-normal">
              {t.about.narrative.paragraph1}
            </p>

            <div className="p-4 sm:p-8 bg-[#F9F1E7] border-s-4 border-[#316A7E] rounded-[4px] shadow-xs space-y-2 sm:space-y-3">
              <span className="font-caps-label text-[#316A7E] text-[0.6875rem] sm:text-xs">
                {isArabic ? "نهجنا الهندسي" : "Our Approach"}
              </span>
              <p className={`text-sm sm:text-lg text-[#092948] font-serif leading-relaxed ${isArabic ? "" : "italic"}`}>
                {t.about.narrative.highlightQuote}
              </p>
            </div>

            <p className="text-xs sm:text-base text-[#000000]/80 leading-relaxed">
              {isArabic
                ? "من تطوير البرمجيات المعقدة والذكاء الاصطناعي إلى البنى السحابية المنيعة، والأمن السيبراني، والتجارب الرقمية، وإنترنت الأشياء، والحوسبة المتقدمة، نوفر المنظومة المتكاملة لتحويل الفكرة من المخطط الأولي إلى واقع تشغيلي حي."
                : "From software development and artificial intelligence to cloud infrastructure, data, cybersecurity, digital experiences, IoT, advanced computing, and emerging technologies, we bring together the capabilities needed to move an idea from concept to execution."}
            </p>

            <div className="pt-1 sm:pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#092948] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium text-[#092948] hover:bg-[#092948] hover:text-[#F9F1E7] transition-all focus-ring-light min-h-[44px] w-full sm:w-auto"
              >
                <span>{isArabic ? "بدء شراكة عمل" : "Initiate an Engagement"}</span>
                <span className="font-mono rtl:-scale-x-100 inline-block">↗</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#092948]/15 shadow-sm">
              <Image
                src="/images/arch-curved-concrete.jpg"
                alt="Architectural structure representing Masaar's pathway philosophy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-[0.6875rem] sm:text-xs text-[#092948]/60 font-mono pt-0.5 sm:pt-1">
              <span>{isArabic ? "مسار وشركاه — الانضباط المعماري" : "MASAAR & CO. — ARCHITECTURAL DISCIPLINE"}</span>
              <span>{isArabic ? "الرياض / دبي" : "EST. RIYADH / DUBAI"}</span>
            </div>
          </div>
        </div>

        {/* The Meaning of Masaar (مسار) Section */}
        <section
          className="p-4 sm:p-10 md:p-16 bg-[#092948] text-[#F9F1E7] rounded-[2px] my-8 sm:my-16 relative overflow-hidden"
          aria-labelledby="meaning-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#619AAA]" />
                <p className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs tracking-[0.2em]">
                  {isArabic ? "الاسم والرؤية الفلسفية" : "The Name & Philosophy"}
                </p>
              </div>

              <h2
                id="meaning-heading"
                className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#F9F1E7] font-normal leading-tight"
              >
                {isArabic ? (
                  <>
                    معنى اسم <span className="text-[#619AAA] font-serif">«مسار»</span>
                  </>
                ) : (
                  <>
                    The Meaning of Masaar{" "}
                    <span className="text-[#619AAA] font-serif">(مسار)</span>
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-xl text-[#F9F1E7]/90 leading-relaxed font-normal max-w-2xl">
                {isArabic
                  ? "يحمل اسم «مسار» في ثناياه معنى الطريق والوجهة الواضحة؛ وهو يجسد الرحلة الهندسية التي نخوضها خلف كل ما نبنيه — من الشرارة الأولى للفكرة، وحتى اكتمالها كحل تطبيقي راسخ يخدم الواقع."
                  : "The name Masaar (مسار) means path, course, or direction in Arabic. It reflects the journey behind everything we build — from an initial idea to something tangible, useful, and ready for the real world."}
              </p>

              <div className="pt-2 border-t border-[rgba(249,241,231,0.2)] max-w-xl">
                <p className={`font-serif text-lg sm:text-3xl text-[#F9F1E7] ${isArabic ? "" : "italic"}`}>
                  &ldquo;{t.about.narrative.highlightQuote}&rdquo;
                </p>
                <p className="text-[0.6875rem] sm:text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium mt-2 sm:mt-3">
                  {t.about.narrative.attribution}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-5 sm:p-8 border border-[rgba(249,241,231,0.15)] bg-[#092948]/60 rounded-[2px]">
              <span className="font-serif text-4xl sm:text-7xl text-[#F9F1E7] mb-1 sm:mb-2 font-normal">
                {t.about.narrative.arabicRoot}
              </span>
              <p className="text-[0.6875rem] sm:text-xs uppercase tracking-[0.25em] text-[#619AAA] font-mono mt-1">
                {t.about.narrative.arabicRootMeaning}
              </p>
              <div className="w-10 sm:w-12 h-[1px] bg-[#619AAA] my-2.5 sm:my-4" />
              <p className="text-xs text-[#F9F1E7]/70 leading-relaxed">
                {t.about.narrative.arabicRootExplanation}
              </p>
            </div>
          </div>
        </section>

        {/* Full Capabilities Matrix */}
        <section className="py-10 sm:py-16 border-t border-[#092948]/15" aria-labelledby="capabilities-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-12">
            <div>
              <p className="font-caps-label text-[#316A7E] text-[0.6875rem] sm:text-xs mb-1 sm:mb-2">
                {t.about.capabilities.label}
              </p>
              <h2
                id="capabilities-heading"
                className="font-serif text-2xl sm:text-4xl text-[#092948] font-normal"
              >
                {t.about.capabilities.title}
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#092948] hover:text-[#316A7E] uppercase tracking-wider"
            >
              <span>{isArabic ? "استكشف ممارسات وحلول مسار" : "Explore Solution Practices"}</span>
              <span className="rtl:-scale-x-100 inline-block">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {t.about.capabilities.items.map((cap, i) => (
              <div
                key={i}
                className="p-3.5 sm:p-6 bg-[#F9F1E7] border border-[#092948]/12 rounded-[4px] shadow-xs space-y-1.5 sm:space-y-2.5 hover:border-[#316A7E] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#316A7E]" dir="ltr">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#092948]/40 group-hover:text-[#316A7E] transition-colors rtl:-scale-x-100" />
                </div>
                <h3 className="font-serif text-base sm:text-xl text-[#092948] font-normal group-hover:text-[#316A7E] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#000000]/70 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Operations & Contact Pathway */}
        <section className="mt-6 sm:mt-8 p-4 sm:p-8 md:p-12 bg-[#F9F1E7] border border-[#092948]/12 rounded-[4px] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-8">
          <div className="space-y-1.5 sm:space-y-2 max-w-xl">
            <p className="font-caps-label text-[#316A7E] text-[0.6875rem] sm:text-xs">
              {t.about.presence.label}
            </p>
            <h3 className="font-serif text-xl sm:text-3xl text-[#092948]">
              {t.about.presence.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#000000]/75">
              {t.about.presence.description}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#092948] px-6 sm:px-7 py-2.5 sm:py-3 text-xs uppercase tracking-wider font-medium text-[#FFFFFF] hover:bg-[#316A7E] transition-all whitespace-nowrap shadow-xs min-h-[44px] w-full sm:w-auto"
          >
            <span>{t.about.presence.cta}</span>
            <span className="font-mono rtl:-scale-x-100 inline-block">↗</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
