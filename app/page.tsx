"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CountdownTimer from "@/components/countdown-timer"
import SponsorCarousel from "@/components/sponsor-carousel"
import AnimatedTyping from "@/components/animated-typing"
import { Play, Calendar, Download, ArrowRight, ChevronRight } from "lucide-react"

export default function Home() {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const whyJoinRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const speakersRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const quizRef = useRef<HTMLDivElement>(null)
  const downloadRef = useRef<HTMLDivElement>(null)
  const newsletterRef = useRef<HTMLDivElement>(null)

  // InView states
  const highlightsInView = useInView(highlightsRef, { once: true, amount: 0.3 })
  const whyJoinInView = useInView(whyJoinRef, { once: true, amount: 0.3 })
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 })
  const speakersInView = useInView(speakersRef, { once: true, amount: 0.3 })
  const blogInView = useInView(blogRef, { once: true, amount: 0.3 })
  const quizInView = useInView(quizRef, { once: true, amount: 0.3 })
  const downloadInView = useInView(downloadRef, { once: true, amount: 0.3 })
  const newsletterInView = useInView(newsletterRef, { once: true, amount: 0.3 })

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Event highlights data
  const eventHighlights = [
    {
      title: "Poetry Slam",
      description: "Express yourself through powerful spoken word performances.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Debate Championship",
      description: "Engage in intellectual discourse on contemporary issues.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Storytelling Contest",
      description: "Captivate audiences with your narrative prowess.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Literary Quiz",
      description: "Test your knowledge of literary classics and contemporary works.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  // Timeline data
  const timelineEvents = [
    {
      date: "January 15, 2025",
      title: "Registration Opens",
      description: "Early bird registration with special discounts.",
      isPast: false,
    },
    {
      date: "February 10, 2025",
      title: "Submission Deadline",
      description: "Last date to submit your literary works for the competition.",
      isPast: false,
    },
    {
      date: "February 25, 2025",
      title: "Finalists Announcement",
      description: "Selected participants will be notified via email.",
      isPast: false,
    },
    {
      date: "March 15-20, 2025",
      title: "Meraki 2025 Festival",
      description: "Five days of literary celebration and creative expression.",
      isPast: false,
    },
  ]

  // Speakers data
  const speakers = [
    {
      name: "Alexandra Rivers",
      role: "Bestselling Author",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Alexandra Rivers is the author of the award-winning novel 'Echoes of Silence'.",
    },
    {
      name: "Dr. Marcus Chen",
      role: "Literary Critic",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dr. Chen is a renowned literary critic and professor at Columbia University.",
    },
    {
      name: "Sophia Williams",
      role: "Poet Laureate",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sophia Williams has published five poetry collections and won the National Poetry Award.",
    },
    {
      name: "James Rodriguez",
      role: "Playwright",
      image: "/placeholder.svg?height=400&width=400",
      bio: "James Rodriguez's plays have been performed on Broadway and in theaters worldwide.",
    },
  ]

  // Blog posts data
  const blogPosts = [
    {
      title: "The Evolution of Modern Poetry",
      excerpt: "Exploring how poetry has transformed in the digital age.",
      image: "/placeholder.svg?height=200&width=300",
      date: "November 15, 2024",
    },
    {
      title: "Finding Your Voice as a Writer",
      excerpt: "Tips and techniques to develop your unique writing style.",
      image: "/placeholder.svg?height=200&width=300",
      date: "December 2, 2024",
    },
    {
      title: "The Art of Storytelling",
      excerpt: "What makes a compelling narrative in the 21st century?",
      image: "/placeholder.svg?height=200&width=300",
      date: "December 20, 2024",
    },
  ]

  // Quiz questions
  const quizQuestions = [
    {
      question: "Who wrote 'Pride and Prejudice'?",
      options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Virginia Woolf"],
      answer: 0,
    },
    {
      question: "Which Shakespeare play features the character Hamlet?",
      options: ["Macbeth", "Romeo and Juliet", "Hamlet", "King Lear"],
      answer: 2,
    },
    {
      question: "Who is the author of '1984'?",
      options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
      answer: 1,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 animated-gradient z-0"></div>

        {/* Content */}
        <motion.div className="container relative z-10 text-center px-4" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl heading-font text-secondary mb-4 animate-gold-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MERAKI 2025
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl event-title-font text-primary mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Where Creativity Meets Expression
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="cta-font bg-gold text-secondary hover:bg-primary hover:text-white text-lg px-8 py-6">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="cta-font border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6"
            >
              View Events
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }}>
            <CountdownTimer />
          </motion.div>
        </motion.div>

        {/* Sponsor Carousel */}
        <div className="absolute bottom-0 left-0 right-0">
          <SponsorCarousel />
        </div>
      </section>

      {/* Event Highlights Section */}
      <section ref={highlightsRef} className="py-20 bg-background-secondary">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={highlightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-font text-secondary mb-4">Event Highlights</h2>
            <p className="text-lg md:text-xl body-font text-primary max-w-3xl mx-auto">
              Discover the exciting events that await you at Meraki 2025
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventHighlights.map((event, index) => (
              <motion.div
                key={index}
                className="tilt-card"
                initial={{ opacity: 0, y: 20 }}
                animate={highlightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Card className="overflow-hidden h-full bg-white hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-xl event-title-font text-white p-4">{event.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="body-font text-foreground">{event.description}</p>
                    <Button variant="link" className="mt-2 p-0 cta-font text-primary hover:text-gold">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 bg-secondary">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl heading-font text-white mb-8">Experience Meraki</h2>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                <Button className="rounded-full w-16 h-16 bg-gold hover:bg-white text-secondary">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Meraki Event Highlights"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-white/80 body-font">
              Highlights from Meraki 2024 - A glimpse of what to expect this year
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Meraki Section */}
      <section ref={whyJoinRef} className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={whyJoinInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-font text-secondary mb-4">Why Join Meraki?</h2>
            <div className="h-8 mb-4">
              {whyJoinInView && (
                <AnimatedTyping
                  text="Join a community of creative minds!"
                  className="text-lg md:text-xl body-font text-primary"
                  speed={50}
                />
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={whyJoinInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 animate-float">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
                  <path d="M16 17.5c0 1.5-2 2.5-4 2.5s-4-1-4-2.5"></path>
                  <path d="M8 12h8"></path>
                  <path d="M10 9h4"></path>
                </svg>
              </div>
              <h3 className="text-xl event-title-font text-secondary mb-2">Debate Club</h3>
              <p className="body-font text-foreground">Sharpen your critical thinking and persuasive skills.</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={whyJoinInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 animate-float">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl event-title-font text-secondary mb-2">Poetry Slams</h3>
              <p className="body-font text-foreground">Express your emotions through powerful spoken word.</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={whyJoinInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 animate-float">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl event-title-font text-secondary mb-2">Storytelling Contests</h3>
              <p className="body-font text-foreground">Captivate audiences with your narrative prowess.</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={whyJoinInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 animate-float">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl event-title-font text-secondary mb-2">Literary Workshops</h3>
              <p className="body-font text-foreground">Learn from industry experts and hone your craft.</p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Button className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary">
              Join the Community <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-background-secondary">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-font text-secondary mb-4">Key Dates & Timeline</h2>
            <p className="text-lg md:text-xl body-font text-primary max-w-3xl mx-auto">
              Mark your calendar for these important Meraki 2025 milestones
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-4 mb-12 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="md:w-1/3 text-right md:pr-8">
                  <div className={`text-lg nav-font ${event.isPast ? "text-gray-400" : "text-gold animate-gold-glow"}`}>
                    {event.date}
                  </div>
                </div>

                <div className="hidden md:block w-10 relative">
                  <div className="absolute top-0 bottom-0 left-1/2 -ml-px bg-primary/30 w-0.5"></div>
                  <div
                    className={`absolute top-1 left-1/2 -ml-2.5 w-5 h-5 rounded-full border-2 ${event.isPast ? "bg-gray-300 border-gray-400" : "bg-gold border-gold"}`}
                  ></div>
                </div>

                <div className="md:w-2/3">
                  <Card className={`h-full ${event.isPast ? "bg-gray-100" : "bg-white"}`}>
                    <CardContent className="p-4">
                      <h3
                        className={`text-xl event-title-font mb-2 ${event.isPast ? "text-gray-500" : "text-secondary"}`}
                      >
                        {event.title}
                      </h3>
                      <p className={`body-font ${event.isPast ? "text-gray-400" : "text-foreground"}`}>
                        {event.description}
                      </p>
                      {!event.isPast && (
                        <Button variant="link" className="mt-2 p-0 cta-font text-primary hover:text-gold">
                          Add to Calendar <Calendar className="h-4 w-4 ml-1" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges & Speakers Section */}
      <section ref={speakersRef} className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={speakersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-font text-secondary mb-4">Judges & Speakers</h2>
            <p className="text-lg md:text-xl body-font text-primary max-w-3xl mx-auto">
              Meet the literary experts who will guide and evaluate at Meraki 2025
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={speakersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <p className="text-white body-font">{speaker.bio}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl event-title-font text-secondary">{speaker.name}</h3>
                <p className="text-primary body-font">{speaker.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary">
              View All Speakers <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section ref={blogRef} className="py-20 bg-background-secondary">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={blogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-font text-secondary mb-4">Latest Blog Posts</h2>
            <p className="text-lg md:text-xl body-font text-primary max-w-3xl mx-auto">
              Insights, stories, and updates from the Meraki community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={blogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm text-primary/70 mb-2 nav-font">{post.date}</div>
                    <h3 className="text-xl event-title-font text-secondary mb-2">{post.title}</h3>
                    <p className="body-font text-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 cta-font text-primary hover:text-gold">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section ref={quizRef} className="py-20 bg-secondary">
        <div className="container px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={quizInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-font text-white mb-4">
              Test Your Literary Knowledge!
            </h2>
            <p className="text-lg md:text-xl body-font text-white/80 max-w-3xl mx-auto">
              Take our quick quiz and see how well you know your literary classics
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardContent className="p-6">
                {quizQuestions.map((question, index) => (
                  <motion.div
                    key={index}
                    className="mb-8 last:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={quizInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 * index }}
                  >
                    <h3 className="text-xl event-title-font mb-4">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className="flex items-center space-x-3 p-3 rounded-md hover:bg-white/10 cursor-pointer transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                            {optIndex === question.answer && <div className="w-3 h-3 rounded-full bg-gold"></div>}
                          </div>
                          <span className="body-font">{option}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <div className="mt-8 text-center">
                  <Button className="cta-font bg-gold text-secondary hover:bg-white hover:text-secondary">
                    Submit Answers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Magazine Section */}
      <section ref={downloadRef} className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={downloadInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Meraki Magazine Cover"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={downloadInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl heading-font text-secondary mb-4">Download Meraki Magazine</h2>
              <p className="text-lg body-font text-foreground mb-6">
                Get inspired by the best literary works from previous Meraki events. Our digital magazine features
                award-winning poems, short stories, interviews with renowned authors, and insights into the creative
                process.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-secondary">✓</div>
                  <span className="body-font">Award-winning submissions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-secondary">✓</div>
                  <span className="body-font">Exclusive interviews with literary icons</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-secondary">✓</div>
                  <span className="body-font">Writing tips from industry experts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-secondary">✓</div>
                  <span className="body-font">Behind-the-scenes of Meraki events</span>
                </li>
              </ul>
              <Button className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary">
                <Download className="mr-2 h-4 w-4" /> Download Free PDF
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={newsletterRef} className="py-20 bg-primary">
        <div className="container px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={newsletterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl heading-font text-white mb-4">Stay Updated</h2>
            <p className="text-lg body-font text-white/80 mb-8">
              Subscribe to our newsletter to receive the latest updates, event announcements, and exclusive content from
              Meraki 2025.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <Button className="cta-font bg-gold text-secondary hover:bg-white hover:text-secondary whitespace-nowrap">
                Subscribe Now
              </Button>
            </form>

            <p className="text-sm text-white/60 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

