"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface PageHeadingProps {
  label?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function PageHeading({
  label,
  title,
  italicWord,
  description,
  align = "left",
  theme = "light",
  className = "",
}: PageHeadingProps) {
  const { isArabic } = useTranslation();
  const isDark = theme === "dark";

  // Split title if italicWord is provided to style the exact word
  let titleContent: React.ReactNode = title;
  if (italicWord && title.includes(italicWord)) {
    const parts = title.split(italicWord);
    titleContent = (
      <>
        {parts[0]}
        {isArabic ? (
          <span
            className={`font-medium inline-block ${
              isDark ? "text-[#619AAA]" : "text-[#316A7E]"
            }`}
          >
            {italicWord}
          </span>
        ) : (
          <em
            className={`italic font-normal font-serif ${
              isDark ? "text-[#619AAA]" : "text-[#316A7E]"
            }`}
          >
            {italicWord}
          </em>
        )}
        {parts[1]}
      </>
    );
  }

  return (
    <div
      className={`space-y-2.5 sm:space-y-4 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-4xl text-start"
      } ${className}`}
    >
      {label && (
        <div
          className={`inline-block px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full mb-0.5 sm:mb-1 ${
            isDark
              ? "bg-[#619AAA]/15 border border-[#619AAA]/30"
              : "bg-[#F9F1E7] border border-[#092948]/10 shadow-xs"
          }`}
        >
          <p
            className={`font-caps-label text-[0.68rem] sm:text-[0.72rem] tracking-[0.16em] uppercase font-semibold ${
              isDark ? "text-[#619AAA]" : "text-[#316A7E]"
            }`}
          >
            {label}
          </p>
        </div>
      )}

      <h1
        className={`font-h1 tracking-tight leading-[1.08] sm:leading-[1.12] ${
          isDark ? "text-[#F9F1E7]" : "text-[#092948]"
        }`}
      >
        {titleContent}
      </h1>

      {description && (
        <p
          className={`text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl ${
            isDark ? "text-[#F9F1E7]/80" : "text-[#000000]/80"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
