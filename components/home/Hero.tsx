"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative w-full min-h-[100svh] bg-[#F8EFE1] text-[#092948] overflow-hidden flex flex-col justify-between"
      aria-label="Hero Section"
    >
      {/* Visual Scene on the Right (Desktop >= 1024px) */}
      <div className="hidden lg:block absolute right-0 bottom-0 top-0 w-[58%] xl:w-[54%] 2xl:w-[52%] h-full z-0 pointer-events-none select-none overflow-hidden">
        <div
          className={`relative w-full h-full flex items-end justify-end transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? "scale-100 opacity-100 translate-y-0" : "scale-[0.99] opacity-0 translate-y-3"
          }`}
        >
          <Image
            src="/images/hero-architectural-leader-scene.png"
            alt="Masaar & Co. Technology Leader with Architectural Materials and Circuit Motif"
            fill
            priority
            quality={98}
            sizes="(max-width: 1280px) 58vw, 54vw"
            className="object-contain object-right-bottom select-none"
          />
        </div>
      </div>

      {/* Top Spacer for Fixed Navigation */}
      <div className="pt-24 lg:pt-32" />

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-6 md:px-10 lg:px-16 flex-1 flex flex-col justify-center py-6 sm:py-8 lg:py-12">
        {/* Mobile View Leader & Architectural Presentation (<1024px) */}
        <div className="lg:hidden w-full max-w-[500px] mx-auto h-[320px] sm:h-[400px] relative rounded-lg overflow-hidden mb-6 flex items-end justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-architectural-leader-scene.png"
              alt="Masaar & Co. Technology Leader with Architectural Materials and Circuit Motif"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 500px"
              className="object-contain object-bottom select-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Wordmark & Narrative Lockup (Cols 1-7 on desktop) */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            {/* Top Micro-label with Solid Dot */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#316A7E]" />
              <p className="font-caps-label text-[#316A7E] text-[0.75rem] tracking-[0.24em] uppercase font-semibold">
                Technology for what&apos;s next
              </p>
            </div>

            {/* Official Masaar & Co. Brand Wordmark in Brand Blue (#092948) */}
            <div className="space-y-3">
              <div className="relative inline-block max-w-full">
                <Image
                  src="/brand/masaar-wordmark-navy.png"
                  alt="MASAAR مسار — MASAAR & CO."
                  width={560}
                  height={186}
                  priority
                  className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[490px] h-auto object-contain select-none"
                />
              </div>

              {/* Brand Tagline Micro-label */}
              <p className="font-caps-label text-[#316A7E] text-[0.7rem] sm:text-[0.75rem] tracking-[0.22em] font-semibold pt-1 uppercase">
                People · Ideas · Technology · A brighter tomorrow
              </p>
            </div>

            {/* Subtitle Paragraph in Brand Blue */}
            <p className="text-base sm:text-lg text-[#092948] font-normal leading-relaxed max-w-[46ch] pt-1">
              We build AI-powered solutions, modern products and digital systems that help businesses move forward.
            </p>

            {/* CTAs matching the visual mockup */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Filled Dark Blue Pill Button with Circular Icon */}
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 rounded-full bg-[#092948] hover:bg-[#316A7E] px-7 py-3.5 text-[0.9375rem] font-semibold text-[#FFFFFF] shadow-sm transition-all duration-200 focus-ring-light active:scale-[0.98]"
              >
                <span className="w-5 h-5 rounded-full border border-white/80 flex items-center justify-center p-0.5 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="tracking-wider uppercase">Explore Our Work</span>
              </Link>

              {/* Ghost Link in Brand Blue */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#092948] hover:text-[#316A7E] px-2 py-3 tracking-wide transition-colors group"
              >
                <span>View Capabilities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="pb-8" />
    </section>
  );
}


