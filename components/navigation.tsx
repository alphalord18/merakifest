"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Register", href: "/register" },
  { name: "Speakers", href: "/speakers" },
  { name: "Blog", href: "/blog" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? "text-white" : "text-secondary"} nav-font`}>MERAKI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-font text-sm transition-all duration-300 hover:text-gold ${
                isScrolled ? "text-white" : "text-secondary"
              }`}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
          <Button className="cta-font bg-gold text-secondary hover:bg-primary hover:text-white transition-all duration-300">
            REGISTER NOW
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary"
          >
            <div className="container py-5 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-font text-white text-sm hover:text-gold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
              <Button
                className="cta-font bg-gold text-secondary hover:bg-primary hover:text-white transition-all duration-300 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                REGISTER NOW
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

