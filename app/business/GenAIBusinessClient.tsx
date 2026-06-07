'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  Clock,
  BookOpen,
  Award,
  MapPin,
  Rocket,
  Brain,
  Zap,
  Target,
  Compass,
  BarChart3,
  Shield,
  Settings,
  Users,
  ListChecks,
  ArrowRight,
  ArrowLeft,
  Building2,
  Mic2,
  Factory,
  Wrench,
  X,
  Mail,
  Lock,
  CheckCheck,
  CreditCard,
  Phone,
  CheckCircle2,
} from 'lucide-react'

/* ─────────────── DATA ─────────────── */

const STATS = [
  { value: '78%', label: 'of companies now use AI in at least one function', source: 'McKinsey 2025' },
  { value: '10×', label: 'reported ROI multiple on AI in operations' },
  { value: '$7T', label: 'potential global GDP boost from AI', source: 'Goldman Sachs' },
  { value: '97M', label: 'new jobs AI will create globally by 2030', source: 'WEF' },
]

const TRACKS = [
  {
    id: 'self',
    badge: 'Self-Paced Online',
    tag: 'Free Access',
    title: 'Learn at Your Own Pace',
    desc: '30 interactive lessons you complete on your own schedule. Ideal for individual professionals building AI literacy.',
    specs: [
      { icon: <BookOpen className="w-4 h-4" />, text: <><strong>30 lessons</strong> across 4 modules · ~9 hours total</> },
      { icon: <Sparkles className="w-4 h-4" />, text: <><strong>Fully interactive</strong> — charts, case studies, flip cards</> },
      { icon: <ListChecks className="w-4 h-4" />, text: <><strong>Personal AI Action Plan</strong> download included</> },
      { icon: <Award className="w-4 h-4" />, text: <><strong>Certificate</strong> of completion</> },
      { icon: <Zap className="w-4 h-4" />, text: <><strong>Instant access</strong> after registration</> },
    ],
    cta: 'Sign In to Start — Free',
    accent: '#06b6d4',
    accentTo: '#0891b2',
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    id: 'corp',
    badge: 'Instructor-Led Workshop',
    tag: 'Team & Corporate',
    title: 'Bring It to Your Team',
    desc: '52-slide facilitated session delivered live for your organisation. Built for L&D managers and HR directors upskilling entire teams.',
    specs: [
      { icon: <BookOpen className="w-4 h-4" />, text: <><strong>52 slides</strong> · half-day or full-day format</> },
      { icon: <Mic2 className="w-4 h-4" />, text: <><strong>Expert-facilitated</strong> by TechTelligence trainers</> },
      { icon: <Factory className="w-4 h-4" />, text: <><strong>Industry scenarios</strong> — retail, healthcare, finance</> },
      { icon: <Wrench className="w-4 h-4" />, text: <><strong>Prompt engineering</strong> & enterprise AI (RAG)</> },
      { icon: <MapPin className="w-4 h-4" />, text: <><strong>In-person or virtual</strong> · UAE & region</> },
    ],
    cta: 'Get Access for My Team',
    accent: '#f59e0b',
    accentTo: '#f97316',
    icon: <Briefcase className="w-6 h-6" />,
  },
]

const SELF_PACED_MODULES = [
  {
    n: 'Module 1',
    title: 'AI Foundations & the Business Lens',
    icon: <Brain className="w-5 h-5" />,
    lessons: [
      'What is Generative AI?',
      'The Four GenAI Model Types',
      'The AI Capability Stack',
      'AI Milestones Timeline',
      'Myth-Busting Flip Cards',
      'Case Studies: Netflix & Spotify',
      'Module 1 Summary',
    ],
    meta: '7 lessons · ~2 hrs',
    chip: 'Foundations',
    accent: '#06b6d4',
  },
  {
    n: 'Module 2',
    title: 'AI Applications Across Business Functions',
    icon: <Zap className="w-5 h-5" />,
    lessons: [
      'AI Adoption Overview',
      'AI in Marketing & Sales',
      'AI in Operations',
      'AI in HR & Talent',
      'AI in Finance',
      'AI in Customer Service',
      'Major Case Studies',
    ],
    meta: '7 lessons · ~2.5 hrs',
    chip: 'Applications',
    accent: '#f59e0b',
  },
  {
    n: 'Module 3',
    title: 'Implementing AI: Strategy & Ethics',
    icon: <Target className="w-5 h-5" />,
    lessons: [
      'AI Readiness Framework',
      'Data Quality & Governance',
      'Build vs Buy vs Partner',
      'Ethical AI Principles',
      'AI Policy & Governance',
      'Retail Scenario Walkthrough',
      'AI Readiness Self-Assessment',
    ],
    meta: '7 lessons · ~2 hrs',
    chip: 'Strategy',
    accent: '#f43f5e',
  },
  {
    n: 'Module 4',
    title: 'Future of Work & AI Leadership',
    icon: <Rocket className="w-5 h-5" />,
    lessons: [
      'Jobs & AI: The Real Picture',
      'Human-AI Teaming Models',
      'Upskilling Strategies',
      'Leading AI Transformation',
      'Building AI-Positive Culture',
      'Scenario Planning: 3 Futures',
      'Personal AI Action Plan',
      'Course Completion & Certificate',
    ],
    meta: '8 lessons · ~2.5 hrs',
    chip: 'Leadership',
    accent: '#a855f7',
  },
]

