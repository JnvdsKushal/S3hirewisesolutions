import { motion } from "motion/react";
import { Cloud, Server, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const cloudPlatforms = [
  { name: "AWS", logo: "☁️", expertise: "Advanced Partner" },
  { name: "Azure", logo: "⚡", expertise: "Gold Partner" },
  { name: "Google Cloud", logo: "🌐", expertise: "Premier Partner" },
  { name: "IBM Cloud", logo: "💼", expertise: "Certified Partner" }
];

const services = [
  {
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud with zero downtime",
    icon: Cloud
  },
  {
    title: "Infrastructure as Code",
    description: "Automate provisioning with Terraform, CloudFormation, and ARM templates",
    icon: Server
  },
  {
    title: "Cloud Security",
    description: "Implement robust security controls and compliance frameworks",
    icon: Shield
  },
  {
    title: "Performance Optimization",
    description: "Optimize costs and performance with auto-scaling and monitoring",
    icon: Zap
  }
];

export function CloudServices() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-900 via-teal-800 to-cyan-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cloud Services & Infrastructure
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Migrate, optimize, and manage your cloud infrastructure with enterprise-grade 
                solutions across AWS, Azure, and Google Cloud Platform.
              </p>
              <button className="px-8 py-4 bg-white text-green-900 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMzcyNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cloud Services"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2647] mb-6">Our Cloud Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-3">{platform.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-600">{platform.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-900 to-teal-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free cloud readiness assessment and migration roadmap.
          </p>
          <button className="px-8 py-4 bg-white text-green-900 rounded-lg font-semibold hover:bg-green-50 hover:scale-105 transition-all duration-200">
            Schedule Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
