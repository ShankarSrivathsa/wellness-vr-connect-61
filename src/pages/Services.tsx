
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";

const Services = () => {
  const services = [
    {
      title: "Basic Therapy",
      description: "App-based music and aroma guidance for stress relief and relaxation.",
      image: "/placeholder.svg",
      features: [
        "Guided breathing exercises",
        "Calming music therapy",
        "Basic aromatherapy guidance",
        "Mood tracking"
      ],
      duration: "30-45 minutes",
      price: "$49 per session",
      idealFor: "Beginners seeking stress relief and relaxation techniques",
    },
    {
      title: "VR Therapy",
      description: "Therapist-guided immersive VR experiences for anxiety and stress management.",
      image: "/placeholder.svg",
      features: [
        "Immersive VR environments",
        "Guided meditation in virtual settings",
        "Exposure therapy options",
        "Therapist-led sessions"
      ],
      duration: "60 minutes",
      price: "$89 per session",
      idealFor: "Those dealing with anxiety, phobias, or seeking deeper relaxation",
    },
    {
      title: "Premium Therapy",
      description: "EEG monitoring + VR therapy with personalized care and advanced treatment options.",
      image: "/placeholder.svg",
      features: [
        "Real-time EEG brain monitoring",
        "Advanced VR therapeutic environments",
        "Custom aromatherapy blends",
        "Personalized treatment plans"
      ],
      duration: "75-90 minutes",
      price: "$129 per session",
      idealFor: "Clients seeking comprehensive therapy with measurable results",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            <AnimatedGradientText>Our Services</AnimatedGradientText>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We offer a range of innovative therapy options combining virtual reality, EEG monitoring, and aromatherapy.
            All services are delivered in the comfort of your home.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-lg font-medium text-wellness-700">{service.price}</span>
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-wellness-500 mr-2">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Ideal for: {service.idealFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How Our Services Work</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ol className="space-y-6">
              <li className="flex">
                <div className="bg-wellness-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Book Your Session</h3>
                  <p className="text-gray-700">Choose your preferred therapy option and schedule a convenient time for your session.</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-wellness-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Therapist Visit</h3>
                  <p className="text-gray-700">Our qualified therapist arrives at your home with all necessary equipment.</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-wellness-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personalized Session</h3>
                  <p className="text-gray-700">Experience a tailored therapy session based on your needs and chosen service.</p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-wellness-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Follow-Up Support</h3>
                  <p className="text-gray-700">Receive a session summary and recommendations for continuing your wellness journey.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Do I need to provide any equipment?</h3>
              <p className="text-gray-700">No, our therapists bring all necessary equipment, including VR headsets, EEG monitors, and aromatherapy diffusers.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">How many sessions are recommended?</h3>
              <p className="text-gray-700">While benefits can be experienced after a single session, we typically recommend a series of 6-8 sessions for optimal results.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Is this covered by insurance?</h3>
              <p className="text-gray-700">Some insurance providers cover our services. We can provide documentation to submit to your provider for potential reimbursement.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
