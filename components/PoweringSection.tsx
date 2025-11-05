"use client";

import React from "react";
import Image from "next/image";

type Logo = {
  src: string; // path or external url
  alt: string;
  href?: string; // optional link to the vendor
};

type Props = {
  title?: string;
  logos?: Logo[];
  tintColor?: string; // kept for backward-compat but not used by default
};

export default function PoweringSection({
  title = "Powering",
  logos = [
    { src: "/Images/bookpridespublishing.png", alt: "bookpridespublishing" },
    { src: "/Images/Venturebookpublishing.png", alt: "Venturebookpublishing" },
    { src: "/Images/webdesignexperts.png", alt: "webdesignexperts" },
    { src: "/Images/logo-4.png", alt: "Customer 4" },
  ],
}: Props) {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-[#fbf6fb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-[#7c5aa0]">{title}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <a
              key={idx}
              href={logo.href ?? "#"}
              target={logo.href ? "_blank" : undefined}
              rel={logo.href ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center w-full p-4 rounded-lg bg-white/60 shadow-sm transition-transform duration-350 ease-[cubic-bezier(.22,.9,.39,1)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e9dff6]"
              aria-label={logo.alt}
            >
              {/* Colored logo with subtle desaturation and gentle lift on hover */}
              <div className="w-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={64}
                  className="object-contain h-10 sm:h-14 transition-all duration-350 ease-[cubic-bezier(.22,.9,.39,1)] filter saturate-90 hover:saturate-100 hover:brightness-105"
                  priority={idx < 2}
                />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[#a385a9]">Official logos — full color with subtle interactive polish.</p>
      </div>
    </section>
  );
}
