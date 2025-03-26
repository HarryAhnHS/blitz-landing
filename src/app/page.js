"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ViralBoost } from "./components/ViralBoost";
import { Targets } from "./components/Targets";
import { Roll } from './components/Roll';
import { DetailedFeatures } from './components/DetailedFeatures';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Hero />
      {/* <Features /> */}
      <DetailedFeatures />
      <ViralBoost />
      <Targets data-aos="fade-up" />
      <Roll />
    </main>
  );
}