const INSTRUCTOR_MODULES = [
  {
    n: 'Module 1 — Extended',
    title: 'AI Foundations & Technology Deep Dive',
    icon: <Brain className="w-5 h-5" />,
    lessons: [
      'What is Generative AI?',
      'The AI Technology Stack',
      'How LLMs Work',
      'Four Model Architectures',
      'Multimodal AI 2025/26',
      'Agentic AI Systems',
      'GenAI Timeline 2017–2026',
      'Narrow vs General AI',
      'Myth-Busting · Hallucination & Reliability',
    ],
    meta: '10 lessons',
    chip: 'Foundations+',
    accent: '#06b6d4',
  },
  {
    n: 'Module 2 — Extended',
    title: 'Applications, Tools & Prompt Engineering',
    icon: <Zap className="w-5 h-5" />,
    lessons: [
      'AI Adoption 2025 Overview',
      'Marketing, Operations, HR, Finance, CX',
      'Product Dev, Legal, Healthcare',
      'AI Tools Landscape 2026',
      'Prompt Engineering (core skill)',
      'RAG & Enterprise AI',
      'Case Studies Deep Dive',
    ],
    meta: '13 lessons',
    chip: 'Applications+',
    accent: '#f59e0b',
  },
  {
    n: 'Module 3 — Extended',
    title: 'Strategy, Ethics, Security & Regulation',
    icon: <Shield className="w-5 h-5" />,
    lessons: [
      'AI Readiness Framework',
      'Strategy Roadmap & Data Governance',
      'Build–Buy–Partner · Measuring AI ROI',
      'Ethical AI · AI Bias Deep Dive',
      'AI Security & Deepfakes',
      'Regulatory Landscape (UAE, EU, Global)',
      '3 Industry Scenarios (Retail, Healthcare, Finance)',
      '25-Question Self-Assessment',
    ],
    meta: '13 lessons',
    chip: 'Strategy+',
    accent: '#f43f5e',
  },
  {
    n: 'Module 4 — Extended',
    title: 'Future of Work, Leadership & Emerging Trends',
    icon: <Rocket className="w-5 h-5" />,
    lessons: [
      'Jobs & AI · Human-AI Collaboration',
      'AI Skills Gap · AI Literacy Pyramid',
      'Upskilling · Becoming an AI Champion',
      'Leading AI Transformation & Culture',
      'AI Across Industries (tabbed)',
      'Emerging Trends 2026+',
      'Scenario Planning: 3 Futures',
      'Implementation Toolkit · Action Plan',
    ],
    meta: '14 lessons',
    chip: 'Leadership+',
    accent: '#a855f7',
  },
]

const OUTCOMES = [
  { icon: <Compass className="w-4 h-4" />, title: 'Speak the language of AI', desc: 'Explain GenAI concepts confidently to any stakeholder' },
  { icon: <BarChart3 className="w-4 h-4" />, title: 'Identify AI opportunities', desc: 'Map AI use cases to real workflows in your organisation' },
  { icon: <Shield className="w-4 h-4" />, title: 'Navigate AI risks', desc: 'Apply governance frameworks to manage ethics, bias and privacy' },
  { icon: <Settings className="w-4 h-4" />, title: 'Build an AI strategy', desc: 'Use the readiness framework to plan your AI roadmap' },
  { icon: <Users className="w-4 h-4" />, title: 'Lead AI transformation', desc: 'Drive adoption and build an AI-positive culture in your team' },
  { icon: <ListChecks className="w-4 h-4" />, title: 'Personal Action Plan', desc: 'Leave with a concrete 30-60-90 day AI implementation plan' },
]

const COMPARE_ROWS = [
  { key: 'Slides', self: <><strong>30 slides</strong> — focused & completable</>, corp: <><strong>52 slides</strong> — extended with deeper topics</> },
  { key: 'Duration', self: <><strong>~9 hours</strong> at your own pace</>, corp: <><strong>Half-day or full-day</strong> facilitated session</> },
  { key: 'Format', self: 'Self-directed · browser-based · no schedule', corp: 'Live · in-person or virtual · UAE & region' },
  { key: 'Best for', self: 'Managers, team leads, professionals building personal AI literacy', corp: 'L&D managers, HR directors, C-suite teams of 10–50' },
  { key: 'Cost', self: <><strong>Free</strong> — register & access instantly</>, corp: <><strong>Contact us</strong> for team pricing</> },
  { key: 'Includes', self: 'Certificate · Personal AI Action Plan download', corp: 'Prompt engineering · RAG · 3 industry scenarios · Deepfakes & security · Regulatory landscape' },
]

/* ─────────────── PAGE ─────────────── */

const SELF_PACED_URL = '/courses/self-paced.html'
const INSTRUCTOR_LED_URL = '/courses/instructor-led.html'

