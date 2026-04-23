import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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

      {/* Header */}
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-espresso/10">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

          {/* Back */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-espresso/70 hover:text-espresso transition-colors shrink-0"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Back</span>
          </Link>

          {/* Logo / wordmark */}
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Origin Coffee" width={28} height={28} className="object-contain" />
            <span className="font-display font-bold text-espresso text-sm sm:text-base">
              Origin <span className="italic text-gold">Coffee</span>
            </span>
          </div>

          {/* Download */}
          <a
            href={BRAND.menuPdf}
            download
            className="flex items-center gap-1.5 text-sm font-medium text-espresso/65 hover:text-teal transition-colors shrink-0"
          >
            <Download size={15} />
            <span className="hidden sm:inline">Download</span>
          </a>

        </div>
      </header>

      {/* PDF Viewer */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        <MenuPageClient />
      </div>

    </div>
  )
}
