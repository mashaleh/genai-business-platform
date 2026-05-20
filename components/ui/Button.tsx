'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-medium rounded-full transition-all duration-200 select-none cursor-pointer'

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2',
  }

  const variants = {
    primary:
      'text-white shadow-lg shadow-indigo-500/20 hover:brightness-110 active:scale-[0.97]',
    ghost:
      'bg-transparent border border-[rgba(129,140,248,0.35)] text-white hover:bg-[rgba(139,92,246,0.12)] active:scale-[0.97]',
    outline:
      'bg-transparent border border-[rgba(129,140,248,0.35)] text-white hover:border-[rgba(168,85,247,0.6)] hover:bg-[rgba(168,85,247,0.08)] active:scale-[0.97]',
  }

  const primaryStyle =
    variant === 'primary'
      ? { background: 'linear-gradient(135deg, #6366f1, #a855f7)' }
      : {}

  const classes = cn(base, sizes[size], variants[variant], className, {
    'opacity-50 cursor-not-allowed': disabled,
  })

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.03 },
    whileTap: { scale: disabled ? 1 : 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  }

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          style={primaryStyle}
          {...motionProps}
        >
          {children}
        </motion.a>
      )
    }
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a className={classes} style={primaryStyle} {...motionProps}>
          {children}
        </motion.a>
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={primaryStyle}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
