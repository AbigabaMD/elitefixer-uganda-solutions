import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "International Business Consultant",
    content: "EliteFixers handled my complex property acquisition seamlessly. Their legal team and local expertise saved me months of hassle. Truly elite service.",
    rating: 5,
    location: "London, UK"
  },
  {
    name: "David K.",
    role: "Uganda Diaspora",
    content: "Moving back to Uganda after 15 years felt overwhelming. EliteFixers managed everything from documentation to finding the perfect home. Exceptional!",
    rating: 5,
    location: "Toronto, Canada"
  },
  {
    name: "Maria L.",
    role: "Tourism Executive",
    content: "For our high-profile client visits, EliteFixers provides unmatched coordination. Discreet, professional, and always exceeding expectations.",
    rating: 5,
    location: "Kampala, Uganda"
  },
  {
    name: "James R.",
    role: "Investment Banker",
    content: "The level of service and attention to detail is remarkable. They handle sensitive matters with complete confidentiality and professionalism.",
    rating: 5,
    location: "Dubai, UAE"
  },
  {
    name: "Christine A.",
    role: "NGO Director",
    content: "From airport transfers to business meetings, EliteFixers ensures everything runs smoothly. They're our trusted partners in Uganda.",
    rating: 5,
    location: "Geneva, Switzerland"
  },
  {
    name: "Michael T.",
    role: "Tech Entrepreneur",
    content: "Quick response, reliable execution, and fair pricing. EliteFixers understands the urgency of business needs and delivers consistently.",
    rating: 5,
    location: "San Francisco, USA"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
            Trusted by Elite Clients Worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover why discerning professionals choose EliteFixers for their most important needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-primary/10">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="mb-6 text-foreground">
                  "{testimonial.content}"
                </blockquote>

                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 text-primary" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div>500+ Successful Projects</div>
            <div>98% Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};