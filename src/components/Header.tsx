'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import Logo from './Logo'
import Maxwidth from './Maxwidth'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(isScrolled && 'sticky top-0 z-[100] border-b-2 border-secondary bg-white')}
    >
      <Maxwidth className="flex items-center justify-between bg-white py-2">
        <Logo />
      </Maxwidth>
    </header>
  )
}

export default Header
