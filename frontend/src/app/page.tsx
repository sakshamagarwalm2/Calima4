"use client";

import Herosection from "@/components/Herosection";
import RevealAnimation from "@/components/RevealAnimation";
import Section2 from "@/components/Section2";
import { useEffect } from "react";
import ParallaxHeader from "@/components/ParallaxHeader";
import ParallaxAbout from "@/components/ParallaxAbout";
import ParallaxPortfolio from "@/components/ParallaxPortfolio";
import ParallaxServices from "@/components/ParallaxServices";
import ParallaxFooter from "@/components/ParallaxFooter";

export default function Home() {
  useEffect(() => {
    document.body.style.background = "#0a0a0a";
  }, []);

  return (
    <RevealAnimation>
      <Herosection />
      <Section2 />
      <ParallaxHeader />
      <ParallaxAbout />
      <ParallaxPortfolio />
      <ParallaxServices />
      <ParallaxFooter />
    </RevealAnimation>
  );
}
