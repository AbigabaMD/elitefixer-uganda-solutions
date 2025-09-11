import { Button } from "@/components/ui/button";
import { InquiryDialog } from "./InquiryDialog";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Shield className="mr-2 h-4 w-4" />
            Trusted by Uganda's Elite
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            Premium Concierge Services for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Elite Clients</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-xl text-muted-foreground lg:text-2xl">
            Connecting discerning tourists, diaspora, and professionals with trusted local experts 
            for seamless, discreet solutions to your every need in Uganda.
          </p>

          {/* Stats */}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex items-center text-2xl font-bold text-primary">
                <Clock className="mr-2 h-6 w-6" />
                24/7
              </div>
              <p className="text-sm text-muted-foreground">Available Support</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex items-center text-2xl font-bold text-primary">
                <Star className="mr-2 h-6 w-6" />
                98%
              </div>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex items-center text-2xl font-bold text-primary">
                <Shield className="mr-2 h-6 w-6" />
                100%
              </div>
              <p className="text-sm text-muted-foreground">Confidential Service</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <InquiryDialog />
            <Button variant="outline" size="lg" className="gap-2">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-muted-foreground">Trusted by:</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <span>International Travelers</span>
              <span>Uganda Diaspora</span>
              <span>Business Executives</span>
              <span>Property Investors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-80 w-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 h-80 w-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};