"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/content/projects";
import ProjectTile from "@/components/ui/ProjectTile";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function FeaturedWork() {
  const { t } = useTranslation();
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      className="py-10 sm:py-16 md:py-24 bg-[#FFFFFF]"
      aria-labelledby="featured-work-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-[#092948]/15 mb-6 sm:mb-8 text-start">
          <div className="text-start">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#F9F1E7] border border-[#092948]/10 mb-2">
              <p className="font-caps-label text-[#316A7E] text-[0.72rem] tracking-[0.2em] uppercase font-semibold">
                {t.home.featuredWork.label}
              </p>
            </div>
            <h2
              id="featured-work-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#092948] font-normal mt-1 leading-tight text-start"
            >
              {t.home.featuredWork.title}
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-[#092948]/25 bg-[#F9F1E7] px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FFFFFF] transition-all whitespace-nowrap self-start sm:self-auto min-h-[44px]"
          >
            <span>{t.home.featuredWork.viewAll}</span>
            <span className="font-mono rtl:-scale-x-100 inline-block">↗</span>
          </Link>
        </div>

        {/* 3 Equal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {featuredProjects.map((project) => (
            <ProjectTile key={project.id} project={project} aspect="16:10" />
          ))}
        </div>
      </div>
    </section>
  );
}
