import Image from 'next/image'
import Link from 'next/link'
import { Accent, Blob, Heading, Maxwidth, PatternTile, PlayBadge } from '@/components'
import { routes } from '@/lib/routes'

const Hero = () => (
  <section className="relative overflow-hidden bg-[linear-gradient(165deg,#1A2A55_0%,#20336f_55%,#2A499D_100%)] text-white">
    <Blob className="top-40 -left-48 h-[34rem] w-[34rem] bg-custom-blue/15" />
    <Blob className="-top-32 -right-48 h-[30rem] w-[30rem] bg-custom-blue/10" />
    <Blob className="-bottom-40 left-1/3 h-[22rem] w-[22rem] bg-secondary/15 blur-3xl" />
    <PatternTile i={3} size={200} className="top-24 -left-16 hidden opacity-30 xl:block" />

    <Maxwidth className="relative grid items-center gap-12 pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pt-20">
      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:pb-24 lg:text-left">
        <p className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
          <bdi lang="ar" className="mr-2 text-secondary">
            بِسْمِ اللَّٰهِ
          </bdi>
          Now on Google Play
        </p>
        <Heading>
          Your partner in <Accent>spiritual &amp; all-round growth</Accent>
        </Heading>
        <p className="max-w-[34rem] text-lg leading-relaxed text-[#D7DCEC] lg:text-xl">
          Plan your day around your prayers and goals, take a few quiet minutes
          to reflect each evening, and grow with a circle that keeps you
          consistent. No pressure, just support.
        </p>
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <PlayBadge />
          <Link
            href={routes.howItWorks}
            className="font-bold text-white underline decoration-secondary decoration-2 underline-offset-8 hover:text-secondary"
          >
            See how it works
          </Link>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-[22rem] lg:mr-0 lg:max-w-[24rem]">
        <PatternTile i={0} size={150} className="right-[-30px] bottom-24 hidden opacity-90 sm:block" />
        <Image
          src="/illustrations/onboarding-welcome.png"
          alt=""
          width={362}
          height={360}
          className="absolute bottom-24 -left-10 z-20 hidden w-32 sm:block lg:-left-20 lg:w-40"
        />
        <Image
          src="/screens/home.png"
          alt="The Rifaaq home screen: today's tasks on a timeline around the five prayers, with a completion ring and an evening reflection reminder."
          width={720}
          height={1540}
          priority
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 17rem"
          className="relative z-10 -mb-24 h-auto w-full -rotate-2 drop-shadow-[0_30px_40px_rgba(8,14,35,0.35)]"
        />
      </div>
    </Maxwidth>
  </section>
)

export default Hero
