'use client'
import { Heading, Logo, Maxwidth } from '@/components'
import useCountdown from '@/hooks/useCountdown'

const RootPage = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date('2023-08-20T00:00:00'),
  )

  return (
    <section tw="bg-primary text-white h-screen bg-center bg-cover bg-[url(/hero-bg-mobile.png)] lg:(bg-[url(/hero-bg-desktop.png)])">
      <Maxwidth tw="flex flex-col h-full max-w-[53rem] text-center items-center justify-center gap-6 py-[9rem] px-6 lg:(py-[8rem])">
        <Logo $lightBg={false} />

        <Heading>We're Coming!</Heading>

        <Heading $variant="h3" as={'p'}>
          {`${days} Days - ${hours} Hours - ${minutes} Minutes - ${seconds} Seconds`}
        </Heading>
      </Maxwidth>
    </section>
  )
}

export default RootPage
