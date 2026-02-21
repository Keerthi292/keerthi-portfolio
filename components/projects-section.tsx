"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FolderOpen,
  Calendar,
  ExternalLink,
  Github,
  Ship,
  ShoppingCart,
  GraduationCap,
  Brain,
  Sparkles,
  Bot,
} from "lucide-react"
import Image from "next/image"
// import { Certificate } from "crypto"

const projects = [

  {
    title: "Little Champs Preschool Website",
    period: "April 2025",
    description: "Designed and developed a responsive, dynamic-page preschool website using React JS",
    image: "/assets/liitle.jpg",
    technologies: ["React JS", "HTML", "CSS", "Bootstrap"],
    features: [
      "Included sections for admissions, curriculum, and contact details",
      "Designed for parent engagement with responsive layout",
      "Used Bootstrap for modern styling and layout",
    ],
    icon: GraduationCap,
    gradient: "from-purple-400 to-pink-400",
    demoUrl: "https://littlechampsgurukulam.netlify.app",
    githubUrl: "https://github.com/Keerthi292/Little-Champs",
  },
  {
    title: "AI-Powered Code Review Tool",
    period: "Aug 2025",
    description:
      "Developed an AI-powered tool to enhance code quality and developer productivity using a dual-analysis approach that combines traditional linting with AI-based evaluation.",
    image: "assets/ai-codetool.JPG",
    technologies: [
      "Python",
      "Streamlit",
      "OpenAI API",
      "JavaScript",
      "TypeScript",
      "Java",
      "C/C++",
      "HTML/CSS"
    ],
    features: [
      "Integrated traditional linting techniques to detect syntax and formatting issues",
      "Implemented AI-based evaluation to analyze code readability, efficiency, and security",
      "Provided context-aware suggestions for improving overall code quality",
      "Supported multiple programming languages including Python, JavaScript, Java, C/C++, TypeScript, and HTML/CSS",
      "Built an interactive UI using Streamlit for real-time code analysis",
      "Used OpenAI API for intelligent code review and feedback generation"
    ],
    icon: Bot,
    gradient: "from-blue-400 to-purple-500",
    featured: true,
    demoUrl: "https://ai-code-review-tool.streamlit.app/",
    githubUrl: "https://github.com/Keerthi292/Ai-Powered-Code-Review-Tool"
  },
  {
    title: "E-Commerce Website",
    period: "April 2025",
    description: "Developed a full-stack e-commerce web app with product listing, cart, and admin management features",
    image: "/assets/ecommerce.jpg",
    technologies: ["React JS", "Node.js", "MongoDB"],
    features: [
      "Implemented React JS for frontend with responsive design",
      "Built Node.js backend for API management",
      "Used MongoDB for product data storage",
      "Enabled user-friendly product browsing and admin-side product control",
    ],
    icon: ShoppingCart,
    gradient: "from-green-400 to-emerald-400",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Real-time Emotion Detection for job interviews Using AI Models",
    period: "June 2025",
    description:
      "Designed an AI system to detect human emotions using text, audio, and visual inputs (multimodal analysis)",
    image: "/assets/Emotiondetection.jpg",
    technologies: ["Python", "Flask", "React JS", "BERT", "Wav2Vec 2.0", "DeepFace", "MongoDB"],
    features: [
      "Integrated BERT for text sentiment analysis",
      "Used Wav2Vec 2.0 for speech emotion recognition",
      "Implemented DeepFace for facial expression analysis",
      "Combined predictions to improve accuracy in real-time emotion recognition",
      "Used libraries like Transformers, Librosa, and OpenCV",
      "MongoDB for storing analysis data",
    ],
    certificateUrl: "/assets/IRJMETS7-realtime emotion.pdf",
    icon: Brain,
    gradient: "from-pink-400 to-orange-400",
    featured: true,
    demoUrl: "",
    githubUrl: "https://github.com/Keerthi292/Real-time-Emotion-Detection",
  },
  {
    title: "Marine Transport System",
    period: "2022-2023",
    description:
      "Developed a desktop-based system to manage marine transport operations such as scheduling, booking, and route tracking",
    image: "/assets/marine.jpg",
    technologies: ["VB.NET", "Microsoft SQL Server"],
    features: [
      "Built user interface using VB.NET for smooth and interactive experience",
      "Used Microsoft SQL Server for storing transport records, schedules, and user data securely",
    ],
    icon: Ship,
    gradient: "from-blue-400 to-cyan-400",
    demoUrl: "",
    githubUrl: "",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent dark:via-orange-900/5 light:via-pink-300/15" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FolderOpen className="h-8 w-8 text-orange-400 dark:text-orange-400 light:text-pink-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 dark:from-orange-400 dark:to-pink-400 light:from-pink-600 light:to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 dark:from-orange-400 dark:to-pink-400 light:from-pink-500 light:to-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-700 max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern applications built with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full bg-black/20 dark:bg-black/30 light:bg-pink-50/80 light:shadow-xl light:shadow-pink-200/20 backdrop-blur-xl border border-white/10 dark:border-white/20 light:border-pink-300/30 hover:border-orange-400/50 dark:hover:border-orange-400/50 light:hover:border-pink-400/50 hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/10 light:hover:shadow-pink-300/30 transition-all duration-500 group hover:scale-105 overflow-hidden flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-500 dark:to-pink-500 light:from-pink-500 light:to-purple-500 border-0 text-white">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* Hover Overlay with Live Demo */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          asChild
                          size="sm"
                          disabled={!project.demoUrl}
                          className={`bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 dark:from-orange-500 dark:to-pink-500 light:from-pink-500 light:to-purple-500 border-0 shadow-lg ${!project.demoUrl ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                          <a
                            href={project.demoUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (!project.demoUrl) e.preventDefault(); // disable navigation
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Quick Preview
                          </a>
                        </Button>

                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <div className="flex items-center">
                        <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                          <project.icon
                            className={`h-6 w-6 mr-3 bg-gradient-to-r ${project.gradient} light:from-pink-600 light:to-purple-600 bg-clip-text text-transparent`}
                          />
                        </motion.div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2">
                          <CardTitle
                            className={`text-xl bg-gradient-to-r ${project.gradient} light:from-pink-600 light:to-purple-600 group-hover:from-orange-400 group-hover:to-pink-400 light:group-hover:from-pink-700 light:group-hover:to-purple-700 bg-clip-text text-transparent transition-all duration-300`}
                          >
                            {project.title}
                          </CardTitle>
                          {project.featured && (
                            <Badge className="ml-2 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-500 dark:to-pink-500 light:from-pink-500 light:to-purple-500 border-0 flex-shrink-0">
                              <Sparkles className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-gray-700 text-sm">
                        <Calendar className="h-4 w-4 mr-1 text-cyan-400 dark:text-cyan-400 light:text-pink-600" />
                        {project.period}
                      </div>
                    </div>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">{project.description}</p>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col">
                    <div className="flex-grow">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-purple-300 dark:text-purple-300 light:text-purple-700">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 flex items-start"
                            >
                              <span
                                className={`w-2 h-2 bg-gradient-to-r ${project.gradient} light:from-pink-500 light:to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0`}
                              ></span>
                              {feature}
                            </li>
                          ))}
                        </ul>

                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-cyan-300 dark:text-cyan-300 light:text-pink-700">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs bg-white/5 dark:bg-white/5 light:bg-pink-100/50 border-white/20 dark:border-white/20 light:border-pink-300/40 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-pink-500/20 dark:hover:from-orange-500/20 dark:hover:to-pink-500/20 light:hover:from-pink-200/40 light:hover:to-purple-200/40 hover:border-orange-400/50 dark:hover:border-orange-400/50 light:hover:border-pink-400/60 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 border-white/20 dark:border-white/20 light:border-pink-300/40 bg-transparent hover:bg-gradient-to-r hover:from-gray-500/20 hover:to-purple-500/20 dark:hover:from-gray-500/20 dark:hover:to-purple-500/20 light:hover:from-pink-200/30 light:hover:to-purple-200/30 hover:border-purple-400/50 dark:hover:border-purple-400/50 light:hover:border-purple-400/60 text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-800 light:hover:text-gray-900 transition-all duration-300"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        disabled={!project.demoUrl}
                        className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 dark:${project.gradient} light:from-pink-500 light:to-purple-500 border-0 transition-all duration-300 ${!project.demoUrl ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                      >
                        <a
                          href={project.demoUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (!project.demoUrl) e.preventDefault(); // prevent opening empty link
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      {project.certificateUrl && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1 border-yellow-400/40 bg-transparent hover:bg-yellow-400/10 hover:border-yellow-400/70 transition-all duration-300"
                        >
                          <a
                            href={project.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            📜 View Certificate
                          </a>
                        </Button>
                      )}

                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
