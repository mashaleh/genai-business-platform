import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export default function Badge({ children, color = '#6366f1', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body',
        className
      )}
      style={{
        background: `${color}18`,
        border: `1px solid ${color}40`,
        color: color,
      }}
    >
      {children}
    </span>
  )
}
