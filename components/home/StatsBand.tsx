import React from "react";
import Image from "next/image";
import { COMPANY } from "@/content/company";

export default function StatsBand() {
  return (
    <section
      className="py-12 md:py-20 border-t border-b border-[#092948]/15 bg-[#FEEED7]"
      aria-label="Key Performance Indicators"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Architectural vignette + banner statement (cols 1-4) */}
          <div className="lg:col-span-4 flex items-center gap-6">
            <div className="relative w-28 sm:w-36 h-20 sm:h-24 flex-shrink-0 overflow-hidden rounded-[2px] border border-[#092948]/20">
              <Image
                src="/images/arch-curved-concrete.jpg"
                alt="Architectural structure"
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-caps-label text-[#316A7E] text-[0.7rem] sm:text-xs tracking-[0.2em] uppercase leading-relaxed">
                Movement
                <br />
                Builds
                <br />
                Possibilities
              </p>
            </div>
          </div>

          {/* 4 Stats Columns (cols 5-12) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#092948]/15 pt-4 sm:pt-0">
            {COMPANY.stats.map((stat, i) => (
              <div key={i} className={`${i > 0 ? "sm:pl-6" : ""} pt-4 sm:pt-0`}>
                <p className="font-caps-label text-[#316A7E] text-[0.65rem] tracking-[0.18em] uppercase mb-1">
                  {stat.label}
                </p>
                <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#092948] font-normal tracking-tight">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
