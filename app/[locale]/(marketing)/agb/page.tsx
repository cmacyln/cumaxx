import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return {
    title: t('agbTitle'),
    description: 'Allgemeine Geschäftsbedingungen der Cumaxx Digitalagentur.',
  }
}

export default async function AGBPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="pt-24 pb-16 px-6 max-w-3xl mx-auto prose prose-invert">
      <h1 className="font-display text-5xl font-bold tracking-[-0.04em]">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <section className="mt-8">
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen
          Cuma Ceylan (nachfolgend &bdquo;Cumaxx&rdquo;) und dem Auftraggeber.
        </p>
      </section>

      <section className="mt-8">
        <h2>2. Vertragsgegenstand</h2>
        <p>
          Gegenstand des Vertrages ist die Erbringung von Dienstleistungen in den
          Bereichen Webdesign, Webentwicklung, KI-Integration, Automatisierung und
          digitale Beratung.
        </p>
      </section>

      <section className="mt-8">
        <h2>3. Angebot und Vertragsschluss</h2>
        <p>
          Alle Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst
          durch schriftliche Auftragsbestätigung oder durch Ausführung der
          beauftragten Leistung zustande.
        </p>
      </section>

      <section className="mt-8">
        <h2>4. Vergütung und Zahlungsbedingungen</h2>
        <p>
          Die Vergütung richtet sich nach dem vereinbarten Angebot. Zahlungen sind
          innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig.
        </p>
        <p>
          Aufgrund des Kleinunternehmerstatus wird gemäß § 19 UStG die MwSt. in
          der Rechnung nicht ausgewiesen.
        </p>
      </section>

      <section className="mt-8">
        <h2>5. Mitwirkungspflichten des Auftraggebers</h2>
        <p>
          Der Auftraggeber stellt alle für die Leistungserbringung erforderlichen
          Informationen, Inhalte und Zugänge rechtzeitig zur Verfügung.
        </p>
      </section>

      <section className="mt-8">
        <h2>6. Haftung</h2>
        <p>
          Cumaxx haftet für Vorsatz und grobe Fahrlässigkeit nach den gesetzlichen
          Bestimmungen. Für leichte Fahrlässigkeit haftet Cumaxx nur bei Verletzung
          vertragswesentlicher Pflichten.
        </p>
      </section>

      <section className="mt-8">
        <h2>7. Datenschutz</h2>
        <p>
          Es gilt die Datenschutzerklärung, die auf der Website unter
          /datenschutz einsehbar ist.
        </p>
      </section>

      <section className="mt-8">
        <h2>8. Schlussbestimmungen</h2>
        <p>
          Es gilt deutsches Recht. Gerichtsstand ist Potsdam.
        </p>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section className="mt-12 border-t border-border pt-8">
        <h2>Kontaktdaten</h2>
        <p>
          Cuma Ceylan (Cumaxx)
          <br />
          Drewitzer Str. 50a
          <br />
          14478 Potsdam
          <br />
          Deutschland
          <br />
          E-Mail: info@cumaxx.de
          <br />
          Tel: +49 331 901 43 972
        </p>
      </section>
    </div>
  )
}
