import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZAMA FHE Playground',
  description: 'Experience Fully Homomorphic Encryption - Interactive demo by Zama',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>
      <body>{children}</body>
    </html>
  )
}
