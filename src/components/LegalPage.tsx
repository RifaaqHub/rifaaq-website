import { ReactNode } from 'react'
import Maxwidth from './Maxwidth'
import PageHero from './PageHero'
import { Prose } from './Prose'
import { site } from '@/lib/site'

export type LegalSection = { id: string; title: string; body: ReactNode }

const LegalPage = ({
  title,
  intro,
  sections,
}: {
  title: string
  intro: ReactNode
  sections: LegalSection[]
}) => (
  <>
    <PageHero eyebrow={`Last updated ${site.legalLastUpdated}`} title={title} pattern={4} />
    <Maxwidth className="grid gap-10 py-12 lg:grid-cols-[16rem_1fr] lg:gap-14 lg:py-16">
      <nav aria-label="On this page" className="hidden lg:block">
        <div className="sticky top-24">
          <p className="mb-3 text-xs font-bold tracking-wider text-text-subtle uppercase">On this page</p>
          <ol className="flex flex-col gap-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-deep-gray hover:text-royal">
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <Prose>
        <div className="text-lg">{intro}</div>
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2>
              {i + 1}. {s.title}
            </h2>
            {s.body}
          </section>
        ))}
      </Prose>
    </Maxwidth>
  </>
)

export default LegalPage
