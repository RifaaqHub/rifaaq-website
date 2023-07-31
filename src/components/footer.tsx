'use client'

import { Logo, Maxwidth, Paragraph } from '@/components'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer tw="bg-primary text-white border-b-2 border-b-secondary">
      <Maxwidth>
        <Logo $lightBg={false} />

        <div>
          {socials.map(social => {
            const Icon = social.icon
            return (
              <Link href={social.link} key={social.title} title={social.title}>
                <Icon size={25} />
              </Link>
            )
          })}
        </div>

        <Paragraph>&copy; Copyright 2023</Paragraph>
      </Maxwidth>
    </footer>
  )
}

const socials = [
  {
    title: 'twitter',
    icon: FaTwitter,
    link: '',
  },
  {
    title: 'facebook',
    icon: FaFacebook,
    link: '',
  },
  {
    title: 'instagram',
    icon: FaInstagram,
    link: '',
  },
]

export default Footer
