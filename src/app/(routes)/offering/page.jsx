"use client";
import {
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Heart,
  Brain,
  Palette,
  Activity,
  Leaf,
  MessageSquare,
  Play,
  BookText,
  BotIcon as Robot,
  Handshake,
  GraduationCap,
  Calculator,
  FlaskConical,
  Mic,
  Egg,
  Wrench,
  Coffee,
  Monitor,
  PersonStanding,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Image component

export default function OfferingsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#428180] to-[#264A4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Offerings</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            More than a school - A community!
          </p>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            We are an alternative school and a resource center. Our offerings
            cater to both regular students and homeschoolers.
          </p>
        </div>
      </section>

      {/* Our Unique Offerings Section - Based on provided image */}
      <section className="py-16 bg-[#FEFDF9] text-[#264A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Unique Offerings</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive approach to education, nurturing every aspect of a
              learner's growth.
            </p>
          </div>

          {/* Holistic Development Categories */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Brain className="w-12 h-12 text-[#428180] mb-3" />
                <span className="text-lg font-semibold">MIND</span>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="w-12 h-12 text-[#428180] mb-3" />
                <span className="text-lg font-semibold">HEART</span>
              </div>
              <div className="flex flex-col items-center">
                <PersonStanding className="w-12 h-12 text-[#428180] mb-3" />
                <span className="text-lg font-semibold">BODY</span>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="w-12 h-12 text-[#428180] mb-3" />
                <span className="text-lg font-semibold">SPIRIT</span>
              </div>
            </div>
          </div>

          {/* Specific Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <Leaf className="w-6 h-6 text-white mr-3" />,
                label: "NATURAL LEARNING",
              },
              {
                icon: <PersonStanding className="w-6 h-6 text-white mr-3" />,
                label: "INDIVIDUALIZED LEARNING",
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-white mr-3" />,
                label: "HARKNESS METHOD",
              },
              {
                icon: <Target className="w-6 h-6 text-white mr-3" />,
                label: "PROJECT BASED LEARNING",
              },
              {
                icon: <Play className="w-6 h-6 text-white mr-3" />,
                label: "FREE PLAY",
              },
              {
                icon: <BookText className="w-6 h-6 text-white mr-3" />,
                label: "ARABIC LANGUAGE",
              },
              {
                icon: <BookOpen className="w-6 h-6 text-white mr-3" />,
                label: "QURAN & SEERAH",
              },
              {
                icon: <Robot className="w-6 h-6 text-white mr-3" />,
                label: "ROBOTICS & INNOVATION LAB",
              },
              {
                icon: <Handshake className="w-6 h-6 text-white mr-3" />,
                label: "MENTORSHIP MODEL",
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-white mr-3" />,
                label: "15:1 STUDENT TO TEACHER RATIO",
              },
              {
                icon: <Calculator className="w-6 h-6 text-white mr-3" />,
                label: "MATH LAB",
              },
              {
                icon: <FlaskConical className="w-6 h-6 text-white mr-3" />,
                label: "SCIENCE AND ENVIRONMENT LAB",
              },
              {
                icon: <Mic className="w-6 h-6 text-white mr-3" />,
                label: "LANGUAGE LAB",
              },
              {
                icon: <Egg className="w-6 h-6 text-white mr-3" />,
                label: "CHICKEN COOP",
              },
              {
                icon: <Wrench className="w-6 h-6 text-white mr-3" />,
                label: "ENGINEER'S HUB",
              },
              {
                icon: <Leaf className="w-6 h-6 text-white mr-3" />,
                label: "HORTICULTURE ZONE",
              },
              {
                icon: <Coffee className="w-6 h-6 text-white mr-3" />,
                label: "STUDENT RUN CAFE",
              },
              {
                icon: <Monitor className="w-6 h-6 text-white mr-3" />,
                label: "MEDIA AND IT HUB",
              },
              {
                icon: <BookText className="w-6 h-6 text-white mr-3" />,
                label: "BOOK LOUNGE",
              },
              {
                icon: <BookOpen className="w-6 h-6 text-white mr-3" />,
                label: "PRAYER AREA",
              },
            ].map(({ icon, label }, index) => (
              <div
                key={index}
                className="flex items-center bg-[#428180] text-white px-5 py-2 rounded-full"
              >
                {icon}
                <span className="text-base font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Regular Students */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-[#428180] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-[#264A4A] mb-4">
              For Regular Students
            </h2>
            <h3 className="text-2xl font-semibold text-[#428180] mb-6">
              A Transformative Journey at Khudi Institute
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-gradient-to-br from-[#FEFDF9] to-[#B2B5A9] p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Khudi Institute, education goes beyond books and classrooms.
                After preschool, learners embark on a 7-year transformative
                journey designed to prepare them for real life—not just
                academics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Each stage nurtures intellectual depth, emotional intelligence,
                and spiritual consciousness, grounded in an Islamic worldview.
                Through Project-Based Learning aligned with industry standards,
                students gain meaningful, practical knowledge across all major
                domains.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Faith is not an add-on—it's the foundation. Learners develop a
                strong connection with Allah (SWT) and follow the Prophet
                Muhammad (s.a.w) as their guide and inspiration.
              </p>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Studentsinclassroom.jpeg"
                alt="Students in classroom"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Heart className="w-8 h-8 text-[#428180] mx-auto mb-3" />
              <h4 className="font-bold text-[#264A4A]">
                Spiritually rooted and self-aware
              </h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Brain className="w-8 h-8 text-[#778985] mx-auto mb-3" />
              <h4 className="font-bold text-[#264A4A]">
                Intellectually prepared for O-Levels, Matric, or any path ahead
              </h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Target className="w-8 h-8 text-[#B2B5A9] mx-auto mb-3" />
              <h4 className="font-bold text-[#264A4A]">
                Practically skilled and ready to contribute
              </h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Lightbulb className="w-8 h-8 text-[#428180] mx-auto mb-3" />
              <h4 className="font-bold text-[#264A4A]">
                Confident in their identity and driven by purpose
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* For Community and Homeschoolers */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-[#428180] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-[#264A4A] mb-4">
              For the Community and Homeschoolers
            </h2>
            <h3 className="text-2xl font-semibold text-[#428180] mb-6">
              More Than a School — A Community Movement
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Khudi Institute is also a Resource & Community Center, serving
                families, homeschoolers, educators, and curious minds. Whether
                you're:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
                <li>
                  A parent looking for custom learning plans for your child
                </li>
                <li>A learner exploring passions through labs and workshops</li>
                <li>A professional eager to contribute</li>
                <li>Or a family seeking a place to belong</li>
              </ul>
              <p className="text-lg text-[#428180] font-semibold">
                Khudi is your space.
              </p>
              <p className="text-lg text-[#428180] font-semibold">
                We're building a movement—reimagining education as a shared
                journey rooted in Islamic values and community spirit, where the
                classroom extends into real life, and learning is lifelong and
                collaborative.
              </p>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Community gathering.jpeg"
                alt="Community gathering"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-[#264A4A] mb-6">
              Come learn, build, serve, and grow—together.
            </p>
            <Link
              href="/admissions"
              className="bg-[#428180] text-white px-8 py-3 rounded-lg hover:bg-[#264A4A] transition-colors inline-block"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* Holistic Learning Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#264A4A] mb-4">
              Our Holistic Learning Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Khudi Institute, we believe in nurturing the whole child—mind,
              body, heart, and soul. Our holistic learning framework is rooted
              in an Islamic worldview and designed to develop spiritually
              grounded, intellectually capable, emotionally resilient, socially
              responsible, physically healthy, and aesthetically inspired
              individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Spiritual Development */}
            <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] text-white p-6 rounded-2xl">
              <Heart className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">Spiritual Development</h3>
              <p className="text-sm mb-4">
                Nurturing a deep connection with Allah (SWT) and living with
                divine purpose.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Knowing Allah & His Chosen Ones</li>
                <li>• Core Faith and Practice</li>
                <li>• Living with Responsibility</li>
                <li>• Personal Tarbiyah</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">
                  Relevant Offerings:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    QURAN & SEERAH
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    PRAYER AREA
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    ARABIC LANGUAGE
                  </span>
                </div>
              </div>
            </div>

            {/* Intellectual Development */}
            <div className="bg-gradient-to-br from-[#778985] to-[#B2B5A9] text-white p-6 rounded-2xl">
              <Brain className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Intellectual Development
              </h3>
              <p className="text-sm mb-4">
                Developing depth in thought, reasoning, and practical knowledge
                through Gold Standard Project-Based Learning.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Core Academics</li>
                <li>• Logic & Reasoning</li>
                <li>• Life Skills & Global Awareness</li>
                <li>• Entrepreneurship & Economic Understanding</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">
                  Relevant Offerings:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    ROBOTICS & INNOVATION LAB
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    MATH LAB
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    SCIENCE AND ENVIRONMENT LAB
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    LANGUAGE LAB
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    MEDIA AND IT HUB
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    BOOK LOUNGE
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    HARKNESS METHOD
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    INDIVIDUALIZED LEARNING
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    NATURAL LEARNING
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    15:1 STUDENT TO TEACHER RATIO
                  </span>
                </div>
              </div>
            </div>

            {/* Social-Emotional Development */}
            <div className="bg-gradient-to-br from-[#B2B5A9] to-[#778985] text-white p-6 rounded-2xl">
              <Users className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Social-Emotional Development
              </h3>
              <p className="text-sm mb-4">
                Building empathy, collaboration, and civic responsibility
                through real-life engagement.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Emotional Intelligence & Social Skills</li>
                <li>• Civic & Community Engagement</li>
                <li>• Collaboration and team-based projects</li>
                <li>• Effective communication</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">
                  Relevant Offerings:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    MENTORSHIP MODEL
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    STUDENT RUN CAFE
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    FREE PLAY
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    CHICKEN COOP
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    HORTICULTURE ZONE
                  </span>
                </div>
              </div>
            </div>

            {/* Physical Development */}
            <div className="bg-gradient-to-br from-[#428180] to-[#778985] text-white p-6 rounded-2xl">
              <Activity className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">Physical Development</h3>
              <p className="text-sm mb-4">
                Promoting holistic well-being through Sunnah-based health and
                activity.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Sleep & Mind-Body Harmony</li>
                <li>• Physical Fitness & Movement</li>
                <li>• Nutrition & Health</li>
                <li>• Sunnah sports and activities</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">
                  Relevant Offerings:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    CHICKEN COOP
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    HORTICULTURE ZONE
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    FREE PLAY
                  </span>
                </div>
              </div>
            </div>

            {/* Aesthetic Development */}
            <div className="bg-gradient-to-br from-[#B2B5A9] to-[#428180] text-white p-6 rounded-2xl">
              <Palette className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">Aesthetic Development</h3>
              <p className="text-sm mb-4">
                Cultivating appreciation for beauty, craftsmanship, and refined
                expression.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Creative Expression</li>
                <li>• Artisan Skills & Appreciation</li>
                <li>• Calligraphy and zentangle</li>
                <li>• Observation as a discipline</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">
                  Relevant Offerings:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    ENGINEER'S HUB
                  </span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-['Montserrat']">
                    ROBOTICS & INNOVATION LAB
                  </span>
                </div>
              </div>
            </div>

            {/* Project-Based Learning */}
            <div className="bg-gradient-to-br from-[#264A4A] to-[#B2B5A9] text-white p-6 rounded-2xl">
              <Target className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-3">Project-Based Learning</h3>
              <p className="text-sm mb-4">
                Our core methodology, brought to life through our diverse
                facilities and individualized approaches, ensuring meaningful,
                real-world learning experiences.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Real-world applications</li>
                <li>• Industry-aligned standards</li>
                <li>• Collaborative problem-solving</li>
                <li>• Meaningful, practical knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
