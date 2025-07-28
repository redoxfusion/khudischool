import Link from "next/link"
import { Facebook, Instagram, Globe, Phone } from "lucide-react"
import Image from "next/image"

export default function FooterWithBoxes() {
  return (
    <footer className="bg-[#B2B5A9] text-#428180 py-12" id="no-body-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/khudi.svg"
              alt="KHUDI INSTITUTE"
              width={300}
              height={50}
            />
            <p className="text-[#428180]">
              A different kind of school - rooted in Islamic values, focused on holistic development.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-#428180 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/offerings" className="text-#428180 hover:text-white">
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-#428180 hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-#428180 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/community" className="text-#428180 hover:text-white">
                  For the Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-#428180 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-[#428180] hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-[#428180] hover:text-white cursor-pointer" />
              <Globe className="w-6 h-6 text-[#428180] hover:text-white cursor-pointer" />
              <Phone className="w-6 h-6 text-[#428180] hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
