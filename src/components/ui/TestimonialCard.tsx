
import React from "react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  image?: string;
  quote: string;
  rating: number;
  location?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  quote,
  rating,
  location,
  className,
}) => {
  return (
    <GlassCard 
      className={cn("p-6 md:p-8 flex flex-col min-h-[260px]", className)}
      intensity="light"
    >
      <div className="flex items-center space-x-3 mb-5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-wellness-100 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-wellness-500 font-medium text-xl">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-medium text-wellness-800">{name}</h4>
          {location && <p className="text-wellness-500 text-sm">{location}</p>}
        </div>
      </div>

      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={cn(
              "mr-1",
              i < rating
                ? "text-amber-400 fill-amber-400"
                : "text-gray-300"
            )}
          />
        ))}
      </div>

      <blockquote className="text-wellness-700 italic flex-grow">
        "{quote}"
      </blockquote>
    </GlassCard>
  );
};

export default TestimonialCard;
