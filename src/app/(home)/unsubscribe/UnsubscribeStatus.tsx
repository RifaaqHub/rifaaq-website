'use client'

import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { Button, ButtonLink, Heading, Paragraph } from '@/components'
import LoadingSvg from '@/components/LoadingSVG'
import { unsubscribeNewsletter } from '@/lib/api'
import { routes } from '@/lib/routes'

const TOKEN_PATTERN = /^[0-9a-f]{64}$/i

const UnsubscribeStatus = () => {
  const token = useSearchParams().get('token')?.trim() ?? ''
  const validToken = TOKEN_PATTERN.test(token)
  const { mutate, isSuccess, isError } = useMutation({
    mutationKey: ['newsletter-unsubscribe'],
    mutationFn: unsubscribeNewsletter,
  })
  const sent = useRef(false)

  // Guarded so React's dev double-invoked effects don't post the token twice.
  useEffect(() => {
    if (!validToken || sent.current) return
    sent.current = true
    mutate(token)
  }, [mutate, token, validToken])

  if (!validToken) {
    return (
      <Status
        title="This link looks incomplete"
        body="We couldn’t read the unsubscribe link. Please use the link from the bottom of our latest email, or contact Support and we’ll remove you."
        action={<ButtonLink href={routes.support}>Contact Support</ButtonLink>}
      />
    )
  }

  if (isError) {
    return (
      <Status
        title="Something went wrong"
        body="We couldn’t complete your request just now. Please try again in a minute."
        action={<Button onClick={() => mutate(token)}>Try again</Button>}
      />
    )
  }

  if (isSuccess) {
    return (
      <Status
        title="You’ve been unsubscribed"
        body="You won’t receive Rifaaq newsletter emails any more. We’re sorry to see you go."
        action={
          <div className="flex flex-col items-center gap-3">
            <p className="text-deep-gray">Changed your mind?</p>
            <ButtonLink href={routes.newsletter} variant="outline">
              Resubscribe
            </ButtonLink>
          </div>
        }
      />
    )
  }

  return (
    <div role="status" className="flex flex-col items-center gap-4">
      <LoadingSvg className="h-10 w-10" />
      <Paragraph className="text-deep-gray">Unsubscribing…</Paragraph>
    </div>
  )
}

const Status = ({ title, body, action }: { title: string; body: string; action: React.ReactNode }) => (
  <div role="status" className="flex flex-col items-center gap-5">
    <Heading variant="h3">{title}</Heading>
    <Paragraph className="text-deep-gray">{body}</Paragraph>
    {action}
  </div>
)

export default UnsubscribeStatus
