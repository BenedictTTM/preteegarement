"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Ticker() {
    const baseVelocity = -5; // Base scroll speed

    return (
        <div className="fixed bottom-0 left-0 w-full z-40 bg-background/80 backdrop-blur-sm border-t border-white/10 overflow-hidden py-2 pointer-events-none mix-blend-difference text-foreground">
            <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex gap-16 animate-marquee"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {/* Content duplicated for seamless loop */}
                    {Array(4).fill(null).map((_, i) => (
                        <div key={i} className="flex gap-16 items-center text-xs font-mono uppercase tracking-widest text-muted">
                            <span>Pretee Archive ©2025</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-gold" />
                            <span>System Status: Optimal</span>
                            <span>[ lat: 51.5074° N, long: 0.1278° W ]</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-gold" />
                            <span>Collection 003: "Raw Structure"</span>
                            <span>Loading Assets...</span>
                        </div>
                    ))}
                </motion.div>
                <div className="hidden">
                    {/* Placeholder for dual marquee structure if needed later */}
                </div>
            </div>
        </div>
    );
}

// Note: standard CSS animation might be smoother for constant velocity than Framer sometimes,
// but Framer allows scroll-velocity linking later if we want.
// For now, using a simple CSS-like keyframe in tailwind config or style would be better for performance,
// using Framer's animate prop for simplicity here.
