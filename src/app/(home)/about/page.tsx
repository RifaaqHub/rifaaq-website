import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Accent, ContactEmail, Heading, Maxwidth, PageHero, Paragraph } from '@/components'
import { routes } from '@/lib/routes'
import CtaBand from '../home/CtaBand'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why we built Rifaaq: a companion for Muslims who want to live with purpose, accountability and continuous growth.',
}

const values = [
  {
    title: 'Faith woven in, not bolted on',
    body: 'Salah anchors the day, reflection closes it, and the language of the app is the language of our deen: Muhaasabah, Tadabbur, Ukhuwwah.',
    img: '/illustrations/onboarding-welcome.png',
  },
  {
    title: 'Gentle, not guilt-driven',
    body: 'Small, steady steps are how lasting habits form. Rifaaq nudges and encourages. It never shames you for a missed day.',
    img: '/illustrations/man-writing-sunrise.png',
  },
  {
    title: 'Better together',
    body: 'We grow best in good company. Circles let family and friends keep each other consistent, with no pressure, just support.',
    img: '/illustrations/friends-hug-checkmark.png',
  },
  {
    title: 'Your trust is an amanah',
    body: 'No ads, no trackers, no selling your data. Your reflections are yours, and you can delete everything at any time.',
    img: '/illustrations/envelope-heart-letter.png',
  },
]

const About = () => (
  <>
    <PageHero eyebrow="About Rifaaq" title={<>Companions on the <Accent>journey</Accent></>}>
      Rifaaq (<bdi lang="ar">رِفَاق</bdi>) means companions. That is what we want to be for every
      Muslim trying to live a more intentional life.
    </PageHero>

    <section className="bg-white py-16 lg:py-24">
      <Maxwidth className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-bold tracking-wider text-royal uppercase">Our story</p>
          <Heading as="h2" variant="h2">
            Every moment holds potential
          </Heading>
          <Paragraph className="text-deep-gray">
            Rifaaq began with a simple conviction: every moment holds potential,
            and every action can be purposeful. Too many productivity tools treat
            faith as an afterthought, and too many of us start strong and drift
            when no one is walking beside us.
          </Paragraph>
          <Paragraph className="text-deep-gray">
            So we built one calm place where your prayers, your goals, your daily
            reflection and the people who keep you going live together. We are
            building it Nigeria-first, with the realities of our community in
            mind, for Muslims at every level of their journey.
          </Paragraph>
        </div>
        <div className="rounded-[28px] bg-light-gray p-8">
          <p className="text-sm font-bold tracking-wider text-royal uppercase">Our mission</p>
          <p className="mt-3 text-2xl leading-snug font-bold text-primary">
            To help Muslims at every level live lives rich in purpose,
            accountability and continuous growth.
          </p>
          <Image
            src="/illustrations/onboarding-consistency.png"
            alt=""
            width={400}
            height={332}
            className="mt-6 ml-auto w-48"
          />
        </div>
      </Maxwidth>
    </section>

    <section className="bg-light-gray py-16 lg:py-24">
      <Maxwidth>
        <Heading as="h2" variant="h2" className="mx-auto mb-12 max-w-[36rem] text-center">
          What we believe
        </Heading>
        <ul className="grid gap-5 md:grid-cols-2">
          {values.map(v => (
            <li key={v.title} className="flex flex-col gap-4 rounded-[20px] bg-white p-6 sm:flex-row sm:items-start lg:p-8">
              <Image src={v.img} alt="" width={120} height={120} className="h-20 w-20 flex-none object-contain" />
              <div>
                <Heading as="h3" variant="h4">
                  {v.title}
                </Heading>
                <p className="mt-2 leading-relaxed text-deep-gray">{v.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Maxwidth>
    </section>

    <section className="bg-white py-16">
      <Maxwidth className="max-w-[44rem] text-center">
        <Heading as="h2" variant="h3">
          Say salaam
        </Heading>
        <Paragraph className="mt-4 text-deep-gray">
          Questions, suggestions, or just want to say salaam? Reach us at{' '}
          <ContactEmail />, or visit{' '}
          <Link href={routes.support} className="text-royal underline underline-offset-2">
            Support
          </Link>
          . You can also tell us what to build next from the Discover tab in the app.
        </Paragraph>
      </Maxwidth>
    </section>

    <CtaBand />
  </>
)

export default About
