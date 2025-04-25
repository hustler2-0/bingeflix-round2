"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

// Movie data with individual image URLs
const trendingMovies = [
  { 
    id: 1, 
    title: "The Last Hope", 
    genre: "Sci-Fi", 
    rating: 4.8,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBLBaD49IbHCQdORNsdGMBxMIanZtbE8Wow&s" // Replace with your actual image URL
  },
  { 
    id: 2, 
    title: "Dark Shadows", 
    genre: "Horror", 
    rating: 4.5,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGGONwAg6Q5_yJyWlM0ER6xUMnMm0oLwiMrVpYdL2vKf716C1voHIRsXxZw7kvkVnb5KAgw" // Replace with your actual image URL
  },
  { 
    id: 3, 
    title: "City Lights", 
    genre: "Drama", 
    rating: 4.9,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTsNrZlL9k6bKxX4BeTRYMkLYVo-w7e3L5Q&s" // Replace with your actual image URL
  },
  { 
    id: 4, 
    title: "Red Notice", 
    genre: "Action", 
    rating: 4.3,
    imageUrl: "https://i.ytimg.com/vi/VGdONs-nxWg/sddefault.jpg" // Replace with your actual image URL
  },
  { 
    id: 5, 
    title: "The Witcher", 
    genre: "Fantasy", 
    rating: 4.7,
    imageUrl: "https://source.unsplash.com/random/300x450/?fantasy,movie" // Replace with your actual image URL
  },
  { 
    id: 6, 
    title: "Inception", 
    genre: "Sci-Fi", 
    rating: 4.9,
    imageUrl: "https://source.unsplash.com/random/300x450/?inception,movie" // Replace with your actual image URL
  },
  { 
    id: 7, 
    title: "Stranger Things", 
    genre: "Horror", 
    rating: 4.8,
    imageUrl: "https://i.ytimg.com/vi/VGdONs-nxWg/sddefault.jpg" // Replace with your actual image URL
  },
  { 
    id: 8, 
    title: "Breaking Bad", 
    genre: "Drama", 
    rating: 4.9,
    imageUrl: "https://source.unsplash.com/random/300x450/?breakingbad" // Replace with your actual image URL
  },
]

export function TrendingMovies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)

        // Adjust items per view based on screen size
        if (window.innerWidth < 640) {
          setItemsPerView(1)
        } else if (window.innerWidth < 768) {
          setItemsPerView(2)
        } else if (window.innerWidth < 1024) {
          setItemsPerView(3)
        } else {
          setItemsPerView(4)
        }
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, trendingMovies.length - itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Trending Now</h2>

      <div className="relative" ref={containerRef}>
        <motion.div
          className="flex gap-4 overflow-hidden"
          animate={{
            x: -currentIndex * (containerWidth / itemsPerView),
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {trendingMovies.map((movie) => (
            <motion.div
              key={movie.id}
              className="relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
              style={{ width: `calc(${100 / itemsPerView}% - ${(4 * (itemsPerView - 1)) / itemsPerView}px)` }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video relative">
                {/* Here's where we use the individual movie image URL */}
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  unoptimized // Remove this if you're using optimized images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <h3 className="font-bold text-lg">{movie.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-gray-300">{movie.genre}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm">{movie.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <motion.button
                    className="mt-2 bg-red-600 text-white py-1 px-3 rounded-md text-sm font-medium"
                    whileTap={{ scale: 0.95 }}
                  >
                    Watch Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {currentIndex > 0 && (
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/80 text-white p-2 rounded-full z-10"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        )}

        {currentIndex < trendingMovies.length - itemsPerView && (
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 text-white p-2 rounded-full z-10"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}
      </div>
    </section>
  )
}