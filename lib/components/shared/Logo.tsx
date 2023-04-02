import { cn } from 'lib/utils/cn'
import React from 'react'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'relative flex h-12 w-12  items-center justify-center',
        className
      )}
    >
      <div className="mask absolute h-12 w-12 rounded-xl bg-violet-500/20 "></div>
      <div className="mask absolute h-11 w-11 rounded-lg bg-violet-500/50"></div>
      <div className="mask absolute h-10 w-10 rounded-md bg-violet-500"></div>
    </div>
  )
}

export default Logo
