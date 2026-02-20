"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award, Star } from "lucide-react"

const educationData = [
  {
    degree: "Master of Computer Applications",
    institution: "RV Institute of Technology and Management",
    location: "Bengaluru, India",
    duration: "2023 - 2025",
    cgpa: "8.33",
    icon: GraduationCap,
    gradient: "from-cyan-400 to-blue-400",
  },
  {
    degree: "Bachelors of Computer Applications",
    institution: "Community Institute of Commerce and Management Studies",
    location: "",
    duration: "2020 - 2023",
    cgpa: "9.2",
    icon: Star,
    gradient: "from-purple-400 to-pink-400",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-purple-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 hidden md:block opacity-50"></div>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative ${index % 2 === 0 ? "md:pr-8" : "md:pl-16"}`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black/40 hidden md:block shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />

                  <Card className="bg-black/20 dark:bg-black/40 backdrop-blur-xl border border-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3
                            className={`text-xl font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-2`}
                          >
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-gray-200 dark:text-gray-200 light:text-gray-800 mb-1">
                            {edu.institution}
                          </p>
                          {edu.location && (
                            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-2">{edu.location}</p>
                          )}
                        </div>
                        <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                          <edu.icon
                            className={`h-8 w-8 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent flex-shrink-0`}
                          />
                        </motion.div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
                          <span>{edu.duration}</span>
                        </div>
                        <div
                          className={`flex items-center font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}
                        >
                          <Award className="h-4 w-4 mr-2" />
                          <span>CGPA: {edu.cgpa}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
