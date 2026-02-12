import { motion } from "motion/react";
import { Link } from "react-router";
import { 
  Brain, TrendingUp, Code, Cloud, Shield, Users, 
  Database, Smartphone, ArrowRight, CheckCircle 
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    shortDesc: "Intelligent automation and predictive analytics",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.",
    link: "/services/ai-machine-learning",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Predictive Analytics", "NLP & Computer Vision", "Process Automation"]
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    shortDesc: "Strategic technology consulting",
    description: "Modernize your business with cutting-edge technology strategies and comprehensive implementation roadmaps.",
    link: "/services/digital-transformation",
    gradient: "from-purple-500 to-pink-500",
    features: ["Strategy & Roadmap", "Change Management", "Technology Modernization"]
  },
  {
    icon: Code,
    title: "Custom Software Development",
    shortDesc: "Scalable custom applications",
    description: "Build secure, scalable applications tailored to your unique business requirements and workflows.",
    link: "/services/software-development",
    gradient: "from-orange-500 to-red-500",
    features: ["Web Applications", "Enterprise Systems", "API Development"]
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    shortDesc: "AWS, Azure, GCP expertise",
    description: "Migrate, optimize, and manage your infrastructure on leading cloud platforms with enterprise-grade solutions.",
    link: "/services/cloud-services",
    gradient: "from-green-500 to-teal-500",
    features: ["Cloud Migration", "Infrastructure as Code", "Performance Optimization"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    shortDesc: "Comprehensive security solutions",
    description: "Protect your digital assets with security audits, compliance frameworks, and 24/7 threat monitoring.",
    link: "/services/cybersecurity",
    gradient: "from-red-500 to-orange-500",
    features: ["Security Audits", "Threat Monitoring", "Compliance Management"]
  },
  {
    icon: Users,
    title: "IT Staffing",
    shortDesc: "Top-tier tech talent",
    description: "Access exceptional technology professionals through our comprehensive recruitment and staff augmentation services.",
    link: "/services/it-staffing",
    gradient: "from-indigo-500 to-purple-500",
    features: ["Contract Staffing", "Direct Hire", "Staff Augmentation"]
  },
  {
    icon: Database,
    title: "Data Analytics",
    shortDesc: "Business intelligence & insights",
    description: "Transform raw data into actionable insights with advanced analytics, BI dashboards, and data governance.",
    link: "/services/data-analytics",
    gradient: "from-cyan-500 to-blue-500",
    features: ["Data Warehousing", "BI Dashboards", "Predictive Analytics"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    shortDesc: "iOS & Android applications",
    description: "Create exceptional mobile experiences with native and cross-platform solutions for iOS and Android.",
    link: "/services/mobile-development",
    gradient: "from-pink-500 to-rose-500",
    features: ["Native Development", "Cross-Platform", "Wearable Apps"]
  },
];

export function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#2E5EAA] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive IT solutions designed to accelerate your digital journey and 
              unlock new possibilities for your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                />

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-[#2E5EAA] font-semibold hover:gap-3 transition-all duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2647] to-[#2E5EAA]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can help transform your business.
          </p>
          <button className="px-8 py-4 bg-white text-[#0A2647] rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
