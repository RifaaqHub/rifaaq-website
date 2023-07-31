'use client'

import Image from 'next/image'
import lightLogo from 'public/logo-light-bg.png'
import darkLogo from 'public/logo-dark-bg.png'
import tw, { styled } from 'twin.macro'

const Logo = ({ $lightBg = true }: { $lightBg?: boolean }) => {
  return (
    <div>
      <Image
        tw="max-w-[113px] lg:(max-w-[187px])"
        src={$lightBg ? lightLogo : darkLogo}
        alt="rifaaq-logo"
      />
    </div>
  )
}

export const Icon = styled.div(() => [
  tw`bg-[url(/fav.png)] w-[6.5rem] h-[6.5rem] bg-cover bg-no-repeat 2xl:(w-[12.375rem] h-[12.375rem])`,
])

export default Logo
