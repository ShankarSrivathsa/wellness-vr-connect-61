
import React from "react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";
import { Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TherapistCardProps {
  name: string;
  image: string;
  specialties: string[];
  qualifications: string;
  bio: string;
  className?: string;
}

const TherapistCard: React.FC<TherapistCardProps> = ({
  name,
  image,
  specialties,
  qualifications,
  bio,
  className,
}) => {
  return (
    <GlassCard className={cn("overflow-hidden", className)}>
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-wellness-800 mb-1">{name}</h3>
        <p className="text-wellness-600 text-sm mb-3">{qualifications}</p>
        
        <div className="flex flex-wrap mb-4 gap-2">
          {specialties.map((specialty, index) => (
            <span 
              key={index}
              className="bg-wellness-50 text-wellness-600 text-xs px-3 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <p className="text-wellness-700 text-sm mb-6 line-clamp-3">{bio}</p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            className="flex items-center gap-2 justify-center bg-wellness-500 hover:bg-wellness-600 text-white rounded-full"
            size="sm"
          >
            <Link to="/booking">
              <Calendar size={16} />
              <span>Book Session</span>
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 justify-center border-wellness-300 text-wellness-700 hover:bg-wellness-50 rounded-full"
            size="sm"
          >
            <Link to="/contact">
              <Mail size={16} />
              <span>Contact</span>
            </Link>
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default TherapistCard;
