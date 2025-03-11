"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const sponsors = [
  { name: "Sponsor 1", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Sponsor 2", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Sponsor 3", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Sponsor 4", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Sponsor 5", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Sponsor 6", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Sponsor 7", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Sponsor 8", logo: "/placeholder.svg?height=60&width=120" },
]

export default function SponsorCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const cloneItems = () => {
      const items = scrollContainer.querySelectorAll(".sponsor-item")
      items.forEach((item) => {
        const clone = item.cloneNode(true)
        scrollContainer.appendChild(clone)
      })
    }

    cloneItems()
  }, [])

  return (
    <div className="w-full overflow-hidden bg-white/80 py-6 backdrop-blur-sm">
      <div className="relative">
        <div ref={scrollRef} className="flex items-center space-x-12 animate-carousel" style={{ width: "fit-content" }}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-item flex-shrink-0">
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

