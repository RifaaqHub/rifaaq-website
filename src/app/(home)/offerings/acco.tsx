import { Button, Heading, Paragraph } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import acco from 'public/offerings/acco.png'

const AccoRifaaq = () => {
  return (
    <div tw="bg-[#2B2D30] rounded-[2rem] py-[3.5rem] px-5 md:(px-10 py-14) lg:(px-16 py-[4.5rem])">
      <Heading $variant="h3" as={'h3'} tw="text-secondary pb-10 lg:(pb-4)">
        Acco-Rifaaq
      </Heading>

      <div tw="flex flex-col gap-4 lg:(flex-row-reverse justify-between items-center)">
        <Image src={acco} alt="acco-rifaaq" tw="mx-auto h-full" />

        <div tw="text-white">
          <Paragraph tw="pb-8 lg:(pb-10 max-w-[34.25rem])">
            Acco-rifaaq is an innovative Islamic productivity app that merges
            modern technology with Islamic principles, offering a holistic
            platform for users to enhance their productivity and spiritual
            growth. Beyond effective time management and deepening faith
            connections, the app introduces a distinctive feature of
            accountability partnerships. These partnerships create a supportive
            community where users mutually engage in personal development and
            spiritual enrichment, enriching the app's structured approach to
            productivity and fostering collective growth.
          </Paragraph>

          <div tw="flex flex-col">
            <Heading
              as="p"
              tw="text-[1.375rem] md:(text-[1.5rem]) lg:(text-[1.75rem])"
            >
              Key features
            </Heading>
            <ol tw="pb-3">
              <Paragraph tw="text-secondary">Currently available</Paragraph>
              {available.map((feature, index) => (
                <li>
                  {index + 1}. {feature}
                </li>
              ))}
            </ol>

            <ol tw="pb-10 lg:(pb-12)">
              <Paragraph tw="text-[#95B2FF]">Upcoming features</Paragraph>
              {upcoming.map((feature, index) => (
                <li>
                  {available.length + 1 + index}. {feature}
                </li>
              ))}
            </ol>

            <Button
              tw="max-w-[17.185rem] text-center"
              as={Link}
              href={'acco.rifaaq.com'}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const available = [
  'Creating weekly tasks with simple starter templates',
  'Providing periodic progress analytics',
]
const upcoming = [
  'Accountability partnerships',
  'A tailored AI companion rooted in Islamic knowledge',
]

export default AccoRifaaq
