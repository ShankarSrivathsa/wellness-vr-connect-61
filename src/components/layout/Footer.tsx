
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-wellness-50 border-t border-wellness-100">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-bold text-wellness-800 flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-wellness-500 to-accent flex items-center justify-center text-white">
                W
              </span>
              <span>WellnessVR</span>
            </Link>
            <p className="text-wellness-600 text-sm mt-2 max-w-xs">
              Transform your mind through innovative VR, EEG, and aroma therapy for improved mental wellness.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-wellness-500 hover:text-wellness-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-wellness-500 hover:text-wellness-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-wellness-500 hover:text-wellness-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-wellness-500 hover:text-wellness-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-wellness-800 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-wellness-800 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  Basic Therapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  VR Therapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  Premium Therapy
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  Schedule Appointment
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
                  Therapy FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-wellness-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-wellness-500 mt-0.5" />
                <span className="text-wellness-600 text-sm">support@wellnessvr.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-wellness-500 mt-0.5" />
                <span className="text-wellness-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-wellness-500 mt-0.5" />
                <span className="text-wellness-600 text-sm">
                  123 Wellness Street<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wellness-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-wellness-600 text-sm">
            © {new Date().getFullYear()} WellnessVR Connect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-wellness-600 hover:text-wellness-800 text-sm transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
