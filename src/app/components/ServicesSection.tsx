import { Brain, TrendingUp, Code, Cloud, Shield, Users, Database, Smartphone } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.",
    gradient: "from-blue-500 to-cyan-500",
    link: "/services/ai-machine-learning",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge technology strategies and implementation roadmaps.",
    gradient: "from-purple-500 to-pink-500",
    link: "/services/digital-transformation",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Build scalable, secure applications tailored to your unique business requirements and workflows.",
    gradient: "from-orange-500 to-red-500",
    link: "/services/software-development",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Migrate, optimize, and manage your infrastructure on AWS, Azure, and Google Cloud Platform.",
    gradient: "from-green-500 to-teal-500",
    link: "/services/cloud-services",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security audits, compliance, and threat management.",
    gradient: "from-red-500 to-orange-500",
    link: "/services/cybersecurity",
  },
  {
    icon: Users,
    title: "IT Staffing",
    description: "Access top-tier tech talent with our comprehensive recruitment and staff augmentation services.",
    gradient: "from-indigo-500 to-purple-500",
    link: "/services/it-staffing",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and business intelligence.",
    gradient: "from-cyan-500 to-blue-500",
    link: "/services/data-analytics",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Create exceptional mobile experiences for iOS and Android with native and cross-platform solutions.",
    gradient: "from-pink-500 to-rose-500",
    link: "/services/mobile-development",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2647] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your digital journey and 
            unlock new possibilities for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient accent line on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              ></div>

              {/* Icon */}
              <div className="mb-5">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-4 flex items-center gap-2 text-[#2E5EAA] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={service.link}>Learn More</Link>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}