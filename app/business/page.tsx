import type { Metadata } from 'next'
import GenAIBusinessClient from './GenAIBusinessClient'

export const metadata: Metadata = {
  title: 'GenAI@Work by TechTelligence — Generative AI for SMBs',
  description:
    'Practical Generative AI programs for small and medium businesses. Choose self-paced online learning or instructor-led workshops, delivered across the UAE & GCC.',
  openGraph: {
    title: 'GenAI@Work by TechTelligence',
    description: 'Generative AI training for SMBs — self-paced & instructor-led tracks.',
    url: 'https://techtelligence.ae/business',
    siteName: 'TechTelligence',
    type: 'website',
  },
}

export default function GenAIBusinessPage() {
  return <GenAIBusinessClient />
}
