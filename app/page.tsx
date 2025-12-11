"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]); // Parallax effect
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // GSAP animations for entrance
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
    );

    tl.fromTo(
      ".hero-subtext",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=1"
    );

    // Video parallax
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
        scale: 1.1,
      });
    }
  }, []);

  return (
    <main ref={containerRef} className="relative w-full min-h-[200vh] bg-background">
      {/* Hero Section */}
      <section className="relative h-[140vh] w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Vignette/Overlay */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://cdn.coverr.co/videos/coverr-walking-in-a-dark-hallway-4364/1080p.mp4" type="video/mp4" />
            {/* Fallback/Placeholder video - dark, moody, cinematic */}
          </video>
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-20 flex flex-col items-center text-center mix-blend-difference"
        >
          <h1
            ref={textRef}
            className="text-[12vw] md:text-[180px] font-extralight leading-none tracking-tighter text-text select-none"
          >
            KÆST
          </h1>
          <p className="hero-subtext mt-8 text-lg md:text-2xl font-light tracking-[0.2em] text-text/80 uppercase">
            Style Meets Purpose
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-text/50 to-transparent" />
        </motion.div>
      </section>

      {/* Enter CTA - Pinned at bottom of first viewport effectively, or just below */}
      <div className="absolute top-[100vh] left-0 w-full flex justify-center py-20 z-30 pointer-events-none">
        <Link href="/collection" className="pointer-events-auto group flex flex-col items-center gap-4">
          <span className="h-[1px] w-12 bg-text group-hover:bg-accent transition-colors duration-300" />
          <span className="text-sm font-light tracking-widest uppercase text-text group-hover:text-accent transition-colors duration-300">
            Enter
          </span>
        </Link>
      </div>

      {/* Campaign Preview Section */}
      <section className="relative w-full min-h-screen bg-background py-32 px-4 md:px-12 flex flex-col items-center">
        <div className="max-w-[1800px] w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-[3/4] overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1605218427360-36390f8558d3?q=80&w=1587&auto=format&fit=crop"
              alt="KÆST Campaign 01 - Modern African Luxury"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden group md:mt-32">
            <Image
              src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1587&auto=format&fit=crop"
              alt="KÆST Campaign 02 - Timeless Elegance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1584530193960-b4eb6c87081c?q=80&w=1587&auto=format&fit=crop"
              alt="KÆST Campaign 03 - Bold Expression"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Spacer for scroll */}
      <div className="h-[20vh] w-full bg-background" />
    </main>
  );
}
