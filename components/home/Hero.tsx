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
      className="relative w-full min-h-[100svh] bg-[#EAE8E1] text-[#092948] overflow-hidden flex flex-col justify-between"
      aria-label="Hero Section"
    >
      {/* Background Graphic: The Tech Professional with Laptop, Circuit Lines & Office Atmosphere */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[62%] xl:w-[58%] h-full z-0 pointer-events-none overflow-hidden">
        <div
          className={`relative w-full h-full transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
          }`}
        >
          <Image
            src="/images/hero-man-feathered.png"
            alt="Masaar & Co. Technology Leader with Laptop"
            fill
            priority
            quality={95}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-contain object-right-bottom select-none"
          />
        </div>
      </div>

      {/* Top Spacer for Fixed Nav */}
      <div className="pt-24 lg:pt-32" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-6 md:px-10 lg:px-16 flex-1 flex flex-col justify-center py-8">
        {/* Mobile View Graphic Top (When on screens <1024px) */}
        <div className="lg:hidden w-full h-[45svh] sm:h-[50svh] relative rounded-[2px] overflow-hidden mb-8 border border-[#092948]/10 shadow-sm bg-[#EAE8E1]">
          <Image
            src="/images/hero-light-comp.png"
            alt="Masaar & Co. Technology Leader with Laptop"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center select-none"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Wordmark & Narrative Lockup spans cols 1-7 */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6">
            {/* Top Micro-label with Dot */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#316A7E] animate-pulse" />
              <p className="font-caps-label text-[#316A7E] text-[0.75rem] tracking-[0.24em] uppercase font-semibold">
                Technology for what&apos;s next
              </p>
            </div>

            {/* Oversized Brand Wordmark Lockup in Dark Navy & Teal */}
            <div className="space-y-3">
              <div className="relative inline-block max-w-full">
                <Image
                  src="/brand/hero-wordmark-transparent.png"
                  alt="MASAAR مسار — MASAAR & CO."
                  width={560}
                  height={205}
                  priority
                  className="w-full max-w-[380px] sm:max-w-[460px] md:max-w-[530px] h-auto object-contain select-none"
                />

                {/* Animated Horizontal Baseline / Pathway Line Device */}
                <div
                  className={`h-[1.5px] w-full bg-[#092948] origin-left transition-transform duration-[900ms] delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] mt-2 ${
                    mounted ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Tagline Micro-label */}
              <p className="font-caps-label text-[#092948]/85 text-[0.7rem] sm:text-[0.75rem] tracking-[0.22em] font-medium pt-1">
                People · Ideas · Technology · A brighter tomorrow
              </p>
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-[#092948]/85 font-normal leading-relaxed max-w-[48ch] pt-1">
              We build AI-powered solutions, modern products and digital systems that help businesses move forward.
            </p>

            {/* CTAs matching the visual mockup */}
            <div className="pt-3 flex flex-wrap items-center gap-5">
              {/* Filled Pill Button with Arrow Circle on the left */}
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0B3A4C] hover:bg-[#092948] px-7 py-3.5 text-[0.9375rem] font-semibold text-[#FFFFFF] shadow-sm transition-all duration-200 focus-ring-light active:scale-[0.98]"
              >
                <span className="w-5 h-5 rounded-full border border-white/80 flex items-center justify-center p-0.5 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="tracking-wide">EXPLORE OUR WORK</span>
              </Link>

              {/* Ghost Link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#092948] hover:text-[#316A7E] px-2 py-3 tracking-wide transition-colors"
              >
                <span>View Capabilities</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column Corner Micro-Labels (Desktop cols 8-12) */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 flex-col justify-end items-end text-right pb-4">
            <div className="p-5 border-l-2 border-[#316A7E] bg-[#FFFFFF]/40 rounded-[2px] space-y-1.5 max-w-xs text-left">
              <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-[#316A7E] font-semibold">
                Core Domains
              </p>
              <p className="text-xs text-[#092948]/80 font-mono tracking-wider leading-relaxed">
                IDEAS · PRODUCTS · AUTOMATION · AI SOLUTIONS · BUSINESS GROWTH
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Structural Divider Line */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 pt-8 pb-6">
        <div className="pathway-rule" aria-hidden="true" />
      </div>
    </section>
  );
}
