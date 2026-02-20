"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "About Me", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certification", href: "#certification" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 dark:bg-black/30 light:bg-pink-100/80 backdrop-blur-xl border-b border-white/10 dark:border-white/20 light:border-pink-300/40 transition-all duration-700 light:shadow-lg light:shadow-pink-300/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 light:from-pink-600 light:via-purple-600 light:to-pink-700 bg-clip-text text-transparent"
          >
            KEERTHI N
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-400 dark:hover:from-pink-400 dark:hover:to-blue-400 light:hover:from-pink-600 light:hover:to-purple-600 hover:bg-clip-text ${
                  activeSection === item.href.substring(1)
                    ? "text-transparent bg-gradient-to-r from-pink-400 to-blue-400 dark:from-pink-400 dark:to-blue-400 light:from-pink-600 light:to-purple-600 bg-clip-text"
                    : "text-gray-300 dark:text-gray-300 light:text-gray-800"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 dark:hover:from-pink-500/20 dark:hover:to-purple-500/20 light:hover:from-pink-300/40 light:hover:to-purple-300/40 rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-yellow-400 dark:text-yellow-400 light:text-orange-600" />
              ) : (
                <Moon className="h-4 w-4 text-purple-400 dark:text-purple-400 light:text-purple-700" />
              )}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 dark:hover:from-pink-500/20 dark:hover:to-purple-500/20 light:hover:from-pink-300/40 light:hover:to-purple-300/40 rounded-full"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/90 dark:bg-black/90 light:bg-gradient-to-br light:from-pink-100/95 light:to-purple-100/95 backdrop-blur-xl border-white/20 dark:border-white/20 light:border-pink-300/40">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-left text-lg font-medium transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-400 dark:hover:from-pink-400 dark:hover:to-blue-400 light:hover:from-pink-600 light:hover:to-purple-600 hover:bg-clip-text ${
                        activeSection === item.href.substring(1)
                          ? "text-transparent bg-gradient-to-r from-pink-400 to-blue-400 dark:from-pink-400 dark:to-blue-400 light:from-pink-600 light:to-purple-600 bg-clip-text"
                          : "text-gray-300 dark:text-gray-300 light:text-gray-800"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
