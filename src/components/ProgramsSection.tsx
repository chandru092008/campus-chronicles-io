import { Button } from "@/components/ui/button";
import cseImg from "@/assets/cse-illustration.png";
import aiImg from "@/assets/ai-illustration.png";
import vrImg from "@/assets/vr-illustration.png";
import itImg from "@/assets/it-illustration.png";
import cyberImg from "@/assets/cyber-illustration.png";
import csbsImg from "@/assets/csbs-illustration.png";

const programs = [
  {
    title: "B.E. in Computer Science & Engineering",
    description: "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
    gradient: "from-[#c8e66b] to-[#a8d93d]",
    image: cseImg,
  },
  {
    title: "B.Tech. in Artificial Intelligence & Data Science",
    description: "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
    gradient: "from-[#ff9999] to-[#ff6b6b]",
    image: aiImg,
  },
  {
    title: "B.E. in Computer Science & Engineering (AI & ML)",
    description: "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
    gradient: "from-[#c299ff] to-[#9966ff]",
    image: vrImg,
  },
  {
    title: "B.Tech. in Information Technology (IT)",
    description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
    gradient: "from-[#d4f542] to-[#b8db2e]",
    image: itImg,
  },
  {
    title: "B.E. in Computer Science & Engineering (Cyber Security)",
    description: "Secure the digital world with advanced cyber security techniques and ethical hacking skills.",
    gradient: "from-[#66b3ff] to-[#3399ff]",
    image: cyberImg,
  },
  {
    title: "B.E. in Computer Science & Business Systems",
    description: "Bridge technology and business with integrated skills in computing, analytics, and enterprise systems.",
    gradient: "from-[#ffaa66] to-[#ff8833]",
    image: csbsImg,
  },
];

const ProgramsSection = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${program.gradient} overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              {/* Arrow decoration */}
              <div className="absolute top-6 right-6 w-12 h-12 opacity-20">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Circular Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                {program.title}
              </h3>
              <p className="text-foreground/80 text-sm mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <Button 
                variant="secondary" 
                size="sm"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                Let's Chat
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
