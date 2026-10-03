"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, Layers, Cpu, CheckCircle } from "lucide-react";
import { ProjectItem, PROJECTS } from "@/content/projects";
import EmptyState from "@/components/ui/EmptyState";

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "AI Healthcare",
    "Education",
    "Platform",
    "AI Systems",
    "Digital Transformation",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12" role="tablist" aria-label="Project Categories">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#092948] text-[#FEEED7] shadow-sm"
                  : "bg-[#FFFFFF]/60 text-[#092948]/70 hover:text-[#092948] hover:bg-[#FFFFFF] border border-[#092948]/10"
              }`}
            >
              {cat}
            </button>
          );
        })}
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
        /* Masonry-free asymmetric grid per PRD §5 (alternating 2:1 / 1:2 layout) */
        <div className="space-y-12">
          {/* Group into alternating blocks */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {filteredProjects.map((project, idx) => {
              // Asymmetric alternating pattern:
              // For first pair: item 0 spans 7 cols, item 1 spans 5 cols
              // For second pair: item 2 spans 5 cols, item 3 spans 7 cols
              const spanClass =
                idx % 4 === 0
                  ? "md:col-span-7"
                  : idx % 4 === 1
                  ? "md:col-span-5"
                  : idx % 4 === 2
                  ? "md:col-span-5"
                  : "md:col-span-7";

              const aspectClass =
                idx % 2 === 0 ? "aspect-[16/10]" : "aspect-[4/3]";

              return (
                <article
                  key={project.id}
                  className={`${spanClass} group cursor-pointer`}
                  onClick={() => setActiveProject(project)}
                >
                  <div className={`relative w-full ${aspectClass} overflow-hidden rounded-[2px] bg-[#092948]/5 mb-4 border border-[#092948]/15`}>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092948]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFFFFF]/90 text-[#092948] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-caps-label text-[#316A7E] text-[0.6875rem]">
                          {project.category}
                        </span>
                        <span className="text-[#092948]/30">·</span>
                        <span className="text-xs text-[#092948]/60 font-mono">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#092948] group-hover:underline decoration-[#316A7E] underline-offset-4 mt-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#000000]/75 mt-2 line-clamp-2 leading-relaxed">
                        {project.oneLiner}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* Case Study Modal / Drawer */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-50 bg-[#092948]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[#FEEED7] text-[#092948] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2px] border border-[#092948]/20 shadow-2xl p-6 sm:p-8 md:p-10 space-y-6"
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
                className="p-2 rounded-full border border-[#092948]/20 hover:bg-[#092948] hover:text-[#FEEED7] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Project Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-[#092948]/15">
              <Image
                src={activeProject.image}
                alt={activeProject.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
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
                className="inline-flex items-center gap-2 rounded-full bg-[#092948] px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-[#FEEED7] hover:bg-[#316A7E] transition-all"
              >
                <span>Discuss Similar Implementation</span>
                <span className="font-mono">↗</span>
              </Link>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="text-xs uppercase tracking-wider text-[#092948]/70 hover:text-[#092948]"
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
