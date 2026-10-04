"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MasaarLogo from "@/components/ui/MasaarLogo";
import MobileMenu from "./MobileMenu";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Fast, responsive scroll listener (15px threshold)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const headerBgClass = (!isHomePage || isScrolled)
    ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#092948]/10 shadow-xs"
    : "bg-transparent border-b border-transparent";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${headerBgClass}`}
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 h-16 sm:h-20 md:h-24 flex items-center justify-between">
          {/* Logo Left/Right in Dark Navy on Transparent */}
          <div className="flex-shrink-0">
            <MasaarLogo variant="navy" width={140} height={48} priority className="max-w-[130px] sm:max-w-[160px]" />
          </div>

          {/* Desktop Navigation ≥1024px */}
          <nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse"
            aria-label="Main Navigation"
          >
            {t.nav.items.slice(0, 4).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative text-[0.9375rem] font-medium tracking-[0.02em] transition-colors duration-200 py-1 focus-ring-light ${
                    isActive ? "text-[#092948]" : "text-[#092948]/75 hover:text-[#092948]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                    className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#316A7E] transition-all"
                    aria-hidden="true"
                  />
                  )}
                </Link>
              );
            })}

            {/* Language Toggle Desktop */}
            <LanguageToggle variant="desktop" />

            {/* Contact as single outlined pill with cream background & dark border & arrow */}
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[0.9375rem] font-medium transition-all duration-200 focus-ring-light ${
                pathname === "/contact"
                  ? "border-[#092948] bg-[#092948] text-[#FFFFFF]"
                  : "border-[#092948]/30 bg-[#F9F1E7] text-[#092948] hover:bg-[#092948] hover:text-[#FFFFFF]"
              }`}
            >
              <span>{t.nav.letsTalk}</span>
              <span className="text-xs transition-transform rtl:rotate-180">→</span>
            </Link>
          </nav>

          {/* Tablet/Mobile <1024: Language Toggle + Premium Architectural Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle variant="mobile-bar" />

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-overlay"
              aria-label="Open mobile navigation menu"
              className="group relative flex items-center gap-2 px-3 py-1.5 min-h-[38px] sm:min-h-[42px] rounded-full bg-[#F9F1E7] border border-[#092948]/20 shadow-xs hover:border-[#316A7E] hover:bg-[#FFFFFF] transition-all duration-200 focus-ring-light cursor-pointer active:scale-95"
            >
              {/* Animated 2-bar architectural icon */}
              <span className="flex flex-col justify-center items-end gap-1 w-4 h-3.5" aria-hidden="true">
                <span className="w-4 h-[1.75px] bg-[#092948] rounded-full group-hover:bg-[#316A7E] transition-colors" />
                <span className="w-2.5 h-[1.75px] bg-[#316A7E] rounded-full group-hover:w-4 transition-all" />
              </span>
              <span className="font-caps-label text-[0.6875rem] tracking-[0.18em] font-semibold text-[#092948] group-hover:text-[#316A7E] transition-colors uppercase pt-0.5">
                {t.nav.menu}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Primary overlay mobile navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }}
        currentPath={pathname}
      />
    </>
  );
}
