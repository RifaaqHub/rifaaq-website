import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import '@/styles/globals.css'

import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import AppProviders from './providers'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const calm = localFont({
  src: [
    {
      path: '../styles/KeepCalm-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-calm',
  fallback: ['system-ui', 'sans-serif', 'arial'],
})

export const metadata: Metadata = {
  title: 'Rifaaq Home',
  description:
    'We aspire to be the ultimate partner in personal and professional growth, driving positive change and creating a brighter future for all.',
  metadataBase: new URL('https://rifaaq.com'),
  keywords: [
    'productivity',
    'growth',
    'partnership',
    'personal development',
    'business development',
    'support',
  ],
  category: 'technology, personal development',
  openGraph: {
    title: 'Rifaaq',
    description:
      'the ultimate partner in personal and professional growth, driving positive change and creating a brighter future for all.',
    url: 'https://rifaaq.com',
    siteName: 'Rifaaq',
    type: 'website',
    images: [
      {
        url: '/fav.png',
        width: 768,
        height: 768,
        alt: 'rifaaq-icon',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${calm.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <AppProviders>{children}</AppProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
