import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url)
}

export function navigateTo(url: string) {
  if (typeof window === 'undefined') return
  if (isExternalUrl(url)) {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = url
  }
}
