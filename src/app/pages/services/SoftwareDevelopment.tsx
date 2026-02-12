import { motion } from "motion/react";
import { Code, Smartphone, Globe, Database, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Custom Software Development
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Build scalable, secure applications tailored to your unique business requirements.
              </p>
              <button className="px-8 py-4 bg-white text-orange-900 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MDM3MjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Software Development"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Web Applications", description: "Modern web apps with React, Angular, Vue" },
              { icon: Smartphone, title: "Mobile Apps", description: "Native iOS/Android and cross-platform solutions" },
              { icon: Database, title: "Enterprise Systems", description: "ERP, CRM, and custom business applications" },
              { icon: Code, title: "API Development", description: "RESTful and GraphQL API design and development" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
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
