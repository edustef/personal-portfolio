'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'lib/components/shared/Popover'
import { Construction, Languages } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export function Navbar({}) {
  return (
    <nav className="flex items-center gap-4">
      {/* <Logo /> */}
      <Link href="/" className="text-brand-800 font-semibold">
        Home
      </Link>
      <Link href="/contact" className="text-brand-800 font-semibold">
        Contact
      </Link>
      <div className="ml-auto flex items-center justify-center">
        <Popover>
          <PopoverTrigger>
            <Languages className="text-brand-800 ml-auto h-8 w-8 p-1" />
          </PopoverTrigger>
          <PopoverContent className="noise flex flex-col gap-2" align="end">
            <div className="flex items-center justify-end gap-2">
              <span>English</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Construction />
              <span>Español</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}
