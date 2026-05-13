import { getTranslations } from 'next-intl/server'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { Link } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return buildMetadata({
    title: t('servicesTitle'),
    description: t('servicesDescription'),
    locale,
    path: '/leistungen',
  })
}

export default async function LeistungenPage() {
  const t = await getTranslations('services')

  const serviceKeys = ['webdesign', 'ki', 'automation', 'consulting'] as const

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
          {t('hero.title')}
        </h1>
        <p className="mt-4 text-lg text-foreground/70">{t('hero.subtitle')}</p>
      </div>

      {serviceKeys.map((key, i) => (
        <section
          key={key}
          className={`py-16 ${i % 2 === 1 ? 'bg-muted/20 -mx-6 px-6' : ''} rounded-xl`}
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2
                className="font-display text-3xl font-bold tracking-[-0.04em]"
                style={{
                  background: 'linear-gradient(90deg, #e2e8f0, #00f0ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t(`detail.${key}.title`)}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-lg">
                {t(`detail.${key}.description`)}
              </p>
            </div>
            <ul className="space-y-2 md:pl-8">
              {(t.raw(`detail.${key}.items`) as string[]).map((item: string, j: number) => (
                <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="mt-24">
        <div className="text-center mb-12">
          <h2
            className="font-display text-4xl font-bold tracking-[-0.04em]"
            style={{
              background: 'linear-gradient(90deg, #e2e8f0 0%, #00f0ff 40%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('packages.title')}
          </h2>
          <p className="mt-4 text-lg text-foreground/70">{t('packages.subtitle')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {(['starter', 'growth', 'enterprise'] as const).map((pkg) => (
            <div
              key={pkg}
              className={`relative rounded-xl border p-6 ${
                pkg === 'growth'
                  ? 'border-accent bg-accent/5'
                  : 'border-border bg-muted/10'
              }`}
            >
              {pkg === 'growth' && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-medium text-accent-foreground">
                  {t(`packages.${pkg}.popular`)}
                </span>
              )}
              <h3 className="font-display text-2xl font-bold mt-2">
                {t(`packages.${pkg}.name`)}
              </h3>
              <p className="mt-1 text-xs text-foreground/50">
                {t(`packages.${pkg}.for`)}
              </p>
              <ul className="mt-6 space-y-2">
                {(t.raw(`packages.${pkg}.features`) as string[]).map((feat: string, j: number) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-20 text-center">
        <p className="text-xl font-display font-semibold">{t('cta')}</p>
        <Link
          href="/kontakt"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90"
        >
          Projekt starten →
        </Link>
      </div>
    </div>
  )
}
