import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, MapPin, Users, Star, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Responses",
      description: "Get matched with verified options within 24 hours. No waiting weeks for results.",
      stat: "< 24hr",
      statLabel: "Response Time"
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Every property, school, and service provider is thoroughly vetted and verified.",
      stat: "100%",
      statLabel: "Verified"
    },
    {
      icon: MapPin,
      title: "Local Expertise", 
      description: "Deep knowledge of Uganda's markets, regulations, and hidden gems you won't find elsewhere.",
      stat: "Uganda",
      statLabel: "Nationwide"
    },
    {
      icon: Users,
      title: "Custom Support",
      description: "Personalized assistance from real humans who understand your unique needs.",
      stat: "1-on-1",
      statLabel: "Personal Service"
    },
    {
      icon: Star,
      title: "Proven Track Record",
      description: "500+ successful placements with 5-star client satisfaction rating.",
      stat: "5★",
      statLabel: "Client Rating"
    },
    {
      icon: Clock,
      title: "Follow-Through",
      description: "We don't disappear after the match. Ongoing support until you're fully settled.",
      stat: "24/7",
      statLabel: "Support"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose EliteFixers?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just another listing site. We're your dedicated problem-solving partners in Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden relative"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Stat Badge */}
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {feature.stat}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {feature.statLabel}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who found their perfect solutions with EliteFixers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                <Users className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">500+</div>
                  <div className="text-sm opacity-80">Happy Clients</div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                <Star className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">5.0★</div>
                  <div className="text-sm opacity-80">Average Rating</div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">100%</div>
                  <div className="text-sm opacity-80">Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;