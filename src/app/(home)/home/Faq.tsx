import Link from 'next/link'
import { ReactNode } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Heading, Maxwidth } from '@/components'
import { routes } from '@/lib/routes'

export const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'Is Rifaaq free?',
    a: 'Yes. Rifaaq is free to download and use, and there are no in-app purchases at launch.',
  },
  {
    q: 'Do I need an accountability partner?',
    a: 'No. Everything works on your own. We do encourage finding someone from your family or friends to walk the journey with you, and Circles make that easy when you are ready.',
  },
  {
    q: 'Does it work offline?',
    a: 'Your tasks do. You can view, add and check off tasks without a connection, and Rifaaq syncs your changes when you are back online. Circles and AI goal suggestions need a connection.',
  },
  {
    q: 'How do the AI goal suggestions work?',
    a: (
      <>
        When you describe a goal, the text you type is sent to Google&apos;s Gemini AI
        to suggest a short list of recurring tasks. You review every suggestion
        before anything is saved. Please avoid putting personal details in your
        goal text. See the <Link href={routes.privacy}>Privacy Policy</Link> for details.
      </>
    ),
  },
  {
    q: 'Is Rifaaq on iPhone?',
    a: 'Rifaaq is launching on Android first, through Google Play.',
  },
  {
    q: 'Do you sell my data or show ads?',
    a: 'No. Rifaaq has no ads and no third-party analytics or advertising trackers, and we never sell your data.',
  },
  {
    q: 'How do I delete my account?',
    a: (
      <>
        In the app, open the menu, choose View account, then Delete account. You
        can also <Link href={routes.accountDeletion}>request deletion on the web</Link>.
      </>
    ),
  },
]

const Faq = () => (
  <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 bg-light-gray py-16 lg:py-24">
    <Maxwidth className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <div>
        <p className="mb-3 text-sm font-bold tracking-wider text-royal uppercase">FAQ</p>
        <Heading as="h2" variant="h2" id="faq-title">
          Questions, answered
        </Heading>
        <p className="mt-4 text-lg text-deep-gray">
          Something else on your mind? Visit{' '}
          <Link href={routes.support} className="text-royal underline underline-offset-2">
            Support
          </Link>
          .
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map(item => (
          <details key={item.q} className="group rounded-2xl bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)] open:shadow-[0_10px_30px_rgba(26,42,85,0.08)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-primary [&::-webkit-details-marker]:hidden">
              {item.q}
              <FiChevronDown aria-hidden className="flex-none transition-transform group-open:rotate-180" />
            </summary>
            <div className="pt-3 leading-relaxed text-deep-gray [&_a]:text-royal [&_a]:underline [&_a]:underline-offset-2">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </Maxwidth>
  </section>
)

export default Faq
