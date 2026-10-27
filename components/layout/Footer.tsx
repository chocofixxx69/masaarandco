"use client";

import React from "react";
import Link from "next/link";
import { COMPANY } from "@/content/company";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t, isArabic } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#092948] text-[#F9F1E7] border-t border-[rgba(249,241,231,0.12)] pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-14 overflow-hidden selection:bg-[#316A7E] selection:text-[#FFFFFF]"
      role="contentinfo"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-12">
        {/* Top Architectural Studio Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-8 mb-8 sm:mb-12 border-b border-[rgba(249,241,231,0.1)] text-[0.6875rem] sm:text-xs font-mono text-[#619AAA]">
          <div className="flex items-center gap-2.5 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#619AAA]" aria-hidden="true" />
            <span className="font-semibold text-[#F9F1E7]/90">{t.brand.legalName}</span>
          </div>
          <div className="tracking-widest uppercase text-[#F9F1E7]/50 text-start sm:text-end">
            <span>{t.footer.statement}</span>
          </div>
        </div>

        {/* Main Architectural Triptych: Balanced Centered Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-0 items-start">
          {/* Left Wing: Navigation Index (md:col-span-3) */}
          <div className="md:col-span-3 lg:pe-8 space-y-4 text-start">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3 bg-[#619AAA]" aria-hidden="true" />
              <h4 className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs tracking-[0.22em] uppercase font-semibold">
                {t.footer.navigationLabel}
              </h4>
            </div>
            <ul className="space-y-2">
              {t.nav.items.map((item, idx) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between text-xs sm:text-sm text-[#F9F1E7]/75 hover:text-[#FFFFFF] transition-colors py-1 focus-ring-dark border-b border-transparent hover:border-[rgba(249,241,231,0.08)]"
                  >
                    <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                    <span className="font-mono text-[0.6875rem] text-[#619AAA]/50 group-hover:text-[#619AAA] transition-colors">
                      0{idx + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Sanctuary: The Studio's Core Identity & Direct Inquiry (md:col-span-6) */}
          <div className="md:col-span-6 text-center px-4 sm:px-8 lg:px-12 py-4 lg:py-0 border-y md:border-y-0 md:border-s md:border-e border-[rgba(249,241,231,0.1)] flex flex-col items-center justify-center">
            {/* Editorial Arabic Calligraphic Seal */}
            <span
              className="text-4xl sm:text-5xl text-[#619AAA]/90 font-normal select-none leading-none mb-3"
              style={{ fontFamily: "var(--font-arabic), serif" }}
              aria-label="مسار"
            >
              مسار
            </span>

            {/* Studio Tagline */}
            <h3
              className={
                isArabic
                  ? "text-lg sm:text-xl text-[#F9F1E7] font-medium leading-snug tracking-normal"
                  : "font-serif text-xl sm:text-2xl text-[#F9F1E7] font-normal leading-snug tracking-tight"
              }
            >
              « {t.footer.tagline} »
            </h3>

            {/* Primary Direct Communication Channel */}
            <div className="my-5 w-full">
              <span className="font-caps-label text-[#619AAA] text-[0.625rem] sm:text-[0.6875rem] tracking-[0.24em] uppercase font-semibold block mb-2">
                {t.footer.contactLabel}
              </span>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#F9F1E7] hover:text-[#619AAA] transition-colors tracking-tight focus-ring-dark inline-flex items-baseline gap-2 group"
              >
                <bdi dir="ltr">{COMPANY.contact.email}</bdi>
                <span className="text-base sm:text-lg text-[#619AAA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5 rtl:-scale-x-100">
                  ↗
                </span>
              </a>
            </div>

            {/* Studio Definition & Ethos */}
            <p className="text-xs sm:text-sm text-[#F9F1E7]/70 leading-relaxed max-w-md mx-auto pt-2 border-t border-[rgba(249,241,231,0.08)]">
              {t.footer.ethosText}
            </p>
          </div>

          {/* Right Wing: Disciplines & Capabilities (md:col-span-3) */}
          <div className="md:col-span-3 lg:ps-8 space-y-4 text-start">
            <div className="flex items-center gap-2">
              <span className="w-1 h-3 bg-[#619AAA]" aria-hidden="true" />
              <h4 className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs tracking-[0.22em] uppercase font-semibold">
                {t.footer.disciplinesLabel}
              </h4>
            </div>
            <ul className="space-y-2.5">
              {t.servicesPage.servicesList.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-xs sm:text-sm text-[#F9F1E7]/75 hover:text-[#FFFFFF] transition-colors block line-clamp-1 py-0.5"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-[rgba(249,241,231,0.08)]">
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-[#619AAA] hover:text-[#FFFFFF] transition-colors font-medium inline-flex items-center gap-1.5 group"
                >
                  <span>{t.footer.explorePractices}</span>
                  <span className="rtl:-scale-x-100 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Horizon: Centered Copyright Notice */}
        <div className="pt-8 mt-8 sm:mt-12 border-t border-[rgba(249,241,231,0.1)] text-center text-[0.6875rem] sm:text-xs text-[#F9F1E7]/55">
          <p>
            &copy; {currentYear} {t.brand.legalName}. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
