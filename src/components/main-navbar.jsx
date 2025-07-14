import { Home, LucideUniversity, HandHelping, Phone, Users, CircleQuestionMark, Briefcase } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function MainNavBar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: CircleQuestionMark },
    { name: 'Admission', url: '/admissions', icon: LucideUniversity},
    { name: 'Contact', url: '/contact', icon: Phone },
    { name: 'Community', url: '/community', icon: Users },
    { name: 'Offering', url: '/offering', icon: HandHelping },
    { name: 'Careers', url: '/careers', icon: Briefcase },


  ]

  return <NavBar items={navItems} />
}