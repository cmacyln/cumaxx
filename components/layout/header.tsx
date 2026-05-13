'use client'

import { useState } from 'react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './language-switcher'
import { ThemeToggle } from './theme-toggle'
import { MobileNav } from './mobile-nav'
import { Button } from '@/components/ui/button'

export function Header() {
  const t = useTranslations('nav')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
      style={{
        borderBottom: '1px solid rgba(0,240,255,0.15)',
        boxShadow: '0 1px 20px rgba(0,240,255,0.05)',
      }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight"
        >
          Cumaxx
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            {t('home')}
          </Link>
          <Link
            href="/leistungen"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            {t('leistungen')}
          </Link>
          <Link
            href="/arbeiten"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            {t('arbeiten')}
          </Link>
          <Link
            href="/ueber-uns"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            {t('ueberUns')}
          </Link>
          <Link
            href="/journal"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            {t('journal')}
          </Link>
          <Link
            href="/kontakt"
            className="text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            {t('kontakt')}
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
