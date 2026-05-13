import type { Metadata } from 'next'

interface BuildMetadataParams {
  title: string
  description: string
  locale: string
  path: string
  ogImage?: string
}

export function generateMetadata({
  title,
  description,
  locale,
  path,
  ogImage,
}: BuildMetadataParams): Metadata {
  const baseUrl = 'https://cumaxx.de'

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    other: {
      google: 'notranslate',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        de: `${baseUrl}/de${path}`,
        en: `${baseUrl}/en${path}`,
        tr: `${baseUrl}/tr${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}${path}`,
      siteName: 'Cumaxx',
      locale: locale === 'de' ? 'de_DE' : locale === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [{ url: ogImage || '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || '/opengraph-image'],
    },
  }
}
