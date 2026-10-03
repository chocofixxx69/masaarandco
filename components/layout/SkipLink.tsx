import React from "react";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#092948] focus:text-[#F9F1E7] focus:border focus:border-[#619AAA] focus:outline-none focus:rounded-sm shadow-xl font-medium text-sm transition-all"
    >
      Skip to main content
    </a>
  );
}
