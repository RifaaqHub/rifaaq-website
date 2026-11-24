import Link from 'next/link'

type LogoColor = 'gold' | 'navy' | 'white'

// The SVGs are copied verbatim from mobile/assets/brand; never redraw them.
const LOGO_RATIO = 393 / 139
const MARK_RATIO = 184 / 139

const Logo = ({
  color = 'gold',
  variant = 'full',
  height = 36,
  href = '/',
}: {
  color?: LogoColor
  variant?: 'full' | 'mark'
  height?: number
  href?: string | null
}) => {
  const width = Math.round(height * (variant === 'full' ? LOGO_RATIO : MARK_RATIO))
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/brand/${variant === 'full' ? 'logo' : 'mark'}-${color}.svg`}
      width={width}
      height={height}
      alt="Rifaaq"
      className="block"
    />
  )

  return href ? (
    <Link href={href} aria-label="Rifaaq home" className="inline-flex">
      {img}
    </Link>
  ) : (
    img
  )
}

export default Logo
