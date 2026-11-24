import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FiCheck } from 'react-icons/fi'
import { Accent, Blob, Heading, Maxwidth, PatternTile } from '@/components'
import { cn } from '@/lib/cn'
import { routes } from '@/lib/routes'

type Story = {
  id: string
  eyebrow: string
  arabic?: { script: string; meaning: string }
  title: ReactNode
  body: string
  points: string[]
  screen: { src: string; alt: string }
  illustration: string
  pattern: number
  note?: ReactNode
  overlay?: ReactNode
}

// Mirrors the app's real task reminder (lib/notifications/scheduler.ts and actions.ts).
const NotificationCard = () => (
  <div
    aria-hidden
    className="absolute top-16 -left-4 z-30 w-[85%] rounded-[22px] bg-white px-4 py-3.5 text-[#1f1f1f] shadow-[0_20px_40px_rgba(26,42,85,0.28),0_4px_10px_rgba(26,42,85,0.12)] sm:-left-10"
  >
    <div className="flex items-center gap-2">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mark-gold.svg" alt="" width={18} height={14} />
      </span>
      <span className="text-xs text-[#5f6368]">Rifaaq · now</span>
    </div>
    <p className="mt-2 font-medium">Fajr</p>
    <p className="text-sm text-[#444]">Time for Fajr</p>
    <p className="mt-2 flex gap-6 text-sm font-medium text-royal">
      <span>Mark done</span>
      <span>View</span>
    </p>
  </div>
)

const stories: Story[] = [
  {
    id: 'plan',
    eyebrow: 'Tasks & routines',
    title: (
      <>
        Plan your day, <Accent>your way</Accent>
      </>
    ),
    body: 'Build a flexible daily rhythm. Your prayers, Qur’an, adhkar, health and work sit side by side on one timeline, so your day takes shape around what matters.',
    points: [
      'Give each task a time and a type: Salah, Qur’an, Dhikr, Sadaqah, Health, Learning, Work and more',
      'Repeat tasks every day, on chosen weekdays, or on a custom schedule',
      'See today as a timeline or a simple list, and jump to any date',
      'Start fast with ready-made starter templates, then make them your own',
      'Works offline, and syncs when you are back online',
    ],
    screen: {
      src: '/screens/new-task.png',
      alt: 'The New task sheet: “Read Surah Al-Kahf”, detected as a Qur’an task, repeating every week on Friday with a reminder.',
    },
    illustration: '/illustrations/onboarding-plan-day.png',
    pattern: 1,
  },
  {
    id: 'goals',
    eyebrow: 'Goals, with AI suggestions',
    title: (
      <>
        Describe a goal. <Accent>Get a plan.</Accent>
      </>
    ),
    body: 'Write what you want to achieve in your own words, like “never miss Fajr and read Qur’an daily for the next 30 days”, and Rifaaq suggests the recurring tasks to get you there.',
    points: [
      'Add an optional timeframe, such as “this Ramadan” or “30 days”',
      'Review every suggested task: keep, edit or remove before saving',
      'Prefer to plan it yourself? Start from scratch or pick a template',
      'Track how each goal is progressing as you complete its tasks',
    ],
    screen: {
      src: '/screens/goal.png',
      alt: 'A suggested starting plan for the goal “Fajr & Qur’an Habit”, with four daily tasks to review.',
    },
    illustration: '/illustrations/lightbulb-quote-speech.png',
    pattern: 2,
    note: (
      <>
        Suggestions are generated with Google’s Gemini AI from the goal text
        you enter. <Link href={routes.privacy}>Read how we handle it</Link>.
      </>
    ),
  },
  {
    id: 'muhaasabah',
    eyebrow: 'Muhaasabah',
    arabic: { script: 'تَدَبُّر', meaning: 'Tadabbur: reflection, contemplation' },
    title: (
      <>
        Become mindful, <Accent>every day</Accent>
      </>
    ),
    body: 'A few quiet minutes to reflect honestly on your progress and your blessings, and to grow more conscious of your own journey.',
    points: [
      'Pick your daily reflection time and get a gentle reminder',
      'Gentle prompts: your progress today, your blessings, and tomorrow',
      'Log how the day felt, with an optional private note',
      'Look back on every reflection in your Tadabbur journal',
    ],
    screen: {
      src: '/screens/reflect.png',
      alt: 'The evening reflection screen asking “How was today?” with mood options and a note field.',
    },
    illustration: '/illustrations/muhaasabah-setup.png',
    pattern: 3,
  },
  {
    id: 'circles',
    eyebrow: 'Circles',
    arabic: { script: 'الأُخُوَّة', meaning: 'Al-Ukhuwwah: brotherhood' },
    title: (
      <>
        Grow with <Accent>a circle</Accent>
      </>
    ),
    body: 'Invite a friend or family member as your accountability partner. Share your progress, celebrate wins together, and keep each other consistent.',
    points: [
      'Create a circle and invite partners by email or a share link',
      'Accept or decline invites you receive',
      'Add shared circle tasks you work on together',
      'See who is in your circle and how they are getting on',
    ],
    screen: {
      src: '/screens/circle.png',
      alt: 'A circle screen showing its partners and shared circle tasks.',
    },
    illustration: '/illustrations/onboarding-circle.png',
    pattern: 0,
  },
  {
    id: 'reminders',
    eyebrow: 'Reminders',
    title: (
      <>
        Gentle reminders, <Accent>right on time</Accent>
      </>
    ),
    body: 'Get nudged for each task at the time you set, and mark it done straight from the notification. Your evening reflection reminder arrives on schedule too.',
    points: [
      'Per-task reminders, on by default and easy to switch off',
      '“Mark done” right from the notification',
      'A daily reminder for your Muhaasabah, at the time you choose',
      'Watch your streak and consistency build over time',
    ],
    screen: {
      src: '/screens/home.png',
      alt: 'The Rifaaq home timeline with a Fajr reminder notification offering Mark done and View.',
    },
    overlay: <NotificationCard />,
    illustration: '/illustrations/phone-notification-bell.png',
    pattern: 4,
  },
]

