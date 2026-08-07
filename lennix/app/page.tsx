import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections";
import WhyLennix from "@/components/home/WhyLennix";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <WhyLennix />
      <Footer />
    </>
  );
}