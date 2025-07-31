import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InquiryDialog } from "./InquiryDialog";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/256754774150", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+256771210855";
  };

  const handleEmail = () => {
    window.location.href = "mailto:elitefixers.services@gmail.com";
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              Get in Touch with EliteFixers
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to experience premium concierge service? Contact us through your preferred method.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <Card className="group hover:shadow-card transition-smooth border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Call Us</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Speak directly with our team
                </p>
                <div className="space-y-2">
                  <Button variant="outline" onClick={handleCall} className="w-full">
                    +256 771 210855
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = "tel:+256754774150"} className="w-full">
                    +256 754 774150
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="group hover:shadow-card transition-smooth border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">WhatsApp</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Quick chat or voice message
                </p>
                <Button variant="premium" onClick={handleWhatsApp} className="w-full">
                  Chat on WhatsApp
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">
                  +256 754 774150
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group hover:shadow-card transition-smooth border-primary/10 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Email</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Detailed inquiries welcome
                </p>
                <Button variant="outline" onClick={handleEmail} className="w-full mb-2">
                  elitefixers.services@gmail.com
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form CTA */}
          <div className="mt-12 text-center">
            <Card className="mx-auto max-w-md border-primary/20 bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="mb-3 text-xl font-semibold">Prefer a Form?</h3>
                <p className="mb-6 text-primary-foreground/80">
                  Submit your detailed inquiry through our secure form
                </p>
                <InquiryDialog />
              </CardContent>
            </Card>
          </div>

          {/* Business Hours & Location */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Business Hours</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Emergency services only</p>
                <p className="mt-2 font-medium text-primary">24/7 for urgent matters</p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Service Area</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Primary: Kampala & Greater Metropolitan Area</p>
                <p>Extended: All major Uganda cities</p>
                <p>Special: Nationwide coverage available</p>
                <p className="mt-2 font-medium text-primary">International coordination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};