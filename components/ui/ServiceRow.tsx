"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { ServiceItem } from "@/content/services";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface ServiceRowProps {
  service: ServiceItem;
  variant?: "card" | "editorial";
  index?: number;
}

export default function ServiceRow({
  service,
  variant = "card",
  index = 0,
}: ServiceRowProps) {
  const { t, isArabic } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  // Dynamically resolve localized content if available
  const localized = t.servicesPage.servicesList.find(
    (s) => s.id === service.id || s.slug === service.slug
  ) || {
    name: service.name,
    tagline: service.tagline,
    summary: service.summary,
    scope: service.scope,
    deliverables: service.deliverables,
    cta: service.cta,
    number: service.number,
  };

  if (variant === "card") {
    return (
      <Link
        href={`/services#${service.slug}`}
        className="group flex flex-col h-full bg-[#F9F1E7] rounded-[4px] p-4 sm:p-6 border border-[#092948]/12 hover:border-[#092948]/30 hover:shadow-md transition-all duration-200 focus-ring-light"
      >
        {/* Thumbnail Image */}
        <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden mb-3 sm:mb-5 bg-[#092948]/5 rounded-[2px] border border-[#092948]/10">
          <Image
            src={service.image}
            alt={service.imageAlt || localized.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Content Area */}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            {/* Number and Arrow Header */}
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="text-xs font-mono tracking-widest text-[#316A7E] font-medium" dir="ltr">
                {service.number}
              </span>
              <span className="w-7 h-7 rounded-full border border-[#092948]/30 flex items-center justify-center text-[#092948] transition-all duration-200 group-hover:border-[#092948] group-hover:bg-[#092948] group-hover:text-[#FFFFFF]">
                {isArabic ? (
                  <ArrowUpLeft className="w-3.5 h-3.5 stroke-[2]" />
                ) : (
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                )}
              </span>
            </div>

            {/* Service Name */}
            <h3 className="font-serif text-lg sm:text-2xl text-[#092948] font-medium mb-1.5 sm:mb-2 group-hover:text-[#316A7E] transition-colors leading-snug">
              {localized.name}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#092948]/80 leading-relaxed line-clamp-2 sm:line-clamp-3 min-h-0 sm:min-h-[3rem]">
              {localized.tagline}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // Full editorial row for /services page
  const isEven = index % 2 === 0;

  return (
    <article
      id={service.slug}
      className="scroll-mt-24 sm:scroll-mt-32 py-8 sm:py-14 md:py-24 border-t border-[#092948]/15"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
        {/* Side 1: Number + Name (cols 1-5) */}
        <div className={`lg:col-span-5 space-y-3 sm:space-y-4 ${!isEven ? "lg:order-2" : ""}`}>
          <div className="flex items-baseline gap-4">
            <span className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#316A7E] font-normal" dir="ltr">
              {service.number}
            </span>
            <span className="h-[1px] flex-1 bg-[#092948]/15" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#092948] font-normal leading-[1.1]">
            {localized.name}
          </h2>

          <p className="text-sm sm:text-base text-[#316A7E] font-medium pt-0.5 sm:pt-1">
            {localized.tagline}
          </p>

          <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden mt-4 sm:mt-6 bg-[#092948]/5 rounded-[2px]">
            <Image
              src={service.image}
              alt={service.imageAlt || localized.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Side 2: Summary, Scope, Deliverables (cols 6-12) */}
        <div className={`lg:col-span-7 space-y-4 sm:space-y-8 ${!isEven ? "lg:order-1" : ""}`}>
          <div>
            <h3 className="font-caps-label text-[#316A7E] mb-2 sm:mb-3 text-xs">
              {isArabic ? "نظرة عامة" : "Overview"}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#000000]/85 leading-relaxed font-normal">
              {localized.summary}
            </p>
          </div>

          {/* Scope and Deliverables with Mobile Collapsible Pattern (<1024px) / Permanent on Desktop (>=1024px) */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="lg:hidden w-full py-2.5 px-4 bg-[#F9F1E7] border border-[#092948]/15 rounded-[4px] flex items-center justify-between text-xs font-semibold text-[#092948] hover:text-[#316A7E] hover:border-[#316A7E] transition-all cursor-pointer min-h-[44px]"
              aria-expanded={expanded}
            >
              <span className="font-caps-label text-[0.6875rem] text-[#316A7E] font-medium tracking-[0.15em] uppercase">
                {expanded
                  ? isArabic
                    ? "إخفاء التفاصيل"
                    : "Hide Details"
                  : isArabic
                  ? `النطاق والمخرجات (${localized.deliverables.length})`
                  : `Scope & Deliverables (${localized.deliverables.length})`}
              </span>
              <span className="font-mono text-sm text-[#316A7E]">{expanded ? "—" : "+"}</span>
            </button>

            <div className={`${expanded ? "block pt-4 space-y-5" : "hidden"} lg:block lg:pt-0 lg:space-y-8`}>
              {/* Scope list */}
              <div>
                <h4 className="font-caps-label text-[#316A7E] mb-3 sm:mb-4 text-xs">
                  {isArabic ? "نطاق المعمارية والخدمة" : "Scope of Architecture"}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {localized.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-[#000000]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#316A7E] mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables list */}
              <div>
                <h4 className="font-caps-label text-[#316A7E] mb-3 sm:mb-4 text-xs">
                  {isArabic ? "المخرجات والنتائج الرئيسية" : "Core Deliverables"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {localized.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 sm:p-4 bg-[#F9F1E7] border border-[#092948]/12 rounded-[2px] text-xs sm:text-sm text-[#092948] font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Link to Contact */}
          <div className="pt-2 sm:pt-4">
            <Link
              href={`/contact?service=${encodeURIComponent(localized.name)}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#092948] px-6 py-3 sm:py-2.5 text-sm font-medium text-[#092948] hover:bg-[#092948] hover:text-[#F9F1E7] transition-all duration-200 focus-ring-light min-h-[44px] w-full sm:w-auto"
            >
              <span>{localized.cta}</span>
              {isArabic ? (
                <ArrowUpLeft className="w-3.5 h-3.5 stroke-[2] inline-block" />
              ) : (
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] inline-block" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
