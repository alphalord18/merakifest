import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"

// Load local fonts or use similar Google Fonts as fallbacks
const noeDisplay = localFont({
  src: "../public/fonts/NoeDisplay-Bold.woff2",
  variable: "--font-noe-display",
  display: "swap",
})

const editorialNew = localFont({
  src: "../public/fonts/EditorialNew-Bold.woff2",
  variable: "--font-editorial-new",
  display: "swap",
})

const monumentExtended = localFont({
  src: "../public/fonts/MonumentExtended-Medium.woff2",
  variable: "--font-monument-extended",
  display: "swap",
})

const neueMontreal = localFont({
  src: "../public/fonts/NeueMontreal-Medium.woff2",
  variable: "--font-neue-montreal",
  display: "swap",
})

const ppNeueMachina = localFont({
  src: "../public/fonts/PPNeueMachina-SemiBold.woff2",
  variable: "--font-pp-neue-machina",
  display: "swap",
})

// Fallback font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Meraki 2025 - Where Creativity Meets Expression",
  description:
    "Join Meraki 2025, the premier creative and literary event featuring debate clubs, poetry slams, storytelling contests, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${noeDisplay.variable} ${editorialNew.variable} ${monumentExtended.variable} ${neueMontreal.variable} ${ppNeueMachina.variable} body-font`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'