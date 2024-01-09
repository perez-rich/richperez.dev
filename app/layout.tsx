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
        <header className="flex flex-col md:flex-row items-center md:justify-between px-4 border-b py-4 md:py-0 border-slate-500">
          <a href="/"><Image src="/img/site-logo.png" alt="imperez logo" width="300" height="86" /></a>
          <nav className="flex justify-center">
            <a className="btn btn-primary text-white md:my-4" href="https://www.linkedin.com/in/imperez/" target="_blank" >LinkedIn</a>
          </nav>
        </header>
        <main className="px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
