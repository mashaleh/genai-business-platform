'use client'

import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  via?: string
  to?: string
}

export default function GradientText({
  children,
  className,
  from = '#6366f1',
  via = '#a855f7',
  to = '#ec4899',
}: GradientTextProps) {
  return (
    <span
      className={cn('inline-block', className)}
      style={{
        background: `linear-gradient(135deg, ${from}, ${via}, ${to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  )
}
