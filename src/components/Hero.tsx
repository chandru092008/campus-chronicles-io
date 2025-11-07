import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Shape Your Future
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Where excellence meets opportunity. Join a community dedicated to innovation, learning, and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" variant="secondary" className="text-lg">
            Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
