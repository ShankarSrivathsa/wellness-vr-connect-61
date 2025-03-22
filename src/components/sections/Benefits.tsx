
import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Home, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: string;
}

const BenefitItem: React.FC<BenefitProps> = ({ 
  icon, 
  title, 
  description, 
  className,
  delay 
}) => {
  return (
    <GlassCard 
      className={cn(
        "p-6 flex flex-col items-center text-center animate-fade-in", 
        delay,
        className
      )}
      hoverEffect={true}
    >
      <div className="w-14 h-14 rounded-full bg-wellness-100 text-wellness-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-wellness-800 mb-2">{title}</h3>
      <p className="text-wellness-600">{description}</p>
    </GlassCard>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Home size={28} />,
      title: "No Equipment Needed",
      description: "We provide all the necessary VR, EEG, and aroma therapy equipment for your session. Just relax and enjoy.",
      delay: "animation-delay-100"
    },
    {
      icon: <User size={28} />,
      title: "Personalized Therapy Plans",
      description: "Every therapy session is customized to your specific needs, preferences, and wellness goals.",
      delay: "animation-delay-200"
    },
    {
      icon: <Sparkles size={28} />,
      title: "Therapist Comes to Your Home",
      description: "Experience the comfort of therapy in your own space. Our therapists bring the entire setup to you.",
      delay: "animation-delay-300"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-wellness-50/50 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-wellness-600 font-medium">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-wellness-800 mt-2 mb-4">
            Benefits that make a difference
          </h2>
          <p className="text-wellness-600">
            Our innovative approach to mental wellness combines technology and personalized care to deliver an experience unlike any other.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
