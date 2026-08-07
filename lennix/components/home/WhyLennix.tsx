export default function WhyLennix() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.4em] text-[#B8860B]">
            Why Choose Us
          </p>

          <h2 className="mb-16 text-6xl">
            Crafted for Lasting Impressions
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-3xl bg-[#FCF8F2] p-10">
            <h3 className="mb-4 text-2xl">
              Premium Oils
            </h3>

            <p className="text-gray-600">
              Carefully selected fragrance oils for exceptional quality and longevity.
            </p>
          </div>

          <div className="rounded-3xl bg-[#FCF8F2] p-10">
            <h3 className="mb-4 text-2xl">
              Luxury Packaging
            </h3>

            <p className="text-gray-600">
              Elegant presentation designed to make every purchase memorable.
            </p>
          </div>

          <div className="rounded-3xl bg-[#FCF8F2] p-10">
            <h3 className="mb-4 text-2xl">
              Worldwide Inspiration
            </h3>

            <p className="text-gray-600">
              Scents inspired by timeless luxury and unforgettable experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}