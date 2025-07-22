import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuickServices from "@/components/sections/QuickServices";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SuccessStories from "@/components/sections/SuccessStories";
import RequestForm from "@/components/sections/RequestForm";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuickServices />
        <HowItWorks />
        <WhyChooseUs />
        <SuccessStories />
        <RequestForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
