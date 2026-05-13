'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ProcessSectionProps {
  title: string
  steps: ProcessStep[]
}

export function ProcessSection({ title, steps }: ProcessSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return

    const stepElements = sectionRef.current.querySelectorAll<HTMLElement>('.process-step')
    const totalWidth = Array.from(stepElements).reduce(
      (acc, el) => acc + el.offsetWidth,
      0
    )
    const scrollDistance = totalWidth - window.innerWidth

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
      })

      gsap.to(containerRef.current, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollDistance}`,
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden" style={{ background: '#050508' }}>
      {/* Cyan glow top-right */}
      <div
        className="absolute -top-1/3 -right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(0,240,255,0.03) 45%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Purple glow bottom-left */}
      <div
        className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(160,32,240,0.12) 0%, rgba(160,32,240,0.02) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="absolute top-8 left-6 z-10 md:top-12 md:left-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold tracking-[-0.04em] md:text-4xl"
          style={{
            background: 'linear-gradient(90deg, #e2e8f0 0%, #00f0ff 50%, #e2e8f0 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </motion.h2>
      </div>

      <div ref={containerRef} className="flex h-full pt-24 md:pt-20">
        {steps.map((step, i) => (
          <div
            key={i}
            className="process-step flex h-full w-[85vw] flex-shrink-0 flex-col justify-center px-8 md:w-[60vw] md:px-16"
          >
            <span
              className="font-serif text-[10rem] leading-none font-bold select-none md:text-[14rem]"
              style={{
                background: 'linear-gradient(135deg, rgba(0,240,255,0.08) 0%, rgba(160,32,240,0.05) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {step.number}
            </span>
            <h3
              className="font-display text-3xl font-bold tracking-[-0.04em] md:text-5xl"
              style={{
                background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {step.title}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/70 md:text-lg">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
