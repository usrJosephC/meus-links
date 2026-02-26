import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://usrjosephc.vercel.app/'),

  title: 'Joseph Cavalcante | Desenvolvedor Frontend',
  description:
    'Portfólio de Joseph Cavalcante, desenvolvedor focado em criar experiências digitais marcantes.',

  openGraph: {
    title: 'Joseph Cavalcante | Desenvolvedor Frontend',
    description:
      'Veja meus projetos, habilidades e experiências com React e Next.js.',
    url: 'https://usrjosephc.vercel.app/',
    siteName: 'Joseph Cavalcante',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/preview.jpeg',
        width: 1200,
        height: 630,
      },
    ],
  },
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