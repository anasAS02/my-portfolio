import './globals.css'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'

const kanit = Kanit({
  weight: ['200', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anas Portfolio',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} bg-white dark:bg-black`}>
        {children}
      </body>
    </html>
  )
}
