import '@styles/global.css';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


export const metadata = {
  title : "Ahmad Mardiana"
}

const RootLayout = ({ children }) => {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

export default RootLayout