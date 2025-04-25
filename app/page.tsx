"use client"

import { HeroSection } from "@/components/hero-section"
import { TrendingMovies } from "@/components/trending-movies"
import { GenreFilter } from "@/components/genre-filter"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Movie data with images
const popularMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    genre: "Action",
    rating: 4.9,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA" // Replace with your image path
  },
  {
    id: 2,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 4.8,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw"
  },
  {
    id: 3,
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 4.7,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqzGSUVlP74iyuFujryxWBYV6yqGirkn7BFHIJXEMzS4gNI-Z2wEKZsW6dLYA9B77BgyPdg"
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 4.9,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSf1DK32xKMQzqSl8wnY1BLVu_gdwsRYzVSNM6A03r6c-fEwrif8raKzkFRuerw1KHdDICvOw"
  },
  {
    id: 5,
    title: "The Godfather",
    genre: "Crime",
    rating: 4.9,
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
  },
  {
    id: 6,
    title: "Fight Club",
    genre: "Drama",
    rating: 4.7,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_SpVkWXBnRsBBNbDaV8dur-3jlOi6fepmxBrYGkzDwHj-xtDGP4jySn7xvonE9lqNpBdRWg"
  },
  {
    id: 7,
    title: "Forrest Gump",
    genre: "Drama",
    rating: 4.8,
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTNI2SBzYW95C8Wo7zYV3bzVzem58xPnUzsZGLsnLg17mSMgR574acQZpgNK7a5XeF3THjqgQ"
  },
  {
    id: 8,
    title: "The Matrix",
    genre: "Sci-Fi",
    rating: 4.7,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWXVvfvZR3oe7PCMM0exwV0dObOTKvLfSM-bjvKpQ1VegKXuCtq6aBrxqbIgUNxMbfavy"
  },
  {
    id: 9,
    title: "Goodfellas",
    genre: "Crime",
    rating: 4.8,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYiQLHhizpAwRO30igRfufqLUJrELVXn8YrRwDtWLOxQQaAvM5IDvYrPGijDD5fa8LA0r"
  },
  {
    id: 10,
    title: "The Silence of the Lambs",
    genre: "Thriller",
    rating: 4.8,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeGH9FYpjNiPioEvrpj0HMUw62-14MTzsI--_XuUoUDj1Bk54iL_vRO075w44IlXGDKbhe"
  }
]

const newReleases = [
  {
    id: 11,
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    rating: 4.8,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1HYYqIoovqLVr7DQU9tevo_bMrzQqJ7LQiVnjyK1x5BUHqrjFB_JDtftcR1Sxo1cPE0fPmg"
  },
  {
    id: 12,
    title: "Oppenheimer",
    genre: "Biography",
    rating: 4.9,
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8FFJNBaIXvhEwqXXw40rYYDci8jPlYxWfy9082flliYoZ-SqqZjy0az-G5rIWuSJp2pn7xQ"
  },
  {
    id: 13,
    title: "The Batman",
    genre: "Action",
    rating: 4.7,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMCpS3OjmxGAhuR99vetHATrUSMK2Cih6TB10Dnk9op5yB-y4DEVQsw9h3814Z8MirrCe"
  },
  {
    id: 14,
    title: "Everything Everywhere All at Once",
    genre: "Sci-Fi",
    rating: 4.9,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRW6n0N5NVFJhglILQYRF9hswb8iQ4lOw3cF2Qy7pH9aRPLZEnGW9cUbWYhyqTko_VJL7D8zQ"
  },
  {
    id: 15,
    title: "Top Gun: Maverick",
    genre: "Action",
    rating: 4.8,
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEWEKrGjS-mQ_YGDUvlPjZQoLhZ084Cf-o2nBU7BkvZVUjJf8poO5BL0510QhJhhUxF9qK"
  },
  {
    id: 16,
    title: "Nope",
    genre: "Horror",
    rating: 4.3,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkqCqNGjBCwIvLdroIRYPS2uwyoFzliBOc5PG5O08l0BH7f_GV8mEIdGq99QvzmMEQcCay6Q"
  },
  {
    id: 17,
    title: "The Northman",
    genre: "Action",
    rating: 4.5,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydfI7RdNsOn1qalX5NlHgnFHHdccksKDdVD8pjdfknpHCs5PZIHScjCPc-NUDSiRUVd1v"
  },
  {
    id: 18,
    title: "Elvis",
    genre: "Biography",
    rating: 4.4,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVHNGqQK_ToZt2aLKF3fX6_bBGkrGgLxF0KprdgWNEuSBbjsevaPgu15o0S961LAlhXri"
  },
  {
    id: 19,
    title: "The Menu",
    genre: "Thriller",
    rating: 4.6,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhEI1h-jP6klpyX1qRUj59kQxO4XiKT_EmZS5kYI4eHWBxVpKuGGlHfVQWTF2Ol3aukT0"
  },
  {
    id: 20,
    title: "Avatar: The Way of Water",
    genre: "Sci-Fi",
    rating: 4.7,
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxTA7S2fDMhUDVcZnuxuie2xE_ayntCdkCKme3EK3ObKXFuhdaLhYYTpzUHZ45-IQzQt6T"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <GenreFilter />
      <TrendingMovies />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Popular on BingeFlix</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {popularMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
              imageUrl={movie.imageUrl}
            />
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">New Releases</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {newReleases.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
              imageUrl={movie.imageUrl}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

import { motion } from "framer-motion"
import { Star, Play, Plus, Info } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface MovieCardProps {
  id: number
  title: string
  genre: string
  rating: number
  imageUrl: string
}

function MovieCard({ id, title, genre, rating, imageUrl }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg aspect-[2/3] cursor-pointer shadow-lg"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-4 right-4 flex gap-2"
          animate={{ 
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <button className="p-2 bg-black/50 rounded-full hover:bg-white/20 transition">
            <Plus className="w-4 h-4" />
          </button>
          <button className="p-2 bg-black/50 rounded-full hover:bg-white/20 transition">
            <Info className="w-4 h-4" />
          </button>
        </motion.div>
        
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-gray-300">{genre}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <motion.div
          className="mt-3 flex gap-2"
          animate={{ 
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="flex-1 bg-red-600 text-white py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-1"
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4 fill-white" />
            Play
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}