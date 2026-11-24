import { ButtonLink, Heading, HomeLayoutProvider, Paragraph } from '@/components'

const NotFound = () => (
  <HomeLayoutProvider>
    <div className="mx-auto flex max-w-[36rem] flex-col items-center gap-6 px-6 py-20 text-center lg:py-32">
      <Heading>Page not found</Heading>
      <Paragraph className="text-deep-gray">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </Paragraph>
      <ButtonLink href="/">Back to home</ButtonLink>
    </div>
  </HomeLayoutProvider>
)

export default NotFound
