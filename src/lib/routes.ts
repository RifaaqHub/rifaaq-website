export const routes = {
  home: '/',
  features: '/#features',
  howItWorks: '/#how-it-works',
  faq: '/#faq',
  newsletter: '/#newsletter',
  unsubscribe: '/unsubscribe',
  about: '/about',
  support: '/support',
  privacy: '/privacy',
  terms: '/terms',
  accountDeletion: '/account-deletion',
}

export const socials = {
  twitter: 'https://twitter.com/rifaaqhq',
  facebook: 'https://facebook.com/rifaaqhq',
  linkedIn: 'https://www.linkedin.com/company/rifaaq',
}

export const headerLinks = [
  { title: 'Features', href: routes.features },
  { title: 'How it works', href: routes.howItWorks },
  { title: 'About', href: routes.about },
  { title: 'Support', href: routes.support },
]

export const footerColumns = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: routes.features },
      { title: 'How it works', href: routes.howItWorks },
      { title: 'FAQ', href: routes.faq },
      { title: 'Newsletter', href: routes.newsletter },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: routes.about },
      { title: 'Support', href: routes.support },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: routes.privacy },
      { title: 'Terms of Service', href: routes.terms },
      { title: 'Account Deletion', href: routes.accountDeletion },
    ],
  },
]
