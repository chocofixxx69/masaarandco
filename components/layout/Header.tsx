"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MasaarLogo from "@/components/ui/MasaarLogo";
import MobileMenu from "./MobileMenu";
import { COMPANY } from "@/content/company";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for scroll detection (PRD §4)
  useEffect(() => {
    const sentinel = document.getElementById("header-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const headerBgClass = isScrolled
    ? "bg-[#F8EFE1]/95 backdrop-blur-md border-b border-[#092948]/10 shadow-sm"
    : "bg-transparent border-b border-transparent";

  return (
    <>
      <div id="header-sentinel" ref={sentinelRef} className="absolute top-0 left-0 w-full h-[80px] pointer-events-none" />

      <header
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${headerBgClass}`}
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 h-20 md:h-24 flex items-center justify-between">
          {/* Logo Left in Dark Navy on Transparent */}
          <div className="flex-shrink-0">
            <MasaarLogo variant="navy" width={160} height={56} priority />
          </div>

          {/* Desktop Navigation ≥1024px */}
          <nav
            className="hidden lg:flex items-center space-x-8 xl:space-x-10"
            aria-label="Main Navigation"
          >
            {COMPANY.navLinks.slice(0, 4).map((item) => {
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
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#316A7E] transition-all"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}

            {/* Contact as single outlined pill with dark border & arrow */}
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[0.9375rem] font-medium transition-all duration-200 focus-ring-light ${
                pathname === "/contact"
                  ? "border-[#092948] bg-[#092948] text-[#F8EFE1]"
                  : "border-[#092948]/50 text-[#092948] hover:bg-[#092948] hover:text-[#F8EFE1]"
              }`}
            >
              <span>Let&apos;s Talk</span>
              <span className="text-xs">→</span>
            </Link>
          </nav>

          {/* Tablet/Mobile <1024: "Menu" text button */}
          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-overlay"
              aria-label="Open mobile navigation menu"
              className="px-4 py-2 text-[0.9375rem] font-medium tracking-wide text-[#092948] border border-[#092948]/30 rounded-full hover:bg-[#092948] hover:text-[#FEEED7] transition-all focus-ring-light cursor-pointer"
            >
              Menu
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
