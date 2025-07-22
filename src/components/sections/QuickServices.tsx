import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, MapPin, GraduationCap, Truck, Star, ArrowRight } from "lucide-react";

const QuickServices = () => {
  const services = [
    {
      icon: Home,
      title: "Apartments & Rentals",
      description: "Find your perfect home - short-term or long-term housing across Uganda",
      color: "bg-secondary",
      hoverColor: "hover:bg-secondary/90"
    },
    {
      icon: MapPin,
      title: "Land Search",
      description: "Verified land for farming, building, or investment with title verification",
      color: "bg-accent",
      hoverColor: "hover:bg-accent/90"
    },
    {
      icon: GraduationCap,
      title: "School Help",
      description: "Match schools by age, budget, academic level, and special needs",
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90"
    },
    {
      icon: Truck,
      title: "Fix Anything",
      description: "Transport, relocation, furniture sourcing, venues - we handle it all",
      color: "bg-secondary",
      hoverColor: "hover:bg-secondary/90"
    },
    {
      icon: Star,
      title: "VIP Help",
      description: "Urgent, confidential, high-value needs with dedicated Fixer team",
      color: "bg-accent",
      hoverColor: "hover:bg-accent/90"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Can We Fix for You?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From finding your dream home to securing the perfect school placement - we're your trusted problem solvers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.color} ${service.hoverColor} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't See What You Need?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We handle unique requests too! Tell us what you need and we'll make it happen.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg gap-3 rounded-xl shadow-xl"
            >
              Request Custom Fix
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickServices;