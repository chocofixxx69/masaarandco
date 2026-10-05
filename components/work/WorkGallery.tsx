"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft, X, CheckCircle } from "lucide-react";
import { ProjectItem, PROJECTS } from "@/content/projects";
import EmptyState from "@/components/ui/EmptyState";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function WorkGallery() {
  const { t, isArabic } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { key: "All", label: isArabic ? "الكل" : "All" },
    { key: "AI Healthcare", label: isArabic ? "الرعاية الصحية بالذكاء الاصطناعي" : "AI Healthcare" },
    { key: "Education", label: isArabic ? "القطاع الأكاديمي" : "Education" },
    { key: "Platform", label: isArabic ? "المنصات الرقمية" : "Platform" },
    { key: "AI Systems", label: isArabic ? "أنظمة الذكاء الاصطناعي" : "AI Systems" },
    { key: "Digital Transformation", label: isArabic ? "التحول الرقمي" : "Digital Transformation" },
    { key: "Business Automation", label: isArabic ? "أتمتة الأعمال" : "Business Automation" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  // Helper to find localized project
  const getLocalizedProject = (p: ProjectItem) => {
    const found = t.workPage.projects.find((item) => item.id === p.id || item.slug === p.slug);
    if (!found) return p;
    return {
      ...p,
      title: found.title,
      category: found.category,
      client: found.client || p.client,
      oneLiner: found.oneLiner,
      summary: found.summary,
      challenge: found.challenge,
      solution: found.solution,
      metrics: found.metrics,
      stack: found.stack,
    };
  };

  const localizedActiveProject = activeProject ? getLocalizedProject(activeProject) : null;

  return (
    <div>
      {/* Category Filter Pills Bar: smooth scroll on mobile, flex-wrap on sm+ */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar sm:flex-wrap mb-6 sm:mb-10 pb-3 sm:pb-6 border-b border-[#092948]/15" role="tablist" aria-label="Project Categories">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat.key)}
              className={`flex-shrink-0 whitespace-nowrap rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[0.6875rem] sm:text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer min-h-[36px] sm:min-h-[38px] ${
                isActive
                  ? "bg-[#092948] text-[#FFFFFF] shadow-sm"
                  : "bg-[#F9F1E7] text-[#092948] hover:bg-[#092948] hover:text-[#FFFFFF] border border-[#092948]/15"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Empty State check */}
      {filteredProjects.length === 0 ? (
        <EmptyState
          title={isArabic ? "المشاريع قيد التجهيز" : "Projects are being prepared"}
          message={
            isArabic
              ? `لا توجد دراسات حالة منشورة حالياً تحت هذا التصنيف. تعمل فرقنا الهندسية على إعداد وثائق الإصدار.`
              : `No verified case studies currently published under "${selectedCategory}". Our engineering teams are preparing release documentation.`
          }
          actionText={isArabic ? "طلب إحاطة فنية" : "Request Briefing"}
          actionHref="/contact"
        />
      ) : (
        /* Standard 3-Column Work Gallery Grid (as in Image 2) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const localized = getLocalizedProject(project);
            return (
              <article
                key={project.id}
                className="group flex flex-col h-full bg-[#F9F1E7] rounded-[4px] p-3.5 sm:p-5 border border-[#092948]/12 hover:border-[#092948]/30 hover:shadow-md transition-all duration-200 cursor-pointer focus-ring-light"
                onClick={() => setActiveProject(project)}
              >
                {/* Image Frame with Uniform 16:10 Aspect Ratio Across All Cards */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] bg-[#092948]/5 mb-3 sm:mb-4 border border-[#092948]/15">
                  <Image
                    src={project.image}
                    alt={project.imageAlt || localized.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-[center_35%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#092948]/0 group-hover:bg-[#092948]/10 transition-colors duration-300 pointer-events-none" />
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 sm:top-4 sm:right-4 rtl:sm:right-auto rtl:sm:left-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#FFFFFF]/90 text-[#092948] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    {isArabic ? (
                      <ArrowUpLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                    )}
                  </div>
                </div>

                {/* Text & Metadata Container with Flex-1 to guarantee identical card heights */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    {/* Category & Year Header */}
                    <div className="flex items-center gap-2 mb-1 sm:mb-1.5">
                      <span className="font-caps-label text-[#316A7E] text-[0.625rem] sm:text-[0.6875rem]">
                        {localized.category}
                      </span>
                      <span className="text-[#092948]/30">·</span>
                      <span className="text-[0.6875rem] sm:text-xs text-[#092948]/60 font-mono" dir="ltr">
                        {project.year}
                      </span>
                    </div>

                    {/* Title & Action Arrow Row */}
                    <div className="flex items-start justify-between gap-2.5 sm:gap-3">
                      <h3
                        className="font-serif text-lg sm:text-2xl lg:text-3xl text-[#092948] font-normal group-hover:underline decoration-[#316A7E] underline-offset-4 leading-snug text-start"
                        dir={isArabic ? "rtl" : "ltr"}
                      >
                        {localized.title}
                      </h3>
                      <span className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 rounded-full border border-[#092948]/30 flex items-center justify-center text-[#092948] group-hover:bg-[#092948] group-hover:text-[#F9F1E7] group-hover:border-[#092948] transition-all duration-200 mt-0.5 sm:mt-1">
                        {isArabic ? (
                          <ArrowUpLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2]" />
                        ) : (
                          <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2]" />
                        )}
                      </span>
                    </div>

                    {/* One-Liner Description with Standard Min-Height */}
                    <p className="text-xs sm:text-sm text-[#000000]/75 mt-1.5 sm:mt-2 line-clamp-2 leading-relaxed min-h-0 sm:min-h-[2.5rem]">
                      {localized.oneLiner}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Case Study Modal */}
      {localizedActiveProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={localizedActiveProject.title}
          className="fixed inset-0 z-50 bg-[#092948]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[#F9F1E7] text-[#092948] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2px] border border-[#092948]/20 shadow-2xl p-5 sm:p-8 md:p-10 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button & Meta */}
            <div className="flex items-start justify-between border-b border-[#092948]/15 pb-4">
              <div>
                <span className="font-caps-label text-[#316A7E] text-xs">
                  {localizedActiveProject.category} · <span dir="ltr">{localizedActiveProject.year}</span>
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#092948] mt-1">
                  {localizedActiveProject.title}
                </h2>
                {localizedActiveProject.client && (
                  <p className="text-xs text-[#092948]/60 font-mono mt-1">
                    {isArabic ? "الجهة المستفيدة:" : "Client:"} {localizedActiveProject.client}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label={t.workPage.modal.closeAria}
                className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full border border-[#092948]/20 hover:bg-[#092948] hover:text-[#F9F1E7] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Project Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-[#092948]/15">
              <Image
                src={localizedActiveProject.image}
                alt={localizedActiveProject.imageAlt || localizedActiveProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-[center_35%]"
              />
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <h3 className="font-caps-label text-[#316A7E] text-xs">
                {isArabic ? "الملخص التنفيذي" : "Executive Summary"}
              </h3>
              <p className="text-sm sm:text-base text-[#000000]/85 leading-relaxed">
                {localizedActiveProject.summary}
              </p>
            </div>

            {/* Challenge & Solution */}
            {localizedActiveProject.challenge && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#092948]/15">
                <div className="space-y-2">
                  <h4 className="font-caps-label text-[#316A7E] text-xs">
                    {t.workPage.modal.challengeLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#000000]/80 leading-relaxed">
                    {localizedActiveProject.challenge}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-caps-label text-[#316A7E] text-xs">
                    {t.workPage.modal.solutionLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#000000]/80 leading-relaxed">
                    {localizedActiveProject.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Key Metrics */}
            {localizedActiveProject.metrics && localizedActiveProject.metrics.length > 0 && (
              <div className="pt-4 border-t border-[#092948]/15 space-y-3">
                <h4 className="font-caps-label text-[#316A7E] text-xs">
                  {t.workPage.modal.metricsLabel}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {localizedActiveProject.metrics.map((metric, i) => (
                    <div key={i} className="p-3 bg-[#FFFFFF] border border-[#092948]/10 text-xs text-[#092948] flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1E6B4F] flex-shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stack Tags */}
            {localizedActiveProject.stack && (
              <div className="pt-4 border-t border-[#092948]/15 space-y-2">
                <h4 className="font-caps-label text-[#316A7E] text-xs">
                  {t.workPage.modal.stackLabel}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {localizedActiveProject.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-[#FFFFFF] border border-[#092948]/15 text-xs text-[#092948] font-mono rounded-[2px]"
                      dir="ltr"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-[#092948]/15 flex flex-col-reverse sm:flex-row gap-3 sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="text-xs uppercase tracking-wider text-[#092948]/70 hover:text-[#092948] cursor-pointer py-2 text-center"
              >
                {t.nav.close}
              </button>
              <Link
                href={`/contact?service=${encodeURIComponent(localizedActiveProject.category)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#092948] px-6 py-3 sm:py-2.5 text-xs uppercase tracking-wider font-medium text-[#F9F1E7] hover:bg-[#316A7E] transition-all min-h-[44px] w-full sm:w-auto text-center shadow-xs"
              >
                <span>{isArabic ? "مناقشة مشروع مماثل" : "Discuss Similar Implementation"}</span>
                <span className="font-mono rtl:-scale-x-100 inline-block">↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
