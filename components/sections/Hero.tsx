import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Search } from "lucide-react";
import heroImage from "@/assets/hero-kampala.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We Fix It.
            <br />
            <span className="text-secondary">You Live It.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Find Apartments, Schools, Land, and Services – Fast and Verified across Uganda
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg gap-3 rounded-xl shadow-xl"
            >
              <Search className="w-5 h-5" />
              Submit Request
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg gap-3 rounded-xl backdrop-blur-sm bg-white/10"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with FixerBot
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">24hr</div>
              <div className="text-sm opacity-80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm opacity-80">Verified Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">5★</div>
              <div className="text-sm opacity-80">Client Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;