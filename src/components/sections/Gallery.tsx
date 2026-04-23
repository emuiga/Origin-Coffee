'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { GALLERY } from '@/lib/constants'

export default function Gallery() {
  return (
    <section className="bg-dark py-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1"
      >
        {GALLERY.map((item, i) => (
          <motion.div
            key={item.src}
            variants={fadeUp}
            className={`relative overflow-hidden ${
              i === 0 || i === 3 ? 'aspect-[4/5]' : 'aspect-square'
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
              className="object-cover brightness-110 saturate-110 hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
