import type { Metadata, Viewport } from 'next'
import { Cabin, Noto_Naskh_Arabic } from 'next/font/google'
import AppProviders from './providers'
import '@/styles/globals.css'

const cabin = Cabin({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-brand',
})

// Cabin has no Arabic glyphs; the app relies on the system Naskh fallback.
const arabic = Noto_Naskh_Arabic({
  weight: ['400', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-arabic',
})

const description =
  'Rifaaq is a faith-informed productivity and accountability app for Muslims. Plan your day around your prayers and goals, reflect every evening, and grow with a circle that keeps you consistent.'

export const metadata: Metadata = {
  metadataBase: new URL('https://rifaaq.com'),
  title: {
    default: 'Rifaaq: your partner in spiritual and all-round growth',
    template: '%s | Rifaaq',
  },
  description,
  applicationName: 'Rifaaq',
  keywords: [
    'Muslim productivity app',
    'Islamic habit tracker',
    'muhaasabah',
    'tadabbur',
    'accountability partner',
    'salah reminders',
    'Nigeria',
  ],
  openGraph: {
    title: 'Rifaaq',
    description,
    url: 'https://rifaaq.com',
    siteName: 'Rifaaq',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Rifaaq', description },
}

export const viewport: Viewport = {
  themeColor: '#1A2A55',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cabin.variable} ${arabic.variable}`}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
