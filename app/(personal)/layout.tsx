import '../global.css'

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
      <body className="noise isoloate bg-brand-200 text-brand-800 flex min-h-screen">
        <div className="relative flex h-full w-full flex-col gap-20 overflow-hidden px-4 py-4">
          <header>
            <Navbar />
          </header>
          {children}
          <footer>Footer</footer>
          <div className="bg-brand-300/50 text-brand-600 flex items-center gap-3 rounded-lg p-2 font-mono text-xs italic">
            <AlertCircle className="w-[2em]" />
            <span>
              JSX element &apos;div&apos; has no
              <br /> corresponding closing tag.
            </span>
          </div>
        </div>
        <ScrollUpButton />
      </body>
    </html>
  )
}
