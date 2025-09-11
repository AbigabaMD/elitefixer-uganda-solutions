import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, ArrowLeft, Send, MessageCircle, Phone } from "lucide-react";

const RequestForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    budget: [50000],
    urgency: "",
    description: "",
    name: "",
    phone: "",
    email: "",
    contactMethod: "whatsapp"
  });

  const totalSteps = 5;

  const services = [
    "Apartments & Rentals",
    "Land Search & Verification", 
    "School Placement",
    "Personal & Business Logistics",
    "VIP & Custom Services"
  ];

  const locations = [
    "Kampala", "Wakiso", "Mukono", "Entebbe", "Jinja", "Mbarara", 
    "Gulu", "Lira", "Masaka", "Kasese", "Other"
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-4 block">What do you need help with?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card 
                    key={service}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.service === service ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setFormData({...formData, service})}
                  >
                    <CardContent className="p-4">
                      <div className="text-center font-medium">{service}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="location" className="text-lg font-semibold mb-4 block">
                Where are you looking?
              </Label>
              <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-lg font-semibold mb-4 block">
                Tell us more about what you need
              </Label>
              <Textarea 
                placeholder="Describe your requirements, preferences, or any specific details..."
                className="min-h-[120px]"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-4 block">
                Budget Range (UGX)
              </Label>
              <div className="px-4">
                <Slider
                  value={formData.budget}
                  onValueChange={(value) => setFormData({...formData, budget: value})}
                  max={10000000}
                  min={50000}
                  step={50000}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>50K</span>
                  <span className="font-semibold text-primary">
                    {formData.budget[0].toLocaleString()} UGX
                  </span>
                  <span>10M+</span>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-4 block">How urgent is this?</Label>
              <RadioGroup 
                value={formData.urgency} 
                onValueChange={(value) => setFormData({...formData, urgency: value})}
              >
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/30">
                  <RadioGroupItem value="urgent" id="urgent" />
                  <Label htmlFor="urgent" className="flex-1 cursor-pointer">
                    <div className="font-medium">Urgent (ASAP)</div>
                    <div className="text-sm text-muted-foreground">Need it within days</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/30">
                  <RadioGroupItem value="moderate" id="moderate" />
                  <Label htmlFor="moderate" className="flex-1 cursor-pointer">
                    <div className="font-medium">1-2 weeks</div>
                    <div className="text-sm text-muted-foreground">Standard timeline</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/30">
                  <RadioGroupItem value="flexible" id="flexible" />
                  <Label htmlFor="flexible" className="flex-1 cursor-pointer">
                    <div className="font-medium">Flexible</div>
                    <div className="text-sm text-muted-foreground">No rush, best options</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-lg font-semibold mb-2 block">Your Name</Label>
                <Input 
                  id="name"
                  placeholder="Full name"
                  className="h-12"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-lg font-semibold mb-2 block">Phone Number</Label>
                <Input 
                  id="phone"
                  placeholder="+256 xxx xxx xxx"
                  className="h-12"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email" className="text-lg font-semibold mb-2 block">Email (Optional)</Label>
              <Input 
                id="email"
                type="email"
                placeholder="your@email.com"
                className="h-12"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <Label className="text-lg font-semibold mb-4 block">Preferred contact method</Label>
              <RadioGroup 
                value={formData.contactMethod} 
                onValueChange={(value) => setFormData({...formData, contactMethod: value})}
              >
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/30">
                  <RadioGroupItem value="whatsapp" id="whatsapp" />
                  <Label htmlFor="whatsapp" className="flex-1 cursor-pointer flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">Quick responses</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/30">
                  <RadioGroupItem value="call" id="call" />
                  <Label htmlFor="call" className="flex-1 cursor-pointer flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Phone Call</div>
                      <div className="text-sm text-muted-foreground">Direct conversation</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground">Ready to Submit!</h3>
            
            <div className="bg-muted/50 rounded-xl p-6 text-left max-w-md mx-auto">
              <h4 className="font-semibold mb-4">Summary:</h4>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium">Service:</span> {formData.service}</div>
                <div><span className="font-medium">Location:</span> {formData.location}</div>
                <div><span className="font-medium">Budget:</span> {formData.budget[0].toLocaleString()} UGX</div>
                <div><span className="font-medium">Urgency:</span> {formData.urgency}</div>
                <div><span className="font-medium">Contact:</span> {formData.name} ({formData.contactMethod})</div>
              </div>
            </div>

            <Button 
              onClick={handleSubmit}
              size="lg" 
              className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg gap-3 rounded-xl shadow-lg"
            >
              <Send className="w-5 h-5" />
              Submit Request
            </Button>
            
            <p className="text-sm text-muted-foreground">
              We'll get back to you within 24 hours with verified options
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Request a Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us what you need and we'll find the perfect solution for you
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Step {currentStep} of {totalSteps}</span>
                <div className="text-sm text-muted-foreground">
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </div>
              </CardTitle>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 mt-4">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {renderStep()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    className="gap-2 bg-primary hover:bg-primary/90"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;