// Public business details shown on the legal and support pages.
export const site = {
  name: 'Rifaaq',
  url: 'https://rifaaq.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rifaaq.app',
  contactEmail: 'hello@rifaaq.com',
  legalEntity: 'Rifaaq Ltd',
  address: 'Kajola Area, ile ise awo, Abeokuta, Ogun State, Nigeria',
  jurisdiction: 'the Federal Republic of Nigeria',
  legalLastUpdated: '24 November 2026',
  /** How long manual web deletion requests may take to process. */
  deletionRequestDays: 30,
  /** How long residual copies may persist in backups after deletion. */
  backupRetentionDays: 30,
}

export const apiBaseUrl = (
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.rifaaq.com'
).replace(/\/$/, '')

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value)
