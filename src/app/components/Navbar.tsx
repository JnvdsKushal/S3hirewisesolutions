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
  X,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
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

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
  { label: "About Us", to: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 sm:h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto">
              <Link to="/" className="text-gray-700 hover:text-[#2E5EAA] transition-colors font-medium text-sm lg:text-base">
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-[#2E5EAA] transition-colors font-medium text-sm lg:text-base">
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showServicesDropdown ? "rotate-180" : ""}`} />
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
                      <div className="grid grid-cols-2">
                        <div className="p-6 space-y-1">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.link}
                              onClick={() => setShowServicesDropdown(false)}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 flex-shrink-0">
                                <service.icon className="w-4 h-4 text-[#2E5EAA]" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900 text-sm">{service.title}</div>
                                <div className="text-xs text-gray-500">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 p-8 flex items-center justify-center">
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl"></div>
                          </div>
                          <div className="relative text-center">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#2E5EAA] to-[#3B82F6] flex items-center justify-center">
                              <TrendingUp className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Transform Your Business</h3>
                            <p className="text-sm text-gray-600">Enterprise-grade solutions for modern challenges</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-[#2E5EAA] transition-colors font-medium text-sm lg:text-base"
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm lg:text-base"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden ml-auto p-2 rounded-lg text-gray-700 hover:text-[#2E5EAA] hover:bg-gray-100 transition-all"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay + Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 250 }}
              className="fixed top-0 right-0 h-full w-[min(85vw,340px)] bg-white shadow-2xl z-50 md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="relative flex items-center px-4 py-4 border-b border-gray-100">
                {/* Close button — absolute top-right so it never squeezes the Logo */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
                {/* Logo gets all the horizontal space it needs */}
                <div className="pr-10 overflow-hidden">
                  <Logo />
                </div>
              </div>

              {/* Drawer Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {/* Home */}
                <Link
                  to="/"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-[#2E5EAA] hover:bg-blue-50 font-medium transition-all"
                >
                  Home
                </Link>

                {/* Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:text-[#2E5EAA] hover:bg-blue-50 font-medium transition-all"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#2E5EAA]" : ""}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-100 pl-3">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.link}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 group transition-all"
                            >
                              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-blue-200">
                                <service.icon className="w-3.5 h-3.5 text-[#2E5EAA]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-800 leading-tight">{service.title}</div>
                                <div className="text-xs text-gray-500 mt-0.5 leading-tight truncate">{service.description}</div>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Nav Links */}
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-[#2E5EAA] hover:bg-blue-50 font-medium transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Drawer Footer CTA */}
              <div className="px-4 py-5 border-t border-gray-100 bg-gray-50/80">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-xl font-semibold hover:shadow-lg active:scale-95 transition-all duration-200 text-base"
                >
                  Get Started
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Transform your business with us
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Scroll to Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-full p-3 shadow-lg z-40"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronDown className="w-5 h-5 rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}