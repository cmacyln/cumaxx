'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

interface Project {
  number: string
  title: string
  category: string
  slug: string
  tags: string[]
}

interface WorkGridProps {
  projects: Project[]
}

export function WorkGrid({ projects }: WorkGridProps) {
  const t = useTranslations('work')
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { key: 'all', label: t('categories.all') },
    { key: 'webdesign', label: t('categories.webdesign') },
    { key: 'ecommerce', label: t('categories.ecommerce') },
    { key: 'automation', label: t('categories.automation') },
  ]

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeFilter === f.key
                ? 'bg-accent text-accent-foreground'
                : 'bg-muted/20 text-foreground/60 hover:text-foreground hover:bg-muted/40'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/arbeiten/${project.slug}`}
                className="group relative block overflow-hidden rounded-xl border border-border bg-muted/10 p-8 hover:border-accent/30 transition-colors"
              >
                <span className="font-display text-8xl font-bold text-foreground/5 absolute right-4 top-2 select-none">
                  {project.number}
                </span>
                <div className="relative">
                  <span className="text-xs text-foreground/40 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.04em] group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center text-sm text-accent">
                    Case Study →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-foreground/40 py-12">
          Keine Projekte in dieser Kategorie.
        </p>
      )}
    </div>
  )
}
