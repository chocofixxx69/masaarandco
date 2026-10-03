import React from "react";
import { COMPANY } from "@/content/company";

export default function ApproachSection() {
  return (
    <section
      className="py-20 md:py-32 bg-[#092948] text-[#FEEED7] relative overflow-hidden"
      aria-label="Our Approach"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <p className="font-caps-label text-[#619AAA] text-xs tracking-[0.2em] mb-6">
          Our Approach
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading (cols 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#FEEED7]">
              Strategy
              <br />
              Technology
              <br />
              Real{" "}
              <em className="italic text-[#619AAA] font-serif font-normal">
                Impact
              </em>
            </h2>

            <p className="text-base sm:text-lg text-[#FEEED7]/80 leading-relaxed max-w-lg pt-4">
              We eliminate technical ambiguity through methodical inquiry, precise system architecture, and iterative deployment. Every project follows a clear pathway from first principles to enterprise endurance.
            </p>
          </div>

          {/* Right Column: 01 Understand, 02 Build, 03 Scale (cols 7-12) */}
          <div className="lg:col-span-6 divide-y divide-[rgba(254,238,215,0.15)]">
            {COMPANY.approach.map((step) => (
              <div key={step.step} className="py-8 first:pt-0 last:pb-0 group">
                <div className="flex items-baseline gap-6 mb-3">
                  <span className="font-mono text-xs sm:text-sm text-[#619AAA] tracking-widest font-semibold">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FEEED7] group-hover:text-[#619AAA] transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#FEEED7]/75 leading-relaxed pl-12 sm:pl-14">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Structural Pathway Baseline */}
        <div className="pathway-rule-dark mt-16 md:mt-24" aria-hidden="true" />
      </div>
    </section>
  );
}
