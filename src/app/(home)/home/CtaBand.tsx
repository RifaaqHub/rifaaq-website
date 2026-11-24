import Image from 'next/image'
import { Accent, Blob, Heading, Maxwidth, PlayBadge } from '@/components'

const CtaBand = ({ title }: { title?: React.ReactNode }) => (
  <section className="bg-white px-4 py-14 sm:px-6 lg:py-20">
    <Maxwidth className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,#1A2A55_0%,#2A499D_100%)] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
      <Blob className="-top-24 -right-24 h-[22rem] w-[22rem] bg-custom-blue/20" />
      <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <Heading as="h2" variant="h2">
            {title ?? (
              <>
                Build consistency <Accent>that lasts</Accent>
              </>
            )}
          </Heading>
          <p className="max-w-[32rem] text-lg text-[#D7DCEC]">
            Small, steady steps, with a partner by your side. Start today,
            bi idhnillah.
          </p>
          <PlayBadge />
        </div>
        <Image
          src="/illustrations/onboarding-consistency.png"
          alt=""
          width={400}
          height={332}
          className="mx-auto hidden w-56 md:block lg:w-72"
        />
      </div>
    </Maxwidth>
  </section>
)

export default CtaBand
