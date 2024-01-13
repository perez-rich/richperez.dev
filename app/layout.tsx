import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '../src/components/SiteHeader'

export const metadata: Metadata = {
  title: 'imperez',
  other: {
    icon: "/favicon.png"
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" data-theme="corporate">
      <head>
        <link rel="preconnect" href="https://maxst.icons8.com/" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      </head>
      <body className="bg-slate-800 text-stone-200">
        <SiteHeader />
        <main className="px-4 pb-10">
          {children}
        </main>
      </body>
    </html>
  )
}
