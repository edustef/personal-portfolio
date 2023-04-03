import '../global.css'

import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import { ReactNode } from 'react'

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

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return <div>{children}</div>
}
