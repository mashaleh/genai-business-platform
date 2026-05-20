import type { Metadata } from 'next'
import GenAIOverviewClient from './overview/GenAIOverviewClient'

export const metadata: Metadata = {
  title: 'GenAI for Business — Program Overview | TechTelligence',
  description:
    'Discover TechTelligence\'s Generative AI for Business program for SMBs — a 4-module framework that turns AI literacy into measurable productivity across the UAE & GCC.',
  openGraph: {
    title: 'GenAI for Business — Program Overview',
    description: 'A 4-module Generative AI program tailored for small and medium businesses.',
    type: 'website',
  },
}

export default function GenAIOverviewPage() {
  return <GenAIOverviewClient />
}
