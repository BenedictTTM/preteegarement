"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

const IMAGES = [
    "https://images.unsplash.com/photo-1631831831430-8447cf883291?w=1200&auto=format&fit=crop&q=90",
    "https://images.unsplash.com/photo-1661332517932-2d441bfb2994?w=1200&auto=format&fit=crop&q=90",
    "https://images.unsplash.com/photo-1631234764568-996fab371596?w=1200&auto=format&fit=crop&q=90",
    "https://images.unsplash.com/photo-1661256686873-2a7f70f5ea49?w=1200&auto=format&fit=crop&q=90",
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">

            {/* Left Column - Fixed Text (Manifesto) */}
            <div className="w-full md:w-1/2 h-screen sticky top-0 flex flex-col justify-center px-8 md:px-24 border-r border-white/5 z-10 bg-background/80 md:bg-background">
                <div className="max-w-xl">
                    <span className="font-mono text-[10px] text-accent uppercase tracking-widest mb-8 block">
                        [ 001_MANIFESTO ]
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight mb-12">
                        We do not design clothes. We construct <span className="text-accent italic font-serif">identity</span>.
                    </h1>

                    <div className="space-y-8 text-lg font-light text-muted leading-relaxed max-w-md">
                        <p>
                            A raw dialogue between fabric and form, structure and drape. Pretee is the skin for the modern obscure.
                        </p>
                        <p>
                            Born from the silence and the shadows. We drape the chaos of the urban world in precision tailoring. The cut is the creation. We strip away the unnecessary noise to find the structural core.
                        </p>
                    </div>

                    <div className="mt-16 flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-accent/50">
                        <span>EST. 2024</span>
                        <div className="h-[1px] w-12 bg-accent/20" />
                        <span>ACCRA, GH</span>
                    </div>
                </div>
            </div>

            {/* Right Column - Scrolling Imagery */}
            <div className="w-full md:w-1/2 bg-surface">
                <div className="flex flex-col">
                    {IMAGES.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            className="relative w-full aspect-[4/5] md:aspect-square grayscale hover:grayscale-0 transition-all duration-1000"
                        >
                            <Image
                                src={src}
                                alt={`Archive ${i}`}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Grain on images specifically? Or just let global handle it. Let's add a personalized vignette */}
                            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                        </motion.div>
                    ))}

                    {/* Footer integrated into scroll */}
                    <div className="min-h-[50vh] flex items-center justify-center p-12 bg-background border-t border-white/5">
                        <Footer />
                    </div>
                </div>
            </div>

        </main>
    );
}
