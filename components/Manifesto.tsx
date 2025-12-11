"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        // Split text logic for word-by-word reveal (simplified for this step)
        const words = textRef.current.innerText.split(" ");
        textRef.current.innerHTML = words
            .map((word) => `<span class="word inline-block opacity-30 transition-opacity duration-300 hover:opacity-100">${word}</span>`)
            .join(" ");

        const wordElements = textRef.current.querySelectorAll(".word");

        gsap.to(wordElements, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: 1,
            },
            opacity: 1,
            stagger: 0.1,
            color: "#E8E9EB",
        });
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-32 px-4 md:px-12 bg-background flex flex-col items-center">
            <div className="max-w-[1400px] w-full">
                <div className="mb-12 flex items-center gap-4">
                    <span className="h-[1px] w-12 bg-accent opacity-50"></span>
                    <span className="text-xs font-mono uppercase text-muted tracking-widest">Manifesto</span>
                </div>

                <p
                    ref={textRef}
                    className="text-4xl md:text-7xl font-sans font-medium tracking-tight text-muted leading-[1.1]"
                >
                    We do not design for the gallery. We design for the flesh. Clothing that is not just worn, but inhabited. A raw dialogue between structure and self, noise and silence. Kæst is the armor for the modern obscure.
                </p>

                <div className="mt-24 flex justify-end">
                    <Link href="/about" className="group flex items-center gap-2 text-sm uppercase tracking-widest text-text hover:text-accent transition-colors duration-300">
                        <span>Read Full Story</span>
                        <MoveUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
