import React from "react";
import CTAButton from "./CTAButton";
import Link from "next/link";
import AuroraBackground from "@/components/AuroraBackground";
import Header from "./Header";
import InfiniteMarquee from "@/components/InfiniteMarquee";

const logos = [
  { src: '/images/adobe-illustrator.png', alt: 'adobe-illustrator', width: 100, height: 100 },
  { src: '/images/Barnes-Noble.png', alt: 'Barnes-Noble', width: 100, height: 100 },
  { src: '/images/figma.svg', alt: 'figma', width: 100, height: 100 },
  { src: '/images/Unity.png', alt: 'Unity', width: 100, height: 100 },
  { src: '/images/unrealengine.png', alt: 'Unreal Engine', width: 100, height: 100 },
  { src: '/images/googleanalytics.png', alt: 'googleanalytics', width: 100, height: 100 },
  { src: '/images/ingramspark.png', alt: 'ingramspark', width: 100, height: 100 },
  { src: '/images/N8n-logo.png', alt: 'N8n', width: 100, height: 100 },
  { src: '/images/nextjs.png', alt: 'nextjs', width: 100, height: 100 },
  { src: '/images/react-native.png', alt: 'react-native', width: 100, height: 100 },
  { src: '/images/wordpress.png', alt: 'wordpress', width: 100, height: 100 },
];


const HeroSection = () => {
  return (
    <section>
      {/* Aurora background behind hero content */}
      <AuroraBackground />
      <div
        className="relative min-h-[700px] m-5 pt-5 rounded-4xl flex flex-col items-center justify-center gap-6 overflow-hidden bg-white"
        style={{ boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)" }}
      >
        <Header />
        {/* Hero content */}
        <h1 className="max-md:text-5xl px-2 relative z-10 text-[#483953] tracking-tighter text-7xl font-medium max-w-3xl text-center mt-36">
          Devs which make your dream a reality
        </h1>
        <p className="relative max-md:text-lg z-10 px-2 text-[#8b6fa0] text-2xl max-w-3xl text-center">
          Our mission is to empower businesses and individuals by harnessing the full
          potential of the digital landscape.
        </p>
      <Link href="#contact" className="relative z-10">
        <CTAButton />
      </Link>
      <InfiniteMarquee
        logos={logos}
        direction="left"
        speed="normal"
        gap={'md'}
      />
      </div>
    </section>
  );
};

export default HeroSection;
