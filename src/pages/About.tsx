
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import TherapistCard from "@/components/ui/TherapistCard";

const About = () => {
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

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            <AnimatedGradientText>About WellnessVR Connect</AnimatedGradientText>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We aim to make mental wellness accessible through innovative
            technology, bringing therapeutic experiences directly to your home.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              At WellnessVR Connect, we believe that quality mental healthcare
              should be accessible to everyone. Our mission is to leverage
              cutting-edge technology to provide immersive, effective therapy
              experiences that fit into your lifestyle. By combining virtual
              reality, EEG monitoring, and aromatherapy, we create
              multi-sensory healing environments that promote lasting mental
              wellness.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <TherapistCard key={therapist.name} therapist={therapist} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Certifications & Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>American Psychological Association (APA) Approved</li>
                <li>Certified Virtual Reality Therapy Provider</li>
                <li>National Association of Mental Health Certification</li>
                <li>International Aromatherapy Association Member</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Partnerships</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>VR Health Institute</li>
                <li>National Mental Health Foundation</li>
                <li>Meditation Research Center</li>
                <li>University Research Programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
          <div className="bg-wellness-50 rounded-lg p-8">
            <blockquote className="italic text-lg text-gray-700 mb-4">
              "After just 6 sessions with WellnessVR Connect, my anxiety levels
              decreased significantly. The combination of VR and aromatherapy
              created a safe space where I could confront my fears."
            </blockquote>
            <p className="font-semibold">— Jamie R., Anxiety Management Client</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
