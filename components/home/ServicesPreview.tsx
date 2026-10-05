"use client";

import React from "react";
import Link from "next/link";
import ServiceRow from "@/components/ui/ServiceRow";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { SERVICES } from "@/content/services";

export default function ServicesPreview() {
  const { t, isArabic } = useTranslation();
  // Display the 6 core featured practices on the Home page preview
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 6);

  return (
    <section
      className="py-10 sm:py-16 md:py-24 bg-[#FFFFFF]"
      aria-labelledby="services-preview-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-8 pb-6 sm:pb-10 text-start">
          <div className="max-w-3xl text-start">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#F9F1E7] border border-[#092948]/10 mb-3">
              <p className="font-caps-label text-[#316A7E] text-[0.72rem] tracking-[0.2em] uppercase font-semibold">
                {t.home.servicesPreview.label}
              </p>
            </div>
            <h2
              id="services-preview-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#092948] font-normal leading-[1.1] sm:leading-[1.05] text-start"
            >
              {isArabic ? (
                <>
                  الأتمتة والتقنية، صيغت بدقة لتلائم{" "}
                  <span className="text-[#316A7E] font-medium">أعمالك.</span>
                </>
              ) : (
                <>
                  Automation &amp; Technology, Built Around Your{" "}
                  <em className="italic text-[#316A7E] font-normal font-serif">
                    Business.
                  </em>
                </>
              )}
            </h2>
          </div>

          <div className="max-w-md space-y-3 sm:space-y-4 text-start">
            <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed font-normal text-start">
              {t.home.servicesPreview.description}
            </p>
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#092948]/25 bg-[#F9F1E7] px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FFFFFF] transition-all min-h-[44px]"
              >
                <span>{t.home.servicesPreview.viewAll}</span>
                <span className="font-mono rtl:-scale-x-100 inline-block">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Core Focus Pills Bar in Cream Box: 1-col on mobile, 2-col on sm, 4-col on md */}
        <div className="mb-6 sm:mb-12 p-4 sm:p-6 bg-[#F9F1E7] border border-[#092948]/12 rounded-[4px] shadow-xs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {t.servicesPage.coreFocus.pillars.map((focus) => (
            <div key={focus.name} className="space-y-1 text-start">
              <span className="font-caps-label text-[#092948] text-xs font-semibold block">
                {focus.name}
              </span>
              <p className="text-xs text-[#000000]/70 leading-relaxed">
                {focus.tagline || (focus.items ? focus.items.slice(0, 3).join(" • ") : "")}
              </p>
            </div>
          ))}
        </div>

        {/* 6 Services Grid with equal columns & baseline alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {featuredServices.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              variant="card"
              index={index}
            />
          ))}
        </div>

        {/* Bottom Banner in Cream Box */}
        <div className="mt-8 sm:mt-14 p-4 sm:p-8 bg-[#F9F1E7] border border-[#092948]/12 rounded-[4px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <p className="text-sm text-[#092948]/90 text-start">
            <strong className="font-semibold text-[#092948]">
              {t.servicesPage.customCallout.heading}
            </strong>{" "}
            {t.servicesPage.customCallout.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#092948] px-6 py-3 sm:py-2.5 text-xs uppercase tracking-wider font-medium text-[#FFFFFF] hover:bg-[#316A7E] transition-all whitespace-nowrap shadow-xs w-full sm:w-auto min-h-[44px]"
          >
            <span>{t.servicesPage.customCallout.cta}</span>
            <span className="font-mono rtl:-scale-x-100 inline-block">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