export default function GenAIBusinessClient() {
  const [tab, setTab] = useState<'self' | 'corp'>('self')
  const [signInOpen, setSignInOpen] = useState(false)
  const [instructorOpen, setInstructorOpen] = useState(false)

  const modules = tab === 'self' ? SELF_PACED_MODULES : INSTRUCTOR_MODULES

  const goSelf = () => setSignInOpen(true)
  const goCorp = () => setInstructorOpen(true)

  return (
    <div style={{ background: 'transparent' }} className="overflow-x-hidden">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-24 isolate overflow-hidden">
        {/* animated glow orbs */}
        <motion.div
          aria-hidden
          className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 65%)' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute top-32 -right-20 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.16) 0%, transparent 65%)' }}
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Platform logo / brand mark */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl mb-7"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(139,92,246,0.06))',
              border: '1px solid rgba(6,182,212,0.25)',
            }}
          >
            <div
              className="flex items-center justify-center w-9 h-9 rounded-xl"
              style={{
                background: 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
                boxShadow: '0 6px 18px rgba(6,182,212,0.32)',
              }}
            >
              <Sparkles className="w-4.5 h-4.5 text-[#06121c]" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="font-display font-bold text-[15px] text-white tracking-tight">
                TechTelligence
              </span>
              <span className="text-[10px] font-body font-semibold tracking-widest uppercase" style={{ color: '#67e8f9' }}>
                GenAI for Businesses
              </span>
            </div>
            <span
              className="ml-1 px-2 py-0.5 rounded-full text-[10px] font-body font-bold tracking-widest"
              style={{
                background: 'rgba(139,92,246,0.18)',
                color: '#c4b5fd',
                border: '1px solid rgba(139,92,246,0.32)',
              }}
            >
              SMB
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] mb-6"
          >
            One program.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#06b6d4 0%,#8b5cf6 60%,#ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Two ways to learn.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="font-body text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.62)' }}
          >
            Welcome to the dedicated learning platform for{' '}
            <span className="text-white font-medium">TechTelligence GenAI for Businesses — SMB</span>.
            Choose between a free self-paced online course or an instructor-led workshop for your team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mb-10"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            <span className="inline-flex items-center gap-2 text-sm">
              <BookOpen className="w-4 h-4" style={{ color: '#22d3ee' }} />
              <span className="text-white/85 font-medium">4 Modules</span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" style={{ color: '#22d3ee' }} />
              <span className="text-white/85 font-medium">~9 Hours</span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <Award className="w-4 h-4" style={{ color: '#22d3ee' }} />
              <span className="text-white/85 font-medium">Certificate on Completion</span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" style={{ color: '#22d3ee' }} />
              <span className="text-white/85 font-medium">UAE · 2026 Edition</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={goSelf}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c] transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg,#06b6d4,#0891b2)',
                boxShadow: '0 12px 32px rgba(6,182,212,0.28)',
              }}
            >
              <Rocket className="w-4 h-4" />
              Sign In — Self-Paced (Free)
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={goCorp}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c] transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg,#f59e0b,#f97316)',
                boxShadow: '0 12px 32px rgba(245,158,11,0.28)',
              }}
            >
              <Briefcase className="w-4 h-4" />
              Instructor-Led for My Team
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── STATS STRIP ─────────────── */}
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
            <StatItem key={i} stat={s} index={i} />
          ))}
        </div>
      </section>

      {/* ─────────────── TWO TRACKS ─────────────── */}
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
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.25)',
                color: '#67e8f9',
              }}
            >
              Choose Your Track
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3">
              Two ways to{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                level up
              </span>
            </h2>
            <p className="font-body text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Same 4-module framework. Different depth, format, and audience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {TRACKS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl p-8 overflow-hidden group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* top gradient bar */}
                <div
                  className="absolute top-0 inset-x-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${t.accent}, ${t.accentTo})` }}
                />
                {/* corner glow */}
                <div
                  className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -translate-y-1/2 translate-x-1/2"
                  style={{ background: `radial-gradient(circle, ${t.accent} 0%, transparent 70%)` }}
                />

                {/* tag pill top-right */}
                <span
                  className="absolute top-6 right-6 text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    background: `${t.accent}1a`,
                    color: t.accent,
                    border: `1px solid ${t.accent}33`,
                  }}
                >
                  {t.tag}
                </span>

                {/* icon + badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{ background: `${t.accent}1a`, color: t.accent }}
                  >
                    {t.icon}
                  </div>
                  <div
                    className="text-[11px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: `${t.accent}12`,
                      color: t.accent,
                      border: `1px solid ${t.accent}33`,
                    }}
                  >
                    {t.badge}
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">{t.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {t.desc}
                </p>

                <div className="space-y-2 mb-7">
                  {t.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.025)' }}
                    >
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center mt-0.5"
                        style={{ background: `${t.accent}15`, color: t.accent }}
                      >
                        {spec.icon}
                      </div>
                      <div className="text-sm font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                        {spec.text}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => (t.id === 'self' ? goSelf() : goCorp())}
                  className="group/cta w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c] transition-all duration-200 hover:brightness-110"
                  style={{
                    background: `linear-gradient(135deg, ${t.accent}, ${t.accentTo})`,
                    boxShadow: `0 10px 28px ${t.accent}30`,
                  }}
                >
                  {t.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CURRICULUM ─────────────── */}
      <section id="curriculum" className="relative py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span
              className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-body font-bold tracking-widest uppercase mb-4"
              style={{
                background: 'rgba(168,85,247,0.1)',
                border: '1px solid rgba(168,85,247,0.25)',
                color: '#c4b5fd',
              }}
            >
              Course Curriculum
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3">
              What&apos;s covered in each track
            </h2>
            <p className="font-body text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Both tracks share the same 4-module framework. Self-paced is focused and completable in your own time.
              Instructor-led goes deeper with additional topics and live discussion.
            </p>
          </motion.div>

          {/* tab toggle */}
          <div className="flex justify-center mb-10">
            <div
              className="inline-flex p-1 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <TabButton active={tab === 'self'} onClick={() => setTab('self')} accent="#06b6d4">
                <GraduationCap className="w-4 h-4" />
                Self-Paced · 30 lessons
              </TabButton>
              <TabButton active={tab === 'corp'} onClick={() => setTab('corp')} accent="#f59e0b">
                <Briefcase className="w-4 h-4" />
                Instructor-Led · 52 slides
              </TabButton>
            </div>
          </div>

          {/* modules grid */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {modules.map((mod, i) => (
              <ModuleCard key={mod.n} mod={mod} delay={i * 0.05} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────── COMPARE ─────────────── */}
      <section id="compare" className="relative py-20 lg:py-24">
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
              Side by Side
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3">
              Which track is right for you?
            </h2>
            <p className="font-body text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Both use the same 2025/2026 research framework. The difference is depth, format, and who it&apos;s designed for.
            </p>
          </motion.div>

          {/* compare table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="grid md:grid-cols-[140px_1fr_1fr]">
              {/* header */}
              <div className="hidden md:block" />
              <div
                className="p-6 flex items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.08), transparent)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(6,182,212,0.15)', color: '#22d3ee' }}
                >
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">Self-Paced Online</div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    For individual professionals
                  </div>
                </div>
              </div>
              <div
                className="p-6 flex items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.08), transparent)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24' }}
                >
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">Instructor-Led Workshop</div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    For teams & organisations
                  </div>
                </div>
              </div>

              {COMPARE_ROWS.map((row, i) => (
                <div key={row.key} className="contents">
                  <div
                    className="px-6 py-4 text-[11px] font-body font-bold uppercase tracking-widest"
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      borderBottom: i < COMPARE_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                      background: 'rgba(0,0,0,0.15)',
                    }}
                  >
                    {row.key}
                  </div>
                  <div
                    className="px-6 py-4 text-sm font-body leading-relaxed"
                    style={{
                      color: 'rgba(255,255,255,0.78)',
                      borderBottom: i < COMPARE_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    }}
                  >
                    {row.self}
                  </div>
                  <div
                    className="px-6 py-4 text-sm font-body leading-relaxed"
                    style={{
                      color: 'rgba(255,255,255,0.78)',
                      borderBottom: i < COMPARE_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                      borderLeft: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {row.corp}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── OUTCOMES ─────────────── */}
      <section id="outcomes" className="relative py-20 lg:py-24">
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
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.22)',
                color: '#67e8f9',
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

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(139,92,246,0.08), rgba(236,72,153,0.05))',
              border: '1px solid rgba(6,182,212,0.18)',
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, #06b6d4 0%, transparent 70%)' }}
            />
            <h2 className="relative font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
              Ready to become{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg,#06b6d4,#8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI-fluent
              </span>
              ?
            </h2>
            <p
              className="relative font-body text-base max-w-xl mx-auto mb-9 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Join SMBs across the UAE building the skills to lead in an AI-driven world. Pick your
              track and get started today.
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={goSelf}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c]"
                style={{
                  background: 'linear-gradient(135deg,#06b6d4,#0891b2)',
                  boxShadow: '0 12px 32px rgba(6,182,212,0.28)',
                }}
              >
                <Rocket className="w-4 h-4" />
                Sign In — Self-Paced (Free)
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={goCorp}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c]"
                style={{
                  background: 'linear-gradient(135deg,#f59e0b,#f97316)',
                  boxShadow: '0 12px 32px rgba(245,158,11,0.28)',
                }}
              >
                <Briefcase className="w-4 h-4" />
                Instructor-Led for My Team
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── MODALS ─────────────── */}
      <SelfPacedSignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
      <InstructorLedAccessModal open={instructorOpen} onClose={() => setInstructorOpen(false)} />
    </div>
  )
}

