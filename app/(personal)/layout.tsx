import '../global.css'

import { Footer } from 'lib/components/Footer'
import { Navbar } from 'lib/components/Navbar'
import ScrollUpButton from 'lib/components/shared/ScrollUpButton'
import { AlertCircle } from 'lucide-react'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})
const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${mono.className} ${sans.className} ${serif.className}`}
    >
      <body className="noise isoloate flex min-h-screen bg-violet-100 font-sans text-violet-950">
        <div className="relative flex h-full w-full flex-col gap-16 overflow-hidden px-6 py-8 md:px-16 md:py-8">
          <header className='print:hidden'>
            <Navbar />
          </header>
          {children}
          <div className="flex flex-col gap-4">
            <Footer />
            <div className="flex items-center gap-3 rounded-lg bg-violet-300/50 p-2 font-mono text-xs italic text-violet-700">
              <AlertCircle className="w-[2em]" />
              <span>
                JSX element &apos;div&apos; has no
                <br /> corresponding closing tag.
              </span>
            </div>
          </div>
        </div>
        <ScrollUpButton />
      </body>
    </html>
  )
}
