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
      <div className="mask bg-brand-500/20 absolute h-12 w-12 rounded-xl "></div>
      <div className="mask bg-brand-500/50 absolute h-11 w-11 rounded-lg"></div>
      <div className="mask bg-brand-500 absolute h-10 w-10 rounded-md"></div>
    </div>
  )
}

export default Logo
