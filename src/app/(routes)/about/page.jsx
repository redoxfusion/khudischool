"use client"
import Layout from "@/app/(routes)/layout"
import { Users, Target, Heart, MessageSquare, FlaskConical, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function AboutPage() {
  const [activePopup, setActivePopup] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const openPopup = (popupType) => {
    setActivePopup(popupType)
    setIsAnimating(true)
  }

  const closePopup = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setActivePopup(null)
    }, 300) // Wait for animation to complete
  }

  // Close popup when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup()
    }
  }

  // Close popup on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && activePopup) {
        closePopup()
      }
    }

    if (activePopup) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [activePopup])

  // Leadership Team Data
  const leadershipTeam = [
    {
      name: "Abubakar Khan",
      position: "Founder and CEO, Khudi Institute",
      image: "/ceo.png",
      bio: "With over 6 years of leadership in alternative education and Islamic schooling, Abubakar brings a clear vision and hands-on experience in building impactful learning spaces.",
      expertise: ["Educational Leadership", "Alternative Education", "Islamic Schooling", "Vision Development"],
      achievements: [
        "Founded Khudi Institute with a mission to revolutionize Islamic education",
        "6+ years of leadership in alternative education sector",
        "Built impactful learning spaces with hands-on experience",
      ],
    },
    {
      name: "Abdullah Javaid",
      position: "Founder and CMO, Khudi Institute",
      image: "/Abdullah.png",
      bio: "Man behind our digital productions also associated with Bayyinah, Abdullah ensures our message is communicated with clarity, authenticity, and impact.",
      expertise: ["Digital Productions", "Media Strategy", "Communications", "Content Creation", "Chief Marketing Officer"],
      achievements: [
        "Associated with Bayyinah for digital productions",
        "Ensures message communication with clarity and authenticity",
        "Creates impactful digital content for educational purposes",
      ],
    },
    {
      name: "Irfan Sarfraz",
      position: "Chief Knowledge Officer, Elements Learning",
      image: "/IrfanSarfraz.png",
      bio: "A former CSS officer with 15+ years of research in cutting-edge educational philosophy and systems, Irfan Sarfraz's work forms the intellectual backbone of our approach.",
      expertise: ["Educational Philosophy", "Research & Development", "Educational Systems", "Policy Development"],
      achievements: [
        "Former CSS officer with extensive government experience",
        "15+ years of research in cutting-edge educational philosophy",
        "Forms the intellectual backbone of Khudi's educational approach",
      ],
    },
    {
      name: "Karl Maas Yogi",
      position: "Advisor, Science & Technology Alignment",
      image: "/Karl.png",
      bio: "A German national with global corporate experience (Mercedes-Benz, among others), Karl is helping align our Science & Technology curriculum with international standards.",
      expertise: ["International Standards", "Science & Technology", "Corporate Experience", "Curriculum Alignment"],
      achievements: [
        "Global corporate experience with Mercedes-Benz and other major companies",
        "Aligning Science & Technology curriculum with international standards",
        "Bringing German educational excellence to Khudi Institute",
      ],
    },
    
    {
      name: "Umer Sheraz",
      position: "Strategic Foresight & Futures Thinking",
      image: "/UmerSheraz.png",
      bio: "A professional futurist, Umer brings insight into trends, technologies, and societal shifts—helping us prepare learners for the world of tomorrow.",
      expertise: ["Strategic Foresight", "Future Trends", "Technology Analysis", "Societal Shifts"],
      achievements: [
        "Professional futurist with expertise in trend analysis",
        "Provides insights into emerging technologies and societal shifts",
        "Helps prepare learners for future challenges and opportunities",
      ],
    },
    {
      name: "Moel Abaidullah",
      position: "Educational Consultant",
      image: "/Moel.png",
      bio: "A former Teach For Pakistan Fellow with grassroots experience in education reform, Moel supports us in maintaining a learner-centered, inclusive approach.",
      expertise: ["Education Reform", "Learner-Centered Approach", "Inclusive Education", "Grassroots Experience"],
      achievements: [
        "Former Teach For Pakistan Fellow with field experience",
        "Grassroots experience in education reform initiatives",
        "Advocates for learner-centered and inclusive educational approaches",
      ],
    },
  ]

  // Teaching Faculty Data
  const teachingFaculty = [
    {
      name: "Ms. Fatima Ali",
      position: "Mathematics & Science Coordinator",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Ms. Fatima Ali leads our STEM education with a focus on hands-on learning. She holds a Master's in Mathematics Education and has been pioneering innovative teaching methods for 8 years.",
      expertise: ["Mathematics Education", "Science Pedagogy", "STEM Integration", "Project-Based Learning"],
      achievements: [
        "Developed the Math Lab curriculum for Khudi Institute",
        "Winner of Excellence in STEM Teaching Award 2022",
        "Created interactive learning modules for complex mathematical concepts",
      ],
    },
    {
      name: "Mr. Ahmed Malik",
      position: "Language Arts & Literature Teacher",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Mr. Ahmed Malik brings creativity and passion to language learning. With expertise in both English and Urdu literature, he helps students develop strong communication skills while appreciating literary heritage.",
      expertise: ["English Literature", "Urdu Poetry", "Creative Writing", "Communication Skills"],
      achievements: [
        "Established the creative writing program",
        "Published poetry collection focusing on Islamic themes",
        "Mentored students in national literature competitions",
      ],
    },
    {
      name: "Ms. Zainab Khan",
      position: "Early Childhood Education Specialist",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Ms. Zainab Khan specializes in early childhood development with a focus on Islamic values. She creates nurturing environments where young learners can explore, discover, and grow.",
      expertise: [
        "Early Childhood Development",
        "Play-Based Learning",
        "Child Psychology",
        "Islamic Character Building",
      ],
      achievements: [
        "Designed the Foundation Years curriculum",
        "Certified in Montessori and Reggio Emilia approaches",
        "Trained educators across Pakistan in early childhood best practices",
      ],
    },
    {
      name: "Mr. Omar Farooq",
      position: "Arts & Creativity Instructor",
      image: "/placeholder.svg?height=150&width=150",
      bio: "Mr. Omar Farooq leads our aesthetic development program, combining traditional Islamic arts with contemporary creative expression. He believes in nurturing the artistic soul of every learner.",
      expertise: ["Islamic Calligraphy", "Visual Arts", "Creative Expression", "Art Therapy"],
      achievements: [
        "Established the Arts & Creativity Lab",
        "Master calligrapher with 15 years of experience",
        "Organized community art exhibitions showcasing student work",
      ],
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#428180] to-[#264A4A] text-white pt-20 pb-12 md:pt-28 md:pb-16" id="no-body-padding">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 font-serif">About Us</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Nurturing purposeful individuals through holistic, project-based learning rooted in Islamic values
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#FEFDF9] to-[#B2B5A9] p-6 md:p-8 rounded-2xl">
              <div className="flex items-center mb-4 md:mb-6">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-[#428180] mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#264A4A] font-serif">Vision Statement</h2>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We envision a world where learners are content pursuing their interests. They are connected to their
                Creator and are aware of their purpose in life. Muslims, who embrace their Islamic identity and perform
                at the level of Ehsan (excellence).
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] text-white p-6 md:p-8 rounded-2xl">
              <div className="flex items-center mb-4 md:mb-6">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold font-serif">Mission Statement</h2>
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                Our mission is to provide holistic, project-based learning rooted in Islamic values that nurtures
                purposeful individuals through real-life experiences and community belonging. We are preparing
                individuals who excel in this world and the hereafter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 md:py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <Users className="w-10 h-10 md:w-12 md:h-12 text-[#428180] mx-auto mb-3 md:mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#264A4A] mb-3 md:mb-4 font-serif">Our Team</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to transforming education through Islamic values and innovative learning
              approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Leadership Team Card - Clickable */}
            <div
              className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 duration-300"
              onClick={() => openPopup("leadership")}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#428180] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] text-center mb-2 font-serif">
                Leadership Team
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                Experienced educators and Islamic scholars guiding our vision
              </p>
              <p className="text-xs md:text-sm text-[#428180] text-center mt-2 font-medium">Click to learn more →</p>
            </div>

            {/* Teaching Faculty Card - Clickable */}
            <div
              className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 duration-300"
              onClick={() => openPopup("faculty")}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#778985] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] text-center mb-2 font-serif">
                Teaching Faculty
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                Passionate educators specializing in project-based learning
              </p>
              <p className="text-xs md:text-sm text-[#428180] text-center mt-2 font-medium">Click to learn more →</p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#B2B5A9] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] text-center mb-2 font-serif">Support Staff</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                Dedicated team ensuring smooth operations and student support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Popup */}
      {activePopup === "leadership" && (
        <div
          className={`fixed inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center z-50 p-2 sm:p-4 transition-all duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleOverlayClick}
        >
          <div
            className={`bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[85vh] sm:h-[80vh] flex flex-col shadow-2xl transform transition-all duration-300 mx-2 ${
              isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3)",
            }}
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 p-3 sm:p-4 md:p-6 border-b border-white/20 flex justify-between items-center rounded-t-3xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#264A4A] font-serif truncate pr-2">
                Leadership Team
              </h2>
              <button
                onClick={closePopup}
                className="w-8 h-8 md:w-10 md:h-10 bg-white/50 hover:bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 flex-shrink-0 border border-white/30"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
              {leadershipTeam.map((member, index) => (
                <div key={index} className="border-b border-white/20 pb-4 sm:pb-6 last:border-b-0">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex-shrink-0 text-center">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover border-2 border-[#428180]/50 shadow-lg"
                      />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#264A4A] mt-2 font-serif">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#428180] font-medium">{member.position}</p>
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed">{member.bio}</p>

                      <div className="mb-3">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#264A4A] mb-2 font-serif">Expertise</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-[#428180]/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs border border-white/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#264A4A] mb-2 font-serif">
                          Key Achievements
                        </h4>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                          {member.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Teaching Faculty Popup */}
      {activePopup === "faculty" && (
        <div
          className={`fixed inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center z-50 p-2 sm:p-4 transition-all duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleOverlayClick}
        >
          <div
            className={`bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[85vh] sm:h-[80vh] flex flex-col shadow-2xl transform transition-all duration-300 mx-2 ${
              isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3)",
            }}
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 p-3 sm:p-4 md:p-6 border-b border-white/20 flex justify-between items-center rounded-t-3xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#264A4A] font-serif truncate pr-2">
                Teaching Faculty
              </h2>
              <button
                onClick={closePopup}
                className="w-8 h-8 md:w-10 md:h-10 bg-white/50 hover:bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 flex-shrink-0 border border-white/30"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
              {teachingFaculty.map((member, index) => (
                <div key={index} className="border-b border-white/20 pb-4 sm:pb-6 last:border-b-0">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex-shrink-0 text-center">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover border-2 border-[#778985]/50 shadow-lg"
                      />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#264A4A] mt-2 font-serif">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#778985] font-medium">{member.position}</p>
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed">{member.bio}</p>

                      <div className="mb-3">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#264A4A] mb-2 font-serif">Expertise</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-[#778985]/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs border border-white/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#264A4A] mb-2 font-serif">
                          Key Achievements
                        </h4>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                          {member.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Message from the CEO Section */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#B2B5A9] to-[#778985] text-[#264A4A] p-8 rounded-3xl shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-8 h-8 text-[#264A4A] mr-3" />
                  <h2 className="text-3xl font-bold">Message from the CEO</h2>
                </div>
                {/* Image on mobile - appears after title */}
                <div className="lg:hidden mb-6">
                  <Image
                    src="/ceo.png"
                    alt="CEO Abubakar Khan Lodhi"
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-sm mx-auto"
                  />
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Assalamu Alaikum wa Rahmatullah, I warmly welcome you to our vibrant and purpose-driven community at
                  Khudi Institute. This is more than just an educational space, it is a movement rooted in meaning,
                  belonging, and transformation.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  At Khudi, our mission is to reimagine education in a way that nurtures individuals and communities to
                  live enriched, peaceful lives, grounded in divine guidance, and to strive for success in both this
                  world and the hereafter. We believe education must not only prepare us for a career, but also shape
                  who we are, how we live, and how we serve.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Whether you're a learner exploring your passions, a homeschooling parent looking for a like-minded
                  community to belong to, or a professional seeking to share your knowledge and purpose — you have a
                  place here. Together, let us revive the spirit of community, the kind that revives our Ummah.
                </p>
                <p className="text-xl font-semibold">With gratitude and hope,</p>
                <p className="text-xl font-semibold">Abubakar Khan Lodhi</p>
              </div>
              {/* Image on desktop - appears on right side */}
              <div className="hidden lg:block flex-shrink-0 lg:w-1/3">
                <img
                  src="/ceo.png"
                  alt="CEO Abubakar Khan Lodhi"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Research Partner Section */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] text-white p-8 rounded-3xl shadow-xl">
            <div className="flex items-center mb-6">
              <FlaskConical className="w-8 h-8 text-white mr-3" />
              <h2 className="text-3xl font-bold">Our Research Partner</h2>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              This initiative draws strength from over a decade of rigorous research by Elements Learning, an
              educational think-tank incubated at the National University of Sciences & Technology (NUST).
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With insights drawn from global best practices and deep intellectual inquiry, Elements Learning provides
              the foundational framework for our learning systems.
            </p>
            <p className="text-lg text-[#FFFFFE] font-semibold">
              To learn more about Elements Learning and their research,{" "}
              <a href="https://www.elements-learning.com" className="underline">
                {" "}
                Click Here.
              </a>
            </p>
            {/* You can add a Link/Button here if the website URL is available */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#264A4A] mb-3 md:mb-4 font-serif">Our Values</h2>
            <p className="text-base md:text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#428180] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-lg md:text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] mb-2 md:mb-3 font-serif">
                Rooted in Islamic Values
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We are grounded in Islamic principles, ensuring our learners develop a strong connection with Allah
                (SWT)
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#778985] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-lg md:text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] mb-2 md:mb-3 font-serif">
                Individuality of Learners
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We believe in the unique potential of every learner and tailor our approach to their individual needs
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B2B5A9] rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-lg md:text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#264A4A] mb-2 md:mb-3 font-serif">
                Community Engagement
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Engaging families and the community is an integral part of our educational system
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
