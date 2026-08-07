const collections = [
  {
    title: "Feminine Collection",
    description:
      "Soft florals, roses, peonies and elegant scents designed to celebrate femininity.",
    image: "🌸",
    bg: "bg-[#F6E8EA]",
  },
  {
    title: "Masculine Collection",
    description:
      "Bold, confident fragrances with rich woods, oud and sophisticated depth.",
    image: "🖤",
    bg: "bg-[#F5EFE2]",
  },
  {
    title: "Lavender Collection",
    description:
      "Luxury purple-inspired fragrances wrapped in elegance and charm.",
    image: "💜",
    bg: "bg-[#EDE7FA]",
  },
];

export default function Collections() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20 text-center">
          <p className="mb-4 tracking-[0.4em] uppercase text-[#B8860B]">
            Explore
          </p>

          <h2 className="text-6xl text-[#2D2D2D]">
            Signature Collections
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Discover fragrances inspired by elegance, confidence and timeless luxury.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className={`${collection.bg} rounded-[40px] p-10 transition duration-500 hover:-translate-y-3 hover:shadow-2xl`}
            >
              <div className="mb-8 text-6xl">
                {collection.image}
              </div>

              <h3 className="mb-4 text-3xl">
                {collection.title}
              </h3>

              <p className="mb-8 text-gray-600">
                {collection.description}
              </p>

              <button className="rounded-full border border-[#D4AF37] px-6 py-3 text-[#B8860B]">
                Explore Collection
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
