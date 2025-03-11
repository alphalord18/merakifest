"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the event date - example: March 15, 2025
    const eventDate = new Date("2025-03-15T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center space-x-4 md:space-x-8">
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-bold heading-font text-secondary">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div className="text-xs md:text-sm nav-font text-primary mt-1">DAYS</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-bold heading-font text-secondary">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-xs md:text-sm nav-font text-primary mt-1">HOURS</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-bold heading-font text-secondary">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-xs md:text-sm nav-font text-primary mt-1">MINUTES</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-bold heading-font text-secondary">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-xs md:text-sm nav-font text-primary mt-1">SECONDS</div>
      </div>
    </div>
  )
}

