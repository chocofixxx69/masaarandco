"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { ProjectItem } from "@/content/projects";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface ProjectTileProps {
  project: ProjectItem;
  aspect?: "4:5" | "16:10" | "16:9" | "4:3";
  className?: string;
}

export default function ProjectTile({
  project,
  aspect = "16:10",
  className = "",
}: ProjectTileProps) {
  const { t, isArabic } = useTranslation();

  const localized = t.workPage.projects.find(
    (p) => p.id === project.id || p.slug === project.slug
  ) || {
    title: project.title,
    category: project.category,
    oneLiner: project.oneLiner,
  };

  const aspectClass =
    aspect === "4:5"
      ? "aspect-[4/5]"
      : aspect === "16:9"
      ? "aspect-[16/9]"
      : aspect === "4:3"
      ? "aspect-[4/3]"
      : "aspect-[16/10]";

  return (
    <Link
      href={`/work?project=${project.slug}`}
      className={`group flex flex-col h-full bg-[#F9F1E7] rounded-[4px] p-4 sm:p-5 border border-[#092948]/12 hover:border-[#092948]/30 hover:shadow-md transition-all duration-200 focus-ring-light ${className}`}
      aria-label={`${localized.title} - ${localized.category}`}
    >
      {/* Image frame with uniform aspect ratio */}
      <div
        className={`relative w-full ${aspectClass} overflow-hidden bg-[#092948]/5 rounded-[2px] mb-3 sm:mb-4 border border-[#092948]/10`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt || localized.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          className="object-cover object-[center_35%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-[#092948]/0 group-hover:bg-[#092948]/8 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Meta + Arrow content area with flex-1 for consistent alignment */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          {/* Title and arrow on the exact same row */}
          <div className="flex items-start justify-between gap-3">
            <h3
              className="font-serif text-lg sm:text-2xl text-[#092948] font-normal leading-snug group-hover:underline underline-offset-4 decoration-[#316A7E] transition-colors text-start"
              dir={isArabic ? "rtl" : "ltr"}
            >
              {localized.title}
            </h3>
            <span className="w-7 h-7 flex-shrink-0 rounded-full border border-[#092948]/30 flex items-center justify-center text-[#092948] group-hover:bg-[#092948] group-hover:text-[#FFFFFF] group-hover:border-[#092948] transition-all duration-200 mt-0.5">
              {isArabic ? (
                <ArrowUpLeft className="w-3.5 h-3.5 stroke-[2]" />
              ) : (
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
              )}
            </span>
          </div>

          {/* Category label */}
          <p className="font-caps-label text-[#316A7E] text-[0.6875rem] tracking-[0.18em] uppercase mt-1">
            {localized.category}
          </p>

          {/* One-liner description */}
          <p className="text-xs sm:text-sm text-[#000000]/70 mt-1.5 sm:mt-2 line-clamp-2 leading-relaxed min-h-0 sm:min-h-[2.5rem]">
            {localized.oneLiner}
          </p>
        </div>
      </div>
    </Link>
  );
}
