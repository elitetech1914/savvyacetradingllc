"use client";

import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How secure is Flowline?",
    answer:
      "Flowline stores data encrypted at rest and in transit, and we follow industry best practices for access control and auditing.",
  },
  {
    question: "Can I integrate my existing tools?",
    answer:
      "Yes — Flowline offers a growing list of integrations and a public API so you can connect your current stack quickly.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most customers start seeing measurable improvements within days. Exact timing depends on your dataset and workflows.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "We provide email and chat support during business hours, plus priority support plans for enterprise customers.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes — try Flowline free for 14 days. No credit card required to get started.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 px-6 lg:px-20 bg-linear-to-b from-white to-[#fbf6fb]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl lg:text-5xl font-bold tracking-tight text-[#5a3760] leading-tight mb-12">
          What&apos;s often asked
          <br />
          about us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact card */}
          <div className="flex flex-col items-start justify-end h-full">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-[#483953] font-semibold">Have more questions?</p>
                <p className="text-sm text-[#8a6d8f] max-w-xs">
                  Contact our support team with any questions you may have.
                </p>
              </div>
            </div>

            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md px-6 py-3 shadow-md text-[#6b4a71] font-medium border border-white">
              Contact Us
            </button>

            <div className="mt-12 text-sm text-[#a385a9]">
              <p>
                Or email us at <span className="text-[#483953] font-medium">support@erstechnologies.com</span>
              </p>
            </div>
          </div>

          {/* Right: Accordion - smoother & slower animations */}
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`relative max-w-[500px] rounded-2xl bg-white/80 p-5 lg:p-6 shadow-[0_8px_20px_-8px_rgba(120,86,129,0.15)] border border-white transition-all duration-700 ease-[cubic-bezier(.22,.9,.39,1)] overflow-hidden ${isOpen ? "max-h-[320px]" : "max-h-[90px]"}`}
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-base lg:text-lg text-[#5a3760] font-medium">
                      {faq.question}
                    </span>

                    <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#e8dff0] shadow-sm">
                      <svg
                        className={`w-5 h-5 text-[#7c5aa0] transform transition-transform duration-700 ease-[cubic-bezier(.22,.9,.39,1)] ${isOpen ? "rotate-180" : "rotate-0"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  {/* Content: animate opacity + translate for smooth feel */}
                  <div
                    aria-hidden={!isOpen}
                    className={`mt-4 text-[#6f4f73] text-sm leading-relaxed transition-all duration-700 ease-[cubic-bezier(.22,.9,.39,1)] transform ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                    style={{ willChange: 'opacity, transform' }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Accessibility: respect prefers-reduced-motion */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-all, .transition-transform {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
