import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Globe } from "lucide-react"
import Image from "next/image" // Import Image component

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#428180] to-[#264A4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Get in Touch with Khudi Institute</p>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            We're here to answer your questions and help you join our transformative learning community
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-[#264A4A] mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our programs, admissions, or want to learn more about our approach to education?
                We'd love to hear from you.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#428180] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#264A4A] mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">General Inquiries:</p>
                    <a href="mailto:info@khudiinstitute.com" className="text-[#428180] hover:underline">
                      info@khudiinstitute.com
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Admissions:</p>
                    <a href="mailto:admissions@khudiinstitute.com" className="text-[#428180] hover:underline">
                      admissions@khudiinstitute.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#778985] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#264A4A] mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">School Head:</p>
                    <a href="tel:0302-5019924" className="text-[#428180] hover:underline text-lg font-medium">
                      0302-5019924
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Admin Office:</p>
                    <a href="tel:+92-XXX-XXXXXXX" className="text-[#428180] hover:underline">
                      +92-XXX-XXXXXXX
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#B2B5A9] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#264A4A] mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-2">
                      [Address to be provided]
                      <br />
                      [City, Province, Pakistan]
                    </p>
                    <button className="text-[#428180] hover:underline">View on Google Maps</button>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#264A4A] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#264A4A] mb-2">Office Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#FEFDF9] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#264A4A] mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="homeschool">Homeschooling Support</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="community">Community Programs</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#428180] text-white py-3 px-6 rounded-lg hover:bg-[#264A4A] transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Quick Links */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#264A4A] mb-6">Connect With Us</h2>
            <p className="text-xl text-gray-600">
              Follow us on social media for updates, insights, and community highlights
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="#"
              className="w-16 h-16 bg-[#428180] rounded-full flex items-center justify-center hover:bg-[#264A4A] transition-colors"
            >
              <Facebook className="w-8 h-8 text-white" />
            </a>
            <a
              href="#"
              className="w-16 h-16 bg-[#778985] rounded-full flex items-center justify-center hover:bg-[#264A4A] transition-colors"
            >
              <Instagram className="w-8 h-8 text-white" />
            </a>
            <a
              href="#"
              className="w-16 h-16 bg-[#B2B5A9] rounded-full flex items-center justify-center hover:bg-[#264A4A] transition-colors"
            >
              <Globe className="w-8 h-8 text-white" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Quick Admissions</h3>
              <p className="text-gray-600 mb-4">Ready to join our community? Start your application process today.</p>
              <a
                href="/admissions"
                className="bg-[#428180] text-white px-6 py-2 rounded-lg hover:bg-[#264A4A] transition-colors inline-block"
              >
                Apply Now
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Schedule a Visit</h3>
              <p className="text-gray-600 mb-4">Experience our learning environment firsthand with a campus tour.</p>
              <button className="bg-[#778985] text-white px-6 py-2 rounded-lg hover:bg-[#264A4A] transition-colors">
                Book Tour
              </button>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Join Our Team</h3>
              <p className="text-gray-600 mb-4">Passionate about education? Explore career opportunities with us.</p>
              <a
                href="/careers"
                className="bg-[#B2B5A9] text-white px-6 py-2 rounded-lg hover:bg-[#264A4A] transition-colors inline-block"
              >
                View Careers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[#264A4A] mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the community, easily accessible for families
            </p>
          </div>

          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">In the meantime, contact us for detailed directions to our campus</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
