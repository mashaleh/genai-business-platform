'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Sparkles,
  Brain,
  Zap,
  Target,
  Rocket,
  Compass,
  BarChart3,
  Shield,
  Settings,
  Users,
  ListChecks,
  ArrowRight,
  Lightbulb,
  TrendingUp,
} from 'lucide-react'
import { PLATFORMS } from '@/lib/constants'
import { navigateTo } from '@/lib/utils'

const STATS = [
  { value: '78%', label: 'of companies use AI in at least one function', source: 'McKinsey 2025' },
  { value: '10×', label: 'reported ROI on AI in operations' },
  { value: '$7T', label: 'potential global GDP boost from AI', source: 'Goldman Sachs' },
  { value: '97M', label: 'new AI-driven jobs globally by 2030', source: 'WEF' },
]

const VALUES = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Designed for non-technical leaders',
    desc: 'No prior ML background needed — concepts are taught with real SMB examples, flip cards, and case studies.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Built around measurable outcomes',
    desc: 'Every module ends with a tool or framework you can apply this week — not theory.',
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: 'Grounded in the UAE & GCC context',
    desc: 'Regulatory landscape, regional case studies, and industry scenarios from retail, healthcare and finance.',
  },
]

const MODULE_OUTLINE = [
  {
    n: '01',
    icon: <Brain className="w-5 h-5" />,
    title: 'AI Foundations & the Business Lens',
    desc: 'What Generative AI really is, how the four model types differ, and how landmark companies like Netflix and Spotify built their advantage on it.',
    accent: '#06b6d4',
  },
  {
    n: '02',
    icon: <Zap className="w-5 h-5" />,
    title: 'AI Applications Across Business Functions',
    desc: 'Where AI delivers value today — across marketing, operations, HR, finance, and customer service, with real case studies you can model.',
    accent: '#f59e0b',
  },
  {
    n: '03',
    icon: <Target className="w-5 h-5" />,
    title: 'Implementing AI: Strategy & Ethics',
    desc: 'A readiness framework, data governance basics, the build-vs-buy decision, and the ethical principles every leader needs to set.',
    accent: '#f43f5e',
  },
  {
    n: '04',
    icon: <Rocket className="w-5 h-5" />,
    title: 'Future of Work & AI Leadership',
    desc: 'Upskilling strategies, human-AI teaming models, and a personal 30-60-90 day action plan you walk away with.',
    accent: '#a855f7',
  },
]

const OUTCOMES = [
  { icon: <Compass className="w-4 h-4" />, title: 'Speak the language of AI', desc: 'Explain GenAI concepts confidently to any stakeholder.' },
  { icon: <BarChart3 className="w-4 h-4" />, title: 'Identify AI opportunities', desc: 'Map AI use cases to real workflows in your organisation.' },
  { icon: <Shield className="w-4 h-4" />, title: 'Navigate AI risks', desc: 'Apply governance frameworks for ethics, bias and privacy.' },
  { icon: <Settings className="w-4 h-4" />, title: 'Build an AI strategy', desc: 'Use the readiness framework to plan your AI roadmap.' },
  { icon: <Users className="w-4 h-4" />, title: 'Lead AI transformation', desc: 'Drive adoption and build an AI-positive culture.' },
  { icon: <ListChecks className="w-4 h-4" />, title: 'Personal Action Plan', desc: 'Leave with a concrete 30-60-90 day AI implementation plan.' },
]

