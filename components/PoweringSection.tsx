"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    { src: "/images/bookpridespublishing.png", alt: "bookpridespublishing", href: "https://bookpridespublishing.com" },
    { src: "/images/webdesignexperts.png", alt: "webdesignexperts", href: "https://webdesignexperts.com" },
    { src: "/images/ecomscaling.png?v=2", alt: "Ecom Scaling Agency", href: "https://www.ecomscalingagency.com/" },
    { src: "/images/appdesignlogoblack.png", alt: "appdesignexperts", href: "https://appdesignsexperts.com" },
  ],
}: Props) {
  return (
    <section className="py-12 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#483953]">
            {title}
          </h2>
          <p className="mt-2 text-sm uppercase tracking-wider text-[#7c5aa0]">Trusted by teams worldwide</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <Link
              key={idx}
              href={logo.href ?? "#"}
              target={logo.href ? "_blank" : undefined}
              rel={logo.href ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center w-full p-4 rounded-lg bg-white/60 shadow-sm transition-transform duration-350 ease-[cubic-bezier(.22,.9,.39,1)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e9dff6] max-w-md"
              aria-label={logo.alt}
            >
              {/* Colored logo with subtle desaturation and gentle lift on hover */}
              <div className="w-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={64}
                  className="object-contain h-10 sm:h-14 transition-all duration-350 ease-[cubic-bezier(.22,.9,.39,1)] filter saturate-90 hover:saturate-100 hover:brightness-105 min-w-56"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
