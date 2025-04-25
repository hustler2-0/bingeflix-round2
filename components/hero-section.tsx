"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Info } from "lucide-react"

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 bg-black">
        {isVideoLoaded ? (
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
            <source
              src="/bg-minecraft.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-gray-900 to-black animate-pulse" />
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span>Your {" "}</span>
            <span className="text-red-600">Binge</span> begins here. 
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Hit movies, addictive series, and exclusive originals, starting at just $9.99/month.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              className="bg-red-600 text-white px-6 py-3 rounded-md font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 mr-2" /> Watch Now
            </motion.button>
            <motion.button
              className="bg-gray-800 text-white px-6 py-3 rounded-md font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Info className="w-5 h-5 mr-2" /> More Info
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
