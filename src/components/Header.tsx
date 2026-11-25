'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import { cn } from '@/lib/cn'
import { headerLinks } from '@/lib/routes'
import { site } from '@/lib/site'
import Logo from './Logo'
import Maxwidth from './Maxwidth'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const path = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [path])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow',
          scrolled &&
            'shadow-[0_1px_0_rgba(26,42,85,0.08),0_8px_24px_rgba(26,42,85,0.06)]',
        )}
      >
        <Maxwidth className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Logo color="navy" height={30} />

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-8">
              {headerLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={path === link.href ? 'page' : undefined}
                    className={cn(
                      'text-[0.95rem] font-medium text-primary decoration-secondary decoration-2 underline-offset-8 hover:text-royal',
                      path === link.href && 'underline',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[14px] bg-secondary px-5 py-2.5 text-[0.95rem] font-bold text-primary hover:bg-[#ffd95f]"
            >
              Get the app
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(o => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-primary lg:hidden"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </Maxwidth>
      </header>

      {/* Rendered outside <header>: its backdrop-filter makes it the
          containing block for fixed descendants, which collapsed this
          full-screen panel to the header's own height. */}
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-light-gray bg-white lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-6">
            {headerLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-primary hover:bg-surface"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="px-4 pt-4">
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[14px] bg-secondary px-5 py-3.5 text-center font-bold text-primary"
              >
                Get the app on Google Play
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  )
}

export default Header
