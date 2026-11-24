import Image from 'next/image'
import { Heading, Maxwidth, Paragraph, PlayBadge } from '@/components'

const steps = [
  {
    title: 'Get the app',
    body: 'Download Rifaaq from Google Play and create your account with your name and email. We send a short code to verify it.',
    img: '/illustrations/auth-signup.png',
  },
  {
    title: 'Pick a starting point',
    body: 'Adopt a ready-made starter template, describe a goal in your own words, or build your own tasks from scratch.',
    img: '/illustrations/starter-tasks-hero.png',
  },
  {
    title: 'Live your day',
    body: 'Reminders arrive at the times you set. Check tasks off as you go and watch your consistency grow.',
    img: '/illustrations/calendar-checklist-clock.png',
  },
  {
    title: 'Reflect and grow together',
    body: 'Close the day with Muhaasabah, and when you are ready, invite a partner into your circle.',
    img: '/illustrations/invite-partner.png',
  },
]

const HowItWorks = () => (
  <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-16 bg-white py-16 lg:py-24">
    <Maxwidth>
      <div className="mx-auto mb-12 max-w-[44rem] text-center">
        <p className="mb-3 text-sm font-bold tracking-wider text-royal uppercase">How it works</p>
        <Heading as="h2" variant="h2" id="how-title">
          Small, steady steps
        </Heading>
        <Paragraph className="mt-4 text-deep-gray">
          The way lasting habits are actually formed. You can be up and running
          in a few minutes.
        </Paragraph>
      </div>

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex flex-col gap-4 rounded-[20px] border border-light-gray bg-white p-6 shadow-[0_10px_30px_rgba(26,42,85,0.06)]">
            <span className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary font-bold text-primary">
              {i + 1}
            </span>
            <Image src={step.img} alt="" width={120} height={120} className="h-24 w-24 object-contain" />
            <Heading as="h3" variant="h4">
              {step.title}
            </Heading>
            <p className="leading-relaxed text-deep-gray">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex justify-center">
        <PlayBadge />
      </div>
    </Maxwidth>
  </section>
)

export default HowItWorks
