import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Maxwidth } from '@/components'
import UnsubscribeStatus from './UnsubscribeStatus'

export const metadata: Metadata = {
  title: 'Unsubscribe',
  robots: { index: false },
}

const UnsubscribePage = () => (
  <section className="flex min-h-[70vh] items-center bg-light-gray py-16 lg:py-24">
    <Maxwidth className="max-w-[40rem]">
      <div className="rounded-[28px] bg-white p-8 text-center shadow-[0_10px_30px_rgba(26,42,85,0.06)] sm:p-12">
        <Suspense fallback={null}>
          <UnsubscribeStatus />
        </Suspense>
      </div>
    </Maxwidth>
  </section>
)

export default UnsubscribePage
