"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Style_Script } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const lavishly = Style_Script({
    weight: "400",
    subsets: ["latin"],
});

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLDivElement>(null); // Changed to Div as it wraps the video


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (textRef.current) {
            gsap.to(textRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
                y: 200,
                opacity: 0
            });
        }
    }, []);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 500]); // Parallax 50% slower

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[140vh] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Layer - 4K Cinematic Loop */}
            <motion.div
                ref={videoRef}
                style={{ y: y1 }}
                className="absolute inset-0 w-full h-full z-0"
            >
                {/* Fallback to color/gradient if video fails or while loading */}
                <div className="absolute inset-0 bg-neutral-900" />
                <img
                    src="https://images.unsplash.com/photo-1680345575812-2f6878d7d775?w=2400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0"
                    alt="African fabric dress background"
                    className="w-full h-full object-cover opacity-80 contrast-110 brightness-75"
                />
                {/* Vignette & Grain are global, but we add an extra localized darken for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center text-center mix-blend-difference">
                {/* Massive Brand Name */}
                <h1
                    ref={textRef}
                    className={`
                        text-[100px] md:text-[230px] leading-[0.8] tracking-[-0.05em] 
                        ${lavishly.className} uppercase text-white 
                        select-none
                    `}
                >
                    Pretee
                </h1>

                {/* Subline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                    className="mt-12 text-[18px] md:text-[28px] font-light tracking-widest uppercase text-white/80"
                >
                    The Quiet Violence of Perfect Taste
                </motion.p>
            </div>

            {/* Bottom CTA */}
            <motion.div
                className="absolute bottom-12 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <Link href="/collection" className="group flex flex-col items-center gap-2 cursor-pointer">
                    <span className="text-[12px] uppercase tracking-[0.2em] text-white/60 group-hover:text-accent transition-colors duration-500">
                        Enter Archive
                    </span>
                    <span className="w-[1px] h-16 bg-white/20 group-hover:bg-accent transition-colors duration-500" />
                </Link>
            </motion.div>
        </section>
    );
}
