"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, Clock, MapPin, Users, ChevronDown, Plus } from "lucide-react"

// Event categories
const categories = [
  { id: "all", name: "All Events" },
  { id: "poetry", name: "Poetry" },
  { id: "debate", name: "Debate" },
  { id: "storytelling", name: "Storytelling" },
  { id: "workshop", name: "Workshops" },
  { id: "competition", name: "Competitions" },
]

// Event data
const events = [
  {
    id: 1,
    title: "Poetry Slam Championship",
    category: "poetry",
    date: "March 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Main Auditorium",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Express yourself through powerful spoken word performances. Our annual Poetry Slam Championship brings together the most talented poets to compete for the grand prize.",
    capacity: 200,
    judges: [
      { name: "Sophia Williams", role: "Poet Laureate", image: "/placeholder.svg?height=100&width=100" },
      { name: "James Rodriguez", role: "Playwright", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: 2,
    title: "Great Debate: Technology & Society",
    category: "debate",
    date: "March 16, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Conference Hall B",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Join us for an intellectual discourse on how technology is shaping modern society. Teams will debate the benefits and drawbacks of our increasingly digital world.",
    capacity: 150,
    judges: [
      { name: "Dr. Marcus Chen", role: "Literary Critic", image: "/placeholder.svg?height=100&width=100" },
      { name: "Alexandra Rivers", role: "Bestselling Author", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: 3,
    title: "Storytelling Marathon",
    category: "storytelling",
    date: "March 17, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Garden Pavilion",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A day-long celebration of the art of storytelling. Participants will take turns sharing original stories, folktales, and personal narratives in this immersive experience.",
    capacity: 100,
    judges: [
      { name: "James Rodriguez", role: "Playwright", image: "/placeholder.svg?height=100&width=100" },
      { name: "Alexandra Rivers", role: "Bestselling Author", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: 4,
    title: "Creative Writing Workshop",
    category: "workshop",
    date: "March 18, 2025",
    time: "1:00 PM - 3:00 PM",
    location: "Workshop Room A",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Learn techniques to enhance your creative writing skills. This workshop will cover character development, plot structure, dialogue, and more.",
    capacity: 50,
    judges: [{ name: "Alexandra Rivers", role: "Bestselling Author", image: "/placeholder.svg?height=100&width=100" }],
  },
  {
    id: 5,
    title: "Flash Fiction Competition",
    category: "competition",
    date: "March 19, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Literary Lounge",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Challenge yourself to tell a complete story in just 100 words. Our flash fiction competition rewards brevity, creativity, and impact.",
    capacity: 75,
    judges: [
      { name: "Dr. Marcus Chen", role: "Literary Critic", image: "/placeholder.svg?height=100&width=100" },
      { name: "Sophia Williams", role: "Poet Laureate", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: 6,
    title: "Poetry in Motion: Dance & Verse",
    category: "poetry",
    date: "March 20, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Performance Theater",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A unique fusion of poetry and dance, where performers interpret poems through movement while the verses are recited live.",
    capacity: 180,
    judges: [
      { name: "Sophia Williams", role: "Poet Laureate", image: "/placeholder.svg?height=100&width=100" },
      { name: "James Rodriguez", role: "Playwright", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })

  const filteredEvents =
    selectedCategory === "all" ? events : events.filter((event) => event.category === selectedCategory)

  const toggleEventDetails = (eventId: number) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId)
  }

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-font text-secondary mb-6">Meraki 2025 Events</h1>
            <p className="text-lg md:text-xl body-font text-primary mb-8">
              Discover our lineup of creative and literary events designed to inspire, challenge, and celebrate artistic
              expression
            </p>
            <Button className="cta-font bg-gold text-secondary hover:bg-primary hover:text-white">Register Now</Button>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          {/* Category Filters */}
          <Tabs defaultValue="all" className="mb-12" onValueChange={setSelectedCategory}>
            <div className="flex justify-center">
              <TabsList className="bg-background-secondary">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="nav-font">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Events Grid */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="tilt-card"
                    >
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="relative h-48">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-gold text-secondary text-xs py-1 px-2 rounded-full nav-font">
                            {categories.find((c) => c.id === event.category)?.name}
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl event-title-font text-secondary mb-3">{event.title}</h3>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-primary" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <MapPin className="h-4 w-4 mr-2 text-primary" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Users className="h-4 w-4 mr-2 text-primary" />
                              <span>Capacity: {event.capacity}</span>
                            </div>
                          </div>

                          <p className="text-sm body-font text-foreground mb-4 line-clamp-3">{event.description}</p>

                          <div className="flex justify-between items-center">
                            <Button
                              variant="outline"
                              className="text-primary border-primary hover:bg-primary hover:text-white"
                              onClick={() => toggleEventDetails(event.id)}
                            >
                              {expandedEvent === event.id ? "Hide Details" : "View Details"}
                              <ChevronDown
                                className={`ml-1 h-4 w-4 transition-transform ${expandedEvent === event.id ? "rotate-180" : ""}`}
                              />
                            </Button>
                            <Button className="bg-gold text-secondary hover:bg-primary hover:text-white">
                              Register
                            </Button>
                          </div>

                          {/* Expanded Details */}
                          {expandedEvent === event.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t"
                            >
                              <h4 className="text-lg font-semibold mb-2">Event Judges</h4>
                              <div className="flex space-x-4 mb-4">
                                {event.judges.map((judge, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                      <Image
                                        src={judge.image || "/placeholder.svg"}
                                        alt={judge.name}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium">{judge.name}</p>
                                      <p className="text-xs text-gray-500">{judge.role}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="text-primary border-primary">
                                  <Calendar className="mr-1 h-4 w-4" /> Add to Calendar
                                </Button>
                                <Button size="sm" variant="outline" className="text-primary border-primary">
                                  <Plus className="mr-1 h-4 w-4" /> Share Event
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}

