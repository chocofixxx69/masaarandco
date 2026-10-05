import React from "react";
import { Sparkles, TrendingUp, Landmark, ShieldPlus, Globe } from "lucide-react";

export default function AudienceRow() {
  const sectors = [
    { name: "Startups", icon: Sparkles },
    { name: "Growing Businesses", icon: TrendingUp },
    { name: "Educational Institutions", icon: Landmark },
    { name: "Healthcare Providers", icon: ShieldPlus },
    { name: "Global Teams", icon: Globe },
  ];

  return (
    <section
      className="py-6 sm:py-10 md:py-16 border-b border-[#092948]/15 bg-[#F9F1E7]"
      aria-label="Target Sectors"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <p className="font-caps-label text-[#316A7E] text-[0.68rem] sm:text-xs tracking-[0.2em] mb-4 sm:mb-8 text-start">
          Trusted by teams building what&apos;s next
        </p>

        {/* 5 Sectors Grid with balanced mobile alignment */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-4 items-center">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className="flex items-center gap-2 sm:gap-3 py-1 sm:py-2 px-1.5 sm:px-3 group last:col-span-2 sm:last:col-span-1 last:justify-start"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#092948]/20 flex items-center justify-center text-[#092948] group-hover:border-[#316A7E] group-hover:text-[#316A7E] transition-colors flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-wide text-[#092948]/90">
                  {sector.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
