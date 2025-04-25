"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Handle sign up logic here
      console.log("Sign up with:", email, password)
      onClose()
      setStep(1)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="fixed inset-0 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative bg-gray-900 rounded-lg w-full max-w-md overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <button className="absolute right-4 top-4 text-gray-400 hover:text-white" onClick={onClose}>
              <X className="w-6 h-6" />
            </button>

            <div className="p-6">
              <motion.div
                key={`header-${step}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-1">
                  {step === 1 ? "Create your account" : "Set up your password"}
                </h2>
                <p className="text-gray-400 mb-6">
                  {step === 1
                    ? "Join BingeFlix to watch the latest movies and TV shows."
                    : "Create a password to secure your account."}
                </p>
              </motion.div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>

                        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                          Continue
                        </Button>

                        <p className="text-xs text-gray-400 text-center mt-4">
                          Already have an account?{" "}
                          <a href="#" className="text-red-600 hover:underline">
                            Sign in
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="email-confirm" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email-confirm"
                            type="email"
                            value={email}
                            disabled
                            className="bg-gray-800 border-gray-700 opacity-70"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="password" className="text-sm font-medium">
                            Password
                          </label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>

                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setStep(1)}
                            className="flex-1 border-gray-700 text-white hover:bg-gray-800"
                          >
                            Back
                          </Button>
                          <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700">
                            Sign Up
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            <motion.div
              className="bg-gradient-to-r from-red-600 to-red-800 h-1"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: step / 2 }}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
