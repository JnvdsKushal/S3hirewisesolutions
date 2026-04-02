import { motion } from "motion/react";
import { 
  Briefcase, MapPin, Clock, DollarSign, Heart, Coffee, 
  Rocket, TrendingUp, Users, Award, Star, ChevronRight,
  Laptop, Globe, GraduationCap, Calendar, X, Upload, Send
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const benefits = [
  { icon: DollarSign, title: "Competitive Salary", description: "Industry-leading compensation packages with performance bonuses" },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical, dental, and mental health coverage" },
  { icon: Laptop, title: "Remote-First Culture", description: "Work from anywhere with flexible hybrid options" },
  { icon: GraduationCap, title: "Learning & Development", description: "$5,000 annual budget for courses, certifications, and conferences" },
  { icon: Calendar, title: "Unlimited PTO", description: "Take the time you need to recharge and maintain work-life balance" },
  { icon: Coffee, title: "Lifestyle Perks", description: "Gym memberships, meal allowances, and team events" },
  { icon: Globe, title: "Global Opportunities", description: "Work with clients worldwide and travel opportunities" },
  { icon: Rocket, title: "Career Growth", description: "Clear advancement paths and mentorship programs" }
];

const values = [
  { icon: Star, title: "Excellence", description: "We strive for excellence in everything we do" },
  { icon: Users, title: "Collaboration", description: "Together we achieve more than we ever could alone" },
  { icon: Rocket, title: "Innovation", description: "We embrace change and drive innovation" },
  { icon: Award, title: "Integrity", description: "We act with honesty, transparency, and accountability" }
];

const jobOpenings = [
  { id: 1, title: "Senior AI/ML Engineer", department: "Engineering", location: "Remote / San Francisco, CA", type: "Full-time", experience: "5+ years", salary: "$150,000 - $200,000", skills: ["Python", "TensorFlow", "PyTorch", "AWS"], featured: true },
  { id: 2, title: "Cloud Solutions Architect", department: "Engineering", location: "Remote / New York, NY", type: "Full-time", experience: "7+ years", salary: "$160,000 - $210,000", skills: ["AWS", "Azure", "Kubernetes", "Terraform"], featured: true },
  { id: 3, title: "Full Stack Developer", department: "Engineering", location: "Remote / Austin, TX", type: "Full-time", experience: "3+ years", salary: "$120,000 - $160,000", skills: ["React", "Node.js", "TypeScript", "PostgreSQL"], featured: false },
  { id: 4, title: "DevOps Engineer", department: "Engineering", location: "Remote / Seattle, WA", type: "Full-time", experience: "4+ years", salary: "$130,000 - $170,000", skills: ["Docker", "Kubernetes", "CI/CD", "AWS"], featured: false },
  { id: 5, title: "Product Manager", department: "Product", location: "Remote / Boston, MA", type: "Full-time", experience: "5+ years", salary: "$140,000 - $180,000", skills: ["Product Strategy", "Agile", "Analytics", "Leadership"], featured: true },
  { id: 6, title: "UX/UI Designer", department: "Design", location: "Remote / Los Angeles, CA", type: "Full-time", experience: "4+ years", salary: "$110,000 - $150,000", skills: ["Figma", "Design Systems", "User Research", "Prototyping"], featured: false },
  { id: 7, title: "Cybersecurity Analyst", department: "Security", location: "Remote / Washington, DC", type: "Full-time", experience: "3+ years", salary: "$115,000 - $155,000", skills: ["SIEM", "Penetration Testing", "Compliance", "Risk Management"], featured: false },
  { id: 8, title: "Data Scientist", department: "Data", location: "Remote / Chicago, IL", type: "Full-time", experience: "4+ years", salary: "$125,000 - $165,000", skills: ["Python", "SQL", "Machine Learning", "Statistics"], featured: false }
];

const hiringProcess = [
  { step: "01", title: "Application Review", description: "We carefully review your application and resume within 48 hours", duration: "1-2 days" },
  { step: "02", title: "Initial Screening", description: "30-minute call with our recruiter to discuss your background and expectations", duration: "30 mins" },
  { step: "03", title: "Technical Assessment", description: "Take-home project or live coding session tailored to the role", duration: "2-3 hours" },
  { step: "04", title: "Team Interviews", description: "Meet with your potential team members and hiring manager", duration: "2-3 hours" },
  { step: "05", title: "Final Interview", description: "Leadership interview and culture fit assessment", duration: "1 hour" },
  { step: "06", title: "Offer", description: "Receive your offer and begin your journey with Hirewise!", duration: "1-2 days" }
];

export function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", linkedIn: "", portfolio: "", coverLetter: "", resumeFile: null as File | null,
  });
  const departments = ["All", "Engineering", "Product", "Design", "Data", "Security"];
  const filteredJobs = selectedDepartment === "All" ? jobOpenings : jobOpenings.filter(job => job.department === selectedDepartment);

  const handleApplyClick = (job: typeof jobOpenings[0]) => { setSelectedJob(job); setShowApplicationForm(true); };
  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setFormData({ fullName: "", email: "", phone: "", linkedIn: "", portfolio: "", coverLetter: "", resumeFile: null });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFormData({ ...formData, resumeFile: e.target.files[0] });
  };
  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for applying to ${selectedJob?.title}! We'll review your application and get back to you soon.`);
    handleCloseForm();
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-5 sm:mb-6">
                <Briefcase className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300" />
                <span className="text-white font-semibold text-sm sm:text-base">Join Our Team</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Build the Future with Us
              </h1>
              <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Join a team of brilliant minds solving complex challenges and transforming 
                businesses with cutting-edge technology. Your career, elevated.
              </p>
              <button
                onClick={() => document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#0A2647] rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              >
                View Open Positions
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden sm:block"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzAzNzI0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Join Hirewise Team"
                className="w-full h-[350px] sm:h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "200+", label: "Team Members" },
              { value: "15+", label: "Countries" },
              { value: "4.9/5", label: "Glassdoor Rating" },
              { value: "95%", label: "Employee Retention" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E5EAA] mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-xs sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-4 sm:mb-6">Why Join Hirewise?</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We believe in taking care of our team. Here's what makes Hirewise a great place to work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-3 sm:mb-4">
                  <benefit.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-4 sm:mb-6">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 sm:w-20 h-14 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-[#2E5EAA] to-[#3B82F6] flex items-center justify-center">
                  <value.icon className="w-7 sm:w-10 h-7 sm:h-10 text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-4 sm:mb-6">Open Positions</h2>
            <p className="text-base sm:text-xl text-gray-600">Find your perfect role and start your journey with us</p>
          </div>

          {/* Department Filter - horizontal scroll on mobile */}
          <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:justify-center scrollbar-hide">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`flex-shrink-0 px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                  selectedDepartment === dept
                    ? "bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  job.featured ? "border-2 border-[#2E5EAA]" : "border border-gray-100"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900">{job.title}</h3>
                      {job.featured && (
                        <span className="px-2.5 py-0.5 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-semibold rounded-full flex-shrink-0">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3 sm:mb-4 text-gray-600 text-sm">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate max-w-[180px] sm:max-w-none">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-blue-50 text-[#2E5EAA] text-xs sm:text-sm font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-green-600 font-semibold text-sm sm:text-base">
                      <DollarSign className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-lg font-semibold hover:shadow-lg active:scale-95 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      Apply Now
                      <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2647] mb-4 sm:mb-6">Our Hiring Process</h2>
            <p className="text-base sm:text-xl text-gray-600">Transparent, fair, and designed to help you succeed</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {hiringProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 sm:p-6 border-2 border-gray-100"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#2E5EAA] opacity-20 mb-3 sm:mb-4">{step.step}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{step.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#2E5EAA] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#0A2647] to-[#2E5EAA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Make an Impact?</h2>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 px-2">
            Join our team of innovators and help shape the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="px-7 py-3.5 bg-white text-[#0A2647] rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 text-sm sm:text-base">
              View All Open Positions
            </button>
            <button className="px-7 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 text-sm sm:text-base">
              Submit General Application
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto"
          >
            <div className="p-5 sm:p-8">
              {/* Drag handle on mobile */}
              <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4 sm:hidden" />

              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <div className="flex-1 pr-4">
                  <h2 className="text-xl sm:text-3xl font-bold text-[#0A2647] mb-1 sm:mb-2">
                    Apply for {selectedJob.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <button onClick={handleCloseForm} className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p-1">
                  <X className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmitApplication} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Full Name *</label>
                    <input
                      type="text" name="fullName" value={formData.fullName} onChange={handleInputChange}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5EAA] focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="John Doe" required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Email Address *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleInputChange}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5EAA] focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="john@example.com" required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Phone Number *</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5EAA] focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567" required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">LinkedIn Profile</label>
                    <input
                      type="url" name="linkedIn" value={formData.linkedIn} onChange={handleInputChange}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5EAA] focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="linkedin.com/in/johndoe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Portfolio / Website</label>
                  <input
                    type="url" name="portfolio" value={formData.portfolio} onChange={handleInputChange}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5EAA] focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Upload Resume *</label>
                  <input type="file" id="resume-upload" onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx" required />
                  <label
                    htmlFor="resume-upload"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#2E5EAA] hover:bg-blue-50 transition-all"
                  >
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600 text-sm">{formData.resumeFile ? formData.resumeFile.name : "Choose file or drag here"}</span>
                  </label>
                  <p className="mt-1 text-xs text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">Cover Letter</label>
                  <textarea
                    name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows={5}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5EAA] focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us why you're a great fit for this role..."
                  />
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-2">
                  <button
                    type="button" onClick={handleCloseForm}
                    className="px-5 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-3 bg-gradient-to-r from-[#2E5EAA] to-[#3B82F6] text-white rounded-lg font-semibold hover:shadow-lg active:scale-95 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}