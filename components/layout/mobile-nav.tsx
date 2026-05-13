'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './language-switcher'
import { ThemeToggle } from './theme-toggle'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const t = useTranslations('nav')

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-40 flex flex-col bg-background px-6 pt-20"
        >
          <nav className="flex flex-col gap-6 mt-8">
            <NavLink href="/" onClick={onClose}>
              {t('home')}
            </NavLink>
            <NavLink href="/leistungen" onClick={onClose}>
              {t('leistungen')}
            </NavLink>
            <NavLink href="/arbeiten" onClick={onClose}>
              {t('arbeiten')}
            </NavLink>
            <NavLink href="/ueber-uns" onClick={onClose}>
              {t('ueberUns')}
            </NavLink>
            <NavLink href="/journal" onClick={onClose}>
              {t('journal')}
            </NavLink>
            <NavLink href="/kontakt" onClick={onClose}>
              {t('kontakt')}
            </NavLink>
          </nav>

          <div className="mt-auto mb-12 flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
            aria-label="Close menu"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-display text-3xl font-semibold tracking-tight text-foreground/80 transition-colors hover:text-accent"
    >
      {children}
    </Link>
  )
}
