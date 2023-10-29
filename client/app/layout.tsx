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
      <body className={`${kanit.className} bg-gradient-to-r from-white to-gray-200 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-black`}>
        {children}
      </body>
    </html>
  )
}
