import { motion } from "motion/react";
import { Brain, CheckCircle, ArrowRight, Zap, TrendingUp, Target, BarChart3, Workflow } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const capabilities = [
  {
    icon: Workflow,
    title: "Intelligent Process Automation",
    description: "Automate repetitive tasks and workflows using AI-powered solutions that learn and adapt.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Leverage machine learning models to forecast trends and make data-driven decisions.",
  },
  {
    icon: Target,
    title: "Computer Vision",
    description: "Extract insights from images and video with state-of-the-art vision AI technology.",
  },
  {
    icon: Zap,
    title: "Natural Language Processing",
    description: "Process and understand text data at scale with advanced NLP algorithms.",
  },
];

const useCases = [
  {
    industry: "Healthcare",
    application: "Medical imaging analysis and diagnostic assistance",
    impact: "35% faster diagnosis accuracy",
  },
  {
    industry: "Retail",
    application: "Personalized recommendation engines and demand forecasting",
    impact: "42% increase in customer retention",
  },
  {
    industry: "Finance",
    application: "Fraud detection and risk assessment automation",
    impact: "68% reduction in false positives",
  },
  {
    industry: "Manufacturing",
    application: "Predictive maintenance and quality control systems",
    impact: "51% decrease in downtime",
  },
];

const technologies = [
  "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI GPT", "Hugging Face",
  "AWS SageMaker", "Azure ML", "Google Vertex AI", "MLflow", "Kubeflow", "Apache Spark"
];

export function AIMachineLearning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#2E5EAA] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
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
                <Brain className="w-5 h-5 text-cyan-300" />
                <span className="text-white font-semibold">AI & Machine Learning Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with Intelligent AI
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Harness the power of artificial intelligence and machine learning to automate processes, 
                unlock insights, and drive innovation across your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-[#0A2647] rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
                  View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzAzNzI0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI & Machine Learning"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2647] mb-6">
              Our AI/ML Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI and machine learning services from strategy to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <capability.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2647] mb-6">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI solutions deliver measurable results across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#0A2647]">
                    {useCase.industry}
                  </h3>
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  {useCase.application}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className="font-semibold text-[#0A2647]">{useCase.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2647] to-[#2E5EAA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Technologies We Work With
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leveraging cutting-edge tools and frameworks to build robust AI solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-200"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0A2647] mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI and machine learning solutions can drive innovation and growth for your organization.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
