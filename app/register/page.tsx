"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check, MessageSquare } from "lucide-react"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    institution: "",
    participantType: "",
    events: [] as string[],
    accommodationNeeded: false,
    dietaryRestrictions: "",
    hearAbout: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const formInView = useInView(formRef, { once: true, amount: 0.3 })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleEventToggle = (event: string) => {
    setFormData((prev) => {
      const events = [...prev.events]
      if (events.includes(event)) {
        return { ...prev, events: events.filter((e) => e !== event) }
      } else {
        return { ...prev, events: [...events, event] }
      }
    })
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo({ top: formRef.current?.offsetTop || 0, behavior: "smooth" })
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1500)
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-font text-secondary mb-6">
              Register for Meraki 2025
            </h1>
            <p className="text-lg md:text-xl body-font text-primary mb-8">
              Join us for an unforgettable celebration of creativity and literary expression
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section ref={formRef} className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {!isSubmitted ? (
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  {/* Progress Steps */}
                  <div className="flex justify-between mb-12 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

                    {[1, 2, 3, 4].map((stepNumber) => (
                      <div key={stepNumber} className="relative z-10 flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step >= stepNumber ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
                          }`}
                        >
                          {step > stepNumber ? <Check className="h-5 w-5" /> : stepNumber}
                        </div>
                        <div className={`text-sm mt-2 ${step >= stepNumber ? "text-primary" : "text-gray-500"}`}>
                          {stepNumber === 1 && "Personal Info"}
                          {stepNumber === 2 && "Event Selection"}
                          {stepNumber === 3 && "Preferences"}
                          {stepNumber === 4 && "Confirmation"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <h2 className="text-2xl event-title-font text-secondary mb-6">Personal Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="institution">Institution/Organization</Label>
                            <Input
                              id="institution"
                              name="institution"
                              value={formData.institution}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Participant Type</Label>
                            <RadioGroup
                              value={formData.participantType}
                              onValueChange={(value) => handleSelectChange("participantType", value)}
                              required
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="student" id="student" />
                                <Label htmlFor="student">Student</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="professional" id="professional" />
                                <Label htmlFor="professional">Professional</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="other" id="other" />
                                <Label htmlFor="other">Other</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary"
                          >
                            Next Step
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Event Selection */}
                    {step === 2 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <h2 className="text-2xl event-title-font text-secondary mb-6">Event Selection</h2>
                        <p className="mb-4 body-font">Select the events you wish to participate in:</p>

                        <div className="space-y-4 mb-6">
                          {[
                            "Poetry Slam Championship",
                            "Great Debate: Technology & Society",
                            "Storytelling Marathon",
                            "Creative Writing Workshop",
                            "Flash Fiction Competition",
                            "Poetry in Motion: Dance & Verse",
                          ].map((event) => (
                            <div key={event} className="flex items-start space-x-2">
                              <Checkbox
                                id={event.replace(/\s+/g, "-").toLowerCase()}
                                checked={formData.events.includes(event)}
                                onCheckedChange={(checked) => {
                                  if (checked) handleEventToggle(event)
                                  else handleEventToggle(event)
                                }}
                              />
                              <div className="grid gap-1.5 leading-none">
                                <Label
                                  htmlFor={event.replace(/\s+/g, "-").toLowerCase()}
                                  className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {event}
                                </Label>
                                <p className="text-sm text-muted-foreground">
                                  March 15-20, 2025 (Specific times vary by event)
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            Previous
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary"
                          >
                            Next Step
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Preferences */}
                    {step === 3 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <h2 className="text-2xl event-title-font text-secondary mb-6">
                          Preferences & Additional Information
                        </h2>

                        <div className="space-y-6 mb-6">
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="accommodation"
                              checked={formData.accommodationNeeded}
                              onCheckedChange={(checked) => {
                                handleCheckboxChange("accommodationNeeded", checked === true)
                              }}
                            />
                            <div className="grid gap-1.5 leading-none">
                              <Label
                                htmlFor="accommodation"
                                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                I need accommodation during the event
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Limited accommodation is available for out-of-town participants
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                            <Textarea
                              id="dietaryRestrictions"
                              name="dietaryRestrictions"
                              placeholder="Please specify any dietary restrictions or allergies"
                              value={formData.dietaryRestrictions}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="hearAbout">How did you hear about Meraki 2025?</Label>
                            <Select
                              value={formData.hearAbout}
                              onValueChange={(value) => handleSelectChange("hearAbout", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="social-media">Social Media</SelectItem>
                                <SelectItem value="friend">Friend or Colleague</SelectItem>
                                <SelectItem value="email">Email Newsletter</SelectItem>
                                <SelectItem value="website">Website</SelectItem>
                                <SelectItem value="previous-event">Previous Meraki Event</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Additional Message</Label>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Any additional information or questions"
                              value={formData.message}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            Previous
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary"
                          >
                            Next Step
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Confirmation */}
                    {step === 4 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <h2 className="text-2xl event-title-font text-secondary mb-6">Confirm Your Registration</h2>

                        <div className="bg-background-secondary p-6 rounded-lg mb-6">
                          <h3 className="text-lg font-semibold mb-4">Registration Summary</h3>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm font-medium">Name:</p>
                              <p>
                                {formData.firstName} {formData.lastName}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Email:</p>
                              <p>{formData.email}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Phone:</p>
                              <p>{formData.phone}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium">Participant Type:</p>
                              <p>{formData.participantType}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm font-medium">Selected Events:</p>
                            {formData.events.length > 0 ? (
                              <ul className="list-disc list-inside">
                                {formData.events.map((event) => (
                                  <li key={event}>{event}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>No events selected</p>
                            )}
                          </div>

                          <div>
                            <p className="text-sm font-medium">Additional Requests:</p>
                            <p>
                              {formData.accommodationNeeded && "Accommodation needed. "}
                              {formData.dietaryRestrictions &&
                                `Dietary restrictions: ${formData.dietaryRestrictions}. `}
                              {formData.message && `Message: ${formData.message}`}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2 mb-6">
                          <Checkbox id="terms" required />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="terms"
                              className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to the terms and conditions
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              By registering, you agree to our{" "}
                              <a href="#" className="text-primary hover:underline">
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a href="#" className="text-primary hover:underline">
                                Privacy Policy
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            Previous
                          </Button>
                          <Button
                            type="submit"
                            className="cta-font bg-gold text-secondary hover:bg-primary hover:text-white"
                          >
                            Complete Registration
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl heading-font text-secondary mb-4">Registration Complete!</h2>
                <p className="text-lg body-font text-primary mb-8 max-w-2xl mx-auto">
                  Thank you for registering for Meraki 2025! A confirmation email has been sent to {formData.email} with
                  all the details of your registration.
                </p>
                <Button className="cta-font bg-primary text-white hover:bg-gold hover:text-secondary">
                  Return to Homepage
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* AI Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-gold text-secondary hover:bg-primary hover:text-white shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>

        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-primary p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold">Meraki Assistant</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="h-8 w-8 p-0 text-white hover:bg-primary/80"
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              <div className="flex flex-col space-y-4">
                <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">
                    Hello! I'm the Meraki AI Assistant. How can I help you with your registration today?
                  </p>
                </div>
                <div className="bg-gold/10 p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
                  <p className="text-sm">What events are available for beginners?</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">
                    Great question! For beginners, I'd recommend the Creative Writing Workshop and the Storytelling
                    Marathon. Both events are welcoming to all skill levels and provide a supportive environment to
                    learn and grow.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input placeholder="Type your question..." className="flex-grow" />
                <Button className="bg-primary text-white hover:bg-gold hover:text-secondary">Send</Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  )
}

