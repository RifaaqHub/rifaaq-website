import Image from 'next/image'
import lightLogo from 'public/logo-light-bg.png'
import darkLogo from 'public/logo-dark-bg.png'

const Logo = ({ lightBg = true }: { lightBg?: boolean }) => (
  <Image
    className="h-auto max-w-[113px] md:max-w-[150px] lg:max-w-[187px]"
    src={lightBg ? lightLogo : darkLogo}
    alt="Rifaaq"
  />
)

export default Logo
