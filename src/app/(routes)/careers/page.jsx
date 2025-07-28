"use client"
import { Briefcase, Upload, Send, Heart } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function CareersPage() {
  const [formType, setFormType] = useState("job")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    education: "",
    experience: "",
    whyJoin: "",
    availability: "",
    skills: "",
    resume: null,
  })

  const handleJobSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData object for job application
      const submitData = new FormData()
      
      // Add form fields (matching backend expectations)
      submitData.append('type', 'job') // Backend expects 'type', not 'formType'
      submitData.append('fullName', formData.fullName)
      submitData.append('contact', formData.contact)
      submitData.append('email', formData.email)
      submitData.append('education', formData.education)
      submitData.append('experience', formData.experience)
      submitData.append('whyJoin', formData.whyJoin)
      
      // Add resume file (required for job applications)
      if (formData.resume) {
        submitData.append('resume', formData.resume)
      }

      // Submit to API
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: submitData,
      })

      if (response.ok) {
        const result = await response.json()
        alert('Job Application submitted successfully! We will contact you for interviews as per our convenience.')
        
        // Reset form
        setFormData({
          fullName: "",
          contact: "",
          email: "",
          education: "",
          experience: "",
          whyJoin: "",
          availability: "",
          skills: "",
          resume: null,
        })
        
        // Reset file input
        const fileInput = document.getElementById('resume')
        if (fileInput) {
          fileInput.value = ''
        }
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Job application submission failed')
      }
    } catch (error) {
      console.error('Job submission error:', error)
      alert('There was an error submitting your job application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData object for volunteer application
      const submitData = new FormData()
      
      // Add form fields (matching backend expectations)
      submitData.append('type', 'volunteer') // Backend expects 'type', not 'formType'
      submitData.append('fullName', formData.fullName)
      submitData.append('contact', formData.contact)
      submitData.append('email', formData.email)
      submitData.append('education', formData.education)
      submitData.append('experience', formData.experience || '') // Optional for volunteers
      submitData.append('whyJoin', formData.whyJoin)
      
      // Add volunteer-specific fields
      submitData.append('availability', formData.availability)
      submitData.append('skills', formData.skills)
      
      // Resume is optional for volunteers, but can be included
      if (formData.resume) {
        submitData.append('resume', formData.resume)
      }

      // Submit to API
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: submitData,
      })

      if (response.ok) {
        const result = await response.json()
        alert('Volunteer Application submitted successfully! We will contact you as per our convenience.')
        
        // Reset form
        setFormData({
          fullName: "",
          contact: "",
          email: "",
          education: "",
          experience: "",
          whyJoin: "",
          availability: "",
          skills: "",
          resume: null,
        })
        
        // Reset file input
        const fileInput = document.getElementById('resume')
        if (fileInput) {
          fileInput.value = ''
        }
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Volunteer application submission failed')
      }
    } catch (error) {
      console.error('Volunteer submission error:', error)
      alert('There was an error submitting your volunteer application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Combined submit handler that routes to appropriate function
  const handleSubmit = (e) => {
    if (formType === "job") {
      handleJobSubmit(e)
    } else {
      handleVolunteerSubmit(e)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        e.target.value = ''
        return
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF, DOC, or DOCX file')
        e.target.value = ''
        return
      }
      
      setFormData({
        ...formData,
        resume: file,
      })
    }
  }

  // Reset form when switching between job and volunteer
  const handleFormTypeChange = (type) => {
    setFormType(type)
    setFormData({
      fullName: "",
      contact: "",
      email: "",
      education: "",
      experience: "",
      whyJoin: "",
      availability: "",
      skills: "",
      resume: null,
    })
    // Reset file input
    const fileInput = document.getElementById('resume')
    if (fileInput) {
      fileInput.value = ''
    }
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-[#428180] to-[#264A4A] text-white pt-20 pb-12 md:pt-28 md:pb-16" id="no-body-padding">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">Careers</h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto">Join Our Mission to Transform Education</p>
    <p className="text-lg mt-4 max-w-2xl mx-auto">
      Be part of a team that's reimagining education through Islamic values and innovative learning approaches.
      Applications are open year-round.
    </p>
  </div>
</section>


      {/* Why Join Us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-[#428180] mx-auto mb-3 md:mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#264A4A] mb-4 md:mb-6 font-serif">Why Work With Us?</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of passionate educators and professionals dedicated to holistic learning and meaningful
              impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
            <div className="relative w-full h-48 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Teamcollaboration.png"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] text-white p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 font-serif">Meaningful Impact</h3>
                <p className="text-sm md:text-base">
                  Shape the future of education and make a lasting difference in the lives of learners and families
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#778985] to-[#B2B5A9] text-white p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 font-serif">Islamic Values</h3>
                <p className="text-sm md:text-base">
                  Work in an environment that honors Islamic principles and supports your spiritual growth
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#B2B5A9] to-[#428180] text-white p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 font-serif">Innovation</h3>
                <p className="text-sm md:text-base">
                  Be part of cutting-edge educational approaches including project-based learning and holistic
                  development
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#264A4A] to-[#778985] text-white p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 font-serif">Community</h3>
                <p className="text-sm md:text-base">
                  Join a supportive community of like-minded professionals working towards common goals
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#428180] to-[#B2B5A9] text-white p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 font-serif">Growth</h3>
                <p className="text-sm md:text-base">
                  Continuous learning opportunities and professional development in an innovative educational setting
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#778985] to-[#264A4A] text-white p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 font-serif">Purpose</h3>
                <p className="text-sm md:text-base">
                  Align your career with your values and contribute to preparing individuals for this world and the
                  hereafter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Type Selection */}
      <section className="py-12 md:py-16 bg-[#FEFDF9]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#264A4A] mb-4 md:mb-6 font-serif">Choose Your Path</h2>
            <p className="text-base md:text-xl text-gray-600">
              Select the type of application that best fits your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <button
              onClick={() => handleFormTypeChange("job")}
              className={`p-6 md:p-8 rounded-2xl border-2 transition-all ${
                formType === "job"
                  ? "border-[#428180] bg-[#428180] text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-[#428180]"
              }`}
            >
              <Briefcase className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 font-serif">Job Application</h3>
              <p className="text-sm md:text-lg">Apply for full-time or part-time positions at Khudi Institute</p>
            </button>

            <button
              onClick={() => handleFormTypeChange("volunteer")}
              className={`p-6 md:p-8 rounded-2xl border-2 transition-all ${
                formType === "volunteer"
                  ? "border-[#428180] bg-[#428180] text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-[#428180]"
              }`}
            >
              <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 font-serif">Volunteer Application</h3>
              <p className="text-sm md:text-lg">Join as a volunteer to contribute your skills and expertise</p>
            </button>
          </div>

          <div className="relative w-full h-48 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Jobopportunities.jpeg"
              alt="Career opportunities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#264A4A] mb-3 md:mb-4 font-serif">
                {formType === "job" ? "Job Application" : "Volunteer Application"}
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Fill out the form below to {formType === "job" ? "apply for a position" : "join as a volunteer"} at
                Khudi Institute
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                    disabled={isSubmitting}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent text-sm md:text-base disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent text-sm md:text-base disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent text-sm md:text-base disabled:opacity-50"
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
                  disabled={isSubmitting}
                  rows={3}
                  placeholder="Please describe your educational background..."
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent text-sm md:text-base disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Experience {formType === "job" ? "*" : "(if applicable)"}
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required={formType === "job"}
                  disabled={isSubmitting}
                  rows={3}
                  placeholder="Please describe your relevant work experience..."
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent text-sm md:text-base disabled:opacity-50"
                />
              </div>

              {formType === "volunteer" && (
                <>
                  <div>
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                      Skills & Expertise *
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={3}
                      placeholder="What skills or expertise can you contribute as a volunteer?"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent text-sm md:text-base disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                      Availability *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent text-sm md:text-base disabled:opacity-50"
                    >
                      <option value="">Select your availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="evenings">Evenings</option>
                      <option value="flexible">Flexible</option>
                      <option value="specific-projects">Specific projects only</option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to {formType === "job" ? "join" : "volunteer at"} Khudi Institute? *
                </label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  placeholder="Tell us about your motivation and how you align with our mission..."
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent text-sm md:text-base disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  CV/Resume Attachment {formType === "job" ? "*" : "(optional)"}
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center hover:border-[#428180] transition-colors">
                  <Upload className="w-6 h-6 md:w-8 md:h-8 text-gray-400 mx-auto mb-2" />
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    required={formType === "job"}
                    disabled={isSubmitting}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label htmlFor="resume" className={`cursor-pointer ${isSubmitting ? 'pointer-events-none opacity-50' : ''}`}>
                    <span className="text-[#428180] font-medium text-sm md:text-base">Click to upload</span>
                    <span className="text-gray-500 text-sm md:text-base"> or drag and drop</span>
                  </label>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                  {formData.resume && <p className="text-sm text-green-600 mt-2">Selected: {formData.resume.name}</p>}
                </div>
              </div>

              <div className="text-center pt-4 md:pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#428180] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-[#264A4A] transition-colors inline-flex items-center text-sm md:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {isSubmitting ? 'Submitting...' : `Submit ${formType === "job" ? "Application" : "Volunteer Form"}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Process Information */}
      <section className="py-12 md:py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#264A4A] mb-4 md:mb-6 font-serif">
              Our {formType === "job" ? "Hiring" : "Volunteer Onboarding"} Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#428180] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-lg md:text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] mb-2 md:mb-3 font-serif">
                Application Review
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We review all applications carefully and respond to qualified candidates as soon as possible.
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#778985] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-lg md:text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] mb-2 md:mb-3 font-serif">Initial Interview</h3>
              <p className="text-sm md:text-base text-gray-600">
                Phone or video call to discuss your background and interest in our mission
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B2B5A9] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-lg md:text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] mb-2 md:mb-3 font-serif">In-Person Meeting</h3>
              <p className="text-sm md:text-base text-gray-600">
                Visit our institute, meet the team, and experience our learning environment
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#264A4A] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-lg md:text-2xl text-white font-bold">4</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] mb-2 md:mb-3 font-serif">Welcome Aboard</h3>
              <p className="text-sm md:text-base text-gray-600">
                {formType === "job" ? "Join our team" : "Begin volunteering"} and start your journey of transforming
                education
              </p>
            </div>
          </div>
          <div className="relative w-full h-48 md:h-80 rounded-2xl overflow-hidden shadow-lg mt-8 md:mt-12">
            <Image
              src="/Processillustration.png"
              alt="Process illustration"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>
    </div>
  )
}