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
  title: 'NetherlandsMatchTours – Actieve tours in Nederland & Europa',
  description:
    'Ontdek avontuurlijke, actieve tours in Nederland en door heel Europa. Fietsen, wandelen, mototochten en meerdaagse bergtreks — volledig georganiseerd.',
  keywords: [
    'actieve tours',
    'fietsreizen nederland',
    'actieve reizen europa',
    'bergtrek alpen',
    'avontuurlijke sportreis',
  ],
  authors: [{ name: 'NetherlandsMatchTours' }],
  creator: 'NetherlandsMatchTours',
  metadataBase: new URL('https://netherlandsmatchtours.com'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://netherlandsmatchtours.com',
    siteName: 'NetherlandsMatchTours',
    title: 'NetherlandsMatchTours – Actieve tours in Nederland & Europa',
    description:
      'Ontdek onvergetelijke actieve tours in Nederland en door heel Europa.',
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
