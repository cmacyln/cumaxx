'use client'

import { useEffect, useRef, createContext, useContext } from 'react'
import { usePathname } from '@/i18n/routing'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type LenisContextType = { lenis: Lenis | null }
const LenisContext = createContext<LenisContextType>({ lenis: null })
export const useLenis = () => useContext(LenisContext)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Reset scroll position instantly on route change
  useEffect(() => {
    window.scrollTo(0, 0)
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  )
}
