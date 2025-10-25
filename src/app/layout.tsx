import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FHEVM Confidential Token Guide',
  description: 'Learn to build confidential smart contracts with Zama',
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
