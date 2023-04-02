'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'lib/components/shared/Popover'
import { Construction, Languages } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export function Navbar() {
  return (
    <nav className="m-auto flex max-w-3xl items-center gap-4">
      {/* <Logo /> */}
      <Link
        href="/"
        className="text-brand-800 hover:text-brand-600 font-semibold"
      >
        Home
      </Link>
      <Link
        href="/contact"
        className="text-brand-800 hover:text-brand-600 font-semibold"
      >
        Contact
      </Link>
      <div className="ml-auto flex items-center justify-center">
        <Popover>
          <PopoverTrigger>
            <Languages className="text-brand-800 hover:text-brand-600 ml-auto h-8 w-8 p-1" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2" align="end">
            <button className="hover:text-brand-600 flex items-center justify-end gap-2">
              <span>English</span>
            </button>
            <button className="hover:text-brand-600 flex items-center justify-end gap-2">
              <Construction />
              <span>Español</span>
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}
