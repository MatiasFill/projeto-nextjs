import './globals.css'
import { Header } from '@/components/header'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Aprendendo NextJS',
  description: 'Buscando conhecimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt'>
      <body> 
        <Header/>
        {children}

      </body>
    </html>
  )
}
