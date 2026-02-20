"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Heart } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9620944941",
    href: "tel:+919620944941",
    gradient: "from-green-400 to-emerald-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "keerthin292@gmail.com",
    href: "mailto:keerthin292@gmail.com",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore - 76",
    href: "#",
    gradient: "from-red-400 to-pink-400",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Keerthi292",
    gradient: "from-gray-400 to-gray-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/keerthi-nagaraj",
    gradient: "from-blue-400 to-blue-600",
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="h-8 w-8 text-blue-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-black/20 dark:bg-black/40 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
                      <CardContent className="p-4">
                        <a
                          href={info.href}
                          className="flex items-center group/link"
                          {...(info.href.startsWith("http") && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
                          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                            <info.icon
                              className={`h-5 w-5 mr-4 bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`}
                            />
                          </motion.div>
                          <div>
                            <div
                              className={`font-medium bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`}
                            >
                              {info.label}
                            </div>
                            <div className="text-gray-300 group-hover/link:text-cyan-400 dark:text-gray-300 dark:group-hover/link:text-cyan-400 light:text-gray-700 light:group-hover/link:text-cyan-600 transition-colors">
                              {info.value}
                            </div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
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
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/20 dark:bg-black/40 backdrop-blur-xl border border-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Send Me a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/5 dark:bg-white/5 light:bg-white/80 border-white/20 dark:border-white/20 light:border-gray-300 text-gray-300 dark:text-gray-300 light:text-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/5 dark:bg-white/5 light:bg-white/80 border-white/20 dark:border-white/20 light:border-gray-300 text-gray-300 dark:text-gray-300 light:text-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-600 focus:border-purple-400/50 focus:ring-purple-400/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 dark:bg-white/5 light:bg-white/80 border-white/20 dark:border-white/20 light:border-gray-300 text-gray-300 dark:text-gray-300 light:text-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-600 focus:border-pink-400/50 focus:ring-pink-400/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 dark:bg-white/5 light:bg-white/80 border-white/20 dark:border-white/20 light:border-gray-300 text-gray-300 dark:text-gray-300 light:text-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-500 light:placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >

          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 flex items-center justify-center">
            Bangalore - 560076, Karnataka.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
