import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/content/projects";
import ProjectTile from "@/components/ui/ProjectTile";

export default function FeaturedWork() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      className="py-16 md:py-24 bg-[#F9F1E7]"
      aria-labelledby="featured-work-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex items-end justify-between pb-6 border-b border-[#092948]/15 mb-8">
          <div>
            <p className="font-caps-label text-[#316A7E] text-xs tracking-[0.2em]">
              Featured Work
            </p>
            <h2
              id="featured-work-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#092948] font-normal mt-1 leading-tight"
            >
              Selected Implementations
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-[#092948] px-5 py-2 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#F9F1E7] transition-all whitespace-nowrap"
          >
            <span>View All Projects</span>
            <span className="font-mono">↗</span>
          </Link>
        </div>

        {/* 3 Equal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {featuredProjects.map((project) => (
            <ProjectTile key={project.id} project={project} aspect="16:10" />
          ))}
        </div>
      </div>
    </section>
  );
}
