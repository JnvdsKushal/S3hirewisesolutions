import { motion } from "motion/react";
import { TrendingUp, CheckCircle, ArrowRight, Rocket, Target, LineChart, Users } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const services = [
  {
    icon: Target,
    title: "Strategy & Roadmap",
    description: "Develop comprehensive digital transformation strategies aligned with business goals.",
  },
  {
    icon: Rocket,
    title: "Technology Modernization",
    description: "Upgrade legacy systems with modern, scalable cloud-native architectures.",
  },
  {
    icon: LineChart,
    title: "Process Optimization",
    description: "Streamline operations with automation and intelligent workflow management.",
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Guide teams through transformation with training and organizational support.",
  },
];

const benefits = [
  { metric: "60%", description: "Faster time-to-market" },
  { metric: "45%", description: "Operational cost reduction" },
  { metric: "3x", description: "Improved productivity" },
  { metric: "85%", description: "Customer satisfaction increase" },
];

const approach = [
  {
    step: "01",
    title: "Assessment & Discovery",
    description: "Analyze current state, identify gaps, and define transformation objectives.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create detailed roadmap with prioritized initiatives and success metrics.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute transformation with agile methodologies and continuous feedback.",
  },
  {
    step: "04",
    title: "Optimization & Scale",
    description: "Monitor performance, iterate, and expand successful initiatives.",
  },
];

export function DigitalTransformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-pink-300" />
                <span className="text-white font-semibold">Digital Transformation</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Modernize Your Enterprise for the Digital Age
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Navigate digital transformation with confidence. We help organizations reimagine 
                processes, embrace innovation, and achieve sustainable competitive advantage.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzAzNzI0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital Transformation"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2647] mb-6">
              Comprehensive Transformation Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2647] mb-6">
              Measurable Business Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-purple-600 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-gray-700 font-medium">
                  {benefit.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2647] mb-6">
              Our Proven Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 h-full text-white">
                  <div className="text-6xl font-bold opacity-20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-purple-100">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create a customized digital transformation roadmap for your organization.
          </p>
          <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 hover:scale-105 transition-all duration-200">
            Get Your Free Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
