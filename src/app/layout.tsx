import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FHEVM Token Guide',
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
