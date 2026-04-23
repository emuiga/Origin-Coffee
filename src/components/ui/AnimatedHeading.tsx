'use client'

import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedHeading({ text, className = '', delay = 0 }: Props) {
  const words = text.split(' ')

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-flex overflow-hidden">
          {word.split('').map((char, ci) => {
            const globalIndex = words.slice(0, wi).join('').length + wi + ci
            const charDelay = delay + globalIndex * 0.03
            return (
              <motion.span
                key={ci}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: charDelay, duration: 0.45, ease: 'easeOut' }}
                className="inline-block"
              >
                {char}
              </motion.span>
            )
          })}
        </span>
      ))}
    </span>
  )
}
