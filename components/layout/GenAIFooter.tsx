import Link from 'next/link'
import NextImage from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function GenAIFooter() {
  return (
    <footer
      className="border-t"
      style={{ background: '#06071a', borderColor: 'rgba(6,182,212,0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ mixBlendMode: 'screen' }}>
                <NextImage
                  src="/techtelligence-logo.png"
                  alt="TechTelligence"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <p
                  className="text-[10px] font-body font-bold tracking-widest uppercase leading-none"
                  style={{ color: '#22d3ee' }}
                >
                  GenAI for Business
                </p>
                <p
                  className="text-[9px] font-body font-medium tracking-wider uppercase leading-none mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  by TechTelligence · SMB Program
                </p>
              </div>
            </div>
            <p
              className="font-body text-xs leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              The dedicated GenAI for Business program for SMBs across the UAE &amp; MENA —
              helping small and medium enterprises harness Generative AI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[10px] font-body font-bold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Platform
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'Program Overview', href: '/' },
                { label: 'The Platform', href: '/business' },
                { label: 'About', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-body text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[10px] font-body font-bold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#22d3ee' }} />
                <a
                  href="mailto:info@techtelligence.ae"
                  className="font-body text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  info@techtelligence.ae
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#22d3ee' }} />
                <a
                  href="tel:+971522215883"
                  className="font-body text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  +971 52 221 5883
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#22d3ee' }} />
                <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Dubai — UAE &amp; MENA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>
            © {new Date().getFullYear()} TechTelligence. All rights reserved.
          </p>
          <a
            href="https://techtelligence.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs hover:text-white transition-colors"
            style={{ color: 'rgba(255,255,255,0.28)' }}
          >
            ← Back to TechTelligence.ae
          </a>
        </div>
      </div>
    </footer>
  )
}
