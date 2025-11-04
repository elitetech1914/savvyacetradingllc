"use client";
import TestimonialsLightTheme from "@/components/TestimonialsLightTheme";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Services";
import Pricing from "@/components/Pricing";



export default function Home(){
  return (
  <>
    <HeroSection/>
    <ServicesSection/>
    <TestimonialsLightTheme/>
    <Pricing />
  </>
  );
}