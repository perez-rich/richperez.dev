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
    <html lang="en" data-theme="corporate">
      <body className="bg-slate-800 text-stone-200 h-screen">
        <header className="flex justify-between px-4 border-b border-slate-500">
          <Image src="/img/site-logo.png" alt="imperez logo" width="300" height="86" />
          <a className="btn btn-primary text-white my-4" href="https://www.linkedin.com/in/imperez/" target="_blank" >Connect on LinkedIn</a>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
