"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  tag: string;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`product-${product.id}`}
      className="relative w-full cursor-pointer group"
      onClick={() => onClick(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface">
        {/* Full Bleed Image with Zoom */}
        <motion.div
          className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Info Reveal Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none mix-blend-difference text-white">

          {/* Top Right Price/Tag - Fades in */}
          <div className="flex justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div className="text-right font-mono text-[10px] uppercase tracking-widest bg-black/50 backdrop-blur-md px-2 py-1">
              <div>{product.tag}</div>
              <div className="text-accent">{product.price}</div>
            </div>
          </div>

          {/* Bottom Title - Fades in */}
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.85]">
              {product.name}
            </h3>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
