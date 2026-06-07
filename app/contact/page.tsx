'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'

const enquiryTypes = [
  'GenAI Program Enrollment',
  'SMB AI Strategy Session',
  'AI Tools & Automation',
  'Team AI Training',
  'Book a Demo',
  'General Enquiry',
]

const inputClass =
  'w-full px-4 py-3 rounded-xl text-sm font-body text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-1'
const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(6,182,212,0.2)',
}

export default function GenAIContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    type: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 isolate overflow-hidden"
        style={{ background: 'rgba(8,21,35,0.45)' }}
      >
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle at right, #22d3ee 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(circle at left, #a78bfa 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', color: '#22d3ee' }}
            >
              Generative AI for Business · SMB Program
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
              <span className="text-white">Let&apos;s </span>
              <span
                style={{
                  background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Get Started
              </span>
            </h1>
            <p className="font-body text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Ready to bring Generative AI into your business? Tell us about your goals and we&apos;ll map out the right path for your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-24 lg:pb-32" style={{ background: 'rgba(8,21,35,0.45)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-display font-bold text-2xl text-white mb-3">Talk to Our Team</h2>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Fill in the form and a GenAI program advisor will respond within one business day. Demos are typically scheduled within 3–5 business days.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(6,182,212,0.15)', color: '#22d3ee' }}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Email</p>
                    <a href="mailto:info@techtelligence.ae" className="font-body text-sm text-white hover:text-cyan-400 transition-colors">
                      info@techtelligence.ae
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Phone</p>
                    <a href="tel:+971522215883" className="font-body text-sm text-white hover:text-violet-400 transition-colors">
                      +971 52 221 5883
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(6,182,212,0.1)', color: '#22d3ee' }}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Location</p>
                    <p className="font-body text-sm text-white">Dubai — United Arab Emirates &amp; GCC</p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl p-5"
                style={{ background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.18)' }}
              >
                <p className="font-body text-sm font-semibold text-white mb-1">What happens next?</p>
                <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  A program advisor will review your submission and schedule a free 30-minute discovery call to understand your business needs.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(6,182,212,0.18)' }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(6,182,212,0.15)' }}>
                      <CheckCircle2 className="w-8 h-8" style={{ color: '#22d3ee' }} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                    <p className="font-body text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Thank you for your interest in the GenAI for Business program. Our team will be in touch within one business day.
                    </p>
                    <button
                      className="mt-6 font-body text-sm"
                      style={{ color: '#22d3ee' }}
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Ahmed Al-Rashidi"
                          className={inputClass}
                          style={inputStyle}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="ahmed@company.ae"
                          className={inputClass}
                          style={inputStyle}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Business / Organisation
                      </label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        className={inputClass}
                        style={inputStyle}
                        value={form.organisation}
                        onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        How Can We Help? *
                      </label>
                      <select
                        required
                        className={inputClass}
                        style={inputStyle}
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                      >
                        <option value="" disabled style={{ background: 'rgba(12,29,48,0.60)' }}>Select an option...</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t} style={{ background: 'rgba(12,29,48,0.60)' }}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your business, your team size, and what you'd like to achieve with AI..."
                        className={`${inputClass} resize-none`}
                        style={inputStyle}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 hover:opacity-90"
                      style={{
                        background: 'linear-gradient(135deg, #06b6d4, #7c3aed)',
                        color: '#fff',
                        boxShadow: '0 8px 24px rgba(6,182,212,0.25)',
                      }}
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
