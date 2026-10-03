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
      className="relative w-full min-h-[100svh] bg-[#FEEED7] text-[#092948] overflow-hidden flex flex-col justify-between"
      aria-label="Hero Section"
    >
      {/* Background Architectural & Circuit Depth behind the leader (Desktop >= 1024px) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%] xl:w-[50%] h-full z-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Ambient Light Glow */}
        <div
          className="absolute right-12 top-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#FFFFFF]/70 to-[#619AAA]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Minimalist Architectural Arch & Circuit Pathway SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 800"
          fill="none"
          aria-hidden="true"
        >
          {/* Subtle Vertical Architectural Grid Guides */}
          <line x1="220" y1="0" x2="220" y2="800" stroke="#092948" strokeWidth="1" strokeDasharray="3 6" opacity="0.12" />
          <line x1="450" y1="0" x2="450" y2="800" stroke="#092948" strokeWidth="1" strokeDasharray="3 6" opacity="0.12" />
          <line x1="620" y1="0" x2="620" y2="800" stroke="#092948" strokeWidth="1" opacity="0.08" />

          {/* Arched Architectural Window Motif */}
          <path
            d="M 120 750 V 280 A 200 200 0 0 1 520 280 V 750"
            stroke="#316A7E"
            strokeWidth="1.25"
            strokeDasharray="4 8"
            opacity="0.35"
          />

          {/* Tech Circuit Pathway Curve */}
          <path
            d="M 60 480 C 180 320, 360 210, 560 210"
            stroke="#316A7E"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            opacity="0.45"
          />

          {/* Glowing Pathway Nodes */}
          <circle cx="560" cy="210" r="4.5" fill="#619AAA" opacity="0.8" />
          <circle cx="560" cy="210" r="9" stroke="#619AAA" strokeWidth="1" opacity="0.4" />
          <circle cx="270" cy="265" r="3.5" fill="#316A7E" opacity="0.7" />
          <circle cx="120" cy="380" r="3" fill="#092948" opacity="0.5" />
          <circle cx="450" cy="180" r="3" fill="#619AAA" opacity="0.6" />

          {/* Horizontal Grid Baseline */}
          <line x1="0" y1="720" x2="700" y2="720" stroke="#092948" strokeWidth="1" opacity="0.15" />
        </svg>

        {/* The Leader Cutout Image (Transparent Cutout, anchored naturally to bottom) */}
        <div
          className={`absolute right-4 xl:right-16 bottom-0 w-[420px] xl:w-[480px] h-[85svh] max-h-[760px] flex items-end justify-center transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? "scale-100 opacity-100 translate-y-0" : "scale-[0.98] opacity-0 translate-y-4"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-saudi-leader-cropped.png"
              alt="Masaar & Co. Technology Leader with Laptop"
              fill
              priority
              quality={95}
              sizes="(max-width: 1280px) 420px, 480px"
              className="object-contain object-bottom select-none drop-shadow-[0_20px_40px_rgba(9,41,72,0.12)]"
            />
          </div>
        </div>
      </div>

      {/* Top Spacer for Fixed Navigation */}
      <div className="pt-24 lg:pt-32" />

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-6 md:px-10 lg:px-16 flex-1 flex flex-col justify-center py-6 sm:py-8 lg:py-12">
        {/* Mobile View Leader Presentation (<1024px) */}
        <div className="lg:hidden w-full max-w-[360px] mx-auto h-[320px] sm:h-[380px] relative rounded-lg overflow-hidden mb-6 flex items-end justify-center">
          {/* Subtle Ambient Background for Mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFFFFF]/30 to-[#619AAA]/10 rounded-lg pointer-events-none" />
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 380" fill="none">
            <path d="M 40 360 V 160 A 140 140 0 0 1 320 160 V 360" stroke="#316A7E" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.4" />
            <circle cx="280" cy="120" r="3.5" fill="#619AAA" opacity="0.7" />
          </svg>
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-saudi-leader-cropped.png"
              alt="Masaar & Co. Technology Leader with Laptop"
              fill
              priority
              sizes="(max-width: 640px) 300px, 360px"
              className="object-contain object-bottom select-none drop-shadow-[0_12px_24px_rgba(9,41,72,0.10)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Wordmark & Narrative Lockup (Cols 1-7 on desktop) */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6">
            {/* Top Micro-label with Pulse Dot */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#316A7E] animate-pulse" />
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
                  className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] h-auto object-contain select-none"
                />

                {/* Animated Horizontal Baseline / Pathway Line Device */}
                <div
                  className={`h-[1.5px] w-full bg-[#092948] origin-left transition-transform duration-[900ms] delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] mt-2 ${
                    mounted ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Brand Tagline Micro-label */}
              <p className="font-caps-label text-[#092948]/85 text-[0.7rem] sm:text-[0.75rem] tracking-[0.22em] font-semibold pt-1">
                PEOPLE · IDEAS · TECHNOLOGY · A BRIGHTER TOMORROW
              </p>
            </div>

            {/* Subtitle Paragraph in Brand Blue */}
            <p className="text-base sm:text-lg text-[#092948] font-normal leading-relaxed max-w-[48ch] pt-1">
              We build AI-powered solutions, modern digital products, and intelligent systems that help businesses innovate, automate, and move forward.
            </p>

            {/* CTAs matching the visual mockup */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Filled Dark Blue Pill Button with Circular Icon */}
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 rounded-full bg-[#092948] hover:bg-[#316A7E] px-7 py-3.5 text-[0.9375rem] font-semibold text-[#FFFFFF] shadow-sm transition-all duration-200 focus-ring-light active:scale-[0.98]"
              >
                <span className="w-5 h-5 rounded-full border border-white/80 flex items-center justify-center p-0.5 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="tracking-wide uppercase">EXPLORE OUR WORK</span>
              </Link>

              {/* Ghost Link in Brand Blue */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#092948] hover:text-[#316A7E] px-3 py-3 tracking-wide transition-colors"
              >
                <span>View Capabilities</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column Corner Micro-Labels (Desktop cols 8-12) */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 flex-col justify-end items-end text-right pb-4">
            <div className="p-5 border-l-2 border-[#316A7E] bg-[#FFFFFF]/60 backdrop-blur-md rounded-[2px] space-y-1.5 max-w-xs text-left shadow-sm">
              <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-[#316A7E] font-semibold">
                Core Domains
              </p>
              <p className="text-xs text-[#092948] font-mono tracking-wider leading-relaxed">
                AUTOMATE · BUILD · CONNECT · SCALE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Structural Divider Line */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 pt-6 pb-6">
        <div className="h-[1px] w-full bg-[#092948]/15" aria-hidden="true" />
      </div>
    </section>
  );
}

