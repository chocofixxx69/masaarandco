"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, CheckCircle, LayoutGrid, Columns } from "lucide-react";
import { ProjectItem, PROJECTS } from "@/content/projects";
import EmptyState from "@/components/ui/EmptyState";

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [gridCols, setGridCols] = useState<2 | 3>(2);

  const categories = [
    "All",
    "AI Healthcare",
    "Education",
    "Platform",
    "AI Systems",
    "Digital Transformation",
    "Business Automation",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills & Grid Toggle Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#092948]/15">
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Project Categories">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#092948] text-[#F9F1E7] shadow-sm"
                    : "bg-[#FFFFFF]/60 text-[#092948]/70 hover:text-[#092948] hover:bg-[#FFFFFF] border border-[#092948]/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* View Layout Density Toggle (Desktop) */}
        <div className="hidden lg:flex items-center gap-1 border border-[#092948]/15 rounded-full p-1 bg-[#FFFFFF]/60 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setGridCols(2)}
            title="2 Columns View"
            className={`p-1.5 rounded-full transition-colors ${
              gridCols === 2 ? "bg-[#092948] text-[#F9F1E7]" : "text-[#092948]/60 hover:text-[#092948]"
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setGridCols(3)}
            title="3 Columns View"
            className={`p-1.5 rounded-full transition-colors ${
              gridCols === 3 ? "bg-[#092948] text-[#F9F1E7]" : "text-[#092948]/60 hover:text-[#092948]"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Empty State check per PRD §5 */}
      {filteredProjects.length === 0 ? (
        <EmptyState
          title="Projects are being prepared"
          message={`No verified case studies currently published under "${selectedCategory}". Our engineering teams are preparing release documentation.`}
          actionText="Request Briefing"
          actionHref="/contact"
        />
      ) : (
        /* Perfectly Balanced, Equal Grid with Identical Heights & Baseline Alignment */
        <div
          className={`grid grid-cols-1 ${
            gridCols === 2 ? "md:grid-cols-2 gap-8 lg:gap-12" : "md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          } items-stretch`}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col h-full cursor-pointer focus-ring-light"
              onClick={() => setActiveProject(project)}
            >
              {/* Image Frame with Uniform 16:10 Aspect Ratio Across All Cards */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] bg-[#092948]/5 mb-4 border border-[#092948]/15">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-[center_35%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#092948]/0 group-hover:bg-[#092948]/10 transition-colors duration-300 pointer-events-none" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFFFFF]/90 text-[#092948] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </div>
              </div>

              {/* Text & Metadata Container with Flex-1 to guarantee identical card heights */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  {/* Category & Year Header */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-caps-label text-[#316A7E] text-[0.6875rem]">
                      {project.category}
                    </span>
                    <span className="text-[#092948]/30">·</span>
                    <span className="text-xs text-[#092948]/60 font-mono">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Action Arrow Row */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#092948] font-normal group-hover:underline decoration-[#316A7E] underline-offset-4 leading-snug">
                      {project.title}
                    </h3>
                    <span className="w-7 h-7 flex-shrink-0 rounded-full border border-[#092948]/30 flex items-center justify-center text-[#092948] group-hover:bg-[#092948] group-hover:text-[#F9F1E7] group-hover:border-[#092948] transition-all duration-200 mt-1">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                    </span>
                  </div>

                  {/* One-Liner Description with Standard Min-Height */}
                  <p className="text-xs sm:text-sm text-[#000000]/75 mt-2 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                    {project.oneLiner}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Case Study Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-50 bg-[#092948]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[#F9F1E7] text-[#092948] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2px] border border-[#092948]/20 shadow-2xl p-6 sm:p-8 md:p-10 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button & Meta */}
            <div className="flex items-start justify-between border-b border-[#092948]/15 pb-4">
              <div>
                <span className="font-caps-label text-[#316A7E] text-xs">
                  {activeProject.category} · {activeProject.year}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#092948] mt-1">
                  {activeProject.title}
                </h2>
                {activeProject.client && (
                  <p className="text-xs text-[#092948]/60 font-mono mt-1">
                    Client: {activeProject.client}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close modal"
                className="p-2 rounded-full border border-[#092948]/20 hover:bg-[#092948] hover:text-[#F9F1E7] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Project Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-[#092948]/15">
              <Image
                src={activeProject.image}
                alt={activeProject.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-[center_35%]"
              />
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <h3 className="font-caps-label text-[#316A7E] text-xs">Executive Summary</h3>
              <p className="text-base text-[#000000]/85 leading-relaxed">
                {activeProject.summary}
              </p>
            </div>

            {/* Challenge & Solution */}
            {activeProject.challenge && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#092948]/15">
                <div className="space-y-2">
                  <h4 className="font-caps-label text-[#316A7E] text-xs">The Challenge</h4>
                  <p className="text-xs sm:text-sm text-[#000000]/80 leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-caps-label text-[#316A7E] text-xs">The Solution</h4>
                  <p className="text-xs sm:text-sm text-[#000000]/80 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Key Metrics */}
            {activeProject.metrics && activeProject.metrics.length > 0 && (
              <div className="pt-4 border-t border-[#092948]/15 space-y-3">
                <h4 className="font-caps-label text-[#316A7E] text-xs">Verified Outcomes</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeProject.metrics.map((metric, i) => (
                    <div key={i} className="p-3 bg-[#FFFFFF] border border-[#092948]/10 text-xs text-[#092948] flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1E6B4F] flex-shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stack Tags */}
            {activeProject.stack && (
              <div className="pt-4 border-t border-[#092948]/15 space-y-2">
                <h4 className="font-caps-label text-[#316A7E] text-xs">Technical Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-[#FFFFFF] border border-[#092948]/15 text-xs text-[#092948] font-mono rounded-[2px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-[#092948]/15 flex items-center justify-between">
              <Link
                href={`/contact?service=${encodeURIComponent(activeProject.category)}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#092948] px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-[#F9F1E7] hover:bg-[#316A7E] transition-all"
              >
                <span>Discuss Similar Implementation</span>
                <span className="font-mono">↗</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="text-xs uppercase tracking-wider text-[#092948]/70 hover:text-[#092948] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
