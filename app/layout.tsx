import { Analytics } from '@vercel/analytics/next'
import { Geist, DM_Serif_Display, Sue_Ellen_Francisco } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
})

const sueEllen = Sue_Ellen_Francisco({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sue-ellen',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://las5esquinas.com'),

  title: 'Las 5 Esquinas | Ricaurte, Cuenca',

  description:
    'Menú, especialidades, bebidas y sabores tradicionales de Las 5 Esquinas en Ricaurte, Cuenca.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Las 5 Esquinas | Ricaurte, Cuenca',
    description:
      'Menú, especialidades, bebidas y sabores tradicionales de Las 5 Esquinas en Ricaurte, Cuenca.',
    url: 'https://las5esquinas.com',
    siteName: 'Las 5 Esquinas',
    locale: 'es_EC',
    type: 'website',

    images: [
      {
        url: '/og-las-5-esquinas.jpg',
        width: 1200,
        height: 630,
        alt: 'Las 5 Esquinas - Ricaurte, Cuenca',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Las 5 Esquinas | Ricaurte, Cuenca',
    description:
      'Menú, especialidades, bebidas y sabores tradicionales de Las 5 Esquinas en Ricaurte, Cuenca.',
    images: ['/og-las-5-esquinas.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#211813',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body
        className={`${geist.variable} ${dmSerif.variable} ${sueEllen.variable} antialiased`}
      >
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}