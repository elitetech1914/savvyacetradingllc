import React from "react";

export default function FindDevsButton() {
  return (
    <div className={`btn-wrapper inline-block`}>
      <button
        type="button"
        aria-label="FIND DEVS"
        title="FIND DEVS"
        className="btn px-5 py-3 md:px-6 md:py-3 focus:outline-none"
      >
        <svg
          className="btn-svg"
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

        <div className="txt-wrapper">
          <div className="txt-1">
            <span className="btn-letter">F</span>
            <span className="btn-letter">I</span>
            <span className="btn-letter">N</span>
            <span className="btn-letter">D</span>
            <span className="btn-letter"> </span>
            <span className="btn-letter">D</span>
            <span className="btn-letter">E</span>
            <span className="btn-letter">V</span>
            <span className="btn-letter">S</span>
          </div>
        </div>
      </button>

      <style jsx>{`
        /* Light-theme adaptation of the original button styles */
        .btn-wrapper {
          position: relative;
          display: inline-block;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI",
            Roboto, "Helvetica Neue", Arial;
        }

        .btn {
          --border-radius: 24px;
          --padding: 4px;
          --transition: 0.4s;
          --button-color: #f8fafc; /* neutral light */
          --highlight-color-hue: 275deg; /* blue-ish highlight for light theme */

          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;

          background-color: var(--button-color);

          box-shadow:
            inset 0px 1px 1px rgba(0, 0, 0, 0.04),
            inset 0px 2px 2px rgba(0, 0, 0, 0.03),
            inset 0px 4px 6px rgba(0, 0, 0, 0.02),
            0px 1px 2px rgba(16, 24, 40, 0.04);

          border: solid 1px rgba(17, 24, 39, 0.06);
          border-radius: var(--border-radius);
          cursor: pointer;

          transition:
            box-shadow var(--transition),
            border var(--transition),
            background-color var(--transition);
        }

        .btn::before {
          content: "";
          position: absolute;
          top: calc(0px - var(--padding));
          left: calc(0px - var(--padding));
          width: calc(100% + var(--padding) * 2);
          height: calc(100% + var(--padding) * 2);
          border-radius: calc(var(--border-radius) + var(--padding));
          pointer-events: none;
          background-image: linear-gradient(0deg, rgba(255,255,255,0.6), rgba(255,255,255,0.25));
          z-index: -1;
          transition:
            box-shadow var(--transition),
            filter var(--transition);
          box-shadow:
            0 -8px 8px -6px rgba(0,0,0,0.02) inset,
            1px 1px 1px rgba(255,255,255,0.6),
            2px 2px 2px rgba(255,255,255,0.5),
            -1px -1px 1px rgba(0,0,0,0.02);
        }

        .btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background-image: linear-gradient(0deg,
              rgba(0,0,0,0.02),
              hsl(var(--highlight-color-hue), 100%, 85%),
              hsla(var(--highlight-color-hue), 100%, 85%, 0.6),
              8%,
              transparent);
          background-position: 0 0;
          opacity: 0;
          transition: opacity var(--transition), filter var(--transition);
        }

        .btn-letter {
          position: relative;
          display: inline-block;
          color: rgba(17, 24, 39, 0.75); /* dark text for light theme */
          font-weight: 600;
          letter-spacing: 0.02em;
          animation: letter-anim 2s ease-in-out infinite;
          transition: color var(--transition), text-shadow var(--transition), opacity var(--transition);
        }

        @keyframes letter-anim {
          50% {
            text-shadow: 0 0 3px rgba(59,130,246,0.12);
            color: rgba(17,24,39,1);
          }
        }

        .btn-svg {
          flex-grow: 0;
          height: 24px;
          margin-right: 0.5rem;
          width: 24px;
          fill: #1f2937; /* gray-800 */
          animation: flicker 2s linear infinite;
          animation-delay: 0.5s;
          filter: drop-shadow(0 0 2px rgba(59,130,246,0.06));
          transition: fill var(--transition), filter var(--transition), opacity var(--transition);
        }

        @keyframes flicker {
          50% {
            opacity: 0.5;
          }
        }

        .txt-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 7.5em;
        }

        .txt-1 {
          animation: appear-anim 1s ease-in-out forwards;
          display: flex;
        }

        @keyframes appear-anim {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .btn:focus .btn-letter,
        .btn:focus-visible .btn-letter {
          animation: focused-letter-anim 1s ease-in-out forwards, letter-anim 1.2s ease-in-out infinite;
          animation-delay: 0s, 1s;
        }

        @keyframes focused-letter-anim {
          0%, 100% { filter: blur(0px); transform: none; }
          50% { transform: scale(1.8); filter: blur(6px) brightness(130%) drop-shadow(-12px 4px 8px hsl(var(--highlight-color-hue), 100%, 70%)); }
        }

        .btn:focus::before,
        .btn:focus-visible::before {
          box-shadow:
            0 -8px 12px -6px rgba(0,0,0,0.03) inset,
            0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 85%, 0.25) inset,
            1px 1px 1px rgba(255,255,255,0.8);
        }

        .btn:focus::after,
        .btn:focus-visible::after {
          opacity: 0.6;
          -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
          mask-image: linear-gradient(0deg, #fff, transparent);
          filter: brightness(100%);
        }

        .btn-letter:nth-child(1), .btn:focus .btn-letter:nth-child(1), .btn:focus-visible .btn-letter:nth-child(1) { animation-delay: 0.00s; }
        .btn-letter:nth-child(2), .btn:focus .btn-letter:nth-child(2), .btn:focus-visible .btn-letter:nth-child(2) { animation-delay: 0.08s; }
        .btn-letter:nth-child(3), .btn:focus .btn-letter:nth-child(3), .btn:focus-visible .btn-letter:nth-child(3) { animation-delay: 0.16s; }
        .btn-letter:nth-child(4), .btn:focus .btn-letter:nth-child(4), .btn:focus-visible .btn-letter:nth-child(4) { animation-delay: 0.24s; }
        .btn-letter:nth-child(5), .btn:focus .btn-letter:nth-child(5), .btn:focus-visible .btn-letter:nth-child(5) { animation-delay: 0.32s; }
        .btn-letter:nth-child(6), .btn:focus .btn-letter:nth-child(6), .btn:focus-visible .btn-letter:nth-child(6) { animation-delay: 0.40s; }
        .btn-letter:nth-child(7), .btn:focus .btn-letter:nth-child(7), .btn:focus-visible .btn-letter:nth-child(7) { animation-delay: 0.48s; }
        .btn-letter:nth-child(8), .btn:focus .btn-letter:nth-child(8), .btn:focus-visible .btn-letter:nth-child(8) { animation-delay: 0.56s; }
        .btn-letter:nth-child(9), .btn:focus .btn-letter:nth-child(9), .btn:focus-visible .btn-letter:nth-child(9) { animation-delay: 0.64s; }

        .btn:active {
          border: solid 1px hsla(var(--highlight-color-hue), 100%, 55%, 0.9);
          background-color: hsla(var(--highlight-color-hue), 50%, 92%, 0.6);
        }

        .btn:active::before {
          box-shadow:
            0 -8px 12px -6px rgba(255,255,255,0.9) inset,
            0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 0.8) inset,
            1px 1px 1px rgba(255,255,255,0.85);
        }

        .btn:active::after {
          opacity: 1;
          -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
          mask-image: linear-gradient(0deg, #fff, transparent);
          filter: brightness(160%);
        }

        .btn:active .btn-letter {
          text-shadow: 0 0 1px hsla(var(--highlight-color-hue), 100%, 40%, 0.9);
          animation: none;
        }

        .btn:hover {
          border: solid 1px hsla(var(--highlight-color-hue), 100%, 55%, 0.45);
        }

        .btn:hover::before {
          box-shadow:
            0 -8px 8px -6px rgba(255,255,255,0.9) inset,
            0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 0.35) inset;
        }

        .btn:hover::after {
          opacity: 1;
          -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
          mask-image: linear-gradient(0deg, #fff, transparent);
        }

        .btn:hover .btn-svg {
          fill: hsl(var(--highlight-color-hue) 100% 35% / 1);
          filter: drop-shadow(0 0 6px hsl(var(--highlight-color-hue) 100% 60% / 0.25)) drop-shadow(0 -4px 6px rgba(0,0,0,0.06));
          animation: none;
        }

        /* small responsive tweak */
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
