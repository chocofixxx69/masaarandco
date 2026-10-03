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

  // PRD §4: Transparent over hero, switches to Primary at 80px scroll via IntersectionObserver (no scroll listener)
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

  // Is this a page with a dark hero or light header?
  // Home is dark hero; other pages can have dark hero or light background, but header in Primary looks cohesive everywhere!
  const isHome = pathname === "/";
  const headerBgClass = isScrolled
    ? "bg-[#092948]/95 backdrop-blur-md border-b border-[rgba(254,238,215,0.12)] shadow-sm"
    : isHome
    ? "bg-transparent border-b border-transparent"
    : "bg-[#092948] border-b border-[rgba(254,238,215,0.1)]";

  return (
    <>
      <div id="header-sentinel" ref={sentinelRef} className="absolute top-0 left-0 w-full h-[80px] pointer-events-none" />

      <header
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${headerBgClass}`}
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 h-20 md:h-24 flex items-center justify-between">
          {/* Logo Left */}
          <div className="flex-shrink-0">
            <MasaarLogo variant="cream" width={160} height={56} priority />
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
                  className={`relative text-[0.9375rem] font-medium tracking-[0.02em] transition-colors duration-200 py-1 focus-ring-dark ${
                    isActive ? "text-[#FEEED7]" : "text-[#FEEED7]/80 hover:text-[#FEEED7]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#619AAA] transition-all"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}

            {/* Contact as single outlined pill per PRD §4 */}
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[0.9375rem] font-medium transition-all duration-200 focus-ring-dark ${
                pathname === "/contact"
                  ? "border-[#619AAA] bg-[#316A7E] text-[#FFFFFF]"
                  : "border-[rgba(254,238,215,0.4)] text-[#FEEED7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF]"
              }`}
            >
              <span>Let&apos;s Talk</span>
              <span className="text-xs font-mono">↗</span>
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
              className="px-4 py-2 text-[0.9375rem] font-medium tracking-wide text-[#FEEED7] border border-[rgba(254,238,215,0.3)] rounded-full hover:bg-[#316A7E] hover:text-white transition-all focus-ring-dark"
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
