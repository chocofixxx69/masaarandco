import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/content/projects";
import ProjectTile from "@/components/ui/ProjectTile";

export default function FeaturedWork() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      className="py-16 md:py-28 bg-[#FEEED7]"
      aria-labelledby="featured-work-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Header Row */}
        <div className="flex items-center justify-between pb-10 border-b border-[#092948]/15 mb-10">
          <div>
            <p className="font-caps-label text-[#316A7E] text-xs tracking-[0.2em]">
              Featured Work
            </p>
            <h2
              id="featured-work-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#092948] font-normal mt-1"
            >
              Selected Implementations
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-[#092948] px-5 py-2 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FEEED7] transition-all"
          >
            <span>View All Projects</span>
            <span className="font-mono">↗</span>
          </Link>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featuredProjects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