/* ─────────────── SUB COMPONENTS ─────────────── */

function StatItem({ stat, index }: { stat: { value: string; label: string; source?: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="px-6 py-8 text-center"
      style={{
        borderRight:
          index < 3 ? '1px solid rgba(129,140,248,0.08)' : 'none',
      }}
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
        {stat.value}
      </div>
      <div className="text-xs font-body leading-snug px-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
        {stat.label}
        {stat.source && (
          <span className="block text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
            ({stat.source})
          </span>
        )}
      </div>
    </motion.div>
  )
}

function TabButton({
  active,
  onClick,
  accent,
  children,
}: {
  active: boolean
  onClick: () => void
  accent: string
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-body font-semibold transition-colors duration-200"
      style={{
        color: active ? accent : 'rgba(255,255,255,0.55)',
        background: active ? `${accent}12` : 'transparent',
      }}
    >
      {children}
    </button>
  )
}

function ModuleCard({
  mod,
  delay,
}: {
  mod: {
    n: string
    title: string
    icon: React.ReactNode
    lessons: string[]
    meta: string
    chip: string
    accent: string
  }
  delay: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -3 }}
      className="relative rounded-2xl p-6 overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="absolute top-0 left-0 w-1 h-full" style={{ background: mod.accent }} />
      <div className="flex items-start gap-3 mb-4 pl-3">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: `${mod.accent}15`, color: mod.accent }}
        >
          {mod.icon}
        </div>
        <div>
          <div className="text-[10px] font-body font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {mod.n}
          </div>
          <h3 className="font-display font-bold text-base text-white leading-tight mt-0.5">{mod.title}</h3>
        </div>
      </div>
      <div className="space-y-1.5 mb-4 pl-3">
        {mod.lessons.map((l) => (
          <div
            key={l}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
            style={{
              background: 'rgba(255,255,255,0.025)',
              color: 'rgba(255,255,255,0.68)',
            }}
          >
            <span
              className="inline-block w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: mod.accent }}
            />
            <span className="text-xs font-body">{l}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-3 pl-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {mod.meta}
        </span>
        <span
          className="text-[10px] font-body font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
          style={{ background: `${mod.accent}12`, color: mod.accent }}
        >
          {mod.chip}
        </span>
      </div>
    </motion.div>
  )
}

/* ─────────────── MODAL SHELL ─────────────── */

function ModalShell({
  open,
  onClose,
  accent,
  width = 'max-w-lg',
  children,
}: {
  open: boolean
  onClose: () => void
  accent: string
  width?: string
  children: React.ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(5,5,18,0.88)', backdropFilter: 'blur(14px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.26, ease: 'easeOut' }}
            className={`relative w-full ${width} rounded-3xl overflow-hidden max-h-[92vh] overflow-y-auto`}
            style={{
              background: 'linear-gradient(160deg, #0a0f24 0%, #0d1530 100%)',
              border: `1px solid ${accent}40`,
              boxShadow: `0 30px 80px ${accent}25`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.6)',
              }}
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─────────────── FORM FIELD ─────────────── */

function Field({
  label,
  value,
  placeholder,
  onChange,
  type = 'text',
  icon,
}: {
  label: string
  value: string
  placeholder?: string
  onChange: (v: string) => void
  type?: string
  icon?: React.ReactNode
}) {
  return (
    <div>
      <label
        className="block text-xs font-body font-semibold mb-1.5"
        style={{ color: 'rgba(255,255,255,0.7)' }}
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full py-3 rounded-xl text-sm outline-none transition-colors"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#fff',
            fontFamily: 'inherit',
            paddingLeft: icon ? '2.6rem' : '0.875rem',
            paddingRight: '0.875rem',
          }}
        />
      </div>
    </div>
  )
}

