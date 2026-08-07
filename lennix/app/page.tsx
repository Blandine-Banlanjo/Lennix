import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections";
import BestSellers from "@/components/home/BestSellers";
import WhyLennix from "@/components/home/WhyLennix";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <BestSellers />
      <WhyLennix />
      <Newsletter />
      <Footer />
    </>
  );
}