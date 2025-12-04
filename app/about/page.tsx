"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <main className="min-h-screen bg-background flex flex-col md:flex-row">
            {/* Left Column - Fixed Text */}
            <div className="w-full md:w-1/2 h-screen sticky top-0 flex items-center justify-center p-12 md:p-24 border-r border-border/10">
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-serif mb-12 text-text leading-tight">
                        Where style meets purpose.
                    </h1>
                    <div className="space-y-6 text-base md:text-lg font-light text-muted leading-relaxed">
                        <p>
                            At Adagbe Ventures, we believe clothing is more than what you wear — it is who you are, how you feel, and the message you send to the world. Our mission is to create fashion that inspires confidence, celebrates individuality, and elevates everyday living.
                        </p>
                        <p>
                            Born from a passion for quality craftsmanship and timeless design, Adagbe Ventures stands at the crossroads of culture and creativity. We curate and produce clothing that speaks to boldness, comfort, and authenticity.
                        </p>
                        <p>
                            Quality is the foundation of everything we do. From the fabrics we select to the craftsmanship behind every stitch, Adagbe Ventures is committed to delivering apparel that lasts.
                        </p>
                        <p>
                            Welcome to Adagbe Ventures — where style meets purpose, and confidence becomes an everyday experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column - Scrolling Images */}
            <div ref={containerRef} className="w-full md:w-1/2 min-h-[200vh] bg-surface relative overflow-hidden">
                <div className="flex flex-col gap-0">
                    <div className="h-screen w-full relative grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1955&auto=format&fit=crop"
                            alt="Man in traditional African attire with striped headwrap"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="h-screen w-full relative grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=1888&auto=format&fit=crop"
                            alt="Man wearing patterned shirt and headwrap"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="h-screen w-full relative grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1887&auto=format&fit=crop"
                            alt="Young woman with braided hair and red vest"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
