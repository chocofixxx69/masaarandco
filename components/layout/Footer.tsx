"use client";

import React from "react";
import Link from "next/link";
import MasaarLogo from "@/components/ui/MasaarLogo";
import { COMPANY } from "@/content/company";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t, isArabic } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#092948] text-[#F9F1E7] pt-10 sm:pt-16 md:pt-24 pb-8 sm:pb-12 border-t border-[rgba(249,241,231,0.15)] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Top 4-Col Grid (Desktop 4-col -> Mobile 2-col subgrid for links) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-8 pb-8 sm:pb-12 md:pb-16">
          {/* Col 1: Brand & Meaning */}
          <div className="space-y-3 sm:space-y-4">
            <MasaarLogo variant="cream" width={180} height={64} />
            <p className="text-xs sm:text-sm text-[#F9F1E7]/80 leading-relaxed max-w-sm pt-1 sm:pt-2">
              {t.home.intro.paragraph}
            </p>
            <div className="pt-1 sm:pt-2">
              <span className="text-[0.6875rem] sm:text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium block">
                {isArabic ? "فلسفة مسار" : "Philosophy"}
              </span>
              <p className="text-[0.6875rem] sm:text-xs text-[#F9F1E7]/70 mt-1">
                {t.brand.motto}
              </p>
            </div>
          </div>

          {/* Group Navigation & Solutions in 2-col on mobile, transparent on md+ via md:contents */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:contents">
            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="text-[0.6875rem] sm:text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium mb-3 sm:mb-5">
                {t.footer.navigationLabel}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {t.nav.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-[#F9F1E7]/80 hover:text-[#FFFFFF] transition-colors focus-ring-dark"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-[0.6875rem] sm:text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium mb-3 sm:mb-5">
                {t.footer.disciplinesLabel}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {t.servicesPage.servicesList.slice(0, 4).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services#${service.slug}`}
                      className="text-xs sm:text-sm text-[#F9F1E7]/80 hover:text-[#FFFFFF] transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="text-xs sm:text-sm text-[#619AAA] hover:underline transition-colors font-medium flex items-center gap-1"
                  >
                    <span>{isArabic ? "عرض كافة الحلول (١٢)" : "View All 12"}</span>
                    <span className="rtl:-scale-x-100 inline-block">↗</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Presence & Inquiries */}
          <div className="pt-2 sm:pt-0">
            <h4 className="text-[0.6875rem] sm:text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium mb-2.5 sm:mb-5">
              {t.footer.contactLabel}
            </h4>
            <p className="text-xs sm:text-sm text-[#F9F1E7]/80 mb-1.5 sm:mb-2">
              {isArabic ? "قنوات التواصل المباشر:" : "Direct communication:"}
            </p>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="text-xs sm:text-sm font-medium text-[#F9F1E7] hover:text-[#619AAA] underline decoration-[#619AAA]/50 underline-offset-4 transition-colors block mb-3 sm:mb-4"
              dir="ltr"
            >
              {COMPANY.contact.email}
            </a>
            <div className="pt-1 sm:pt-2">
              <span className="text-[0.6875rem] sm:text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium block">
                {t.contactPage.directChannels.hubsLabel}
              </span>
              <p className="text-xs text-[#F9F1E7]/70 mt-1">
                {isArabic ? "الرياض · دبي · لندن" : "Riyadh · Dubai · London"}
              </p>
            </div>
          </div>
        </div>

        {/* Structural Pathway Baseline */}
        <div className="pathway-rule-dark" aria-hidden="true" />

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 text-[0.6875rem] sm:text-xs text-[#F9F1E7]/60">
          <div>
            &copy; {currentYear} {t.brand.legalName}. {t.footer.allRightsReserved}
          </div>
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2">
            <span className="hover:text-[#F9F1E7] cursor-pointer">
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </span>
            <span className="text-[#F9F1E7]/30">·</span>
            <span className="hover:text-[#F9F1E7] cursor-pointer">
              {isArabic ? "شروط الخدمة والتعاقد" : "Terms of Engagement"}
            </span>
            <span className="text-[#F9F1E7]/30">·</span>
            <span className="hover:text-[#F9F1E7] cursor-pointer">
              {isArabic ? "معايير الأمان والامتثال" : "Security Overview"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
