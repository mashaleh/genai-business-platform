'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowLeft, ExternalLink } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  // color = dark theme (bright); lightColor = deep variant for the light bar
  { label: 'Home',       href: '/',        color: '#22d3ee', lightColor: '#0e7490', glow: 'rgba(34,211,238,0.18)'  },
  { label: 'About',      href: '/about',   color: '#a78bfa', lightColor: '#6d28d9', glow: 'rgba(167,139,250,0.18)' },
  { label: 'Contact Us', href: '/contact', color: '#f472b6', lightColor: '#be185d', glow: 'rgba(244,114,182,0.18)' },
]

export default function GenAINavbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          // family behavior: transparent at rest, frosted glass on scroll
          background: scrolled ? 'rgba(8,21,35,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'saturate(160%) blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(31,59,88,0.55)' : '1px solid transparent',
          boxShadow: scrolled ? '0 10px 30px -24px #000' : 'none',
        }}
      >
        {/* Back strip */}
        <div
          className="border-b transition-colors duration-300"
          style={{ borderColor: scrolled ? 'rgba(43,196,182,0.08)' : 'transparent', background: 'transparent' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
            {/* In-section back (sub-pages only) */}
            {!isHome ? (
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-1.5 text-[11px] font-body font-semibold transition-all duration-200 hover:gap-2"
                style={{ color: 'rgba(167,139,250,0.8)' }}
              >
                <ArrowLeft className="w-3 h-3" />
                Back
              </button>
            ) : <span />}

            {/* Return to the main flagship site — matches the ecosystem button */}
            <a href="https://techtelligence.ae" className="return-home" aria-label="Return to TechTelligence main site">
              <svg className="rh-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m3 10.8 9-7.8 9 7.8" />
                <path d="M5.2 9.2V21h13.6V9.2" />
              </svg>
              <span className="rh-label">techtelligence.ae</span>
              <span className="rh-dot" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo → GenAI home */}
            <Link href="/" className="tt-logo" aria-label="Intentional AI for Business — home">
              <span className="tt-logo-mark"><img src="/techtelligence-logo-new.png" alt="Intentional AI for Business by TechTelligence logo" /></span>
              <span className="tt-logo-text"><strong>Intentional AI<i className="tt-biz">for Business</i></strong><span>by TechTelligence</span></span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = link.href === '/' ? pathname === '/' : (pathname === link.href || pathname?.startsWith(link.href + '/'))
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="genai-tab px-4 py-2 text-sm font-body font-bold rounded-xl transition-all duration-200"
                    style={{
                      // per-tab colour via CSS vars so html.light can swap to the
                      // deep variant (bright hues + dark shadow wash out on the light bar)
                      ['--tab-c' as string]: link.color,
                      ['--tab-cl' as string]: link.lightColor,
                      opacity: active ? 1 : 0.92,
                      background: active ? link.glow : 'transparent',
                      boxShadow: active ? `0 0 12px ${link.glow}` : 'none',
                    } as React.CSSProperties}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://calendly.com/almashaleh-techtelligence/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-sm"
                style={{
                  background: 'linear-gradient(135deg,#06b6d4,#0891b2)',
                  color: '#06121c',
                  boxShadow: '0 8px 24px rgba(6,182,212,0.25)',
                }}
              >
                Book a Demo
              </a>
            </div>

            {/* Mobile cluster */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-lg text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-xs flex flex-col lg:hidden"
              style={{ background: 'rgba(8,21,35,0.92)', borderLeft: '1px solid rgba(43,196,182,0.20)' }}
            >
              <div
                className="flex items-center justify-between p-5 border-b"
                style={{ borderColor: 'rgba(6,182,212,0.12)' }}
              >
                <span className="font-display font-semibold text-white text-lg">Menu</span>
                <button
                  className="p-2 rounded-lg text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-sm font-body font-medium text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 mt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  {isHome ? (
                    <a
                      href="https://techtelligence.ae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-body font-medium transition-colors"
                      style={{ color: 'rgba(34,211,238,0.8)' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to TechTelligence.ae
                      <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                    </a>
                  ) : (
                    <button
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-body font-medium w-full transition-colors"
                      style={{ color: 'rgba(167,139,250,0.8)' }}
                      onClick={() => { setMobileOpen(false); router.back() }}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  )}
                </div>
              </nav>

              <div className="p-5 border-t" style={{ borderColor: 'rgba(6,182,212,0.12)' }}>
                <a
                  href="https://calendly.com/almashaleh-techtelligence/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-5 py-3 rounded-xl font-display font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(135deg,#06b6d4,#0891b2)',
                    color: '#06121c',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
