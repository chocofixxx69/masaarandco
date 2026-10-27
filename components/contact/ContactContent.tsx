"use client";

import React from "react";
import PageHeading from "@/components/ui/PageHeading";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { Mail } from "lucide-react";
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
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-[#F9F1E7] border border-[#092948]/12 rounded-[4px] shadow-xs text-[#092948] hover:border-[#316A7E] hover:text-[#316A7E] transition-all group min-h-[48px]"
                >
                  <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#092948]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#092948] group-hover:text-[#FFFFFF] transition-all">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <div>
                    <span className="text-[0.625rem] sm:text-[0.6875rem] font-caps-label text-[#316A7E] block mb-0.5">
                      {t.contactPage.directChannels.emailLabel}
                    </span>
                    <span className="text-sm sm:text-lg font-medium break-all" dir="ltr">
                      {COMPANY.contact.email}
                    </span>
                  </div>
                </a>
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
