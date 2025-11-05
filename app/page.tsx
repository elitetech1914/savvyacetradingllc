"use client";
import TestimonialsLightTheme from "@/components/TestimonialsLightTheme";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/Services";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PoweringSection from "@/components/PoweringSection";


export default function Home(){
  return (
  <>
    <HeroSection/>
    <PoweringSection/>
    <ServicesSection/>
    <TestimonialsLightTheme/>
    <Pricing />
    <ContactForm />
    <FAQSection />
    <Footer />
  </>
  );
}