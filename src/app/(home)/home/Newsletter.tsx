import Image from 'next/image'
import Link from 'next/link'
import { Heading, Maxwidth, NewsletterForm } from '@/components'
import { routes } from '@/lib/routes'

const Newsletter = () => (
  <section id="newsletter" aria-labelledby="newsletter-title" className="scroll-mt-20 bg-white pt-16 lg:pt-24">
    <Maxwidth>
      <div className="grid items-center gap-8 rounded-[28px] bg-light-gray p-6 sm:p-10 md:grid-cols-[auto_1fr] lg:gap-12 lg:p-12">
        <Image
          src="/illustrations/envelope-heart-letter.png"
          alt=""
          width={365}
          height={326}
          className="mx-auto w-32 md:w-44"
        />
        <div className="flex flex-col gap-4">
          <Heading as="h2" variant="h3" id="newsletter-title">
            Stay in the loop
          </Heading>
          <p className="text-deep-gray">
            Occasional news, new features and reminders worth reading. No spam,
            and you can unsubscribe from any email.{' '}
            <Link href={routes.privacy} className="text-royal underline underline-offset-2">
              Privacy Policy
            </Link>
          </p>
          <NewsletterForm />
        </div>
      </div>
    </Maxwidth>
  </section>
)

export default Newsletter
