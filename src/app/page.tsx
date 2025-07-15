"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Goal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
  );
}

export default function RevaWebsite() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const upcomingRaces = [
    {
      title: "Electric Solar Vehicle Challenge (ESVC)",
      date: "March 2026",
      location: "Noida, Delhi",
      description: "300km solar car rally from Noida to Mahthura",
      image: "esvc.png",
    },
    // {
    //   title: "Solar Electric Vehicle Championship (SEVC)",
    //   date: "January 2026",
    //   location: "Kari Motor Speedway, Coimbatore",
    //   description: "National championship for solar electric vehicles",
    //   image: "/placeholder.svg?height=200&width=300",
    // },
    {
      title: "South African Solar Challenge (SASOL)",
      date: "September 2026",
      location: "South Africa",
      description:
        "Solar Powered endurance rally from Johannesburg to Cape Town, South Africa",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "World Solar Challenge",
      date: "August 2027",
      location: "Australia",
      description:
        "3000 km Solar Powered endurance rally from Darwin to Adelaide, Australia",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const achievements = [
    {
      year: "Oct 2024",
      title: "Mini Glider: MAKE-A-THON",
      description:
        "A comprehensive workshop on the entire CAD process, from prototyping to 3D printing",
    },
    {
      year: "Feb 2025",
      title: "School Students' Awareness Program on Solar EVs",
      description:
        "Primary school students were given a first hand experience in the technology that makes a solar EV",
    },
    {
      year: "Mar 2025",
      title: "DeepDrive Auto Challenge",
      description:
        "VIT-Chennai's First Hackathon On Autonomous Vehicle Technology",
    },
    {
      year: "Mar 2025",
      title: "ESVC'25",
      description: "Secured 7th position in our first solar rally in Noida",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 ${
          isScrolled
            ? "bg-gradient-to-r from-black/70 to-blue-900/50"
            : "bg-transparent"
        } transition-colors duration-500 ease-in-out`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 ">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold text-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-[300px] h-auto flex items-center space-x-2">
                <img src="logo.png" width={50} alt="REVA LOGO" />
                <span className="text-blue-400 w-[200px]">
                  Reva Solar Racing
                </span>
              </span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Races", "Mission", "Milestones", "Contacts"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="font-medium transition-colors hover:text-blue-400 text-white"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                )
              )}

              <motion.a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-blue-400 text-white"
                whileHover={{ y: -2 }}
              >
                Brochure
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            src="hero1.png"
            alt="Solar Racing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50" />
        </motion.div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building The Vehicles Of {""}
            <span className="text-blue-400">Tomorrow</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            VIT Chennai's First Solar Racing Team
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#join-us"
              className="rounded-2xl transition-all duration-150 ease-in-out bg-blue-600 hover:bg-black w-[500px] hover:text-blue-600 text-white px-8 py-4 text-sm font-semibold group"
            >
              Join Us Now &gt;
            </a>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Races Section */}
      <section id="races" className="h-[100px]"></section>
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              variants={fadeInUp}
            >
              Upcoming Races
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Join us as we compete in the world's most prestigious solar racing
              events
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
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {race.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{race.location}</span>
                    </div>
                    <CardDescription className="text-gray-700">
                      {race.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Solar Car Section */}
      <section id="mission" className="h-[100px]"></section>

      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-300 to-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              variants={fadeInUp}
            >
              Why Are We Building a Solar Car?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Our mission extends beyond racing - we're pioneering the future of
              sustainable transportation
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Zap,
                title: "Researching on Upcoming Mobility Solutions",
                description:
                  "Preparing for upcoming industry trends in sustainable transportation.",
              },
              {
                icon: Goal,
                title: "Participating in Global Solar Rallies",
                description:
                  "Participating in various solar rallies around the world and having the time of our lives.",
              },
              {
                icon: Leaf,
                title: "A Cleaner Future",
                description:
                  "Building cleaner mobility solutions that solves the problems of current technologies which cause pollution.",
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Legacy Section */}
      <section id="milestones" className="h-[100px]"></section>

      <AnimatedSection className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              Journey Till Date
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              A timeline of milestones since our inception.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600 hidden md:block"></div>

            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Trophy className="h-6 w-6 text-blue-400 mr-3" />
                        <span className="text-blue-400 font-bold text-lg">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-300">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden md:flex w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 relative z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              Gallery
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              A glimpse of our journey, team spirit, and solar innovation
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "gallery1.png", caption: "DeepDrive Auto Challenge" },
              { name: "gallery2.png", caption: "Student Awareness Program" },
              { name: "gallery3.png", caption: "Student Awareness Program" },
              { name: "gallery4.png", caption: "3D Printing Workshop" },
              { name: "gallery5.png", caption: "Vehicle" },
              {
                name: "gallery6.png",
                caption: "ESVC Business Plan Presentation",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.name}
                  alt={`Gallery ${index + 1}`}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Models Section */}
      <AnimatedSection className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white z-30"
              variants={fadeInUp}
            >
              Models
            </motion.h2>
            <motion.div className="h-screen bg-gray-900">
              <div className="flex flex-col md:flex-col lg:flex-row items-center justify-evenly h-full space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="relative group w-full sm:w-[80%] md:w-[60%] lg:w-[40%] aspect-[4/3] overflow-hidden rounded-2xl border-2 border-gray-200">
                  <img
                    src="model1.png"
                    className="object-cover w-full h-full"
                    alt="model1"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4 text-lg font-semibold">
                      Polaris – Our First Model
                    </p>
                  </div>
                </div>

                <div className="relative group w-full sm:w-[80%] md:w-[60%] lg:w-[40%] aspect-[4/3] overflow-hidden rounded-2xl border-2 border-gray-200">
                  <img
                    src="model2.png"
                    className="object-cover w-full h-full"
                    alt="model2"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4 text-lg font-semibold">
                      Our Next Project for SASOL – Stay Tuned!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Join Us Section */}
      <section id="join-us" className=" h-[100px]"></section>
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-300 to-white/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Join Reva and help us drive the future of sustainable
              transportation.
            </p>

            <Card className="max-w-2xl mx-auto border-2 border-white/50 border-solid bg-white/10 backdrop-blur-md">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Users className="h-12 w-12 text-white mr-4" />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-black">
                      Ready to Race?
                    </h3>
                    <p className="text-black">
                      Apply now and become part of our legacy
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
                    asChild
                  >
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfgMfB1U6Gz3kDg28eItOZC3wlQTXnf_29yyhM8vAwoRYqmNw/viewform?usp=dialog"
                      target="_blank"
                    >
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

      {/* Footer */}
      <section id="contacts" className="h-[100px] text-center text-5xl mt-10">
        Contact Us
      </section>
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div>
              <motion.h3
                className="text-3xl font-bold text-blue-400 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="sr-only">REVA</span>
              </motion.h3>
              <p className="text-gray-300 mb-6 w-[50%] md:flex-col">
                Driving the future with solar power through innovation,
                sustainability, and racing excellence.
              </p>
              <div className="flex space-x-4">
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/revasolarracing.vitc?igsh=MTBnMDZnbGptdnl1"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <Instagram className="h-6 w-6" />
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/company/re-va/"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>reva.vitc@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>8767987614 Siddhant (Captain)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>Vellore Institute Of Technology, Chennai Campus</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Made with ❤️ by inhabitants of
              C-Block 1022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
