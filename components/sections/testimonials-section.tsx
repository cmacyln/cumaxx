'use client'

import { motion } from 'framer-motion'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

interface TestimonialsSectionProps {
  title: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'Cumaxx hat unseren Shopify-Store komplett transformiert. Conversion-Rate ist um 40% gestiegen.',
    name: 'Anna Schmidt',
    role: 'Geschäftsführerin',
    company: 'Greenleaf Naturkosmetik',
  },
  {
    quote: 'Technisch exzellent, immer erreichbar und liefert pünktlich. Genau das, was wir als Startup brauchen.',
    name: 'Markus Weber',
    role: 'CTO',
    company: 'InnoTech Berlin',
  },
  {
    quote: 'Endlich eine Agentur, die nicht nur designt, sondern auch die technische Tiefe mitbringt.',
    name: 'Dr. Julia Brenner',
    role: 'CEO',
    company: 'MedTech Solutions',
  },
]

export function TestimonialsSection({ title }: TestimonialsSectionProps) {
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

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col justify-between rounded-xl border border-border bg-muted/20 p-6 transition-all hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.06)]"
            >
              <blockquote className="text-base leading-relaxed text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-foreground/50">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
