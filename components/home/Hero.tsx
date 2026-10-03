"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative w-full min-h-[100svh] bg-[#092948] text-[#FEEED7] overflow-hidden flex flex-col justify-between"
      aria-label="Hero Section"
    >
      {/* Background Architectural Image (Desktop: fills right/full bleed with Primary-to-transparent scrim) */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
          }`}
        >
          <Image
            src="/images/hero-architecture.jpg"
            alt="Modern architectural concrete cantilevered over reflective water"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
          {/* Primary-to-transparent left scrim for maximum contrast and legibility per PRD §5.A */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#092948] via-[#092948]/90 via-45% to-transparent to-85%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092948] via-transparent to-[#092948]/60" />
        </div>
      </div>

      {/* Top Spacer for fixed nav */}
      <div className="pt-24 lg:pt-32" />

      {/* Main Content Area (Desktop 12-col grid) */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-6 md:px-10 lg:px-16 flex-1 flex flex-col justify-center">
        {/* Mobile View: Image Top (60svh) */}
        <div className="lg:hidden w-full h-[45svh] sm:h-[50svh] relative rounded-[2px] overflow-hidden mb-8 border border-[rgba(254,238,215,0.15)] shadow-2xl">
          <Image
            src="/images/hero-architecture.jpg"
            alt="Masaar Architectural Vision"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092948] via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Wordmark & Narrative Lockup spans cols 1-7 per PRD §5.A */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6">
            {/* Top Micro-label */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#619AAA] animate-pulse" />
              <p className="font-caps-label text-[#619AAA] text-[0.75rem] tracking-[0.25em]">
                Technology for what&apos;s next
              </p>
            </div>

            {/* Oversized Brand Wordmark Lockup */}
            <div className="space-y-3">
              <div className="relative inline-block max-w-full">
                {/* SVG/High-res authentic logo lockup */}
                <Image
                  src="/brand/masaar-logo-cream.png"
                  alt="MASAAR مسار — MASAAR & CO."
                  width={560}
                  height={205}
                  priority
                  className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[560px] h-auto object-contain select-none"
                />

                {/* Animated Horizontal Baseline / Pathway Line Device */}
                <div
                  className={`h-[1.5px] w-full bg-[#FEEED7] origin-left transition-transform duration-[900ms] delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] mt-3 ${
                    mounted ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Tagline micro-label */}
              <p className="font-caps-label text-[#FEEED7]/80 text-[0.7rem] sm:text-[0.75rem] tracking-[0.22em] pt-1">
                People · Ideas · Technology · A brighter tomorrow
              </p>
            </div>

            {/* Hero Subtitle paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#FEEED7]/85 font-normal leading-relaxed max-w-[52ch] pt-2">
              We build AI-powered solutions, modern products and digital systems that help businesses move forward.
            </p>

            {/* Hero CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 rounded-full border border-[rgba(254,238,215,0.4)] px-6 py-3 text-[0.9375rem] font-medium text-[#FEEED7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] transition-all duration-200 focus-ring-dark"
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center p-0.5 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                </span>
                <span>EXPLORE OUR WORK</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-[#FEEED7]/70 hover:text-[#FEEED7] px-4 py-3 tracking-wide transition-colors"
              >
                <span>View Capabilities</span>
                <span className="text-xs font-mono">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column Corner Micro-Labels (Desktop cols 8-12) */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 flex-col justify-end items-end text-right pb-4 space-y-4">
            <div className="p-6 border-r border-[rgba(254,238,215,0.25)] space-y-2 max-w-xs">
              <p className="text-[0.6875rem] uppercase tracking-[0.25em] text-[#619AAA] font-medium">
                Core Domains
              </p>
              <p className="text-xs text-[#FEEED7]/80 tracking-widest leading-loose">
                IDEAS · PRODUCTS · AUTOMATION · AI SOLUTIONS · BUSINESS GROWTH
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Structural Divider Line */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 pt-12 pb-6">
        <div className="pathway-rule-dark" aria-hidden="true" />
      </div>
    </section>
  );
}
