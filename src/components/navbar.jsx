import Link from "next/link"
import { Menu } from "lucide-react" // Assuming a mobile menu icon might be needed

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#264A4A]">Khudi.</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#428180] transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#428180] transition-colors font-medium">
              About
            </Link>
            <Link href="/offerings" className="text-gray-700 hover:text-[#428180] transition-colors font-medium">
              Programs
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-[#428180] transition-colors font-medium">
              Resources
            </Link>
            <Link href="/admissions" className="text-gray-700 hover:text-[#428180] transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-[#428180] transition-colors font-medium">
              Instructor
            </Link>
          </nav>
          <button className="bg-[#264A4A] text-white px-6 py-2 rounded-lg hover:bg-[#428180] transition-colors font-medium">
            Get Started
          </button>
          {/* Mobile menu button - hidden on desktop */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#428180]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
