"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navigation from "@/components/navigation"

// Sponsor tiers
const sponsorTiers = [
  {
    tier: "Gold",
    sponsors: [
      { name: "Acme Publishing", logo: "/placeholder.svg?height=150&width=300", website: "#" },
      { name: "Literary Foundation", logo: "/placeholder.svg?height=150&width=300", website: "#" },
      { name: "Creative Arts Council", logo: "/placeholder.svg?height=150&width=300", website: "#" },
    ],
  },
  {
    tier: "Silver",
    sponsors: [
      { name: "Writers Guild", logo: "/placeholder.svg?height=120&width=240", website: "#" },
      { name: "Metro University", logo: "/placeholder.svg?height=120&width=240", website: "#" },
      { name: "Bookworm Cafe", logo: "/placeholder.svg?height=120&width=240", website: "#" },
      { name: "City Library", logo: "/placeholder.svg?height=120&width=240", website: "#" },
    ],
  },
  {
    tier: "Bronze",
    sponsors: [
      { name: "Poetry Society", logo: "/placeholder.svg?height=100&width=200", website: "#" },
      { name: "Local Bookstore", logo: "/placeholder.svg?height=100&width=200", website: "#" },
      { name: "Arts Magazine", logo: "/placeholder.svg?height=100&width=200", website: "#" },
      { name: "Writers Workshop", logo: "/placeholder.svg?height=100&width=200", website: "#" },
      { name: "Literary Journal", logo: "/placeholder.svg?height=100&width=200", website: "#" },
      { name: "Creative Writing Center", logo: "/placeholder.svg?height=100&width=200", website: "#" },
    ],
  },
]

// Sponsorship benefits
const sponsorshipBenefits = [
  {
    tier: "Gold",
    price: "$10,000",
    benefits: [
      "Prominent logo placement on all event materials",
      "VIP access to all Meraki 2025 events",
      "Dedicated sponsor booth at the main venue",
      "Full-page advertisement in Meraki Magazine",
      "Featured in all press releases and media coverage",
      "10 complimentary event passes",
      "Opportunity to present an award at the closing ceremony",
      "Exclusive meet-and-greet with featured speakers and judges",
    ],
    color: "bg-gold text-secondary",
  },
  {
    tier: "Silver",
    price: "$5,000",
    benefits: [
      "Logo placement on event website and printed materials",
      "Sponsor booth at the main venue",
      "Half-page advertisement in Meraki Magazine",
      "Mentioned in press releases",
      "5 complimentary event passes",
      "Reserved seating at main events",
    ],
    color: "bg-gray-300 text-secondary",
  },
  {
    tier: "Bronze",
    price: "$2,500",
    benefits: [
      "Logo placement on event website",
      "Quarter-page advertisement in Meraki Magazine",
      "2 complimentary event passes",
      "Acknowledgment during opening ceremony",
    ],
    color: "bg-amber-700 text-white",
  },
]

export default function SponsorsPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const currentSponsorsRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const currentSponsorsInView = useInView(currentSponsorsRef, { once: true, amount: 0.1 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.1 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.1 })

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section 
        ref={headerRef}
        className="pt-32 pb-20 bg-background-secondary"
      >
        <div className="container px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-font text-secondary mb-6">
              Sponsors & Partners
            </h1>
            <p className="text-lg md:text-xl body-font text-primary mb-8">
              Meet the organizations that make Meraki 2025 possible and learn how your organization can get involved
            </p>
            <Button className="cta-font bg-gold text-secondary hover:bg-primary hover:text-white">
              Become a Sponsor
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section 
        ref={currentSponsorsRef}
        className="py-20 bg-background"
      >
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={currentSponsorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl heading-font text-secondary mb-4">
              Our Sponsors
            </h2>
            <p className="text-lg body-font text-primary max-w-3xl mx-auto">
              We are grateful to these organizations for their generous support
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {sponsorTiers.map((tier, tierIndex) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                animate={currentSponsorsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * tierIndex }}
              >
                <div className="text-center mb-8">
                  <h3 className={`inline-block text-xl nav-font px-6 py-2 rounded-full ${
                    tier.tier === "Gold" ? "bg-gold text-secondary" :
                    tier.tier === "Silver" ? "bg-gray-300 text-secondary" :
                    "bg-amber-700 text-white"
                  }`}>
                    {tier.tier} Sponsors
                  </h3>
                </div>
                
                <div className={`grid grid-cols-1 ${
                  tier.tier === "Gold" ? "md:grid-cols-3" :
                  tier.tier === "Silver" ? "sm:grid-cols-2 lg:grid-cols-4" :
                  "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
                } gap-8`}>
                  {tier.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.name}
                      initial={{ opacity: 0 }}
                      animate={currentSponsorsInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index + 0.3 * tierIndex }}
                      className="flex flex-col items-center"
                    >
                      <a 
                        href={sponsor.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full flex items-center justify-center h-32"
                      >
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          width={tier.tier === "Gold" ? 300 : tier.tier === "Silver" ? 240 : 200}
                          height={tier.tier === "Gold" ? 150 : tier.tier === "Silver" ? 120 : 100}
                          className="max-h-full w-auto object-contain"
                        />
                      </a>
                      <p className="mt-3 text-center font-medium">{sponsor.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits Section */}
      <section 
        ref={benefitsRef}
        className="py-20 bg-background-secondary"
      >
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl heading-font text-secondary mb-4">
              Sponsorship Opportunities
            </h2>
            <p className="text-lg body-font text-primary max-w-3xl mx-auto">
              Partner with Meraki 2025 and connect with a community of creative minds
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sponsorshipBenefits.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4" style={{ borderTopColor: tier.tier === "Gold" ? "#FFC857" : tier.tier === "Silver" ? "#C0C0C0" : "#CD7F32" }}>
                  <div className={`py-4 text-center ${tier.color}`}>
                    <h3 className="text-xl font-bold">{tier.tier} Tier</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-3xl font-bold text-secondary">{tier.price}</p>
                    </div>
                    
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1 text-green-500">✓</div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full mt-8 ${
                        tier.tier === "Gold" 
                          ? "bg-gold text-secondary hover:bg-primary hover:text-white" 
                          : "bg-primary text-white hover:bg-gold hover:text-secondary"
                      }`}
                    >
                      Select {tier.tier} Package
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-4 text-lg">Looking for a custom sponsorship package?</p>
            <Button className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary">
              Contact Us for Custom Options
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsorship Inquiry Form */}
      <section 
        ref={contactRef}
        className="py-20 bg-background"
      >
        <div className="container px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl heading-font text-secondary mb-4">
                Sponsorship Inquiry
              </h2>
              <p className="text-lg body-font text-primary">
                Interested in becoming a sponsor? Fill out the form below and our team will get back to you.
              </p>
            </div>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company/Organization Name</Label>
                      <Input id="companyName" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" type="url" />
                    </div>
                    
                    <div className="space-y-\

