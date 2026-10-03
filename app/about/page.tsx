import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeading from "@/components/ui/PageHeading";
import Reveal from "@/components/ui/Reveal";
import { constructMetadata } from "@/lib/metadata";
import { COMPANY } from "@/content/company";

export const metadata = constructMetadata({
  title: "About",
  description:
    "Learn about Masaar & Co., our pathway philosophy, architectural precision, and computational engineering capabilities.",
  path: "/about",
});

export default function AboutPage() {
  const values = [
    {
      number: "01",
      title: "The Pathway Principle",
      desc: "In Arabic, masaar (مسار) signifies route, trajectory, and purpose. We reject arbitrary digital sprawl, engineering linear, disciplined paths that guide enterprise ideas directly into hardened software reality.",
    },
    {
      number: "02",
      title: "Architectural Precision",
      desc: "Informed by geometric purity and spatial restraint, our digital systems avoid ephemeral SaaS decoration. We build with the longevity and structural integrity expected of civil architecture.",
    },
    {
      number: "03",
      title: "Applied Computational AI",
      desc: "We focus on production-grade machine learning that solves actual institutional bottlenecks—from real-time ambient clinical transcription to municipal spatial simulation and high-speed settlement engines.",
    },
    {
      number: "04",
      title: "Bilingual & International",
      desc: "Rooted in the GCC with global engineering capability, we natively bridge Arabic and Latin computational typography, cultural context, and cross-border compliance standards.",
    },
  ];

  return (
    <div className="bg-[#FEEED7] min-h-screen pt-28 md:pt-36 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Page Header */}
        <Reveal>
          <PageHeading
            label="About Masaar & Co."
            title="A Clear Pathway from Ideas to Enduring Impact"
            italicWord="Pathway"
            description="We are a technology company building AI solutions, modern products and intelligent digital architectures for businesses, institutions and communities."
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-12 md:my-16" aria-hidden="true" />

        {/* Narrative & Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#092948] font-normal leading-snug">
              Architecture, calm negative space, and disciplined engineering.
            </h2>
            <p className="text-base md:text-lg text-[#000000]/85 leading-relaxed">
              Masaar &amp; Co. was established to counter the prevailing clutter of generic tech software. We believe that true digital capability is quiet, rigorous, and profoundly dependable.
            </p>
            <p className="text-base text-[#000000]/75 leading-relaxed">
              Our teams operate at the intersection of applied artificial intelligence, high-performance distributed systems, and refined typographic interaction. Whether deploying multi-modal neural pipelines or architecting state university portals, we approach every code repository with architectural permanence.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#092948] px-6 py-2.5 text-sm font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FEEED7] transition-all focus-ring-light"
              >
                <span>Initiate a Conversation</span>
                <span className="font-mono">↗</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#092948]/15 shadow-sm">
              <Image
                src="/images/arch-curved-concrete.jpg"
                alt="Minimalist architectural curve representing Masaar's design philosophy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-baseline pt-3 text-xs text-[#092948]/60 font-mono">
              <span>FIG. 01 — THE PATHWAY STRUCTURE</span>
              <span>RIYADH / DUBAI</span>
            </div>
          </div>
        </div>

        {/* Brand Values Grid */}
        <section className="py-16 border-t border-[#092948]/15" aria-labelledby="values-heading">
          <p className="font-caps-label text-[#316A7E] mb-4">
            Operating Principles
          </p>
          <h2 id="values-heading" className="font-serif text-3xl sm:text-4xl text-[#092948] font-normal mb-12">
            The Principles That Govern Our Craft
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((v) => (
              <div
                key={v.number}
                className="p-8 bg-[#FFFFFF]/70 border border-[#092948]/12 rounded-[2px] space-y-4 hover:border-[#316A7E] transition-colors"
              >
                <span className="font-mono text-xs text-[#316A7E] tracking-widest font-semibold block">
                  {v.number}
                </span>
                <h3 className="font-serif text-2xl text-[#092948] font-normal">
                  {v.title}
                </h3>
                <p className="text-sm md:text-base text-[#000000]/75 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Presence Banner */}
        <section className="mt-16 p-8 md:p-14 bg-[#092948] text-[#FEEED7] rounded-[2px] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="font-caps-label text-[#619AAA] text-xs">
                Global Operations
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FEEED7] font-normal">
                Connecting Strategic Hubs
              </h3>
              <p className="text-sm sm:text-base text-[#FEEED7]/80 max-w-xl leading-relaxed">
                Operating with dedicated advisory and engineering teams across Saudi Arabia, the United Arab Emirates, and the United Kingdom.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              {COMPANY.contact.locations.map((loc) => (
                <div key={loc.city} className="border-l border-[#619AAA]/40 pl-4 py-1">
                  <p className="font-medium text-sm text-[#FEEED7]">{loc.city}</p>
                  <p className="text-xs text-[#FEEED7]/60">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
