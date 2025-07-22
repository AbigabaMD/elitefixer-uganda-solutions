import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  
  const stories = [
    {
      name: "Sarah Namubiru",
      location: "Kampala",
      service: "Apartment Search",
      story: "Found my perfect 2-bedroom apartment in Kololo within 3 days. EliteFixers handled all the negotiations and paperwork. Couldn't be happier!",
      rating: 5,
      timeframe: "3 days",
      image: "👩🏿‍💼"
    },
    {
      name: "David Mukasa", 
      location: "Mukono",
      service: "Land Verification",
      story: "They helped me verify and secure 5 acres for my farm. The title verification process was seamless and transparent.",
      rating: 5,
      timeframe: "1 week",
      image: "👨🏿‍🌾"
    },
    {
      name: "Grace Atuhaire",
      location: "Mbarara", 
      service: "School Placement",
      story: "Secured my daughter's placement at the perfect international school just 1 week before term started. Incredible service!",
      rating: 5,
      timeframe: "1 week",
      image: "👩🏿‍🏫"
    },
    {
      name: "James Ocitti",
      location: "Jinja",
      service: "Business Logistics",
      story: "EliteFixers coordinated our entire office relocation - from transport to setup. Professional and efficient throughout.",
      rating: 5,
      timeframe: "2 weeks",
      image: "👨🏿‍💼"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="success" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real clients, real results. See how EliteFixers has transformed lives across Uganda.
          </p>
        </div>

        {/* Featured Story Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden shadow-xl border-0">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-12 text-white relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 opacity-20" />
                
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Client Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm">
                      {stories[currentStory].image}
                    </div>
                  </div>
                  
                  {/* Story Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(stories[currentStory].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
                      "{stories[currentStory].story}"
                    </blockquote>
                    
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div>
                        <div className="font-bold text-lg">{stories[currentStory].name}</div>
                        <div className="opacity-80">{stories[currentStory].location}</div>
                      </div>
                      <div className="hidden md:block w-px h-8 bg-white/30"></div>
                      <div className="text-center">
                        <div className="font-semibold">{stories[currentStory].service}</div>
                        <div className="text-sm opacity-80">Completed in {stories[currentStory].timeframe}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevStory}
              className="rounded-full p-3"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextStory}
              className="rounded-full p-3"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">24hr</div>
            <div className="text-muted-foreground">Avg Response</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5.0★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;