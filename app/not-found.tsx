import { Link } from '@/i18n/routing'

export default function NotFound() {
  return (
    <html lang="de" className="dark">
      <body className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground font-sans antialiased">
        <div className="text-center">
          <h1 className="font-display text-8xl font-bold tracking-[-0.04em]">
            404
          </h1>
          <p className="mt-4 text-lg text-foreground/60">Seite nicht gefunden</p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white"
            style={{
              background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
              boxShadow: '0 0 25px rgba(0,240,255,0.3)',
            }}
          >
            Zurück zur Startseite
          </Link>
        </div>
      </body>
    </html>
  )
}
