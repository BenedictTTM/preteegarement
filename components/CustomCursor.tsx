"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoother spring for "magnetic" feel
    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);

        // Global listener for interactive elements
        const updateListeners = () => {
            const interactables = document.querySelectorAll(
                "a, button, input, textarea, [role='button'], .hover-magnetic"
            );
            interactables.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
            return interactables;
        };

        let interactables = updateListeners();

        // Observer for dynamic content
        const observer = new MutationObserver(() => {
            interactables.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            interactables = updateListeners();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        // Hide cursor on idle
        let timeout: NodeJS.Timeout;
        const resetIdleTimer = () => {
            clearTimeout(timeout);
            setIsVisible(true);
            timeout = setTimeout(() => setIsVisible(false), 800);
        };
        window.addEventListener("mousemove", resetIdleTimer);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousemove", resetIdleTimer);
            observer.disconnect();
            clearTimeout(timeout);
            interactables.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-exclusion flex items-center justify-center",
                !isVisible && "opacity-0"
            )}
            style={{
                translateX: cursorX,
                translateY: cursorY,
                x: "-50%",
                y: "-50%",
            }}
        >
            {/* State 1: Dot (Default) */}
            <motion.div
                className="bg-accent rounded-full absolute"
                animate={{
                    width: isHovered ? 4 : 8,
                    height: isHovered ? 4 : 8,
                    opacity: isHovered ? 0 : 1
                }}
            />

            {/* State 2: Ring (Hover) */}
            <motion.div
                className="border border-accent rounded-full absolute"
                animate={{
                    width: isHovered ? 40 : 0,
                    height: isHovered ? 40 : 0,
                    opacity: isHovered ? 1 : 0,
                    borderColor: isHovered ? "#C8A660" : "transparent"
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            />

            {/* Glow Effect on Hover */}
            <motion.div
                className="absolute bg-accent blur-md rounded-full"
                animate={{
                    width: isHovered ? 40 : 0,
                    height: isHovered ? 40 : 0,
                    opacity: isHovered ? 0.15 : 0,
                }}
            />
        </motion.div>
    );
}
