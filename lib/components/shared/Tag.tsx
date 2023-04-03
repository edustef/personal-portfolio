import { cn } from 'lib/utils/cn'
import type { ReactNode } from 'react'

export default function Tag({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-md bg-violet-100 px-2 py-1 text-sm font-semibold text-violet-700',
        className
      )}
    >
      {children}
    </div>
  )
}
