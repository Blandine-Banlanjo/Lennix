import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-lennix-cream pt-20">
      {/* Decorative burgundy glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-lennix-velvet-crimson/10 blur-3xl" />

      {/* Decorative blush glow */}
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[30rem] w-[30rem] rounded-full bg-lennix-blush/70 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-8 py-20 lg:grid-cols-2">
        {/* Copy */}
        <div className="relative z-10">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-lennix-gold-deep">
            Luxury Fragrance House
          </p>

          <h1 className="mb-7 max-w-3xl text-6xl leading-[0.95] text-lennix-espresso lg:text-8xl">
            Discover
            <br />

            <span className="lennix-gold-text">
              Your Signature
            </span>

            <br />

            Scent
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-lennix-charcoal/70">
            Experience premium perfume oils inspired by
            elegance, confidence, romance, and timeless
            luxury.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-lennix-gold px-8 py-4 font-medium text-white shadow-lg shadow-lennix-gold/20 transition duration-300 hover:-translate-y-1 hover:bg-lennix-gold-deep"
            >
              Shop Collection
            </Link>

            <Link
              href="/#about"
              className="rounded-full border border-lennix-gold/60 bg-white/60 px-8 py-4 text-lennix-gold-deep backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-lennix-velvet-crimson hover:text-lennix-velvet-crimson"
            >
              Discover LenniX
            </Link>
          </div>

          {/* Brand accents */}
          <div className="mt-14 flex items-center gap-4">
            <span className="h-px w-16 bg-lennix-gold/60" />

            <span className="text-xs uppercase tracking-[0.3em] text-lennix-velvet-crimson">
              Crafted for unforgettable impressions
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex min-h-[520px] items-center justify-center">
          {/* Burgundy glow */}
          <div className="absolute h-[30rem] w-[30rem] rounded-full bg-lennix-velvet-crimson/10 blur-3xl" />

          {/* Champagne glow */}
          <div className="absolute h-80 w-80 rounded-full bg-lennix-champagne/40 blur-3xl" />

          <div className="relative z-10 rounded-[50%] border border-lennix-gold/20 bg-white/40 p-8 shadow-2xl shadow-lennix-espresso/10 backdrop-blur-sm">
            <Image
              src="/logo-light.png"
              alt="LenniX Perfumes"
              width={450}
              height={450}
              className="relative object-contain"
              priority
            />
          </div>

          {/* Floating luxury accent */}
          <div className="absolute right-4 top-20 hidden rounded-full border border-lennix-gold/30 bg-white/70 px-5 py-3 text-xs uppercase tracking-[0.2em] text-lennix-velvet-crimson shadow-lg backdrop-blur-md md:block">
            Romance
          </div>

          <div className="absolute bottom-20 left-4 hidden rounded-full border border-lennix-lavender/50 bg-white/70 px-5 py-3 text-xs uppercase tracking-[0.2em] text-lennix-plum shadow-lg backdrop-blur-md md:block">
            Essence
          </div>
        </div>
      </div>
    </section>
  );
}