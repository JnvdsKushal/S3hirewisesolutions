import { motion } from "motion/react";
import { Users, Target, TrendingUp, Award, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function ITStaffing() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                IT Staffing & Recruitment
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Access top-tier tech talent with our comprehensive recruitment and staff augmentation services.
              </p>
              <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                Find Talent
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHJlY3J1aXRtZW50fGVufDF8fHx8MTc3MDM3MjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="IT Staffing"
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
              { icon: Target, title: "Contract Staffing", description: "Flexible short and long-term engagements" },
              { icon: Users, title: "Direct Hire", description: "Permanent placement of top tech professionals" },
              { icon: TrendingUp, title: "Staff Augmentation", description: "Scale your team quickly with skilled resources" },
              { icon: Award, title: "Executive Search", description: "Find exceptional leadership for your organization" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
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
