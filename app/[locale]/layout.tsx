import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { inter, geistDisplay } from '@/lib/fonts'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { SmoothScrollProvider } from '@/components/animations/smooth-scroll-provider'
import { ScrollProgress } from '@/components/animations/scroll-progress'
import { CustomCursor } from '@/components/animations/custom-cursor'
import { BackgroundGlow } from '@/components/animations/background-glow'
import '@/app/globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      translate="no"
      className={`dark ${inter.variable} ${geistDisplay.variable} notranslate`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans antialiased overflow-x-hidden">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <SmoothScrollProvider>
              <ScrollProgress />
              <BackgroundGlow />
              <CustomCursor />
              {children}
            </SmoothScrollProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
