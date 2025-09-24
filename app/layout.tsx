import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Metrics2Impact - Global M&E Excellence',
  description: 'Where Insight Powers Missions. Metrics2Impact specializes in monitoring, evaluation, and gender equality for development organizations worldwide.',
  keywords: 'monitoring evaluation, M&E, gender equality, development consulting, impact assessment',
  authors: [{ name: 'Metrics2Impact' }],
  openGraph: {
    title: 'Metrics2Impact - Global M&E Excellence',
    description: 'Where Insight Powers Missions. Metrics2Impact specializes in monitoring, evaluation, and gender equality for development organizations worldwide.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
