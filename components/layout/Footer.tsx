import React from "react";
import Link from "next/link";
import MasaarLogo from "@/components/ui/MasaarLogo";
import { COMPANY } from "@/content/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#092948] text-[#F9F1E7] pt-16 md:pt-24 pb-12 border-t border-[rgba(249,241,231,0.15)] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Top 4-Col Grid (Desktop 4-col -> Mobile single column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          {/* Col 1: Brand & Meaning */}
          <div className="space-y-4">
            <MasaarLogo variant="cream" width={180} height={64} />
            <p className="text-sm text-[#F9F1E7]/80 leading-relaxed max-w-sm pt-2">
              Turning ideas into practical, real-world solutions. We combine engineering, technology, design, and innovation.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium block">
                Philosophy
              </span>
              <p className="text-xs text-[#F9F1E7]/70 mt-1">
                Masaar (مسار) — Path, course, or direction. Ideas, engineered into existence.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {COMPANY.navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#F9F1E7]/80 hover:text-[#FFFFFF] transition-colors focus-ring-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium mb-5">
              Solutions
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#business-automation"
                  className="text-sm text-[#F9F1E7]/80 hover:text-[#FFFFFF] transition-colors"
                >
                  Business Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-chatbots-voice-agents"
                  className="text-sm text-[#F9F1E7]/80 hover:text-[#FFFFFF] transition-colors"
                >
                  AI, Chatbots &amp; Voice Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/services#application-development"
                  className="text-sm text-[#F9F1E7]/80 hover:text-[#FFFFFF] transition-colors"
                >
                  Application &amp; Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#system-integration"
                  className="text-sm text-[#F9F1E7]/80 hover:text-[#FFFFFF] transition-colors"
                >
                  System Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[#619AAA] hover:underline transition-colors font-medium flex items-center gap-1"
                >
                  <span>View All 12 Services</span>
                  <span>↗</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Presence & Inquiries */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium mb-5">
              Inquiries
            </h4>
            <p className="text-sm text-[#F9F1E7]/80 mb-2">Direct communication:</p>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="text-sm font-medium text-[#F9F1E7] hover:text-[#619AAA] underline decoration-[#619AAA]/50 underline-offset-4 transition-colors block mb-4"
            >
              {COMPANY.contact.email}
            </a>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#619AAA] font-medium block">
                Offices
              </span>
              <p className="text-xs text-[#F9F1E7]/70 mt-1">
                Riyadh · Dubai · London
              </p>
            </div>
          </div>
        </div>

        {/* Structural Pathway Baseline */}
        <div className="pathway-rule-dark" aria-hidden="true" />

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#F9F1E7]/60">
          <div>
            &copy; {currentYear} Masaar &amp; Co. Technology Group. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#F9F1E7] cursor-pointer">Privacy Policy</span>
            <span className="text-[#F9F1E7]/30">·</span>
            <span className="hover:text-[#F9F1E7] cursor-pointer">Terms of Engagement</span>
            <span className="text-[#F9F1E7]/30">·</span>
            <span className="hover:text-[#F9F1E7] cursor-pointer">Security Overview</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
