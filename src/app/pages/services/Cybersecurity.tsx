import { motion } from "motion/react";
import { Shield, Lock, Eye, AlertTriangle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const services = [
  { icon: Lock, title: "Security Audits", description: "Comprehensive vulnerability assessments and penetration testing" },
  { icon: Eye, title: "Threat Monitoring", description: "24/7 SOC with advanced threat detection and response" },
  { icon: Shield, title: "Compliance", description: "GDPR, HIPAA, SOC 2, ISO 27001 compliance frameworks" },
  { icon: AlertTriangle, title: "Incident Response", description: "Rapid response and recovery from security incidents" }
];

export function Cybersecurity() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-900 via-orange-800 to-red-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cybersecurity & Compliance
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Protect your digital assets with enterprise-grade security solutions and compliance frameworks.
              </p>
              <button className="px-8 py-4 bg-white text-red-900 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                Get Security Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc3MDM3MjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cybersecurity"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
