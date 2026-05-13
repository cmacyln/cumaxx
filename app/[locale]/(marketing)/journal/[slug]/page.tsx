import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs/promises'
import path from 'path'
import { components } from '@/components/blog/mdx-components'

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

async function getPost(locale: string, slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', locale, `${slug}.mdx`)
    const content = await fs.readFile(filePath, 'utf-8')
    return content
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params
  const content = await getPost(locale, slug)
  const titleMatch = content?.match(/title:\s*['"]?(.+?)['"]?\n/)
  const descMatch = content?.match(/description:\s*['"]?(.+?)['"]?\n/)
  return {
    title: titleMatch ? `${titleMatch[1]} | Cumaxx Journal` : 'Journal Post | Cumaxx',
    description: descMatch?.[1]?.slice(0, 160) || 'Artikel aus dem Cumaxx Journal.',
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const content = await getPost(locale, slug)

  if (!content) {
    return (
      <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="font-display text-5xl font-bold tracking-[-0.04em]">
          Beitrag nicht gefunden.
        </h1>
        <Link href="/journal" className="mt-6 inline-flex text-accent hover:underline">
          ← Zurück zum Journal
        </Link>
      </div>
    )
  }

  const frontmatterMatch = content.match(/---\n([\s\S]*?)\n---/)
  const frontmatter: Record<string, string> = {}
  let title = slug
  let date = ''
  let author = ''

  if (frontmatterMatch) {
    frontmatterMatch[1].split('\n').forEach((line) => {
      const [key, ...rest] = line.split(':')
      if (key && rest.length) {
        const value = rest.join(':').trim().replace(/^['"]|['"]$/g, '')
        frontmatter[key.trim()] = value
        if (key.trim() === 'title') title = value
        if (key.trim() === 'date') date = value
        if (key.trim() === 'author') author = value
      }
    })
  }

  const bodyContent = content.replace(/---\n[\s\S]*?\n---/, '').trim()

  return (
    <article className="pt-24 pb-16 px-6 max-w-3xl mx-auto">
      <Link
        href="/journal"
        className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors mb-12"
      >
        ← Zurück zum Journal
      </Link>

      <header className="mb-12">
        {date && <time className="text-xs text-foreground/40">{date}</time>}
        <h1 className="mt-2 font-display text-4xl font-bold tracking-[-0.04em] md:text-5xl">
          {title}
        </h1>
        {author && <p className="mt-2 text-sm text-foreground/40">{author}</p>}
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXRemote source={bodyContent} components={components} />
      </div>

      <div className="mt-16 border-t border-border pt-12 text-center">
        <p className="text-xl font-display font-semibold">
          Haben Sie ein Projekt im Kopf?
        </p>
        <Link
          href="/kontakt"
          className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground hover:bg-accent/90"
        >
          Projekt starten →
        </Link>
      </div>
    </article>
  )
}
