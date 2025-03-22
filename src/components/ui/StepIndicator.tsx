
import React from "react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  steps: number;
  currentStep: number;
  className?: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
  className,
}) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-1.5 rounded-full transition-all duration-300",
            index + 1 <= currentStep
              ? "bg-wellness-500 w-8"
              : "bg-wellness-200 w-4"
          )}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
