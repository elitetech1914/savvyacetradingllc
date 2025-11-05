import type { Metadata } from "next";
import { Onest } from 'next/font/google'
import "./globals.css";
import BottomBar from "@/components/BottomBar";

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-inter', // optional CSS variable
  display: 'swap',          // optional, next/font handles good defaults
})

export const metadata: Metadata = {
  title: "ERS Technologies",
  description: "Empowering businesses through innovative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={onest.className}
      >
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
