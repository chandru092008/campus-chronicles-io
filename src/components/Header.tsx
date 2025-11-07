import { Phone, MapPin } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";

const Header = () => {
  return (
    <header className="bg-white border-b border-border py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={collegeLogo} alt="Madras Engineering College" className="h-12 w-12" />
          <div>
            <h2 className="text-xl font-bold text-primary uppercase tracking-tight">Madras</h2>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Engineering College</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-6">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
            <div className="text-xs font-semibold">TNEA Code</div>
            <div className="text-xl font-bold">1203</div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Phone className="w-4 h-4" />
              <span>+91 70020 80020</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
              <MapPin className="w-4 h-4" />
              <span>Chennai, India</span>
            </div>
          </div>
        </div>

        {/* Mobile Contact */}
        <div className="flex md:hidden bg-primary text-primary-foreground px-3 py-1.5 rounded text-sm font-semibold">
          TNEA: 1203
        </div>
      </div>
    </header>
  );
};

export default Header;
