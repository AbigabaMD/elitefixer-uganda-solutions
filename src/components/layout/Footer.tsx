import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const services = [
    "Apartments & Rentals",
    "Land Search & Verification", 
    "School Placement",
    "Personal & Business Logistics",
    "VIP & Custom Services"
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Success Stories", href: "#success" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Refund Policy", href: "#refunds" },
    { label: "Cookie Policy", href: "#cookies" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">EliteFixers</h3>
                <p className="text-sm opacity-80">We Fix It. You Live It.</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Uganda's trusted service connection platform. We help you find apartments, land, schools, and custom solutions quickly and reliably.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:bg-white/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:bg-white/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:bg-white/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:bg-white/20">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-secondary" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Call Us:</p>
                  <p className="font-medium">+256 754 774150</p>
                  <p className="font-medium">+256 771 210855</p>
                  <p className="font-medium">+256 700 416869</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-secondary" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Email:</p>
                  <p className="font-medium">info@elitefixers.ug</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Location:</p>
                  <p className="font-medium">Kampala, Uganda</p>
                  <p className="text-sm text-primary-foreground/80">Serving nationwide</p>
                </div>
              </div>
            </div>

            <Button 
              className="mt-6 bg-secondary hover:bg-secondary/90 text-white gap-2 w-full"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with FixerBot
            </Button>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-sm text-primary-foreground/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="text-sm text-primary-foreground/80">
              Registered with NITA-PDPO | DPPA 2019 Compliant
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-sm text-primary-foreground/80">
            © 2024 EliteFixers. All rights reserved. | Proudly serving Uganda 🇺🇬
          </div>
        </div>
      </div>

      {/* Sticky CTA Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-secondary p-4 z-50 shadow-lg">
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-white text-white hover:bg-white hover:text-secondary"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-white text-secondary hover:bg-white/90"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;