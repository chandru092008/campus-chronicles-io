import { Award, Users, BookOpen } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Students" },
    { icon: BookOpen, value: "150+", label: "Programs" },
    { icon: Award, value: "95%", label: "Graduate Success" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Excellence College
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 50 years, we've been committed to providing world-class education that prepares students for successful careers and meaningful lives.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-lg p-12 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We empower students to become innovative leaders and compassionate citizens through rigorous academics, cutting-edge research opportunities, and a vibrant campus community. Our commitment to excellence in teaching, learning, and service creates an environment where every student can thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
