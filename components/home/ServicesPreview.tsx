import React from "react";
import Link from "next/link";
import { SERVICES } from "@/content/services";
import ServiceRow from "@/components/ui/ServiceRow";

export default function ServicesPreview() {
  return (
    <section
      className="py-16 md:py-28 bg-[#FEEED7]"
      aria-labelledby="services-preview-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12">
          <div>
            <p className="font-caps-label text-[#316A7E] mb-3">
              What We Do
            </p>
            <h2
              id="services-preview-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#092948] font-normal leading-[1.05]"
            >
              Building What Moves{" "}
              <em className="italic text-[#316A7E] font-normal font-serif">
                Forward
              </em>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed">
              We combine technology, design and strategic thinking to build solutions that create real progress.
            </p>
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#092948] px-5 py-2 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FEEED7] transition-all"
              >
                <span>View All Services</span>
                <span className="font-mono">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              variant="card"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
