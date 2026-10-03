import React from "react";

interface PageHeadingProps {
  label?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function PageHeading({
  label,
  title,
  italicWord,
  description,
  align = "left",
  theme = "light",
  className = "",
}: PageHeadingProps) {
  const isDark = theme === "dark";

  // Split title if italicWord is provided to style the exact word
  let titleContent: React.ReactNode = title;
  if (italicWord && title.includes(italicWord)) {
    const parts = title.split(italicWord);
    titleContent = (
      <>
        {parts[0]}
        <em className={`italic font-normal font-serif ${isDark ? "text-[#619AAA]" : "text-[#316A7E]"}`}>
          {italicWord}
        </em>
        {parts[1]}
      </>
    );
  }

  return (
    <div
      className={`space-y-4 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-4xl"
      } ${className}`}
    >
      {label && (
        <p
          className={`font-caps-label ${
            isDark ? "text-[#619AAA]" : "text-[#316A7E]"
          }`}
        >
          {label}
        </p>
      )}

      <h1
        className={`font-h1 tracking-tight leading-[1.05] ${
          isDark ? "text-[#F9F1E7]" : "text-[#092948]"
        }`}
      >
        {titleContent}
      </h1>

      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            isDark ? "text-[#F9F1E7]/80" : "text-[#000000]/80"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
