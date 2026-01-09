"use client";

import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import Footer from "@/components/footer";
import { MainNavBar } from "@/components/main-navbar";

export default function ClientLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <MainNavBar />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer id="no-body-padding" />

      {/* Social Media Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-50">
        <a
          href="https://www.facebook.com/people/Khudi-Institute/61575717715937/?ref=_xav_ig_profile_page_web#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#428180] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#264A4A] transition-colors">
            <Facebook className="w-5 h-5 text-white" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/khudi.institute/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#428180] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#264A4A] transition-colors">
            <Instagram className="w-5 h-5 text-white" />
          </div>
        </a>
        <a
          href="mailto:info@khudi.institute"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#428180] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#264A4A] transition-colors">
            <Mail className="w-5 h-5 text-white" />
          </div>
        </a>
        <a href="tel:0302-5019924">
          <div className="bg-[#428180] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#264A4A] transition-colors">
            <Phone className="w-5 h-5 text-white" />
          </div>
        </a>
      </div>
    </div>
  );
}
