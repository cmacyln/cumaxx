import { getTranslations } from 'next-intl/server'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return {
    title: t('datenschutzTitle'),
    description: 'Datenschutzerklärung der Cumaxx Digitalagentur.',
  }
}

export default async function DatenschutzPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-3xl mx-auto prose prose-invert">
      <h1 className="font-display text-5xl font-bold tracking-[-0.04em]">
        Datenschutzerklärung
      </h1>

      <section className="mt-8">
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
          werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>
      </section>

      <section className="mt-8">
        <h2>2. Verantwortliche Stelle</h2>
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
          <br />
          E-Mail: info@cumaxx.de
          <br />
          Telefon: +49 331 901 43 972
        </p>
      </section>

      <section className="mt-8">
        <h2>3. Datenerfassung auf dieser Website</h2>
        <h3>Cookies</h3>
        <p>
          Diese Website verwendet keine Cookies zu Tracking-Zwecken.
          Technisch notwendige Cookies können für den Betrieb der Seite eingesetzt werden
          (z.B. für die Sprachauswahl oder das Theme).
        </p>
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
          aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
          zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
          gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten (Vercel Inc.) erhebt und speichert automatisch Informationen
          in sogenannten Server-Log-Dateien (IP-Adresse, Browsertyp, Referrer URL, Uhrzeit).
          Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser
          Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>
      </section>

      <section className="mt-8">
        <h2>4. Analyse-Tools</h2>
        <h3>Plausible Analytics</h3>
        <p>
          Diese Website nutzt Plausible Analytics, einen datenschutzfreundlichen
          Analysedienst ohne Cookies. Es werden keine personenbezogenen Daten gespeichert
          und keine Cookies gesetzt. Plausible erfasst ausschließlich anonymisierte
          Nutzungsdaten (Seitenaufrufe, Referrer, Gerätetyp).
        </p>
      </section>

      <section className="mt-8">
        <h2>5. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
          Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
          Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich
          jederzeit unter info@cumaxx.de an uns wenden.
        </p>
        <p>
          Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
      </section>

      <section className="mt-8">
        <h2>6. Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          gehostet. Vercel verarbeitet Daten auch in Drittländern wie den USA. Wir haben
          mit Vercel einen Auftragsverarbeitungsvertrag (Data Processing Addendum) abgeschlossen,
          der den Anforderungen der DSGVO entspricht.
        </p>
      </section>
    </div>
  )
}
