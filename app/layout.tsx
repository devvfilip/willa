import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const display = Cormorant_Garamond({ subsets: ['latin', 'latin-ext'], variable: '--font-display', weight: ['400', '500', '600', '700'] })
const body = DM_Sans({ subsets: ['latin', 'latin-ext'], variable: '--font-body', weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://willapodpilskiem.pl'),
  title: 'Willa pod Pilskiem | Korbielów',
  description: 'Rodzinny pensjonat w Korbielowie u podnóża Pilska. Pokoje z widokiem, domowa atmosfera i górski wypoczynek od 1990 roku.',
  applicationName: 'Willa pod Pilskiem',
  authors: [{ name: 'Willa pod Pilskiem' }],
  creator: 'Willa pod Pilskiem',
  publisher: 'Willa pod Pilskiem',
  category: 'travel',
  keywords: ['noclegi Korbielów', 'pensjonat Korbielów', 'pokoje Korbielów', 'Pilsko', 'noclegi Beskid Żywiecki'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: {
    icon: '/images/logo-bg.png',
    shortcut: '/images/logo-bg.png',
    apple: '/images/logo-bg.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://willapodpilskiem.pl',
    siteName: 'Willa pod Pilskiem',
    title: 'Willa pod Pilskiem | Korbielów',
    description: 'Rodzinny pensjonat w Korbielowie u podnóża Pilska. Pokoje z widokiem, domowa atmosfera i górski wypoczynek od 1990 roku.',
    images: [{ url: '/images/logo-bg.png', width: 608, height: 353, alt: 'Willa pod Pilskiem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Willa pod Pilskiem | Korbielów',
    description: 'Rodzinny pensjonat w Korbielowie u podnóża Pilska.',
    images: ['/images/logo-bg.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': 'https://willapodpilskiem.pl/#lodging',
    name: 'Willa pod Pilskiem',
    description: metadata.description,
    url: 'https://willapodpilskiem.pl',
    image: 'https://willapodpilskiem.pl/images/zdjecia-domu/zdjecie-domu-glowne.jpg',
    telephone: '+48 33 863 65 52',
    email: 'malinowscy.noclegi@wp.pl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Beskidzka 114',
      postalCode: '34-335',
      addressLocality: 'Korbielów',
      addressCountry: 'PL',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 49.568, longitude: 19.351 },
    priceRange: '$$',
  }

  return (
    <html lang="pl" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  )
}
