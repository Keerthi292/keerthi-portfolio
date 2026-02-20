"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Settings, Users, Brain, Server } from "lucide-react"

const skillsData = {
  "Programming Languages": {
    icon: Code,
    skills: ["Python", "Core Java", "JavaScript"],
    gradient: "from-blue-400 to-cyan-400",
  },
  Frontend: {
    icon: Palette,
    skills: ["HTML5", "CSS3", "Bootstrap", "ReactJS"],
    gradient: "from-green-400 to-emerald-400",
  },
  Backend: {
    icon: Server,
    skills: ["Python", "Node.js", "Flask"],
    gradient: "from-purple-400 to-violet-400",
  },
  Database: {
    icon: Database,
    skills: ["SQL", "MongoDB", "Microsoft SQL Server"],
    gradient: "from-orange-400 to-red-400",
  },
  "Tools & Platforms": {
    icon: Settings,
    skills: ["VS Code", "Git", "GitHub"],
    gradient: "from-pink-400 to-rose-400",
  },
  "Soft Skills": {
    icon: Users,
    skills: ["Team Collaboration", "Adaptable", "Eager to Learn", "Problem Solving"],
    gradient: "from-indigo-400 to-purple-400",
  },
}

const techStack = [
  { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-400" },
  { name: "JavaScript", icon: "🟨", color: "from-yellow-400 to-orange-400" },
  { name: "Python", icon: "🐍", color: "from-green-400 to-emerald-400" },
  { name: "HTML5", icon: "🌐", color: "from-orange-400 to-red-400" },
  { name: "CSS3", icon: "🎨", color: "from-blue-400 to-purple-400" },
  { name: "Bootstrap", icon: "🅱️", color: "from-purple-400 to-pink-400" },
  { name: "SQL", icon: "🗄️", color: "from-indigo-400 to-blue-400" },
  { name: "MongoDB", icon: "🍃", color: "from-green-400 to-teal-400" },
  { name: "Git", icon: "📚", color: "from-red-400 to-pink-400" },
  { name: "VS Code", icon: "💻", color: "from-blue-400 to-cyan-400" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-pink-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(skillsData).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-black/20 dark:bg-black/40 backdrop-blur-xl border border-white/10 hover:border-pink-400/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 group hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <data.icon
                          className={`h-6 w-6 mr-3 bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}
                        />
                      </motion.div>
                      <h3
                        className={`text-lg font-semibold bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}
                      >
                        {category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-black/20 dark:bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer group"
                >
                  <motion.div
                    className="text-3xl mb-2 group-hover:animate-bounce"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <span
                    className={`text-sm font-medium bg-gradient-to-r ${tech.color} bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300`}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
