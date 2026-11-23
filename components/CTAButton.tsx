import React from "react";

// Light-themed FindDevsButton (Tailwind + scoped styles)
export default function FindDevsButton() {
  return (
    <div className="inline-block relative rounded-[30px] p-2 shadow-[inset_0_3px_6px_rgba(15,118,110,0.06)]">
      <button
        type="button"
        aria-label="Find Devs"
        title="Find Devs"
        className={`btn relative flex items-center justify-center px-5 py-3 md:px-6 md:py-3 rounded-[24px] bg-white/95 border border-brand-line shadow-inner cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-line-strong transition-all`}
      >
        <svg
          className="btn-svg h-6 w-6 mr-2 ml-6 animate-flicker"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
          role="img"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>

        <div className="txt-wrapper relative flex items-center min-w-[7.5rem]">
          <div className="txt-1 flex">
            <span className="btn-letter">F</span>
            <span className="btn-letter">i</span>
            <span className="btn-letter">n</span>
            <span className="btn-letter">d</span>
            <span className="btn-letter"> </span>
            <span className="btn-letter">D</span>
            <span className="btn-letter">e</span>
            <span className="btn-letter">v</span>
            <span className="btn-letter">s</span>
          </div>
        </div>
      </button>

      <style jsx>{`
        /* Outer soft highlight (subtle teal tint) */
        .btn::before {
          content: "";
          position: absolute;
          top: -4px;
          left: -4px;
          width: calc(100% + 8px);
          height: calc(100% + 8px);
          border-radius: calc(24px + 4px);
          pointer-events: none;
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.7),
            color-mix(in srgb, var(--color-brand-sand) 50%, transparent)
          );
          z-index: -1;
          transition: box-shadow 0.4s, filter 0.4s;
          box-shadow: inset 0 -8px 8px -6px rgba(0, 0, 0, 0.02),
            1px 1px 1px rgba(255, 255, 255, 0.6);
        }

        /* Purple wash that appears on hover/focus */
        .btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background-image: linear-gradient(
            0deg,
            color-mix(in srgb, var(--color-brand-teal) 6%, transparent),
            color-mix(in srgb, var(--color-brand-line) 55%, transparent),
            transparent
          );
          opacity: 0;
          transition: opacity 0.25s ease, filter 0.25s ease;
        }

        /* Letters: deep teal text with subtle weight + staggered animation */
        .btn-letter {
          position: relative;
          display: inline-block;
          color: color-mix(in srgb, var(--color-brand-deep) 95%, transparent);
          font-weight: 600;
          letter-spacing: 0.02em;
          animation: letter-anim 2s ease-in-out infinite;
          transition: color 0.25s, text-shadow 0.25s, opacity 0.25s;
        }

        @keyframes letter-anim {
          0% {
            text-shadow: none;
            color: color-mix(in srgb, var(--color-brand-deep) 95%, transparent);
          }
          50% {
            text-shadow: 0 0 8px color-mix(in srgb, var(--color-brand-teal) 18%, transparent);
            color: var(--color-brand-ink);
          }
          100% {
            text-shadow: none;
            color: color-mix(in srgb, var(--color-brand-deep) 95%, transparent);
          }
        }

        /* SVG fill and glow */
        .btn-svg {
          --svg-fill: var(--color-brand-teal);
          fill: var(--svg-fill);
          filter: drop-shadow(0 0 2px color-mix(in srgb, var(--color-brand-deep) 6%, transparent));
          transition: fill 0.25s, filter 0.25s, transform 0.18s, opacity 0.25s;
        }

        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-flicker {
          animation: flicker 2.2s linear infinite;
          animation-delay: 0.5s;
        }

        /* Hover / focus states (teal accents) */
        .btn:hover::after,
        .btn:focus::after,
        .btn:focus-visible::after {
          opacity: 1;
          filter: blur(0.2px);
        }

        .btn:hover .btn-svg,
        .btn:focus .btn-svg {
          fill: var(--color-brand-teal);
          filter: drop-shadow(0 0 8px color-mix(in srgb, var(--color-brand-teal) 24%, transparent));
          transform: translateY(-1px);
        }

        .btn:active {
          border-color: color-mix(in srgb, var(--color-brand-teal) 90%, transparent);
          background-color: color-mix(in srgb, var(--color-brand-mist) 90%, transparent);
          transform: translateY(0.5px);
        }

        /* stagger animation delays for letters */
        .btn-letter:nth-child(1) {
          animation-delay: 0s;
        }
        .btn-letter:nth-child(2) {
          animation-delay: 0.06s;
        }
        .btn-letter:nth-child(3) {
          animation-delay: 0.12s;
        }
        .btn-letter:nth-child(4) {
          animation-delay: 0.18s;
        }
        .btn-letter:nth-child(5) {
          animation-delay: 0.24s;
        }
        .btn-letter:nth-child(6) {
          animation-delay: 0.30s;
        }
        .btn-letter:nth-child(7) {
          animation-delay: 0.36s;
        }
        .btn-letter:nth-child(8) {
          animation-delay: 0.42s;
        }
        .btn-letter:nth-child(9) {
          animation-delay: 0.48s;
        }

        @media (max-width: 640px) {
          .btn {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
