import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BingeFlix – Watch. Binge. Repeat.',
  description: 'Created by Team Hustlers, For SkillsVarz hackathon 2025',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
