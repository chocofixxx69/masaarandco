import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MasaarLogoProps {
  variant?: "cream" | "navy";
  className?: string;
  showLink?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  onClick?: () => void;
}

export default function MasaarLogo({
  variant = "cream",
  className = "",
  showLink = true,
  width = 190,
  height = 70,
  priority = false,
  onClick,
}: MasaarLogoProps) {
  const src = variant === "cream" ? "/brand/masaar-logo-cream.png" : "/brand/masaar-logo-navy.png";

  const content = (
    <span className={`inline-block relative select-none ${className}`}>
      <Image
        src={src}
        alt="Masaar & Co. — مسار"
        width={width}
        height={height}
        priority={priority}
        className="w-auto h-auto object-contain max-h-[80px]"
        style={{
          filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.05))",
        }}
      />
    </span>
  );

  if (showLink) {
    return (
      <Link
        href="/"
        onClick={onClick}
        className="group inline-flex items-center focus-ring-dark transition-opacity duration-200 hover:opacity-90"
        aria-label="Masaar & Co. — Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
