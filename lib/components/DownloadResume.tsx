'use client'

import { Download } from 'lucide-react'
import React, { useEffect } from 'react'

export default function DownloadResume() {
  useEffect(() => {}, [])

  return (
    <button
      onClick={() => {
        window.print()
      }}
      className="flex items-center gap-2 font-semibold text-violet-950 hover:text-violet-700"
    >
      <span>Resume</span>
      <Download className="w-[1.2em]" />
    </button>
  )
}
