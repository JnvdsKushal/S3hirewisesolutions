import { motion } from "motion/react";
import { 
  Building2, Heart, ShoppingCart, Factory, Landmark, Plane, 
  GraduationCap, Zap, TrendingUp, Users, Shield, Sparkles, Briefcase, Wheat 
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "IoT-enabled smart factories, predictive maintenance, and supply chain optimization for manufacturing excellence",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzNzI0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stats: { clients: "60+", projects: "220+", satisfaction: "96%" },
    solutions: ["Industrial IoT Platforms", "Predictive Maintenance Systems", "Supply Chain Management", "Quality Control Automation", "Warehouse Management Systems", "Digital Twin Technology"],
    gradient: "from-blue-500 to-cyan-500",
    content: "Transform your manufacturing operations with Industry 4.0 technologies. We help manufacturers optimize production, reduce downtime, and improve quality through smart automation and data analytics."
  },
  {
    icon: Briefcase,
    title: "Corporate Services",
    description: "Enterprise solutions, workflow automation, and digital workplace transformation for modern businesses",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzM5NDAwMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    stats: { clients: "80+", projects: "300+", satisfaction: "98%" },
    solutions: ["Enterprise Resource Planning (ERP)", "Customer Relationship Management", "Business Process Automation", "Document Management Systems", "Collaboration Platforms", "HR Management Solutions"],
    gradient: "from-indigo-500 to-purple-500",
    content: "Streamline corporate operations with integrated business solutions. From ERP systems to workflow automation, we help organizations improve efficiency and drive digital transformation."
  },
  {
    icon: Landmark,
    title: "BFSI",
    description: "Banking, Financial Services & Insurance solutions with advanced security, compliance, and fraud detection",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzNzI0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stats: { clients: "40+", projects: "180+", satisfaction: "99%" },
    solutions: ["Core Banking Systems", "Mobile & Digital Banking", "Fraud Detection & Prevention", "Regulatory Compliance Automation", "Wealth Management Platforms", "Insurance Policy Management"],
    gradient: "from-green-500 to-teal-500",
    content: "Secure, compliant financial technology solutions for banks, insurance companies, and financial institutions."
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning management systems, virtual classrooms, and educational technology for modern learning",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDM3MjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    stats: { clients: "35+", projects: "150+", satisfaction: "95%" },
    solutions: ["Learning Management Systems (LMS)", "Virtual Classroom Platforms", "Student Information Systems", "Adaptive Learning Technology", "Educational Content Management", "Learning Analytics & Insights"],
    gradient: "from-purple-500 to-pink-500",
    content: "Empower educational institutions with modern technology. From K-12 schools to universities, we provide comprehensive solutions for online learning and educational excellence."
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Omnichannel retail solutions, e-commerce platforms, and customer experience optimization",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDM3MjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    stats: { clients: "75+", projects: "350+", satisfaction: "97%" },
    solutions: ["E-Commerce Platforms", "Point of Sale (POS) Systems", "Customer Data Platforms", "AI-Powered Recommendation Engines", "Inventory Management Systems", "AR/VR Shopping Experiences"],
    gradient: "from-orange-500 to-red-500",
    content: "Transform retail experiences with integrated digital solutions. We help retailers create seamless omnichannel experiences and personalize customer engagement."
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Digital health solutions, patient management systems, and HIPAA-compliant medical technology",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzNzI0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stats: { clients: "50+", projects: "200+", satisfaction: "98%" },
    solutions: ["Electronic Health Records (EHR/EMR)", "Telemedicine Platforms", "AI-Powered Diagnostics", "Healthcare Analytics & BI", "Medical Device Integration", "HIPAA Compliance Solutions"],
    gradient: "from-red-500 to-pink-500",
    content: "Revolutionize patient care with secure, compliant healthcare technology. From EHR systems to telemedicine platforms, we help healthcare providers deliver better outcomes."
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Precision agriculture, farm management systems, and AgTech solutions for sustainable farming",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzM5NDAwMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    stats: { clients: "25+", projects: "100+", satisfaction: "94%" },
    solutions: ["Precision Agriculture Systems", "Farm Management Software", "IoT Sensor Networks", "Crop Monitoring & Analytics", "Supply Chain Traceability", "Weather & Climate Analytics"],
    gradient: "from-green-600 to-lime-500",
    content: "Drive agricultural innovation with smart farming solutions. We help farmers optimize yields, reduce waste, and embrace sustainable practices through technology."
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Smart grid solutions, energy management, and sustainability platforms for utilities sector",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDM3MjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    stats: { clients: "30+", projects: "120+", satisfaction: "97%" },
    solutions: ["Smart Grid Management", "Energy Consumption Analytics", "Renewable Energy Systems", "Asset Performance Management", "Customer Engagement Platforms", "Sustainability Reporting"],
    gradient: "from-yellow-500 to-orange-500",
    content: "Power the future with intelligent energy solutions. We help utilities optimize grid operations, integrate renewables, and advance sustainability goals."
  }
];

