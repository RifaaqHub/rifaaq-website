import Link from 'next/link'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { routes } from '@/lib/routes'
import Logo from './Logo'
import Maxwidth from './Maxwidth'
import Paragraph from './Paragraph'

const socials = [
  { title: 'twitter', icon: FaTwitter, link: routes.twitter.path },
  { title: 'facebook', icon: FaFacebook, link: routes.facebook.path },
  { title: 'linkedin', icon: FaLinkedinIn, link: routes.linkedIn.path },
]

const Footer = () => (
  <footer className="border-b-2 border-b-secondary bg-primary text-white">
    <Maxwidth className="flex flex-col items-center gap-[3.38rem] py-16 lg:flex-row lg:justify-between">
      <Logo lightBg={false} />

      <div className="flex flex-row gap-8 p-4">
        {socials.map(({ title, icon: Icon, link }) => (
          <Link href={link} target="_blank" key={title} title={title}>
            <Icon size={35} />
          </Link>
        ))}
      </div>

      <Paragraph>&copy; Copyright 2023</Paragraph>
    </Maxwidth>
  </footer>
)

export default Footer
