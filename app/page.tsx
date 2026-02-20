"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificationSection from "@/components/certification-section"
import ContactSection from "@/components/contact-section"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="portfolio-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 dark:from-slate-900 dark:via-purple-900 dark:to-pink-900 light:from-pink-200 light:via-purple-200 light:to-pink-300 text-foreground transition-all duration-700">
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 dark:from-pink-500/10 dark:via-purple-500/10 dark:to-blue-500/10 light:from-pink-400/30 light:via-purple-400/30 light:to-pink-500/30 pointer-events-none transition-all duration-700"></div>

        <Navigation />

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationSection />
          <ContactSection />
        </main>

        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed bottom-8 right-8 z-50"
            >
              <Button
                onClick={scrollToTop}
                size="icon"
                className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 dark:from-pink-500 dark:to-purple-500 light:from-pink-600 light:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
