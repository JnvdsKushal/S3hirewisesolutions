export function ClientsSection() {
  // Mock client logos - in a real application, these would be actual company logos
  const clients = [
    { name: "TechCorp", color: "#2E5EAA" },
    { name: "CloudSys", color: "#3B82F6" },
    { name: "DataFlow", color: "#4A90E2" },
    { name: "SecureNet", color: "#2E5EAA" },
    { name: "InnovateLab", color: "#3B82F6" },
    { name: "DigitalEdge", color: "#4A90E2" },
    { name: "SmartOps", color: "#2E5EAA" },
    { name: "CloudVault", color: "#3B82F6" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2647] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across the globe
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50/40 rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${client.color} 0%, ${client.color}dd 100%)`,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="white" opacity="0.9" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke={client.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-bold text-gray-700">{client.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2E5EAA] mb-2">500+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2E5EAA] mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2E5EAA] mb-2">30+</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2E5EAA] mb-2">12+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
