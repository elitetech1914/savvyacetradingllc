import React from "react";

// Tailwind-based FindDevsButton
// Requirements: TailwindCSS configured in your Next.js project.
// This component uses Tailwind utility classes for layout/spacing/colors
// and a small scoped <style jsx> block for the pseudo-elements & keyframes
// that Tailwind doesn't express directly.

export default function FindDevsButton() {
  return (
    <div className="inline-block relative rounded-[30px] p-2 shadow-[inset_0_3px_6px_rgba(0,0,0,0.09)]">
      <button
        type="button"
        aria-label="Find Devs"
        title="Find Devs"
        className={`btn relative flex items-center justify-center px-5 py-3 md:px-6 md:py-3 rounded-[24px] bg-white/95 border border-gray-200 shadow-inner cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all`}
      >
        <svg
          className="btn-svg h-6 w-6 mr-2 ml-6 fill-gray-800 animate-flicker"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
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
        /* Scoped styles for pseudo elements and keyframes not expressible with Tailwind */
        .btn::before {
          content: "";
          position: absolute;
          top: -4px;
          left: -4px;
          width: calc(100% + 8px);
          height: calc(100% + 8px);
          border-radius: calc(24px + 4px);
          pointer-events: none;
          background-image: linear-gradient(0deg, rgba(255,255,255,0.6), rgba(255,255,255,0.25));
          z-index: -1;
          transition: box-shadow 0.4s, filter 0.4s;
          box-shadow: inset 0 -8px 8px -6px rgba(0,0,0,0.02), 1px 1px 1px rgba(255,255,255,0.6);
        }

        .btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background-image: linear-gradient(0deg, rgba(0,0,0,0.02), hsla(275,100%,85%,0.6), transparent);
          opacity: 0;
          transition: opacity 0.4s, filter 0.4s;
        }

        .btn-letter {
          position: relative;
          display: inline-block;
          color: rgba(72,57,83,0.85);
          font-weight: 600;
          letter-spacing: 0.02em;
          animation: letter-anim 2s ease-in-out infinite;
          transition: color 0.4s, text-shadow 0.4s, opacity 0.4s;
        }

        @keyframes letter-anim {
          50% { text-shadow: 0 0 3px rgba(59,130,246,0.12); color: rgba(17,24,39,1); }
        }

        .btn-svg { filter: drop-shadow(0 0 2px rgba(59,130,246,0.06)); transition: fill 0.4s, filter 0.4s, opacity 0.4s; }

        @keyframes flicker { 50% { opacity: 0.5; } }
        .animate-flicker { animation: flicker 2s linear infinite; animation-delay: 0.5s; }

        // .btn:focus::after, .btn:focus-visible::after { opacity: 0.6; filter: brightness(100%); }
        // .btn:active { border-color: rgba(208,199,255,0.9); background-color: rgba(237,236,251,0.6); }
        // .btn:hover::after { opacity: 1; }
        // .btn:hover .btn-svg { fill: hsl(275 100% 35% / 1); filter: drop-shadow(0 0 6px hsl(275 100% 60% / 0.25)); }

        /* stagger animation delays for letters */
        .btn-letter:nth-child(1) { animation-delay: 0s; }
        .btn-letter:nth-child(2) { animation-delay: 0.08s; }
        .btn-letter:nth-child(3) { animation-delay: 0.16s; }
        .btn-letter:nth-child(4) { animation-delay: 0.24s; }
        .btn-letter:nth-child(5) { animation-delay: 0.32s; }
        .btn-letter:nth-child(6) { animation-delay: 0.40s; }
        .btn-letter:nth-child(7) { animation-delay: 0.48s; }
        .btn-letter:nth-child(8) { animation-delay: 0.56s; }
        .btn-letter:nth-child(9) { animation-delay: 0.64s; }

        @media (max-width: 640px) {
          .btn { padding-left: 1rem; padding-right: 1rem; }
        }
      `}</style>
    </div>
  );
}
