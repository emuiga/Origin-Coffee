'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { OFFERS } from '@/lib/constants'

export default function Offers() {
  return (
    <section className="bg-dark pt-16 md:pt-20 pb-20 md:pb-28 border-t border-cream/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-14"
        >
          {/* Tag line — large, bright, impossible to miss */}
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-3 text-cream text-xs font-bold uppercase tracking-[0.25em] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block" />
            Recurring Weekly Offers
            <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block" />
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight"
            >
              More for{' '}
              <span className="italic text-gold">Less</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-cream/60 text-sm max-w-xs md:text-right leading-relaxed">
              Walk in, bring a friend. No voucher needed — these deals run every single week.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Cards ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {OFFERS.map((offer, i) => (
            <motion.div
              key={offer.subtitle}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Image — vivid, no dimming */}
              <Image
                src={offer.image}
                alt={offer.subtitle}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover brightness-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient: strong only at bottom third */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

              {/* Day pill — top left, large teal */}
              <div className="absolute top-5 left-5">
                <span
                  className={`inline-block text-cream font-bold uppercase tracking-wider text-sm px-4 py-2 rounded-md ${
                    i === 1 ? 'bg-gold' : 'bg-teal'
                  }`}
                >
                  {offer.day}
                </span>
              </div>

              {/* Text — bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-cream/50 text-[10px] font-bold uppercase tracking-[0.25em] mb-1">
                  {offer.title}
                </p>
                <h3 className="font-display text-3xl font-bold text-cream leading-tight mb-2">
                  {offer.subtitle}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {offer.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
