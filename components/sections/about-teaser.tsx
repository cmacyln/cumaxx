'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/routing'

interface AboutTeaserProps {
  title: string
  description: string
  cta: string
}

export function AboutTeaser({ title, description, cta }: AboutTeaserProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted/20 transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.08)]"
            style={{ border: '1px solid rgba(0,240,255,0.1)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-foreground/30">
                Gründer Porträt
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl"
              style={{
                background: 'linear-gradient(90deg, #e2e8f0 0%, #00f0ff 30%, #e2e8f0 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {title}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
              {description}
            </p>
            <Link
              href="/ueber-uns"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              {cta} →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
