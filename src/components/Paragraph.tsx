import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

const Paragraph = ({ className, ...props }: ComponentPropsWithoutRef<'p'>) => (
  <p className={cn('text-base leading-relaxed lg:text-lg', className)} {...props} />
)

export default Paragraph
