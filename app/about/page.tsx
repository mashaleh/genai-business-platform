'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Target, Globe, FlaskConical, Users, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    body: 'Every program we build is designed with a single goal: real, measurable AI adoption for your business — not theory, not hype.',
    color: '#22d3ee',
    bg: 'rgba(6,182,212,0.1)',
  },
  {
    icon: Globe,
    title: 'Regionally Rooted',
    body: 'Built for the UAE & GCC business landscape — we understand the regulatory environment, cultural context, and market dynamics of the region.',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
  },
  {
    icon: FlaskConical,
    title: 'Practitioner-Led',
    body: 'Our programs are grounded in hands-on experience with real AI tools, real workflows, and real business outcomes — not academic exercises.',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
  },
  {
    icon: Users,
    title: 'SMB-First',
    body: 'We believe every small and medium business deserves access to the same AI capabilities as large enterprises — without the enterprise price tag.',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.1)',
  },
]

const stats = [
  { value: '50+', label: 'SMBs Onboarded' },
  { value: '15+', label: 'Industries Covered' },
  { value: '200+', label: 'Business Leaders Trained' },
  { value: 'UAE & GCC', label: 'Regional Focus' },
]

const founders = [
  {
    name: 'Dr. Osama S. Al Mashaleh',
    role: 'Co-Founder & CEO',
    title: 'Chief Executive Officer',
    bio: 'Dr. Osama leads TechTelligence\'s vision of making Generative AI accessible and practical for every business in the region. With deep expertise in AI strategy and digital transformation, he drives the programs that help SMBs move from AI curiosity to real competitive advantage.',
    tags: ['AI Strategy', 'Digital Transformation', 'SMB Advisory', 'Strategic Vision'],
    image: '/team-osama.jpg',
    initials: 'OA',
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, #06b6d4, #7c3aed)',
  },
  {
    name: 'Eng. Israa Lulu',
    role: 'Co-Founder & CAILO',
    title: 'Chief AI & Learning Officer',
    bio: 'Israa architects the learning and implementation frameworks that make AI adoption stick. Her expertise in AI systems and adult learning design ensures that every business leader who goes through the program walks away with tools and confidence they can use immediately.',
    tags: ['AI & Learning Design', 'Implementation Frameworks', 'Programme Leadership', 'Adult Learning'],
    image: '/team-israa.png',
    initials: 'IL',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #a78bfa, #ec4899)',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
}

export default function GenAIAboutPage() {
  return (
    <div style={{ background: 'transparent' }} className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 isolate overflow-hidden">
        <div aria-hidden className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 65%)' }} />
        <div aria-hidden className="absolute top-40 -right-20 w-[480px] h-[480px] rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 65%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7"
              style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)' }}>
              <Sparkles className="w-3 h-3" style={{ color: '#22d3ee' }} />
              <span className="text-[11px] font-body font-bold tracking-widest uppercase" style={{ color: '#67e8f9' }}>
                About · Generative AI for Business
              </span>
            </div>

            <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              We Believe AI Can{' '}
              <span style={{
                background: 'linear-gradient(135deg, #22d3ee 0%, #a78bfa 60%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Transform Business
              </span>
              {' '}— For Every SMB
            </h1>

            <p className="font-body text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              TechTelligence GenAI for Business was built to close the gap between AI innovation and real-world business practice — making Generative AI accessible, practical, and genuinely transformative for SMBs across the UAE &amp; GCC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="pb-16" style={{ background: 'rgba(8,21,35,0.45)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl p-6 text-center"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(6,182,212,0.12)' }}>
                <p className="font-display font-bold text-3xl sm:text-4xl mb-1"
                  style={{
                    background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  {s.value}
                </p>
                <p className="font-body text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 lg:py-28" style={{ background: 'rgba(8,21,35,0.45)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-xs font-body font-bold tracking-widest uppercase mb-4" style={{ color: '#22d3ee' }}>
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-snug mb-5">
                Closing the Gap Between AI Innovation &amp; Real Business Practice
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                TechTelligence was founded on a simple but urgent observation: Generative AI is transforming industries at speed, yet most SMBs across the UAE and GCC are watching from the sidelines — not because they lack ambition, but because the path to adoption is unclear, expensive, or too technical.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Our GenAI for Business program exists to change that. We sit alongside your leadership team, map your real workflows, and deliver a practical roadmap that turns AI from a buzzword into a business advantage — without the technical overhead.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="rounded-2xl p-8 space-y-5"
                style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.15)' }}>
                {[
                  'Practical AI adoption — not theoretical frameworks',
                  'Built for the UAE & GCC regulatory and cultural context',
                  'Programs designed for business leaders, not engineers',
                  'Outcome-focused: efficiency, revenue, and growth',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ background: 'rgba(34,211,238,0.15)' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#22d3ee' }} />
                    </div>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 lg:py-28" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14">
            <span className="inline-block text-xs font-body font-bold tracking-widest uppercase mb-4" style={{ color: '#22d3ee' }}>
              What We Stand For
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl p-7"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${v.color}22` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: v.bg, color: v.color }}>
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{v.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Co-Founders ── */}
      <section className="py-20 lg:py-28" style={{ background: 'rgba(8,21,35,0.45)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14">
            <span className="inline-block text-xs font-body font-bold tracking-widest uppercase mb-4" style={{ color: '#22d3ee' }}>
              The Team
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Meet the Co-Founders</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((f, i) => (
              <motion.div key={f.name} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl p-8"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
                    style={{ background: f.gradient }}>
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.style.display = 'flex'
                          parent.style.alignItems = 'center'
                          parent.style.justifyContent = 'center'
                          parent.innerHTML = `<span style="color:white;font-weight:700;font-size:1.25rem">${f.initials}</span>`
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white leading-tight">{f.name}</h3>
                    <p className="font-body text-xs font-bold tracking-[0.12em] uppercase mt-1" style={{ color: f.color }}>{f.role}</p>
                    <p className="font-body text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{f.title}</p>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{f.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-body font-medium"
                      style={{ background: `${f.color}14`, border: `1px solid ${f.color}40`, color: f.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28" style={{ background: 'rgba(6,182,212,0.03)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-5">
              Ready to Bring AI Into Your Business?
            </h2>
            <p className="font-body text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Join SMBs across the UAE &amp; GCC who are using Generative AI to work smarter, move faster, and grow with confidence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c]"
                style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)', boxShadow: '0 12px 32px rgba(6,182,212,0.28)' }}>
                Explore the Program
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="https://calendly.com/almashaleh-techtelligence/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm"
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.75)' }}>
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
