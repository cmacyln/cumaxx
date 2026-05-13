import { getTranslations } from 'next-intl/server'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { ContactForm } from '@/components/sections/contact-form'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return buildMetadata({
    title: t('contactTitle'),
    description: t('contactDescription'),
    locale,
    path: '/kontakt',
  })
}

export default async function KontaktPage() {
  const t = await getTranslations('contact')

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

      <div className="grid gap-12 md:grid-cols-5">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl font-bold tracking-[-0.04em]">
            {t('info.title')}
          </h2>
          <div className="mt-6 space-y-4 text-sm text-foreground/70">
            <div>
              <p className="text-xs text-foreground/40 uppercase tracking-wider">Email</p>
              <a href="mailto:info@cumaxx.de" className="hover:text-accent transition-colors">
                {t('info.email')}
              </a>
            </div>
            <div>
              <p className="text-xs text-foreground/40 uppercase tracking-wider">Telefon</p>
              <a href="tel:+4933190143972" className="hover:text-accent transition-colors">
                {t('info.phone')}
              </a>
            </div>
            <div>
              <p className="text-xs text-foreground/40 uppercase tracking-wider">Adresse</p>
              <p>{t('info.address')}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
