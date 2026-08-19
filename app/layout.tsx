import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Marck_Script, Montserrat } from 'next/font/google'
import './globals.css'

const marckScript = Marck_Script({
  weight: '400',
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-script',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Іван & Євгенія — Запрошення на весілля',
  description:
    'З великим задоволенням запрошуємо вас відсвяткувати наш особливий день — 26 вересня 2026 року, Одеса.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#4a6335',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="uk"
      className={`${marckScript.variable} ${montserrat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
