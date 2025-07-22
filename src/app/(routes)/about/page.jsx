
import { Users, Target, Heart, MessageSquare, FlaskConical } from "lucide-react"
import Image from "next/image";

export default function AboutPage() {
  return (
    < div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#428180] to-[#264A4A] text-white py-20" id="no-body-padding" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Nurturing purposeful individuals through holistic, project-based learning rooted in Islamic values
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#FEFDF9] to-[#B2B5A9] p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#428180] mr-3" />
                <h2 className="text-3xl font-bold text-[#264A4A]">Vision Statement</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a world where learners are content pursuing their interests. They are connected to their
                Creator and are aware of their purpose in life. Muslims, who embrace their Islamic identity and perform
                at the level of Ehsan (excellence).
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-[#428180] to-[#264A4A] text-white p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-white mr-3" />
                <h2 className="text-3xl font-bold">Mission Statement</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Our mission is to provide holistic, project-based learning rooted in Islamic values that nurtures
                purposeful individuals through real-life experiences and community belonging. We are preparing
                individuals who excel in this world and the hereafter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-[#428180] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-[#264A4A] mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to transforming education through Islamic values and innovative learning
              approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-[#428180] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] text-center mb-2">Leadership Team</h3>
              <p className="text-gray-600 text-center">Experienced educators and Islamic scholars guiding our vision</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-[#778985] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] text-center mb-2">Teaching Faculty</h3>
              <p className="text-gray-600 text-center">Passionate educators specializing in project-based learning</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 bg-[#B2B5A9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] text-center mb-2">Support Staff</h3>
              <p className="text-gray-600 text-center">Dedicated team ensuring smooth operations and student support</p>
            </div>
          </div>
        </div>
      </section>

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
                Assalamu Alaikum wa Rahmatullah, I warmly welcome you to our vibrant and purpose-driven community at Khudi Institute. This is more than just an educational space, it is a movement rooted in meaning, belonging, and transformation.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                At Khudi, our mission is to reimagine education in a way that nurtures individuals and communities to live enriched, peaceful lives, grounded in divine guidance, and to strive for success in both this world and the hereafter. We believe education must not only prepare us for a career, but also shape who we are, how we live, and how we serve.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Whether you're a learner exploring your passions, a homeschooling parent looking for a like-minded community to belong to, or a professional seeking to share your knowledge and purpose — you have a place here. Together, let us revive the spirit of community, the kind that revives our Ummah.
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
              Join us in our journey to elevate education standards <a href=" https://www.elements-learning.com" className="underline"> Click Here.</a>
            </p>
            {/* You can add a Link/Button here if the website URL is available */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#FEFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#264A4A] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#428180] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Rooted in Islamic Values</h3>
              <p className="text-gray-600">
                We are grounded in Islamic principles, ensuring our learners develop a strong connection with Allah
                (SWT)
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#778985] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Individuality of Learners</h3>
              <p className="text-gray-600">
                We believe in the unique potential of every learner and tailor our approach to their individual needs
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B2B5A9] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#264A4A] mb-3">Community Engagement</h3>
              <p className="text-gray-600">
                Engaging families and the community is an integral part of our educational system
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