export default function GenAIOverviewClient() {
  const platform = PLATFORMS.find((p) => p.name === 'GenAI@Work')
  const platformUrl = platform?.url ?? '/business'

  const handleExploreMore = () => navigateTo(platformUrl)

  return (
    <div style={{ background: 'transparent' }} className="overflow-x-hidden">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 isolate overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.16) 0%, transparent 65%)' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute top-32 -right-20 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 65%)' }}
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7"
            style={{
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.25)',
            }}
          >
            <Sparkles className="w-3 h-3" style={{ color: '#22d3ee' }} />
            <span className="text-[11px] font-body font-bold tracking-widest uppercase" style={{ color: '#67e8f9' }}>
              Ecosystem · Program Overview
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
          >
            Generative AI{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#06b6d4 0%,#8b5cf6 60%,#ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              for Business
            </span>
            <br className="hidden sm:block" /> Built for SMBs.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="font-body text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.62)' }}
          >
            A practical, leader-focused program that helps small and medium businesses across the
            UAE & GCC understand, adopt, and govern Generative AI — without the technical baggage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <button
              onClick={handleExploreMore}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c] transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg,#06b6d4,#0891b2)',
                boxShadow: '0 12px 32px rgba(6,182,212,0.28)',
              }}
            >
              Explore the Full Platform
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── WHY IT MATTERS / STATS ─────────────── */}
      <section
        className="relative"
        style={{
          borderTop: '1px solid rgba(129,140,248,0.12)',
          borderBottom: '1px solid rgba(129,140,248,0.12)',
          background: 'rgba(13,15,42,0.5)',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="px-6 py-8 text-center"
              style={{ borderRight: i < 3 ? '1px solid rgba(129,140,248,0.08)' : 'none' }}
            >
              <div
                className="font-display font-bold text-3xl sm:text-4xl mb-1"
                style={{
                  background: 'linear-gradient(135deg,#06b6d4,#a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <div className="text-xs font-body leading-snug px-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {s.label}
                {s.source && (
                  <span className="block text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    ({s.source})
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────── WHAT IS THE PROGRAM ─────────────── */}
      <section className="relative py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-body font-bold tracking-widest uppercase mb-4"
              style={{
                background: 'rgba(168,85,247,0.1)',
                border: '1px solid rgba(168,85,247,0.25)',
                color: '#c4b5fd',
              }}
            >
              About the Program
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
              An end-to-end framework for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI fluency
              </span>
            </h2>
            <p className="font-body text-base max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              The program is purpose-built for SMB founders, managers, and team leads who need
              to make confident decisions about Generative AI — not become engineers. It covers
              the four foundations you need: <span className="text-white font-medium">what AI is</span>,{' '}
              <span className="text-white font-medium">where it creates value</span>,{' '}
              <span className="text-white font-medium">how to implement it responsibly</span>, and{' '}
              <span className="text-white font-medium">how to lead your team through it</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4"
                  style={{ background: 'rgba(6,182,212,0.12)', color: '#22d3ee' }}
                >
                  {v.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{v.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PROGRAM OUTLINE ─────────────── */}
      <section className="relative py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-body font-bold tracking-widest uppercase mb-4"
              style={{
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.25)',
                color: '#67e8f9',
              }}
            >
              Program Outline
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3">
              Four modules, one journey
            </h2>
            <p className="font-body text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              From foundations to leadership — a complete arc designed for real business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {MODULE_OUTLINE.map((m, i) => (
              <motion.div
                key={m.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: m.accent }} />
                <div className="flex items-start gap-4 pl-3">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${m.accent}15`, color: m.accent }}
                  >
                    {m.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[10px] font-body font-bold tracking-widest"
                        style={{ color: m.accent }}
                      >
                        MODULE {m.n}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">{m.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── OUTCOMES ─────────────── */}
      <section className="relative py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-body font-bold tracking-widest uppercase mb-4"
              style={{
                background: 'rgba(236,72,153,0.1)',
                border: '1px solid rgba(236,72,153,0.25)',
                color: '#f9a8d4',
              }}
            >
              Learning Outcomes
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3">
              What you&apos;ll walk away with
            </h2>
            <p className="font-body text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Practical, immediately applicable skills — not theory for theory&apos;s sake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OUTCOMES.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(6,182,212,0.12)', color: '#22d3ee' }}
                >
                  {o.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base mb-1">{o.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {o.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── EXPLORE PLATFORM CTA ─────────────── */}
      <section className="relative pb-24 lg:pb-32 pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.08), rgba(236,72,153,0.06))',
              border: '1px solid rgba(6,182,212,0.22)',
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, #06b6d4 0%, transparent 70%)' }}
            />

            <div
              className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Sparkles className="w-3 h-3" style={{ color: '#22d3ee' }} />
              <span className="text-[10px] font-body font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Dedicated Platform
              </span>
            </div>

            <h2 className="relative font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
              Ready to{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                start learning?
              </span>
            </h2>
            <p
              className="relative font-body text-base sm:text-lg max-w-xl mx-auto mb-9 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Continue to the dedicated learning platform — pick your track, sign in, and begin.
            </p>
            <div className="relative">
              <button
                onClick={handleExploreMore}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-base text-[#06121c]"
                style={{
                  background: 'linear-gradient(135deg,#06b6d4,#0891b2)',
                  boxShadow: '0 14px 36px rgba(6,182,212,0.32)',
                }}
              >
                Explore the Full Platform
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="relative mt-6">
              <Link
                href="/#ecosystem"
                className="text-xs font-body inline-flex items-center gap-1 transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                ← Back to ecosystem
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
