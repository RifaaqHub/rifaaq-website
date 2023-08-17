import { DiscoverOfferingsButton } from './Button'
import Logo from './Logo'
import Maxwidth from './Maxwidth'

const Header = () => {
  return (
    <header>
      <Maxwidth tw="flex items-center bg-white py-2 px-6 justify-start md:(justify-between py-6) lg:(py-8 px-[6.25rem])">
        <Logo />

        <DiscoverOfferingsButton tw="hidden md:(block)" />
      </Maxwidth>
    </header>
  )
}

export default Header
