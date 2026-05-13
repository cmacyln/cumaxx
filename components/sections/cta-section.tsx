'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { MagneticButton } from '@/components/animations/magnetic-button'

interface CTASectionProps {
  headline: string
  subhead: string
  button: string
}

export function CTASection({ headline, subhead, button }: CTASectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow — cyan top-right */}
      <div
        className="absolute -top-1/3 -right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(0,240,255,0.04) 45%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Background glow — purple bottom-left */}
      <div
        className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(160,32,240,0.18) 0%, rgba(160,32,240,0.03) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-6 rounded-2xl px-8 py-20 text-center md:px-16 md:py-28 overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,240,255,0.15) 0%, rgba(160,32,240,0.12) 50%, rgba(0,240,255,0.08) 100%)',
          border: '1px solid rgba(0,240,255,0.15)',
        }}
      >
        {/* Inner glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(0,240,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(160,32,240,0.1) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10">
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] md:text-5xl max-w-2xl mx-auto">
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #00f0ff 0%, #a020f0 50%, #00f0ff 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {headline}
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg max-w-xl mx-auto">
            {subhead}
          </p>
          <div className="mt-10">
            <MagneticButton>
              <Link
                href="/kontakt"
                className="inline-flex h-14 items-center justify-center rounded-full px-10 text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
                  color: '#fff',
                  boxShadow: '0 0 30px rgba(0,240,255,0.3)',
                }}
              >
                {button} →
              </Link>
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
