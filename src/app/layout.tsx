import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'
import AppProviders from './providers'
import '@/styles/globals.css'

const cabin = Cabin({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-brand',
})

export const metadata: Metadata = {
  title: 'Rifaaq',
  description:
    'Your partner in spiritual and all-round growth.',
  metadataBase: new URL('https://rifaaq.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cabin.variable}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
