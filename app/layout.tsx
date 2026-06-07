import type { Metadata } from 'next'
import { Bricolage_Grotesque, Space_Grotesk } from 'next/font/google'
import GenAINavbar from '@/components/layout/GenAINavbar'
import GenAIFooter from '@/components/layout/GenAIFooter'
import { ConstellationBg } from '@/components/ui/constellation-bg'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-bricolage',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-clash-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Generative AI for Business — SMB Program | TechTelligence',
  description: 'Practical Generative AI programs for small and medium businesses across the UAE & GCC. Self-paced online learning and instructor-led workshops.',
  keywords: ['Generative AI UAE', 'AI for SMB', 'GenAI business UAE', 'AI training GCC'],
  openGraph: {
    title: 'Generative AI for Business — SMB Program',
    description: 'TechTelligence GenAI for Business: practical AI adoption for SMBs across the UAE & GCC.',
    siteName: 'TechTelligence GenAI for Business',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('genai-theme')==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ConstellationBg />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <GenAINavbar />
          <main>{children}</main>
          <GenAIFooter />
        </div>
      </body>
    </html>
  )
}
