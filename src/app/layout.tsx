import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FHE Playground - Zama Interactive Demo',
  description: 'Experience Fully Homomorphic Encryption in your browser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
