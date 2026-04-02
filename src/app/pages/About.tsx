import { motion } from "motion/react";
import { 
  Target, Eye, Award, Users, TrendingUp, Globe, 
  Heart, Shield, Sparkles, Rocket, CheckCircle, Star
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const milestones = [
  { year: "2012", event: "Hirewise Founded", description: "Started with a vision to transform IT solutions" },
  { year: "2015", event: "100 Employees", description: "Expanded team across 5 countries" },
  { year: "2018", event: "Fortune 500 Clients", description: "Trusted by global industry leaders" },
  { year: "2020", event: "AI Innovation Lab", description: "Launched dedicated R&D division" },
  { year: "2023", event: "500+ Projects", description: "Delivered transformative solutions worldwide" },
  { year: "2026", event: "Industry Leader", description: "Recognized as top IT solutions provider" }
];

const awards = [
  { year: "2025", title: "Best IT Solutions Provider", organization: "Tech Excellence Awards", icon: Award },
  { year: "2024", title: "Top Workplace Culture", organization: "Great Place to Work", icon: Heart },
  { year: "2024", title: "Innovation in AI/ML", organization: "AI Summit Global", icon: Sparkles },
  { year: "2023", title: "Fastest Growing Tech Company", organization: "Deloitte Fast 500", icon: Rocket }
];

const stats = [
  { value: "500+", label: "Projects Delivered", icon: CheckCircle },
  { value: "200+", label: "Team Members", icon: Users },
  { value: "30+", label: "Industries Served", icon: Globe },
  { value: "98%", label: "Client Satisfaction", icon: Star }
];

const values = [
  { icon: Target, title: "Customer-Centric", description: "We put our clients at the heart of everything we do, delivering solutions that exceed expectations." },
  { icon: Sparkles, title: "Innovation First", description: "We embrace cutting-edge technologies and creative thinking to solve complex challenges." },
  { icon: Shield, title: "Integrity & Trust", description: "We operate with transparency, honesty, and unwavering commitment to ethical practices." },
  { icon: Heart, title: "People & Culture", description: "We invest in our team's growth and foster an inclusive, collaborative environment." },
  { icon: TrendingUp, title: "Excellence", description: "We strive for the highest quality in our work and continuous improvement in all we do." },
  { icon: Globe, title: "Global Impact", description: "We leverage technology to create positive change for businesses and communities worldwide." }
];

export function About() {
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-5 sm:mb-6">
              <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300" />
              <span className="text-white font-semibold text-sm sm:text-base">About Hirewise</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Empowering Enterprises Through Technology
            </h1>
            <p className="text-base sm:text-xl text-blue-100 leading-relaxed px-2">
              Since 2012, we've been transforming businesses with innovative IT solutions, 
              combining deep expertise, cutting-edge technology, and a passion for excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-[#2E5EAA] mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-7 sm:p-10 shadow-xl"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 sm:mb-6">
                <Target className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2647] mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To empower businesses worldwide with transformative IT solutions that drive 
                innovation, efficiency, and sustainable growth. We bridge the gap between 
                technology and business outcomes, delivering measurable value to every client.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-7 sm:p-10 shadow-xl"
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5 sm:mb-6">
                <Eye className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2647] mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To be the world's most trusted technology partner, recognized for our 
                innovative solutions, exceptional talent, and unwavering commitment to 
                client success. We envision a future where technology seamlessly enhances 
                every aspect of business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-4 sm:mb-6">Our Core Values</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              The principles that guide every decision, project, and interaction
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-[#2E5EAA] to-[#3B82F6] flex items-center justify-center mb-3 sm:mb-4">
                  <value.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#0A2647] to-[#2E5EAA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our Journey</h2>
            <p className="text-base sm:text-xl text-blue-100">Key milestones in our growth and evolution</p>
          </div>

          {/* Mobile: stacked cards */}
          <div className="lg:hidden space-y-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 ring-4 ring-white/20 shadow-lg" />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-400/60 to-transparent mt-1 min-h-[2rem]" />
                  )}
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 flex-1 mb-2">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-2">
                    <span className="text-lg font-bold text-[#0A2647]">{milestone.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{milestone.event}</h3>
                  <p className="text-blue-100 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: alternating layout */}
          <div className="hidden lg:block relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400 shadow-lg" />
            <div className="space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"}`}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4">
                          <div className="text-2xl font-bold text-[#0A2647]">{milestone.year}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{milestone.event}</h3>
                        <p className="text-blue-100 text-lg">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center relative z-10 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 ring-4 ring-white/30 shadow-lg" />
                      <motion.div
                        className="absolute w-6 h-6 rounded-full bg-blue-400/30"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </div>
                    <div className="flex-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-4 sm:mb-6">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <award.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{award.year}</div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">{award.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#0A2647] to-[#2E5EAA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2">
            Partner with Hirewise and experience the difference that expertise, 
            innovation, and dedication can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="px-7 py-3.5 bg-white text-[#0A2647] rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 text-sm sm:text-base">
              Get in Touch
            </button>
            <button className="px-7 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 text-sm sm:text-base">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}