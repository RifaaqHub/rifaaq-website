'use client'

import { Button, Heading, Paragraph } from '@/components'
import { useSearchParams, useRouter } from 'next/navigation'
import { useResubscribe, useUnsubscribe } from './useSubscription'
import { useState } from 'react'
import Link from 'next/link'
import LoadingSvg from '@/components/LoadingSVG'

const Unsubscribe = () => {
  const params = useSearchParams()
  const router = useRouter()
  const [resubscribed, setResubscribed] = useState(false)

  let name = params.get('name')!,
    email = params.get('email')!,
    type = params.get('type')!,
    token = params.get('token')!

  const { isLoading: unsubscribing, isSuccess } = useUnsubscribe({
    name,
    email,
    token,
    type,
  })
  const { mutate, isLoading } = useResubscribe()

  const resubscribe = () => {
    const data = { name, email, type, token }
    if (name && email) {
      mutate(data, {
        onSuccess: () => {
          setResubscribed(true)
          router.replace('/unsubscribe')
        },
      })
    }
  }

  let invalidParams = !email || !name || !type

  return (
    <main tw="flex flex-col gap-8 py-[5rem] items-center w-full min-h-screen h-full ">
      {resubscribed ? (
        <>
          <Heading>Resubscribed</Heading>
          <div tw="flex flex-col items-center gap-4">
            <Button tw="max-w-fit" as={Link} href={'/'}>
              Go to Home Page
            </Button>
          </div>
        </>
      ) : invalidParams ? (
        <>
          <Heading>Something missing</Heading>
          <div tw="flex flex-col items-center gap-4">
            <Button tw="max-w-fit" as={Link} href={'/'}>
              Go to Home Page
            </Button>
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
            <div tw="flex flex-col gap-4">
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
    </main>
  )
}

export default Unsubscribe
