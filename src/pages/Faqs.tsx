
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Faqs = () => {
  // FAQ categories with their questions and answers
  const faqCategories = [
    {
      category: "About VR Therapy",
      questions: [
        {
          question: "How does VR therapy help with anxiety?",
          answer:
            "VR therapy helps with anxiety by creating immersive environments where you can safely confront anxiety triggers under the guidance of a therapist. Through repeated exposure in a controlled setting, your brain gradually learns that these scenarios aren't threatening, reducing anxiety responses over time. Our therapists combine VR with breathing techniques and mindfulness to enhance the therapeutic effect.",
        },
        {
          question: "Is VR therapy scientifically proven?",
          answer:
            "Yes, VR therapy has been validated by numerous scientific studies. Research published in journals like JAMA Psychiatry and Frontiers in Psychology demonstrates VR therapy's effectiveness for treating anxiety disorders, PTSD, phobias, and depression. Our methods are based on evidence-based protocols developed through clinical research.",
        },
        {
          question: "Will I experience motion sickness during VR therapy?",
          answer:
            "Most clients don't experience significant motion sickness. Our therapists use medical-grade VR equipment designed to minimize discomfort, and sessions begin with brief acclimation periods. If you're particularly sensitive to motion sickness, we'll introduce VR gradually and may incorporate aromatherapy elements that help reduce nausea.",
        },
      ],
    },
    {
      category: "Sessions & Equipment",
      questions: [
        {
          question: "What equipment is provided during the session?",
          answer:
            "We provide all necessary equipment for your session, including high-quality VR headsets, EEG monitoring devices (for Premium therapy), aromatherapy diffusers, and any accessories needed. Our therapists bring everything to your home, set it up, and ensure everything is properly sanitized between clients. You don't need to provide any technology or equipment.",
        },
        {
          question: "How long does a typical session last?",
          answer:
            "Session duration varies by service type: Basic Therapy sessions last 30-45 minutes, VR Therapy sessions are 60 minutes, and Premium Therapy sessions run 75-90 minutes. Each session includes setup time, the therapeutic experience, and a brief discussion afterward to review progress and answer questions.",
        },
        {
          question: "Do I need a special room or setup for the session?",
          answer:
            "You only need a quiet space with minimal distractions and enough room for you to sit comfortably and extend your arms. Ideally, a space of about 6x6 feet is recommended. Our therapists will help arrange the area optimally when they arrive. Good ventilation is beneficial for aromatherapy elements of the session.",
        },
      ],
    },
    {
      category: "Therapists & Expertise",
      questions: [
        {
          question: "Are your therapists certified?",
          answer:
            "Yes, all our therapists are fully certified professionals with advanced degrees in psychology, neuroscience, or related fields. They have specialized training in VR therapy applications and hold certifications from recognized mental health organizations. Additionally, our therapists undergo continuous education to stay current with the latest therapeutic techniques and technology.",
        },
        {
          question: "Can I request a specific therapist?",
          answer:
            "Absolutely! During the booking process, you can select your preferred therapist from our team of professionals. Each therapist has a profile detailing their specialties and expertise to help you find the best match for your needs. If your preferred therapist isn't available on your desired date, we'll suggest alternatives or other available dates.",
        },
      ],
    },
    {
      category: "Booking & Pricing",
      questions: [
        {
          question: "Can I book a trial session?",
          answer:
            "Yes, we offer a 30-minute introductory session at a reduced rate for new clients. This allows you to experience our approach before committing to a full session. The trial includes a brief VR experience and consultation with a therapist who can answer your questions and recommend the most suitable therapy program for your needs.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "We understand that circumstances change. We offer full refunds for cancellations made at least 24 hours before your scheduled appointment. For cancellations with less than 24 hours' notice, a 50% fee applies. In cases of illness or emergency, please contact us as soon as possible, and we'll work with you to reschedule without penalty.",
        },
        {
          question: "Do you offer package discounts?",
          answer:
            "Yes, we offer discounted packages for multiple sessions. Our 5-session package includes a 10% discount, while our 10-session package offers a 15% discount. These packages can be used over a 6-month period and can be shared among family members living at the same address. Custom packages are also available for specific therapeutic goals.",
        },
      ],
    },
    {
      category: "Health & Safety",
      questions: [
        {
          question: "Is VR therapy safe for everyone?",
          answer:
            "VR therapy is safe for most individuals, but may not be suitable for people with certain conditions like epilepsy, severe vestibular disorders, or certain types of migraines. During your initial consultation, our therapists will conduct a health screening to ensure VR therapy is appropriate for you. We can modify sessions or recommend alternative approaches if needed.",
        },
        {
          question: "How do you ensure hygiene with the equipment?",
          answer:
            "We maintain rigorous sanitization protocols for all equipment. VR headsets and controllers are thoroughly disinfected between each client using medical-grade sanitizing agents that are effective against viruses and bacteria but gentle on skin. Aromatherapy components use disposable or thoroughly sterilized elements. Our therapists also follow strict hand hygiene practices.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            <AnimatedGradientText>Frequently Asked Questions</AnimatedGradientText>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our VR therapy services, equipment, and process.
          </p>
        </section>

        <div className="mb-12">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-wellness-50 rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Still Have Questions?</h2>
          <p className="text-center mb-6">
            If you couldn't find the answer you were looking for, please reach out to our support team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" onClick={() => window.location.href = "/contact"}>
              Contact Us
            </Button>
            <Button onClick={() => window.location.href = "/booking"}>
              Book a Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Faqs;
