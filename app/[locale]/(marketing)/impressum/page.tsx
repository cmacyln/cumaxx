import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return {
    title: t('impressumTitle'),
    description: 'Impressum der Cumaxx Digitalagentur.',
  }
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="pt-24 pb-16 px-6 max-w-3xl mx-auto prose prose-invert">
      <h1 className="font-display text-5xl font-bold tracking-[-0.04em]">
        Impressum
      </h1>

      <section className="mt-8">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Cuma Ceylan
          <br />
          Cumaxx – Digitale Agentur
          <br />
          Drewitzer Str. 50a
          <br />
          14478 Potsdam
          <br />
          Deutschland
        </p>
      </section>

      <section className="mt-8">
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 331 901 43 972
          <br />
          Telefax: +49 331 901 43 890
          <br />
          E-Mail: info@cumaxx.de
        </p>
      </section>

      <section className="mt-8">
        <h2>Umsatzsteuer</h2>
        <p>
          Aufgrund des Kleinunternehmerstatus wird gemäß § 19 UStG die MwSt.
          in der Rechnung nicht ausgewiesen.
        </p>
      </section>

      <section className="mt-8">
        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>
    </div>
  )
}
