'use client'

import { motion } from 'framer-motion'
import { KineticHeadline } from '@/components/animations/kinetic-headline'
import { MagneticButton } from '@/components/animations/magnetic-button'
import { GrainOverlay } from '@/components/animations/grain-overlay'
import { Link } from '@/i18n/routing'

interface HeroSectionProps {
  kicker: string
  prefix: string
  accentWord: string
  subhead: string
  availability: string
  ctaPrimary: string
  ctaSecondary: string
}

export function HeroSection({
  kicker,
  prefix,
  accentWord,
  subhead,
  availability,
  ctaPrimary,
  ctaSecondary,
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      <GrainOverlay />

      {/* Cyan glow — top right */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,240,255,0.18) 0%, rgba(0,240,255,0.04) 40%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Purple glow — bottom left */}
      <div
        className="absolute -bottom-1/4 -left-1/5 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(160,32,240,0.14) 0%, rgba(160,32,240,0.03) 45%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Pink accent — center right */}
      <div
        className="absolute top-1/2 -right-1/6 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,0,85,0.1) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-28 right-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/20 px-3 py-1.5 text-xs font-medium text-foreground/60">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          {availability}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6 text-sm font-medium uppercase tracking-[0.2em]"
        style={{
          background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {kicker}
      </motion.p>

      <KineticHeadline prefix={prefix} accentWord={accentWord} />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/70"
      >
        {subhead}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton>
          <Link
            href="/kontakt"
            className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
              boxShadow: '0 0 25px rgba(0,240,255,0.25)',
            }}
          >
            {ctaPrimary} →
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link
            href="/arbeiten"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {ctaSecondary}
          </Link>
        </MagneticButton>
      </motion.div>
    </section>
  )
}
