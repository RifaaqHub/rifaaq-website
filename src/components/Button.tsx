import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'secondary' | 'primary' | 'outline' | 'ghost'
type Size = 'md' | 'sm'

const variants: Record<Variant, string> = {
  secondary: 'bg-secondary text-primary hover:bg-[#ffd95f]',
  primary: 'bg-primary text-white hover:bg-royal',
  outline: 'border border-secondary bg-white text-primary hover:bg-light-gray',
  ghost: 'bg-surface text-primary hover:bg-light-blue',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3.5 text-base',
  sm: 'px-4 py-2.5 text-sm',
}

export const buttonClass = (variant: Variant = 'secondary', size: Size = 'md') =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-[14px] text-center font-bold transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
    sizes[size],
    variants[variant],
  )

type StyleProps = { variant?: Variant; size?: Size }

const Button = ({
  variant,
  size,
  className,
  type = 'button',
  ...props
}: StyleProps & ComponentPropsWithoutRef<'button'>) => (
  <button type={type} className={cn(buttonClass(variant, size), className)} {...props} />
)

export const ButtonLink = ({
  variant,
  size,
  className,
  ...props
}: StyleProps & ComponentPropsWithoutRef<typeof Link>) => (
  <Link className={cn(buttonClass(variant, size), className)} {...props} />
)

export default Button
