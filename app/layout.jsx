import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joseph Cavalcante | Desenvolvedor Frontend',
  description: 'Portfólio de Joseph Cavalcante, desenvolvedor focado em criar experiências digitais marcantes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}