/* ─────────────── SELF-PACED SIGN-IN ─────────────── */

function SelfPacedSignInModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signup')
  const [form, setForm] = useState({ fname: '', lname: '', email: '', company: '', password: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!open) {
      setSuccess(false)
      setSubmitting(false)
      setMode('signup')
      setForm({ fname: '', lname: '', email: '', company: '', password: '' })
    }
  }, [open])

  const handleSubmit = () => {
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert('Please enter a valid email address.')
      return
    }
    if (mode === 'signup' && !form.fname.trim()) {
      alert('Please enter your first name.')
      return
    }
    if (!form.password.trim() || form.password.length < 6) {
      alert('Please enter a password (min 6 characters).')
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
    }, 700)
  }

  const launch = () => {
    window.open(SELF_PACED_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <ModalShell open={open} onClose={onClose} accent="#06b6d4">
      <div className="p-8 sm:p-10">
        {!success ? (
          <>
            <div className="flex items-center gap-2 mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold uppercase tracking-widest"
                style={{
                  background: 'rgba(6,182,212,0.1)',
                  color: '#22d3ee',
                  border: '1px solid rgba(6,182,212,0.25)',
                }}
              >
                <Sparkles className="w-3 h-3" />
                Freemium · Self-Paced
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">
              {mode === 'signup' ? 'Create your account' : 'Sign in to continue'}
            </h2>
            <p className="font-body text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {mode === 'signup'
                ? 'Free forever. Just sign up to unlock all 4 modules and 30 interactive lessons.'
                : 'Welcome back — sign in to resume your learning journey.'}
            </p>

            {mode === 'signup' && (
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Field label="First Name" value={form.fname} placeholder="Sarah" onChange={(v) => setForm({ ...form, fname: v })} />
                <Field label="Last Name" value={form.lname} placeholder="Al Rashidi" onChange={(v) => setForm({ ...form, lname: v })} />
              </div>
            )}

            <div className="mb-3">
              <Field
                label="Work Email"
                type="email"
                value={form.email}
                placeholder="you@company.ae"
                onChange={(v) => setForm({ ...form, email: v })}
                icon={<Mail className="w-4 h-4" />}
              />
            </div>

            {mode === 'signup' && (
              <div className="mb-3">
                <Field label="Company" value={form.company} placeholder="e.g. ADNOC, DEWA…" onChange={(v) => setForm({ ...form, company: v })} />
              </div>
            )}

            <div className="mb-3">
              <Field
                label="Password"
                type="password"
                value={form.password}
                placeholder="Min 6 characters"
                onChange={(v) => setForm({ ...form, password: v })}
                icon={<Lock className="w-4 h-4" />}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c] transition-all duration-200 disabled:opacity-60"
              style={{
                background: 'linear-gradient(135deg,#06b6d4,#0891b2)',
                boxShadow: '0 10px 28px rgba(6,182,212,0.28)',
              }}
            >
              {submitting ? (mode === 'signup' ? 'Creating account…' : 'Signing in…') : (
                <>
                  <Rocket className="w-4 h-4" />
                  {mode === 'signup' ? 'Create Account & Continue' : 'Sign In & Continue'}
                </>
              )}
            </button>

            <p className="text-xs text-center mt-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {mode === 'signup' ? (
                <>Already have an account?{' '}
                  <button onClick={() => setMode('signin')} className="font-semibold" style={{ color: '#67e8f9' }}>
                    Sign in
                  </button>
                </>
              ) : (
                <>New to the platform?{' '}
                  <button onClick={() => setMode('signup')} className="font-semibold" style={{ color: '#67e8f9' }}>
                    Create a free account
                  </button>
                </>
              )}
            </p>
            <p className="text-[11px] text-center mt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
              No payment required for the self-paced track.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div
              className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{
                background: 'rgba(6,182,212,0.1)',
                border: '2px solid rgba(6,182,212,0.3)',
                color: '#22d3ee',
              }}
            >
              <CheckCheck className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              You&apos;re in, {form.fname || 'learner'}!
            </h3>
            <p className="font-body text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Your access is ready. Launch all 4 modules and 30 interactive lessons.
            </p>
            <button
              onClick={launch}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c]"
              style={{
                background: 'linear-gradient(135deg,#06b6d4,#0891b2)',
                boxShadow: '0 10px 28px rgba(6,182,212,0.28)',
              }}
            >
              <Rocket className="w-4 h-4" />
              Launch Self-Paced Course
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </ModalShell>
  )
}

