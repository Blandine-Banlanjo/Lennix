import Link from "next/link";

const collections = [
  {
    name: "Women",
    description: "Floral. Radiant. Irresistible.",
    href: "/shop?category=women",
    background:
      "linear-gradient(135deg, #F6E8EA 0%, #E8B7C8 55%, #E7DCC5 100%)",
    accent: "#76251C",
    number: "01",
  },
  {
    name: "Men",
    description: "Bold. Refined. Magnetic.",
    href: "/shop?category=men",
    background:
      "linear-gradient(135deg, #352218 0%, #5B0B0F 65%, #76251C 100%)",
    accent: "#E7DCC5",
    number: "02",
  },
  {
    name: "Unisex",
    description: "Distinctive. Balanced. Unforgettable.",
    href: "/shop?category=unisex",
    background:
      "linear-gradient(135deg, #D8C8E8 0%, #B88FA9 55%, #E7DCC5 100%)",
    accent: "#5B315D",
    number: "03",
  },
  {
    name: "Gift Sets",
    description: "Beautifully chosen. Perfectly presented.",
    href: "/shop?category=gift-set",
    background:
      "linear-gradient(135deg, #E7DCC5 0%, #FCF8F2 50%, #76251C 150%)",
    accent: "#5B0B0F",
    number: "04",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-lennix-cream px-8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-lennix-gold-deep">
            Explore LenniX
          </p>

          <h2 className="text-4xl leading-tight text-lennix-espresso md:text-5xl lg:text-6xl">
            Find Your
            <span className="lennix-gold-text"> Signature </span>
            World
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-lennix-charcoal/65 md:text-lg">
            Discover fragrances created for every mood, personality,
            occasion, and unforgettable moment.
          </p>
        </div>

        {/* Collection grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: collection.background,
              }}
            >
              {/* Decorative glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl transition duration-700 group-hover:scale-125" />

              {/* Number */}
              <div
                className="absolute right-8 top-8 text-xs font-medium tracking-[0.25em] opacity-70"
                style={{ color: collection.accent }}
              >
                {collection.number}
              </div>

              {/* Decorative circle */}
              <div
                className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border opacity-20 transition duration-700 group-hover:scale-110"
                style={{
                  borderColor: collection.accent,
                }}
              />

              <div className="relative flex h-full min-h-[380px] flex-col justify-end p-8 md:p-10">
                <div className="max-w-md">
                  <p
                    className="mb-3 text-xs uppercase tracking-[0.3em]"
                    style={{ color: collection.accent }}
                  >
                    Collection
                  </p>

                  <h3
                    className="text-4xl md:text-5xl"
                    style={{ color: collection.accent }}
                  >
                    {collection.name}
                  </h3>

                  <p
                    className="mt-4 text-sm leading-6 md:text-base"
                    style={{
                      color: collection.accent,
                      opacity: 0.8,
                    }}
                  >
                    {collection.description}
                  </p>

                  <div
                    className="mt-7 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em]"
                    style={{ color: collection.accent }}
                  >
                    Discover Collection

                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}