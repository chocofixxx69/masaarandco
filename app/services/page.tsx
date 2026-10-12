"use client";

import React from "react";
import Link from "next/link";
import PageHeading from "@/components/ui/PageHeading";
import ServiceRow from "@/components/ui/ServiceRow";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/content/services";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function ServicesPage() {
  const { t, isArabic } = useTranslation();
  const [activeSlug, setActiveSlug] = React.useState<string>(SERVICES[0]?.slug || "");

  // Scrollspy to track which service is currently visible in viewport
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = SERVICES.length - 1; i >= 0; i--) {
        const service = SERVICES[i];
        const el = document.getElementById(service.slug);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveSlug(service.slug);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToService = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSlug(slug);
      window.history.pushState(null, "", `#${slug}`);
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Page Heading */}
        <Reveal>
          <PageHeading
            label={t.servicesPage.heading.label}
            title={t.servicesPage.heading.title}
            italicWord={t.servicesPage.heading.italicWord}
            description={t.servicesPage.heading.description}
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-6 sm:my-12" aria-hidden="true" />

        {/* OUR CORE FOCUS Section */}
        <section
          className="mb-8 sm:mb-20 p-4 sm:p-10 md:p-14 bg-[#092948] text-[#F9F1E7] rounded-[2px]"
          aria-labelledby="core-focus-heading"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-10 pb-4 sm:pb-6 border-b border-[rgba(249,241,231,0.15)]">
            <div>
              <p className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs tracking-[0.2em] mb-1 sm:mb-2">
                {t.servicesPage.coreFocus.label}
              </p>
              <h2
                id="core-focus-heading"
                className="font-serif text-2xl sm:text-4xl text-[#F9F1E7] font-normal"
              >
                {t.servicesPage.coreFocus.title}
              </h2>
            </div>
            <p className="text-[0.6875rem] sm:text-sm text-[#F9F1E7]/70 font-mono">
              {t.servicesPage.coreFocus.pillarsBadge}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {t.servicesPage.coreFocus.pillars.map((focus) => (
              <div
                key={focus.name}
                className="p-3.5 sm:p-6 bg-[#092948]/80 border border-[rgba(249,241,231,0.15)] rounded-[2px] space-y-2.5 sm:space-y-4"
              >
                <div>
                  <h3 className="font-serif text-lg sm:text-2xl text-[#F9F1E7] tracking-wide">
                    {focus.name}
                  </h3>
                  <p className="text-[0.6875rem] sm:text-xs text-[#619AAA] mt-0.5 sm:mt-1 font-medium">
                    {focus.tagline}
                  </p>
                </div>
                {focus.items && (
                  <ul className="space-y-1.5 sm:space-y-2 pt-2 border-t border-[rgba(249,241,231,0.1)]">
                    {focus.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-[#F9F1E7]/80 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#619AAA] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Mobile & Tablet Quick Jump Navigation (<1024px) */}
        <div className="lg:hidden mb-6 p-3 sm:p-4 bg-[#F9F1E7] border border-[#092948]/12 rounded-[4px] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="font-caps-label text-[#316A7E] text-[0.6875rem]">
              {t.servicesPage.jumpToTitle}
            </span>
            <span className="text-[0.6875rem] text-[#092948]/50 font-mono">
              {isArabic ? "اسحب ←" : "Swipe →"}
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            {t.servicesPage.servicesList.map((s) => {
              const isActive = s.slug === activeSlug;
              return (
                <a
                  key={s.id}
                  href={`#${s.slug}`}
                  onClick={(e) => scrollToService(s.slug, e)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full border transition-all whitespace-nowrap min-h-[34px] inline-flex items-center gap-2 ${
                    isActive
                      ? "bg-[#092948] border-[#092948] text-[#FFFFFF] shadow-xs"
                      : "bg-[#FFFFFF] border-[#092948]/15 text-[#092948] hover:bg-[#092948] hover:text-[#FFFFFF]"
                  }`}
                >
                  <span
                    className={`font-mono font-semibold ${
                      isActive ? "text-[#619AAA]" : "text-[#316A7E]"
                    }`}
                    dir="ltr"
                  >
                    {s.number}
                  </span>
                  <span>{s.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Content with Desktop Sticky Fixed Navigation Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Desktop Fixed Sticky Index (cols 1-3) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 xl:top-32 self-start max-h-[calc(100vh-8.5rem)] overflow-y-auto no-scrollbar space-y-6 pe-2">
            <p className="font-caps-label text-[#316A7E] text-xs">
              {isArabic ? "فهرس الحلول (١٠)" : "Index of Solutions (10)"}
            </p>
            <nav className="space-y-1" aria-label="Services Navigation">
              {t.servicesPage.servicesList.map((s) => {
                const isActive = s.slug === activeSlug;
                return (
                  <a
                    key={s.id}
                    href={`#${s.slug}`}
                    onClick={(e) => scrollToService(s.slug, e)}
                    className={`group flex items-baseline gap-2.5 text-xs py-1.5 px-2 rounded-[2px] transition-all border-s-2 ${
                      isActive
                        ? "border-[#092948] bg-[#092948]/5 text-[#092948] font-semibold"
                        : "border-transparent text-[#092948]/70 hover:text-[#092948] hover:border-[#092948]/30 hover:bg-[#092948]/[0.02]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[0.7rem] transition-colors ${
                        isActive
                          ? "text-[#316A7E] font-bold"
                          : "text-[#316A7E]/75 font-semibold group-hover:text-[#316A7E]"
                      }`}
                      dir="ltr"
                    >
                      {s.number}
                    </span>
                    <span className="truncate">
                      {s.name}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-[#092948]/15">
              <p className="text-xs text-[#092948]/70 mb-2 font-medium">
                {isArabic ? "متطلبات مخصصة؟" : "Custom Requirement?"}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#092948] hover:text-[#316A7E] uppercase tracking-wider"
              >
                <span>{isArabic ? "اطلب معمارية مخصصة" : "Request Custom Build"}</span>
                <span className="rtl:-scale-x-100 inline-block">↗</span>
              </Link>
            </div>
          </aside>

          {/* Main Services Editorial List (cols 4-12) */}
          <main className="lg:col-span-9 space-y-4 sm:space-y-12">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 50}>
                <ServiceRow
                  service={service}
                  variant="editorial"
                  index={index}
                />
              </Reveal>
            ))}
          </main>
        </div>

        {/* Closing Consultation Callout */}
        <div className="mt-8 sm:mt-20 p-4 sm:p-10 md:p-14 bg-[#092948] text-[#F9F1E7] rounded-[2px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-8">
          <div className="space-y-1.5 sm:space-y-2 max-w-xl">
            <p className="font-caps-label text-[#619AAA] text-[0.6875rem] sm:text-xs">
              {t.servicesPage.customCallout.label}
            </p>
            <h3 className="font-serif text-xl sm:text-2xl md:text-4xl text-[#F9F1E7] font-normal">
              {t.servicesPage.customCallout.heading}
            </h3>
            <p className="text-xs sm:text-base text-[#F9F1E7]/85">
              {t.servicesPage.customCallout.description}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(249,241,231,0.4)] px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#F9F1E7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] transition-all whitespace-nowrap focus-ring-dark min-h-[44px] w-full sm:w-auto"
          >
            <span>{t.servicesPage.customCallout.cta}</span>
            <span className="font-mono rtl:-scale-x-100 inline-block">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
