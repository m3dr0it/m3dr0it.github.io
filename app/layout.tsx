import type { Metadata } from 'next'
import '@styles/global.css'
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
      {children}
    </html>
  )
}