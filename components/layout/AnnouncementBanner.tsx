"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Sparkles, X } from "lucide-react";

export default function AnnouncementBanner() {
  const pathname = usePathname();
  const [bannerText, setBannerText] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only fetch for public storefront pages
    if (pathname?.startsWith("/admin")) return;

    fetch("/api/admin/settings")
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        if (data?.settings?.company?.announcementEnabled && data?.settings?.company?.announcementBanner) {
          setBannerText(data.settings.company.announcementBanner);
          setVisible(true);
        }
      })
      .catch(() => {});
  }, [pathname]);

  if (!visible || dismissed || pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="bg-[#092948] text-[#F9F1E7] border-b border-[#F9F1E7]/15 py-2 px-4 text-xs font-medium relative z-50 transition-all">
      <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-2 text-center pe-6">
        <Sparkles className="w-3.5 h-3.5 text-[#619AAA] flex-shrink-0 inline" />
        <span className="tracking-wide">{bannerText}</span>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute end-4 top-1/2 -translate-y-1/2 p-1 text-[#F9F1E7]/60 hover:text-[#FFFFFF] cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