const FeatureStories = () => (
  <div id="features" className="scroll-mt-16">
    {stories.map((story, index) => (
      <StorySection key={story.id} story={story} dark={index % 2 === 1} />
    ))}
  </div>
)

const StorySection = ({ story, dark }: { story: Story; dark: boolean }) => (
  <section
    aria-labelledby={`${story.id}-title`}
    className={cn(
      'relative overflow-hidden py-16 lg:py-24',
      dark ? 'bg-[linear-gradient(160deg,#1A2A55_0%,#2A499D_100%)] text-white' : 'bg-light-gray',
    )}
  >
    <Blob
      className={cn(
        '-top-32 h-[30rem] w-[30rem]',
        dark ? '-right-40 bg-custom-blue/15' : '-left-40 bg-white/80',
      )}
    />
    <Maxwidth className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className={cn('flex flex-col gap-5', dark && 'lg:order-2')}>
        <p className={cn('text-sm font-bold tracking-wider uppercase', dark ? 'text-secondary' : 'text-royal')}>
          {story.eyebrow}
        </p>
        {story.arabic ? (
          <p className="-mb-2">
            <span lang="ar" className="text-2xl font-bold">
              {story.arabic.script}
            </span>
            <span className={cn('mt-1 block text-sm', dark ? 'text-[#C9CFE3]' : 'text-text-subtle')}>
              {story.arabic.meaning}
            </span>
          </p>
        ) : null}
        <Heading as="h2" variant="h2" id={`${story.id}-title`} className={dark ? undefined : '[&_em]:text-royal'}>
          {story.title}
        </Heading>
        <p className={cn('text-lg leading-relaxed', dark ? 'text-[#D7DCEC]' : 'text-deep-gray')}>{story.body}</p>
        <ul className="flex flex-col gap-3">
          {story.points.map(point => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-secondary text-primary">
                <FiCheck size={14} strokeWidth={3} aria-hidden />
              </span>
              <span className={dark ? 'text-[#E3E7F4]' : 'text-primary'}>{point}</span>
            </li>
          ))}
        </ul>
        {story.note ? (
          <p
            className={cn(
              'rounded-xl px-4 py-3 text-sm [&_a]:underline [&_a]:underline-offset-2',
              dark ? 'bg-white/10 text-[#D7DCEC]' : 'bg-white text-deep-gray',
            )}
          >
            {story.note}
          </p>
        ) : null}
      </div>

      <div className={cn('relative mx-auto w-full max-w-[18rem] sm:max-w-[21rem]', dark && 'lg:order-1')}>
        <PatternTile i={story.pattern} size={150} className={cn('bottom-10 opacity-90', dark ? '-left-8' : '-right-8')} />
        <Image
          src={story.illustration}
          alt=""
          width={360}
          height={360}
          className={cn(
            'absolute bottom-16 z-20 w-28 sm:w-36',
            dark ? '-right-4 sm:-right-16' : '-left-4 sm:-left-16',
          )}
        />
        <Image
          src={story.screen.src}
          alt={story.screen.alt}
          width={720}
          height={1540}
          sizes="(min-width: 640px) 21rem, 18rem"
          className={cn('relative z-10 h-auto w-full drop-shadow-[0_30px_40px_rgba(8,14,35,0.3)]', dark ? 'rotate-2' : '-rotate-2')}
        />
        {story.overlay}
      </div>
    </Maxwidth>
  </section>
)

export default FeatureStories
