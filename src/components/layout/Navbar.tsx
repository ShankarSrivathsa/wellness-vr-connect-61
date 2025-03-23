
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Booking", path: "/booking" },
    { name: "FAQs", path: "/faqs" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-wellness-800 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-r from-wellness-500 to-accent flex items-center justify-center text-white">
            S
          </span>
          <span className="hidden sm:inline">Serapisuto</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                location.pathname === route.path
                  ? "text-wellness-700 bg-wellness-50"
                  : "text-wellness-600 hover:text-wellness-800 hover:bg-wellness-50"
              )}
            >
              {route.name}
            </Link>
          ))}
          <Button 
            asChild
            className="ml-4 bg-wellness-500 hover:bg-wellness-600 text-white rounded-full px-6 py-2 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Link to="/booking">Book a Session</Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            className="ml-2"
          >
            <Link to="/login">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-wellness-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-white md:hidden transition-transform duration-300 ease-in-out z-40",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 space-y-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "px-4 py-3 rounded-full text-base font-medium transition-all",
                location.pathname === route.path
                  ? "text-wellness-700 bg-wellness-50"
                  : "text-wellness-600 hover:text-wellness-800 hover:bg-wellness-50"
              )}
            >
              {route.name}
            </Link>
          ))}
          <Button 
            asChild 
            className="w-full mt-4 bg-wellness-500 hover:bg-wellness-600 text-white rounded-full py-3 transition-all duration-300"
          >
            <Link to="/booking">Book a Session</Link>
          </Button>
          <Button 
            asChild 
            variant="outline"
            className="w-full"
          >
            <Link to="/login">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
