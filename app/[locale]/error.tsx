'use client'

import { useEffect } from 'react'

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console so it shows up in browser DevTools
    console.error('[Cumaxx] Client error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <h1
          className="font-display text-6xl font-bold tracking-[-0.04em]"
          style={{
            background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Oops
        </h1>
        <p className="mt-4 text-lg text-foreground/70">
          Es ist ein Fehler aufgetreten. Versuchen Sie es bitte erneut.
        </p>
        {error.digest && (
          <p className="mt-2 text-xs text-foreground/40">
            Fehler-ID: {error.digest}
          </p>
        )}
        <button
          onClick={reset}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
            boxShadow: '0 0 25px rgba(0,240,255,0.25)',
          }}
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  )
}
