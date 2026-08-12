import Hero from "@/components/home/Hero";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyLenniX from "@/components/home/WhyLenniX";
import Newsletter from "@/components/home/Newsletter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FeaturedCollections />

        <FeaturedProducts />

        <WhyLenniX />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}