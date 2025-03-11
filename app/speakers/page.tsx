"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Facebook, Twitter, Linkedin, Globe } from "lucide-react"

// Speaker data
const speakers = [
  {
    id: 1,
    name: "Alexandra Rivers",
    role: "Bestselling Author",
    image: "/placeholder.svg?height=600&width=600",
    bio: "Alexandra Rivers is the author of the award-winning novel 'Echoes of Silence' and has been recognized for her contributions to contemporary fiction. With five international bestsellers under her belt, she brings a wealth of storytelling experience to Meraki 2025.",
    achievements: [
      "New York Times Bestselling Author",
      "National Book Award Winner",
      "Creative Writing Professor at Columbia University",
    ],
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 2,
    name: "Dr. Marcus Chen",
    role: "Literary Critic",
    image: "/placeholder.svg?height=600&width=600",
    bio: "Dr. Marcus Chen is a renowned literary critic and professor at Columbia University. His analytical approach to literature has shaped contemporary discourse on modern fiction and poetry. He has published numerous papers on literary theory and criticism.",
    achievements: [
      "Ph.D. in Comparative Literature",
      "Author of 'Deconstructing Modern Narratives'",
      "Editor-in-Chief of Literary Horizons Journal",
    ],
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Poet Laureate",
    image: "/placeholder.svg?height=600&width=600",
    bio: "Sophia Williams has published five poetry collections and won the National Poetry Award. Her work explores themes of identity, nature, and human connection. As the current Poet Laureate, she advocates for poetry's role in cultural discourse.",
    achievements: [
      "National Poetry Award Winner",
      "Published 5 Acclaimed Poetry Collections",
      "Founder of Urban Poetry Initiative",
    ],
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "Playwright",
    image: "/placeholder.svg?height=600&width=600",
    bio: "James Rodriguez's plays have been performed on Broadway and in theaters worldwide. His work is known for its innovative narrative structures and compelling character development. He has received multiple Tony Award nominations for his contributions to theater.",
    achievements: [
      "Tony Award Nominee",
      "Recipient of the Pulitzer Prize for Drama",
      "Artist-in-Residence at the National Theater",
    ],
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 5,
    name: "Emily Chang",
    role: "Literary Agent",
    image: "/placeholder.svg?height=600&width=600",
    bio: "Emily Chang is a leading literary agent with over 15 years of experience in the publishing industry. She has helped launch the careers of numerous bestselling authors and specializes in discovering unique voices in fiction and memoir.",
    achievements: [
      "Founder of Horizon Literary Agency",
      "Represented 20+ New York Times Bestsellers",
      "Publishing Industry Mentor of the Year",
    ],
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 6,
    name: "David Okafor",
    role: "Screenwriter",
    image: "/placeholder.svg?height=600&width=600",
    bio: "David Okafor is an acclaimed screenwriter whose work spans film, television, and digital media. His storytelling approach blends traditional narrative techniques with innovative structural elements, earning him recognition in Hollywood and beyond.",
    achievements: [
      "Academy Award Nominee for Best Original Screenplay",
      "Emmy Award Winner",
      "Writer for Netflix's 'Untold Stories' Series",
    ],
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 7,
    name: "Priya Sharma",
    role: "Short Story Writer",
    image: "/placeholder.svg?height=600&width=600",
    bio: "Priya Sharma has mastered the art of short fiction, with her stories appearing in prestigious literary magazines worldwide. Her concise yet powerful narratives explore complex themes through accessible and engaging prose.",
    achievements: [
      "O. Henry Prize Winner",
      "Published in The New Yorker and Granta",
      "Author of the Short Story Collection 'Beneath the Surface'",
    ],
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: 8,
    name: "Michael Torres",
    role: "Literary Translator",
    image: "/placeholder.svg?height=600&width=600",
    bio: "Michael Torres bridges cultural and linguistic gaps through his masterful translations of contemporary and classic literature. His work has made important literary works accessible to new audiences while preserving their original essence and nuance.",
    achievements: [
      "National Translation Award Winner",
      "Translated Works from 7 Languages",
      "Professor of Comparative Literature",
    ],
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      website: "#",
    },
  },
]

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakers)[0] | null>(null)

  const headerRef = useRef<HTMLDivElement>(null)
  const speakersRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const speakersInView = useInView(speakersRef, { once: true, amount: 0.1 })

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section ref={headerRef} className="pt-32 pb-20 bg-background-secondary">
        <div className="container px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-font text-secondary mb-6">Speakers & Judges</h1>
            <p className="text-lg md:text-xl body-font text-primary mb-8">
              Meet the literary experts who will guide, inspire, and evaluate at Meraki 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid Section */}
      <section ref={speakersRef} className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={speakersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 tilt-card">
                  <div className="relative aspect-square">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-center space-x-3">
                          {speaker.social.twitter && (
                            <a
                              href={speaker.social.twitter}
                              className="text-white hover:text-gold transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Twitter size={18} />
                            </a>
                          )}
                          {speaker.social.facebook && (
                            <a
                              href={speaker.social.facebook}
                              className="text-white hover:text-gold transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Facebook size={18} />
                            </a>
                          )}
                          {speaker.social.linkedin && (
                            <a
                              href={speaker.social.linkedin}
                              className="text-white hover:text-gold transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin size={18} />
                            </a>
                          )}
                          {speaker.social.website && (
                            <a
                              href={speaker.social.website}
                              className="text-white hover:text-gold transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Globe size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-xl event-title-font text-secondary">{speaker.name}</h3>
                    <p className="text-primary body-font">{speaker.role}</p>
                    <Button
                      variant="link"
                      className="mt-2 p-0 text-primary hover:text-gold"
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Detail Modal */}
      <Dialog open={!!selectedSpeaker} onOpenChange={(open) => !open && setSelectedSpeaker(null)}>
        <DialogContent className="max-w-3xl">
          {selectedSpeaker && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl event-title-font text-secondary">{selectedSpeaker.name}</DialogTitle>
                <DialogDescription className="text-primary">{selectedSpeaker.role}</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={selectedSpeaker.image || "/placeholder.svg"}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Biography</h4>
                    <p className="body-font text-foreground">{selectedSpeaker.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Achievements</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedSpeaker.achievements.map((achievement, index) => (
                        <li key={index} className="body-font text-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Connect</h4>
                    <div className="flex space-x-4">
                      {selectedSpeaker.social.twitter && (
                        <a
                          href={selectedSpeaker.social.twitter}
                          className="text-primary hover:text-gold transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                      {selectedSpeaker.social.facebook && (
                        <a
                          href={selectedSpeaker.social.facebook}
                          className="text-primary hover:text-gold transition-colors"
                        >
                          <Facebook size={20} />
                        </a>
                      )}
                      {selectedSpeaker.social.linkedin && (
                        <a
                          href={selectedSpeaker.social.linkedin}
                          className="text-primary hover:text-gold transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      {selectedSpeaker.social.website && (
                        <a
                          href={selectedSpeaker.social.website}
                          className="text-primary hover:text-gold transition-colors"
                        >
                          <Globe size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <Button className="w-full cta-font bg-gold text-secondary hover:bg-primary hover:text-white">
                    See Events with {selectedSpeaker.name.split(" ")[0]}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  )
}

