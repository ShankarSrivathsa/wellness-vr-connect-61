
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  intensity?: "light" | "medium" | "heavy";
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  intensity = "medium",
}) => {
  const getIntensityClasses = () => {
    switch (intensity) {
      case "light":
        return "bg-white/30 backdrop-blur-md border border-white/30 shadow-sm";
      case "medium":
        return "bg-white/40 backdrop-blur-lg border border-white/40 shadow-md";
      case "heavy":
        return "bg-white/50 backdrop-blur-xl border border-white/50 shadow-lg";
      default:
        return "bg-white/40 backdrop-blur-lg border border-white/40 shadow-md";
    }
  };

  return (
    <div
      className={cn(
        getIntensityClasses(),
        "rounded-2xl",
        hoverEffect && "transition-all duration-500 hover:shadow-xl hover:bg-white/50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
