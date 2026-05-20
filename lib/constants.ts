export const PLATFORMS = [
  {
    name: 'TechTelligence STEM & Robotics',
    tag: 'STEM & Robotics',
    description:
      'Hands-on STEM and robotics programs designed for K-12 schools and institutions across the UAE.',
    url: 'https://stem.techtelligence.ae',
    color: 'indigo',
    hex: '#6366f1',
    features: ['K-12 Programs', 'Robotics Kits', 'Curriculum Design'],
    icon: 'cpu',
  },
  {
    name: 'TechTelligence Academy',
    tag: 'K-12 & Higher Education',
    description:
      'AI-powered academy programs for students and educators across all learning levels.',
    url: 'https://academy.techtelligence.ae',
    color: 'violet',
    hex: '#8b5cf6',
    features: ['AI Literacy', 'Educator Training', 'Certified Programs'],
    icon: 'graduation-cap',
  },
  {
    name: 'AIVerify',
    tag: 'AI Verification',
    description:
      'Enterprise-grade AI solution verification, consulting, and compliance assessment.',
    url: 'https://aiverify.techtelligence.ae',
    color: 'pink',
    hex: '#ec4899',
    features: ['AI Auditing', 'Compliance', 'Consulting'],
    icon: 'shield-check',
  },
  {
    name: 'EduAIVerify',
    tag: 'EdTech Certification',
    description:
      'Credentialing and AI certification pathways for educators and institutions.',
    url: 'https://eduaiverify.techtelligence.ae',
    color: 'lavender',
    hex: '#818cf8',
    features: ['Certifications', 'Educator Pathways', 'Institutional Programs'],
    icon: 'award',
  },
  {
    name: 'GenAI for Business — SMB',
    tag: 'For SMBs',
    description:
      'Practical Generative AI programs tailored for small and medium businesses — self-paced online learning and instructor-led workshops that turn AI literacy into real productivity.',
    // Ecosystem card → overview landing page (on main site).
    url: '/',
    // Subdomain platform URL — currently served locally; later, point this to your subdomain
    // (e.g. https://genaismb.techtelligence.ae) and the overview CTA will route there automatically.
    platformUrl: '/business',
    color: 'cyan',
    hex: '#06b6d4',
    features: ['Self-Paced Online', 'Instructor-Led Workshops', 'Prompt Engineering', 'Real SMB Case Studies'],
    icon: 'sparkles',
    fullName: 'TechTelligence GenAI for Businesses — SMB',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Ecosystem', href: '#ecosystem', hasMegaMenu: true },
  { label: 'Services', href: '/services' },
  { label: 'AI Policy', href: '/ai-policy' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    title: 'AI Consulting & Strategy',
    description:
      'We partner with organizations to design and execute AI adoption roadmaps that align with business goals — from feasibility studies to full AI transformation strategies.',
    icon: 'brain',
    color: '#6366f1',
  },
  {
    title: 'AI Training & Workshops',
    description:
      'Practical, hands-on training programs for teams and individuals at every level — from AI fundamentals to advanced machine learning and prompt engineering.',
    icon: 'users',
    color: '#8b5cf6',
  },
  {
    title: 'AI Solutions Development',
    description:
      'Custom AI-powered tools, automation systems, and intelligent applications built for your specific operational context and industry requirements.',
    icon: 'code-2',
    color: '#a855f7',
  },
  {
    title: 'EdTech Program Design',
    description:
      'End-to-end design of AI-integrated educational programs — from K-12 curriculum frameworks to higher education course architecture and learning outcomes.',
    icon: 'book-open',
    color: '#ec4899',
  },
  {
    title: 'AI Policy Advisory',
    description:
      'Expert guidance on responsible AI governance, ethical AI frameworks, and policy compliance for institutions, government bodies, and enterprise clients.',
    icon: 'scale',
    color: '#818cf8',
  },
]

export const WHY_US = [
  {
    title: 'UAE-Based AI Expertise',
    description:
      'Deeply embedded in the UAE and GCC region, we understand local context, regulatory landscape, and cultural nuance — delivering AI solutions that truly fit.',
    icon: 'map-pin',
    color: '#6366f1',
  },
  {
    title: 'End-to-End Ecosystem',
    description:
      'From consulting and training through to certification and verification — our connected platforms cover every stage of the AI adoption journey.',
    icon: 'network',
    color: '#8b5cf6',
  },
  {
    title: 'K-12 to Enterprise Coverage',
    description:
      'Uniquely positioned to serve learners and organisations at every level — from primary school robotics to enterprise AI strategy and compliance.',
    icon: 'layers',
    color: '#a855f7',
  },
  {
    title: 'Arabic & English Delivery',
    description:
      'All programs and materials are available in both Arabic and English, ensuring full accessibility across the diverse communities we serve.',
    icon: 'globe-2',
    color: '#ec4899',
  },
]

export const STATS = [
  { value: 100, suffix: '+', label: 'Schools Reached' },
  { value: 5000, suffix: '+', label: 'Students Trained' },
  { value: 50, suffix: '+', label: 'Programs Delivered' },
  { value: 5, suffix: '+', label: 'Years of Experience' },
]
