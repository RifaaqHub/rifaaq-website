import { cn } from '@/lib/cn'

// Decorative pattern tiles and soft blobs from the app's store artwork.
export const PatternTile = ({
  i,
  size,
  className,
}: {
  i: number
  size: number
  className?: string
}) => (
  <div
    aria-hidden
    className={cn('pointer-events-none absolute select-none bg-cover', className)}
    style={{
      width: size,
      height: size,
      borderRadius: size * 0.12,
      backgroundImage: `url(/patterns/${i}.png)`,
    }}
  />
)

export const Blob = ({ className }: { className?: string }) => (
  <div aria-hidden className={cn('pointer-events-none absolute rounded-full', className)} />
)
