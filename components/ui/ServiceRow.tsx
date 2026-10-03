import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ServiceItem } from "@/content/services";

interface ServiceRowProps {
  service: ServiceItem;
  variant?: "card" | "editorial";
  index?: number;
}

export default function ServiceRow({
  service,
  variant = "card",
  index = 0,
}: ServiceRowProps) {
  if (variant === "card") {
    return (
      <Link
        href={`/services#${service.slug}`}
        className="group flex flex-col h-full border-t border-[#092948]/15 pt-6 pb-8 transition-colors duration-200 focus-ring-light"
      >
        {/* Thumbnail Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden mb-5 bg-[#092948]/5 rounded-[2px] border border-[#092948]/10">
          <Image
            src={service.image}
            alt={service.imageAlt || service.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Content Area */}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            {/* Number and Arrow Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono tracking-widest text-[#316A7E] font-medium">
                {service.number}
              </span>
              <span className="w-7 h-7 rounded-full border border-[#092948]/30 flex items-center justify-center text-[#092948] transition-all duration-200 group-hover:border-[#092948] group-hover:bg-[#092948] group-hover:text-[#FEEED7]">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
              </span>
            </div>

            {/* Service Name */}
            <h3 className="font-serif text-xl sm:text-2xl text-[#092948] font-medium mb-2 group-hover:text-[#316A7E] transition-colors leading-snug">
              {service.name}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#092948]/80 leading-relaxed line-clamp-3 min-h-[3rem]">
              {service.tagline}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // Full editorial row for /services page
  const isEven = index % 2 === 0;

  return (
    <article
      id={service.slug}
      className="scroll-mt-32 py-16 md:py-24 border-t border-[#092948]/15"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Side: Number + Name (cols 1-5) */}
        <div className={`lg:col-span-5 space-y-4 ${!isEven ? "lg:order-2" : ""}`}>
          <div className="flex items-baseline gap-4">
            <span className="text-3xl md:text-5xl font-serif text-[#316A7E] font-normal">
              {service.number}
            </span>
            <span className="h-[1px] flex-1 bg-[#092948]/15" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#092948] font-normal leading-[1.1]">
            {service.name}
          </h2>

          <p className="text-base text-[#316A7E] font-medium pt-1">
            {service.tagline}
          </p>

          <div className="relative aspect-[16/10] w-full overflow-hidden mt-6 bg-[#092948]/5 rounded-[2px]">
            <Image
              src={service.image}
              alt={service.imageAlt || service.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Summary, Scope, Deliverables (cols 6-12) */}
        <div className={`lg:col-span-7 space-y-8 ${!isEven ? "lg:order-1" : ""}`}>
          <div>
            <h3 className="font-caps-label text-[#316A7E] mb-3">
              Overview
            </h3>
            <p className="text-lg text-[#000000]/85 leading-relaxed font-normal">
              {service.summary}
            </p>
          </div>

          {/* Scope list */}
          <div>
            <h4 className="font-caps-label text-[#316A7E] mb-4">
              Scope of Architecture
            </h4>
            <ul className="space-y-3">
              {service.scope.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#000000]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#316A7E] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables list */}
          <div>
            <h4 className="font-caps-label text-[#316A7E] mb-4">
              Core Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#FFFFFF]/70 border border-[#092948]/10 text-xs sm:text-sm text-[#092948]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Link to Contact */}
          <div className="pt-4">
            <Link
              href={`/contact?service=${encodeURIComponent(service.name)}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#092948] px-6 py-2.5 text-sm font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FEEED7] transition-all duration-200 focus-ring-light"
            >
              <span>{service.cta}</span>
              <span className="font-mono">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
