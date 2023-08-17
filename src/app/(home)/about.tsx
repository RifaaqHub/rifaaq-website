import { Heading, Maxwidth, Paragraph } from '@/components'
import Image from 'next/image'
import quote from 'public/quote.svg'
import tw from 'twin.macro'

const About = () => {
  const { vision, mission, distinction } = about
  return (
    <section id="about">
      {[vision, mission, distinction].map(section => {
        let isMission = section === mission,
          isDistinction = section === distinction

        return (
          <section
            key={section.title}
            css={[tw`bg-white`, isMission && tw`bg-[#EFF1F9]`]}
          >
            <Maxwidth
              css={[
                tw`flex flex-col gap-[4.65rem] py-20 px-6 md:(px-16) lg:(flex-row items-center px-[6.25rem])`,
                isMission && tw`lg:(flex-row-reverse)`,
              ]}
            >
              <div tw="flex-1 max-w-[700px]">
                {isDistinction ? <Image alt="" src={quote} tw="mb-10" /> : null}
                <Heading
                  tw="pb-4 text-primary"
                  as={'h2'}
                  $variant={isDistinction ? 'h3' : 'h2'}
                  css={[isDistinction && tw`text-[#212121] pb-7 lg:(pb-10)`]}
                >
                  {section.title}
                </Heading>
                {section.text ? <Paragraph>{section.text}</Paragraph> : null}
              </div>

              <div
                tw="relative h-[18.5rem] bg-contain bg-no-repeat w-full max-w-[21rem] mx-auto lg:(max-w-[28.5rem] h-[27.5rem])"
                css={{ backgroundImage: `url(${section.img})` }}
              />
            </Maxwidth>
          </section>
        )
      })}
    </section>
  )
}

const about = {
  mission: {
    title: 'Our Vision',
    text: 'To be a leading and trusted brand that enriches lives and businesses, inspiring prosperity, and fostering lasting connections. Rifaaq envisions a world where simplicity and ease are the cornerstones of progress, where trust is the foundation of every relationship, and where unwavering support fuels the success of individuals and enterprises alike.',
    img: '/mission.png',
  },
  vision: {
    title: 'Our Mision',
    text: 'At Rifaaq, we strive to simplify and elevate lives by providing accessible and reliable solutions. Through our diverse offerings, we empower individuals and businesses to grow, fostering competence and becoming dependable companions for their needs. Our commitment to simplicity, ease, trust, and unwavering support drives us to create a positive impact, nurturing a community built on shared values and mutual growth.',
    img: '/vision.png',
  },
  distinction: {
    title:
      'In the tapestry of progress, simplicity and support weave the brightest threads.',
    text: '',
    img: '/distinction.png',
  },
}

export default About
