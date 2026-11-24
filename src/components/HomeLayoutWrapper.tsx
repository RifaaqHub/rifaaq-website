import Header from './Header'
import Footer from './Footer'

const HomeLayoutProvider = ({ children }: { children: React.ReactNode }) => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary"
    >
      Skip to content
    </a>
    <Header />
    <main id="main" className="min-h-[70vh]">
      {children}
    </main>
    <Footer />
  </>
)

export default HomeLayoutProvider
