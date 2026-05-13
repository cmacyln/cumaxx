'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/routing'
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

interface Service {
  title: string
  description: string
}

interface ServicesBentoProps {
  title: string
  services: Service[]
  moreLabel: string
}

export function ServicesBento({ title, services, moreLabel }: ServicesBentoProps) {
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: 'var(--accent)' }}
              className="group cursor-pointer rounded-xl border border-border bg-muted/20 p-6 transition-all hover:bg-muted/40 hover:border-accent/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <ArrowIcon className="h-5 w-5 shrink-0 text-foreground/30 transition-colors group-hover:text-accent" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {service.description}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: services.length * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group rounded-xl bg-accent/5 p-6 transition-all hover:bg-accent/10 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
        style={{ border: '1px solid rgba(0,240,255,0.3)' }}
          >
            <Link
              href="/leistungen"
              className="flex h-full items-center justify-between"
            >
              <span className="font-display text-xl font-semibold tracking-tight text-accent">
                {moreLabel}
              </span>
              <ArrowIcon className="h-5 w-5 shrink-0 text-accent" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
