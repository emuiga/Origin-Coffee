'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { BRANCHES, BRAND } from '@/lib/constants'
import LocationAccordion from '@/components/ui/LocationAccordion'
import { Clock } from 'lucide-react'

const Map = dynamic(() => import('@/components/ui/Map'), { ssr: false })

export default function Locations() {
  const [activeId, setActiveId] = useState('nakuru')
  const activeBranch = BRANCHES.find(b => b.id === activeId) ?? BRANCHES[0]

  return (
    <section id="locations">

      {/* Full-bleed image — pure, bright, no text on top */}
      <div className="relative h-[45vh] min-h-[280px] max-h-[480px] overflow-hidden">
        <Image
          src="/images/bbq2.jpg"
          alt="Origin Coffee BBQ"
          fill
          sizes="100vw"
          className="object-cover brightness-115 saturate-110"
        />
        {/* Soft bottom fade into the dark panel below */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* Dark panel — heading + accordion + map */}
      <div className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Heading — in the dark, always legible */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-10 pb-10"
          >
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-3 text-cream text-xs font-bold uppercase tracking-[0.25em] mb-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block" />
              Find Us
              <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block" />
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-3"
            >
              Three Locations,{' '}
              <span className="italic text-gold">One Family</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm text-cream/55">
              <Clock size={14} className="text-teal shrink-0" />
              {BRAND.hours}
            </motion.p>
          </motion.div>

          {/* Accordion + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start pb-20">
            <div className="lg:col-span-2">
              <LocationAccordion activeId={activeId} onSelect={setActiveId} />
            </div>
            <div className="lg:col-span-3 h-[300px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-cream/10">
              <Map branch={activeBranch} />
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
