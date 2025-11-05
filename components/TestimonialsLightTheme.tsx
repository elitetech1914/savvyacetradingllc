"use client";

import React from "react";
import { Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsLightTheme() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-[#483953]">
      <section className="max-w-7xl sm:px-6 lg:px-8 sm:py-5 md:py-8 mx-auto pt-8 pr-4 pb-8 pl-4 w-full">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-[#483953]/60">What people say</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-[#483953]">Testimonials</h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[#483953]/60">
            <Quote className="w-4 h-4" />
            <span className="text-sm">Real feedback from teams</span>
          </div>
        </div>

        <div className="relative mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 bg-white">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Row 1 — left to right */}
          <div className="relative py-6 sm:py-8">
            <div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">

              {/* Card: Ava Thompson */}
              <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-gray-200 bg-white p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg" alt="Ava Thompson" className="w-9 h-9 object-cover rounded-full" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-[#483953]">Ava Thompson</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <p className="text-xs text-[#483953]/60">@ava_builds</p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400 text-[10px]" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#483953]/80">Smart Connect took minutes to wire into our stack and saved days of setup. The DX is top-tier.</p>
              </article>

              {/* Card: Noah Patel */}
              <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-gray-200 bg-white p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg" alt="Noah Patel" className="w-9 h-9 object-cover rounded-full" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-[#483953]">Noah Patel</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <p className="text-xs text-[#483953]/60">@noah_ops</p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400 text-[10px]" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#483953]/80">We shipped our analytics revamp 3× faster. The defaults are sensible and secure out of the box.</p>
              </article>

              {/* Card: Maya Kim */}
              <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-gray-200 bg-white p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86a541ae-1b5d-4597-8538-e55c0858f4ff_320w.jpg" alt="Maya Kim" className="w-9 h-9 object-cover rounded-full" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-[#483953]">Maya Kim</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <p className="text-xs text-[#483953]/60">@mayak</p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400 text-[10px]" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#483953]/80">The platform feels invisible—just fast, reliable pipelines and clean reporting.</p>
              </article>

              {/* Card: Ethan Garcia */}
              <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-gray-200 bg-white p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&h=120&fit=crop&crop=faces" alt="Ethan Garcia" className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-[#483953]">Ethan Garcia</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <p className="text-xs text-[#483953]/60">@egarcia</p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400 text-[10px]" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#483953]/80">Observability baked in. We finally trust our metrics for decision-making.</p>
              </article>

              {/* Duplicate items for looping (keep as many as needed) */}
              <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-gray-200 bg-white p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&h=120&fit=crop&crop=faces" alt="Ava Thompson" className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-[#483953]">Ava Thompson</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <p className="text-xs text-[#483953]/60">@ava_builds</p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400 text-[10px]" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#483953]/80">Smart Connect took minutes to wire into our stack and saved days of setup. The DX is top-tier.</p>
              </article>

            </div>
          </div>

          <div className="border-t border-gray-200" />

          {/* Row 2 — right to left */}
          <div className="relative py-6 sm:py-8">
            <div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-rtl_45s_linear_infinite]">

              <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-white border border-gray-200 rounded-2xl p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/358aaa92-ba50-4778-b2a2-7c8f7310e44c_320w.jpg" alt="Priya Singh" className="w-9 h-9 object-cover rounded-full" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-[#483953]">Priya Singh</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <p className="text-xs text-[#483953]/60">@priya_dev</p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400 text-[10px]" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#483953]/80">The automation suite trimmed our runbooks by half. The UI stays out of the way and just works.</p>
              </article>

              <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-white border border-gray-200 rounded-2xl p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg" alt="Leo Martin" className="w-9 h-9 object-cover rounded-full" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-[#483953]">Leo Martin</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <p className="text-xs text-[#483953]/60">@leom</p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400 text-[10px]" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#483953]/80">Enterprise SSO, audit logs, and usage analytics—without extra integration work. Huge win.</p>
              </article>

              <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-white border border-gray-200 rounded-2xl p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec17a2e2-e4f4-4164-b631-f074e640a0c1_320w.jpg" alt="Sofia Alvarez" className="w-9 h-9 object-cover rounded-full" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-[#483953]">Sofia Alvarez</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <p className="text-xs text-[#483953]/60">@sofialabs</p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400 text-[10px]" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#483953]/80">From local dev to prod parity with one connection. Best onboarding we’ve had in years.</p>
              </article>

              <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-gray-200 bg-white p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_320w.jpg" alt="Jackson Lee" className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-[#483953]">Jackson Lee</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <p className="text-xs text-[#483953]/60">@jacksonlee</p>
                    <div className="mt-1 flex items-center gap-0.5 text-yellow-400 text-[10px]" aria-hidden="true"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#483953]/80">Clean API, helpful docs, and thoughtful error messages. It’s the small things.</p>
              </article>

            </div>
          </div>
        </div>

        <style>{`\n          @keyframes marquee-rtl {\n            0% { transform: translateX(0); }\n            100% { transform: translateX(-50%); }\n          }\n\n          @keyframes marquee-ltr {\n            0% { transform: translateX(-50%); }\n            100% { transform: translateX(0); }\n          }\n\n          @media (prefers-reduced-motion: reduce) {\n            .animate-\\[marquee-rtl_45s_linear_infinite\\],\n            .animate-\\[marquee-ltr_45s_linear_infinite\\] {\n              animation: none !important;\n            }\n          }\n        `}</style>
      </section>
    </div>
  );
}
