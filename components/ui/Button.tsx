import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "pill-outline" | "pill-dark" | "pill-light" | "ghost" | "text-arrow";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  arrow?: "up-right" | "right" | "none";
  ariaLabel?: string;
  target?: string;
  rel?: string;
  ariaBusy?: boolean;
}

export default function Button({
  children,
  variant = "pill-outline",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  arrow = "none",
  ariaLabel,
  target,
  rel,
  ariaBusy,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center select-none font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  let variantStyles = "";
  if (variant === "pill-outline") {
    variantStyles =
      "rounded-full border border-[rgba(249,241,231,0.4)] text-[#F9F1E7] bg-transparent hover:bg-[#316A7E] hover:border-[#316A7E] hover:text-[#FFFFFF] active:scale-[0.98] text-[0.9375rem] px-5 py-2.5 focus-ring-dark";
  } else if (variant === "pill-dark") {
    variantStyles =
      "rounded-full border border-[#092948] text-[#092948] bg-transparent hover:bg-[#092948] hover:text-[#F9F1E7] active:scale-[0.98] text-[0.9375rem] px-5 py-2.5 focus-ring-light";
  } else if (variant === "pill-light") {
    variantStyles =
      "rounded-full border border-transparent bg-[#F9F1E7] text-[#092948] hover:bg-[#FFFFFF] active:scale-[0.98] text-[0.9375rem] px-5 py-2.5 font-semibold focus-ring-dark";
  } else if (variant === "ghost") {
    variantStyles =
      "text-sm tracking-wide text-inherit hover:text-[#619AAA] focus-ring-dark py-1";
  } else if (variant === "text-arrow") {
    variantStyles =
      "text-sm tracking-wide text-inherit group/arrow inline-flex items-center gap-1.5 hover:text-[#316A7E] focus-ring-light py-1";
  }

  const iconElement =
    arrow === "up-right" ? (
      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center ml-2 p-0.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
      </span>
    ) : arrow === "right" ? (
      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
    ) : null;

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles} ${className} group`}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        <span>{children}</span>
        {iconElement}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-busy={ariaBusy}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles} ${className} group`}
    >
      <span>{children}</span>
      {iconElement}
    </button>
  );
}
