'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { BRAND } from '@/lib/constants'
import { ArrowRight, Download } from 'lucide-react'

export default function MenuCTA() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

      {/* Left: content — pure dark, no image */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="bg-dark flex flex-col justify-center px-8 sm:px-12 md:px-16 py-20"
      >
        <motion.p variants={fadeUp} className="flex items-center gap-3 text-cream text-xs font-bold uppercase tracking-[0.25em] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block" />
          Menu · Updated March 2026
          <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block" />
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-display text-5xl md:text-6xl font-bold text-cream leading-[1.05] mb-6"
        >
          See What<br />
          We&apos;re{' '}
          <span className="italic text-gold">Cooking</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-cream/65 text-base leading-relaxed mb-10 max-w-sm">
          From breakfast at 6:30 AM to late-night cocktails, our menu spans everything you crave.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-teal text-cream font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-teal-dark transition-colors"
          >
            Browse Full Menu
            <ArrowRight size={16} />
          </Link>
          <a
            href={BRAND.menuPdf}
            download
            className="inline-flex items-center gap-2 text-sm text-cream/55 hover:text-gold transition-colors py-3.5"
          >
            <Download size={14} />
            Download PDF
          </a>
        </motion.div>
      </motion.div>

      {/* Right: full-bleed restaurant image — no overlay */}
      <div className="relative h-[360px] lg:h-auto order-first lg:order-last">
        <Image
          src="/images/photoofrestaurant.jpg"
          alt="Origin Coffee restaurant interior"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover brightness-110 saturate-105"
        />
      </div>

    </section>
  )
}
