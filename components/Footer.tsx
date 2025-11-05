"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    // simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  };

  return (
    <footer className="bg-gradient-to-t from-[#fbf6fb] to-white border-t border-white/70 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7c5aa0] flex items-center justify-center text-white font-bold">F</div>
              <div>
                <p className="text-lg font-semibold text-[#5a3760]">ERS Technologies</p>
                <p className="text-sm text-[#8a6d8f]">Data-driven automation for teams</p>
              </div>
            </div>

            <p className="text-sm text-[#a385a9] max-w-sm">
              Built with privacy and performance in mind. Reach out to learn how ERS Technologies can help your team move faster.
            </p>

            <div className="flex gap-3 mt-3">
              <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-white/60 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.47c0 .35.04.69.11 1.02A12.8 12.8 0 013 4s-4 9 5 13a13 13 0 01-8 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="#7c5aa0" />
                </svg>
              </a>

              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/60 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 11.03 5 2.5 2.5 0 01-.03-5zM3 9h4v12H3zM9 9h3.6v1.7h.05c.5-.95 1.72-1.95 3.54-1.95C20 8.75 21 11 21 14.6V21h-4v-6.2c0-1.47-.03-3.37-2.06-3.37-2.06 0-2.38 1.6-2.38 3.27V21H9z" fill="#7c5aa0" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row md:items-start justify-around items-center">
            <div>
            <h4 className="text-sm font-semibold text-[#5a3760] mb-4">Product</h4>
            <nav className="flex flex-col gap-2 text-[#7b597f]">
              <Link href="#" className="text-sm hover:text-[#5a3760]">Features</Link>
              <Link href="#" className="text-sm hover:text-[#5a3760]">Integrations</Link>
              <Link href="#" className="text-sm hover:text-[#5a3760]">Pricing</Link>
              <Link href="#" className="text-sm hover:text-[#5a3760]">Docs</Link>
            </nav>
            </div>

            <div>
            <div>
              <h4 className="text-sm font-semibold text-[#5a3760] mb-4">Company</h4>
              <nav className="flex flex-col gap-2 text-[#7b597f]">
                <Link href="#" className="text-sm hover:text-[#5a3760]">About</Link>
                <Link href="#" className="text-sm hover:text-[#5a3760]">Careers</Link>
                <Link href="#" className="text-sm hover:text-[#5a3760]">Contact</Link>
                <Link href="#" className="text-sm hover:text-[#5a3760]">Blog</Link>
              </nav>
              </div>
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-semibold text-[#5a3760] mb-3">Stay in the loop</h4>
            <p className="text-sm text-[#8a6d8f] mb-4 max-w-sm">Get product updates, tips, and early access to new features.</p>

            <form onSubmit={handleSubscribe} className="w-full max-w-sm">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="flex gap-2">
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full px-4 py-2 border border-[#efe6f1] bg-white/80 placeholder:text-[#c9b7d0] focus:outline-none focus:ring-2 focus:ring-[#e8dff0]"
                  placeholder="you@example.com"
                  type="email"
                  aria-label="Email address"
                />

                <button
                  type="submit"
                  className="rounded-full px-4 py-2 bg-[#7c5aa0] text-white font-medium hover:opacity-95 disabled:opacity-60"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Subscribe"}
                </button>
              </div>

              <p className="mt-2 text-sm text-[#6f4f73]">
                {status === "error" && <span className="text-red-500">Please enter a valid email.</span>}
                {status === "success" && <span className="text-green-600">Thanks — you&apos;re subscribed!</span>}
              </p>
            </form>

            <div className="mt-6 text-xs text-[#b39bc0]">
              <p>© {new Date().getFullYear()} ERS Technologies. All rights reserved.</p>
              <div className="flex gap-3 mt-2">
                <Link href="#" className="hover:text-[#5a3760]">Privacy</Link>
                <Link href="#" className="hover:text-[#5a3760]">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
