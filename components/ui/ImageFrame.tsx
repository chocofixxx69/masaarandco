import React from "react";
import Image from "next/image";

interface ImageFrameProps {
  src: string;
  alt: string;
  aspect?: "16:9" | "16:10" | "4:5" | "4:3" | "1:1" | "21:9";
  focalPoint?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fill?: boolean;
}

export default function ImageFrame({
  src,
  alt,
  aspect = "16:10",
  focalPoint = "center",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ImageFrameProps) {
  const aspectClasses = {
    "16:9": "aspect-video",
    "16:10": "aspect-[16/10]",
    "4:5": "aspect-[4/5]",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]",
  }[aspect];

  return (
    <div
      className={`relative overflow-hidden bg-[#092948]/5 rounded-[2px] ${aspectClasses} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        style={{ objectPosition: focalPoint }}
      />
    </div>
  );
}
