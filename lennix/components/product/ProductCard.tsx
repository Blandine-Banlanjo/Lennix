import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
      <Link href={`/shop/${product.slug}`}>
        <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[32px] bg-[#FCF8F2]">
          {product.bestseller && (
            <span className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#B8860B]">
              Best Seller
            </span>
          )}

          {product.newArrival && (
            <span className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#B8860B]">
              New
            </span>
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ead9d0]/30 opacity-0 transition duration-500 group-hover:opacity-100" />

          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={360}
            className="relative z-10 h-[340px] w-auto object-contain transition duration-700 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="px-2 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={`/shop/${product.slug}`}>
              <h3 className="text-xl text-[#2D2D2D] transition hover:text-[#B8860B]">
                {product.name}
              </h3>
            </Link>

            <p className="mt-2 text-sm text-gray-500">
              LenniX Perfume Oil
            </p>
          </div>

          <p className="font-medium text-[#B8860B]">
            ${product.price}
          </p>
        </div>

        <button className="mt-5 w-full rounded-full border border-[#D4AF37]/50 py-3 text-sm uppercase tracking-[0.15em] text-[#B8860B] transition hover:bg-[#D4AF37] hover:text-white">
          Add to Cart
        </button>
      </div>
    </article>
  );
}