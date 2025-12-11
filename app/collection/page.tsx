// Collection Page - "The Grid"
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Footer from "@/components/Footer";

// Enhanced Dummy Data
const PRODUCTS = [
    { id: "1", name: "Urban Heritage", price: "$850", image: "https://media.istockphoto.com/id/1352677795/photo/shot-of-a-beautiful-young-woman-wearing-traditional-african-clothing-against-an-urban.webp?a=1&b=1&s=612x612&w=0&k=20&c=gWkEDueatWVf3h4ZspYGvct1ttszLgnuTkxSsR6en3g=", description: "Traditional patterns meet urban brutalism.", tag: "OUTERWEAR" },
    { id: "2", name: "Azure Silk Gown", price: "$1200", image: "https://images.unsplash.com/photo-1631234764568-996fab371596?w=1200&auto=format&fit=crop&q=90", description: "Flowing silhouette in deep blue.", tag: "DRESSES" },
    { id: "3", name: "Rose Petal Silhouette", price: "$950", image: "https://images.unsplash.com/photo-1631831831430-8447cf883291?w=1200&auto=format&fit=crop&q=90", description: "Structured warmth for the bold.", tag: "DRESSES" },
    { id: "4", name: "Obsidian Evening", price: "$1100", image: "https://media.istockphoto.com/id/521622910/photo/the-classic-little-black-dress-stylish-and-versatile.webp?a=1&b=1&s=612x612&w=0&k=20&c=jGMpP9Yfhm3nInbcm3EafEO3gkzRaMg_fevHn2rtPkw=", description: "Timeless black elegance.", tag: "CLASSIC" },
    { id: "5", name: "Ceremonial Drape", price: "$1500", image: "https://images.unsplash.com/photo-1661256686873-2a7f70f5ea49?w=1200&auto=format&fit=crop&q=90", description: "White textures for sacred moments.", tag: "BRIDAL" },
    { id: "6", name: "Heritage Weave", price: "$1350", image: "https://images.unsplash.com/photo-1661332517932-2d441bfb2994?w=1200&auto=format&fit=crop&q=90", description: "Intricate traditional craftsmanship.", tag: "BRIDAL" },
];

export default function CollectionPage() {
    const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-0 selection:bg-accent selection:text-black overflow-x-hidden">

            {/* Minimal Header */}
            <div className="mb-32 px-4 md:px-12">
                <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-light tracking-[-0.04em] text-foreground opacity-90">
                    Selected Works
                </h1>
                <div className="mt-8 flex gap-8 text-[10px] font-mono tracking-widest uppercase text-muted">
                    <span>Index: 2024—2025</span>
                    <span>Status: Archive Live</span>
                </div>
            </div>

            {/* Asymmetric Masonry Grid */}
            {/* We simulate masonry with column counts and breaks, or specific grid areas. 
                For true masonry in React without libs, CSS columns are easiest, but let's try a Grid with chaotic classes. 
            */}
            <div className="w-full max-w-[98%] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-y-32 md:gap-x-12">
                {PRODUCTS.map((product, i) => {
                    // Logic for "Chaos":
                    // Mobile: 1 col (default).
                    // Desktop: Variable spans and offsets.
                    // We use `md:col-span-X` and `md:row-span-X` and margins.

                    let className = "relative aspect-[3/4]"; // Default

                    // Simple deterministic chaos based on index
                    if (i % 5 === 0) className += " md:col-span-2 md:row-span-2 md:mt-12"; // Massive entry
                    else if (i % 5 === 1) className += " md:col-span-1 md:mt-0";
                    else if (i % 5 === 2) className += " md:col-span-1 md:mt-32"; // Offset down
                    else if (i % 5 === 3) className += " md:col-span-2 md:mt-12"; // Wide
                    else className += " md:col-span-1 md:mt-24"; // Standard-ish

                    return (
                        <div key={product.id} className={className}>
                            <ProductCard
                                product={product}
                                onClick={(p) => setSelectedProduct(p)}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Footer Area - Minimal */}
            <div className="mt-64 px-12 border-t border-white/5 pt-12">
                <Footer />
            </div>

            {/* Modal */}
            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </main>
    );
}
