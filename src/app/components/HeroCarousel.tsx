import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3NzAzMTM2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Transform Hiring with Intelligence",
    description: "Leverage AI-powered solutions to find, assess, and onboard the perfect candidates for your enterprise needs. Scale your team with precision and confidence.",
  },
  {
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzcwMzUwOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Smart IT Staffing. Scalable Solutions.",
    description: "From cloud migration to DevOps excellence, we deliver enterprise-grade infrastructure solutions that power your digital transformation journey.",
  },
  {
    image: "https://images.unsplash.com/photo-1726138406359-673f93a70e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzAyODQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Future-Ready Digital & Cloud Services",
    description: "Embrace the future with cutting-edge digital transformation strategies, cloud-native applications, and intelligent automation powered by AI and ML.",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <button
                className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200 text-lg"
                onClick={() => navigate("/services")}
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}