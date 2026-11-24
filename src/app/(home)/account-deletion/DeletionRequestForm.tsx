'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components'
import { cn } from '@/lib/cn'
import type { AccountDeletionRequestInput } from '@/lib/api'
import { site } from '@/lib/site'
import useRequestAccountDeletion from './useRequestAccountDeletion'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const fieldClass =
  'w-full rounded-[14px] border border-[#c9cdd8] bg-white px-4 py-3 text-primary placeholder:text-text-subtle focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/30'

const DeletionRequestForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AccountDeletionRequestInput & { confirm: boolean }>({
    defaultValues: { email: '', reason: '', confirm: false },
  })
  const { mutate, isPending, isSuccess } = useRequestAccountDeletion()

  const onSubmit = ({ email, reason }: AccountDeletionRequestInput) => {
    mutate({ email, reason }, { onSuccess: () => reset() })
  }

  if (isSuccess) {
    return (
      <div role="status" className="rounded-2xl border border-custom-green/40 bg-[#e9f8ef] p-5 text-primary">
        <p className="font-bold">Your request has been received.</p>
        <p className="mt-1">
          We will verify it against the email address on the account and
          complete the deletion within {site.deletionRequestDays} days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex max-w-[32rem] flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="deletion-email" className="font-bold text-primary">
          Account email
        </label>
        <input
          id="deletion-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'deletion-email-error' : undefined}
          className={cn(fieldClass, errors.email && 'border-custom-orange')}
          {...register('email', { required: true, pattern: emailPattern })}
        />
        {errors.email ? (
          <p id="deletion-email-error" className="text-sm text-custom-orange">
            Enter the email address you signed up with.
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="deletion-reason" className="font-bold text-primary">
          Reason <span className="font-normal text-text-subtle">(optional)</span>
        </label>
        <textarea
          id="deletion-reason"
          rows={4}
          maxLength={1000}
          placeholder="Anything you would like us to know"
          className={fieldClass}
          {...register('reason')}
        />
      </div>

      <label className="flex items-start gap-3 text-deep-gray">
        <input
          type="checkbox"
          className="mt-1 h-5 w-5 flex-none accent-primary"
          aria-invalid={errors.confirm ? 'true' : 'false'}
          {...register('confirm', { required: true })}
        />
        <span>
          I understand that deleting my account permanently erases my data and
          cannot be undone.
        </span>
      </label>
      {errors.confirm ? (
        <p className="-mt-3 text-sm text-custom-orange">Please confirm to continue.</p>
      ) : null}

      <Button type="submit" variant="primary" disabled={isPending} className="self-start">
        {isPending ? 'Submitting…' : 'Request account deletion'}
      </Button>
    </form>
  )
}

export default DeletionRequestForm
