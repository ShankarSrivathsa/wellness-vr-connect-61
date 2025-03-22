
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && textRef.current) {
        const scrollY = window.scrollY;
        // Parallax effect for image
        imageRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
        // Subtle parallax for text
        textRef.current.style.transform = `translateY(${scrollY * 0.02}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-wellness-50 to-white z-0" />
      
      {/* Decorative blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-wellness-100 to-wellness-200 blur-3xl opacity-40 animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 blur-3xl opacity-40 animate-float animation-delay-500" />

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side text content */}
        <div ref={textRef} className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <span className="bg-wellness-50 text-wellness-600 px-4 py-1 rounded-full text-sm font-medium inline-block animate-fade-in">
            Experience the Future of Mental Wellness
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wellness-900 tracking-tight animate-fade-in animation-delay-100">
            Transform Your Mind, <br />
            <AnimatedGradientText animation="flow">
              One Session at a Time
            </AnimatedGradientText>
          </h1>
          
          <p className="text-wellness-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
            Experience VR, EEG, and aroma therapy for improved mental wellness with our trained therapists who come directly to your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
            <Button 
              asChild
              size="lg" 
              className="rounded-full bg-wellness-500 hover:bg-wellness-600 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Link to="/booking">
                Book a Session
                <ArrowRight size={18} />
              </Link>
            </Button>
            
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="rounded-full border-wellness-300 text-wellness-700 hover:bg-wellness-50 px-8"
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Right side image */}
        <div 
          ref={imageRef} 
          className="w-full lg:w-1/2 relative animate-blur-in"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1626179831847-06504dae3f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="VR Therapy Session" 
              className="w-full h-auto rounded-2xl object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-8 -left-8 bg-white rounded-xl p-4 shadow-lg animate-float">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-wellness-100 flex items-center justify-center">
                <span className="text-wellness-600 text-xl">😌</span>
              </div>
              <div>
                <p className="text-wellness-800 font-medium">Stress Reduction</p>
                <p className="text-wellness-500 text-sm">-65% reported</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-4 shadow-lg animate-float animation-delay-500">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-wellness-100 flex items-center justify-center">
                <span className="text-wellness-600 text-xl">🧠</span>
              </div>
              <div>
                <p className="text-wellness-800 font-medium">Mental Clarity</p>
                <p className="text-wellness-500 text-sm">+82% improved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
