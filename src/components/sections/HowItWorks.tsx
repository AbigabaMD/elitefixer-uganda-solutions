import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Search, CheckCircle, Handshake, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Send,
      number: "01",
      title: "Submit Request",
      description: "Tell us what you need via our form, chat, or call. Be as specific as possible.",
      details: ["Fill out our smart form", "Chat with FixerBot", "Call us directly"]
    },
    {
      icon: Search,
      number: "02", 
      title: "We Search & Verify",
      description: "Our team vets and verifies suitable options based on your requirements.",
      details: ["Professional verification", "Quality checks", "Background validation"]
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "You Choose",
      description: "Review our curated options and select the best fit for your needs.",
      details: ["Detailed comparisons", "Virtual tours available", "Expert guidance"]
    },
    {
      icon: Handshake,
      number: "04",
      title: "We Finalize",
      description: "We help finalize your choice and provide ongoing support throughout the process.",
      details: ["Negotiation support", "Paperwork assistance", "Follow-up service"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How EliteFixers Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple 4-step process gets you from problem to solution faster than ever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-primary/20 z-0 transform translate-x-4">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full"></div>
                  </div>
                )}
                
                <Card className="relative z-10 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-secondary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center justify-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg gap-3 rounded-xl shadow-lg"
            >
              Start Your Request
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg gap-3 rounded-xl"
            >
              Watch How It Works
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Average response time: <span className="font-semibold text-secondary">Under 24 hours</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;