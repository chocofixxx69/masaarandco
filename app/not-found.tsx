import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#092948] text-[#FEEED7] min-h-[80vh] flex items-center justify-center py-24 px-6">
      <div className="max-w-xl text-center space-y-6">
        <p className="font-caps-label text-[#619AAA] text-xs">
          404 — Pathway Not Found
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal leading-tight">
          Lost Along the Route
        </h1>
        <p className="text-base text-[#FEEED7]/80 leading-relaxed max-w-md mx-auto">
          The requested coordinate or document does not exist within the Masaar &amp; Co. directory. Let us guide you back to the main pathway.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(254,238,215,0.4)] px-6 py-3 text-sm font-medium text-[#FEEED7] hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] transition-all focus-ring-dark"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Pathway</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
