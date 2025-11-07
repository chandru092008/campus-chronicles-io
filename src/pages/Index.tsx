import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MovingCards from "@/components/MovingCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MovingCards />
      <Footer />
    </div>
  );
};

export default Index;
