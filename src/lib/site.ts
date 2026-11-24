// Values marked as placeholders must be filled in before launch.
export const site = {
  name: 'Rifaaq',
  url: 'https://rifaaq.com',
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=com.rifaaq.app',
  /** Placeholder: public support/privacy contact address. */
  contactEmail: '[contact email]',
  /** Placeholder: the registered legal entity that operates Rifaaq. */
  legalEntity: '[legal entity name]',
  /** Placeholder: registered business address. */
  address: '[registered address]',
  /** Placeholder: governing-law jurisdiction for the Terms. */
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
