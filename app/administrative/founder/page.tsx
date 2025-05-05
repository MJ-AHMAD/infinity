import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Globe,
  Heart,
  Mail,
  MapPin,
  Phone,
  Target,
  Users,
} from "lucide-react"

export default function FounderProfile() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-8">
            <div className="relative mt-16 md:mt-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Md Jafor Ahmad"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-green-600 text-white p-2 rounded-full shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-800/60 backdrop-blur-sm px-3 py-1 rounded-full text-blue-100 text-sm mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Founder & Visionary
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Md Jafor Ahmad</h1>
              <p className="text-xl text-blue-100 font-light max-w-2xl">
                Transforming Cox's Bazar through education, innovation, and sustainable development
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-blue-100">
                  <MapPin className="w-4 h-4" />
                  <span>Cox's Bazar, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Calendar className="w-4 h-4" />
                  <span>Joined 2017</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-200"></div>
              <h2 className="text-blue-800 font-medium">Vision Statement</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-200"></div>
            </div>

            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 text-center italic">
              "With a Vision for Tomorrow's Leaders: Creating an educated, sustainable, and prosperous Cox's Bazar by
              2030, where tradition and innovation thrive together."
            </blockquote>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100 transform transition-all hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Education</h3>
                <p className="text-gray-600">
                  Bridging traditional values with modern skills to create holistic educational opportunities for all.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100 transform transition-all hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  Developing Cox's Bazar as a model of sustainable tourism and economic growth that benefits all.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100 transform transition-all hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Community</h3>
                <p className="text-gray-600">
                  Empowering local communities through inclusive development that respects cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Transformative Journey</h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 transform md:translate-x-[-0.5px]"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* 2014 */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="order-1 md:order-1 md:w-1/2 flex justify-end">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 md:mr-8 w-full md:max-w-sm transform transition-all hover:shadow-lg">
                    <span className="text-sm font-semibold text-blue-600 block mb-1">2014</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Help for Human Foundation</h3>
                    <p className="text-gray-600">
                      Established first educational initiative to ensure no child is denied education due to financial
                      constraints.
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-blue-600 rounded-full border-4 border-white transform md:translate-x-[-50%] flex items-center justify-center text-white">
                  <span className="text-xs font-bold">1</span>
                </div>

                <div className="order-2 md:order-2 md:w-1/2"></div>
              </div>

              {/* 2017 */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="order-2 md:order-1 md:w-1/2"></div>

                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-blue-600 rounded-full border-4 border-white transform md:translate-x-[-50%] flex items-center justify-center text-white">
                  <span className="text-xs font-bold">2</span>
                </div>

                <div className="order-1 md:order-2 md:w-1/2">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 md:ml-8 w-full md:max-w-sm transform transition-all hover:shadow-lg">
                    <span className="text-sm font-semibold text-blue-600 block mb-1">2017</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cox's Bazar Initiative</h3>
                    <p className="text-gray-600">
                      Relocated to Cox's Bazar to support Rohingya communities and develop comprehensive support
                      programs for the region.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="order-1 md:order-1 md:w-1/2 flex justify-end">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 md:mr-8 w-full md:max-w-sm transform transition-all hover:shadow-lg">
                    <span className="text-sm font-semibold text-blue-600 block mb-1">2020</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Quraner Fariwala</h3>
                    <p className="text-gray-600">
                      Founded initiative to produce enhanced Quranic learning materials, distributing over 270,000
                      copies to educational institutions.
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-blue-600 rounded-full border-4 border-white transform md:translate-x-[-50%] flex items-center justify-center text-white">
                  <span className="text-xs font-bold">3</span>
                </div>

                <div className="order-2 md:order-2 md:w-1/2"></div>
              </div>

              {/* Present */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="order-2 md:order-1 md:w-1/2"></div>

                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-green-600 rounded-full border-4 border-white transform md:translate-x-[-50%] flex items-center justify-center text-white">
                  <span className="text-xs font-bold">4</span>
                </div>

                <div className="order-1 md:order-2 md:w-1/2">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 md:ml-8 w-full md:max-w-sm transform transition-all hover:shadow-lg">
                    <span className="text-sm font-semibold text-green-600 block mb-1">Present</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted Ally</h3>
                    <p className="text-gray-600">
                      Leading comprehensive development project for Cox's Bazar focusing on sustainable tourism,
                      education, and technological advancement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Leadership Philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:translate-y-[-8px]">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassionate Action</h3>
              <p className="text-blue-100">
                Leading with empathy and understanding of community needs, turning compassion into meaningful action.
              </p>
            </div>

            <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:translate-y-[-8px]">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Self-Initiative</h3>
              <p className="text-blue-100">
                Taking personal responsibility for change rather than waiting for institutional support or external
                validation.
              </p>
            </div>

            <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:translate-y-[-8px]">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visionary Planning</h3>
              <p className="text-blue-100">
                Focusing on long-term, sustainable change that creates lasting impact for generations to come.
              </p>
            </div>

            <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:translate-y-[-8px]">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusive Growth</h3>
              <p className="text-blue-100">
                Ensuring development benefits all regardless of religion, ethnicity, gender, or ability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2030 Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vision for Cox's Bazar 2030</h2>
            <p className="text-gray-600 text-lg">
              A comprehensive transformation plan to create a model district of sustainable development
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-100 transform translate-y-[-50%]"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-white shadow-lg">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Education Revolution</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>95% literacy rate across all demographics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Integration of traditional values with digital skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Universal access to quality education</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-white shadow-lg">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Sustainable Tourism</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>World-class eco-friendly tourist destination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Preservation of natural resources and beauty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Community-based tourism initiatives</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-white shadow-lg">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Digital Transformation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>100% digital literacy among youth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Smart city infrastructure implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Technology-driven economic opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Join Our Vision
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-blue-700 p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                <p className="mb-8 text-blue-100">
                  I'm always open to discussing new projects, ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-200 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-blue-100">contact@mjahmad.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-200 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-blue-100">+880 1XXX-XXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-200 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-blue-100">Cox's Bazar, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-600">
                  <h3 className="font-medium mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://linkedin.com/in/jafor-ahmad"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://github.com/MJ-AHMAD"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="https://web.facebook.com/mj.ahmad.768732"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

