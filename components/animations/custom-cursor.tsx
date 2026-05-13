'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!hasFinePointer || prefersReducedMotion) return

    setVisible(true)
  }, [])

  if (!visible) return null

  return <CustomCursorInner />
}

function CustomCursorInner() {
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-[99999] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference md:block"
      style={{
        left: 'var(--cursor-x)',
        top: 'var(--cursor-y)',
        background: 'radial-gradient(circle, rgba(0,240,255,0.6) 0%, rgba(160,32,240,0.4) 50%, transparent 70%)',
        border: '1px solid rgba(0,240,255,0.6)',
        boxShadow: '0 0 12px rgba(0,240,255,0.4)',
      }}
    />
  )
}
