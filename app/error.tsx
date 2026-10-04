"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t, isArabic } = useTranslation();

  useEffect(() => {
    // Log error to console or error monitor
    console.error("Runtime exception encountered:", error);
  }, [error]);

  return (
    <div className="bg-[#092948] text-[#F9F1E7] min-h-[80vh] flex items-center justify-center py-24 px-6">
      <div className="max-w-xl text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#B3261E]/20 text-[#B3261E] border border-[#B3261E]/40 flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6 stroke-[2]" />
        </div>

        <p className="font-caps-label text-[#619AAA] text-xs">
          {t.errorPage.badge}
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl font-normal leading-tight">
          {t.errorPage.title}
        </h1>

        <p className="text-base text-[#F9F1E7]/80 leading-relaxed max-w-md mx-auto">
          {t.errorPage.desc}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-[#316A7E] px-6 py-3 text-sm font-medium text-[#FFFFFF] hover:bg-[#619AAA] transition-all focus-ring-dark cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 rtl:-scale-x-100" />
            <span>{t.errorPage.retry}</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(249,241,231,0.4)] px-6 py-3 text-sm font-medium text-[#F9F1E7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] transition-all focus-ring-dark"
          >
            <span>{isArabic ? "العودة للرئيسية" : "Return Home"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
