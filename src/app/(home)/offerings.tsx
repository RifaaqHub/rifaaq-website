import { Heading, Maxwidth } from '@/components'
import AccoRifaaq from './offerings/acco'

const Offerings = () => {
  return (
    <section id="offerings">
      <Maxwidth tw="py-20 px-6 md:(px-16) border-b-2 lg:(flex-row items-center p-[6.25rem])">
        <Heading $variant="h2" as={'h2'} tw="text-primary pb-10 lg:(pb-12)">
          What we offer
        </Heading>

        <div tw="flex flex-col gap-6 lg:(gap-7)">
          <AccoRifaaq />

          <div tw="bg-[url(/offerings/hub.png)] bg-center bg-cover rounded-[2rem] w-full aspect-[2/3] max-h-[36rem] lg:(bg-[url(/offerings/hub-lg.png)] h-[27rem])" />
        </div>
      </Maxwidth>
    </section>
  )
}

export default Offerings
