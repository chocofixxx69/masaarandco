"use client";

import React from "react";
import PageHeading from "@/components/ui/PageHeading";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { Mail, Phone, Clock } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { COMPANY } from "@/content/company";

export default function ContactContent() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <Reveal>
          <PageHeading
            label={t.contactPage.heading.label}
            title={t.contactPage.heading.title}
            italicWord={t.contactPage.heading.italicWord}
            description={t.contactPage.heading.description}
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-6 sm:my-12" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Direct Contact Details & Offices (cols 1-5) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-10">
            <div>
              <h2 className="font-serif text-xl sm:text-3xl text-[#092948] mb-2 sm:mb-4">
                {t.contactPage.directChannels.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#000000]/75 leading-relaxed mb-4 sm:mb-6">
                {t.contactPage.directChannels.description}
              </p>

              <div className="space-y-2.5 sm:space-y-4">
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#F9F1E7] border border-[#092948]/12 rounded-[4px] shadow-xs text-[#092948] hover:border-[#316A7E] hover:text-[#316A7E] transition-all group min-h-[44px] sm:min-h-[48px]"
                >
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#092948]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#092948] group-hover:text-[#FFFFFF] transition-all">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <div>
                    <span className="text-[0.625rem] sm:text-[0.6875rem] font-caps-label text-[#316A7E] block">
                      {t.contactPage.directChannels.emailLabel}
                    </span>
                    <span className="text-xs sm:text-base font-medium break-all" dir="ltr">
                      {COMPANY.contact.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#F9F1E7] border border-[#092948]/12 rounded-[4px] shadow-xs text-[#092948] hover:border-[#316A7E] hover:text-[#316A7E] transition-all group min-h-[44px] sm:min-h-[48px]"
                >
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#092948]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#092948] group-hover:text-[#FFFFFF] transition-all">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <div>
                    <span className="text-[0.625rem] sm:text-[0.6875rem] font-caps-label text-[#316A7E] block">
                      {t.contactPage.directChannels.phoneLabel}
                    </span>
                    <span className="text-xs sm:text-base font-medium" dir="ltr">
                      <bdi>{COMPANY.contact.phone}</bdi>
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#F9F1E7] border border-[#092948]/12 rounded-[4px] shadow-xs text-[#092948] min-h-[44px] sm:min-h-[48px]">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#092948]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                  <div>
                    <span className="text-[0.625rem] sm:text-[0.6875rem] font-caps-label text-[#316A7E] block">
                      {t.contactPage.directChannels.hoursLabel}
                    </span>
                    <span className="text-[0.6875rem] sm:text-sm text-[#000000]/75">
                      {t.contactPage.directChannels.hoursValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Offices List: 3-col subgrid on mobile, 1-col on lg */}
            <div className="pt-4 sm:pt-6 border-t border-[#092948]/15 space-y-2 sm:space-y-4">
              <h3 className="font-caps-label text-[#316A7E] text-[0.6875rem] sm:text-xs">
                {t.contactPage.directChannels.hubsLabel}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 sm:gap-4">
                {t.contactPage.directChannels.locations.map((loc) => (
                  <div
                    key={loc.city}
                    className="p-3 sm:p-4 border-s-2 sm:border-s-4 border-[#316A7E] bg-[#F9F1E7] rounded-[2px] shadow-xs text-start"
                  >
                    <p className="font-serif text-base sm:text-lg text-[#092948] font-medium">{loc.city}</p>
                    <p className="text-xs sm:text-xs text-[#000000]/75 mt-1 leading-relaxed">{loc.address}</p>
                    <p className="text-[0.625rem] sm:text-[0.6875rem] uppercase tracking-wider text-[#316A7E] mt-1 font-semibold">
                      {loc.country}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Contact Form (cols 6-12) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
