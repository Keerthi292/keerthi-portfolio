"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Target, MapPin, Phone, Mail, Briefcase } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent light:via-pink-300/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-cyan-400 light:text-pink-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 light:from-pink-600 light:to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 light:from-pink-500 light:to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <Card className="bg-black/20 dark:bg-black/40 light:bg-pink-50/80 light:shadow-xl light:shadow-pink-200/20 backdrop-blur-xl border border-white/10 light:border-pink-300/30 hover:border-cyan-400/50 light:hover:border-pink-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 light:hover:shadow-pink-300/30 transition-all duration-500 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-purple-400 light:text-purple-600 mr-3 group-hover:text-cyan-400 light:group-hover:text-pink-600 transition-colors" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 light:from-purple-600 light:to-pink-600 bg-clip-text text-transparent">
                    Objective
                  </h3>
                </div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  Aspiring Software Developer and Web Developer with hands-on experience in frontend and full-stack development using HTML,CSS, JavaScript, React, Node.js, and Python. Recent graduate with practical project experience, strong problem-solving skills,and a passion for building user-friendly and scalable web applications. Eager to start my career and contribute with dedication and continuous learning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/20 dark:bg-black/40 light:bg-purple-50/80 light:shadow-xl light:shadow-purple-200/20 backdrop-blur-xl border border-white/10 light:border-purple-300/30 hover:border-purple-400/50 light:hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 light:hover:shadow-purple-300/30 transition-all duration-500 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-cyan-400 light:text-pink-600 mr-3 group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 light:from-pink-600 light:to-purple-600 bg-clip-text text-transparent">
                    Contact Info
                  </h3>
                </div>
                <div className="space-y-3 text-gray-300 dark:text-gray-300 light:text-gray-700">
                  <div className="flex items-center group/item">
                    <Phone className="h-4 w-4 mr-3 text-green-400 light:text-pink-500 group-hover/item:text-cyan-400 light:group-hover/item:text-purple-600 transition-colors" />
                    <span>+91 9620944941</span>
                  </div>
                  <div className="flex items-center group/item">
                    <Mail className="h-4 w-4 mr-3 text-blue-400 light:text-purple-500 group-hover/item:text-purple-400 light:group-hover/item:text-pink-600 transition-colors" />
                    <span>keerthin292@gmail.com</span>
                  </div>
                  <div className="flex items-center group/item">
                    <MapPin className="h-4 w-4 mr-3 text-red-400 light:text-pink-500 group-hover/item:text-pink-400 light:group-hover/item:text-purple-600 transition-colors" />
                    <span>Bangalore - 76</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/20 dark:bg-black/40 light:bg-gradient-to-r light:from-pink-50/80 light:to-purple-50/80 light:shadow-xl light:shadow-pink-200/20 backdrop-blur-xl border border-white/10 light:border-pink-300/30 hover:border-gradient-to-r hover:from-cyan-400/50 hover:to-purple-400/50 light:hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 light:hover:shadow-purple-300/30 transition-all duration-500 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-orange-400 light:text-pink-600 mr-3 group-hover:text-cyan-400 light:group-hover:text-purple-600 transition-colors" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-pink-400 light:from-pink-600 light:to-purple-600 bg-clip-text text-transparent">
                    Experience
                  </h3>
                </div>
                <div className="border-l-2 border-gradient-to-b from-cyan-400 to-purple-400 light:border-l-pink-400 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 light:from-pink-500 light:to-purple-500 rounded-full"></div>
                  <h4 className="font-semibold text-cyan-400 light:text-pink-600 mb-1">
                    Intern - Dyashin Technosoft Pvt Ltd
                  </h4>
                  <p className="text-sm text-purple-300 light:text-purple-600 mb-2">1 Month Internship</p>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                    Designed and developed a responsive user interface using React.js with reusable components like
                    product listings, details, and cart management. Implemented dynamic state management and styled the
                    UI using Bootstrap CSS for an engaging user experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
