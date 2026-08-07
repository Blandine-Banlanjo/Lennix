import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#FCF8F2] px-8 pb-28 pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-[#B8860B]">
            LenniX Perfumes
          </p>

          <h1 className="text-5xl text-[#2D2D2D] md:text-6xl">
            The Collection
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Explore our collection of luxury perfume oils crafted for
            unforgettable moments.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </main>
  );
}