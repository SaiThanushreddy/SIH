'use client'; 
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import store from  '../store/store';
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'E-commerce App',
//   description: 'A simple e-commerce application',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider store={store}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        </Provider>
      </body>
    </html>
  )
}

