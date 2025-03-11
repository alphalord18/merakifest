"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Search, Calendar, User, ArrowRight, BookOpen } from "lucide-react"

// Blog categories
const categories = [
  { id: "all", name: "All Posts" },
  { id: "poetry", name: "Poetry" },
  { id: "fiction", name: "Fiction" },
  { id: "essays", name: "Essays" },
  { id: "interviews", name: "Interviews" },
  { id: "tips", name: "Writing Tips" },
]

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Modern Poetry",
    excerpt: "Exploring how poetry has transformed in the digital age and what it means for aspiring poets.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "poetry",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 15, 2024",
    author: "Sophia Williams",
    authorRole: "Poet Laureate",
    authorImage: "/placeholder.svg?height=100&width=100",
    featured: true,
  },
  {
    id: 2,
    title: "Finding Your Voice as a Writer",
    excerpt: "Tips and techniques to develop your unique writing style and stand out in a crowded literary landscape.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "tips",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 10, 2024",
    author: "Alexandra Rivers",
    authorRole: "Bestselling Author",
    authorImage: "/placeholder.svg?height=100&width=100",
    featured: false,
  },
  {
    id: 3,
    title: "The Art of Storytelling",
    excerpt: "What makes a compelling narrative in the 21st century? Discover the elements that captivate readers.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "fiction",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 5, 2024",
    author: "James Rodriguez",
    authorRole: "Playwright",
    authorImage: "/placeholder.svg?height=100&width=100",
    featured: true,
  },
  {
    id: 4,
    title: "In Conversation with Pulitzer Winner Maria Gonzalez",
    excerpt: "An exclusive interview with this year's Pulitzer Prize winner on her creative process and inspirations.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "interviews",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 28, 2024",
    author: "Dr. Marcus Chen",
    authorRole: "Literary Critic",
    authorImage: "/placeholder.svg?height=100&width=100",
    featured: false,
  },
  {
    id: 5,
    title: "The Importance of Literary Criticism",
    excerpt: "How critical analysis shapes our understanding of literature and influences cultural discourse.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "essays",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 20, 2024",
    author: "Dr. Marcus Chen",
    authorRole: "Literary Critic",
    authorImage: "/placeholder.svg?height=100&width=100",
    featured: false,
  },
  {
    id: 6,
    title: "Crafting Memorable Characters",
    excerpt:
      "Learn how to create characters that readers will connect with and remember long after finishing your story.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "tips",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 15, 2024",
    author: "Alexandra Rivers",
    authorRole: "Bestselling Author",
    authorImage: "/placeholder.svg?height=100&width=100",
    featured: false,
  },
  {
    id: 7,
    title: "The Revival of Formal Poetry",
    excerpt: "Examining the renewed interest in sonnets, villanelles, and other traditional poetic forms.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "poetry",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 8, 2024",
    author: "Sophia Williams",
    authorRole: "Poet Laureate",
    authorImage: "/placeholder.svg?height=100&width=100",
    featured: false,
  },
  {
    id: 8,
    title: "Flash Fiction: The Art of Brevity",
    excerpt: "How to tell a complete story in under 1,000 words while maintaining impact and meaning.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    category: "fiction",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 1, 2024",
    author: "James Rodriguez",
    authorRole: "Playwright",
    authorImage: "/placeholder.svg?height=100&width=100",
    featured: false,
  },
]

