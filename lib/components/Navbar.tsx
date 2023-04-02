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
        className="font-semibold text-purple-950 hover:text-purple-700"
      >
        Home
      </Link>
      <Link
        href="/contact"
        className="font-semibold text-purple-950 hover:text-purple-700"
      >
        Contact
      </Link>
      <div className="ml-auto flex items-center justify-center">
        <Popover>
          <PopoverTrigger>
            <Languages className="ml-auto h-8 w-8 p-1 text-purple-950 hover:text-purple-700" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2" align="end">
            <button className="flex items-center justify-end gap-2 hover:text-purple-700">
              <span>English</span>
            </button>
            <button className="flex items-center justify-end gap-2 hover:text-purple-700">
              <Construction />
              <span>Español</span>
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}
