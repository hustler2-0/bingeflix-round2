"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Download } from "lucide-react"
import { Github } from "@/icons/Github"

export function Footer() {
    const currentYear = new Date().getFullYear()
    const teamMembers = [
        { name: "Shubhashish Chakraborty", linkedin: "https://www.linkedin.com/in/Shubhashish-Chakraborty" },
        { name: "Nihal Yadav", linkedin: "https://www.linkedin.com/in/nihal-yadav2/" },
        { name: "Moksh Mishra", linkedin: "https://www.linkedin.com/in/moksh-mishra-956868289" },
        { name: "Akshat Singh Tomar", linkedin: "https://www.linkedin.com/in/akshat-singh-tomar-4307772a0" },
        { name: "Mayank Agrawal", linkedin: "https://www.linkedin.com/in/mayank-agrawal155" }
    ]

    const footerLinks = [
        {
            title: "BingeFlix",
            links: [
                { label: "About Us", href: "#" },
                { label: "Jobs", href: "#" },
                { label: "Press", href: "#" },
                { label: "Blog", href: "#" }
            ]
        },
        {
            title: "Support",
            links: [
                { label: "Contact Us", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Devices", href: "#" },
                { label: "Help Center", href: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { label: "Terms of Use", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Preferences", href: "#" },
                { label: "Corporate Information", href: "#" }
            ]
        }
    ]

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: "#" },
        { icon: <Twitter className="w-5 h-5" />, href: "#" },
        { icon: <Instagram className="w-5 h-5" />, href: "#" },
        { icon: <Youtube className="w-5 h-5" />, href: "#" }
    ]

    return (
        <footer className="bg-black border-t border-gray-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-gray-300 font-medium mb-4 text-lg">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-gray-300 font-medium mb-4 text-lg">Connect with Us</h3>
                        <div className="flex space-x-4 mb-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        <p className="text-gray-400 mb-3">Download our app:</p>
                        <div className="flex space-x-3">
                            <motion.a
                                href="#"
                                className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-4 h-4" />
                                App Store
                            </motion.a>
                            <motion.a
                                href="#"
                                className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-4 h-4" />
                                Google Play
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h3 className="text-xl font-semibold text-red-500 mb-4">Team Hustlers</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {teamMembers.map((member, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-red-400 transition-colors duration-300 block"
                                    >
                                        {member.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <a
                            href="https://github.com/hustler2-0/bingeflix-round2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <Github />
                            View Project on GitHub
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center text-gray-500 text-sm"
                    >
                        © {currentYear} BingeFlix. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    )
}