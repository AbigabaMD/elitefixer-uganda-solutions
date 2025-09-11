import { Button } from "@/components/ui/button";
import { InquiryDialog } from "./InquiryDialog";
import { MessageSquare, UserCheck, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Submit Your Request",
    description: "Share your needs through our secure inquiry form or contact us directly. We handle everything confidentially."
  },
  {
    icon: UserCheck,
    step: "02", 
    title: "Expert Matching",
    description: "Our team matches you with verified, trusted professionals who specialize in your specific requirements."
  },
  {
    icon: Settings,
    step: "03",
    title: "Seamless Execution",
    description: "We coordinate all aspects of the service delivery, keeping you informed throughout the process."
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Quality Assurance",
    description: "Every service is completed to our exacting standards with full accountability and satisfaction guarantee."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
            How EliteFixers Works
          </h2>
          <p className="text-xl text-muted-foreground">
            A streamlined process designed for busy professionals who value 
            their time and expect exceptional results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                {/* Step indicator with connecting line */}
                <div className="relative mb-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elite">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                    {step.step}
                  </div>
                  {/* Connecting line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-full w-full h-0.5 bg-border hidden lg:block"></div>
                  )}
                </div>

                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-bold">Ready to Experience Elite Service?</h3>
            <p className="mb-8 text-muted-foreground">
              Join hundreds of satisfied clients who trust EliteFixers for their most important needs.
            </p>
            <InquiryDialog />
          </div>
        </div>
      </div>
    </section>
  );
};