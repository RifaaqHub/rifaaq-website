import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

// Long-form legal/support copy; styles plain HTML children.
export const proseClass = cn(
  'flex max-w-[46rem] flex-col gap-8 leading-relaxed text-deep-gray',
  '[&_h2]:mb-3 [&_h2]:text-[1.5rem] [&_h2]:leading-tight [&_h2]:font-bold [&_h2]:text-primary',
  '[&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-primary',
  '[&_p]:mb-3',
  '[&_ul]:mb-3 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1.5 [&_ul]:pl-6',
  '[&_ol]:mb-3 [&_ol]:flex [&_ol]:list-decimal [&_ol]:flex-col [&_ol]:gap-1.5 [&_ol]:pl-6',
  '[&_a]:text-royal [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary',
  '[&_strong]:text-primary',
)

export const Prose = ({ className, ...props }: ComponentPropsWithoutRef<'article'>) => (
  <article className={cn(proseClass, className)} {...props} />
)

export const Callout = ({ className, ...props }: ComponentPropsWithoutRef<'div'>) => (
  <div
    className={cn('my-2 rounded-2xl border border-[#cdd8fb] bg-light-blue p-5 text-primary [&_p:last-child]:mb-0', className)}
    {...props}
  />
)
