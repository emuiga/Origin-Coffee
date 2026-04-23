'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { STATS } from '@/lib/constants'

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">

        {/* Left: image — vivid, no overlay */}
        <div className="relative h-[380px] lg:h-auto order-first">
          <Image
            src="/images/restaurantphoto.jpg"
            alt="Origin Coffee restaurant"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover brightness-110 saturate-105"
          />
        </div>

        {/* Right: dark panel */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="bg-dark flex flex-col justify-center px-6 sm:px-10 md:px-16 py-14"
        >
          <motion.p variants={fadeUp} className="flex items-center gap-3 text-cream text-xs font-bold uppercase tracking-[0.25em] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block" />
            Our Story
            <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block" />
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-6"
          >
            Born in Kenya,<br />
            <span className="italic text-gold">Inspired</span> by the World
          </motion.h2>

          <motion.p variants={fadeUp} className="text-cream/65 text-base leading-relaxed mb-4">
            Founded in 2018 in the heart of Nakuru, Origin Coffee grew from a simple vision: to create a space where Kenyans could experience world-class dining without leaving home.
          </motion.p>

          <motion.p variants={fadeUp} className="text-cream/65 text-base leading-relaxed mb-12">
            From specialty coffee to wood-fired artisan pizzas and curated wine selections, every concept is crafted with intention, community, and a deep love for Kenyan culture.
          </motion.p>

          <motion.div
            ref={statsRef}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-8"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className={`border-l-2 border-teal pl-4 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="font-display text-3xl font-bold text-gold">{stat.num}</p>
                <p className="text-xs text-cream/50 mt-1 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
