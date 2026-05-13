'use client'

import { usePathname } from '@/i18n/routing'
import { Link } from '@/i18n/routing'

const locales = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
] as const

export function LanguageSwitcher() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      {locales.map(({ code, label }) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          className="rounded px-1.5 py-1 text-foreground/50 transition-colors hover:text-foreground aria-[current]:text-accent"
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
