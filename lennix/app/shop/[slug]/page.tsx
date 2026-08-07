import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import AddToCartButton from "@/components/product/AddToCartButton";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FCF8F2] px-6 pb-24 pt-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-10 text-sm text-gray-500">
          <Link
            href="/"
            className="transition hover:text-[#B8860B]"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/shop"
            className="transition hover:text-[#B8860B]"
          >
            Shop
          </Link>

          <span className="mx-2">/</span>

          <span className="text-[#2D2D2D]">
            {product.name}
          </span>
        </div>

        {/* Product */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Product image */}
          <div className="relative flex min-h-[550px] items-center justify-center overflow-hidden rounded-[40px] bg-[#F6E8EA]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ead9d0]/40" />

            {product.bestseller && (
              <span className="absolute left-6 top-6 z-20 rounded-full bg-white/90 px-5 py-2 text-xs uppercase tracking-[0.15em] text-[#B8860B] shadow-sm">
                Best Seller
              </span>
            )}

            {product.newArrival && (
              <span className="absolute left-6 top-6 z-20 rounded-full bg-white/90 px-5 py-2 text-xs uppercase tracking-[0.15em] text-[#B8860B] shadow-sm">
                New Arrival
              </span>
            )}

            <Image
              src={product.image}
              alt={`${product.name} - LenniX Perfume Oil`}
              width={500}
              height={600}
              priority
              className="relative z-10 h-[500px] w-auto object-contain"
            />
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 uppercase tracking-[0.35em] text-[#B8860B]">
              LenniX Perfume Oils
            </p>

            <h1 className="text-5xl text-[#2D2D2D] md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-6 text-2xl font-medium text-[#B8860B]">
              ${product.price.toFixed(2)}
            </p>

            <div className="my-8 h-px bg-[#D4AF37]/20" />

            <p className="text-lg leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Fragrance category */}
            <div className="mt-8">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
                Collection
              </p>

              <span className="inline-block rounded-full bg-white px-5 py-2 capitalize text-[#2D2D2D] shadow-sm">
                {product.category.replace("-", " ")}
              </span>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded-full border border-[#D4AF37]/30 bg-white">
                <button
                  type="button"
                  className="px-5 py-3 text-lg text-[#B8860B]"
                >
                  −
                </button>

                <span className="px-4">
                  1
                </span>

                <button
                  type="button"
                  className="px-5 py-3 text-lg text-[#B8860B]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <AddToCartButton product={product} />

            {/* Buy now */}
            <button
              type="button"
              className="mt-4 w-full rounded-full border border-[#D4AF37] px-8 py-5 font-medium uppercase tracking-[0.15em] text-[#B8860B] transition hover:bg-[#D4AF37] hover:text-white"
            >
              Buy Now
            </button>

            {/* Product promise */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#D4AF37]/20 pt-8 text-center">
              <div>
                <p className="text-sm font-medium text-[#2D2D2D]">
                  Premium
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Fragrance Oil
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#2D2D2D]">
                  Elegant
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Presentation
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-[#2D2D2D]">
                  LenniX
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Signature
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}