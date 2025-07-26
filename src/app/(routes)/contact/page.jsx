"use client"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Globe,
  Send,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        alert(result.message)
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Message submission failed')
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      alert('There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-[#428180] to-[#264A4A] text-white pt-20 pb-12 md:pt-28 md:pb-16"
        id="no-body-padding"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in Touch with Khudi Institute
          </p>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            We're here to answer your questions and help you join our
            transformative learning community
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-[#264A4A] mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our programs, admissions, or want to learn
                more about our approach to education? We'd love to hear from
                you.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#428180] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#264A4A] mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-1">General Inquiries:</p>
                    <a
                      href="mailto:info@khudi.institute"
                      className="text-[#428180] hover:underline"
                    >
                      info@khudi.institute
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Admissions:</p>
                    <a
                      href="mailto:info@khudi.institute"
                      className="text-[#428180] hover:underline"
                    >
                      info@khudi.institute
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#778985] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#264A4A] mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mb-1">School Head:</p>
                    <a
                      href="tel:0302-5019924"
                      className="text-[#428180] hover:underline text-lg font-medium"
                    >
                      0302-5019924
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Admin Office:</p>
                    <a
                      href="tel:+92-XXX-XXXXXXX"
                      className="text-[#428180] hover:underline"
                    >
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
                    <h3 className="text-xl font-semibold text-[#264A4A] mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 mb-2">
                      House # 1, Lane 9, main Park Road, Chattha Bakhtawar,
                      <br />
                      Islamabad, Pakistan
                    </p>
                    <a
                      href="https://maps.app.goo.gl/zxNBL7yZAkF6QA5P7?g_st=iwb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#428180] hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#264A4A] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#264A4A] mb-2">
                      Office Hours
                    </h3>
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
              <h3 className="text-2xl font-bold text-[#264A4A] mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent disabled:opacity-50"
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    disabled={isSubmitting}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#428180] text-white py-3 px-6 rounded-lg hover:bg-[#264A4A] transition-colors font-medium inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
            <h2 className="text-4xl font-bold text-[#264A4A] mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600">
              Follow us on social media for updates, insights, and community
              highlights
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
              href="https://www.instagram.com/khudi.institute"
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
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">
                Quick Admissions
              </h3>
              <p className="text-gray-600 mb-4">
                Ready to join our community? Start your application process
                today.
              </p>
              <a
                href="/admissions"
                className="bg-[#428180] text-white px-6 py-2 rounded-lg hover:bg-[#264A4A] transition-colors inline-block"
              >
                Apply Now
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">
                Schedule a Visit
              </h3>
              <p className="text-gray-600 mb-4">
                Experience our learning environment firsthand with a campus
                tour.
              </p>
              <button className="bg-[#778985] text-white px-6 py-2 rounded-lg hover:bg-[#264A4A] transition-colors">
                Book Tour
              </button>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">
                Join Our Team
              </h3>
              <p className="text-gray-600 mb-4">
                Passionate about education? Explore career opportunities with
                us.
              </p>
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
              Located in the heart of the community, easily accessible for
              families
            </p>
          </div>

          <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13619.29876412549!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzAyLjAiTiA3M8KwMDMnMTguNCJF!5e0!3m2!1sen!2s!4v1628611265974!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}