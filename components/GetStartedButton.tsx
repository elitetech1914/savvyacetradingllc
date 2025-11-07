"use client";

import React from "react";
import Link from "next/link";

type Props = {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: React.ReactNode;
};

export default function GetStartedButton({ href, onClick, className = "", children = "Get Started for Free" }: Props) {
  // fixed-height button so hover/background don't shift vertically
  // - wrapper uses inline-flex + items-center + h-8 so content always vertically centered
  // - text uses leading-none to avoid baseline nudges
  // - icon is same height as button (h-8 w-8) so it doesn't change size on hover
  const base = `group inline-flex items-center h-8 rounded-full bg-gradient-to-r from-[#a7d8ff] via-[#c9a7ff] to-[#c08bff] shadow-sm ring-1 ring-white/20 px-3 ${className}`;

  const textClass = `text-white text-sm font-medium leading-none select-none transition-colors duration-200 group-hover:text-[#6b46ff]`;

  const iconClass = `ml-2 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white/10 ring-0 transition-colors duration-200 group-hover:bg-white group-hover:text-[#6b46ff]`;

  const inner = (
    <span className="flex items-center h-full">
      <span className={textClass}>{children}</span>
      <span className={iconClass} aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={typeof children === "string" ? children : undefined} className={`${base} focus:outline-none`}> 
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${base} focus:outline-none`}>
      {inner}
    </button>
  );
}

/*
What I changed to fix the vertical-shift / centering issue:
- Use `inline-flex items-center h-8` on the wrapper so the whole button has a fixed height and vertical centering is handled by flexbox.
- Use `leading-none` on the text to avoid baseline/line-height nudges that can move the label slightly when styles change.
- Make the circular icon exactly the same height (`w-8 h-8`) so it doesn't push the layout when its background or border changes on hover.
- Removed any scale transforms / overlays that used origin-based scaling which previously caused the apparent upward shift.

If the button still appears off in your layout, it may be affected by parent vertical alignment (e.g. placed inside text that uses `align-baseline`). In that case add `align-middle` to the button's wrapper or make sure the parent uses `flex`/`items-center`.

Want a pixel-perfect tweak? Tell me: the exact font-size (px) you're using and whether the button is inside a line of text or in a centered block — I'll tune `h-8`, `text-sm`, and `px-3` to match.
*/