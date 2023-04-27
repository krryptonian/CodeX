import { clsx } from 'clsx'
import { Rubik } from 'next/font/google'

import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export const metadata = {
  title: {
    template: `%s - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    default: process.env.NEXT_PUBLIC_APP_NAME,
    absolute: `${process.env.NEXT_PUBLIC_APP_NAME} - Delivering Tailored Software Solutions for Your Business.`,
  },
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  siteName: process.env.NEXT_PUBLIC_APP_NAME,
  colorScheme: 'dark',
  creator: process.env.NEXT_PUBLIC_APP_AUTHORS,
  publisher: process.env.NEXT_PUBLIC_APP_NAME,
  metadataBase: new URL('https://codexonline.co.in'),
  authors: [
    {
      name: process.env.NEXT_PUBLIC_APP_AUTHORS,
      url: 'https://codexonline.co.in',
    },
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Delivering Tailored Software Solutions for Your Business.`,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    type: 'article',
    authors: [process.env.NEXT_PUBLIC_APP_AUTHORS],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

const rubik = Rubik({
  subsets: ['latin'],
  adjustFontFallback: true,
  display: 'auto',
  variable: '--font-rubik',
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={clsx(rubik.variable)}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
