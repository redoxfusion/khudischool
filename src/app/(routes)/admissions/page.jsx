"use client"
import { GraduationCap, Users, Send } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function AdmissionsPage() {
  const [formType, setFormType] = useState("regular")
  const [formData, setFormData] = useState({
    learnerName: "",
    parentName: "",
    email: "",
    contact: "",
    gender: "",
    age: "",
    level: "",
    facilities: "",
  })
  const [loading, setLoading] = useState(false)

 const handleRegularSubmit = async () => {
  const submission = {
    formType: "regular", // changed
    learnerName: formData.learnerName,
    email: formData.email,
    contact: formData.contact,
    parentName: formData.parentName,
    gender: formData.gender,
    age: formData.age,
    level: formData.level,
  }

  const response = await fetch("/api/admissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  })

  return response
}

const handleHomeschoolSubmit = async () => {
  const submission = {
    formType: "homeschool", // changed
    learnerName: formData.learnerName,
    email: formData.email,
    contact: formData.contact,
    facilities: formData.facilities,
  }

  const response = await fetch("/api/admissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  })

  return response
}

const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  try {
    let response
    if (formType === "regular") {
      response = await handleRegularSubmit()
    } else {
      response = await handleHomeschoolSubmit()
    }

    const result = await response.json()
    alert("Application submitted successfully!")

    // Reset form
    setFormData({
      learnerName: "",
      parentName: "",
      email: "",
      contact: "",
      gender: "",
      age: "",
      level: "",
      facilities: "",
    })
  } catch (err) {
    console.error("Submission error:", err)
    alert("There was an error submitting your application.")
  } finally {
    setLoading(false)
  }
}

const handleInputChange = (e) => {
  const { name, value } = e.target
  setFormData((prev) => ({ ...prev, [name]: value }))
}


  return (
    <div >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#428180] to-[#264A4A] text-white py-20" id="no-body-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Admissions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Join us in our journey to elevate education standards</p>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Applications are open year-round. Apply or pre-register today to become part of our transformative learning
            community.
          </p>
        </div>
      </section>

      {/* Application Type Selection */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#264A4A] mb-6">Choose Your Path</h2>
            <p className="text-xl text-gray-600">Select the type of application that best fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <button
              onClick={() => setFormType("regular")}
              className={`p-8 rounded-2xl border-2 transition-all ${
                formType === "regular"
                  ? "border-[#428180] bg-[#428180] text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-[#428180]"
              }`}
            >
              <GraduationCap className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">For Regular Students</h3>
              <p className="text-lg">Full-time enrollment in our transformative 7-year journey program</p>
            </button>

            <button
              onClick={() => setFormType("homeschool")}
              className={`p-8 rounded-2xl border-2 transition-all ${
                formType === "homeschool"
                  ? "border-[#428180] bg-[#428180] text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-[#428180]"
              }`}
            >
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">For Homeschooling Families</h3>
              <p className="text-lg">Flexible access to our facilities, resources, and community programs</p>
            </button>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mt-8">
            <Image
              src="/studying.jpeg"
              alt="Students studying"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#264A4A] mb-4">
                {formType === "regular" ? "Regular Student Application" : "Homeschooling Family Application"}
              </h2>
              <p className="text-gray-600">Fill out the form below to begin your journey with Khudi Institute</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="learnerName" className="block text-sm font-medium text-gray-700 mb-2">
                    {formType === "regular" ? "Learner's Name" : "Learner's Name / Family Owner's Name"}
                  </label>
                  <input
                    type="text"
                    id="learnerName"
                    name="learnerName"
                    value={formData.learnerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                  />
                </div>

                {formType === "regular" && (
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                      Parent Name
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number
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
              </div>

              {formType === "regular" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                        Student's Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                        Student's Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="3"
                        max="18"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-2">
                      Level You're Applying For
                    </label>
                    <select
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                    >
                      <option value="">Select Level</option>
                      <option value="FY-1">FY-1 (3-4 years)</option>
                      <option value="FY-2">FY-2</option>
                      <option value="FY-3">FY-3</option>
                      <option value="Level-1">Level 1</option>
                      <option value="Level-2">Level 2</option>
                      <option value="Level-3">Level 3</option>
                      <option value="Level-4">Level 4</option>
                      <option value="Level-5">Level 5 (10-11 years)</option>
                    </select>
                  </div>
                </>
              )}

              {formType === "homeschool" && (
                <div>
                  <label htmlFor="facilities" className="block text-sm font-medium text-gray-700 mb-2">
                    What facilities do you want to avail?
                  </label>
                  <select
                    id="facilities"
                    name="facilities"
                    value={formData.facilities}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#428180] focus:border-transparent"
                  >
                    <option value="">Select Facilities</option>
                    <option value="all">All facilities</option>
                    <option value="projects">Projects only</option>
                    <option value="library">Library only</option>
                  </select>
                </div>
              )}

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

      {/* Next Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#264A4A] mb-6">What Happens Next?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#428180] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Application Review</h3>
              <p className="text-gray-600">
                Our admissions team will review your application and contact you within 3-5 business days
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#778985] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Meet & Greet</h3>
              <p className="text-gray-600">
                We'll schedule a meeting to discuss your needs and show you our facilities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B2B5A9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Welcome to Khudi</h3>
              <p className="text-gray-600">
                Once approved, we'll guide you through the enrollment process and welcome you to our community
              </p>
            </div>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mt-12">
            <Image
              src="/Admissionsprocess.jpeg"
              alt="Admissions process"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
