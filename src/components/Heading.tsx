import { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/lib/cn'

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4'

const variants: Record<HeadingVariant, string> = {
  h1: 'text-[2.25rem] leading-[2.6rem] sm:text-[3rem] sm:leading-[3.4rem] lg:text-[3.75rem] lg:leading-[4.1rem]',
  h2: 'text-[1.875rem] leading-[2.3rem] md:text-[2.5rem] md:leading-[2.9rem]',
  h3: 'text-[1.5rem] leading-[2rem] md:text-[1.75rem] md:leading-[2.3rem]',
  h4: 'text-[1.2rem] leading-[1.6rem] md:text-[1.35rem] md:leading-[1.8rem]',
}

type HeadingProps = ComponentPropsWithoutRef<'h1'> & {
  as?: ElementType
  variant?: HeadingVariant
}

export const Heading = ({ as, variant = 'h1', className, ...props }: HeadingProps) => {
  const Tag = as ?? variant
  return (
    <Tag className={cn('font-bold tracking-[-0.01em]', variants[variant], className)} {...props} />
  )
}

export const Accent = ({ className, ...props }: ComponentPropsWithoutRef<'em'>) => (
  <em className={cn('not-italic text-secondary', className)} {...props} />
)
