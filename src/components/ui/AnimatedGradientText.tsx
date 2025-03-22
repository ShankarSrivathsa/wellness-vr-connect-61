
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  animation?: "pulse" | "flow" | "static";
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  className,
  animation = "flow",
}) => {
  const getGradientStyles = () => {
    switch (animation) {
      case "pulse":
        return "bg-clip-text text-transparent bg-gradient-to-r from-wellness-600 to-accent animate-pulse-soft";
      case "flow":
        return "bg-clip-text text-transparent bg-gradient-to-r from-wellness-600 via-accent to-wellness-500 bg-size-200 animate-gradient-move";
      case "static":
        return "bg-clip-text text-transparent bg-gradient-to-r from-wellness-600 to-accent";
      default:
        return "bg-clip-text text-transparent bg-gradient-to-r from-wellness-600 to-accent";
    }
  };

  return (
    <span className={cn(getGradientStyles(), className)}>
      {children}
    </span>
  );
};

export default AnimatedGradientText;
