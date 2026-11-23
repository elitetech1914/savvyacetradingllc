"use client";

import React from "react";
import Link from "next/link";
import {Menu} from "lucide-react";

// Adjust these imports to match where your shadcn UI components live
import { Button } from "@/components/ui/button";
import { DialogTitle } from '@radix-ui/react-dialog';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import BrandWordmark from "@/components/BrandWordmark";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  return (
    <header className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <BrandWordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-brand-ink font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}

          <Link href="#contact" className="ml-2">
            <span
              style={{ boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)" }}
              className="inline-block bg-gradient-to-r from-brand-navy via-brand-teal to-brand-ocean text-white py-2 px-5 rounded-2xl font-semibold"
            >
              Get A Quote
            </span>
          </Link>
        </nav>

        {/* Mobile: sheet trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[90vw] sm:w-[420px] p-5">
              <DialogTitle className="sr-only">Menu</DialogTitle>
              <div className="flex items-center justify-between">
                <BrandWordmark />
                <SheetClose asChild>
                  <Button variant="ghost" aria-label="Close menu">
                  </Button>
                </SheetClose>
              </div>

              <nav className="mt-8 flex flex-col gap-6 text-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link href="#contact" className="mt-3 block">
                  <span className="inline-block w-full text-center py-3 rounded-2xl bg-gradient-to-r from-brand-navy via-brand-teal to-brand-ocean text-white font-semibold">
                    Get A Quote
                  </span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
