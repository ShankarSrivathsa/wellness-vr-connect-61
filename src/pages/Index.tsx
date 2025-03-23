
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import UserWellbeing from "@/components/sections/UserWellbeing";
import ServiceCard from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones, Smartphone, Brain } from "lucide-react";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";

const Index: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <Benefits />
        
        <UserWellbeing />
        
        {/* Featured Services Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white z-0" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-xl mx-auto text-center mb-12">
              <span className="text-wellness-600 font-medium">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-wellness-800 mt-2 mb-4">
                Therapy <AnimatedGradientText>Options</AnimatedGradientText> for Every Need
              </h2>
              <p className="text-wellness-600">
                Choose from our range of innovative therapy options, designed to address different aspects of mental wellness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Basic Therapy"
                description="App-based music and aroma guidance for relaxation and stress reduction."
                price="$89"
                duration="60 minutes"
                features={[
                  "Aroma therapy kit included",
                  "Guided meditation app",
                  "Music therapy session",
                  "Take-home relaxation techniques",
                  "Follow-up wellness plan"
                ]}
                icon={<Smartphone size={24} />}
              />
              
              <ServiceCard
                title="VR Therapy"
                description="Immersive virtual reality experiences guided by a certified therapist."
                price="$149"
                duration="90 minutes"
                features={[
                  "Full VR equipment provided",
                  "Customized virtual environments",
                  "Therapist-guided session",
                  "Aroma therapy integration",
                  "Digital progress tracking"
                ]}
                icon={<Headphones size={24} />}
                popular={true}
              />
              
              <ServiceCard
                title="Premium Therapy"
                description="Comprehensive therapy with VR, EEG monitoring, and personalized care."
                price="$219"
                duration="120 minutes"
                features={[
                  "Advanced VR therapy session",
                  "EEG brain activity monitoring",
                  "Personalized therapy protocol",
                  "Complete aroma therapy set",
                  "Detailed progress analysis"
                ]}
                icon={<Brain size={24} />}
              />
            </div>
            
            <div className="text-center mt-12">
              <Button 
                asChild
                className="rounded-full bg-wellness-50 text-wellness-700 hover:bg-wellness-100 px-8"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-wellness-500 to-accent z-0" />
          
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Mental Wellness Journey?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients who have experienced the power of our innovative therapy approach. Book your session today and take the first step towards better mental wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-wellness-600 hover:bg-white/90 px-8"
                >
                  <Link to="/booking">Book Your Session</Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline" 
                  className="rounded-full border-white text-white hover:bg-white/10 px-8"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
