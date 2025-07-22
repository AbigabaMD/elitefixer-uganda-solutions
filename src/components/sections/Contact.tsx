import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      details: ["+256 754 774150", "+256 771 210855", "+256 700 416869"],
      action: "Call Now",
      color: "bg-primary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses on WhatsApp",
      details: ["+256 754 774150"],
      action: "Chat on WhatsApp",
      color: "bg-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us your detailed requirements",
      details: ["info@elitefixers.ug"],
      action: "Send Email",
      color: "bg-secondary"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency only" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect solution? Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {method.description}
                        </p>
                        <div className="space-y-1 mb-4">
                          {method.details.map((detail, idx) => (
                            <div key={idx} className="font-medium text-foreground">
                              {detail}
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Location & Hours */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      Kampala, Uganda<br />
                      Serving nationwide across Uganda
                    </p>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <div className="w-full h-48 bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Office Hours</h3>
                </div>
                
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-secondary/10 rounded-xl">
                  <div className="flex items-center gap-2 text-secondary">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">24/7 Emergency Support Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prefer to Chat with FixerBot?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get instant answers to your questions and start your request right away with our AI assistant.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg gap-3 rounded-xl shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chat with FixerBot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;