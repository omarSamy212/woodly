import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Suppliers from "@/components/Suppliers";
import ValueProps from "@/components/ValueProps";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Suppliers />
      <ValueProps />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
