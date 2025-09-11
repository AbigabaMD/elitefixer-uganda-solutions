import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Scale, 
  Home, 
  Plane, 
  Car, 
  Briefcase, 
  Heart,
  FileText,
  Users,
  Shield
} from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Legal Assistance",
    description: "Expert legal guidance for contracts, property matters, and business compliance in Uganda.",
    features: ["Contract Review", "Property Documentation", "Business Registration", "Legal Consultations"]
  },
  {
    icon: Home,
    title: "Property & Accommodation",
    description: "Premium property sourcing, Airbnb management, and real estate investment guidance.",
    features: ["Airbnb Bookings", "Property Investment", "Rental Management", "Home Inspections"]
  },
  {
    icon: Plane,
    title: "Travel Coordination",
    description: "Seamless travel planning, airport transfers, and local tour arrangements.",
    features: ["Airport Transfers", "Tour Planning", "Visa Assistance", "Travel Insurance"]
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Reliable vehicle hire, driver services, and logistics coordination.",
    features: ["Car Rentals", "Driver Services", "Logistics", "Emergency Transport"]
  },
  {
    icon: Briefcase,
    title: "Business Services",
    description: "Corporate support, meeting arrangements, and business facilitation.",
    features: ["Meeting Setup", "Office Space", "Business Connections", "Market Research"]
  },
  {
    icon: Heart,
    title: "Personal Concierge",
    description: "Lifestyle management, event planning, and personal assistance services.",
    features: ["Event Planning", "Shopping Services", "Personal Errands", "Emergency Support"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
            Comprehensive Elite Services
          </h2>
          <p className="text-xl text-muted-foreground">
            From legal matters to luxury accommodations, we handle everything 
            with precision and discretion.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-smooth border-primary/10">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Shield className="mr-2 h-3 w-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-muted px-6 py-3">
            <Users className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Custom solutions available for unique requirements
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};