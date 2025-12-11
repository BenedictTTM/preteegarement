"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        console.log("Submitted:", formState);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[70] p-4"
                    >
                        <div className="bg-[#0a0a0a] border border-white/20 p-8 md:p-12 relative overflow-hidden">
                            {/* Decorative Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                            >
                                [CLOSE]
                            </button>

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2">
                                    Comm Link
                                </h2>
                                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-8">
                                    // Establish secure connection
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-widest text-white/60">
                                            Identity
                                        </label>
                                        <input
                                            type="text"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/20 py-2 text-white font-mono placeholder:text-white/20 focus:outline-none focus:border-white transition-colors rounded-none"
                                            placeholder="ENTER NAME"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-widest text-white/60">
                                            Frequency
                                        </label>
                                        <input
                                            type="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full bg-transparent border-b border-white/20 py-2 text-white font-mono placeholder:text-white/20 focus:outline-none focus:border-white transition-colors rounded-none"
                                            placeholder="ENTER EMAIL"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-widest text-white/60">
                                            Transmission
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full bg-transparent border border-white/20 p-3 text-white font-mono placeholder:text-white/20 focus:outline-none focus:border-white transition-colors rounded-none resize-none"
                                            placeholder="ENTER MESSAGE :: DATA..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-neutral-200 transition-colors mt-4"
                                    >
                                        Send Transmission
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
