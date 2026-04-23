'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { CONCEPTS } from '@/lib/constants'
import OfferingCard from '@/components/ui/OfferingCard'

export default function Offerings() {
  return (
    <section id="offerings" className="bg-dark pt-20 md:pt-28 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight"
          >
            Six Ways to{' '}
            <span className="italic text-gold">Recharge</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-cream/50 text-sm leading-relaxed max-w-xs md:text-right">
            Every concept is its own world — distinct atmosphere, curated menu, and a craft that runs deep.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CONCEPTS.map((concept) => (
            <motion.div key={concept.name} variants={fadeUp}>
              <OfferingCard {...concept} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
