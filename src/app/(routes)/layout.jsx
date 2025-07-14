"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Facebook, Instagram, Globe, Phone } from "lucide-react";
import { MainNavBar } from "@/components/main-navbar";


export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <MainNavBar/>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />

      {/* Social Media Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-50">
        <div className="bg-[#428180] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#264A4A] transition-colors">
          <Facebook className="w-5 h-5 text-white" />
        </div>
        <div className="bg-[#428180] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#264A4A] transition-colors">
          <Instagram className="w-5 h-5 text-white" />
        </div>
        <div className="bg-[#428180] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#264A4A] transition-colors">
          <Globe className="w-5 h-5 text-white" />
        </div>
        <div className="bg-[#428180] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#264A4A] transition-colors">
          <Phone className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
