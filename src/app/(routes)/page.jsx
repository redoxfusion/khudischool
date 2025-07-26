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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const events = [
    {
      title: "Building children one at a time",
      description: "Celebrate Eid with the Families of Khudi Institute",
      date: "07 March 2025",
      image: "/Students.jpeg",
    },
    {
      title: "Annual Science Fair",
      description: "Showcasing innovative projects by our talented learners.",
      date: "15 April 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Community Outreach Day",
      description:
        "Join us in serving the local community and making a difference.",
      date: "20 May 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  const currentEvent = events[currentEventIndex];

  return (
    <div className="bg-[#FEFDF9] text-[#428180] ">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FEFDF9] via-[#F8F9FA] to-[#E9ECEF] py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Floating Cards - Order 1 on mobile, Order 2 on desktop */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] perspective-1000 order-1 lg:order-2">
              {/* Removed logo from here */}
              {/* Main Large Card */}
              <div className="absolute top-0 right-0 w-64 sm:w-72 lg:w-80 h-80 sm:h-88 lg:h-96 bg-white rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 overflow-hidden">
                <div className="p-6 sm:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-3 h-3 bg-[#428180] rounded-full"></div>
                      <span className="text-xs text-gray-400 font-medium font-['Montserrat']">
                        KHUDI
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#264A4A] leading-tight mb-4 font-serif">
                      WELCOME TO
                      <br />
                      THE FUTURE OF
                      <br />
                      LEARNING
                    </h3>
                  </div>
                  <div className="relative">
                    <Image
                      src="/hero.jpeg"
                      alt="Students learning"
                      width={200}
                      height={150}
                      className="rounded-2xl object-cover w-full h-24 sm:h-32"
                    />
                  </div>
                </div>
              </div>
              {/* Secondary Cards */}
              <a href="/offering">
                <div className="absolute top-12 left-0 w-44 sm:w-52 lg:w-60 h-28 sm:h-32 lg:h-36 bg-gradient-to-br from-[#428180] to-[#264A4A] rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="p-4 sm:p-6 text-white h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-xs opacity-80 font-['Montserrat']">
                        PROGRAMS
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold mb-2 font-serif">
                        Lifelong Learning Path
                      </h4>
                      <p className="text-xs sm:text-sm opacity-90 font-['Montserrat']">
                        Empowering young minds
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/community">
                <div className="absolute bottom-12 left-4 w-44 sm:w-52 lg:w-60 h-36 sm:h-40 bg-gradient-to-br from-[#B2B5A9] to-[#778985] rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="p-4 sm:p-6 text-white h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-xs opacity-80 font-['Montserrat']">
                        COMMUNITY
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold mb-2 font-serif">
                        A Thriving Global Circle
                      </h4>
                      <p className="text-xs sm:text-sm opacity-90 font-['Montserrat']">
                        It Takes a Community To Raise a Student
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              {/* Floating Cards */}
              <div className="absolute top-[10rem] sm:top-[18rem] right-0 sm:right-4 w-24 sm:w-28 h-16 sm:h-20 bg-white rounded-xl shadow-lg transform rotate-6 hover:rotate-3 transition-all duration-500">
                <div className="p-3 sm:p-4 h-full flex flex-col justify-center items-center">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#428180] rounded-full flex items-center justify-center mb-2">
                    <Star className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[#264A4A] font-['Montserrat']">
                    Excellence
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 right-4 w-36 sm:w-40 lg:w-44 h-24 sm:h-28 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="p-4 sm:p-5 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-xs text-gray-600 font-['Montserrat']">
                      ISLAMIC VALUES
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#264A4A] mb-1 font-serif">
                      Rooted in Islam
                    </h4>
                    <p className="text-xs text-gray-600 font-['Montserrat']">
                      Spiritual development
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Content - Heading, Features, Buttons - Order 2 on mobile, Order 1 on desktop */}
            <div className="space-y-6 sm:space-y-8 z-10 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                {/* Logo above heading */}
                <div className="inline-block mb-2">
                  <Image
                    src="/khudi-logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="w-[50px] h-auto mx-auto lg:mx-0"
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#264A4A] leading-tight font-serif">
                  A DIFFERENT
                  <br />
                  <span className="text-[#428180]">KIND OF</span>
                  <br />
                  SCHOOL
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg font-['Montserrat']">
                  Khudi Institute is an alternative school and a resource center
                  for homeschoolers, focused on the holistic development of each
                  learner.
                </p>
              </div>
              {/* Feature Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#428180]" />
                  <div>
                    <p className="font-semibold text-[#264A4A] text-xs sm:text-sm font-serif">
                      Project-based
                    </p>
                    <p className="text-xs text-gray-600 font-['Montserrat']">
                      learning
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-[#428180]" />
                  <div>
                    <p className="font-semibold text-[#264A4A] text-xs sm:text-sm font-serif">
                      Islam-centered
                    </p>
                    <p className="text-xs text-gray-600 font-['Montserrat']">
                      approach
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#428180]" />
                  <div>
                    <p className="font-semibold text-[#264A4A] text-xs sm:text-sm font-serif">
                      Community
                    </p>
                    <p className="text-xs text-gray-600 font-['Montserrat']">
                      engagement
                    </p>
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/admissions?type=regular">
                  <button className="bg-[#264A4A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-[#428180] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base font-['Montserrat']">
                    For Regular Students
                  </button>
                </Link>
                <Link href="/admissions?type=homeschool">
                  <button className="border-2 border-[#264A4A] text-[#264A4A] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-[#264A4A] hover:text-white transition-all duration-300 font-medium backdrop-blur-sm bg-white/50 text-sm sm:text-base font-['Montserrat']">
                    For Home Schoolers
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#428180]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#B2B5A9]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#428180]/5 to-[#264A4A]/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Smart Kids Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#264A4A] mb-4 sm:mb-6 font-serif">
                Spiritually rooted learners ready to{" "}
                <span className="text-[#428180]">excel!</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 font-['Montserrat']">
                Learn with us through Project-Based Learning rooted in Islamic
                values at Khudi Institute!
              </p>
              <Link
                href="/admissions"
                className="inline-flex items-center text-[#428180] font-semibold text-base sm:text-lg hover:text-[#264A4A] transition-colors font-['Montserrat']"
              >
                Enroll Now →
              </Link>
            </div>
            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Orange Card */}
              <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-[#FFFFFE] relative overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="relative z-10">
                  <Image
                    src="/lifeskills.jpeg"
                    alt="Life Skills"
                    width={50}
                    height={50}
                    className="mb-3 sm:mb-4 border-2 border-white rounded-full sm:w-[60px] sm:h-[60px]"
                  />
                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 font-serif">
                    Life Skills
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90 font-['Montserrat']">
                    for Kids
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full"></div>
              </div>
              {/* Green Card */}
              <div className="bg-gradient-to-br from-[#778985] to-[#B2B5A9] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-[#FFFFFE] relative overflow-hidden mt-4 sm:mt-8 shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="relative z-10">
                  <Image
                    src="/Imagination.jpeg"
                    alt="Imagination"
                    width={50}
                    height={50}
                    className="mb-3 sm:mb-4 border-2 border-white rounded-full sm:w-[60px] sm:h-[60px]"
                  />
                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 font-serif">
                    Imagination
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90 font-['Montserrat']">
                    is power
                  </p>
                </div>
                <div className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 bg-white/10 rounded-full -ml-6 sm:-ml-8 -mt-6 sm:-mt-8"></div>
              </div>
              {/* Blue Card */}
              <div className="col-span-2 bg-gradient-to-r from-[#2D4F4F] to-[#264A4A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-[#FFFFFE] relative overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 font-serif">
                      Grow your own wings
                    </h3>
                  </div>
                  <Image
                    src="/Growth.jpeg"
                    alt="Growth"
                    width={60}
                    height={60}
                    className="border-2 border-white rounded-full sm:w-[80px] sm:h-[80px]"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shaping Future Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#778985] rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <Star className="w-5 sm:w-6 h-5 sm:h-6 text-[#FFFFFE]" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg text-gray-600 font-['Montserrat']">
                We focus on one impactful lesson at a time
              </span>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#428180] rounded-full flex items-center justify-center ml-3 sm:ml-4">
                <Trophy className="w-5 sm:w-6 h-5 sm:h-6 text-[#FFFFFE]" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#264A4A] mb-4 font-serif">
              Shaping the <span className="text-[#428180]">future</span> of
              learners
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Student Cards with Images */}
            <div className="text-center">
              <div className="relative mb-4 sm:mb-6">
                <Image
                  src="/Spiritual.jpeg"
                  alt="Spiritual Development Student"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto border-4 border-[#428180] sm:w-[120px] sm:h-[120px]"
                />
                <div className="absolute -bottom-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-[#428180] rounded-full flex items-center justify-center">
                  <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-[#FFFFFE]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#264A4A] mb-2 font-serif">
                Spiritual Development
              </h3>
              <p className="text-gray-600 text-sm font-['Montserrat']">
                Connection with Allah (SWT)
              </p>
              <p className="text-gray-500 text-xs font-['Montserrat']">
                Islamic Values
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-4 sm:mb-6">
                <Image
                  src="/Intellectual.jpeg"
                  alt="Intellectual Development Student"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto border-4 border-[#778985] sm:w-[120px] sm:h-[120px]"
                />
                <div className="absolute -bottom-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-[#778985] rounded-full flex items-center justify-center">
                  <Brain className="w-3 sm:w-4 h-3 sm:h-4 text-[#FFFFFE]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#264A4A] mb-2 font-serif">
                Intellectual Development
              </h3>
              <p className="text-gray-600 text-sm font-['Montserrat']">
                Project-Based Learning
              </p>
              <p className="text-gray-500 text-xs font-['Montserrat']">
                Critical Thinking
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-4 sm:mb-6">
                <Image
                  src="/Physical.jpeg"
                  alt="Physical Development Student"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto border-4 border-[#B2B5A9] sm:w-[120px] sm:h-[120px]"
                />
                <div className="absolute -bottom-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-[#B2B5A9] rounded-full flex items-center justify-center">
                  <Activity className="w-3 sm:w-4 h-3 sm:h-4 text-[#264A4A]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#264A4A] mb-2 font-serif">
                Physical Development
              </h3>
              <p className="text-gray-600 text-sm font-['Montserrat']">
                Sunnah-based wellness
              </p>
              <p className="text-gray-500 text-xs font-['Montserrat']">
                Healthy Living
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-4 sm:mb-6">
                <Image
                  src="/Aesthetic.jpeg"
                  alt="Aesthetic Development Student"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto border-4 border-[#2D4F4F] sm:w-[120px] sm:h-[120px]"
                />
                <div className="absolute -bottom-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-[#2D4F4F] rounded-full flex items-center justify-center">
                  <Palette className="w-3 sm:w-4 h-3 sm:h-4 text-[#FFFFFE]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#264A4A] mb-2 font-serif">
                Aesthetic Development
              </h3>
              <p className="text-gray-600 text-sm font-['Montserrat']">
                Creative Expression
              </p>
              <p className="text-gray-500 text-xs font-['Montserrat']">
                Artistic Skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFFFFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* CEO Message Card */}
            <div className="bg-gradient-to-br from-[#B2B5A9] to-[#778985] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-[#264A4A] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 font-serif">
                  Message from the CEO
                </h3>
                <p className="text-base sm:text-lg mb-6 opacity-90 font-['Montserrat']">
                  Assalamu Alaikum wa Rahmatullah, I warmly welcome you to our
                  vibrant and purpose-driven community.
                </p>
                <Link href="/about">
                  <button className="bg-[#264A4A] text-[#FFFFFE] hover:bg-[#428180] px-6 py-2 rounded-lg font-medium text-sm sm:text-base font-['Montserrat']">
                    Read More →
                  </button>
                </Link>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
            {/* Research Partner Card */}
            <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-[#FFFFFE] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 font-serif">
                  Our Research Partner
                </h3>
                <p className="text-base sm:text-lg mb-6 opacity-90 font-['Montserrat']">
                  This initiative draws strength from over a decade of rigorous
                  research by Elements Learning.
                </p>
                <Link href="/about">
                  <button className="bg-[#FFFFFE] text-[#428180] hover:bg-[#B2B5A9] px-6 py-2 rounded-lg font-medium text-sm sm:text-base font-['Montserrat']">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-[#264A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-[#428180] text-base sm:text-lg mb-4 font-['Montserrat']">
                Join us in our journey
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFFFE] mb-6 font-serif">
                Empower your kids to think smarter and sharper
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-8 font-['Montserrat']">
                Encourage kids to think critically, be creative, and solve
                problems for a better future.
              </p>
              <Link href="/admissions">
                <button className="bg-[#428180] text-[#FFFFFE] hover:bg-[#778985] px-6 py-2 rounded-lg font-medium text-sm sm:text-base font-['Montserrat']">
                  Get Enrolled →
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#778985] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#FFFFFE] rounded-full flex items-center justify-center">
                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#778985] rounded-full"></div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#FFFFFE] mb-2 font-serif">
                  Real Impact
                </div>
                <p className="text-gray-300 text-sm sm:text-base font-['Montserrat']">
                  Learners around the world are growing with our programs
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#B2B5A9] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-5 sm:w-6 h-5 sm:h-6 text-[#264A4A]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#FFFFFE] mb-2 font-serif">
                  Trusted Mentors
                </div>
                <p className="text-gray-300 text-sm sm:text-base font-['Montserrat']">
                  Experienced guides helping children thrive every step of the
                  way
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Event Section - Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side with image */}
            <div className="relative">
              <Image
                src={currentEvent.image || "/placeholder.svg"}
                alt={currentEvent.title}
                width={600}
                height={400}
                className="rounded-2xl sm:rounded-3xl object-cover w-full h-auto"
              />
            </div>
            {/* Right side with event info */}
            <div className="bg-gradient-to-br from-[#778985] to-[#B2B5A9] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-[#264A4A] relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-base sm:text-lg opacity-90 mb-4 font-['Montserrat']">
                  Upcoming Event
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 font-serif">
                  {currentEvent.title}
                </h3>
                <p className="text-base sm:text-lg opacity-90 mb-6 font-['Montserrat']">
                  {currentEvent.description}
                </p>
                <div className="flex items-center">
                  <div className="bg-[#428180] px-4 py-2 rounded-full text-[#FFFFFE] font-semibold mr-4 flex items-center text-sm sm:text-base font-['Montserrat']">
                    <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                    {currentEvent.date}
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <button
            onClick={prevEvent}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 sm:-ml-8 bg-[#428180] text-white p-3 rounded-full shadow-lg hover:bg-[#264A4A] transition-colors z-20"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextEvent}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 sm:-mr-8 bg-[#428180] text-white p-3 rounded-full shadow-lg hover:bg-[#264A4A] transition-colors z-20"
            aria-label="Next event"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEventIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentEventIndex === index
                    ? "bg-[#428180]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to event ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
