'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/routing'

interface WorkItem {
  number: string
  title: string
  category: string
  slug: string
}

interface SelectedWorkProps {
  title: string
  works: WorkItem[]
  allProjectsLabel: string
}

export function SelectedWork({ title, works, allProjectsLabel }: SelectedWorkProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl"
          style={{
            background: 'linear-gradient(90deg, #e2e8f0 0%, #00f0ff 40%, #e2e8f0 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative ${i === 0 || i === 3 ? 'md:col-span-2 md:flex md:flex-row-reverse' : ''}`}
            >
              <Link href={`/arbeiten/${work.slug}`} className="block w-full">
                <div className="relative overflow-hidden rounded-xl border border-border bg-muted/30 transition-all hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.06)]">
                  <span
                    className="absolute top-4 left-4 font-serif text-7xl italic pointer-events-none select-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(160,32,240,0.1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {work.number}
                  </span>
                  <div className="flex min-h-[280px] items-center justify-center p-8">
                    <div className="h-48 w-full rounded-lg bg-gradient-to-br from-muted to-accent/5 transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">
                      {work.category}
                    </p>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/arbeiten"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-accent"
          >
            {allProjectsLabel} →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
