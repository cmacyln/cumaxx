import type { MDXComponents } from 'mdx/types'
import { Link } from '@/i18n/routing'

export const components: MDXComponents = {
  h1: (props) => (
    <h1 className="font-display text-3xl font-bold tracking-[-0.04em] mt-10 mb-4" {...props} />
  ),
  h2: (props) => (
    <h2 className="font-display text-2xl font-bold tracking-[-0.04em] mt-10 mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="font-display text-xl font-semibold mt-8 mb-2" {...props} />
  ),
  p: (props) => (
    <p className="leading-relaxed text-foreground/70 mb-4" {...props} />
  ),
  ul: (props) => <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground/70" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-4 space-y-1 text-foreground/70" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
          {...props}
        />
      )
    }
    return (
      <Link href={href || '/'} className="text-accent hover:underline">
        {props.children}
      </Link>
    )
  },
  code: (props) => (
    <code className="rounded bg-muted/40 px-1.5 py-0.5 text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="rounded-xl border border-border bg-muted/20 p-4 overflow-x-auto mb-4 text-sm" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-2 border-accent pl-4 italic text-foreground/60 my-4" {...props} />
  ),
}
