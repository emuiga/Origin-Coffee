'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { heroContainer, heroItem } from '@/lib/animations'
import { BRAND } from '@/lib/constants'
import { Clock, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      <Image
        src="/images/bg.jpg"
        alt="Origin Coffee"
        fill
        sizes="100vw"
        className="object-cover object-center brightness-110 saturate-110"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 md:pb-20">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={heroItem} className="mb-5">
            <span className="inline-flex items-center gap-2 border border-gold/60 text-gold text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
              Nakuru · Eldoret · Sobea
            </span>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="font-display text-6xl md:text-7xl xl:text-8xl font-bold text-cream leading-[1] mb-5"
          >
            Great<br />
            <span className="italic text-gold">Recharge</span><br />
            Moments
          </motion.h1>

          <motion.p variants={heroItem} className="text-cream/75 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
            Six dining concepts under one roof: specialty coffee, global fusion cuisine, BBQ, artisan pizza, cocktails, and fresh-baked goods.
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap gap-4 mb-10">
            <Link
              href="#offerings"
              className="bg-teal text-cream text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-teal-dark transition-colors"
            >
              Explore Experience
            </Link>
            <Link
              href="/menu"
              className="border border-cream/40 text-cream text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-cream/10 transition-colors"
            >
              View Menu
            </Link>
          </motion.div>

          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-6 border-t border-cream/20 pt-6">
            <span className="flex items-center gap-2 text-xs text-cream/60">
              <Clock size={13} className="text-gold" />
              {BRAND.hours}
            </span>
            <span className="flex items-center gap-2 text-xs text-cream/60">
              <MapPin size={13} className="text-gold" />
              Golden Life Mall, Nakuru
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-24 right-8 md:right-14 z-10 flex flex-col items-center justify-center w-20 h-20 rounded-full border border-gold/40 bg-dark/50 backdrop-blur-sm">
        <span className="text-gold text-[9px] uppercase tracking-widest font-semibold">Since</span>
        <span className="text-cream font-display text-lg font-bold leading-tight">2018</span>
      </div>
    </section>
  )
}
