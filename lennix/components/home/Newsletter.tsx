export default function Newsletter() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl rounded-[40px] bg-[#FCF8F2] px-8 py-20 text-center shadow-xl">
        <p className="mb-4 uppercase tracking-[0.4em] text-[#B8860B]">
          Exclusive Access
        </p>

        <h2 className="mb-6 text-5xl">
          Join the LenniX Circle
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          Be the first to discover new fragrance launches,
          special offers and luxury gift collections.
        </p>

        <div className="mx-auto flex max-w-xl flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-[#D4AF37]/20 px-6 py-4 outline-none"
          />

          <button className="rounded-full bg-[#D4AF37] px-8 py-4 font-medium text-white transition hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}