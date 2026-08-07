import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function BestSellers() {
  const bestSellers = products.filter(
    (product) => product.bestseller
  );

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-[#B8860B]">
            Best Sellers
          </p>

          <h2 className="text-5xl text-[#2D2D2D] md:text-6xl">
            Customer Favorites
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Discover the fragrances our customers return to again and again.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <button className="rounded-full border border-[#D4AF37] px-8 py-4 uppercase tracking-[0.15em] text-[#B8860B] transition hover:bg-[#D4AF37] hover:text-white">
            View All Fragrances
          </button>
        </div>
      </div>
    </section>
  );
}