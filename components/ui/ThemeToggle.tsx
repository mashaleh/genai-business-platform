'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

/**
 * Light/Dark toggle. Dark is the default; light is the stem-palette theme.
 * Persists to localStorage('genai-theme'); the no-flash script in layout.tsx
 * applies the saved choice before paint.
 */
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [light, setLight] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setLight(document.documentElement.classList.contains('light'))
  }, [])

  const toggle = () => {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
    try {
      localStorage.setItem('genai-theme', next ? 'light' : 'dark')
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${className}`}
      style={{
        border: '1px solid var(--border)',
        color: 'var(--fg-muted)',
        background: 'transparent',
      }}
    >
      {mounted && light ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  )
}
