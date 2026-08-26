import { Analytics } from '@vercel/analytics/next'
import { Geist, DM_Serif_Display } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'Cafetería Las 5 Esquinas | Cuenca, Ecuador',
  description: 'Café, desayunos, especialidades, comida rápida, bebidas y más en Ricaurte - 5 Esquinas, Cuenca.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f5f1e8', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="bg-background"><body className={`${geist.variable} ${dmSerif.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
