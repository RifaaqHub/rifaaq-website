import { Maxwidth, PatternTile } from '@/components'

const VerseBand = () => (
  <section className="relative overflow-hidden bg-secondary">
    <PatternTile i={2} size={220} className="-top-10 -left-16 hidden opacity-90 md:block" />
    <PatternTile i={4} size={180} className="-right-10 -bottom-12 hidden opacity-90 md:block" />
    <Maxwidth className="relative py-14 text-center lg:py-20">
      <figure className="mx-auto max-w-[44rem]">
        <blockquote className="text-2xl leading-snug font-bold text-primary md:text-[2rem]">
          &ldquo;Let every soul look to what it has put forth for tomorrow.&rdquo;
        </blockquote>
        <figcaption className="mt-4 font-medium text-primary/80">Al-Hashr 59:18</figcaption>
      </figure>
    </Maxwidth>
  </section>
)

export default VerseBand
