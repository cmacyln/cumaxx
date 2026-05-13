import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

const caseStudies: Record<string, {
  number: string
  title: string
  category: string
  challenge: string
  solution: string
  results: string[]
  tags: string[]
}> = {
  'greenleaf-naturkosmetik': {
    number: '01',
    title: 'Greenleaf Naturkosmetik',
    category: 'Shopify Store',
    challenge:
      'Greenleaf brauchte einen modernen Online-Shop, der ihre Bio-Kosmetikprodukte ansprechend präsentiert und ein reibungsloses Einkaufserlebnis bietet. Der bestehende Shop war veraltet, langsam und nicht mobil optimiert.',
    solution:
      'Wir haben einen vollständig angepassten Shopify Store entwickelt – mit dunklem, elegantem Design, optimiertem Checkout-Prozess und Integration von Produktfiltern, Wunschliste und Kundenbewertungen.',
    results: [
      '43% höhere Conversion-Rate',
      '28% niedrigere Absprungrate',
      'Lighthouse Performance Score: 96',
      'Mobil-Umsatz um 52% gestiegen',
    ],
    tags: ['ecommerce'],
  },
  'innotech-dashboard': {
    number: '02',
    title: 'InnoTech SaaS Dashboard',
    category: 'Web App',
    challenge:
      'InnoTech benötigte ein leistungsfähiges Dashboard für ihre interne Datenanalyse-Plattform. Die bestehende Lösung war unübersichtlich und schränkte die Produktivität des Teams ein.',
    solution:
      'Wir entwickelten eine Next.js-basierte Web App mit Echtzeit-Datenvisualisierung, anpassbaren Widgets und einem responsiven Design, das auf allen Geräten funktioniert.',
    results: [
      'Produktivität um 35% gesteigert',
      'Datenabfragen 3x schneller',
      'WCAG 2.2 AA konform',
    ],
    tags: ['webdesign'],
  },
  'medtech-platform': {
    number: '03',
    title: 'MedTech Solutions Platform',
    category: 'WordPress + Custom API',
    challenge:
      'MedTech Solutions suchte eine skalierbare Plattform für ihre Gesundheitsdienstleistungen, die Content-Management mit individuellen API-Integrationen verbindet.',
    solution:
      'Wir realisierten eine hybride Lösung: WordPress als Content-Hub mit einer benutzerdefinierten Next.js-Frontend-Schicht und API-Anbindung an das interne Buchungssystem.',
    results: [
      'Seitenladezeit unter 1,2s',
      'SEO-Traffic-Verdopplung in 3 Monaten',
      '600+ Buchungen im ersten Monat',
    ],
    tags: ['webdesign'],
  },
  'craftwerk-automation': {
    number: '04',
    title: 'Craftwerk Automation',
    category: 'n8n Workflow',
    challenge:
      'Craftwerk verbrachte täglich mehrere Stunden mit manuellen Datenübertragungen zwischen CRM, Buchhaltungstool und E-Mail-Marketing-Plattform.',
    solution:
      'Wir automatisierten alle Workflows mit n8n – von Lead-Erfassung über CRM-Aktualisierung bis hin zu personalisierten Follow-up-E-Mails. Alles läuft jetzt nahtlos im Hintergrund.',
    results: [
      '15+ Stunden pro Woche eingespart',
      'Fehlerquote um 98% reduziert',
      'Lead-Response-Zeit von 4h auf 2min',
    ],
    tags: ['automation'],
  },
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const study = caseStudies[slug]
  return {
    title: study ? `${study.title} – Case Study | Cumaxx` : 'Case Study | Cumaxx',
    description: study?.challenge.slice(0, 160),
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations('common')
  const study = caseStudies[slug]

  if (!study) {
    return (
      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="font-display text-5xl font-bold tracking-[-0.04em]">
          Case Study nicht gefunden.
        </h1>
        <Link href="/arbeiten" className="mt-6 inline-flex text-accent hover:underline">
          ← {t('allProjects')}
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      {/* Back link */}
      <Link
        href="/arbeiten"
        className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors mb-12"
      >
        ← {t('allProjects')}
      </Link>

      {/* Hero */}
      <div className="mb-20">
        <span className="font-display text-8xl font-bold text-foreground/5 select-none">
          {study.number}
        </span>
        <h1 className="font-display text-5xl font-bold tracking-[-0.04em] md:text-6xl -mt-8">
          {study.title}
        </h1>
        <p className="mt-2 text-sm text-foreground/40 uppercase tracking-wider">
          {study.category}
        </p>
      </div>

      {/* Challenge → Solution → Results */}
      <div className="grid gap-16 md:grid-cols-3 mb-20">
        <div className="md:col-span-2 space-y-16">
          <section>
            <h2 className="font-display text-2xl font-bold tracking-[-0.04em] mb-4">
              Challenge
            </h2>
            <p className="text-foreground/70 leading-relaxed">{study.challenge}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold tracking-[-0.04em] mb-4">
              Solution
            </h2>
            <p className="text-foreground/70 leading-relaxed">{study.solution}</p>
          </section>
        </div>

        <aside className="rounded-xl border border-accent/20 bg-accent/5 p-6 h-fit">
          <h3 className="font-display text-xl font-semibold text-accent">Results</h3>
          <ul className="mt-4 space-y-3">
            {study.results.map((r, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* CTA */}
      <div className="text-center border-t border-border pt-16">
        <p className="text-xl font-display font-semibold">
          Klingt spannend? Lassen Sie uns über Ihr Projekt sprechen.
        </p>
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