/* ─────────────── INSTRUCTOR-LED ACCESS ─────────────── */

type CorpStep = 'choose' | 'plan' | 'signin' | 'payment' | 'confirmed'

const PLANS = [
  {
    id: 'half',
    name: 'Half-Day Workshop',
    badge: 'Most Popular',
    price: '$3,500',
    unit: '/ session',
    desc: 'Up to 25 participants · 3–4 hours · core 4-module overview',
    features: ['Up to 25 participants', '3–4 hour live session', 'In-person or virtual', 'Workshop materials included'],
    highlight: true,
  },
  {
    id: 'full',
    name: 'Full-Day Workshop',
    badge: '',
    price: '$6,000',
    unit: '/ session',
    desc: 'Up to 30 participants · 6–7 hours · full curriculum + hands-on labs',
    features: ['Up to 30 participants', '6–7 hour deep dive', 'Prompt engineering labs', 'Industry scenario exercises'],
    highlight: false,
  },
  {
    id: 'custom',
    name: 'Custom Engagement',
    badge: '',
    price: 'Custom',
    unit: 'pricing',
    desc: 'Multi-day or multi-cohort programs tailored to your team',
    features: ['Unlimited participants', 'Multi-day format', 'Custom curriculum', 'Dedicated success manager'],
    highlight: false,
  },
]

function InstructorLedAccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<CorpStep>('choose')
  const [selectedPlan, setSelectedPlan] = useState<string>('half')
  const [signin, setSignin] = useState({ fname: '', lname: '', email: '', org: '', role: '', size: '' })
  const [card, setCard] = useState({ name: '', number: '', expiry: '', cvc: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!open) {
      setStep('choose')
      setSelectedPlan('half')
      setSignin({ fname: '', lname: '', email: '', org: '', role: '', size: '' })
      setCard({ name: '', number: '', expiry: '', cvc: '' })
      setSubmitting(false)
    }
  }, [open])

  const handleSignInNext = () => {
    if (!signin.fname.trim() || !signin.email.trim() || !signin.org.trim()) {
      alert('Please fill in your name, email and organisation.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signin.email)) {
      alert('Please enter a valid email address.')
      return
    }
    setStep('payment')
  }

  const handlePay = () => {
    if (!card.name.trim() || card.number.replace(/\s/g, '').length < 12 || !card.expiry.trim() || !card.cvc.trim()) {
      alert('Please complete all card details.')
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setStep('confirmed')
    }, 900)
  }

  const plan = PLANS.find((p) => p.id === selectedPlan)!

  return (
    <ModalShell open={open} onClose={onClose} accent="#f59e0b" width={step === 'plan' ? 'max-w-3xl' : step === 'choose' ? 'max-w-2xl' : 'max-w-lg'}>
      <div className="relative p-8 sm:p-10 overflow-hidden">
        {step === 'choose' && (
          <>
            {/* Decorative background orbs */}
            <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 65%)' }} />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 w-80 h-80 rounded-full opacity-50"
              style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 65%)' }} />

            <div className="relative">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-body mb-4 transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>

              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-body font-bold uppercase tracking-widest mb-5"
                style={{
                  background: 'rgba(245,158,11,0.1)',
                  color: '#fbbf24',
                  border: '1px solid rgba(245,158,11,0.25)',
                }}
              >
                <Briefcase className="w-3 h-3" />
                Instructor-Led · For Teams
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-display font-bold text-3xl text-white mb-2 tracking-tight"
              >
                Two paths,{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #22d3ee, #fbbf24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>one outcome</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="font-body text-sm mb-8"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                Pick the path that fits your team — talk to a human first, or jump straight to booking.
              </motion.p>

              <div className="relative grid sm:grid-cols-2 gap-4 mb-2">
                {/* OR divider (desktop only) */}
                <div aria-hidden className="hidden sm:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 items-center justify-center pointer-events-none">
                  <div className="relative h-full flex items-center">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
                      style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)' }} />
                    <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest"
                      style={{
                        background: '#0c1d30',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: 'rgba(255,255,255,0.5)',
                      }}>
                      OR
                    </div>
                  </div>
                </div>

                {/* Contact card */}
                <motion.a
                  href="/contact"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col p-6 rounded-2xl transition-all duration-300 overflow-hidden"
                  style={{
                    background: 'linear-gradient(160deg, rgba(34,211,238,0.06), rgba(34,211,238,0.02))',
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}
                >
                  {/* Hover glow */}
                  <div aria-hidden
                    className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)' }} />

                  <div className="relative">
                    <span className="inline-block text-[9px] font-bold uppercase tracking-widest mb-3"
                      style={{ color: 'rgba(34,211,238,0.7)' }}>
                      Best for · Exploring
                    </span>

                    {/* Animated icon with pulsing ring */}
                    <div className="relative w-12 h-12 mb-4">
                      <div aria-hidden className="absolute inset-0 rounded-2xl animate-pulse"
                        style={{ background: 'rgba(34,211,238,0.15)' }} />
                      <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: 'rgba(34,211,238,0.18)', color: '#22d3ee' }}>
                        <Phone className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-white text-lg mb-1.5">Talk to Our Team</h3>
                    <p className="text-xs leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      Discuss a tailored workshop for your organisation with a program advisor.
                    </p>

                    {/* Trust chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {['Free consultation', 'Tailored quote', '< 1 business day'].map((chip) => (
                        <span key={chip} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px]"
                          style={{
                            background: 'rgba(34,211,238,0.08)',
                            color: 'rgba(103,232,249,0.85)',
                            border: '1px solid rgba(34,211,238,0.15)',
                          }}>
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          {chip}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold mt-auto transition-transform group-hover:gap-2.5"
                      style={{ color: '#67e8f9' }}>
                      Go to contact page
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </motion.a>

                {/* Sign In & Book card */}
                <motion.button
                  onClick={() => setStep('plan')}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col p-6 rounded-2xl text-left transition-all duration-300 overflow-hidden"
                  style={{
                    background: 'linear-gradient(160deg, rgba(245,158,11,0.12), rgba(249,115,22,0.04))',
                    border: '1px solid rgba(245,158,11,0.35)',
                    boxShadow: '0 0 0 1px rgba(245,158,11,0.05), 0 12px 32px -12px rgba(245,158,11,0.25)',
                  }}
                >
                  {/* "Most chosen" floating badge */}
                  <div className="absolute -top-2.5 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest"
                    style={{
                      background: 'linear-gradient(90deg, #fbbf24, #f97316)',
                      color: '#1a0f00',
                      boxShadow: '0 4px 12px rgba(245,158,11,0.4)',
                    }}>
                    <Sparkles className="w-2.5 h-2.5" />
                    Most chosen
                  </div>

                  {/* Hover glow */}
                  <div aria-hidden
                    className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)' }} />

                  <div className="relative">
                    <span className="inline-block text-[9px] font-bold uppercase tracking-widest mb-3"
                      style={{ color: 'rgba(251,191,36,0.8)' }}>
                      Best for · Ready to schedule
                    </span>

                    {/* Animated icon with pulsing ring */}
                    <div className="relative w-12 h-12 mb-4">
                      <div aria-hidden className="absolute inset-0 rounded-2xl animate-pulse"
                        style={{ background: 'rgba(245,158,11,0.2)' }} />
                      <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: 'rgba(245,158,11,0.22)', color: '#fbbf24' }}>
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-white text-lg mb-1.5">Book Instantly</h3>
                    <p className="text-xs leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      Pick a plan, sign in, and pay securely. Your slot is confirmed in minutes.
                    </p>

                    {/* Trust chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {['3 plan options', 'Secure checkout', 'Instant confirmation'].map((chip) => (
                        <span key={chip} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px]"
                          style={{
                            background: 'rgba(245,158,11,0.1)',
                            color: 'rgba(251,191,36,0.9)',
                            border: '1px solid rgba(245,158,11,0.2)',
                          }}>
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          {chip}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold mt-auto"
                      style={{ color: '#fbbf24' }}>
                      Choose a plan
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </motion.button>
              </div>

              {/* Bottom trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-body"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <Shield className="w-3 h-3" style={{ color: 'rgba(34,211,238,0.7)' }} />
                  Trusted by UAE & GCC teams
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Award className="w-3 h-3" style={{ color: 'rgba(245,158,11,0.7)' }} />
                  Certified TechTelligence trainers
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3 h-3" style={{ color: 'rgba(167,139,250,0.7)' }} />
                  Flexible scheduling
                </span>
              </motion.div>
            </div>
          </>
        )}

        {step === 'plan' && (
          <>
            <button
              onClick={() => setStep('choose')}
              className="inline-flex items-center gap-1.5 text-xs font-body mb-4 transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
            <h2 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">
              Choose your workshop plan
            </h2>
            <p className="font-body text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              All workshops are delivered live by TechTelligence trainers, in-person across the UAE or virtually.
            </p>

            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {PLANS.map((p) => {
                const isSelected = selectedPlan === p.id
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlan(p.id)}
                    className="relative p-5 rounded-2xl text-left transition-all duration-200"
                    style={{
                      background: isSelected ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isSelected ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.07)'}`,
                      boxShadow: isSelected ? '0 12px 32px rgba(245,158,11,0.18)' : 'none',
                    }}
                  >
                    {/* Badge row — always reserves height so all cards align */}
                    <div className="h-6 flex items-center mb-3">
                      {p.badge && (
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[9px] font-body font-bold uppercase tracking-widest"
                          style={{
                            background: 'linear-gradient(135deg,#f59e0b,#f97316)',
                            color: '#06121c',
                          }}
                        >
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="font-display font-bold text-white text-base mb-1">{p.name}</div>
                    <div className="mb-3">
                      <span className="font-display font-bold text-2xl text-white">{p.price}</span>
                      <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.unit}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {p.desc}
                    </p>
                    <div className="space-y-1.5">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-[11px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                          <CheckCircle2 className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: '#fbbf24' }} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    {isSelected && (
                      <div
                        className="absolute top-3 left-3 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: '#fbbf24' }}
                      >
                        <CheckCheck className="w-3 h-3 text-[#06121c]" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => setStep('signin')}
              className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c]"
              style={{
                background: 'linear-gradient(135deg,#f59e0b,#f97316)',
                boxShadow: '0 10px 28px rgba(245,158,11,0.28)',
              }}
            >
              Continue with {plan.name}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </>
        )}

        {step === 'signin' && (
          <>
            <button
              onClick={() => setStep('plan')}
              className="inline-flex items-center gap-1.5 text-xs font-body mb-4 transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
            <h2 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">
              Your details
            </h2>
            <p className="font-body text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Tell us about you and your team. We&apos;ll create your account and confirm the booking after payment.
            </p>

            <div
              className="px-4 py-2.5 rounded-xl mb-5 flex items-center gap-2 text-xs"
              style={{
                background: 'rgba(245,158,11,0.07)',
                border: '1px solid rgba(245,158,11,0.18)',
                color: '#fbbf24',
              }}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span><strong>{plan.name}</strong> — {plan.price} {plan.unit}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <Field label="First Name" value={signin.fname} placeholder="Ahmed" onChange={(v) => setSignin({ ...signin, fname: v })} />
              <Field label="Last Name" value={signin.lname} placeholder="Al Mansouri" onChange={(v) => setSignin({ ...signin, lname: v })} />
            </div>
            <div className="mb-3">
              <Field label="Work Email" type="email" value={signin.email} placeholder="you@company.ae" onChange={(v) => setSignin({ ...signin, email: v })} icon={<Mail className="w-4 h-4" />} />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <Field label="Organisation" value={signin.org} placeholder="Company name" onChange={(v) => setSignin({ ...signin, org: v })} />
              <Field label="Your Role" value={signin.role} placeholder="L&D Manager" onChange={(v) => setSignin({ ...signin, role: v })} />
            </div>

            <button
              onClick={handleSignInNext}
              className="group w-full mt-3 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c]"
              style={{
                background: 'linear-gradient(135deg,#f59e0b,#f97316)',
                boxShadow: '0 10px 28px rgba(245,158,11,0.28)',
              }}
            >
              Continue to Payment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </>
        )}

        {step === 'payment' && (
          <>
            <button
              onClick={() => setStep('signin')}
              className="inline-flex items-center gap-1.5 text-xs font-body mb-4 transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
            <h2 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">Payment details</h2>
            <p className="font-body text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Securely complete your booking. Stripe-powered checkout coming soon.
            </p>

            <div
              className="p-4 rounded-xl mb-5"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-body uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>Order summary</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-display font-semibold text-white">{plan.name}</span>
                <span className="text-sm font-display font-bold" style={{ color: '#fbbf24' }}>
                  {plan.price}
                </span>
              </div>
            </div>

            <div className="mb-3">
              <Field label="Name on card" value={card.name} placeholder="As it appears on card" onChange={(v) => setCard({ ...card, name: v })} />
            </div>
            <div className="mb-3">
              <Field
                label="Card number"
                value={card.number}
                placeholder="1234 5678 9012 3456"
                onChange={(v) => setCard({ ...card, number: v })}
                icon={<CreditCard className="w-4 h-4" />}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <Field label="Expiry (MM/YY)" value={card.expiry} placeholder="06 / 27" onChange={(v) => setCard({ ...card, expiry: v })} />
              <Field label="CVC" value={card.cvc} placeholder="123" onChange={(v) => setCard({ ...card, cvc: v })} />
            </div>

            <button
              onClick={handlePay}
              disabled={submitting}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-[#06121c] disabled:opacity-60"
              style={{
                background: 'linear-gradient(135deg,#f59e0b,#f97316)',
                boxShadow: '0 10px 28px rgba(245,158,11,0.28)',
              }}
            >
              {submitting ? 'Processing…' : (
                <>
                  <Lock className="w-4 h-4" />
                  Pay {plan.price} securely
                </>
              )}
            </button>
            <p className="text-[11px] text-center mt-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
              This is a sandbox checkout. Real payments will route through Stripe.
            </p>
          </>
        )}

        {step === 'confirmed' && (
          <div className="text-center py-4">
            <div
              className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{
                background: 'rgba(245,158,11,0.1)',
                border: '2px solid rgba(245,158,11,0.3)',
                color: '#fbbf24',
              }}
            >
              <CheckCheck className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">Booking confirmed!</h3>
            <p className="font-body text-sm mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Thanks {signin.fname} — your <strong className="text-white">{plan.name}</strong> reservation is in.
            </p>
            <p className="text-xs mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
              We&apos;ll email <span style={{ color: '#fbbf24' }}>{signin.email}</span> within 24 hours to schedule dates.
            </p>
            <button
              onClick={() => window.open(INSTRUCTOR_LED_URL, '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm"
              style={{
                background: 'transparent',
                border: '1px solid rgba(245,158,11,0.4)',
                color: '#fbbf24',
              }}
            >
              <BookOpen className="w-4 h-4" />
              Preview the workshop deck
            </button>
          </div>
        )}
      </div>
    </ModalShell>
  )
}
