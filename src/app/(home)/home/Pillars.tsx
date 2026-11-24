import Image from 'next/image'
import { Heading, Maxwidth, Paragraph } from '@/components'

const pillars = [
  {
    title: 'Plan your day, your way',
    body: 'Prayers, goals and to-dos together, on your own schedule.',
    img: '/illustrations/onboarding-plan-day.png',
  },
  {
    title: 'Describe a goal, get a plan',
    body: 'Say it in your own words and Rifaaq suggests the daily tasks.',
    img: '/illustrations/lightbulb-quote-speech.png',
  },
  {
    title: 'Become mindful, every day',
    body: 'A few quiet minutes of Tadabbur to reflect on your day.',
    img: '/illustrations/muhaasabah-reflect.png',
  },
  {
    title: 'Grow with a circle',
    body: 'Invite friends as accountability partners and keep each other consistent.',
    img: '/illustrations/onboarding-circle.png',
  },
]

const Pillars = () => (
  <section className="bg-white py-16 lg:py-24">
    <Maxwidth>
      <div className="mx-auto mb-12 max-w-[44rem] text-center">
        <p className="mb-3 text-sm font-bold tracking-wider text-royal uppercase">Marhaban</p>
        <Heading as="h2" variant="h2">
          One calm place for the habits that matter most
        </Heading>
        <Paragraph className="mt-4 text-deep-gray">
          Rifaaq brings your salah, your goals, your daily reflection and the
          people who keep you going into one gentle daily rhythm.
        </Paragraph>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(p => (
          <li key={p.title} className="flex flex-row items-start gap-4 rounded-[20px] bg-surface p-5 sm:flex-col sm:p-6">
            <Image src={p.img} alt="" width={96} height={96} className="h-16 w-16 flex-none object-contain sm:h-20 sm:w-20" />
            <div>
              <Heading as="h3" variant="h4">
                {p.title}
              </Heading>
              <p className="mt-2 leading-relaxed text-deep-gray">{p.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Maxwidth>
  </section>
)

export default Pillars
