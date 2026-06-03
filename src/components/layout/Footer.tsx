import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/pan-logo.png.asset.json";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-subtle">
      <div className="container py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo.url} alt="PAN Sahayak logo" className="h-12 w-auto object-contain" />
            <div className="font-display font-bold text-lg">PAN Sahayak</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Trusted PAN card assistance for millions of Indians. Fast, secure, and government-compliant.
          </p>
          <div className="flex gap-2 mt-5">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 grid place-items-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/documents" className="hover:text-primary">Documents</Link></li>
            <li><Link to="/inquiry" className="hover:text-primary">Apply Now</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>New PAN Application</li>
            <li>PAN Correction</li>
            <li>PAN Reprint</li>
            <li>e-PAN Download</li>
            <li>PAN-Aadhaar Linking</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +91 79090 27036</li>
            <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-primary" /> support@pansahayak.in</li>
            <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Connaught Place, New Delhi, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PAN Sahayak. All rights reserved. Not affiliated with the Government of India.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
