import Link from 'next/link'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { footerColumns, socials } from '@/lib/routes'
import { site } from '@/lib/site'
import Logo from './Logo'
import Maxwidth from './Maxwidth'
import PlayBadge from './PlayBadge'

const socialLinks = [
  { title: 'Rifaaq on X', icon: FaXTwitter, href: socials.twitter },
  { title: 'Rifaaq on Facebook', icon: FaFacebook, href: socials.facebook },
  { title: 'Rifaaq on LinkedIn', icon: FaLinkedinIn, href: socials.linkedIn },
]

const Footer = () => (
  <footer className="bg-primary text-white">
    <Maxwidth className="grid gap-10 py-14 lg:grid-cols-[1.3fr_2fr] lg:gap-16 lg:py-16">
      <div className="flex flex-col items-start gap-5">
        <Logo color="gold" height={34} />
        <p className="max-w-sm leading-relaxed text-[#C9CFE3]">
          Your partner in spiritual and all-round growth. Plan your day, reflect
          honestly, and grow with people who keep you consistent.
        </p>
        <PlayBadge />
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {footerColumns.map(col => (
          <div key={col.title}>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary">
              {col.title}
            </h2>
            <ul className="flex flex-col gap-3">
              {col.links.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#E3E7F4] hover:text-white hover:underline">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Maxwidth>

    <div className="border-t border-white/10">
      <Maxwidth className="flex flex-col-reverse items-center justify-between gap-4 py-6 text-sm text-[#C9CFE3] sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.legalEntity}. All rights reserved.
        </p>
        <ul className="flex items-center gap-5">
          {socialLinks.map(({ title, icon: Icon, href }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={title} className="hover:text-secondary">
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </Maxwidth>
    </div>
  </footer>
)

export default Footer
