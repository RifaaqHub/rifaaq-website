import {
  DiscoverOfferingsButton,
  Heading,
  Maxwidth,
  Paragraph,
} from '@/components'

const Hero = () => {
  return (
    <section tw="bg-primary text-white bg-primary bg-center bg-cover bg-[url(/hero-bg-mobile.png)] lg:(bg-[url(/hero-bg-desktop.png)])">
      <Maxwidth tw="flex flex-col max-w-[52rem] text-center items-center justify-center gap-6 py-[9rem] px-6 lg:(py-[8rem])">
        <Heading>Empower and Evolve with Ease</Heading>

        <Paragraph tw="pb-4">
          Through innovation and compassion, we aspire to be the ultimate
          partner in personal and professional growth, driving positive change
          and creating a brighter future for all.
        </Paragraph>

        <DiscoverOfferingsButton shadow />
      </Maxwidth>
    </section>
  )
}

export default Hero
