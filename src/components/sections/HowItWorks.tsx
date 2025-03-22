
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import StepIndicator from "@/components/ui/StepIndicator";
import { Calendar, Clock, Clipboard, MapPin } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps: Step[] = [
    {
      id: 1,
      title: "Book Your Session",
      description: "Choose your preferred therapy type, select a convenient date and time, and complete your booking online.",
      icon: <Calendar size={24} />,
      image: "https://images.unsplash.com/photo-1616531770192-6eaea74c2456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Fill Pre-Session Questionnaire",
      description: "Complete a short assessment to help us understand your needs and customize your therapy experience.",
      icon: <Clipboard size={24} />,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Therapist Arrives at Your Home",
      description: "Our certified therapist brings all necessary equipment to your location, ensuring a comfortable setup.",
      icon: <MapPin size={24} />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Experience Your Session",
      description: "Immerse yourself in a 60-90 minute personalized therapy session with VR, EEG monitoring, and aroma therapy.",
      icon: <Clock size={24} />,
      image: "https://images.unsplash.com/photo-1523841589119-b55aee41b1fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // Auto-rotate steps
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-wellness-600 font-medium">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-wellness-800 mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-wellness-600">
            Our streamlined process makes it easy to experience the benefits of VR therapy from the comfort of your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Step image */}
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl relative h-[400px]">
            {steps.map((step) => (
              <div
                key={step.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  activeStep === step.id ? "opacity-100" : "opacity-0"
                )}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
            
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <StepIndicator
                steps={steps.length}
                currentStep={activeStep}
                className="justify-center"
              />
            </div>
          </div>
          
          {/* Steps */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={cn(
                    "p-6 rounded-2xl transition-all duration-500 cursor-pointer",
                    activeStep === step.id
                      ? "bg-wellness-50 shadow-md transform translate-x-2"
                      : "hover:bg-wellness-50/50"
                  )}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex items-start">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-colors duration-300",
                        activeStep === step.id
                          ? "bg-wellness-500 text-white"
                          : "bg-wellness-100 text-wellness-500"
                      )}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span
                          className={cn(
                            "text-sm font-medium rounded-full px-2.5 py-0.5 mr-2",
                            activeStep === step.id
                              ? "bg-wellness-500 text-white"
                              : "bg-wellness-100 text-wellness-600"
                          )}
                        >
                          Step {step.id}
                        </span>
                        <h3 className="text-lg font-medium text-wellness-800">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-wellness-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
