
import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StepIndicator from "@/components/ui/StepIndicator";
import TherapistCard from "@/components/ui/TherapistCard";
import { toast } from "@/components/ui/use-toast";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: "",
    date: undefined as Date | undefined,
    time: "",
    therapist: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const therapists = [
    {
      name: "Dr. Sarah Johnson",
      image: "/placeholder.svg",
      role: "Lead VR Therapist",
      qualifications: "Ph.D. in Clinical Psychology",
      specialties: ["Anxiety Disorders", "PTSD", "Depression"],
      bio: "Dr. Johnson has pioneered the use of VR in treating anxiety disorders for over 10 years.",
    },
    {
      name: "Michael Chen",
      image: "/placeholder.svg",
      role: "EEG Specialist",
      qualifications: "M.Sc. in Neuroscience",
      specialties: ["Biofeedback", "Sleep Disorders", "Stress Management"],
      bio: "Michael combines EEG monitoring with tailored VR experiences for optimal therapeutic outcomes.",
    },
    {
      name: "Amara Patel",
      image: "/placeholder.svg",
      role: "Aromatherapy Expert",
      qualifications: "Certified in Clinical Aromatherapy",
      specialties: ["Sensory Integration", "Holistic Wellness", "Mindfulness"],
      bio: "Amara designs custom aroma profiles that complement VR sessions to enhance therapeutic benefits.",
    },
  ];

  const availableTimes = [
    "9:00 AM", 
    "10:30 AM", 
    "12:00 PM", 
    "1:30 PM", 
    "3:00 PM", 
    "4:30 PM", 
    "6:00 PM"
  ];

  const handleChange = (field: string, value: any) => {
    setBookingData({ ...bookingData, [field]: value });
  };

  const handleDateSelect = (date: Date | undefined) => {
    setBookingData({ ...bookingData, date });
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validateCurrentStep = () => {
    switch (step) {
      case 1:
        if (!bookingData.service) {
          toast({
            title: "Please select a service",
            description: "You must choose a therapy type to continue",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 2:
        if (!bookingData.date || !bookingData.time) {
          toast({
            title: "Missing information",
            description: "Please select both date and time for your appointment",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 3:
        if (!bookingData.therapist) {
          toast({
            title: "Please select a therapist",
            description: "You must choose a therapist to continue",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 4:
        if (!bookingData.name || !bookingData.email || !bookingData.phone || !bookingData.address) {
          toast({
            title: "Missing information",
            description: "Please fill in all required fields",
            variant: "destructive",
          });
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed!",
      description: "You will receive a confirmation email shortly.",
    });
    // In a real app, here we would send the booking data to the server
    console.log("Booking data:", bookingData);
    // Normally would redirect to a confirmation page
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6">
            <AnimatedGradientText>Book Your Session</AnimatedGradientText>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Schedule a personalized wellness session with our experienced therapists.
          </p>
          <StepIndicator steps={5} currentStep={step} className="max-w-xs mx-auto" />
        </section>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Select Your Service</h2>
              <div className="space-y-4">
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    bookingData.service === "basic" ? "border-wellness-500 bg-wellness-50" : "border-gray-200 hover:border-wellness-300"
                  }`}
                  onClick={() => handleChange("service", "basic")}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Basic Therapy</h3>
                    <span className="font-medium">$49</span>
                  </div>
                  <p className="text-gray-600 mt-2">App-based music and aroma guidance for stress relief and relaxation.</p>
                </div>
                
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    bookingData.service === "vr" ? "border-wellness-500 bg-wellness-50" : "border-gray-200 hover:border-wellness-300"
                  }`}
                  onClick={() => handleChange("service", "vr")}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">VR Therapy</h3>
                    <span className="font-medium">$89</span>
                  </div>
                  <p className="text-gray-600 mt-2">Therapist-guided immersive VR experiences for anxiety and stress management.</p>
                </div>
                
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    bookingData.service === "premium" ? "border-wellness-500 bg-wellness-50" : "border-gray-200 hover:border-wellness-300"
                  }`}
                  onClick={() => handleChange("service", "premium")}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Premium Therapy</h3>
                    <span className="font-medium">$129</span>
                  </div>
                  <p className="text-gray-600 mt-2">EEG monitoring + VR therapy with personalized care and advanced treatment options.</p>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button onClick={nextStep}>Next: Select Date & Time</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Select Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Label className="mb-2 block">Select Date</Label>
                  <Calendar
                    mode="single"
                    selected={bookingData.date}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                    disabled={(date) => {
                      // Disable past dates and weekends in this example
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || date.getDay() === 0;
                    }}
                  />
                </div>
                <div>
                  <Label className="mb-2 block">Select Time</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((time) => (
                      <div
                        key={time}
                        className={`p-3 border rounded-md text-center cursor-pointer ${
                          bookingData.time === time ? "bg-wellness-500 text-white" : "hover:border-wellness-300"
                        }`}
                        onClick={() => handleChange("time", time)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next: Choose Therapist</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Choose Your Therapist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {therapists.map((therapist) => (
                  <div
                    key={therapist.name}
                    onClick={() => handleChange("therapist", therapist.name)}
                    className={`cursor-pointer transition-all ${
                      bookingData.therapist === therapist.name ? "ring-2 ring-wellness-500 rounded-xl" : ""
                    }`}
                  >
                    <TherapistCard therapist={therapist} />
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next: Your Details</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Your Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name*</Label>
                    <Input
                      id="name"
                      value={bookingData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email*</Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="johndoe@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input
                      id="phone"
                      value={bookingData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Home Address*</Label>
                  <Input
                    id="address"
                    value={bookingData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="123 Main St, City, State, Zip"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Special Notes or Requirements</Label>
                  <Textarea
                    id="notes"
                    value={bookingData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    placeholder="Any specific concerns or requests for your session"
                    rows={3}
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next: Review & Confirm</Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Review & Confirm</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">Selected Service</h3>
                  <p className="text-lg">
                    {bookingData.service === "basic" && "Basic Therapy - $49"}
                    {bookingData.service === "vr" && "VR Therapy - $89"}
                    {bookingData.service === "premium" && "Premium Therapy - $129"}
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">Date & Time</h3>
                  <p className="text-lg">
                    {bookingData.date?.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} at {bookingData.time}
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">Therapist</h3>
                  <p className="text-lg">{bookingData.therapist}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700">Your Information</h3>
                  <p>{bookingData.name}</p>
                  <p>{bookingData.email}</p>
                  <p>{bookingData.phone}</p>
                  <p>{bookingData.address}</p>
                </div>
                
                {bookingData.notes && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-700">Notes</h3>
                    <p>{bookingData.notes}</p>
                  </div>
                )}
                
                <div className="bg-wellness-50 p-4 rounded-lg border border-wellness-200">
                  <p className="text-wellness-800">
                    By confirming this booking, you agree to our terms and conditions. 
                    A confirmation email will be sent to your email address.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep}>Back</Button>
                <Button onClick={handleSubmit}>Confirm Booking</Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Booking;
