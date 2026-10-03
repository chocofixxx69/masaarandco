import React from "react";
import Link from "next/link";
import PageHeading from "@/components/ui/PageHeading";
import ServiceRow from "@/components/ui/ServiceRow";
import Reveal from "@/components/ui/Reveal";
import { SERVICES, SERVICES_HEADER, CORE_FOCUS } from "@/content/services";
import { constructMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Services — Automation & Technology",
  description:
    "We build digital solutions that help businesses automate processes, connect systems, serve customers, and operate more efficiently.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-[#FEEED7] min-h-screen pt-28 md:pt-36 pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Page Heading */}
        <Reveal>
          <PageHeading
            label={SERVICES_HEADER.label}
            title={SERVICES_HEADER.title}
            italicWord="Business."
            description={SERVICES_HEADER.subtitle}
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-12" aria-hidden="true" />

        {/* OUR CORE FOCUS Section */}
        <section
          className="mb-20 p-8 sm:p-10 md:p-14 bg-[#092948] text-[#FEEED7] rounded-[2px]"
          aria-labelledby="core-focus-heading"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[rgba(254,238,215,0.15)]">
            <div>
              <p className="font-caps-label text-[#619AAA] text-xs tracking-[0.2em] mb-2">
                Strategic Foundation
              </p>
              <h2
                id="core-focus-heading"
                className="font-serif text-3xl sm:text-4xl text-[#FEEED7] font-normal"
              >
                Our Core Focus
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#FEEED7]/70 font-mono">
              04 PILLARS OF CAPABILITY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_FOCUS.map((focus) => (
              <div
                key={focus.name}
                className="p-6 bg-[#092948]/80 border border-[rgba(254,238,215,0.15)] rounded-[2px] space-y-4"
              >
                <div>
                  <h3 className="font-serif text-2xl text-[#FEEED7] tracking-wide">
                    {focus.name}
                  </h3>
                  <p className="text-xs text-[#619AAA] mt-1 font-medium">
                    {focus.tagline}
                  </p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-[rgba(254,238,215,0.1)]">
                  {focus.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-[#FEEED7]/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#619AAA] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Content with Desktop Sticky Navigation Index (PRD §5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Desktop Sticky Index (cols 1-3) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 space-y-6">
            <p className="font-caps-label text-[#316A7E] text-xs">
              Index of Solutions (12)
            </p>
            <nav className="space-y-1.5" aria-label="Services Navigation">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.slug}`}
                  className="group flex items-baseline gap-2.5 text-xs text-[#092948]/75 hover:text-[#092948] transition-colors py-1 border-l-2 border-transparent hover:border-[#092948] pl-2.5"
                >
                  <span className="font-mono text-[0.7rem] text-[#316A7E] font-semibold">
                    {s.number}
                  </span>
                  <span className="font-medium group-hover:underline underline-offset-4 truncate">
                    {s.name}
                  </span>
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-[#092948]/15">
              <p className="text-xs text-[#092948]/70 mb-2 font-medium">Custom Requirement?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#092948] hover:text-[#316A7E] uppercase tracking-wider"
              >
                <span>Request Custom Build</span>
                <span>↗</span>
              </Link>
            </div>
          </aside>

          {/* Main Services Editorial List (cols 4-12) */}
          <main className="lg:col-span-9 space-y-12">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 50}>
                <ServiceRow
                  service={service}
                  variant="editorial"
                  index={index}
                />
              </Reveal>
            ))}
          </main>
        </div>

        {/* Closing Consultation Callout */}
        <div className="mt-20 p-10 md:p-14 bg-[#092948] text-[#FEEED7] rounded-[2px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <p className="font-caps-label text-[#619AAA] text-xs">
              Custom Engineering
            </p>
            <h3 className="font-serif text-2xl md:text-4xl text-[#FEEED7] font-normal">
              {SERVICES_HEADER.customCallout.heading}
            </h3>
            <p className="text-base text-[#FEEED7]/85">
              {SERVICES_HEADER.customCallout.description}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(254,238,215,0.4)] px-7 py-3 text-sm font-medium text-[#FEEED7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] transition-all whitespace-nowrap focus-ring-dark"
          >
            <span>{SERVICES_HEADER.customCallout.cta}</span>
            <span className="font-mono">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
