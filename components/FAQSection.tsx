"use client";

import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide writing and editing, design and creative work, publishing support, book marketing, AI agent development, web and app development, VR simulations, game development, and UI/UX design.",
  },
  {
    question: "Can I combine services?",
    answer:
      "Yes. Many clients work with us across multiple areas, such as pairing book publishing with marketing, or combining UI/UX design with app development and backend integration.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Yes. We support individual authors, growing businesses, startups, and organizations that need creative, technical, or product development help.",
  },
  {
    question: "How long do projects take?",
    answer:
      "Timelines depend on the service and scope. Smaller design or writing projects can move quickly, while custom apps, AI agents, VR builds, and game development projects usually follow a larger delivery plan.",
  },
  {
    question: "Do you offer custom quotes?",
    answer:
      "Yes. If your project needs a tailored mix of services, we can review your goals and provide a custom quote based on scope, features, and delivery requirements.",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Contact card */}
          <div className="flex flex-col items-start justify-end h-full">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-[#483953] font-semibold">Have more questions?</p>
                <p className="text-sm text-[#8a6d8f] max-w-xs">
                  Contact our team to talk through your project, services, and next steps.
                </p>
              </div>
            </div>

            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md px-6 py-3 shadow-md text-[#6b4a71] font-medium border border-white">
            <a href="#contact" >
              Contact Us
            </a>
            </button>

            <div className="mt-12 text-sm text-[#a385a9]">
              <p>
                Or email us at <span className="text-[#483953] font-medium">support@erstechnologiesllc.com</span>
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
