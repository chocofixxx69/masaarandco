import React from "react";
import Link from "next/link";
import { SERVICES, SERVICES_HEADER, CORE_FOCUS } from "@/content/services";
import ServiceRow from "@/components/ui/ServiceRow";

export default function ServicesPreview() {
  // Display the 6 core featured practices on the Home page preview
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 6);

  return (
    <section
      className="py-16 md:py-28 bg-[#FEEED7]"
      aria-labelledby="services-preview-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10">
          <div className="max-w-3xl">
            <p className="font-caps-label text-[#316A7E] mb-3">
              {SERVICES_HEADER.label}
            </p>
            <h2
              id="services-preview-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#092948] font-normal leading-[1.05]"
            >
              Automation &amp; Technology, Built Around Your{" "}
              <em className="italic text-[#316A7E] font-normal font-serif">
                Business.
              </em>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed font-normal">
              {SERVICES_HEADER.subtitle}
            </p>
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#092948] px-5 py-2 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FEEED7] transition-all"
              >
                <span>View All 12 Services</span>
                <span className="font-mono">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Core Focus Pills Bar */}
        <div className="mb-12 p-4 sm:p-6 bg-[#FFFFFF]/70 border border-[#092948]/15 rounded-[2px] grid grid-cols-2 md:grid-cols-4 gap-4">
          {CORE_FOCUS.map((focus) => (
            <div key={focus.name} className="space-y-1">
              <span className="font-caps-label text-[#092948] text-[0.7rem] font-semibold block">
                {focus.name}
              </span>
              <p className="text-xs text-[#000000]/70 truncate">
                {focus.items.slice(0, 3).join(" • ")}...
              </p>
            </div>
          ))}
        </div>

        {/* 6 Services Grid with equal columns & baseline alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {featuredServices.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              variant="card"
              index={index}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 pt-8 border-t border-[#092948]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#092948]/80">
            <strong>Need something specific?</strong> We build custom technology around your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#092948] px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-[#FEEED7] hover:bg-[#316A7E] transition-all whitespace-nowrap"
          >
            <span>Request Custom Architecture</span>
            <span className="font-mono">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
