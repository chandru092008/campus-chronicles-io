import { Card, CardContent } from "@/components/ui/card";
import { Building2, Library, Utensils, Activity } from "lucide-react";

const Campus = () => {
  const facilities = [
    {
      icon: Building2,
      title: "Modern Classrooms",
      description: "State-of-the-art learning spaces with the latest technology"
    },
    {
      icon: Library,
      title: "Research Library",
      description: "Extensive digital and physical resources for your studies"
    },
    {
      icon: Activity,
      title: "Sports Complex",
      description: "World-class facilities for athletics and recreation"
    },
    {
      icon: Utensils,
      title: "Dining Halls",
      description: "Diverse culinary options catering to all dietary needs"
    },
  ];

  return (
    <section id="campus" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Campus Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience a vibrant campus community with world-class facilities, diverse student organizations, and endless opportunities for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border">
              <CardContent className="pt-8">
                <facility.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-lg p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Student Experience</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join over 200 student clubs and organizations. From arts to athletics, leadership to community service, there's something for everyone at Excellence College.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Cultural and international student groups
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Professional development societies
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Competitive sports teams
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Arts and creative collectives
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-xl text-foreground mb-4">Student Organizations</div>
              <div className="text-muted-foreground">Find your community and make lasting connections</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
