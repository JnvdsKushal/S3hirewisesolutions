import { Trophy, Zap, Shield, Users, TrendingUp, Award } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "Industry Leadership",
    description: "Recognized as a top-tier technology partner by leading industry analysts and publications.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Agile methodologies ensure faster time-to-market without compromising quality.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security and compliance built into every solution we deliver.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We partner with you every step of the way.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Build for today, scale for tomorrow with future-proof architecture.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and QA processes ensure flawless execution.",
  },
];

export function WhyHirewiseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#0A2647]">Why Choose </span>
            <span className="bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] bg-clip-text text-transparent">
              Hirewise?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine deep technical expertise with business acumen to deliver solutions 
            that transform challenges into competitive advantages.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E5EAA] to-[#3B82F6] flex items-center justify-center mb-5">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
