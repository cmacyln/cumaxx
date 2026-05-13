'use client'

import { motion } from 'framer-motion'
import { InfiniteMarquee } from '@/components/animations/infinite-marquee'

interface TrustBarProps {
  label: string
}

const partners = [
  'Shopify Partner',
  'Vercel',
  'Next.js',
  'WordPress',
  'n8n',
  'OpenAI',
  'Supabase',
  'Tailwind',
]

export function TrustBar({ label }: TrustBarProps) {
  return (
    <section
      className="py-8"
      style={{
        borderTop: '1px solid rgba(0,240,255,0.12)',
        borderBottom: '1px solid rgba(0,240,255,0.12)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em]"
          style={{
            background: 'linear-gradient(90deg, rgba(226,232,240,0.3), rgba(0,240,255,0.5), rgba(226,232,240,0.3))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {label}
        </motion.p>
        <InfiniteMarquee items={partners} />
      </div>
    </section>
  )
}
