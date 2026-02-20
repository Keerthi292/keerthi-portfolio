"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail,Download, ArrowRight, Github, Linkedin, Sparkles, Code } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "assets/Keerthi N_resume.pdf"
    link.download = "Keerthi N_Resume.pdf"
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-purple-500/20 dark:from-pink-500/20 dark:to-purple-500/20 light:from-pink-400/25 light:to-purple-400/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-pink-500/20 dark:from-blue-500/20 dark:to-pink-500/20 light:from-purple-400/25 light:to-pink-400/25 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end order-2 lg:order-1"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 light:from-pink-500 light:via-purple-500 light:to-pink-600 rounded-full blur-md opacity-75"
                />
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/20 light:border-pink-300/60 light:shadow-2xl light:shadow-pink-300/30 shadow-2xl">
                  <Image
                    src="/assets/keerthi_img.jpg"
                    alt="Keerthi N - Profile"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent dark:from-purple-900/20 light:from-pink-200/20" />
                </div>
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-500 dark:to-purple-500 light:from-pink-500 light:to-purple-500 rounded-full p-3 shadow-lg light:shadow-pink-300/40"
                >
                  <Sparkles className="h-6 w-6 text-white" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-pink-500 dark:from-blue-500 dark:to-pink-500 light:from-purple-500 light:to-pink-500 rounded-full p-3 shadow-lg light:shadow-purple-300/40"
                >
                  <Code className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 light:from-pink-600 light:via-purple-600 light:to-pink-700 bg-clip-text text-transparent">
                    KEERTHI N
                  </span>
                </h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-800 mb-6"
                >
                  <span className="bg-gradient-to-r from-pink-300 to-purple-300 dark:from-pink-300 dark:to-purple-300 light:from-pink-700 light:to-purple-700 bg-clip-text text-transparent">
                    Aspiring Web Developer/Software Developer,Full Stack Developer and Frontend Developer
                  </span>
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-700 mb-8 max-w-2xl leading-relaxed"
              >
                Passionate about creating efficient, user-friendly solutions that solve real-world problems. Experienced
                in building responsive and dynamic web applications using modern technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              >
                <Button
                  size="lg"
                  onClick={handleResumeDownload}
                  className="group bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 dark:from-pink-500 dark:to-purple-500 light:from-pink-600 light:to-purple-600 light:hover:from-pink-700 light:hover:to-purple-700 border-0 shadow-lg hover:shadow-xl light:shadow-pink-300/40 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="group border-2 border-purple-500/50 hover:border-purple-400 dark:border-purple-500/50 dark:hover:border-purple-400 light:border-pink-400/60 light:hover:border-purple-500/60 bg-transparent hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 dark:hover:from-purple-500/10 dark:hover:to-pink-500/10 light:hover:from-pink-200/30 light:hover:to-purple-200/30 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-800 light:hover:text-gray-900 transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center lg:justify-start space-x-6"
              >
                <motion.a
                  href="https://github.com/Keerthi292"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-pink-500/20 hover:to-purple-500/20 dark:from-gray-800 dark:to-gray-700 dark:hover:from-pink-500/20 dark:hover:to-purple-500/20 light:from-pink-100/80 light:to-purple-100/80 light:hover:from-pink-200/60 light:hover:to-purple-200/60 border border-white/10 hover:border-pink-400/50 dark:border-white/10 dark:hover:border-pink-400/50 light:border-pink-300/40 light:hover:border-pink-400/60 transition-all duration-300 group shadow-lg light:shadow-pink-200/30"
                >
                  <Github className="h-6 w-6 text-gray-300 group-hover:text-pink-400 dark:text-gray-300 dark:group-hover:text-pink-400 light:text-gray-700 light:group-hover:text-pink-600 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/keerthi-nagaraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-500/20 hover:to-purple-500/20 dark:from-gray-800 dark:to-gray-700 dark:hover:from-blue-500/20 dark:hover:to-purple-500/20 light:from-pink-100/80 light:to-purple-100/80 light:hover:from-purple-200/60 light:hover:to-pink-200/60 border border-white/10 hover:border-blue-400/50 dark:border-white/10 dark:hover:border-blue-400/50 light:border-pink-300/40 light:hover:border-purple-400/60 transition-all duration-300 group shadow-lg light:shadow-purple-200/30"
                >
                  <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-blue-400 dark:text-gray-300 dark:group-hover:text-blue-400 light:text-gray-700 light:group-hover:text-purple-600 transition-colors" />
                </motion.a>
                <motion.a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=keerthinagaraj292@gmail.com"
                    target="_blank"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-red-500/20 hover:to-pink-500/20 border border-white/10 hover:border-red-400/50 transition-all duration-300 group shadow-lg"
                  >
                    <Mail className="h-6 w-6 text-gray-300 group-hover:text-red-400 transition-colors" />
                  </motion.a>
                
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
