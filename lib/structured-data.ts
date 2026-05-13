export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Cumaxx',
    description: 'Digitale Produkte, die wirken — Webentwicklung, E-Commerce und Automatisierung aus Potsdam.',
    url: 'https://cumaxx.de',
    logo: 'https://cumaxx.de/images/og-default.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Potsdam',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@cumaxx.de',
      contactType: 'customer service',
    },
    founder: {
      '@type': 'Person',
      name: 'Cuma Ceylan',
      jobTitle: 'Full-Stack Developer',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://cumaxx.de',
    name: 'Cumaxx',
    inLanguage: ['de', 'en', 'tr'],
    description: 'Digitale Produkte, die wirken — Webentwicklung, E-Commerce und Automatisierung aus Potsdam.',
  }
}

export function articleSchema(title: string, date: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    url,
    publisher: { '@type': 'Organization', name: 'Cumaxx' },
  }
}

export function breadcrumbListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
