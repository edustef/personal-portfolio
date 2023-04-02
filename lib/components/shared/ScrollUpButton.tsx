'use client'

import useDebounce from 'lib/hooks/useDebounce'
import { ChevronUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const ScrollUpButton: React.FC = () => {
  const [showButton, setShowButton] = useState(true)
  const debouncedShowButton = useDebounce(showButton, 100)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {debouncedShowButton && (
        <button
          onClick={scrollToTop}
          className="m-1 fixed bottom-8 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/40 text-violet-50 backdrop-blur-sm md:bottom-8 md:right-16"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}

export default ScrollUpButton
