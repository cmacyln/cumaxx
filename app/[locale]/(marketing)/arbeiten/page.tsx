import { getTranslations } from 'next-intl/server'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { WorkGrid } from './work-grid'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return buildMetadata({
    title: t('workTitle'),
    description: t('workDescription'),
    locale,
    path: '/arbeiten',
  })
}

const projects = [
  {
    number: '01',
    title: 'Greenleaf Naturkosmetik',
    category: 'Shopify Store',
    slug: 'greenleaf-naturkosmetik',
    tags: ['ecommerce'],
  },
  {
    number: '02',
    title: 'InnoTech SaaS Dashboard',
    category: 'Web App',
    slug: 'innotech-dashboard',
    tags: ['webdesign'],
  },
  {
    number: '03',
    title: 'MedTech Solutions Platform',
    category: 'WordPress + Custom API',
    slug: 'medtech-platform',
    tags: ['webdesign'],
  },
  {
    number: '04',
    title: 'Craftwerk Automation',
    category: 'n8n Workflow',
    slug: 'craftwerk-automation',
    tags: ['automation'],
  },
]

export default async function ArbeitenPage() {
  const t = await getTranslations('work')

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h1
          className="font-display text-5xl font-bold tracking-[-0.04em] md:text-6xl"
          style={{
            background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-foreground/70">{t('subtitle')}</p>
      </div>

      <WorkGrid projects={projects} />
    </div>
  )
}
