'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  accentColor?: string
  hover?: boolean
}

export default function Card({
  children,
  className,
  accentColor,
  hover = true,
}: CardProps) {
  const baseStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid rgba(129,140,248,0.18)`,
    borderRadius: '16px',
  }

  if (!hover) {
    return (
      <div className={cn('p-6', className)} style={baseStyle}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={cn('p-6', className)}
      style={baseStyle}
      whileHover={{
        borderColor: accentColor ? `${accentColor}72` : 'rgba(168,85,247,0.45)',
        background: 'rgba(255,255,255,0.07)',
        y: -4,
      }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
