'use client'
import { Heading, Logo, Maxwidth } from '@/components'
import useCountdown from '@/hooks/useCountdown'
import { zonedTimeToUtc } from 'date-fns-tz'

const CountDown = () => {
  const targetTimeZone = 'Africa/Lagos' // WAT is Africa/Lagos time zone
  const watDateTime = zonedTimeToUtc(
    new Date(2023, 7, 20, 17, 0, 0),
    targetTimeZone,
  )
  const { days, hours, minutes, seconds } = useCountdown(watDateTime)

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

export default CountDown
