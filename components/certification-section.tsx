"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Building, Code, Languages, Star, Trophy } from "lucide-react"

const certifications = [
  {
    title: "Junior Software Development",
    provider: "ROOMAN Tech",
    description:
      "Junior software development certification covering fundamental programming concepts and best practices",
    icon: Code,
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    title: "Internship (React JS)",
    provider: "Dyashin Technosoft Pvt Ltd",
    description:
      "Internship focused on React JS development with hands-on experience in building responsive web applications",
    icon: Building,
    gradient: "from-green-400 to-emerald-400",
  },
  {
    title: "Real-Time Emotion Detection for Job Interviews Using AI Models",
    provider: "IRJMETS – Vol 07, Issue 11, Nov 2025",
    link: "https://www.doi.org/10.56726/IRJMETS84433",
    description:
      "Multimodal AI framework integrating CNN, LSTM, and RoBERTa with attention-based fusion. Achieved 87.5% accuracy in simulated interview scenarios.",

    icon: Star,
    gradient: "from-purple-400 to-pink-400",
  },
]

const languages = [
  { name: "English", gradient: "from-blue-400 to-purple-400" },
  { name: "Kannada", gradient: "from-green-400 to-teal-400" },
  { name: "Telugu", gradient: "from-orange-400 to-red-400" },
]

export default function CertificationSection() {
  return (
    <section id="certification" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-green-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications & Languages
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Certifications */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              Certifications and Publication
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-black/20 dark:bg-black/40 backdrop-blur-xl border border-white/10 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="mr-4 mt-1"
                        >
                          <cert.icon
                            className={`h-8 w-8 bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}
                          />
                        </motion.div>
                        <div className="flex-1">
                          <h4
                            className={`text-xl font-bold mb-2 bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}
                          >
                            {cert.title}
                          </h4>
                          <Badge
                            variant="secondary"
                            className="mb-3 bg-white/10 text-gray-300 dark:text-gray-300 light:text-gray-700 border border-white/20 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/50 transition-all duration-300"
                          >
                            <Trophy className="h-3 w-3 mr-1" />
                            {cert.provider}
                          </Badge>
                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-cyan-400 hover:underline"
                            >
                              View Publication →
                            </a>
                          )}
                          <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">{cert.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Languages
            </motion.h3>

            <Card className="max-w-2xl mx-auto bg-black/20 dark:bg-black/40 backdrop-blur-xl border border-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Languages className="h-6 w-6 text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Language Proficiency
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-center p-4 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                    >
                      <div
                        className={`text-lg font-semibold mb-1 bg-gradient-to-r ${lang.gradient} bg-clip-text text-transparent`}
                      >
                        {lang.name}
                      </div>

                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
