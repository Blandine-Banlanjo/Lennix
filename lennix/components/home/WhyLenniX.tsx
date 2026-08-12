import Link from "next/link";

export default function WhyLenniX() {
  return (
    <section className="relative overflow-hidden bg-[#F4EEE5] px-6 py-24 text-[#25211F] shadow-[inset_0_18px_60px_rgba(59,41,34,0.06),inset_0_-18px_60px_rgba(59,41,34,0.08)] sm:px-8 lg:py-32">
      {/* Soft Ivory Shadow */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#FFFDF8]/80 blur-3xl" />

      <div className="absolute -bottom-48 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#E7D9CB]/70 blur-3xl" />

      {/* Velvet Crimson Accent */}
      <div className="absolute right-[8%] top-24 hidden h-32 w-32 rounded-full border-2 border-[#641F2B]/15 lg:block" />

      <div className="absolute bottom-24 left-[8%] hidden h-20 w-20 rounded-full border border-[#641F2B]/20 lg:block" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Editorial Content */}
          <div>
            <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.45em] text-[#641F2B]">
              THE LENNIX EXPERIENCE
            </p>

            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#25211F] sm:text-5xl lg:text-6xl xl:text-7xl">
              A fragrance is more than a scent.
            </h2>

            {/* Velvet Crimson Divider */}
            <div className="my-8 h-[3px] w-24 bg-[#641F2B]" />

            <p className="max-w-xl text-lg font-bold leading-8 text-[#3B2922] sm:text-xl">
              It is an impression. A memory. A quiet expression of who
              you are and how you want to be remembered.
            </p>

            <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-[#3B2922] sm:text-lg">
              At Lennix, we believe fragrance should feel personal,
              luxurious, and unforgettable. Every creation is designed
              to become part of your story.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center rounded-full bg-[#641F2B] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFF9F0] shadow-[0_10px_30px_rgba(100,31,43,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B2922] hover:shadow-[0_14px_35px_rgba(59,41,34,0.22)]"
            >
              Discover Our Story
            </Link>
          </div>

          {/* Philosophy Card */}
          <div className="relative">
            <div className="rounded-[2rem] border border-[#3B2922]/15 bg-[#EEE3D6] p-8 shadow-[0_25px_70px_rgba(59,41,34,0.12)] md:p-12">
              <p className="text-center text-xs font-extrabold uppercase tracking-[0.4em] text-[#641F2B]">
                OUR PHILOSOPHY
              </p>

              <div className="my-10 h-[2px] bg-[#641F2B]/20" />

              <div className="space-y-9">
                {/* Elegance */}
                <div className="flex gap-6">
                  <span className="text-sm font-extrabold text-[#641F2B]">
                    01
                  </span>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#25211F] sm:text-2xl">
                      Elegance
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-6 text-[#3B2922] sm:text-base">
                      Refined compositions created to feel effortlessly
                      sophisticated.
                    </p>
                  </div>
                </div>

                {/* Confidence */}
                <div className="flex gap-6">
                  <span className="text-sm font-extrabold text-[#641F2B]">
                    02
                  </span>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#25211F] sm:text-2xl">
                      Confidence
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-6 text-[#3B2922] sm:text-base">
                      Fragrances designed to complement your presence,
                      not overpower it.
                    </p>
                  </div>
                </div>

                {/* Memory */}
                <div className="flex gap-6">
                  <span className="text-sm font-extrabold text-[#641F2B]">
                    03
                  </span>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#25211F] sm:text-2xl">
                      Memory
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-6 text-[#3B2922] sm:text-base">
                      Scents made to linger long after the moment has
                      passed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 h-[2px] bg-[#641F2B]/20" />

              <p className="mt-8 text-center font-serif text-2xl font-bold italic text-[#641F2B] sm:text-3xl">
                Wear the moment. Remember the feeling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}