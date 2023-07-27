import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'



export const metadata: Metadata = {
  title: 'Jagun Autos',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="relative">
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
