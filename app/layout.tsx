import type { Metadata } from 'next'
import '@styles/global.css'
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Navbar } from '@components/NavBar';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Ahmad Mardiana',
  description: '',
}   

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}