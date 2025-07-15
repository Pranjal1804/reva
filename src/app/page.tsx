"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChevronRight,
  Calendar,
  MapPin,
  Trophy,
  Users,
  Zap,
  Leaf,
  Target,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function RevaWebsite() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const upcomingRaces = [
    {
      title: "World Solar Challenge",
      date: "October 2024",
      location: "Australia",
      description: "3000km journey across the Australian Outback",
    },
    {
      title: "American Solar Challenge",
      date: "July 2024",
      location: "United States",
      description: "Multi-day race across American highways",
    },
    {
      title: "European Solar Challenge",
      date: "September 2024",
      location: "Belgium",
      description: "24-hour endurance race in Europe",
    },
  ]

  const achievements = [
    {
      year: "2023",
      title: "World Solar Challenge",
      description: "3rd Place in Challenger Class",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2022",
      title: "American Solar Challenge",
      description: "1st Place Overall Victory",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2021",
      title: "Innovation Award",
      description: "Best Technical Innovation",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2020",
      title: "Team Formation",
      description: "Reva Solar Racing Club Founded",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="text-2xl font-bold text-blue-600" whileHover={{ scale: 1.05 }}>
              REVA
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Races", "About", "Team", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Solar car racing" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50" />
        </motion.div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Driving the Future with <span className="text-blue-400">Solar Power</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pioneering sustainable transportation through innovation, engineering excellence, and the relentless pursuit
            of solar-powered racing supremacy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group"
            >
              Explore More
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Upcoming Races Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" variants={fadeInUp}>
              Upcoming Races
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
              Join us as we compete in the world's most prestigious solar racing events
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingRaces.map((race, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center text-blue-600 mb-2">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="font-semibold">{race.date}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{race.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{race.location}</span>
                    </div>
                    <CardDescription className="text-gray-700">{race.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Solar Car Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" variants={fadeInUp}>
              Why Are We Building a Solar Car?
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUp}>
              Our mission extends beyond racing - we're pioneering the future of sustainable transportation
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Leaf,
                title: "Environmental Impact",
                description: "Reducing carbon emissions and promoting clean energy solutions for a sustainable future.",
              },
              {
                icon: Zap,
                title: "Innovation & Technology",
                description: "Pushing the boundaries of solar technology, aerodynamics, and energy efficiency.",
              },
              {
                icon: Target,
                title: "Educational Mission",
                description:
                  "Inspiring the next generation of engineers and environmental advocates through hands-on experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Legacy Section */}
      <AnimatedSection className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-4" variants={fadeInUp}>
              Team Legacy
            </motion.h2>
            <motion.p className="text-xl text-gray-300 max-w-2xl mx-auto" variants={fadeInUp}>
              A timeline of achievements, milestones, and victories that define our journey
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600 hidden md:block"></div>

            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Trophy className="h-6 w-6 text-blue-400 mr-3" />
                        <span className="text-blue-400 font-bold text-lg">{achievement.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-300">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden md:flex w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 relative z-10"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} mt-4 md:mt-0`}>
                  <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Join Us Section */}
      <AnimatedSection className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of something extraordinary. Join Reva and help us drive the future of sustainable transportation.
            </p>

            <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Users className="h-12 w-12 text-white mr-4" />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">Ready to Race?</h3>
                    <p className="text-blue-100">Apply now and become part of our legacy</p>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
                    asChild
                  >
                    <Link href="https://forms.google.com" target="_blank">
                      Apply Now
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" variants={fadeInUp}>
              Contact Us
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-2xl mx-auto" variants={fadeInUp}>
              Have questions or want to learn more? We'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <Input
                        placeholder="Your full name"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input
                      placeholder="What's this about?"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us more..."
                      rows={5}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <motion.h3 className="text-3xl font-bold text-blue-400 mb-4" whileHover={{ scale: 1.05 }}>
                REVA
              </motion.h3>
              <p className="text-gray-300 mb-6">
                Driving the future with solar power through innovation, sustainability, and racing excellence.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "Our Team", "Races", "Achievements", "News"].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2">
                {["Join Our Team", "Sponsorship", "Volunteer", "Partnerships", "Support Us"].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>info@revasolar.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>University Campus, Engineering Dept.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Reva Solar Racing Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
