import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/content/projects";

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
      className={`group flex flex-col h-full focus-ring-light ${className}`}
      aria-label={`${project.title} - ${project.category}`}
    >
      {/* Image frame with uniform aspect ratio */}
      <div
        className={`relative w-full ${aspectClass} overflow-hidden bg-[#092948]/5 rounded-[2px] mb-4 border border-[#092948]/10`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
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
            <h3 className="font-serif text-xl sm:text-2xl text-[#092948] font-normal leading-snug group-hover:underline underline-offset-4 decoration-[#316A7E] transition-colors">
              {project.title}
            </h3>
            <span className="w-7 h-7 flex-shrink-0 rounded-full border border-[#092948]/30 flex items-center justify-center text-[#092948] group-hover:bg-[#092948] group-hover:text-[#FEEED7] group-hover:border-[#092948] transition-all duration-200 mt-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </span>
          </div>

          {/* Category label */}
          <p className="font-caps-label text-[#316A7E] text-[0.6875rem] tracking-[0.18em] uppercase mt-1">
            {project.category}
          </p>

          {/* One-liner description */}
          <p className="text-xs sm:text-sm text-[#000000]/70 mt-2 line-clamp-2 leading-relaxed min-h-[2.5rem]">
            {project.oneLiner}
          </p>
        </div>
      </div>
    </Link>
  );
}
