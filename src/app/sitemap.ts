import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

const paths = ['', '/about', '/support', '/privacy', '/terms', '/account-deletion']

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(path => ({ url: `${site.url}${path}` }))
}
