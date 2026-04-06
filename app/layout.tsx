import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CookieBanner } from '@/components/layout/cookie-banner'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'NetherlandsMatchTours – Sporttochten in Nederland & Europa',
  description:
    'Ontdek onvergetelijke sporttochten in Nederland en door heel Europa. Voetbalreizen, weekendpakketten en exclusieve sportervaringen — volledig georganiseerd.',
  keywords: [
    'sporttochten',
    'voetbalreizen',
    'sportreizen nederland',
    'europese voetbaltochten',
    'sportevenementen',
  ],
  authors: [{ name: 'NetherlandsMatchTours' }],
  creator: 'NetherlandsMatchTours',
  metadataBase: new URL('https://netherlandsmatchtours.com'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://netherlandsmatchtours.com',
    siteName: 'NetherlandsMatchTours',
    title: 'NetherlandsMatchTours – Sporttochten in Nederland & Europa',
    description:
      'Ontdek onvergetelijke sporttochten in Nederland en door heel Europa.',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
}

export const viewport: Viewport = {
  themeColor: '#FF5500',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
