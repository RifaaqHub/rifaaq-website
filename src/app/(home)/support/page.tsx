import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ContactEmail, Heading, Maxwidth, PageHero } from '@/components'
import { routes } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Rifaaq: your account, reminders, circles and data.',
}

const topics = [
  {
    title: 'Signing in and passwords',
    body: (
      <>
        Rifaaq accounts use your email and a password. If you forget your
        password, tap <strong>Forgot password</strong> on the log-in screen and
        we will email you a code to reset it.
      </>
    ),
  },
  {
    title: 'Reminders not arriving',
    body: (
      <>
        Open the menu in the app and check the notification status panel. If
        notifications are off for Rifaaq, turn them on in your phone&apos;s
        settings. Each task also has its own reminder switch.
      </>
    ),
  },
  {
    title: 'Circles and invites',
    body: (
      <>
        Create a circle from the Circles tab, then invite partners by email or
        share your invite link. Invites you receive appear on the Circles tab,
        where you can accept or decline them.
      </>
    ),
  },
  {
    title: 'AI goal suggestions',
    body: (
      <>
        Describe your goal in your own words and review the suggested tasks
        before saving. If suggestions are unavailable, you can always start from
        scratch or pick a template.
      </>
    ),
  },
  {
    title: 'Ideas and feedback',
    body: (
      <>
        Tell us what to build next from the <strong>Discover</strong> tab in the
        app. We read every request.
      </>
    ),
  },
  {
    title: 'Your data and account',
    body: (
      <>
        Read our <Link href={routes.privacy}>Privacy Policy</Link>, or delete your
        account any time. See <Link href={routes.accountDeletion}>Account deletion</Link>{' '}
        for both the in-app and web options.
      </>
    ),
  },
]

const Support = () => (
  <>
    <PageHero eyebrow="Support" title="How can we help?" pattern={1}>
      Answers to common questions, and a direct line to our team.
    </PageHero>

    <section className="bg-white py-16 lg:py-20">
      <Maxwidth>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map(t => (
            <li key={t.title} className="rounded-[20px] bg-light-gray p-6">
              <Heading as="h2" variant="h4">
                {t.title}
              </Heading>
              <p className="mt-3 leading-relaxed text-deep-gray [&_a]:text-royal [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-primary">
                {t.body}
              </p>
            </li>
          ))}
        </ul>
      </Maxwidth>
    </section>

    <section className="bg-white pb-16 lg:pb-24">
      <Maxwidth>
        <div className="grid items-center gap-8 rounded-[28px] bg-[linear-gradient(150deg,#1A2A55_0%,#2A499D_100%)] px-6 py-10 text-white sm:px-10 md:grid-cols-[1fr_auto] lg:px-16">
          <div>
            <Heading as="h2" variant="h3">
              Still need help?
            </Heading>
            <p className="mt-3 text-lg text-[#D7DCEC] [&_a]:text-secondary [&_a]:underline [&_mark]:text-primary">
              Email us at <ContactEmail /> with the email address on your
              account and a short description. We aim to reply within a few
              working days.
            </p>
            <p className="mt-3 text-[#D7DCEC]">
              Browse the{' '}
              <Link href={routes.faq} className="text-secondary underline underline-offset-2">
                FAQ
              </Link>{' '}
              for quick answers.
            </p>
          </div>
          <Image
            src="/illustrations/envelope-heart-letter.png"
            alt=""
            width={365}
            height={326}
            className="mx-auto w-40 md:w-48"
          />
        </div>
      </Maxwidth>
    </section>
  </>
)

export default Support