const industryFeatures = [
  { icon: TrendingUp, title: "Industry Expertise", description: "Deep domain knowledge across multiple sectors" },
  { icon: Shield, title: "Compliance Ready", description: "Built-in regulatory and security compliance" },
  { icon: Users, title: "Dedicated Teams", description: "Industry-specific specialists for your projects" },
  { icon: Sparkles, title: "Innovation Focus", description: "Cutting-edge solutions tailored to your industry" }
];

export function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#2E5EAA] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 sm:top-20 right-4 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-5 sm:mb-6">
              <Building2 className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300" />
              <span className="text-white font-semibold text-sm sm:text-base">Industries We Serve</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Transforming Industries with Technology
            </h1>
            <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
              Sector-specific solutions powered by deep industry expertise and cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Features */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {industryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Industry Explorer */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-4 sm:mb-6">Industry Solutions</h2>
            <p className="text-base sm:text-xl text-gray-600 px-2">Explore our comprehensive solutions tailored for your industry</p>
          </div>

          {/* Industry Tabs - horizontal scroll on mobile */}
          <div className="flex gap-3 sm:grid sm:grid-cols-4 lg:grid-cols-8 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:overflow-visible scrollbar-hide">
            {industries.map((industry, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedIndustry(index)}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 sm:flex-shrink p-4 sm:p-5 rounded-xl transition-all duration-300 flex flex-col items-center min-w-[80px] sm:min-w-0 ${
                  selectedIndustry === index
                    ? "bg-gradient-to-br " + industry.gradient + " text-white shadow-xl"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                }`}
              >
                <industry.icon className={`w-7 sm:w-8 h-7 sm:h-8 mb-1.5 sm:mb-2 ${selectedIndustry === index ? "text-white" : "text-gray-600"}`} />
                <div className={`text-xs sm:text-sm font-semibold text-center leading-tight ${selectedIndustry === index ? "text-white" : "text-gray-900"}`}>
                  {industry.title.split(" ")[0]}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Selected Industry Details */}
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image on top for mobile */}
              <div className="relative h-48 sm:h-64 lg:hidden">
                <ImageWithFallback
                  src={industries[selectedIndustry].image}
                  alt={industries[selectedIndustry].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${industries[selectedIndustry].gradient} opacity-20`} />
              </div>

              <div className="p-6 sm:p-10 lg:p-12">
                <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r ${industries[selectedIndustry].gradient} text-white mb-5 sm:mb-6`}>
                  {(() => { const Icon = industries[selectedIndustry].icon; return <Icon className="w-4 sm:w-5 h-4 sm:h-5" />; })()}
                  <span className="font-semibold text-sm sm:text-base">Featured Industry</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2647] mb-3 sm:mb-4">{industries[selectedIndustry].title}</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">{industries[selectedIndustry].description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    { value: industries[selectedIndustry].stats.clients, label: "Clients" },
                    { value: industries[selectedIndustry].stats.projects, label: "Projects" },
                    { value: industries[selectedIndustry].stats.satisfaction, label: "Satisfaction" }
                  ].map((s, i) => (
                    <div key={i} className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                      <div className="text-lg sm:text-2xl font-bold text-[#2E5EAA]">{s.value}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Solutions */}
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Key Solutions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {industries[selectedIndustry].solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mt-0.5">
                        <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">{solution}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 mt-6 sm:mt-8 text-sm sm:text-base">{industries[selectedIndustry].content}</p>
              </div>

              {/* Image on right for desktop */}
              <div className="relative h-full min-h-[500px] hidden lg:block">
                <ImageWithFallback
                  src={industries[selectedIndustry].image}
                  alt={industries[selectedIndustry].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${industries[selectedIndustry].gradient} opacity-20`} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#0A2647] to-[#2E5EAA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Don't See Your Industry?</h2>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2">
            We serve many more industries! Let's discuss how we can help transform your business.
          </p>
          <button className="px-7 py-3.5 bg-white text-[#0A2647] rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 text-sm sm:text-base">
            Contact Our Industry Experts
          </button>
        </div>
      </section>
    </div>
  );
}