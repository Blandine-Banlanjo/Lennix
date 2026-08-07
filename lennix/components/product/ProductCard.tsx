"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="group">
      <Link
        href={`/shop/${product.slug}`}
        aria-label={`View ${product.name}`}
      >
        <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[32px] bg-[#FCF8F2]">
          <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2">
            {product.bestseller && (
              <span className="rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#B8860B] shadow-sm backdrop-blur-sm">
                Best Seller
              </span>
            )}

            {product.newArrival && (
              <span className="rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#B8860B] shadow-sm backdrop-blur-sm">
                New
              </span>
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#ead9d0]/40 opacity-0 transition duration-500 group-hover:opacity-100" />

          <Image
            src={product.image}
            alt={`${product.name} - LenniX Perfume Oil`}
            width={300}
            height={360}
            priority={product.featured}
            className="relative z-10 h-[340px] w-auto object-contain transition duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="px-2 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <Link href={`/shop/${product.slug}`}>
              <h3 className="truncate text-xl text-[#2D2D2D] transition-colors duration-300 hover:text-[#B8860B]">
                {product.name}
              </h3>
            </Link>

            <p className="mt-2 text-sm text-gray-500">
              LenniX Perfume Oil
            </p>
          </div>

          <p className="shrink-0 font-medium text-[#B8860B]">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-5 w-full rounded-full border border-[#D4AF37]/50 py-3 text-sm uppercase tracking-[0.15em] text-[#B8860B] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}