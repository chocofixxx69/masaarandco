import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeading from "@/components/ui/PageHeading";
import Reveal from "@/components/ui/Reveal";
import { constructMetadata } from "@/lib/metadata";
import { COMPANY } from "@/content/company";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "About",
  description:
    "Masaar & Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions. Ideas, engineered into existence.",
  path: "/about",
});

export default function AboutPage() {
  const capabilities = [
    { title: "Software Development", desc: "Production-grade web, mobile, and distributed enterprise software applications." },
    { title: "Artificial Intelligence", desc: "Custom ML pipelines, ambient voice intelligence, and agentic LLM workflows." },
    { title: "Cloud Infrastructure", desc: "Resilient multi-cloud, microservices, containerization, and automated DevOps." },
    { title: "Data & Analytics", desc: "Real-time data ingestion, high-speed querying, and executive intelligence engines." },
    { title: "Cybersecurity", desc: "Zero-trust protocols, compliance governance (SOC-2, HIPAA), and cryptographic security." },
    { title: "Digital Experiences", desc: "High-precision typographic design systems, interfaces, and responsive web products." },
    { title: "IoT & Smart Systems", desc: "Connected sensor telemetry, edge computing, and industrial hardware integration." },
    { title: "Advanced Computing", desc: "High-performance parallel computation, algorithmic optimization, and simulation." },
    { title: "Emerging Technologies", desc: "Spatial computing, decentralized ledger technologies, and next-generation architectures." },
  ];

  return (
    <div className="bg-[#F9F1E7] min-h-screen pt-28 md:pt-36 pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Page Header */}
        <Reveal>
          <PageHeading
            label="About Masaar & Co."
            title="Ideas, Engineered into Existence."
            italicWord="Existence"
            description="Masaar & Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions."
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-12 md:my-16" aria-hidden="true" />

        {/* Main Narrative & Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#092948] font-normal leading-snug">
              We combine engineering, technology, design, and innovation to build what works.
            </h2>

            <p className="text-lg text-[#000000]/85 leading-relaxed font-normal">
              Masaar &amp; Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions. We build digital products, intelligent systems, software, automation, infrastructure, and emerging technology solutions.
            </p>

            <div className="p-6 sm:p-8 bg-[#FFFFFF]/70 border-l-2 border-[#316A7E] rounded-[2px] space-y-3">
              <span className="font-caps-label text-[#316A7E] text-xs">
                Our Approach
              </span>
              <p className="text-base sm:text-lg text-[#092948] font-serif leading-relaxed italic">
                &ldquo;Our approach is simple: understand the problem, find the right direction, and engineer a solution that works. We focus on building technology that is purposeful, reliable, scalable, and designed to create lasting value.&rdquo;
              </p>
            </div>

            <p className="text-base text-[#000000]/80 leading-relaxed">
              From software development and artificial intelligence to cloud infrastructure, data, cybersecurity, digital experiences, IoT, advanced computing, and emerging technologies, we bring together the capabilities needed to move an idea from concept to execution.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#092948] px-6 py-2.5 text-sm font-medium text-[#092948] hover:bg-[#092948] hover:text-[#F9F1E7] transition-all focus-ring-light"
              >
                <span>Initiate an Engagement</span>
                <span className="font-mono">↗</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#092948]/15 shadow-sm">
              <Image
                src="/images/arch-curved-concrete.jpg"
                alt="Architectural structure representing Masaar's pathway philosophy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-baseline text-xs text-[#092948]/60 font-mono pt-1">
              <span>MASAAR &amp; CO. — ARCHITECTURAL DISCIPLINE</span>
              <span>EST. RIYADH / DUBAI</span>
            </div>
          </div>
        </div>

        {/* The Meaning of Masaar (مسار) Section */}
        <section
          className="p-8 sm:p-12 md:p-16 bg-[#092948] text-[#F9F1E7] rounded-[2px] my-16 relative overflow-hidden"
          aria-labelledby="meaning-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#619AAA]" />
                <p className="font-caps-label text-[#619AAA] text-xs tracking-[0.2em]">
                  The Name &amp; Philosophy
                </p>
              </div>

              <h2
                id="meaning-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9F1E7] font-normal leading-tight"
              >
                The Meaning of Masaar{" "}
                <span className="text-[#619AAA] font-serif">(مسار)</span>
              </h2>

              <p className="text-lg sm:text-xl text-[#F9F1E7]/90 leading-relaxed font-normal max-w-2xl">
                The name <strong>Masaar (مسار)</strong> means path, course, or direction in Arabic. It reflects the journey behind everything we build — from an initial idea to something tangible, useful, and ready for the real world.
              </p>

              <div className="pt-2 border-t border-[rgba(249,241,231,0.2)] max-w-xl">
                <p className="font-serif text-2xl sm:text-3xl text-[#F9F1E7] italic">
                  &ldquo;We don’t just imagine what could exist. We engineer it into existence.&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium mt-3">
                  — Masaar &amp; Co. Core Conviction
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-8 border border-[rgba(249,241,231,0.15)] bg-[#092948]/60 rounded-[2px]">
              <span className="font-serif text-6xl sm:text-7xl text-[#F9F1E7] mb-2 font-normal">
                مسار
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#619AAA] font-mono mt-1">
                PATH · COURSE · DIRECTION
              </p>
              <div className="w-12 h-[1px] bg-[#619AAA] my-4" />
              <p className="text-xs text-[#F9F1E7]/70 leading-relaxed">
                From initial idea to real-world execution.
              </p>
            </div>
          </div>
        </section>

        {/* Full Capabilities Matrix */}
        <section className="py-16 border-t border-[#092948]/15" aria-labelledby="capabilities-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-caps-label text-[#316A7E] mb-2">
                Comprehensive Capabilities
              </p>
              <h2
                id="capabilities-heading"
                className="font-serif text-3xl sm:text-4xl text-[#092948] font-normal"
              >
                From Concept to Execution
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#092948] hover:text-[#316A7E] uppercase tracking-wider"
            >
              <span>Explore Solution Practices</span>
              <span>↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-6 bg-[#FFFFFF]/75 border border-[#092948]/12 rounded-[2px] space-y-2.5 hover:border-[#316A7E] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#316A7E]">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#092948]/40 group-hover:text-[#316A7E] transition-colors" />
                </div>
                <h3 className="font-serif text-xl text-[#092948] font-normal group-hover:text-[#316A7E] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#000000]/70 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Operations & Contact Pathway */}
        <section className="mt-8 p-8 md:p-12 bg-[#FFFFFF]/60 border border-[#092948]/15 rounded-[2px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <p className="font-caps-label text-[#316A7E] text-xs">
              Masaar &amp; Co. Presence
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#092948]">
              Operating Across Riyadh, Dubai, and London
            </h3>
            <p className="text-sm text-[#000000]/75">
              Guiding organizations through the pathway of engineering tangible, useful, and durable technology.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#092948] px-7 py-3 text-xs uppercase tracking-wider font-medium text-[#F9F1E7] hover:bg-[#316A7E] transition-all whitespace-nowrap"
          >
            <span>Let&apos;s Build Together</span>
            <span className="font-mono">↗</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
