'use client'

import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #00f0ff, #a020f0, #ff0055)',
        boxShadow: '0 0 10px rgba(0,240,255,0.5), 0 0 20px rgba(0,240,255,0.2)',
      }}
    />
  )
}
