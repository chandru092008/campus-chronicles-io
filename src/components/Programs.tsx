import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, FlaskConical, Briefcase, Palette, Stethoscope, Scale } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Laptop,
      title: "Computer Science & IT",
      description: "Cutting-edge technology programs preparing you for the digital future.",
      duration: "4 Years"
    },
    {
      icon: Briefcase,
      title: "Business & Management",
      description: "Develop leadership skills and business acumen for the corporate world.",
      duration: "3-4 Years"
    },
    {
      icon: FlaskConical,
      title: "Engineering",
      description: "Innovative engineering programs across multiple disciplines.",
      duration: "4 Years"
    },
    {
      icon: Stethoscope,
      title: "Health Sciences",
      description: "Comprehensive healthcare education with hands-on clinical experience.",
      duration: "4-5 Years"
    },
    {
      icon: Palette,
      title: "Arts & Humanities",
      description: "Explore creativity and critical thinking in diverse fields.",
      duration: "3-4 Years"
    },
    {
      icon: Scale,
      title: "Law & Legal Studies",
      description: "Rigorous legal education preparing future advocates.",
      duration: "3-5 Years"
    },
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from a wide range of undergraduate and graduate programs designed to match your passions and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-border">
              <CardHeader>
                <program.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Duration: {program.duration}</span>
                  <Button variant="ghost" size="sm" className="text-primary">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="default">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
