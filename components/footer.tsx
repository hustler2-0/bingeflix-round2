"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-400 font-medium mb-4">BingeFlix</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Devices
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                  Corporate Information
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-6">
              <motion.a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-gray-500 text-sm">Download our app:</p>
            <div className="flex space-x-2 mt-2">
              <Link href="#" className="bg-gray-800 text-white text-xs px-3 py-2 rounded">
                App Store
              </Link>
              <Link href="#" className="bg-gray-800 text-white text-xs px-3 py-2 rounded">
                Google Play
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BingeFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
