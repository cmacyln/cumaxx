'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface KineticHeadlineProps {
  prefix: string
  accentWord: string
}

export function KineticHeadline({ prefix, accentWord }: KineticHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const letters = accentWord.split('')

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.06,
        type: 'spring' as const,
        stiffness: 150,
        damping: 15,
      },
    }),
  }

  return (
    <h1
      ref={ref}
      className="flex flex-wrap items-baseline justify-center gap-x-[0.3em] font-display text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em]"
    >
      <span className="text-foreground">{prefix}</span>
      <span
        className="inline-flex overflow-hidden italic font-serif"
        style={{
          background: 'linear-gradient(135deg, #00f0ff 0%, #a020f0 50%, #ff0055 100%)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 20px rgba(0,240,255,0.4))',
        }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={letter === ' ' ? 'w-[0.3em]' : ''}
          >
            {letter}
          </motion.span>
        ))}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 + letters.length * 0.06 + 0.2 }}
        className="text-foreground"
      >
        .
      </motion.span>
    </h1>
  )
}
