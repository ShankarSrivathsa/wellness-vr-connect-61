
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you shortly.",
    });
    // In a real app, this would send the form data to a server
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            <AnimatedGradientText>Contact Us</AnimatedGradientText>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions about our services? Reach out to our team for assistance.
            We're here to help you on your wellness journey.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" required placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required placeholder="Inquiry about VR Therapy Services" />
              </div>
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Please describe how we can help you..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-wellness-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">contact@wellnessvr.com</p>
                  <p className="text-gray-600">support@wellnessvr.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-wellness-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-wellness-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Main Office</h3>
                  <p className="text-gray-600">
                    123 Wellness Avenue<br />
                    Suite 200<br />
                    San Francisco, CA 94110
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-wellness-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Hours of Operation</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-wellness-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Live Chat Support</h3>
                  <p className="text-gray-600">Available during business hours</p>
                  <Button variant="outline" className="mt-2">
                    Start Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-700">We aim to respond to all inquiries within 24 hours during business days.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Can I schedule a consultation before booking?</h3>
              <p className="text-gray-700">Yes, we offer free 15-minute consultation calls to discuss your needs and recommend the best therapy options.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">Do you serve areas outside San Francisco?</h3>
              <p className="text-gray-700">Yes, our therapists cover the greater Bay Area, including Oakland, San Jose, and surrounding communities.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
