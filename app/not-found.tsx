"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#092948] text-[#F9F1E7] min-h-[80vh] flex items-center justify-center py-24 px-6">
      <div className="max-w-xl text-center space-y-6">
        <p className="font-caps-label text-[#619AAA] text-xs">
          {t.notFound.badge}
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal leading-tight">
          {t.notFound.title}
        </h1>
        <p className="text-base text-[#F9F1E7]/80 leading-relaxed max-w-md mx-auto">
          {t.notFound.desc}
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(249,241,231,0.4)] px-6 py-3 text-sm font-medium text-[#F9F1E7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] transition-all focus-ring-dark"
          >
            <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
            <span>{t.notFound.cta}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
