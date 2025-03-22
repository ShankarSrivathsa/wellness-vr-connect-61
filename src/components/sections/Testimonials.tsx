
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import TestimonialCard from "@/components/ui/TestimonialCard";
import StepIndicator from "@/components/ui/StepIndicator";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "The VR therapy sessions have significantly reduced my anxiety. Being able to receive treatment in my home made all the difference.",
      rating: 5,
      location: "San Francisco, CA"
    },
    {
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "As someone dealing with PTSD, the immersive VR sessions helped me confront my triggers in a controlled, safe environment.",
      rating: 5,
      location: "Seattle, WA"
    },
    {
      name: "Emily Rodriguez",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "The combination of VR and aroma therapy created such a calming experience. I've noticed a huge improvement in my sleep quality.",
      rating: 4,
      location: "Austin, TX"
    },
    {
      name: "David Kim",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "Having the therapist come to my home eliminated the stress of travel. The personalized approach has helped with my depression.",
      rating: 5,
      location: "Chicago, IL"
    },
    {
      name: "Lisa Patel",
      image: "https://randomuser.me/api/portraits/women/48.jpg",
      quote: "The EEG monitoring gave me fascinating insights into my brain activity. It's been instrumental in helping me manage stress.",
      rating: 5,
      location: "Boston, MA"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Calculate visible testimonials in the carousel
  const getVisibleTestimonials = () => {
    const result = [];
    // Get current testimonial and next two
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push({
        ...testimonials[index],
        position: i
      });
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-wellness-50 z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 h-40 w-40 rounded-full bg-wellness-200/30 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-wellness-600 font-medium">Client Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-wellness-800 mt-2 mb-4">
            Transformative Experiences
          </h2>
          <p className="text-wellness-600">
            Hear from our clients about how our VR therapy sessions have positively impacted their mental wellness journey.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Testimonial Carousel */}
          <div className="hidden md:block">
            <div className="relative h-[320px]">
              {visibleTestimonials.map((testimonial, index) => {
                // Position cards based on their index
                let translateX = "0%";
                let scale = 1;
                let opacity = 1;
                let zIndex = 30;
                
                if (testimonial.position === 1) {
                  translateX = "105%";
                  scale = 0.95;
                  opacity = 0.8;
                  zIndex = 20;
                } else if (testimonial.position === 2) {
                  translateX = "210%";
                  scale = 0.9;
                  opacity = 0.6;
                  zIndex = 10;
                }
                
                return (
                  <div
                    key={testimonial.name}
                    className={cn(
                      "absolute top-0 left-0 w-full transform transition-all duration-500 ease-out",
                      isAnimating && "opacity-0"
                    )}
                    style={{
                      transform: `translateX(${translateX}) scale(${scale})`,
                      opacity,
                      zIndex
                    }}
                  >
                    <TestimonialCard 
                      name={testimonial.name}
                      image={testimonial.image}
                      quote={testimonial.quote}
                      rating={testimonial.rating}
                      location={testimonial.location}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden">
            <TestimonialCard 
              name={testimonials[activeIndex].name}
              image={testimonials[activeIndex].image}
              quote={testimonials[activeIndex].quote}
              rating={testimonials[activeIndex].rating}
              location={testimonials[activeIndex].location}
              className="animate-fade-in"
            />
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-wellness-200 text-wellness-600 hover:bg-wellness-50"
              onClick={handlePrev}
            >
              <ArrowLeft size={18} />
            </Button>
            
            <StepIndicator
              steps={testimonials.length}
              currentStep={activeIndex + 1}
            />
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-wellness-200 text-wellness-600 hover:bg-wellness-50"
              onClick={handleNext}
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
