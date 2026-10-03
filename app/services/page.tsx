import React from "react";
import Link from "next/link";
import PageHeading from "@/components/ui/PageHeading";
import ServiceRow from "@/components/ui/ServiceRow";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/content/services";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Services & Capabilities",
  description:
    "Explore Masaar & Co.'s core capabilities: Custom AI Solutions, Production Web & Mobile Engineering, and Digital Transformation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-[#FEEED7] min-h-screen pt-28 md:pt-36 pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Page Heading */}
        <Reveal>
          <PageHeading
            label="Capabilities & Architecture"
            title="Disciplined Engineering for High-Consequence Environments"
            italicWord="High-Consequence"
            description="We partner with organizations to architect, build, and deploy reliable digital systems. Explore our core technical practices below."
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-12" aria-hidden="true" />

        {/* Content with Desktop Sticky Navigation Index (PRD §5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Desktop Sticky Index (cols 1-3) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 space-y-6">
            <p className="font-caps-label text-[#316A7E] text-xs">
              Index of Solutions
            </p>
            <nav className="space-y-3" aria-label="Services Navigation">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.slug}`}
                  className="group flex items-baseline gap-3 text-sm text-[#092948]/70 hover:text-[#092948] transition-colors py-1.5 border-l-2 border-transparent hover:border-[#092948] pl-3"
                >
                  <span className="font-mono text-xs text-[#316A7E]">{s.number}</span>
                  <span className="font-medium group-hover:underline underline-offset-4">
                    {s.name}
                  </span>
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-[#092948]/15">
              <p className="text-xs text-[#092948]/60 mb-3">Custom engagement?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#092948] hover:text-[#316A7E] uppercase tracking-wider"
              >
                <span>Request Technical Brief</span>
                <span>↗</span>
              </Link>
            </div>
          </aside>

          {/* Main Services Editorial List (cols 4-12) */}
          <main className="lg:col-span-9 space-y-12">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 100}>
                <ServiceRow
                  service={service}
                  variant="editorial"
                  index={index}
                />
              </Reveal>
            ))}
          </main>
        </div>

        {/* Closing Consultation CTA */}
        <div className="mt-20 p-10 md:p-14 bg-[#092948] text-[#FEEED7] rounded-[2px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl text-[#FEEED7]">
              Need an architectural audit before building?
            </h3>
            <p className="text-sm text-[#FEEED7]/80">
              We conduct thorough technical evaluations of existing codebases, cloud footprints, and machine learning viability.
            </p>
          </div>
          <Link
            href="/contact?service=Strategic%20Advisory"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(254,238,215,0.4)] px-6 py-3 text-sm font-medium text-[#FEEED7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] transition-all whitespace-nowrap focus-ring-dark"
          >
            <span>Book Consultation</span>
            <span className="font-mono">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
