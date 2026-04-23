'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react'
import { BRANCHES } from '@/lib/constants'

interface Props {
  activeId: string
  onSelect: (id: string) => void
}

export default function LocationAccordion({ activeId, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {BRANCHES.map(branch => {
        const isOpen = activeId === branch.id
        return (
          <div
            key={branch.id}
            className={`rounded-2xl border transition-colors duration-200 ${
              isOpen ? 'border-teal/50 bg-black/50' : 'border-cream/10 bg-black/30'
            }`}
          >
            {/* Header */}
            <button
              onClick={() => onSelect(branch.id)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <div>
                <h3 className="text-cream font-display text-xl font-bold">{branch.name}</h3>
                <span className="text-xs text-gold/80 font-medium">{branch.tag}</span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-cream/40 shrink-0"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            {/* Expandable content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-cream/10 pt-4 flex flex-col gap-3">
                      <a
                        href={branch.tel}
                        className="flex items-center gap-3 text-sm text-cream/70 hover:text-teal transition-colors"
                      >
                        <Phone size={15} className="text-teal shrink-0" />
                        {branch.phone}
                      </a>
                      <a
                        href={`mailto:${branch.email}`}
                        className="flex items-center gap-3 text-sm text-cream/70 hover:text-teal transition-colors"
                      >
                        <Mail size={15} className="text-teal shrink-0" />
                        {branch.email}
                      </a>
                      <a
                        href={branch.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 bg-teal text-cream text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-teal-dark transition-colors w-fit"
                      >
                        <MapPin size={13} />
                        {branch.name} Directions
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
