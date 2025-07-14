"use client"
import { Briefcase, Upload, Send } from "lucide-react"
import { useState } from "react"
import Image from "next/image" // Import Image component

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    education: "",
    experience: "",
    whyJoin: "",
    cv: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Career application submitted:", formData)
    alert("Application submitted successfully! We will contact you for interviews as per our convenience.")
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        cv: e.target.files[0],
      })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#428180] to-[#264A4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Careers</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Join Our Mission to Transform Education</p>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Be part of a team that's reimagining education through Islamic values and innovative learning approaches.
            Applications are open year-round.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Briefcase className="w-12 h-12 text-[#428180] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-[#264A4A] mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of passionate educators and professionals dedicated to holistic learning and meaningful
              impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Teamcollaboration.jpeg"
                alt="Team collaboration"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Meaningful Impact</h3>
                <p>Shape the future of education and make a lasting difference in the lives of learners and families</p>
              </div>

              <div className="bg-gradient-to-br from-[#778985] to-[#B2B5A9] text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Islamic Values</h3>
                <p>Work in an environment that honors Islamic principles and supports your spiritual growth</p>
              </div>

              <div className="bg-gradient-to-br from-[#B2B5A9] to-[#428180] text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p>
                  Be part of cutting-edge educational approaches including project-based learning and holistic
                  development
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#264A4A] to-[#778985] text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p>Join a supportive community of like-minded professionals working towards common goals</p>
              </div>

              <div className="bg-gradient-to-br from-[#428180] to-[#B2B5A9] text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Growth</h3>
                <p>
                  Continuous learning opportunities and professional development in an innovative educational setting
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#778985] to-[#264A4A] text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Purpose</h3>
                <p>
                  Align your career with your values and contribute to preparing individuals for this world and the
                  hereafter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#264A4A] mb-6">Open Opportunities</h2>
            <p className="text-xl text-gray-600">We're always looking for passionate individuals to join our team</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
             <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/Jobopportunities.jpeg" // Place this in your public folder
        alt="Job opportunities"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-[#264A4A] mb-3">Teaching Positions</h3>
                <p className="text-gray-600 mb-4">
                  Join our faculty to deliver project-based learning experiences rooted in Islamic values
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Subject specialists for various domains</li>
                  <li>• Early childhood educators</li>
                  <li>• Islamic studies teachers</li>
                  <li>• Project mentors and facilitators</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-[#264A4A] mb-3">Administrative Roles</h3>
                <p className="text-gray-600 mb-4">
                  Support our operations and help create an environment where learning thrives
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Administrative coordinators</li>
                  <li>• Student support specialists</li>
                  <li>• Community engagement coordinators</li>
                  <li>• Operations and facilities management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Don't see a specific role? We're always interested in hearing from passionate individuals who share our
              vision.
            </p>
            <p className="text-[#428180] font-semibold">
              Apply below and tell us how you'd like to contribute to our mission!
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#264A4A] mb-4">Career Application</h2>
              <p className="text-gray-600">Fill out the form below to apply for a position at Khudi Institute</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                  Education *
                </label>
                <textarea
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  placeholder="Please describe your educational background..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Experience (if applicable)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Please describe your relevant work experience..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join Khudi Institute? *
                </label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Tell us about your motivation and how you align with our mission..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                  CV Attachment *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#428180] transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label htmlFor="cv" className="cursor-pointer">
                    <span className="text-[#428180] font-medium">Click to upload</span>
                    <span className="text-gray-500"> or drag and drop</span>
                  </label>
                  {formData.cv && <p className="text-sm text-green-600 mt-2">Selected: {formData.cv.name}</p>}
                </div>
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-[#428180] text-white px-8 py-3 rounded-lg hover:bg-[#264A4A] transition-colors inline-flex items-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Process Information */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#264A4A] mb-6">Our Hiring Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#428180] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Application Review</h3>
              <p className="text-gray-600">We review all applications carefully and respond to qualified candidates</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#778985] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Initial Interview</h3>
              <p className="text-gray-600">
                Phone or video call to discuss your background and interest in our mission
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B2B5A9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">In-Person Meeting</h3>
              <p className="text-gray-600">
                Visit our institute, meet the team, and experience our learning environment
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#264A4A] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Welcome Aboard</h3>
              <p className="text-gray-600">Join our team and begin your journey of transforming education</p>
            </div>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mt-12">
            <Image src="/Hiringprocess.jpeg" alt="Hiring process" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
    </>
  )
}
