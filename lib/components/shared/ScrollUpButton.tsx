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
          className="bg-brand-500/40 text-brand-100 fixed bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-sm"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}

export default ScrollUpButton