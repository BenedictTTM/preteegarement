"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

// Dummy Data
const PRODUCTS = [
    {
        id: "1",
        name: "Serafina Gown",
        price: "€2,400",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop",
        description: "A floor-length silk gown in deep midnight blue. Featuring a structured bodice and fluid drape, inspired by the night sky over the Savannah.",
    },
    {
        id: "2",
        name: "Zaria Knit Dress",
        price: "€890",
        image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=1887&auto=format&fit=crop",
        description: "Hand-woven cotton blend with intricate patterns. A modern interpretation of traditional weaving techniques, offering comfort and heritage.",
    },
    {
        id: "3",
        name: "Kente Structure",
        price: "€1,100",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1934&auto=format&fit=crop",
        description: "Bold architectural dress utilizing Kente-inspired geometric patterns. A statement piece that bridges the gap between art and fashion.",
    },
    {
        id: "4",
        name: "Obsidian Silk",
        price: "€1,650",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1587&auto=format&fit=crop",
        description: "Pure black silk slip dress with asymmetric detailing. Minimalist luxury defined by the quality of the fabric and the precision of the cut.",
    },
    {
        id: "5",
        name: "Terra Blazer Dress",
        price: "€1,800",
        image: "https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&w=1887&auto=format&fit=crop",
        description: "Earthy tones in a structured blazer dress silhouette. Sharp tailoring meets organic warmth.",
    },
    {
        id: "6",
        name: "Solaris Maxi",
        price: "€1,450",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1946&auto=format&fit=crop",
        description: "Vibrant yellow maxi dress with voluminous sleeves. Capturing the energy of the sun and the joy of movement.",
    },
];

export default function CollectionPage() {
    const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const { items, openCart } = useCart();

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-12">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 max-w-[1800px] mx-auto">
                {PRODUCTS.map((product, index) => (
                    <div
                        key={product.id}
                        className={`${index % 2 === 0 ? "md:mt-0" : "md:mt-32"}`} // Simple offset for masonry feel
                    >
                        <ProductCard
                            product={product}
                            onClick={(p) => setSelectedProduct(p)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </main>
    );
}
