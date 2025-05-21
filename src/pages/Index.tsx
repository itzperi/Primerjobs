
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import PopularServices from "@/components/PopularServices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ServiceCategories />
      <Features />
      <Testimonials />
      <PopularServices />
      <Footer />
    </div>
  );
};

export default Index;
