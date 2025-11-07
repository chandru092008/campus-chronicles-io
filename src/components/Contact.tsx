import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to learn more about admissions, programs, or campus life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="bg-background" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="bg-background" />
              </div>
              <div>
                <Input placeholder="Subject" className="bg-background" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={5} className="bg-background" />
              </div>
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Address</div>
                    <div className="text-muted-foreground">
                      123 University Avenue<br />
                      Education District<br />
                      City, State 12345
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <div className="text-muted-foreground">
                      +1 (555) 123-4567<br />
                      Admissions: +1 (555) 123-4568
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <div className="text-muted-foreground">
                      info@excellencecollege.edu<br />
                      admissions@excellencecollege.edu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-lg p-8 shadow-lg text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="mb-6">
                Start your journey with Excellence College today. Our admissions team is ready to guide you through the application process.
              </p>
              <Button size="lg" variant="secondary" className="w-full">
                Start Your Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
