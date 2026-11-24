'use client'

import { Button, ButtonLink, Heading, Paragraph } from '@/components'
import { useSearchParams, useRouter } from 'next/navigation'
import { useResubscribe, useUnsubscribe } from './useSubscription'
import { Suspense, useState } from 'react'
import LoadingSvg from '@/components/LoadingSVG'

const Unsubscribe = () => {
  const params = useSearchParams()
  const router = useRouter()
  const [resubscribed, setResubscribed] = useState(false)

  let name = params.get('name')!,
    email = params.get('email')!,
    type = params.get('type')!,
    token = params.get('token')!,
    resolved = params.get('resubscribed')!

  const { isLoading: unsubscribing, isSuccess } = useUnsubscribe(
    {
      name,
      email,
      token,
      type,
    },
    !!resolved,
  )
  const { mutate, isPending: isLoading } = useResubscribe()

  const resubscribe = () => {
    const data = { name, email, type, token }
    if (name && email) {
      mutate(data, {
        onSuccess: () => {
          setResubscribed(true)
          router.replace('/unsubscribe?resubscribed=true')
        },
      })
    }
  }

  let invalidParams = (!email || !name || !type) && !resolved

  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center gap-8 px-6 py-20 text-center">
      {resubscribed || resolved ? (
        <>
          <Heading>Resubscribed</Heading>
          <div className="flex flex-col items-center gap-4">
            <ButtonLink href="/">
              Go to Home Page
            </ButtonLink>
          </div>
        </>
      ) : invalidParams ? (
        <>
          <Heading>Something missing</Heading>
          <div className="flex flex-col items-center gap-4">
            <ButtonLink href="/">
              Go to Home Page
            </ButtonLink>
          </div>
        </>
      ) : (
        <>
          {unsubscribing ? (
            <>
              <Heading>Unsubscribing...</Heading>
              <LoadingSvg />
            </>
          ) : (
            <>
              <Heading>Unsubscribed</Heading>
            </>
          )}

          {isSuccess ? (
            <div className="flex flex-col items-center gap-4">
              <Paragraph>
                If you unsubscribed by mistake, you can resubscribe back
              </Paragraph>
              <Button onClick={resubscribe} disabled={isLoading}>
                Resubscribe
              </Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  )
}

const UnsubscribePage = () => (
  <Suspense fallback={null}>
    <Unsubscribe />
  </Suspense>
)

export default UnsubscribePage
