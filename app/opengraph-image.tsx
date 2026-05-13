import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Cumaxx — Digitale Produkte mit Wirkung'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '80px 100px',
          background: 'linear-gradient(135deg, #050508 0%, #0a0a14 100%)',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Gradient line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #00f0ff, #a020f0, #ff0055)',
          }}
        />

        {/* Logo / Brand */}
        <div
          style={{
            display: 'flex',
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, #00f0ff 0%, #a020f0 50%, #ff0055 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 24,
            filter: 'drop-shadow(0 0 30px rgba(0,240,255,0.3))',
          }}
        >
          Cumaxx
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 36,
            fontWeight: 400,
            color: '#e2e8f0',
            lineHeight: 1.4,
            maxWidth: 800,
            letterSpacing: '-0.02em',
          }}
        >
          Digitale Produkte mit{' '}
          <span
            style={{
              fontStyle: 'italic',
              fontFamily: 'Georgia, serif',
              background: 'linear-gradient(135deg, #00f0ff, #a020f0)',
              backgroundClip: 'text',
              color: 'transparent',
              marginLeft: 12,
            }}
          >
            Wirkung
          </span>
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 100,
            right: 100,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 20,
            color: '#64748b',
          }}
        >
          <span>cumaxx.de</span>
          <span>Potsdam · Webdesign & Entwicklung</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
