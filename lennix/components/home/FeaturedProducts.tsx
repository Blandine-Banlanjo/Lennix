import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featuredProducts = products
    .filter((product) => product.featured || product.bestseller)
    .slice(0, 4);

  return (
    <section className="bg-lennix-pearl px-8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-lennix-gold-deep">
              The LenniX Edit
            </p>

            <h2 className="max-w-2xl text-4xl leading-tight text-lennix-espresso md:text-5xl lg:text-6xl">
              Fragrances Worth
              <span className="lennix-gold-text"> Remembering</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-lennix-charcoal/65 md:text-lg">
              Discover the fragrances our customers love most, carefully
              selected from the LenniX collection.
            </p>
          </div>

          <Link
            href="/shop"
            className="w-fit rounded-full border border-lennix-gold/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-lennix-gold-deep transition duration-300 hover:bg-lennix-gold hover:text-white"
          >
            View All Fragrances
          </Link>
        </div>

        {/* Product Grid */}
        {featuredProducts.length > 0 ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-lennix-champagne bg-lennix-cream px-8 py-20 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-lennix-gold-deep">
              Coming Soon
            </p>

            <h3 className="mt-4 text-3xl text-lennix-espresso">
              Our Signature Collection
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-lennix-charcoal/60">
              Our signature LenniX fragrances are being prepared for you.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}