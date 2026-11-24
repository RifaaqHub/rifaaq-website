import { isPlaceholder, site } from '@/lib/site'

const ContactEmail = () =>
  isPlaceholder(site.contactEmail) ? (
    <mark className="rounded bg-secondary/40 px-1 text-primary">{site.contactEmail}</mark>
  ) : (
    <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
  )

export default ContactEmail
