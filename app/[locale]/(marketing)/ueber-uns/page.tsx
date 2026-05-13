import { getTranslations } from 'next-intl/server'
import { generateMetadata as buildMetadata } from '@/lib/metadata'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return buildMetadata({
    title: t('aboutTitle'),
    description: t('aboutDescription'),
    locale,
    path: '/ueber-uns',
  })
}

export default async function UeberUnsPage() {
  const t = await getTranslations('about')

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h1
          className="font-display text-5xl font-bold tracking-[-0.04em] md:text-6xl"
          style={{
            background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('hero.title')}
        </h1>
        <p className="mt-4 text-lg text-foreground/70">{t('hero.subtitle')}</p>
      </div>

      {/* Story */}
      <section className="grid gap-12 md:grid-cols-2 mb-20">
        <div>
          <h2
            className="font-display text-3xl font-bold tracking-[-0.04em]"
            style={{
              background: 'linear-gradient(90deg, #e2e8f0, #00f0ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('story.title')}
          </h2>
        </div>
        <div className="space-y-4 text-foreground/70 leading-relaxed">
          <p>{t('story.p1')}</p>
          <p>{t('story.p2')}</p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <h2
          className="font-display text-3xl font-bold tracking-[-0.04em] text-center mb-12"
          style={{
            background: 'linear-gradient(90deg, #e2e8f0 0%, #00f0ff 40%, #e2e8f0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('values.title')}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-muted/10 p-6">
            <h3 className="font-display text-xl font-semibold">
              {t('values.tech.title')}
            </h3>
            <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
              {t('values.tech.description')}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/10 p-6">
            <h3 className="font-display text-xl font-semibold">
              {t('values.measurable.title')}
            </h3>
            <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
              {t('values.measurable.description')}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/10 p-6">
            <h3 className="font-display text-xl font-semibold">
              {t('values.partnership.title')}
            </h3>
            <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
              {t('values.partnership.description')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <p className="text-xl font-display font-semibold">{t('cta')}</p>
      </div>
    </div>
  )
}
