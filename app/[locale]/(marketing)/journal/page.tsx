import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { generateMetadata as buildMetadata } from '@/lib/metadata'
import fs from 'fs/promises'
import path from 'path'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return buildMetadata({
    title: t('journalTitle'),
    description: t('journalDescription'),
    locale,
    path: '/journal',
  })
}

async function getPosts(locale: string) {
  try {
    const dir = path.join(process.cwd(), 'content', 'blog', locale)
    const files = await fs.readdir(dir)
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith('.mdx'))
        .map(async (file) => {
          const content = await fs.readFile(path.join(dir, file), 'utf-8')
          const frontmatterMatch = content.match(
            /---\n([\s\S]*?)\n---/
          )
          const frontmatter: Record<string, string> = {}
          if (frontmatterMatch) {
            frontmatterMatch[1].split('\n').forEach((line) => {
              const [key, ...rest] = line.split(':')
              if (key && rest.length) {
                frontmatter[key.trim()] = rest
                  .join(':')
                  .trim()
                  .replace(/^['"]|['"]$/g, '')
              }
            })
          }
          return {
            slug: file.replace('.mdx', ''),
            title: frontmatter.title || file,
            date: frontmatter.date || '',
            description: frontmatter.description || '',
            author: frontmatter.author || '',
          }
        })
    )
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch {
    return []
  }
}

export default async function JournalPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const posts = await getPosts(locale)

  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <h1
        className="font-display text-5xl font-bold tracking-[-0.04em]"
        style={{
          background: 'linear-gradient(90deg, #00f0ff, #a020f0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Journal
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground/70">
        Artikel über Webentwicklung, Design und digitale Strategie.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="group rounded-xl border border-border bg-muted/20 p-6 transition-colors hover:border-accent/40"
          >
            <time className="text-xs text-foreground/40">{post.date}</time>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">
              {post.description}
            </p>
            <p className="mt-4 text-xs text-foreground/40">{post.author}</p>
          </Link>
        ))}

        {posts.length === 0 && (
          <p className="text-foreground/50 col-span-full text-center py-12">
            Noch keine Beiträge verfügbar.
          </p>
        )}
      </div>
    </div>
  )
}
