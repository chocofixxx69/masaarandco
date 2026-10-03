import React from "react";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  message?: string;
  actionText?: string;
  actionHref?: string;
  theme?: "light" | "dark";
}

export default function EmptyState({
  title = "Projects are being prepared",
  message = "Our latest case studies and architectural implementations are undergoing client verification. Please contact our team for private briefing decks.",
  actionText = "Get In Touch",
  actionHref = "/contact",
  theme = "light",
}: EmptyStateProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`border p-10 md:p-14 text-center my-12 ${
        isDark
          ? "border-[rgba(254,238,215,0.2)] bg-[#092948]"
          : "border-[#092948]/15 bg-[#FFFFFF]/60"
      }`}
    >
      <div className="w-12 h-0.5 bg-[#619AAA] mx-auto mb-6" aria-hidden="true" />
      <h3
        className={`font-serif text-2xl md:text-3xl mb-3 ${
          isDark ? "text-[#FEEED7]" : "text-[#092948]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm md:text-base max-w-lg mx-auto mb-6 leading-relaxed ${
          isDark ? "text-[#FEEED7]/80" : "text-[#000000]/70"
        }`}
      >
        {message}
      </p>
      {actionHref && (
        <Button
          variant={isDark ? "pill-outline" : "pill-dark"}
          href={actionHref}
          arrow="up-right"
        >
          {actionText}
        </Button>
      )}
    </div>
  );
}
