import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import {
  ChevronDown,
  Brain,
  TrendingUp,
  Code,
  Cloud,
  Shield,
  Users,
  Database,
  Smartphone,
  Menu,
  X
} from "lucide-react";
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
  }
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Right Side Navigation */}
            <div className="hidden md:flex items-center space-x-8 ml-auto">

              <Link
                to="/"
                className="text-gray-700 hover:text-[#2E5EAA] transition-colors font-medium"
              >
                Home
              </Link>

              {/* Services Dropdown */}
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
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[700px]"
                    >
                      <div className="grid grid-cols-2">

                        {/* Services List */}
                        <div className="p-6 space-y-1">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.link}
                              onClick={() => setShowServicesDropdown(false)}
                             className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200">
                                <service.icon className="w-4 h-4 text-[#2E5EAA]" />
                              </div>

                              <div>
                                <div className="font-semibold text-gray-900 text-sm">
                                  {service.title}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Right Illustration */}
                        <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 p-8 flex items-center justify-center">

                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl"></div>
                          </div>

                          <div className="relative text-center">
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

              {/* CTA */}
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get Started
              </button>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-700 hover:text-[#2E5EAA]"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <Logo />
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-2">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                <Link to="/industries" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
                <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              </div>

              <div className="p-6 border-t">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-lg"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Scroll Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-full p-3 shadow-lg z-40"
            onClick={scrollToTop}
          >
            <ChevronDown className="w-5 h-5 rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}