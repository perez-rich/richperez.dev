import type { Metadata } from 'next'
import Image from 'next/image';
import './globals.css'

export const metadata: Metadata = {
  title: 'imperez',
  other: {
    icon: "/favicon.png"
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-stone-200 h-screen">
        <header className="flex justify-center">
          <Image src="/img/site-logo.png" alt="imperez logo" width="300" height="86" />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
