import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
import '@/styles/globals.css'

import { Montserrat, Roboto } from 'next/font/google'
import AppProviders from './providers'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const calm = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-calm',
})

export const metadata: Metadata = {
  title: 'Rifaaq Home',
  description:
    'At Rifaaq, we are dedicated to helping every member of the Muslim community realize their full potential. Join us and embark on a path of spiritual growth and personal development like never before.',
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
