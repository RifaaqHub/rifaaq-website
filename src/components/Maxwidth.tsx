import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

const Maxwidth = ({ className, ...props }: ComponentPropsWithoutRef<'div'>) => (
  <div className={cn('mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8', className)} {...props} />
)

export default Maxwidth
