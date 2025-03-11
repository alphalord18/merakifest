"use client"

import { useState, useEffect } from "react"

interface AnimatedTypingProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export default function AnimatedTyping({ text, speed = 100, delay = 0, className = "" }: AnimatedTypingProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (delay > 0 && !isTyping) {
      timeout = setTimeout(() => {
        setIsTyping(true)
      }, delay)
      return () => clearTimeout(timeout)
    }

    if (!isTyping) {
      setIsTyping(true)
      return
    }

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, isTyping, speed, text])

  return <span className={className}>{displayText}</span>
}

