
import React from "react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  duration,
  features,
  icon,
  popular = false,
  className,
}) => {
  return (
    <GlassCard 
      className={cn(
        "p-6 transition-all duration-500 relative overflow-hidden", 
        popular && "border-wellness-300 shadow-lg",
        className
      )}
    >
      {popular && (
        <div className="absolute top-5 right-0 bg-accent text-white py-1 px-4 text-xs font-medium transform rotate-0 shadow-md">
          Popular
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="w-12 h-12 rounded-full bg-wellness-100 flex items-center justify-center mb-4 text-wellness-600">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-wellness-800 mb-2">{title}</h3>
          <p className="text-wellness-600 text-sm mb-4">{description}</p>
        </div>
        
        <div className="mb-6">
          <div className="flex items-baseline mb-2">
            <span className="text-2xl font-medium text-wellness-800">{price}</span>
            <span className="text-wellness-600 text-sm ml-1">/ session</span>
          </div>
          <p className="text-wellness-500 text-sm">{duration}</p>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check size={18} className="text-wellness-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-wellness-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          asChild
          className={cn(
            "w-full rounded-full mt-auto", 
            popular 
              ? "bg-wellness-500 hover:bg-wellness-600 text-white" 
              : "bg-wellness-100 hover:bg-wellness-200 text-wellness-700"
          )}
        >
          <Link to="/booking">Book This Service</Link>
        </Button>
      </div>
    </GlassCard>
  );
};

export default ServiceCard;
