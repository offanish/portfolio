import {  Comic_Neue } from 'next/font/google'
import './globals.css'

const comic = Comic_Neue({ subsets: ['latin'] , weight: ['300', '400', '700'] })

export const metadata = {
  title: 'Anish Gautam',
  description: 'Welcome to my website!!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comic.className}>{children}</body>
    </html>
  )
}
