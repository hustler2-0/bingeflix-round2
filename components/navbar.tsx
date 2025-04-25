"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Bell, Menu, X } from "lucide-react"
import { SignUpModal } from "./sign-up-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-red-600 font-bold text-2xl mr-8">
              BingeFlix
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="#" className="text-white hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link href="#" className="text-white hover:text-red-600 transition-colors">
                Movies
              </Link>
              <Link href="#" className="text-white hover:text-red-600 transition-colors">
                TV Shows
              </Link>
              <Link href="#" className="text-white hover:text-red-600 transition-colors">
                My List
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-red-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-red-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <motion.button
              className="bg-red-600 text-white px-4 py-2 rounded-md font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSignUpModal(true)}
            >
              Sign Up
            </motion.button>
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-6 mt-16">
              <Link href="#" className="text-white text-xl" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="#" className="text-white text-xl" onClick={() => setIsOpen(false)}>
                Movies
              </Link>
              <Link href="#" className="text-white text-xl" onClick={() => setIsOpen(false)}>
                TV Shows
              </Link>
              <Link href="#" className="text-white text-xl" onClick={() => setIsOpen(false)}>
                My List
              </Link>
              <motion.button
                className="bg-red-600 text-white px-6 py-2 rounded-md font-medium text-xl mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsOpen(false)
                  setShowSignUpModal(true)
                }}
              >
                Sign Up
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SignUpModal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
    </>
  )
}
