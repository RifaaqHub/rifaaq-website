'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'
import Maxwidth from './Maxwidth'
import tw from 'twin.macro'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      css={[
        isScrolled &&
          tw`bg-white sticky top-0 z-[100] border-b-2 border-secondary`,
      ]}
    >
      <Maxwidth tw="flex items-center bg-white py-2 px-6 justify-between md:(justify-between) lg:(px-[6.25rem])">
        <Logo />

      </Maxwidth>
    </header>
  )
}

export default Header
