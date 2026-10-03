"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import MasaarLogo from "@/components/ui/MasaarLogo";
import { COMPANY } from "@/content/company";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation & Focus trapping
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

      if (e.key === "Tab" && overlayRef.current) {
        const focusableElements = overlayRef.current.querySelectorAll<HTMLElement>(
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

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu-overlay"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-[#092948] text-[#F9F1E7] flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300 overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[rgba(249,241,231,0.15)] pb-6">
        <MasaarLogo variant="cream" width={140} height={50} onClick={onClose} />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2.5 rounded-full border border-[rgba(249,241,231,0.3)] hover:bg-[#316A7E] transition-colors focus-ring-dark"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Stacked Links */}
      <nav className="my-auto py-10 flex flex-col space-y-6" aria-label="Mobile Navigation Links">
        {COMPANY.navLinks.map((item, index) => {
          const isActive = currentPath === item.href;
          return (
            <div key={item.href} className="group">
              <Link
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className="flex items-baseline justify-between text-3xl sm:text-4xl font-serif tracking-tight transition-colors duration-200 py-1"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-sans font-medium text-[#619AAA] tracking-widest">
                    0{index + 1}
                  </span>
                  <span className={isActive ? "text-[#FFFFFF] underline decoration-[#619AAA] underline-offset-8" : "text-[#F9F1E7]/90 hover:text-[#FFFFFF]"}>
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 text-[#619AAA] transition-opacity" />
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Bottom Info / Contact Pill */}
      <div className="pt-6 border-t border-[rgba(249,241,231,0.15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium">Inquiries</p>
          <a
            href={`mailto:${COMPANY.contact.email}`}
            className="text-sm text-[#F9F1E7] hover:underline"
          >
            {COMPANY.contact.email}
          </a>
        </div>
        <div className="text-xs text-[#F9F1E7]/60">
          Riyadh · Dubai · London
        </div>
      </div>
    </div>
  );
}
