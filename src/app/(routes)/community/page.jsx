import { Users, Home, Calendar, UserPlus, BookOpen, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Import Image component

export default function CommunityPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#428180] to-[#264A4A] text-white py-20" id="no-body-padding" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">For the Community</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">A Living Hub of Learning and Belonging</p>
          <p className="text-lg mt-4 max-w-4xl mx-auto">
            We are more than an education center—we are a vibrant community space where families, homeschoolers,
            professionals, and learners of all kinds come together to grow, share, and thrive.
          </p>
        </div>
      </section>

      {/* Community Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-[#428180] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#264A4A] mb-6">It Takes a Village to Raise a Child</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Inspired by the belief that "it takes a village to raise a child," our institute opens its doors for
              meaningful connection, collaboration, and continuous learning. Our space is designed for meaningful
              connection, collaboration, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* For Homeschoolers */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Home className="w-12 h-12 text-[#428180] mb-6" />
              <h2 className="text-4xl font-bold text-[#264A4A] mb-6">For Homeschoolers</h2>
              <h3 className="text-2xl font-semibold text-[#428180] mb-6">
                A Tailored Learning Experience with Full Access
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Homeschooling families are warmly welcomed into our learning ecosystem. With flexible and customized
                plans, you can:
              </p>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/homeschooling.jpeg"
                alt="Homeschooling family"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <BookOpen className="w-6 h-6 text-[#428180] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Access our full range of facilities, including the library, Math lab, makerspace, etc.
                </span>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-[#428180] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Enroll in thematic or project-based learning modules.</span>
              </li>
              <li className="flex items-start">
                <Calendar className="w-6 h-6 text-[#428180] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Join short-term programs and collaborative projects with our learners.
                </span>
              </li>
              <li className="flex items-start">
                <Heart className="w-6 h-6 text-[#428180] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Use learning resources and environments that complement your home curriculum.
                </span>
              </li>
            </ul>
            <p className="text-[#428180] font-semibold mt-6">
              We provide a supportive environment where homeschoolers can explore, experiment, and engage with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* For Families */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Familylearning.jpeg"
                alt="Family learning together"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] text-white p-8 rounded-2xl">
              <Users className="w-12 h-12 mb-6" />
              <h2 className="text-4xl font-bold mb-6">For Families</h2>
              <h3 className="text-2xl font-semibold mb-6">A Place to Learn, Bond, and Grow</h3>
              <p className="text-lg mb-6">
                Our space is designed to be as much for families as it is for learners. Families can:
              </p>
              <ul className="space-y-3 text-lg">
                <li>• Visit regularly to use our Early Childhood spaces, science labs, creative zones, and library</li>
                <li>• Attend parenting sessions, wellness workshops, and discussion circles</li>
                <li>• Engage in hands-on learning experiences with their children</li>
                <li>• Join a community of like-minded parents dedicated to holistic development</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-gray-700 mb-6">
              Whether you're looking for a quiet reading corner or an interactive family activity, there's something
              here for you.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FEFDF9] p-4 rounded-lg text-center shadow-lg">
                <BookOpen className="w-8 h-8 text-[#428180] mx-auto mb-2 " />
                <h4 className="font-semibold text-[#264A4A]">Library Access</h4>
              </div>
              <div className="bg-[#FEFDF9] p-4 rounded-lg text-center shadow-lg">
                <Users className="w-8 h-8 text-[#428180] mx-auto mb-2" />
                <h4 className="font-semibold text-[#264A4A]">Family Activities</h4>
              </div>
              <div className="bg-[#FEFDF9] p-4 rounded-lg text-center shadow-lg">
                <Calendar className="w-8 h-8 text-[#428180] mx-auto mb-2" />
                <h4 className="font-semibold text-[#264A4A]">Workshops</h4>
              </div>
              <div className="bg-[#FEFDF9] p-4 rounded-lg text-center shadow-lg">
                <Heart className="w-8 h-8 text-[#428180] mx-auto mb-2" />
                <h4 className="font-semibold text-[#264A4A]">Community</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 text-[#428180] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-[#264A4A] mb-6">Community Events</h2>
            <h3 className="text-2xl font-semibold text-[#428180] mb-6">Creating Meaningful Moments Together</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#428180] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Monthly Communal Events</h3>
              <p className="text-gray-600">
                Regular gatherings that bring families and learners together for shared experiences and learning
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#778985] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Evening Programs</h3>
              <p className="text-gray-600">
                Focused sessions on skill development, spirituality, and community conversations
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#B2B5A9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Parenting Sessions</h3>
              <p className="text-gray-600">
                Talks and discussions on themes that matter—education, family life, well-being, and more
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-[#428180] font-semibold">
              This is a space where learning lives beyond the classroom and becomes a shared journey.
            </p>
          </div>
        </div>
      </section>

      {/* For Professionals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <UserPlus className="w-12 h-12 text-[#428180] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-[#264A4A] mb-6">For Professionals Who Want to Volunteer</h2>
            <h3 className="text-2xl font-semibold text-[#428180] mb-6">Share Your Knowledge. Shape a Generation.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Professionalscollaborating.jpeg"
                alt="Professionals collaborating"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="bg-gradient-to-br from-[#FEFDF9] to-[#B2B5A9] p-8 rounded-2xl mb-8">
              <p className="text-lg text-gray-700 mb-6">
                If you're a professional with skills, insights, or passion for education, we invite you to join us as a
                community contributor. You can:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#264A4A] mb-2">Volunteer Sessions</h4>
                  <p className="text-gray-600 text-sm">Run workshops, sessions, or project mentorships</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#264A4A] mb-2">Hero in the Classroom</h4>
                  <p className="text-gray-600 text-sm">Share your real-world experience with curious learners</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-[#264A4A] mb-2">Co-design Learning</h4>
                  <p className="text-gray-600 text-sm">Help create locally rooted and deeply human experiences</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              Your contribution can make a lasting impact—and inspire the next generation of changemakers.
            </p>
            <Link
              href="/careers"
              className="bg-[#428180] text-white px-8 py-3 rounded-lg hover:bg-[#264A4A] transition-colors inline-block"
            >
              Join as a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
