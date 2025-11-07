import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Your Tech Journey Begins<br />
          <span className="text-foreground">@ Madras Engineering College.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          India's 1st Engineering College Specialising in IT, Computer Science, Data Science, 
          Artificial Intelligence, Machine Learning, Cybersecurity & Business Systems.
        </p>
        <Button size="lg" variant="secondary" className="text-base px-8 py-6 rounded-full">
          Get in Touch
        </Button>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-foreground">
          <div className="text-center">
            <span className="font-bold">Paid Internship</span>
            <span className="ml-1 font-normal">Opportunities</span>
          </div>
          <div className="text-center">
            <span className="font-bold">Modern Lab</span>
            <span className="ml-1 font-normal">Facilities</span>
          </div>
          <div className="text-center">
            <span className="font-bold">Industry-Ready</span>
            <span className="ml-1 font-normal">Curriculum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
