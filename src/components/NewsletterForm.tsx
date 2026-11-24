'use client'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { FiCheckCircle } from 'react-icons/fi'
import { cn } from '@/lib/cn'
import { subscribeNewsletter, type NewsletterSubscribeInput } from '@/lib/api'
import Button from './Button'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const inputClass =
  'w-full rounded-[14px] border border-[#c9cdd8] bg-white px-4 py-3 text-primary placeholder:text-text-subtle focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/30'

const NewsletterForm = ({ idPrefix = 'newsletter' }: { idPrefix?: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterSubscribeInput>({ defaultValues: { email: '', name: '' } })
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationKey: ['newsletter-subscribe'],
    mutationFn: subscribeNewsletter,
    onSuccess: () => reset(),
  })

  if (isSuccess) {
    return (
      <p role="status" className="flex items-start gap-3 rounded-2xl bg-white p-5 text-primary">
        <FiCheckCircle aria-hidden size={22} className="mt-0.5 flex-none text-custom-green" />
        <span>
          <strong>Jazakallahu khayran!</strong> You&apos;re on the list. We&apos;ll be
          in touch with Rifaaq news and updates.
        </span>
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(data => mutate(data))}
      noValidate
      className="flex flex-col gap-3"
      aria-describedby={isError ? `${idPrefix}-error` : undefined}
    >
      <div className="grid gap-3 sm:grid-cols-[1fr_1.4fr]">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="sr-only">
            First name (optional)
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            autoComplete="given-name"
            maxLength={120}
            placeholder="First name (optional)"
            className={inputClass}
            {...register('name')}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            autoComplete="email"
            placeholder="Email address"
            aria-invalid={errors.email ? 'true' : 'false'}
            className={cn(inputClass, errors.email && 'border-custom-orange')}
            {...register('email', { required: true, pattern: emailPattern })}
          />
        </div>
      </div>
      {errors.email ? (
        <p className="text-sm text-custom-orange">Enter a valid email address.</p>
      ) : null}
      {isError ? (
        <p id={`${idPrefix}-error`} role="alert" className="text-sm text-custom-orange">
          Something went wrong. Please try again in a minute.
        </p>
      ) : null}
      <Button type="submit" disabled={isPending} className="self-start">
        {isPending ? 'Subscribing…' : 'Subscribe'}
      </Button>
    </form>
  )
}

export default NewsletterForm
