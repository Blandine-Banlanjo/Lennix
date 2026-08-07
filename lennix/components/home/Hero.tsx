import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative animate-pulse">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-8 lg:grid-cols-2">
        <div>
          <p className="mb-4 uppercase tracking-[0.4em] text-[#b8860b]">
            Luxury Fragrance House
          </p>

          <h1 className="mb-6 text-6xl leading-tight text-[#2d2d2d] lg:text-7xl">
            Discover
            <br />
            Your Signature
            <br />
            Scent
          </h1>

          <p className="mb-10 max-w-lg text-lg leading-8 text-gray-600">
            Experience premium perfume oils inspired by elegance,
            confidence, and timeless luxury.
          </p>

          <div className="flex gap-4">
            <button className="rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-white transition hover:scale-105">
              Shop Collection
            </button>

            <button className="rounded-full border border-[#d4af37] px-8 py-4 text-[#b8860b]">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-[#f6e8ea] blur-3xl" />

          <Image
            src="/logo-light.png"
            alt="LenniX"
            width={450}
            height={450}
            className="relative"
            priority
          />
        </div>
      </div>
    </section>
  );
}