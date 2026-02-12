import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691463620-188ca7c1a04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBJVCUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc3MDM3MjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About Hirewise"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-2xl -z-10 blur-3xl"></div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
              <span className="text-[#2E5EAA] font-semibold text-sm">About Hirewise</span>
            </div>
            <h2 className="text-4xl font-bold text-[#0A2647] mb-6">
              Empowering Enterprises with Intelligent IT Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hirewise is a leading IT solutions provider specializing in digital transformation, 
              cloud services, custom software development, and strategic IT staffing. With over a 
              decade of experience serving Fortune 500 companies and innovative startups, we bring 
              world-class expertise to every engagement.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to bridge the gap between cutting-edge technology and business outcomes, 
              delivering solutions that drive measurable results and sustainable growth.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#2E5EAA] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                  <p className="text-gray-600">500+ successful projects delivered across 30+ industries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#2E5EAA] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600">200+ certified professionals with deep domain expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#2E5EAA] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                  <p className="text-gray-600">Round-the-clock support for mission-critical systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
