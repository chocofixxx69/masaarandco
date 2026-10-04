"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface LanguageToggleProps {
  variant?: "desktop" | "mobile-bar" | "drawer";
  className?: string;
}

export default function LanguageToggle({
  variant = "desktop",
  className = "",
}: LanguageToggleProps) {
  const { language, toggleLanguage, isArabic } = useLanguage();

  if (variant === "drawer") {
    return (
      <div className={`p-3 bg-[#FFFFFF]/70 rounded-[4px] border border-[#092948]/12 flex items-center justify-between ${className}`}>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#316A7E]" />
          <span className="font-caps-label text-[0.6875rem] text-[#092948] uppercase tracking-wider font-semibold">
            {isArabic ? "اللغة / Language" : "Language / اللغة"}
          </span>
        </div>
        <div className="flex items-center gap-1 bg-[#F9F1E7] p-1 rounded-full border border-[#092948]/15">
          <button
            type="button"
            onClick={() => language !== "en" && toggleLanguage()}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              !isArabic
                ? "bg-[#092948] text-[#FFFFFF] shadow-2xs"
                : "text-[#092948]/70 hover:text-[#092948]"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => language !== "ar" && toggleLanguage()}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              isArabic
                ? "bg-[#092948] text-[#FFFFFF] shadow-2xs"
                : "text-[#092948]/70 hover:text-[#092948]"
            }`}
            style={{ fontFamily: "var(--font-ibm-plex-arabic), var(--font-arabic), sans-serif" }}
          >
            عربي
          </button>
        </div>
      </div>
    );
  }

  if (variant === "mobile-bar") {
    return (
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={isArabic ? "Switch to English" : "التبديل إلى اللغة العربية"}
        className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[38px] rounded-full bg-[#F9F1E7] border border-[#092948]/20 text-[#092948] hover:border-[#316A7E] hover:bg-[#FFFFFF] transition-all cursor-pointer active:scale-95 shadow-2xs focus-ring-light ${className}`}
      >
        <Globe className="w-3.5 h-3.5 text-[#316A7E]" />
        <span
          className="text-[0.75rem] font-semibold pt-0.5 tracking-wide"
          style={{ fontFamily: isArabic ? "var(--font-sans)" : "var(--font-ibm-plex-arabic), var(--font-arabic), sans-serif" }}
        >
          {isArabic ? "EN" : "عربي"}
        </span>
      </button>
    );
  }

  // Desktop default
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={isArabic ? "Switch to English" : "التبديل إلى اللغة العربية"}
      className={`group inline-flex items-center gap-2 rounded-full border border-[#092948]/25 bg-[#F9F1E7] px-3.5 py-1.5 text-[0.875rem] font-medium text-[#092948] hover:border-[#316A7E] hover:bg-[#FFFFFF] transition-all duration-200 focus-ring-light cursor-pointer shadow-2xs ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-[#316A7E] group-hover:rotate-12 transition-transform duration-300" />
      <span
        className="font-medium pt-0.5 text-xs sm:text-[0.8125rem]"
        style={{ fontFamily: isArabic ? "var(--font-sans)" : "var(--font-ibm-plex-arabic), var(--font-arabic), sans-serif" }}
      >
        {isArabic ? "English" : "العربية"}
      </span>
    </button>
  );
}
