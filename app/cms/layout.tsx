import type { Metadata } from 'next'
import '@styles/global.css'
import { Logo, SettingsIcon, UsersIcon, VercelLogo , ArticleIcon} from '@components/icons';
import Link from 'next/link';
import { NavItem } from './NavItem';

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
      <div className='h-full bg-gray-100'>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100 lg:block ">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
              <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <Logo />
                  <span className="">ACME</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                <NavItem href="/cms">
                    <ArticleIcon className="h-4 w-4" />
                    Posts
                  </NavItem>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-50 justify-between lg:justify-end">
            </header>
            {children}
          </div>
        </div>
      </div>
      </body>
    </html>
  )
}