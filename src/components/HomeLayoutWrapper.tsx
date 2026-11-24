import Header from './Header'
import Footer from './footer'

const HomeLayoutProvider = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default HomeLayoutProvider
