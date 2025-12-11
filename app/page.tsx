"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import SelectedWorks from "@/components/SelectedWorks";
// import Lenis from 'lenis'; // Assuming Lenis is handled in layout or SmoothScroll component, but double checking integration

export default function Home() {

  useEffect(() => {
    // Page load orchestration if needed
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-background text-foreground selection:bg-accent selection:text-black">
      <Hero />
      <Manifesto />
      <SelectedWorks />

      {/* Footer Spacer / Contact Teaser */}
      <section className="h-[50vh] flex items-center justify-center bg-black">
        <h2 className="text-[10vw] font-black uppercase tracking-tighter text-[#1A1D21] hover:text-white transition-colors duration-500 cursor-pointer">
          Get in Touch
        </h2>
      </section>
    </main>
  );
}
