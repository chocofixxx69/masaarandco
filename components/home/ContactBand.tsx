import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactBand() {
  return (
    <section
      className="py-20 md:py-32 bg-[#092948] text-[#FEEED7] relative overflow-hidden"
      aria-labelledby="contact-band-title"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <p className="font-caps-label text-[#619AAA] text-xs tracking-[0.2em] mb-6">
          Let&apos;s Build What&apos;s Next
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading + CTA (cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <h2
              id="contact-band-title"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#FEEED7]"
            >
              Have a Project in{" "}
              <em className="italic text-[#619AAA] font-serif font-normal">
                Mind?
              </em>
            </h2>

            <p className="text-base sm:text-lg text-[#FEEED7]/80 leading-relaxed max-w-xl">
              Whether you are architecting a new AI system, launching a mission-critical web application, or modernizing institutional infrastructure, we provide the pathway forward.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-[rgba(254,238,215,0.4)] px-8 py-3.5 text-[0.9375rem] font-medium text-[#FEEED7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] transition-all duration-200 focus-ring-dark"
              >
                <span>Get In Touch</span>
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center p-0.5 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Pillars (cols 8-12) */}
          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-[rgba(254,238,215,0.2)]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[#619AAA] font-medium">
                Core Philosophy
              </p>
              <div className="space-y-2 text-sm sm:text-base text-[#FEEED7]/80 tracking-wide font-sans">
                <p className="hover:text-[#FFFFFF] transition-colors">People</p>
                <p className="hover:text-[#FFFFFF] transition-colors">Ideas</p>
                <p className="hover:text-[#FFFFFF] transition-colors">Technology</p>
                <p className="text-[#619AAA] font-medium">A Brighter Tomorrow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Structural Pathway Baseline */}
        <div className="pathway-rule-dark mt-16 md:mt-24" aria-hidden="true" />
      </div>
    </section>
  );
}
