import React from "react";
import PageHeading from "@/components/ui/PageHeading";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { COMPANY } from "@/content/company";
import { constructMetadata } from "@/lib/metadata";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact & Consultations",
  description:
    "Direct inquiry pathway to Masaar & Co. technology directors in Riyadh, Dubai, and London.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-[#FEEED7] min-h-screen pt-28 md:pt-36 pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <Reveal>
          <PageHeading
            label="Inquiries & Consultations"
            title="Let&apos;s Build What Moves Your Organization Forward"
            italicWord="Forward"
            description="Whether you have an upcoming product initiative, require an architectural review, or wish to explore custom AI capabilities, our leadership is at your disposal."
          />
        </Reveal>

        {/* Structural Baseline */}
        <div className="pathway-rule my-12" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Offices (cols 1-5) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#092948] mb-4">
                Direct Channels
              </h2>
              <p className="text-sm text-[#000000]/75 leading-relaxed mb-6">
                All communications are handled under strict non-disclosure. Technical directors review and respond to each inquiry within one business day.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="flex items-center gap-4 p-4 bg-[#FFFFFF]/70 border border-[#092948]/12 rounded-[2px] text-[#092948] hover:border-[#316A7E] hover:text-[#316A7E] transition-all group"
                >
                  <span className="w-10 h-10 rounded-full border border-[#092948]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#092948] group-hover:text-[#FEEED7] transition-all">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[0.6875rem] font-caps-label text-[#316A7E] block">
                      General &amp; Technical Inquiries
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                      {COMPANY.contact.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-[#FFFFFF]/70 border border-[#092948]/12 rounded-[2px] text-[#092948]">
                  <span className="w-10 h-10 rounded-full border border-[#092948]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[0.6875rem] font-caps-label text-[#316A7E] block">
                      Telephone
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                      {COMPANY.contact.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#FFFFFF]/70 border border-[#092948]/12 rounded-[2px] text-[#092948]">
                  <span className="w-10 h-10 rounded-full border border-[#092948]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[0.6875rem] font-caps-label text-[#316A7E] block">
                      Operating Hours
                    </span>
                    <span className="text-xs sm:text-sm text-[#000000]/75">
                      {COMPANY.contact.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Offices List */}
            <div className="pt-6 border-t border-[#092948]/15 space-y-4">
              <h3 className="font-caps-label text-[#316A7E] text-xs">
                Regional Hubs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {COMPANY.contact.locations.map((loc) => (
                  <div
                    key={loc.city}
                    className="p-4 border-l-2 border-[#316A7E] bg-[#FFFFFF]/40"
                  >
                    <p className="font-serif text-lg text-[#092948] font-medium">{loc.city}</p>
                    <p className="text-xs text-[#000000]/70 mt-1">{loc.address}</p>
                    <p className="text-[0.6875rem] uppercase tracking-wider text-[#316A7E] mt-0.5 font-medium">
                      {loc.country}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (cols 6-12) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
