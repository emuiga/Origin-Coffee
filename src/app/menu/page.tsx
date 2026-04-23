import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import MenuPageClient from './MenuPageClient'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Browse the full Origin Coffee menu, updated March 2026.',
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-b border-espresso/10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-espresso/80 hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} />
            Back to site
          </Link>

          <div className="flex items-center gap-1">
            <span className="font-display text-base font-bold text-espresso">Origin&nbsp;</span>
            <span className="font-display text-base font-bold italic text-gold">Coffee</span>
          </div>

          <a
            href={BRAND.menuPdf}
            download
            className="flex items-center gap-1.5 text-sm font-medium text-espresso/70 hover:text-gold transition-colors"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-5xl mx-auto px-4">
        <MenuPageClient />
      </div>
    </div>
  )
}
