import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { InquiryDialog } from "./InquiryDialog";
import logo from "@/assets/logo.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="EliteFixers" className="h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Services
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Contact
          </a>
        </nav>

        {/* Contact Info & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <a 
              href="tel:+256771210855" 
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              <Phone className="h-4 w-4" />
              <span>+256 771 210855</span>
            </a>
            <a 
              href="https://wa.me/256754774150" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm hover:text-green-600 transition-smooth"
            >
              <MessageCircle className="h-4 w-4 text-green-600" />
              <span className="text-muted-foreground">WhatsApp</span>
            </a>
          </div>
          <InquiryDialog />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <a href="#services" className="block text-sm font-medium text-foreground hover:text-primary">
              Services
            </a>
            <a href="#how-it-works" className="block text-sm font-medium text-foreground hover:text-primary">
              How It Works
            </a>
            <a href="#testimonials" className="block text-sm font-medium text-foreground hover:text-primary">
              Testimonials
            </a>
            <a href="#contact" className="block text-sm font-medium text-foreground hover:text-primary">
              Contact
            </a>
            <div className="pt-4 border-t space-y-3">
              <a 
                href="tel:+256771210855" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>+256 771 210855</span>
              </a>
              <a 
                href="https://wa.me/256754774150" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-green-600"
              >
                <MessageCircle className="h-4 w-4 text-green-600" />
                <span className="text-muted-foreground">WhatsApp</span>
              </a>
              <InquiryDialog />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};