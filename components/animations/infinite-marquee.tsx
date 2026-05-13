'use client'

import { motion } from 'framer-motion'

interface InfiniteMarqueeProps {
  items: string[]
}

export function InfiniteMarquee({ items }: InfiniteMarqueeProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        <ul className="flex min-w-full shrink-0 animate-marquee items-center gap-12 py-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-sm font-medium text-foreground/40 whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul
          className="flex min-w-full shrink-0 animate-marquee items-center gap-12 py-2"
          aria-hidden="true"
        >
          {items.map((item, i) => (
            <li
              key={`dup-${i}`}
              className="text-sm font-medium text-foreground/40 whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
