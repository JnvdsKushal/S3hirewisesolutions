import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ChevronDown, Brain, TrendingUp, Code, Cloud, Shield, Users, Database, Smartphone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ContactModal } from "./ContactModal";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description: "Intelligent automation and predictive analytics",
    link: "/services/ai-machine-learning"
  },
  {
    icon: TrendingUp,
    title: "IT Consulting & Digital Transformation",
    description: "Strategic technology consulting and implementation",
    link: "/services/digital-transformation"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Web, Mobile, ERP, CRM solutions",
    link: "/services/software-development"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "AWS, Azure, GCP, DevOps",
    link: "/services/cloud-services"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Protect your digital assets",
    link: "/services/cybersecurity"
  },
  {
    icon: Users,
    title: "IT Staffing & Recruitment",
    description: "Find the perfect tech talent",
    link: "/services/it-staffing"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights",
    link: "/services/data-analytics"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "iOS and Android applications",
    link: "/services/mobile-development"
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#2E5EAA] transition-colors font-medium"
              >
                Home
              </Link>
              
              {/* Services with Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-[#2E5EAA] transition-colors font-medium">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {showServicesDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-0">
                        {/* Left Column - Services List */}
                        <div className="p-6 space-y-1">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.link}
                              onClick={() => setShowServicesDropdown(false)}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                                <service.icon className="w-5 h-5 text-[#2E5EAA]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-gray-900 text-sm mb-0.5">
                                  {service.title}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Right Column - Illustration */}
                        <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 p-8 flex items-center justify-center">
                          {/* Abstract background shapes */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl"></div>
                          </div>
                          
                          {/* Professional illustration placeholder */}
                          <div className="relative z-10 text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#2E5EAA] to-[#3B82F6] flex items-center justify-center">
                              <TrendingUp className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">
                              Transform Your Business
                            </h3>
                            <p className="text-sm text-gray-600">
                              Enterprise-grade solutions for modern challenges
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/industries"
                className="text-gray-700 hover:text-[#2E5EAA] transition-colors font-medium"
              >
                Industries
              </Link>
              <Link
                to="/careers"
                className="text-gray-700 hover:text-[#2E5EAA] transition-colors font-medium"
              >
                Careers
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#2E5EAA] transition-colors font-medium"
              >
                About Us
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-700 hover:text-[#2E5EAA] transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Logo />
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-6 space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#2E5EAA] rounded-lg transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#2E5EAA] rounded-lg transition-colors font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/industries"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#2E5EAA] rounded-lg transition-colors font-medium"
                >
                  Industries
                </Link>
                <Link
                  to="/careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#2E5EAA] rounded-lg transition-colors font-medium"
                >
                  Careers
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#2E5EAA] rounded-lg transition-colors font-medium"
                >
                  About Us
                </Link>
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-full p-3 shadow-lg z-40 hover:shadow-xl hover:scale-110 transition-all"
            onClick={scrollToTop}
          >
            <ChevronDown className="w-5 h-5 transform rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}