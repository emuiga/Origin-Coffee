import type { Metadata } from 'next'
import { Poppins, Nunito_Sans } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '700', '800'],
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Origin Coffee: Great Recharge Moments',
    template: '%s | Origin Coffee',
  },
  description:
    'A homegrown Kenyan fusion restaurant in Nakuru and Eldoret. Coffee shop, restaurant, BBQ, artisan pizza, wine bar, and bakery under one roof.',
  keywords: ['Origin Coffee', 'Nakuru restaurant', 'Kenyan fusion', 'coffee shop Nakuru', 'Eldoret restaurant'],
  metadataBase: new URL('https://origincoffee.co.ke'),
  openGraph: {
    title: 'Origin Coffee: Great Recharge Moments',
    description: 'Six dining concepts. Three locations. One unforgettable experience.',
    url: 'https://origincoffee.co.ke',
    siteName: 'Origin Coffee',
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630 }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origin Coffee',
    description: 'Six dining concepts. Three locations. One unforgettable experience.',
    images: ['/images/og-cover.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://origincoffee.co.ke" />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-espresso font-body">
        {children}
      </body>
    </html>
  )
}
