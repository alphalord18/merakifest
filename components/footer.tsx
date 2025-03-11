import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold heading-font text-gold">MERAKI 2025</h3>
            <p className="body-font text-gray-300">
              Where creativity meets expression. Join us for the premier literary and creative arts festival.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gold transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gold transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold nav-font">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-300 hover:text-gold transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-gold transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-gray-300 hover:text-gold transition-colors">
                  Speakers & Judges
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-300 hover:text-gold transition-colors">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold nav-font">CONTACT US</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-gold" />
                <span className="text-gray-300">info@meraki2025.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-gold" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-gold mt-1" />
                <span className="text-gray-300">123 Creative Avenue, Literary District, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold nav-font">NEWSLETTER</h3>
            <p className="text-gray-300">Subscribe to get the latest updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gold text-secondary cta-font rounded-md hover:bg-primary hover:text-white transition-all duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Meraki 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

