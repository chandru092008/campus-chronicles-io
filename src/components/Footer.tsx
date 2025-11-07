import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">Excellence College</span>
            </div>
            <p className="text-primary-foreground/80">
              Empowering students to shape their future through excellence in education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-primary-foreground transition-colors">Programs</a></li>
              <li><a href="#campus" className="hover:text-primary-foreground transition-colors">Campus Life</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Financial Aid</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Alumni Network</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Excellence College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
