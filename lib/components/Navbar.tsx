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
        className="font-semibold text-violet-950 hover:text-violet-700"
      >
        Home
      </Link>
      <Link
        href="/resume"
        className="font-semibold text-violet-950 hover:text-violet-700"
      >
        Resume
      </Link>
      <div className="ml-auto flex items-center justify-center">
        <Popover>
          <PopoverTrigger>
            <Languages className="ml-auto h-8 w-8 p-1 text-violet-950 hover:text-violet-700" />
          </PopoverTrigger>
          <PopoverContent align="end">
            <div className="w-full">
              <div className="py-2 pr-4 text-end font-bold">Languages</div>
              <div className=" mr-0 h-[1px] w-full bg-purple-400/20"></div>
            </div>
            <div className="flex flex-col gap-3 py-4 pl-10 pr-4 font-semibold">
              <button className="flex items-center justify-end gap-2 hover:text-violet-700">
                <span>English</span>
              </button>
              <button className="flex items-center justify-end gap-2 hover:text-violet-700">
                <Construction />
                <span>Español</span>
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}
