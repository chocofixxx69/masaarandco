"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import MasaarLogo from "@/components/ui/MasaarLogo";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { COMPANY } from "@/content/company";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  const { t, isArabic } = useTranslation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation & Focus management
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Background Scroll Locking
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const preventTouch = (e: TouchEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        e.preventDefault();
      }
    };
    document.addEventListener("touchmove", preventTouch, { passive: false });

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      document.removeEventListener("touchmove", preventTouch);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      onClick={onClose}
      onTouchMove={(e) => {
        if (e.target === e.currentTarget && e.cancelable) e.preventDefault();
      }}
      className="fixed inset-0 z-50 bg-[#092948]/45 backdrop-blur-[3px] transition-opacity animate-in fade-in duration-300 touch-none overscroll-none"
    >
      {/* Off-Canvas Drawer (Slides from Right in LTR, Slides from Left in RTL) */}
      <div
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 z-50 w-[82vw] sm:w-[350px] max-w-[390px] min-w-[280px] bg-[#F9F1E7] text-[#092948] border-s border-[#092948]/15 shadow-[-20px_0_50px_rgba(9,41,72,0.16)] rtl:shadow-[20px_0_50px_rgba(9,41,72,0.16)] flex flex-col justify-between overflow-y-auto overscroll-contain animate-in slide-in-from-right rtl:slide-in-from-left duration-300 ease-out"
      >
        {/* Top Header Bar: Optically Aligned Brand & Close */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#092948]/12 bg-[#F9F1E7] sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <MasaarLogo variant="navy" width={115} height={38} onClick={onClose} />
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#092948]/20 bg-[#FFFFFF]/60 hover:bg-[#092948] hover:text-[#FFFFFF] text-[#092948] transition-all cursor-pointer active:scale-95 focus-ring-light shadow-2xs"
          >
            <span className="font-caps-label text-[0.625rem] tracking-[0.18em] uppercase font-semibold pt-0.5">
              {t.nav.close}
            </span>
            <X className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        </div>

        {/* Scrollable Middle Body: Structured, Balanced Editorial Hierarchy */}
        <div className="flex-1 px-6 py-5 space-y-5 overflow-y-auto no-scrollbar">
          {/* Section 0: Bilingual Language Switcher */}
          <LanguageToggle variant="drawer" />

          {/* Section 1: Main Routes Directory */}
          <div className="space-y-2">
            <p className="font-caps-label text-[0.625rem] text-[#316A7E] tracking-[0.22em] uppercase font-semibold">
              {isArabic ? "مسار — التنقل الرئيسي" : "Navigation — مسار"}
            </p>

            <nav className="divide-y divide-[#092948]/8 border-y border-[#092948]/10" aria-label="Mobile Navigation Links">
              {t.nav.items.map((item, index) => {
                const isActive = currentPath === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between py-3.5 transition-colors duration-200 group ${
                      isActive ? "text-[#092948] font-medium" : "text-[#092948]/80 hover:text-[#092948]"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className={`font-mono text-xs font-semibold ${
                        isActive ? "text-[#316A7E]" : "text-[#092948]/40 group-hover:text-[#316A7E]"
                      }`} dir="ltr">
                        {isArabic ? `٠${index + 1}` : `0${index + 1}`}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-2xl text-[#092948] tracking-tight group-hover:text-[#316A7E] transition-colors">
                          {item.label}
                        </span>
                        {item.tag && (
                          <span className="text-[0.6875rem] text-[#316A7E]/75 font-normal">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="w-6 flex justify-end flex-shrink-0">
                      <ArrowUpRight className={`w-4 h-4 transition-all duration-200 rtl:-scale-x-100 ${
                        isActive
                          ? "text-[#316A7E] opacity-100 scale-110"
                          : "text-[#092948]/30 opacity-60 group-hover:opacity-100 group-hover:text-[#316A7E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`} />
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Section 2: Key Disciplines */}
          <div className="pt-1 space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-caps-label text-[0.625rem] text-[#316A7E] tracking-[0.22em] uppercase font-semibold">
                {isArabic ? "المحاور الهندسية" : "Strategic Disciplines"}
              </p>
              <Link
                href="/services"
                onClick={onClose}
                className="inline-flex items-center gap-1 text-[0.6875rem] text-[#092948]/60 hover:text-[#092948] font-medium transition-colors"
              >
                <span>{isArabic ? "كافة الحلول (١٢)" : "All 12"}</span>
                <ArrowRight className="w-3 h-3 text-[#316A7E] rtl:-scale-x-100 inline-block" />
              </Link>
            </div>

            <div className="space-y-1.5">
              {t.servicesPage.servicesList.slice(0, 4).map((d) => (
                <Link
                  key={d.id}
                  href={`/services#${d.slug}`}
                  onClick={onClose}
                  className="px-3 py-2 rounded-[2px] bg-[#FFFFFF]/70 border border-[#092948]/10 hover:border-[#316A7E]/40 hover:bg-[#FFFFFF] text-xs text-[#092948] font-medium leading-normal transition-all flex items-center justify-between group shadow-2xs"
                >
                  <span className="line-clamp-1">{d.name}</span>
                  <ArrowRight className="w-3 h-3 text-[#316A7E] opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 ms-2 rtl:-scale-x-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Section 3: Primary Action CTA Button (Matching Desktop "Let's Talk") */}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={onClose}
              className="group flex items-center justify-between w-full rounded-full bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] px-5 py-3 text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 shadow-xs active:scale-[0.98]"
            >
              <span>{t.nav.letsTalk}</span>
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white rtl:-scale-x-100" />
              </span>
            </Link>
          </div>
        </div>

        {/* Section 4: Bottom Footer (Inquiries & Geographic Hubs) with Safe-Area Padding */}
        <div className="px-6 pt-4 pb-6 sm:pb-4 border-t border-[#092948]/12 bg-[#F9F1E7] sticky bottom-0 z-20 space-y-1.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[0.625rem] font-caps-label text-[#316A7E] tracking-[0.2em] uppercase font-semibold">
              {isArabic ? "الاتصال المباشر" : "Direct Inquiries"}
            </span>
            <div className="flex items-center gap-1.5 text-[0.6875rem] text-[#092948]/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E6B4F]" />
              <span>{isArabic ? "الرياض · دبي · لندن" : "Riyadh · Dubai · London"}</span>
            </div>
          </div>

          <a
            href={`mailto:${COMPANY.contact.email}`}
            className="text-xs text-[#092948] font-medium hover:text-[#316A7E] underline decoration-[#092948]/30 underline-offset-4 transition-colors flex items-center gap-1.5 pt-0.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#316A7E]" />
            <bdi dir="ltr">{COMPANY.contact.email}</bdi>
          </a>
        </div>
      </div>
    </div>
  );
}
