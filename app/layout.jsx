import '@styles/global.css';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export const metadata = {
  title : "Ahmad Mardiana"
}

const RootLayout = ({ children }) => {
  return (
    <html>
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