import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutBanner() {
  return (
    <section
      className="py-16 md:py-24 bg-[#FEEED7] border-t border-[#092948]/15"
      aria-labelledby="about-banner-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Top Text Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10">
          <div className="space-y-3 max-w-2xl">
            <p className="font-caps-label text-[#316A7E] text-xs tracking-[0.2em]">
              About Masaar &amp; Co. — مسار
            </p>
            <h2
              id="about-banner-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#092948] font-normal leading-[1.1]"
            >
              Ideas, Engineered into{" "}
              <em className="italic text-[#316A7E] font-normal font-serif">
                Existence.
              </em>
            </h2>
          </div>

          <div className="max-w-lg space-y-4">
            <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed font-normal">
              The name <strong>Masaar (مسار)</strong> means path, course, or direction in Arabic. It reflects the journey behind everything we build — from an initial idea to something tangible, useful, and ready for the real world.
            </p>
            <p className="text-xs sm:text-sm text-[#316A7E] font-medium italic">
              &ldquo;We don’t just imagine what could exist. We engineer it into existence.&rdquo;
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#092948] px-5 py-2 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FEEED7] transition-all"
              >
                <span>Read Our Story</span>
                <span className="font-mono">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Architectural Canopy Image Banner */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[2px] border border-[#092948]/15 mt-4">
          <Image
            src="/images/arch-curved-concrete.jpg"
            alt="Masaar architectural canopy symbolizing clarity of form and pathway"
            fill
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092948]/25 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
