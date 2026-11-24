import { ReactNode } from 'react'
import { Heading } from './Heading'
import Maxwidth from './Maxwidth'
import { Blob, PatternTile } from './Decor'

const PageHero = ({
  eyebrow,
  title,
  children,
  pattern = 2,
}: {
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  pattern?: number
}) => (
  <section className="relative overflow-hidden bg-[linear-gradient(160deg,#1A2A55_0%,#22377A_60%,#2A499D_100%)] text-white">
    <Blob className="-top-24 -left-40 h-[28rem] w-[28rem] bg-custom-blue/20" />
    <Blob className="-right-40 -bottom-56 h-[30rem] w-[30rem] bg-secondary/10 blur-3xl" />
    <PatternTile i={pattern} size={160} className="top-10 right-10 hidden opacity-80 md:block" />
    <Maxwidth className="relative flex max-w-[56rem] flex-col items-center gap-5 py-16 text-center md:py-20 lg:py-24">
      {eyebrow ? (
        <p className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-secondary">{eyebrow}</p>
      ) : null}
      <Heading>{title}</Heading>
      {children ? (
        <div className="max-w-[42rem] text-lg leading-relaxed text-[#D7DCEC]">{children}</div>
      ) : null}
    </Maxwidth>
  </section>
)

export default PageHero
