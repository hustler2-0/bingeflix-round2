"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const genres = ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Fantasy", "Romance", "Thriller", "Animation"]

export function GenreFilter() {
  const [activeGenre, setActiveGenre] = useState("All")

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Browse by Genre</h2>
      </div>
      <div className="overflow-x-auto pb-2 -mx-4 px-4">
        <div className="flex space-x-2">
          {genres.map((genre) => (
            <GenreButton
              key={genre}
              genre={genre}
              isActive={activeGenre === genre}
              onClick={() => setActiveGenre(genre)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface GenreButtonProps {
  genre: string
  isActive: boolean
  onClick: () => void
}

function GenreButton({ genre, isActive, onClick }: GenreButtonProps) {
  return (
    <motion.button
      className={`relative px-4 py-2 rounded-full whitespace-nowrap ${
        isActive ? "text-white" : "text-gray-400 hover:text-white"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-red-600 rounded-full -z-10"
          layoutId="activeGenre"
          transition={{ type: "spring", duration: 0.6 }}
        />
      )}
      {genre}
    </motion.button>
  )
}
