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
      className="relative bg-[#092948] text-[#F9F1E7] border-t border-[rgba(249,241,231,0.12)] pt-14 sm:pt-20 md:pt-24 pb-8 sm:pb-12 overflow-hidden selection:bg-[#316A7E] selection:text-[#FFFFFF]"
      role="contentinfo"
    >
      {/* Creative Architectural Atmosphere & Watermark Layer (as in Image 1) */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Ambient Architectural Aura — soft radial depth */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 75% 85%, rgba(49, 106, 126, 0.18) 0%, rgba(9, 41, 72, 0) 70%)",
          }}
        />

        {/* Monumental Arabic Typographic Watermark (مسار) anchored as in 1st Image */}
        <div
          className="absolute -bottom-8 sm:-bottom-14 md:-bottom-20 lg:-bottom-24 end-[-2%] sm:end-[0%] lg:end-[4%] leading-none text-[#F9F1E7]/[0.038]"
          style={{ fontFamily: "var(--font-arabic), serif" }}
        >
          <span className="block text-[16rem] sm:text-[24rem] md:text-[32rem] lg:text-[40rem] xl:text-[46rem] tracking-tight font-normal whitespace-nowrap">
            مسار
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* 4 Precision Editorial Columns (Clean, spacious, un-overengineered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-12 sm:pb-16 md:pb-20 text-start">
          {/* Col 1: Direct Communication (cols 1-4) — Clean, no unwanted extra text */}
          <div className="lg:col-span-4 space-y-3.5 pe-0 lg:pe-8">
            <span className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs tracking-[0.22em] uppercase font-semibold block">
              {t.footer.contactLabel}
            </span>
            <div>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F9F1E7] hover:text-[#619AAA] transition-colors tracking-tight focus-ring-dark inline-flex items-baseline gap-2 group"
              >
                <bdi dir="ltr">{COMPANY.contact.email}</bdi>
                <span className="text-base sm:text-lg text-[#619AAA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5 rtl:-scale-x-100">
                  ↗
                </span>
              </a>
              <p className="text-xs sm:text-sm text-[#F9F1E7]/60 font-mono tracking-wide mt-1.5">
                {t.footer.hours}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Pathways (cols 5-6) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs tracking-[0.2em] uppercase font-semibold">
              {t.footer.navigationLabel}
            </h4>
            <ul className="space-y-2.5">
              {t.nav.items.map((item, idx) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[#F9F1E7]/80 hover:text-[#FFFFFF] transition-colors focus-ring-dark"
                  >
                    <span className="font-mono text-[0.625rem] text-[#619AAA]/60 group-hover:text-[#619AAA] transition-colors">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Disciplines (cols 7-9) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs tracking-[0.2em] uppercase font-semibold">
              {t.footer.disciplinesLabel}
            </h4>
            <ul className="space-y-2.5">
              {t.servicesPage.servicesList.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-xs sm:text-sm text-[#F9F1E7]/80 hover:text-[#FFFFFF] transition-colors block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-xs sm:text-sm text-[#619AAA] hover:text-[#FFFFFF] transition-colors font-medium inline-flex items-center gap-1.5 group"
                >
                  <span>
                    {isArabic ? "عرض كافة الحلول (١٠)" : "Explore All 10 Practices"}
                  </span>
                  <span className="rtl:-scale-x-100 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Strategic Regional Hubs (cols 10-12) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs tracking-[0.2em] uppercase font-semibold">
              {t.contactPage.directChannels.hubsLabel}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="text-[#F9F1E7] font-medium block">
                  {isArabic ? "الرياض (المقر الرئيسي)" : "Riyadh (HQ)"}
                </span>
                <span className="text-[#F9F1E7]/60 block text-[0.8125rem]">
                  {isArabic ? "طريق الملك فهد، حي العليا" : "King Fahd Road, Al Olaya District"}
                </span>
              </div>
              <div>
                <span className="text-[#F9F1E7] font-medium block">
                  {isArabic ? "دبي" : "Dubai"}
                </span>
                <span className="text-[#F9F1E7]/60 block text-[0.8125rem]">
                  {isArabic ? "مركز دبي المالي العالمي، البوابة ٤" : "DIFC Gate Precinct 4"}
                </span>
              </div>
              <div>
                <span className="text-[#F9F1E7] font-medium block">
                  {isArabic ? "لندن" : "London"}
                </span>
                <span className="text-[#F9F1E7]/60 block text-[0.8125rem]">
                  {isArabic ? "١ فينزبري سيركس" : "1 Finsbury Circus"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Baseline Horizon */}
        <div className="pt-6 sm:pt-8 border-t border-[rgba(249,241,231,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[0.6875rem] sm:text-xs text-[#F9F1E7]/55">
          {/* Copyright & Discipline Signature */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span>
              &copy; {currentYear} {t.brand.legalName}. {t.footer.allRightsReserved}
            </span>
            <span className="hidden sm:inline text-[#F9F1E7]/25" aria-hidden="true">
              ·
            </span>
            <span className="text-[#F9F1E7]/70 font-mono">
              {t.footer.architecturalStandard}
            </span>
          </div>

          {/* Legal Protocols */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <Link
              href="/contact"
              className="hover:text-[#F9F1E7] transition-colors focus-ring-dark"
            >
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <span className="text-[#F9F1E7]/25" aria-hidden="true">
              ·
            </span>
            <Link
              href="/contact"
              className="hover:text-[#F9F1E7] transition-colors focus-ring-dark"
            >
              {isArabic ? "شروط التعاقد" : "Terms of Engagement"}
            </Link>
            <span className="text-[#F9F1E7]/25" aria-hidden="true">
              ·
            </span>
            <Link
              href="/contact"
              className="hover:text-[#F9F1E7] transition-colors focus-ring-dark"
            >
              {isArabic ? "معايير الأمان" : "Security Standards"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
