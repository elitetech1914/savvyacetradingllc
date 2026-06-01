"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";



const paymentCards = [
  { src: "/card-images/visa.png", alt: "Visa" },
  { src: "/card-images/mastercard.png", alt: "Mastercard" },
  { src: "/card-images/discover.png", alt: "Discover" },
  { src: "/card-images/am-exp.png", alt: "American Express" },
];

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
            
              <div className="object-contain -ml-6">
                <Image src="/images/logo.png" alt="ERS Technologies Logo" width={200} height={200} />
              </div>
            

            <p className="text-sm text-[#a385a9] max-w-sm">
              Built with privacy and performance in mind. Reach out to learn how ERS Technologies can help your team move faster.
            </p>

            <address className="not-italic text-sm text-[#8a6d8f] max-w-sm leading-6">
              3127 E HEATHEROCK CIR
              <br />
              SUGAR LAND, TX 77479-1907
            </address>

            <h4 className="text-sm font-semibold text-[#5a3760] " >We accept</h4>

            <div className="flex items-center gap-2 " aria-label="Accepted payment cards">
              {paymentCards.map((card) => (
                <Image
                  key={card.src}
                  src={card.src}
                  alt={card.alt}
                  width={68}
                  height={36}
                  className="h-10 w-auto rounded-sm"
                />
              ))}
            </div>

            <div className="flex gap-3 mt-3">
              <a href="https://www.facebook.com/erstechnologiesllc/" aria-label="Facebook" className="p-2 rounded-md transition">
                <Facebook size={17} className="text-[#7c5aa0]"/>
              </a>

              <a href="https://www.instagram.com/erstechnologiesllc/" aria-label="Instagram" className="p-2 rounded-md transition">
              <Instagram size={17} className="text-[#7c5aa0]"/>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row md:items-start justify-around items-center max-md:items-start max-md:gap-8">

            <div>
            <div>
              <h4 className="text-sm font-semibold text-[#5a3760] mb-4">Company</h4>
              <nav className="flex flex-col gap-2 items-center text-[#7b597f]">
                <Link href="#services" className="text-sm hover:text-[#5a3760]">Services</Link>
                <Link href="#reviews" className="text-sm hover:text-[#5a3760]">Reviews</Link>
                <Link href="#pricing" className="text-sm hover:text-[#5a3760]">Pricing</Link>
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
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                <Link href="/privacy-policy" className="hover:text-[#5a3760]">Privacy policy</Link>
                <Link href="/sms-privacy-policy" className="hover:text-[#5a3760]">SMS privacy policy</Link>
                <Link href="/refund-policy" className="hover:text-[#5a3760]">Refund policy</Link>
                <Link href="/dispute-chargeback-policy" className="hover:text-[#5a3760]">Dispute / Chargeback policy</Link>
                <Link href="/terms-and-conditions" className="hover:text-[#5a3760]">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
