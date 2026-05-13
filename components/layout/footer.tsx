import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './language-switcher'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer
      className="bg-muted/30"
      style={{
        borderTop: '1px solid rgba(0,240,255,0.12)',
        boxShadow: '0 -1px 20px rgba(0,240,255,0.03)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight"
            >
              Cumaxx
            </Link>
            <p className="mt-3 max-w-xs text-sm text-foreground/60">
              {t('description')}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/50">
              {t('navigation')}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-foreground/70 transition-colors hover:text-accent">{t('home')}</Link></li>
              <li><Link href="/leistungen" className="text-sm text-foreground/70 transition-colors hover:text-accent">{t('leistungen')}</Link></li>
              <li><Link href="/arbeiten" className="text-sm text-foreground/70 transition-colors hover:text-accent">{t('arbeiten')}</Link></li>
              <li><Link href="/ueber-uns" className="text-sm text-foreground/70 transition-colors hover:text-accent">{t('ueberUns')}</Link></li>
              <li><Link href="/journal" className="text-sm text-foreground/70 transition-colors hover:text-accent">{t('journal')}</Link></li>
              <li><Link href="/kontakt" className="text-sm text-foreground/70 transition-colors hover:text-accent">{t('kontakt')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/50">
              {t('social')}
            </h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/cumaxx" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 transition-colors hover:text-accent">GitHub</a></li>
              <li><a href="https://linkedin.com/company/cumaxx" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 transition-colors hover:text-accent">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/cumaxx.de" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 transition-colors hover:text-accent">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/50">
              {t('legal')}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-sm text-foreground/70 transition-colors hover:text-accent">{t('impressum')}</Link></li>
              <li><Link href="/datenschutz" className="text-sm text-foreground/70 transition-colors hover:text-accent">{t('datenschutz')}</Link></li>
              <li><Link href="/agb" className="text-sm text-foreground/70 transition-colors hover:text-accent">{t('agb')}</Link></li>
            </ul>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-foreground/40">
          {t('copyright')}
        </div>
      </div>
    </footer>
  )
}
