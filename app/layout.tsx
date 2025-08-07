import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

// Load Figtree with desired weights and variable font
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans', // for CSS custom property
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'MasKokoIT',
  description: 'One Stop IT Solution',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
