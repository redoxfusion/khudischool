"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Trophy,
  Heart,
  Brain,
  Activity,
  Palette,
  Calendar,
  Sparkles,
  RotateCcw,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#FEFDF9] text-[#428180] font-serif">
      {/* Hero Section - Matching the reference image exactly */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden my-15 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#264A4A] leading-tight mb-6">
                  A DIFFERENT
                  <br />
                  KIND OF
                  <br />
                  SCHOOL
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                  Khudi Institute is an{" "}
                  <span className="font-semibold">
                    alternative school and a resource center
                  </span>{" "}
                  for <span className="font-semibold">homeschoolers</span>,
                  focused on the{" "}
                  <span className="font-semibold">holistic development</span> of
                  each learner.
                </p>
              </div>

              {/* Feature Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-[#428180] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#264A4A]">
                      Project-based
                    </p>
                    <p className="text-sm text-gray-600">learning</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-6 h-6 text-[#428180] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#264A4A]">
                      Faith-centered
                    </p>
                    <p className="text-sm text-gray-600">approach</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-[#428180] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#264A4A]">Community</p>
                    <p className="text-sm text-gray-600">engagement</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/admissions">
                  <button className="bg-[#264A4A] text-white px-8 py-3 rounded-lg hover:bg-[#428180] transition-colors font-medium">
                    For Regular Students
                  </button>
                </Link>
                <Link href="/admissions">
                  <button className="border-2 border-[#264A4A] text-[#264A4A] px-8 py-3 rounded-lg hover:bg-[#264A4A] hover:text-white transition-colors font-medium">
                    For Home Schoolers
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/hero.png"
                  alt="Children learning together at Khudi Institute"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Kids Section */}
      <section className="py-20 bg-[#FFFFFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-5xl font-bold text-[#264A4A] mb-6">
                Spiritually rooted learners ready to{" "}
                <span className="text-[#428180]">excel!</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Learn with us through Project-Based Learning rooted in Islamic
                values at Khudi Institute!
              </p>
              <Link
                href="/admissions"
                className="inline-flex items-center text-[#428180] font-semibold text-lg hover:text-[#264A4A] transition-colors"
              >
                Enroll Now →
              </Link>
            </div>

            {/* Cards Grid - Matching Reference */}
            <div className="grid grid-cols-2 gap-4">
              {/* Orange Card */}
              <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] rounded-3xl p-6 text-[#FFFFFE] relative overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="relative z-10">
                  <Image
                    src="/lifeskills.jpeg"
                    alt="Life Skills"
                    width={60}
                    height={60}
                    className="mb-4 border-2 border-white rounded-full"
                  />
                  <h3 className="text-lg font-bold mb-2">Life Skills</h3>
                  <p className="text-sm opacity-90">for Kids</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              </div>

              {/* Green Card */}
              <div className="bg-gradient-to-br from-[#778985] to-[#B2B5A9] rounded-3xl p-6 text-[#FFFFFE] relative overflow-hidden mt-8 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="relative z-10">
                  <Image
                    src="/Imagination.jpeg"
                    alt="Imagination"
                    width={60}
                    height={60}
                    className="mb-4 border-2 border-white rounded-full"
                  />
                  <h3 className="text-lg font-bold mb-2">Imagination</h3>
                  <p className="text-sm opacity-90">is power</p>
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mt-8"></div>
              </div>

              {/* Blue Card */}
              <div className="col-span-2 bg-gradient-to-r from-[#2D4F4F] to-[#264A4A] rounded-3xl p-6 text-[#FFFFFE] relative overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Grow your own wings
                    </h3>
                  </div>
                  <Image
                    src="/Growth.jpeg"
                    alt="Growth"
                    width={80}
                    height={80}
                    className="border-2 border-white rounded-full"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shaping Future Section */}
      <section className="py-20 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-[#778985] rounded-full flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-[#FFFFFE]" />
              </div>
              <span className="text-lg text-gray-600">
                We focus on one impactful lesson at a time
              </span>
              <div className="w-12 h-12 bg-[#428180] rounded-full flex items-center justify-center ml-4">
                <Trophy className="w-6 h-6 text-[#FFFFFE]" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-[#264A4A] mb-4">
              Shaping the <span className="text-[#428180]">future</span> of
              learners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Student Cards with Images */}
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/Spiritual.jpeg"
                  alt="Spiritual Development Student"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto border-4 border-[#428180]"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#428180] rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#FFFFFE]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-2">
                Spiritual Development
              </h3>
              <p className="text-gray-600 text-sm">
                Connection with Allah (SWT)
              </p>
              <p className="text-gray-500 text-xs">Islamic Values</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/Intellectual.jpeg"
                  alt="Intellectual Development Student"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto border-4 border-[#778985]"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#778985] rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-[#FFFFFE]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-2">
                Intellectual Development
              </h3>
              <p className="text-gray-600 text-sm">Project-Based Learning</p>
              <p className="text-gray-500 text-xs">Critical Thinking</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/Physical.jpeg"
                  alt="Physical Development Student"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto border-4 border-[#B2B5A9]"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#B2B5A9] rounded-full flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#264A4A]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-2">
                Physical Development
              </h3>
              <p className="text-gray-600 text-sm">Sunnah-based wellness</p>
              <p className="text-gray-500 text-xs">Healthy Living</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/Aesthetic.jpeg"
                  alt="Aesthetic Development Student"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto border-4 border-[#2D4F4F]"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#2D4F4F] rounded-full flex items-center justify-center">
                  <Palette className="w-4 h-4 text-[#FFFFFE]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-2">
                Aesthetic Development
              </h3>
              <p className="text-gray-600 text-sm">Creative Expression</p>
              <p className="text-gray-500 text-xs">Artistic Skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Cards Section */}
      <section className="py-20 bg-[#FFFFFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CEO Message Card */}
            <div className="bg-gradient-to-br from-[#B2B5A9] to-[#778985] rounded-3xl p-8 text-[#264A4A] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Message from the CEO
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Assalamu Alaikum wa Rahmatullah, I warmly welcome you to our
                  vibrant and purpose-driven community.
                </p>
                <Link href="/about">
                  <button className="bg-[#264A4A] text-[#FFFFFE] hover:bg-[#428180] px-6 py-2 rounded-lg font-medium">
                    Read More →
                  </button>
                </Link>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
            </div>

            {/* Research Partner Card */}
            <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] rounded-3xl p-8 text-[#FFFFFE] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Our Research Partner
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  This initiative draws strength from over a decade of rigorous
                  research by Elements Learning.
                </p>
                <Link href="/about">
                <button className="bg-[#FFFFFE] text-[#428180] hover:bg-[#B2B5A9] px-6 py-2 rounded-lg font-medium">
                  Learn More →
                </button>
                </Link>
              </div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mt-12"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#264A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#428180] text-lg mb-4">
                Join us in our journey
              </p>
              <h2 className="text-4xl font-bold text-[#FFFFFE] mb-6">
                Empower your kids to think smarter and sharper
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Encourage kids to think critically, be creative, and solve
                problems for a better future.
              </p>
              <Link href="/admissions">
                <button className="bg-[#428180] text-[#FFFFFE] hover:bg-[#778985] px-6 py-2 rounded-lg font-medium">
                  Get Enrolled →
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#778985] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#FFFFFE] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#778985] rounded-full"></div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#FFFFFE] mb-2">
                  45M+
                </div>
                <p className="text-gray-300">
                  Learners have achieved success across the globe
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#B2B5A9] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#264A4A]" />
                </div>
                <div className="text-3xl font-bold text-[#FFFFFE] mb-2">
                  16.1+
                </div>
                <p className="text-gray-300">
                  Mentors participating in the program
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Event Section */}
      <section className="py-20 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side with image */}
            <div className="relative">
              <Image
                src="/Students.jpeg"
                alt="Students Learning Together"
                width={600}
                height={400}
                className="rounded-3xl object-cover"
              />
            </div>

            {/* Right side with event info */}
            <div className="bg-gradient-to-br from-[#778985] to-[#B2B5A9] rounded-3xl p-8 text-[#264A4A] relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-lg opacity-90 mb-4">Upcoming Event</p>
                <h3 className="text-3xl font-bold mb-6">
                  Building children one at a time
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Celebrate Eid with the Families of Khudi Institute
                </p>
                <div className="flex items-center">
                  <div className="bg-[#428180] px-4 py-2 rounded-full text-[#FFFFFE] font-semibold mr-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    {"07 March 2025"}
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