// Featured submissions
const featuredSubmissions = [
  {
    id: 1,
    title: "Whispers of Autumn",
    type: "Poem",
    author: "Elena Michaels",
    excerpt: "The leaves fall gently, a whisper of time passing...",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "The Last Train",
    type: "Short Story",
    author: "Marcus Johnson",
    excerpt: "The station was empty except for a single figure waiting on the platform...",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Reflections on Modern Literature",
    type: "Essay",
    author: "Dr. Sarah Chen",
    excerpt: "The digital age has transformed not only how we consume literature but also how we create it...",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const headerRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const submissionsRef = useRef<HTMLDivElement>(null)

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.1 })
  const submissionsInView = useInView(submissionsRef, { once: true, amount: 0.1 })

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "all" || post.category === selectedCategory) &&
      (searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const featuredPosts = blogPosts.filter((post) => post.featured)

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-font text-secondary mb-6">
              Blog & Literary Submissions
            </h1>
            <p className="text-lg md:text-xl body-font text-primary mb-8">
              Insights, stories, and creative works from the Meraki community
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search articles, authors, or topics..."
                className="pl-10 py-6"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section ref={featuredRef} className="py-16 bg-background">
          <div className="container px-4">
            <h2 className="text-3xl heading-font text-secondary mb-8">Featured Articles</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 relative">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-2 left-2 bg-gold text-secondary text-xs py-1 px-2 rounded-full nav-font">
                          {categories.find((c) => c.id === post.category)?.name}
                        </div>
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl event-title-font text-secondary mb-3">{post.title}</h3>
                        <p className="text-foreground body-font mb-4">{post.excerpt}</p>

                        <div className="flex items-center mt-auto">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                            <Image
                              src={post.authorImage || "/placeholder.svg"}
                              alt={post.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{post.author}</p>
                            <p className="text-sm text-gray-500">{post.authorRole}</p>
                          </div>
                        </div>

                        <Button className="mt-4 bg-primary text-white hover:bg-gold hover:text-secondary">
                          Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container px-4">
          <h2 className="text-3xl heading-font text-secondary mb-8">Latest Articles</h2>

          {/* Category Filters */}
          <Tabs defaultValue="all" className="mb-8" onValueChange={setSelectedCategory}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="nav-font">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Blog Grid */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                          <div className="relative h-48">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-gold text-secondary text-xs py-1 px-2 rounded-full nav-font">
                              {categories.find((c) => c.id === post.category)?.name}
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                            <h3 className="text-xl event-title-font text-secondary mb-3">{post.title}</h3>
                            <p className="text-foreground body-font mb-4 line-clamp-3">{post.excerpt}</p>

                            <div className="flex items-center mt-4">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                                <Image
                                  src={post.authorImage || "/placeholder.svg"}
                                  alt={post.author}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-sm font-medium">{post.author}</span>
                            </div>

                            <Button variant="link" className="mt-4 p-0 text-primary hover:text-gold">
                              Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg body-font text-gray-500">No articles found matching your criteria.</p>
                    <Button
                      variant="link"
                      className="mt-2 text-primary hover:text-gold"
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedCategory("all")
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <Button className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Literary Submissions */}
      <section ref={submissionsRef} className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={submissionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl heading-font text-secondary mb-4">Featured Literary Submissions</h2>
            <p className="text-lg body-font text-primary max-w-3xl mx-auto">
              Exceptional creative works from previous Meraki events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredSubmissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={submissionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                  <div className="relative h-40">
                    <Image
                      src={submission.image || "/placeholder.svg"}
                      alt={submission.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-gold text-secondary text-xs py-1 px-2 rounded-full nav-font">
                      {submission.type}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl event-title-font text-secondary mb-2">{submission.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="h-4 w-4 mr-1" />
                      <span>By {submission.author}</span>
                    </div>
                    <p className="text-foreground body-font mb-4 italic">"{submission.excerpt}"</p>
                    <Button className="w-full bg-primary text-white hover:bg-gold hover:text-secondary">
                      <BookOpen className="mr-2 h-4 w-4" /> Read Full Work
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary">
              Browse All Submissions
            </Button>
          </div>
        </div>
      </section>

      {/* Submit Your Work CTA */}
      <section className="py-16 bg-primary">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl heading-font text-white mb-4">Submit Your Work</h2>
            <p className="text-lg body-font text-white/80 mb-8">
              Share your poetry, short stories, essays, or other creative works with the Meraki community. Selected
              submissions will be featured on our website and in the Meraki Magazine.
            </p>
            <Button className="cta-font bg-gold text-secondary hover:bg-white hover:text-secondary">Submit Now</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

