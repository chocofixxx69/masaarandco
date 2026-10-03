import React from "react";
import Button from "./Button";

interface EditorialBlockProps {
  label?: string;
  heading: string;
  italicWord?: string;
  paragraph: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function EditorialBlock({
  label,
  heading,
  italicWord,
  paragraph,
  ctaText,
  ctaHref,
  className = "",
}: EditorialBlockProps) {
  let headingContent: React.ReactNode = heading;
  if (italicWord && heading.includes(italicWord)) {
    const parts = heading.split(italicWord);
    headingContent = (
      <>
        {parts[0]}
        <em className="italic font-normal font-serif text-[#316A7E]">
          {italicWord}
        </em>
        {parts[1]}
      </>
    );
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {label && (
          <p className="font-caps-label text-[#316A7E] mb-6">
            {label}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Display Heading (cols 1-6) */}
          <div className="lg:col-span-6">
            <h2 className="font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#092948] leading-[1.05] tracking-tight">
              {headingContent}
            </h2>
          </div>

          {/* Right Column: Paragraph with hairline vertical rule (cols 7-12) */}
          <div className="lg:col-span-6 lg:pl-10 relative">
            {/* Hairline vertical rule per PRD §5.B */}
            <div
              className="hidden lg:block absolute left-0 top-1 bottom-1 w-[1px] bg-[#092948]/20"
              aria-hidden="true"
            />

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[#092948] font-normal leading-relaxed max-w-[55ch]">
                {paragraph}
              </p>

              {ctaText && ctaHref && (
                <div className="pt-2">
                  <Button variant="pill-dark" href={ctaHref} arrow="up-right">
                    {ctaText}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
