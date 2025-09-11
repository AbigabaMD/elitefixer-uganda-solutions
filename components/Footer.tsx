import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-8 w-auto">
                <Image src="/images/logo.svg" alt="EliteFixers" width={32} height={32} />
              </div>
              <span className="text-xl font-bold text-foreground">EliteFixers</span>

            </div>
            <p className="mb-4 text-sm text-muted-foreground max-w-md">
              EliteFixers provides premium concierge services for discerning clients in Uganda. 
              We connect you with trusted professionals for seamless, confidential solutions.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+256 771 210855 / +256 754 774150</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>elitefixers.services@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>WhatsApp: +256 754 774150</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Legal Assistance</li>
              <li>Property Services</li>
              <li>Travel Coordination</li>
              <li>Transportation</li>
              <li>Business Support</li>
              <li>Personal Concierge</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-smooth">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-smooth">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-smooth">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            <p>&copy; 2024 EliteFixers. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};