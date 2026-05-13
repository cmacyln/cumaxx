import { getTranslations } from 'next-intl/server'
import { HeroSection } from '@/components/sections/hero-section'
import { TrustBar } from '@/components/sections/trust-bar'
import { ServicesBento } from '@/components/sections/services-bento'
import { SelectedWork } from '@/components/sections/selected-work'
import { ProcessSection } from '@/components/sections/process-section'
import { AboutTeaser } from '@/components/sections/about-teaser'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return buildMetadata({
    title: t('homeTitle'),
    description: t('homeDescription'),
    locale,
    path: '',
  })
}

export default async function HomePage() {
  const t = await getTranslations('home')
  const tc = await getTranslations('common')

  const services = [
    {
      title: t('services.webdesign.title'),
      description: t('services.webdesign.description'),
    },
    {
      title: t('services.ki.title'),
      description: t('services.ki.description'),
    },
    {
      title: t('services.automation.title'),
      description: t('services.automation.description'),
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
    },
  ]

  const works = [
    {
      number: '01',
      title: 'Greenleaf Naturkosmetik',
      category: 'Shopify Store',
      slug: 'greenleaf-naturkosmetik',
    },
    {
      number: '02',
      title: 'InnoTech SaaS Dashboard',
      category: 'Web App',
      slug: 'innotech-dashboard',
    },
    {
      number: '03',
      title: 'MedTech Solutions Platform',
      category: 'WordPress + Custom API',
      slug: 'medtech-platform',
    },
    {
      number: '04',
      title: 'Craftwerk Automation',
      category: 'n8n Workflow',
      slug: 'craftwerk-automation',
    },
  ]

  const processSteps = [
    {
      number: t('process.step1.number'),
      title: t('process.step1.title'),
      description: t('process.step1.description'),
    },
    {
      number: t('process.step2.number'),
      title: t('process.step2.title'),
      description: t('process.step2.description'),
    },
    {
      number: t('process.step3.number'),
      title: t('process.step3.title'),
      description: t('process.step3.description'),
    },
    {
      number: t('process.step4.number'),
      title: t('process.step4.title'),
      description: t('process.step4.description'),
    },
  ]

  return (
    <>
      <HeroSection
        kicker={t('hero.kicker')}
        prefix={t('hero.prefix')}
        accentWord={t('hero.accentWord')}
        subhead={t('hero.subhead')}
        availability={t('hero.availability')}
        ctaPrimary={t('hero.ctaPrimary')}
        ctaSecondary={t('hero.ctaSecondary')}
      />
      <TrustBar label={t('trustBar.label')} />
      <ServicesBento
        title={t('services.title')}
        services={services}
        moreLabel={t('services.more')}
      />
      <SelectedWork
        title={t('work.title')}
        works={works}
        allProjectsLabel={tc('allProjects')}
      />
      <ProcessSection title={t('process.title')} steps={processSteps} />
      <AboutTeaser
        title={t('about.title')}
        description={t('about.description')}
        cta={t('about.cta')}
      />
      <TestimonialsSection title={t('testimonials.title')} />
      <CTASection
        headline={t('cta.headline')}
        subhead={t('cta.subhead')}
        button={t('cta.button')}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
    </>
  )
}
